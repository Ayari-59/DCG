/**
 * Helpers partagés par les convertisseurs Word → contenu du site
 * (scripts/convert-docx.mjs pour les cours, scripts/convert-exercises.mjs
 * pour les cahiers d'énoncés et de corrigés).
 */
import mammoth from "mammoth";
import AdmZip from "adm-zip";
import * as cheerio from "cheerio";

/**
 * Certains .docx contiennent une image dont la relation est absente : mammoth
 * lève alors une TypeError. On réessaie après avoir retiré les <w:drawing>.
 */
export async function docxToHtml(path) {
  try {
    return (await mammoth.convertToHtml({ path })).value;
  } catch {
    const zip = new AdmZip(path);
    const xml = zip.readAsText("word/document.xml");
    zip.updateFile(
      "word/document.xml",
      Buffer.from(xml.replace(/<w:drawing>[\s\S]*?<\/w:drawing>/g, ""), "utf8")
    );
    return (await mammoth.convertToHtml({ buffer: zip.toBuffer() })).value;
  }
}

/** Texte inline : <strong> → **gras**, <em> → *italique*, le reste à plat. */
export function makeInline($) {
  return function inline($el) {
    let out = "";
    for (const node of $el.contents()) {
      if (node.type === "text") {
        out += node.data;
      } else if (node.type === "tag") {
        const inner = inline($(node));
        if (node.name === "strong" || node.name === "b") out += inner ? `**${inner}**` : "";
        else if (node.name === "em" || node.name === "i") out += inner ? `*${inner}*` : "";
        else if (node.name === "br") out += " ";
        else if (node.name === "img") out += "";
        else out += inner;
      }
    }
    return out.replace(/\s+/g, " ").replace(/\*\*\s*\*\*/g, "").trim();
  };
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Lignes d'un <table> sous forme de matrice de textes inline. */
export function tableRows($, $table, inline) {
  return $table
    .find("tr")
    .toArray()
    .map((tr) =>
      $(tr)
        .find("th, td")
        .toArray()
        .map((cell) => inline($(cell)))
    )
    .filter((r) => r.some((c) => c));
}

export function load(html) {
  const $ = cheerio.load(html);
  return { $, inline: makeInline($) };
}
