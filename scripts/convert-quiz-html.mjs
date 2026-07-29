/**
 * Reprend les quiz interactifs du kit UE13 comme quiz du site.
 *
 *   node scripts/convert-quiz-html.mjs
 *
 * Les supports interactifs (05_Supports_interactifs/*.html) portent une
 * table QUESTIONS où chaque entrée contient l'énoncé, les propositions,
 * l'indice de la bonne réponse et surtout une explication rédigée. C'est
 * une bien meilleure source que les QCM Word, dont le corrigé se limite à
 * répéter la bonne réponse.
 *
 * Produit lib/content/chapters/<slug>.quiz.generated.ts
 */
import fs from "node:fs";
import path from "node:path";

const SOURCE = "sources/UE 13 - DCG";
const OUT = path.join("lib", "content", "chapters");

/**
 * Un seul fichier par chapitre, pris dans le dossier de période. Les copies
 * présentes sous « DCG 1/ » et « DCG 2/ » sont des doublons du même kit.
 */
const QUIZ = [
  ["Seance_Zero_Rentree/05_Supports_interactifs/Quiz_decouverte_DCG1.html", "dcg-ue13-seance-zero"],
  ["DCG1_P1_Decouvrir/05_Supports_interactifs/Quiz_interactif_P1.html", "dcg-ue13-decouvrir"],
  ["DCG1_P2_Recherche_information/05_Supports_interactifs/Quiz_interactif_P2.html", "dcg-ue13-recherche-information"],
  ["Amorce_Recherche_de_stage/05_Supports_interactifs/Quiz_interactif_recherche_stage.html", "dcg-ue13-recherche-de-stage"],
  ["DCG2_P3_Analyser_situation/05_Supports_interactifs/Quiz_interactif_P3.html", "dcg-ue13-analyser-situation"],
  ["DCG2_P4_Rapport_de_stage/05_Supports_interactifs/Quiz_interactif_P4.html", "dcg-ue13-rapport-de-stage"],
  ["DCG2_P5_Soutenance/05_Supports_interactifs/Quiz_interactif_P5.html", "dcg-ue13-soutenance"],
];

/** Isole le littéral de tableau qui suit `const QUESTIONS =`. */
function litteralQuestions(html) {
  const debut = html.indexOf("const QUESTIONS");
  if (debut < 0) return null;
  const ouvrant = html.indexOf("[", debut);
  if (ouvrant < 0) return null;

  let profondeur = 0;
  let dansChaine = null;
  for (let i = ouvrant; i < html.length; i++) {
    const c = html[i];
    if (dansChaine) {
      if (c === "\\") i++;
      else if (c === dansChaine) dansChaine = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") dansChaine = c;
    else if (c === "[") profondeur++;
    else if (c === "]" && --profondeur === 0) return html.slice(ouvrant, i + 1);
  }
  return null;
}

let total = 0;
const ecrits = [];

for (const [relatif, slug] of QUIZ) {
  const fichier = path.join(SOURCE, relatif);
  if (!fs.existsSync(fichier)) {
    console.log(`    ${slug} : ${relatif} introuvable`);
    continue;
  }

  const litteral = litteralQuestions(fs.readFileSync(fichier, "utf8"));
  if (!litteral) {
    console.log(`    ${slug} : table QUESTIONS introuvable`);
    continue;
  }

  // Le littéral emploie des clés non quotées : on l'évalue plutôt que de le
  // parser. L'entrée est un fichier du dépôt de l'auteur, pas une donnée
  // extérieure, et l'évaluation a lieu à la génération, jamais à l'exécution.
  let brut;
  try {
    brut = Function(`"use strict"; return ${litteral};`)();
  } catch (err) {
    console.log(`    ${slug} : littéral illisible (${err.message})`);
    continue;
  }

  const quiz = brut
    .filter((q) => q?.q && Array.isArray(q.o) && typeof q.c === "number")
    .map((q, i) => ({
      id: `q${i + 1}`,
      question: String(q.q).trim(),
      choices: q.o.map((c) => String(c).trim()),
      answer: q.c,
      explanation: String(q.e ?? "").trim(),
    }))
    .filter((q) => q.answer >= 0 && q.answer < q.choices.length);

  if (!quiz.length) {
    console.log(`    ${slug} : aucune question exploitable`);
    continue;
  }

  const sansExplication = quiz.filter((q) => !q.explanation).length;
  fs.writeFileSync(
    path.join(OUT, `${slug}.quiz.generated.ts`),
    `// Généré par scripts/convert-quiz-html.mjs depuis le quiz interactif du kit.\n` +
      `// Ne pas éditer à la main : re-générer depuis le support source.\n` +
      `import type { QuizQuestion } from "../types";\n\n` +
      `export const quiz: QuizQuestion[] = ${JSON.stringify(quiz, null, 2)};\n`,
    "utf8"
  );

  total += quiz.length;
  ecrits.push(slug);
  console.log(
    `OK  ${slug} — ${quiz.length} questions` +
      (sansExplication ? `, dont ${sansExplication} sans explication` : "")
  );
}

console.log(`\n${total} questions sur ${ecrits.length} chapitres`);
