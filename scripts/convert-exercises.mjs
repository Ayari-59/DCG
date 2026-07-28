/**
 * Convertit un cahier d'énoncés + son cahier de corrigés en applications
 * interactives : lib/content/exercises/<slug>.generated.ts
 *
 * Usage :
 *   node scripts/convert-exercises.mjs --slug dcg-ue11-methode-couts-partiels \
 *     --enonce "sources/.../Chapitre_08 ... Cahier d'énoncés.docx" \
 *     --corrige "sources/.../Chapitre_08 ... Corrigés.docx"
 *
 * Les énoncés et les corrigés sont deux documents parallèles : on extrait la
 * liste ordonnée des exercices de chacun, puis on les apparie par nom (et à
 * défaut par rang). Un exercice sans corrigé trouvé reste publié sans corrigé.
 */
import fs from "node:fs";
import path from "node:path";
import { docxToHtml, load, tableRows, slugify } from "./lib/docx-blocks.mjs";

const args = process.argv.slice(2);
function opt(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
}
const slug = opt("slug");
const enoncePath = opt("enonce");
const corrigePath = opt("corrige");
if (!slug || !enoncePath) {
  console.error("Usage: node scripts/convert-exercises.mjs --slug <slug> --enonce <f.docx> [--corrige <f.docx>]");
  process.exit(1);
}

/**
 * « A1.1 — Danone », « Cas2 — Progo », « Cas : Gaspard ★★★ · 20 min »,
 * et côté corrigés « Mise en pratique corrigée : SARL … ».
 */
const HEADING =
  /^([A-Z]\d[\d.]*|Cas\s*[\d.]*|Application\s*[\d.]*|Mise en pratique(?:\s+\p{L}+)?)\s*[—:–-]\s*(.+)$/iu;
/** Encadrés pédagogiques du cahier : déjà couverts par le cours. */
const SKIP_TABLE = /^(compétences visées|méthode)/i;

function parseHeading(raw) {
  // Les titres d'exercices sont en gras dans les cahiers : on retire le
  // balisage avant de les reconnaître.
  const text = raw.replace(/\*\*/g, "").replace(/^\*|\*$/g, "").trim();
  const m = text.match(HEADING);
  if (!m || text.length > 90) return null;
  let rest = m[2];
  const stars = (rest.match(/★/g) || []).length;
  const duration = rest.match(/(\d+)\s*min/i);
  // Retire les métadonnées décoratives du titre.
  const name = rest
    .replace(/[★☆]/g, "")
    .replace(/\d+\s*min/i, "")
    .replace(/[·•|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return {
    label: m[1].replace(/\s+/g, " ").trim(),
    name,
    difficulty: stars || undefined,
    durationMin: duration ? Number(duration[1]) : undefined,
  };
}

/** Découpe un document en exercices : [{ label, name, blocks }] */
function extractExercises(html) {
  const { $, inline } = load(html);
  const exercises = [];
  let current = null;

  const push = (block) => {
    if (current) current.blocks.push(block);
  };

  for (const el of $("body").children().toArray()) {
    const $el = $(el);
    const text = inline($el);

    if (el.name === "p") {
      if (!text) continue;
      const head = parseHeading(text);
      if (head) {
        current = { ...head, blocks: [] };
        exercises.push(current);
        continue;
      }
      push({ type: "p", text });
      continue;
    }

    if (el.name === "ul" || el.name === "ol") {
      const items = $el
        .children("li")
        .toArray()
        .map((li) => inline($(li)))
        .filter(Boolean);
      if (items.length) push({ type: "ul", items });
      continue;
    }

    if (el.name === "table") {
      const rows = tableRows($, $el, inline);
      if (!rows.length) continue;
      if (SKIP_TABLE.test(rows[0][0] ?? "")) {
        // Un encadré « Compétences visées » ouvre un thème du cahier. Le titre
        // qui le précède (« Cas : société Houblon ») n'est donc pas un
        // exercice mais un intertitre : on le retire.
        if (current && current.blocks.length === 0 && exercises.at(-1) === current) {
          exercises.pop();
          current = null;
        }
        continue;
      }
      if (rows.length >= 2) push({ type: "table", headers: rows[0], rows: rows.slice(1) });
      else push({ type: "p", text: rows[0].join(" — ") });
      continue;
    }

    if (/^h[1-6]$/.test(el.name) && text) {
      const head = parseHeading(text);
      if (head) {
        current = { ...head, blocks: [] };
        exercises.push(current);
      } else {
        push({ type: "h4", text });
      }
    }
  }

  return exercises.filter((e) => e.blocks.length > 0);
}

/** Clé de rapprochement énoncé ↔ corrigé : le nom de l'entreprise du cas. */
function matchKey(ex) {
  return slugify(ex.name).split("-").filter((w) => w.length > 3).join("-");
}

const enonces = extractExercises(await docxToHtml(enoncePath));
const corriges = corrigePath && fs.existsSync(corrigePath)
  ? extractExercises(await docxToHtml(corrigePath))
  : [];

// Appariement : d'abord par nom, puis par rang pour les restants.
const usedCorriges = new Set();
const pairs = enonces.map((e) => {
  const key = matchKey(e);
  const byName = corriges.findIndex(
    (c, i) => !usedCorriges.has(i) && key && matchKey(c) && (matchKey(c) === key || matchKey(c).includes(key) || key.includes(matchKey(c)))
  );
  if (byName >= 0) {
    usedCorriges.add(byName);
    return { enonce: e, corrige: corriges[byName] };
  }
  return { enonce: e, corrige: null };
});
// Les exercices non appariés récupèrent, dans l'ordre, les corrigés restants.
const leftovers = corriges.map((c, i) => (usedCorriges.has(i) ? null : { c, i })).filter(Boolean);
for (const pair of pairs) {
  if (pair.corrige) continue;
  const next = leftovers.shift();
  if (!next) break;
  usedCorriges.add(next.i);
  pair.corrige = next.c;
}

const exercises = pairs.map((p, i) => ({
  id: `ex${i + 1}`,
  label: p.enonce.label,
  title: p.enonce.name,
  ...(p.enonce.difficulty ? { difficulty: p.enonce.difficulty } : {}),
  ...(p.enonce.durationMin ? { durationMin: p.enonce.durationMin } : {}),
  statement: p.enonce.blocks,
  correction: p.corrige ? p.corrige.blocks : [],
}));

const outDir = path.join("lib", "content", "exercises");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, `${slug}.generated.ts`);
const banner = `// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.\n// Ne pas éditer à la main : re-générer depuis les Word sources.\n`;
fs.writeFileSync(
  outPath,
  banner + `import type { Exercise } from "../types";\n\nexport const exercises: Exercise[] = ${JSON.stringify(exercises, null, 2)};\n`,
  "utf8"
);

const sansCorrige = exercises.filter((e) => e.correction.length === 0).length;
console.log(
  `OK  ${outPath} — ${exercises.length} exercices` +
    (sansCorrige ? `, dont ${sansCorrige} SANS corrigé` : ", tous corrigés")
);
