/**
 * Conversion des QCM du manuel UE11.
 *
 * Source : sources/UE 11 - CDG/QCM — le jeu complet de l'auteur, 482
 * questions sur les dix-neuf chapitres. Chaque chapitre y existe en trois
 * formats (MS Forms, Wooclap, JSON) ; on lit le JSON, qui porte tout :
 * énoncé, propositions, bonnes réponses, justification.
 *
 * Le script en tire deux choses :
 *
 * 1. le QCM de chaque chapitre, tel quel ;
 * 2. une flashcard par question — l'énoncé au recto, la justification au
 *    verso. Rien n'y est inventé : une question corrigée est déjà un
 *    couple question/réponse, il suffit de le retourner.
 *
 *   node scripts/convert-qcm.mjs
 */

import fs from "node:fs";
import path from "node:path";

const RACINE = process.cwd();
const SOURCE = path.join(RACINE, "sources", "UE 11 - CDG", "QCM", "_json");
const SORTIE = path.join(RACINE, "lib", "content", "qcm");

/**
 * Les fichiers ch01 à ch19 suivent exactement l'ordre du programme sur le
 * site : la correspondance est positionnelle.
 */
const SLUGS = [
  "dcg-ue11-cadre-metier-organisation",
  "dcg-ue11-fondements-construction-couts",
  "dcg-ue11-modele-volume-cout-profit",
  "dcg-ue11-analyse-risque-loi-normale",
  "dcg-ue11-methode-couts-complets",
  "dcg-ue11-methode-abc",
  "dcg-ue11-imputation-rationnelle",
  "dcg-ue11-methode-couts-partiels",
  "dcg-ue11-procedure-budgetaire",
  "dcg-ue11-budget-des-ventes",
  "dcg-ue11-gestion-approvisionnements",
  "dcg-ue11-gestion-production",
  "dcg-ue11-gestion-masse-salariale",
  "dcg-ue11-controle-budgetaire-ecarts",
  "dcg-ue11-tableaux-de-bord-reporting",
  "dcg-ue11-gestion-qualite",
  "dcg-ue11-cout-cible",
  "dcg-ue11-prix-cession-interne",
  "dcg-ue11-performance-globale-durabilite",
];

/**
 * Propositions d'une question vrai/faux.
 *
 * Le kit les laisse vides (« options: [] ») parce que les plateformes de
 * diffusion les fournissent d'elles-mêmes. Le site, lui, ne les devine
 * pas : sans ce repli, les questions vrai/faux s'affichaient sans aucune
 * case à cocher et bloquaient le quiz. Le corrigé du manuel confirme la
 * correspondance sans une exception sur 87 questions : Vrai = A, Faux = B.
 */
const VRAI_FAUX = ["Vrai", "Faux"];

/**
 * La justification d'une question vrai/faux commence par « Vrai : » ou
 * « Faux : » — redondant sur une flashcard dont c'est tout le verso, mais
 * indispensable tel quel dans un quiz. On la garde entière.
 */
function versFlashcard(question, i) {
  return {
    id: `qcm${i + 1}`,
    front: String(question.q).trim(),
    back: String(question.explain ?? "").trim(),
  };
}

function entete(quoi) {
  return `// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// ${quoi}
`;
}

/** Un slug devient un identifiant JavaScript : dcg-ue11-cout-cible → coutCible. */
function variable(slug) {
  return slug.replace(/^dcg-ue11-/, "").replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

/**
 * L'index est écrit par le script plutôt que tenu à la main : les fichiers
 * qu'il rassemble sont eux-mêmes générés, et une liste d'imports oubliée
 * ne se remarque qu'au moment où une carte manque sur le site.
 */
function ecrireIndex() {
  const imports = SLUGS.flatMap((slug) => [
    `import { flashcards as fc${variable(slug)} } from "./${slug}.flashcards.generated";`,
    `import { quiz as qz${variable(slug)} } from "./${slug}.quiz.generated";`,
  ]);

  const table = (prefixe) => SLUGS.map((s) => `  "${s}": ${prefixe}${variable(s)},`).join("\n");

  fs.writeFileSync(
    path.join(SORTIE, "index.ts"),
    `// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
import type { Flashcard, QuizQuestion } from "../types";
${imports.join("\n")}

/** Flashcards tirées des QCM du manuel, par slug de chapitre. */
export const flashcardsQcmBySlug: Record<string, Flashcard[]> = {
${table("fc")}
};

/** QCM du manuel, complets — ils remplacent les questions générées. */
export const quizQcmBySlug: Record<string, QuizQuestion[]> = {
${table("qz")}
};
`
  );
}

function main() {
  fs.mkdirSync(SORTIE, { recursive: true });

  // L'ancien état — deux chapitres complets, le reste en attente — laissait
  // des fichiers que ce script ne réécrit plus ; on repart à blanc.
  for (const ancien of fs.readdirSync(SORTIE)) {
    fs.rmSync(path.join(SORTIE, ancien));
  }

  let cartes = 0;
  let questions = 0;

  for (const [i, slug] of SLUGS.entries()) {
    const fichier = path.join(SOURCE, `ch${String(i + 1).padStart(2, "0")}.json`);
    if (!fs.existsSync(fichier)) {
      console.error(`Fichier absent : ${fichier}`);
      process.exit(1);
    }
    const { title, questions: brutes } = JSON.parse(fs.readFileSync(fichier, "utf8"));

    const quiz = brutes.map((q, k) => ({
      id: `qcm${k + 1}`,
      question: String(q.q).trim(),
      choices: q.options?.length ? q.options.map((o) => String(o).trim()) : VRAI_FAUX,
      answers: [...q.correct].sort((a, b) => a - b),
      explanation: String(q.explain ?? "").trim(),
    }));

    // Garde-fous : une question sans proposition ou dont une bonne réponse
    // pointe hors des propositions bloque ou fausse le quiz.
    for (const q of quiz) {
      if (!q.choices.length) {
        console.error(`${slug} · ${q.id} : aucune proposition`);
        process.exit(1);
      }
      if (!q.answers.length || q.answers.some((a) => a < 0 || a >= q.choices.length)) {
        console.error(`${slug} · ${q.id} : réponse hors des propositions`);
        process.exit(1);
      }
    }

    const flashcards = brutes.map(versFlashcard);
    cartes += flashcards.length;
    questions += quiz.length;

    fs.writeFileSync(
      path.join(SORTIE, `${slug}.quiz.generated.ts`),
      entete("QCM du manuel, complet.") +
        `import type { QuizQuestion } from "../types";\n\n` +
        `export const quiz: QuizQuestion[] = ${JSON.stringify(quiz, null, 2)};\n`
    );
    fs.writeFileSync(
      path.join(SORTIE, `${slug}.flashcards.generated.ts`),
      entete("Flashcards tirées du QCM : énoncé au recto, justification au verso.") +
        `import type { Flashcard } from "../types";\n\n` +
        `export const flashcards: Flashcard[] = ${JSON.stringify(flashcards, null, 2)};\n`
    );

    console.log(
      `  ch${String(i + 1).padStart(2)} ${String(quiz.length).padStart(3)} questions · ` +
        `${String(flashcards.length).padStart(3)} cartes   ${(title ?? slug).replace(/^QCM — /, "").slice(0, 60)}`
    );
  }

  ecrireIndex();
  console.log(`\n${questions} questions · ${cartes} flashcards, sur ${SLUGS.length} chapitres`);
}

main();
