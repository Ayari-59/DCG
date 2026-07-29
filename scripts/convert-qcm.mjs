/**
 * Conversion des QCM du manuel UE11.
 *
 * Deux sources, de richesse très inégale :
 *
 * — `_json/chNN.json` donne des questions complètes : énoncé, propositions,
 *   bonnes réponses, justification. Il n'existe que pour les chapitres 1 et
 *   19, seuls retouchés lors de la refonte du fil rouge.
 * — `QCM_CORRIGES_tous_chapitres.docx` couvre les dix-neuf chapitres, mais
 *   c'est un corrigé : il donne l'énoncé, la lettre de la bonne réponse et
 *   la justification, jamais le texte des propositions.
 *
 * Le script en tire donc deux choses de nature différente :
 *
 * 1. les QCM complets des chapitres 1 et 19 ;
 * 2. une flashcard par question pour les dix-neuf chapitres — l'énoncé au
 *    recto, la justification au verso. Rien n'y est inventé : le corrigé
 *    est déjà un couple question/réponse, il suffit de le retourner.
 *
 * Les propositions manquantes des chapitres 2 à 18 sont rédigées à part
 * (voir scripts/rediger-distracteurs.mjs) : ce script se contente de
 * préparer le chantier dans `_a-completer.json`.
 *
 *   node scripts/convert-qcm.mjs
 */

import fs from "node:fs";
import path from "node:path";
import mammoth from "mammoth";

const RACINE = process.cwd();
const SOURCE = path.join(RACINE, "sources", "UE 11 - CDG", "QCM - refonte fil rouge");
const CORRIGES = path.join(SOURCE, "QCM_CORRIGES_tous_chapitres.docx");
const JSONS = path.join(SOURCE, "_json");
const SORTIE = path.join(RACINE, "lib", "content", "qcm");

/**
 * Les chapitres du corrigé suivent exactement l'ordre du programme sur le
 * site : la correspondance est donc positionnelle, et vérifiée par le
 * rapprochement des intitulés affiché en fin d'exécution.
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

const LETTRES = ["A", "B", "C", "D", "E", "F"];

/** Lit le corrigé : dix-neuf chapitres, énoncé + lettres + justification. */
async function lireCorriges() {
  const { value } = await mammoth.extractRawText({ path: CORRIGES });
  const lignes = value.split("\n").map((l) => l.trim()).filter(Boolean);

  const chapitres = [];
  let courant = null;
  let question = null;

  for (const ligne of lignes) {
    const entete = ligne.match(/^Chapitre\s+(\d+)\s*:\s*(.+)$/);
    if (entete) {
      courant = { numero: Number(entete[1]), titre: entete[2].trim(), questions: [] };
      chapitres.push(courant);
      question = null;
      continue;
    }

    const enonce = ligne.match(/^(\d+)\.\s+(.+)$/);
    if (enonce && courant) {
      question = { numero: Number(enonce[1]), enonce: enonce[2].trim() };
      courant.questions.push(question);
      continue;
    }

    // « → Réponse : A, B, D. Silos, optimisation locale… »
    const reponse = ligne.match(/^→\s*Réponse\s*:\s*([A-F](?:\s*,\s*[A-F])*)\s*\.?\s*(.*)$/);
    if (reponse && question) {
      question.lettres = reponse[1].split(",").map((l) => l.trim());
      question.justification = reponse[2].trim();
    }
  }

  return chapitres;
}

/** Lit les questions complètes, quand elles existent. */
function lireJson(numero) {
  const fichier = path.join(JSONS, `ch${String(numero).padStart(2, "0")}.json`);
  if (!fs.existsSync(fichier)) return null;
  return JSON.parse(fs.readFileSync(fichier, "utf8"));
}

/**
 * Une question du corrigé devient une flashcard.
 *
 * La lettre de la bonne réponse est retirée : sans les propositions elle ne
 * désigne rien, et « B » au verso d'une carte n'apprend rien à personne.
 * C'est la justification qui porte le savoir.
 */
function versFlashcard(question, i) {
  return {
    id: `qcm${i + 1}`,
    front: question.enonce,
    back: question.justification,
  };
}

function entete(slug, quoi) {
  return `// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM - refonte fil rouge/
// ${quoi}
`;
}

