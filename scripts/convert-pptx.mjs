/**
 * Convertit le kit UE13 « Communication professionnelle » en chapitres.
 *
 *   node scripts/convert-pptx.mjs
 *
 * Contrairement aux manuels de l'UE11 et du DSCG, l'UE13 n'est pas un
 * ouvrage mais un kit de séances : chaque période devient un chapitre, et
 * chaque diaporama de séance une section. Le texte est lu forme par forme
 * dans le .pptx, ce qui préserve la hiérarchie du support (chapeau, titre,
 * puis contenu) que l'aplatissement de la diapositive détruirait.
 */
import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";

const SOURCE = "sources/UE 13 - DCG";
const OUT = path.join("lib", "content", "chapters");

/** Périodes, dans l'ordre pédagogique. */
const PERIODES = [
  {
    dossier: "Seance_Zero_Rentree",
    slug: "dcg-ue13-seance-zero",
    numero: 1,
    titre: "Séance zéro : entrer dans l'UE13",
    description:
      "La séance de rentrée : ce qu'est la communication professionnelle, ce que l'épreuve attend, et comment se déroulera l'année.",
  },
  {
    dossier: "DCG1_P1_Decouvrir",
    slug: "dcg-ue13-decouvrir",
    numero: 2,
    titre: "Découvrir la communication professionnelle",
    description:
      "Les modèles et concepts de la communication, les registres et la posture professionnelle, puis les premiers écrits : courriel, note et compte rendu.",
  },
  {
    dossier: "DCG1_P2_Recherche_information",
    slug: "dcg-ue13-recherche-information",
    numero: 3,
    titre: "Rechercher et exploiter l'information",
    description:
      "Identifier un besoin d'information, conduire une recherche fiable, évaluer les sources et restituer ce qu'on a trouvé.",
  },
  {
    dossier: "Amorce_Recherche_de_stage",
    slug: "dcg-ue13-recherche-de-stage",
    numero: 4,
    titre: "Trouver son stage",
    description:
      "Lancer sa recherche, construire un CV de futur comptable, rédiger une lettre de motivation et préparer l'entretien.",
  },
  {
    dossier: "DCG2_P3_Analyser_situation",
    slug: "dcg-ue13-analyser-situation",
    numero: 5,
    titre: "Analyser une situation professionnelle",
    description:
      "Observer une organisation, qualifier une situation de travail et en tirer une analyse structurée.",
  },
  {
    dossier: "DCG2_P4_Rapport_de_stage",
    slug: "dcg-ue13-rapport-de-stage",
    numero: 6,
    titre: "Rédiger le rapport de stage",
    description:
      "De la collecte des matériaux à la version finale : structure attendue, rédaction, mise en forme et relecture du rapport.",
  },
  {
    dossier: "DCG2_P5_Soutenance",
    slug: "dcg-ue13-soutenance",
    numero: 7,
    titre: "Préparer la soutenance",
    description:
      "Construire son exposé, gérer le temps et le trac, et répondre aux questions du jury.",
  },
];

