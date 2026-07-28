// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A1",
    "title": "Vieux Moulins",
    "statement": [
      {
        "type": "p",
        "text": "La société Les Vieux Moulins de Nyons, sise dans la Drôme, fabrique et commercialise de l’huile d’olive vierge bio de qualité supérieure. Depuis peu, elle s’est diversifiée en produisant de l’huile de noix, moins coûteuse mais plus complexes à fabriquer."
      },
      {
        "type": "p",
        "text": "La société observe deux phénomènes contradictoires :"
      },
      {
        "type": "p",
        "text": "• Les consommateurs sont de plus en plus attentifs au prix des produits, ce qui tend à réduire les marges de l’entreprise."
      },
      {
        "type": "p",
        "text": "• Les consommateurs sont très demandeurs de produits d’origine naturelle, ce qui tend à orienter la demande vers des produits plus sophistiqués pour lesquels l’approvision nement en matières premières de qualité se raréfie."
      },
      {
        "type": "p",
        "text": "• Le dirigeant souhaite analyser la rentabilité par produits et la rentabilité globale pour orienter sa politique commerciale. Il demande un dossier d’analyse des coûts et des marges sur les deux types d’huile. Les prévisions d’exploitation sont fournies (annexes 1 et 2)."
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts, les marges et les résultats pour la société.**"
      },
      {
        "type": "p",
        "text": "**Prévisions des ventes pour l’exercice N**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Huile d’olive**",
          "**Huile de noix**"
        ],
        "rows": [
          [
            "**Prix de vente**",
            "25 € par litre",
            "14 € par litre"
          ],
          [
            "**Quantités prévisionnelles**",
            "7 000 litres",
            "1 500 litres"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Conditions d’exploitation pour un lot de 100 l**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Huile d’olive**",
          "**Huile de noix**"
        ],
        "rows": [
          [
            "**Matières premières**",
            "650 kg à 0,60 € le kg",
            "200 kg à 0,40 € le kg"
          ],
          [
            "**Main-d’œuvre directe de fabrication**",
            "8 heures à 35 €",
            "15 heures à 35 €"
          ],
          [
            "**Charges indirectes proportionnelles de production**",
            "180 €",
            "250 €"
          ],
          [
            "**Charges de distribution proportionnelles aux quantités**",
            "100 €",
            "100 €"
          ],
          [
            "**Charges de structure**",
            "49 500 €"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts, les marges et les résultats utiles pour orienter les choix de l’entreprise.**"
      },
      {
        "type": "p",
        "text": "Calcul de la marge sur coût variable par lot de 100 litres de chaque qualité d’huile"
      },
      {
        "type": "table",
        "headers": [
          "**en euros**",
          "**Huile d’olive**",
          "**Huiles de noix**",
          "**Total**"
        ],
        "rows": [
          [
            "Pour un lot de 100 l"
          ],
          [
            "**Chiffre d’affairesMatières premièresMain-d’œuvreCV de production (indirectes)CV de distributionCoût variable**",
            "2 500,00390,00280,00105,00100,00875,00",
            "1 400,0080,00525,00250,00100,00955,00",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "1 625,00",
            "445,00",
            ""
          ],
          [
            "**Taux de margeNombre de lots de 100 litresMarge globaleCharges de structure**",
            "65,00 %70113 750 €",
            "31,79 %156 675 €",
            "120 425 €– 49 500 €"
          ],
          [
            "**Résultat**",
            "",
            "",
            "70 925 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Calcul du chiffre d’affaires et du résultat global prévisionnel pour N"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Huile d’olive**",
          "**Huiles de noix**",
          "**Total**"
        ],
        "rows": [
          [
            "Pour un lot de 100 l"
          ],
          [
            "**Chiffres d’affaires total**",
            "175 000 €",
            "21 000 €",
            "196 000 €"
          ],
          [
            "**Marge globale**",
            "113 750 €",
            "6 675 €",
            "120 425 €"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "– 49 500 €"
          ],
          [
            "**Résultat global**",
            "",
            "",
            "70 925 €"
          ],
          [
            "**% Marge / Marge totaleTaux de marge par produit et au total% CA produit / CA Total**",
            "94,46 %65,00 %89,29 %",
            "5,54 %31,79 %10,71 %",
            "100 %61,44 %100 %"
          ],
          [
            "**Détermination du seuil de rentabilité :**",
            "",
            ""
          ],
          [
            "**Charges fixesTaux de marge moyenSeuil de rentabilité% Seuil / CA total**",
            "49 50061,44 %80 56541,10 %",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "On en déduit, sous l’hypothèse d’une vente et d’une production régulière et simultanée, que le chiffre d’affaires au seuil de chaque produit représente 41,10 % du CA annuel."
      },
      {
        "type": "p",
        "text": "Interprétation"
      },
      {
        "type": "p",
        "text": "•Le taux de marge unitaire est beaucoup plus important pour l’huile d’olive que pour l’huile de noix. Dans la marge totale, l’huile d’olive représente 94,46 % ; cela peut amener à se poser la question de la pertinence de l’huile de noix, c’est-à-dire à se demander s’il faut se spécialiser dans l’huile d’olive ou, à l’inverse, s’interroger sur le risque de tout miser sur l’huile d’olive et envisager la nécessité d’augmenter la part de l’huile de noix."
      },
      {
        "type": "p",
        "text": "•En comparant les charges de main-d’oeuvre pour chaque produit, on constate que l’huile de noix induit un coût très élevé de personnel, ce qui explique le taux de marge plus faible que celui de l’huile d’olive ; il s’agit d’en analyser les causes et de trouver des pistes de solution."
      },
      {
        "type": "p",
        "text": "•Le seuil de rentabilité est calculé globalement, sur l’ensemble de l’activité. Il pourrait être intéressant d’essayer de calculer un seuil par produit en répartissant les charges fixes de manière pertinente."
      },
      {
        "type": "p",
        "text": "**Choix des méthodes**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "Méthode"
      },
      {
        "type": "p",
        "text": "**Méthode***L’analyse porte sur plusieurs critères de pertinence des méthodes de coûts partiels :*•Répartition des coûts variables/fixes, coûts directs/indirects. Vous devez valider la méthode au regard du poids des charges directes/indirectes ou variables/fixes selon les calculs demandés : une part importante de charges directes incite à utiliser une méthode de coût direct ; une part importante de charges variables, une méthode de coûts variables. De même, s’il est possible d’affecter des charges fixes spécifiques, vous devez vous tourner vers une méthode de coûts spécifiques (MCS).•Horizon temporel. Sur un horizon long, vous devez déterminer le coût moyen de l’activité et privilégier les méthodes de coûts complets. Sur un horizon court, une fois la décision d’implantation prise et donc les coûts fixes (et irréversibles) engagés, vous opterez pour des méthodes de coûts variables stimulant les hypothèses de vente.•Volume de production. Seule la méthode des coûts variables autorise des calculs alternatifs en termes de volume sur la base de la marge sur coût variable unitaire – MCVU (à la différence de la marge sur coût spécifique unitaire – MCSU)."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "Cas",
    "title": "société Houblon",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argumentaire afin de conseiller le décideur"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et les marges nécessaires pour aider Henri Muller à accepter ou non l’offre.**"
      },
      {
        "type": "p",
        "text": "Pour aider Henri Muller à répondre à son interrogation concernant l’acceptation de la nouvelle commande, il est nécessaire de reconstituer le compte de résultat différentiel."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Montants en €**",
          "**Taux / CA**"
        ],
        "rows": [
          [
            "**CA**",
            "44 000 000",
            ""
          ],
          [
            "**CV**",
            "– 33 800 000",
            ""
          ],
          [
            "**MCV**",
            "= 10 200 000",
            "23,18 %"
          ],
          [
            "**CF**",
            "– 1 400 000",
            ""
          ],
          [
            "**Résultat**",
            "= 8 800 000",
            "20,00 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le taux de profitabilité est de 20 %."
      },
      {
        "type": "p",
        "text": "La nouvelle commande doit, au minimum, rapporter 20 % du chiffre d’affaires pour conserver ce niveau de profitabilité."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Montants en €**"
        ],
        "rows": [
          [
            "**CA**",
            "x"
          ],
          [
            "**CV**",
            "2 839 200"
          ],
          [
            "**MCV**",
            "2 839 200"
          ],
          [
            "**CF**",
            "–"
          ],
          [
            "**Résultat**",
            "0,20 x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Il faudrait obtenir un chiffre d’affaires de 2 839 200 € au minimum pour qu’Henri Muller accepte l’offre soit un prix de vente de 94,64 € l’hectolitre (2 839 200 / 30 000)."
      },
      {
        "type": "p",
        "text": "C’est le principe même de la méthode du coût marginal."
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter les coûts et marges nécessaires selon les deux options, pour éclairer la décision d’Henri Muller.**"
      },
      {
        "type": "p",
        "text": "Pour éclairer Henri Muller sur la décision de sous-traitance ou d’investissement, il faut construire un compte de résultat différentiel."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Option 1 sous-traitée Montants en €**",
          "**Option 2 avec investissement Montants en €**"
        ],
        "rows": [
          [
            "**CA**",
            "1 100 000",
            "1 100 000"
          ],
          [
            "**CV**",
            "– 1 098 500",
            "– 845 000"
          ],
          [
            "**MCV**",
            "= 1 500",
            "= 255 000"
          ],
          [
            "**CF**",
            "–",
            "– 250 000"
          ],
          [
            "**Résultat**",
            "= 1 500",
            "= 5 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La commande marginale est bénéficiaire dans les deux options."
      },
      {
        "type": "p",
        "text": "La sous-traitance, moins risquée provoque un résultat de 1 500 € tandis que l’augmentation des capacités de production augmente le résultat global de 5 000 €."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire pour aider Henri Muller à présenter une réponse structurée à l’organisateur de la manifestation.**"
      },
      {
        "type": "p",
        "text": "La situation présentée par Henri Muller montre que le raisonnement marginal peut s’appliquer de différentes façons."
      },
      {
        "type": "p",
        "text": "Dans le cas de l’augmentation des ventes sans contraintes de capacités de production, le prix de vente peut baisser à 94,64 € l’hectolitre, contre un prix de 110 € en temps normal."
      },
      {
        "type": "p",
        "text": "La commande supplémentaire à ce prix ne fera pas baisser le résultat global. C’est le principe même du raisonnement marginal."
      },
      {
        "type": "p",
        "text": "La seconde commande marginale montre que l’entreprise ne peut pas y faire face sans accroître la capacité de production."
      },
      {
        "type": "p",
        "text": "La commande supplémentaire, dite marginale, entraîne une augmentation importante des charges variables dans la première option et des charges fixes dans la seconde option."
      },
      {
        "type": "p",
        "text": "Henri Muller devra prendre la décision d’accepter ou non la commande à la fois selon son aversion pour le risque mais aussi selon le développement du marché."
      },
      {
        "type": "p",
        "text": "Si Henri Muller souhaite être prudent, il choisira l’option 1. S’il croit au développement du marché, il choisira l’option 2."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "Cas1",
    "title": "Houblon",
    "statement": [
      {
        "type": "p",
        "text": "Brasserie alsacienne, la société Houblon présente un taux de profitabilité convenable."
      },
      {
        "type": "p",
        "text": "Elle est sollicitée pour être le fournisseur exclusif d’une grande manifestation organisée en août, soit une commande de 30 000 hectolitres."
      },
      {
        "type": "p",
        "text": "Le décideur, Henri Muller souhaite proposer un prix de vente qui lui permette de conser ver a minima son taux de profitabilité actuel."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. D’après l’annexe, calculer et interpréter les coûts et les marges nécessaires pour aider Henri Muller à accepter ou non l’offre.**"
      },
      {
        "type": "p",
        "text": "Une seconde commande de 10 000 hectolitres supplémentaires vient de tomber dans le cadre de la manifestation d’août. La capacité actuelle de la société Houblon ne permet pas d’accepter cette nouvelle commande."
      },
      {
        "type": "p",
        "text": "Pour réaliser la production supplémentaire, la société Houblon peut :"
      },
      {
        "type": "p",
        "text": "– soit soustraiter en partie la production qu’elle ne peut pas réaliser ellemême compte tenu de sa structure, à condition d’augmenter de 30 % les coûts variables de l’activité courante, pour la part de production soustraitée ;"
      },
      {
        "type": "p",
        "text": "– soit investir un nouvel équipement, augmentant les coûts fixes de 250 000 euros. Henri Muller souhaite maintenir son taux de profitabilité d’activité courante."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter les coûts et marges nécessaires selon les deux options, pour éclairer la décision d’Henri Muller.**"
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire pour aider Henri Muller à présenter une réponse structurée à l’organisateur de la manifestation.**"
      },
      {
        "type": "p",
        "text": "Informations complémentaires sur Houblon"
      },
      {
        "type": "p",
        "text": "**Production actuelle :** après une étude précise des coûts, le contrôleur de gestion a modélisé le coût de revient d’un hectolitre de bière Grand Houblon : l’hectolitre est vendu 110 euros, le coût variable est de 84,50 euros par hectolitre, le coût fixe est de 1 400 000 euros. La production annuelle s’élève à 400 000 hectolitres."
      },
      {
        "type": "p",
        "text": "**Projet de commande :** le cours des matières premières ayant augmenté, le réapprovisionnement pour la fabrication de la bière supplémentaire ainsi que le recours à du personnel intérimaire entraîneront une augmentation de 12 % des charges variables, strictement proportionnelles aux quantités produites. La capacité de production de la société permet l’absorption de 35 000 hectolitres supplémentaires sans changement de structure."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**À partir du contexte Des Vieux Moulins de Nyons, apprécier l’intérêt et les limites des démarches de calcul de coûts utilisées.**"
      },
      {
        "type": "p",
        "text": "Il est possible de repérer des intérêts et des limites pour les marges calculées pour les deux produits et pour le seuil de rentabilité :"
      },
      {
        "type": "p",
        "text": "– la marge sur coût variable : simple à calculer, elle permet de comparer les deux produits, mais une marge négative n’est pas un critère suffisant pour abandonner un produit car d’autres critères peuvent intervenir pour le maintenir ;"
      },
      {
        "type": "p",
        "text": "– la marge globale : le résultat final est positif mais ce calcul ne permet pas de différencier les deux produits car les coûts fixes sont affectés globalement ; il faudrait répartir ces coûts fixes pour obtenir une marge par produit plus fiable ;"
      },
      {
        "type": "p",
        "text": "– le seuil de rentabilité : le calcul est simple mais reste global pour les deux produits, sans les différencier. De plus, la rentabilité financière n’est pas le seul objectif et une analyse sur d’autres dimensions, plus qualitatives et commerciales, est nécessaire."
      },
      {
        "type": "p",
        "text": "**Conseil au décideur**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "Méthode"
      },
      {
        "type": "p",
        "text": "**Méthode***La structure du commentaire doit aller du global aux résultats élémentaires en termes de profitabilité (marge/chiffre d’affaires).*•Paragraphe 1 : reprendre la marge sur coût variable globale en montant absolu, en montant relatif (en pourcentage du chiffre d’affaires) et porter un jugement sur le résultat obtenu (marge très faible, faible, correcte, satisfaisante, etc.).•Paragraphe 2 : analyser la structure de la MCV par produits et la contribution de chacun de ces produits à la MCV globale. Effectuer le même travail pour chacun des produits ; cela explique le taux de marge de chaque produit. Toujours reprendre les montants absolus et les valeurs relatives. Retenir une hiérarchie du plus profitable au moins profitable.•Paragraphe 3 : conclure sur les décisions à envisager (développement des ventes, capacité productive restante) et terminer sur les limites de la méthode, ouvrir sur une méthode plus pertinente pour répondre à la suppression éventuelle d’un produit."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "Cas2",
    "title": "Progo",
    "statement": [
      {
        "type": "p",
        "text": "La société Progo est spécialisée dans les caméras autonomes étanches et de petite taille."
      },
      {
        "type": "p",
        "text": "**Elle se positionne deux marchés distincts :**"
      },
      {
        "type": "p",
        "text": "• Le marché des « caméras embarquées » rechargeables et étanches. Il répond aux besoins des sportifs : VTT, planche à voile, spéléo ou plongée."
      },
      {
        "type": "p",
        "text": "• Le marché de la surveillance des lieux publics, destiné aux collectivités territoriales. Les ventes sont conclues sur réponse à des appels d’offres encadrés par le Code des marchés publics."
      },
      {
        "type": "p",
        "text": "**Sont ainsi distinguées deux activités :**"
      },
      {
        "type": "p",
        "text": "– l’activité « particuliers » avec une distinction entre les produits en milieu aquatique et en milieu terrestre ;"
      },
      {
        "type": "p",
        "text": "– l’activité « collectivités territoriales »."
      },
      {
        "type": "p",
        "text": "Ces deux activités sont réalisées sur le même site, mais dans des bâtiments différents. Vous êtes contrôleur de gestion, en charge des études auprès du dirigeant M. Thomas. Celuici vous demande de constituer un dossier préparatoire à une réunion de direction"
      },
      {
        "type": "p",
        "text": "visant à analyser la rentabilité de toutes les activités et à prendre des décisions stratégiques et opérationnelles. M. Thomas se demande si la méthode des coûts partiels utili sée est pertinente pour son entreprise. Vous disposez d’informations en annexe."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter tous les coûts et marges nécessaires avec la méthode adaptée pour éclairer l’analyse de la rentabilité demandée.**"
      },
      {
        "type": "p",
        "text": "**2. Apprécier les limites de la méthode de calcul des coûts utilisée dans l’entreprise Progo.**"
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire pour M. Thomas qui souhaite un éclairage sur la profitabilité de l’entreprise.**"
      },
      {
        "type": "p",
        "text": "**Tableau des coûts unitaires, exercice N**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Ventes aux particuliers**",
          "**Ventes aux collectivités**"
        ],
        "rows": [
          [
            "",
            "**Caméras sous-marines**",
            "**Caméras terrestres**",
            "**Caméras publiques**"
          ],
          [
            "**Quantités vendues**",
            "20 000",
            "39 000",
            "17 500"
          ],
          [
            "**Prix de vente**",
            "280",
            "178",
            "150"
          ],
          [
            "**Coût unitaire de fabricationdont coût variable**",
            "15996",
            "14470",
            "13889"
          ],
          [
            "**Coût unitaire de distributiondont coût variable**",
            "1813",
            "1712",
            "198"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Informations complémentaires**"
      },
      {
        "type": "p",
        "text": "Les charges fixes sont composées :"
      },
      {
        "type": "p",
        "text": "• Des charges fixes de fabrication : une étude plus approfondie de ces charges permet de distinguer les charges spécifiques à l’activité « Particulier » (1 703 000 €) et à l’activité « Collectivité » (442 000 €) – il s’agit de la location des bâtiments et des"
      },
      {
        "type": "p",
        "text": "redevances de crédit-bail – et les charges communes aux deux activités."
      },
      {
        "type": "p",
        "text": "• Des charges fixes de distribution."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter tous les coûts et marges nécessaires avec la méthode adaptée pour éclairer l’analyse de la profitabilité demandée.**"
      },
      {
        "type": "p",
        "text": "(Voir les tableaux de la page suivante.)"
      },
      {
        "type": "p",
        "text": "•Résultats analytiques unitaires (premier tableau)"
      },
      {
        "type": "p",
        "text": "•Contribution de chaque produit (second, troisième et quatrième tableaux)"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Caméras sous-marines**",
          "**Caméras terrestres**",
          "**Caméras publiques**",
          "**Total**"
        ],
        "rows": [
          [
            "Qtés",
            "PU",
            "Montant en k€",
            "Qtés",
            "PU",
            "Montant en k€",
            "Qtés",
            "PU",
            "Montant en k€"
          ],
          [
            "**Prix de vente**",
            "20 000",
            "280",
            "5 600 000",
            "39 000",
            "178",
            "6 942 000",
            "17 500",
            "150",
            "2 625 000",
            "15 167 000"
          ],
          [
            "**Coût de fabrication**",
            "20 000",
            "159",
            "3 180 000",
            "39 000",
            "144",
            "5 616 000",
            "17 500",
            "138",
            "2 415 000",
            "11 211 000"
          ],
          [
            "**Coût de distribution**",
            "20 000",
            "18",
            "360 000",
            "39 000",
            "17",
            "663 000",
            "17 500",
            "19",
            "332 500",
            "1 355 500"
          ],
          [
            "**Coût de revient**",
            "20 000",
            "177",
            "3 540 000",
            "39 000",
            "161",
            "6 279 000",
            "17 500",
            "157",
            "2 747 500",
            "12 566 500"
          ],
          [
            "**Résultat**",
            "20 000",
            "103",
            "2 060 000",
            "39 000",
            "17",
            "663 000",
            "17 500",
            "– 7",
            "– 122 500",
            "2 600 500"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**CF de fabrication**",
          "**CF de distribution**",
          "",
          "**Total**"
        ],
        "rows": [
          [
            "",
            "Qtés",
            "CF unit.",
            "Montant en k€",
            "% CF spécifiques",
            "Qtés",
            "CF unit",
            "Montant en k€",
            "% CF spécifiques"
          ],
          [
            "**Caméras sous-marines**",
            "20 000",
            "63",
            "1 260 000",
            "25 %",
            "20 000",
            "5",
            "100 000",
            "21 %",
            ""
          ],
          [
            "**Caméras terrestres**",
            "39 000",
            "74",
            "2 886 000",
            "58 %",
            "39 000",
            "5",
            "195 000",
            "40 %",
            ""
          ],
          [
            "**Caméras publiques**",
            "17 500",
            "49",
            "857 500",
            "17 %",
            "17 500",
            "11",
            "192 500",
            "39 %",
            ""
          ],
          [
            "**Total**",
            "",
            "",
            "5 003 500",
            "100 %",
            "",
            "",
            "487 500",
            "100 %",
            "5 491 000"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Caméras sous-marines**",
          "**Caméras terrestres**",
          "**Caméras publiques**",
          "**Total**"
        ],
        "rows": [
          [
            "Qtés",
            "PU",
            "Montant en k€",
            "Qtés",
            "PU",
            "Montant en k€",
            "Qtés",
            "PU",
            "Montant en k€"
          ],
          [
            "**Prix de vente**",
            "20 000",
            "280",
            "5 600 000",
            "39 000",
            "178,0",
            "6 942 000",
            "17 500",
            "150",
            "2 625 000",
            "15 167 000"
          ],
          [
            "**Coût de fabrication**",
            "20 000",
            "96",
            "1 920 000",
            "39 000",
            "70,0",
            "2 730 000",
            "17 500",
            "89",
            "1 557 500",
            "6 207 500"
          ],
          [
            "**Coût de distribution**",
            "20 000",
            "13",
            "260 000",
            "39 000",
            "12,0",
            "468 000",
            "17 500",
            "8",
            "140 000",
            "868 000"
          ],
          [
            "**Coût variable**",
            "20 000",
            "109",
            "2 180 000",
            "39 000",
            "82,0",
            "3 198 000",
            "17 500",
            "97",
            "1 697 500",
            "7 075 500"
          ],
          [
            "**Marge sur CV**",
            "20 000",
            "171",
            "3 420 000",
            "39 000",
            "96,0",
            "3 744 000",
            "17 500",
            "53",
            "927 500",
            "8 091 500"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "5 491 000"
          ],
          [
            "**Résultat**",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "2 600 500"
          ],
          [
            "**Taux de MCV**",
            "61,07 %",
            "53,93 %",
            "35,33 %",
            "53,35 %"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Caméras sous-marines**",
          "**Caméras terrestres**",
          "**Total Particuliers**",
          "**Caméras publiques**",
          "**Total**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "5 600 000",
            "6 942 000",
            "12 542 000",
            "2 625 000",
            "15 167 000"
          ],
          [
            "**CV globales**",
            "– 2 180 000",
            "– 3 198 000",
            "– 5 378 000",
            "– 1 697 500",
            "– 7 075 500"
          ],
          [
            "**Marge sur coûts variables**",
            "3 420 000",
            "3 744 000",
            "7 164 000",
            "927 500",
            "8 091 500"
          ],
          [
            "**CF spécifiques**",
            "",
            "",
            "– 1 703 000",
            "– 442 000",
            "– 2 145 000"
          ],
          [
            "**Marge sur coûts spécifiques**",
            "",
            "",
            "5 461 000",
            "485 500",
            "5 946 500"
          ],
          [
            "**CF communes**",
            "",
            "",
            "",
            "",
            "– 3 346 000"
          ],
          [
            "**Résultat**",
            "",
            "",
            "",
            "",
            "2 600 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat analytique global de l’entreprise s’élève à 2 600 500 €, ce qui représente 17 % du chiffre d’affaires. Le niveau de profitabilité est globalement satisfaisant mais montre une faiblesse au niveau des caméras publiques. En effet, le résultat analytique pour les caméras publiques est déficitaire de 7 € par unité vendue."
      },
      {
        "type": "p",
        "text": "Cependant, il faut observer le poids de la contribution aux charges fixes de chaque caméra."
      },
      {
        "type": "p",
        "text": "Les caméras publiques ont un poids fort au niveau de la distribution (39 %) et 17 % au niveau de la fabrication."
      },
      {
        "type": "p",
        "text": "**2. Apprécier les limites de la méthode de calcul des coûts utilisée dans l’entreprise Progo.**"
      },
      {
        "type": "p",
        "text": "La méthode des coûts spécifiques prolonge la méthode des coûts variables. Elle impute à la marge sur coût variable de chaque produit les charges directes fixes qui lui sont propres."
      },
      {
        "type": "p",
        "text": "Elle permet aussi de dégager une marge sur coûts spécifiques qui doit permettre la couverture des charges fixes indirectes réputées charges communes à l’entreprise. C’est pour cette raison que la société Progo utilise la méthode des coûts spécifiques."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire pour M. Thomas qui souhaite un éclairage sur la profitabilité de l’entreprise.**"
      },
      {
        "type": "p",
        "text": "Le résultat analytique global de l’entreprise s’élève à 2 600 500 €, ce qui représente 17 % du chiffre d’affaires. C’est une très bonne profitabilité."
      },
      {
        "type": "p",
        "text": "Par la méthode des coûts variables, la marge est générée à 79 % par les caméras sous-marines, et de façon secondaire par les caméras terrestres. Le taux de marge global s’élève à 53,35 %."
      },
      {
        "type": "p",
        "text": "Les ventes aux collectivités territoriales dégagent une perte de 122 500 €. Il peut être envisagé de supprimer ce produit."
      },
      {
        "type": "p",
        "text": "Quant au résultat de contribution, comme il n’y a pas de variation de stock de produit, il est concordant avec celui de la comptabilité financière."
      },
      {
        "type": "p",
        "text": "Tous les produits dégagent une marge sur coût variable positive, contribuant ainsi à la couverture des charges fixes. À ce niveau, il est possible d’affirmer que tous les produits sont à conserver."
      },
      {
        "type": "p",
        "text": "Les caméras terrestres dégagent un résultat négatif, mais leur suppression aurait conduit à imputer les charges fixes globales seulement sur les deux autres produits. Ceci ferait augmenter leurs coûts respectifs et donc diminuerait le résultat global."
      },
      {
        "type": "p",
        "text": "L’utilisation de cette méthode ne permet cependant pas de conclure définitivement sur la rentabilité des produits. Une analyse en marge sur coûts spécifiques est préférable."
      },
      {
        "type": "p",
        "text": "La méthode des coûts spécifiques prolonge la méthode des coûts variables. Elle impute à la marge sur coût variable de chaque produit les charges directes fixes qui lui sont propres."
      },
      {
        "type": "p",
        "text": "Elle permet aussi de dégager une marge sur coûts spécifiques qui doit permettre la couverture des charges fixes indirectes réputées charges communes à l’entreprise."
      },
      {
        "type": "p",
        "text": "Le mode de calcul retenu est le suivant : charges variables + charges fixes propres au produit."
      },
      {
        "type": "p",
        "text": "Tout produit dégageant une marge sur coût spécifique négative devrait être abandonné pour augmenter le résultat global par une diminution de la marge sur coût variable et une économie bien plus importante sur les charges fixes. Ici, tous les produits dégagent une marge sur coût spécifique positive et doivent, dans une optique économique, être conservés."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "Cas",
    "title": "Gaspard",
    "difficulty": 3,
    "durationMin": 20,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "La société Gaspard souhaite analyser la profitabilité de son produit phare : la balançoire Bindge, un kit à monter soi-même. Le bois, fourni par un grossiste situé à côté de l’usine, est scié pour réaliser les éléments, puis percé afin de réaliser les trous destinés à recevoir la visserie. La visserie est achetée à un sous-traitant."
      },
      {
        "type": "p",
        "text": "M. Gaspard a mis en place la méthode de l’imputation rationnelle des charges fixes."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Apprécier les intérêts de la méthode de l’imputation rationnelle des charges de structure.*"
      },
      {
        "type": "p",
        "text": "*2. Interpréter les résultats obtenus avec la méthode de l’imputation rationnelle.*"
      },
      {
        "type": "p",
        "text": "**Document — Résultats trimestriels de l’année N avec et sans imputation rationnelle**"
      },
      {
        "type": "p",
        "text": "Ces données concernent la balançoire Bindge."
      },
      {
        "type": "table",
        "headers": [
          "**Trimestres**",
          "**Résultat comptable (en €)**",
          "**Résultat avec imputation rationnelle (en €)**"
        ],
        "rows": [
          [
            "**Trimestre 1**",
            "57 600",
            "57 600"
          ],
          [
            "**Trimestre 2**",
            "59 200",
            "57 700"
          ],
          [
            "**Trimestre 3**",
            "60 300",
            "58 000"
          ],
          [
            "**Trimestre 4**",
            "61 000",
            "57 900"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le dirigeant, M. Gaspard, précise que la société a été victime d’un problème d’approvisionnement en bois en N ce qui a limité sa production."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion."
      },
      {
        "type": "p",
        "text": "**1. Apprécier les intérêts de la méthode de l’imputation rationnelle des charges de structure.**"
      },
      {
        "type": "p",
        "text": "Les variations de l’activité ont une conséquence sur le résultat car les charges fixes se répartissent sur des quantités plus ou moins importantes. Ainsi, une sous-activité fait augmenter les coûts unitaires, ce qui réduit le résultat. À l’inverse, une suractivité fait baisser les coûts unitaires. Ces variations d’activité peuvent donc masquer des variations de coûts sous-jacentes. L’imputation rationnelle permet d’isoler l’influence des variations d’activité et donc de mettre en évidence les variations dues à d’autres causes."
      },
      {
        "type": "p",
        "text": "**2. Interpréter les résultats obtenus avec la méthode de l’imputation rationnelle.**"
      },
      {
        "type": "p",
        "text": "Le résultat comptable est en progression, mais le résultat en imputation rationnelle stagne. L’amélioration du résultat est donc trompeuse, elle est due à une suractivité. Cette suractivité risque à terme de générer des coûts (usure prématurée, déficit d’entretien...). Une fois éliminé l’effet de la suractivité, le résultat est stable."
      },
      {
        "type": "p",
        "text": "L’approvisionnement en bois est une charge variable. La précision de M. Gaspard concernant le problème d’approvisionnement ne paraît donc pas crédible. Si effectivement il y a eu un problème d’approvisionnement, ce qui a évité une suractivité encore plus importante. La production est limitée par un autre goulot d’étranglement, qui représente une charge fixe. Un investissement de structure est nécessaire pour répondre à la demande importante."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "Cas",
    "title": "Burgerhôte",
    "difficulty": 3,
    "durationMin": 30,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion du groupe Burgerhôte s’intéresse au nouveau complexe restaurant et hôtel implanté depuis un an sur l’aire d’autoroute « Les trois sources », car il doit rédiger un rapport sur les résultats de l’année écoulée pour la direction du groupe. Il étudie différents points significatifs. Contrairement à la politique du groupe, le concept ici est plutôt celui de la restauration rapide et bon marché pour une clientèle de passage sur l’autoroute. Le contrôleur de gestion s’intéresse particulièrement à trois plats emblématiques du restaurant."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Calculer et interpréter les marges sur coûts spécifiques de chaque produit et le résultat.*"
      },
      {
        "type": "p",
        "text": "**Document — Produits et charges des principaux plats servis au restaurant**"
      },
      {
        "type": "p",
        "text": "Au cours de la dernière année, les plats suivants ont été choisis par les clients en majorité aux prix de vente indiqués :"
      },
      {
        "type": "p",
        "text": "**•**20 000 burgers-frites à 8 euros l’unité ;"
      },
      {
        "type": "p",
        "text": "**•**16 000 kebabs à 4 euros l’unité ;"
      },
      {
        "type": "p",
        "text": "**•**10 000 lasagnes à 5 euros l’unité."
      },
      {
        "type": "p",
        "text": "Les charges directes variables pour l’année ont été les suivantes en volume et en coûts unitaires."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Burgers**",
          "**Kebabs**",
          "**Lasagnes**"
        ],
        "rows": [
          [
            "**Qté**",
            "**CU**",
            "**Qté**",
            "**CU**",
            "**Qté**",
            "**CU**"
          ],
          [
            "**Matières premières (kg)**",
            "6 000",
            "4 €",
            "2 000",
            "6 €",
            "2 000",
            "3 €"
          ],
          [
            "**Main-d’œuvre (heures)**",
            "4 000",
            "20 €",
            "2 000",
            "20 €",
            "2 000",
            "20 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Chaque produit nécessite un mode de cuisson spécifique. Les montants annuels de charges fixes spécifiques pour l’amortissement et l’entretien des matériels distincts sont les suivants :"
      },
      {
        "type": "p",
        "text": "**•**burgers : 12 000 € ; kebabs : 5 000 € ; lasagnes : 15 000 €."
      },
      {
        "type": "p",
        "text": "Les charges fixes indirectes s’élèvent à 10 000 €."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Calculer et interpréter les marges sur coûts spécifiques de chaque produit et le résultat."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Burgers**",
          "**Kebabs**",
          "**Lasagnes**",
          "**Total**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Total",
            "Q",
            "CU",
            "Total",
            "Q",
            "CU",
            "Total",
            ""
          ],
          [
            "**Chiffre d’affaires**",
            "20 000",
            "8",
            "160 000",
            "16 000",
            "4",
            "64 000",
            "10 000",
            "5",
            "50 000",
            "274 000"
          ],
          [
            "**Total charges variables**",
            "",
            "",
            "104 000",
            "",
            "",
            "52 000",
            "",
            "",
            "46 000",
            "202 000"
          ],
          [
            "**Matières premières**",
            "6 000",
            "4",
            "24 000",
            "2 000",
            "6",
            "12 000",
            "2 000",
            "3",
            "6 000",
            "42 000"
          ],
          [
            "**Main-d’œuvre**",
            "4 000",
            "20",
            "80 000",
            "2 000",
            "20",
            "40 000",
            "2 000",
            "20",
            "40 000",
            "160 000"
          ],
          [
            "**Marge sur coût variable**",
            "",
            "",
            "56 000",
            "",
            "",
            "12 000",
            "",
            "",
            "4 000",
            "72 000"
          ],
          [
            "**Taux de marge sur coût variable**",
            "",
            "",
            "35 %",
            "",
            "",
            "19 %",
            "",
            "",
            "8 %",
            ""
          ],
          [
            "**Charges spécifiques**",
            "",
            "",
            "12 000",
            "",
            "",
            "5 000",
            "",
            "",
            "15 000",
            "32 000"
          ],
          [
            "**Marge sur coût spécifique**",
            "",
            "",
            "44 000",
            "",
            "",
            "7 000",
            "",
            "",
            "– 11 000",
            "40 000"
          ],
          [
            "**Taux de marge sur coût spécifique**",
            "",
            "",
            "28 %",
            "",
            "",
            "11 %",
            "",
            "",
            "– 2 2%",
            ""
          ],
          [
            "**Charges fixes indirectes**",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "10 000"
          ],
          [
            "**Résultat**",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "30 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les taux de marges sur coût variable des trois produits sont positifs, donc la société Burgerhôte doit en poursuivre la production. Ils permettent de couvrir une partie des charges fixes. Pourtant, le taux de marge sur coût variable des burgers est largement supérieur à celui des kebabs et des lasagnes. Cela est notamment dû aux charges variables."
      },
      {
        "type": "p",
        "text": "Les marges sur coût spécifique sont positives pour les burgers et les kebabs. Les lasagnes dégagent une marge spécifique négative de 11 000 €. La société Burgerhôte doit donc s’interroger sur l’arrêt de la production de lasagnes."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "Cas",
    "title": "Thermo Leroy",
    "difficulty": 2,
    "durationMin": 30,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Depuis presque 60 ans, l’usine Thermo Leroy fabrique des robots ménagers. En quelques décennies, le robot Leroy a évolué pour devenir plus polyvalent et a acquis une belle réputation de solidité et de fiabilité."
      },
      {
        "type": "p",
        "text": "Ce centre de production est équipé pour fournir 1 000 heures de main-d’œuvre par mois. L’heure de main-d’œuvre est l’unité d’œuvre à retenir. Les charges fixes mensuelles s’élèvent à 100 000 € et les charges variables sont de 30 € par heure. Au cours du mois de janvier, l’usine Thermo Leroy a réalisé une activité normale de 10 000 heures mais les activités des mois de février et mars s’établissent respectivement à 8 000 heures et 11 000 heures."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Calculer et interpréter les coûts avec et sans imputation rationnelle des charges fixes pour la société Thermo Leroy.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Calculer et interpréter les coûts avec et sans imputation rationnelle des charges fixes pour la société Thermo Leroy."
      },
      {
        "type": "p",
        "text": "Sans avoir recours à la méthode de l’imputation rationnelle des charges fixes, les coûts de l’unité d’oeuvre s’établissent ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Janvier**",
          "**Février**",
          "**Mars**"
        ],
        "rows": [
          [
            "**Activité réelle en heures**",
            "10 000",
            "8 000",
            "11 000"
          ],
          [
            "**Charges fixes réelles (en €)**",
            "100 000",
            "100 000",
            "100 000"
          ],
          [
            "**Charges variables (en €)**",
            "300 000",
            "240 000",
            "330 000"
          ],
          [
            "**Coût total (en €)**",
            "400 000",
            "340 000",
            "430 000"
          ],
          [
            "**Coût unitaire (en €)**",
            "40,00",
            "42,50",
            "39,09"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Avec la méthode de l’imputation rationnelle des charges fixes, le calcul des coûts devient :"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Janvier**",
          "**Février**",
          "**Mars**"
        ],
        "rows": [
          [
            "**Activité réelle en heures**",
            "10 000",
            "8 000",
            "11 000"
          ],
          [
            "**Charges fixes effectives (en €)**",
            "100 000",
            "100 000",
            "100 000"
          ],
          [
            "**Coefficient d’imputation rationnelle**",
            "1,0",
            "0,8",
            "1,1"
          ],
          [
            "**Charges fixes incorporées (en €)**",
            "100 000",
            "80 000",
            "110 000"
          ],
          [
            "**Charges variables (en €)**",
            "300 000",
            "240 000",
            "330 000"
          ],
          [
            "**Coût total (en €)**",
            "400 000",
            "320 000",
            "440 000"
          ],
          [
            "**Coût unitaire (en €)**",
            "40,00",
            "40,00",
            "40,00"
          ],
          [
            "**Différence d’incorporation**",
            "–",
            "– 20 000",
            "10 000"
          ],
          [
            "",
            "",
            "Coût de sous-activité",
            "Boni de suractivité"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Avec la méthode de l’imputation rationnelle des charges fixes, la société Thermo Leroy a pu atteindre ses objectifs :"
      },
      {
        "type": "p",
        "text": "– les coûts unitaires obtenus sont stables : hormis le niveau d’activité, aucune donnée n’a changé. Il s’ensuit que si le coût unitaire obtenu avait varié, cela proviendrait d’un autre facteur que du niveau d’activité ;"
      },
      {
        "type": "p",
        "text": "– la différence d’incorporation calculée représente effectivement l’incidence des variations d’activité sur le résultat de l’entreprise. Ici, on a un coût de sous-activité de 20 000 € et un boni de suractivité de 10 000 €."
      }
    ]
  },
  {
    "id": "ex8",
    "label": "Cas",
    "title": "Lamy",
    "difficulty": 2,
    "durationMin": 45,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "L’entreprise Lamy, située à Étretat, est spécialisée dans la rénovation de véhicules de collection de prestige telles que Porsche, Bugatti, Mercedes, Lanz Bulldog, Voisin… Elle exploite deux sites distincts :"
      },
      {
        "type": "p",
        "text": "**•**l’atelier Pinlu réalise des travaux de peinture de véhicules de collection. Son activité trimestrielle normale est de 1 500 litres de peinture étalée ;"
      },
      {
        "type": "p",
        "text": "**•**l’atelier Sène effectue des travaux de rénovation de moteurs. Son activité trimestrielle normale est de 3 400 heures de main-d’œuvre directe."
      },
      {
        "type": "p",
        "text": "La société Lamy souhaite appliquer la méthode de l’imputation rationnelle des charges fixes en tenant compte d’un taux d’activité spécifique par activité."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Calculer et interpréter les coûts à l’aide de la méthode de l’imputation rationnelle des charges fixes pour la société Lamy.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Consommations du 1er trimestre N**"
      },
      {
        "type": "p",
        "text": "Pour le 1er trimestre N, on a relevé les informations suivantes."
      },
      {
        "type": "p",
        "text": "**•**Peinture étalée dans l’atelier Pinlu : 1 050 litres"
      },
      {
        "type": "p",
        "text": "**•**Main-d’œuvre directe (variable) :"
      },
      {
        "type": "p",
        "text": "– atelier Pinlu : 1 200 heures à 80 €"
      },
      {
        "type": "p",
        "text": "– atelier Sène : 4 080 heures à 100 €"
      },
      {
        "type": "p",
        "text": "**Document 2 — Charges et produits**"
      },
      {
        "type": "table",
        "headers": [
          "**Charges indirectes de production**",
          "**Ateliers**"
        ],
        "rows": [
          [
            "**Pinlu**",
            "**Sène**"
          ],
          [
            "**Énergie (variable) (en €)**",
            "50 000",
            "30 000"
          ],
          [
            "**Main-d’œuvre (fixe) (en €)**",
            "240 000",
            "500 000"
          ],
          [
            "**Amortissements (fixe) (en €)**",
            "150 000",
            "100 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges de distribution sont toutes des charges fixes."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Pinlu**",
          "**Sène**"
        ],
        "rows": [
          [
            "**Charges de distribution (en €)**",
            "50 000",
            "200 000"
          ],
          [
            "**Chiffre d’affaires des travaux effectués (en €)**",
            "460 000",
            "1 750 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La société Lamy applique la méthode de l’imputation rationnelle des charges fixes en tenant compte d’un taux d’activité spécifique par activité."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Calculer et interpréter les coûts à l’aide de la méthode de l’imputation rationnelle des charges fixes pour la société Lamy."
      },
      {
        "type": "p",
        "text": "Le taux d’activité est distinct selon les deux types d’activité :"
      },
      {
        "type": "table",
        "headers": [
          "**Taux d’activité**"
        ],
        "rows": [
          [
            "**Travaux de peinture**",
            "**70 %**"
          ],
          [
            "**Rénovation de moteurs**",
            "120 %"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Charges**",
          "**Total**",
          "**Atelier Pinlu**",
          "**Atelier Sène**",
          "**Distribution Pinlu**",
          "**Distribution Sène**",
          "**Différences sur niveau d’activité**"
        ],
        "rows": [
          [
            "F",
            "V",
            "F",
            "V",
            "F",
            "V",
            "F",
            "V",
            "F",
            "V"
          ],
          [
            "**Énergie**",
            "",
            "80 000",
            "",
            "50 000",
            "",
            "30 000",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "**Main-d’œuvre**",
            "740 000",
            "",
            "240 000",
            "",
            "500 000",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "**Amortissements**",
            "250 000",
            "",
            "150 000",
            "",
            "100 000",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "**Charges de distribution**",
            "250 000",
            "",
            "",
            "",
            "",
            "",
            "50 000",
            "",
            "200 000",
            "",
            ""
          ],
          [
            "**TOTAL**",
            "1 240 000",
            "80 000",
            "390 000",
            "50 000",
            "600 000",
            "30 000",
            "50 000",
            "",
            "200 000",
            "",
            ""
          ],
          [
            "**Imputation rationnelle des charges fixes**",
            "",
            "",
            "(273 000)",
            "273 000",
            "(720 000)",
            "720 000",
            "(35 000)",
            "35 000",
            "(240 000)",
            "240 000",
            ""
          ],
          [
            "**Total**",
            "",
            "",
            "",
            "323 000",
            "",
            "750 000",
            "",
            "35 000",
            "",
            "240 000",
            ""
          ],
          [
            "**Différences sur niveau d’activité**",
            "",
            "",
            "117 000",
            "",
            "(120 000)",
            "",
            "15 000",
            "",
            "(40 000)",
            "",
            "(28 000)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coûts et résultats (en €)"
      },
      {
        "type": "table",
        "headers": [
          "**en €**",
          "**Atelier Pinlu**",
          "**Atelier Sène**"
        ],
        "rows": [
          [
            "**Main-d’œuvre directe**",
            "96 000",
            "408 000"
          ],
          [
            "**Ateliers**",
            "323 000",
            "750 000"
          ],
          [
            "**Coût de production**",
            "419 000",
            "1 158 000"
          ],
          [
            "**Coût de distribution**",
            "35 000",
            "240 000"
          ],
          [
            "**Coût de revient**",
            "454 000",
            "1 398 000"
          ],
          [
            "**Ventes**",
            "460 000",
            "1 750 000"
          ],
          [
            "**Résultat**",
            "6 000",
            "352 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat global (en €)"
      },
      {
        "type": "table",
        "headers": [
          "**Résultat Atelier Pinlu**",
          "**6 000**"
        ],
        "rows": [
          [
            "**Résultat Atelier Sène**",
            "352 000"
          ],
          [
            "**Différence sur niveau d’activité**",
            "28 000"
          ],
          [
            "**Résultat global**",
            "386 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Avec la méthode de l’imputation rationnelle des charges fixes, la société Lamy a pu atteindre ses objectifs :"
      },
      {
        "type": "p",
        "text": "– les coûts unitaires obtenus sont stables : hormis le niveau d’activité, aucune donnée n’a changé ;"
      },
      {
        "type": "p",
        "text": "– la différence d’incorporation calculée représente effectivement l’incidence des variations d’activité sur le résultat de l’entreprise. Ici, on a une différence sur niveau d’activité de – 28 000 € qui justifie les différences de résultats. Le résultat de gestion est ici majoré de 28 000 €, ce qui explique son passage à 386 000 €."
      }
    ]
  },
  {
    "id": "ex9",
    "label": "Cas",
    "title": "Ladro",
    "difficulty": 3,
    "durationMin": 45,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Labellisée « Entreprise du Patrimoine Vivant » et « Origine France Garantie », l’entreprise Ladro assure une production locale haut de gamme de vêtements casual. La fabrication locale est un engagement qui prend son sens dans une vision de long terme. Aujourd’hui, il reste impossible de concurrencer les prix que la fast fashion impose mais, grâce à la prise de conscience qui se généralise auprès des consommateurs, petit à petit, le modèle économique de Ladro s’impose de plus en plus. La dirigeante de Ladro, Mme Louiso, a très vite adopté la méthode du coût marginal pour gérer la croissance de son entreprise."
      },
      {
        "type": "p",
        "text": "La société livre des polos à l’ensemble de ses partenaires européens à raison de 3 000 unités par mois, compte tenu de la demande du marché. Les contrats stipulent un prix de vente de 55 € mais, pour rester compétitive, la société Ladro envisagerait de baisser fortement son prix de vente à 48 € pour vendre davantage en quantité."
      },
      {
        "type": "p",
        "text": "La production est réalisée par séries de 500 unités."
      },
      {
        "type": "p",
        "text": "Les coûts variables dépendent du taux d’utilisation des équipements et sont ainsi différents d’une série à l’autre."
      },
      {
        "type": "p",
        "text": "Les charges fixes mensuelles s’élèvent à 50 000 € pour une production inférieure ou égale à 3 000 unités. Au-delà de cette production, toute série supplémentaire entraîne une progression de 10 % des charges fixes à cause d’une externalisation coûteuse."
      },
      {
        "type": "p",
        "text": "Mme Louiso a rencontré le directeur des achats de la société Fatemps, maison de distribution de prestige. Il lui propose une commande de plusieurs séries de 500 polos par mois, au prix de 45 € le polo."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "Calculer et interpréter les coûts et les résultats envisagés en utilisant la méthode du coût marginal pour les différents scénarios :"
      },
      {
        "type": "p",
        "text": "– vente de séries de 500 unités à 55 €/unité. Déterminer les optimums de production ;"
      },
      {
        "type": "p",
        "text": "– vente de séries de 500 unités à 48 €/unité ;"
      },
      {
        "type": "p",
        "text": "– vente de séries supplémentaires à la société Fatemps."
      },
      {
        "type": "p",
        "text": "**Document — Coût variable d’un polo selon la série**"
      },
      {
        "type": "table",
        "headers": [
          "**N° de série**",
          "**1**",
          "**2**",
          "**3**",
          "**4**",
          "**5**",
          "**6**",
          "**7**",
          "**8**",
          "**9**",
          "**10**"
        ],
        "rows": [
          [
            "**Coût variable d’un polo (en €)**",
            "39",
            "35",
            "31",
            "29",
            "29",
            "29",
            "33",
            "34",
            "38",
            "44"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Savonnerie Lys**"
      },
      {
        "type": "p",
        "text": "La Savonnerie Lys fabrique et vend un savon unique. Le prix de vente est de 8 € l’unité ; le coût variable unitaire de 5 € ; les charges fixes annuelles de 90 000 €. Elle a vendu 40 000 unités sur l’exercice. L’activité est supposée régulière sur l’année."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer la marge sur coût variable (unitaire et globale) et le résultat.**"
      },
      {
        "type": "p",
        "text": "**2. Déterminer le seuil de rentabilité en valeur et en quantité.**"
      },
      {
        "type": "p",
        "text": "**3. Calculer le point mort (date à laquelle le seuil est atteint).**"
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Mobilier Trévi**"
      },
      {
        "type": "p",
        "text": "Le Mobilier Trévi commercialise trois produits P1, P2 et P3. La direction souhaite un diagnostic par produit en direct costing, puis en direct costing évolué (prise en compte des charges fixes spécifiques), avant de décider du maintien de P3."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**P1**",
          "**P2**",
          "**P3**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "300 000 €",
            "200 000 €",
            "150 000 €"
          ],
          [
            "**Coût variable**",
            "180 000 €",
            "150 000 €",
            "130 000 €"
          ],
          [
            "**Charges fixes spécifiques**",
            "40 000 €",
            "30 000 €",
            "35 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges fixes communes, non affectables aux produits, s’élèvent à 60 000 €."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Présenter le compte de résultat différentiel par produit (marge sur coût variable) et le résultat global.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer la marge sur coûts spécifiques de chaque produit.**"
      },
      {
        "type": "p",
        "text": "**3. Le produit P3 doit-il être abandonné ? Discuter selon que les charges fixes spécifiques sont ou non supprimables.**"
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Cartonnex**"
      },
      {
        "type": "p",
        "text": "La société Cartonnex fabrique un emballage standard. Prix de vente : 12 € l’unité ; coût variable unitaire : 7 € ; charges fixes : 200 000 €. Les ventes de l’exercice s’élèvent à 60 000 unités ; l’activité est régulière sur l’année."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Établir le compte de résultat différentiel et calculer le résultat.**"
      },
      {
        "type": "p",
        "text": "**2. Déterminer le seuil de rentabilité (valeur et quantité), la marge et l’indice de sécurité, ainsi que le point mort.**"
      },
      {
        "type": "p",
        "text": "**3. Calculer le levier opérationnel et interpréter l’effet d’une hausse de 10 % du chiffre d’affaires.**"
      },
      {
        "type": "p",
        "text": "**4. Un client propose une commande supplémentaire de 10 000 unités à 9 € l’unité, sans charges fixes additionnelles ni incidence sur les ventes habituelles. Faut-il l’accepter ?**"
      },
      {
        "type": "p",
        "text": "**5. Un investissement porterait les charges fixes à 280 000 € mais ramènerait le coût variable unitaire à 5,50 €. Apprécier son effet sur le résultat, le seuil de rentabilité et le levier opérationnel (au niveau d’activité actuel).**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné"
      },
      {
        "type": "p",
        "text": "Calculer et interpréter les coûts et les résultats envisagés en utilisant la méthode du coût marginal pour les différents scénarios :"
      },
      {
        "type": "p",
        "text": "– vente de séries de 500 unités à 55 €/unité. Déterminer les optimums de production ;"
      },
      {
        "type": "p",
        "text": "– vente de séries de 500 unités à 48 €/unité ;"
      },
      {
        "type": "p",
        "text": "– vente de séries supplémentaires à la société Fatemps."
      },
      {
        "type": "p",
        "text": "Vente de séries de 500 unités à 55 €/unité"
      },
      {
        "type": "table",
        "headers": [
          "**Séries**",
          "**Coût variable unitaire (en €)**",
          "**Coût variable d’une série (en €)**",
          "**Coût variable total (en €)**",
          "**Charges fixes (en €)**",
          "**Coût total (en €)**",
          "**Coût moyen d’une série (en €)**",
          "**Coût marginal de la série (en €)**",
          "**CA actuel (en €)**",
          "**Résultat actuel (en €)**"
        ],
        "rows": [
          [
            "**1**",
            "39",
            "19 500",
            "19 500",
            "50 000",
            "69 500",
            "69 500",
            "69 500",
            "27 500",
            "– 42 000"
          ],
          [
            "**2**",
            "35",
            "17 500",
            "37 000",
            "50 000",
            "87 000",
            "43 500",
            "17 500",
            "55 000",
            "– 32 000"
          ],
          [
            "**3**",
            "31",
            "15 500",
            "52 500",
            "50 000",
            "102 500",
            "34 167",
            "15 500",
            "82 500",
            "– 20 000"
          ],
          [
            "**4**",
            "29",
            "14 500",
            "67 000",
            "50 000",
            "117 000",
            "29 250",
            "14 500",
            "110 000",
            "– 7 000"
          ],
          [
            "**5**",
            "29",
            "14 500",
            "81 500",
            "50 000",
            "131 500",
            "26 300",
            "14 500",
            "137 500",
            "6 000"
          ],
          [
            "**6**",
            "29",
            "14 500",
            "96 000",
            "50 000",
            "146 000",
            "24 333",
            "14 500",
            "165 000",
            "19 000"
          ],
          [
            "**7**",
            "33",
            "16 500",
            "112 500",
            "55 000",
            "167 500",
            "23 929",
            "21 500",
            "192 500",
            "25 000"
          ],
          [
            "**8**",
            "34",
            "17 000",
            "129 500",
            "60 500",
            "190 000",
            "23 750",
            "22 500",
            "220 000",
            "30 000"
          ],
          [
            "**9**",
            "38",
            "19 000",
            "148 500",
            "66 550",
            "215 050",
            "23 894",
            "25 050",
            "247 500",
            "32 450"
          ],
          [
            "**10**",
            "44",
            "22 000",
            "170 500",
            "73 205",
            "243 705",
            "24 371",
            "28 655",
            "275 000",
            "31 295"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Optimum technique : il correspond à la production qui permet d’atteindre le coût moyen minimum, soit 8 séries (4 000 polos)."
      },
      {
        "type": "p",
        "text": "Optimum économique : l’entreprise Ladro augmente son résultat tant que le chiffre d’affaires de la série est supérieur au coût marginal de la série. Le prix de vente est de 500 × 55 = 27 500 €."
      },
      {
        "type": "p",
        "text": "L’optimum économique est obtenu par la production de 9 séries de polos (coût marginal de la 9e série = 25 050 € et coût marginal de la I0e série = 28 655 €). L’entreprise Ladro dégagerait 32 450 € de bénéfices."
      },
      {
        "type": "p",
        "text": "Vente de séries de 500 unités à 48 €/unité"
      },
      {
        "type": "p",
        "text": "L’exploitation est rentable si le coût moyen est inférieur au prix de vente. La société Ladro réalise des profits lorsqu’elle commercialise entre 7 et 9 séries. Nous trouvons là une autre approche du concept de seuil de rentabilité qui intègre le phénomène des rendements décroissants. La zone de rentabilité est bornée par une valeur inférieure et une valeur supérieure. La société Ladro aurait intérêt à rapprocher sa production de l’optimum de résultat atteint pour la vente de 9 séries. Pour autant, nous ne conseillons pas à madame Louiso d’envisager une baisse du prix de vente à 48 €. La marge dégagée serait trop faible."
      },
      {
        "type": "table",
        "headers": [
          "**Séries**",
          "**Coût total (en €)**",
          "**Coût moyen d’une série (en €)**",
          "**Coût marginal de la série (en €)**",
          "**CA envisagé (en €)**",
          "**Résultat envisagé (en €)**"
        ],
        "rows": [
          [
            "**1**",
            "69 500",
            "69 500",
            "69 500",
            "24 000",
            "– 45 500"
          ],
          [
            "**2**",
            "87 000",
            "43 500",
            "17 500",
            "48 000",
            "– 39 000"
          ],
          [
            "**3**",
            "102 500",
            "34 167",
            "15 500",
            "72 000",
            "– 30 500"
          ],
          [
            "**4**",
            "117 000",
            "29 250",
            "14 500",
            "96 000",
            "– 21 000"
          ],
          [
            "**5**",
            "131 500",
            "26 300",
            "14 500",
            "120 000",
            "– 11 500"
          ],
          [
            "**6**",
            "146 000",
            "24 333",
            "14 500",
            "144 000",
            "– 2 000"
          ],
          [
            "**7**",
            "167 500",
            "23 929",
            "21 500",
            "168 000",
            "500"
          ],
          [
            "**8**",
            "190 000",
            "23 750",
            "22 500",
            "192 000",
            "2 000"
          ],
          [
            "**9**",
            "215 050",
            "23 894",
            "25 050",
            "216 000",
            "950"
          ],
          [
            "**10**",
            "243 705",
            "24 371",
            "28 655",
            "240 000",
            "– 3 705"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Vente de séries supplémentaires à la société Fatemps"
      },
      {
        "type": "table",
        "headers": [
          "**Séries**",
          "**CA marginal de Fatemps (en €)**",
          "**CA total avec Fatemps (en €)**",
          "**Résultat avec Fatemps (en €)**"
        ],
        "rows": [
          [
            "**1**",
            "–",
            "27 500",
            "– 42 000"
          ],
          [
            "**2**",
            "–",
            "55 000",
            "– 32 000"
          ],
          [
            "**3**",
            "–",
            "82 500",
            "– 20 000"
          ],
          [
            "**4**",
            "–",
            "110 000",
            "– 7 000"
          ],
          [
            "**5**",
            "–",
            "137 500",
            "6 000"
          ],
          [
            "**6**",
            "–",
            "165 000",
            "19 000"
          ],
          [
            "**7**",
            "22500",
            "187 500",
            "20 000"
          ],
          [
            "**8**",
            "22500",
            "210 000",
            "20 000"
          ],
          [
            "**9**",
            "22500",
            "232 500",
            "17 450"
          ],
          [
            "**10**",
            "22500",
            "255 000",
            "11 295"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat de l’entreprise Ladro serait optimisé avec une commande de deux séries supplémentaires. Il atteindrait 20 000 €."
      },
      {
        "type": "p",
        "text": "Il est actuellement de 19 000 € avec six séries."
      },
      {
        "type": "p",
        "text": "PARTIE 1 : CAS DE SYNTHÈSELA PRÉVENTION ET LE TRAITEMENT DES DIFFICULTÉS"
      },
      {
        "type": "p",
        "text": "**DINOXSA**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et résultats analytiques des pièces DICOPT1 et DICOPT2 dans le système actuel d’analyse des coûts.**"
      },
      {
        "type": "p",
        "text": "**Tableau de répartition des charges indirectes**"
      },
      {
        "type": "table",
        "headers": [
          "**Centres**",
          "**Approvisionnement**",
          "**Usinage et finition**",
          "**Distribution**",
          "**Administration générale**"
        ],
        "rows": [
          [
            "**Total après répartition secondaire**",
            "24 208,80 €",
            "232 260,00 €",
            "29 625,00 €",
            "77 208,90 €"
          ],
          [
            "**Nature de l’unité d’œuvre ou assiette de frais**",
            "kg acheté",
            "Heure-machine",
            "Produit vendu",
            "Coût de production des produits vendus"
          ],
          [
            "**Nombre d’unités d’œuvre ou montant de l’assiette**",
            "3 0801",
            "7352",
            "2 5003",
            "531 833,00"
          ],
          [
            "**Coût d’unité d’œuvre ou taux de frais**",
            "7,86 €",
            "316,00 €",
            "11,85 €",
            "0,1452 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "1 kg achetés = 2 680 + 400"
      },
      {
        "type": "p",
        "text": "2 heures-machine = 540 + 195"
      },
      {
        "type": "p",
        "text": "3 produits vendus : production du mois (tous les produits sont transférés au client)"
      },
      {
        "type": "p",
        "text": "**Coûts d’achat des matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Aluminium**",
          "**Titane**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Achats**",
            "2 680",
            "54,00 €",
            "144 720,00 €",
            "400",
            "297,00 €",
            "118 800,00 €"
          ],
          [
            "**CI d’approvisionnement**",
            "2 680",
            "7,86 €",
            "21 064,80 €",
            "400",
            "7,86 €",
            "3 144,00 €"
          ],
          [
            "**Coûts d’achat**",
            "2 680",
            "61,86 €",
            "165 784,80 €",
            "400",
            "304,86 €",
            "121 944,00 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Comptes de stocks des matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Aluminium**",
          "**Titane**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Stock initial**",
            "350",
            "61,08 €",
            "21 378,30 €",
            "80",
            "303,30 €",
            "24 264,00 €"
          ],
          [
            "**Achats**",
            "2 680",
            "61,86 €",
            "165 784,80 €",
            "400",
            "304,86 €",
            "121 944,00 €"
          ],
          [
            "**Total**",
            "3 030",
            "61,77 €",
            "187 163,10 €",
            "480",
            "304,60 €",
            "146 208,00 €"
          ],
          [
            "**Sorties**",
            "2 700",
            "61,77 €",
            "166 779,00 €",
            "390",
            "304,60 €",
            "118 794,00 €"
          ],
          [
            "**Stock final**",
            "330",
            "61,77 €",
            "20 384,10 €",
            "90",
            "304,60 €",
            "27 414,00 €"
          ],
          [
            "**Total**",
            "3 030",
            "61,77 €",
            "187 163,10 €",
            "480",
            "304,60 €",
            "146 208,00 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coûts de production des produits finis**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**DICOPT1**",
          "**DICOPT2**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Matières consommées**",
            "2 700",
            "61,77 €",
            "166 779,00 €",
            "390",
            "304,60 €",
            "118 794,00 €"
          ],
          [
            "**Main-d’œuvre directe**",
            "185",
            "20,00 €",
            "3 700,00 €",
            "515",
            "20,00 €",
            "10 300,00 €"
          ],
          [
            "**CI d’usinage et de finition**",
            "540",
            "316,00 €",
            "170 640,00 €",
            "195",
            "316,00 €",
            "61 620,00 €"
          ],
          [
            "**Coûts de production**",
            "1 200",
            "284,27 €",
            "341 119,00 €",
            "1 300",
            "146,70 €",
            "1 904,00 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coûts de revient et résultats analytiques des produits finis**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**DICOPT1**",
          "**DICOPT2**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Coûts de production**",
            "1 200",
            "284,27 €",
            "341 119,00 €",
            "1 300",
            "146,70 €",
            "190 714,00 €"
          ],
          [
            "**CI de distribution**",
            "1 200",
            "11,85 €",
            "14 220,00 €",
            "1 300",
            "11,85 €",
            "15 405,00 €"
          ],
          [
            "**CI d’administration générale**",
            "341 119",
            "0,15 €",
            "49 521,98 €",
            "190 714",
            "0,15 €",
            "27 686,92 €"
          ],
          [
            "**Coûts de revient**",
            "1 200",
            "337,38 €",
            "404 860,98 €",
            "1 300",
            "179,85 €",
            "233 805,92 €"
          ],
          [
            "**Chiffres d’affaires**",
            "1 200",
            "325,00 €",
            "390 000,00 €",
            "1 300",
            "217,00 €",
            "282 100,00 €"
          ],
          [
            "**Résultats analytiques**",
            "1 200",
            "– 12,38 €",
            "– 14 860,98 €",
            "1 300",
            "37,15 €",
            "48 294,08 €"
          ],
          [
            "**Taux de profitabilité**",
            "– 3,81 %",
            "17,12 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Interprétation*"
      },
      {
        "type": "p",
        "text": "Résultat global = – 14 860,98 + 48 294,08 = 33 433,10 €."
      },
      {
        "type": "p",
        "text": "Le produit DICOPT1 a un taux de profitabilité négatif tandis que le produit DICOPT2 présente un taux de profitabilité positif de 17,12 %. Ces résultats sont à confirmer avec d’autres méthodes."
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter les coûts et résultats analytiques des pièces DICOPT1 et DICOPT2 si l’on se réfère à la proposition de l’audit interne.**"
      },
      {
        "type": "p",
        "text": "**Remarque***Coût par inducteur*"
      },
      {
        "type": "p",
        "text": "Le nombre d’inducteurs est recherché dans les renseignements complémentaires et dans le document 1."
      },
      {
        "type": "table",
        "headers": [
          "**Centres**",
          "**Activité**",
          "**Coût des activités**",
          "**Nature de l’inducteur**",
          "**Nombre d’inducteurs**",
          "**Coût de l’inducteur**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "Gestion des commandes",
            "6 200,00 €",
            "Nb de commandes",
            "12",
            "516,67 €"
          ],
          [
            "Gestion des stocks",
            "15 648,80 €",
            "Montant des achats",
            "263 520,00 €",
            "0,06 €"
          ],
          [
            "Approvisionnement atelier",
            "2 360,00 €",
            "Nb de lots en fabrication",
            "19",
            "124,21 €"
          ],
          [
            "**Usinage**",
            "Préparation des fabrications",
            "34 125,00 €",
            "Nb de lots en fabrication",
            "19",
            "1 796,05 €"
          ],
          [
            "Lancement des fabrications",
            "76 020,00 €",
            "Heures-machines",
            "735",
            "103,43 €"
          ],
          [
            "Maintenance des machines",
            "14 805,00 €",
            "Heures-machines",
            "735",
            "20,14 €"
          ],
          [
            "**Finition**",
            "Polissage des pièces",
            "24 800,00 €",
            "Nb de pièces fabriquées",
            "2 500",
            "9,92 €"
          ],
          [
            "Contrôle de la qualité",
            "66 400,00 €",
            "Nb de pièces contrôlées",
            "1420",
            "46,76 €"
          ],
          [
            "Expédition",
            "16 110,00 €",
            "Nb de lots expédiés",
            "19",
            "847,89 €"
          ],
          [
            "**Administration générale**",
            "Organisation générale",
            "106 833,90 €",
            "Coût de production",
            "531 236,34 €",
            "0,20 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "•Gestion des commandes : 12 commandes passées durant la période (document 2)."
      },
      {
        "type": "p",
        "text": "•Gestion des stocks : valeur des achats = 144 720 € + 118 800 € (document 1)."
      },
      {
        "type": "p",
        "text": "•Approvisionnement de l’atelier : 19 lots mis en fabrication (6 lots de 200 pièces pour DICOPT1 et 13 lots de 100 pièces pour DICOPT2)."
      },
      {
        "type": "p",
        "text": "•Préparation fabrication et expédition : 19 lots puisque tous les lots mis en fabrication sont terminés et expédiés."
      },
      {
        "type": "p",
        "text": "•Lancement de la fabrication et maintenance des machines : 735 heures-machines (document 1)."
      },
      {
        "type": "p",
        "text": "•Polissage des pièces : 2 500 pièces fabriquées (1 200 + 1 300)."
      },
      {
        "type": "p",
        "text": "•Contrôle de la qualité : 10 % de la production DICOPT1 et 100 % de la production DICOPT2."
      },
      {
        "type": "p",
        "text": "**Coût d’achat des matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Aluminium**",
          "**Titane**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Achats**",
            "2 680",
            "54,00 €",
            "144 720,00 €",
            "400",
            "297,00 €",
            "118 800,00 €"
          ],
          [
            "**Gestion des commandes**",
            "8",
            "516,67 €",
            "4 133,33 €",
            "4",
            "516,67 €",
            "2 066,67 €"
          ],
          [
            "**Gestion des stocks**",
            "144 720",
            "0,06 €",
            "8 594,01 €",
            "118 800",
            "0,06 €",
            "7 054,79 €"
          ],
          [
            "**Coûts d’achat**",
            "2 680",
            "58,75 €",
            "157 447,35 €",
            "400",
            "319,80 €",
            "127 921,45 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Comptes de stock des matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Aluminium**",
          "**Titane**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Stock initial**",
            "350",
            "61,08 €",
            "21 378,30 €",
            "80",
            "303,30 €",
            "24 264,00 €"
          ],
          [
            "**Achats**",
            "2 680",
            "58,75 €",
            "157 447,35 €",
            "400",
            "319,80 €",
            "127 921,45 €"
          ],
          [
            "**Total**",
            "3 030",
            "59,02 €",
            "178 825,65 €",
            "480",
            "317,05 €",
            "152 185,45 €"
          ],
          [
            "**Sorties**",
            "2 700",
            "59,02 €",
            "159 349,59 €",
            "390",
            "317,05 €",
            "123 650,68 €"
          ],
          [
            "**Stock final**",
            "330",
            "59,02 €",
            "19 476,06 €",
            "90",
            "317,05 €",
            "28 534,77 €"
          ],
          [
            "**Total**",
            "3 030",
            "59,02 €",
            "178 825,65 €",
            "480",
            "317,05 €",
            "152 185,45 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coûts de revient des produits finis**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**DICOPT1**",
          "**DICOPT2**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Matières consommées**",
            "2 700",
            "59,02 €",
            "159 349,59 €",
            "390",
            "317,05 €",
            "123 650,68 €"
          ],
          [
            "**Main-d’œuvre directe**",
            "185",
            "20,00 €",
            "3 700,00 €",
            "515",
            "20,00 €",
            "10 300,00 €"
          ],
          [
            "**Approvisionnement atelier**",
            "6",
            "124,21 €",
            "745,26 €",
            "13",
            "124,21 €",
            "1 614,74 €"
          ],
          [
            "**Préparation des fabrications**",
            "6",
            "1 796,05 €",
            "10 776,32 €",
            "13",
            "1 796,05 €",
            "23 348,68 €"
          ],
          [
            "**Lancement des fabrications**",
            "540",
            "103,43 €",
            "55 851,43 €",
            "195",
            "103,43 €",
            "20 168,57 €"
          ],
          [
            "**Maintenance des machines**",
            "540",
            "20,14 €",
            "10 877,14 €",
            "195",
            "20,14 €",
            "3 927,86 €"
          ],
          [
            "**Polissage des pièces**",
            "1 200",
            "9,92 €",
            "11 904,00 €",
            "1 300",
            "9,92 €",
            "12 896,00 €"
          ],
          [
            "**Contrôle de la qualité**",
            "120",
            "46,76 €",
            "5 611,27 €",
            "1 300",
            "46,76 €",
            "60 788,73 €"
          ],
          [
            "**Expédition**",
            "6",
            "847,89 €",
            "5 087,37 €",
            "13",
            "847,89 €",
            "11 022,63 €"
          ],
          [
            "**Coûts de production**",
            "",
            "",
            "263 902,37 €",
            "",
            "",
            "267 717,89 €"
          ],
          [
            "**Organisation générale**",
            "263 902",
            "0,20 €",
            "53 033,57 €",
            "267 718",
            "0,20 €",
            "53 800,33 €"
          ],
          [
            "**Coûts de revient**",
            "1 200",
            "264,11 €",
            "316 935,94 €",
            "1 300",
            "247,32 €",
            "321 518,23 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Des regroupements d’inducteurs auraient été possibles."
      },
      {
        "type": "p",
        "text": "**Résultats analytiques des produits finis**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**DICOPT1**",
          "**DICOPT2**"
        ],
        "rows": [
          [
            "",
            "Quantité",
            "Coût unitaire",
            "Montant",
            "Quantité",
            "Coût unitaire",
            "Montant"
          ],
          [
            "**Chiffres d’affaires**",
            "1 200",
            "325,00 €",
            "390 000,00 €",
            "1 300",
            "217,00 €",
            "282 100,00 €"
          ],
          [
            "**Coûts de revient**",
            "1 200",
            "264,11 €",
            "316 935,94 €",
            "1 300",
            "247,32 €",
            "321 518,23 €"
          ],
          [
            "**Résultats analytiques**",
            "1 200",
            "60,89 €",
            "73 064,06 €",
            "1 300",
            "– 30,32 €",
            "– 39 418,23 €"
          ],
          [
            "**Taux de profitabilité**",
            "18,73 %",
            "– 13,97 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Interprétation*"
      },
      {
        "type": "p",
        "text": "Résultat global = 73 064,06 – 39 418,23 = 33 645,83 €."
      },
      {
        "type": "p",
        "text": "La différence entre les deux méthodes de 212,73 € provient des stocks, c’est-à-dire de la différence d’évaluation des matières premières avec des CMUP différents."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller la dirigeante, notamment sur la méthode de calcul de coûts à adopter.**"
      },
      {
        "type": "p",
        "text": "Notions attendues dans le développement :"
      },
      {
        "type": "p",
        "text": "– rappel du contexte ;"
      },
      {
        "type": "p",
        "text": "– justification des divergences de résultats entre les deux modèles (charges directes et indirectes) ;"
      },
      {
        "type": "p",
        "text": "– méthode de calcul de coûts à retenir ;"
      },
      {
        "type": "p",
        "text": "– effets de subventionnement ;"
      },
      {
        "type": "p",
        "text": "– choix des inducteurs ;"
      },
      {
        "type": "p",
        "text": "– conclusion pour conseiller la dirigeante face à ses trois méthodes proposées."
      },
      {
        "type": "p",
        "text": "**Remarque***Rappel du contexte*"
      },
      {
        "type": "p",
        "text": "La société Dinoxsa est spécialisée dans la fabrication de pièces aéronautiques. La dirigeante de l’entreprise, madame Devos, se demande si la méthode de calcul de coûts actuellement utilisée pour la fabrication de connectiques pour avions est pertinente et s’il en existe une meilleure."
      },
      {
        "type": "p",
        "text": "**Remarque***Justification des divergences de résultats entre les deux modèles*"
      },
      {
        "type": "p",
        "text": "Dans une comptabilité classique, les charges directes sont affectées aux « objets de coûts » (les produits ou les services), alors que les charges indirectes sont affectées aux centres fonctionnels ; les coûts de ces centres subissent des répartitions en cascade (primaire puis secondaire). Ils sont ensuite imputés aux objets de coûts en fonction des apports de chaque centre principal à la réalisation de ces objets et ceci par utilisation d’unités d’oeuvre. Cette démarche comporte beaucoup d’arbitraire ; les différences dans les résultats trouvés aux questions 1 et 2 le vérifient. La différence entre les deux premières méthodes de calcul de coûts de 212,73 € provient des stocks, c’est-à-dire de la différence d’évaluation des matières premières au moyen de CMUP différents."
      },
      {
        "type": "p",
        "text": "Quant à la troisième méthode qui est une démarche ABC, elle débute par l’identification des activités. Les coûts de toutes les activités sont ensuite affectés directement aux objets de coûts. Toutes les activités sont « principales » et il n’y a pas de répartition secondaire. Un inducteur est défini pour chaque activité. Il exprime le lien de causalité entre l’activité et les objets de coûts."
      },
      {
        "type": "p",
        "text": "**Remarque***Méthode de calcul de coûts à retenir*"
      },
      {
        "type": "p",
        "text": "La méthode ABC est ainsi mieux adaptée au contrôle de gestion en raison d’une meilleure prise en compte, tant de la spécificité des processus de production que des caractéristiques des produits. Dans le cas de l’entreprise, la méthode ABC intègre, dans le calcul des coûts, l’incidence des différences dans les moyens de production (automatisés ou manuels), des exigences fortes de qualité (contrôle) et de l’organisation des flux de production (taille des séries)."
      },
      {
        "type": "p",
        "text": "Par ailleurs, dans la démarche ABC, les causes des coûts ne sont pas masquées par les répartitions en cascade, ce qui permet de réduire les coûts en agissant sur les causes. Le résultat négatif sur la pièce DICOPT2 a deux causes principales :"
      },
      {
        "type": "p",
        "text": "– le coût de contrôle très important (un contrôle par pièce) ;"
      },
      {
        "type": "p",
        "text": "– la fabrication en petites séries est génératrice de coûts élevés ; or ce choix est la conséquence de l’exigence d’un contrôle exhaustif."
      },
      {
        "type": "p",
        "text": "L’entreprise Dinoxsa devrait renégocier le contrat de fourniture de la pièce DICOPT2 en mettant en avant les coûts occasionnés par le contrôle exhaustif des pièces fabriquées. Une production en plus grandes séries, quitte à stocker les pièces avant contrôle, peut aussi être envisagée."
      },
      {
        "type": "p",
        "text": "**Remarque***Effets de subventionnement*"
      },
      {
        "type": "p",
        "text": "De plus, il y a sans doute des effets de subventionnement. Le modèle DICOPT2 était subventionné par le modèle DICOPT1. En effet, pour le modèle DICOPT1, le résultat unitaire a varié et est passé de – 12,38 € à 41,02 € avec la méthode des centres d’analyse puis à 60,89 € avec la méthode des coûts complets ABC. Pour le modèle DICOPT2, le résultat a fondu avec l’évolution des méthodes de calcul de coûts."
      },
      {
        "type": "p",
        "text": "Par exemple, par la méthode des centres d’analyse (première méthode), les 232 260 € de charges indirectes Usinage et Finition ont été réparties seulement en fonction des heures-machine. Par la méthode ABC, le même montant de charges indirectes a été réparti en six activités différentes avec quatre inducteurs différents. Prenons l’exemple du nombre de lots mis en fabrication. Pour un lot mis en fabrication, le montant des charges indirectes s’élève à 1 769,05 + 847,89 = 2 616,94 €."
      },
      {
        "type": "p",
        "text": "•Un lot mis en fabrication pour DICOPT1"
      },
      {
        "type": "p",
        "text": "→ Coût pour un produit = 2 616,94 € ÷ 200 = 13,08 €."
      },
      {
        "type": "p",
        "text": "•Un lot mis en fabrication pour DICOPT2"
      },
      {
        "type": "p",
        "text": "→ Coût pour un produit = 2 616,94 € ÷ 100 = 26,17 €."
      },
      {
        "type": "p",
        "text": "Cet exemple montre bien que par la méthode des centres d’analyse, DICOPT2 est bien subventionné par DICOPT1, c’est-à-dire que le produit DICOPT1 a absorbé, par la méthode des centres d’analyse, des charges indirectes qui devaient être absorbées par l’autre produit."
      },
      {
        "type": "p",
        "text": "Un autre exemple (toujours relatifs aux charges indirectes Usinage et Finition) pourrait être celui du nombre de pièces contrôlées. Une pièce contrôlée présente des charges indirectes s’élevant à 46,76 €."
      },
      {
        "type": "p",
        "text": "•Pour l’ensemble des produits contrôlés de DICOPT1, cela coûte 5 611,27 €."
      },
      {
        "type": "p",
        "text": "•Pour l’ensemble des produits contrôlés de DICOPT2, cela coûte 60 788,73€."
      },
      {
        "type": "p",
        "text": "Ce deuxième exemple vient corroborer la conclusion du premier."
      },
      {
        "type": "p",
        "text": "**Remarque***Choix d’inducteurs pertinents*"
      },
      {
        "type": "p",
        "text": "La distinction entre les lots fabriqués et expédiés est peu justifiée puisqu’il n’y a pas de stock de produits. Leur regroupement aurait permis une analyse transversale de l’ensemble de la gestion des lots, respectant les principes de l’analyse par activités (repérage des activités comme parties d’un processus transversal)."
      },
      {
        "type": "p",
        "text": "Si les activités de fabrication et d’expédition étaient regroupées, il ne serait cependant pas possible de déterminer le coût de production qui a été retenu comme inducteur de l’activité d’organisation générale."
      },
      {
        "type": "p",
        "text": "Le regroupement en un seul inducteur « nombre de lots » implique de choisir, pour l’activité d’organisation générale, un inducteur (tel que la « valeur ajoutée » qui ne se réfère pas à la production). Ceci ne devrait pas soulever d’objection de principe car l’inducteur « coût de production » est arbitraire et semble un héritage de l’analyse traditionnelle verticale par fonctions."
      },
      {
        "type": "p",
        "text": "Conclusion pour conseiller la dirigeante face aux trois méthodes proposées"
      },
      {
        "type": "p",
        "text": "En somme, la dirigeante de la société Dinoxsa pourra, avec la mise en place d’une méthode ABC, mieux tenir compte de l’aspect qualité lié aux nombreuses contraintes imposées par les normes du secteur aéronautique (certification EN 9100 et norme ISO 9001). De même, la fabrication par lots est mieux prise en considération par la méthode ABC."
      },
      {
        "type": "p",
        "text": "**4. Apprécier les limites de la méthode ABC dans le cadre de la société Dinoxsa.**"
      },
      {
        "type": "p",
        "text": "La méthode ABC semble apporter des réponses à certaines préoccupations actuelles du contrôle de gestion tant dans le management des coûts que dans celui de la performance. Elle contribue à réintroduire une certaine pertinence :"
      },
      {
        "type": "p",
        "text": "– en améliorant la qualité des coûts obtenus ;"
      },
      {
        "type": "p",
        "text": "– en permettant des calculs sur des temps différents que celui du temps comptable ;"
      },
      {
        "type": "p",
        "text": "– en permettant une meilleure adaptabilité aux processus."
      },
      {
        "type": "p",
        "text": "Pourtant, comme tout modèle de calcul de coûts, cette méthode a également quelques limites observables dans le cadre du contexte Dinoxsa."
      },
      {
        "type": "p",
        "text": "Comme tout modèle de calcul des coûts, la méthode ABC nécessite l’arbitrage entre la précision du modèle, qui induit une complexité qui peut devenir excessive, et une simplification, qui déforme les coûts."
      },
      {
        "type": "p",
        "text": "L’analyse transversale de l’organisation ne doit pas négliger la structure fonctionnelle de l’organisation, qui définit les responsabilités."
      },
      {
        "type": "p",
        "text": "Le contrôle qualité pourrait être davantage pris en compte dans la répartition des charges indirectes et permettre d’effectuer une réelle différence entre les deux modèles proposés."
      },
      {
        "type": "p",
        "text": "Une autre limite de cette méthode concerne le nombre d’activités identifiées : plus le nombre d’activités est élevé, plus le modèle est complexe et lourd à gérer. S’il est trop faible, on risque d’introduire une hétérogénéité dans le coût des activités."
      },
      {
        "type": "p",
        "text": "Par ailleurs, cette démarche requiert l’usage d’un système d’information adapté pour recueillir une multiplicité de données, ainsi que les ressources consommées par les activités."
      },
      {
        "type": "p",
        "text": "Enfin, la mise en place de la méthode suppose l’adhésion de l’ensemble du personnel. Elle peut être ressentie comme la remise en cause des compétences et du pouvoir de chacun."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Savonnerie Lys**"
      },
      {
        "type": "p",
        "text": "**1. Marge sur coût variable et résultat**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Montant**",
          "**Par unité**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires (40 000 × 8)**",
            "320 000,00 €",
            "8,00 €"
          ],
          [
            "**Coût variable (40 000 × 5)**",
            "200 000,00 €",
            "5,00 €"
          ],
          [
            "**Marge sur coût variable**",
            "**120 000,00 €**",
            "**3,00 €**"
          ],
          [
            "**Charges fixes**",
            "90 000,00 €",
            "—"
          ],
          [
            "**Résultat**",
            "**30 000,00 €**",
            "**—**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Taux de marge sur coût variable = 120 000 / 320 000 = 37,50 %."
      },
      {
        "type": "p",
        "text": "**2. Seuil de rentabilité**"
      },
      {
        "type": "p",
        "text": "SR en valeur = charges fixes / taux de MCV = 90 000 / 0,375 = 240 000 €. SR en quantité = charges fixes / MCV unitaire = 90 000 / 3 = 30 000 unités."
      },
      {
        "type": "p",
        "text": "**3. Point mort**"
      },
      {
        "type": "p",
        "text": "Activité régulière : point mort = (SR / CA) × 12 = (240 000 / 320 000) × 12 = 9 mois. Le seuil est atteint à la fin du 9ᵉ mois, soit fin septembre."
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Mobilier Trévi**"
      },
      {
        "type": "p",
        "text": "**1. Compte de résultat différentiel par produit**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**P1**",
          "**P2**",
          "**P3**",
          "**Total**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "300 000 €",
            "200 000 €",
            "150 000 €",
            "650 000 €"
          ],
          [
            "**Coût variable**",
            "180 000 €",
            "150 000 €",
            "130 000 €",
            "460 000 €"
          ],
          [
            "**Marge sur coût variable**",
            "**120 000 €**",
            "**50 000 €**",
            "**20 000 €**",
            "**190 000 €**"
          ],
          [
            "**Taux de marge sur coût variable**",
            "40,00 %",
            "25,00 %",
            "13,33 %",
            "29,23 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Marge sur coûts spécifiques**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**P1**",
          "**P2**",
          "**P3**",
          "**Total**"
        ],
        "rows": [
          [
            "**Marge sur coût variable**",
            "120 000 €",
            "50 000 €",
            "20 000 €",
            "190 000 €"
          ],
          [
            "**Charges fixes spécifiques**",
            "40 000 €",
            "30 000 €",
            "35 000 €",
            "105 000 €"
          ],
          [
            "**Marge sur coûts spécifiques**",
            "**80 000 €**",
            "**20 000 €**",
            "**− 15 000 €**",
            "**85 000 €**"
          ],
          [
            "**Charges fixes communes**",
            "",
            "",
            "",
            "60 000 €"
          ],
          [
            "**Résultat**",
            "",
            "",
            "",
            "**25 000 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Faut-il abandonner P3 ?**"
      },
      {
        "type": "p",
        "text": "P3 dégage une marge sur coût variable positive (+20 000 €) mais une marge sur coûts spécifiques négative (− 15 000 €). Deux cas. Si les charges fixes spécifiques de P3 (35 000 €) sont réellement supprimables en cas d’arrêt, l’abandonner améliore le résultat de 15 000 € : il passerait de 25 000 € à 40 000 € (80 000 + 20 000 − 60 000). Si, au contraire, ces charges fixes ne sont pas évitables à court terme, P3 doit être maintenu tant que sa marge sur coût variable (20 000 €) contribue à couvrir les charges communes ; son abandon ferait alors chuter le résultat de 20 000 €. La décision dépend donc entièrement du caractère supprimable des charges fixes spécifiques."
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Cartonnex**"
      },
      {
        "type": "p",
        "text": "**1. Compte de résultat différentiel**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Montant**",
          "**Par unité**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires (60 000 × 12)**",
            "720 000,00 €",
            "12,00 €"
          ],
          [
            "**Coût variable (60 000 × 7)**",
            "420 000,00 €",
            "7,00 €"
          ],
          [
            "**Marge sur coût variable**",
            "**300 000,00 €**",
            "**5,00 €**"
          ],
          [
            "**Charges fixes**",
            "200 000,00 €",
            "—"
          ],
          [
            "**Résultat**",
            "**100 000,00 €**",
            "**—**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Seuil de rentabilité et sécurité**"
      },
      {
        "type": "p",
        "text": "Taux de MCV = 300 000 / 720 000 = 41,67 %. SR en quantité = 200 000 / 5 = 40 000 unités ; SR en valeur = 40 000 × 12 = 480 000 €. Marge de sécurité = 720 000 − 480 000 = 240 000 €. Indice de sécurité = 240 000 / 720 000 = 33,33 %. Point mort = (40 000 / 60 000) × 12 = 8 mois (fin août)."
      },
      {
        "type": "p",
        "text": "**3. Levier opérationnel**"
      },
      {
        "type": "p",
        "text": "Levier opérationnel = MCV / résultat = 300 000 / 100 000 = 3. Une hausse de 10 % du chiffre d’affaires (à structure de coûts inchangée) entraîne une hausse du résultat de 3 × 10 % = 30 % : le résultat passerait de 100 000 € à 130 000 €. Ce levier élevé traduit une sensibilité forte du résultat aux variations d’activité."
      },
      {
        "type": "p",
        "text": "**4. Commande supplémentaire de 10 000 unités à 9 €**"
      },
      {
        "type": "p",
        "text": "Le prix proposé (9 €) est inférieur au prix habituel (12 €) mais supérieur au coût variable unitaire (7 €). La capacité étant disponible et les charges fixes inchangées, seule compte la marge sur coût variable additionnelle : (9 − 7) × 10 000 = 20 000 €. La commande fait donc passer le résultat de 100 000 € à 120 000 € : il faut l’accepter, sous réserve qu’elle ne dégrade pas le prix des ventes habituelles ni l’image du produit."
      },
      {
        "type": "p",
        "text": "**5. Projet d’investissement**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Situation actuelle**",
          "**Après investissement**"
        ],
        "rows": [
          [
            "**Coût variable unitaire**",
            "7,00 €",
            "5,50 €"
          ],
          [
            "**Marge sur coût variable unitaire**",
            "5,00 €",
            "6,50 €"
          ],
          [
            "**Marge sur coût variable (60 000 u)**",
            "300 000,00 €",
            "390 000,00 €"
          ],
          [
            "**Charges fixes**",
            "200 000,00 €",
            "280 000,00 €"
          ],
          [
            "**Résultat**",
            "**100 000,00 €**",
            "**110 000,00 €**"
          ],
          [
            "**Seuil de rentabilité (quantité)**",
            "40 000 u",
            "43 077 u"
          ],
          [
            "**Levier opérationnel**",
            "3,00",
            "3,55"
          ]
        ]
      },
      {
        "type": "p",
        "text": "À 60 000 unités, l’investissement améliore le résultat (110 000 € contre 100 000 €). Mais il substitue des charges fixes à des charges variables : le seuil de rentabilité s’élève (43 077 u contre 40 000 u) et le levier opérationnel augmente (3,55 contre 3,00). La structure devient plus rentable en cas d’activité soutenue, mais plus risquée en cas de baisse des volumes. La décision dépend donc des perspectives de ventes et de leur stabilité."
      }
    ]
  }
];
