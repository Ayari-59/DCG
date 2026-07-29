/**
 * Extrait le texte d'un PDF, page par page.
 *
 *   node scripts/extract-pdf.mjs <fichier.pdf> [sortie.txt]
 *
 * Sert à dépouiller les rapports du jury, diffusés en PDF.
 */
import fs from "node:fs";
const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
const [entree, sortie = "extrait.txt"] = process.argv.slice(2);
if (!entree) {
  console.error("Usage: node scripts/extract-pdf.mjs <fichier.pdf> [sortie.txt]");
  process.exit(1);
}
const data = new Uint8Array(fs.readFileSync(entree));
const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
let out = "";
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const c = await page.getTextContent();
  out += `\n===== PAGE ${i} =====\n` + c.items.map((x) => x.str).join(" ").replace(/[ \t]+/g, " ");
}
fs.writeFileSync(sortie, out, "utf8");
console.log(`${doc.numPages} pages, ${out.length} caractères → ${sortie}`);
