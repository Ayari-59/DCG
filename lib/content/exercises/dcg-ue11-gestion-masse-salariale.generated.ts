// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A13.1",
    "title": "IT",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise industrielle IT présente la structure de masse salariale suivante (en milliers d’euros) réduite à deux catégories professionnelles (ingénieurs et techniciens) et trois niveaux d’ancienneté (a1, a2, a3)."
      },
      {
        "type": "table",
        "headers": [
          "**Catégories**",
          "**Ancienneté**",
          "**Masse salariale année N**",
          "**Masse salariale année N+1**"
        ],
        "rows": [
          [
            "**Effectifs**",
            "**Salaire annuel**",
            "**Total k€**",
            "**Effectifs**",
            "**Salaire annuel**",
            "**Total k€**"
          ],
          [
            "**Ingénieurs**",
            "a1",
            "12",
            "40,50",
            "486,00",
            "10",
            "41,50",
            "415,00"
          ],
          [
            "a2",
            "14",
            "45,00",
            "630,00",
            "13",
            "45,50",
            "591,50"
          ],
          [
            "a3",
            "6",
            "52,50",
            "315,00",
            "7",
            "54,25",
            "379,75"
          ],
          [
            "**Techniciens**",
            "a1",
            "45",
            "30,25",
            "1 361,25",
            "52",
            "32,00",
            "1 664,00"
          ],
          [
            "a2",
            "60",
            "36,00",
            "2 160,00",
            "55",
            "38,00",
            "2 090,00"
          ],
          [
            "a3",
            "30",
            "39,25",
            "1 177,50",
            "32",
            "39,75",
            "1 272,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Déterminer et commenter la masse salariale prévisionnelle d’IT et ses évolutions.**"
      },
      {
        "type": "p",
        "text": "**➔ Rédiger une note de synthèse sur la politique salariale à mener par IT**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Déterminer et commenter la masse salariale prévisionnelle d’IT et ses évolutions.**"
      },
      {
        "type": "p",
        "text": "Il s’agit, dans ces calculs préparatoires, de déterminer des masses salariales intermédiaires en modifiant à chaque étape une composante de la masse salariale. Par convention, les effectifs sont récupérés sur l’année N+1, et les valeurs monétaires sur l’année N."
      },
      {
        "type": "p",
        "text": "**Tableau préparatoire (en milliers d’euros)**"
      },
      {
        "type": "table",
        "headers": [
          "**Catégories**",
          "",
          "**MS année N**",
          "**MS année N+1**",
          "**MS à ancienneté constante**",
          "**MS à structure constante**",
          "**MS à salaire constant**"
        ],
        "rows": [
          [
            "",
            "",
            "Eff.",
            "sal. an",
            "Total",
            "Eff.",
            "sal. an",
            "Total",
            "Eff.",
            "sal. an",
            "Total",
            "Eff.",
            "sal. an",
            "Total",
            "Eff.",
            "sal. an",
            "Total"
          ],
          [
            "**Ingénieurs**",
            "a.1a.2a.3",
            "12146",
            "40,50 45,00 52,50",
            "486,00 630,00 315,00",
            "10137",
            "41,50 45,50 54,25",
            "415,00 591,50 379,75",
            "10137",
            "40,50 45,00 52,50",
            "405,00 585,00 367,50",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "",
            "",
            "32",
            "44,72",
            "1 431,00",
            "30",
            "46,21",
            "1 386,25",
            "30",
            "45,25",
            "1 357,50",
            "30",
            "44,72",
            "1 341,56",
            "",
            "",
            ""
          ],
          [
            "**Techniciens**",
            "a.1a.2a.3",
            "456030",
            "30,25 36,00 39,25",
            "1 361,252 160,001 177,50",
            "525532",
            "32,00 38,00 39,75",
            "1 664,002 090,001 272,00",
            "525532",
            "30,253639,25",
            "1 573,001 980,001 256,00",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "",
            "",
            "135",
            "34,81",
            "4 698,75",
            "139",
            "36,16",
            "5 026,00",
            "139",
            "34,60",
            "4 809,00",
            "139",
            "34,81",
            "4 837,97",
            "",
            "",
            ""
          ],
          [
            "**Total général**",
            "",
            "167",
            "36,71",
            "6 129,75",
            "169",
            "37,94",
            "6 412,25",
            "169",
            "36,49",
            "6 166,50",
            "169",
            "36,57",
            "6 179,53",
            "169",
            "36,71",
            "6 203,16"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Schéma récapitulatif**"
      },
      {
        "type": "p",
        "text": "**Écart sur salaires nominaux = + 245,75Écart sur compositiond’ancienneté = – 13,03Écart sur structureprofessionnelle = – 23,63Écart sur effectif = + 73,41Écart total = + 282,50Écart sur salaires nominaux = + 245,75Écart sur compositiond’ancienneté = – 13,03Écart sur structureprofessionnelle = – 23,63Écart sur effectif = + 73,41Écart total = + 282,50 Analyse des écarts**"
      },
      {
        "type": "p",
        "text": "Masse salariale année N+1 : 169 × 37,94 = 6 412,25"
      },
      {
        "type": "p",
        "text": "Masse salariale à ancienneté constante : 169 × 36,49 = 6 166,50"
      },
      {
        "type": "p",
        "text": "Masse salariale à structure constante : 169 × 36,57 = 6 179,53"
      },
      {
        "type": "p",
        "text": "Masse salariale à salaire moyen global constant : 169 × 36,71 = 6 203,16"
      },
      {
        "type": "p",
        "text": "Masse salariale année N : 167 × 36,71 = 6 129,75"
      },
      {
        "type": "p",
        "text": "**Analyse des effets**"
      },
      {
        "type": "p",
        "text": "Effet sur taux : 37,94/36,49= 1,0397"
      },
      {
        "type": "p",
        "text": "Effet de noria :36,49/36,57= 0,9978"
      },
      {
        "type": "p",
        "text": "Effet de structure :36,57/36,71= 0,9962"
      },
      {
        "type": "p",
        "text": "Effet d’effectif :169/167= 1,0120"
      },
      {
        "type": "p",
        "text": "Effet total : 6 412,25/6 129,75 = 1,0461"
      },
      {
        "type": "p",
        "text": "L’impact des taux est le suivant :"
      },
      {
        "type": "p",
        "text": "1,0397 × 0,9978 × 0,9962 × 1,012 = 1,046"
      },
      {
        "type": "p",
        "text": "**Synthèse d’une politique salariale**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger une note de synthèse sur la politique salariale"
      },
      {
        "type": "p",
        "text": "**Méthode***1. Délimiter le contexte et les acteurs visés (secteur en expansion ou en déclin, recrutement aisé ou tension sur des*2. Repérer les objectifs de la politique ressources humaines. Actuellement, la gestion des ressources humaines se doit d’élargir son champ d’action en essayant d’évaluer et d’analyser aussi bien la dimension quantitative des coûts des ressources humaines que la dimension qualitative des3. Comparer les résultats de l’analyse de la masse salariale aux objectifs visés.4. Proposer, le cas échéant, d’autres informations à calculer ou des pistes d’amélioration (motivation, fidélisation…)."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "C13.1",
    "title": "Major",
    "statement": [
      {
        "type": "p",
        "text": "La politique salariale de la société Major, positionnée sur un marché de construction"
      },
      {
        "type": "p",
        "text": "mécanique très compétitif à l’international, consiste à verser un salaire brut mensuel plus élevé que la plupart de ses concurrents, afin d’attirer et de garder en son sein des salariés de qualité. En contrepartie, elle ne verse pas de treizième mois. La direction est composée de trois personnes : le PDG, également directeur de production, un directeur administratif et financier (DAF) et un directeur commercial. Le PDG vous charge d’étudier l’évolution des salaires entre les années N et N+1 (annexe 1)."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Analyser et décomposer en écarts l’évolution des masses salariales en N et N+1.**"
      },
      {
        "type": "p",
        "text": "**2. Commenter les évolutions et plus spécifiquement l’interprétation et l’explication de l’écart sur structure professionnelle.**"
      },
      {
        "type": "p",
        "text": "La société Major souhaite maîtriser pour l’année N+2 l’évolution de sa masse salariale et vous charge d’en établir les prévisions. La société Major résiste assez bien à la crise en parvenant à maintenir son activité, tout en cherchant à développer des relais de croissance."
      },
      {
        "type": "p",
        "text": "La direction des ressources humaines vous fournit les données salariales pour l’année N+2 (annexe 2) ainsi que les mouvements prévisibles de personnel tels qu’ils ressortent des données budgétaires collationnées (annexe 3)."
      },
      {
        "type": "p",
        "text": "Les salariés participant à l’effort global ont fait part d’une demande d’augmentation à la direction générale. Face à la grogne montante des salariés, la direction étudie la proposition de deux scénarios :"
      },
      {
        "type": "p",
        "text": "– deux augmentations de 0,5 % intervenant pour la première le 1er mai et pour la seconde le 1er septembre ;"
      },
      {
        "type": "p",
        "text": "– une augmentation générale de 1,2 % à compter du 1er octobre."
      },
      {
        "type": "p",
        "text": "Ces propositions doivent être présentées au comité social et économique (CSE)."
      },
      {
        "type": "p",
        "text": "Les représentants des salariés s’interrogent sur la position à adopter quant à ces deux options. Ils cherchent à rassurer les salariés inquiets de bien comprendre les enjeux de la négociation salariale. Après analyse des niveaux d’augmentation prévus et des dates de ces augmentations, ils indiquent que la seconde option est la plus intéressante."
      },
      {
        "type": "p",
        "text": "La direction générale cherche des arguments pour comparer les deux options, à partir du calcul des différents effets."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**3. Comparer les 2 options et répondre aux demandes de la direction générale.**"
      },
      {
        "type": "p",
        "text": "**4. Déterminer et commenter la masse salariale prévisionnelle et ses évolutions pour N+2 si l’option 1 est retenue.**"
      },
      {
        "type": "p",
        "text": "**Salaires sur 12 mois et effectifs de N et N+1**"
      },
      {
        "type": "table",
        "headers": [
          "**Catégories du personnel**",
          "**Année N**",
          "**Année N+1**"
        ],
        "rows": [
          [
            "**Effectifs**",
            "**Salaires moyens mensuels**",
            "**Effectifs**",
            "**Salaires moyens mensuels**"
          ],
          [
            "**Direction**",
            "3",
            "6 030",
            "3",
            "6 150"
          ],
          [
            "**Cadre junior**",
            "1",
            "3 500",
            "1",
            "3 535"
          ],
          [
            "**Cadres seniors**",
            "4",
            "4 240",
            "4",
            "4 300"
          ],
          [
            "**Agent de maîtrise junior**",
            "1",
            "3 500",
            "1",
            "3 535"
          ],
          [
            "**Agents de maîtrise senior**",
            "4",
            "4 000",
            "4",
            "4 100"
          ],
          [
            "**Techniciens**",
            "25",
            "3 500",
            "30",
            "3 570"
          ],
          [
            "**Employés**",
            "15",
            "2 000",
            "14",
            "2 040"
          ],
          [
            "**Ouvriers**",
            "47",
            "1 600",
            "40",
            "1 632"
          ],
          [
            "**Effectif total**",
            "100",
            "2 507,50",
            "97",
            "2 681,03"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Données salariales de N+2**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Effectifs**",
          "**Salaires bruts moyens décembre N+1**"
        ],
        "rows": [
          [
            "**Direction**",
            "3",
            "6 089"
          ],
          [
            "**Cadres**",
            "5",
            "4 368"
          ],
          [
            "**Agents de maîtrise**",
            "5",
            "4 121"
          ],
          [
            "**Techniciens**",
            "30",
            "3 606"
          ],
          [
            "**Employés**",
            "14",
            "2 060"
          ],
          [
            "**Ouvriers**",
            "40",
            "1 648"
          ],
          [
            "**Total**",
            "97",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Mouvements prévisibles de personnel pour N+2**"
      },
      {
        "type": "table",
        "headers": [
          "**Départs à la retraite (fin de mois)**",
          "**Embauches (début de mois)**"
        ],
        "rows": [
          [
            "**Catégories**",
            "**Effectif**",
            "**Mois de départ**",
            "**Salaire décembre N+1**",
            "**Catégories**",
            "**Effectif**",
            "**Mois d’arrivée**",
            "**Salaire brut lors de l’embauche**"
          ],
          [
            "Technicien",
            "1",
            "Septembre",
            "3 750",
            "Technicien",
            "1",
            "Octobre",
            "3 500"
          ],
          [
            "Employé",
            "1",
            "Mars",
            "3 000",
            "Employé",
            "1",
            "Avril",
            "2 800"
          ],
          [
            "Employé",
            "1",
            "Novembre",
            "3 000",
            "",
            "",
            "",
            ""
          ],
          [
            "Total",
            "3",
            "",
            "",
            "Total",
            "2",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions"
      },
      {
        "type": "p",
        "text": "**1. Analyser et décomposer en écarts l’évolution des masses salariales N et N+ 1**"
      },
      {
        "type": "p",
        "text": "Écart de masse salariale entre l’année N et l’année N+1"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Nombre**",
          "**Salaires moyens mensuels**",
          "**Salaires annuels bruts en €**",
          "**Nombre**",
          "**Salaires moyens mensuels**",
          "**Salaires annuels bruts en €**"
        ],
        "rows": [
          [
            "**Direction**",
            "3",
            "6 030",
            "217 080",
            "3",
            "6 150",
            "221 400"
          ],
          [
            "**Cadre junior**",
            "1",
            "3 500",
            "42 000",
            "1",
            "3 535",
            "42 420"
          ],
          [
            "**Cadres senior**",
            "4",
            "4 240",
            "203 520",
            "4",
            "4 300",
            "206 400"
          ],
          [
            "**Agent de maîtrise junior**",
            "1",
            "3 500",
            "42 000",
            "1",
            "3 535",
            "42 420"
          ],
          [
            "**Agents de maîtrise senior**",
            "4",
            "4 000",
            "192 000",
            "4",
            "4 100",
            "196 800"
          ],
          [
            "**Techniciens**",
            "25",
            "3 500",
            "1 050 000",
            "30",
            "3 570",
            "1 285 200"
          ],
          [
            "**Employés**",
            "15",
            "2 000",
            "360 000",
            "14",
            "2 040",
            "342 720"
          ],
          [
            "**Ouvriers**",
            "47",
            "1 600",
            "902 400",
            "40",
            "1 632",
            "783 360"
          ],
          [
            "**Total**",
            "100",
            "2 508",
            "3 009 000",
            "97",
            "2 681",
            "3 120 720"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Variation de la masse salariale :"
      },
      {
        "type": "p",
        "text": "3 120 720 – 3 009 000 = 111 720 soit 111 720 / 3 009 000 = + 3,71 % par rapport à N"
      },
      {
        "type": "p",
        "text": "Décomposition de l’écart en écarts sur salaires nominaux, sur structure professionnelle et sur effectif"
      },
      {
        "type": "p",
        "text": "Dans cet exercice, et compte tenu de la demande formulée, il faut reconstituer les catégories professionnelles ; on retient la direction, les cadres, les agents de maîtrise, les techniciens, les ouvriers et les employés soit six catégories professionnelles. Les informations relatives à l’ancienneté ne font pas l’objet d’étude."
      },
      {
        "type": "p",
        "text": "Il nous faut donc calculer des masses intermédiaires :"
      },
      {
        "type": "p",
        "text": "•Une masse prévue en cas de rémunération des effectifs N+1 au salaire nominal de N, appelée « masse salariale à salaires constants » :"
      },
      {
        "type": "p",
        "text": "– en N, la masse salariale est de 3 009 000 pour 100 personnes, soit un salaire moyen annuel de 30 090 €,"
      },
      {
        "type": "p",
        "text": "– compte tenu des effectifs de N+1, si les salaires moyens ne changent pas, la masse attendue serait de 30 090 € pour 97 personnes, soit un total de 30 090 € × 97 personnes = 2 918 730 ;"
      },
      {
        "type": "p",
        "text": "•Une masse prévue en cas de rémunération des effectifs des catégories N+1 au salaire moyen des catégories N, appelée « masse salariale à structure professionnelle constante » :"
      },
      {
        "type": "p",
        "text": "– le salaire moyen des cadres en N est égal à : (42 000 + 203 520) / 5 = 245 520 / 5 = 49 104 ;"
      },
      {
        "type": "p",
        "text": "– le salaire moyen des agents de maîtrise en N est égal à : (42 000 + 192 000) / 5 = 234 000 / 5 = 46 800"
      },
      {
        "type": "p",
        "text": "Les calculs sont regroupés dans le tableau suivant :"
      },
      {
        "type": "table",
        "headers": [
          "**Catégories de personnel**",
          "**Masse salariale à structure catégorielle constante**"
        ],
        "rows": [
          [
            "Effectifs",
            "Salaires moyens",
            "Salaires annuels bruts"
          ],
          [
            "**Direction**",
            "3",
            "72 360",
            "217 080"
          ],
          [
            "**Total Cadres**",
            "5",
            "49 104",
            "245 520"
          ],
          [
            "**Total Agents de maîtrise**",
            "5",
            "46 800",
            "234 000"
          ],
          [
            "**Techniciens**",
            "30",
            "42 000",
            "1 260 000"
          ],
          [
            "**Employés**",
            "14",
            "24 000",
            "336 000"
          ],
          [
            "**Ouvriers**",
            "40",
            "19 200",
            "768 000"
          ],
          [
            "**Total**",
            "97",
            "31 553",
            "3 060 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Ces calculs nous permettent d’analyser la décomposition obtenue."
      },
      {
        "type": "p",
        "text": "L’analyse des écarts est donc la suivante :"
      },
      {
        "type": "p",
        "text": "**Analyse des écarts**"
      },
      {
        "type": "table",
        "headers": [
          "**Masse salariale N+1**",
          "**3 120 720**",
          "",
          ""
        ],
        "rows": [
          [
            "",
            "",
            "Écarts sur salaires",
            "+ 60 720 défav."
          ],
          [
            "**Masse salariale à catégories constantes**",
            "3 060 000",
            "",
            ""
          ],
          [
            "",
            "",
            "Écarts sur catégories",
            "+ 141 270 défav."
          ],
          [
            "**Masse salariale à salaires constants**",
            "2 918 730",
            "",
            ""
          ],
          [
            "",
            "",
            "Écart sur effectif",
            "– 90 270 fav."
          ],
          [
            "**Masse salariale N**",
            "3 009 000",
            "",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pensez à donner un titre à votre tableau"
      },
      {
        "type": "p",
        "text": "On vérifie que : (+ 60 720) + (+ 141 270) + (– 90 270) = (+ 111 720)."
      },
      {
        "type": "p",
        "text": "**2. Commenter les évolutions de la masse salariale obtenue et plus spécifiquement l’interprétation et l’explication de l’écart sur structure professionnelle.**"
      },
      {
        "type": "p",
        "text": "La masse salariale a augmenté de 111 720 €, soit de 3,71 % en raison :"
      },
      {
        "type": "p",
        "text": "– d’une augmentation des salaires ;"
      },
      {
        "type": "p",
        "text": "– d’une diminution de l’effectif total (– trois personnes) ;"
      },
      {
        "type": "p",
        "text": "– d’un changement de structure professionnelle qui se traduit par une augmentation du niveau de qualification."
      },
      {
        "type": "p",
        "text": "Les catégories « direction », « cadres » et « agents de maitrise » gardent le même effectif sur les deux années et même la même structure d’ancienneté. En revanche, le poids relatif des techniciens (mieux payés car plus qualifiés puisque leur effectif a cru de cinq personnes) s’est accru au détriment des ouvriers et employés (moins qualifiés, et donc moins bien rémunérés). Les seuls ouvriers ont vu leur effectif se réduire de sept personnes."
      },
      {
        "type": "p",
        "text": "**3. Comparer les deux options et répondre aux demandes de la direction générale.**"
      },
      {
        "type": "p",
        "text": "Indice base 100 au 31/12/N+1"
      },
      {
        "type": "p",
        "text": "Premier scénario"
      },
      {
        "type": "table",
        "headers": [
          "**Du 1/01 au 30/04**",
          "**4 × 100 =**",
          "**400,00**"
        ],
        "rows": [
          [
            "**Du 1/05 au 31/08**",
            "4 × 100 × 1,005 =",
            "402,00"
          ],
          [
            "**Du 1/09 au 31/12**",
            "4 × 100,5 × 1,005 =",
            "404,10"
          ],
          [
            "**Total**",
            "1 206,10"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Second scénario"
      },
      {
        "type": "table",
        "headers": [
          "**Du 1/01 au 30/09**",
          "**9 × 100 =**",
          "**900,00**"
        ],
        "rows": [
          [
            "**Du 1/10 au 31/12**",
            "3 × 100 × 1,012 =",
            "303,60"
          ],
          [
            "**Total**",
            "1 203,60"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour l’année N+2, le premier scénario donne la masse salariale annuelle la plus forte mais le salaire de décembre le plus faible."
      },
      {
        "type": "p",
        "text": "Pour choisir, il faut tenir compte de l’impact sur les années suivantes."
      },
      {
        "type": "p",
        "text": "Les incidences sur la masse salariale de N+2 sont appréhendées par l’effet niveau et par l’effet masse."
      },
      {
        "type": "p",
        "text": "L’effet niveau représente l’augmentation des salaires entre deux dates données, généralement le début et la fin de l’année."
      },
      {
        "type": "p",
        "text": "Effet niveau= indice décembre N+2 ÷ indice décembre N+1"
      },
      {
        "type": "p",
        "text": "= 101,0025 ÷ 100 = 1,010025"
      },
      {
        "type": "p",
        "text": "Soit 1,0025 % d’augmentation."
      },
      {
        "type": "p",
        "text": "L’effet masse représente l’augmentation de la masse salariale de l’année provoquée par les augmentations de l’année et traduit donc l’impact du temps."
      },
      {
        "type": "p",
        "text": "Effet de masse= indice annuel N+2 ÷ (12 × indice décembre N+1)"
      },
      {
        "type": "p",
        "text": "= 1 206,01 ÷ (12 × 100) = 1,00501"
      },
      {
        "type": "p",
        "text": "Soit 0,5008 % d’augmentation."
      },
      {
        "type": "p",
        "text": "L’incidence sur les années suivantes est mesurée par l’effet report de N+2 sur N+3."
      },
      {
        "type": "p",
        "text": "Effet report= (indice 2015 × 12) / indice annuel N+1"
      },
      {
        "type": "p",
        "text": "= 1 212,03 ÷ 1 206,01 = 1,00499"
      },
      {
        "type": "p",
        "text": "Soit 0,499 % d’augmentation"
      },
      {
        "type": "p",
        "text": "**4. Déterminer et commenter la masse salariale prévisionnelle et ses évolutions par N+2 si l’option 1 est retenue.**"
      },
      {
        "type": "p",
        "text": "Le calcul va se faire en trois temps : MS à effectif stable + MS des sortants + MS des entrants."
      },
      {
        "type": "p",
        "text": "Masse salariale (MS) à effectif stable"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Effectif**",
          "**Départ**",
          "**Effectif stable**",
          "**Salaire décembre**",
          "**Indice N+2**",
          "**MS N+2**"
        ],
        "rows": [
          [
            "**DirectionCadres juniorCadres seniorMaîtrise juniorMaîtrise seniorTechniciens**",
            "355301440",
            "000120",
            "355291240",
            "6 089,004 368,004 121,003 601,03 (1)1 903,33 (2)1 648,00",
            "1 206,011 206,011 206,011 206,011 206,011 206,01",
            "220 302,00263 393,00248 498,001 259 436,00275 453,00795 002,00"
          ],
          [
            "**Total**",
            "",
            "",
            "",
            "",
            "",
            "3 062 084,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) Salaire de décembre de la maîtrise junior : il n’est pas possible de retenir le salaire moyen car le salaire des salariés sortants est différent. Le calcul du salaire moyen des salariés restants est le suivant :"
      },
      {
        "type": "p",
        "text": "(30 × 3 606 – 3 750) ÷ 29."
      },
      {
        "type": "p",
        "text": "(2) Même raisonnement pour la maîtrise senior."
      },
      {
        "type": "p",
        "text": "Le calcul est : (14 × 2 060 – 3 000 – 3 000) ÷ 12."
      },
      {
        "type": "p",
        "text": "Masse salariale (MS) des partants"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Partants**",
          "**Départ**",
          "**Salaire déc.**",
          "**Indices**",
          "**MS N+2**"
        ],
        "rows": [
          [
            "**TechnicienEmployé 1Employé 2**",
            "111",
            "fin sept.fin marsfin nov.",
            "3 7503 0003 000",
            "903,0025 (1)300,0000 (2)1 105,0075 (3)",
            "33 863,009 000,0033 150,00"
          ],
          [
            "**Total**",
            "",
            "",
            "",
            "",
            "76 013,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) 100 × 4 + 100 × 1,005 × 5"
      },
      {
        "type": "p",
        "text": "(2) 100 × 3"
      },
      {
        "type": "p",
        "text": "(3) 100 × 4 + 100 × 1,005 × 4 + 100 × 1,005 × 1,005 × 3"
      },
      {
        "type": "p",
        "text": "Masse salariale des entrants"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Entrants**",
          "**Date**",
          "**Salaire.**",
          "**Indices**",
          "**MS N+2**"
        ],
        "rows": [
          [
            "**TechnicienEmployé**",
            "11",
            "01-oct.01-avr.",
            "3 5002 800",
            "300,00906,01 (1)",
            "10 500,0025 368,00"
          ],
          [
            "**Total**",
            "",
            "",
            "",
            "",
            "35 868,00"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) 906,01 = 100 + 100 × 1,005 × 4 + 100 × 1,005 × 1,005 × 4"
      },
      {
        "type": "p",
        "text": "Masse salariale prévisionnelle"
      },
      {
        "type": "table",
        "headers": [
          "**MS à effectif stable**",
          "**3 062 084**"
        ],
        "rows": [
          [
            "**MS des entrants**",
            "35 868"
          ],
          [
            "**MS des partants**",
            "76 013"
          ],
          [
            "**Total**",
            "3 173 965"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Il est également possible de raisonner en calculant :"
      },
      {
        "type": "p",
        "text": "MS de l’effectif présent au 1er janvier – Salaires inclus dans la masse précédente et non versés + MS des entrants"
      },
      {
        "type": "p",
        "text": "Masse salariale de l’effectif présent au 1er janvier"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Effectif**",
          "**Salaire décembre**",
          "**Indice N+2**",
          "**MS N+2**"
        ],
        "rows": [
          [
            "**DirectionCadres juniorCadres seniorMaîtrise juniorMaîtrise seniorTechniciens**",
            "355301440",
            "6 0894 3684 1213 6062 0601 648",
            "1 206,011 206,011 206,011 206,011 206,011 206,01",
            "220 302263 393248 4981 304 662347 813795 002"
          ],
          [
            "**Total**",
            "",
            "",
            "",
            "3 179 670"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Salaires inclus dans la masse précédente et non versés"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Salaire déc. N+1**",
          "**Indices N+2**",
          "**MS N+2**"
        ],
        "rows": [
          [
            "**TechnicienEmployé 1Employé 2**",
            "3 7503 0003 000",
            "303,0075 (1)906,01 (2)101,0025 (3)",
            "11 36327 1803 030"
          ],
          [
            "**Total**",
            "",
            "",
            "41 573"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) 100 × 1,005 × 1,005 × 3"
      },
      {
        "type": "p",
        "text": "(2) 100 + 100 × 1,005 × 4 + 100 × 1,005 × 1,005 × 4"
      },
      {
        "type": "p",
        "text": "(3) 100 × 1,005 × 1,005 × 1"
      },
      {
        "type": "table",
        "headers": [
          "**MS de l’effectif présent au 1er janvier**",
          "**3 179 670**"
        ],
        "rows": [
          [
            "**– Salaires inclus dans la masse précédente et non versés**",
            "– 41 573"
          ],
          [
            "**MS des entrants**",
            "35 868"
          ],
          [
            "**Total**",
            "3 173 965"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Masse salariale à effectif stable : 3 062 084 €"
      },
      {
        "type": "p",
        "text": "+ Masse salariale de l’effectif sortant : 76 013 €"
      },
      {
        "type": "p",
        "text": "+ Masse salariale de l’effectif entrant : 35 868 €"
      },
      {
        "type": "p",
        "text": "= Masse salariale totale pour N+2 = 3 173 965 €"
      },
      {
        "type": "p",
        "text": "La masse prévisionnelle (3 173 965) est légèrement plus élevée que la masse N+1 (3 120 720), ce qui ne traduit pas l’impact de l’augmentation générale des salaires accordée."
      },
      {
        "type": "p",
        "text": "Cette hausse (faible) est le résultat conjugué d’une baisse des effectifs (un des deux employés n’est pas remplacé) et d’un effet de noria positif ; en effet, les salariés entrants (sans doute plus jeunes) sont moins bien rémunérés que les salariés sortants."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "C13.2",
    "title": "Dovert",
    "statement": [
      {
        "type": "p",
        "text": "La société Dovert rémunère ses salariés sur 13 mois (le 13e mois est payé en fin d’année) et négocie des augmentations générales de salaires qui s’appliquent à ces différents centres de responsabilité. Par ailleurs, elle alloue à chaque responsable une enveloppe financière dont l’attribution est laissée à la discrétion du responsable du centre en fonction de critères de mérite évalués localement."
      },
      {
        "type": "p",
        "text": "Conformément à un accord salarial d’entreprise signé au premier semestre de l’exercice N et qui s’impose à l’établissement, des augmentations générales interviendront sur les années N+1 et N+2 selon les modalités suivantes : janvier N+1 : 1 % ; mai N+1 : 1,5 % ; septembre N+1 : 0,2 % ; janvier N+2 : 1 %."
      },
      {
        "type": "p",
        "text": "L’établissement de Chaumont comprend 30 personnes ; la masse salariale de décembre de l’exercice N hors 13e mois s’est élevée à 81 150 €."
      },
      {
        "type": "p",
        "text": "Il n’est pas prévu de mouvements de personnel au cours des années à venir."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "1. Calculer la masse salariale de l’établissement prévisionnelle pour l’exercice N+1 etana lyser, pour l’année N+1, les effets relatifs à la masse salariale."
      },
      {
        "type": "p",
        "text": "Au cours de l’exercice N+1 et dans le cadre de la procédure budgétaire de l’année à venir, soit N+2, le responsable de l’établissement s’interroge sur le niveau des augmentations individuelles qu’il pourra accorder à son personnel compte tenu des directives de la direction générale qui a déjà annoncé que l’augmentation globale de la masse salariale (tous types d’augmentations confondues) de l’établissement pour N+2 ne devra pas dépasser 3 %."
      },
      {
        "type": "p",
        "text": "2. Déterminerquelleestl’enveloppebudgétairedontdisposeleresponsabledel’établisse ment pour des augmentations de salaires spécifiques."
      },
      {
        "type": "p",
        "text": "3. Rédiger une note de synthèse sur la politique salariale de l’entreprise."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale"
      },
      {
        "type": "p",
        "text": "**1. Calculer la masse salariale de l’établissement prévisionnelle pour l’exercice N+1 et analyser, pour l’année N+1, les effets relatifs à la masse salariale.**"
      },
      {
        "type": "p",
        "text": "Pour un salarié qui est rémunéré 100 en décembre N, son salaire de décembre, au cours de l’exercice N+1 sera multiplié par :"
      },
      {
        "type": "p",
        "text": "(101 × 4 mois) + (101 × 1,015 × 4 mois) + (101 × 1,015 × 1,002 × 5 mois)"
      },
      {
        "type": "p",
        "text": "(101 × 4 mois) + (102,515 × 4 mois)+ (102,720 × 5 mois)= 1 327,66"
      },
      {
        "type": "p",
        "text": "La masse salariale de N+1 sera égale à : 81 150 € × 1 327,66 / 100= 1 077 396 €"
      },
      {
        "type": "p",
        "text": "•Effet niveau : il représente l’augmentation de salaire tel qu’elle est perçue par le salarié. En décembre N, son salaire représente 100. En décembre N+1, il perçoit 102,720, d’où un effet niveau de 2,72 %."
      },
      {
        "type": "p",
        "text": "•Effet masse : Pour l’établissement, en l’absence de toutes augmentations, la masse salariale de N+1 aurait été de 81 150 € × 13 mois = 1 054 950 €. Les augmentations accordées ont donc eu un effet masse de :"
      },
      {
        "type": "p",
        "text": "= 2,13 %"
      },
      {
        "type": "p",
        "text": "Cet effet masse aurait aussi pu être calculé en prenant le coefficient d’augmentation de la masse salariale calculé à la première question réparti sur 13 mois pour obtenir une influence moyenne."
      },
      {
        "type": "p",
        "text": "13,2766 ÷ 13 mois = 1,02127, soit 2,13 %"
      },
      {
        "type": "p",
        "text": "L’effet masse est plus faible que l’effet niveau car les augmentations de salaires accordées ne l’ont pas été sur une année pleine."
      },
      {
        "type": "p",
        "text": "•Effet report : la masse salariale minimale ou plancher pour N+2 sera égale à :"
      },
      {
        "type": "p",
        "text": "Salaire de décembre N+1 × 13 mois, soit (81 150 € × 1,0272) × 13 mois = 83 357 € × 13"
      },
      {
        "type": "p",
        "text": "= 1 083 641 €"
      },
      {
        "type": "p",
        "text": "Soit en la comparant à la masse salariale de N+1, un effet report de :"
      },
      {
        "type": "p",
        "text": "= 0,57 %"
      },
      {
        "type": "p",
        "text": "**2. Déterminer quelle est l’enveloppe budgétaire dont dispose le responsable de l’établissement pour des augmentations de salaires spécifiques.**"
      },
      {
        "type": "p",
        "text": "La relation qui lie deux masses salariales est la suivante :"
      },
      {
        "type": "p",
        "text": "MSN+2 = MSN+1 (1 + Effet report) (1 + % d’augmentations générales) (1 + % d’augmentations individuelles)."
      },
      {
        "type": "p",
        "text": "Par ailleurs, et compte tenu des directives de la direction générale, il faut que :"
      },
      {
        "type": "p",
        "text": "MSN+2 = MSN+1 (1 + 3 % Maximum)"
      },
      {
        "type": "p",
        "text": "Comme l’effet report est égal à 0,57 %, et les augmentations générales sont de 1 % dès janvier N+2, il est possible d’écrire que :"
      },
      {
        "type": "p",
        "text": "(1 + % d’augmentations individuelles) ="
      },
      {
        "type": "p",
        "text": "= 1,03 / (1,0057) (1,01) = 1,014"
      },
      {
        "type": "p",
        "text": "Les augmentations générales spécifiques à l’établissement possibles sont de 1,40 % maximum pour l’année N+2."
      },
      {
        "type": "p",
        "text": "**3. Rédiger une note de synthèse sur la politique salariale de l’entreprise.**"
      },
      {
        "type": "p",
        "text": "Cette entreprise joue sur tous les leviers à sa disposition pour maîtriser sa masse salariale :"
      },
      {
        "type": "p",
        "text": "– absence de hausse des effectifs ;"
      },
      {
        "type": "p",
        "text": "– augmentations collectives pour s’assurer que le personnel ne cherche pas à partir vers d’autres entreprises ;"
      },
      {
        "type": "p",
        "text": "– augmentations individuelles pour motiver le personnel le plus impliqué."
      },
      {
        "type": "p",
        "text": "Par ailleurs, comme l’entreprise négocie très en amont les augmentations de salaires collectives, elle sécurise les salariés sur ce qu’ils peuvent obtenir et crée ainsi un climat social positif."
      },
      {
        "type": "p",
        "text": "Cette politique permet aux managers de connaître les contraintes financières avec lesquelles ils doivent jouer et d’anticiper le niveau des augmentations individuelles qu’ils vont pouvoir distribuer."
      },
      {
        "type": "p",
        "text": "Ces choix traduisent une politique salariale de qualité."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "C13.3",
    "title": "Fidublert Office Solutions",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale"
      },
      {
        "type": "p",
        "text": "Fidublert Office Solutions est un service de production et de vente en ligne de papeterie, bureautique, fournitures de bureau et mobilier de bureau à destination des professionnels et entreprises, proposé par le groupe Fidublert. La dirigeante de Fidublert Office Solutions, madame Vierzone, est sous pression. Les représentants du personnel réclament des augmentations immédiates. Elle fait appel à vos compétences pour l’éclairer sur sa prise de décisions. Pour l’exercice N+1, il est prévu une réorganisation des ressources humaines au sein de l’entreprise Fidublert Office Solutions. Mme Vierzone souhaite évaluer :"
      },
      {
        "type": "p",
        "text": "– l’impact des augmentations collectives des salaires de l’exercice N sur la masse salariale de N+1 ;"
      },
      {
        "type": "p",
        "text": "– la masse salariale prévisionnelle de N+1."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer les trois effets de la masse salariale pour l’exercice N. Commenter les résultats obtenus.*"
      },
      {
        "type": "p",
        "text": "*2. Déterminer la masse salariale prévisionnelle pour l’exercice N+1.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger une note de synthèse sur la politique salariale de Fidublert Office Solutions pour répondre aux attentes de Mme Vierzone.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Analyse de la masse salariale de l’exercice N**"
      },
      {
        "type": "p",
        "text": "Un accord paritaire portant sur les salaires effectifs a été conclu, à l’issue de plusieurs réunions de négociation entre la direction de Fidublert et la délégation syndicale."
      },
      {
        "type": "p",
        "text": "***Extraits de l’accord sur les salaires N***"
      },
      {
        "type": "p",
        "text": "« PRÉAMBULE : La délégation syndicale souhaitait un rattrapage du pouvoir d’achat perdu depuis plusieurs années par certains salariés. La direction a rappelé la situation économique difficile."
      },
      {
        "type": "p",
        "text": "Calendrier : les augmentations prévues seront réalisées en deux temps, le 1er mars N et le 1er septembre N."
      },
      {
        "type": "p",
        "text": "Mesure de « rattrapage partiel de pouvoir d’achat » : une revalorisation de l’ensemble des salaires de 1 % en mars N, suivie d’une augmentation de 1 % en septembre N. »"
      },
      {
        "type": "p",
        "text": "Sur la période N, il n’y a pas eu d’augmentation individuelle de salaires ; l’effectif et la structure catégorielle sont restés stables. Base indicielle 100 au 31/12/N–1."
      },
      {
        "type": "p",
        "text": "**Document 2 — Prévision de la masse salariale pour l’exercice N+1**"
      },
      {
        "type": "p",
        "text": "***Augmentation des salaires***"
      },
      {
        "type": "p",
        "text": "– augmentation générale des salaires sans distinction de catégories socio-professionnelles ou ancienneté : 0,5 % le 1er mars N+1 ;"
      },
      {
        "type": "p",
        "text": "– augmentation individuelle des salaires : 0,94 % de la masse salariale de décembre N, accordée le 1er juillet N+1. Les salariés devant partir ou embauchés en cours d’année ne bénéficieront pas des augmentations individuelles de salaire."
      },
      {
        "type": "p",
        "text": "***Mouvements du personnel***"
      },
      {
        "type": "p",
        "text": "– aucune promotion n’est prévue pour N+1 ;"
      },
      {
        "type": "p",
        "text": "– deux départs à la retraite sont prévus :"
      },
      {
        "type": "p",
        "text": "• départ le 31 mai N+1 d’un ouvrier au salaire mensuel brut de 1 725 €, en valeur, au 31/12/N."
      },
      {
        "type": "p",
        "text": "• départ le 31 août N+1 d’un cadre au salaire mensuel brut de 3 570 €, en valeur, au 31/12/N."
      },
      {
        "type": "p",
        "text": "– recrutement : un ouvrier sera recruté le 1er juin N+1 au salaire mensuel brut de 1 380 €."
      },
      {
        "type": "p",
        "text": "La masse salariale de l’effectif stable pour l’exercice N+1 a été évaluée à 1 866 020 €."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences attendues• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les trois effets de la masse salariale pour l’exercice N. Commenter les résultats obtenus.**"
      },
      {
        "type": "table",
        "headers": [
          "**Calendrier des augmentations de salaires**",
          "**01/03/N**",
          "**01/09/N**"
        ],
        "rows": [
          [
            "**Base 100 au 01/01/N–1**",
            "1 %",
            "1 %"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Indice (base 100 au 01/01/N)**",
          "**Nombre de mois**",
          "**Total**"
        ],
        "rows": [
          [
            "**Période**",
            "",
            "",
            ""
          ],
          [
            "**Du 01/01/N au 28/02/N**",
            "100",
            "2",
            "200"
          ],
          [
            "**Du 01/03/N au 31/08/N**",
            "100 × 1,01 = 101",
            "6",
            "606"
          ],
          [
            "**Du 01/09/N au 31/12/N**",
            "101 × 1,01 = 102,01",
            "4",
            "408,04"
          ],
          [
            "**Total**",
            "",
            "12",
            "1 214,04"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Effet niveau : taux de variation du salaire mensuel perçu par le salarié entre deux dates données (souvent décembre). Évolution niveau = Salaire Date N / Salaire Date (N-1)"
      },
      {
        "type": "p",
        "text": "Effet niveau N = 102,01 ÷ 100 = 1,0201 = + 2,01 %"
      },
      {
        "type": "p",
        "text": "Effet masse : progression de la masse salariale entre deux exercices causée uniquement par les augmentations accordées durant l’année N. Effet lié à l’impact des décisions prises en N sur l’évolution du salaire moyen de N."
      },
      {
        "type": "p",
        "text": "Évolution en masse = Salaire annuel N / Salaire annuel (N-1)"
      },
      {
        "type": "p",
        "text": "Coefficient multiplicateur annuel de la MS de N / N-1 = 1 214,04"
      },
      {
        "type": "p",
        "text": "Effet masse N = 1 214,04 / (100 × 12) = 1,0117 = + 1,17 %"
      },
      {
        "type": "p",
        "text": "Effet de report de N sur N+1 = Salaire décembre N × 12 / Salaire annuel N"
      },
      {
        "type": "p",
        "text": "= (102,01 × 12) / 1 214,04 = 1,0083 = + 0,83 %"
      },
      {
        "type": "p",
        "text": "Vérification : Effet niveau = Effet masse × Effet report = 1,0117 × 1,0083 = 1,021 soit 2,1 %."
      },
      {
        "type": "p",
        "text": "**2. Déterminer la masse salariale prévisionnelle pour l’exercice N+1.**"
      },
      {
        "type": "p",
        "text": "**Masse salariale de l’effectif entrant N+1**"
      },
      {
        "type": "table",
        "headers": [
          "**CSP**",
          "**Effectif entrant**",
          "**Salaire mensuel (en €)**",
          "**Nombre de mois**",
          "**Total (en €)**"
        ],
        "rows": [
          [
            "**Ouvrier**",
            "1",
            "1 380",
            "7",
            "9 660"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Masse salariale de l’effectif sortant N+1**"
      },
      {
        "type": "table",
        "headers": [
          "**CSP**",
          "**Effectif sortant**",
          "**Salaire (en €)**",
          "**Nombre de mois**",
          "**Total (en €)**"
        ],
        "rows": [
          [
            "**Ouvrier**",
            "1",
            "1 725",
            "2",
            "3 450"
          ],
          [
            "",
            "",
            "1 725 × 1,005 = 1 733,625",
            "3",
            "5 200,875"
          ],
          [
            "**Cadre**",
            "1",
            "3 570",
            "2",
            "7 140"
          ],
          [
            "",
            "",
            "3 570 × 1,005 = 3 587,85",
            "6",
            "21 527,1"
          ],
          [
            "",
            "",
            "",
            "",
            "37 317"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Masse salariale N+1 = 1 866 020 + 9 660 + 37 317 = 1 912 997 €"
      },
      {
        "type": "p",
        "text": "**3. Rédiger une note de synthèse sur la politique salariale de Fidublert Office Solutions pour répondre aux attentes de Mme Vierzone.**"
      },
      {
        "type": "p",
        "text": "**Remarque***Résultats des trois effets sur la masse salariale*"
      },
      {
        "type": "p",
        "text": "Le salaire mensuel a progressé de 2,01 % entre décembre N–1 et décembre N (effet niveau)."
      },
      {
        "type": "p",
        "text": "L’impact des augmentations collectives de salaires accordées en N sur la masse salariale de N est de 1,17 %."
      },
      {
        "type": "p",
        "text": "L’augmentation des salaires en deux temps (mars et septembre) atténue l’effet masse."
      },
      {
        "type": "p",
        "text": "Enfin, l’effet de report (+ 0,83 %) mesure l’impact des augmentations collectives de salaires de N sur la masse salariale de N+1."
      },
      {
        "type": "p",
        "text": "En prenant en compte les départs et les recrutements, la masse salariale s’établit à 1 912 997 € en N+1, un chiffre en nette augmentation par rapport à ce qui était prévu."
      },
      {
        "type": "p",
        "text": "**Remarque***Tendance de la politique salariale*"
      },
      {
        "type": "p",
        "text": "Les efforts salariaux proposés par Mme Vierzone sont importants et devraient rassurer les salariés de l’entreprise."
      },
      {
        "type": "p",
        "text": "Cette politique s’appuie sur une analyse collective des salariés : il serait peut être possible d’élaborer une politique individuelle des rémunérations plus précise, en utilisant par exemple les entretiens annuels et en mettant en place des indicateurs de satisfaction."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C13.4",
    "title": "Sogestran",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale"
      },
      {
        "type": "p",
        "text": "Le site de Villeroy (Seine-et-Marne) est l’un des plus importants centres logistiques de l’entreprise Sogestran. L’activité est essentiellement manuelle. Le site emploie aujourd’hui 89 salariés et a connu une forte croissance (due à la croissance globale du groupe) ces cinq dernières années. L’activité s’est accrue et les salariés se plaignent d’une surcharge de travail."
      },
      {
        "type": "p",
        "text": "Son responsable, Marc Auzou, vous fait part de ses difficultés en matière de gestion des ressources humaines. Il a rencontré à plusieurs reprises les représentants du personnel, qui menacent d’un mouvement de grève. Il s’interroge sur la manière de résoudre le conflit et envisagerait une augmentation générale des salaires. Afin de choisir la meilleure solution, il souhaiterait faire des simulations sur l’évolution de sa masse salariale selon différentes hypothèses. Les salariés avaient accepté l’an dernier de ne pas être augmentés pour permettre à l’entreprise de faire face à sa forte croissance."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter les effets de niveau, de masse et de report pour l’hypothèse 2 (document 1).*"
      },
      {
        "type": "p",
        "text": "*2. Déterminer l’augmentation en € de la masse salariale pour N et N+1 pour l’hypothèse 2.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger une note de synthèse sur la politique salariale pour conseiller à monsieur Auzou.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Propositions envisagées par la DRH pour la réunion du 12 décembre N–1**"
      },
      {
        "type": "p",
        "text": "Le salaire brut moyen de décembre N–1 toutes catégories confondues s’élève à 2 840 €. La direction des ressources humaines envisage deux hypothèses."
      },
      {
        "type": "p",
        "text": "– Hypothèse 1 : une augmentation unique de 3,5 % qui interviendrait le 1er novembre N."
      },
      {
        "type": "p",
        "text": "– Hypothèse 2 : une augmentation de 2,5 % qui interviendrait le 1er janvier N et 0,5 % le 1er novembre N."
      },
      {
        "type": "p",
        "text": "En N+1, il n’est pas prévu d’augmentation."
      },
      {
        "type": "p",
        "text": "**Document 2 — Éléments de calculs relatifs à l’hypothèse 1**"
      },
      {
        "type": "table",
        "headers": [
          "**Effet de niveau**",
          "3,5 %"
        ],
        "rows": [
          [
            "**Effet de masse**",
            "0,58 %"
          ],
          [
            "**Effet de report**",
            "2,9 %"
          ],
          [
            "**Augmentation de la masse salariale en N**",
            "17 592 €"
          ],
          [
            "**Augmentation de la masse salariale en N+1**",
            "88 471 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Aucune charge patronale n’est à prendre en compte."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences attendues• Déterminer et commenter une masse salariale prévisionnelle et ses évolutions• Rédiger une note de synthèse sur la politique salariale**"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les effets de niveau, de masse et de report pour l’hypothèse 2 (cf. document 1).**"
      },
      {
        "type": "p",
        "text": "**Hypothèse 2**"
      },
      {
        "type": "table",
        "headers": [
          "**Taux**",
          "**Nombre de mois**",
          "**Indice**"
        ],
        "rows": [
          [
            "**102,5**",
            "10",
            "1 025"
          ],
          [
            "**102,5 × 1,005 = 103,0125**",
            "2",
            "206,025"
          ],
          [
            "",
            "",
            "1 231,025"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour les calculs suivants, on peut effectuer les calculs à partir des indices ou avec le salaire mensuel, ou avec le total de la masse salariale."
      },
      {
        "type": "p",
        "text": "Effet niveau : C’est l’augmentation du salaire moyen entre deux dates (ici entre janvier et décembre). C’est la vision perçue par le salarié."
      },
      {
        "type": "p",
        "text": "Effet de niveau N : 1,025 × 1,005 = 1,0301 soit 3,01 %"
      },
      {
        "type": "p",
        "text": "Effet masse : C’est l’augmentation de la masse salariale sur l’année. C’est le point de vue de l’employeur."
      },
      {
        "type": "p",
        "text": "Effet masse N : 1,025 × 10 + 1,025 × 1,005 × 2 = 12,31025"
      },
      {
        "type": "p",
        "text": "12,31025 ÷ 12 = 1,0259 soit 2,59 %"
      },
      {
        "type": "p",
        "text": "Effet report : Il représente l’incidence des augmentations de salaire survenues au cours d’une année sur la progression de la masse salariale de l’année suivante."
      },
      {
        "type": "p",
        "text": "Effet report sur N+1 : si on travaille avec les coefficients multiplicateurs, on a l’égalité suivante :"
      },
      {
        "type": "p",
        "text": "Effet niveau = effet masse × effet report"
      },
      {
        "type": "p",
        "text": "1,0301 = 1,0259 × a"
      },
      {
        "type": "p",
        "text": "a = 1,0301 ÷ 1,0259 = 1,0041 soit 0,41 %"
      },
      {
        "type": "p",
        "text": "**2. Déterminer l’augmentation en euros de la masse salariale pour N et N+1 pour l’hypothèse 2.**"
      },
      {
        "type": "p",
        "text": "Prenez en compte, dans ce calcul, la valeur de la masse N calculée précédemment."
      },
      {
        "type": "p",
        "text": "Avec 89 salariés et un salaire brut moyen de 2 840 € par mois (le sujet évoque qu’il ne faut pas prendre en compte les charges patronales), on obtient :"
      },
      {
        "type": "p",
        "text": "Masse salariale de N−1 : 89 × 2 840 × 12 = 3 033 120 €"
      },
      {
        "type": "p",
        "text": "•La masse salariale de N augmente par effet masse."
      },
      {
        "type": "p",
        "text": "Hypothèse 2 : Masse salariale N = 3 033 120 × 1,0259 = 3 111 677 €"
      },
      {
        "type": "p",
        "text": "Soit une augmentation de 3 111 677 − 3 033 120 = 78 557 €"
      },
      {
        "type": "p",
        "text": "•La masse salariale de N+1 augmente par effet report."
      },
      {
        "type": "p",
        "text": "Hypothèse 2 : Masse salariale N+1 = 3 111 677 × 1,0041 = 3 124 435 €"
      },
      {
        "type": "p",
        "text": "Soit une augmentation de 3 124 435 – 3 111 677 = 12 758 €"
      },
      {
        "type": "p",
        "text": "**3. Rédiger une note de synthèse sur la politique salariale pour conseiller M. Auzou.**"
      },
      {
        "type": "p",
        "text": "L’hypothèse 2 semble plus favorable."
      },
      {
        "type": "p",
        "text": "Dans un climat social tendu, une augmentation rapide des salaires permet d’apaiser les tensions. La masse salariale augmente dès janvier de 2,5 % et de 78 557 € sur l’année N alors que, dans l’hypothèse 1, l’augmentation n’arrive qu’en novembre avec une augmentation de la masse salariale en N qui n’est que de 17 592 €. Même si les salariés voient d’abord l’effet niveau, ils peuvent être convaincus par une augmentation immédiate. L’augmentation finale n’est que de 3,01 % (au lieu de 3,5 %) ce qui permet d’avoir une masse salariale légèrement plus faible en N+1 dans l’hypothèse 2. Pour éviter que de tels conflits se répètent au sein de l’entreprise, M. Auzou pourrait mettre en place un tableau de bord social. Le suivi d’indicateurs permettrait d’observer l’évolution du climat social."
      }
    ]
  }
];
