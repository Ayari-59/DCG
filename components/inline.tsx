import type { ReactNode } from "react";

/**
 * L'extraction Word colle le texte au passage en gras qui le précède :
 * « **Utilité :**satisfaction que… ». Le mot manquant d'espace se retrouve
 * dans près de trois mille endroits du site. Plutôt que de corriger le
 * contenu généré — qui serait réécrit à la prochaine conversion —, l'espace
 * est rétabli à l'affichage, là où le collage est reconnaissable sans
 * ambiguïté : un gras qui se termine directement sur une lettre.
 */
const COLLAGE = /(\*\*[^*\n]+\*\*)(?=[0-9A-Za-zÀ-ÖØ-öø-ÿ])/g;

/** Rend le mini-markdown des contenus : **gras** et *italique*. */
export function renderInline(text: string): ReactNode[] {
  return text
    .replace(COLLAGE, "$1 ")
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return (
          <em key={i} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return <span key={i}>{part}</span>;
    });
}
