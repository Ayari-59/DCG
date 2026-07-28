/**
 * Extrait la méthodologie des cahiers d'énoncés de l'UE11.
 *
 *   node scripts/convert-methodes.mjs
 *
 * Chaque thème d'un cahier est introduit par deux encadrés : « Compétences
 * visées » puis « Méthode ». Le second décrit la démarche à appliquer, le plus
 * souvent en étapes numérotées. Ces encadrés étaient jusqu'ici ignorés par le
 * convertisseur d'applications ; ils alimentent désormais l'onglet Méthode.
 *
 * Produit lib/content/methodes/<slug>.generated.ts + un index.
 */
import fs from "node:fs";
import path from "node:path";
import { docxToHtml, load, tableRows, slugify } from "./lib/docx-blocks.mjs";

const ENONCES = "sources/UE 11 - CDG/Cahiers d'énoncés";
const OUT = path.join("lib", "content", "methodes");

/** fragment de titre de fichier → slug du chapitre du site */
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

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "'");

function slugFor(filename) {
  const n = norm(filename);
  for (const [frag, slug] of MAP) if (n.includes(frag)) return slug;
  return null;
}

const strip = (s) => s.replace(/\*\*/g, "").trim();

/** Transforme les lignes d'un encadré en blocs, en repérant les étapes. */
function toBlocks(lines) {
  const blocks = [];
  let steps = [];
  const flush = () => {
    if (steps.length) blocks.push({ type: "ol", items: steps });
    steps = [];
  };
  for (const raw of lines) {
    let line = raw.trim();
    if (!line) continue;

    // Les encadrés sont composés en italique : on déballe pour analyser.
    const italic = /^\*[^*].*\*$/.test(line);
    if (italic) line = line.slice(1, -1).trim();

    const numbered = line.match(/^(\d{1,2})[.)]\s+(.+)$/);
    if (numbered) {
      steps.push(numbered[2]);
      continue;
    }
    const bullet = line.match(/^[–—•-]\s+(.+)$/);
    if (bullet) {
      steps.push(bullet[1]);
      continue;
    }

    // Liste écrite au fil du texte : « … sur : – a ; – b ; – c. »
    const inlineList = line.match(/^(.*?:)\s*([–—].*[–—].*)$/);
    if (inlineList) {
      const items = inlineList[2]
        .split(/\s*[;.]?\s*[–—]\s+/)
        .map((s) => s.replace(/\s*[;.]\s*$/, "").trim())
        .filter(Boolean);
      if (items.length >= 2) {
        flush();
        blocks.push({ type: "p", text: italic ? `*${inlineList[1]}*` : inlineList[1] });
        blocks.push({ type: "ul", items });
        continue;
      }
    }

    flush();
    blocks.push({ type: "p", text: raw.trim() });
  }
  flush();
  return blocks;
}

function extract(html) {
  const { $, inline } = load(html);
  const methodes = [];
  let theme = "";
  let competences = [];

  for (const el of $("body").children().toArray()) {
    const $el = $(el);

    if (el.name === "p") {
      const t = strip(inline($el));
      // Un intertitre de thème : ligne courte, sans ponctuation finale.
      if (t && t.length < 70 && !/[.:;]$/.test(t) && !/^\d/.test(t)) theme = t;
      continue;
    }

    if (el.name !== "table") continue;
    const rows = tableRows($, $el, inline);
    if (!rows.length) continue;
    const label = strip(rows[0][0] ?? "");

    if (/^comp[ée]tences?/i.test(label)) {
      competences = $el
        .find("li, p")
        .toArray()
        .map((p) => strip(inline($(p))))
        .filter((t) => t && !/^comp[ée]tences?/i.test(t))
        .flatMap((t) => t.split(/\s*•\s*/))
        .map((t) => t.replace(/^[•–—-]\s*/, "").trim())
        .filter(Boolean);
      continue;
    }

    if (/^m[ée]thode/i.test(label)) {
      const lines = $el
        .find("li, p")
        .toArray()
        .map((p) => inline($(p)))
        .filter(Boolean)
        .filter((t) => !/^\*{0,2}m[ée]thode\*{0,2}$/i.test(t.trim()));
      const blocks = toBlocks(lines);
      if (!blocks.length) continue;
      methodes.push({
        id: `m${methodes.length + 1}`,
        theme: theme || "Démarche générale",
        competences,
        blocks,
      });
      competences = [];
    }
  }
  return methodes;
}

// Un slug peut avoir plusieurs cahiers candidats : on garde le plus complet.
const candidates = new Map();
for (const f of fs.readdirSync(ENONCES).filter((f) => f.endsWith(".docx") && !f.startsWith("_"))) {
  const slug = slugFor(f);
  if (!slug) continue;
  const size = fs.statSync(path.join(ENONCES, f)).size;
  const prev = candidates.get(slug);
  if (!prev || size > prev.size) candidates.set(slug, { file: f, size });
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const written = [];
let total = 0;
for (const [slug, { file }] of [...candidates].sort((a, b) => a[0].localeCompare(b[0]))) {
  const methodes = extract(await docxToHtml(path.join(ENONCES, file)));
  if (!methodes.length) {
    console.log(`    ${slug} : aucune méthode trouvée`);
    continue;
  }
  total += methodes.length;
  written.push(slug);
  const banner = `// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.\n// Ne pas éditer à la main : re-générer depuis les Word sources.\n`;
  fs.writeFileSync(
    path.join(OUT, `${slug}.generated.ts`),
    banner +
      `import type { Methode } from "../types";\n\nexport const methodes: Methode[] = ${JSON.stringify(methodes, null, 2)};\n`,
    "utf8"
  );
  console.log(`OK  ${slug} — ${methodes.length} démarche(s)`);
}

const camel = (s) => s.replace(/^dcg-ue11-/, "").replace(/-([a-z])/g, (_, c) => c.toUpperCase());
fs.writeFileSync(
  path.join(OUT, "index.ts"),
  `import type { Methode } from "../types";\n` +
    written.map((s) => `import { methodes as ${camel(s)} } from "./${s}.generated";`).join("\n") +
    `\n\n/** Démarches méthodologiques par slug de chapitre. */\nexport const methodesBySlug: Record<string, Methode[]> = {\n` +
    written.map((s) => `  "${s}": ${camel(s)},`).join("\n") +
    `\n};\n`,
  "utf8"
);

console.log(`\n${total} démarches sur ${written.length} chapitres — ${path.join(OUT, "index.ts")}`);
void slugify;
