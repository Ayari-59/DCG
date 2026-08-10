/**
 * Extraction des fiches de la banque de notions depuis le HTML source.
 * Usage : node scripts/convert-notions.mjs chemin/vers/fichier.html
 * Produit : lib/content/notions/<slug>.generated.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { load } from "cheerio";

const src = process.argv[2];
if (!src) {
  console.error("Usage : node scripts/convert-notions.mjs <fichier.html>");
  process.exit(1);
}

const html = readFileSync(src, "utf-8");
const $ = load(html);

const fiches = [];

$("article.card").each((_, el) => {
  const $el = $(el);
  const cat = $el.attr("data-cat") ?? "";
  const ch = $el.attr("data-ch") ?? "";

  const titre = $el.find("h3").first().text().trim();
  const definition = $el.find("p.def").first().text().trim();

  // Points (détails)
  const points = [];
  $el.find("ul.pts li").each((_, li) => points.push($(li).text().trim()));

  // Formules
  const formules = [];
  $el.find(".formules code").each((_, c) => formules.push($(c).text().trim()));

  // Méthode (étapes numérotées)
  const methode = [];
  $el.find("ol.meth li").each((_, li) => methode.push($(li).text().trim()));

  // Piège
  const piegeEl = $el.find("p.piege");
  const piege = piegeEl.length
    ? piegeEl
        .text()
        .replace(/^⚠\s*Piège\s*:\s*/i, "")
        .trim()
    : "";

  // À retenir
  const arEl = $el.find("p.ar");
  const retenir = arEl.length
    ? arEl
        .text()
        .replace(/^À retenir\s*[—–-]\s*/i, "")
        .trim()
    : "";

  // SVG (diagramme inline)
  const svgEl = $el.find("svg.diag");
  const svg = svgEl.length ? $.html(svgEl) : "";

  fiches.push({
    cat,
    ch: ch.padStart(2, "0"),
    titre,
    definition,
    points,
    formules,
    methode,
    piege,
    retenir,
    svg,
  });
});

// Détecter le programme depuis le <title>
const pageTitle = $("title").text();
let slug = "dcg-ue11";
if (/UE\s*3/i.test(pageTitle)) slug = "dscg-ue3";
else if (/UE\s*13/i.test(pageTitle)) slug = "dcg-ue13";

const outDir = "lib/content/notions";
mkdirSync(outDir, { recursive: true });

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");

let ts = `export interface Fiche {\n`;
ts += `  cat: string;\n  ch: string;\n  titre: string;\n  definition: string;\n`;
ts += `  points: string[];\n  formules: string[];\n  methode: string[];\n`;
ts += `  piege: string;\n  retenir: string;\n  svg: string;\n}\n\n`;
ts += `export const fiches: Fiche[] = [\n`;

for (const f of fiches) {
  ts += `  {\n`;
  ts += `    cat: ${JSON.stringify(f.cat)},\n`;
  ts += `    ch: ${JSON.stringify(f.ch)},\n`;
  ts += `    titre: ${JSON.stringify(f.titre)},\n`;
  ts += `    definition: ${JSON.stringify(f.definition)},\n`;
  ts += `    points: ${JSON.stringify(f.points)},\n`;
  ts += `    formules: ${JSON.stringify(f.formules)},\n`;
  ts += `    methode: ${JSON.stringify(f.methode)},\n`;
  ts += `    piege: ${JSON.stringify(f.piege)},\n`;
  ts += `    retenir: ${JSON.stringify(f.retenir)},\n`;
  ts += `    svg: ${JSON.stringify(f.svg)},\n`;
  ts += `  },\n`;
}

ts += `];\n`;

const outPath = `${outDir}/${slug}.generated.ts`;
writeFileSync(outPath, ts, "utf-8");
console.log(`✓ ${fiches.length} fiches extraites → ${outPath}`);
