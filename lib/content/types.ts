export type Level = "DCG" | "DSCG";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "formula"; label?: string; text: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string; title?: string }
  | { type: "video"; youtubeId: string; title: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
      caption?: string;
    };

export interface Section {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: string[];
  /**
   * Index des bonnes réponses dans choices. Une liste plutôt qu'un seul
   * indice : les QCM du manuel comptent une question sur cinq à réponses
   * multiples, et ce sont souvent les plus discriminantes.
   */
  answers: number[];
  explanation: string;
}

export interface ChapterVideo {
  youtubeId: string;
  title: string;
}

/** Démarche à appliquer, issue des encadrés « Méthode » des cahiers. */
export interface Methode {
  id: string;
  /** Thème du cahier auquel la démarche se rattache. */
  theme: string;
  /** Compétences visées, telles qu'énoncées par le cahier. */
  competences: string[];
  blocks: ContentBlock[];
}

/** Sujet d'examen d'une session passée, rattaché à un thème. */
export interface Annale {
  id: string;
  year: number;
  /** « Dossier 1 », quand le sujet ne porte que sur une partie de l'épreuve. */
  dossier?: string;
  entreprise: string;
  blocks: ContentBlock[];
}

export interface Exercise {
  id: string;
  /** Repère du cahier source : « A1.1 », « Cas2 »… */
  label: string;
  title: string;
  /** Nombre d'étoiles du cahier (1 à 3). */
  difficulty?: number;
  durationMin?: number;
  statement: ContentBlock[];
  /** Vide si le cahier de corrigés ne couvre pas cet exercice. */
  correction: ContentBlock[];
}

export interface Notion {
  cat: string;
  ch: string;
  titre: string;
  definition: string;
  points: string[];
  formules: string[];
  methode: string[];
  piege: string;
  retenir: string;
  svg: string;
}

export interface Chapter {
  slug: string;
  level: Level;
  ue: string;
  number: number;
  title: string;
  description: string;
  durationMin: number;
  sections: Section[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  /** Vidéos du chapitre (YouTube), affichées en tête de leçon. */
  videos?: ChapterVideo[];
  /** Applications issues des cahiers d'énoncés et de corrigés. */
  exercises?: Exercise[];
  /** Démarches méthodologiques issues des cahiers d'énoncés. */
  methodes?: Methode[];
  /** Sujets d'annales rattachés au thème du chapitre. */
  annales?: Annale[];
  /** Fiches de la banque de notions rattachées au chapitre. */
  notions?: Notion[];
}

/** Chapitre annoncé mais pas encore publié */
export interface UpcomingChapter {
  number: number;
  title: string;
}

export interface Program {
  level: Level;
  ue: string;
  title: string;
  description: string;
  chapters: Chapter[];
  upcoming: UpcomingChapter[];
}
