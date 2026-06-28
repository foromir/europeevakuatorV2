import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assets = path.join(root, "assets", "images");

const GALLERY_WIDTHS = [560, 1120];
const BLOG_WIDTHS = [360, 720];

async function optimizeJpegDir(dir, widths) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter((name) => /\.jpe?g$/i.test(name));
  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.jpe?g$/i, "");

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(output);
      console.log(`  ${path.relative(root, output)}`);
    }
  }
}

async function optimizeStripIcon() {
  const input = path.join(root, "assets", "icons", "strip-icon-transport-europe.webp");
  const output = path.join(root, "assets", "icons", "strip-icon-transport-europe-112.webp");
  await sharp(input).resize(112, 112).webp({ quality: 85 }).toFile(output);
  console.log(`  ${path.relative(root, output)}`);
}

console.log("Optimizing gallery images…");
await optimizeJpegDir(path.join(assets, "gallery"), GALLERY_WIDTHS);

console.log("Optimizing blog images…");
await optimizeJpegDir(path.join(assets, "blog"), BLOG_WIDTHS);

console.log("Optimizing strip icon…");
await optimizeStripIcon();

console.log("Done.");
