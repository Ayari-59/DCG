// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Methode } from "../types";

export const methodes: Methode[] = [
  {
    "id": "m1",
    "theme": "IR des charges fixes",
    "competences": [
      "Calculer un coefficient et un coût d’imputation rationnelle.",
      "Déterminer et interpréter la différence d’imputation (coût de sous-activité, boni de suractivité).",
      "Décomposer le résultat et éclairer une décision de pilotage des capacités."
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*L’imputation rationnelle « variabilise » les charges fixes pour neutraliser l’effet du niveau d’activité sur le coût unitaire. Procédure : (1) coefficient d’imputation rationnelle = activité réelle / activité normale ; (2) charges fixes imputées = charges fixes × coefficient ; (3) coût = charges variables réelles + charges fixes imputées ; (4) coût unitaire, stable quel que soit le niveau d’activité ; (5) différence d’imputation = charges fixes réelles − charges fixes imputées. Un coefficient inférieur à 1 traduit une sous-activité (coût de sous-activité) ; supérieur à 1, une suractivité (boni). Le coefficient s’applique centre par centre.*"
      }
    ]
  }
];
