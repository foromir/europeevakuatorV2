import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const dist = path.join(root, "dist");
const output = path.join(root, "site.zip");
const unpackTemplate = path.join(__dirname, "unpack.php");
const unpackOutput = path.join(root, "unpack.php");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  for (const line of fs.readFileSync(filePath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return env;
}

function resolveDeployToken(env) {
  if (env.DEPLOY_TOKEN) return env.DEPLOY_TOKEN;
  return crypto.randomBytes(24).toString("hex");
}

if (!fs.existsSync(dist)) {
  console.error("dist/ not found — run npm run build first");
  process.exit(1);
}

const env = { ...loadEnv(path.join(root, ".env")), ...loadEnv(path.join(root, ".env.local")) };
const deployToken = resolveDeployToken(env);
const siteOrigin = env.VITE_SITE_ORIGIN?.replace(/\/$/, "") ?? "https://your-domain.org";

if (fs.existsSync(output)) {
  fs.unlinkSync(output);
}

const result = spawnSync(
  "zip",
  ["-r", output, ".", "-x", "server/*", "-x", "server/**"],
  { cwd: dist, stdio: "inherit" },
);

if (result.status !== 0) {
  console.error("zip failed — install zip (macOS/Linux) or use 7-Zip on Windows");
  process.exit(result.status ?? 1);
}

const phpTemplate = fs.readFileSync(unpackTemplate, "utf-8");
const phpEscapedToken = deployToken.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
fs.writeFileSync(
  unpackOutput,
  phpTemplate.replace("__DEPLOY_TOKEN__", phpEscapedToken),
  "utf-8",
);

const sizeMb = (fs.statSync(output).size / (1024 * 1024)).toFixed(2);
const deployUrl = `${siteOrigin}/unpack.php?token=${deployToken}`;

console.log(`\nCreated site.zip (${sizeMb} MB)`);
console.log("Created unpack.php (ready to upload)\n");
console.log("Upload to FTP (public_html):");
console.log("  - site.zip");
console.log("  - unpack.php");
console.log("\nOpen in browser:");
console.log(`  ${deployUrl}`);
