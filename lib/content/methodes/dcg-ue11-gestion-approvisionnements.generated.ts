// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Methode } from "../types";

export const methodes: Methode[] = [
  {
    "id": "m1",
    "theme": "Approvisionnements en avenir certain",
    "competences": [
      "Déterminer le programme optimal d’approvisionnement en avenir certain"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Pour choisir du programme d’approvisionnement optimal, vous devez respecter quatre étapes : •*"
      },
      {
        "type": "ol",
        "items": [
          "Repérer les paramètres du problème : prix du produit p, consommation en volume sur la période C, coût de lancement des commandes f, taux de possession du stock sur la période t. •",
          "S’assurer de l’homogénéité des données. •",
          "Vérifier que les hypothèses du modèle sont respectées (ventes ou consommations régulières, docilité du fournisseur et unicité du tarif du fournisseur). •",
          "En déduire les leviers d’action de la gestion du stock (nombre de commandes N, temps séparant deux commandes T et coût de gestion des stocks K)."
        ]
      }
    ]
  },
  {
    "id": "m2",
    "theme": "Budget d’approvisionnement",
    "competences": [
      "Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Afin de budgétiser correctement les approvisionnements, vous devez : •*"
      },
      {
        "type": "ol",
        "items": [
          "Repérer les modalités d’approvisionnement retenues par l’entreprise : – Périodes constantes : le nombre de commandes est connu, de même que le temps constant séparant deux commandes. Il faut déduire les volumes à approvisionner en lien avec les consommations cumulées. – Quantités constantes : le volume des commandes est connu. Il faut déterminer les dates des commandes en lien avec les consommations cumulées. • Choisir une technique (méthode graphique ou méthode comptable).",
          "•",
          "Reporter les résultats obtenus dans un tableau comparable à celui proposé dans l’exemple APMo du cours."
        ]
      }
    ]
  }
];
