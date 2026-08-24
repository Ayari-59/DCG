/**
 * Génération des icônes PWA à partir du SVG source.
 * Usage : node scripts/generate-pwa-icons.mjs
 * Produit : public/icons/icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png
 */
import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";

const svg = readFileSync("app/icon.svg");
const outDir = "public/icons";
mkdirSync(outDir, { recursive: true });

const sizes = [
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(`${outDir}/${name}`);
  console.log(`✓ ${outDir}/${name} (${size}x${size})`);
}

// Maskable : le logo sur fond navy avec 20% de safe area
const padding = Math.round(512 * 0.2);
const logoSize = 512 - padding * 2;
const logoBuffer = await sharp(svg).resize(logoSize, logoSize).png().toBuffer();

await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#0e2244" },
})
  .composite([{ input: logoBuffer, left: padding, top: padding }])
  .png()
  .toFile(`${outDir}/icon-maskable-512.png`);

console.log(`✓ ${outDir}/icon-maskable-512.png (512x512 maskable)`);
