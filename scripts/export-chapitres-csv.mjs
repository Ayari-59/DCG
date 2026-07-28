/**
 * Régénère docs/cahier-de-texte/chapitres.csv depuis le contenu du site.
 *
 *   npx tsx scripts/export-chapitres-csv.mjs
 *
 * Ce fichier alimente la liste déroulante « Chapitre » du tableur du cahier
 * de texte : à relancer après l'ajout d'un chapitre, puis à réimporter dans
 * l'onglet `Chapitres` de la feuille Google.
 */
import fs from "node:fs";
import path from "node:path";
import { programs } from "../lib/content/index.ts";

const dir = "docs/cahier-de-texte";
fs.mkdirSync(dir, { recursive: true });

const rows = [["Diplôme", "N°", "Chapitre", "Identifiant technique", "Sections"]];
for (const p of programs) {
  for (const c of p.chapters) {
    rows.push([p.level, c.number, c.title, c.slug, c.sections.length]);
  }
}

const csv =
  "﻿" +
  rows
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\r\n") +
  "\r\n";

const out = path.join(dir, "chapitres.csv");
fs.writeFileSync(out, csv, "utf8");
console.log(`OK  ${out} — ${rows.length - 1} chapitres`);
