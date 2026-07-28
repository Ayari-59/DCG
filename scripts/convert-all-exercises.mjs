/**
 * Lance convert-exercises.mjs sur tous les cahiers de l'UE11.
 *
 * Les cahiers sources sont numérotés différemment des chapitres du site
 * (le CVP et l'analyse du risque existent en double, sous Chapitre_03 et
 * Chapitre_04) : l'appariement se fait donc par titre, et en cas de doublon
 * on retient le fichier le plus complet.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ENONCES = "sources/UE 11 - CDG/Cahiers d'énoncés";
const CORRIGES = "sources/UE 11 - CDG/Cahiers de corrigés";

/** fragment de titre (minuscules, sans accent) → slug du chapitre du site */
const MAP = [
  ["cadre, metier", "dcg-ue11-cadre-metier-organisation"],
  ["fondements", "dcg-ue11-fondements-construction-couts"],
  ["volume-cout-profit", "dcg-ue11-modele-volume-cout-profit"],
  ["analyse du risque", "dcg-ue11-analyse-risque-loi-normale"],
  ["couts complets", "dcg-ue11-methode-couts-complets"],
  ["abc", "dcg-ue11-methode-abc"],
  ["imputation rationnelle", "dcg-ue11-imputation-rationnelle"],
  ["couts partiels", "dcg-ue11-methode-couts-partiels"],
  ["procedure budgetaire", "dcg-ue11-procedure-budgetaire"],
  ["budget des ventes", "dcg-ue11-budget-des-ventes"],
  ["approvisionnements", "dcg-ue11-gestion-approvisionnements"],
  ["gestion de la production", "dcg-ue11-gestion-production"],
  ["masse salariale", "dcg-ue11-gestion-masse-salariale"],
  ["controle budgetaire", "dcg-ue11-controle-budgetaire-ecarts"],
  ["tableaux de bord", "dcg-ue11-tableaux-de-bord-reporting"],
  ["gestion de la qualite", "dcg-ue11-gestion-qualite"],
  ["cout cible", "dcg-ue11-cout-cible"],
  ["prix de cession", "dcg-ue11-prix-cession-interne"],
];

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "'");

function slugFor(filename) {
  const n = norm(filename);
  for (const [frag, slug] of MAP) if (n.includes(frag)) return slug;
  return null;
}

// Un slug peut recevoir plusieurs fichiers candidats : on garde le plus gros.
const candidates = new Map();
for (const f of fs.readdirSync(ENONCES).filter((f) => f.endsWith(".docx") && !f.startsWith("_"))) {
  const slug = slugFor(f);
  if (!slug) {
    console.log(`IGNORÉ (aucun chapitre correspondant) : ${f}`);
    continue;
  }
  const size = fs.statSync(path.join(ENONCES, f)).size;
  const prev = candidates.get(slug);
  if (!prev || size > prev.size) candidates.set(slug, { file: f, size });
}

const corrigeFiles = fs.readdirSync(CORRIGES).filter((f) => f.endsWith(".docx"));
function findCorrige(slug) {
  const matches = corrigeFiles.filter((f) => slugFor(f) === slug);
  if (!matches.length) return null;
  return matches.sort(
    (a, b) => fs.statSync(path.join(CORRIGES, b)).size - fs.statSync(path.join(CORRIGES, a)).size
  )[0];
}

for (const [slug, { file }] of [...candidates].sort((a, b) => a[0].localeCompare(b[0]))) {
  const corrige = findCorrige(slug);
  const args = [
    "scripts/convert-exercises.mjs",
    "--slug", slug,
    "--enonce", path.join(ENONCES, file),
  ];
  if (corrige) args.push("--corrige", path.join(CORRIGES, corrige));
  try {
    const out = execFileSync("node", args, { encoding: "utf8" });
    process.stdout.write(out);
  } catch (err) {
    console.log(`ÉCHEC ${slug} : ${err.message.split("\n")[0]}`);
  }
}
