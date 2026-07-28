// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "Cas",
    "title": "SA Carson",
    "statement": [
      {
        "type": "p",
        "text": "**Compétence visée —**Apprécier une organisation en prix de cession interne."
      },
      {
        "type": "p",
        "text": "La société anonyme Carson est tête de groupe d’un ensemble industriel composé de plusieurs sociétés. Ce groupe, de taille moyenne, a pour objet la fabrication et la commercialisation d’outils de manutention et de construction mécanique pour l’industrie sidérurgique, le transport ferroviaire, maritime et fluvial, l’industrie pétrolière offshore et les ouvrages d’art."
      },
      {
        "type": "p",
        "text": "Elle a notamment développé des portiques de manutention, des outils de coffrage, des portes d’écluse, des passerelles piétonnes et des équipements pour barrage. La société a été créée il y a 45 ans et son effectif est de 90 salariés. Ses clients et fournisseurs se répartissent dans le monde entier et son chiffre d’affaires annuel dépasse les 35 millions d’euros. L’exercice comptable coïncide avec l’année civile. Elle n’est pas cotée sur un marché réglementé."
      },
      {
        "type": "p",
        "text": "Chaque société du groupe s’est spécialisée dans une partie du processus de production : chaudronnerie, assemblage, usinage, sablage, peinture et montage. La conception et la négociation des contrats sont effectuées exclusivement par Carson."
      },
      {
        "type": "p",
        "text": "Depuis plusieurs années, le groupe Carson est structuré en centres de profit. Le PDG s’interroge sur la fixation de certains prix de cessions internes qui, selon lui, génère des tensions entre certaines sociétés du groupe, qui ont tendance à oublier que seul le résultat du groupe est important."
      },
      {
        "type": "p",
        "text": "Il vous demande de l’aider à prendre des décisions concernant notamment la fixation du prix de cession interne entre la société Quentin, qui produit des pièces de chaudronnerie et qui revend certaines de ses pièces à l’entreprise Meryl, spécialisée dans l’assemblage (les pourcentages d’intérêt de Carson sont respectivement de 80 % dans l’entreprise Meryl et de 25 % dans Quentin)."
      },
      {
        "type": "p",
        "text": "La société Quentin peut en moyenne produire 12 000 pièces par an ; cette capacité maximale peut varier en fonction de la difficulté des pièces fabriquées. Elle vend à l’entreprise Meryl et écoule le surplus en dehors du groupe. Le prix de cession interne est négocié, chaque année, entre les deux entreprises. Édouard Lamorel souhaiterait désormais que les débouchés extérieurs au groupe ne pénalisent pas les résultats du groupe, même si les marges sont plus importantes pour Quentin."
      },
      {
        "type": "p",
        "text": "On supposera ici que ces deux filiales sont intégrées globalement par Carson et l’on ignorera toutes les autres sources de résultat de l’ensemble consolidé."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. À l’aide de l’annexe 1, arbitrez entre les bénéfices des sociétés et le bénéfice de la société mère sur la base des chiffres prévisionnels fournis pour l’année 2022.**"
      },
      {
        "type": "p",
        "text": "a. Exprimez, pour chacune des deux sociétés, le résultat avant et après impôt en fonction du prix de cession interne."
      },
      {
        "type": "p",
        "text": "b. Trouvez la plage de prix permettant de maximiser le résultat net prévisionnel de l’ensemble consolidé."
      },
      {
        "type": "p",
        "text": "c. Calculez le prix de cession permettant de maximiser, pour l’ensemble consolidé, le résultat net « part du groupe » bénéficiant aux actionnaires de Carson, tout en garantissant un résultat des minoritaires positif. Commentez votre résultat."
      },
      {
        "type": "p",
        "text": "**2. En vous appuyant sur l’annexe 2, arbitrez entre les ventes internes et externes de Quentin. Le groupe a retenu la méthode du coût variable pour fixer le prix de cession interne (on ne tient pas compte de la fiscalité).**"
      },
      {
        "type": "p",
        "text": "a. Justifiez le choix fait par la société Quentin d’augmenter ses ventes en externe."
      },
      {
        "type": "p",
        "text": "b. Montrez que le choix de la société Quentin n’est pas optimal du point de vue du groupe."
      },
      {
        "type": "p",
        "text": "c. Déterminez le prix de cession interne pour faire coïncider les intérêts de la société Quentin avec ceux du groupe."
      },
      {
        "type": "p",
        "text": "**Annexe 1 : Chiffres prévisionnels pour l’exercice 2022**"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quentin**",
          "**Meryl**"
        ],
        "rows": [
          [
            "**Ventes externes**",
            "450 pièces × 2 500 €",
            "6 080 000 €"
          ],
          [
            "**Ventes internes**",
            "9 500 pièces × PCI",
            "—"
          ],
          [
            "**Achats**",
            "128 € × 12 000 = 1 536 000 €",
            "9 500 pièces × PCI"
          ],
          [
            "**Charges variables**",
            "207 € × 12 000 = 2 484 000 €",
            "830 000 €"
          ],
          [
            "**Charges fixes**",
            "1 000 000 €",
            "650 000 €"
          ],
          [
            "**Charges administratives**",
            "200 000 €",
            "420 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Note —***Annexe 1 reconstituée à partir des chiffres du corrigé (le tableau d’origine n’était pas dans les fichiers fournis) — à vérifier. IS : taux global de 25 %.*"
      },
      {
        "type": "p",
        "text": "**Annexe 2 : Contrats conclus par Quentin**"
      },
      {
        "type": "p",
        "text": "Le prix de cession interne négocié est de 435 € la pièce. Quentin peut privilégier les ventes externes (au prix de 3 000 €, pour 450 pièces, en réduisant à 9 000 les pièces cédées en interne) ou les ventes internes (2 500 € en externe, 9 500 pièces cédées en interne)."
      },
      {
        "type": "p",
        "text": "**Note —***Annexe 2 reconstituée à partir des chiffres du corrigé (question 2) — le document d’origine n’était pas dans les fichiers fournis ; à vérifier.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**1. a. Exprimer, pour chaque société, le résultat avant et après impôt en fonction du prix de cession interne.**"
      },
      {
        "type": "p",
        "text": "Désignons par t le prix de cession interne, en euros."
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quentin**",
          "**Meryl**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "2 500 × 450 + 9 500 t= 1 125 000 + 9 500 t",
            "6 080 000"
          ],
          [
            "**Achat**",
            "128 × 12 000 = 1 536 000",
            "9 500 t"
          ],
          [
            "**Charges variables**",
            "207 × 12 000 = 2 484 000",
            "830 000"
          ],
          [
            "**Charges fixes**",
            "1 000 000",
            "650 000"
          ],
          [
            "**Charges administratives**",
            "200 000",
            "420 000"
          ],
          [
            "**Résultat avant impôt**",
            "9 500 t – 4 095 000(bénéficiaire si t > 431,05)",
            "4 180 000 – 9 500 t(bénéficiaire si t < 440)"
          ],
          [
            "**Résultat après impôt (taux global 25 %)**",
            "(9 500 t – 4 095 000)(1 – 0,25)= 7 125 t – 3 071 250",
            "(4 180 000 – 9 500 t)(1 – 0,25)= 3 135 000 – 7 125 t"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**1. b. Trouver la plage de prix permettant de maximiser le résultat net prévisionnel de l’ensemble consolidé.**"
      },
      {
        "type": "p",
        "text": "Les résultats, en fonction de t, se résument ainsi :"
      },
      {
        "type": "table",
        "headers": [
          "**Résultat**",
          "**t < 431,05**",
          "**431,05 < t < 440**",
          "**t > 440**"
        ],
        "rows": [
          [
            "**Résultat Quentin**",
            "9 500 t – 4 095 000",
            "7 125 t – 3 071 250",
            "7 125 t – 3 071 250"
          ],
          [
            "**Résultat Meryl**",
            "3 135 000 – 7 125 t",
            "3 135 000 – 7 125 t",
            "4 180 000 – 9 500 t"
          ],
          [
            "**Total**",
            "2 375 t – 960 000",
            "63 750",
            "– 2 375 t + 1 108 750"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le tableau de variation du résultat total en fonction de t est le suivant :"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0**",
          "**431,05**",
          "**440**",
          "**466,84**",
          "**500**"
        ],
        "rows": [
          [
            "**Résultat**",
            "– 960 000 €",
            "63 750 €",
            "63 750 €",
            "0 €",
            "– 78 750 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat consolidé est maximal (63 750 €) pour un prix de cession interne compris entre 431,05 € et 440 €."
      },
      {
        "type": "p",
        "text": "**Note —***Le corrigé des questions 1.c et 2.a n’était pas présent dans les fichiers fournis.*"
      },
      {
        "type": "p",
        "text": "**2. b. Montrer que le choix de la société Quentin n’est pas optimal du point de vue du groupe.**"
      },
      {
        "type": "p",
        "text": "Hypothèse « ventes externes privilégiées » (prix externe 3 000 €, 9 000 pièces cédées en interne à 435 €) :"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quentin**",
          "**Meryl**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "3 000 × 450 + 9 000 × 435 = 5 265 000",
            "5 760 000"
          ],
          [
            "**Achat**",
            "128 × 12 000 = 1 536 000",
            "9 000 × 435 = 3 915 000"
          ],
          [
            "**Charges variables**",
            "207 × 12 000 = 2 484 000",
            "786 316"
          ],
          [
            "**Charges fixes**",
            "1 000 000",
            "650 000"
          ],
          [
            "**Charges administratives**",
            "200 000",
            "420 000"
          ],
          [
            "**Résultat**",
            "45 000",
            "– 11 316"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat du groupe = 45 000 – 11 316 = 33 684 €."
      },
      {
        "type": "p",
        "text": "Hypothèse « ventes internes privilégiées » (prix externe 2 500 €, 9 500 pièces cédées en interne à 435 €) :"
      },
      {
        "type": "table",
        "headers": [
          "**Éléments**",
          "**Quentin**",
          "**Meryl**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "2 500 × 450 + 9 500 × 435 = 5 257 500",
            "6 080 000"
          ],
          [
            "**Achat**",
            "128 × 12 000 = 1 536 000",
            "9 500 × 435 = 4 132 500"
          ],
          [
            "**Charges variables**",
            "207 × 12 000 = 2 484 000",
            "830 000"
          ],
          [
            "**Charges fixes**",
            "1 000 000",
            "650 000"
          ],
          [
            "**Charges administratives**",
            "200 000",
            "420 000"
          ],
          [
            "**Résultat**",
            "37 500",
            "47 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat du groupe = 37 500 + 47 500 = 85 000 €. Le groupe a donc intérêt à privilégier les ventes en interne."
      },
      {
        "type": "p",
        "text": "**2. c. Déterminer le prix de cession interne pour faire coïncider les intérêts de la société Quentin avec ceux du groupe.**"
      },
      {
        "type": "p",
        "text": "Une solution consiste à aligner le prix de cession interne sur la marge sur coût variable réalisée à l’externe, soit 115 €."
      },
      {
        "type": "p",
        "text": "**3. Renseigner M. Lamorel sur le rôle joué par le prix de cession interne dans ce choix.**"
      },
      {
        "type": "p",
        "text": "Au sein d’entreprises multidivisionnelles intégrées, il est indispensable que les différentes unités ou divisions s’échangent des biens et des services. Les prix auxquels ces biens et services sont échangés sont appelés prix de transfert (ou prix de cession interne). Le prix de cession interne peut permettre des transferts de bénéfices artificiels, c’est-à-dire ne reflétant pas les conditions économiques et commerciales des transactions auxquelles ils se rapportent. Dans un contexte de mondialisation des échanges et de concurrence fiscale accrue, les États sont contraints de les contrôler s’ils veulent conserver la base imposable qui leur revient. Par exemple, M. Lamorel pourrait créer une filiale dans un pays à taux d’imposition plus faible qu’en France et s’arranger, via la fixation du PCI, pour y concentrer les bénéfices."
      },
      {
        "type": "p",
        "text": "**4. Expliquer ce qui se passe lorsque l’une des deux filiales, ou les deux, ne sont pas en pleine capacité de production.**"
      },
      {
        "type": "p",
        "text": "Lorsqu’une filiale n’est pas en pleine capacité de production, elle dépense, en comptabilité générale, des charges qu’elle ne devrait pas dépenser. Elle devra alors calculer un coefficient d’imputation rationnelle et l’affecter aux charges fixes indirectes afin de réduire son coût de revient. Si cette sous-activité persiste, elle devra envisager des solutions afin de réduire ces charges fixes indirectes."
      },
      {
        "type": "p",
        "text": "Si l’une des deux filiales est en sous-capacité de production, le groupe devra envisager de demander aux autres filiales de faire travailler, en priorité, cette filiale afin de baisser les charges fixes indirectes unitaires et permettre des économies d’échelle (si cela est possible). Si les deux filiales sont en sous-capacité, il convient de trouver de nouveaux débouchés dans le groupe."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "Application",
    "title": "SLT / SFDA — Prix de cession interne, MFCA et VAN",
    "statement": [
      {
        "type": "p",
        "text": "La société lyonnaise de torréfaction (SLT) a pour activité la torréfaction de café vert et l’empaquetage de café torréfié. Son unique usine de production est située à Vénissieux dans la banlieue lyonnaise, où elle dispose de quatre torréfacteurs d’une capacité annuelle de 7 500 tonnes de café torréfié chacun."
      },
      {
        "type": "p",
        "text": "La SLT est une filiale à 60 % de la société française de distribution alimentaire (SFDA) qui assure la commercialisation du café empaqueté à Vénissieux. Ce débouché ne porte que sur environ 50 % du café torréfié par la SLT ; le reste est vendu en vrac, avant empaquetage, à d’autres sociétés de distribution en dehors du groupe."
      },
      {
        "type": "p",
        "text": "Un prix de cession est négocié chaque année entre la SLT et la SFDA. Les critères suivants sont considérés pour sa détermination :"
      },
      {
        "type": "p",
        "text": "• l’intérêt du groupe : les considérations fiscales ne peuvent en être absentes ;"
      },
      {
        "type": "p",
        "text": "• les débouchés extérieurs dont dispose l’usine de Vénissieux pour son café torréfié, en vrac : ils offrent une marge rela-tivement importante ;"
      },
      {
        "type": "p",
        "text": "• la rentabilité de l’activité café dans chacune des deux sociétés."
      },
      {
        "type": "p",
        "text": "**Arbitrer entre le bénéfice de la filiale et le bénéfice de la société mère sur la base des prévisions pour l’année N (voir annexe 1). Exprimer, pour chacune des deux sociétés, le résultat prévisionnel avant et après impôt en fonction du prix de cession interne.**"
      },
      {
        "type": "p",
        "text": "**Quel est le PCI du paquet (ou la plage de prix) permettant de maximiser le résultat prévisionnel de l’en-semble consolidé ?**"
      },
      {
        "type": "p",
        "text": "**Quel est le PCI du paquet permettant de maximiser la part du groupe SFDA dans le bénéfice prévisionnel consolidé ?**"
      },
      {
        "type": "p",
        "text": "**Arbitrer entre les ventes internes et les ventes externes au cours de l’année N (voir annexe 2). Justifier le choix fait par la SLT d’augmenter ses ventes externes.**"
      },
      {
        "type": "p",
        "text": "**Montrer que le choix de la SLT n’est pas optimal du point de vue du groupe.**"
      },
      {
        "type": "p",
        "text": "**Quel devrait être le PCI pour faire coïncider les intérêts de la filiale avec ceux du groupe ?**"
      },
      {
        "type": "p",
        "text": "D’autre part, la SLT s’est engagée dans un programme de repérage et de valorisation de ses déchets, qu’elle estime chaque année à 210 000 € (pour détruire ses déchets), en payant un prestataire externe. Elle souhaite réduire cette somme, en procédant à une analyse MFCA (voir annexe 3)."
      },
      {
        "type": "p",
        "text": "Le résultat de l’étude réalisée par un cabinet de consultants externe donne un coût complet des déchets de 5 000 000 € répartis en 450 000 € d’énergie, 210000 € de prestation externe et 4 340 000 € de coûts matière (30 % de café et 70 % d’emballage)."
      },
      {
        "type": "p",
        "text": "L’achat d’une machine permettant d’économiser 50 % des pertes en emballage est envisagé, pour un coût de 1 000 000 € (la machine étant vecteur de lutte contre la pollution est amortissable en un an)."
      },
      {
        "type": "p",
        "text": "**Quelle serait la rentabilité de ce projet sur 5 ans, avec un taux d’actualisation de 10 %, sachant qu’il faudrait embaucher un technicien supplémentaire pour un coût total de 35 000 € annuel ?**"
      },
      {
        "type": "p",
        "text": "**Annexe 1 : Prévisions pour l’exercice N**"
      },
      {
        "type": "p",
        "text": "SLT :"
      },
      {
        "type": "p",
        "text": "• production de café torréfié en vrac : 30 000 tonnes dont 15000 tonnes vendues à l’extérieur du groupe au prix de 8 000 € par tonne ;"
      },
      {
        "type": "p",
        "text": "• empaquetage : 60 millions de paquets de 250 g vendus à la SFDA ;"
      },
      {
        "type": "p",
        "text": "• coût d’achat du café vert : 4 000 € pour une tonne de café torréfié obtenue. Autres charges de production :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Torréfaction (pour 1 t torréfiée)**",
          "**Empaquetage(pour 1 paquet et de 250 g)**"
        ],
        "rows": [
          [
            "**Charges fixes**",
            "1 500 €",
            "0,20 €"
          ],
          [
            "**Charges variables**",
            "500 €",
            "0,20 €"
          ],
          [
            "**Total**",
            "2 000 €",
            "0,40 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Charges administratives et financières : 20 000 K€"
      },
      {
        "type": "p",
        "text": "SFDA :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Café**",
          "**Autres activités**"
        ],
        "rows": [
          [
            "**CA**",
            "60 millions de paquets à 2,40 €",
            "157 600 K€"
          ],
          [
            "**Achats à la SLT**",
            "60 millions de paquets",
            ""
          ],
          [
            "**Autres charges variables**",
            "6 600 K€",
            "105 600 K€"
          ],
          [
            "**Charges fixes**",
            "3 800 K€",
            "80 000 K€"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les deux sociétés sont assujetties à l’IS au taux de 33,33 %. Leur résultat fiscal est supposé égal au résultat courant avant impôts. Le problème des reports déficitaires sera négligé."
      },
      {
        "type": "p",
        "text": "**Annexe 2 : Contrats conclus par la SLT au cours de l’année N**"
      },
      {
        "type": "p",
        "text": "Un prix de cession de 2 € par paquet a finalement été retenu au début de l’année N."
      },
      {
        "type": "p",
        "text": "Au cours de l’année, la SLT a conclu de nouveaux contrats avec des distributeurs extérieurs au groupe pour la livraison de 2 000 tonnes de café torréfié en vrac au même prix que celui stipulé dans les contrats précédents (8000 € la tonne). Sa capacité de production étant saturée, la SLT a dû réduire d’autant ses livraisons à la SFDA."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "• Arbitrage entre le bénéfice de la filiale et le bénéfice de la société mère sur la base des prévisions pour l’année N (voir annexe 1). Exprimer, pour chacune des deux sociétés, le résultat prévisionnel avant et après impôt en fonction du prix de cession interne."
      },
      {
        "type": "p",
        "text": "Soit x le PCI en K€ :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**SLT**",
          "**SFDA**"
        ],
        "rows": [
          [
            "**CA externe**",
            "8 × 15 000 = 120 000",
            "2,4 × 60 000 + 157 600 = 301 600"
          ],
          [
            "**CA interne**",
            "60 000x",
            ""
          ],
          [
            "**Achats**",
            "4 × 30 000 = 120 000",
            "60 000 x"
          ],
          [
            "**Charges variables**",
            "0,5 × 30 000 = 15 000",
            "6 600 + 105 600 = 112 200"
          ],
          [
            "",
            "0,2 × 60 000 = 12 000",
            ""
          ],
          [
            "**Charges fixes**",
            "1,5 × 30 000 = 45 000",
            "3 800 + 80 000 = 83 800"
          ],
          [
            "",
            "0,2 × 60 000 = 12 000",
            ""
          ],
          [
            "**Charges administratives**",
            "20 000",
            ""
          ],
          [
            "**Résultat avant impôt**",
            "60 000x – 104 000bénéficiaire si x > 1,73",
            "105 600 – 60 000xbénéficiaire si x < 1,76"
          ],
          [
            "**Résultat après IS si bénéficiaire**",
            "40 000x – 69 333",
            "70 400 – 40 000x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les résultats en fonction de x sont les suivants :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**X < 1,73**",
          "**1,73 < X < 1,76**",
          "**X > 1,76**"
        ],
        "rows": [
          [
            "**Résultat SLT**",
            "60 000x – 104 000",
            "40 000x – 69 333",
            "40 000x – 69 333"
          ],
          [
            "**Résultat SFDA**",
            "70 400 – 40 000x",
            "70 400 – 40 000x",
            "105 600 – 60 000x"
          ],
          [
            "",
            "20 000x – 33 600",
            "1 067",
            "36 267 – 20 000x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Quel est le PCI du paquet (ou la plage de prix) permettant de maximiser le résultat prévisionnel de l’ensemble consolidé ?**"
      },
      {
        "type": "table",
        "headers": [
          "**X**",
          "**0**",
          "**1,73**",
          "**1,76**",
          "**1,81**",
          "**4**"
        ],
        "rows": [
          [
            "**Résultat**",
            "– 33 600",
            "1 067",
            "1 067",
            "0",
            "– 43 733"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat optimal existe pour un PCI du paquet de 1,73 à 1,76 €."
      },
      {
        "type": "p",
        "text": "**Quel est le PCI du paquet permettant de maximiser la part du groupe SFDA dans le bénéfice prévi-sionnel consolidé ?**"
      },
      {
        "type": "p",
        "text": "La part du groupe dans le résultat de la filiale SLT est de 60 % :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**X < 1,73**",
          "**1,73 < X < 1,76**",
          "**X > 1,76**"
        ],
        "rows": [
          [
            "**60 % Résultat SLT**",
            "36 000x – 62 400",
            "24 000x – 41 600",
            "24 000x – 41 600"
          ],
          [
            "**Résultat SFDA**",
            "70 400 – 40 000x",
            "70 400 – 40 000x",
            "105 600 – 60 000x"
          ],
          [
            "",
            "8 000 – 4 000x",
            "28 800 – 16 000x",
            "64 000 – 36 000x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La part du groupe dans le résultat consolidé est d’autant plus élevée que le prix de cession est faible. En théorie la SFDA aurait intérêt à imposer un prix de cession très faible. Elle ne peut cependant fixer le prix en dessous du coût de revient (hors frais administratif, soit 1,90 €) sinon elle s’exposerait à des recours, tant de la part des actionnaires que de l’administration fiscale."
      },
      {
        "type": "p",
        "text": "Le coût de revient est de 1,90 € comme suit :"
      },
      {
        "type": "p",
        "text": "Un paquet coûte en café (4 € × 0,250 = 1 €), en torréfaction (2 € × 0,250 = 0,50 €), en empaquetage (0,40 €) soit au total 1,90 €."
      },
      {
        "type": "p",
        "text": "Arbitrage réalisé entre les ventes internes et les ventes externes au cours de l’année N. Justifier le choix fait par la SLT d’augmenter ses ventes externes."
      },
      {
        "type": "p",
        "text": "La MCV de la SLT sur une tonne vendue à l’extérieur est la suivante :"
      },
      {
        "type": "p",
        "text": "• prix de vente de 8 000 – achat de café vert (4 000) ;"
      },
      {
        "type": "p",
        "text": "• charges variables de torréfaction (500) soit 3 500 €."
      },
      {
        "type": "p",
        "text": "La MCV pour une tonne vendue à la SFDA est de :"
      },
      {
        "type": "p",
        "text": "• prix de vente 8 000 € (2 € × 1 000 / 0,250) ;"
      },
      {
        "type": "p",
        "text": "• achat de café vert (4 000) ;"
      },
      {
        "type": "p",
        "text": "• charges variables de torréfaction (500) ;"
      },
      {
        "type": "p",
        "text": "• empaquetage (0,2 × 1 000 / 0,250 = 800, soit 2 700 €)."
      },
      {
        "type": "p",
        "text": "Il vaut donc mieux vendre à l’extérieur qu’à la SFDA pour la SLT."
      },
      {
        "type": "p",
        "text": "**Montrer que le choix de la SLT n’est pas optimal du point de vue du groupe.**"
      },
      {
        "type": "p",
        "text": "La marge sur coût variable du groupe sur une tonne de café en paquets est de :"
      },
      {
        "type": "p",
        "text": "– CA de 2,40 € × 1 000/0,250 = 9 600 ;"
      },
      {
        "type": "p",
        "text": "• coûts variables de la SLT (4 000 + 500 + 800) soit 5 300 € ;"
      },
      {
        "type": "p",
        "text": "• coûts variables de la SFDA (6 600 / 60 000 × 1 000/0,25) = 440 €."
      },
      {
        "type": "p",
        "text": "La MCV est donc de 9 600 – 5 300 – 440 = 3 860."
      },
      {
        "type": "p",
        "text": "Le groupe aurait intérêt à vendre du café en paquets."
      },
      {
        "type": "p",
        "text": "**Quel devrait être le PCI pour faire coïncider les intérêts de la filiale avec ceux du groupe ?**"
      },
      {
        "type": "p",
        "text": "Pour que la SLT agisse conformément à l’intérêt du groupe, sa marge sur une tonne de café empaqueté doit être supérieure à 3 500 €. Le PCI doit être majoré soit de plus de 800 € par tonne, soit de 0,20 € par paquet. Le PCI doit donc être de 2,20 € minimum."
      },
      {
        "type": "p",
        "text": "D’autre part, la SLT s’est engagée dans un programme de repérage et de valorisation de ses déchets, qu’elle estime. Elle dépense chaque année 210 000 € pour détruire ses déchets en payant un prestataire externe. Elle souhaite réduire cette somme, en procédant à une analyse MFCA (voir annexe 3). Le résultat de l’étude réalisée par un cabinet de consultants externe donne un coût complet des déchets de 5 000 000 € répartis en 450000 € d’énergie, 210 000 € de prestation externe et 4 340 000 € de coûts matière (30 % de café et 70 % d’emballage)."
      },
      {
        "type": "p",
        "text": "L’achat d’une machine permettant d’économiser 20 % en année 1, puis 30 % en année 2, 40 % en année 3, 50 %, les années suivantes, des pertes en emballage, est envisagé, pour un coût de 1 000 000 € (la machine étant vecteur de lutte contre la pollution est amortissable en un an)."
      },
      {
        "type": "p",
        "text": "**Quelle serait la rentabilité de ce projet sur 5 ans, avec un taux d’actualisation de 10 %, sachant qu’il faudrait embaucher un technicien supplémentaire pour un coût total de 35 000 € annuel ?**"
      },
      {
        "type": "p",
        "text": "Il s’agit de calculer une VAN (il n’est pas tenu compte d’une variation de Besoin en Fonds de Roulement) :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Année 1**",
          "**Année 2**",
          "**Année 3**",
          "**Année 4**",
          "**Année 5**"
        ],
        "rows": [
          [
            "**Amortissement**",
            "– 1 000 K€",
            "",
            "",
            "",
            ""
          ],
          [
            "**Économie d’emballage**",
            "4 340 K€ × 70 %× 20 % = 608 K€",
            "4 340 K€ × 70 %× 30 % = 911 K€",
            "4 340 K€ × 70 %× 40 % = 1 216 K€",
            "4 340 K€ × 70 %× 50 % = 1 519 K€",
            "4 340 K€ × 70 %× 50 % = 1 519 K€"
          ],
          [
            "**Salaire**",
            "– 35 K€",
            "– 35 K€",
            "– 35 K€",
            "– 35 K€",
            "– 35 K€"
          ],
          [
            "**Résultat**",
            "– 427",
            "876",
            "1 181",
            "1 484",
            "1 484"
          ],
          [
            "**Résultat net IS**",
            "– 427",
            "584",
            "787",
            "989",
            "989"
          ],
          [
            "**Cash flow**",
            "573",
            "584",
            "787",
            "989",
            "989"
          ],
          [
            "**Cash flowactualisé**",
            "521 (573 / 1,1)",
            "483 (584 / 1,12)",
            "592 (787 / 1,13)",
            "675 (989 / 1,14)",
            "614 (989 / 1,15)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat est Économie – Amortissement – Salaires"
      }
    ]
  }
];
