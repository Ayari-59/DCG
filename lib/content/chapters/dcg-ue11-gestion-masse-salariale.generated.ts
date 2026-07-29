// Généré par scripts/convert-docx.mjs depuis CHAPITRE_13__LA_GESTION_DE_LA_MASSE_SALARIALE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-gestion-masse-salariale",
  "level": "DCG",
  "ue": "UE11",
  "number": 13,
  "title": "La gestion de la masse salariale",
  "description": "",
  "durationMin": 25,
  "sections": [
    {
      "id": "introduction",
      "title": "Introduction",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 3 — « Utiliser les outils et techniques budgétaires pour aider à la prise de décision ».**\nPoint 3.2 — les outils de prévision des budgets de ressources humaines sont limités à la masse salariale : prévision des effectifs et des salaires.\nPoint 3.3 — réaliser un contrôle budgétaire en calculant et analysant les écarts sur coûts, dont les charges de personnel.\nArticulation — prolonge le chapitre sur la procédure budgétaire et celui sur le contrôle budgétaire et l’analyse des écarts ; alimente le chapitre sur les tableaux de bord et le reporting."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Établir une masse salariale prévisionnelle à partir des effectifs et des salaires.\n• Calculer et analyser les écarts entre masse salariale prévue et réalisée (effectif, structure, salaire).\n• Interpréter les résultats, repérer les risques et proposer des pistes d'amélioration.\n• Rédiger un écrit argumenté pour conseiller un décideur sur la politique salariale.\n• le pilotage de la masse salariale à la performance globale (dimension sociale et ESG)."
        },
        {
          "type": "p",
          "text": "**Introduction** La masse salariale, première variable de pilotage"
        }
      ]
    },
    {
      "id": "partie-4-le-pilotage-rh-et-la-performance-globale",
      "title": "Partie 4 Le pilotage RH et la performance globale",
      "blocks": [
        {
          "type": "p",
          "text": "**Focus** Le pilotage RH à l'ère du numérique et des données"
        },
        {
          "type": "p",
          "text": "**Hors prog.** Les effets (masse, report, niveau, GVT, noria) — DSCG"
        },
        {
          "type": "p",
          "text": "**Synthèse** Tableau récapitulatif · · fiche examen"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — périmètre DCG / DSCG",
          "text": "Au niveau DCG, la prévision RH porte sur **les effectifs, les salaires et le calcul des écarts**. Le calcul détaillé des **effets masse, report, niveau, GVT et noria relève du DSCG**. Ils sont présentés en fin de chapitre (encadré « Hors programme DCG ») pour éclairer le raisonnement, sans être exigibles à l'examen national."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction — la masse salariale, première variable de pilotage**"
        },
        {
          "type": "p",
          "text": "Dans la plupart des organisations, les charges de personnel constituent le premier poste de dépenses. Selon le secteur d'activité, elles représentent de 25 % à plus de 90 % des charges totales : faibles dans une industrie très capitalistique, elles dominent dans les services, le conseil, la distribution ou l'administration. Leur poids et leur rigidité — un salaire, une fois accordé, se réduit difficilement — en font une variable stratégique du pilotage. Maîtriser la masse salariale, ce n'est pas seulement contenir un coût : c'est arbitrer en permanence entre la performance économique, l'attractivité de l'employeur et la cohésion sociale."
        },
        {
          "type": "p",
          "text": "Le système de rémunération poursuit en effet trois finalités souvent contradictoires : motiver les salariés, fidéliser ceux qui sont en place et attirer de nouveaux talents. Une politique trop restrictive dégrade le climat social et alimente le turnover ; une politique trop généreuse pèse sur la trésorerie et sur la compétitivité. Le contrôle de gestion sociale — rapprochement de la fonction RH et du contrôle de gestion — s'est précisément développé pour éclairer ces arbitrages par le chiffre et par l'analyse."
        },
        {
          "type": "p",
          "text": "Ce chapitre adopte la démarche d'ensemble du programme réformé : pour chaque outil, il s'agit de comprendre pourquoi il existe, de savoir le calculer, d'interpréter ses résultats et d'en critiquer les limites. La masse salariale n'est jamais réduite à une suite de calculs : elle est resituée dans la chaîne qui relie la stratégie RH à la performance globale de l'organisation."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/01.png",
          "alt": "Partie 4 Le pilotage RH et la performance globale",
          "width": 1480,
          "height": 600,
          "caption": "Figure 1 — La chaîne du pilotage : de la stratégie RH à la performance globale"
        }
      ]
    },
    {
      "id": "des-couts-de-personnel-a-la-masse-salariale",
      "title": "Des coûts de personnel à la masse salariale",
      "blocks": [
        {
          "type": "p",
          "text": "Les coûts relatifs au personnel forment un ensemble large. Ils englobent :"
        },
        {
          "type": "ul",
          "items": [
            "les rémunérations et avantages divers : salaires, primes, heures supplémentaires, intéressement, véhicule de fonction, avantages en nature ;",
            "les charges sociales, fiscales et parafiscales correspondantes (cotisations patronales) ;",
            "les charges de personnel intérimaire et la part de sous-traitance correspondant à des frais de main-d'œuvre ;",
            "les coûts administratifs de gestion du personnel : recrutement, paie, formation, subventions au comité social et économique, etc."
          ]
        },
        {
          "type": "p",
          "text": "Au sein de cet ensemble, la masse salariale est un concept plus restreint, central pour le contrôle de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — la masse salariale",
          "text": "La **masse salariale** désigne le **coût réel des salaires** versés à une population donnée pour une période donnée, généralement l'année. La masse salariale dite **« chargée »** recouvre l'ensemble des rémunérations brutes (salaires nets + cotisations salariales) et des cotisations patronales correspondantes."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FORMULE — masse salariale chargée",
          "text": "**Masse salariale chargée = Rémunérations brutes × (1 + taux de charges patronales)**"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/02.png",
          "alt": "Des coûts de personnel à la masse salariale",
          "width": 1307,
          "height": 392,
          "caption": "Figure 2 — Décomposition de la masse salariale chargée"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — rémunération brute, nette, super-brut",
          "text": "La **rémunération brute** est le salaire avant cotisations salariales. La **rémunération nette** est ce que perçoit effectivement le salarié. Le **coût total employeur** (parfois dit « super-brut ») ajoute les cotisations patronales : c'est lui qui mesure le coût supporté par l'organisation."
        }
      ]
    },
    {
      "id": "les-facteurs-d-evolution-de-la-masse-salariale",
      "title": "Les facteurs d'évolution de la masse salariale",
      "blocks": [
        {
          "type": "p",
          "text": "L'évolution de la masse salariale d'une année sur l'autre résulte de quatre familles de facteurs qui interagissent. Les distinguer est la condition d'un pilotage lucide : une même variation globale peut recouvrir des causes très différentes, qui n'appellent pas les mêmes décisions."
        },
        {
          "type": "table",
          "headers": [
            "**Facteur**",
            "**Nature**",
            "**Exemples chez l’entreprise**"
          ],
          "rows": [
            [
              "**Augmentations générales**",
              "Mesures collectives s'appliquant à tout le personnel ou à une catégorie.",
              "Hausse de 1,5 % de la grille des techniciens au 1er avril."
            ],
            [
              "**Augmentations individuelles**",
              "Décisions au mérite, attribuées salarié par salarié.",
              "Prime de performance versée à trois commerciaux."
            ],
            [
              "**Variations d'effectif**",
              "Embauches, départs en retraite, démissions, licenciements.",
              "Recrutement de deux opérateurs ; départ en retraite d'un cadre."
            ],
            [
              "**Variations de structure**",
              "Évolution de la qualification et de l'ancienneté de la population.",
              "Promotion d'un employé au poste de technicien."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — l'effet cliquet",
          "text": "Les salaires sont **rigides à la baisse** : une augmentation accordée est presque toujours définitive (« effet cliquet »). Une décision salariale engage donc l'organisation pour les années suivantes — d'où l'importance d'en mesurer l'impact *avant* de l'accorder."
        }
      ]
    },
    {
      "id": "les-enjeux-du-pilotage-rh",
      "title": "Les enjeux du pilotage RH",
      "blocks": [
        {
          "type": "p",
          "text": "Piloter la masse salariale, c'est tenir ensemble plusieurs enjeux que le contrôleur de gestion doit hiérarchiser selon le contexte de l'organisation :"
        },
        {
          "type": "table",
          "headers": [
            "**Enjeu**",
            "**Question de pilotage**",
            "**Indicateur typique**"
          ],
          "rows": [
            [
              "**Économique**",
              "La masse salariale est-elle soutenable au regard du chiffre d'affaires ?",
              "Ratio MS / CA ; coût moyen par salarié"
            ],
            [
              "**Social**",
              "La politique salariale préserve-t-elle le climat et l'équité internes ?",
              "Turnover ; éventail des rémunérations"
            ],
            [
              "**Stratégique**",
              "L'organisation attire-t-elle et fidélise-t-elle les compétences clés ?",
              "Taux de vacance des postes ; ancienneté"
            ],
            [
              "**Durable**",
              "La politique RH contribue-t-elle à la performance globale (ESG) ?",
              "Égalité F/H ; part de la formation"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — la logique d'ensemble du chapitre",
          "text": "**Comprendre** (Partie 1) → **Calculer la prévision** (Partie 2) → **Analyser les écarts** (Partie 3) → **Interpréter et piloter** (Partie 4). C'est exactement la démarche attendue à l'examen : un calcul, puis une analyse argumentée au service d'une décision."
        }
      ]
    },
    {
      "id": "le-principe-faire-evoluer-une-situation-de-reference",
      "title": "Le principe : faire évoluer une situation de référence",
      "blocks": [
        {
          "type": "p",
          "text": "Établir une masse salariale prévisionnelle consiste à faire évoluer la situation existante à la fin de l'année précédente — l'effectif et les salaires de décembre N — en fonction de la politique sociale (augmentations générales et individuelles) et des variations d'effectifs anticipées pour N+1. La prévision n'est donc pas une extrapolation aveugle : c'est la projection raisonnée d'une situation de départ connue."
        },
        {
          "type": "p",
          "text": "Pour conduire ce calcul proprement, on distingue trois populations dont la rémunération ne joue pas de la même manière sur l'année :"
        },
        {
          "type": "table",
          "headers": [
            "**Population**",
            "**Définition**",
            "**Période rémunérée en N+1**"
          ],
          "rows": [
            [
              "**Personnel sortant**",
              "Salariés qui quittent l'entreprise en cours d'année (retraite, départ).",
              "Du 1er janvier jusqu'à la date de départ."
            ],
            [
              "**Effectif stable**",
              "Salariés présents pendant toute l'année N+1.",
              "Toute l'année (12 mois)."
            ],
            [
              "**Personnel embauché**",
              "Salariés entrant en cours d'année.",
              "De la date d'embauche jusqu'au 31 décembre."
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/03.png",
          "alt": "Le principe : faire évoluer une situation de référence",
          "width": 2154,
          "height": 540,
          "caption": "Figure 3 — Les trois populations de la prévision et la logique par indices"
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — la méthode des indices (base 100 = décembre N)",
          "text": "Plutôt que de manipuler des euros mois par mois, on travaille avec des **indices** en base 100 au salaire de décembre N. Chaque augmentation se traduit par un indice mensuel ; le **cumul des douze indices** donne directement le coefficient annuel à appliquer au salaire de référence. Les augmentations successives sont **multiplicatives** : par exemple +1 % puis +1,5 % donnent 1,01 × 1,015 = 1,02515."
        }
      ]
    },
    {
      "id": "application-integrale-la-prevision-chez-l-entreprise",
      "title": "Application intégrale — la prévision chez l’entreprise",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Prévision de la masse salariale N+1",
          "text": "La masse salariale de l'année N de la Brasserie du Mont (boissons) se présente ainsi :"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif**",
            "**Salaire brut annuel moyen**",
            "**Salaire brut moyen de décembre**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "43 384 €",
              "3 650 €"
            ],
            [
              "Techniciens",
              "16",
              "26 197 €",
              "2 205 €"
            ],
            [
              "Employés",
              "26",
              "17 723 €",
              "1 498 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Décisions et mouvements prévus pour N+1 :**"
        },
        {
          "type": "ul",
          "items": [
            "deux augmentations générales et uniformes : +1 % au 1er avril, puis +1,5 % au 1er octobre ;",
            "un employé W (salaire de décembre 1 800 €) promu technicien le 1er juin, au salaire brut de 2 000 €."
          ]
        },
        {
          "type": "p",
          "text": "**Tableau des départs en retraite prévus :**"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Date de départ**",
            "**Salaire brut moyen de décembre**"
          ],
          "rows": [
            [
              "Employé X",
              "28 février N+1",
              "2 250 €"
            ],
            [
              "Technicien Y",
              "30 juin N+1",
              "3 310 €"
            ],
            [
              "Employé Z",
              "31 août N+1",
              "2 170 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Tableau des embauches prévues :**"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Date d'embauche**",
            "**Salaire brut d'embauche**"
          ],
          "rows": [
            [
              "Employé A",
              "1er mars N+1",
              "1 130 €"
            ],
            [
              "Employé B",
              "1er septembre N+1",
              "1 130 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Travail à faire : établir l'effectif prévisionnel N+1 par catégorie, puis évaluer la masse salariale prévisionnelle N+1 en tenant compte des augmentations générales, de la promotion, des départs en retraite et des embauches."
        },
        {
          "type": "p",
          "text": "**Corrigé — prévision de la masse salariale N+1 :**"
        },
        {
          "type": "h3",
          "text": "Étape 1 — Les effectifs prévisionnels"
        },
        {
          "type": "p",
          "text": "On part de l'effectif N, on retranche les sorties pour obtenir l'effectif stable, puis on ajoute les entrées. La promotion de W est un mouvement interne : il sort de la catégorie « employés » et entre en « techniciens »."
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif N**",
            "**Sorties N+1**",
            "**Effectif stable**",
            "**Entrées N+1**",
            "**Effectif N+1**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "0",
              "8",
              "0",
              "8"
            ],
            [
              "Techniciens",
              "16",
              "1 (Y)",
              "15",
              "1 (W)",
              "16"
            ],
            [
              "Employés",
              "26",
              "2 + 1 = 3",
              "23",
              "2 (A, B)",
              "25"
            ],
            [
              "**Total**",
              "**50**",
              "**4**",
              "**46**",
              "**3**",
              "**49**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — lire les mouvements de la catégorie « employés »",
          "text": "Les 3 sorties = les deux retraités X et Z *plus* l'employé W qui quitte la catégorie par promotion. Les 2 entrées = les embauchés A et B. L'effectif employés passe ainsi de 26 à 25."
        },
        {
          "type": "h3",
          "text": "Étape 2 — La masse salariale de l'effectif stable"
        },
        {
          "type": "p",
          "text": "On construit les indices mensuels en base 100 (décembre N), puis on cumule. Les hausses prennent effet au 1er avril (+1 %) et au 1er octobre (+1,5 %, soit indice 100 × 1,02515 = 102,515)."
        },
        {
          "type": "table",
          "headers": [
            "",
            "**J**",
            "**F**",
            "**M**",
            "**A**",
            "**M**",
            "**J**",
            "**J**",
            "**A**",
            "**S**",
            "**O**",
            "**N**",
            "**D**"
          ],
          "rows": [
            [
              "**Indice**",
              "100",
              "100",
              "100",
              "101",
              "101",
              "101",
              "101",
              "101",
              "101",
              "102,5",
              "102,5",
              "102,5"
            ],
            [
              "**Cumul**",
              "100",
              "200",
              "300",
              "401",
              "502",
              "603",
              "704",
              "805",
              "906",
              "1008,5",
              "1111",
              "1213,5"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le cumul annuel des indices vaut 1 213,545 %. On l'applique aux salaires de décembre N de l'effectif stable (en retirant les sortants et le promu de leur catégorie d'origine, et en intégrant le promu W dans sa nouvelle catégorie pour la part stable)."
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Calcul (salaire déc. × cumul)**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "(8 × 3 650) × 1213,545 %",
              "354 355,14"
            ],
            [
              "Techniciens",
              "(16 × 2 205 − 3 310) × 1213,545 %",
              "387 970,34"
            ],
            [
              "Employés",
              "(26 × 1 498 − 2 250 − 2 170 − 1 800) × 1213,545 %",
              "397 169,01"
            ],
            [
              "**Masse salariale de l'effectif stable**",
              "",
              "**1 139 494,49**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — pourquoi retrancher les sortants ici ?",
          "text": "Dans le bloc « stable », on ne garde que les salariés présents toute l'année. On retire donc des salaires de décembre N ceux des sortants (X, Y, Z) et du promu W ; leur rémunération est traitée séparément dans les étapes 3 et 4."
        },
        {
          "type": "h3",
          "text": "Étape 3 — La masse salariale de l'effectif sortant"
        },
        {
          "type": "p",
          "text": "Chaque sortant est rémunéré jusqu'à son départ. On cumule donc les indices uniquement sur les mois de présence."
        },
        {
          "type": "table",
          "headers": [
            "**Sortant**",
            "**Calcul (salaire déc. × cumul partiel)**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "—",
              "0"
            ],
            [
              "Technicien Y",
              "1 × 3 310 × 603 % (jan.→juin)",
              "19 959,30"
            ],
            [
              "Employés X et Z",
              "1 × 2 250 × 200 % + 1 × 2 170 × 805 % + 1 × 1 800 × 502 %",
              "31 004,50"
            ],
            [
              "**Masse salariale de l'effectif sortant**",
              "",
              "**50 963,80**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — le cas du promu W",
          "text": "La ligne « employés sortants » intègre aussi la part de W rémunérée comme employé du 1er janvier au 31 mai (1 800 € × 502 %). Sa part « technicien » à partir du 1er juin figure à l'étape 4."
        },
        {
          "type": "h3",
          "text": "Étape 4 — La masse salariale de l'effectif embauché"
        },
        {
          "type": "p",
          "text": "Les entrants (A, B) et la part « technicien » du promu W sont rémunérés à compter de leur date d'entrée dans la catégorie. On cumule les indices sur les mois concernés."
        },
        {
          "type": "table",
          "headers": [
            "**Entrant**",
            "**Calcul (salaire × cumul partiel)**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Employé A",
              "1 130 × 1013,545 % (mars→déc.)",
              "11 453,06"
            ],
            [
              "Employé B",
              "1 130 × 408,545 % (sept.→déc.)",
              "4 616,56"
            ],
            [
              "Technicien W",
              "2 000 × 711,545 % (juin→déc.)",
              "14 230,90"
            ],
            [
              "**Masse salariale de l'effectif embauché**",
              "",
              "**30 300,52**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Étape 5 — La synthèse de la prévision N+1"
        },
        {
          "type": "table",
          "headers": [
            "**Composante**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Masse salariale de l'effectif stable",
              "1 139 494,49"
            ],
            [
              "Masse salariale de l'effectif sortant",
              "50 963,80"
            ],
            [
              "Masse salariale de l'effectif embauché",
              "30 300,52"
            ],
            [
              "**Masse salariale prévisionnelle N+1**",
              "**1 220 758,81**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "On peut récapituler par catégorie, en croisant les trois populations :"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Stable (€)**",
            "**Sortants (€)**",
            "**Embauchés (€)**",
            "**MS N+1 (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "354 355,14",
              "0",
              "0",
              "354 355,14"
            ],
            [
              "Techniciens",
              "387 970,34",
              "19 959,30",
              "14 230,90",
              "422 160,54"
            ],
            [
              "Employés",
              "397 169,01",
              "31 004,50",
              "16 069,62",
              "444 243,13"
            ],
            [
              "**Total**",
              "**1 139 494,49**",
              "**50 963,80**",
              "**30 300,52**",
              "**1 220 758,81**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Étape 6 — Lecture économique de la prévision"
        },
        {
          "type": "p",
          "text": "La masse salariale de l'année N (à effectif et salaire annuel moyen) s'élevait à :"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif N**",
            "**Salaire brut annuel moyen**",
            "**Masse de N (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "43 384",
              "347 072,00"
            ],
            [
              "Techniciens",
              "16",
              "26 197",
              "419 152,00"
            ],
            [
              "Employés",
              "26",
              "17 723",
              "460 798,00"
            ],
            [
              "**Total**",
              "**50**",
              "",
              "**1 227 022,00**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "VARIATION DE LA MASSE SALARIALE N → N+1",
          "text": "**Variation absolue** = 1 220 758,81 − 1 227 022,00 = **− 6 263,19 €**\n**Variation relative** = − 6 263,19 / 1 227 022,00 = **− 0,51 %**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Interpréter — pourquoi la masse diminue-t-elle malgré les augmentations ?",
          "text": "Bien que deux augmentations générales aient été accordées, la masse salariale prévisionnelle **diminue légèrement**. Deux mécanismes l'expliquent : le départ en retraite de salariés remplacés par des collaborateurs plus jeunes et moins bien rémunérés (économie sur la masse) ; le remplacement d'un technicien par promotion interne d'un employé moins payé que le partant (modification de la structure professionnelle).\nLe contrôleur de gestion doit **nuancer** cette bonne nouvelle apparente : la baisse repose sur des départs et un rajeunissement qui peuvent, à terme, faire perdre des compétences et de l'expérience. Le chiffre seul ne suffit pas à la décision."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — erreurs fréquentes en prévision",
          "text": "Oublier de retrancher les sortants du bloc « stable » → double comptage. Compter un mois de trop ou de moins : une embauche au 1er mars est rémunérée **10 mois** (mars→décembre), pas 9. Confondre salaire annuel moyen et salaire de décembre : la prévision part toujours du **salaire de référence de décembre N**. Additionner les pourcentages d'augmentation au lieu de les **multiplier**."
        }
      ]
    },
    {
      "id": "la-masse-salariale-comme-charge-directe",
      "title": "La masse salariale comme charge directe",
      "blocks": [
        {
          "type": "p",
          "text": "Le contrôle de la masse salariale suit les deux phases de toute procédure budgétaire : la prévision (Partie 2), puis le calcul et l'analyse des écarts entre prévu et réalisé. C'est précisément l'objet de la compétence 3.3 du programme : « réaliser un contrôle budgétaire en analysant les écarts… expliquer les résultats… proposer des pistes d'amélioration ». L'analyse des écarts sur masse salariale se traite comme un écart sur charge directe."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "MODÈLE GÉNÉRAL — coût de main-d'œuvre directe",
          "text": "**Coût = N × H × S**\n**N** = effectif (nombre de salariés) · **H** = nombre d'heures travaillées par salarié · **S** = salaire horaire."
        },
        {
          "type": "p",
          "text": "L'écart total se décompose alors en trois sous-écarts, sur le modèle des écarts sur charges directes du PCG. Par convention, l'écart sur quantité s'évalue au prix prévu, et l'écart sur prix à la quantité réelle, afin de ne jamais croiser simultanément un effet quantité et un effet prix."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/04.png",
          "alt": "La masse salariale comme charge directe",
          "width": 1440,
          "height": 760,
          "caption": "Figure 4 — Décomposition de l'écart sur masse salariale (cas l’entreprise)"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Formule**",
            "**Ce qu'il mesure**"
          ],
          "rows": [
            [
              "**Écart sur effectif (volume)**",
              "(Nr − Np) × Hp × Sp",
              "L'effet du nombre de salariés."
            ],
            [
              "**Écart sur heures (quantité)**",
              "Nr × (Hr − Hp) × Sp",
              "L'effet du temps de travail (heures supp., absentéisme)."
            ],
            [
              "**Écart sur salaire (prix)**",
              "Nr × Hr × (Sr − Sp)",
              "L'effet du taux de rémunération."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — convention de signe",
          "text": "Un écart **positif** (réalisé > prévu) est **défavorable** : la charge a augmenté. Un écart **négatif** est **favorable** : la charge a diminué."
        }
      ]
    },
    {
      "id": "l-analyse-par-categories-effectif-structure-taux-nominal",
      "title": "L'analyse par catégories : effectif, structure, taux nominal",
      "blocks": [
        {
          "type": "p",
          "text": "Lorsque les salariés sont nombreux et regroupés en catégories (cadres, techniciens, employés), on raffine l'analyse en faisant apparaître un écart sur structure professionnelle. L'écart total se vérifie alors par la relation :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ÉQUATION DE CONTRÔLE",
          "text": "**Écart total = Écart sur effectif total + Écart de structure professionnelle + Écart sur taux nominal**"
        },
        {
          "type": "h3",
          "text": "Application intégrale — l'écart de masse salariale chez l’entreprise"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Analyse de l'écart sur masse salariale",
          "text": "Une fois l'exercice N+1 clos, la Brasserie du Mont compare la masse salariale réalisée à celle de N. (Les effets d'ancienneté n'étant pas communiqués par catégorie, on calcule les écarts d'effectif, de structure et de taux, sans isoler l'effet de noria — voir l'encadré « Hors programme ».)"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Eff. N**",
            "**Sal. moyen N**",
            "**MS N (€)**",
            "**Eff. N+1**",
            "**Sal. moyen N+1**",
            "**MS N+1 (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "43 384,00",
              "347 072,00",
              "8",
              "44 294,00",
              "354 355,14"
            ],
            [
              "Techniciens",
              "16",
              "26 197,00",
              "419 152,00",
              "15",
              "25 473,40",
              "382 101,00"
            ],
            [
              "Employés",
              "26",
              "17 723,00",
              "460 798,00",
              "22",
              "17 372,20",
              "382 188,40"
            ],
            [
              "**Total**",
              "**50**",
              "**24 540,44**",
              "**1 227 022**",
              "**45**",
              "**24 858,70**",
              "**1 118 641,40**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Travail à faire : calculer l'écart total sur masse salariale entre N et N+1, puis le décomposer en écart sur effectif total, écart de structure professionnelle et écart sur taux nominal, et qualifier chaque écart."
        },
        {
          "type": "p",
          "text": "**Corrigé — décomposition de l'écart sur masse salariale :**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ÉCART TOTAL SUR MASSE SALARIALE",
          "text": "1 118 641,40 − 1 227 022,00 = **− 108 380,60 € (favorable)** soit − 8,83 %."
        },
        {
          "type": "h4",
          "text": "a) Écart sur effectif total"
        },
        {
          "type": "p",
          "text": "Comparaison des effectifs totaux, valorisée au salaire moyen prévu (constant) pour isoler l'effet de volume :"
        },
        {
          "type": "table",
          "headers": [
            "**Calcul**",
            "**Résultat**"
          ],
          "rows": [
            [
              "(45 − 50) × 24 540,44",
              "**− 122 702,20 € (favorable)**"
            ],
            [
              "soit 45 / 50 = 0,90",
              "− 10 %"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — formulation par masses fictives",
          "text": "On peut aussi écrire : (En+1 − En) × Sn = MSn+1 à salaire constant − MSn, soit 1 104 319,80 − 1 227 022 = − 122 702,20 €. Les deux approches sont équivalentes."
        },
        {
          "type": "h4",
          "text": "b) Écart de structure professionnelle"
        },
        {
          "type": "p",
          "text": "Il mesure l'impact du changement de répartition des effectifs entre catégories, sur le salaire moyen prévu. On compare l'effectif N+1 réel à l'effectif N+1 reconstitué à structure de N constante, valorisé aux salaires de N."
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif N+1**",
            "**Eff. N+1 à structure N**",
            "**Salaire N (€)**",
            "**Écart (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "45 × (8/50) = 7,2",
              "43 384",
              "+ 34 707,20"
            ],
            [
              "Techniciens",
              "15",
              "45 × (16/50) = 14,4",
              "26 197",
              "+ 15 718,20"
            ],
            [
              "Employés",
              "22",
              "45 × (26/50) = 23,4",
              "17 723",
              "− 24 812,20"
            ],
            [
              "**Total**",
              "**45**",
              "",
              "",
              "**+ 25 613,20 (défav.)**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Interpréter l'écart de structure",
          "text": "L'écart est **défavorable** : la population s'est déformée vers les catégories les mieux rémunérées (la part des employés recule au profit des cadres et techniciens). Le salaire moyen prévu passe de 24 540,44 € à 25 109,62 € — soit 45 × (25 109,62 − 24 540,44) = 25 613,20 €. Cette « montée en gamme » des compétences a un coût, mais peut être un investissement RH justifié."
        },
        {
          "type": "h4",
          "text": "c) Écart sur taux nominal"
        },
        {
          "type": "p",
          "text": "Il compare, pour chaque catégorie, le salaire de N+1 au salaire de N, valorisé à l'effectif N+1 (convention de l'écart sur prix) :"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif N+1**",
            "**Salaire N+1**",
            "**Salaire N**",
            "**Écart (€)**"
          ],
          "rows": [
            [
              "Cadres",
              "8",
              "44 294,00",
              "43 384",
              "+ 7 280,00"
            ],
            [
              "Techniciens",
              "15",
              "25 473,40",
              "26 197",
              "− 10 854,00"
            ],
            [
              "Employés",
              "22",
              "17 372,20",
              "17 723",
              "− 7 717,60"
            ],
            [
              "**Total**",
              "",
              "",
              "",
              "**− 11 291,60 (favorable)**"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "d) Vérification et synthèse"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Montant (€)**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart sur effectif total",
              "− 122 702,20",
              "Favorable"
            ],
            [
              "Écart de structure professionnelle",
              "+ 25 613,20",
              "Défavorable"
            ],
            [
              "Écart sur taux nominal",
              "− 11 291,60",
              "Favorable"
            ],
            [
              "**Écart total**",
              "**− 108 380,60**",
              "**Favorable**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Interpréter — la lecture d'ensemble pour le décideur",
          "text": "La masse salariale a baissé de 108 381 € (− 8,83 %). Mais ce résultat global masque trois mouvements de sens différents : la réduction d'effectif (− 5 salariés) explique l'essentiel de l'économie ; la déformation de structure vers les qualifications élevées coûte 25 613 € ; les salaires nominaux, en moyenne, ont légèrement baissé (effet du rajeunissement).\n**Conseil au décideur :**l'économie est réelle mais **fragile**. Elle provient surtout de la baisse des effectifs, qui peut peser sur la capacité de production et sur le climat social. Avant de la considérer comme un acquis, l’entreprise doit vérifier que la charge de travail reste soutenable et que les compétences clés sont préservées."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — erreurs fréquentes sur les écarts",
          "text": "Inverser les conventions : l'écart sur quantité se valorise au **prix prévu**, l'écart sur prix à la **quantité réelle**. Se tromper de sens : un écart favorable n'est pas toujours une bonne nouvelle (cf. baisse d'effectif subie). Oublier la vérification : la somme des trois sous-écarts doit *exactement* reconstituer l'écart total. Conclure sans interpréter : à l'examen, le calcul ne vaut que la moitié des points ; l'analyse et le conseil au décideur font la différence."
        }
      ]
    },
    {
      "id": "les-indicateurs-de-pilotage-rh",
      "title": "Les indicateurs de pilotage RH",
      "blocks": [
        {
          "type": "p",
          "text": "Le budget de masse salariale ne se pilote pas seulement par son montant : il s'accompagne d'indicateurs qui éclairent la performance sociale et organisationnelle. Ils nourrissent les tableaux de bord et le reporting et permettent au contrôleur de gestion sociale de dialoguer avec la fonction RH."
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Calcul**",
            "**Ce qu'il révèle**"
          ],
          "rows": [
            [
              "**Ratio MS / CA**",
              "Masse salariale / Chiffre d'affaires",
              "Poids et soutenabilité du coût du travail."
            ],
            [
              "**Coût moyen par salarié**",
              "Masse salariale / Effectif moyen",
              "Niveau de rémunération, dérive éventuelle."
            ],
            [
              "**Taux de turnover**",
              "Départs / Effectif moyen",
              "Fidélisation, risque de perte de compétences."
            ],
            [
              "**Taux d'absentéisme**",
              "Heures d'absence / Heures théoriques",
              "Climat social, conditions de travail."
            ],
            [
              "**Productivité du travail**",
              "Valeur ajoutée / Effectif (ou heures)",
              "Efficience de la ressource humaine."
            ],
            [
              "**Éventail des rémunérations**",
              "Plus haut salaire / Plus bas salaire",
              "Équité interne, cohésion."
            ]
          ]
        }
      ]
    },
    {
      "id": "productivite-gpec-et-creation-de-valeur",
      "title": "Productivité, GPEC et création de valeur",
      "blocks": [
        {
          "type": "h3",
          "text": "La masse salariale comme investissement"
        },
        {
          "type": "p",
          "text": "Réduire la masse salariale n'est pas une fin en soi. La vraie question est celle du rapport entre le coût du travail et la valeur créée. Un euro de salaire supplémentaire qui génère plus d'un euro de valeur ajoutée est un bon investissement. Le contrôleur de gestion doit donc relier la masse salariale à la productivité et à la valeur, et non la traiter comme une simple charge à comprimer."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — la GPEC",
          "text": "La **gestion prévisionnelle des emplois et des compétences (GPEC)** anticipe les besoins futurs en emplois et en compétences au regard de la stratégie, et organise les mobilités, recrutements et formations pour y répondre. Elle prolonge la prévision de la masse salariale par une dimension **qualitative** : non plus seulement « combien de salariés et à quel coût ? », mais « quelles compétences, pour quels métiers de demain ? »."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — la GPEC chez l’entreprise",
          "text": "Le virage écoresponsable de l’entreprise crée de nouveaux besoins : éco-conception, maîtrise des matériaux recyclés, analyse du cycle de vie. La GPEC conduit l'entreprise à former ses techniciens plutôt qu'à recruter à l'extérieur, ce qui sécurise les compétences et fidélise les équipes — tout en pesant à court terme sur la masse salariale via la montée en qualification (effet de structure observé en Partie 3)."
        },
        {
          "type": "h3",
          "text": "Le capital humain"
        },
        {
          "type": "p",
          "text": "L'approche par le capital humain considère les salariés non comme un coût mais comme un actif immatériel porteur de valeur future. Cette vision, centrale dans le programme réformé qui insiste sur « l'immatériel », justifie des dépenses de formation, de fidélisation et de qualité de vie au travail comme des leviers de performance durable."
        }
      ]
    },
    {
      "id": "la-dimension-sociale-et-durable-de-la-performance",
      "title": "La dimension sociale et durable de la performance",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS DURABILITÉ ♻ — la masse salariale et la performance globale",
          "text": "La **performance globale** articule les dimensions économique, sociale et environnementale. La politique salariale et RH en est un pilier social majeur, mesuré par des **indicateurs extra-financiers** (volet « S » de l'ESG).\n**Égalité et équité :**index d'égalité femmes-hommes, écart de rémunération, mixité de l'encadrement.\n**Emploi durable :**part des CDI, maintien dans l'emploi des seniors, insertion des jeunes et des personnes en situation de handicap.\n**Investissement dans le capital humain :**part de la masse salariale consacrée à la formation, montée en compétences vertes.\n**Conditions de travail :**absentéisme, accidents du travail, qualité de vie au travail — leur amélioration réduit les coûts cachés (cf. chapitre sur la gestion de la production) et soutient la performance.\nPour l’entreprise, l'arbitrage est explicite : la montée en qualification et la formation aux métiers de l'éco-conception **alourdissent la masse salariale à court terme** mais renforcent l'attractivité de l'employeur, la rétention des talents et la crédibilité de son positionnement durable — création de valeur à moyen terme."
        }
      ]
    },
    {
      "id": "regard-critique-apports-et-limites-du-budget-de-masse-salari",
      "title": "Regard critique : apports et limites du budget de masse salariale",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "**Apports**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Anticiper l'impact des décisions salariales avant de les prendre (effet cliquet).",
              "Une prévision reste fragile : départs imprévus, tensions sur le marché du travail, inflation."
            ],
            [
              "Décomposer une variation globale en causes lisibles (effectif, structure, salaire).",
              "Le pilotage par le coût peut ignorer la valeur créée et la qualité du travail."
            ],
            [
              "Objectiver le dialogue social par des chiffres partagés.",
              "Risque social : une logique de compression nourrit défiance, turnover et désengagement."
            ],
            [
              "Relier la RH à la stratégie et à la performance globale.",
              "Les approches traditionnelles peinent à capter l'immatériel (compétences, engagement)."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — l'écrit argumenté attendu à l'examen",
          "text": "Le programme exige de **rédiger un écrit pour conseiller le décideur**. Structure efficace : (1) rappeler le constat chiffré ; (2) en expliquer les causes ; (3) repérer les risques (sociaux, de compétences) ; (4) proposer des pistes concrètes et nuancées. La nuance — ni « tout réduire », ni « tout accorder » — est ce qui distingue une bonne copie."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus numérique — le pilotage RH à l'ère des données**"
        },
        {
          "type": "p",
          "text": "La transformation numérique reconfigure profondément le pilotage des ressources humaines. Le programme réformé demande d'en présenter les outils « de manière générale », sans imposer de logiciel : ce qui compte, c'est de comprendre ce que la donnée change dans le métier du contrôleur de gestion sociale."
        },
        {
          "type": "table",
          "headers": [
            "**Outil**",
            "**Apport pour le pilotage RH**"
          ],
          "rows": [
            [
              "**SIRH**",
              "Système d'information RH : centralise paie, effectifs, temps et carrières — source unique et fiable des données."
            ],
            [
              "**ERP**",
              "Intègre la RH aux autres processus (production, finance) : la masse salariale se relie automatiquement aux budgets."
            ],
            [
              "**Business Intelligence**",
              "Tableurs avancés et outils décisionnels (tableaux de bord dynamiques, simulations de scénarios salariaux)."
            ],
            [
              "**HR / People Analytics**",
              "Analyse des données RH pour anticiper turnover, absentéisme, besoins de compétences."
            ],
            [
              "**Intelligence artificielle**",
              "Aide à la prévision (modèles d'évolution de la masse), au tri de candidatures, à la détection d'anomalies de paie."
            ],
            [
              "**Automatisation**",
              "Fiabilise les calculs répétitifs et libère du temps pour l'analyse et le conseil."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — le numérique ne remplace pas le jugement",
          "text": "Les outils accélèrent le calcul et enrichissent l'analyse, mais ne décident pas. La qualité des données conditionne tout (« garbage in, garbage out ») ; l'usage des données personnelles RH impose le respect du RGPD ; et l'interprétation — relier un chiffre à un contexte humain — reste l'apport irremplaçable du contrôleur de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Pour aller plus loin — les effets (niveau DSCG, hors programme DCG)**"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — HORS PROGRAMME DCG",
          "text": "Le guide pédagogique précise que le calcul des **effets masse, report, niveau, GVT et noria relève du DSCG**. La section ci-dessous est fournie pour la cohérence du raisonnement et la préparation au cursus supérieur. Elle **n'est pas exigible à l'examen DCG**."
        },
        {
          "type": "h3",
          "text": "Les trois effets à effectifs constants"
        },
        {
          "type": "p",
          "text": "Pour isoler l'impact des seules variations de rémunération, l'analyse se fait à effectifs constants. On distingue alors :"
        },
        {
          "type": "table",
          "headers": [
            "**Effet**",
            "**Définition**",
            "**Coefficient**"
          ],
          "rows": [
            [
              "**Effet de niveau**",
              "Évolution de la rémunération entre deux dates (en général décembre N et décembre N+1). Indépendant des dates d'augmentation (« effet apparent »).",
              "Salaire déc. N+1 / Salaire déc. N"
            ],
            [
              "**Effet de masse**",
              "Hausse réelle subie sur l'année : MS annuelle réelle rapportée à la MS qui aurait résulté du salaire de janvier sur 12 mois. Dépend des dates.",
              "MS annuelle N / (Salaire jan. × 12)"
            ],
            [
              "**Effet de report**",
              "Incidence sur N+1 des augmentations décidées en N, même sans nouvelle hausse.",
              "(Salaire jan. N+1 × 12) / MS annuelle N"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/05.png",
          "alt": "Regard critique : apports et limites du budget de masse salariale",
          "width": 2142,
          "height": 468,
          "caption": "Figure 5 — Les effets niveau, masse et report sur la masse salariale (N, N+1, N+2)"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-masse-salariale/06.png",
          "alt": "Regard critique : apports et limites du budget de masse salariale",
          "width": 2664,
          "height": 948,
          "caption": "Figure 6 — Lecture graphique : variation relative de la masse salariale d’un exercice à l’autre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RELATION FONDAMENTALE ENTRE LES EFFETS",
          "text": "**Effet de niveau (N) = Effet de masse (N) × Effet de report (N → N+1)**\n*Vérification (cadres) : 1,02515 = 1,0112875 × 1,013707*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — date d'augmentation et effet de masse",
          "text": "Pour une même augmentation en niveau, **plus la hausse est tardive, plus l'effet de masse est faible**. Si l'effet de masse égale l'effet de niveau, c'est qu'une seule augmentation a eu lieu au 1er janvier. Le salarié, lui, préfère une augmentation précoce."
        },
        {
          "type": "h3",
          "text": "Les variations individuelles : GVT et noria"
        },
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Contenu**"
          ],
          "rows": [
            [
              "**Effet GVT**",
              "Glissement (augmentations au mérite, hors ancienneté) · Vieillissement (hausses automatiques liées à l'ancienneté) · Technicité (accès à une qualification supérieure)."
            ],
            [
              "**Effet de noria**",
              "Économie réalisée en remplaçant des salariés âgés par de plus jeunes, de même catégorie mais moins bien payés. Se calcule sur les sortants remplacés poste par poste, à compter du remplacement."
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Exemple d'effet de noria (DSCG) : trois cadres entrants à 40 000 € remplacent des sortants à 50 000 €, cinq employés entrants à 22 000 € remplacent des sortants à 30 000 € :*"
        },
        {
          "type": "p",
          "text": "**Effet de noria = 3 × (40 000 − 50 000) + 5 × (22 000 − 30 000) = − 70 000 € (favorable).**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — articulation des effets dans l'analyse d'écart",
          "text": "L'effet GVT regroupe les facteurs structurels autres que l'effectif : glissement + technicité (≈ effet de structure professionnelle) et vieillissement. L'effet de noria s'y ajoute pour les remplacements. Dans l'exemple l’entreprise de la Partie 3, l'ancienneté n'étant pas fournie, seul l'effet GVT global est calculable : 0,91167 = 0,99003 × 0,90 × GVT, d'où GVT ≈ + 2,32 %."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative — l'atelier Montage de l’entreprise**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Application récapitulative — l'atelier Montage",
          "text": "l’entreprise exploite à Lens un **atelier Montage**. Au 31 décembre N, il emploie **10 opérateurs** (catégorie employés, salaire brut de décembre 2 000 €) et **4 techniciens** (salaire brut de décembre 2 600 €).\n**Politique salariale N+1 :**deux augmentations générales et uniformes, **+1 % au 1er avril** puis **+2 % au 1er juillet**.\n**Mouvements prévus :**un opérateur part en retraite le **30 avril N+1** (salaire de décembre 2 000 €) ; un technicien est embauché le **1er mars N+1** au salaire brut de 2 500 €.\n**Travail à faire —**1. Établir le tableau des effectifs N+1. 2. Construire les indices mensuels (base 100 = décembre N) et leur cumul. 3. Calculer la masse salariale prévisionnelle N+1. 4. La comparer à la masse de référence (effectif et salaire de décembre N sur 12 mois) et chiffrer la variation. 5. Rédiger un bref commentaire pour le responsable d'atelier."
        },
        {
          "type": "h3",
          "text": "Corrigé — question 1 : les effectifs prévisionnels"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Effectif N**",
            "**Sorties**",
            "**Stable**",
            "**Entrées**",
            "**Effectif N+1**"
          ],
          "rows": [
            [
              "Employés (opérateurs)",
              "10",
              "1",
              "9",
              "0",
              "9"
            ],
            [
              "Techniciens",
              "4",
              "0",
              "4",
              "1",
              "5"
            ],
            [
              "**Total**",
              "**14**",
              "**1**",
              "**13**",
              "**1**",
              "**14**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Corrigé — question 2 : indices et cumul"
        },
        {
          "type": "p",
          "text": "Base 100 = décembre N. Hausses : +1 % au 1er avril (indice 101) ; +2 % au 1er juillet (101 × 1,02 = 103,02). Les augmentations se multiplient."
        },
        {
          "type": "table",
          "headers": [
            "",
            "**J**",
            "**F**",
            "**M**",
            "**A**",
            "**M**",
            "**J**",
            "**J**",
            "**A**",
            "**S**",
            "**O**",
            "**N**",
            "**D**"
          ],
          "rows": [
            [
              "**Indice**",
              "100",
              "100",
              "100",
              "101",
              "101",
              "101",
              "103,02",
              "103,02",
              "103,02",
              "103,02",
              "103,02",
              "103,02"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — cumuls utiles",
          "text": "**Année complète (stable) :**3 × 100 + 3 × 101 + 6 × 103,02 = **1 221,12 %**\n**Sortant — janvier→avril :**3 × 100 + 1 × 101 = **401 %**\n**Entrant — mars→décembre :**1 × 100 + 3 × 101 + 6 × 103,02 = **1 021,12 %**"
        },
        {
          "type": "h3",
          "text": "Corrigé — question 3 : la masse salariale prévisionnelle N+1"
        },
        {
          "type": "p",
          "text": "**Effectif stable** (présent toute l'année) — on retire l'opérateur sortant :"
        },
        {
          "type": "table",
          "headers": [
            "**Composante**",
            "**Calcul**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Opérateurs stables",
              "9 × 2 000 × 1 221,12 %",
              "219 801,60"
            ],
            [
              "Techniciens stables",
              "4 × 2 600 × 1 221,12 %",
              "126 996,48"
            ],
            [
              "**Sous-total stable**",
              "",
              "**346 798,08**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Effectif sortant** (opérateur, rémunéré jan.→avril) et **entrant** (technicien, rémunéré mars→déc.) :"
        },
        {
          "type": "table",
          "headers": [
            "**Composante**",
            "**Calcul**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Opérateur sortant",
              "2 000 × 401 %",
              "8 020,00"
            ],
            [
              "Technicien entrant",
              "2 500 × 1 021,12 %",
              "25 528,00"
            ],
            [
              "**Masse salariale prévisionnelle N+1**",
              "346 798,08 + 8 020,00 + 25 528,00",
              "**380 346,08**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Corrigé — question 4 : la variation"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "VARIATION DE LA MASSE SALARIALE",
          "text": "**Masse de référence N** = (10 × 2 000 + 4 × 2 600) × 12 = 30 400 × 12 = **364 800,00 €**\n**Variation absolue** = 380 346,08 − 364 800,00 = **+ 15 546,08 €**\n**Variation relative** = + 15 546,08 / 364 800,00 = **+ 4,26 %**"
        },
        {
          "type": "h3",
          "text": "Corrigé — question 5 : commentaire pour le responsable d'atelier"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "proposition de corrigé rédigé",
          "text": "La masse salariale de l'atelier Montage **augmente de 4,26 %** en N+1, alors même qu'un opérateur part en retraite. Trois causes se combinent : les **deux augmentations générales** (+1 % puis +2 %), dont l'effet se cumule sur l'année ; surtout, le **remplacement d'un opérateur** (parti) **par un technicien** mieux rémunéré (2 500 € contre 2 000 €), qui déforme la structure vers le haut.\nCette hausse n'est pas nécessairement un mauvais signe : elle traduit une **montée en qualification** de l'atelier. Le responsable doit toutefois vérifier que ce surcoût est **justifié par un gain de productivité ou de polyvalence**. À surveiller également : l'augmentation reste **définitive (effet cliquet)** et pèsera sur les exercices suivants. Recommandation : valider l'embauche du technicien si elle soutient la performance de l'atelier, et suivre le ratio masse salariale / production sur N+1."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — ce que l'examinateur valorise",
          "text": "Un calcul **exact et présenté étape par étape** (effectifs → indices → masses → variation), puis un **commentaire qui dépasse le chiffre** : identifier les causes, nuancer le sens de la variation et relier la décision à la performance de l'atelier. Le « calcul puis décision » est la trame attendue le jour de l'épreuve."
        },
        {
          "type": "p",
          "text": "*Fin du chapitre 13 — La gestion de la masse salariale et le budget des ressources humaines*"
        }
      ]
    },
    {
      "id": "tableau-recapitulatif-des-notions",
      "title": "Tableau récapitulatif des notions",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Définition**",
            "**Intérêt**",
            "**Limites**"
          ],
          "rows": [
            [
              "**Masse salariale**",
              "Coût réel des salaires chargés sur une période.",
              "Mesure le premier poste de charges.",
              "Rigide à la baisse (effet cliquet)."
            ],
            [
              "**MS chargée**",
              "Rém. brutes × (1 + taux patronal).",
              "Coût complet pour l'employeur.",
              "Sensible aux évolutions du taux de charges."
            ],
            [
              "**Facteurs d'évolution**",
              "Aug. générales, individuelles, effectif, structure.",
              "Identifier les causes d'une variation.",
              "Effets imbriqués, difficiles à isoler."
            ],
            [
              "**Prévision de la MS**",
              "Projection par populations (stable, sortants, embauchés) et indices.",
              "Anticiper l'impact des décisions RH.",
              "Hypothèses fragiles (départs, marché)."
            ],
            [
              "**Écart sur effectif**",
              "(Nr − Np) × Hp × Sp.",
              "Mesure l'effet du volume d'emploi.",
              "Une baisse « favorable » peut être subie."
            ],
            [
              "**Écart de structure**",
              "Impact du changement de répartition par catégories.",
              "Révèle la montée/baisse en qualification.",
              "Ne dit rien de la valeur produite."
            ],
            [
              "**Écart sur taux**",
              "Nr × Hr × (Sr − Sp).",
              "Mesure l'effet pur de la rémunération.",
              "À interpréter avec l'effet de noria (DSCG)."
            ],
            [
              "**Pilotage RH**",
              "Indicateurs reliant coût, valeur et social.",
              "Relie la RH à la performance globale.",
              "L'immatériel reste mal capté."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Formules clés"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FORMULES À MAÎTRISER",
          "text": "MS chargée = Rém. brutes × (1 + taux patronal)\nCoût de main-d'œuvre = N × H × S\nÉcart sur effectif (volume) = (Nr − Np) × Hp × Sp\nÉcart sur heures (quantité) = Nr × (Hr − Hp) × Sp\nÉcart sur salaire (prix) = Nr × Hr × (Sr − Sp)\nÉcart total = écart effectif + écart structure + écart taux nominal"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — PIÈGES CLASSIQUES",
          "text": "Additionner les % d'augmentation au lieu de les multiplier. Mal compter les mois de présence (embauche au 1er mars = 10 mois). Double comptage des sortants dans le bloc stable. Croiser quantité réelle et prix réel dans un même sous-écart. Conclure « favorable = bon » sans analyser la cause (baisse d'effectif subie). Développer les effets masse/niveau/noria : hors programme DCG."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
