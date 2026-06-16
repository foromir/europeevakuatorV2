import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");
const serverEntry = path.join(dist, "server", "entry-server.js");

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html not found — run vite build first");
}
if (!fs.existsSync(serverEntry)) {
  throw new Error("dist/server/entry-server.js not found — run vite build --ssr first");
}

const template = fs.readFileSync(templatePath, "utf-8");
const { render, getPrerenderPaths, generateSitemap, generateRobotsTxt } = await import(
  pathToFileURL(serverEntry).href
);

const paths = getPrerenderPaths();

for (const url of paths) {
  const { html, head, htmlLang } = render(url);
  const pageHtml = template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html)
    .replace('<html lang="de">', `<html lang="${htmlLang}">`);

  const relative = url.replace(/^\//, "");
  const outFile = relative.endsWith(".html")
    ? path.join(dist, relative)
    : path.join(dist, relative, "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, pageHtml);
  console.log(`  prerendered ${url}`);
}

fs.writeFileSync(path.join(dist, "sitemap.xml"), generateSitemap(paths));
fs.writeFileSync(path.join(dist, "robots.txt"), generateRobotsTxt());
console.log("  wrote sitemap.xml and robots.txt");
