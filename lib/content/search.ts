import { allChapters } from "./index";
import { getTheme } from "./theme";
import type { EntreeRecherche } from "../search-index";

/**
 * Construction de l'index de recherche, côté serveur uniquement.
 *
 * Les clés sont volontairement d'une lettre : l'index est sérialisé dans la
 * page pour chaque visiteur, et des noms longs répétés quelques milliers de
 * fois pèsent plus lourd que le contenu lui-même.
 */

const sansAccents = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function construireIndex(): EntreeRecherche[] {
  return allChapters.flatMap((c) => {
    const theme = getTheme(c.slug);
    const base = `/cours/${c.slug}`;
    const contexte = `${c.level} ${c.ue} · Chapitre ${c.number}`;

    const entrees: EntreeRecherche[] = [
      {
        t: c.title,
        c: contexte,
        h: base,
        g: "Chapitre",
        b: theme.bar,
        k: sansAccents(`${c.title} ${c.description} ${theme.family} ${c.ue}`),
      },
      ...c.sections.map((s, i) => ({
        t: s.title,
        c: c.title,
        h: `${base}?section=${i + 1}`,
        g: "Section",
        b: theme.bar,
        k: sansAccents(s.title),
      })),
      ...(c.annales ?? []).map((a) => ({
        t: `${a.entreprise} — session ${a.year}`,
        c: `Annale · ${c.title}`,
        h: `${base}?onglet=annales`,
        g: "Annale",
        b: theme.bar,
        k: sansAccents(`${a.entreprise} ${a.year} annale ${c.title}`),
      })),
    ];

    if (c.quiz.length)
      entrees.push({
        t: `Quiz — ${c.title}`,
        c: `${c.quiz.length} questions`,
        h: `${base}?onglet=quiz`,
        g: "Quiz",
        b: theme.bar,
        k: sansAccents(`quiz qcm ${c.title}`),
      });

    if (c.flashcards.length)
      entrees.push({
        t: `Flashcards — ${c.title}`,
        c: `${c.flashcards.length} cartes`,
        h: `${base}?onglet=flashcards`,
        g: "Flashcards",
        b: theme.bar,
        k: sansAccents(`flashcards cartes revision ${c.title}`),
      });

    return entrees;
  });
}
