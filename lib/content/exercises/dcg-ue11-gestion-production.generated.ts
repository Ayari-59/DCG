// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A12.1",
    "title": "Sardinerie du port",
    "statement": [
      {
        "type": "p",
        "text": "Soit une unité de production de la Sardinerie du Port où sont traités deux produits : les conserves « Moussaillon » et les verrines « Salades océanes », qui passent successivement dans trois ateliers. Rattaché au contrôle de gestion, le service de calcul des coûts (Cost Control) doit élaborer le programme de production optimal compte tenu de la fiche de coûts standard des deux produits (annexe 1)."
      },
      {
        "type": "p",
        "text": "Selon le service commercial, il serait possible d’écouler sur le marché, aux prix actuels, 9 000 conserves « Moussaillon » et 5 000 verrines « Salade océane » aux prix respec-"
      },
      {
        "type": "p",
        "text": "tifs de 16,70 € et 26 € l’unité. Les temps de passage sur les machines sont communi-"
      },
      {
        "type": "p",
        "text": "qués dans l’annexe 2."
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmationde la production à l’aide de la programmation linéaire (méthode graphique).**"
      },
      {
        "type": "p",
        "text": "**Fiches de coût standard**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Conserve « Moussaillon »**",
          "**Verrine « Salade océane »**"
        ],
        "rows": [
          [
            "",
            "**Variables**",
            "**Fixes**",
            "**Variables**",
            "**Fixes**"
          ],
          [
            "**Matières premières**",
            "2,75",
            "–",
            "5,20",
            "–"
          ],
          [
            "**Main-d’œuvre directe**",
            "2,35",
            "–",
            "3,40",
            "–"
          ],
          [
            "**Atelier 1**",
            "1,65",
            "0,60",
            "3,30",
            "1,20"
          ],
          [
            "**Atelier 2**",
            "1,80",
            "1,20",
            "2,70",
            "1,80"
          ],
          [
            "**Atelier 3**",
            "1,65",
            "1,40",
            "1,65",
            "1,40"
          ],
          [
            "**Frais de distribution**",
            "0,82",
            "–",
            "1,30",
            "–"
          ],
          [
            "**Total**",
            "11,02",
            "3,20",
            "17,55",
            "4,40"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les prix de vente unitaires et les coûts variables unitaires sont supposés constants. Il n’est pas tenu compte du coût des investissements nécessaires pour accroître la capacité des ateliers."
      },
      {
        "type": "p",
        "text": "**Ordonnancement**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "**Méthode***Dans le cours, une proposition d’ordonnancement a été présentée sous la forme d’un graphe MPM. Nous présenterons ici une autre méthode, le diagramme de Gantt, souvent utilisée en gestion de projet. Cet outil permet de représenter l’état d’avancement des différentes tâches d’un projet, tant en durée prévisionnelle qu’en durée réelle. De nombreux logiciels libres permettent de construire ce type de représentation. Dans la plupart Ce diagramme permet de visualiser sur un seul schéma plusieurs informations : des sujets, le tableau – les différentes tâches à envisager ; descriptif des tâches – la date de début et la date de fin de chaque tâche ; vous est fourni. – la durée de chaque tâche ; – le chevauchement éventuel des tâches, ainsi que la durée de chevauchement ; – la date de début et la date de fin du projet dans son ensemble. Vous devez être capable de produire et d’interpréter un diagramme de Gantt.*"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire (méthode graphique).**"
      },
      {
        "type": "p",
        "text": "Nous vous proposons de reprendre la démarche présentée dans le manuel."
      },
      {
        "type": "p",
        "text": "1. Calculer la marge sur coût variable unitaire sur conserves Mousailmon (M) et Salade océane (SO)."
      },
      {
        "type": "p",
        "text": "Marge sur produit M = 16,7 – (2,75 + 2,35 + 1,65 + 1,80 + 1,65 + 0,82) = 5,68 €, soit 34 %"
      },
      {
        "type": "p",
        "text": "Marge sur produit SO = 26,0 – (5,20 + 3,40 + 3,30 + 2,70 + 1,65 + 1,30) = 8,45 €, soit 32,50 %"
      },
      {
        "type": "p",
        "text": "2. Présenter le programme de production sous sa forme canonique."
      },
      {
        "type": "p",
        "text": "•Contraintes de production"
      },
      {
        "type": "p",
        "text": "Atelier 1 : 0,20 M + 0,40 SO ⩽ 2 400"
      },
      {
        "type": "p",
        "text": "Atelier 2 : 0,20 M + 0,30 SO ⩽ 2 400"
      },
      {
        "type": "p",
        "text": "Atelier 3 : 0,30 M + 0,30 SO ⩽ 3 000"
      },
      {
        "type": "p",
        "text": "•Contraintes commerciales : M ⩽ 9 000 ; SO ⩽ 5 000"
      },
      {
        "type": "p",
        "text": "•Contraintes de positivité : M ≥ 0 et SO ≥ 0"
      },
      {
        "type": "p",
        "text": "•Fonction économique : Max F = 5,68 A + 8,45 B"
      },
      {
        "type": "p",
        "text": "3. Représentation graphique"
      },
      {
        "type": "p",
        "text": "4. Résultat global :"
      },
      {
        "type": "p",
        "text": "**Ordonnancement**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "**Méthode**•Dans le cours, une proposition d’ordonnancement a été présentée sous la forme d’un graphe MPM et d’un diagramme de Gantt. Ces outils permettent de représenter l’état d’avancement des différentes tâches d’un projet, tant en durée prévisionnelle qu’en durée réelle. De nombreux logiciels libres permettent de construire ce type de représentation.Ces diagrammes permettent de visualiser, sur un seul schéma, plusieurs informations :– les différentes tâches à envisager ;– la date de début et la date de fin de chaque tâche ;– la durée de chaque tâche ;– le chevauchement éventuel des tâches, ainsi que la durée de chevauchement ;– la date de début et la date de fin du projet dans son ensemble.•Pour l’examen, vous devez être capable de produire et d’interpréter un diagramme de Gantt et un graphe MPM."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex2",
    "label": "C12.1",
    "title": "Granufilm",
    "statement": [
      {
        "type": "p",
        "text": "Granufilm fabrique des plastiques alimentaires de types différents (M, N, P et Q). Lors"
      },
      {
        "type": "p",
        "text": "d’une première phase, sont obtenus des granulés dans un atelier A. Lors de la phase suivante, dans un atelier B dont les informations prévisionnelles sont communiquées (annexe), ces granulés subissent un traitement complémentaire par mise en oeuvre de techniques dépendant de la nature du produit attendu."
      },
      {
        "type": "p",
        "text": "Les frais fixes sont spécifiques à l’atelier, mais il n’y a pas de frais fixes spécifiques pour un type de production donné."
      },
      {
        "type": "p",
        "text": "Durant cette même période, l’atelier A ne pourra livrer que 4 913,5 tonnes de granulés. Il"
      },
      {
        "type": "p",
        "text": "n’est pas envisagé pour l’atelier B la possibilité de s’approvisionner ailleurs. En revanche, les matières complémentaires diverses ne posent pas de problème d’approvisionnement ni de capacités de production. Pour l’atelier B, il est prévu de réserver impérativement 300 tonnes de chaque type de plastique pour le client Agro."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmationde la productionà l’aide de la programmation linéaire avec goulet d’étranglement.**"
      },
      {
        "type": "p",
        "text": "**Données prévisionnelles de l’atelier B**"
      },
      {
        "type": "table",
        "headers": [
          "**Type de produits**",
          "**M**",
          "**N**",
          "**P**",
          "**Q**"
        ],
        "rows": [
          [
            "**Volume maximal envisageable des ventes**",
            "3 000 t",
            "2 000 t",
            "2 000 t",
            "2 500 t"
          ],
          [
            "**Poids de granulés par tonne de produits**",
            "0,3 t",
            "0,8 t",
            "0,8 t",
            "0,945 t"
          ],
          [
            "**Coût de revient spécifique par tonne**",
            "2 380 €",
            "2 040 €",
            "3 740 €",
            "3 400 €"
          ],
          [
            "**dont :**",
            "",
            "",
            "",
            ""
          ],
          [
            "**– charges fixes spécifiques de l’atelier**",
            "1 680 €",
            "1 440 €",
            "2 640 €",
            "2 400 €"
          ],
          [
            "**– charges variables**",
            "700 €",
            "600 €",
            "1 100 €",
            "1 000 €"
          ],
          [
            "**Prix de vente à la tonne**",
            "1 960 €",
            "3 960 €",
            "4 140 €",
            "4 780 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec goulot d’étranglement.**"
      },
      {
        "type": "p",
        "text": "Marge sur coût variable par tonne vendue"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**M**",
          "**N**",
          "**P**",
          "**Q**"
        ],
        "rows": [
          [
            "**Prix de vente**",
            "1 960",
            "3 960",
            "4 140",
            "4 780"
          ],
          [
            "**Charges variables**",
            "– 700",
            "– 600",
            "– 1 100",
            "– 1 000"
          ],
          [
            "**MCV par tonne**",
            "1 260",
            "3 360",
            "3 040",
            "3 780"
          ],
          [
            "**Poids de granulé**",
            "0,3 t",
            "0,8 t",
            "0,8 t",
            "0,945 t"
          ],
          [
            "**Marge par kg granulé**",
            "4,20 €",
            "4,20 €",
            "3,80 €",
            "4 €"
          ],
          [
            "**Ordre de fabrication**",
            "1",
            "1",
            "3",
            "2"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Programme de production optimal"
      },
      {
        "type": "p",
        "text": "Le goulot d’étranglement est la capacité de livraison des granulés par l’atelier A. Il faut donc optimiser la gestion de l’atelier B en utilisant le critère de l’unité de facteur rare ici la MCV par kg de granulé par produit."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**M**",
          "**N**",
          "**P**",
          "**Q**",
          "**Total**"
        ],
        "rows": [
          [
            "**Approv. client Agro**",
            "300 t",
            "300 t",
            "300 t",
            "300 t",
            "–"
          ],
          [
            "**Granulés prélevés pour cette commande**",
            "300 × 0,3= 90 t",
            "300 × 0,8= 240 t",
            "300 × 0,8= 240 t",
            "300 × 0,3= 283,5 t",
            "300 × 0,945= 853,5 t"
          ],
          [
            "**Ventes encore possibles**",
            "2 700 t",
            "1 700 t",
            "1 700 t",
            "2 200 t",
            "–"
          ]
        ]
      },
      {
        "type": "p",
        "text": "D’où fabrication de :"
      },
      {
        "type": "p",
        "text": "2 700 t de M qui consomment 2 700 t × 0,3 =810 t"
      },
      {
        "type": "p",
        "text": "1 700 t de N qui consomment 1 700 t × 0,8 =1 360 t"
      },
      {
        "type": "p",
        "text": "2 170 t"
      },
      {
        "type": "p",
        "text": "Quantité restant disponible : 4 913,5 t – 853,5 t – 2 170 t = 1 890 t de granulés pour fabriquer le produit Q, soit : 1 890 t/0,945 = 2 000 t de produit Q."
      },
      {
        "type": "p",
        "text": "Programme et résultat attendu"
      },
      {
        "type": "p",
        "text": "Le programme est donc de :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**M**",
          "**N**",
          "**P**",
          "**Q**",
          "**Total**"
        ],
        "rows": [
          [
            "**Client Agro (en tonnes)Autres clients (en tonnes)**",
            "3002 700",
            "3001 700",
            "300–",
            "3002 000",
            ""
          ],
          [
            "**MCV/produit (en €)**",
            "3 0001 260",
            "2 0003 360",
            "3003 040",
            "2 3003 780",
            ""
          ],
          [
            "**MCV globale (en k€)**",
            "3 780",
            "6 720",
            "912",
            "8 694",
            "20 106"
          ],
          [
            "**Charges fixes par tonnes**",
            "1 680× 3 000",
            "1 440× 2 000",
            "2 640× 2 000",
            "2 400× 2 500",
            ""
          ],
          [
            "**Charges fixes totales (en k€)**",
            "5 040",
            "2 880",
            "5 280",
            "6 000",
            "19 200"
          ],
          [
            "**Résultat global (en k€)**",
            "906"
          ]
        ]
      }
    ]
  },
  {
    "id": "ex3",
    "label": "C12.2",
    "title": "SIL",
    "statement": [
      {
        "type": "p",
        "text": "Spécialisée dans le packaging, la société SIL travaille pour des maisons d’édition. Pour"
      },
      {
        "type": "p",
        "text": "répondre à la demande de ses clients, elle envisage d’implanter une nouvelle unité de production dans un bâtiment de 1 000 m2, ce qui nécessite une multitude d’opérations (annexe) à traiter par une méthode d’ordonnancement. L’entreprise choisit la MPM et souhaite connaître le chemin critique, sa durée ainsi que les marges du projet."
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
          "**Durée (jours)**",
          "**Opérations prérequises**"
        ],
        "rows": [
          [
            "**A**",
            "Rénovation du bâtiment (électricité, isolation thermique et acoustique)",
            "12",
            "–"
          ],
          [
            "**B**",
            "Mise en conformité environnementale (assainissement, collecte et élimination des déchets, sécurisation des stockages)",
            "15",
            "–"
          ],
          [
            "**C**",
            "Réorganisation et extension de l’atelier prépresse (studio PAO, scanners, flashage…)",
            "10",
            "A"
          ],
          [
            "**D**",
            "Mise en place du parc machines d’impression",
            "6",
            "A, B"
          ],
          [
            "**E**",
            "Installation de l’équipement façonnage (plieuses, colleuses, encarteuses, piqueuses, massicots…)",
            "8",
            "A, B, D"
          ],
          [
            "**F**",
            "Essais et tests techniques",
            "3",
            "C, D, E"
          ],
          [
            "**G**",
            "Formation du personnel sur site",
            "10",
            "C, D, E, F"
          ],
          [
            "**H**",
            "Contrôle qualité",
            "2",
            "F, G"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre le programmed’avancementdestravauxde SIL à l’aide de l’ordonnancement MPM.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "**1. Élaborer et résoudre le programme d’avancement des travaux à l’aide de l’ordonnancement (MPM).**"
      },
      {
        "type": "p",
        "text": "**Remarque***MPM*"
      },
      {
        "type": "p",
        "text": "Le chemin critique est : B, D, E, F, G, H"
      },
      {
        "type": "p",
        "text": "La durée du projet est de 44 jours. Dans 44 jours, sauf aléa, les travaux seront terminés et la nouvelle unité de production pourra démarrer."
      },
      {
        "type": "p",
        "text": "**2. Élaborer un point d’étape à l’attention du dirigeant de la société SIL pour l’informer des différentes marges dont il dispose.**"
      },
      {
        "type": "p",
        "text": "Les marges se calculent avec les formules suivantes :"
      },
      {
        "type": "p",
        "text": "Marge totale = Date au plus tard – Date au plus tôt"
      },
      {
        "type": "p",
        "text": "Marge libre = Date au plus tôt de la tâche suivante – (Date au plus tôt de la tâche + durée de la tâche)"
      },
      {
        "type": "table",
        "headers": [
          "**Tâches**",
          "**Marge totale**",
          "**Marge libre**"
        ],
        "rows": [
          [
            "**A**",
            "3 – 0 = 3 jours",
            "12 – (0 + 12) = 0 jour"
          ],
          [
            "**C**",
            "19 – 12 = 7 jours",
            "29 – (12 + 10) = 7 jours"
          ],
          [
            "**B, D, E, F, G, H**",
            "0 jour (tâches critiques)",
            "0 jour (tâches critiques)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La marge totale d’une tâche représente le délai maximum que l’on peut apporter à la mise en route de cette opération sans modifier le délai de fin du programme. Elle est de 3 jours pour la tâche A (rénovation du bâtiment) et de 7 jours pour la tâche C (réorganisation et extension de l’atelier)."
      },
      {
        "type": "p",
        "text": "La marge libre informe sur le retard maximum possible dans la réalisation d’une tâche sans remettre en cause la date de début au plus tôt des tâches suivantes. Dans le cadre de ce projet, la tâche A n’admet aucun retard dans sa réalisation, sinon elle remettra en cause la date de début au plus tôt de la tâche C. La tâche C admet un retard maximum de 7 jours. Si celui-ci est plus élevé alors la tâche F commencera en retard."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "C12.3",
    "title": "Madobo",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      },
      {
        "type": "p",
        "text": "La société Madobo a démarré il y a plus de 75 ans dans la mécanique de précision avec une spécialité qu’est le taillage d’engrenages. Le savoir-faire accumulé au fil des années lui vaut la confiance de nombreux clients dans tous les secteurs de l’industrie. Son savoir-faire s’enrichit en permanence grâce à la formation continue de ses fraiseurs et à ses machines toujours plus innovantes et productives."
      },
      {
        "type": "p",
        "text": "La société fabrique deux produits : les cônes métalliques 1 (CM1) et les cônes métalliques 2 (CM2)."
      },
      {
        "type": "p",
        "text": "Dans le cadre de l’optimisation de son entreprise, la dirigeante de la société, madame Madobo, vous demande de définir le programme optimal de production de l’entreprise."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec graphique.*"
      },
      {
        "type": "p",
        "text": "**Document — Données sur les ateliers Madobo et sur le marché**"
      },
      {
        "type": "p",
        "text": "L’entreprise est composée de deux ateliers avec les capacités suivantes :"
      },
      {
        "type": "p",
        "text": "– atelier de fraisage (AF) : 2 300 heures par mois ;"
      },
      {
        "type": "p",
        "text": "– atelier de montage (AM) : 1 300 heures par mois."
      },
      {
        "type": "p",
        "text": "Le tableau suivant récapitule le nombre d’heures consommées pour la fabrication des deux produits."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Atelier AF (en heures-machine)**",
          "**Atelier AM (en heures de main-d’œuvre)**"
        ],
        "rows": [
          [
            "**CM1**",
            "3",
            "1"
          ],
          [
            "**CM2**",
            "2",
            "2"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Données du marché : les prévisions commerciales indiquent que le marché peut absorber chaque mois, au maximum, 450 produits CM1 et 460 produits CM2."
      },
      {
        "type": "p",
        "text": "Données sur les marges : la marge sur coût direct est de 900 € pour le produit CM1 et de 800 € pour le produit CM2."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec graphique.**"
      },
      {
        "type": "p",
        "text": "Soient Q1 les quantités de produits CM1 et Q2 les quantités de produits CM2."
      },
      {
        "type": "p",
        "text": "•Contrainte de fraisage : 3 Q1 + 2 Q2 ⩽ 2 300"
      },
      {
        "type": "p",
        "text": "•Contrainte de montage : Q1 + 2Q2 ⩽ 1 300"
      },
      {
        "type": "p",
        "text": "•Contraintes commerciales : Q1 ⩽ 450 et Q2 ⩽ 460"
      },
      {
        "type": "p",
        "text": "•Contraintes de positivité : Q1 ≥ 0 et Q2 ≥ 0"
      },
      {
        "type": "p",
        "text": "L’objectif de la société Madobo est de maximiser sa marge sur coût direct globale soit :"
      },
      {
        "type": "p",
        "text": "Max (900 Q1 + 800 Q2)"
      },
      {
        "type": "p",
        "text": "•Calcul de la marge sur coût direct sur chaque sommet du polygone d’acceptabilité"
      },
      {
        "type": "table",
        "headers": [
          "**Sommets**",
          "**Coordonnées**",
          "**Marge sur coût direct = 900 Q1 + 800 Q2**"
        ],
        "rows": [
          [
            "**A**",
            "(0 ; 460)",
            "368 000 €"
          ],
          [
            "**B**",
            "(380 ; 460)",
            "710 000 €"
          ],
          [
            "**C**",
            "(450 ; 425)",
            "758 500 €"
          ],
          [
            "**D**",
            "(450 ; 0)",
            "405 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La marge sur coût direct globale est de 758 500 € avec une production de 450 CM1 et 425 CM2."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C12.4",
    "title": "Guerpine",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire ou de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "La société agro-alimentaire Guerpine produit deux types de viennoiseries : des pains au chocolat (P) et des croissants (C)."
      },
      {
        "type": "p",
        "text": "Dans le cadre de l’optimisation de son entreprise, le dirigeant de la société, monsieur Guerpine, vous demande de définir le programme optimal de production de l’entreprise."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec graphique.*"
      },
      {
        "type": "p",
        "text": "**Document — Données sur les ateliers Guerpine, sur les marges et sur le marché**"
      },
      {
        "type": "p",
        "text": "Les deux types de viennoiseries passent successivement dans trois ateliers différents (pétrissage, conditionnement et chauffe). Leurs temps de passage, en minutes et par atelier, sont donnés dans le tableau suivant."
      },
      {
        "type": "table",
        "headers": [
          "**Ateliers \\ Produits**",
          "**P**",
          "**C**",
          "**Capacité quotidienne des ateliers**"
        ],
        "rows": [
          [
            "**A1**",
            "4",
            "2",
            "260 000 minutes"
          ],
          [
            "**A2**",
            "3",
            "3",
            "210 000 minutes"
          ],
          [
            "**A3**",
            "2",
            "5",
            "240 000 minutes"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les produits P et C dégagent respectivement une marge sur coût variable de 0,13 € et 0,16 €."
      },
      {
        "type": "p",
        "text": "Les prévisions commerciales indiquent que le marché peut absorber chaque jour, au maximum, 60 000 pains au chocolat et 100 000 croissants."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire ou de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec graphique.**"
      },
      {
        "type": "p",
        "text": "Soient Q1 les quantités de produits P et Q2 les quantités de produits C."
      },
      {
        "type": "p",
        "text": "Les contraintes peuvent être traduites en inéquations."
      },
      {
        "type": "p",
        "text": "•Contraintes de production :"
      },
      {
        "type": "p",
        "text": "4 Q1 + 2 Q2 ⩽ 260 000"
      },
      {
        "type": "p",
        "text": "3 Q1 + 3 Q2 ⩽ 210 000"
      },
      {
        "type": "p",
        "text": "2 Q1 + 5 Q2 ⩽ 240 000"
      },
      {
        "type": "p",
        "text": "•Contraintes de positivité :"
      },
      {
        "type": "p",
        "text": "Q1 ≥ 0"
      },
      {
        "type": "p",
        "text": "Q2 ≥ 0"
      },
      {
        "type": "p",
        "text": "Contraintes de marché : Q1 ⩽ 60 000 et Q2 ⩽ 100 000"
      },
      {
        "type": "p",
        "text": "L’objectif de la société Guerpine est de maximiser sa marge sur coût variable, soit :"
      },
      {
        "type": "p",
        "text": "Max (0,13 Q1 + 0,16 Q2)"
      },
      {
        "type": "p",
        "text": "La résolution graphique est la suivante :"
      },
      {
        "type": "p",
        "text": "Calcul de la marge sur coût variable sur chaque sommet du polygone d’acceptabilité :"
      },
      {
        "type": "table",
        "headers": [
          "**Sommets**",
          "**Coordonnées**",
          "**Marge sur coût variable = 0,13 Q1 + 0,16 Q2**"
        ],
        "rows": [
          [
            "**A**",
            "(0 ; 48 000)",
            "7 680 €"
          ],
          [
            "**B**",
            "(36 667 ; 33 333)",
            "10 100 €"
          ],
          [
            "**C**",
            "(60 000 ; 10 000)",
            "9 400 €"
          ],
          [
            "**D**",
            "(60 000 ; 0)",
            "7 800 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La marge sur coût variable quotidienne est de 10 100 € avec une production de 36 667 pains au chocolat et 33 333 croissants par jour."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C12.5",
    "title": "Valmertin",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      },
      {
        "type": "p",
        "text": "L’entreprise Valmertin a été créée au début des années 2000 par Mme Valmertin, ingénieure chimiste de formation. La société, de dimension européenne, s’est spécialisée dans la fabrication et la distribution de gels hydroalcooliques. Plusieurs gammes ont été développées. La production est réalisée en Bretagne, non loin de Rennes."
      },
      {
        "type": "p",
        "text": "Ses trois produits principaux, GH1, GH2 et GH3, sont commercialisés auprès des pharmacies. En outre, l’entreprise a lancé depuis deux ans un nouveau produit destiné aux cliniques : GH4. La fabrication de ce nouveau gel hydroalcoolique utilise le même processus industriel et est produit sur les mêmes chaînes que les produits GH1, GH2 et GH3."
      },
      {
        "type": "p",
        "text": "Valmertin a investi dans une chaîne de production supplémentaire qui se révèle sous-dimensionnée face à la demande exponentielle du marché. L’objectif principal de l’entreprise Valmertin est la maximisation de son résultat."
      },
      {
        "type": "p",
        "text": "En tant que contrôleur de gestion junior, il vous est demandé de définir le programme optimal de production de l’entreprise Valmertin. Vous commencerez par calculer le volume horaire en « machines automatisées » et en « contrôle » restant disponible après livraison des quantités obligatoirement destinées à la France."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec goulot d’étranglement.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Données issues de l’étude de marché**"
      },
      {
        "type": "p",
        "text": "L’entreprise dessert le marché européen. Une étude de marché a permis d’identifier les prix de vente du marché ainsi que la demande maximale. Celle-ci constitue la demande totale pour l’ensemble du marché européen."
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Prix de vente unitaire du marché**",
            "3,63 €",
            "2,94 €",
            "3,69 €",
            "4,63 €"
          ],
          [
            "**Quantité maximale demandée sur l’ensemble du marché européen (en unités)**",
            "97 000",
            "122 500",
            "33 750",
            "56 250"
          ]
        ]
      },
      {
        "type": "p",
        "text": "En outre, la société s’engage à livrer prioritairement ses clients français."
      },
      {
        "type": "p",
        "text": "***Quantité minimale à servir aux pharmacies et aux cliniques françaises***"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Quantité à servir obligatoirement aux clients français (en unités)**",
            "82 500",
            "43 750",
            "12 500",
            "27 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 2 — Données relatives à la production**"
      },
      {
        "type": "p",
        "text": "• La fabrication des quatre produits GH1, GH2, GH3 et GH4 est réalisée de façon automatisée, grâce à des chaînes automatisées en charge de l’assemblage des différents composants."
      },
      {
        "type": "p",
        "text": "***Temps de passage sur les chaînes automatisées***"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Temps de passage en heures-machine pour une unité**",
            "0,05",
            "0,01",
            "0,07",
            "0,11"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise dispose actuellement d’un temps de machine annuel maximal de 10 000 heures."
      },
      {
        "type": "p",
        "text": "**Document 3 — Temps de contrôle et coûts variables**"
      },
      {
        "type": "p",
        "text": "• Ensuite, les produits sont contrôlés. En raison de l’exigence de qualité des clients, les opérations de contrôle sont réalisées manuellement."
      },
      {
        "type": "p",
        "text": "***Temps de contrôle***"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Temps de contrôle en heures de main-d’œuvre pour une unité**",
            "0,02",
            "0,01",
            "0,005",
            "0,03"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’entreprise dispose actuellement d’un temps de contrôle annuel maximal de 7 550 heures."
      },
      {
        "type": "p",
        "text": "• Toutes les charges sont fixes à l’exception de la consommation de matières premières."
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Coût variable des matières par unité produite**",
            "1,13 €",
            "1,35 €",
            "2,25 €",
            "2,25 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les charges fixes représentent un montant global de 287 500 € et correspondent, pour l’essentiel, aux amortissements des chaînes automatisées, aux salaires et aux frais fixes divers."
      },
      {
        "type": "p",
        "text": "Les chaînes automatisées constituent le goulot d’étranglement (ressource rare)."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
      },
      {
        "type": "p",
        "text": "**Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire avec goulot d’étranglement.**"
      },
      {
        "type": "p",
        "text": "**Remarque***Première étape : calcul du volume horaire en « machines automatisées » et en « contrôle » restant disponible après livraison des quantités obligatoirement destinées aux clients français :*"
      },
      {
        "type": "p",
        "text": "Volume horaire « machines automatisées » :"
      },
      {
        "type": "p",
        "text": "Capacité disponible totale : 10 000 heures"
      },
      {
        "type": "p",
        "text": "Capacité absorbée par les livraisons obligatoires en France :"
      },
      {
        "type": "p",
        "text": "(82 500 × 0,05) + (43 750 × 0,01) + (12 500 × 0,07) + (27 500 × 0,11) = 8 462,5 heures"
      },
      {
        "type": "p",
        "text": "Volume horaire « contrôle » :"
      },
      {
        "type": "p",
        "text": "Capacité disponible totale : 7 550 heures"
      },
      {
        "type": "p",
        "text": "Capacité absorbée par la livraison obligatoire en France :"
      },
      {
        "type": "p",
        "text": "(82 500 × 0,02) + (43 750 × 0,01) + (12 500 × 0,005) + (27 500 × 0,03) = 2 975 heures"
      },
      {
        "type": "p",
        "text": "Volume horaire « machines automatisées » restant disponible pour le reste du marché :"
      },
      {
        "type": "p",
        "text": "10 000 – 8 462,5 = 1 537,5 heures"
      },
      {
        "type": "p",
        "text": "Volume horaire « contrôle » restant disponible pour le reste du marché :"
      },
      {
        "type": "p",
        "text": "7 550 – 2 975 = 4 575 heures"
      },
      {
        "type": "p",
        "text": "**Remarque***Deuxième étape : expression du programme de production sous forme canonique en établissant la fonction économique et les contraintes.*"
      },
      {
        "type": "p",
        "text": "Soient GH1, GH2, GH3 et GH4 les variables étudiées."
      },
      {
        "type": "p",
        "text": "La fonction économique s’écrit :"
      },
      {
        "type": "p",
        "text": "Maximiser Z = 2,50 GH1 + 1,59 GH2 + 1,44 GH3 + 2,38 GH4"
      },
      {
        "type": "table",
        "headers": [
          "**Produits**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Prix de vente unitaire (en €)**",
            "3,63",
            "2,94",
            "3,69",
            "4,63"
          ],
          [
            "**Coût variable unitaire (en €)**",
            "1,13",
            "1,35",
            "2,25",
            "2,25"
          ],
          [
            "**Marge sur coût variable unitaire (en €)**",
            "2,50",
            "1,59",
            "1,44",
            "2,38"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les contraintes sont :"
      },
      {
        "type": "p",
        "text": "0,05 GH1 + 0,01 GH2 + 0,07 GH3 + 0,11 GH4 ⩽ 1 537,5 (contrainte heures-machines)"
      },
      {
        "type": "p",
        "text": "0,02 GH1 + 0,01 GH2 + 0,005 GH3 + 0,03 GH4 ⩽ 4 575 (contrainte h/MO)"
      },
      {
        "type": "p",
        "text": "GH1 ⩽ 14 500 (1) (contrainte de marché)"
      },
      {
        "type": "p",
        "text": "GH2 ⩽ 78 750 (2) (contrainte de marché)"
      },
      {
        "type": "p",
        "text": "GH3 ⩽ 21 250 (3) (contrainte de marché)"
      },
      {
        "type": "p",
        "text": "GH4 ⩽ 28 750 (4) (contrainte de marché)"
      },
      {
        "type": "p",
        "text": "GH1, GH2, GH3, GH4 ≥ 0 (contraintes de logique économique)"
      },
      {
        "type": "p",
        "text": "(1) 23 000 = 97 000 – 82 500"
      },
      {
        "type": "p",
        "text": "(2) 63 000 = 122 500 – 43 750"
      },
      {
        "type": "p",
        "text": "(3) 17 000 = 33 750 – 12 500"
      },
      {
        "type": "p",
        "text": "(4) 23 000 = 56 250 – 27 500"
      },
      {
        "type": "p",
        "text": "**Remarque***Troisième étape : calcul de la marge sur coût variable par unité de facteur rare*"
      },
      {
        "type": "p",
        "text": "Sachant que les chaînes automatisées constituent le goulot d’étranglement (ressource rare) :"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**MSCV unitaire**",
            "2,50",
            "1,59",
            "1,44",
            "2,38"
          ],
          [
            "**Conso Heure-Machine**",
            "0,05",
            "0,01",
            "0,07",
            "0,11"
          ],
          [
            "**MSCV/heure-machine**",
            "50",
            "159",
            "20,57",
            "21,64"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Remarque***Quatrième étape : détermination du programme de production optimal*"
      },
      {
        "type": "p",
        "text": "L’ordre de priorité des produits est fait en fonction de la MSCV/unité de facteur rare (ici, heure-machine)."
      },
      {
        "type": "p",
        "text": "Classement :"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Ordre de priorité**",
            "2",
            "1",
            "4",
            "3"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Il reste 1 537,5 heures-machine disponibles."
      },
      {
        "type": "p",
        "text": "L’objectif étant de maximiser la MSCV (donc le résultat) et, compte tenu l’ordre de priorité, il convient de déterminer les quantités supplémentaires à produire."
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**Quantité supplémentaire**",
          "**Consommation d’heures-machine**",
          "**Consommation cumulée**"
        ],
        "rows": [
          [
            "**GH2**",
            "78 750 (1)",
            "787,5 (2)",
            "787,5"
          ],
          [
            "**GH1**",
            "14 500",
            "725",
            "1 512,5"
          ],
          [
            "**GH4**",
            "227 (3)",
            "27(3)",
            "1 537,5"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) Maximum de produits GH2 sur le marché européen (122 500) – Quantité obligatoire aux clients français (43 750) = 78 750 unités supplémentaires."
      },
      {
        "type": "p",
        "text": "(2) 78 750 unités de GH2 consomment 78 750 × 0,01 = 787,5 heures de machines automatisées."
      },
      {
        "type": "p",
        "text": "(3) Il ne reste plus que 1 537,5 – 1 512,5 = 25 heures permettant de produire :"
      },
      {
        "type": "p",
        "text": "25 ÷ 0,11 = 227 GH4."
      },
      {
        "type": "p",
        "text": "Le programme de production optimum total s’établit ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**"
        ],
        "rows": [
          [
            "**Production minimale**",
            "82 500",
            "43 750",
            "12 500",
            "27 500"
          ],
          [
            "**Production supplémentaire**",
            "14 500",
            "78 750",
            "0",
            "227"
          ],
          [
            "**Production totale**",
            "97 000",
            "122 500",
            "12 500",
            "27 273"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Cinquième étape : détermination de la marge sur coût variable totale et du résultat dégagé par le groupe pour le programme optimal**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**GH1**",
          "**GH2**",
          "**GH3**",
          "**GH4**",
          "**TOTAL**"
        ],
        "rows": [
          [
            "**Prix de vente (en €)**",
            "3,63",
            "2,94",
            "3,69",
            "4,63",
            ""
          ],
          [
            "**Quantité**",
            "97 000",
            "122 500",
            "12 500",
            "27 273",
            ""
          ],
          [
            "**CA total (en €)**",
            "352 110",
            "363 825",
            "46 125",
            "126 274",
            "888 334"
          ],
          [
            "**CV (en €)**",
            "1,13 × 97 000 = 109 610",
            "165 375",
            "28 125",
            "61 364",
            ""
          ],
          [
            "**MSCV (en €)**",
            "242 500",
            "198 450",
            "18 000",
            "64 910",
            "523 860"
          ],
          [
            "**Coûts fixes (en €)**",
            "",
            "",
            "",
            "",
            "287 500"
          ],
          [
            "**Résultat (en €)**",
            "",
            "",
            "",
            "",
            "236 360"
          ]
        ]
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C12.6",
    "title": "Dunovard",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "La société Dunovard, qui produit des cartons, a investi dans une nouvelle chaîne de production. Face à la demande importante du marché, le dirigeant, M. Dunovard, souhaite que le projet d’implantation soit géré au mieux pour qu’il puisse démarrer au plus tôt son activité."
      },
      {
        "type": "p",
        "text": "En tant que contrôleur de gestion, il vous est demandé d’élaborer et de résoudre le programme d’avancement du montage de la nouvelle chaîne de production. Vous montrerez également à M. Dunovard les marges dont il pourrait disposer pour éviter un éventuel retard dans le démarrage de la nouvelle chaîne de production."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement (MPM).*"
      },
      {
        "type": "p",
        "text": "*2. Élaborer un point d’étape à l’attention de M. Dunovard pour l’informer des différentes marges dont il dispose.*"
      },
      {
        "type": "p",
        "text": "**Document — Planning prévisionnel de déploiement de la nouvelle chaîne de production**"
      },
      {
        "type": "table",
        "headers": [
          "**Tâches**",
          "**Descriptif des tâches**",
          "**Durée en jours**",
          "**Tâches prérequises**"
        ],
        "rows": [
          [
            "**A**",
            "Travaux de maçonnerie",
            "7",
            "B"
          ],
          [
            "**B**",
            "Déblayage du bâtiment",
            "3",
            "–"
          ],
          [
            "**C**",
            "Travaux d’électricité et de plomberie",
            "11",
            "A"
          ],
          [
            "**D**",
            "Montage de la nouvelle chaîne",
            "5",
            "A, B"
          ],
          [
            "**E**",
            "Installation de la chaîne",
            "8",
            "D, C"
          ],
          [
            "**F**",
            "Essais et réglages",
            "3",
            "E"
          ],
          [
            "**G**",
            "Formation",
            "4",
            "E"
          ],
          [
            "**H**",
            "Contrôle qualité",
            "2",
            "F"
          ],
          [
            "**I**",
            "Inauguration",
            "1",
            "G, H"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
      },
      {
        "type": "p",
        "text": "**1. Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement (MPM).**"
      },
      {
        "type": "p",
        "text": "**Remarque***MPM*"
      },
      {
        "type": "p",
        "text": "Le chemin critique est : B, A, C, E, F, H, I"
      },
      {
        "type": "p",
        "text": "La durée du projet est de 35 jours. Dans 35 jours, sauf aléa, les travaux seront terminés et la nouvelle chaîne de production pourra démarrer."
      },
      {
        "type": "p",
        "text": "**2. Élaborer un point d’étape à l’attention de M. Dunovard pour l’informer des différentes marges dont il dispose.**"
      },
      {
        "type": "p",
        "text": "Les marges se calculent avec les formules suivantes :"
      },
      {
        "type": "p",
        "text": "Marge totale = Date au plus tard – Date au plus tôt"
      },
      {
        "type": "p",
        "text": "Marge libre = Date au plus tôt de la tâche suivante – (Date au plus tôt de la tâche + durée de la tâche)"
      },
      {
        "type": "table",
        "headers": [
          "**Tâches**",
          "**Marge totale**",
          "**Marge libre**"
        ],
        "rows": [
          [
            "**D**",
            "16 – 10 = 6 jours",
            "21 – (10 + 5) = 6 jours"
          ],
          [
            "**G**",
            "30 – 29 = 1 jour",
            "34 – (29 – 4) = 1 jour"
          ],
          [
            "**B, A, C, E, F, H, I**",
            "0 jour (tâches critiques)",
            "0 jour (tâches critiques)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La marge totale d’une tâche représente le délai maximum que l’on peut apporter à la mise en route de cette opération sans modifier le délai de fin du programme. Elle est de 6 jours pour la tâche D (montage de la nouvelle chaîne) et de 1 jour pour la tâche G (formation)."
      },
      {
        "type": "p",
        "text": "La marge libre informe sur le retard maximum possible dans la réalisation d’une tâche sans remettre en cause la date de début au plus tôt des tâches suivantes. Dans le cadre de ce projet, la tâche D peut avoir un retard maximum de 6 jours. Si elle dépasse les 6 jours de retard, la date de début au plus tôt de la tâche E sera réévaluée. La tâche G admet un retard maximum de 1 jour seulement."
      }
    ]
  }
];
