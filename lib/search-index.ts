/**
 * Type et filtrage de la recherche — sans aucune dépendance au contenu.
 *
 * Ce fichier est importé par le navigateur : il ne doit jamais tirer
 * lib/content avec lui, sous peine d'embarquer les 28 chapitres dans le
 * paquet client. L'index est construit côté serveur (lib/content/search.ts)
 * puis transmis en propriété.
 */

export interface EntreeRecherche {
  /** Libellé principal affiché dans la palette. */
  t: string;
  /** Contexte : chapitre d'appartenance, session d'annale… */
  c: string;
  h: string;
  /** Catégorie affichée en pastille. */
  g: string;
  /** Classe de couleur de la famille. */
  b: string;
  /** Texte normalisé sur lequel porte la recherche. */
  k: string;
}

/** Filtre par sous-chaînes : tous les mots saisis doivent être présents. */
export function chercher(
  index: EntreeRecherche[],
  requete: string,
  limite = 12
): EntreeRecherche[] {
  const mots = requete
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  if (!mots.length) return [];

  const resultats: { e: EntreeRecherche; score: number }[] = [];
  for (const e of index) {
    if (!mots.every((m) => e.k.includes(m))) continue;
    // Une correspondance en début de libellé prime ; un chapitre prime sur une section.
    let score = e.k.indexOf(mots[0]);
    if (e.g === "Chapitre") score -= 50;
    resultats.push({ e, score });
  }
  return resultats
    .sort((a, b) => a.score - b.score)
    .slice(0, limite)
    .map((r) => r.e);
}
