// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Methode } from "../types";

export const methodes: Methode[] = [
  {
    "id": "m1",
    "theme": "Méthodes de prévision",
    "competences": [
      "Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Dans la plupart des entreprises, le volume des ventes présente une saisonnalité qui oblige à intégrer des variations saisonnières. Les prévisions imposent un raisonnement par étapes : •*"
      },
      {
        "type": "ol",
        "items": [
          "En partant d’un historique des ventes (qui vous est fourni), vous devez trouver une fonction ajustée qui extrapole les tendances : – Possibilité 1 : (facultative). L’ajustement mécanique, par les moyennes mobiles, est moins propice à des simulations mathématiques, aussi il sert le plus souvent à illustrer les données qu’à les calculer. La représentation graphique peut vous aider à repérer une tendance à long terme puisque les moyennes mobiles écrêtent les phénomènes accidentels. – Possibilité",
          "Vous pouvez choisir un ajustement par la méthode des moindres carrés dont le but est de minimiser le carré des distances entre les valeurs réelles et les valeurs ajustées. Vous devez déterminer la forme algébrique de la fonction qui ajuste au mieux les valeurs du nuage de points formé par l’historique. Plusieurs types de fonction (linéaire, puissance ou autre) et la méthode des résidus déterminent la « meilleure fonction ». La plupart du temps, la fonction d’ajustement est une droite affine de type y (valeur ajustée) = a × t (valeur réelle) + b •",
          "Déterminer les coefficients saisonniers à appliquer aux prévisions en volume des ventes. En partant des valeurs ajustées obtenues à l’étape 1, vous devez : – Calculer, pour chaque trimestre, l’indice saisonnier. Celui-ci est égal au rapport de la valeur réelle sur la valeur ajustée. Ces calculs pour être précis doivent être effectués avec trois ou quatre décimales. – Calculer pour chaque trimestre le « coefficient saisonnier » qui est égal à la moyenne des rapports précédents et ce, pour chaque trimestre."
        ]
      }
    ]
  }
];
