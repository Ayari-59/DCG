/**
 * Recherche, dans toutes les sources de l'UE11, les documents qui portent
 * réellement les propositions d'un QCM.
 *
 * Le corrigé « tous chapitres » ne donne que la lettre de la bonne réponse :
 * les propositions elles-mêmes doivent bien se trouver quelque part, ce
 * script sert à les localiser.
 *
 *   node scripts/chercher-qcm.mjs [dossier]
 */
import fs from "node:fs";
import path from "node:path";
import mammoth from "mammoth";

const racine = process.argv[2] ?? path.join("sources", "UE 11 - CDG");

function parcourir(dossier) {
  return fs.readdirSync(dossier, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dossier, e.name);
    return e.isDirectory() ? parcourir(p) : [p];
  });
}

const fichiers = parcourir(racine).filter(
  (p) => /\.docx$/i.test(p) && !path.basename(p).startsWith("~$")
);
console.log(`${fichiers.length} fichiers Word examinés dans ${racine}\n`);

const trouves = [];
for (const p of fichiers) {
  try {
    const { value } = await mammoth.extractRawText({ path: p });
    const options = (value.match(/^\s*[A-D][).]\s+\S/gm) || []).length;
    const questions = (value.match(/^\s*\d{1,2}\.\s+\S/gm) || []).length;
    if (options >= 8) trouves.push({ p, options, questions });
  } catch {
    /* fichier illisible : sans importance ici */
  }
}

if (!trouves.length) {
  console.log("Aucun document ne porte de propositions A) B) C) D).");
} else {
  for (const t of trouves.sort((a, b) => b.options - a.options)) {
    console.log(
      `${String(t.options).padStart(4)} propositions · ${String(t.questions).padStart(3)} questions   ` +
        t.p.replace(racine + path.sep, "")
    );
  }
}
