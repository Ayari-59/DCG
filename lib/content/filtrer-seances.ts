import type { ContentBlock, Section } from "./types";

/**
 * Les chapitres UE13 sont générés depuis des diaporamas de séances qui
 * mêlent le cours (concepts, modèles, méthode) et le cadrage de classe
 * (objectifs de séance, activités/animations avec minutage et consignes).
 *
 * L'auteur publie le cours mais gère les activités en classe : cette
 * fonction retire les blocs de cadrage sans toucher aux fichiers générés.
 */

const BLOCS_SEANCE = new Set([
  "OBJECTIFS DE LA SÉANCE",
  "ACTIVITÉ / ANIMATION",
]);

const BLOCS_COURS = new Set([
  "SYNTHÈSE",
  "À RETENIR",
]);

export function sansCadrageSeance(sections: Section[]): Section[] {
  return sections
    .map((s) => ({ ...s, blocks: filtrerBlocs(s.blocks) }))
    .filter((s) => s.blocks.length > 0);
}

function filtrerBlocs(blocks: ContentBlock[]): ContentBlock[] {
  const out: ContentBlock[] = [];
  let skip = false;

  for (const b of blocks) {
    if (b.type === "h4") {
      if (BLOCS_SEANCE.has(b.text)) {
        skip = true;
        continue;
      }
      if (BLOCS_COURS.has(b.text) || !skip) {
        skip = false;
      }
    }

    if (!skip) out.push(b);
  }

  return out;
}
