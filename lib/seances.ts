import { allChapters } from "./content";
import type { Chapter } from "./content/types";

/** Séance enrichie du chapitre correspondant, prête à l'affichage. */
export interface SeanceAffichee {
  id: string;
  date: Date;
  classe: string;
  chapitre?: Chapter;
  /** Identifiant brut, conservé si le chapitre n'existe plus. */
  chapitreSlug: string;
  sections: string | null;
  travail: string | null;
  pourLe: Date | null;
  remarques: string | null;
  lienVisio: string | null;
  publiee: boolean;
}

export function rattacherChapitre<T extends { chapitre: string }>(
  seance: T
): T & { chapitreObjet?: Chapter } {
  return { ...seance, chapitreObjet: allChapters.find((c) => c.slug === seance.chapitre) };
}

/**
 * « 1-3 » ou « 1,4,5 » → numéros de sections. Sert à afficher les intitulés
 * réels et à pointer vers les bonnes parties du chapitre.
 */
export function numerosDeSections(sections: string | null | undefined): number[] {
  if (!sections) return [];
  const out = new Set<number>();
  for (const morceau of sections.split(/[,;]/)) {
    const plage = morceau.trim().match(/^(\d+)\s*[-–]\s*(\d+)$/);
    if (plage) {
      const [a, b] = [Number(plage[1]), Number(plage[2])].sort((x, y) => x - y);
      for (let i = a; i <= b; i++) out.add(i);
      continue;
    }
    const seul = morceau.trim().match(/^\d+$/);
    if (seul) out.add(Number(seul));
  }
  return [...out].sort((a, b) => a - b);
}

export const dateCourte = (d: Date) =>
  new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "long", year: "numeric" }).format(d);

export const dateJour = (d: Date) =>
  new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" }).format(d);

/** Pour les champs <input type="date">. */
export const dateIso = (d: Date | null | undefined) =>
  d ? new Date(d).toISOString().slice(0, 10) : "";
