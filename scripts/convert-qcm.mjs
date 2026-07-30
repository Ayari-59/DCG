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
 * 1. le QCM de chaque chapitre : la banque complète, plus une sélection de
 *    vingt questions — c'est elle que le site joue, pour que chaque
 *    chapitre propose le même format. Les écartées restent dans le fichier
 *    généré : le dossier sources n'est pas dans le dépôt Git, le fichier
 *    généré est donc leur seule copie versionnée.
 * 2. une flashcard par question de la banque — l'énoncé au recto, la
 *    justification au verso. Rien n'y est inventé : une question corrigée
 *    est déjà un couple question/réponse, il suffit de le retourner.
 *
 * La sélection est mécanique et relisible : elle respecte la proportion
 * des trois types de questions (unique, multiple, vrai/faux), puis prend
 * dans chaque type des questions régulièrement espacées — les questions
 * suivent l'ordre du chapitre, l'espacement vaut donc couverture. Le
 * détail retenu/écarté est écrit dans docs/selection-qcm.md pour relecture
 * par l'auteur.
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

/** Nombre de questions jouées par quiz, identique pour tous les chapitres. */
const TAILLE_QUIZ = 20;

/**
 * Choisit les indices des questions retenues pour le quiz.
 *
 * Deux principes, dans cet ordre :
 * — la proportion des types est conservée (méthode du plus fort reste) :
 *   un chapitre à six questions multiples n'en perd pas cinq ;
 * — dans chaque type, les retenues sont régulièrement espacées. Les
 *   questions suivent la progression du chapitre : l'espacement garantit
 *   qu'aucune partie du chapitre n'est écartée en bloc.
 */
function selectionner(brutes) {
  if (brutes.length <= TAILLE_QUIZ) return brutes.map((_, i) => i);

  const parType = new Map();
  brutes.forEach((q, i) => {
    const t = q.type ?? "unique";
    if (!parType.has(t)) parType.set(t, []);
    parType.get(t).push(i);
  });

  // Quotas proportionnels, complétés par les plus forts restes.
  const quotas = new Map();
  const restes = [];
  let attribues = 0;
  for (const [type, indices] of parType) {
    const exact = (indices.length * TAILLE_QUIZ) / brutes.length;
    const quota = Math.floor(exact);
    quotas.set(type, quota);
    attribues += quota;
    restes.push([type, exact - quota]);
  }
  restes.sort((a, b) => b[1] - a[1]);
  for (let k = 0; k < TAILLE_QUIZ - attribues; k++) {
    const type = restes[k % restes.length][0];
    quotas.set(type, quotas.get(type) + 1);
  }

  const retenus = [];
  for (const [type, indices] of parType) {
    const quota = Math.min(quotas.get(type), indices.length);
    if (quota === indices.length) {
      retenus.push(...indices);
      continue;
    }
    // Espacement régulier, premières et dernières comprises.
    const pris = new Set();
    for (let k = 0; k < quota; k++) {
      let position = Math.round((k * (indices.length - 1)) / (quota - 1 || 1));
      while (pris.has(position)) position++;
      pris.add(position);
    }
    retenus.push(...[...pris].map((p) => indices[p]));
  }

  return retenus.sort((a, b) => a - b);
}

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
  let jouees = 0;
  const relecture = [
    "# Sélection des quiz — à relire",
    "",
    "Chaque chapitre joue vingt questions sur le site ; les autres restent",
    "dans la banque (fichier `.quiz.generated.ts`, export `banque`) et ne",
    "sont pas perdues. La sélection conserve la proportion des types et",
    "espace les retenues le long du chapitre. Générée par",
    "`scripts/convert-qcm.mjs` — pour changer une question, le dire suffit :",
    "la sélection peut être forcée question par question.",
    "",
  ];

  for (const [i, slug] of SLUGS.entries()) {
    const fichier = path.join(SOURCE, `ch${String(i + 1).padStart(2, "0")}.json`);
    if (!fs.existsSync(fichier)) {
      console.error(`Fichier absent : ${fichier}`);
      process.exit(1);
    }
    const { title, questions: brutes } = JSON.parse(fs.readFileSync(fichier, "utf8"));

    const banque = brutes.map((q, k) => ({
      id: `qcm${k + 1}`,
      question: String(q.q).trim(),
      choices: q.options?.length ? q.options.map((o) => String(o).trim()) : VRAI_FAUX,
      answers: [...q.correct].sort((a, b) => a - b),
      explanation: String(q.explain ?? "").trim(),
    }));

    // Garde-fous : une question sans proposition ou dont une bonne réponse
    // pointe hors des propositions bloque ou fausse le quiz.
    for (const q of banque) {
      if (!q.choices.length) {
        console.error(`${slug} · ${q.id} : aucune proposition`);
        process.exit(1);
      }
      if (!q.answers.length || q.answers.some((a) => a < 0 || a >= q.choices.length)) {
        console.error(`${slug} · ${q.id} : réponse hors des propositions`);
        process.exit(1);
      }
    }

    const retenues = selectionner(brutes);
    const flashcards = brutes.map(versFlashcard);
    cartes += flashcards.length;
    jouees += retenues.length;

    fs.writeFileSync(
      path.join(SORTIE, `${slug}.quiz.generated.ts`),
      entete("Banque complète du manuel ; le site joue la sélection `quiz`.") +
        `import type { QuizQuestion } from "../types";\n\n` +
        `export const banque: QuizQuestion[] = ${JSON.stringify(banque, null, 2)};\n\n` +
        `/** Sélection jouée sur le site — voir docs/selection-qcm.md. */\n` +
        `const SELECTION = [${retenues.join(", ")}];\n\n` +
        `export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);\n`
    );
    fs.writeFileSync(
      path.join(SORTIE, `${slug}.flashcards.generated.ts`),
      entete("Flashcards tirées du QCM : énoncé au recto, justification au verso.") +
        `import type { Flashcard } from "../types";\n\n` +
        `export const flashcards: Flashcard[] = ${JSON.stringify(flashcards, null, 2)};\n`
    );

    // ── Document de relecture ─────────────────────────────────────────
    const ecartees = brutes.map((_, k) => k).filter((k) => !retenues.includes(k));
    const etiquette = (k) => {
      const type = brutes[k].type === "multiple" ? "multiple" : brutes[k].type === "vraifaux" ? "vrai/faux" : "unique";
      return `${String(k + 1).padStart(2)} (${type})`;
    };
    relecture.push(
      `## ${(title ?? slug).replace(/^QCM — /, "")}`,
      "",
      `Retenues (${retenues.length}) : ${retenues.map((k) => k + 1).join(", ")}`,
      "",
      `Écartées (${ecartees.length}) :`,
      ...ecartees.map((k) => `- ${etiquette(k)} — ${String(brutes[k].q).trim()}`),
      ""
    );

    console.log(
      `  ch${String(i + 1).padStart(2)}  ${String(retenues.length).padStart(2)}/${String(banque.length).padStart(2)} jouées · ` +
        `${String(flashcards.length).padStart(3)} cartes   ${(title ?? slug).replace(/^QCM — /, "").slice(0, 55)}`
    );
  }

  fs.mkdirSync(path.join(RACINE, "docs"), { recursive: true });
  fs.writeFileSync(path.join(RACINE, "docs", "selection-qcm.md"), relecture.join("\n"));

  ecrireIndex();
  console.log(
    `\n${jouees} questions jouées (banque de ${SLUGS.length ? cartes : 0}) · ${cartes} flashcards · ` +
      `sélection détaillée dans docs/selection-qcm.md`
  );
}

main();
