// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A1",
    "title": "Pilote",
    "statement": [
      {
        "type": "p",
        "text": "Dans l’entreprise Pilote, un centre de profit est chargé de la production et de la vente de trois produits A, B et C. Les principales informations du budget concernant les ventes sont regroupées ci-après :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente**",
          "**Quantité**",
          "**Coût de production**",
          "**Autres charges**"
        ],
        "rows": [
          [
            "**Produit A**",
            "34",
            "8 540",
            "25",
            "3,0"
          ],
          [
            "**Produit B**",
            "32",
            "9 200",
            "28",
            "2,5"
          ],
          [
            "**Produit C**",
            "45",
            "5 500",
            "35",
            "5,0"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La comptabilité analytique fournit pour la même période les informations suivantes :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente**",
          "**Quantité**",
          "**Coût de production**",
          "**Autres charges**"
        ],
        "rows": [
          [
            "**Produit A**",
            "35",
            "8 600",
            "215 300",
            "25 000"
          ],
          [
            "**Produit B**",
            "30",
            "9 300",
            "265 200",
            "25 200"
          ],
          [
            "**Produit C**",
            "47",
            "5 600",
            "193 700",
            "27 200"
          ]
        ]
      },
      {
        "type": "p",
        "text": "1. Mettre en oeuvre une procédure de contrôle budgétaire."
      },
      {
        "type": "p",
        "text": "2. Rédiger une note de synthèse sur les écarts calculés."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**1. Mettre en oeuvre une procédure de contrôle budgétaire.**"
      },
      {
        "type": "p",
        "text": "Compte tenu du contexte fourni et des données de l’exercice, la procédure ne peut aller au-delà de la mise en évidence des écarts sur pôles de responsabilités. Il sera possible d’analyser l’écart de marge sur coûts préétablis mais pas l’écart sur coût de production puisqu’il manque les données standards de coût de chaque produit."
      },
      {
        "type": "p",
        "text": "CA : chiffre d’affaires"
      },
      {
        "type": "p",
        "text": "AC : autres charges"
      },
      {
        "type": "p",
        "text": "CP : coût de production"
      },
      {
        "type": "p",
        "text": "Construction du budget"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Mise en évidence du chiffre d’affaires**"
          ],
          [
            "**Quantité**",
            "8 540",
            "9 200",
            "5 500",
            "23 240"
          ],
          [
            "**Prix unitaire**",
            "34",
            "32",
            "45",
            ""
          ],
          [
            "**CA budgété**",
            "290 360",
            "294 400",
            "247 500",
            "832 260"
          ],
          [
            "**Mise en évidence du coût de production**"
          ],
          [
            "**Volume**",
            "8 540",
            "9 200",
            "5 500",
            "23 240"
          ],
          [
            "**Coût standard**",
            "25",
            "28",
            "35",
            ""
          ],
          [
            "**CP budgété**",
            "213 500",
            "257 600",
            "192 500",
            "663 600"
          ],
          [
            "**Mise en évidence des autres charges**"
          ],
          [
            "**Volume**",
            "8 540",
            "9 200",
            "5 500",
            "23 240"
          ],
          [
            "**Marge unitaire**",
            "3",
            "2,5",
            "5",
            ""
          ],
          [
            "**AC budgétées**",
            "25 620",
            "23 000",
            "27 500",
            "76 120"
          ],
          [
            "**Résultat budgété**",
            "+ 51 240",
            "+ 13 800",
            "+ 27 500",
            "+ 92 540"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Construction du résultat réel"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Quantité**",
            "8 600",
            "9 300",
            "5 600",
            "23 500"
          ],
          [
            "**Prix unitaire**",
            "35",
            "30",
            "47",
            ""
          ],
          [
            "**CA réel**",
            "301 000",
            "279 000",
            "263 200",
            "843 200"
          ],
          [
            "**CP réel**",
            "215 300",
            "265 200",
            "193 700",
            "674 200"
          ],
          [
            "**AC réelles**",
            "25 000",
            "25 200",
            "27 200",
            "77 400"
          ],
          [
            "**Résultat réel**",
            "+ 60 700",
            "– 11 400",
            "+ 42 300",
            "+ 91 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Mise en évidence de l’écart sur résultat"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Résultat réel**",
            "+ 60 700",
            "– 11 400",
            "+ 42 300",
            "+ 91 600"
          ],
          [
            "**Résultat budgété**",
            "+ 51 240",
            "+ 13 800",
            "+ 27 500",
            "+ 92 540"
          ],
          [
            "**Écart sur résultat**",
            "+ 9 460",
            "– 25 200",
            "+ 14 800",
            "– 940"
          ],
          [
            "**Sens de l’écart**",
            "Favorable",
            "Défavorable",
            "Favorable",
            "Défavorable"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour aller plus loin dans la décomposition de l’écart, il est nécessaire de calculer le coût de production standard de la production réelle, soit le coût de production préetabli."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Volume réel**",
            "8 600",
            "9 300",
            "5 600",
            "23 500"
          ],
          [
            "**Cout standard**",
            "25",
            "28",
            "35",
            ""
          ],
          [
            "**CP préétabli**",
            "215 000",
            "260 400",
            "196 000",
            "671 400"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La décomposition par pôle de responsabilités est présenté dans les tableaux suivants."
      },
      {
        "type": "p",
        "text": "**Écart de marge sur coût de production**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**CA réel**",
            "301 000",
            "279 000",
            "263 200",
            "843 200"
          ],
          [
            "**CP préétabli**",
            "215 000",
            "260 400",
            "196 000",
            "671 400"
          ],
          [
            "**Marge dite réelle**",
            "+ 86 000",
            "+ 18 600",
            "+ 67 200",
            "+ 171 800"
          ],
          [
            "**CA budgété**",
            "290 360",
            "294 400",
            "247 500",
            "832 260"
          ],
          [
            "**CP budgété**",
            "213 500",
            "257 600",
            "192 500",
            "663 600"
          ],
          [
            "**Marge budgétée**",
            "+ 76 860",
            "+ 36 800",
            "+ 55 000",
            "+ 168 660"
          ],
          [
            "**Écart de marge sur coût**",
            "+ 9 140",
            "– 18 200",
            "+ 12 200",
            "+ 3 140"
          ],
          [
            "**Sens de l’écart**",
            "favorable",
            "défavorable",
            "favorable",
            "favorable"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Écart sur coût de production"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**CP réel**",
            "215 300",
            "265 200",
            "193 700",
            "674 200"
          ],
          [
            "**CP préétabli**",
            "215 000",
            "260 400",
            "196 000",
            "671 400"
          ],
          [
            "**Écart sur coût de production**",
            "+ 300",
            "+ 4 800",
            "– 2 300",
            "+ 2 800"
          ],
          [
            "**Sens de l’écart**",
            "défavorable",
            "défavorable",
            "favorable",
            "défavorable"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Écart sur autres charges"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**AC réelles**",
            "25 000",
            "25 200",
            "27 200",
            "77 400"
          ],
          [
            "**AC budgétées**",
            "25 620",
            "23 000",
            "27 500",
            "76 120"
          ],
          [
            "**Écart sur autres charges**",
            "– 620",
            "+ 2 200",
            "– 300",
            "+ 1 280"
          ],
          [
            "**Sens de l’écart**",
            "favorable",
            "défavorable",
            "favorable",
            "défavorable"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La vérification de la décomposition peut être réalisée (ici uniquement sur l’écart global) :"
      },
      {
        "type": "p",
        "text": "D : défavorable"
      },
      {
        "type": "p",
        "text": "F : favorable"
      },
      {
        "type": "table",
        "headers": [
          "**E/Résultat**",
          "**=**",
          "**E/Marge**",
          "**–**",
          "**E/Coût de prod.**",
          "**–**",
          "**E/Autres charges**"
        ],
        "rows": [
          [
            "**(– 940 D)**",
            "=",
            "(+ 3 140 F)",
            "–",
            "(+ 2 800 D)",
            "–",
            "(+ 1 280 D)"
          ],
          [
            "**(– 1 % du résultat prévu)**",
            "",
            "+ 1,86 % de la marge prévue",
            "",
            "+ 0,4 % du coût de production préétabli",
            "",
            "+ 1,68 % des charges prévues"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Analyse de l’écart sur marge de coût de production"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Quantité réelle**",
            "8 600",
            "9 300",
            "5 600",
            "23 500"
          ],
          [
            "**Marge unitaire dite réelle**",
            "35 – 25 = 10",
            "30 – 28 = 2",
            "47 – 35 = 12",
            "Marge moyenne m r = 7,3106 €"
          ],
          [
            "**Marge dite directe**",
            "+ 86 000",
            "+ 18 600",
            "+ 67 200",
            "+ 171 800"
          ],
          [
            "**Quantité budgétée**",
            "8 540",
            "9 200",
            "5 500",
            "23 240"
          ],
          [
            "**Marge unitaire budgétée**",
            "34 – 25 = 9",
            "32 – 28 = 4",
            "45 – 35 = 10",
            "Marge moyenne M b = 7,2573 €"
          ],
          [
            "**Marge budgétée**",
            "+ 76 860",
            "+ 36 800",
            "+ 55 000",
            "+ 168 660"
          ],
          [
            "**Quantité réelle**",
            "8 600",
            "9 300",
            "5 600",
            "23 500"
          ],
          [
            "**Marge unitaire budgétée**",
            "34 – 25 = 9",
            "32 – 28 = 4",
            "45 – 35 = 10",
            "Marge moyenneMp = 7,2596 €"
          ],
          [
            "**Marge préétablie**",
            "+ 77 400",
            "+ 37 200",
            "+ 56 000",
            "+ 170 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Analyse de l’écart de marge en deux sous-écarts : prix et volume, avec les définitions suivantes :"
      },
      {
        "type": "p",
        "text": "•Écart sur prix = (Marge dite réelle unitaire – Marge budgétée unitaire) × Volume réel"
      },
      {
        "type": "p",
        "text": "•Écart sur quantité = (Volume réel – Volume budgété) × Marge budgétée unitaire"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Écart de marge sur coût**",
            "+ 9 140 Fav.",
            "– 18 200 Défav.",
            "+ 12 200 Fav.",
            "+ 3 140 Fav."
          ],
          [
            "**Écart sur prix(A) – (B)**",
            "+ 8 600 Fav.(10 € – 9 €) × 8 600",
            "– 18 600 Défav.(2 € – 4 €) 9 300",
            "+ 11 200 Fav.(12 € – 10 €) – 5 600",
            "+ 1 200 Fav."
          ],
          [
            "**Écart sur quantité(B) – (C)**",
            "+ 540 Fav.(8 600 – 8 540) × 9",
            "+ 400 Fav.(9 300 – 9 200) × 4",
            "+ 1 000 Fav.(5 600 – 5 500) × 10",
            "+ 1 940 Fav."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Analyse de l’écart de marge en trois sous-écarts : on considère que les produits sont homogènes et très nombreux, on se contente d’analyser la marge à son niveau global."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Marge réelle**",
          "**Marge préétablie**",
          "**Borne à calculer**",
          "**Marge budgétée**"
        ],
        "rows": [
          [
            "**Volume**",
            "23 500",
            "23 500",
            "23 500",
            "23 240"
          ],
          [
            "**Marge moyenne**",
            "7,3106 €",
            "7,2596 €",
            "7,2573 €",
            "7,2573 €"
          ],
          [
            "**Marge globale**",
            "171 800",
            "170 600",
            "170 547",
            "168 660"
          ],
          [
            "",
            "",
            "Écart sur prix+ 1 200 Fav.",
            "Écart de mix+ 429 Fav.",
            "Écart sur volume+ 9 311 Fav.",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Rédiger une note de synthèse sur les écarts calculés.**"
      },
      {
        "type": "p",
        "text": "Le résultat réel est très légèrement plus faible que prévu (écart défavorable de 940 €, soit 1 % du résultat budgété). Cet écart s’explique par des performances antagonistes des services responsables : les services commerciaux dégagent un écart favorable, quoique peu important, de 3 140 € soit 1,86 % de la marge budgétée."
      },
      {
        "type": "p",
        "text": "En revanche, les services productifs présentent un écart défavorable de 2 800 €. Il est à noter que son impact est très faible (0,4 % du coût de production autorisé). Il traduit un respect des objectifs des productifs. Les services fonctionnels (autres charges) participent aussi à la non-atteinte des objectifs en réalisant un écart défavorable de 1 280 € soit des coûts supérieurs à 1,68 % des charges prévues."
      },
      {
        "type": "p",
        "text": "De façon globale, et à ce stade, cette entreprise respecte les objectifs formulés par le budget : les écarts sont faibles et leur impact d’ensemble peu important."
      },
      {
        "type": "p",
        "text": "Si l’analyse se poursuit par famille de produit (gamme), on repère la mauvaise performance du produit B qui sur tous les plans présentent des écarts négatifs importants : écart de résultat de – 25 200 (– 182 % du résultat attendu), écart sur marge défavorable de 18 200 (– 49 % de la marge souhaitée), écart sur coût de production défavorable de 4 800 (+ 1,84 % du coût de production prévu) et un écart sur autres charges défavorable de 2 200 (+ 9,56 % de coûts budgétés)"
      },
      {
        "type": "p",
        "text": "Il s’agit, à ce niveau d’analyse, de déterminer pourquoi les services concernés ont pu ou non respecter leurs budgets. Les écarts ne fournissent pas d’explications, ils servent de « clignotants » pour aider à diriger les recherches et mettre en oeuvre des actions correctives."
      },
      {
        "type": "p",
        "text": "**3. Mise en pratique autonome : La Movida**"
      },
      {
        "type": "p",
        "text": "**Rédiger une note de synthèse sur les écarts calculés.**"
      },
      {
        "type": "p",
        "text": "L’écart total sur chiffre d’affaires est favorable de 19 000 €, soit environ 14 % du chiffre d’affaires de N–2, ce qui est très positif et ce malgré l’augmentation des tarifs (on est passé d’un ticket moyen de 7,80 € en N–2 à 8,50 € en N–1). Cette évolution s’explique globalement en raison de deux effets contradictoires :"
      },
      {
        "type": "p",
        "text": "– un écart sur prix favorable de + 40 000 €, compte tenu de la hausse des tarifs moyens ;"
      },
      {
        "type": "p",
        "text": "– un écart sur volume défavorable de – 21 000 €, alors même que la fréquentation du cinéma augmente de 1 000 entrées."
      },
      {
        "type": "p",
        "text": "Cependant, une analyse par segment de clientèle permet de constater que l’écart sur chiffre d’affaires est favorable pour les niveaux de tarifs « plein tarif » (+ 34 000) et « périodes creuses » (+ 28 800) alors qu’il est fortement défavorable pour le « tarif réduit » (– 43 800)."
      },
      {
        "type": "p",
        "text": "Il est possible d’expliquer le glissement de la fréquentation du tarif « réduit » (– 6 600 billets vendus et écart de volume de – 46 200) au profit de celui du tarif « périodes creuses » (+ 4 800 billets vendus) sans pour autant retrouver le niveau de fréquentation de N–2 (les tarifs « périodes creuses » et « réduit » représentent 7 200 billets contre 9 000 billets vendus en N–2 sur la base du seul tarif « réduit »)."
      },
      {
        "type": "p",
        "text": "Cependant on constate une augmentation de la fréquentation globale de N–1 par rapport à N–2 de 1 000 billets. Cela est dû au « plein tarif » dont la vente est en hausse de 2 800 billets alors même que chaque billet est plus cher d’un euro. Ce nombre de fréquentation compense largement les pertes de ventes sur les deux autres tarifs."
      },
      {
        "type": "p",
        "text": "L’écart sur volume mesure l’incidence d’une variation des quantités globales sur le chiffre d’affaires. Il est globalement défavorable car calculé sur les deux tarifs historiques alors même que la fréquentation globale du cinéma a progressé."
      },
      {
        "type": "p",
        "text": "La nouvelle grille tarifaire permet de faire progresser le chiffre d’affaires de 19 000 €, soit une hausse de 14 %, mais cette hausse n’est pas due à la mise en place du nouveau tarif mais à une hausse de la fréquentation du « plein tarif » alors même que ce tarif augmente de 11 %. L’explication doit être recherchée dans la qualité de la programmation plus que dans une attitude volontariste de la direction de pratiquer une tarification dynamique."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex2",
    "label": "Cas",
    "title": "contrôle de production",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**1. Procéder à l’analyse des écarts des différents éléments de coût utiles pour le pilotage du centre.**"
      },
      {
        "type": "p",
        "text": "(Voir les tableaux.)"
      },
      {
        "type": "p",
        "text": "Fiche de coût préétabli"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**CU**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Matières premièresMain-d’œuvre directeCharges indirectes**",
            "0,80,40,4",
            "525615,625",
            "41,622,46,25"
          ],
          [
            "**Coût de la transformation d’un kilo de PF**",
            "70,25"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Tableau comparatif"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Réel**",
          "**Préétabli**",
          "**Écart Total**"
        ],
        "rows": [
          [
            "",
            "Qté",
            "CU",
            "Montant",
            "Qté",
            "CU",
            "Montant"
          ],
          [
            "**Matières premièresMain-d’œuvreCharges indirectes**",
            "3 0001 4001 400",
            "535716,07",
            "159 00079 80022 500",
            "2 720(1)1 360(2)1 360(3)",
            "525615,625",
            "141 44076 16021 250",
            "+ 17 560 €+ 3 640 €+ 1 250 €",
            "Défav.Défav.Défav."
          ],
          [
            "",
            "",
            "",
            "261 300",
            "",
            "",
            "238 850",
            "+ 22 450 €",
            "Défav."
          ],
          [
            "**(1) 3 400 pdts × 0,8 kg de MP ; (2) 3 400 pdts × 0,4 HMOD ; (3) 3 400 pdts × 0,04 UO.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Tous les écarts sont défavorables."
      },
      {
        "type": "p",
        "text": "Analyse de l’écart sur matières premières et sur centre d’analyse"
      },
      {
        "type": "p",
        "text": "a. Matières premières"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments budgétés**",
          "**Éléments réels**"
        ],
        "rows": [
          [
            "**Production normale = 4 000 unitésRendement prévu : 0,8 kg/unitéCoût d’un kilo : 52 €**",
            "Production réelle : 3 400 unitésQuantité consommée : 3 000 kgCoût réel total : 159 000 €,d’où un coût unitaire réel de 53 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût réel : 159 000 €"
      },
      {
        "type": "p",
        "text": "Coût préétabli (à calculer) :(3 400 unités × 0,8 kg/unités) × 52 €"
      },
      {
        "type": "p",
        "text": "2 720 kg × 52 € = 141 440"
      },
      {
        "type": "p",
        "text": "Écart total :159 000 – 141 440 = + 17 560 Défav."
      },
      {
        "type": "p",
        "text": "qui se décompose :"
      },
      {
        "type": "p",
        "text": "•écart sur coût :(cR – cS) Qréelle = (53 € – 52 €) 3 000 = + 3 000 défav."
      },
      {
        "type": "p",
        "text": "•écart sur quantité :(QR – QP) cS = (3 000 – 2 720) 52 = + 14 560 défav."
      },
      {
        "type": "p",
        "text": "b. Centre d’analyse de l’atelier 2"
      },
      {
        "type": "p",
        "text": "Éléments prévus : AN = 1 600 ; PN = 4 000 unités ; Rendement : 2,5 pdts/heure"
      },
      {
        "type": "p",
        "text": "Cu0 standard : 15,625 dont vs = 10,625"
      },
      {
        "type": "p",
        "text": "c. Charges fixes prévues globales : 8 000"
      },
      {
        "type": "p",
        "text": "•Éléments réels (activité réelle : 1 400) :22 500"
      },
      {
        "type": "p",
        "text": "•Budget flexible pour l’activité réelle :22 875"
      },
      {
        "type": "p",
        "text": "(1 400 h × 10,625 €) + 8 000"
      },
      {
        "type": "p",
        "text": "•Budget standard pour l’activité réelle :21 875"
      },
      {
        "type": "p",
        "text": "(1 400 h × 15,625 €)"
      },
      {
        "type": "p",
        "text": "•Budget standard pour l’activité préétablie : 21 250"
      },
      {
        "type": "p",
        "text": "(Production réelle/Rendement prévu) × CUOS"
      },
      {
        "type": "p",
        "text": "3 400 unités/2,5 pdts/h = 1 360 h × 15,625 €"
      },
      {
        "type": "p",
        "text": "Écart total + 1 250 Défav."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Éléments réels**",
          "**Budget flexible pour activité réelle**",
          "**Budget standard pour activité réelle**",
          "**Budget standard pour activité préétablie**"
        ],
        "rows": [
          [
            "**Activité (h)**",
            "1 400",
            "1 400",
            "1 400",
            "1 360"
          ],
          [
            "**Modalités de calculs**",
            "donnée",
            "(1 400 h ×10,625 €) + 8 000",
            "(1 400 h ×15,625 €)",
            "1 360 h × 15,625 €"
          ],
          [
            "**Montant**",
            "22 500",
            "22 875",
            "21 875",
            "21 250"
          ],
          [
            "",
            "",
            "Écart sur budget375 Fav.",
            "Écart sur activité+ 1 000 Défav.",
            "Écart sur rendement+ 625 Défav.",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Rédiger une note de synthèse portant sur les écarts calculés.**"
      },
      {
        "type": "p",
        "text": "Ce centre de production présente un écart d’exploitation défavorable de 1 250 € soit 5,88 % du coût de production autorisé. Ce niveau de prestation est très dégradé pour un centre d’usinage qui doit respecter au mieux des standards techniques pour réaliser sa production. L’analyse approfondie des causes de cette prestation montre que :"
      },
      {
        "type": "p",
        "text": "•Le centre a respecté son enveloppe budgétaire (écart sur budget de 375 € fav.). ;"
      },
      {
        "type": "p",
        "text": "•Son niveau d’activité est inférieur à l’activité normale (écart d’activité assimilable à un coût de chômage de 1 000 défav.). La responsabilité de cet écart est rarement le fait du responsable opérationnel car il n’est pas décisionnaire en termes de définition de l’activité normale de son centre (ici, 1 600 heures) ni responsable du niveau d’activité sur son centre qui dépend souvent du niveau d’écoulement de produits qui n’est pas de son ressort."
      },
      {
        "type": "p",
        "text": "•Sa productivité par produit est inférieure à ce qui est attendu : pour une production de 3 400 kg, l’activité aurait dû s’établir à 1 360 h au lieu des 1 400 h consommées, en conséquence l’écart est négatif de 625 défav. Cet écart traduit la productivité du centre et relève de la responsabilité du centre. Il s’agit d’en connaître les causes et de les analyser."
      },
      {
        "type": "p",
        "text": "En conclusion, la cause principale de l’écart sur ce centre est à rechercher du côté du coût de chômage qui ne relève pas de sa responsabilité ; de fait, une analyse approfondie montre que le centre a plutôt correctement maîtrisé les éléments de sa performance."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "Cas1",
    "title": "Contrôle prod",
    "statement": [
      {
        "type": "p",
        "text": "Dans un centre de coûts, les éléments constitutifs du coût standard concernant la fabri-"
      },
      {
        "type": "p",
        "text": "cation de 4 000 unités de produits finis PF dans l’atelier 2 sont les suivants :"
      },
      {
        "type": "p",
        "text": "• MP 2 (matières premières) : 3 200 kg à 52,00 €/kg"
      },
      {
        "type": "p",
        "text": "• Main-d’oeuvre directe : 1 600 h à 56,00 €/h"
      },
      {
        "type": "p",
        "text": "• Charges indirectes totales : 25 000 € (dont 8 000 € de charges de structure)"
      },
      {
        "type": "p",
        "text": "En fait, les informations réelles, concernant la fabrication de 3 400 unités de produits finis PF dans l’atelier 2, sont les suivantes :"
      },
      {
        "type": "p",
        "text": "• MP 2 : 3 000 kg à 53,00 €/kg"
      },
      {
        "type": "p",
        "text": "• Main-d’oeuvre directe : 1 400 h à 57,00 €/h"
      },
      {
        "type": "p",
        "text": "• Charges indirectes totales : 22 500 €"
      },
      {
        "type": "p",
        "text": "L’unité d’oeuvre de l’atelier 2 est l’heure de main-d’oeuvre directe."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Procéder à l’analyse des écarts des différents éléments de coût utiles pour le pilotage du centre."
      },
      {
        "type": "p",
        "text": "2. Rédiger une note de synthèse portant sur les écarts calculés."
      }
    ],
    "correction": []
  },
  {
    "id": "ex4",
    "label": "Cas",
    "title": "société Études et Conseil",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**1. Mettre en oeuvre la décomposition proposée pour la société Études et Conseil, et celle envisagée par le responsable du pôle « Conduites d’opérations ».**"
      },
      {
        "type": "p",
        "text": "Calcul de l’écart sur résultat"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Éléments réels**",
          "**Éléments prévus**",
          "**Écarts totaux élémentaires**",
          "**Sens des écarts**"
        ],
        "rows": [
          [
            "",
            "Études",
            "Conduite",
            "Dossiers",
            "Total",
            "Études",
            "Conduite",
            "Dossiers",
            "Total"
          ],
          [
            "**Nbre de services**",
            "100",
            "280",
            "150",
            "530",
            "80",
            "300",
            "160",
            "540",
            "",
            ""
          ],
          [
            "**Prix de vente moyen**",
            "7 165",
            "14 483",
            "13 797",
            "",
            "7 250",
            "14 400",
            "13 700",
            ""
          ],
          [
            "**Chiffre d’affaires**",
            "716 510",
            "4 055 140",
            "2 069 500",
            "6 841 150",
            "580 000",
            "4 320 000",
            "2 192 000",
            "7 092 000",
            "– 250 850",
            "Défav."
          ],
          [
            "**Personnel**",
            "384 160",
            "1 152 510",
            "938 320",
            "2 474 990",
            "340 200",
            "1 220 200",
            "974 160",
            "2 534 560",
            "– 59 570",
            "Fav."
          ],
          [
            "**Autres ch. directes**",
            "30 490",
            "258 070",
            "40 290",
            "328 850",
            "26 750",
            "361 280",
            "35 570",
            "423 600",
            "– 94 750",
            "Fav."
          ],
          [
            "**Marge/coûts directs**",
            "301 860",
            "2 644 560",
            "1 090 890",
            "4 037 310",
            "213 050",
            "2 738 520",
            "1 182 270",
            "4 133 840",
            "– 96 530",
            "Défav."
          ],
          [
            "**Ch. indirectes**",
            "",
            "",
            "",
            "2 617 480",
            "",
            "",
            "",
            "2 611 340",
            "6 140",
            "Défav."
          ],
          [
            "**Résultat**",
            "",
            "",
            "",
            "1 419 830",
            "",
            "",
            "",
            "1 522 500",
            "– 102 670",
            "Défav."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pertinence de l’analyse en marges dans le contexte de l’entreprise"
      },
      {
        "type": "p",
        "text": "Faire une décomposition en marges sur coût direct suppose une relation au moins volumique entre le nombre de dossiers traités et le montant des charges directes. Or, dans le contexte d’une entreprise de conseil, la grande majorité des charges directes sont des frais de personnel qui s’apparentent plus à des coûts de capacité qu’à des charges variables. Faire varier le nombre de dossiers n’entraîne pas de variations immédiates des charges de personnel. Suivre par les écarts, la performance de l’entreprise conduit donc à surveiller, d’une part le chiffre d’affaires et sa structure et, d’autre part, le rendement du personnel sous l’aspect du nombre de jours moyen par dossiers traités."
      },
      {
        "type": "p",
        "text": "Analyse de l’écart sur chiffre d’affaires"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Réel**",
          "**Prévus**",
          "**Écart**"
        ],
        "rows": [
          [
            "",
            "Qté",
            "Prix",
            "Total",
            "Qté",
            "Prix",
            "Total",
            "Total",
            "Prix",
            "Volume"
          ],
          [
            "**Études**",
            "100",
            "7 165",
            "716 510",
            "80",
            "7 250",
            "580 000",
            "136 510",
            "– 8 500",
            "145 000"
          ],
          [
            "**Dossiers**",
            "150",
            "13 797",
            "2 069 500",
            "160",
            "13 700",
            "2 192 000",
            "– 122 500",
            "14 550",
            "– 137 000"
          ],
          [
            "**Conduite**",
            "280",
            "14 483",
            "4 055 140",
            "300",
            "14 400",
            "4 320 000",
            "– 264 860",
            "23 240",
            "– 288 000"
          ],
          [
            "**Total**",
            "530",
            "12 908",
            "6 841 150",
            "540",
            "13 133",
            "7 092 000",
            "– 250 850",
            "29 290",
            "– 280 000"
          ],
          [
            "",
            "",
            "",
            "",
            "Valeur en % de l’écart :",
            "– 3,54 %",
            "0,41 %",
            "– 3,95 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Décomposition en trois sous-écarts"
      },
      {
        "type": "p",
        "text": "•Écart sur prix identique à la décomposition précédente, soit : 29 290"
      },
      {
        "type": "p",
        "text": "•Écart sur composition des ventes"
      },
      {
        "type": "p",
        "text": "(Prix moyen attendu – Prix moyen prévu) × Volume global réel"
      },
      {
        "type": "p",
        "text": "Chiffre d’affaires attendu :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Qté**",
          "**Prix**",
          "**Total**"
        ],
        "rows": [
          [
            "**ÉtudesTravauxConduite**",
            "100150280",
            "7 25013 70014 400",
            "725 0002 055 0004 032 000"
          ],
          [
            "530",
            "12 853",
            "6 812 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(12 853 – 13 133) × 530 = – 148 667 Défav."
      },
      {
        "type": "p",
        "text": "•Écart sur volume global"
      },
      {
        "type": "p",
        "text": "(Volume global réel – Volume global prévu) × Prix moyen prévu"
      },
      {
        "type": "p",
        "text": "(530 – 540) × 13 133 = – 131 333 Défav."
      },
      {
        "type": "p",
        "text": "Vérification :"
      },
      {
        "type": "p",
        "text": "E/Prix+E/CV+E/VG=E/Total"
      },
      {
        "type": "p",
        "text": "(+ 29 290)+(– 148 667)+(– 131 333)=(– 250 710)"
      },
      {
        "type": "p",
        "text": "Écart sur charges directes du centre « Conduite d’opérations »"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Réel**",
          "**Adapté (préétabli)**",
          "**Budget**"
        ],
        "rows": [
          [
            "**Éléments explicatifs**",
            "",
            "",
            ""
          ],
          [
            "**Production (nb d’opérations)**",
            "280",
            "280",
            "300"
          ],
          [
            "**Rendement (nb jours/opération)**",
            "25",
            "20",
            "20"
          ],
          [
            "**Activité (nb jours)**",
            "7 000",
            "5 600",
            "6 000"
          ],
          [
            "**Charges de personnel**",
            "1 152 510",
            "Le montant des charges directes est obtenu par proportionnalité.",
            "1 220 200"
          ],
          [
            "**Autres charges**",
            "258 070",
            "–",
            "361 280"
          ],
          [
            "**Total charges**",
            "1 410 580",
            "1 476 048",
            "1 581 480"
          ],
          [
            "**Coût par jour**",
            "201,5",
            "263,6",
            "263,6"
          ],
          [
            "**Coût par opération**",
            "5 037,8",
            "5 271,6",
            "5 271,6"
          ]
        ]
      },
      {
        "type": "p",
        "text": "•Écart total :"
      },
      {
        "type": "p",
        "text": "Réel–Budget"
      },
      {
        "type": "p",
        "text": "1 410 5801 581 480=– 170 900 Fav."
      },
      {
        "type": "p",
        "text": "•Écart sur volume d’activité :"
      },
      {
        "type": "p",
        "text": "Budget adapté–Budget=– 105 432 Fav."
      },
      {
        "type": "p",
        "text": "ou (Production réelle – Production budgétée) × Coût unitaire prévu par produit"
      },
      {
        "type": "p",
        "text": "(280 – 300) × 5 271,6 = – 105 432"
      },
      {
        "type": "p",
        "text": "•Écart sur production constatée :"
      },
      {
        "type": "p",
        "text": "Réel–Budget adapté=– 65 468 Fav."
      },
      {
        "type": "p",
        "text": "qui se décompose en :"
      },
      {
        "type": "p",
        "text": "Écart sur coût :"
      },
      {
        "type": "p",
        "text": "(Coût réel – Coût prévu)×Activité réelle"
      },
      {
        "type": "p",
        "text": "(201,5 – 263,6)×7 000=– 434 480 Fav."
      },
      {
        "type": "p",
        "text": "Écart sur quantités :"
      },
      {
        "type": "p",
        "text": "(Activité réelle – Activité préétablie)×Coût unitaire prévu"
      },
      {
        "type": "p",
        "text": "(7 000 – 5 600)×263,6=369 012 Défav."
      },
      {
        "type": "p",
        "text": "**2. Rédiger une note de synthèse portant sur les écarts calculés.**"
      },
      {
        "type": "p",
        "text": "La société Études et conseils réalise une mauvaise performance (écart sur résultat de – 102 670 défav.) soit – 6,74 % de résultat prévu."
      },
      {
        "type": "p",
        "text": "Cette performance dégradée est due principalement à une non-réalisation du chiffre d’affaires attendu (– 250 850 défav., soit – 3,5 %). Cette mauvaise prestation est plutôt le fait des pôles « dossiers » et « conduite » (respectivement écart défavorable de 122 500 et 264 860) alors que le pôle « étude » développe son chiffre (écart favorable de + 136 510)."
      },
      {
        "type": "p",
        "text": "Les charges directes sont bien maîtrisées (écart favorable de 59 570 pour le personnel et 94 750 pour les autres charges directes)."
      },
      {
        "type": "p",
        "text": "Enfin, l’écart très faible sur les charges indirectes (+ 6 140 défav.) doit être relativisé eu égard au montant total des charges de plus de 2 600 k€."
      },
      {
        "type": "p",
        "text": "C’est bien le non-respect du volume de ventes qui explique la mauvaise performance."
      },
      {
        "type": "p",
        "text": "La proposition du responsable « conduite d’opérations » introduit une notion de rendement entre chiffre d’affaires et charges de personnel et autres charges directes."
      },
      {
        "type": "p",
        "text": "Cette analyse peut avoir un impact positif car les charges de personnel sont sans doute des charges fixes de capacité, sans lien évident avec le niveau des ventes."
      },
      {
        "type": "p",
        "text": "Enfin, on peut penser que la « conduite d’opérations » met en oeuvre des prestations établies sur devis (nombre d’opérations) par le pôle « études ». Une mauvaise appréciation du temps à passer sur le projet se répercute automatiquement sur un écart de volume d’activité (nombre de jours) défavorable mais dont le responsable de conduite d’opérations n’a pas la maîtrise."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "Cas2",
    "title": "Études Conseil",
    "statement": [
      {
        "type": "p",
        "text": "La société Études et Conseil est une entreprise d’ingénierie dans le secteur des tra-"
      },
      {
        "type": "p",
        "text": "vaux publics. Elle agit à la demande des directions départementales de l’équipement et en sous-traitance pour de grands groupes de travaux publics. Son activité se partage en trois pôles : les études préalables (Études), les opérations de conduite de travaux (Conduite) et les montages de dossiers financiers (Finance)."
      },
      {
        "type": "p",
        "text": "Le suivi des coûts est organisé sur la base de la marge dégagée par chaque type d’activité calculée de la façon suivante :"
      },
      {
        "type": "p",
        "text": "Chiffre d’affaires – Charges de personnel – Autres charges directes= Marge sur coût direct"
      },
      {
        "type": "p",
        "text": "Les charges indirectes sont ensuite imputées globalement sur la marge totale ainsi dégagée."
      },
      {
        "type": "p",
        "text": "Pour l’année N, le budget prévoit :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Études préalables**",
          "**Conduite d’opérations**",
          "**Dossiers financiers**"
        ],
        "rows": [
          [
            "**Nombre de services vendus**",
            "80",
            "300",
            "160"
          ],
          [
            "**Prix de vente moyen**",
            "7 250 €",
            "14 400 €",
            "13 700 €"
          ],
          [
            "**Charges de personnel**",
            "340 200 €",
            "1 220 200 €",
            "974 160 €"
          ],
          [
            "**Autres charges directes**",
            "26 750 €",
            "361 280 €",
            "35 570 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges indirectes prévues s’élèvent à 2 611 340 €."
      },
      {
        "type": "p",
        "text": "Pour la même période, les frais réels ont été de :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Études préalables**",
          "**Conduite d’opérations**",
          "**Dossiers financiers**"
        ],
        "rows": [
          [
            "**Nombre de services vendus**",
            "100",
            "280",
            "150"
          ],
          [
            "**Chiffre d’affaires**",
            "716 510 €",
            "4 055 140 €",
            "2 069 500 €"
          ],
          [
            "**Charges de personnel**",
            "384 160 €",
            "1 152 510 €",
            "938 320 €"
          ],
          [
            "**Autres charges directes**",
            "30 490 €",
            "258 070 €",
            "40 290 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges indirectes réelles s’élèvent à 2 617 480 €."
      },
      {
        "type": "p",
        "text": "Une étude plus poussée des conditions d’exploitation fait apparaître, pour le centre"
      },
      {
        "type": "p",
        "text": "« Conduite d’opérations », un nombre moyen de jours facturés par opération égal à 25 jours en réel contre 20 jours en prévisionnel. En considérant que l’activité est mesurée par le nombre total de jours facturés et la production par le nombre de services vendus, le responsable du centre « Conduite d’opérations » envisage de mettre en oeuvre une analyse de l’écart du coût direct en distinguant charges de personnel et les autres charges."
      },
      {
        "type": "p",
        "text": "Nouveau dans le service, un stagiaire vous interpelle sur les raisons qui poussent le centre à ne pas utiliser une analyse en marge sur coûts préétablis et lui préférer une analyse en marge sur coûts directs."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Mettre en oeuvre la décomposition proposée pour la société Études et Conseil, et celle envisagée par le responsable du pôle « Conduites d’opérations »."
      },
      {
        "type": "p",
        "text": "2. Rédiger une note de synthèse portant sur les écarts calculés."
      }
    ],
    "correction": []
  },
  {
    "id": "ex6",
    "label": "Cas",
    "title": "Laboratoire de Biarritz",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "Le centre logistique du Laboratoire de Biarritz est chargé de distribuer les produits de l’entreprise auprès des pharmacies, en recourant à deux modes de distribution : les représentants externes et les grossistes répartiteurs."
      },
      {
        "type": "p",
        "text": "Les représentants sont rémunérés par une commission à hauteur de 10 % du chiffre d’affaires facturé aux officines."
      },
      {
        "type": "p",
        "text": "Les grossistes répartiteurs bénéficient, compte tenu du volume acheté, d’une remise de 20 % sur le chiffre d’affaires. Ce taux de commission et ce taux de remise peuvent cependant varier dans le cadre de négociations avec ces intermédiaires."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion souhaite mesurer la performance du centre de distribution."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Procéder au contrôle budgétaire des ventes en calculant l’écart de marge du centre de distribution par canal et globalement.*"
      },
      {
        "type": "p",
        "text": "*2. Rédiger une note de synthèse, d’une page environ, à l’attention du dirigeant qui analysera les écarts calculés afin d’expliciter les recommandations à mettre en œuvre en matière de performance commerciale.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Ventes prévues sur le premier semestre N**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**CA prévu facturé par les représentants externes**",
          "**CA prévu facturé aux grossistes**"
        ],
        "rows": [
          [
            "",
            "**Quantité (en unités)**",
            "**Prix unitaire net (avec commission représentants)**",
            "**Montant**",
            "**Quantité (en unités)**",
            "**Prix unitaire net (avec remise grossiste)**",
            "**Montant**"
          ],
          [
            "**Produits diététiques**",
            "12 000",
            "12 €",
            "144 000 €",
            "20 000",
            "10 €",
            "200 000 €"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coût de production prévu (correspondant au coût standard)**"
        ],
        "rows": [
          [
            "**Produits diététiques**",
            "7 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 2 — Ventes réalisées au cours du premier semestre N**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité (en unités)**",
          "**CA net facturé par les représentants externes**",
          "**Quantité (en unités)**",
          "**CA net facturé aux grossistes répartiteurs**"
        ],
        "rows": [
          [
            "**Produits diététiques**",
            "11 000",
            "148 500 €",
            "26 000",
            "221 000 €"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**1. Procéder au contrôle budgétaire des ventes en calculant l’écart de marge du centre de distribution par canal et globalement.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Ventes représentants**",
          "**Ventes grossistes**",
          "**Total**"
        ],
        "rows": [
          [
            "",
            "Qté",
            "PU (en €)",
            "Montant (en €)",
            "Qté",
            "PU (en €)",
            "Montant (en €)"
          ],
          [
            "**PRÉVU**",
            ""
          ],
          [
            "**CA net**",
            "12 000",
            "12,00",
            "144 000",
            "20 000",
            "10,00",
            "200 000",
            "344 000"
          ],
          [
            "**Coût standard**",
            "12 000",
            "7,00",
            "84 000",
            "20 000",
            "7,00",
            "140 000",
            "224 000"
          ],
          [
            "**Marge**",
            "12 000",
            "5,00",
            "60 000",
            "20 000",
            "3,00",
            "60 000",
            "120 000"
          ],
          [
            "**RÉEL**",
            ""
          ],
          [
            "**CA net**",
            "11 000",
            "13,50",
            "148 500",
            "26 000",
            "8,50",
            "221 000",
            "369 500"
          ],
          [
            "**Coût standard**",
            "11 000",
            "7,00",
            "77 000",
            "26 000",
            "7,00",
            "182 000",
            "259 000"
          ],
          [
            "**Marge**",
            "11 000",
            "6,50",
            "71 500",
            "26 000",
            "1,50",
            "39 000",
            "110 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Écart sur marge : 110 500 – 120 000 = – 9 500 € (défavorable)"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Écart sur marge unitaire**"
        ],
        "rows": [
          [
            "**Représentants externes**",
            "(71 500 – 55 000) = + 16 500 € F"
          ],
          [
            "**Grossistes répartiteurs**",
            "(39 000 – 78 000) = – 39 000 € D"
          ],
          [
            "**TOTAL**",
            "– 22 500 € D"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Écart sur composition des ventes :"
      },
      {
        "type": "p",
        "text": "(Marge moyenne préétablie – Marge moyenne budgétée) × Quantité réelle"
      },
      {
        "type": "p",
        "text": "= (3,594 – 3,75) × 37 000 = – 5 772 € (défavorable)"
      },
      {
        "type": "p",
        "text": "Écart sur volume global :"
      },
      {
        "type": "p",
        "text": "(Qr – Qp) × Marge moyenne budgétée = (37 000 – 32 000) × 3,75 = + 18 750 € (favorable)"
      },
      {
        "type": "p",
        "text": "**2. Rédiger une note de synthèse, d’une page environ, à l’attention du dirigeant qui analysera les écarts calculés afin d’expliciter les recommandations à mettre en oeuvre en matière de performance commerciale.**"
      },
      {
        "type": "p",
        "text": "Le contrôle budgétaire s’inscrit dans une logique prévisionnelle. Il permet d’effectuer un suivi entre les données prévisionnelles et réelles, notamment par l’identification et l’interprétation des écarts, l’attribution des responsabilités, la recherche des causes et la proposition de mesures correctives. Il vise à responsabiliser les acteurs, invités à définir éventuellement conjointement avec la direction les objectifs à atteindre. Cette démarche s’inscrit davantage dans une approche d’animation responsabilisante et non simplement dans une logique de contrôle sanction/récompense."
      },
      {
        "type": "p",
        "text": "L’écart sur marge est défavorable : – 9 500 €. Cet écart représente 7,9 % de la marge totale prévue. Cet écart n’est donc pas négligeable."
      },
      {
        "type": "p",
        "text": "L’écart sur marge unitaire fournit une première explication de ce dérapage ; en effet, l’entreprise est soumise à une pression concurrentielle très forte sur le marché des compléments alimentaires. Les prix subissent ainsi une pression à la baisse. En outre, les remises ou commissions accordées aux intermédiaires viennent accroître l’effet négatif sur les marges unitaires."
      },
      {
        "type": "p",
        "text": "Cependant, cette pression sur les prix n’a pas les mêmes impacts sur l’entreprise selon le canal de distribution. Ainsi les ventes réalisées par les représentants externes ont permis d’améliorer la marge unitaire. Les commissions aux représentants ont sans doute été mieux négociées par l’entreprise."
      },
      {
        "type": "p",
        "text": "Quant aux ventes réalisées par les grossistes répartiteurs, les quantités commandées leur permettent de négocier d’importantes remises, ce qui se ressent sur les marges puisque l’écart sur marge unitaire des ventes réalisées par les grossistes répartiteurs est défavorable de 39 000 €. L’écart sur marge unitaire global s’explique donc par une dégradation de la marge unitaire sur les ventes réalisées par les grossistes répartiteurs."
      },
      {
        "type": "p",
        "text": "Ces derniers ont vendu plus de produits que prévu : l’écart sur volume global est favorable de 9 375 €. Ces ventes sont supérieures aux attentes ; le même phénomène s’observe pour les ventes réalisées par les représentants externes (écart sur volume global favorable de 9 375 €). L’entreprise a sans doute privilégié les ventes auprès des grossistes répartiteurs qui se chargent ensuite de distribuer les produits auprès des officines. L’avantage de ce canal de distribution est qu’il permet à l’entreprise de réaliser d’importants volumes de ventes."
      },
      {
        "type": "p",
        "text": "Cependant, cette politique volumique a une contrepartie. En effet, comme la marge unitaire réalisée sur les ventes aux grossistes est plus faible que celle réalisée auprès des représentants externes (compte tenu des remises accordées aux grossistes), l’écart sur composition des ventes est défavorable : – 5 772 €, dont la grande partie provient des représentants (– 14 375 €)."
      },
      {
        "type": "p",
        "text": "Il convient donc d’être vigilant sur les ventes à venir : les grossistes assurent certes un volume de ventes important à l’entreprise mais il faudra veiller à ne pas négliger les ventes réalisées par les représentants externes. En outre, la politique commerciale en matière de remises auprès des grossistes a un impact très négatif sur la marge globale de l’entreprise. Il s’agit sans doute de prévoir une négociation auprès de ce canal de distribution avec un encadrement des remises dans le cadre de contrats de distribution."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "Cas",
    "title": "Shampoing Maud",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "Depuis N–4, l’entreprise Shampoing Maud a choisi de se diversifier en proposant des produits dérivés du miel, et notamment une gamme pour les soins capillaires : shampoing, après-shampoing et masque de soin. Pour dynamiser les ventes, elle propose des coffrets cadeaux. Dès la première année, elle a conçu un coffret comprenant un shampoing et un après-shampoing. Compte tenu du succès de cette offre, elle a créé un autre coffret en N–2 avec un shampoing et un masque de soin. L’engouement croissant de la population pour le bien-être et le retour au naturel a été moteur dans la décision de créer des produits cosmétiques mais la concurrence reste forte."
      },
      {
        "type": "p",
        "text": "M. Micoux, directeur commercial, souhaiterait effectuer une analyse de la performance commerciale. Pour cela, il a établi une prévision des ventes."
      },
      {
        "type": "p",
        "text": "Mme Maud, la directrice générale, pense que la création du nouveau coffret est indispensable à l’évolution globale des ventes."
      },
      {
        "type": "p",
        "text": "Afin d’être sûre que la démarche commerciale engagée soit cohérente, elle s’entretient avec monsieur Micoux pour lui demander de mettre en place un contrôle plus approfondi des résultats obtenus."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "À l’aide des documents 1 et 2 :"
      },
      {
        "type": "p",
        "text": "*1. Justifier le choix d’un calcul d’écart sur marge plutôt que d’un calcul d’écart sur chiffre d’affaires.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer, globalement et pour chaque modèle, l’écart sur marge brute, conformément aux indications fournies par M. Micoux. Procéder également à la décomposition de l’écart sur marge brute en trois sous-écarts.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger une note de synthèse sur les écarts calculés (d’environ une quinzaine de lignes), à l’attention de Mme Maud. Vous pourrez vous aider des résultats obtenus dans le cas « Shampoing Maud » (chapitre 9).*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Extrait de l’entretien entre Mme Maud et M. Micoux**"
      },
      {
        "type": "p",
        "text": "**Madame Maud (Mme M.) :**L’analyse de l’évolution des ventes est certes une première étape de réflexion mais je souhaiterais savoir s’il vous est possible de mettre en place des indicateurs qui permettent de contrôler si les résultats obtenus sont conformes à ceux prévus."
      },
      {
        "type": "p",
        "text": "**Monsieur Micoux (M. M.) :**Tout à fait, je souhaitais justement vous proposer un contrôle budgétaire des ventes. Il s’agirait de calculer différents écarts entre les données réelles et prévues."
      },
      {
        "type": "p",
        "text": "**Mme M. :**Très intéressant, quels types d’écarts pourrez-vous calculer ?"
      },
      {
        "type": "p",
        "text": "**M. M. :**Je vous propose de calculer pour chaque coffret des écarts sur marge brute, que je décomposerai en écarts sur marge unitaire, sur volume et sur composition des ventes."
      },
      {
        "type": "p",
        "text": "**Mme M. :**Je vous fais confiance sur ces aspects techniques. Il sera bien entendu nécessaire que les résultats s’accompagnent d’explications et de commentaires sur chacun des écarts calculés. Je vous propose d’effectuer cette démarche dans un premier temps sur le mois de décembre N+1, cette période étant très importante pour nous en termes d’activité. Avez-vous besoin d’informations complémentaires ?"
      },
      {
        "type": "p",
        "text": "**M. M. :**Les commerciaux partent bien d’un prix indicatif mais disposent-ils d’une certaine latitude pour négocier les prix ?"
      },
      {
        "type": "p",
        "text": "**Mme M. :**Tout à fait, puisqu’ils s’adressent à des centrales d’achat. Les prix sont négociés en fonction des volumes. D’ailleurs, dans leur rémunération, ils perçoivent une commission sur le chiffre d’affaires réalisé. On s’interroge cependant sur une autre assiette de calcul qui permettrait de mieux les orienter vers une optimisation du résultat de l’entreprise."
      },
      {
        "type": "p",
        "text": "**Document 2 — Données relatives aux coffrets cadeaux**"
      },
      {
        "type": "p",
        "text": "***Prévisions décembre N+1***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente indicatif d’un coffret (en €)**",
          "**Quantités produites et vendues**",
          "**Coût de production unitaire préétabli (en €)**"
        ],
        "rows": [
          [
            "**Coffret 1 : un shampoing et un après-shampoing**",
            "14,2",
            "71 200",
            "11,8"
          ],
          [
            "**Coffret 2 : un shampoing et un masque de soin**",
            "17,2",
            "75 000",
            "15,5"
          ]
        ]
      },
      {
        "type": "p",
        "text": "***Réalisations décembre N+1***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente d’un coffret (en €)**",
          "**Quantités produites et vendues**",
          "**Coût total de production réel (en €)**"
        ],
        "rows": [
          [
            "**Coffret 1 : un shampoing et un après-shampoing**",
            "14,5",
            "68 000",
            "816 000"
          ],
          [
            "**Coffret 2 : un shampoing et un masque de soin**",
            "16,2",
            "80 000",
            "1 170 000"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**1. Justifier le choix d’un calcul d’écart sur marge plutôt que d’un calcul d’écart sur chiffre d’affaires.**"
      },
      {
        "type": "p",
        "text": "Les marges ne sont pas toujours proportionnelles aux prix de vente. Ce calcul va permettre de mettre en évidence les marges réalisées pour chacun des produits ce qui a plus de signification qu’un prix de vente, notamment dans le choix d’un produit à privilégier."
      },
      {
        "type": "p",
        "text": "**2. Calculer, globalement et pour chaque modèle, l’écart sur marge brute, conformément aux indications fournies par monsieur Micoux. Procéder également à la décomposition de l’écart sur marge brute en trois sous-écarts.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Réel**",
          "**Prévisionnel**",
          "**Écart sur marge brute**"
        ],
        "rows": [
          [
            "",
            "Qr",
            "PVr",
            "CUp",
            "Mur(1)",
            "Mr totale",
            "Qp",
            "PVp",
            "CUp",
            "Mup",
            "Mp totale"
          ],
          [
            "**C1**",
            "68 000",
            "14,50",
            "11,80",
            "2,70",
            "183 600",
            "71 200",
            "14,20",
            "11,80",
            "2,40",
            "170 880",
            "12 720",
            "Fav."
          ],
          [
            "**C2**",
            "80 000",
            "16,20",
            "15,50",
            "0,70",
            "56 000",
            "75 000",
            "17,20",
            "15,50",
            "1,70",
            "127 500",
            "– 71 500",
            "Défav."
          ],
          [
            "",
            "148 000",
            "",
            "",
            "",
            "239 600",
            "146 200",
            "",
            "",
            "",
            "298 380",
            "– 58 780",
            "Défav."
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart sur marge unitaire**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Qr**",
          "**Mur – Mup**",
          "**Écart**",
          ""
        ],
        "rows": [
          [
            "**Coffret 1**",
            "68 000",
            "0,30",
            "20 400",
            "Fav."
          ],
          [
            "**Coffret 2**",
            "80 000",
            "– 1,00",
            "– 80 000",
            "Défav."
          ],
          [
            "",
            "",
            "",
            "– 59 600",
            "Défav."
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Calcul de Qm**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Qr**",
          "**Qp/SQp**",
          "**Qm = Qp/SQp × SQr**"
        ],
        "rows": [
          [
            "**Coffret 1**",
            "68 000",
            "0,487004",
            "72 076,61"
          ],
          [
            "**Coffret 2**",
            "80 000",
            "0,512996",
            "75 923,39"
          ],
          [
            "",
            "148 000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart sur volume global**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Qm – Qp**",
          "**Mp**",
          "**Écart**",
          ""
        ],
        "rows": [
          [
            "**Coffret 1**",
            "876,61",
            "2,40",
            "2 104",
            "Fav."
          ],
          [
            "**Coffret 2**",
            "923,39",
            "1,70",
            "1 570",
            "Fav."
          ],
          [
            "",
            "",
            "",
            "3 674",
            "Fav."
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart sur composition**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Qr – Qm**",
          "**Mp unit**",
          "**Écart**",
          ""
        ],
        "rows": [
          [
            "**Coffret 1**",
            "– 4 077",
            "2,40",
            "– 9 784",
            "Défav."
          ],
          [
            "**Coffret 2**",
            "4 077",
            "1,70",
            "6 930",
            "Fav."
          ],
          [
            "",
            "",
            "",
            "– 2 854",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Rédiger une note de synthèse sur les écarts calculés (d’environ une quinzaine de lignes), à l’attention de Mme Maud. Vous pourrez vous aider des résultats obtenus dans le cas Shampoing Maud (cf. chapitre 9).**"
      },
      {
        "type": "p",
        "text": "L’écart sur marge brute est défavorable (– 58 780 €), avec notamment un écart largement défavorable (– 71 500 €) pour le coffret 2 alors que le phénomène est inverse pour le coffret 1 (12 720 €). La décomposition en sous-écarts permet de mettre en évidence diverses observations. La stratégie commerciale des vendeurs a été différente pour chacun des coffrets. L’écart sur marge unitaire montre que des remises assez importantes ont été accordées sur le coffret 2 alors que le prix du coffret 1 est légèrement supérieur au prix indicatif. Cependant, malgré ces écarts de prix, les ventes en volume ont progressé pour les deux produits. Enfin l’écart sur composition montre que les proportions de ventes du coffret 1 sont inférieures à celles prévues. Les commerciaux semblent donc avoir privilégier le coffret 2."
      },
      {
        "type": "p",
        "text": "Le nouveau coffret a généré un phénomène de « cannibalisation ». La rémunération variable basée sur le chiffre d’affaires réalisé, et peut-être le fait que ce produit soit relativement nouveau et en phase de croissance, a conduit les commerciaux à privilégier le coffret 2. Par ailleurs, le coffret 1 étant en phase de maturité, il n’aurait peut-être pas fallu augmenter son prix de vente."
      },
      {
        "type": "p",
        "text": "Compte tenu des marges constatées pour chacun des produits, il aurait été sans doute plus judicieux de rémunérer les commerciaux sur les marges."
      }
    ]
  },
  {
    "id": "ex8",
    "label": "Cas",
    "title": "Fonéa",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "La société Fonéa est spécialisée dans la prestation de formations. Conscient du caractère très concurrentiel du marché de la formation, monsieur Goulard, dirigeant de la société Fonéo, a souhaité qu’un contrôle budgétaire des ventes soit mis en place en année N avant de lancer de nouvelles offres. Les prestations sont proposées à un prix établi mais des négociations sont parfois effectuées, notamment par les entreprises clientes qui envoient régulièrement leurs collaborateurs en formation."
      },
      {
        "type": "p",
        "text": "Lors de l’établissement des budgets, les prix de vente prévisionnels sont calculés en fonction des remises ayant été accordées les années précédentes."
      },
      {
        "type": "p",
        "text": "En termes de stratégie, la société avait envisagé pour N de développer les ventes de la formation « Certification acheteur » sur les deux sites où elle est proposée (Île-de-France et Rhône-Alpes). Cette prestation étant relativement récente, il s’agissait d’abord de bien asseoir sa notoriété avant de l’implanter dans d’autres régions à partir de N+1. Il semble également important de maintenir, voire développer, les ventes de la formation « Manager des achats », car elle est le produit phare et donc la vitrine de l’entreprise."
      },
      {
        "type": "p",
        "text": "En tant que contrôleur de gestion, vous allez procéder au contrôle budgétaire des ventes en calculant et en décomposant les écarts sur marge."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Procéder à la détermination des prévisions de ventes, en choisissant et en justifiant une méthode adaptée aux calculs de ces prévisions pour N+1, pour chacune des formations.*"
      },
      {
        "type": "p",
        "text": "*2. Procéder au contrôle budgétaire des ventes.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger un document, d’une page environ, à l’attention de monsieur Goulard qui analysera les prévisions des ventes et les écarts calculés afin d’expliciter les recommandations à mettre en œuvre en matière de performance commerciale.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Volume et analyse des ventes depuis N–7**"
      },
      {
        "type": "p",
        "text": "***Nombre d’auditeurs par année***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**N–7**",
          "**N–6**",
          "**N–5**",
          "**N–4**",
          "**N–3**",
          "**N–2**",
          "**N–1**",
          "**N**"
        ],
        "rows": [
          [
            "**Manager des achats**",
            "20",
            "23",
            "30",
            "40",
            "65",
            "85",
            "110",
            "132"
          ],
          [
            "**Certification acheteur**",
            "",
            "",
            "",
            "",
            "10",
            "26",
            "30",
            "40"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 2 — Données relatives au contrôle budgétaire des ventes N**"
      },
      {
        "type": "p",
        "text": "***Données prévisionnelles***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Prix de vente (en €)**",
            "10 500",
            "5 500"
          ],
          [
            "**Coût de production unitaire (en €)**",
            "6 500",
            "3 500"
          ],
          [
            "**Nombre d’auditeurs**",
            "125",
            "35"
          ]
        ]
      },
      {
        "type": "p",
        "text": "***Données réelles***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Prix de vente (en €)**",
            "11 000",
            "5 450"
          ],
          [
            "**Coût de production unitaire (en €)**",
            "6 600",
            "3 700"
          ],
          [
            "**Nombre d’auditeurs**",
            "132",
            "40"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**1. Procéder à la détermination des prévisions de ventes, en choisissant et en justifiant une méthode adaptée aux calculs de ces prévisions pour N+1, pour chacune des formations.**"
      },
      {
        "type": "p",
        "text": "**Remarque***Pour la formation Manager des achats*"
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,971",
            "0,993"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = 16,774x – 12,357",
            "Y = 13,565 × 1,341x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Pour la formation Certification acheteur*"
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,973",
            "0,924"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = 9,4x + 3",
            "Y = 8,062 × 1,538x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour la formation Manager des achats, la tendance exponentielle doit être retenue car le coefficient de corrélation est le plus élevé, soit 190 unités (13,565 × 1,3419)."
      },
      {
        "type": "p",
        "text": "Les ventes sont régulières pour la formation Certification acheteur. Il faut retenir la tendance linéaire. La prévision s’élève à 50 unités (9,4 × 5 + 3)."
      },
      {
        "type": "p",
        "text": "**2. Procéder au contrôle budgétaire des ventes.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Écart de marge sur coûts préétablis**",
            "94 000 €",
            "8 000 €"
          ],
          [
            "**Écart sur marge unitaire(ou écart sur prix)**",
            "66 000 €",
            "– 2 000 €"
          ],
          [
            "**Écart sur quantité**",
            "28 000 €",
            "10 000 €"
          ],
          [
            "**Écart de composition des ventes (ou écart sur mix)**",
            "– 9 500 €",
            "4 750 €"
          ],
          [
            "**Écart sur volume des ventes**",
            "37 500 €",
            "5 250 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Rédiger un document, d’une page environ, à l’attention de monsieur Goulard qui analysera les prévisions des ventes et les écarts calculés afin d’expliciter les recommandations à mettre en oeuvre en matière de performance commerciale.**"
      },
      {
        "type": "p",
        "text": "Notions attendues dans le développement :"
      },
      {
        "type": "p",
        "text": "– analyse de l’évolution des ventes ;"
      },
      {
        "type": "p",
        "text": "– analyse contextuelle de chaque écart."
      },
      {
        "type": "p",
        "text": "Les prévisions des ventes montrent une tendance exponentielle pour les ventes de formation « Manager des achats », ce qui traduit bien la forte croissance de l’entreprise."
      },
      {
        "type": "p",
        "text": "L’évolution des ventes de la formation « Certification acheteur » est linéaire : cette formation n’est mise en place que depuis 4 ans et elle progresse de façon continue. Par ailleurs, elle n’est mise en place que dans deux régions. L’évolution des ventes et l’expertise de la société va permettre de l’étendre très rapidement à d’autres régions."
      },
      {
        "type": "p",
        "text": "Le contrôle budgétaire montre que les écarts sur prix sont favorables pour la formation « Manager des achats », ce qui laisse à penser que peu de remise ont été accordées, puisque les tarifs prévisionnels sont établis à partir des réductions accordées lors des négociations de tarifs des années précédentes. Cela s’explique par le fait que cette formation, produit phare de l’entreprise, est maintenant bien implantée et que sa notoriété est acquise."
      },
      {
        "type": "p",
        "text": "En revanche, pour la formation « Certification acheteur », davantage de remises ont été accordées. Cette formation étant relativement nouvelle, les commerciaux ont sans doute souhaité la développer et l’asseoir solidement sur le marché."
      },
      {
        "type": "p",
        "text": "De plus, l’écart sur mix montre qu’elle a été privilégiée par rapport à l’autre formation, ce qui globalement a été défavorable (d’un point de vue comptable) à l’entreprise, mais doit être poursuivi pour développer sa croissance."
      },
      {
        "type": "p",
        "text": "Les écarts sur volume sont favorables car le nombre de formations vendues est plus élevé que prévu, ce qui traduit bien la croissance importante de l’entreprise."
      }
    ]
  },
  {
    "id": "ex9",
    "label": "Cas",
    "title": "Plastiro",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "La société Plastiro est spécialisée dans la fabrication industrielle de pièces en plastique. Le contrôleur de gestion de la société Plastiro, M. Denis, désire faire le suivi de l’activité « Formage » pour le mois d’avril N. Le formage superplastique consiste à former à chaud (jusqu’à 1 000°C) des alliages superplastiques d’aluminium et de titane par pression de gaz inerte jusqu’à 50 bars. Associé au soudage par diffusion pour les alliages de titane, ce procédé permet en une seule opération l’obtention de structures alvéolaires, composées de plusieurs tôles. L’activité « Formage » est un centre de responsabilités qui fabrique des tubes en titane dont l’unité de vente est le mètre linéaire."
      },
      {
        "type": "p",
        "text": "M. Denis vous demande de lui rédiger une note de synthèse sur les écarts calculés."
      },
      {
        "type": "p",
        "text": "Vous calculerez pour chaque élément de coût :"
      },
      {
        "type": "p",
        "text": "– l’écart sur volume ;"
      },
      {
        "type": "p",
        "text": "– l’écart global."
      },
      {
        "type": "p",
        "text": "Vous décomposerez :"
      },
      {
        "type": "p",
        "text": "– l’écart sur main-d’œuvre directe (MOD) ;"
      },
      {
        "type": "p",
        "text": "– l’écart sur charges indirectes."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Rédiger une note de synthèse sur les écarts calculés.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Fiche de coût standard du produit « tube titane »**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**Prix unitaire**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Matières premières**",
            "0,2 kg",
            "600 €",
            "120 €"
          ],
          [
            "**Main-d’œuvre directe**",
            "20 min",
            "60 €/h",
            "20 €"
          ],
          [
            "**Charges indirectes**",
            "15 min",
            "800 €/l’heure-machinedont 650 € de charges fixes",
            "200 €"
          ],
          [
            "**1 mètre linéaire**",
            "",
            "",
            "340 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Ce coût est déterminé pour un niveau de production normal de 12 000 mètres de « Tube titane ». La capacité de production maximale est de 15 000 mètres de « Tube titane »."
      },
      {
        "type": "p",
        "text": "Les charges fixes n’apparaissent qu’au niveau des charges indirectes."
      },
      {
        "type": "p",
        "text": "**Document 2 — Informations relatives aux coûts réels du mois d’avril**"
      },
      {
        "type": "p",
        "text": "La fabrication de 10 200 mètres de « Tube titane » a entraîné les charges suivantes :"
      },
      {
        "type": "p",
        "text": "– matières premières : 2 244 kg au coût moyen pondéré de 712 € ;"
      },
      {
        "type": "p",
        "text": "– main-d’œuvre directe : 4 250 heures au coût unitaire de 55 € ;"
      },
      {
        "type": "p",
        "text": "– charges indirectes : 2 640 heures-machine au coût unitaire de 960 €."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**Rédiger une note de synthèse sur les écarts calculés.**"
      },
      {
        "type": "p",
        "text": "**Écart total**"
      },
      {
        "type": "table",
        "headers": [
          "**Facteurs**",
          "**Coût constaté 10 200 mètres**",
          "**Coût préétabli de la production préétablie 12 000 mètres**",
          "**Écart global**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unitaire (en €)",
            "Total (en €)",
            "Quantité",
            "Coût unitaire (en €)",
            "Total (en €)"
          ],
          [
            "**Matières premièresMain-d’œuvre directeCharges indirectes**",
            "2 2444 2502 640",
            "712,0055,00960,00",
            "1 597 728233 7502 534 400",
            "2 4004 0003 000",
            "600,0060,00800,00",
            "1 440 000,00240 000,002 400 000,00",
            "157 728 (défav.)– 6250 (fav.)134 400 (défav.)"
          ],
          [
            "",
            "10 200",
            "428,03",
            "4 365 878",
            "12 000",
            "340,00",
            "4 080 000",
            "285 878 (défav.)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart sur volume**"
      },
      {
        "type": "table",
        "headers": [
          "**Facteurs**",
          "**Coût préétabli de la production préétablie 12 000 mètres**",
          "**Coût préétabli de la production réelle 10200 mètres**",
          "**Écart global**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unitaire (en €)",
            "Total (en €)",
            "Quantité",
            "Coût unitaire (en €)",
            "Total(en €)"
          ],
          [
            "**Matières premièresMain-d’œuvre directeCharges indirectes**",
            "2 4004 0003 000",
            "600,0060,00800,00",
            "1 440 000,00240 000,002 400 000,00",
            "2 0403 4002 550",
            "600,0060,00800,00",
            "1 224 000204 0002 040 000",
            "216 000 (fav.)36 000 (fav.)360 000 (fav.)"
          ],
          [
            "",
            "12 000",
            "",
            "4 080 000",
            "10 200",
            "340,00",
            "3 468 000",
            "612 000 (fav.)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart global**"
      },
      {
        "type": "table",
        "headers": [
          "**Facteurs**",
          "**Coût constaté 10 200 mètres**",
          "**Coût préétabli de la production réelle 10 200 mètres**",
          "**Écart global**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unitaire (en €)",
            "Total (en €)",
            "Quantité",
            "Coût unitaire (en €)",
            "Total (en €)"
          ],
          [
            "**Matières premièresMain-d’œuvre directeCharges indirectes**",
            "2 2444 2502 640",
            "712,0055,00960,00",
            "1 597 728233 7502 534 400",
            "2 0403 4002 550",
            "600,0060,00800,00",
            "1 224 000204 0002 040 000",
            "373 728 (défav.)29 750 (défav.)494 400 (défav.)"
          ],
          [
            "",
            "10 200",
            "428,03",
            "4 365 878",
            "10 200",
            "340,00",
            "3 468 000",
            "897 878 (défav.)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Analyse de l’écart sur MOD*"
      },
      {
        "type": "p",
        "text": "Écart sur quantité : (4 250 – 3 400) × 60 = 51 000 (défav.)"
      },
      {
        "type": "p",
        "text": "Écart sur taux horaire : (55 – 60) × 4 250 =– 21 250 (fav.)"
      },
      {
        "type": "p",
        "text": "Total 29 750 (défav.)"
      },
      {
        "type": "p",
        "text": "**Analyse de l’écart sur charges indirectes : budget flexible**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**3 000**",
          "**2 640**"
        ],
        "rows": [
          [
            "**Charges fixesCharges variables**",
            "1 950 000450 000",
            "1 950 000396 000"
          ],
          [
            "2 400 000",
            "2 346 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Écart sur budget : 2 534 400 – 2 346 000 = 188 400 € (défav.)"
      },
      {
        "type": "p",
        "text": "Écart sur activité : 2 346 000 – (2 640 × 800) = 234 000 € (défav.)"
      },
      {
        "type": "p",
        "text": "Écart sur rendement : (2 640 × 800) – 2 040 000 =72 000 € (défav.)"
      },
      {
        "type": "p",
        "text": "Total 494 400 € (défav.)"
      },
      {
        "type": "p",
        "text": "**Remarque***Note de synthèse*"
      },
      {
        "type": "p",
        "text": "L’écart sur la main-d’oeuvre directe (MOD) est défavorable de 29 750 €. La cause principale est une consommation importante d’heures de MOD, de plus de 25 % par rapport à une norme pour une production donnée. En revanche, le taux horaire a baissé de plus de 8 % par rapport au coût horaire standard."
      },
      {
        "type": "p",
        "text": "L’écart sur charges indirectes est défavorable de 494 400 €. Cet écart s’explique par le coût des facteurs de production (188 400 défav.), par la sous-activité (234 000 défav.) et par une productivité moindre (72 000 défav.)."
      },
      {
        "type": "p",
        "text": "PARTIE 2 CAS DE SYNTHÈSELA GESTION BUDGÉTAIRE"
      },
      {
        "type": "p",
        "text": "**Lanz France**"
      },
      {
        "type": "p",
        "text": "**Gestion budgétaire commerciale de Lanz France**"
      },
      {
        "type": "p",
        "text": "**1. Distinguer et caractériser le centre de responsabilités de la filiale française Lanz.**"
      },
      {
        "type": "p",
        "text": "Un centre de responsabilités est un groupe d’acteurs de l’organisation regroupés autour d’un responsable, auquel des moyens sont octroyés pour réaliser l’objectif qui lui a été assigné."
      },
      {
        "type": "p",
        "text": "Le groupe Lanz délègue des responsabilités par pays. La filiale commerciale française de Lanz est directement évaluée par sa marge contributive au résultat du groupe. Il est précisé que l’autonomie accordée par le groupe allemand permet à Lanz France d’avoir de vrais projets de développement adaptés au marché français."
      },
      {
        "type": "p",
        "text": "C’est donc un centre de profit qui caractérise le filiale française Lanz, ce qui lui confère une responsabilité globale en termes de chiffre d’affaires et de consommations compte tenu des moyens financiers et humains alloués."
      },
      {
        "type": "p",
        "text": "**2. Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales.**"
      },
      {
        "type": "table",
        "headers": [
          "**Années**",
          "**Trimestres**",
          "**Ventes (V) en unités**",
          "**T = x – x**",
          "**V = v – v**",
          "**T × V**",
          "**T2**",
          "**V’ (calcul de la droite de régression)**",
          "**CS (coefficient de saisonnalité) = V – V’**"
        ],
        "rows": [
          [
            "**N–2**",
            "1",
            "50 000",
            "– 5,5",
            "1 916,67",
            "(10 541,65)",
            "30,25",
            "43 910,26",
            "6 089,74"
          ],
          [
            "2",
            "40 000",
            "– 4,5",
            "(8 083,33)",
            "36 375,00",
            "20,25",
            "44 669,00",
            "(4 669,00)"
          ],
          [
            "3",
            "50 000",
            "– 3,5",
            "1 916,67",
            "(6 708,33)",
            "12,25",
            "45 427,74",
            "4 572,26"
          ],
          [
            "4",
            "45 000",
            "– 2,5",
            "(3 083,33)",
            "7 708,33",
            "6,25",
            "46 186,48",
            "(1 186,48)"
          ],
          [
            "**N–1**",
            "5",
            "40 000",
            "– 1,5",
            "(8 083,33)",
            "12 125,00",
            "2,25",
            "46 945,22",
            "(6 945,22)"
          ],
          [
            "6",
            "43 000",
            "– 0,5",
            "(5 083,33)",
            "2 541,67",
            "0,25",
            "47 703,96",
            "(4 703,96)"
          ],
          [
            "7",
            "50 000",
            "0,5",
            "1 916,67",
            "958,33",
            "0,25",
            "48 462,70",
            "1 537,30"
          ],
          [
            "8",
            "55 000",
            "1,5",
            "6 916,67",
            "10 375,00",
            "2,25",
            "49 221,45",
            "5 778,55"
          ],
          [
            "**N**",
            "9",
            "48 000",
            "2,5",
            "(83,33)",
            "(208,33)",
            "6,25",
            "49 980,19",
            "(1 980,19)"
          ],
          [
            "10",
            "52 000",
            "3,5",
            "3 916,67",
            "13 708,33",
            "12,25",
            "50 738,93",
            "1 261,07"
          ],
          [
            "11",
            "49 000",
            "4,5",
            "916,67",
            "4 125,00",
            "20,25",
            "51 497,67",
            "(2 497,67)"
          ],
          [
            "12",
            "55 000",
            "5,5",
            "6 916,67",
            "38 041,67",
            "30,25",
            "52 256,41",
            "2 743,59"
          ],
          [
            "**Moyenne**",
            "6,5",
            "48 083",
            "",
            "",
            "108 500,00",
            "143,00",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "La droite de régression est déterminée à l’aide du tableur ou de la calculatrice."
      },
      {
        "type": "p",
        "text": "On obtient : y = 758,74x + 43 151,51"
      },
      {
        "type": "p",
        "text": "**Détermination des ventes prévisionnelles trimestrielles ajustées**"
      },
      {
        "type": "table",
        "headers": [
          "**N+1**",
          "**Y¢13**",
          "**13**",
          "**53 015,15**"
        ],
        "rows": [
          [
            "Y¢14",
            "14",
            "53 773,89"
          ],
          [
            "Y¢15",
            "15",
            "54 532,63"
          ],
          [
            "Y¢16",
            "16",
            "55 291,38"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Détermination des ventes pour l’année suivante**"
      },
      {
        "type": "table",
        "headers": [
          "**N+1**",
          "**Y13**",
          "**13**",
          "**53 960,37**"
        ],
        "rows": [
          [
            "Y14",
            "14",
            "56 477,86"
          ],
          [
            "Y15",
            "15",
            "53 328,67"
          ],
          [
            "Y16",
            "16",
            "52 846,15"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Budget des moyens commerciaux**"
      },
      {
        "type": "table",
        "headers": [
          "**Trimestres**",
          "**Ventes**",
          "**Salaires**",
          "**Commissions**"
        ],
        "rows": [
          [
            "**T1**",
            "53 960",
            "1 700 000",
            "1 931 781"
          ],
          [
            "**T2**",
            "56 478",
            "1 720 000",
            "2 021 907"
          ],
          [
            "**T3**",
            "53 329",
            "1 650 000",
            "1 909 166"
          ],
          [
            "**T4**",
            "52 846",
            "1 635 000",
            "1 891 892"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**T1**",
          "**T2**",
          "**T3**",
          "**T4**"
        ],
        "rows": [
          [
            "**Mailing**",
            "110 000",
            "–",
            "–",
            "90 000"
          ],
          [
            "**Publicité locale et nationale**",
            "1 500 000",
            "1 300 000",
            "1 400 000",
            "1 550 000"
          ],
          [
            "**Locaux**",
            "1 250 000",
            "1 250 000",
            "1 250 000",
            "1 250 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Total charges avec salaires et commissions** — **6 491 781** — **6 291 907** — **6 209 166** — **6 416 892**"
      },
      {
        "type": "p",
        "text": "**Frais commerciaux à prendre en compte**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**T1**",
          "**T2**",
          "**T3**",
          "**T4**"
        ],
        "rows": [
          [
            "**Frais logistiques**",
            "1 079 207",
            "1 129 557",
            "1 066 573",
            "1 056 923"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Analyse des écarts sur les 4 trimestres en N+1**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**L25**",
          "**L35**",
          "**L36**",
          "**L40**",
          "**Total**"
        ],
        "rows": [
          [
            "**Volume réel**",
            "13 100",
            "21 690",
            "10 200",
            "8 220",
            "53 210"
          ],
          [
            "**Volume budgété**",
            "13 490",
            "21 585",
            "10 792",
            "8 094",
            "53 961"
          ],
          [
            "**Prix budgété**",
            "30 000",
            "35 000",
            "40 000",
            "42 000",
            ""
          ],
          [
            "**Prix réel**",
            "30 100",
            "34 650",
            "39 900",
            "41 160",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Rédiger une note de synthèse sur les écarts calculés au directeur général français de Lanz sur le 1er trimestre N+1.**"
      },
      {
        "type": "p",
        "text": "Les montants qui figurent entre parenthèses indiquent une valeur négative."
      },
      {
        "type": "p",
        "text": "Pour pouvoir analyser les écarts, il faut les calculer."
      },
      {
        "type": "p",
        "text": "Voici le tableau récapitulatif des écarts sur prix et sur volume."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**L25**",
          "**L35**",
          "**L36**",
          "**L40**",
          "**Total**"
        ],
        "rows": [
          [
            "**Écart sur prix**",
            "1 310 000",
            "– 7 591 500",
            "– 1 020 000",
            "– 6 904 800",
            "(14 206 300)"
          ],
          [
            "**Sens de l’écart**",
            "(+) favorable",
            "(–) défavorable",
            "(–) défavorable",
            "(–) défavorable",
            ""
          ],
          [
            "**Écart sur volume**",
            "(11 700 000)",
            "3 675 000",
            "(23 680 000)",
            "5 292 000",
            "(26 413 000)"
          ],
          [
            "**Sens écart**",
            "(–) défavorable",
            "(+) favorable",
            "(–) défavorable",
            "(+) favorable",
            "Somme"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’écart sur prix est globalement négatif de 14 206 300 €, ce qui représente une importante perte de chiffre d’affaires. Les commerciaux n’ont pratiqué les prix prévus sur trois des quatre produits. Les écarts sont défavorables pour les L25, L35 et L36."
      },
      {
        "type": "p",
        "text": "L’écart sur volume est globalement négatif de 26 413 000 €. Il semble que l’entreprise soit confrontée à des difficultés. Toutefois, deux produits semblent être satisfaisants : les modèles L35 et L40."
      },
      {
        "type": "p",
        "text": "Le responsable de la filiale française Lanz doit repositionner ses objectifs afin de résorber ces écarts qui doivent absolument être justifiés."
      },
      {
        "type": "p",
        "text": "**Masse salariale de Lanz France**"
      },
      {
        "type": "p",
        "text": "**4. Déterminer et commenter la masse salariale prévisionnelle de Lanz France.**"
      },
      {
        "type": "p",
        "text": "**Base indicielle 100 au 31/12/N–1**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "",
          "**Durée en mois**",
          "**Total**"
        ],
        "rows": [
          [
            "**De janvier à mars N**",
            "100",
            "3",
            "300"
          ],
          [
            "**D’avril à juillet N**",
            "101",
            "4",
            "404"
          ],
          [
            "**D’août à décembre N**",
            "102,313",
            "5",
            "512"
          ],
          [
            "**Total**",
            "–",
            "12",
            "1 216"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Effet niveau*"
      },
      {
        "type": "p",
        "text": "L’effet niveau compare les salaires mensuels entre deux dates données, souvent entre le 1er janvier et le 31 décembre."
      },
      {
        "type": "p",
        "text": "L’effet niveau prend en compte les augmentations de salaire en utilisant les indices :"
      },
      {
        "type": "p",
        "text": "•Effet niveau N = 102,313 / 100 = 1,02313"
      },
      {
        "type": "p",
        "text": "•Effet niveau N = + 2,31 %"
      },
      {
        "type": "p",
        "text": "Soit une augmentation de 2,31 % entre janvier et décembre N."
      },
      {
        "type": "p",
        "text": "**Remarque***Effet masse*"
      },
      {
        "type": "p",
        "text": "L’effet masse est l’évolution de la masse salariale d’un exercice par rapport à la masse de l’exercice précédent."
      },
      {
        "type": "p",
        "text": "L’effet de masse prend en compte deux années."
      },
      {
        "type": "p",
        "text": "En N–1, il n’y a pas eu d’augmentation."
      },
      {
        "type": "p",
        "text": "Si on raisonne en indices, la masse salariale de N–1 s’établit à 12 × 100 = 1 200"
      },
      {
        "type": "p",
        "text": "Sur l’année N :"
      },
      {
        "type": "p",
        "text": "3 mois à 100300,00"
      },
      {
        "type": "p",
        "text": "4 mois à 101404,00"
      },
      {
        "type": "p",
        "text": "5 mois à 102,31511,55"
      },
      {
        "type": "p",
        "text": "Total1 215,55"
      },
      {
        "type": "p",
        "text": "Effet de masse = 1 215,5 / 1 200 = 1,012958333"
      },
      {
        "type": "p",
        "text": "Soit une augmentation de 1,2958 %"
      },
      {
        "type": "p",
        "text": "**Remarque***Effet report*"
      },
      {
        "type": "p",
        "text": "L’effet report représente l’incidence des augmentations de salaire d’un exercice par rapport à l’exercice suivant."
      },
      {
        "type": "p",
        "text": "Ici, on souhaite mesurer l’effet report de N sur N+1."
      },
      {
        "type": "p",
        "text": "Effet report = ((Salaire de décembre N) × 12) / (Salaire mensuel moyen de N)"
      },
      {
        "type": "p",
        "text": "Effet report = (102,31 × 12) / 1 216 = 1,010"
      },
      {
        "type": "p",
        "text": "**Remarque***Vérification de la relation entre les effets niveau, report et masse*"
      },
      {
        "type": "p",
        "text": "Effet niveau= Effet masse × Effet report"
      },
      {
        "type": "p",
        "text": "= 1,0129 % × 1,0100 = 1,023"
      },
      {
        "type": "p",
        "text": "On retrouve bien l’effet niveau."
      },
      {
        "type": "p",
        "text": "**5. Rédiger une note de synthèse sur la politique salariale.**"
      },
      {
        "type": "p",
        "text": "L’entreprise Lanz appartient à un secteur d’activité très dynamique en forte croissance. Son avantage concurrentiel majeur est établi sur les capacités techniques des salariés. Les profils recherchés possèdent des compétences techniques particulières."
      },
      {
        "type": "p",
        "text": "La gestion des ressources humaines de Lanz se doit d’élargir son champ d’action en essayant d’évaluer et d’analyser aussi bien la dimension quantitative des coûts des ressources humaines que la dimension qualitative des compétences, des comportements des acteurs et du climat social de l’organisation. Si Lanz souhaite éviter un fort turnover, elle n’a pas d’autres choix que d’accorder d’importantes augmentations de salaire."
      },
      {
        "type": "p",
        "text": "L’évolution de la masse salariale précédemment étudiée traduit le fort niveau de croissance de l’entreprise. Aucune hausse des effectifs n’a été prise en compte ici. Cependant, pour ne pas perdre les collaborateurs actuels, il a fallu renforcer la structure professionnelle en accordant une augmentation des salaires de 1 % en avril N et de 1,30 % en août N. Cette hausse peut apparaître comme maîtrisée."
      },
      {
        "type": "p",
        "text": "Pour motiver et fidéliser les jeunes recrues de la société Lanz, il pourrait être pertinent d’ajouter des éléments de rémunération individuelle (ex. : intéressement, actionnariat salarié) renforçant l’effet d’appartenance."
      },
      {
        "type": "p",
        "text": "L’analyse montre néanmoins des limites puisqu’aucun accroissement des effectifs n’a été pris en compte."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Boulangerie Épi d’Or**"
      },
      {
        "type": "p",
        "text": "**1. Coût préétabli de la farine**"
      },
      {
        "type": "p",
        "text": "Pour 10 000 baguettes : quantité préétablie = 10 000 × 0,25 = 2 500 kg ; coût préétabli = 2 500 × 0,80 = 2 000,00 €."
      },
      {
        "type": "p",
        "text": "**2. Écart global sur farine**"
      },
      {
        "type": "p",
        "text": "Coût réel = 2 600 × 0,75 = 1 950,00 €. Écart global = réel − préétabli = 1 950 − 2 000 = − 50,00 € : écart favorable (le coût réel est inférieur au coût prévu)."
      },
      {
        "type": "p",
        "text": "**3. Décomposition et interprétation**"
      },
      {
        "type": "table",
        "headers": [
          "**Sous-écart**",
          "**Calcul**",
          "**Montant**",
          "**Sens**"
        ],
        "rows": [
          [
            "**Écart sur quantité**",
            "(2 600 − 2 500) × 0,80",
            "+ 80,00 €",
            "défavorable"
          ],
          [
            "**Écart sur prix**",
            "(0,75 − 0,80) × 2 600",
            "− 130,00 €",
            "favorable"
          ],
          [
            "**Écart global**",
            "",
            "**− 50,00 €**",
            "**favorable**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La boulangerie a surconsommé de la farine (100 kg de plus que le standard, soit + 80 € défavorable), mais ce dépassement est plus que compensé par un prix d’achat inférieur au prévu (− 130 € favorable). Le gain sur le prix masque une dérive sur les quantités qu’il faudrait surveiller (pertes, réglages)."
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Menuiserie Cadence**"
      },
      {
        "type": "p",
        "text": "**1. Coûts préétablis pour la production réelle**"
      },
      {
        "type": "p",
        "text": "Bois : 2 000 × 4 = 8 000 kg × 5 = 40 000,00 €. Main-d’œuvre directe : 2 000 × 1,5 = 3 000 h × 18 = 54 000,00 €."
      },
      {
        "type": "p",
        "text": "**2. Écart sur bois**"
      },
      {
        "type": "table",
        "headers": [
          "**Sous-écart**",
          "**Calcul**",
          "**Montant**",
          "**Sens**"
        ],
        "rows": [
          [
            "**Écart sur quantité**",
            "(8 400 − 8 000) × 5",
            "+ 2 000,00 €",
            "défavorable"
          ],
          [
            "**Écart sur prix**",
            "(4,80 − 5,00) × 8 400",
            "− 1 680,00 €",
            "favorable"
          ],
          [
            "**Écart global sur bois**",
            "**40 320 − 40 000**",
            "**+ 320,00 €**",
            "**défavorable**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Écart sur main-d’œuvre directe**"
      },
      {
        "type": "table",
        "headers": [
          "**Sous-écart**",
          "**Calcul**",
          "**Montant**",
          "**Sens**"
        ],
        "rows": [
          [
            "**Écart sur temps**",
            "(2 900 − 3 000) × 18",
            "− 1 800,00 €",
            "favorable"
          ],
          [
            "**Écart sur taux**",
            "(19 − 18) × 2 900",
            "+ 2 900,00 €",
            "défavorable"
          ],
          [
            "**Écart global sur MOD**",
            "**55 100 − 54 000**",
            "**+ 1 100,00 €**",
            "**défavorable**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**4. Commentaire**"
      },
      {
        "type": "p",
        "text": "Sur le bois, la hausse des quantités consommées (+ 2 000 €) l’emporte sur un prix d’achat plus favorable (− 1 680 €) : l’écart global reste défavorable (+ 320 €), signe d’un gaspillage matière. Sur la main-d’œuvre, l’atelier a été plus rapide que prévu (100 heures gagnées, − 1 800 € favorable) mais à un taux horaire plus élevé (+ 2 900 € défavorable, heures supplémentaires ou personnel plus qualifié) : l’écart global est défavorable (+ 1 100 €). Les deux postes appellent des actions distinctes — maîtrise des consommations d’un côté, du coût horaire de l’autre."
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Plastimold**"
      },
      {
        "type": "p",
        "text": "**1. Budget flexible et coût standard de l’unité d’œuvre**"
      },
      {
        "type": "p",
        "text": "Budget flexible : y = 60 000 + 8 × (nombre d’heures-machine). Pour l’activité normale de 5 000 h : budget = 60 000 + 40 000 = 100 000 €. Coût standard de l’unité d’œuvre = 100 000 / 5 000 = 20 € par heure, soit 12 € de charges fixes (60 000 / 5 000) et 8 € de charges variables. Coût standard par pièce = 0,5 h × 20 = 10 €."
      },
      {
        "type": "p",
        "text": "**2. Écart global sur charges indirectes**"
      },
      {
        "type": "p",
        "text": "Activité standard pour 9 000 pièces = 9 000 × 0,5 = 4 500 h. Coût préétabli = 4 500 × 20 = 90 000 €. Charges indirectes réelles = 98 000 €. Écart global = 98 000 − 90 000 = + 8 000,00 € (défavorable)."
      },
      {
        "type": "p",
        "text": "**3. Décomposition en trois sous-écarts**"
      },
      {
        "type": "p",
        "text": "Budget flexible pour l’activité réelle (4 700 h) = 60 000 + 8 × 4 700 = 97 600 €. Charges imputées à l’activité réelle = 4 700 × 20 = 94 000 €."
      },
      {
        "type": "table",
        "headers": [
          "**Sous-écart**",
          "**Calcul**",
          "**Montant**",
          "**Sens**"
        ],
        "rows": [
          [
            "**Écart sur budget**",
            "98 000 − 97 600",
            "+ 400,00 €",
            "défavorable"
          ],
          [
            "**Écart sur activité**",
            "97 600 − 94 000",
            "+ 3 600,00 €",
            "défavorable"
          ],
          [
            "**Écart sur rendement**",
            "94 000 − 90 000",
            "+ 4 000,00 €",
            "défavorable"
          ],
          [
            "**Écart global**",
            "",
            "**+ 8 000,00 €**",
            "**défavorable**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’écart sur budget (+ 400 €) mesure le surcoût propre des charges à activité donnée : faible, la consommation de ressources est maîtrisée. L’écart sur activité (+ 3 600 €) traduit une sous-activité : avec 4 700 h contre 5 000 h normales, les charges fixes sont sous-absorbées (coût de chômage = 60 000 × 300 / 5 000). L’écart sur rendement (+ 4 000 €) révèle une moindre efficacité : il a fallu 4 700 h pour une production qui n’en justifiait que 4 500 (200 h de trop × 20 €). Les leviers sont donc le remplissage de l’atelier et le rendement de la production."
      },
      {
        "type": "p",
        "text": "**4. Écart sur chiffre d’affaires**"
      },
      {
        "type": "table",
        "headers": [
          "**Sous-écart**",
          "**Calcul**",
          "**Montant**",
          "**Sens**"
        ],
        "rows": [
          [
            "**Écart sur prix**",
            "(26 − 25) × 9 000",
            "+ 9 000,00 €",
            "favorable"
          ],
          [
            "**Écart sur quantité**",
            "(9 000 − 10 000) × 25",
            "− 25 000,00 €",
            "défavorable"
          ],
          [
            "**Écart sur chiffre d’affaires**",
            "**234 000 − 250 000**",
            "**− 16 000,00 €**",
            "**défavorable**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**5. Synthèse**"
      },
      {
        "type": "p",
        "text": "La période est globalement défavorable. Côté charges, l’atelier supporte 8 000 € d’écart, dont l’essentiel tient à la sous-activité (3 600 €) et à un rendement dégradé (4 000 €) plutôt qu’à une dérive des prix de ressources (400 €). Côté ventes, la hausse du prix (+ 9 000 €) n’a pas compensé la chute des volumes (− 25 000 €), d’où un chiffre d’affaires en recul de 16 000 € : la baisse des quantités vendues explique à la fois le manque à gagner commercial et la sous-activité de l’atelier. Les deux diagnostics convergent : le problème central est le niveau des ventes. Les pistes prioritaires sont donc commerciales (relancer la demande, ajuster l’offre) ; en parallèle, un travail sur le rendement de l’atelier et, si la baisse des volumes se confirme, un ajustement des capacités permettraient de réduire le coût de sous-activité."
      }
    ]
  },
  {
    "id": "ex10",
    "label": "Cas",
    "title": "société Sportgol",
    "difficulty": 3,
    "durationMin": 40,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "La société Sportgol produit des tentes."
      },
      {
        "type": "p",
        "text": "Le directeur commercial a construit un budget des ventes en volume et en valeur. Il souhaite analyser les écarts sur chiffre d’affaires du mois de janvier N+1."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Rédiger une note de synthèse sur les écarts calculés du mois de janvier N+1.*"
      },
      {
        "type": "p",
        "text": "**Document**"
      },
      {
        "type": "p",
        "text": "Au cours du mois de janvier N+1, le logiciel comptable a comptabilisé 32 289 € de chiffre d’affaires et le magasin a relevé des sorties de stock pour 687 tentes."
      },
      {
        "type": "p",
        "text": "Le chiffre d’affaires budgété est de 716 tentes, pour un chiffre d’affaires de 35 800 € (prix moyen de 50 €)."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Boulangerie Épi d’Or**"
      },
      {
        "type": "p",
        "text": "La Boulangerie Épi d’Or a produit 10 000 baguettes au cours du mois. Le coût préétabli d’une baguette prévoit 0,25 kg de farine à 0,80 € le kg. Dans les faits, la production a consommé 2 600 kg de farine achetés 0,75 € le kg."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Calculer le coût préétabli de la farine pour la production réelle."
      },
      {
        "type": "p",
        "text": "2. Calculer l’écart global sur farine et préciser son sens (favorable ou défavorable)."
      },
      {
        "type": "p",
        "text": "3. Décomposer cet écart en écart sur quantité et écart sur prix, puis les interpréter."
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Menuiserie Cadence**"
      },
      {
        "type": "p",
        "text": "La Menuiserie Cadence a fabriqué 2 000 chaises. Les coûts directs préétablis, par chaise, sont les suivants : bois, 4 kg à 5 € le kg ; main-d’œuvre directe, 1,5 heure à 18 € l’heure."
      },
      {
        "type": "p",
        "text": "Pour la production réelle, on a relevé : bois, 8 400 kg à 4,80 € le kg ; main-d’œuvre directe, 2 900 heures à 19 € l’heure."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Calculer les coûts préétablis du bois et de la main-d’œuvre directe pour la production réelle."
      },
      {
        "type": "p",
        "text": "2. Calculer l’écart sur bois et le décomposer en écart sur quantité et écart sur prix."
      },
      {
        "type": "p",
        "text": "3. Calculer l’écart sur main-d’œuvre directe et le décomposer en écart sur temps et écart sur taux."
      },
      {
        "type": "p",
        "text": "4. Commenter les sous-écarts obtenus."
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Plastimold**"
      },
      {
        "type": "p",
        "text": "La société Plastimold suit les charges indirectes d’un atelier au moyen d’un budget flexible. Pour une activité normale de 5 000 heures-machine (correspondant à une production normale de 10 000 pièces, soit 0,5 heure par pièce), les charges indirectes budgétées comprennent 60 000 € de charges fixes et 8 € de charges variables par heure-machine."
      },
      {
        "type": "p",
        "text": "Au cours de la période, l’atelier a produit 9 000 pièces en 4 700 heures-machine, pour des charges indirectes réelles de 98 000 €."
      },
      {
        "type": "p",
        "text": "Sur le plan commercial, il était prévu de vendre 10 000 pièces à 25 € l’unité ; il en a été vendu 9 000 à 26 € l’unité."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Établir le budget flexible et calculer le coût standard de l’unité d’œuvre (part fixe et part variable)."
      },
      {
        "type": "p",
        "text": "2. Calculer l’écart global sur charges indirectes pour la production réelle."
      },
      {
        "type": "p",
        "text": "3. Décomposer cet écart en écart sur budget, écart sur activité et écart sur rendement, et interpréter chacun."
      },
      {
        "type": "p",
        "text": "4. Calculer l’écart sur chiffre d’affaires et le décomposer en écart sur prix et écart sur quantité."
      },
      {
        "type": "p",
        "text": "5. Rédiger une brève synthèse sur la performance du centre et proposer des pistes d’action."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur les écarts calculés"
      },
      {
        "type": "p",
        "text": "**Rédiger une note de synthèse sur les écarts calculés du mois de janvier N+1.**"
      },
      {
        "type": "p",
        "text": "Chiffre d’affaires réel = 687 tentes pour un chiffre d’affaires de 32 289 € (prix moyen = 47)"
      },
      {
        "type": "p",
        "text": "Chiffre d’affaires budgété= 716 tentes pour un chiffre d’affaires de 35 800 € (prix moyen = 50)"
      },
      {
        "type": "p",
        "text": "Écart total = – 3 511 € qui se décompose en :"
      },
      {
        "type": "p",
        "text": "– Écart sur prix = (47 € – 50 €) × 687 tentes = – 2 061 défav."
      },
      {
        "type": "p",
        "text": "– Écart sur volume = (687 – 716) × 50 € = – 1 450 défav."
      },
      {
        "type": "p",
        "text": "L’écart global est défavorable (– 3 511), de l’ordre de 10 %, ce qui est important. Aucun élément du budget n’a été respecté, les prix sont inférieurs de 3 € en moyenne à ceux prévus, soit 6 % du prix prévu, et les volumes n’ont pas été atteints pour 4 %. En un mot, l’année commence mal."
      }
    ]
  }
];
