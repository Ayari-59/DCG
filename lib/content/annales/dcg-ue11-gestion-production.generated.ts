// Généré par scripts/convert-annales.mjs depuis les annales par thème.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Annale } from "../types";

export const annales: Annale[] = [
  {
    "id": "a1",
    "year": 2009,
    "dossier": "Dossier 2",
    "entreprise": "AIRELEC",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**L’usine de Trappes (Yvelines) de la société AIRELEC fabrique trois modèles de sèche-mains électriques « anti-vandalisme » (Buffalo, Ouragan, Tornade). Ses résultats sont jugés faibles : la direction s’interroge sur le dimensionnement des moyens de production (ateliers de peinture, montage et contrôle) au regard des débouchés commerciaux.\n**Votre mission.**À la demande du PDG, conduire une étude d’optimisation de l’activité 2008 de l’usine afin de déterminer le programme de production le plus rentable.\n**L’enjeu décisionnel.**Sous contraintes de capacité des ateliers et de débouchés, quel mix de production maximise la marge sur coût variable, et le résultat optimal peut-il encore être amélioré ?\n**Compétences mobilisées.**\n– Formuler une fonction économique de maximisation de la marge sur coût variable\n– Traduire des contraintes de capacité et de débouchés en programme linéaire (forme canonique)\n– Résoudre graphiquement un programme linéaire\n– Calculer et interpréter le résultat optimisé\n**Notions clés.***Programmation linéaire · marge sur coût variable · contraintes de capacité · résolution graphique · goulot*\n**Exercice de référence.***DCG UE11 · Session 2009 · Sujet AIRELEC · Dossier 2.*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 2 – OPTIMISATION DE L'ActIviTÉ"
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**A l’aide de l'*annexe 5*:**"
      },
      {
        "type": "p",
        "text": "1. Expliquer pourquoi, pour optimiser le résultat, il est nécessaire d'établir une fonction économique visant à maximiser la marge sur coût variable."
      },
      {
        "type": "p",
        "text": "2. Justifier la décision qui a été prise de fixer le programme de production du modèle *Tornade* à 4 000 unités."
      },
      {
        "type": "p",
        "text": "3. Le programme de production du modèle *Tornade* ayant été fixé à 4 000, calculer les capacités des ateliers de peinture, montage et CEE (Contrôle – Emballage – Expédition) restant disponibles pour les produits *Buffalo* et *Ouragan.*"
      },
      {
        "type": "p",
        "text": "4. Présenter, sous forme canonique, le programme linéaire prenant en compte les données rassemblées dans l'*annexe 5*."
      },
      {
        "type": "p",
        "text": "5. Résoudre graphiquement ce programme linéaire (annexe A à rendre avec la copie)."
      },
      {
        "type": "p",
        "text": "6. Calculer le résultat optimisé de l'usine et comparer le au résultat réel de 2008."
      },
      {
        "type": "p",
        "text": "7. Le résultat optimal pourrait-il être amélioré ?"
      },
      {
        "type": "p",
        "text": "Dans l'affirmative, et sans faire de calculs, à quelles conditions ?"
      },
      {
        "type": "p",
        "text": "**Annexe 5**"
      },
      {
        "type": "h3",
        "text": "Synthèse des données d'exploitation de l'usine de Trappes pour 2008"
      },
      {
        "type": "p",
        "text": "L'usine de Trappes est spécialisée dans la fabrication des trois modèles suivants de la gamme \"anti-vandalisme\" :"
      },
      {
        "type": "p",
        "text": "- Buffalo,"
      },
      {
        "type": "p",
        "text": "- Ouragan,"
      },
      {
        "type": "p",
        "text": "- Tornade."
      },
      {
        "type": "p",
        "text": "Les données caractéristiques de l'exploitation en 2008 sont résumées dans le tableau suivant (montants unitaires) :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Buffalo**",
          "**Ouragan**",
          "**Tornade**"
        ],
        "rows": [
          [
            "Prix de vente",
            "280,00",
            "350,00",
            "420,00"
          ],
          [
            "Coûts variables",
            "190,00",
            "215,00",
            "235,00"
          ],
          [
            "Marge sur coûts variables",
            "90,00",
            "135,00",
            "185,00"
          ],
          [
            "Coûts fixes",
            "20,00",
            "25,00",
            "30,00"
          ],
          [
            "Résultat",
            "70,00",
            "110,00",
            "155,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les quantités vendues ont été :"
      },
      {
        "type": "p",
        "text": "- Buffalo 6 900 unités"
      },
      {
        "type": "p",
        "text": "- Ouragan 6 000 unités"
      },
      {
        "type": "p",
        "text": "- Tornade 3 100 unités"
      },
      {
        "type": "p",
        "text": "Les temps de fabrication sont :"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Temps de MOD par produit**"
        ],
        "rows": [
          [
            "***Buffalo***",
            "***Ouragan***",
            "***Tornade***"
          ],
          [
            "Montage",
            "15 mn",
            "30 mn",
            "30 mn"
          ],
          [
            "CEE (Contrôle-Emballage-Expédition)",
            "30 mn",
            "45 mn",
            "45 mn"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le temps de peinture unitaire est identique pour chaque produit."
      },
      {
        "type": "p",
        "text": "Les capacités disponibles sont les suivantes :"
      },
      {
        "type": "p",
        "text": "Atelier de peinture : 16 000 unités"
      },
      {
        "type": "p",
        "text": "Atelier de montage 6 300 heures"
      },
      {
        "type": "p",
        "text": "Atelier CEE 10 500 heures"
      },
      {
        "type": "p",
        "text": "Une étude de marché a établi que l'entreprise pouvait vendre :"
      },
      {
        "type": "p",
        "text": "- Buffalo 8 500 unités"
      },
      {
        "type": "p",
        "text": "- Ouragan 6 500 unités"
      },
      {
        "type": "p",
        "text": "- Tornade 4 000 unités"
      },
      {
        "type": "p",
        "text": "Pour cette étude d'optimisation, il a été décidé de fixer a priori le programme de fabrication du modèle *Tornade* à 4 000 unités."
      },
      {
        "type": "p",
        "text": "Les charges fixes resteront inchangées."
      }
    ]
  },
  {
    "id": "a2",
    "year": 2011,
    "dossier": "Dossier 2",
    "entreprise": "LE LIVRE FRANCAIS",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**La SIL, imprimeur intégré créé en 1969 et implanté en région parisienne, maîtrise tout le processus industriel du livre (pré-presse, impression, façonnage) pour l’éditeur LLF et d’autres maisons d’édition. Pour lancer une nouvelle collection documentaire jeunesse à support numérique, elle envisage d’implanter une nouvelle unité de production dans un bâtiment de 1 000 m².\n**Votre mission.**Planifier le projet d’aménagement de la nouvelle chaîne de production et rechercher son accélération au moindre coût.\n**L’enjeu décisionnel.**Un retard de mise sur le marché génère un manque à gagner. Comment ordonnancer les travaux, situer le chemin critique et réduire la durée du projet au coût le plus faible ?\n**Compétences mobilisées.**\n– Justifier le recours à une méthode d’ordonnancement\n– Construire un graphe PERT/MPM, déterminer le chemin critique et la date de fin\n– Calculer et interpréter les marges totales et libres\n– Optimiser la durée d’un projet au moindre coût (coût marginal d’accélération)\n**Notions clés.***Ordonnancement · PERT / MPM · chemin critique · marges totale et libre · accélération au moindre coût*\n**Exercice de référence.***DCG UE11 · Session 2011 · Sujet LE LIVRE FRANÇAIS · Dossier 2.*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 2 - Investissement et ordonnancement"
      },
      {
        "type": "p",
        "text": "Implantée en région parisienne, cette entreprise apporte des solutions adaptées à toutes les demandes de l’édition (du livre de littérature au livre technique, en passant par le livre de poche et le magazine)."
      },
      {
        "type": "p",
        "text": "Pour développer la nouvelle collection de l’éditeur LLF (livre documentaire pour les 9-12 ans avec support numérique) et répondre à la demande d’autres maisons d’édition, la mise en place d’une nouvelle unité de production dans un bâtiment de 1 000 m² est envisagée. Elle nécessite une multitude d’opérations et il est indispensable d’utiliser une méthode d’ordonnancement."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "ol",
        "items": [
          "**Expliquer en une dizaine de lignes dans quels cas il est intéressant de recourir à une méthode d’ordonnancement et quels sont les avantages d’un tel outil.**"
        ]
      },
      {
        "type": "p",
        "text": "**A l’aide de l’*annexe 3*:**"
      },
      {
        "type": "ol",
        "items": [
          "**Représenter, par un graphe PERT ou MPM, le planning d’avancement des travaux. Déterminer le chemin critique et en déduire la date prévisionnelle de fin des travaux.**",
          "**Calculer et interpréter les marges totales et libres de chaque tâche.**"
        ]
      },
      {
        "type": "p",
        "text": "**A l’aide de l’*annexe 4*:**"
      },
      {
        "type": "ol",
        "items": [
          "**Quelle opération doit-on réduire en priorité pour diminuer la durée du projet au moindre coût ? Justifier la réponse.**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 3**"
      },
      {
        "type": "p",
        "text": "**Planning d’aménagement de la chaîne de réalisation**"
      },
      {
        "type": "table",
        "headers": [
          "**Opérations**",
          "**Description de l’opération**",
          "**Durée**",
          "**Opérations pré-requises**"
        ],
        "rows": [
          [
            "A",
            "Rénovation du bâtiment (électricité, isolation thermique et acoustique)",
            "12 jours",
            ""
          ],
          [
            "B",
            "Mise en conformité environnementale (assainissement, collecte et élimination des déchets, sécurisation des stockages)",
            "15 jours",
            ""
          ],
          [
            "C",
            "Réorganisation et extension de l’atelier prépresse (studio PAO, scanners, flashage, …)",
            "10 jours",
            "A"
          ],
          [
            "D",
            "Mise en place du parc machines d’impression",
            "6 jours",
            "A, B"
          ],
          [
            "E",
            "Installation de l’équipement façonnage (plieuses, colleuse, encarteuse, piqueuse, massicots, …)",
            "8 jours",
            "A, B, D"
          ],
          [
            "F",
            "Essais et tests techniques",
            "3 jours",
            "C, D, E"
          ],
          [
            "G",
            "Formation du personnel sur site",
            "10 jours",
            "C, D, E, F"
          ],
          [
            "H",
            "Contrôle qualité",
            "2 jours",
            "F, G"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 4**"
      },
      {
        "type": "p",
        "text": "**Accélération du projet d’investissement au moindre coût**"
      },
      {
        "type": "p",
        "text": "Une étude commerciale menée par l’éditeur LLF met en évidence « un manque à gagner » qui dépend de la date de mise sur le marché de la nouvelle collection."
      },
      {
        "type": "p",
        "text": "Pour lancer la production de la nouvelle collection rapidement, il est envisagé de diminuer le temps de réalisation du projet d’investissement. Une étude technique fait apparaître la possibilité d’accélérer certaines opérations avec, en contrepartie, l’accroissement du coût de celles-ci (recours aux heures supplémentaires, …)."
      },
      {
        "type": "p",
        "text": "Les opérations du projet sont classées, dans le tableau ci-dessous, en fonction de leur coût marginal. Ce coût marginal correspond à l’accroissement du coût de chaque opération, par jour économisé."
      },
      {
        "type": "table",
        "headers": [
          "**Classement des opérations en fonction de leur coût marginal**",
          "**C**",
          "**H**",
          "**F**",
          "**D**",
          "**E**",
          "**A**",
          "**G**",
          "**B**"
        ],
        "rows": [
          [
            "Coût marginal croissant"
          ]
        ]
      }
    ]
  },
  {
    "id": "a3",
    "year": 2014,
    "dossier": "Dossier 1",
    "entreprise": "BIZOT",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Saonica, filiale du groupe BIZOT, fabrique des meubles en kit destinés à l’équipement de la maison, dont deux modèles phares : la bibliothèque LIBRO et le lit mezzanine JURA. Les éléments en bois passent par un atelier de sciage puis un atelier de perçage. Une étude de marché révèle des débouchés très supérieurs à la production actuelle.\n**Votre mission.**Étudier le programme de production trimestriel des deux modèles et proposer des actions pour améliorer le résultat.\n**L’enjeu décisionnel.**Sous contraintes d’approvisionnement en bois et de capacité des ateliers, quel programme maximise la marge, et quelle contrainte (goulot) lever en priorité ?\n**Compétences mobilisées.**\n– Formuler un programme de production sous forme canonique\n– Résoudre graphiquement et identifier le programme optimal\n– Repérer les goulots d’étranglement\n– Interpréter les variables d’écart et apprécier des actions d’amélioration\n**Notions clés.***Programmation linéaire · résolution graphique · goulot d’étranglement · variables d’écart · marge sur coût variable*\n**Exercice de référence.***DCG UE11 · Session 2014 · Sujet BIZOT · Dossier 1.*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 1 – PROGRAMMATION LINÉAIRE"
      },
      {
        "type": "p",
        "text": "Tous les chiffres sont donnés sur une base trimestrielle."
      },
      {
        "type": "h3",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "**À l’aide des *annexes 3, 4* :**"
      },
      {
        "type": "ol",
        "items": [
          "**Présenter le programme de production sous forme canonique.**",
          "**Faire une représentation graphique du programme (on mettra en ordonnée les lits JURA et en abscisse les bibliothèques LIBRO).**",
          "**Est-il possible d'améliorer la situation actuelle ?**",
          "**Quel est le programme de production optimal ? Déterminer le résultat.**",
          "**Quelles sont les contraintes qui représentent un goulot d'étranglement ?**",
          "**Indiquer l’impact sur la marge de chacune des actions suivantes, en justifiant votre réponse :faire une campagne de publicité pour élargir les débouchés commerciaux ;faire appel à de nouveaux fournisseurs pour augmenter les quantités de bois disponibles ;faire un investissement pour augmenter la capacité de production de l'atelier sciage ;réorganiser l'atelier perçage pour augmenter sa capacité de traitement.**"
        ]
      },
      {
        "type": "p",
        "text": "**Laquelle est la plus pertinente ?**"
      },
      {
        "type": "ol",
        "items": [
          "**La direction décide finalement d'appliquer la proposition « d ». La contrainte correspondante est donc éliminée. Présenter le nouveau programme sous forme standard. Quelle est l'utilité de cette forme standard ? Est-elle utile ici ?**",
          "**En prenant pour exemple la variable d’écart associée à la contrainte d’approvisionnement en bois (nommée e1), expliquer la signification économique de :**"
        ]
      },
      {
        "type": "p",
        "text": "**a) e1 = 0**"
      },
      {
        "type": "p",
        "text": "**b) e1 = 100**"
      },
      {
        "type": "p",
        "text": "**Annexe 3 – Données comptables**"
      },
      {
        "type": "p",
        "text": "La marge sur cout variable unitaire est de 75 € pour la bibliothèque LIBRO et de 60 € pour le lit JURA. Les charges fixes s'élèvent à 50 000 €."
      },
      {
        "type": "p",
        "text": "**Annexe 4 – Données relatives à la production des meubles LIBRO et JURA**"
      },
      {
        "type": "p",
        "text": "La fabrication des éléments d'une bibliothèque LIBRO nécessite 0,3 m3 (mètre cube) de bois et la fabrication des éléments d'un lit JURA nécessite 1,2 m3 de bois. CFP peut livrer au maximum 720 m3."
      },
      {
        "type": "p",
        "text": "L'atelier sciage permet de réaliser 4 bibliothèques LIBRO ou 2 lits JURA en une heure. Compte tenu des équipements existants, cet atelier ne peut fonctionner que 700 heures."
      },
      {
        "type": "p",
        "text": "L'atelier perçage peut fonctionner 800 heures. 30 minutes sont nécessaires pour réaliser le perçage des éléments d'une bibliothèque LIBRO alors qu'il suffit de 20 min pour les éléments d'un lit JURA."
      }
    ]
  },
  {
    "id": "a4",
    "year": 2016,
    "dossier": "Dossier 2",
    "entreprise": "PhytoDrink",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**PhytoDrink, filiale du groupe ALTEOS (compléments alimentaires et phytothérapie), fabrique des boissons à base de plantes. Elle étudie un projet de diversification autour des fleurs de sureau — dont elle maîtrise l’approvisionnement — avec deux produits complémentaires, un sirop et une liqueur, appréciés en France et en Allemagne.\n**Votre mission.**Étudier la rentabilité du projet « Fleurs de sureau » et déterminer le programme de production le plus rentable sous contrainte d’approvisionnement.\n**L’enjeu décisionnel.**Avec des coûts fixes spécifiques et une matière première limitée à 60 tonnes la première année, à partir de quel volume le projet est-il rentable et quel mix sirop/liqueur optimise le résultat ?\n**Compétences mobilisées.**\n– Calculer un seuil de rentabilité pour un couple de produits\n– Apprécier le risque d’exploitation et les conditions de pertinence du seuil\n– Déterminer un programme de production par la méthode du facteur rare (goulot)\n– Commenter la pertinence de la solution optimale\n**Notions clés.***Seuil de rentabilité · point mort · facteur rare · goulot d’étranglement · programme optimal*\n**Exercice de référence.***DCG UE11 · Session 2016 · Sujet ALTEOS / PhytoDrink · Dossier 2.*"
      },
      {
        "type": "callout",
        "variant": "info",
        "title": "*Il vous est demandé d’apporter un soin particulier à la présentation ",
        "text": "*Toute information calculée devra être justifiée*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 2 – Étude de rentabilitÉ"
      },
      {
        "type": "p",
        "text": "La société Phytodrink souhaite diversifier son activité autour de l’exploitation des fleurs de sureau dont elle maîtrise l’approvisionnement."
      },
      {
        "type": "p",
        "text": "Sa saveur exceptionnelle est très appréciée tant en France qu’en Allemagne. Deux produits seraient à proposer conjointement pour avoir un impact suffisant auprès des distributeurs : le sirop et la liqueur."
      },
      {
        "type": "p",
        "text": "Le lancement de ce projet suppose la couverture d’un certain nombre de coûts fixes spécifiques aux deux produits : un local, des cuves inox, des frais fixes de recherche & développement et de logistique. Elle vous demande d’étudier la rentabilité de ce projet."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**À partir des*annexes 3*et*4*:**"
      },
      {
        "type": "ol",
        "items": [
          "**Calculer le nombre minimal de bouteilles de sirop et de liqueur à vendre pour atteindre le seuil de rentabilité dans l’hypothèse retenue (à savoir deux bouteilles de sirop pour une bouteille de liqueur). En déduire le chiffre d’affaires critique total.**",
          "**Pour un chiffre d’affaires prévisionnel de 676 500 € sur l’ensemble de ces deux produits, compte tenu des données de l’*annexe* 4 et dans l’hypothèse d’une activité régulière, calculer le levier opérationnel puis la date d’atteinte du seuil de rentabilité.**",
          "**À quelles conditions l'utilisation de ce seuil de rentabilité comme outil de décision est-elle pertinente ?**"
        ]
      },
      {
        "type": "p",
        "text": "Dans son rapport de présentation des deux nouveaux produits sur la base d’une composition des ventes de deux bouteilles de sirop pour une bouteille de liqueur, le directeur commercial a affirmé :"
      },
      {
        "type": "ul",
        "items": [
          "Affirmation 1 : « l’activité sera rentable dès le premier semestre » ;",
          "Affirmation 2 : « si le chiffre d’affaires s’avérait plus important que prévu, cela aurait un fort effet positif sur le résultat » ;",
          "Affirmation 3 : « cette nouvelle activité est peu risquée »."
        ]
      },
      {
        "type": "ol",
        "items": [
          "**Commenter, à partir des réponses obtenues aux questions précédentes chacune de ces trois affirmations en y apportant toutes les justifications pertinentes.**"
        ]
      },
      {
        "type": "p",
        "text": "***Aucun calcul n’est demandé.***"
      },
      {
        "type": "p",
        "text": "Le directeur financier souhaite quant à lui optimiser la rentabilité de cette nouvelle activité, la composition des ventes n’étant pas pour lui une contrainte puisque toutes les études de marchéprouvent que la demande en boissons à base de plantes est très importante pour ces deux types de produits."
      },
      {
        "type": "ol",
        "items": [
          "**En utilisant un raisonnement fondé sur l’utilisation du facteur rare (ou méthode des goulots d’étranglement), déterminer le programme de production qui permet de maximiser la marge sur coûts variables :**"
        ]
      },
      {
        "type": "p",
        "text": "**5-1 Présenter le système à résoudre (fonction économique et contraintes) ;**"
      },
      {
        "type": "p",
        "text": "**5-2 Résoudre le système en expliquant et justifiant les calculs intermédiaires ;**"
      },
      {
        "type": "p",
        "text": "**5-3 En déduire le résultat optimal. Commenter la pertinence de la solution optimale trouvée ?**"
      },
      {
        "type": "p",
        "text": "**Annexe 3**"
      },
      {
        "type": "p",
        "text": "**Éléments prévisionnels relatifs au projet « Fleurs de sureau »**"
      },
      {
        "type": "p",
        "text": "Hypothèse retenue : 2 bouteilles de sirop pour une bouteille de liqueur fabriquée et vendue."
      },
      {
        "type": "table",
        "headers": [
          "**Produits à base de fleur de sureau**",
          "**Sirop**",
          "**Liqueur**"
        ],
        "rows": [
          [
            "Prix d’une bouteille",
            "4,50 €",
            "7,50 €"
          ],
          [
            "Coût variable unitaire",
            "2,40 €",
            "3,40 €"
          ],
          [
            "Coûts fixes spécifiques à l’ensemble des produits à base de sureau",
            "289 670 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 4**"
      },
      {
        "type": "p",
        "text": "**Contrainte d’approvisionnement en fleurs de sureau**"
      },
      {
        "type": "p",
        "text": "L’approvisionnement en fleurs de sureau sera limité la 1ère année à 60 tonnes."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**SIROP**",
          "**LIQUEUR**"
        ],
        "rows": [
          [
            "Ventes prévisionnelles",
            "82 000",
            "41 000"
          ],
          [
            "Poids en fleurs pour une bouteille",
            "400 g",
            "880 g"
          ]
        ]
      }
    ]
  },
  {
    "id": "a5",
    "year": 2018,
    "dossier": "Dossier 2",
    "entreprise": "ALTAPLUS",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Le groupe ALTAPLUS (créé en 1995, dimension européenne) fabrique en France des plats cuisinés distribués dans toute l’Europe. Sur la gamme « saveurs du monde », trois produits phares (PC1, PC2, PC3) et un nouveau plat senior (PP) sont assemblés sur des chaînes robotisées récemment renforcées mais encore sous-dimensionnées face au succès commercial.\n**Votre mission.**Définir le programme de production optimal maximisant le résultat, puis apprécier la politique de prix de cession interne vers l’établissement italien.\n**L’enjeu décisionnel.**La chaîne robotisée est le goulot d’étranglement et une quantité minimale doit être servie à l’Italie. Quel programme maximise le résultat, et quel prix de cession interne retenir ?\n**Compétences mobilisées.**\n– Exprimer un programme de production sous forme canonique\n– Calculer une marge sur coût variable par unité de facteur rare\n– Déterminer le programme optimal et le confronter à la stratégie commerciale\n– Apprécier une méthode de prix de cession interne (prix de marché, coût standard)\n**Notions clés.***Programmation de la production · facteur rare · goulot d’étranglement · programme optimal · prix de cession interne*\n**Exercice de référence.***DCG UE11 · Session 2018 · Sujet ALTAPLUS · Dossier 2.*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 2 – Gestion de la production (6 points)"
      },
      {
        "type": "p",
        "text": "De dimension européenne, l'entreprise ALTAPLUS dispose d'un établissement chargé de la distribution en Europe du Sud, la fabrication ayant lieu en France."
      },
      {
        "type": "p",
        "text": "ALTAPLUS dispose de plusieurs gammes de plats cuisinés (cuisine diététique, saveurs du monde, cuisine traditionnelle…). La direction vous demande de travailler plus particulièrement sur la gamme « saveurs du monde » qui comprend quatre variétés fabriquées dans un laboratoire de transformation spécifique. Cette gamme a été pensée dans une véritable logique d’offre complète sur l’ensemble des segments de clientèle afin de laisser peu de place aux concurrents."
      },
      {
        "type": "p",
        "text": "Ses trois produits phares, PC1, PC2 et PC3, sont commercialisés auprès des grands acteurs européens de la distribution alimentaire. En outre, l’entreprise a lancé, il y a deux ans, un nouveau produit destiné au marché des seniors : PlatsPlus (PP). La fabrication de ce plat cuisiné utilise le même processus industriel : il est fabriqué sur les mêmes chaînes robotisées que les produits historiques."
      },
      {
        "type": "p",
        "text": "ALTAPLUS a investi dans une unité robotisée supplémentaire qui se révèle sous-dimensionnée face au succès rencontré sur le marché. L’objectif principal de l’entreprise reste la maximisation de son résultat. Vous êtes chargé(e) de définir le programme optimal de production."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "***À partir des annexes 2 et 3,***"
      },
      {
        "type": "ol",
        "items": [
          "**Calculer le volume horaire en \"machines robotisées\" et en \"contrôle/conditionnement\" restant disponible après livraison des quantités obligatoirement destinées à l’établissement chargé de la distribution en Europe du Sud.**",
          "**Exprimer le programme de production pour le marché de l’Europe du Nord sous forme canonique (sous forme d’inéquations) en établissant la fonction économique et les contraintes. PC1, PC2, PC3 et PP constitueront les variables des différents plats cuisinés.**",
          "**La direction de l’entreprise propose d’établir le programme de production en maximisant le résultat global. Cela vous semble-t-il pertinent ?**",
          "**Sachant que les chaînes robotisées constituent le principal goulet d’étranglement (ressource rare) :Calculer la marge sur coût variable par unité de facteur rare ; les calculs seront basés sur le prix de vente du marché européen.Déterminer le programme de production optimal en expliquant la démarche pour y parvenir.Le programme optimal obtenu vous semble-t-il conforme à l’objectif de l’entreprise ? Est-il compatible avec la stratégie commerciale d’ALTAPLUS ?**",
          "**Déterminer la marge sur coût variable totale et le résultat dégagé par le groupe pour le programme optimal.**"
        ]
      },
      {
        "type": "p",
        "text": "La société ALTAPLUS cède à son établissement italien tous ses plats cuisinés au moyen de prix de cession interne. La direction vous demande de la conseiller sur les modalités de fixation de ce prix de cession interne."
      },
      {
        "type": "ol",
        "items": [
          "**Le contrôleur de gestion a opté pour un prix de cession interne basé sur le prix de marché diminué de 20%. Préciser dans quel cas cette méthode est applicable.**",
          "**Le contrôleur de gestion s’interrogeait sur l’utilisation éventuelle d’un prix de cession interne adossé au coût standard de production. Préciser l’intérêt et la limite de cette approche.**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 2**"
      },
      {
        "type": "p",
        "text": "**Données issues de l’étude de marché**"
      },
      {
        "type": "p",
        "text": "L’entreprise couvre l’ensemble du marché européen ; une étude de marché a permis d’identifier les prix de vente du marché ainsi que la demande maximale. Celle-ci constitue la demande totale pour l’ensemble du marché européen."
      },
      {
        "type": "p",
        "text": "**Résultats de l'étude de marché**"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**PC1**",
          "**PC2**",
          "**PC3**",
          "**PP**"
        ],
        "rows": [
          [
            "Prix de vente unitaire du marché",
            "2, 90 €",
            "2, 35 €",
            "2,95 €",
            "3, 70 €"
          ],
          [
            "Quantité maximale demandée sur l’ensemble du marché européen (en unités)",
            "89 000",
            "98 000",
            "27 000",
            "45 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "En outre, la société mise principalement son développement sur le marché de l’Europe du sud. Aussi, elle s’engage à livrer prioritairement son établissement chargé de la distribution en Europe du Sud."
      },
      {
        "type": "p",
        "text": "**Quantité minimale à servir à l’établissement italien**"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**PC1**",
          "**PC2**",
          "**PC3**",
          "**PP**"
        ],
        "rows": [
          [
            "Quantité à servir obligatoirement à l’établissement italien (en unités)",
            "66 000",
            "35 000",
            "10 000",
            "22 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La couverture et la distribution du marché de l’Europe du Nord est assurée par l’établissement principal de l’entreprise ALTAPLUS avec l’emploi du reste des ressources de production disponibles."
      },
      {
        "type": "p",
        "text": "**Annexe 3**"
      },
      {
        "type": "p",
        "text": "**Données relatives à la production**"
      },
      {
        "type": "p",
        "text": "La fabrication des quatre produits PC1, PC2, PC3 et PP est réalisée de façon automatisée, grâce à des chaînes robotisées en charge de l’assemblage des aliments."
      },
      {
        "type": "p",
        "text": "**Temps de passage sur les chaînes robotisées**"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**PC1**",
          "**PC2**",
          "**PC3**",
          "**PP**"
        ],
        "rows": [
          [
            "Temps de passage en heures machine pour une unité",
            "0,04",
            "0,01",
            "0,05",
            "0,08"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise dispose actuellement d’un temps de machine annuel maximal de 7 020 heures."
      },
      {
        "type": "p",
        "text": "Ensuite, les produits sont contrôlés et conditionnés. En raison de l’exigence de qualité des clients, les opérations de contrôle et de conditionnement sont réalisées manuellement."
      },
      {
        "type": "p",
        "text": "**Temps de contrôle et conditionnement**"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**PC1**",
          "**PC2**",
          "**PC3**",
          "**PP**"
        ],
        "rows": [
          [
            "Temps de contrôle et conditionnement en heures de main d’œuvre pour une unité",
            "0,04",
            "0,02",
            "0,0125",
            "0,025"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise dispose actuellement d’un temps de contrôle et conditionnement annuel maximal de 7 550 heures."
      },
      {
        "type": "p",
        "text": "Toutes les charges sont fixes à l’exception de la consommation de matières premières."
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**PC1**",
          "**PC2**",
          "**PC3**",
          "**PP**"
        ],
        "rows": [
          [
            "Coût des matières par unité produite",
            "0,90 €",
            "1, 08 €",
            "1, 80 €",
            "1, 80 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges fixes représentent un montant global de 230 000 € et correspondent, pour l’essentiel, aux amortissements des chaînes robotisées, aux salaires et aux frais de structure divers."
      }
    ]
  },
  {
    "id": "a6",
    "year": 2022,
    "dossier": "Dossier 4",
    "entreprise": "ELA",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Fondée en 2018 à Pau par Estelle Ricaud, ELA fabrique au Pays basque des baskets zéro-déchet en matériaux recyclés, dont le cuir de raisin. Portée par la mode responsable, la marque connaît une croissance rapide, mais l’usine sature et les fournisseurs de cuir de raisin peinent à garantir l’approvisionnement.\n**Votre mission.**Élaborer et résoudre le programme de production optimal 2022 des deux modèles (Merlot, Cabernet) et éclairer les décisions d’amélioration de la performance industrielle.\n**L’enjeu décisionnel.**Sous contraintes de capacité et d’approvisionnement, le programme 2021 n’est pas optimal : quel mix maximise le résultat et quelle contrainte lever en priorité ?\n**Compétences mobilisées.**\n– Formuler et résoudre graphiquement un programme linéaire de production\n– Comparer la solution actuelle et la solution optimale\n– Identifier la contrainte à lever pour améliorer le résultat\n– Formuler des recommandations argumentées\n**Notions clés.***Programmation linéaire · résolution graphique · contraintes de production · goulot · programme optimal*\n**Exercice de référence.***DCG UE11 · Session 2022 · Sujet ELA · Dossier 4.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 4 – PROGRAMME DE PRODUCTION**"
      },
      {
        "type": "p",
        "text": "**Base documentaire : document 7 et annexe A à rendre avec la copie**"
      },
      {
        "type": "p",
        "text": "Les matières premières sont sélectionnées en circuits courts et livrées dans l'usine située au Pays basque qui est chargée de la fabrication de chaque paire de baskets commercialisée par l’entreprise ELA. Estelle Ricaud s’étonne que la demande des boutiques spécialisées n’ait pas été satisfaite en totalité cette année."
      },
      {
        "type": "p",
        "text": "Le responsable de l’usine du Pays basque fait valoir que les capacités de l’unité de production sont rapidement saturées compte tenu de la capacité de production des équipements. D’après lui, l’unité de production constitue un goulot d’étranglement avec 5 000 heures disponibles et ne permet pas d’atteindre les volumes de production demandés par les distributeurs."
      },
      {
        "type": "p",
        "text": "Dans le contexte sanitaire de 2022, les fournisseurs de cuir de raisin semblent également rencontrer des difficultés pour garantir l’approvisionnement de cette matière premières. Ils assurent qu’ils pourront livrer 400 tonnes pour l’année."
      },
      {
        "type": "p",
        "text": "Estelle Ricaud pense que le programme qui a été adopté en 2021, s’il prend en compte les contraintes de la production, n’est en tous cas pas celui qui permet d’optimiser la profitabilité. Lors d’une réunion avec le responsable de l’usine au Pays basque, plusieurs propositions sont envisagées pour pouvoir améliorer le programme de production :"
      },
      {
        "type": "ul",
        "items": [
          "faire une campagne de publicité pour élargir les débouchés commerciaux ;",
          "faire appel à un nouveau fournisseur pour augmenter les volumes de cuir de raisin ;",
          "réorganiser les processus de production pour augmenter la capacité de l’atelier."
        ]
      },
      {
        "type": "p",
        "text": "**Votre mission : analyser la pertinence des propositions envisagées pour améliorer la performance de la production de l’usine au Pays basque.**"
      },
      {
        "type": "p",
        "text": "**Pour réaliser cette mission, vous devez :**"
      },
      {
        "type": "ol",
        "items": [
          "**Élaborer et résoudre le programme optimal de production pour 2022, selon la méthode de résolution graphique de programmation linéaire (annexe A à rendre avec la copie). Mettre en abscisse les modèles Merlot (X) et en ordonnée les modèles Cabernet (Y).**",
          "**Au sein d’un même document :**"
        ]
      },
      {
        "type": "ul",
        "items": [
          "**proposer une analyse chiffrée pour comparer la solution actuelle par rapport à la solution optimale en prenant en compte les contraintes actuelles ;**",
          "**en déduire quelle contrainte l’entreprise pourrait envisager de lever pour améliorer son résultat.**"
        ]
      },
      {
        "type": "p",
        "text": "**Document 7 – Synthèse des données d'exploitation de l'usine au Pays basque.**"
      },
      {
        "type": "p",
        "text": "Les données caractéristiques de l'exploitation sont résumées dans le tableau suivant :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Merlot**",
          "**Cabernet**"
        ],
        "rows": [
          [
            "Prix de vente unitaire",
            "130 €",
            "160 €"
          ],
          [
            "Coût variable unitaire",
            "95 €",
            "110 €"
          ],
          [
            "Marge sur coût variable unitaire",
            "35 €",
            "50 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "73 000 paires de baskets ont été fabriquées et vendues en 2021."
      },
      {
        "type": "p",
        "text": "La répartition par modèle de baskets est la suivante :"
      },
      {
        "type": "p",
        "text": "Merlot 55 000 paires de baskets,"
      },
      {
        "type": "p",
        "text": "Cabernet 18 000 paires de baskets."
      },
      {
        "type": "p",
        "text": "Le tableau suivant indique les ressources nécessaires à la fabrication de chaque produit, ainsi que le volume maximal disponible pour chaque contrainte de fabrication :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Approvisionnement en cuir de raisin**",
          "**Production**"
        ],
        "rows": [
          [
            "Merlot",
            "5 kg",
            "3 minutes"
          ],
          [
            "Cabernet",
            "5 kg",
            "6 minutes"
          ],
          [
            "Volume maximal disponible",
            "400 tonnes",
            "5 000 heures machine"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Une étude de marché a établi que l'entreprise pouvait vendre en 2022 :"
      },
      {
        "type": "p",
        "text": "Merlot 70 000 paires de baskets,"
      },
      {
        "type": "p",
        "text": "Cabernet 40 000 paires de baskets."
      },
      {
        "type": "p",
        "text": "**Annexe A – Graphique de programmation linéaire (à rendre avec la copie)**"
      },
      {
        "type": "p",
        "text": "**Cabernet**"
      }
    ]
  },
  {
    "id": "a7",
    "year": 2023,
    "dossier": "Dossier 4",
    "entreprise": "LÉGENDES SUCRÉES",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Née à Chalon-sur-Saône d’une boutique de fruits à l’alcool et de confitures, LÉGENDES SUCRÉES est une PME engagée en RSE, en forte croissance (plus de 600 références). Confrontée à des tensions d’approvisionnement sur les pots en verre, sa dirigeante investit dans une machine de fabrication de pots dont l’installation doit être la plus rapide possible.\n**Votre mission.**Évaluer la durée d’implantation de la nouvelle machine par une méthode d’ordonnancement afin de démarrer au plus vite la fabrication des pots en verre.\n**L’enjeu décisionnel.**Le fournisseur Bovonne promet un délai d’installation court : l’ordonnancement des tâches confirme-t-il cette promesse et quelle date de démarrage retenir ?\n**Compétences mobilisées.**\n– Élaborer un ordonnancement (diagramme de Gantt ou MPM)\n– Déterminer la durée d’un projet et le chemin critique\n– Vérifier une promesse de délai à partir des résultats\n– Rédiger un argumentaire de conseil à la direction\n**Notions clés.***Ordonnancement · diagramme de Gantt · méthode MPM · chemin critique · durée de projet*\n**Exercice de référence.***DCG UE11 · Session 2023 · Sujet LÉGENDES SUCRÉES · Dossier 4.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 4 – PROJET D’IMPLANTATION D’UNE NOUVELLE MACHINE**"
      },
      {
        "type": "p",
        "text": "**Base documentaire : documents 9 à 13**"
      },
      {
        "type": "p",
        "text": "Soucieuse de répondre à la problématique d’approvisionnement de pots en verre, Louise GALLET décide d’investir dans une machine qui fabrique des pots de différentes tailles. Elle choisit celle du constructeur Bovonne car celui-ci lui promet de respecter un délai d’installation suffisamment court et une exigence qualité très importante."
      },
      {
        "type": "p",
        "text": "Le service qualité de la société LÉGENDES SUCRÉES assurera ensuite les contrôles pour tester la conformité des pots en verre fabriqués. Il doit faire face à des non-conformités liées à l’épaisseur du verre. Le service qualité a alors mis en place un outil de gestion de la qualité (diagramme d’Ishikawa). Louise GALLET souhaite obtenir davantage d’informations concernant celui-ci."
      },
      {
        "type": "p",
        "text": "**Votre première mission consiste à évaluer la durée d’implantation de la nouvelle machine pour pouvoir démarrer la fabrication de pots en verre au plus vite.**"
      },
      {
        "type": "p",
        "text": "**Pour la réaliser, vous devez :**"
      },
      {
        "type": "ul",
        "items": [
          "**Élaborer et résoudre par une méthode d’ordonnancement (Diagramme de Gantt ou méthode des potentiels métra MPM) le programme d’installation de la machine.Rédiger un argumentaire de 10 lignes environ à l’attention de la dirigeante de la société, Louise GALLET, pour vérifier l’affirmation de la société Bovonne.**"
        ]
      },
      {
        "type": "p",
        "text": "**Votre deuxième mission consiste à contrôler la qualité des pots en verre et à comprendre la démarche qualité mise en place.**"
      },
      {
        "type": "p",
        "text": "**Pour la réaliser, vous devez :**"
      },
      {
        "type": "ul",
        "items": [
          "**Déterminer et interpréter un intervalle de confiance avec un risque d’erreur de 5 %, qui permet d’obtenir la moyenne de l’épaisseur du verre.Rédiger un commentaire de 10 lignes environ afin de conseiller la dirigeante, Louise GALLET, sur le choix du diagramme d’Ishikawa comme outil de gestion de la qualité.**"
        ]
      },
      {
        "type": "p",
        "text": "**BASE DOCUMENTAIRE**"
      },
      {
        "type": "p",
        "text": "**Document 9 – Planning des étapes du projet d’installation de la machine de production de pots en verre.**"
      },
      {
        "type": "table",
        "headers": [
          "**Tâches**",
          "**Description de la tâche**",
          "**Durée en jours**",
          "**Opérations pré-requises**"
        ],
        "rows": [
          [
            "**A**",
            "Montage de la machine",
            "2",
            "B"
          ],
          [
            "**B**",
            "Réception de la machine et vérification que l’équipement n’a pas subi de dommages lors du transport",
            "3",
            "-"
          ],
          [
            "**C**",
            "Mise en ligne et raccordement des installations",
            "5",
            "B"
          ],
          [
            "**D**",
            "Vérification générale de conformité aux schémas électriques",
            "2",
            "A, C"
          ],
          [
            "**E**",
            "Raccordement des installations",
            "4",
            "C, D"
          ],
          [
            "**F**",
            "Formation des opérateurs de production",
            "3",
            "D"
          ],
          [
            "**G**",
            "Essais finaux des installations",
            "1",
            "E, F"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 10 – Éléments d’informations complémentaires.**"
      },
      {
        "type": "p",
        "text": "La société Bovonne promet une garantie contractuelle d’exécution de l’ensemble des tâches. Toutefois, elle annonce un prolongement possible de 2 jours sur chacune des tâches A et F."
      },
      {
        "type": "p",
        "text": "La société affirme que cela n’aura aucune conséquence sur la durée totale du projet."
      },
      {
        "type": "p",
        "text": "**Document 11 – Contrôle statistique de la qualité des pots en verre.**"
      },
      {
        "type": "p",
        "text": "Chaque pot en verre passe par une série d’inspections pour assurer qu’il réponde aux normes élevées de qualité. Plusieurs caméras à haute résolution, situées dans les machines, numérisent l’ensemble des pots. Les caméras sont placées dans des angles différents et peuvent repérer de minuscules défectuosités."
      },
      {
        "type": "p",
        "text": "Une autre étape du processus d’inspection se focalise sur l’épaisseur des pots en verre. La société Bovonne s’engage à ce que les pots fabriqués aient une épaisseur de 2 000 micromètres. Elle ajoute que les pots suivent une loi normale de moyenne 2 000 micromètres et d’écart-type 12 micromètres."
      },
      {
        "type": "p",
        "text": "Les experts-qualité de la société LÉGENDES SUCRÉES inspectent manuellement et visuellement des échantillons pris au hasard pour en assurer la qualité. Un contrôle aléatoire, par des prélèvements d’échantillons de 50 pots est réalisé. La moyenne constatée est de 1 995 micromètres."
      },
      {
        "type": "p",
        "text": "**Document 12 – Table de la loi normale centrée réduite.**"
      },
      {
        "type": "p",
        "text": "Fonction de répartition de la loi normale centrée réduite : P(T  t) = (t)"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0,00**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**",
          "**0,06**",
          "**0,07**",
          "**0,08**",
          "**0,09**"
        ],
        "rows": [
          [
            "0,0",
            "0,5000",
            "0,5040",
            "0,5080",
            "0,5120",
            "0,5160",
            "0,5199",
            "0,5239",
            "0,5279",
            "0,5319",
            "0,5359"
          ],
          [
            "0,1",
            "0,5398",
            "0,5438",
            "0,5478",
            "0,5517",
            "0,5557",
            "0,5596",
            "0,5636",
            "0,5675",
            "0,5714",
            "0,5753"
          ],
          [
            "0,2",
            "0,5793",
            "0,5832",
            "0,5871",
            "0,5910",
            "0,5948",
            "0,5987",
            "0,6026",
            "0,6064",
            "0,6103",
            "0,6141"
          ],
          [
            "0,3",
            "0,6179",
            "0,6217",
            "0,6255",
            "0,6293",
            "0,6331",
            "0,6368",
            "0,6406",
            "0,6443",
            "0,6480",
            "0,6517"
          ],
          [
            "0,4",
            "0,6554",
            "0,6591",
            "0,6628",
            "0,6664",
            "0,6700",
            "0,6736",
            "0,6772",
            "0,6808",
            "0,6844",
            "0,6879"
          ],
          [
            "0,5",
            "0,6915",
            "0,6950",
            "0,6985",
            "0,7019",
            "0,7054",
            "0,7088",
            "0,7123",
            "0,7157",
            "0,7190",
            "0,7224"
          ],
          [
            "0,6",
            "0,7257",
            "0,7291",
            "0,7324",
            "0,7357",
            "0,7389",
            "0,7422",
            "0,7454",
            "0,7486",
            "0,7517",
            "0,7549"
          ],
          [
            "0,7",
            "0,7580",
            "0,7611",
            "0,7642",
            "0,7673",
            "0,7704",
            "0,7734",
            "0,7764",
            "0,7794",
            "0,7823",
            "0,7852"
          ],
          [
            "0,8",
            "0,7881",
            "0,7910",
            "0,7939",
            "0,7967",
            "0,7995",
            "0,8023",
            "0,8051",
            "0,8078",
            "0,8106",
            "0,8133"
          ],
          [
            "0,9",
            "0,8159",
            "0,8186",
            "0,8212",
            "0,8238",
            "0,8264",
            "0,8289",
            "0,8315",
            "0,8340",
            "0,8365",
            "0,8389"
          ],
          [
            "1",
            "0,8413",
            "0,8438",
            "0,8461",
            "0,8485",
            "0,8508",
            "0,8531",
            "0,8554",
            "0,8577",
            "0,8599",
            "0,8621"
          ],
          [
            "1,1",
            "0,8643",
            "0,8665",
            "0,8686",
            "0,8708",
            "0,8729",
            "0,8749",
            "0,8770",
            "0,8790",
            "0,8810",
            "0,8830"
          ],
          [
            "1,2",
            "0,8849",
            "0,8869",
            "0,8888",
            "0,8907",
            "0,8925",
            "0,8944",
            "0,8962",
            "0,8980",
            "0,8997",
            "0,9015"
          ],
          [
            "1,3",
            "0,9032",
            "0,9049",
            "0,9066",
            "0,9082",
            "0,9099",
            "0,9115",
            "0,9131",
            "0,9147",
            "0,9162",
            "0,9177"
          ],
          [
            "1,4",
            "0,9192",
            "0,9207",
            "0,9222",
            "0,9236",
            "0,9251",
            "0,9265",
            "0,9279",
            "0,9292",
            "0,9306",
            "0,9319"
          ],
          [
            "1,5",
            "0,9332",
            "0,9345",
            "0,9357",
            "0,9370",
            "0,9382",
            "0,9394",
            "0,9406",
            "0,9418",
            "0,9429",
            "0,9441"
          ],
          [
            "1,6",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505",
            "0,9515",
            "0,9525",
            "0,9535",
            "0,9545"
          ],
          [
            "1,7",
            "0,9554",
            "0,9564",
            "0,9573",
            "0,9582",
            "0,9591",
            "0,9599",
            "0,9608",
            "0,9616",
            "0,9625",
            "0,9633"
          ],
          [
            "1,8",
            "0,9641",
            "0,9649",
            "0,9656",
            "0,9664",
            "0,9671",
            "0,9678",
            "0,9686",
            "0,9693",
            "0,9699",
            "0,9706"
          ],
          [
            "1,9",
            "0,9713",
            "0,9719",
            "0,9726",
            "0,9732",
            "0,9738",
            "0,9744",
            "0,9750",
            "0,9756",
            "0,9761",
            "0,9767"
          ],
          [
            "2",
            "0,9772",
            "0,9778",
            "0,9783",
            "0,9788",
            "0,9793",
            "0,9798",
            "0,9803",
            "0,9808",
            "0,9812",
            "0,9817"
          ],
          [
            "2,1",
            "0,9821",
            "0,9826",
            "0,9830",
            "0,9834",
            "0,9838",
            "0,9842",
            "0,9846",
            "0,9850",
            "0,9854",
            "0,9857"
          ],
          [
            "2,2",
            "0,9861",
            "0,9864",
            "0,9868",
            "0,9871",
            "0,9875",
            "0,9878",
            "0,9881",
            "0,9884",
            "0,9887",
            "0,9890"
          ],
          [
            "2,3",
            "0,9893",
            "0,9896",
            "0,9898",
            "0,9901",
            "0,9904",
            "0,9906",
            "0,9909",
            "0,9911",
            "0,9913",
            "0,9916"
          ],
          [
            "2,4",
            "0,9918",
            "0,9920",
            "0,9922",
            "0,9925",
            "0,9927",
            "0,9929",
            "0,9931",
            "0,9932",
            "0,9934",
            "0,9936"
          ],
          [
            "2,5",
            "0,9938",
            "0,9940",
            "0,9941",
            "0,9943",
            "0,9945",
            "0,9946",
            "0,9948",
            "0,9949",
            "0,9951",
            "0,9952"
          ],
          [
            "2,6",
            "0,9953",
            "0,9955",
            "0,9956",
            "0,9957",
            "0,9959",
            "0,9960",
            "0,9961",
            "0,9962",
            "0,9963",
            "0,9964"
          ],
          [
            "2,7",
            "0,9965",
            "0,9966",
            "0,9967",
            "0,9968",
            "0,9969",
            "0,9970",
            "0,9971",
            "0,9972",
            "0,9973",
            "0,9974"
          ],
          [
            "2,8",
            "0,9974",
            "0,9975",
            "0,9976",
            "0,9977",
            "0,9977",
            "0,9978",
            "0,9979",
            "0,9979",
            "0,9980",
            "0,9981"
          ],
          [
            "2,9",
            "0,9981",
            "0,9982",
            "0,9982",
            "0,9983",
            "0,9984",
            "0,9984",
            "0,9985",
            "0,9985",
            "0,9986",
            "0,9986"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 13 – Diagramme d’Ishikawa.**"
      },
      {
        "type": "image",
        "src": "/figures/annales-dcg-ue11-gestion-production/01.png",
        "alt": "Annexe",
        "width": 2362,
        "height": 976
      }
    ]
  }
];
