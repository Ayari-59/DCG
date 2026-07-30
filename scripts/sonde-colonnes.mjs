/**
 * Sonde : vérifier que les colonnes d'un tableau sont bien séparées.
 *
 *   node scripts/sonde-colonnes.mjs <fichier.pdf> [page]
 */
import { ouvrir, lirePageEnColonnes } from "./lib/pdf-colonnes.mjs";

const doc = await ouvrir(process.argv[2]);
const { lignes, bornes } = await lirePageEnColonnes(doc, Number(process.argv[3] ?? 3));

console.log("frontières :", bornes.map((b) => Math.round(b)).join(" | "));
console.log(`${lignes.length} lignes\n`);

for (const l of lignes.slice(0, 22)) {
  console.log(l.cellules.map((c, i) => `[${i}] ${c.slice(0, 52)}`).filter((c) => c.length > 4).join("\n     "));
  console.log("  ·");
}
