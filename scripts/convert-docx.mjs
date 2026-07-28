/**
 * Pipeline de conversion : chapitre Word (.docx) → fichier de contenu du site.
 *
 * Usage :
 *   node scripts/convert-docx.mjs <fichier.docx> --slug <slug> --level DCG --ue UE11 --number 5 [--title "..."]
 *
 * Produit lib/content/chapters/<slug>.generated.ts avec la leçon complète
 * (sections + blocs). Les flashcards et le quiz sont laissés vides : ils sont
 * rédigés/validés à la main dans le fichier wrapper (<slug>.ts).
 *
 * Deux familles de documents source :
 *  - Mode auto (manuel DSCG) : un h1 = titre du chapitre, h2 = sections.
 *  - Mode --title (cours UE11) : titre fourni ; le document est maquetté avec
 *    des encadrés Word en tableaux (définitions, compétences, pièges...) qui
 *    deviennent des callouts, et des titres de partie parfois posés dans des
 *    boîtes (tableaux) qui sont dépliées. La page de garde est ignorée.
 */
import fs from "node:fs";
import path from "node:path";
import mammoth from "mammoth";
import * as cheerio from "cheerio";

const args = process.argv.slice(2);
const file = args[0];
function opt(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
}
if (!file) {
  console.error("Usage: node scripts/convert-docx.mjs <fichier.docx> --slug <slug> [--level --ue --number --title]");
  process.exit(1);
}
const level = opt("level", "DSCG");
const ue = opt("ue", "UE3");
const number = Number(opt("number", "1"));
const slug = opt("slug", `${level.toLowerCase()}-${ue.toLowerCase()}-chapitre-${number}`);
const forcedTitle = opt("title", null);

const { value: html } = await mammoth.convertToHtml({ path: file });
const $ = cheerio.load(html);