const texteDeForme = (xmlForme) =>
  [...xmlForme.matchAll(/<a:p>([\s\S]*?)<\/a:p>/g)]
    .map((p) =>
      [...p[1].matchAll(/<a:t>([^<]*)<\/a:t>/g)]
        .map((t) => t[1])
        .join("")
    )
    .filter(Boolean)
    .join(" ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

/** Pieds de page et pastilles décoratives : sans intérêt pour le lecteur. */
const AJETER =
  /^(UE\s*13\b|Séance\s*\d+\s*$|Diplôme de Comptabilité|Conforme à la réforme|\d+\s*\/\s*\d+$)/i;

function formesDeDiapo(xml) {
  return [...xml.matchAll(/<p:sp>([\s\S]*?)<\/p:sp>/g)]
    .map((m) => texteDeForme(m[1]))
    .filter((t) => t.length > 2 && !AJETER.test(t));
}

function diapos(zip) {
  return zip
    .getEntries()
    .filter((e) => /^ppt\/slides\/slide\d+\.xml$/.test(e.entryName))
    .sort((a, b) => a.entryName.localeCompare(b.entryName, undefined, { numeric: true }))
    .map((e) => formesDeDiapo(e.getData().toString("utf8")));
}

/** Une diapositive → blocs de contenu. */
function blocsDeDiapo(formes) {
  const blocs = [];
  if (!formes.length) return blocs;

  let i = 0;
  // Un chapeau court et en capitales introduit la diapositive.
  const chapeau = formes[0];
  if (chapeau.length < 40 && chapeau === chapeau.toUpperCase()) {
    blocs.push({ type: "h4", text: chapeau });
    i = 1;
  }
  if (formes[i]) {
    blocs.push({ type: "h3", text: formes[i] });
    i++;
  }

  // Le reste : une étiquette courte suivie d'un texte long forme une entrée.
  const items = [];
  for (; i < formes.length; i++) {
    const cur = formes[i];
    const suivant = formes[i + 1];
    // Une étiquette est courte et nettement plus brève que sa description.
    if (cur.length <= 60 && !/[.!?]$/.test(cur) && suivant && suivant.length >= 40 && suivant.length > cur.length * 1.5) {
      items.push(`**${cur}** — ${suivant}`);
      i++;
    } else {
      items.push(cur);
    }
  }
  if (items.length === 1) blocs.push({ type: "p", text: items[0] });
  else if (items.length > 1) blocs.push({ type: "ul", items });

  return blocs;
}

/** Titre de la séance, lu sur sa diapositive d'ouverture. */
function titreSeance(premiere, secours) {
  const candidats = premiere.filter(
    (t) => !/^séance/i.test(t) && t !== t.toUpperCase() && t.length > 8
  );
  return candidats[0] ?? secours;
}

const slugify = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

let total = 0;
const ecrits = [];

for (const p of PERIODES) {
  const dossier = path.join(SOURCE, p.dossier, "01_Diaporamas");
  if (!fs.existsSync(dossier)) {
    console.log(`    ${p.slug} : pas de diaporamas`);
    continue;
  }
  const fichiers = fs.readdirSync(dossier).filter((f) => f.endsWith(".pptx")).sort();
  const sections = [];

  for (const f of fichiers) {
    const pages = diapos(new AdmZip(path.join(dossier, f)));
    if (!pages.length) continue;

    const secours = f.replace(/^[A-Z]?\d*_/, "").replace(/\.pptx$/, "").replace(/_/g, " ");
    // Le numéro de séance figure dans le nom du diaporama (S2_, A1_…) :
    // on le remet dans le titre pour que le sommaire soit numéroté.
    const rang = f.match(/^[A-Za-z]+(\d+)_/);
    const brut = titreSeance(pages[0], secours);
    const titre = rang ? `${rang[1]}. ${brut}` : brut;
    // La première diapositive est une page de garde : elle n'apporte rien.
    const blocks = pages.slice(1).flatMap(blocsDeDiapo);
    if (!blocks.length) continue;

    sections.push({ id: slugify(titre), title: titre, blocks });
  }

  if (!sections.length) {
    console.log(`    ${p.slug} : aucune séance exploitable`);
    continue;
  }

  const mots = sections
    .flatMap((s) => s.blocks)
    .map((b) => b.text ?? (b.items ?? []).join(" "))
    .join(" ")
    .split(/\s+/).length;

  const chapitre = {
    slug: p.slug,
    level: "DCG",
    ue: "UE13",
    number: p.numero,
    title: p.titre,
    description: p.description,
    // Le kit est bâti sur des séances d'une heure : la durée du chapitre
    // reflète le temps de classe, pas le temps de lecture des diapositives.
    durationMin: sections.length * 60,
    sections,
    flashcards: [],
    quiz: [],
  };

  fs.writeFileSync(
    path.join(OUT, `${p.slug}.generated.ts`),
    `// Généré par scripts/convert-pptx.mjs depuis le kit UE13.\n` +
      `// Ne pas éditer à la main : re-générer depuis les diaporamas sources.\n` +
      `import type { Chapter } from "../types";\n\nexport const chapter: Chapter = ${JSON.stringify(chapitre, null, 2)};\n`,
    "utf8"
  );
  total += sections.length;
  ecrits.push(p);
  console.log(`OK  ${p.slug} — ${sections.length} séances, ~${chapitre.durationMin} min`);
}

console.log(`\n${ecrits.length} chapitres UE13, ${total} séances`);