/** Un slug devient un identifiant JavaScript : dcg-ue11-cout-cible → coutCible. */
function variable(slug) {
  return slug
    .replace(/^dcg-ue11-/, "")
    .replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

/**
 * L'index est écrit par le script plutôt que tenu à la main : les fichiers
 * qu'il rassemble sont eux-mêmes générés, et une liste d'imports oubliée
 * ne se remarque qu'au moment où une carte manque sur le site.
 */
function ecrireIndex() {
  const fichiers = fs
    .readdirSync(SORTIE)
    .filter((n) => n.endsWith(".generated.ts"));
  const cartes = fichiers.filter((n) => n.includes(".flashcards."));
  const quiz = fichiers.filter((n) => n.includes(".quiz."));

  const imports = [
    ...cartes.map(
      (n) =>
        `import { flashcards as fc${variable(n.replace(".flashcards.generated.ts", ""))} } from "./${n.replace(".ts", "")}";`
    ),
    ...quiz.map(
      (n) =>
        `import { quiz as qz${variable(n.replace(".quiz.generated.ts", ""))} } from "./${n.replace(".ts", "")}";`
    ),
  ];

  const table = (liste, suffixe, prefixe) =>
    liste
      .map((n) => {
        const slug = n.replace(suffixe, "");
        return `  "${slug}": ${prefixe}${variable(slug)},`;
      })
      .join("\n");

  fs.writeFileSync(
    path.join(SORTIE, "index.ts"),
    `// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
import type { Flashcard, QuizQuestion } from "../types";
${imports.join("\n")}

/** Flashcards tirées du corrigé QCM du manuel, par slug de chapitre. */
export const flashcardsQcmBySlug: Record<string, Flashcard[]> = {
${table(cartes, ".flashcards.generated.ts", "fc")}
};

/** QCM complets, là où les propositions existent dans les sources. */
export const quizQcmBySlug: Record<string, QuizQuestion[]> = {
${table(quiz, ".quiz.generated.ts", "qz")}
};
`
  );
}

async function main() {
  if (!fs.existsSync(CORRIGES)) {
    console.error(`Corrigé introuvable : ${CORRIGES}`);
    process.exit(1);
  }
  fs.mkdirSync(SORTIE, { recursive: true });

  const chapitres = await lireCorriges();
  if (chapitres.length !== SLUGS.length) {
    console.error(
      `Le corrigé compte ${chapitres.length} chapitres, le programme ${SLUGS.length} : ` +
        `la correspondance positionnelle n'est plus valable.`
    );
    process.exit(1);
  }

  const aCompleter = [];
  let cartes = 0;
  let questionsCompletes = 0;
  const rapport = [];

  for (const [i, chapitre] of chapitres.entries()) {
    const slug = SLUGS[i];
    const complet = lireJson(chapitre.numero);

    // ── Flashcards : disponibles pour tous les chapitres ──────────────
    const flashcards = chapitre.questions
      .filter((q) => q.justification)
      .map(versFlashcard);
    cartes += flashcards.length;

    fs.writeFileSync(
      path.join(SORTIE, `${slug}.flashcards.generated.ts`),
      entete(slug, "Flashcards tirées du corrigé : énoncé au recto, justification au verso.") +
        `import type { Flashcard } from "../types";\n\n` +
        `export const flashcards: Flashcard[] = ${JSON.stringify(flashcards, null, 2)};\n`
    );

    // ── QCM : seulement là où les propositions existent ───────────────
    if (complet) {
      const quiz = complet.questions.map((q, k) => ({
        id: `qcm${k + 1}`,
        question: String(q.q).trim(),
        choices: q.options.map((o) => String(o).trim()),
        answers: [...q.correct].sort((a, b) => a - b),
        explanation: String(q.explain ?? "").trim(),
      }));
      questionsCompletes += quiz.length;

      fs.writeFileSync(
        path.join(SORTIE, `${slug}.quiz.generated.ts`),
        entete(slug, "QCM complet, propositions comprises.") +
          `import type { QuizQuestion } from "../types";\n\n` +
          `export const quiz: QuizQuestion[] = ${JSON.stringify(quiz, null, 2)};\n`
      );
      rapport.push(
        `  ch${String(chapitre.numero).padStart(2)} ${flashcards.length
          .toString()
          .padStart(2)} cartes · ${quiz.length.toString().padStart(2)} questions complètes   ${chapitre.titre}`
      );
    } else {
      // Le chantier des propositions manquantes, prêt à être rédigé.
      aCompleter.push({
        chapitre: chapitre.numero,
        slug,
        titre: chapitre.titre,
        questions: chapitre.questions
          .filter((q) => q.lettres?.length)
          .map((q, k) => ({
            id: `qcm${k + 1}`,
            question: q.enonce,
            /** Positions à respecter : le corrigé imprimé fait foi. */
            answers: q.lettres.map((l) => LETTRES.indexOf(l)).sort((a, b) => a - b),
            explanation: q.justification,
          })),
      });
      rapport.push(
        `  ch${String(chapitre.numero).padStart(2)} ${flashcards.length
          .toString()
          .padStart(2)} cartes · propositions à rédiger        ${chapitre.titre}`
      );
    }
  }

  fs.writeFileSync(
    path.join(SORTIE, "_a-completer.json"),
    JSON.stringify(aCompleter, null, 2)
  );

  ecrireIndex();

  console.log(rapport.join("\n"));
  const restant = aCompleter.reduce((n, c) => n + c.questions.length, 0);
  console.log(
    `\n${cartes} flashcards · ${questionsCompletes} questions complètes · ` +
      `${restant} questions en attente de leurs propositions`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
