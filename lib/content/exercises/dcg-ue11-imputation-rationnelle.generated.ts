// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A7.1",
    "title": "Menuiserie Bonnet",
    "statement": [
      {
        "type": "p",
        "text": "La menuiserie Bonnet fabrique un modèle unique de table. Son activité normale mensuelle est de 5 000 tables. Les charges fixes mensuelles s’élèvent à 90 000 € et le coût variable unitaire à 30 €."
      },
      {
        "type": "p",
        "text": "Au mois de mars, la production réelle n’a été que de 4 000 tables."
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Calculer le coefficient d’imputation rationnelle du mois de mars."
      },
      {
        "type": "p",
        "text": "2. Calculer le coût d’imputation rationnelle unitaire d’une table."
      },
      {
        "type": "p",
        "text": "3. Déterminer la différence d’imputation et l’interpréter."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. Coefficient d’imputation rationnelle"
      },
      {
        "type": "p",
        "text": "Coefficient = 4 000 / 5 000 = 0,80. Inférieur à 1 : l’entreprise est en sous-activité (− 20 %)."
      },
      {
        "type": "p",
        "text": "2. Coût d’imputation rationnelle unitaire"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Mars**"
        ],
        "rows": [
          [
            "**Coefficient (4 000 / 5 000)**",
            "0,80"
          ],
          [
            "**Charges variables (4 000 × 30)**",
            "120 000 €"
          ],
          [
            "**Charges fixes imputées (90 000 × 0,80)**",
            "72 000 €"
          ],
          [
            "**Coût d’imputation rationnelle total**",
            "192 000 €"
          ],
          [
            "**Coût unitaire (192 000 / 4 000)**",
            "48 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le coût unitaire de 48 € se décompose en 30 € de charges variables et 18 € de charges fixes imputées (72 000 / 4 000)."
      },
      {
        "type": "p",
        "text": "3. Différence d’imputation"
      },
      {
        "type": "p",
        "text": "DIR = 90 000 − 72 000 = 18 000 € (> 0) : coût de sous-activité. Il chiffre le coût de la capacité inemployée (20 % des charges fixes), indépendant du niveau de production."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A7.2",
    "title": "Fonderie Clairval",
    "statement": [
      {
        "type": "p",
        "text": "La fonderie Clairval produit des pièces mécaniques. Son activité normale est de 2 000 pièces par mois, pour des charges fixes mensuelles de 60 000 € et un coût variable unitaire de 45 €."
      },
      {
        "type": "p",
        "text": "La production réelle a été de 1 600 pièces en janvier et de 2 400 pièces en février."
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Pour chaque mois, calculer le coefficient d’imputation rationnelle, le coût complet réel unitaire et le coût d’imputation rationnelle unitaire."
      },
      {
        "type": "p",
        "text": "2. Calculer la différence d’imputation de chaque mois et préciser s’il s’agit d’un coût de sous-activité ou d’un boni de suractivité."
      },
      {
        "type": "p",
        "text": "3. Que constate-t-on sur le coût unitaire d’imputation rationnelle d’un mois à l’autre ? Expliquer l’intérêt de la méthode."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. et 2. Coefficients, coûts unitaires et différences d’imputation"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Janvier**",
          "**Février**"
        ],
        "rows": [
          [
            "**Production réelle**",
            "1 600",
            "2 400"
          ],
          [
            "**Coefficient**",
            "0,80",
            "1,20"
          ],
          [
            "**Coût complet réel unitaire**",
            "82,50 €",
            "70,00 €"
          ],
          [
            "**Charges fixes imputées**",
            "48 000 €",
            "72 000 €"
          ],
          [
            "**Coût IR total**",
            "120 000 €",
            "180 000 €"
          ],
          [
            "**Coût IR unitaire**",
            "75,00 €",
            "75,00 €"
          ],
          [
            "**Différence d’imputation**",
            "+12 000 € (mali)",
            "− 12 000 € (boni)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Stabilisation du coût"
      },
      {
        "type": "p",
        "text": "Le coût d’imputation rationnelle unitaire est identique les deux mois (75 €), alors que le coût complet réel varie de 82,50 € à 70 €. La méthode neutralise l’effet du niveau d’activité : elle isole ce qui relève de la production de ce qui relève du taux d’emploi de la structure."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A7.3",
    "title": "Ateliers Verdon",
    "statement": [
      {
        "type": "p",
        "text": "Les Ateliers Verdon comprennent deux centres. Pour le mois considéré, les données sont les suivantes :"
      },
      {
        "type": "p",
        "text": "– Atelier Usinage : activité normale 10 000 heures, charges fixes 200 000 €, activité réelle 9 000 heures ;"
      },
      {
        "type": "p",
        "text": "– Atelier Montage : activité normale 8 000 heures, charges fixes 160 000 €, activité réelle 8 800 heures."
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Calculer le coefficient d’imputation rationnelle de chaque atelier."
      },
      {
        "type": "p",
        "text": "2. Calculer, pour chaque atelier, le montant des charges fixes imputées et la différence d’imputation."
      },
      {
        "type": "p",
        "text": "3. Déterminer la différence d’imputation totale de l’entreprise et commenter : peut-on utiliser un coefficient global ?"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. et 2. Coefficients, charges imputées et différences par centre"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Usinage**",
          "**Montage**",
          "**Total**"
        ],
        "rows": [
          [
            "**Activité normale (h)**",
            "10 000",
            "8 000",
            "—"
          ],
          [
            "**Activité réelle (h)**",
            "9 000",
            "8 800",
            "—"
          ],
          [
            "**Coefficient**",
            "0,90",
            "1,10",
            "—"
          ],
          [
            "**Charges fixes**",
            "200 000 €",
            "160 000 €",
            "360 000 €"
          ],
          [
            "**Charges fixes imputées**",
            "180 000 €",
            "176 000 €",
            "356 000 €"
          ],
          [
            "**Différence d’imputation**",
            "+20 000 €",
            "− 16 000 €",
            "+4 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Différence d’imputation totale"
      },
      {
        "type": "p",
        "text": "DIR totale = 20 000 − 16 000 = 4 000 € (coût de sous-activité net). Le coefficient s’applique centre par centre : on additionne les différences d’imputation. Un coefficient global écraserait les situations opposées des deux ateliers et fausserait le résultat."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "A7.4",
    "title": "Chocolaterie Naudin",
    "statement": [
      {
        "type": "p",
        "text": "La chocolaterie Naudin fabrique des boîtes de chocolats vendues 15 € l’unité. Son activité normale est de 20 000 boîtes par mois ; les charges fixes s’élèvent à 150 000 € et le coût variable unitaire à 4 €."
      },
      {
        "type": "p",
        "text": "En décembre, l’entreprise a produit et vendu 16 000 boîtes."
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Calculer le résultat analytique réel du mois de décembre (méthode du coût complet)."
      },
      {
        "type": "p",
        "text": "2. Calculer le coût d’imputation rationnelle et en déduire le résultat rationnel."
      },
      {
        "type": "p",
        "text": "3. Mettre en évidence le coût de sous-activité et expliquer ce qu’il apporte au pilotage de l’entreprise."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. et 2. Du résultat réel au résultat rationnel"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Réel**",
          "**Rationnel**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "240 000 €",
            "240 000 €"
          ],
          [
            "**Coût (complet / imputation rationnelle)**",
            "214 000 €",
            "184 000 €"
          ],
          [
            "**Résultat**",
            "26 000 €",
            "56 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coefficient = 16 000 / 20 000 = 0,80 ; charges fixes imputées = 150 000 × 0,80 = 120 000 €."
      },
      {
        "type": "p",
        "text": "3. Coût de sous-activité et pilotage"
      },
      {
        "type": "p",
        "text": "Coût de sous-activité = 56 000 − 26 000 = 30 000 € (= 150 000 − 120 000). Le résultat réel est amputé de 30 000 € imputables au sous-emploi de la capacité (80 %), non à la performance commerciale ou productive. Le résultat rationnel isole cette performance ; le coût de sous-activité invite à mieux remplir l’outil (ventes, sous-traitance, ajustement de capacité)."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "A7.5",
    "title": "Imprimerie Delcourt",
    "statement": [
      {
        "type": "p",
        "text": "L’imprimerie Delcourt fabrique un produit unique. Son activité normale est de 3 000 unités par mois. Les charges fixes s’élèvent à 45 000 € par mois, le coût variable unitaire à 20 € et le prix de vente à 40 €."
      },
      {
        "type": "p",
        "text": "Sur le premier trimestre, la production — égale aux ventes — a été la suivante :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Janvier**",
          "**Février**",
          "**Mars**"
        ],
        "rows": [
          [
            "**Production (= ventes), en unités**",
            "2 400",
            "3 000",
            "3 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Pour chaque mois, calculer le coefficient d’imputation rationnelle et la différence d’imputation (en précisant sous-activité ou suractivité)."
      },
      {
        "type": "p",
        "text": "2. Pour chaque mois, calculer le résultat réel et le résultat rationnel, puis vérifier la relation qui les lie."
      },
      {
        "type": "p",
        "text": "3. Établir les totaux du trimestre et commenter la différence d’imputation cumulée et les résultats."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. et 2. Tableau de synthèse du trimestre"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Janvier**",
          "**Février**",
          "**Mars**",
          "**Trimestre**"
        ],
        "rows": [
          [
            "**Production (= ventes)**",
            "2 400",
            "3 000",
            "3 600",
            "9 000"
          ],
          [
            "**Coefficient d’imputation rationnelle**",
            "0,80",
            "1,00",
            "1,20",
            "—"
          ],
          [
            "**Charges fixes imputées**",
            "36 000 €",
            "45 000 €",
            "54 000 €",
            "135 000 €"
          ],
          [
            "**Différence d’imputation**",
            "**+9 000 € (mali)**",
            "**0 €**",
            "**− 9 000 € (boni)**",
            "**0 €**"
          ],
          [
            "**Coût de revient réel unitaire**",
            "38,75 €",
            "35,00 €",
            "32,50 €",
            "—"
          ],
          [
            "**Coût d’imputation rationnelle unitaire**",
            "35,00 €",
            "35,00 €",
            "35,00 €",
            "35,00 €"
          ],
          [
            "**Chiffre d’affaires**",
            "96 000 €",
            "120 000 €",
            "144 000 €",
            "360 000 €"
          ],
          [
            "**Résultat réel**",
            "**3 000 €**",
            "**15 000 €**",
            "**27 000 €**",
            "**45 000 €**"
          ],
          [
            "**Résultat rationnel**",
            "**12 000 €**",
            "**15 000 €**",
            "**18 000 €**",
            "**45 000 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Interprétation"
      },
      {
        "type": "p",
        "text": "Relation : Résultat réel = Résultat rationnel − Différence d’imputation. En sous-activité (janvier), le coût de sous-activité (9 000 €) ampute le résultat réel ; en suractivité (mars), le boni (9 000 €) le majore ; en activité normale (février), la différence d’imputation est nulle et les deux résultats coïncident."
      },
      {
        "type": "p",
        "text": "Sur le trimestre, la sous-activité de janvier et la suractivité de mars se compensent : la différence d’imputation cumulée est nulle et le résultat réel cumulé (45 000 €) égale le résultat rationnel cumulé. L’imputation rationnelle ne modifie pas le résultat global du trimestre ; elle en change la répartition mensuelle, en isolant chaque mois ce qui relève du taux d’emploi de la structure."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C7.1",
    "title": "Société Verlaine",
    "statement": [
      {
        "type": "p",
        "text": "La société Verlaine fabrique et vend un produit unique P. Sa production passe par deux ateliers, puis par un centre de distribution. Au titre du mois M, elle a fabriqué et vendu 1 800 unités de P, au prix de 260 € l’unité."
      },
      {
        "type": "p",
        "text": "Les charges de la période et les niveaux d’activité de chaque centre sont donnés ci-dessous. Chaque unité de P consomme 2 heures-machine (Usinage) et 1 heure de main-d’œuvre (Assemblage) ; les matières premières s’élèvent à 40 € par unité."
      },
      {
        "type": "table",
        "headers": [
          "**Centre**",
          "**Unité d’œuvre**",
          "**Activité normale**",
          "**Activité réelle**",
          "**Charges fixes**",
          "**Charges variables**"
        ],
        "rows": [
          [
            "**Atelier Usinage**",
            "heure-machine",
            "4 500 h",
            "3 600 h",
            "180 000 €",
            "10 €/h"
          ],
          [
            "**Atelier Assemblage**",
            "heure-MOD",
            "1 800 h",
            "1 800 h",
            "54 000 €",
            "15 €/h"
          ],
          [
            "**Distribution**",
            "unité vendue",
            "2 000 u",
            "1 800 u",
            "40 000 €",
            "6 €/u"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Calculer le coefficient d’imputation rationnelle de chaque centre."
      },
      {
        "type": "p",
        "text": "2. Présenter, dans un tableau, le coût de production puis le coût de revient d’imputation rationnelle d’une unité de P."
      },
      {
        "type": "p",
        "text": "3. Déterminer la différence d’imputation de chaque centre, puis la différence d’imputation totale."
      },
      {
        "type": "p",
        "text": "4. Calculer le résultat analytique rationnel et le résultat réel du mois, et vérifier la relation qui les lie."
      },
      {
        "type": "p",
        "text": "5. Le dirigeant s’inquiète du résultat. Rédiger un bref commentaire distinguant la performance courante du coût de la sous-activité."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. Coefficients d’imputation rationnelle"
      },
      {
        "type": "p",
        "text": "Usinage : 3 600 / 4 500 = 0,80 (sous-activité). Assemblage : 1 800 / 1 800 = 1,00 (activité normale). Distribution : 1 800 / 2 000 = 0,90 (sous-activité)."
      },
      {
        "type": "p",
        "text": "2. Coût de revient d’imputation rationnelle unitaire"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Montant total**",
          "**Coût unitaire**"
        ],
        "rows": [
          [
            "**Matières premières (1 800 × 40)**",
            "72 000 €",
            "40,00 €"
          ],
          [
            "**Usinage — charges variables (3 600 × 10)**",
            "36 000 €",
            "—"
          ],
          [
            "**Usinage — charges fixes imputées (180 000 × 0,80)**",
            "144 000 €",
            "—"
          ],
          [
            "**Assemblage — charges variables (1 800 × 15)**",
            "27 000 €",
            "—"
          ],
          [
            "**Assemblage — charges fixes imputées (54 000 × 1,00)**",
            "54 000 €",
            "—"
          ],
          [
            "**Coût de production**",
            "**333 000 €**",
            "**185,00 €**"
          ],
          [
            "**Distribution — charges variables (1 800 × 6)**",
            "10 800 €",
            "—"
          ],
          [
            "**Distribution — charges fixes imputées (40 000 × 0,90)**",
            "36 000 €",
            "—"
          ],
          [
            "**Coût de revient**",
            "**379 800 €**",
            "**211,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Différences d’imputation"
      },
      {
        "type": "table",
        "headers": [
          "**Centre**",
          "**Charges fixes réelles**",
          "**Charges fixes imputées**",
          "**Différence d’imputation**"
        ],
        "rows": [
          [
            "**Usinage**",
            "180 000 €",
            "144 000 €",
            "+36 000 € (sous-activité)"
          ],
          [
            "**Assemblage**",
            "54 000 €",
            "54 000 €",
            "0 €"
          ],
          [
            "**Distribution**",
            "40 000 €",
            "36 000 €",
            "+4 000 € (sous-activité)"
          ],
          [
            "**Total**",
            "**274 000 €**",
            "**234 000 €**",
            "**+40 000 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "4. Résultats réel et rationnel"
      },
      {
        "type": "p",
        "text": "Chiffre d’affaires = 1 800 × 260 = 468 000 €. Résultat rationnel = 468 000 − 379 800 = 88 200 €. Coût de revient réel = coût de revient rationnel + différence d’imputation = 379 800 + 40 000 = 419 800 € ; résultat réel = 468 000 − 419 800 = 48 200 €. Vérification : Résultat réel = Résultat rationnel − Différence d’imputation = 88 200 − 40 000 = 48 200 €."
      },
      {
        "type": "p",
        "text": "5. Commentaire"
      },
      {
        "type": "p",
        "text": "Le résultat rationnel (88 200 €) mesure la performance courante, indépendamment du niveau d’emploi de la structure. Le résultat réel (48 200 €) est amputé de 40 000 € de coût de sous-activité, concentré sur l’atelier Usinage (sous-activité de 20 %) et, dans une moindre mesure, la distribution. Ce coût ne traduit pas une mauvaise performance de production ou de vente, mais le sous-emploi des capacités : l’action prioritaire est de mieux charger l’atelier Usinage (développer les ventes, sous-traiter en entrée, ou ajuster la capacité)."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C7.2",
    "title": "Société Rimbaud",
    "statement": [
      {
        "type": "p",
        "text": "La société Rimbaud fabrique un produit unique. Son activité normale est de 10 000 unités par mois, pour des charges fixes mensuelles de 300 000 € et un coût variable unitaire de 12 €. Le prix de vente est de 60 €."
      },
      {
        "type": "p",
        "text": "Depuis plusieurs mois, l’entreprise est en sous-activité : elle ne produit et ne vend que 7 000 unités par mois. Le dirigeant étudie deux pistes : (A) une campagne commerciale portant les ventes à 9 000 unités par mois ; (B) une restructuration ramenant l’activité normale à 7 000 unités et les charges fixes à 240 000 € par mois."
      },
      {
        "type": "p",
        "text": "Travail à faire"
      },
      {
        "type": "p",
        "text": "1. Pour la situation actuelle, calculer le coefficient d’imputation rationnelle, le coût d’imputation rationnelle unitaire, la différence d’imputation et le résultat réel du mois."
      },
      {
        "type": "p",
        "text": "2. Qu’indique la différence d’imputation sur la situation de l’entreprise ?"
      },
      {
        "type": "p",
        "text": "3. Option A (ventes portées à 9 000 unités) : calculer la nouvelle différence d’imputation et le résultat réel."
      },
      {
        "type": "p",
        "text": "4. Option B (activité normale ramenée à 7 000 unités, charges fixes à 240 000 €) : calculer le coefficient, la différence d’imputation et le résultat réel."
      },
      {
        "type": "p",
        "text": "5. Comparer les deux options au regard du coût de sous-activité et du résultat, puis formuler une recommandation."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "1. Situation actuelle"
      },
      {
        "type": "p",
        "text": "Coefficient = 7 000 / 10 000 = 0,70. Charges fixes imputées = 300 000 × 0,70 = 210 000 €. Coût d’imputation rationnelle = 7 000 × 12 + 210 000 = 84 000 + 210 000 = 294 000 € ; coût unitaire = 42 €. Différence d’imputation = 300 000 − 210 000 = 90 000 € (coût de sous-activité). Chiffre d’affaires = 420 000 € ; coût réel = 84 000 + 300 000 = 384 000 € ; résultat réel = 36 000 €."
      },
      {
        "type": "p",
        "text": "2. Interprétation"
      },
      {
        "type": "p",
        "text": "La différence d’imputation de 90 000 € mesure le coût de la capacité inemployée : l’entreprise n’utilise que 70 % de sa structure. Ce coût de sous-activité ampute lourdement le résultat réel (36 000 €), alors que le résultat rationnel — hors sous-activité — atteindrait 126 000 €. Le problème n’est pas la rentabilité courante, mais le sous-emploi de l’outil."
      },
      {
        "type": "p",
        "text": "3. et 4. Comparaison des deux options"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Situation actuelle**",
          "**Option A — ventes 9 000**",
          "**Option B — capacité 7 000**"
        ],
        "rows": [
          [
            "**Activité normale**",
            "10 000",
            "10 000",
            "7 000"
          ],
          [
            "**Production = ventes**",
            "7 000",
            "9 000",
            "7 000"
          ],
          [
            "**Charges fixes**",
            "300 000 €",
            "300 000 €",
            "240 000 €"
          ],
          [
            "**Coefficient**",
            "0,70",
            "0,90",
            "1,00"
          ],
          [
            "**Différence d’imputation**",
            "**90 000 € (mali)**",
            "**30 000 € (mali)**",
            "**0 €**"
          ],
          [
            "**Résultat réel**",
            "**36 000 €**",
            "**132 000 €**",
            "**96 000 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "5. Recommandation"
      },
      {
        "type": "p",
        "text": "L’option A (développer les ventes) est la plus favorable : elle porte le résultat réel à 132 000 € et réduit le coût de sous-activité à 30 000 € en remplissant l’outil existant. L’option B (réduire la capacité) supprime le coût de sous-activité (coefficient = 1) mais plafonne le résultat à 96 000 € : elle ne se justifie que si le marché ne permet durablement pas d’augmenter les ventes. Recommandation : privilégier l’option A si le potentiel commercial existe ; n’envisager l’option B qu’en cas de sous-activité structurelle avérée."
      }
    ]
  }
];
