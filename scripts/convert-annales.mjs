/**
 * Extrait les annales par thème de l'UE11.
 *
 *   node scripts/convert-annales.mjs
 *
 * Chaque document regroupe les sujets d'examen d'un thème, séparés par un
 * titre « ▸ Annale 2009 — Dossier 1 — AIRELEC », suivis de la mise en
 * situation, du travail à faire et des annexes. Ces documents ne contiennent
 * pas de corrigés : le site l'indique clairement.
 *
 * Produit lib/content/annales/<slug>.generated.ts + un index.
 */
import fs from "node:fs";
import path from "node:path";
import { docxToHtml, load, tableRows, imageExtractor, mammoth } from "./lib/docx-blocks.mjs";

const SOURCE = "sources/UE 11 - CDG/Annales_par_theme";
const OUT = path.join("lib", "content", "annales");

/** fragment du nom de fichier → slug du chapitre du site */
const MAP = [
  ["centres_danalyse", "dcg-ue11-methode-couts-complets"],
  ["abc", "dcg-ue11-methode-abc"],
  ["couts_partiels", "dcg-ue11-methode-couts-partiels"],
  ["modele_cvp", "dcg-ue11-modele-volume-cout-profit"],
  ["variables_aleatoires", "dcg-ue11-analyse-risque-loi-normale"],
  ["processus_budgetaire", "dcg-ue11-procedure-budgetaire"],
  ["previsions_des_ventes", "dcg-ue11-budget-des-ventes"],
  ["previsions_de_production", "dcg-ue11-gestion-production"],
  ["budget_des_approvisionnements", "dcg-ue11-gestion-approvisionnements"],
  ["masse_salariale", "dcg-ue11-gestion-masse-salariale"],
  ["analyse_des_ecarts", "dcg-ue11-controle-budgetaire-ecarts"],
  ["gestion_qualite", "dcg-ue11-gestion-qualite"],
  ["valeur_cible", "dcg-ue11-cout-cible"],
  ["les_tableaux_de_bord", "dcg-ue11-tableaux-de-bord-reporting"],
];

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'\s-]/g, "_");

function slugFor(filename) {
  const n = norm(filename);
  for (const [frag, slug] of MAP) if (n.includes(frag)) return slug;
  return null;
}

/** « ▸ Annale 2009 — Dossier 1 — AIRELEC » */
const HEADING = /^[▸►\s]*Annale\s+(\d{4})\s*[—–-]\s*(?:(Dossiers?\s*[\d\s&et]+)\s*[—–-]\s*)?(.+)$/i;
const strip = (s) => s.replace(/\*\*/g, "").trim();

function extract(html, imageSizes) {
  const { $, inline } = load(html);
  const annales = [];
  let current = null;
  let skipping = false; // sommaire du document : le site a sa propre navigation

  const push = (block) => current && current.blocks.push(block);

  for (const el of $("body").children().toArray()) {
    const $el = $(el);
    const text = inline($el);
    const plain = strip(text);

    // Nouveau sujet ?
    const head = plain.length < 110 && plain.match(HEADING);
    if (head) {
      skipping = false;
      current = {
        id: `a${annales.length + 1}`,
        year: Number(head[1]),
        ...(head[2] ? { dossier: head[2].replace(/\s+/g, " ").trim() } : {}),
        entreprise: head[3].trim(),
        blocks: [],
      };
      annales.push(current);
      continue;
    }

    if (/^sommaire$/i.test(plain)) {
      skipping = true;
      continue;
    }
    // Avant le premier sujet, on ne garde rien (page de garde, sommaire).
    if (!current || skipping) continue;

    if (el.name === "table") {
      const rows = tableRows($, $el, inline);
      if (!rows.length) continue;
      const single = rows.every((r) => r.length === 1);
      if (single) {
        // Encadré de mise en situation.
        const lignes = $el
          .find("p, li")
          .toArray()
          .map((p) => inline($(p)))
          .filter(Boolean);
        const titre = strip(lignes[0] ?? "");
        const corps = lignes.slice(1).join("\n");
        push({
          type: "callout",
          variant: "info",
          title: titre.slice(0, 70) || "Mise en situation",
          text: corps || titre,
        });
      } else if (rows.length >= 2) {
        push({ type: "table", headers: rows[0], rows: rows.slice(1) });
      }
      continue;
    }

    if (/^h[1-6]$/.test(el.name)) {
      if (plain) push({ type: "h3", text: plain });
      continue;
    }

    if (el.name === "ul" || el.name === "ol") {
      const items = $el
        .children("li")
        .toArray()
        .map((li) => inline($(li)))
        .filter(Boolean);
      if (items.length) push({ type: el.name === "ol" ? "ol" : "ul", items });
      continue;
    }

    if (el.name === "p") {
      for (const img of $el.find("img").toArray()) {
        const src = $(img).attr("src");
        if (!src) continue;
        const size = imageSizes[src];
        push({ type: "image", src, alt: "Annexe", ...(size ?? {}) });
      }
      if (text) push({ type: "p", text });
    }
  }

  return annales.filter((a) => a.blocks.length > 0);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const written = [];
let total = 0;

for (const file of fs.readdirSync(SOURCE).filter((f) => f.endsWith(".docx"))) {
  const slug = slugFor(file);
  if (!slug) {
    console.log(`ignoré (répertoire ou correspondance) : ${file}`);
    continue;
  }
  const figuresDir = path.join("public", "figures", `annales-${slug}`);
  fs.rmSync(figuresDir, { recursive: true, force: true });
  fs.mkdirSync(figuresDir, { recursive: true });
  const imageSizes = {};
  const html = await docxToHtml(path.join(SOURCE, file), {
    convertImage: imageExtractor(mammoth, figuresDir, `/figures/annales-${slug}`, imageSizes),
  });

  const annales = extract(html, imageSizes);
  if (!annales.length) {
    fs.rmSync(figuresDir, { recursive: true, force: true });
    console.log(`    ${slug} : aucune annale trouvée`);
    continue;
  }
  if (!fs.readdirSync(figuresDir).length) fs.rmSync(figuresDir, { recursive: true, force: true });

  total += annales.length;
  written.push(slug);
  const banner = `// Généré par scripts/convert-annales.mjs depuis les annales par thème.\n// Ne pas éditer à la main : re-générer depuis les Word sources.\n`;
  fs.writeFileSync(
    path.join(OUT, `${slug}.generated.ts`),
    banner +
      `import type { Annale } from "../types";\n\nexport const annales: Annale[] = ${JSON.stringify(annales, null, 2)};\n`,
    "utf8"
  );
  console.log(
    `OK  ${slug} — ${annales.length} annales (${annales.map((a) => a.year).join(", ")})`
  );
}

const camel = (s) => s.replace(/^dcg-ue11-/, "").replace(/-([a-z])/g, (_, c) => c.toUpperCase());
fs.writeFileSync(
  path.join(OUT, "index.ts"),
  `import type { Annale } from "../types";\n` +
    written.map((s) => `import { annales as ${camel(s)} } from "./${s}.generated";`).join("\n") +
    `\n\n/** Annales par slug de chapitre. */\nexport const annalesBySlug: Record<string, Annale[]> = {\n` +
    written.map((s) => `  "${s}": ${camel(s)},`).join("\n") +
    `\n};\n`,
  "utf8"
);

console.log(`\n${total} annales sur ${written.length} chapitres`);
