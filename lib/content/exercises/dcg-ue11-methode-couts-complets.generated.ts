// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A1",
    "title": "CSR Cakes",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise CSR Cakes est spécialisée dans la fabrication de cupcakes. Elle commercialise un nouveau produit, « CupSaléBio », constitué de trois ingrédients principaux (jambon, lait et courgettes). Après traitement, le produit résultant est immédiatement conditionné dans deux types de boîtes : un conditionnement de 400 g et un conditionnement de 800 g."
      },
      {
        "type": "p",
        "text": "Dans un premier temps, le jambon est préparé. Cette préparation fait apparaître 2 % de déchets de découpe qui doivent être évacués pour un coût de 2 € le kg. Une fois préparé, le jambon est mélangé aux autres ingrédients et mis en cuisson : la cuisson fait perdre 10 % du poids global des matières premières utilisées. Le mode de fabrication permet de réaliser l’ensemble des travaux dans un même laboratoire. Le produit est stocké avant d’être vendu."
      },
      {
        "type": "p",
        "text": "Les seules charges directes de la période concernent les achats de matières premières :"
      },
      {
        "type": "ul",
        "items": [
          "Jambon : 300 000 kg pour 1 140 000 €",
          "Lait : 200 000 kg à 89 € les 100 kg",
          "Courgettes : 125 000 kg à 220 € les 100 kg"
        ]
      },
      {
        "type": "p",
        "text": "Du compte de résultat et pour la même période sont extraites les données suivantes :"
      },
      {
        "type": "ul",
        "items": [
          "Services extérieurs : 115 000 €",
          "Impôts, taxes et versements assimilés : 100 500 €",
          "Charges de personnel : 240 000 €",
          "Charges financières : 118 000 €",
          "Charges exceptionnelles : 52 000 €",
          "Dotations aux amortissements : 93 800 €"
        ]
      },
      {
        "type": "p",
        "text": "Le tableau de répartition des charges indirectes est le suivant :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Total**",
          "**Approvisionnement**",
          "**Fabrication**",
          "**Conditionnement**",
          "**Distribution**"
        ],
        "rows": [
          [
            "**Répartition secondaire**",
            "667 300",
            "42 125",
            "418 275",
            "103 125",
            "103 775"
          ],
          [
            "**Nature unité d’œuvre**",
            "–",
            "La tonne de matières achetées",
            "La tonne de produits obtenus",
            "1 000 boîtes conditionnées",
            "1 000 € de CAHT"
          ]
        ]
      },
      {
        "type": "p",
        "text": "En début de mois, les stocks initiaux représentent :"
      },
      {
        "type": "ul",
        "items": [
          "Jambon : 10 000 kg pour un montant global de 40 100 €",
          "Lait : 7 tonnes pour un montant de 6 412 €",
          "Courgettes : 15 tonnes pour un montant de 33 955 €",
          "Plats en boîtes de 400 g : 24 500 unités pour un montant global de 20 815 €",
          "Plats en boîtes de 800 g : 22 000 unités pour un montant global de 32 780 €"
        ]
      },
      {
        "type": "p",
        "text": "Les consommations de matières premières de la période considérée sont les suivantes : 300 000 kg de jambon, 160 000 kg de lait et 96 000 kg de courgettes. Le coût des boîtes livrées en juste à temps est de 0,10 € pour les 400 g et 0,16 € pour les 800 g."
      },
      {
        "type": "p",
        "text": "Il a été produit 137 500 boîtes de 400 g et 550 000 boîtes de 800 g."
      },
      {
        "type": "p",
        "text": "Les ventes de la période se sont élevées à 150 000 boîtes de 400 g au prix de 2,50 € la boîte et 529 000 boîtes de 800 g au prix de 4,90 € la boîte."
      },
      {
        "type": "p",
        "text": "**Calculer le coût de revient des deux produits selon la méthode des centres d’analyse.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Étapes 1 et 2 — Schéma de production et flux (quantités)**"
      },
      {
        "type": "p",
        "text": "**Étape 3 — Choix des charges à intégrer**"
      },
      {
        "type": "p",
        "text": "Les charges directes ne sont que les achats de MP. Les charges indirectes = total des charges du compte de résultat diminué des charges exceptionnelles : 719 300 − 52 000 = 667 300 €."
      },
      {
        "type": "p",
        "text": "**Étape 4 — Traitement des charges indirectes (tableau de répartition)**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Total**",
          "**Approv.**",
          "**Fabrication**",
          "**Conditionn.**",
          "**Distribution**"
        ],
        "rows": [
          [
            "**Répartition secondaire**",
            "667 300",
            "42 125",
            "418 275",
            "103 125",
            "103 775"
          ],
          [
            "**Nature de l'UO**",
            "",
            "tonne de MP achetée",
            "tonne de produits obtenus",
            "1 000 boîtes cond.",
            "1 000 € de CAHT"
          ],
          [
            "**Nombre d'UO**",
            "",
            "625",
            "531",
            "687,5",
            "2 967,1"
          ],
          [
            "**Coût d'unité d'œuvre**",
            "",
            "**67,4**",
            "**845**",
            "**150**",
            "**35**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "*625 = 300+200+125 t achetées · 531 t de produits obtenus · 687,5 = (137 500+550 000)/1 000 · 2 967,1 = CAHT (2 967 100 €)/1 000.*"
      },
      {
        "type": "p",
        "text": "**Étape 5 — Coût d'achat des matières premières (en tonnes)**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Jambon**",
          "**Lait**",
          "**Courgettes**"
        ],
        "rows": [
          [
            "Qté",
            "CU",
            "Mt",
            "Qté",
            "CU",
            "Mt",
            "Qté",
            "CU",
            "Mt"
          ],
          [
            "**Achat de MP**",
            "300",
            "3 800",
            "1 140 000",
            "200",
            "890",
            "178 000",
            "125",
            "2 200",
            "275 000"
          ],
          [
            "**Centre approvisionnement**",
            "300",
            "67,4",
            "20 220",
            "200",
            "67,4",
            "13 480",
            "125",
            "67,4",
            "8 425"
          ],
          [
            "**Coût d'achat des matières**",
            "**300**",
            "**3 867,4**",
            "**1 160 220**",
            "**200**",
            "**957,4**",
            "**191 480**",
            "**125**",
            "**2 267,4**",
            "**283 425**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Étape 6 — Comptes de stock des matières premières (CUMP, en tonnes)**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Jambon**",
          "**Lait**",
          "**Courgettes**"
        ],
        "rows": [
          [
            "Qté",
            "CU",
            "Mt",
            "Qté",
            "CU",
            "Mt",
            "Qté",
            "CU",
            "Mt"
          ],
          [
            "**Stock initial**",
            "10",
            "4 010",
            "40 100",
            "7",
            "916",
            "6 412",
            "15",
            "2 263,6",
            "33 955"
          ],
          [
            "**Achats de la période**",
            "300",
            "3 867,4",
            "1 160 220",
            "200",
            "957,4",
            "191 480",
            "125",
            "2 267,4",
            "283 425"
          ],
          [
            "**Total**",
            "**310**",
            "**3 872**",
            "**1 200 320**",
            "**207**",
            "**956**",
            "**197 892**",
            "**140**",
            "**2 267**",
            "**317 380**"
          ],
          [
            "**Consommations**",
            "300",
            "3 872",
            "1 161 600",
            "160",
            "956",
            "152 960",
            "96",
            "2 267",
            "217 632"
          ],
          [
            "**Stock final**",
            "10",
            "3 872",
            "38 720",
            "47",
            "956",
            "44 932",
            "44",
            "2 267",
            "99 748"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Étape 7 — Coût de production des produits finis**"
      },
      {
        "type": "p",
        "text": "**Coût de fabrication d'un kilo de produits finis :**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Quantité**",
          "**Coût unit.**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Charges directes — Jambon**",
            "300 000",
            "3,872",
            "1 161 600"
          ],
          [
            "**Charges directes — Lait**",
            "160 000",
            "0,956",
            "152 960"
          ],
          [
            "**Charges directes — Courgettes**",
            "96 000",
            "2,267",
            "217 632"
          ],
          [
            "**Charges indirectes — Fabrication**",
            "531",
            "845",
            "448 695"
          ],
          [
            "**Charges de la période**",
            "",
            "",
            "1 980 887"
          ],
          [
            "**Coût d'évacuation des déchets (300 000 − 294 000)**",
            "6 000",
            "2",
            "+ 12 000"
          ],
          [
            "**Coût de production**",
            "**495 000**",
            "**4,002**",
            "**1 962 467**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coût d'une boîte conditionnée**(137 500 × 0,400 kg = 55 000 kg ; 550 000 × 0,800 kg = 440 000 kg) :"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Boîtes 400 g**",
          "**Boîtes 800 g**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unit.",
            "Montant",
            "Quantité",
            "Coût unit.",
            "Montant"
          ],
          [
            "**Charges directes — Cupcakes (préparation)**",
            "55 000",
            "4,002",
            "220 100",
            "440 000",
            "4,002",
            "1 760 880"
          ],
          [
            "**Charges directes — Boîtes**",
            "137 500",
            "0,10",
            "13 750",
            "550 000",
            "0,16",
            "88 000"
          ],
          [
            "**Charges indirectes — Conditionnement**",
            "137,5",
            "150",
            "20 625",
            "550",
            "150",
            "82 500"
          ],
          [
            "**Coût d'un cupcake conditionné**",
            "**137 500**",
            "**1,8507**",
            "**254 475**",
            "**550 000**",
            "**3,5116**",
            "**1 931 380**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Étape 8 — Inventaire permanent des stocks de produits finis**"
      },
      {
        "type": "table",
        "headers": [
          "**Stock de boîtes**",
          "**Boîtes 400 g**",
          "**Boîtes 800 g**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unit.",
            "Montant",
            "Quantité",
            "Coût unit.",
            "Montant"
          ],
          [
            "**Stock initial**",
            "24 500",
            "0,8496",
            "20 815",
            "22 000",
            "1,49",
            "32 780"
          ],
          [
            "**Production**",
            "137 500",
            "1,8507",
            "254 471",
            "550 000",
            "3,5116",
            "1 931 380"
          ],
          [
            "**Total (CUMP)**",
            "**162 000**",
            "**1,700**",
            "**275 286**",
            "**572 000**",
            "**3,434**",
            "**1 964 160**"
          ],
          [
            "**Ventes**",
            "150 000",
            "1,700",
            "253 050",
            "529 000",
            "3,434",
            "1 816 586"
          ],
          [
            "**Stock final**",
            "12 000",
            "1,700",
            "22 236",
            "43 000",
            "3,434",
            "147 662"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Étapes 9 et 10 — Coûts hors production et coût de revient**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Boîtes 400 g**",
          "**Boîtes 800 g**"
        ],
        "rows": [
          [
            "Quantité",
            "Coût unit.",
            "Montant",
            "Quantité",
            "Coût unit.",
            "Montant"
          ],
          [
            "**Coût de production des produits vendus**",
            "150 000",
            "1,700",
            "255 000",
            "529 000",
            "3,434",
            "1 816 586"
          ],
          [
            "**Charges indirectes de distribution**",
            "375",
            "35",
            "13 125",
            "2 592,1",
            "35",
            "90 723"
          ],
          [
            "**Coût de revient**",
            "**150 000**",
            "**1,7875**",
            "**268 125**",
            "**529 000**",
            "**3,605**",
            "**1 907 309**"
          ],
          [
            "**Ventes**",
            "150 000",
            "2,50",
            "375 000",
            "529 000",
            "4,90",
            "2 592 100"
          ],
          [
            "**Résultat analytique**",
            "**150 000**",
            "**0,7125**",
            "**106 875**",
            "**529 000**",
            "**1,2945**",
            "**684 791**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Résultat analytique global = 106 875 + 684 791 = 791 666 €**, soit 26,7 % du chiffre d'affaires (2 967 100 €)."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A2",
    "title": "Fonderie du lac",
    "statement": [
      {
        "type": "p",
        "text": "La société Fonderie du lac fabrique, à partir d’une seule matière première, deux produits : Fonte A dans l’atelier 1 et Fonte B dans l’atelier 2. Renseignements concernant le mois de janvier :"
      },
      {
        "type": "p",
        "text": "• Achats de matières premières : 13 000 unités pour 19 531 €."
      },
      {
        "type": "p",
        "text": "• Production terminée : 11 500 unités de Fonte A et 1 200 unités de Fonte B."
      },
      {
        "type": "p",
        "text": "• Ventes de produits : 10 800 unités de Fonte A à 7 € l’une et 1 600 unités de Fonte B à 15,25 € l’autre."
      },
      {
        "type": "p",
        "text": "• Stock au début du mois :"
      },
      {
        "type": "p",
        "text": "– matières premières : 4 000 unités pour 7 059 € ;"
      },
      {
        "type": "p",
        "text": "– produits Fonte A : 1 500 unités pour 8 135 € ;"
      },
      {
        "type": "p",
        "text": "– produits Fonte B : 900 unités pour 11 403 € ;"
      },
      {
        "type": "p",
        "text": "• Main-d’oeuvre directe : 1 180 heures dans l’atelier 1 et 310 heures dans l’atelier 2. Le coût horaire est de 15 €."
      },
      {
        "type": "p",
        "text": "• Consommation de matières premières : 11 800 unités dans l’atelier 1 ; 2 500 unités dans l’atelier 2."
      },
      {
        "type": "p",
        "text": "• Stock de fin de mois :"
      },
      {
        "type": "p",
        "text": "– matières premières : 2 550 unités ;"
      },
      {
        "type": "p",
        "text": "– produits Fonte A : 2 100 unités ;"
      },
      {
        "type": "p",
        "text": "– produits Fonte B : 500 unités ;"
      },
      {
        "type": "p",
        "text": "• Les totaux des répartitions primaires ainsi que les clés de répartition des centres auxiliaires vous sont fournis ci-après."
      },
      {
        "type": "table",
        "headers": [
          "**Totaux**",
          "**Prestations connexes**",
          "**Gestion matériel**",
          "**Approvisionnement**",
          "**Atelier 1**",
          "**Atelier 2**",
          "**Distribution**",
          "**Administration**"
        ],
        "rows": [
          [
            "50 738",
            "5 550",
            "3 300",
            "3 700",
            "21 750",
            "4 390",
            "11 250",
            "798"
          ],
          [
            "",
            "–",
            "20 %",
            "10 %",
            "50 %",
            "10 %",
            "10 %",
            "–"
          ],
          [
            "",
            "10 %",
            "–",
            "20 %",
            "40 %",
            "20 %",
            "10 %",
            "–"
          ],
          [
            "Nature des unités d’œuvre",
            "Unité de MP achetée",
            "HMOD",
            "HMOD",
            "100 € de ventes",
            "Coût de production des produits vendus"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Calculer le coût de revient des produits finis Fonte A et Fonte B en appliquant la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "**Intérêts et limites de la méthode de calcul**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "**Méthode***Lorsque la méthode des centres d’analyse est questionnée, vous devez être capable de porter un regard critique sur : – le choix des centres d’analyse (périmètre, pertinence, stabilité) ; – la pertinence des clés de répartition ; – la répartition primaire et secondaire des charges indirectes ; – le découpage du coût complet selon les processus de production, d’approvisionnement, de stockage, de production, de distribution, etc. ; – la simplicité du modèle (avantages et limites d’une représentation réaliste).*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer le coût de revient des produits finis Fonte A et Fonte B en appliquant la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "1. Finalisation du tableau de répartition des charges indirectes"
      },
      {
        "type": "p",
        "text": "Soient les prestations connexes (A) et la gestion des matériels (B) :"
      },
      {
        "type": "p",
        "text": "A = 5 550 + 10 % B"
      },
      {
        "type": "p",
        "text": "B = 3 300 + 20 % A"
      },
      {
        "type": "p",
        "text": "Résolution du système :"
      },
      {
        "type": "p",
        "text": "Système : A = 5 550 + 0,1 B"
      },
      {
        "type": "p",
        "text": "B = 3 300 + 0,2 A"
      },
      {
        "type": "p",
        "text": "Substitution de A dans la 2e équation :"
      },
      {
        "type": "p",
        "text": "B = 3 300 + 0,2 × (5 550 + 0,1 B)"
      },
      {
        "type": "p",
        "text": "B = 3 300 + 1 110 + 0,02 B"
      },
      {
        "type": "p",
        "text": "B = 4 410 + 0,02 B"
      },
      {
        "type": "p",
        "text": "0,98 B = 4 410"
      },
      {
        "type": "p",
        "text": "B = 4 500"
      },
      {
        "type": "p",
        "text": "D'où : A = 5 550 + 0,1 × 4 500 = 5 550 + 450 = 6 000"
      },
      {
        "type": "p",
        "text": "**Résultat : A = 6 000 ; B = 4 500**"
      },
      {
        "type": "table",
        "headers": [
          "**Comptes**",
          "**Total**",
          "**Prestations connexes**",
          "**Gestion matériel**",
          "**Approvisionnements**",
          "**Atelier 1**",
          "**Atelier 2**",
          "**Distribution**",
          "**Administration***"
        ],
        "rows": [
          [
            "50 738",
            "5 550",
            "3 300",
            "3 700",
            "21 750",
            "4 390",
            "11 250",
            "798"
          ],
          [
            "**Comptes de prestations connexesRépartition primaire « Gestion du matériel »**",
            "– 6 000450",
            "1 200– 4 500",
            "600900",
            "3 0001 800",
            "600900",
            "600450",
            ""
          ],
          [
            "**Total Répartition secondaire**",
            "0",
            "0",
            "5 200",
            "26 550",
            "5 890",
            "12 300",
            "798"
          ],
          [
            "**Nature des unités d’œuvre**",
            "Unité de MP achetée",
            "HMOD",
            "HMOD",
            "100 € de ventes",
            "Coût de production"
          ],
          [
            "**Nombre d’unités d’œuvre**",
            "13 000",
            "1 180",
            "310",
            "1 000",
            "82 132"
          ],
          [
            "**Coût de l’unité d’œuvre (Total Rép. sec./Nb UO)**",
            "0,40",
            "22,50",
            "19,00",
            "12,30",
            "0,009716"
          ],
          [
            "*** La colonne Administration n’est remplie que lorsque le coût de production est calculé.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Présentation des comptes de stocks évalués en CMUP"
      },
      {
        "type": "p",
        "text": "**Compte de stock Fonte A**"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quantité**",
          "**Coût unitaire**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Stock initialEntrées**",
            "1 50011 500",
            "5,425,77",
            "8 13566 316"
          ],
          [
            "**Total**",
            "13 000",
            "5,727",
            "74 451,00"
          ],
          [
            "**SortiesDiff. invent.Stock final**",
            "10 8001002 100",
            "5,7275,7275,727",
            "61 851,60572,7012 026,70"
          ],
          [
            "**Total**",
            "13 000",
            "5,727",
            "74 451,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compte de stock Fonte B**"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quantité**",
          "**Coût unitaire**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Stock initialEntrées**",
            "9001 200",
            "12,6812,81",
            "11 40315 215"
          ],
          [
            "**Total**",
            "2 100",
            "12,675",
            "26 618,00"
          ],
          [
            "**SortiesDiff. invent.Stock final**",
            "1 600–500",
            "12,675–12,675",
            "20 280,3806 337,62"
          ],
          [
            "**Total**",
            "2 100",
            "12,675",
            "26 618,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Calcul de tous les coûts nécessaires pour obtenir le coût de revient des produits finis A et B"
      },
      {
        "type": "p",
        "text": "**Coût d’achat des matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Matière M**"
        ],
        "rows": [
          [
            "Quantité",
            "Prix unitaire",
            "Montant"
          ],
          [
            "**Achats de matièresCharges indirectes d’approvisionnement**",
            "13 00013 000",
            "1,500,40",
            "19 5315 200"
          ],
          [
            "**Coût d’achat des matières**",
            "13 000",
            "1,90",
            "24 731"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compte de stocks de matières premières**"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quantité**",
          "**Coût unitaire**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Stock initialEntrées**",
            "4 00013 000",
            "1,7651,90",
            "7 05924 731"
          ],
          [
            "**Total**",
            "17 000",
            "1,87",
            "31 790"
          ],
          [
            "**SortiesDiff. inventaireStock final**",
            "14 3001502 550",
            "1,871,871,87",
            "26 7412804 769"
          ],
          [
            "**Total**",
            "17 000",
            "1,87",
            "31 790"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coût de production des produits A et B**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**"
        ],
        "rows": [
          [
            "Quantité",
            "Prix unitaire",
            "Montant",
            "Quantité",
            "Prix unitaire",
            "Montant"
          ],
          [
            "**Charges directes**"
          ],
          [
            "**Coût d’achat des matières**",
            "11 800",
            "1,87",
            "22 066",
            "2 500",
            "1,87",
            "4 675"
          ],
          [
            "**Main-d’œuvre directe**",
            "1 180",
            "15,00",
            "17 700",
            "310",
            "15,00",
            "4 650"
          ],
          [
            "**Charges indirectes**"
          ],
          [
            "**Atelier 1**",
            "1 180",
            "22,50",
            "26 550",
            "310",
            "19,00",
            "5 890"
          ],
          [
            "**Charges de production du mois**",
            "",
            "",
            "66 316",
            "",
            "",
            "15 215"
          ],
          [
            "**Coût de production**",
            "11 500",
            "5,77",
            "66 316",
            "1 200",
            "12,68",
            "15 215"
          ]
        ]
      },
      {
        "type": "p",
        "text": "4. Calcul du coût de revient"
      },
      {
        "type": "p",
        "text": "Le coût de revient se calcule sur les quantités vendues."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**"
        ],
        "rows": [
          [
            "Quantité",
            "Prix unitaire",
            "Montant",
            "Quantité",
            "Prix unitaire",
            "Montant"
          ],
          [
            "**Coût de productionCoût hors productionCoût de distribution**",
            "10 800756,0",
            "5,72712,30",
            "61 851,609 298,80",
            "1 600244,0",
            "12,67512,30",
            "20 280,383 001,20"
          ],
          [
            "**Quote-part des charges de structure**",
            "61 851,60",
            "0,009716",
            "600,95",
            "20 280,38",
            "0,009716",
            "197,05"
          ],
          [
            "**Coût de revient**",
            "10 800",
            "6,64",
            "71 751,35",
            "1 600",
            "14,67",
            "23 478,63"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Intérêts et limites de la méthode de calcul**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Lorsque la méthode des centres d’analyse est questionnée, vous devez être capable de porter un regard critique sur :"
      },
      {
        "type": "p",
        "text": "Le coût de production unitaire est repris à partir du compte de stocks des produits finis."
      },
      {
        "type": "p",
        "text": "**Méthode***–le choix des centres d’analyse (périmètre, pertinence, stabilité) ;*–la pertinence des clés de répartition ;–la répartition primaire et secondaire des charges indirectes ;–le découpage du coût complet selon les processus de production, d’approvisionnement, de stockage, de production, de distribution, etc. ;–la simplicité du modèle (avantages et limites d’une représentation réaliste) ;–le choix de la méthode de calcul de coût par rapport au contexte (simple ou complexe, stratégique ou opérationnel...)."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A3",
    "title": "CSR Cake",
    "statement": [
      {
        "type": "p",
        "text": "**À partir du calcul du coût de revient élaboré pour CSRCake, apprécier les intérêts et les limites de la méthode utilisée.**"
      },
      {
        "type": "p",
        "text": "**Argumentaire sur les résultats**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger un argumentaire afin de conseiller le décideur"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**À partir du calcul du coût de revient élaboré pour CRS Cakes, apprécier les intérêts et les limites de la méthode utilisée.**"
      },
      {
        "type": "p",
        "text": "La méthode de calcul des centres d’analyse cherche à affecter aux coûts des produits, l’ensemble des charges générées par l’activité. Nous avons affaire à un processus de transformation simple : des matières premières alimentaires qui sont transformées en plats cuisinés et conditionnées en boîtes de taille différente."
      },
      {
        "type": "p",
        "text": "Plusieurs points peuvent être analysés pour apprécier les intérêts et les limites de méthode :"
      },
      {
        "type": "p",
        "text": "•Les centres d’analyse proposés correspondent bien au processus de transformation des deux produits (centres principaux : approvisionnement, fabrication, conditionnement et distribution)."
      },
      {
        "type": "p",
        "text": "•Le découpage du coût complet est tout à fait représentatif du processus de transformation effectué par l’entreprise."
      },
      {
        "type": "p",
        "text": "•Les clés de répartition suscitent plus de limites : si l’affectation des charges directes ne pose pas de problème de traçabilité, l’imputation des charges indirectes est discutable. Une clé de répartition pertinente doit exprimer au mieux la réalité de la consommation des ressources par les produits. Ici, les clés de répartition choisies sont liées au volume oeuvré. L’activité de chaque centre est en lien avec le volume ; cependant, pour le conditionnement, la clé de répartition « unité de boîtes » ne tient pas compte de la taille des boîtes (la boîte de 800 g devrait valoir deux fois celle de 400 g), influant pourtant sur la consommation des ressources."
      },
      {
        "type": "p",
        "text": "•Le modèle choisi dans le contexte : la méthode paraît adaptée au processus industriel pour suivre la consommation des ressources et contrôler la productivité des hommes et des machines. En revanche, les résultats donnés par la méthode sont trop globaux et ne peuvent pas permettre une analyse de la structure précise des coûts."
      },
      {
        "type": "p",
        "text": "**Argumentaire sur les résultats**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger un argumentaire afin de conseiller le décideur• Une argumentation est comparable à une chaîne, les maillons étant formés par les arguments, lesquels peuvent notamment :"
      },
      {
        "type": "p",
        "text": "**Méthode***–apporter une preuve destinée à étayer une proposition ou, au contraire, à l’infirmer, à la rejeter ;*–apporter une preuve destinée à établir la justesse ou la véracité d’une proposition ;–réfuter une proposition, en apportant un refus partiel ou total à un argument précédent ;–expliquer une notion, légitimer une position ou une décision, valider un résultat.Un argumentaire vise à convaincre son destinataire du bien-fondé d’une analyse, d’une interprétation, d’une démarche intellectuelle.Il s’agit d’élaborer l’argumentaire puis de le rédiger en contextualisant :–trouver et collecter les idées, les éléments de preuve, les faits, les facteurs, les causes et les conséquences qui alimentent une situation, une organisation, un problème ;–ordonner les arguments et en structurer l’enchaînement afin de présenter le fil du raisonnement (plan de l’argumentaire) ;–rédiger l’argumentaire lui-même."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "A4",
    "title": "CSR Cake",
    "statement": [
      {
        "type": "p",
        "text": "**Méthode***Comme la note de synthèse ( chapitre 2), la structure de l’argumentaire doit partir du global pour atteindre le particulier (la « profitabilité » du produit).*"
      },
      {
        "type": "p",
        "text": "**Rédiger un argumentaire sur les coûts calculés pour aider le gestionnaire de CSR Cakes.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Rédiger un argumentaire sur les coûts calculés pour aider le gestionnaire de CSR Cakes.**"
      },
      {
        "type": "p",
        "text": "1. Reprendre le résultat global en montant absolu, en montant relatif (en pourcentage du chiffre d’affaires) et porter un jugement sur les résultats obtenus (très faible, faible, correct, satisfaisant, etc.)."
      },
      {
        "type": "p",
        "text": "L’entreprise CSR Cakes dégage un résultat positif global de 806 952 €, soit 27,2 % du chiffre d’affaires, ce qui traduit un excellent niveau de profitabilité."
      },
      {
        "type": "p",
        "text": "2. Analyser la structure du résultat global et la contribution de chacun des produits."
      },
      {
        "type": "p",
        "text": "Le résultat de l’entreprise est dégagé à 87 % par les boîtes de 800 g (685 k€) qui représentent également 87 % du chiffre d’affaires de l’entreprise. Les boîtes de 400 g contribuent également positivement au résultat de l’entreprise avec un résultat partiel de 107 k€."
      },
      {
        "type": "p",
        "text": "3. Analyser le travail pour chacun des produits de façon à expliquer la profitabilité de chacun. Retenir un ordre allant du plus profitable au moins profitable."
      },
      {
        "type": "p",
        "text": "La profitabilité des boîtes de 400 g est de 27 % tandis que celle des boîtes de 800 g est de 28,5 %. Ces deux niveaux de profitabilité sont similaires et de très bon niveau."
      },
      {
        "type": "p",
        "text": "4. Conclure sur les décisions à envisager et sur les limites de la méthode. Proposer une méthode pertinente répondant à la suppression éventuelle d’un produit."
      },
      {
        "type": "p",
        "text": "Compte tenu des résultats partiels obtenus par produit et des limites évoquées de la méthode, rien ne peut être proposé en matière d’arbitrage entre les deux produits. Pour pouvoir agir sur ce plan, vous devez au préalable vous assurer que la répartition des charges indirectes n’introduit pas un biais dans l’analyse ; les charges peuvent être imputées sur les boîtes de 400 g du fait de clés de répartition retenues non pertinentes sans respecter la réalité des consommations de ressources."
      },
      {
        "type": "p",
        "text": "De toute façon, seules les méthodes des coûts partiels, qui distinguent charges fixes et charges variables, apportent des réponses pertinentes à la gestion d’un portefeuille de produits."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex5",
    "label": "Cas",
    "title": "société Paltiv",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "La société Paltiv fabrique un seul produit fini, PF, à partir de deux matières premières,"
      },
      {
        "type": "p",
        "text": "MP1 et MP2. Le processus de fabrication conduit à l’obtention d’un sous-produit SP vendable après traitement et d’un déchet D, sans valeur, qu’il convient d’épurer avant évacuation pour éviter la pollution de l’environnement."
      },
      {
        "type": "p",
        "text": "**Quatre ateliers assurent cette production :**"
      },
      {
        "type": "p",
        "text": "• **Atelier A1 :** utilisation de la matière première MP1 pour obtenir le produit intermédiaire PI livré en continu (sans stockage) à l’atelier A2."
      },
      {
        "type": "p",
        "text": "• **Atelier A2 :** adjonction de la matière première MP2 au produit intermédiaire PI pour obtenir le produit fini PF ; cette opération donne naissance au sous-produit SP et au déchet D."
      },
      {
        "type": "p",
        "text": "• **Atelier A3 :** traitement du sous-produit SP pour le rendre commercialisable."
      },
      {
        "type": "p",
        "text": "• **Atelier A4 :** épuration chimique du déchet D avant évacuation par épandage canalisé, au fur et à mesure de la production, donc sans stockage."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion souhaite connaître les coûts à chaque stade et le résultat analytique des produits. Il se questionne également sur la qualité des unités d’oeuvre retenues par son prédécesseur. Il vous demande de lui proposer d’autres unités d’oeuvre pour le centre d’approvisionnement."
      },
      {
        "type": "p",
        "text": "**Données d’inventaire au 1er janvier de l’exercice**"
      },
      {
        "type": "p",
        "text": "• MP1 : 500 kg à 8,10 €/kg"
      },
      {
        "type": "p",
        "text": "• MP2 : 900 kg à 50,40 €/kg"
      },
      {
        "type": "p",
        "text": "• Produit fini PF : 184 unités à 120 €/unité"
      },
      {
        "type": "p",
        "text": "• Sous-produit SP : 80 kg à 200 €/kg"
      },
      {
        "type": "p",
        "text": "• Déchet D : néant"
      },
      {
        "type": "p",
        "text": "**Achats de l’exercice**"
      },
      {
        "type": "p",
        "text": "• Matière MP1 : 1 500 kg à 7,80 €/kg"
      },
      {
        "type": "p",
        "text": "• Matière MP2 : 2 500 kg à 51,40 €/kg"
      },
      {
        "type": "p",
        "text": "**Consommations de l’exercice**"
      },
      {
        "type": "p",
        "text": "• Matière MP1 : 1 400 kg"
      },
      {
        "type": "p",
        "text": "• Matière MP2 : 3 200 kg"
      },
      {
        "type": "p",
        "text": "• Eau (pour évacuer D) : 142,5 m3 pour une valeur de 270,50 €"
      },
      {
        "type": "p",
        "text": "• Produit chimique : 45 kg à 6,50 €/kg"
      },
      {
        "type": "p",
        "text": "**Main-d’oeuvre directe utilisée**"
      },
      {
        "type": "p",
        "text": "• Atelier A1 : 510 heures à 48,50 €/h"
      },
      {
        "type": "p",
        "text": "• Atelier A2 : 1 500 heures à 51,00 €/h"
      },
      {
        "type": "p",
        "text": "• Atelier A3 : 605 heures à 52,40 €/h"
      },
      {
        "type": "p",
        "text": "• Atelier A4 : 169 heures à 45,00 €/h"
      },
      {
        "type": "p",
        "text": "• Distribution : 210 heures à 62,00 €/h"
      },
      {
        "type": "p",
        "text": "**Le tableau de répartition des charges indirectes est fourni en annexe.**"
      },
      {
        "type": "p",
        "text": "**Production de l’exercice**"
      },
      {
        "type": "p",
        "text": "• Produit PF : 2 660 unités"
      },
      {
        "type": "p",
        "text": "• Sous-produit : 250 kg"
      },
      {
        "type": "p",
        "text": "• Déchet D : 142,50 m3"
      },
      {
        "type": "p",
        "text": "**Ventes de l’exercice**"
      },
      {
        "type": "p",
        "text": "• Produit PF : 2 800 unités à 150 €/l’unité"
      },
      {
        "type": "p",
        "text": "• Sous-produit SP : 270 kg à 208 €/kg"
      },
      {
        "type": "p",
        "text": "Données d’inventaire au 31 décembre"
      },
      {
        "type": "p",
        "text": "• Matière MP1 : 580 kg"
      },
      {
        "type": "p",
        "text": "• Matière MP2 : 205 kg"
      },
      {
        "type": "p",
        "text": "• Produit PF : 44 unités"
      },
      {
        "type": "p",
        "text": "• Sous-produit SP : 60 kg"
      },
      {
        "type": "p",
        "text": "• Déchet D : Néant"
      },
      {
        "type": "p",
        "text": "**Règles de valorisation retenues par l’entreprise**"
      },
      {
        "type": "p",
        "text": "Toutes les sorties de stock sont valorisées selon la méthode PEPS."
      },
      {
        "type": "p",
        "text": "• Il est admis que le coût de production du sous-produit SP à la sortie de l’atelier A3 est égal au prix de vente moyen sur le marché de ce sous-produit. Pour l’exercice concerné, l’entreprise a prévu et retenu un prix de 210 €/kg."
      },
      {
        "type": "p",
        "text": "• L’ensemble des charges de distribution est imputé uniquement sur les coûts du produit PF."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et résultats dans le contexte de l’entreprise Paltiv.**"
      },
      {
        "type": "p",
        "text": "**2. Rédiger unargumentaire pour le contrôleur de gestion sur la qualité des unités d’oeuvre, avec des propositions d’amélioration.**"
      },
      {
        "type": "p",
        "text": "**Tableau de répartition des charges indirectes**"
      },
      {
        "type": "table",
        "headers": [
          "**Charges**",
          "**Totaux**",
          "**Centres auxiliaires**",
          "**Centres principaux opérationnels**",
          "**Centre de structure**"
        ],
        "rows": [
          [
            "**Gestion du matériel**",
            "**Gestion du personnel**",
            "**Appro.**",
            "**Atelier 1**",
            "**Atelier 2**",
            "**Atelier 3**",
            "**Atelier 4**",
            "**Distrib.**",
            "**Administratif**"
          ],
          [
            "**Totaux primaires**",
            "100 350",
            "3 750",
            "4 600",
            "2 000",
            "40 000",
            "20 000",
            "15 000",
            "5 000",
            "3 000",
            "7 000"
          ],
          [
            "**• Gestion matériel**",
            "",
            "– 4 000",
            "400",
            "1 000",
            "800",
            "800",
            "200",
            "200",
            "600",
            "–"
          ],
          [
            "**• Gestion personnel**",
            "",
            "250",
            "– 5 000",
            "750",
            "1 250",
            "1 250",
            "250",
            "500",
            "500",
            "250"
          ],
          [
            "**Totaux secondaires**",
            "100 350",
            "0",
            "0",
            "3 750",
            "42 050",
            "22 050",
            "15 450",
            "5 700",
            "4 100",
            "7 250"
          ],
          [
            "**Nature UO**",
            "",
            "",
            "",
            "kg de MP achetée",
            "kg de MP1 consom.",
            "HMOD",
            "kg sous-produit S obtenu",
            "m³ de déchet D traité",
            "",
            ""
          ],
          [
            "**Nombre UO**",
            "",
            "",
            "",
            "4 000",
            "1 400",
            "1 500",
            "250",
            "142,5",
            "",
            ""
          ],
          [
            "**Coût UO**",
            "",
            "",
            "",
            "0,9375",
            "30,0357",
            "14,70",
            "61,80",
            "40,00",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "UO : unité d’œuvre ; MOD : main-d’œuvre directe ; HMOD : heures de main-d’œuvre directe."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et les limites des méthodes de calcul de coût afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts de production du produit intermédiaire (PI) et du produit final (PF) dans le contexte de l’entreprise Paltiv.**"
      },
      {
        "type": "p",
        "text": "Dans le contexte de cette entreprise, avec les informations données, il semble possible d’utiliser la méthode des coûts complets pour calculer les coûts de produits PF et du sous-produit SP."
      },
      {
        "type": "p",
        "text": "**Remarque***Coûts d’achat et comptes de stocks de matières premières*"
      },
      {
        "type": "p",
        "text": "Le calcul des coûts d’achat se présente ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**MP1**",
          "**MP2**"
        ],
        "rows": [
          [
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Charges directes :– Achats**",
            "1 500",
            "7,80",
            "11 700",
            "2 500",
            "51,40",
            "128 500"
          ],
          [
            "**Charges indirectes :– Approvisionnement**",
            "1 500",
            "0,9375",
            "1 406",
            "2 500",
            "0,9375",
            "2 344"
          ],
          [
            "**– Coût d’achat des MP**",
            "1 500",
            "8,74",
            "13 106",
            "2 500",
            "52,34",
            "130 844"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise Paltiv utilise la méthode PEPS pour valoriser ses sorties de stocks."
      },
      {
        "type": "p",
        "text": "Les comptes de stocks des deux matières premières se présentent ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "**Compte de stock MP1**"
        ],
        "rows": [
          [
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**",
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**"
          ],
          [
            "**Stock initialEntrées**",
            "5001 500",
            "8,108,74",
            "4 05013 110",
            "Sorties 1Sorties 2",
            "500900",
            "8,108,74",
            "4 0507 866"
          ],
          [
            "",
            "",
            "",
            "",
            "1 400",
            "",
            "11 916"
          ],
          [
            "",
            "",
            "",
            "Mali d’inventaireStock final",
            "20580",
            "8,748,74",
            "174,85 069,2"
          ],
          [
            "**Total**",
            "2 000",
            "–",
            "17 160",
            "Total",
            "2 000",
            "–",
            "17 160"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les coûts unitaires de stocks ont été amortis."
      },
      {
        "type": "table",
        "headers": [
          "**Compte de stock MP2**"
        ],
        "rows": [
          [
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**",
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**"
          ],
          [
            "**Stock initialEntrées**",
            "9002 500",
            "50,4052,34",
            "45 360130 850",
            "Sorties 1Sorties 2",
            "9002 300",
            "50,4052,34",
            "45 360120 382"
          ],
          [
            "**Boni d’inventaire**",
            "5",
            "52,34",
            "261,7",
            "Stock final",
            "3 200205",
            "52,34",
            "165 74210 729,7"
          ],
          [
            "**Total**",
            "3 405",
            "–",
            "176 471,7",
            "Total",
            "3 405",
            "–",
            "176 471,7"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coût de production du produit intermédiaire PI à l’atelier A1**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Charges directes :• MP1 consommée• Main-d’œuvre directeCharges indirectes :• Centre atelier A1**",
            "5009005101 400",
            "8,108,7448,5030,04",
            "4 0507 86624 73542 056"
          ],
          [
            "**Coût de production du produit PI**",
            "–",
            "–",
            "78 707"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Calcul du coût de production du produit PF et présentation de son compte de stock*"
      },
      {
        "type": "p",
        "text": "Sur la période, 2 660 unités de PF ont été terminées."
      },
      {
        "type": "p",
        "text": "•Calcul du coût d’élimination du déchet à la sortie de l’atelier A2"
      },
      {
        "type": "p",
        "text": "Le coût de l’atelier A4 est assimilable au coût d’élimination du déchet et viendra en augmentation du coût du produit principal."
      },
      {
        "type": "table",
        "headers": [
          "**Coût de l’épandage**"
        ],
        "rows": [
          [
            "**Charges directes**",
            "**Unité**",
            "**Q**",
            "**CU**",
            "**Montant**"
          ],
          [
            "**EauProduit chimiqueMain-d’œuvreCharges indirectesCentre atelier A4**",
            "m3kgh",
            "142,545169",
            "–6,50 €45,00 €",
            "270,50292,507 605,005 700,00"
          ],
          [
            "**Coût de l’épandage**",
            "m3",
            "142,5",
            "97,32 €",
            "13 868,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour mémoire, un déchet apparaît dans l’atelier A2 et doit être épuré chimiquement dans l’atelier A4, avant épandage."
      },
      {
        "type": "p",
        "text": "•Calcul du coût de production du sous-produit au sortir de l’atelier A2"
      },
      {
        "type": "p",
        "text": "Le prix de vente du marché est égal au coût de production du sous-produit à la sortie de l’atelier de transformation. Comme on connaît les charges spécifiques à cette transformation, on peut en déduire le coût de production à l’entrée de ce même atelier, ce qui revient à déterminer le coût de production à la sortie de l’atelier A2."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Prix de venteà déduire/Charges de l’atelier A3 :• main-d’œuvreCharges indirectes• atelier A3**",
            "250605",
            "210,0052,40",
            "52 500– 31 702– 15 450"
          ],
          [
            "**Coût de production du sous-produit SP à la sortie de l’atelier A2**",
            "–",
            "–",
            "= 5 348"
          ]
        ]
      },
      {
        "type": "p",
        "text": "C’est ce coût qui viendra en déduction du coût du produit principal."
      },
      {
        "type": "p",
        "text": "Le coût de production du produit PF devient :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Charges directesProduits PI consommés (coût de production)Matières MP2Main-d’œuvre directeCharges indirectesAtelier A2**",
            "9002 3001 5001 500",
            "50,4052,3451,0014,70",
            "78 70745 360120 38276 50022 050"
          ],
          [
            "**Total des charges de la période**",
            "–",
            "–",
            "342 999"
          ],
          [
            "**Coût de production du sous-produit SPCoût d’élimination du déchet D**",
            "",
            "",
            "– 5 34813 868"
          ],
          [
            "**Coût de production du produit PF**",
            "2 660",
            "132,15",
            "351 519"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Il faut ensuite présenter les comptes de stocks du produit PF et du sous-produit SP :"
      },
      {
        "type": "table",
        "headers": [
          "**Compte de stocks de produits finis (PF)**"
        ],
        "rows": [
          [
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**",
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**"
          ],
          [
            "**Stock initialEntrées**",
            "1842 660",
            "120,00132,15132,51",
            "22 080351 519352 491",
            "SortiesStock final",
            "1842 61644",
            "120,00132,15132,15",
            "22 080345 704,405 814,60"
          ],
          [
            "**Total**",
            "2 844",
            "–",
            "373 599",
            "Total",
            "2 844",
            "–",
            "373 599"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Compte de stocks du sous-produit SP**"
        ],
        "rows": [
          [
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**",
            "**Libellé**",
            "**Q**",
            "**CU**",
            "**Montant**"
          ],
          [
            "**Stock initialEntrées**",
            "80250",
            "200,00188,61",
            "16 00041 152",
            "Sorties(270)Stock final –Différenced’inventaire",
            "8019060",
            "200,00188,61188,61",
            "16 00035 83611 317299"
          ],
          [
            "**Total**",
            "330",
            "–",
            "63 452",
            "Total",
            "330",
            "–",
            "63 452"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode pour aider le contrôleur de gestion à améliorer la répartition des charges.**"
      },
      {
        "type": "p",
        "text": "L’intérêt d’une méthode s’apprécie par rapport au contexte et aux besoins de l’organisation."
      },
      {
        "type": "p",
        "text": "Ici, l’objectif semble être la connaissance d’un coût de production et l’amélioration de sa mesure par les critères utilisés."
      },
      {
        "type": "p",
        "text": "Intérêts"
      },
      {
        "type": "p",
        "text": "Le calcul d’un coût complet correspond au besoin de l’entreprise pour un suivi opérationnel de son processus de production. La méthode donne un coût pour le produit fini et le sous-produit."
      },
      {
        "type": "p",
        "text": "Limites"
      },
      {
        "type": "p",
        "text": "L’objectif est atteint mais la démarche est discutable quant aux critères choisis pour répartir les charges."
      },
      {
        "type": "p",
        "text": "Quelles fiabilité et pertinence des unités d’oeuvre pour chaque étape ? Ici, les unités d’oeuvre (UO) choisies sont toutes différentes ; elles ne sont pas nécessairement explicatives des consommations de ressources engagées dans chaque atelier."
      },
      {
        "type": "p",
        "text": "Quelles fiabilité et pertinence des pourcentages pour la répartition des charges indirectes (gestion du matériel et du personnel) ?"
      },
      {
        "type": "p",
        "text": "Améliorations"
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion doit observer sur le terrain la réalité du fonctionnement pour mieux différencier les consommations des différentes étapes de transformation."
      },
      {
        "type": "p",
        "text": "•Pour les charges directes : par exemple, l’UO de l’atelier A1 est exprimée en kg de MP et celle de l’atelier A2 est exprimée en HMOD : faut-il unifier ou, au contraire, peut-on créer une UO mixant les kg et les HMOD ? Existe-t-il un critère plus représentatif du fonctionnement, comme le nombre d’heures de travail de l’atelier ? (Les charges existent quel que soit le nombre de kg de matières premières consommées.)"
      },
      {
        "type": "p",
        "text": "•Pour les charges indirectes : trouver un critère d’affectation plus proche des besoins réels des centres opérationnels, par exemple le nombre d’heures travaillées pour la gestion du matériel pour l’atelier A1 ou la surface de matériel utilisée. Là encore, il faut observer ce qui enclenche la consommation des ressources pour le fonctionnement réel des centres opérationnels."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "Cas2",
    "title": "Métalhaire",
    "statement": [
      {
        "type": "p",
        "text": "La PME Métalhaire, située en plein coeur des Yvelines, est une usine de fabrication de garde-"
      },
      {
        "type": "p",
        "text": "corps en métal. Elle fabrique en série deux produits : les garde-corps H1 et H2. Ces produits sont fabriqués à partir d’une matière première (aluminium) et de composants C1 et C2. L’assemblage des produits s’effectue dans l’atelier d’assemblage. Les composants C1 et C2 sont fabriqués dans l’entreprise au sein de l’atelier Robuste à partir d’une matière première unique nommée Alliage05. La société Métalhaire vend ses productions à deux grands types de clientèle : des particuliers et des entreprises localisées en région parisienne."
      },
      {
        "type": "p",
        "text": "Le directeur général de Métalhaire profite de l’embauche d’un jeune contrôleur de gestion pour formaliser un état récapitulatif du calcul du coût de revient prévisionnel dans des conditions qui sont considérées comme normales pour l’entreprise."
      },
      {
        "type": "p",
        "text": "Ces informations sont regroupées ci-après."
      },
      {
        "type": "p",
        "text": "Les gammes opératoires de fabrication des composants C1 et C2 mis en oeuvre dans l’atelier Robuste sont les suivantes :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Composant C1 (unité)**",
          "**Composant C2 (unité)**"
        ],
        "rows": [
          [
            "**Matière Alliage 05**",
            "2 unités",
            "1 unité"
          ],
          [
            "**Heures de main-d’œuvre directe**",
            "30 minutes",
            "1 heure"
          ],
          [
            "**Atelier Robuste (heure-machine)**",
            "0,25 heure",
            "0,75 heure"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les gammes opératoires des produits H1 et H2, produits dans l’atelier d’assemblage, sont les suivantes pour une unité de produit :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Garde-corps H1 (unité)**",
          "**Garde-corps H2 (unité)**"
        ],
        "rows": [
          [
            "**Matière Aluminium**",
            "0,5 unité",
            "2 unités"
          ],
          [
            "**Composant C1**",
            "3 unités",
            "3 unités"
          ],
          [
            "**Composant C2**",
            "1 unité",
            "1 unité"
          ],
          [
            "**Heures main-d’œuvre directe**",
            "1,5 heure",
            "1,9 heure"
          ],
          [
            "**Atelier Assemblage (heure-machine)**",
            "0,8 heure-machine",
            "0,5 heure-machine"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges mensuelles, y compris les matières consommables, ont été ventilées entre les centres d’analyse comme suit, après répartition secondaire :"
      },
      {
        "type": "table",
        "headers": [
          "**Totaux**",
          "**Magasin**",
          "**Atelier Robuste**",
          "**Atelier Assemblage**",
          "**Ventes aux particuliers**",
          "**Ventes aux entreprises**"
        ],
        "rows": [
          [
            "608 020",
            "50 120",
            "207 600",
            "223 800",
            "90 800",
            "35 700"
          ],
          [
            "–",
            "%",
            "HM",
            "HM",
            "Produits",
            "Produits"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Les frais indirects de magasinage sont à imputer aux matières et produits stockés à raison de :**"
      },
      {
        "type": "ul",
        "items": [
          "20 % à chacune des deux matières premières acquises à l’extérieur.",
          "60 % aux produits fabriqués, frais traités comme charges de distribution réparties entre les catégories de ventes (particuliers et entreprises) en fonction des quantités vendues."
        ]
      },
      {
        "type": "p",
        "text": "**Au début du mois, les stocks étaient les suivants (valorisés au CUMP) :**"
      },
      {
        "type": "ul",
        "items": [
          "Alliage05 3 000 unités pour 15 020 €",
          "Aluminium 320 unités pour 10 240",
          "Composant C1 1 200 unités pour 44 400 €",
          "Composant C2 800 unités pour 56 000 €",
          "Garde-corps H1 130 unités pour 28 600 €",
          "Garde-corps H2 75 unités pour 16 500 €"
        ]
      },
      {
        "type": "p",
        "text": "**Le budget des achats prévoit les acquisitions suivantes :**"
      },
      {
        "type": "ul",
        "items": [
          "Alliage05 24 000 unités pour 99 400 €",
          "Aluminium 4 200 unités pour 126 000 € Sur la période, il est prévu de produire :",
          "8 420 composants C1 et 3 700 composants C2 dans l’atelier Robuste.",
          "2 480 garde-corps H1 et 720 garde-corps H2 dans l’atelier d’assemblage. Les ventes estimées du mois Se décomposent ainsi :",
          "Garde-corps H1 : 720 ventes aux entreprises au prix unitaire de 450 € et 1 820 ventes aux particuliers au prix unitaire de 470 €.",
          "Garde-corps H2 : 760 vendus aux particuliers au prix unitaire de 510 €."
        ]
      },
      {
        "type": "p",
        "text": "On remarque en outre que la main-d’oeuvre, payée en fixe mensuel, est considérée comme un coût direct par rapport aux ateliers. Les frais de main-d’oeuvre directe représentent :"
      },
      {
        "type": "ul",
        "items": [
          "7 910 heures pour un montant de 286 000 € dans l’atelier Robuste.",
          "5 088 heures pour un montant de 270 400 € dans l’atelier d’assemblage."
        ]
      },
      {
        "type": "p",
        "text": "Lors de la réunion de revue performance relative au budget N+1, deux propositions sont émises par des responsables opérationnels :"
      },
      {
        "type": "ul",
        "items": [
          "Le responsable des achats annonce qu’il a été démarché par un fournisseur asiatique qui propose d’approvisionner l’entreprise en composants C2 au prix de 65 € l’unité livrée dans l’atelier selon un contrat à long terme garantissant les mêmes délais et qualité d’approvisionnement qu’actuellement. Il considère que cette offre est avantageuse.",
          "Le responsable des ventes, considérant que la distribution des produits aux entreprises entraîne des charges de distribution trois fois inférieures à celle des ventes aux particuliers, propose de développer ce type de ventes en recherchant de nouveaux clients (entreprises)."
        ]
      },
      {
        "type": "p",
        "text": "Avant de prendre toute décision, le directeur s’adresse au contrôleur de gestion afin qu’il analyse les propositions de chacun des responsables opérationnels."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer le coût de revient de chaque catégorie de ventes.**"
      },
      {
        "type": "p",
        "text": "**2. Analyser la performance des deux types de clients. Pour ce travail, vous vous appuierez sur les données de l’annexe.**"
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin d’aider le directeur général à arbitrer entre les deux propositions.**"
      },
      {
        "type": "p",
        "text": "**4. Apprécier les intérêts et les limites de la méthode des centres d’analyse.**"
      },
      {
        "type": "table",
        "headers": [
          "**Résultats analytiques**"
        ],
        "rows": [
          [
            "",
            "**CA HT**",
            "**Résultat**"
          ],
          [
            "**Garde-corps H1 – Entreprises**",
            "324 000",
            "28 973"
          ],
          [
            "**Garde-corps H1 – Particuliers**",
            "855 400",
            "135 827"
          ],
          [
            "**Garde-corps H2 – Particuliers**",
            "387 600",
            "63 460"
          ],
          [
            "**Total**",
            "1 567 000",
            "228 259"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer le coût de revient de chaque catégorie de ventes.**"
      },
      {
        "type": "p",
        "text": "Calcul du coût de revient et du résultat de chaque type de ventes"
      },
      {
        "type": "p",
        "text": "Ce calcul doit suivre la réalité du schéma de production : achat des deux matières M1 et M2, stockage des matières, fabrication des composants C1 et C2, stockage des composants, fabrication des produits, stockage des produits H1 et H2, coût de revient des produits par type de clientèle, résultats analytiques."
      },
      {
        "type": "p",
        "text": "Coût d’achat des matières M1 et M2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Matière 1**",
          "**Matière 2**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Achats de la périodeCharges indirectes d’approvisionnement**",
            "24 0001",
            "10 024",
            "99 40010 024",
            "4 2001",
            "10 024",
            "126 00010 024"
          ],
          [
            "**Total**",
            "24 000",
            "≈ 4,56",
            "109 424",
            "4 200",
            "≈ 32,39",
            "136 024"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Compte de stocks de matières M1 et M2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Matière 1**",
          "**Matière 2**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Stock initialEntrées de la période**",
            "3 00024 000",
            "4,56",
            "15 020109 424",
            "3204 200",
            "32,39",
            "10 240136 024"
          ],
          [
            "**Total**",
            "27 000",
            "4,61",
            "124 444",
            "4 520",
            "32,36",
            "146 264"
          ],
          [
            "**Consommations de matières :pour la fabrication de C1(1)pour la fabrication de C2pour la fabrication de H1(2)pour la fabrication de H2**",
            "16 8403 700",
            "4,614,61",
            "77 63217 057",
            "1 2401 440",
            "32,3632,36",
            "40 12646 598"
          ],
          [
            "**Stock final (par différence)**",
            "6 460",
            "4,61",
            "29 755",
            "1 840",
            "32,36",
            "59 540"
          ],
          [
            "**Total**",
            "27 000",
            "4,61",
            "124 444",
            "4 520",
            "32,36",
            "146 264"
          ],
          [
            "**(1) 16 840 unités de M1 = 2 unités M1 × 8 420 C1.(2) 1 240 unités de M1 = 0,5 unité M1 × 2 480 A.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût de production des composants C1 et C2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Composant C1**",
          "**Composant C2**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Charges directesMatières consomméesMain-d’œuvre directe(1)**",
            "16 8404 210",
            "4,6136,16",
            "77 632152 220",
            "3 7003 700",
            "4,6136,16",
            "17 057133 780"
          ],
          [
            "**Charges indirectesCharges Atelier Robuste(2)**",
            "2 105",
            "42,54",
            "89 549",
            "2 775",
            "42,54",
            "118 051"
          ],
          [
            "**Coût de production**",
            "8 420",
            "37,93",
            "319 401",
            "3 700",
            "72,67",
            "268 888"
          ],
          [
            "**(1) Coût horaire MOD = 286 000/(4 210 + 3 700) avec 4 210 HMOD = 8 420 C1 × 0,5 HMOD et 3 700 HMOD = 3 700 C2 × 1 heure.(2) 2 105 HM = 8 420 C1 × 0,25 HM et 2 775 HM = 3 700 C2 × 0,75 HM.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Compte de stocks des composants C1 et C2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Composant C1**",
          "**Composant C2**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Stock initialEntrées de la période**",
            "1 2008 420",
            "37,93",
            "44 400319 401",
            "8003 700",
            "72,67",
            "56 000268 888"
          ],
          [
            "**Total**",
            "9 620",
            "37,82",
            "363 801",
            "4 500",
            "72,20",
            "324 888"
          ],
          [
            "**Cons. de composantspour la fabrication de H1 (1)pour la fabrication de H2**",
            "7 4402 160",
            "37,8237,82",
            "281 38181 691",
            "2 480720",
            "72,2072,20",
            "179 05651 984"
          ],
          [
            "**Stock final (par différence)**",
            "20",
            "37,82",
            "729",
            "1 300",
            "72,20",
            "93 848"
          ],
          [
            "**Total**",
            "9 620",
            "37,82",
            "363 801",
            "4 500",
            "72,20",
            "324 888"
          ],
          [
            "**(1) 2 480 A × 3 C1 = 7 440 C1.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût de production des produits H1 et H2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit H1**",
          "**Produit H2**"
        ],
        "rows": [
          [
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Charges directesMatières M2 consomméesComposants C1 consommésComposants C2 consommésMain-d’œuvre directe(1)**",
            "1 2407 4402 4803 720",
            "32,3637,8272,2053,14",
            "40 126281 381179 056197 698",
            "1 4402 1607201 368",
            "32,3637,8272,2053,14",
            "46 59881 69151 98472 702"
          ],
          [
            "**Charges indirectesCharges Atelier Assemblage(2)**",
            "1 984",
            "95,48",
            "189 428",
            "360",
            "95,48",
            "34 372"
          ],
          [
            "**Coût de production**",
            "2 480",
            "357,94",
            "887 689",
            "720",
            "≈ 399,09",
            "287 347"
          ],
          [
            "**(1) Coût horaire MOD = 270 400 /(3 720 + 1 368)) avec 2 480 A × 1,5 HMOD = 3 720 HMOD.(2) Coût horaire machine = 223 800/(1 984 + 360) avec 2 480 A × 0,8 HM = 1 984 HM.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Compte de stocks des produits H1 et H2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit H1**",
          "**Produit H2**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Stock initialEntrées de la période**",
            "1302 480",
            "357,94",
            "28 600887 689",
            "75720",
            "399,09",
            "16 500287 347"
          ],
          [
            "**Total**",
            "2 610",
            "351,07",
            "916 289",
            "795",
            "382,20",
            "303 847"
          ],
          [
            "**Ventes de la période• ventes de H1 – État• ventes de H1 – Particuliers• ventes de H2 – Particuliers**",
            "7201 820",
            "351,07351,07",
            "252 770638 947",
            "760",
            "382,20",
            "290 472"
          ],
          [
            "**Stock final (par différence)**",
            "70",
            "351,07",
            "24 572",
            "35",
            "382,20",
            "13 375"
          ],
          [
            "**Total**",
            "2 610",
            "351,07",
            "916 289",
            "795",
            "382,20",
            "303 847"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût de revient et résultats analytiques des produits H1 en fonction des clientèles"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit H1 – Entreprises**",
          "**Produit H2 – Particuliers**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Charges directesCoût de prod. des pdts vendus**",
            "720",
            "351,07",
            "252 770",
            "1 820",
            "351,07",
            "638 947"
          ],
          [
            "**Charges indirectesCharges de distributionCharges de magasinage**",
            "720720",
            "49,589,11",
            "35 6986 559",
            "1 8201 820",
            "35,199,11",
            "64 04616 580"
          ],
          [
            "**Coût de revient du pdt H1**",
            "720",
            "409,76",
            "295 027",
            "1 820",
            "395,37",
            "719 573"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit H1 – Entreprises**",
          "**Produit H1 – Particuliers**"
        ],
        "rows": [
          [
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Ventes des pdts H1**",
            "720",
            "450,00",
            "324 000",
            "1 820",
            "470,00",
            "855 400"
          ],
          [
            "**Coût de revient des pdts vendus**",
            "720",
            "409,76",
            "295 027",
            "1 820",
            "395,37",
            "719 573"
          ],
          [
            "**Résultats analytiques H1**",
            "720",
            "40,24",
            "28 973",
            "1 820",
            "74,63",
            "135 827"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût de revient et résultats analytiques des produits H2"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit H2**"
        ],
        "rows": [
          [
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**Charges directesCoût de prod. des pdts vendus**",
            "760",
            "382,20",
            "290 472"
          ],
          [
            "**Charges indirectesCharges de distributionCharges de magasinage**",
            "760760",
            "35,199,11",
            "26 7446 924"
          ],
          [
            "**Coût de revient du pdt H2**",
            "760",
            "426,50",
            "324 140"
          ],
          [
            "**Ventes des pdts H2**",
            "760",
            "510,00",
            "387 600"
          ],
          [
            "**Résultats analytiques H2**",
            "760",
            "83,50",
            "63 460"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat analytique global"
      },
      {
        "type": "table",
        "headers": [
          "**Garde-corps H1 – EntreprisesGarde-corps H1 – ParticuliersGarde-corps H2 – Particuliers**",
          "**28 973135 82763 460**"
        ],
        "rows": [
          [
            "**Résultat analytique total**",
            "228 260"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Analyser la performance des deux types de clients. Pour ce travail, on s’appuiera sur des taux de profitabilité.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Résultat**",
          "**CA HT**",
          "**Profitabilité (%)**",
          "**Part dans le résultat (%)**"
        ],
        "rows": [
          [
            "**Produit H1 – Entreprises**",
            "28 973",
            "324 000",
            "8,94",
            "12,69"
          ],
          [
            "**Produit H1 – Particuliers**",
            "135 827",
            "855 400",
            "15,88",
            "59,51"
          ],
          [
            "**Produit H2 – Particuliers**",
            "63 460",
            "387 600",
            "16,37",
            "27,80"
          ],
          [
            "**Total**",
            "228 260",
            "1 567 000",
            "14,57",
            "100,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise dégage un résultat de 228 260 € soit plus de 14 % du chiffre d’affaires ce qui est une excellente profitabilité."
      },
      {
        "type": "p",
        "text": "Les ventes aux particuliers quels que soient les produits se révèlent très profitables avec des taux de profit supérieurs à 15 %. En revanche, les ventes aux entreprises présentent une profitabilité plus faible (environ 9 %) mais encore très correcte. Cependant ces ventes pénalisent la profitabilité globale de l’entreprise."
      },
      {
        "type": "p",
        "text": "Le résultat est principalement généré par les ventes aux particuliers (près de 87 % du résultat) et plus particulièrement celles du produit H1 qui participe à plus de la moitié de ce dernier (environ 60 %). De façon logique le résultat dégagé sur les ventes à l’entreprise reste peu important pour l’entreprise (13 % environ) alors même que le chiffre d’affaires de ce produit représente un cinquième du chiffre d’affaires de l’entreprise."
      },
      {
        "type": "p",
        "text": "À ce jour, les ventes aux entreprises mobilisent des moyens pour un résultat plus faible que celui obtenu sur les autres produits. Il serait intéressant de se questionner sur la pertinence de ce marché."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin d’aider le directeur général à arbitrer entre les deux propositions.**"
      },
      {
        "type": "p",
        "text": "Plusieurs remarques ont été faites par le responsable des achats et le service commercial :"
      },
      {
        "type": "p",
        "text": "Proposition du responsable des achats"
      },
      {
        "type": "p",
        "text": "Ce dernier propose de s’approvisionner auprès d’un fournisseur asiatique pour le composant C2 au prix d’achat de 65 € alors que le coût de production prévisionnel fait apparaître un coût de fabrication de 72 € environ."
      },
      {
        "type": "p",
        "text": "Cette décision doit s’appuyer sur une bonne connaissance de la nature des charges et des modalités de leur affectation-imputation dans le processus de calcul des coûts de production."
      },
      {
        "type": "p",
        "text": "Dans le coût de production de C2, certaines charges sont directes et leur affectation n’est pas sujette à discussion. Il est même possible d’admettre qu’elles disparaîtront avec la suppression de la fabrication de C2 : c’est le cas pour les consommations de M1 et de M2."
      },
      {
        "type": "p",
        "text": "En revanche, il n’est pas aussi évident de considérer que les coûts de main-d’oeuvre directe (charges directes mais fixes) pourront être réduits sans difficulté."
      },
      {
        "type": "p",
        "text": "Les autres charges sont indirectes et la suppression de la fabrication de C2 ne les fera pas disparaître à court terme (cela suppose des opérations de désinvestissement longues et mal aisées à mettre en oeuvre). Il est probable qu’une part importante de ces charges soit fixe (assurances, amortissement, loyer…), elles seront donc automatiquement reparties sur le coût de fabrication de C1."
      },
      {
        "type": "p",
        "text": "Ce qui sera économisé sur C2 sera perdu sur C1 : les choix de ce type ont toujours une interaction sur le calcul des autres produits compte tenu des règles de répartition et la méthode des centres d’analyse n’est pas satisfaisante pour répondre à ces préoccupations. L’objectif premier de cette méthode est de répartir toutes les charges sur les productions : elle est donc très dépendante des volumes de produits retenus pour le calcul des coûts unitaires."
      },
      {
        "type": "p",
        "text": "Pour répondre à la proposition du responsable des achats, il faudrait travailler en méthode de contribution de charges."
      },
      {
        "type": "p",
        "text": "Toutes les remarques précédentes sont cantonnées à la méthode de calcul des coûts mais il serait bon de s’interroger, en cas d’acceptation du fournisseur extérieur, sur l’apparition possible de coûts indirects de coordination, de contrôle (coûts de transaction) qui viendraient contrebalancer l’économie sur le prix d’achat."
      },
      {
        "type": "p",
        "text": "Enfin, il s’agit, en cas d’externalisation de la fabrication de C2, de mener une réflexion sur la chaîne de valeur de l’entreprise et de s’assurer que l’abandon du savoir-faire relatif au composant C2 ne sera pas préjudiciable à l’entreprise."
      },
      {
        "type": "p",
        "text": "Proposition du responsable commercial"
      },
      {
        "type": "p",
        "text": "Le responsable commercial, considérant que la distribution de produits aux entreprises entraîne 35 700 € de charges, contre 90 800 € pour la distribution de produits aux particuliers (soit trois fois moins), estime qu’il faut développer les ventes aux entreprises."
      },
      {
        "type": "p",
        "text": "Le rapport en masse des charges de distribution selon les circuits de distribution est réel : il est bien de 1 contre 3 mais le raisonnement est, en partie, erroné car, compte tenu de la structure actuelle des ventes, les ventes aux entreprises étant beaucoup moins nombreuses, chaque produit cédé aux entreprises « reçoit » une part beaucoup plus élevée à l’unité : 49,58 €, contre 35,19 € pour un produit cédé aux particuliers ; la profitabilité des produits s’en ressent d’autant que le prix de vente aux entreprises est plus faible. Cette contradiction doit être mise en relation avec la nature des charges de distribution : si elles sont majoritairement variables, alors développer les ventes aux entreprises fera augmenter les charges de distribution de façon plus ou moins proportionnelle, ce qui ne changera rien aux résultats unitaires par type de clientèle. En revanche, si les charges sont majoritairement fixes, la masse sera répartie sur une plus grande quantité et les coûts unitaires diminueront ; la profitabilité des produits vendus aux entreprises s’améliorera."
      },
      {
        "type": "p",
        "text": "Tout ce raisonnement suppose implicitement que l’on puisse augmenter les ventes aux entreprises sans diminuer les ventes aux particuliers, ce qui signifie que les capacités de production ne sont pas saturées. Si, à court terme, il n’est pas possible de produire plus, alors les ventes aux entreprises sont réalisées au détriment des ventes aux particuliers et l’analyse doit intégrer la perte de marge. Ainsi, sur le seul critère du chiffre d’affaires, un produit vendu aux particuliers génère 470 € de CA contre 450 € pour un produit cédé aux entreprises, soit 20 € par produit substitué."
      },
      {
        "type": "p",
        "text": "**4. Apprécier les intérêts et les limites de la méthode des centres d’analyse dans ce contexte.**"
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion désirait obtenir la profitabilité des différents produits et la méthode l’a permis. Une méthode est pertinente quand elle répond aux besoins de l’entreprise. Ici, les besoins sont compris comme un coût complet, ce qui induit la répartition de toutes les charges y compris les charges indirectes. L’objectif est de connaître au mieux la réalité du processus de transformation des produits et de la consommation de ressources qu’ils induisent, c’est-à-dire la traçabilité des coûts."
      },
      {
        "type": "p",
        "text": "Les calculs effectués ont répondu aux besoins. Ils ont permis d’arbitrer et d’argumenter les propositions respectives du responsable des achats et du responsable commercial."
      },
      {
        "type": "p",
        "text": "Cependant, ce n’est pas la méthode adaptée si l’on veut arbitrer entre les produits. La méthode ABC pourrait apporter un éclairage supplémentaire."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "Cas",
    "title": "Léonie",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "La société Léonie est spécialisée dans la valorisation de déchets de bois. Les déchets de bois sont essentiellement des emballages tels que des palettes, des caisses et des cagettes."
      },
      {
        "type": "p",
        "text": "Tous les déchets suivent le même processus de production."
      },
      {
        "type": "p",
        "text": "Les principaux débouchés sont :"
      },
      {
        "type": "p",
        "text": "– à partir de particules : fabrication de panneaux agglomérés, recyclage en litières pour animaux ;"
      },
      {
        "type": "p",
        "text": "– à partir de plaquettes : valorisation énergétique en chaufferie (bois de chauffage)."
      },
      {
        "type": "p",
        "text": "Les acheteurs actuels de plaquettes sont, en général, des clients fidèles désireux de négocier les prix."
      },
      {
        "type": "p",
        "text": "Un bâtiment spécifique accueille les services généraux. Le contrôle de gestion est assuré par l’un des deux responsables de l’entreprise. Vous êtes chargé du calcul des coûts complets par la méthode des centres d’analyse pour le 4e trimestre N."
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
        "text": "**1. Calculer et interpréter les coûts et les résultats des deux produits obtenus en mettant en place la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode de calcul des coûts dans le cadre du contexte Léonie.**"
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller le dirigeant de l’entreprise Léonie sur la poursuite ou non de la production des deux produits.**"
      },
      {
        "type": "p",
        "text": "**Document 1 — Processus de production**"
      },
      {
        "type": "p",
        "text": "Les déchets reçus sont des déchets industriels de bois (palettes usagées par exemple) collectés. Ils subissent trois opérations :"
      },
      {
        "type": "p",
        "text": "Opération 1 : Tri des déchets et élimination des matières indésirables."
      },
      {
        "type": "p",
        "text": "Opération 2 : Une partie des plaquettes est reprise depuis l’aire bétonnée à l’aide d’une chargeuse vers une trémie tampon. Elle alimente un convoyeur qui les achemine jusqu’à une coupeuse fonctionnant 8 à 12 heures par jour. Les déchets sont à ce stade transformés en particules. Elles transitent par un séparateur-épierreur qui permet l’élimination, par tri aéraulique, des derniers corps étrangers (poussières de silices, limaille de métaux non ferreux…)."
      },
      {
        "type": "p",
        "text": "Opération 3 : Les particules de bois sont reprises par un système pneumatique vers un bâtiment de stockage."
      },
      {
        "type": "p",
        "text": "**Document 2 — Informations sur la production du 4e trimestre N**"
      },
      {
        "type": "p",
        "text": "Le coût de production d’une tonne de plaquettes à la sortie de l’opération 1 s’élève à 40 €."
      },
      {
        "type": "p",
        "text": "Les différents centres d’analyse présentés ci-après correspondent aux étapes finales du processus de production et aux coûts hors production. Ils regroupent l’ensemble des charges correspondantes."
      },
      {
        "type": "p",
        "text": "***Tableau de répartition des charges des opérations 2 et 3 et des coûts hors production***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Opération 2**",
          "**Opération 3**",
          "**Expédition**",
          "**Services généraux**"
        ],
        "rows": [
          [
            "**Répartition secondaire (en €)**",
            "70 000",
            "10 000",
            "135 000",
            "153 000"
          ],
          [
            "**Unité d’œuvre**",
            "La tonne de particules produites",
            "La tonne de particules produites",
            "La tonne de produits vendus",
            "100 € de coût de production des produits vendus"
          ]
        ]
      },
      {
        "type": "p",
        "text": "***État des stocks au 01/10/N***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité en tonnes**",
          "**Coût unitaire par tonne**"
        ],
        "rows": [
          [
            "**Plaquettes vendues en l’état**",
            "30 000",
            "40 €"
          ],
          [
            "**Particules**",
            "5 000",
            "54 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La valorisation des stocks s’effectue au coût moyen pondéré."
      },
      {
        "type": "p",
        "text": "***Production et ventes du 4e trimestre N***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité en tonnes**",
          "**Prix de vente moyen (en €) par tonne**"
        ],
        "rows": [
          [
            "**Plaquettes obtenues après l’opération 1**",
            "15 000",
            "–"
          ],
          [
            "**Plaquettes transformées en particules (1)**",
            "5 000",
            "–"
          ],
          [
            "**Plaquettes vendues en l’état**",
            "25 000",
            "52"
          ],
          [
            "**Particules vendues**",
            "5 000",
            "74"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) Il n’y a pas de perte de poids lors de l’opération 2."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et les résultats des deux produits obtenus en mettant en place la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "**Étape 1. Tableau de répartition des charges des opérations 2, 3 et des coûts hors production**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Opération 2**",
          "**Opération 3**",
          "**Expédition**",
          "**Services généraux**"
        ],
        "rows": [
          [
            "**Répartition secondaire (en €)**",
            "70 000",
            "10 000",
            "135 000",
            "153 000"
          ],
          [
            "**Unité d’œuvre (UO)**",
            "La tonne de particules produites",
            "La tonne de particules produites",
            "La tonne de produits vendus",
            "100 € de coût de production des produits vendus"
          ],
          [
            "**Nombre d’UO**",
            "5 000",
            "5 000",
            "30 000",
            "12 750 (1)"
          ],
          [
            "**Coût de l’UO (en €)**",
            "14",
            "2",
            "4,5",
            "12"
          ],
          [
            "**(1) (1 000 000 + 275 000) ÷ 100**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Étape 2. Coût de production"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Particules**"
        ],
        "rows": [
          [
            "**Coût de production après l’opération 1Charges de l’opération 2Charges de l’opération 3**",
            "5 000 × 40",
            "200 000 €70 000 €10 000 €"
          ],
          [
            "**Coût de production de la période**",
            "5 000 t",
            "280 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Étape 3. CUMP de production"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Plaquettes**",
          "**Particules**"
        ],
        "rows": [
          [
            "**Stock initial**",
            "30 000 t",
            "1 200 000 €",
            "5 000 t",
            "270 000 €"
          ],
          [
            "**Coût de production de la période**",
            "10 000 t",
            "400 000 €",
            "5 000 t",
            "280 000 €"
          ],
          [
            "**Total**",
            "40 000 t",
            "1 600 000 €",
            "10 000 t",
            "550 000 €"
          ],
          [
            "**CMUP de production**",
            "",
            "40 €",
            "",
            "55 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Étape 4. Coûts de revient et résultat des deux produits"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Plaquettes**",
          "**Particules**"
        ],
        "rows": [
          [
            "**Charges directesCoût de production des produits vendus**",
            "25 000 × 40",
            "1 000 000",
            "5 000 × 55",
            "275 000"
          ],
          [
            "**Charges indirectesCentre ExpéditionCentre Services généraux**",
            "25 000 × 4,510 000 × 12",
            "112 500120 000",
            "5 000 × 4.52 750 × 12",
            "22 50033 000"
          ],
          [
            "**Coût de revient**",
            "",
            "1 232 500",
            "",
            "330 500"
          ],
          [
            "**Chiffre d’affaires**",
            "25 000 × 52",
            "1 300 000",
            "5 000 × 74",
            "370 000"
          ],
          [
            "**Résultat**",
            "",
            "67 500",
            "",
            "39 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "InterprétationLes deux produits paraissent bénéficiaires. Le taux de profitabilité s’élève à 5,2 % pour les plaquettes et à 10,7 % pour les particules."
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode de calcul des coûts dans le cadre du contexte Léonie.**"
      },
      {
        "type": "p",
        "text": "Le principal intérêt de la méthode des centres d’analyse est que cela permet de modérer les insuffisances de la comptabilité financière en permettant à l’entreprise Léonie de connaître un résultat par produit et par trimestre. Ces tableaux intermédiaires permettent de calculer des taux de profitabilité et de réagir si besoin."
      },
      {
        "type": "p",
        "text": "Cependant, il est difficile pour les contrôleurs de gestion d’effectuer un choix d’unités d’oeuvre car la proportion de charges indirectes par rapport au total des charges est croissante d’années en années. C’est pour cette raison que certaines entreprises préfèrent calculer des coûts partiels."
      },
      {
        "type": "p",
        "text": "Enfin, la mise en place de la méthode des centres d’analyse est très lourde et changer de méthode (méthode ABC) est avant tout une démarche managériale qui demande l’adhésion de l’ensemble des salariés de l’entreprise Léonie."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller le dirigeant de l’entreprise Léonie sur la poursuite ou non de la production des deux produits.**"
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
        "text": "– comparaison de la profitabilité des deux produits et analyse des prix de vente ;"
      },
      {
        "type": "p",
        "text": "– pertinence des unités d’oeuvre ;"
      },
      {
        "type": "p",
        "text": "– conclusion pour conseiller le dirigeant."
      },
      {
        "type": "p",
        "text": "La société Léonie est spécialisée dans la valorisation de déchets de bois. Les déchets de bois sont essentiellement des emballages tels que des palettes, des caisses et des cagettes. Tous les déchets suivent le même processus de production et certains produits sont mieux valorisés que d’autres."
      },
      {
        "type": "p",
        "text": "Le prix de vente des particules est plus élevé que celui des plaquettes brutes, ce qui est logique ; la valorisation des déchets qui engendre des coûts permet d’obtenir des bénéfices supplémentaires. Le taux de profitabilité des particules est quasiment deux fois plus élevé que celui calculé pour les plaquettes. En revanche, au niveau global, les plaquettes dégagent un résultat analytique supérieur à celui des particules. L’effet volume en est la cause. Le résultat global est positif de 107 000 €."
      },
      {
        "type": "p",
        "text": "En matière de charges indirectes, la répartition semble satisfaisante, c’est-à-dire que chaque type de produit (plaquettes ou particules) absorbe les charges indirectes qui doivent lui revenir. Pour autant, certaines unités d’oeuvre peuvent être remises en cause. Par exemple, au niveau du poste « Expédition », le contrôleur de gestion pourrait choisir comme assiette de frais le chiffre d’affaires au lieu de la tonne de produits vendus. Un tel arbitrage permettrait d’affecter davantage de charges indirectes à l’expédition de produits à plus haute valeur ajoutée qui requièrent sans doute plus de logistique interne."
      },
      {
        "type": "p",
        "text": "En somme, le dirigeant de la société Léonie peut se réjouir de ses taux de profitabilité. Il pourrait toutefois mettre en place une autre méthode de calcul de coûts comme la méthode ABC, laquelle permet de prendre davantage en compte les processus et les activités de l’entreprise, confirmant ou infirmant les niveaux de profitabilité."
      }
    ]
  },
  {
    "id": "ex8",
    "label": "Cas",
    "title": "Netplus",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "La création d’une plateforme de VOD suppose le développement d’étapes techniques et le recours à des compétences spécifiques."
      },
      {
        "type": "p",
        "text": "La société Netplus propose l’accès à son vaste catalogue de titres grâce à un abonnement permettant à l’abonné de visionner les vidéos en streaming, sans publicité, sur un ou plusieurs écrans, selon l’offre choisie."
      },
      {
        "type": "p",
        "text": "Netplus propose également un accès temporaire à une vidéo moyennant le paiement d’un droit de visionnage modique."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter le résultat mensuel en fonction de chaque catégorie de clients. Arrondir chaque coût unitaire à la quatrième décimale.**"
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode des coûts complets par les centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "**Document — Société Netplus – Système actuel de calculs de coûts**"
      },
      {
        "type": "p",
        "text": "Les données sont issues de la comptabilité de gestion du mois de janvier N."
      },
      {
        "type": "p",
        "text": "***Prix de vente et quantités***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente**",
          "**Nombre d’abonnés/clients**",
          "**Nombre moyen de visionnages par abonné (ou client) et par mois**"
        ],
        "rows": [
          [
            "**Abonnement permettant à un particulier de visionner sur un écran unique**",
            "10 € par mois",
            "400 000 abonnés",
            "4"
          ],
          [
            "**Abonnement permettant à un particulier de visionner sur quatre écrans en simultané**",
            "15 € par mois",
            "850 000 abonnés",
            "16"
          ],
          [
            "**Abonnement permettant à un professionnel de visionner sur cinquante écrans en simultané**",
            "50 € par mois",
            "12 000 abonnés",
            "40"
          ],
          [
            "**Droit de visionnage d’une seule vidéo**",
            "1 € par vidéo",
            "200 000 clients occasionnels",
            "1"
          ]
        ]
      },
      {
        "type": "p",
        "text": "***Charges directes variables mensuelles***"
      },
      {
        "type": "p",
        "text": "Les charges suivantes varient en fonction du nombre de visionnages."
      },
      {
        "type": "p",
        "text": "**•**Reversements :"
      },
      {
        "type": "p",
        "text": "– Reversements aux ayants droit (éditeurs, producteurs…) : 7 000 000 €"
      },
      {
        "type": "p",
        "text": "– Reversements aux sociétés de droits d’auteurs : 230 000 €"
      },
      {
        "type": "p",
        "text": "**•**Diffusion/distribution :"
      },
      {
        "type": "p",
        "text": "– Frais de bande passante : 640 000 €"
      },
      {
        "type": "p",
        "text": "– Frais de protection : 330 000 €"
      },
      {
        "type": "p",
        "text": "– Commissions/taxes versées aux opérateurs : 4 500 000 €"
      },
      {
        "type": "p",
        "text": "***Charges indirectes fixes mensuelles***"
      },
      {
        "type": "p",
        "text": "Les charges indirectes d’un montant total de 4 770 000 € ont été réparties dans trois centres d’analyse :"
      },
      {
        "type": "p",
        "text": "**•**Technologie : le centre « Technologie » est en charge de la maintenance de toutes les applications et matériel. Il assure également l’exploitation de la plateforme VOD et est responsable de la diffusion des vidéos. Le coût total affecté à ce centre est de 410 000 € par mois. Son unité d’œuvre est le nombre de visionnages."
      },
      {
        "type": "p",
        "text": "**•**Édition/marketing : ce centre est responsable de l’acquisition des droits de diffusion des vidéos, de la gestion des abonnés, de la conception de bande-annonce, de moteurs de recommandation permettant de suggérer à chaque abonné des vidéos conformes à ses goûts. Le coût total affecté à ce centre est de 1 620 000 € par mois. Son unité d’œuvre est le nombre d’abonnés."
      },
      {
        "type": "p",
        "text": "**•**Frais généraux : ses missions regroupent l’administration des ventes (encaissements, déclarations et reporting aux ayants-droit), les finances, la comptabilité, la trésorerie et le contrôle de gestion. Le coût total affecté à ce centre est de 2 740 000 € par mois. Son unité d’œuvre (taux de frais) est le chiffre d’affaires hors taxes mensuel."
      },
      {
        "type": "p",
        "text": "***Calcul des coûts effectué pour le mois de janvier N (méthode des centres d’analyse)***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Abonné professionnel**",
          "**Abonné particulier**",
          "**Client occasionnel**"
        ],
        "rows": [
          [
            "**Coût de revient unitaire du visionnage d’une vidéo**",
            "1,0527 €",
            "À déterminer",
            "0,9816 €"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter le résultat mensuel en fonction de chaque catégorie de clients. Arrondir chaque coût unitaire à la quatrième décimale.**"
      },
      {
        "type": "p",
        "text": "Les charges directes variables varient en fonction du nombre de visionnages."
      },
      {
        "type": "p",
        "text": "Pour les abonnés particuliers, on compte :"
      },
      {
        "type": "p",
        "text": "(400 000 × 4) + (850 000 × 16) = 15 200 000 visionnages."
      },
      {
        "type": "p",
        "text": "Le nombre de visionnages total est de :"
      },
      {
        "type": "p",
        "text": "(400 000 × 4) + (850 000 × 16) + (12 000 × 40) + (200 000 × 1) = 15 880 000 visionnages."
      },
      {
        "type": "p",
        "text": "Le coût unitaire variable direct s’élève à 12 700 000 ÷ 15 880 000 ≈ 0,7997 €"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Technologie**",
          "**Marketing**",
          "**Frais généraux**"
        ],
        "rows": [
          [
            "**Répartition secondaire**",
            "410 000",
            "1 620 000",
            "2 740 000"
          ],
          [
            "**UO**",
            "Nombre de visionnages",
            "Nombre d’abonnés",
            "CAHT mensuel"
          ],
          [
            "**Nombre d’UO**",
            "15 880 000",
            "1 262 000",
            "17 550 000"
          ],
          [
            "**Coût de l’UO**",
            "0,0258",
            "1,2837",
            "0,1561"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU**",
          "**M**"
        ],
        "rows": [
          [
            "**Charges directes (en €)**",
            "15 200 000",
            "0,7997",
            "12 155 440"
          ],
          [
            "**Charges indirectes (en €)Centre TechnologieCentre MarketingCentre frais généraux**",
            "15 200 0001 250 00016 750 000",
            "0,02581,28370,1561",
            "392 1601 604 6252 614 675"
          ],
          [
            "**Coût de revient (en €)**",
            "15 200 000",
            "1,1031",
            "16 766 900"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Particuliers**",
          "**Professionnels**",
          "**1 vidéo**",
          "**Total**"
        ],
        "rows": [
          [
            "**CA (en €)**",
            "16 750 000",
            "600 000",
            "200 000",
            "17 550 000"
          ],
          [
            "**Coût de revient (en €)**",
            "16 766 900",
            "505 296",
            "196 320",
            "17 468 516"
          ],
          [
            "**Résultat (en €)**",
            "– 16 900",
            "94 704",
            "3 680",
            "81 484"
          ],
          [
            "**Taux de profitabilité**",
            "– 0,10 %",
            "15,78 %",
            "1,84 %",
            "0,46 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La méthode des coûts complets par centres d’analyse montre que les abonnements professionnels ont le plus fort taux de profitabilité (15,78 %) tandis que les abonnements particuliers ont un taux de profitabilité négatif de – 0,10 %. Les droits de visionnage d’une seule vidéo sont profitables de 1,84 %. Le résultat global est positif de 81 484 €."
      },
      {
        "type": "p",
        "text": "Ces tendances seraient à confirmer avec une autre méthode de calcul de coûts, comme la méthode ABC."
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode des coûts complets par les centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "Cette méthode a des intérêts et des limites dans le cadre de l’entreprise Netplus."
      },
      {
        "type": "p",
        "text": "**Remarque***Intérêts*"
      },
      {
        "type": "p",
        "text": "•Le calcul d’un coût complet correspond au besoin de l’entreprise pour un suivi opérationnel de son processus de production de services. La méthode donne un coût de revient."
      },
      {
        "type": "p",
        "text": "•Cette méthode permet d’aller plus loin que la comptabilité financière en permettant à la société Netplus de connaître un résultat par produit et par mois. Le contrôleur de gestion pourra alerter plus tôt le dirigeant sur les décisions à prendre."
      },
      {
        "type": "p",
        "text": "**Remarque***Limites*"
      },
      {
        "type": "p",
        "text": "•Cette méthode donne un coût global complet, avec la répartition de toutes les charges, focalisé sur la production du service. Elle n’intègre pas de dimensions qualitatives."
      },
      {
        "type": "p",
        "text": "•Les critères de répartition des charges directes et indirectes sont discutables : reflètent-ils bien la réalité du fonctionnement et les spécificités de chaque étape du processus de production ? La traçabilité des coûts dépend de la fiabilité des unités d’oeuvre et des clés de répartition."
      },
      {
        "type": "p",
        "text": "•Pour une entreprise produisant un service, il est préférable d’utiliser une méthode qui utilise les activités : la méthode ABC."
      }
    ]
  },
  {
    "id": "ex9",
    "label": "Cas",
    "title": "Agrilin",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "Agrilin est une coopérative spécialisée dans la culture et la transformation du lin textile, de la semence à la fibre. Ses 600 agriculteurs adhérents et 220 salariés partagent la passion du lin, l’exigence de la qualité et de l’innovation. Ils s’attachent à conserver un savoir-faire spécifique en faisant évoluer les pratiques en termes de production, de respect de l’environnement et d’engagement sociétal."
      },
      {
        "type": "p",
        "text": "La coopérative Agrilin traite du lin de différentes qualités pour obtenir de la fibre. Elle s’approvisionne pour partie auprès de coopératives agricoles, pour partie directement auprès d’agriculteurs."
      },
      {
        "type": "p",
        "text": "Le président de la coopérative, lui-même agriculteur, se demande si les fibres en bobine à usage artisanal ou industriel sont aussi profitables l’une que l’autre."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts, les marges et les résultats des deux produits obtenus en mettant en place la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "**2. Rédiger un argumentaire afin de conseiller le président de la coopérative Agrilin sur la poursuite ou non de la production des deux types de produits.**"
      },
      {
        "type": "p",
        "text": "**3. Apprécier les intérêts et les limites de la méthode de calcul des coûts dans le cadre du contexte Agrilin.**"
      },
      {
        "type": "p",
        "text": "**Document 1 — Processus de production pour obtenir de la fibre à partir des tiges de lin**"
      },
      {
        "type": "p",
        "text": "Les différentes phases du traitement pour obtenir de la fibre à partir des tiges de lin sont les suivantes."
      },
      {
        "type": "p",
        "text": "**•**Nettoyage des tiges : l’atelier de « nettoyage » a pour but d’éliminer du lin les diverses impuretés (morceaux de tiges mortes, poussières, graines restantes…). La quantité de déchets récupérés est estimée à 2 736 quintaux. Ces déchets sont vendus au prix de 7 € le quintal."
      },
      {
        "type": "p",
        "text": "**•**Atelier de préparation : toutes les tiges de lin nettoyées sont préparées afin de séparer facilement les enveloppes de racines de lin et la fibre de lin. Le lin nettoyé subit en particulier un lavage ayant essentiellement pour conséquence d’élever le taux d’humidité de la fibre afin de poursuivre la fabrication, ce qui se traduit par une augmentation du poids du lin nettoyé de 2 %. On obtient alors la fibre teillée prête à être transformée en fils."
      },
      {
        "type": "p",
        "text": "**•**Atelier de tissage : après un repos d’environ 48 heures, toute la fibre est épurée à l’aide de machines spécialisées. Le tissage permet d’obtenir du tourteau en vrac, faisant l’objet d’un stockage, et un sous-produit important, la pulpe, destinée à l’usine d’aliments pour bétail. Le poids de pulpe représente 20 % de la quantité de lin épuré."
      },
      {
        "type": "p",
        "text": "**•**Atelier de conditionnement : la fibre en vrac ayant fait l’objet de commande est conditionnée sous différentes formes :"
      },
      {
        "type": "p",
        "text": "– par bobines plastique de 1 kg pour la fibre destinée à l’usage artisanal ;"
      },
      {
        "type": "p",
        "text": "– par bobines aluminium de 50 kg pour les utilisateurs professionnels (industriels)…"
      },
      {
        "type": "p",
        "text": "**Document 2 — Données**"
      },
      {
        "type": "p",
        "text": "Pour la période, les bons de suivi des flux de matières fournissent les informations suivantes :"
      },
      {
        "type": "p",
        "text": "**•**Achats : 185 000 quintaux de fibres de lin."
      },
      {
        "type": "p",
        "text": "**•**Quantité de lin entrant dans l’atelier de nettoyage des tiges : 173 736 quintaux."
      },
      {
        "type": "p",
        "text": "**•**Ventes du mois : 217 500 bobines pour l’usage industriel et 3 625 000 bobines pour l’usage artisanal."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Menuiserie Aubel**"
      },
      {
        "type": "p",
        "text": "La Menuiserie Aubel fabrique un produit unique, la table T, à partir d’une seule matière première (le bois). Les charges indirectes sont regroupées dans deux centres : l’Atelier (unité d’œuvre : l’heure de main-d’œuvre directe) et la Distribution (unité d’œuvre : la table vendue)."
      },
      {
        "type": "p",
        "text": "Matière (bois) : stock initial de 200 planches pour 5 000 € ; achats du mois de 800 planches à 27,50 € la planche."
      },
      {
        "type": "p",
        "text": "Production du mois : 900 planches consommées ; main-d’œuvre directe de 600 heures à 20 € ; charges indirectes de l’Atelier : 18 000 € pour 600 heures. 500 tables sont fabriquées."
      },
      {
        "type": "p",
        "text": "Ventes : 450 tables à 120 € l’unité ; charges indirectes de la Distribution : 4 500 € pour 450 tables vendues. Il n’y a pas de stock initial de tables."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer le coût unitaire moyen pondéré (CUMP) du bois.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût de production d’une table.**"
      },
      {
        "type": "p",
        "text": "**3. Déterminer le coût de revient et le résultat analytique sur les tables vendues.**"
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Faïencerie Bellone**"
      },
      {
        "type": "p",
        "text": "La Faïencerie Bellone fabrique deux produits, P1 et P2, à partir de deux matières A et B, dans deux ateliers. Les charges indirectes sont réparties dans cinq centres, dont un centre auxiliaire (Entretien) réparti sur les centres principaux."
      },
      {
        "type": "p",
        "text": "**Document 1 — Charges indirectes**"
      },
      {
        "type": "p",
        "text": "Après répartition primaire (en €) : Entretien 20 000 ; Approvisionnement 15 000 ; Atelier 1 : 60 000 ; Atelier 2 : 45 000 ; Distribution 18 000."
      },
      {
        "type": "p",
        "text": "Le centre Entretien est réparti sur les centres principaux selon les clés : Approvisionnement 10 %, Atelier 1 : 40 %, Atelier 2 : 35 %, Distribution 15 %."
      },
      {
        "type": "p",
        "text": "Unités d’œuvre : Approvisionnement — le kg de matière acheté ; Atelier 1 et Atelier 2 — l’heure de main-d’œuvre directe ; Distribution — l’unité de produit vendue."
      },
      {
        "type": "p",
        "text": "**Document 2 — Matières premières**"
      },
      {
        "type": "p",
        "text": "Stocks initiaux : matière A, 1 000 kg pour 10 000 € ; matière B, 500 kg pour 10 000 €."
      },
      {
        "type": "p",
        "text": "Achats du mois : matière A, 4 000 kg à 11 € le kg ; matière B, 2 500 kg à 22 € le kg."
      },
      {
        "type": "p",
        "text": "**Document 3 — Production**"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Produit P1**",
          "**Produit P2**"
        ],
        "rows": [
          [
            "**Matière A consommée**",
            "2 000 kg",
            "2 500 kg"
          ],
          [
            "**Matière B consommée**",
            "800 kg",
            "1 500 kg"
          ],
          [
            "**MOD Atelier 1 (18 €/h)**",
            "400 h",
            "600 h"
          ],
          [
            "**MOD Atelier 2 (22 €/h)**",
            "300 h",
            "500 h"
          ],
          [
            "**Production du mois**",
            "1 000 unités",
            "1 500 unités"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 4 — Ventes**"
      },
      {
        "type": "p",
        "text": "Ventes du mois : P1, 900 unités à 140 € ; P2, 1 400 unités à 120 €. Il n’y a pas de stock initial de produits finis."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Terminer la répartition secondaire des charges indirectes (le centre Entretien est réparti sur les centres principaux).**"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût d’achat et le CUMP des matières A et B.**"
      },
      {
        "type": "p",
        "text": "**3. Calculer le coût de production de chaque produit P1 et P2.**"
      },
      {
        "type": "p",
        "text": "**4. Déterminer le coût de revient et le résultat analytique de chaque produit, puis le résultat global.**"
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Ferroval**"
      },
      {
        "type": "p",
        "text": "La société Ferroval fabrique et vend un produit fini F. Son processus met en jeu deux matières premières M et N, un produit semi-fini, un déchet et un sous-produit, à travers plusieurs centres d’analyse."
      },
      {
        "type": "p",
        "text": "**Processus de production**"
      },
      {
        "type": "p",
        "text": "Dans l’atelier Fusion, les matières M et N sont travaillées pour obtenir un produit semi-fini P ; l’opération dégage un déchet D, commercialisable. Le semi-fini P est ensuite traité dans l’atelier Moulage, qui produit le produit fini F ainsi qu’un sous-produit S, vendu en l’état. Le centre Distribution assure la commercialisation de F."
      },
      {
        "type": "p",
        "text": "**Document 1 — Charges indirectes et centres d’analyse**"
      },
      {
        "type": "p",
        "text": "Les charges indirectes de la période, soit 390 000 €, ont fait l’objet d’une répartition primaire dans six centres. Les deux centres auxiliaires (Gestion du personnel, Maintenance) se rendent des prestations réciproques."
      },
      {
        "type": "table",
        "headers": [
          "**Centre**",
          "**Total primaire (€)**"
        ],
        "rows": [
          [
            "**Gestion du personnel**",
            "60 000,00"
          ],
          [
            "**Maintenance**",
            "45 000,00"
          ],
          [
            "**Approvisionnement**",
            "33 000,00"
          ],
          [
            "**Fusion**",
            "132 000,00"
          ],
          [
            "**Moulage**",
            "96 000,00"
          ],
          [
            "**Distribution**",
            "24 000,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Clés de répartition secondaire (en %) :"
      },
      {
        "type": "table",
        "headers": [
          "**Centre à répartir**",
          "**G. pers.**",
          "**Mainten.**",
          "**Approv.**",
          "**Fusion**",
          "**Moulage**",
          "**Distrib.**"
        ],
        "rows": [
          [
            "**Gestion du personnel**",
            "—",
            "10",
            "10",
            "30",
            "35",
            "15"
          ],
          [
            "**Maintenance**",
            "20",
            "—",
            "10",
            "35",
            "25",
            "10"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Unités d’œuvre des centres principaux : Approvisionnement — le kilogramme de matière acheté ; Fusion — l’heure-machine ; Moulage — l’heure de main-d’œuvre directe ; Distribution — l’unité de produit vendue."
      },
      {
        "type": "p",
        "text": "**Document 2 — Matières premières**"
      },
      {
        "type": "p",
        "text": "Stocks au début du mois : matière M, 2 000 kg pour 16 000 € ; matière N, 3 000 kg pour 15 000 €."
      },
      {
        "type": "p",
        "text": "Achats du mois : matière M, 10 000 kg à 8,60 € le kg ; matière N, 12 000 kg à 5,50 € le kg."
      },
      {
        "type": "p",
        "text": "**Document 3 — Production du mois**"
      },
      {
        "type": "p",
        "text": "Atelier Fusion : consommations de 9 000 kg de M et de 13 000 kg de N ; main-d’œuvre directe de 3 000 heures à 18 € ; 4 000 heures-machine. La production ressort à 20 000 kg de semi-fini P et à 500 kg de déchet D, vendu 4 € le kg (prix net d’évacuation). La totalité de P est transférée à l’atelier Moulage."
      },
      {
        "type": "p",
        "text": "Atelier Moulage : main-d’œuvre directe de 2 000 heures à 25 € (l’heure de MOD est l’unité d’œuvre du centre). L’atelier produit 4 000 unités de produit fini F et 500 unités de sous-produit S. Le sous-produit S est vendu 20 € l’unité ; son coût de production est évalué à son prix de vente diminué de frais de distribution de 2 € par unité et d’une marge bénéficiaire égale à 10 % du prix de vente."
      },
      {
        "type": "p",
        "text": "En-cours de l’atelier Moulage : 8 000 € au début du mois, 12 000 € en fin de mois."
      },
      {
        "type": "p",
        "text": "**Document 4 — Ventes**"
      },
      {
        "type": "p",
        "text": "Stock initial de produit fini F : 500 unités pour 90 000 €. Ventes du mois : 4 200 unités à 200 € l’unité."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Terminer la répartition des charges indirectes en résolvant le système des prestations réciproques des deux centres auxiliaires, puis présenter le total de chaque centre principal.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût d’achat des matières M et N, puis leur coût unitaire moyen pondéré (CUMP). Arrondir les coûts unitaires à la quatrième décimale.**"
      },
      {
        "type": "p",
        "text": "**3. Calculer le coût de production du semi-fini P, en tenant compte du déchet commercialisable D.**"
      },
      {
        "type": "p",
        "text": "**4. Calculer le coût de production des produits finis F terminés, en tenant compte du sous-produit S et des en-cours.**"
      },
      {
        "type": "p",
        "text": "**5. Calculer le CUMP du produit fini F.**"
      },
      {
        "type": "p",
        "text": "**6. Déterminer le coût de revient et le résultat analytique des produits finis F vendus.**"
      },
      {
        "type": "p",
        "text": "**7. Commenter l’origine du résultat et l’intérêt du découpage en centres d’analyse.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts, les marges et les résultats des deux produits obtenus en mettant en place la méthode des centres d’analyse.**"
      },
      {
        "type": "p",
        "text": "Le schéma technique traduit le processus industriel de transformation de ressources. Dans le cas d’Agrilin, il est le suivant :"
      },
      {
        "type": "p",
        "text": "Commentaires"
      },
      {
        "type": "p",
        "text": "•Il a été retenu la symbolique suivante : triangle = stock ; rectangle = atelier."
      },
      {
        "type": "p",
        "text": "•Le processus de fabrication se définit ainsi : transformation de la matière MP1 en produit fini PF."
      },
      {
        "type": "p",
        "text": "•Ce processus est décomposé en plusieurs phases de production qui se définissent par rapport au produit principal."
      },
      {
        "type": "p",
        "text": "•Les valeurs numériques représentent la valeur des flux entrant et sortant des différents lieux : ateliers ou stocks. Ce sont ces valeurs qui peuvent être retenues pour évaluer l’activité des centres d’analyse ; elles représentent le nombre d’unités d’oeuvre de ces mêmes centres."
      },
      {
        "type": "p",
        "text": "•Le schéma de production permet de connaître l’enchaînement des coûts à calculer :"
      },
      {
        "type": "p",
        "text": "– avant le stockage des matières premières : coût d’achat (un par matière première stockée) ;"
      },
      {
        "type": "p",
        "text": "– entre le stockage des matières premières et des produits finis : coûts de production avec, en général, un calcul de coût par phase du processus de fabrication ;"
      },
      {
        "type": "p",
        "text": "– après le stockage des produits finis : coûts de revient (un par produit vendu)."
      },
      {
        "type": "p",
        "text": "Les prestations réciproques concernent les centres force motrice (F) et gestion du matériel (M) ; elles peuvent s’écrire ainsi :"
      },
      {
        "type": "p",
        "text": "F = 174 000 + 15 % M"
      },
      {
        "type": "p",
        "text": "M = 22 000 + 10 % F"
      },
      {
        "type": "p",
        "text": "Après résolution du système de deux équations à deux inconnues, on obtient :"
      },
      {
        "type": "p",
        "text": "F = 180 000 et M = 40 000."
      },
      {
        "type": "p",
        "text": "Le tableau de répartition des charges indirectes peut alors être finalisé :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Force motrice**",
          "**Gestion du matériel**",
          "**Transport**",
          "**Nettoyage**",
          "**Mélange**",
          "**Tissage**",
          "**Condition-nement**"
        ],
        "rows": [
          [
            "**Totaux primaires**",
            "174 000",
            "22 000",
            "416 400",
            "59 448",
            "484 452",
            "770 100",
            "493 040"
          ],
          [
            "**Force motrice**",
            "– 180 000",
            "18 000",
            "",
            "18 000",
            "36 000",
            "90 000",
            "18 000"
          ],
          [
            "**Gestion du matériel**",
            "6 000",
            "– 40 000",
            "6 000",
            "6 000",
            "6 000",
            "12 000",
            "4 000"
          ],
          [
            "**Totaux secondaires**",
            "0",
            "0",
            "422 400",
            "83 448",
            "526 452",
            "872 100",
            "515 040"
          ],
          [
            "**Nature de l’UO**",
            "",
            "",
            "Quintal transporté",
            "Heure-machine",
            "Heure-machine",
            "Quintal tissé",
            "20 € de ventes HT"
          ],
          [
            "**Nombre d’UO**",
            "",
            "",
            "330 000",
            "3 477",
            "4 618",
            "174 420",
            "261 000"
          ],
          [
            "**Coût de l’UO**",
            "",
            "",
            "1,28",
            "24,00",
            "114,00",
            "5,00",
            "1,97"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Le coût d’achat concerne, dans ce cas, uniquement celui du lin approvisionné**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coût d’achat du lin**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Charges directesAchats**",
            "185 000",
            "12,84",
            "2 375 400"
          ],
          [
            "**Charges indirectesApprovisionnement**",
            "185 000",
            "1,28",
            "236 800"
          ],
          [
            "**Coût d’achat**",
            "185 000",
            "14,12",
            "2 612 200"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compte d’inventaire permanent du lin approvisionné**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU**",
          "**M**"
        ],
        "rows": [
          [
            "**Stock initialEntrées**",
            "25 350185 000",
            "14,12",
            "332 7002 612 200"
          ],
          [
            "**Total**",
            "210 350",
            "14,00",
            "2 944 900"
          ],
          [
            "**SortiesStock final**",
            "173 73636 614",
            "14,00",
            "2 432 304512 596"
          ],
          [
            "**Total**",
            "210 350",
            "–",
            "2 944 900"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les différents comptes de production de la société intègrent des déchets valorisables dans l’atelier de nettoyage, des en-cours et un sous-produit dans l’atelier de tissage."
      },
      {
        "type": "p",
        "text": "**Remarque***Coût de production du lin nettoyé*"
      },
      {
        "type": "p",
        "text": "Le déchet produit est vendu et la recette accessoire générée par la vente des déchets vient en diminution du coût du produit principal : ici le lin nettoyé."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Atelier nettoyage**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Charges directesLin (sorties de stock)**",
            "173 736",
            "14,00",
            "2 432 304"
          ],
          [
            "**Charges indirectesNettoyage**",
            "3 477",
            "24,00",
            "83 448"
          ],
          [
            "**Charges de la période**",
            "–",
            "–",
            "2 515 752"
          ],
          [
            "**Ventes de déchets**",
            "2 736",
            "7,00",
            "– 19 152"
          ],
          [
            "**Coût de production du lin nettoyé**",
            "171 000",
            "14,60",
            "2 496 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coût de production du lin épuré**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Atelier de préparation**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Charges directesLin (sorties de stock)**",
            "171 000",
            "14,60",
            "2 496 600"
          ],
          [
            "**MOD**",
            "2 100",
            "50,00",
            "11 856"
          ],
          [
            "**Charges indirectesPréparation**",
            "4 618",
            "114,00",
            "526 452"
          ],
          [
            "**Coût de production du lin épuré**",
            "174 420",
            "17,40",
            "3 034 908"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Coût de production du lin en vrac*"
      },
      {
        "type": "p",
        "text": "Rappel : Un sous-produit, « la pulpe », apparaît au niveau de l’atelier de tissage. Le texte précise que le coût de production de la pulpe est établi à partir de sa valeur commerciale (29 € le quintal) estimée au prix du marché, déduction faite d’une décote forfaitaire de 2,5 € par quintal pour frais de distribution et de 8 € par quintal de main-d’oeuvre directe pour frais de manutention."
      },
      {
        "type": "p",
        "text": "**Remarque***Calcul du coût de production du sous-produit*"
      },
      {
        "type": "p",
        "text": "Le calcul du coût de la pulpe est conventionnel. Le prix de vente du marché est égal arbitrairement au coût de revient du sous-produit. Déduire de ce coût de revient les coûts de commercialisation et de manutention permet d’obtenir un coût de production conventionnel au sortir de l’atelier de tissage."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coût de la pulpe de lin**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Quantité de pulpe obtenue**",
            "174 420",
            "0,20",
            "34 884"
          ],
          [
            "**Prix de vente**",
            "34 884",
            "29,00",
            "1 011 636"
          ],
          [
            "**Frais de distribution**",
            "34 884",
            "– 2,50",
            "– 87 210"
          ],
          [
            "**Frais de manutention**",
            "34 884",
            "– 8,00",
            "– 279 072"
          ],
          [
            "**Coût de production**",
            "34 884",
            "18,50",
            "645 354"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coût de production de la fibre en vrac**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Charges directesFibre épurée**",
            "174 420",
            "17,40",
            "3 034 908"
          ],
          [
            "**MOD**",
            "–",
            "–",
            "44 205"
          ],
          [
            "**Charges indirectesTissage**",
            "174 420",
            "5,00",
            "872 100"
          ],
          [
            "**Charges de la période**",
            "–",
            "–",
            "3 951 213"
          ],
          [
            "**Coût du sous-produit**",
            "–",
            "–",
            "– 645 354"
          ],
          [
            "**Coût de production de la fibre en vrac**",
            "139 536",
            "23,69",
            "3 305 859"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Il est maintenant nécessaire de présenter le compte d’inventaire permanent du lin stocké en vrac avant de déterminer les coûts de revient. Ce stock présente une différence d’inventaire de dix quintaux (voir l’état physique du stock de fibre de lin donné)."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Fibre en vrac**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Stock initial**",
            "30 464",
            "–",
            "901 136"
          ],
          [
            "**Entrées**",
            "139 536",
            "23,69",
            "3 305 859"
          ],
          [
            "**Total**",
            "170 000",
            "24,75",
            "4 206 995"
          ],
          [
            "**Sorties**",
            "145 000",
            "24,75",
            "3 588 319,26"
          ],
          [
            "**Différence d’inventaire**",
            "10",
            "24,75",
            "247,47"
          ],
          [
            "**Stock final**",
            "24 990",
            "–",
            "618 428,27"
          ],
          [
            "**Total**",
            "170 000",
            "–",
            "4 206 995"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Agrilin produit deux types de produits selon les clientèles : bobines de 50 kg pour les industriels et bobines de 1 kg pour les artisans."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Fibre en bobines de 1 kg**",
          "**Fibre en bobines de 50 kg**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "M",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Charges directes**"
          ],
          [
            "**Fibre en vrac**",
            "36 250",
            "24,75",
            "897 079,82",
            "108 750",
            "24,75",
            "2 691 239,45"
          ],
          [
            "**Emballages**",
            "3 625 000",
            "0,06",
            "217 500",
            "217 500",
            "0,80",
            "174 000"
          ],
          [
            "**MOD**",
            "",
            "",
            "14 500",
            "",
            "",
            "2 610"
          ],
          [
            "**Charges indirectes**"
          ],
          [
            "**Conditionnement**",
            "97 875",
            "1,97",
            "193 140",
            "163 125",
            "1,97",
            "321 900"
          ],
          [
            "**Transport**",
            "36 250",
            "1,28",
            "46 400",
            "108 750",
            "1,25",
            "139 200"
          ],
          [
            "**Coût de revient**",
            "3 625 000",
            "0,38",
            "1 368 619,82",
            "217 500",
            "15,31",
            "3 328 949,45"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les résultats analytiques pour les deux types de conditionnement se présentent ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Fibre en bobines de 1 kg**",
          "**Fibre en bobines de 50 kg**"
        ],
        "rows": [
          [
            "Q",
            "CU",
            "M",
            "Q",
            "CU",
            "M"
          ],
          [
            "**Chiffre d’affaires**",
            "3 625 000",
            "0,54",
            "1 957 500",
            "217 500",
            "15",
            "3 262 500"
          ],
          [
            "**Coût de revient des produits vendus**",
            "3 625 000",
            "0,38",
            "1 368 619,82",
            "217 500",
            "15,31",
            "3 328 949,45"
          ],
          [
            "**Résultats**",
            "3 625 000",
            "0,16",
            "588 880,18",
            "217 500",
            "– 0,43",
            "-66 449,45"
          ],
          [
            "**Taux de profitabilité**",
            "",
            "",
            "30,08 %",
            "",
            "",
            "-2,04 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Interprétation : Nous constatons que les fibres en bobines de 50 kg sont déficitaires (– 2,04 % de profitabilité) alors que les bobines de 1 kg sont excédentaires avec un taux de profitabilité de 30,08 %. Les fibres en bobines de 50 kg présentent un poids important de charges indirectes."
      },
      {
        "type": "p",
        "text": "**2. Rédiger un argumentaire afin de conseiller le président de la coopérative Agrilin sur la poursuite ou non de la production des deux types de produits.**"
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
        "text": "– comparaison de la profitabilité des deux produits et analyse des prix de vente ;"
      },
      {
        "type": "p",
        "text": "– justification des divergences de résultats entre les deux modèles (charges directes et indirectes) ;"
      },
      {
        "type": "p",
        "text": "– pertinence des unités d’oeuvre ;"
      },
      {
        "type": "p",
        "text": "– conclusion permettant de conseiller le dirigeant afin qu’il arbitre entre les deux produits."
      },
      {
        "type": "p",
        "text": "La coopérative Agrilin est une structure diversifiée qui fabrique notamment des fibres en bobines, en deux conditionnements différents : 1 kg pour les artisans et 50 kg pour les industriels. Le président de la coopérative s’inquiète du niveau de profitabilité de ces deux produits."
      },
      {
        "type": "p",
        "text": "Les taux de profitabilité entre les deux produits divergent. Les fibres en bobines de 50 kg sont déficitaires (– 2,04 % de profitabilité) alors que les bobines de 1 kg sont excédentaires avec un taux de profitabilité de 30,08 %. Le résultat global est positif de 522 431 €. Il ne faut donc pas stopper immédiatement la fabrication des bobines de 50 kg. Nous conseillons au dirigeant de la coopérative de calculer la marge sur coût variable pour éclairer sa prise de décision sur l’arrêt ou non de ce format."
      },
      {
        "type": "p",
        "text": "Par ailleurs, le prix de vente d’une bobine de 1 kg s’élève à 0,54 € tandis qu’une bobine de 50 kg est vendue 15 € soit 0,30 € le kg. Cet écart de prix détériore la profitabilité des bobines de 50 kg. Le prix de vente n’est peut-être pas assez élevé mais il faudrait étudier le prix de vente des concurrents pour un produit similaire. Le marché est peut-être concurrentiel, le dirigeant devra trancher sur l’éventuel nouveau prix de vente à proposer."
      },
      {
        "type": "p",
        "text": "Au niveau des charges directes, les matières premières sont communes aux deux types de produits. Il existe peu d’économies d’échelle possibles car les agriculteurs adhérents cherchent à écouler leurs productions de lin. C’est l’essence même d’une coopérative."
      },
      {
        "type": "p",
        "text": "Au niveau des charges indirectes, la répartition semble pertinente, c’est-à-dire que chaque type de modèles absorbe les charges indirectes qui doit lui revenir. Cependant, des unités d’oeuvre peuvent être discutables. Par exemple, au niveau du poste « Conditionnement », le contrôleur de gestion pourrait choisir comme unité d’oeuvre le nombre de bobines au lieu de 20 € de ventes HT. Cet arbitrage permettrait notamment de réduire la part de charges indirectes sur les bobines de 50 kg et, par ricochet, de faire progresser la profitabilité."
      },
      {
        "type": "p",
        "text": "En somme, le président de la coopérative Agrilin doit envisager soit une hausse du prix de vente des bobines de 50 kg, soit une évolution d’une unité d’oeuvre s’il souhaite mieux équilibrer les profitabilités des deux produits."
      },
      {
        "type": "p",
        "text": "**3. Apprécier les intérêts et les limites de la méthode de calcul des coûts dans le cadre du contexte Agrilin.**"
      },
      {
        "type": "p",
        "text": "Le principal intérêt de la méthode des centres d’analyse est de modérer les insuffisances de la comptabilité financière en permettant à la coopérative Agrilin d’obtenir un résultat par produit et par mois (ici décembre). L’ensemble des tableaux contribue au calcul des taux de profitabilité, offrant la possibilité de réagir si besoin, comme c’est le cas ici."
      },
      {
        "type": "p",
        "text": "Cependant, il est difficile pour les contrôleurs de gestion d’effectuer un choix d’unités d’oeuvre car la proportion de charges indirectes par rapport au total des charges va croissant d’année en année. C’est pour cette raison que certaines structures préfèrent calculer des coûts partiels, d’autant plus que la coopérative Agrilin développe d’autres produits."
      },
      {
        "type": "p",
        "text": "Enfin, la mise en place de la méthode des centres d’analyse est lourde et un changement de méthode (méthode ABC) est avant tout une démarche managériale requérant l’adhésion de l’ensemble des salariés de la coopérative Agrilin."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Menuiserie Aubel**"
      },
      {
        "type": "p",
        "text": "1. CUMP du bois"
      },
      {
        "type": "p",
        "text": "CUMP = (5 000 + 800 × 27,50) / (200 + 800) = (5 000 + 22 000) / 1 000 = 27 000 / 1 000 = 27,00 € la planche."
      },
      {
        "type": "p",
        "text": "2. Coût de production d’une table"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Quantité**",
          "**Coût unit.**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Bois consommé**",
            "900 planches",
            "27,00 €",
            "24 300,00 €"
          ],
          [
            "**Main-d’œuvre directe**",
            "600 h",
            "20,00 €",
            "12 000,00 €"
          ],
          [
            "**Charges indirectes Atelier**",
            "600 h",
            "30,00 €",
            "18 000,00 €"
          ],
          [
            "**Coût de production**",
            "**500 tables**",
            "**108,60 €**",
            "**54 300,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût indirect de l’atelier par heure : 18 000 / 600 = 30,00 € ; coût de production unitaire : 54 300 / 500 = 108,60 €."
      },
      {
        "type": "p",
        "text": "3. Coût de revient et résultat des tables vendues"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Quantité**",
          "**Coût unit.**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Coût de production des tables vendues**",
            "450",
            "108,60 €",
            "48 870,00 €"
          ],
          [
            "**Charges indirectes Distribution**",
            "450",
            "10,00 €",
            "4 500,00 €"
          ],
          [
            "**Coût de revient**",
            "**450**",
            "**118,60 €**",
            "**53 370,00 €**"
          ],
          [
            "**Chiffre d’affaires**",
            "450",
            "120,00 €",
            "54 000,00 €"
          ],
          [
            "**Résultat analytique**",
            "**450**",
            "**1,40 €**",
            "**630,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat est positif mais très faible (1,40 € par table, environ 1 % du prix de vente) : la table T dégage à peine une marge. Ce diagnostic invite à revoir le prix de vente ou à réduire le coût de production (achats de bois, temps de main-d’œuvre)."
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Faïencerie Bellone**"
      },
      {
        "type": "p",
        "text": "1. Répartition secondaire des charges indirectes"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Entretien**",
          "**Approv.**",
          "**Atelier 1**",
          "**Atelier 2**",
          "**Distrib.**"
        ],
        "rows": [
          [
            "**Totaux primaires**",
            "20 000,00",
            "15 000,00",
            "60 000,00",
            "45 000,00",
            "18 000,00"
          ],
          [
            "**Entretien (10/40/35/15 %)**",
            "−20 000,00",
            "2 000,00",
            "8 000,00",
            "7 000,00",
            "3 000,00"
          ],
          [
            "**Totaux secondaires**",
            "**0,00**",
            "**17 000,00**",
            "**68 000,00**",
            "**52 000,00**",
            "**21 000,00**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Coût d’achat et CUMP des matières"
      },
      {
        "type": "p",
        "text": "Le centre Approvisionnement (17 000 €) est imputé au kilogramme acheté, soit 6 500 kg : coût de l’unité d’œuvre = 17 000 / 6 500 = 2,6154 €/kg."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Matière A**",
          "**Matière B**"
        ],
        "rows": [
          [
            "**Prix d’achat**",
            "44 000,00 € (4 000 × 11)",
            "55 000,00 € (2 500 × 22)"
          ],
          [
            "**Frais d’approvisionnement (× 2,6154)**",
            "10 461,60 €",
            "6 538,50 €"
          ],
          [
            "**Coût d’achat**",
            "**54 461,60 €**",
            "**61 538,50 €**"
          ],
          [
            "**Stock initial**",
            "10 000,00 € (1 000 kg)",
            "10 000,00 € (500 kg)"
          ],
          [
            "**Total / quantité en stock**",
            "64 461,60 € / 5 000 kg",
            "71 538,50 € / 3 000 kg"
          ],
          [
            "**CUMP**",
            "**12,8923 €/kg**",
            "**23,8462 €/kg**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Coût de production de P1 et P2"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**P1 (1 000 u)**",
          "**P2 (1 500 u)**"
        ],
        "rows": [
          [
            "**Matière A consommée**",
            "25 784,60 €",
            "32 230,75 €"
          ],
          [
            "**Matière B consommée**",
            "19 076,96 €",
            "35 769,30 €"
          ],
          [
            "**MOD Atelier 1**",
            "7 200,00 €",
            "10 800,00 €"
          ],
          [
            "**Charges indirectes Atelier 1 (68 €/h)**",
            "27 200,00 €",
            "40 800,00 €"
          ],
          [
            "**MOD Atelier 2**",
            "6 600,00 €",
            "11 000,00 €"
          ],
          [
            "**Charges indirectes Atelier 2 (65 €/h)**",
            "19 500,00 €",
            "32 500,00 €"
          ],
          [
            "**Coût de production**",
            "**105 361,56 €**",
            "**163 100,05 €**"
          ],
          [
            "**Coût unitaire**",
            "**105,3616 €**",
            "**108,7334 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "4. Coût de revient et résultat analytique"
      },
      {
        "type": "p",
        "text": "Le centre Distribution (21 000 €) est imputé à l’unité vendue, soit 2 300 u : coût de l’unité d’œuvre = 21 000 / 2 300 = 9,1304 €/u."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**P1 (900 vendus)**",
          "**P2 (1 400 vendus)**"
        ],
        "rows": [
          [
            "**Coût de production des produits vendus**",
            "94 825,44 €",
            "152 226,76 €"
          ],
          [
            "**Charges indirectes Distribution**",
            "8 217,36 €",
            "12 782,56 €"
          ],
          [
            "**Coût de revient**",
            "**103 042,80 €**",
            "**165 009,32 €**"
          ],
          [
            "**Chiffre d’affaires**",
            "126 000,00 €",
            "168 000,00 €"
          ],
          [
            "**Résultat analytique**",
            "**22 957,20 €**",
            "**2 990,68 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat global s’élève à 25 947,88 € (22 957,20 + 2 990,68). Les deux produits sont bénéficiaires, mais P2 dégage une marge très mince (2 990,68 € pour 168 000 € de ventes, soit moins de 2 %) tandis que P1 est nettement plus rentable (environ 18 %). Le calcul par produit montre que la rentabilité d’ensemble repose surtout sur P1 : il faudrait analyser le prix ou le coût de P2 avant d’en développer les volumes."
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Ferroval**"
      },
      {
        "type": "p",
        "text": "1. Répartition secondaire — prestations réciproques"
      },
      {
        "type": "p",
        "text": "Notons GP et MA les totaux des deux centres auxiliaires après répartition. Ils se rendent des prestations réciproques : GP = 60 000 + 0,20 MA et MA = 45 000 + 0,10 GP. En substituant : 0,98 GP = 60 000 + 0,20 × 45 000 = 69 000, d’où GP = 70 408,16 € puis MA = 45 000 + 0,10 × 70 408,16 = 52 040,82 €."
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**G. pers.**",
          "**Mainten.**",
          "**Approv.**",
          "**Fusion**",
          "**Moulage**",
          "**Distrib.**"
        ],
        "rows": [
          [
            "**Totaux primaires**",
            "60 000,00",
            "45 000,00",
            "33 000,00",
            "132 000,00",
            "96 000,00",
            "24 000,00"
          ],
          [
            "**Gestion du personnel**",
            "−70 408,16",
            "7 040,82",
            "7 040,82",
            "21 122,45",
            "24 642,86",
            "10 561,22"
          ],
          [
            "**Maintenance**",
            "10 408,16",
            "−52 040,82",
            "5 204,08",
            "18 214,29",
            "13 010,20",
            "5 204,08"
          ],
          [
            "**Totaux secondaires**",
            "**0,00**",
            "**0,00**",
            "**45 244,90**",
            "**171 336,74**",
            "**133 653,06**",
            "**39 765,30**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Coût d’achat et CUMP des matières"
      },
      {
        "type": "p",
        "text": "Le centre Approvisionnement (45 244,90 €) est imputé au kilogramme acheté, soit 22 000 kg : coût de l’unité d’œuvre = 45 244,90 / 22 000 = 2,0566 €/kg."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Matière M**",
          "**Matière N**"
        ],
        "rows": [
          [
            "**Prix d’achat**",
            "86 000,00 € (10 000 × 8,60)",
            "66 000,00 € (12 000 × 5,50)"
          ],
          [
            "**Frais d’approvisionnement (× 2,0566)**",
            "20 566,00 €",
            "24 679,20 €"
          ],
          [
            "**Coût d’achat**",
            "**106 566,00 €**",
            "**90 679,20 €**"
          ],
          [
            "**Stock initial**",
            "16 000,00 € (2 000 kg)",
            "15 000,00 € (3 000 kg)"
          ],
          [
            "**Total / quantité en stock**",
            "122 566,00 € / 12 000 kg",
            "105 679,20 € / 15 000 kg"
          ],
          [
            "**CUMP**",
            "**10,2138 €/kg**",
            "**7,0453 €/kg**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Coût de production du semi-fini P (atelier Fusion)"
      },
      {
        "type": "p",
        "text": "Le centre Fusion (171 336,74 €) est imputé à l’heure-machine, soit 4 000 h : coût de l’unité d’œuvre = 171 336,74 / 4 000 = 42,8342 €/h."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Quantité**",
          "**Coût unit.**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Matière M consommée**",
            "9 000 kg",
            "10,2138 €",
            "91 924,20 €"
          ],
          [
            "**Matière N consommée**",
            "13 000 kg",
            "7,0453 €",
            "91 588,90 €"
          ],
          [
            "**MOD Fusion**",
            "3 000 h",
            "18,00 €",
            "54 000,00 €"
          ],
          [
            "**Charges indirectes Fusion**",
            "4 000 h",
            "42,8342 €",
            "171 336,74 €"
          ],
          [
            "**Déchet D commercialisé**",
            "500 kg",
            "− 4,00 €",
            "− 2 000,00 €"
          ],
          [
            "**Coût de production de P**",
            "**20 000 kg**",
            "**20,3425 €**",
            "**406 849,84 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "4. Coût de production des produits finis F (atelier Moulage)"
      },
      {
        "type": "p",
        "text": "Le sous-produit S est évalué par la méthode de la marge : coût estimé = 20 − 2 (frais de distribution) − 2 (marge de 10 % × 20) = 16 € l’unité, soit 500 × 16 = 8 000 € portés en déduction. Les en-cours se traitent en ajoutant l’en-cours initial et en retranchant l’en-cours final."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Stock initial d’en-cours**",
            "8 000,00 €"
          ],
          [
            "**Coût de production de P transféré**",
            "406 849,84 €"
          ],
          [
            "**MOD Moulage (2 000 h × 25)**",
            "50 000,00 €"
          ],
          [
            "**Charges indirectes Moulage**",
            "133 653,06 €"
          ],
          [
            "**Sous-produit S évalué (500 × 16)**",
            "− 8 000,00 €"
          ],
          [
            "**Stock final d’en-cours**",
            "− 12 000,00 €"
          ],
          [
            "**Coût de production des 4 000 F terminés**",
            "**578 502,90 €**"
          ],
          [
            "**Coût unitaire de F**",
            "**144,6257 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "5. CUMP du produit fini F"
      },
      {
        "type": "p",
        "text": "CUMP F = (90 000 + 578 502,90) / (500 + 4 000) = 668 502,90 / 4 500 = 148,5562 € l’unité."
      },
      {
        "type": "p",
        "text": "6. Coût de revient et résultat analytique des F vendus"
      },
      {
        "type": "p",
        "text": "Le centre Distribution (39 765,30 €) est imputé à l’unité vendue, soit 4 200 u (9,4679 €/u)."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Quantité**",
          "**Coût unit.**",
          "**Montant**"
        ],
        "rows": [
          [
            "**Coût de production des F vendus**",
            "4 200 u",
            "148,5562 €",
            "623 936,04 €"
          ],
          [
            "**Charges indirectes Distribution**",
            "4 200 u",
            "9,4679 €",
            "39 765,30 €"
          ],
          [
            "**Coût de revient**",
            "**4 200 u**",
            "**158,0241 €**",
            "**663 701,34 €**"
          ],
          [
            "**Chiffre d’affaires**",
            "4 200 u",
            "200,00 €",
            "840 000,00 €"
          ],
          [
            "**Résultat analytique**",
            "**4 200 u**",
            "**41,9759 €**",
            "**176 298,66 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "7. Commentaire"
      },
      {
        "type": "p",
        "text": "Le résultat analytique de 176 298,66 € (soit 41,98 € par unité, environ 21 % du prix de vente) provient de l’écart entre le prix de vente (200 €) et le coût de revient (158,02 €). Le découpage en centres d’analyse localise la formation du coût : l’atelier Fusion, qui concentre les matières et l’essentiel des charges indirectes (171 337 €), pèse le plus lourd ; la valorisation du déchet et du sous-produit allège le coût des produits principaux ; le traitement des prestations réciproques évite de fausser l’imputation des centres auxiliaires. Ce niveau de détail est indispensable pour piloter les marges, mais il dépend de clés de répartition et d’unités d’œuvre dont la pertinence doit être régulièrement contrôlée."
      }
    ]
  }
];
