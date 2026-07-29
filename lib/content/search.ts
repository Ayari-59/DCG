import { allChapters } from "./index";
import { getTheme } from "./theme";

export interface EntreeRecherche {
  /** Libellé principal affiché dans la palette. */
  titre: string;
  /** Contexte : chapitre d'appartenance, session d'annale… */
  contexte: string;
  href: string;
  categorie: "Chapitre" | "Section" | "Annale" | "Fiche" | "Quiz" | "Flashcards" | "Méthode";
  /** Couleur de la famille, pour la pastille. */
  bar: string;
  /** Texte normalisé sur lequel porte la recherche. */
  cle: string;
}

const sansAccents = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * Index de recherche construit une fois depuis le contenu du site.
 * Volontairement plat : quelques milliers d'entrées se filtrent
 * instantanément côté navigateur, sans moteur ni service externe.
 */
export const indexRecherche: EntreeRecherche[] = allChapters.flatMap((c) => {
  const theme = getTheme(c.slug);
  const base = `/cours/${c.slug}`;
  const contexte = `${c.level} ${c.ue} · Chapitre ${c.number}`;

  const entrees: EntreeRecherche[] = [
    {
      titre: c.title,
      contexte,
      href: base,
      categorie: "Chapitre",
      bar: theme.bar,
      cle: sansAccents(`${c.title} ${c.description} ${theme.family}`),
    },
    ...c.sections.map((s, i) => ({
      titre: s.title,
      contexte: c.title,
      href: `${base}?section=${i + 1}`,
      categorie: "Section" as const,
      bar: theme.bar,
      cle: sansAccents(s.title),
    })),
    ...(c.annales ?? []).map((a) => ({
      titre: `${a.entreprise} — session ${a.year}`,
      contexte: `Annale · ${c.title}`,
      href: `${base}?onglet=annales`,
      categorie: "Annale" as const,
      bar: theme.bar,
      cle: sansAccents(`${a.entreprise} ${a.year} annale ${c.title}`),
    })),
  ];

  if (c.quiz.length)
    entrees.push({
      titre: `Quiz — ${c.title}`,
      contexte: `${c.quiz.length} questions`,
      href: `${base}?onglet=quiz`,
      categorie: "Quiz",
      bar: theme.bar,
      cle: sansAccents(`quiz qcm ${c.title}`),
    });

  if (c.flashcards.length)
    entrees.push({
      titre: `Flashcards — ${c.title}`,
      contexte: `${c.flashcards.length} cartes`,
      href: `${base}?onglet=flashcards`,
      categorie: "Flashcards",
      bar: theme.bar,
      cle: sansAccents(`flashcards cartes revision ${c.title}`),
    });

  return entrees;
});

/** Filtre simple par sous-chaînes : tous les mots doivent être présents. */
export function chercher(requete: string, limite = 12): EntreeRecherche[] {
  const mots = sansAccents(requete).split(/\s+/).filter(Boolean);
  if (!mots.length) return [];

  const resultats: { entree: EntreeRecherche; score: number }[] = [];
  for (const entree of indexRecherche) {
    if (!mots.every((m) => entree.cle.includes(m))) continue;
    // Une correspondance en début de libellé prime, un chapitre prime sur une section.
    let score = entree.cle.indexOf(mots[0]);
    if (entree.categorie === "Chapitre") score -= 50;
    resultats.push({ entree, score });
  }
  return resultats
    .sort((a, b) => a.score - b.score)
    .slice(0, limite)
    .map((r) => r.entree);
}
