/**
 * Exporte les flashcards rédigées par IA (la base des paquets) vers un
 * JSON, pour fabriquer le document de relecture de l'auteur.
 *
 *   node scripts/exporter-cartes-a-relire.mjs <sortie.json>
 */
import fs from "node:fs";
import path from "node:path";

/**
 * Extrait le tableau flashcards d'un wrapper TS par comptage de crochets :
 * c'est un littéral JavaScript valide, évaluable tel quel.
 */
function extraireCartes(source) {
  const debut = source.indexOf("flashcards: [");
  if (debut < 0) return [];
  const i = source.indexOf("[", debut);
  let profondeur = 0;
  let enChaine = false;
  let echappe = false;
  for (let j = i; j < source.length; j++) {
    const ch = source[j];
    if (enChaine) {
      if (echappe) echappe = false;
      else if (ch === "\\") echappe = true;
      else if (ch === '"') enChaine = false;
      continue;
    }
    if (ch === '"') enChaine = true;
    else if (ch === "[") profondeur++;
    else if (ch === "]") {
      profondeur--;
      if (profondeur === 0) return Function("return " + source.slice(i, j + 1))();
    }
  }
  return [];
}

const dossier = "lib/content/chapters";
const chapitres = [];
for (const f of fs.readdirSync(dossier).sort()) {
  if (f.includes(".generated") || !f.endsWith(".ts")) continue;
  if (f.startsWith("dcg-ue13")) continue; // UE retirée du site
  const wrapper = fs.readFileSync(path.join(dossier, f), "utf8");
  const gen = fs.readFileSync(path.join(dossier, f.replace(".ts", ".generated.ts")), "utf8");
  const titreBrut = gen.match(/"title":\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? f;
  const numero = Number(gen.match(/"number":\s*(\d+)/)?.[1] ?? 0);
  const ue = f.startsWith("dscg") ? "DSCG UE3" : "DCG UE11";
  const cartes = extraireCartes(wrapper);
  if (cartes.length) {
    chapitres.push({ ue, numero, titre: JSON.parse('"' + titreBrut + '"'), cartes });
  }
}
chapitres.sort((a, b) => (a.ue === b.ue ? a.numero - b.numero : a.ue.localeCompare(b.ue)));

const sortie = process.argv[2] ?? "cartes-a-relire.json";
fs.writeFileSync(sortie, JSON.stringify(chapitres, null, 1));
const total = chapitres.reduce((n, c) => n + c.cartes.length, 0);
console.log(`${chapitres.length} chapitres · ${total} cartes rédigées par IA → ${sortie}`);
