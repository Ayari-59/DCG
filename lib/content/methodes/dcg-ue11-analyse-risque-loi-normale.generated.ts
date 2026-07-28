// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Methode } from "../types";

export const methodes: Methode[] = [
  {
    "id": "m1",
    "theme": "A) Espérance et écart-type",
    "competences": [
      "Calculer et interpréter une espérance et un écart-type de ventes et résultat"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Cette compétence est à la fois calculatoire et analytique.*"
      },
      {
        "type": "p",
        "text": "Pour calculer une espérance et un écart-type de ventes, de coûts ou de résultats, il est nécessaire de repérer les données du contexte aléatoire. Ensuite, il faut appliquer les règles de transformation d’une variable normale en une autre en utilisant les conditions de transformation des variables linéaires indépendantes."
      }
    ]
  },
  {
    "id": "m2",
    "theme": "B) Lois de probabilité",
    "competences": [
      "Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Face à une situation de gestion, il vous sera demandé d’utiliser une loi de probabilité. Dans le cours, il est explicitement développé l’utilisation de la loi binomiale, de la loi de Poisson et de la loi normale dans une situation de gestion. Vous devez immédiatement repérer dans l’énoncé les données présentes qui vous éclaireront sur la loi à utiliser.*"
      },
      {
        "type": "p",
        "text": "Voici des exemples de lois de probabilité adaptée à des situations de gestion :"
      },
      {
        "type": "p",
        "text": "Loi binomiale et loi de Poisson : acceptation d’un niveau de qualité ; réponse à une demande d’information."
      },
      {
        "type": "p",
        "text": "Loi normale : gestion des stocks (stock de sécurité) ; gestion des ventes (seuil de rentabilité) ; gestion de projet (durée probable de réalisation) ; gestion de la qualité (niveau de risque acceptable à partir d’un échantillon)."
      },
      {
        "type": "p",
        "text": "Pour interpréter les probabilités, vous jugez la situation par rapport au contexte. Les probabilités obtenues sont-elles fortes ou faibles ? Sont-elles pertinentes ?"
      }
    ]
  }
];
