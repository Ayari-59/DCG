/**
 * Les titres de sections portent déjà leur numéro de partie, tel qu'il figure
 * dans le manuel : « 2. Calculer… », « Partie 3 — Construire… », « 3.10 … ».
 * On l'extrait pour l'afficher à part, et pour que la numérotation du
 * sommaire soit celle du chapitre plutôt qu'un simple rang dans la liste.
 * Les sections hors numérotation — introduction, tableau récapitulatif —
 * n'ont pas de numéro et ne doivent pas en recevoir un.
 */
export interface TitreSection {
  numero: string | null;
  libelle: string;
}

const NUMERO_SIMPLE = /^(\d+(?:\.\d+)*)\s*[.)]?\s+(.+)$/;
const NUMERO_PARTIE = /^Partie\s+(\d+(?:\.\d+)*)\s*[—–:-]\s*(.+)$/i;

export function titreSection(titre: string): TitreSection {
  const partie = titre.match(NUMERO_PARTIE);
  if (partie) return { numero: partie[1], libelle: partie[2].trim() };

  const simple = titre.match(NUMERO_SIMPLE);
  if (simple) return { numero: simple[1], libelle: simple[2].trim() };

  return { numero: null, libelle: titre };
}
