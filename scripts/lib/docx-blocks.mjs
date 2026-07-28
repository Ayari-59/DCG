/**
 * Helpers partagés par les convertisseurs Word → contenu du site
 * (scripts/convert-docx.mjs pour les cours, scripts/convert-exercises.mjs
 * pour les cahiers d'énoncés et de corrigés).
 */
import fs from "node:fs";
import nodePath from "node:path";
import mammoth from "mammoth";
import AdmZip from "adm-zip";
import * as cheerio from "cheerio";

/**
 * Certains .docx contiennent une image dont la relation est absente : mammoth
 * lève alors une TypeError. On réessaie après avoir retiré les <w:drawing>.
 */
export async function docxToHtml(path, options = {}) {
  try {
    return (await mammoth.convertToHtml({ path }, options)).value;
  } catch {
    // Une image dont la relation est absente fait échouer mammoth : on
    // réessaie sans les images de ce document (elles seront perdues).
    const zip = new AdmZip(path);
    const xml = zip.readAsText("word/document.xml");
    zip.updateFile(
      "word/document.xml",
      Buffer.from(xml.replace(/<w:drawing>[\s\S]*?<\/w:drawing>/g, ""), "utf8")
    );
    console.warn(`    ⚠ images ignorées (relation manquante) : ${path}`);
    return (await mammoth.convertToHtml({ buffer: zip.toBuffer() }, options)).value;
  }
}

/** Dimensions d'un PNG, lues dans l'en-tête IHDR (0 si autre format). */
export function pngSize(buffer) {
  if (buffer.length < 24 || buffer.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

/**
 * Écrit les images du document dans `outDir` et les référence par `urlBase`.
 * À passer en option `convertImage` de docxToHtml.
 */
export function imageExtractor(mammothRef, outDir, urlBase, sizes) {
  let n = 0;
  return mammothRef.images.imgElement(async (image) => {
    const buffer = await image.read();
    const ext = (image.contentType?.split("/")[1] ?? "png").replace("jpeg", "jpg");
    const name = `${String(++n).padStart(2, "0")}.${ext}`;
    fs.writeFileSync(nodePath.join(outDir, name), buffer);
    const size = pngSize(buffer);
    if (size) sizes[`${urlBase}/${name}`] = size;
    return { src: `${urlBase}/${name}` };
  });
}

export { mammoth };

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