/** Texte inline : <strong> → **, <em> → *, le reste à plat. */
function inline($el) {
  let out = "";
  for (const node of $el.contents()) {
    if (node.type === "text") {
      out += node.data;
    } else if (node.type === "tag") {
      const innerText = inline($(node));
      if (node.name === "strong" || node.name === "b") out += innerText ? `**${innerText}**` : "";
      else if (node.name === "em" || node.name === "i") out += innerText ? `*${innerText}*` : "";
      else if (node.name === "br") out += " ";
      else if (node.name === "img") out += "";
      else out += innerText;
    }
  }
  return out.replace(/\s+/g, " ").replace(/\*\*\s*\*\*/g, "").trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

const sections = [];
let current = null;
let chapterTitle = null;
let skipping = false;
let sawStructure = false; // premier titre/encadré rencontré → fin de la page de garde

function push(block) {
  if (!current) {
    current = { id: "preambule", title: "Préambule", blocks: [] };
    sections.push(current);
  }
  current.blocks.push(block);
}

function startSection(title) {
  current = { id: slugify(title) || `section-${sections.length + 1}`, title, blocks: [] };
  sections.push(current);
}

// Niveau de découpe en mode --title : h1 s'il y en a assez (où qu'ils soient,
// y compris dans des boîtes), sinon h2.
const h1Count = $("h1").toArray().filter((el) => !/^sommaire$/i.test($(el).text().trim())).length;
const sectionOnH2 = forcedTitle ? h1Count < 3 : false;

/** Détection du variant de callout d'après le titre/contenu de l'encadré. */
function calloutVariant(text) {
  const t = text.toUpperCase();
  if (/PIÈGE|PIEGE|ATTENTION|ERREUR|⚠|VIGILANCE/.test(t)) return "warning";
  if (/MÉTHODE|METHODE|DÉMARCHE|DEMARCHE|SAVOIR-FAIRE|CONSEIL|ASTUCE/.test(t)) return "tip";
  return "info";
}

/** Encadrés de cadrage : leur contenu n'est jamais une partie du cours. */
const BOX_LABEL =
  /^[^\p{L}]*\s*(positionnement|plan du chapitre|comp[ée]tences?|objectifs?|pr[ée]requis|savoirs?|mots?[- ]cl[ée]s?)/iu;

function processTable($table) {
  const cells = $table.find("th, td").toArray();
  const hasHeadings = $table.find("h1, h2, h3").length > 0;

  // 1. Bandeau de partie : le manuel met le numéro dans une cellule et le
  //    titre dans la suivante. Sans ce recollage, le numéro se retrouve seul
  //    à la fin de la partie précédente et le titre perd sa numérotation.
  if (hasHeadings && cells.length === 2) {
    const num = inline($(cells[0])).replace(/\*\*/g, "").trim();
    const $head = $(cells[1]).children("h1, h2, h3").first();
    if (/^\d{1,2}$/.test(num) && $head.length) {
      sawStructure = true;
      skipping = false;
      const head = inline($head).replace(/\*\*/g, "").trim();
      // « Partie 1 — … » porte déjà son numéro : ne pas le préfixer deux fois.
      const numbered = new RegExp(`^(partie\\s*)?${num}\\b`, "i").test(head);
      startSection(numbered ? head : `${num}. ${head}`);
      for (const child of $(cells[1]).children().toArray()) {
        if (child !== $head[0]) processElement(child);
      }
      return;
    }
  }

  const rows = $table
    .find("tr")
    .toArray()
    .map((tr) => $(tr).find("th, td").toArray().map((cell) => inline($(cell))))
    .filter((r) => r.some((c) => c));
  if (rows.length === 0) return;

  const firstCell = (rows[0][0] ?? "").replace(/\*\*/g, "").trim();

  // 2. Encadré de cadrage (positionnement, compétences, plan…) : les titres
  //    qu'il contient énumèrent le plan, ce ne sont pas des parties du cours.
  if (BOX_LABEL.test(firstCell)) {
    sawStructure = true;
    if (/plan du chapitre/i.test(firstCell)) return; // le site a sa propre navigation
    const body = $table
      .find("p, li, h1, h2, h3")
      .toArray()
      .map((p) => inline($(p)))
      .filter(Boolean)
      .slice(1)
      .join("\n");
    const title = firstCell.replace(/^[^\p{L}0-9]+\s*/u, "").trim();
    if (body || title) {
      push({ type: "callout", variant: calloutVariant(firstCell), title, text: body || title });
    }
    return;
  }

  // 3. Autre boîte contenant des titres → déplier son contenu.
  if (hasHeadings) {
    for (const cell of cells) {
      for (const child of $(cell).children().toArray()) processElement(child);
    }
    return;
  }

  const singleColumn = rows.every((r) => r.length === 1);

  // 4. Encadré sur une seule colonne → callout, sauf le plan du chapitre.
  if (singleColumn) {
    sawStructure = true;
    const paragraphs = $table
      .find("p, li")
      .toArray()
      .map((p) => inline($(p)))
      .filter(Boolean);
    const lines = paragraphs.length ? paragraphs : rows.map((r) => r[0]);
    const first = (lines[0] ?? "").replace(/\*\*/g, "");
    if (/PLAN DU CHAPITRE/i.test(first)) return;
    // Première ligne courte et sans ponctuation finale = titre de l'encadré.
    const hasTitle = first.length < 80 && !/[.:]$/.test(first.trim()) && lines.length > 1;
    const title = hasTitle ? first.replace(/^[^A-Za-zÀ-ÿ0-9]+\s*/, "").trim() : undefined;
    const body = (hasTitle ? lines.slice(1) : lines).join("\n");
    if (!body && !title) return;
    push({
      type: "callout",
      variant: calloutVariant(first),
      ...(title ? { title } : {}),
      text: body || title,
    });
    return;
  }

  // 5. Vrai tableau de données.
  sawStructure = true;
  if (rows.length >= 2) {
    push({ type: "table", headers: rows[0], rows: rows.slice(1) });
  } else {
    push({ type: "p", text: rows[0].join(" — ") });
  }
}

function processElement(el) {
  const tag = el.name;
  const $el = $(el);
  const text = inline($el);

  if (tag === "h1") {
    if (/^sommaire$/i.test(text)) {
      skipping = true;
      return;
    }
    skipping = false;
    sawStructure = true;
    if (forcedTitle) {
      const title = text.replace(/\*\*/g, "").trim();
      if (!title) return;
      // Quelques sous-parties sont stylées en titre de niveau 1 dans le Word
      // (« 3.10 … » sous la partie 3) : les garder comme sous-titres.
      if (/^\d+\.\d/.test(title)) push({ type: "h3", text: title });
      else startSection(title);
    } else if (!chapterTitle) {
      chapterTitle = text.replace(/^chapitre\s*[—–-]?\s*/i, "").replace(/\*\*/g, "");
    }
    return;
  }

  if (tag === "h2") {
    skipping = false;
    sawStructure = true;
    const title = text.replace(/\*\*/g, "");
    if (!title) return;
    if (forcedTitle && !sectionOnH2) {
      push({ type: "h3", text: title });
    } else {
      startSection(title);
    }
    return;
  }

  if (skipping) return;

  if (tag === "h3" || tag === "h4" || tag === "h5") {
    if (!text) return;
    sawStructure = true;
    const sub = tag === "h3" && (sectionOnH2 || !forcedTitle);
    push({ type: sub ? "h3" : "h4", text: text.replace(/\*\*/g, "") });
    return;
  }

  if (tag === "p") {
    if (!text) return;
    // Page de garde (mode --title) : courtes lignes avant le premier
    // titre/encadré → ignorées, le site affiche son propre en-tête.
    if (forcedTitle && !sawStructure && text.length < 120) return;
    push({ type: "p", text });
    return;
  }

  if (tag === "ul" || tag === "ol") {
    const items = $el
      .children("li")
      .toArray()
      .map((li) => inline($(li)))
      .filter(Boolean);
    if (items.length) push({ type: "ul", items });
    return;
  }

  if (tag === "table") {
    processTable($el);
    return;
  }
}

for (const el of $("body").children().toArray()) {
  processElement(el);
}

// Sections vides (titres de structure sans contenu direct) : supprimées.
const cleanSections = sections.filter((s) => s.blocks.length > 0);

const wordCount = cleanSections
  .flatMap((s) => s.blocks)
  .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : (b.rows ?? []).flat().join(" ")))
  .join(" ")
  .split(/\s+/).length;
const durationMin = Math.max(15, Math.round(wordCount / 200 / 5) * 5);

const chapter = {
  slug,
  level,
  ue,
  number,
  title: forcedTitle ?? chapterTitle ?? path.basename(file, ".docx"),
  description: "",
  durationMin,
  sections: cleanSections,
  flashcards: [],
  quiz: [],
};

const outPath = path.join("lib", "content", "chapters", `${slug}.generated.ts`);
const banner = `// Généré par scripts/convert-docx.mjs depuis ${path.basename(file)}\n// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.\n// description, flashcards et quiz sont complétés à la main après génération.\n`;
const body = `import type { Chapter } from "../types";\n\nexport const chapter: Chapter = ${JSON.stringify(chapter, null, 2)};\n`;
fs.writeFileSync(outPath, banner + body, "utf8");

console.log(`OK  ${outPath}`);
console.log(`    titre     : ${chapter.title}`);
console.log(`    sections  : ${cleanSections.length} (${cleanSections.map((s) => s.blocks.length).join(", ")} blocs)`);
console.log(`    mots      : ${wordCount} (~${durationMin} min)`);
