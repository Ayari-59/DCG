export type Level = "DCG" | "DSCG";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "formula"; label?: string; text: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string; title?: string }
  | { type: "video"; youtubeId: string; title: string };

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
  /** index de la bonne réponse dans choices */
  answer: number;
  explanation: string;
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
