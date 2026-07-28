// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A4.1",
    "title": "Styl'Dust",
    "statement": [
      {
        "type": "p",
        "text": "La société Styl’Dust envisage d’acquérir, dans quelques mois, une nouvelle extrudeuse qui modifierait les conditions d’exploitation d’un atelier. Elle hésite entre trois modèles : E1, E2 et E3. Chacun de ces modèles permettrait de répondre à une demande du marché estimée à 2 500 000 sacs pour aspirateurs industriels par saison."
      },
      {
        "type": "p",
        "text": "Pour chaque modèle, les données d’exploitation pour une saison ont été collectées (sur la base d’une production prévisionnelle de 2 500 000 sacs pour aspirateurs industriels que le centre de distribution s’engage à acheter dès leur production)."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**E1**",
          "**E2**",
          "**E3**"
        ],
        "rows": [
          [
            "**Charges fixes**",
            "812 000 €",
            "2 000 000 €",
            "3 960 000 €"
          ],
          [
            "**Résultat prévisionnel**",
            "638 000 €",
            "1 125 000 €",
            "1 540 000 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Quel que soit le modèle choisi, les coûts opérationnels sont considérés comme propor-"
      },
      {
        "type": "p",
        "text": "tionnels à la production de sacs. Le dirigeant de la société souhaite obtenir les données variables sous forme unitaire et déterminer le résultat dégagé par produit ainsi que le seuil de rentabilité en volume de chaque modèle."
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts, marges et résultats qui permettront d’éclairer le dirigeant de Styl’Dust.**"
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts, marges et résultats qui permettront d’éclairer le diri-geant de Styl’Dust.**"
      },
      {
        "type": "p",
        "text": "**Indicateurs du risque d’exploitation**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées"
      },
      {
        "type": "p",
        "text": "**Méthode***Vous devez mettre en oeuvre un des outils de la relation CVP à choisir en fonction du contexte, des objectifs et des données fournies : – date de seuil si des informations de temps vous sont communiquées ; – coefficient de volatilité ou levier opérationnel avec des données de variation de résultat ; – seuil différent, en cas de variations saisonnières ou de multiproduction. Vous devez ensuite vous appuyer sur les résultats pour élaborer un état des lieux de la situation (forces, difficultés, points de progression) et, le cas échéant, des pistes de solution.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts, marges et résultats qui permettront d’éclairer le dirigeant de Styl’Dust.**"
      },
      {
        "type": "p",
        "text": "1. Construction du compte de résultat différentiel"
      },
      {
        "type": "p",
        "text": "Vous devez repérer les données dans le sujet : un volume de 2 500 000 sacs, le résultat attendu et les charges fixes. Ces données sont valables pour les trois extrudeuses. Aucune information sur le prix de vente ou le montant des charges variables n’est disponible."
      },
      {
        "type": "p",
        "text": "En référence aux relations entre les données MCV – CF = R, vous devez reconstituer la MCV totale pour chaque modèle. En tenant compte du volume de sacs, vous déduisez la marge par sac : extrudeuse 1 : CF = 812 000 ; R = 638 000 d’où MCVtotale = 1 450 000 € pour 2 500 000 sacs, soit sachet une MCVU de 0, 58 € (1 450 000 € / 2 500 000 sachets). La question sous-jacente est l’influence des volumes et des structures de coût des trois extrudeuses."
      },
      {
        "type": "table",
        "headers": [
          "**Type d’extrudeuse**",
          "**E1**",
          "**E2**",
          "**E3**"
        ],
        "rows": [
          [
            "**Résultat pour 2 500 000 sacs Charges fixes**",
            "638 000812 000",
            "1 125 0002 000 000",
            "1 540 0003 960 000"
          ],
          [
            "**MCV (pour 2 500 000 sacs) Marge unitaire**",
            "1 450 0000,58 €",
            "3 125 0001,25 €",
            "5 500 0002,20 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Reconstitution du résultat"
      },
      {
        "type": "p",
        "text": "Repérez l’introduction d’une variation de volume. Le lien de proportionnalité entre volume et données numériques existe jusqu’au calcul de la marge sur coût variable. Ne multipliez jamais un résultat unitaire par les volumes :"
      },
      {
        "type": "p",
        "text": "Extrudeuse 1 : MCV pour 1 980 000 sacs = 0,58 € × 1 980 000 = 1 148 400 €, marge de laquelle vous déduisez les charges fixes pour obtenir le résultat 1 148 400 € – 812 000 € = 336 400 €."
      },
      {
        "type": "table",
        "headers": [
          "**Type d’extrudeuse**",
          "**E1**",
          "**E2**",
          "**E3**"
        ],
        "rows": [
          [
            "**MCV pour 1 980 000 sacs Résultat attendu (MCV – CF)**",
            "1 148 400336 400",
            "2 475 000475 000",
            "4 356 000396 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Détermination du seuil de rentabilité en volume"
      },
      {
        "type": "p",
        "text": "En l’absence de prix de vente, le taux de MCV ne peut être calculé. Vous devez rechercher un seuil qui s’exprime en volume ;"
      },
      {
        "type": "p",
        "text": "Extrudeuse 1 : SR = CF/MCV par sac = 812 000/0,58 = 1 400 000 sacs. Il faut donc fabriquer et vendre au moins 1 400 000 sacs pour dégager du résultat si on utilise l’extrudeuse 1."
      },
      {
        "type": "p",
        "text": "4. Calcul du taux de marge de sécurité"
      },
      {
        "type": "p",
        "text": "Vous devez appliquer la formule en référence au volume proposé, soit 2 500 000 ventes annuelles (VA) de sacs :"
      },
      {
        "type": "p",
        "text": "Extrudeuse 1 : Taux MS = (VA – SR) / VA = (2 500 000 – 1 400 000) / 2 500 000 = 44 %"
      },
      {
        "type": "p",
        "text": "Le tableau ci-après récapitule les résultats des calculs pour les trois extrudeuses."
      },
      {
        "type": "p",
        "text": "MS = Marge de sécurité"
      },
      {
        "type": "table",
        "headers": [
          "**Type d’extrudeuse**",
          "**E1**",
          "**E2**",
          "**E3**"
        ],
        "rows": [
          [
            "**Seuil de rentabilité (en unités) (CF/Marge unitaire) ⇒ N* = Nbre de sacs**",
            "812 000/0,581 400 000 sacs",
            "2 000 000/1,251 600 000 sacs",
            "3 960 000/2,201 800 000 sacs"
          ],
          [
            "**Taux de marge de sécurité**",
            "44 %",
            "36 %",
            "28 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Indicateurs du risque d’exploitation**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées"
      },
      {
        "type": "p",
        "text": "Méthode"
      },
      {
        "type": "p",
        "text": "**Méthode**• Vous devez mettre en oeuvre des indicateurs du risque d’exploitation à choisir en fonction du contexte, des objectifs et des données fournies :–date du seuil si des informations de temps vous sont communiquées ;–coefficient de volatilité ou levier opérationnel avec des données de variation de résultat ;–seuil différent, en cas de variations saisonnières ou de multiproduction.•Vous devez ensuite vous appuyer sur les résultats pour élaborer un état des lieux de la situation (forces, difficultés, points de progression) et, le cas échéant, des pistes de solution."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A4.2",
    "title": "Bloc",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise de matériels de jardin Bloc souhaite diversifier sa gamme. Afin d’accroître sa capacité de production, elle envisage d’investir dans un nouvel équipement. Les informations prévisionnelles collectées sont les suivantes :"
      },
      {
        "type": "p",
        "text": "• Choix entre un investissement A de 700 000 € avec un coût variable unitaire de 35 € et un investissement B de 1 000 000 € et un coût variable unitaire de 30 €, les deux investissements étant amortis linéairement sur 5 ans"
      },
      {
        "type": "p",
        "text": "• La capacité de production supplémentaire serait de 20 000 unités sur la période quel que soit l’investissement choisi."
      },
      {
        "type": "p",
        "text": "• La quantité prévisionnelle du nouveau produit fabriqué et vendu au cours de la période suivante serait de 15 000 unités."
      },
      {
        "type": "p",
        "text": "• Le nouveau produit serait vendu 55 € à raison de 100 000 € de dépenses publicitaires annuelles."
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter plusieurs indicateurs de risque d’exploitation.**"
      },
      {
        "type": "p",
        "text": "**Pertinence des méthodes**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "p",
        "text": "**Méthode***Il est possible d’analyser la pertinence d’un modèle de calcul de coûts selon plusieurs critères : – la facilité de calcul et de recueil d’informations ; – la variété des cibles et périmètre d’application ; – la durée de la pertinence des résultats ; – la simplification excessive de la situation de gestion ; – le niveau local opérationnel/le niveau stratégique global.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer et interpréter plusieurs indicateurs de risque d’exploitation.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Investissement A**",
          "**Investissement B**"
        ],
        "rows": [
          [
            "**Conditions d’exploitationPrix unitaireCoût variable unitaireCharges fixes**",
            "55 €35 €700 000/5 + 100 000 = 240 000",
            "55 €30 €1 000 000/5 + 100 000 = 300 000"
          ],
          [
            "**Seuil de rentabilitéCF / Marge unitaire**",
            "240 000/ (55 – 35)12 000 produits",
            "300 000 / (55 – 30)12 000 produits"
          ],
          [
            "**Marge de sécurité**",
            "15 000 – 12 000 = 3 000 produits soit 20 %",
            "15 000 – 12 000 = 3 000 produits soit 20 %"
          ],
          [
            "**Date du seuilSeuil × 360Ventes annuelles**",
            "288 joursSoit le 18 octobre",
            "288 joursSoit le 18 octobre"
          ],
          [
            "**Indice de prélèvementCF / Ventes annuelles**",
            "240 000 / 15 000= 16 € par produit",
            "300 000 / 15 000= 20 € par produit"
          ],
          [
            "**Résultat attendu**",
            "20 € × 15 000 – 240 000= 60 000 €",
            "25 € × 15 000 – 300 000= 75 000 €"
          ],
          [
            "**Coefficient de volatilitéMCV / Résultat**",
            "300 000/ 60 000 + 5",
            "375 000 / 75 000 + 5"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les deux investissements présentent les mêmes risques d’exploitation, mais le projet B est plus profitable que le A et, malgré la lourdeur de ses charges fixes, il présente la même sensibilité à un retournement de tendance (coefficient de volatilité de 5). Il est donc à choisir."
      },
      {
        "type": "p",
        "text": "**C) Pertinence des méthodes**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Il est possible d’analyser la pertinence d’un modèle de calcul de coûts selon plusieurs critères :"
      },
      {
        "type": "p",
        "text": "**Méthode***–la facilité de calcul et de recueil d’informations ;*–la variété des cibles et périmètre d’application ;–la durée de la pertinence des résultats ;–le niveau local opérationnel/le niveau stratégique global."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A4.3",
    "title": "Plaisirs du miel",
    "statement": [
      {
        "type": "p",
        "text": "Plaisirs du miel est une société anonyme installée en Aquitaine dont la fondatrice cherche à promouvoir les vertus du miel en alliant cosmétique, apiculture et apithérapie. Dans un souci de diversification et d’innovation, Plaisirs du miel a commercialisé un nouveau produit début 2018, l’Huile mielleuse, une huile de massage relaxante, à base de propolis et d’extraits d’hélianthus dans les conditions d’exploitation récapitulées ciaprès (annexe 1)."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion, M. Micoux, a réalisé une étude de marché qui laisse espérer des ventes autour de 6 000 unités pour un prix approximatif de 9,90 € (annexe 2) et avec des perspectives intéressantes de croissance. Il souhaite analyser le devenir de l’Huile mielleuse, notamment en termes de profitabilité, de flexibilité et de risques au moyen de différents indicateurs (annexe 3). La direction vise un taux de profitabilité de 8 % du chiffre d’affaires."
      },
      {
        "type": "p",
        "text": "**Rédiger un argumentaire afin d’éclairer le dirigeant de la société.**"
      },
      {
        "type": "p",
        "text": "**Conditions d’exploitation de l’huile mielleuse**"
      },
      {
        "type": "p",
        "text": "Les éléments de coût pour un pot de 250 ml sont les suivants :"
      },
      {
        "type": "p",
        "text": "Coûts variables unitaires :"
      },
      {
        "type": "p",
        "text": "– matières (composants) : 3,80 €"
      },
      {
        "type": "p",
        "text": "– emballage : 0,50 €"
      },
      {
        "type": "p",
        "text": "– main-d’œuvre directe : 2,30 €"
      },
      {
        "type": "p",
        "text": "– charges indirectes : 0,40 €"
      },
      {
        "type": "p",
        "text": "Les coûts fixes annuels générés par ce nouveau produit s’élèveront à 18 000 €. Le prix de vente fixé pour l’année 2018 était de 9,90 € par pot de 250 ml."
      },
      {
        "type": "p",
        "text": "**Conditions réelles de marché**"
      },
      {
        "type": "p",
        "text": "Finalement, en 2018 la société a vendu 6 400 produits au prix de 9,90 € le pot de 250 ml. L’étude de marché révèle que si le prix de vente d’un pot de 250 ml passait à 9,50 €, l’entreprise pourrait espérer vendre 6 800 pots en 2019."
      },
      {
        "type": "p",
        "text": "**Indicateurs de gestion**"
      },
      {
        "type": "p",
        "text": "• Taux de marge sur coûts variables : 29,29 %"
      },
      {
        "type": "p",
        "text": "• Seuil de rentabilité : 6 207 pots"
      },
      {
        "type": "p",
        "text": "• Ventes pour une profitabilité de 8 % au prix de 9,90 € : 8 540 pots"
      },
      {
        "type": "p",
        "text": "• Résultat attendu pour une vente de 6 800 pots à 9,50 € : – 1 000 €"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Rédiger un argumentaire afin d’éclairer le dirigeant de la société.**"
      },
      {
        "type": "p",
        "text": "Commentaire de l’ensemble des résultats obtenus"
      },
      {
        "type": "p",
        "text": "Selon les indications fournies dans le document 3, le seuil de rentabilité (6 207 produits) ne peut pas être atteint, d’où un résultat prévisionnel négatif puisque les ventes prévues sont de 6 000 unités. On peut s’étonner que bien que l’étude de marché laisse espérer des ventes autour de 6 000 unités, la décision de lancer le produit ait été prise dans ces conditions. D’autant que les demandes de profitabilité de la direction (8 % du chiffre d’affaires) impliqueraient des ventes de 8 540 produits soit une augmentation de 42 % des ventes actuelles. Le texte nous informe que « perspectives intéressantes de croissance » mais sont-elles aussi importantes que celles nécessaires à l’obtention de la profitabilité demandée ?"
      },
      {
        "type": "p",
        "text": "Compte tenu des volumes demandés, et compte tenu de l’élasticité de la demande par rapport au prix qui s’établit à :"
      },
      {
        "type": "p",
        "text": "Élasticité Demande/prix = [(6 800 – 6 400) / 6400] / [(9,50 – 9,90) /9,90] = 6,25 % / – 4,04 % = – 1, 547"
      },
      {
        "type": "p",
        "text": "Pour atteindre des ventes de 8 540 produits il faudrait baisser les prix à :"
      },
      {
        "type": "p",
        "text": "+ 42 % × – 1,547 = – 65 %, et donc un prix, égal à 3,46 €, très inférieur aux charges variables unitaires (7 € par produit)."
      },
      {
        "type": "p",
        "text": "Pistes d’action envisageables"
      },
      {
        "type": "p",
        "text": "On constate que les prévisions sont peu fiables puisque les ventes réelles se sont situées à 6 400 unités sans baisse de prix et donc que l’entreprise dégage un résultat positif de 560 €."
      },
      {
        "type": "p",
        "text": "Dans les conditions actuelles d’exploitation, il faudrait essayer de réduire les charges fixes et de mettre en concurrence les fournisseurs de composants et emballages pour les charges variables unitaires."
      },
      {
        "type": "p",
        "text": "**E) Seuil de rentabilité aléatoire**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**Méthode***L’énoncé exprime un contexte d’incertitude posé par le décideur. Dans cette perspective, il ne faudra pas déterminer le montant exact du chiffre d’affaires critique, mais la probabilité que ce seuil soit atteint ou dépassé.*La majorité des cas illustre une demande suivant une loi normale. Il sera nécessaire de repérer les éléments de la loi à utiliser.Pour répondre à cette problématique, vous devez :•soit déterminer les quantités vendues au seuil de rentabilité et utiliser la loi de probabilité des quantités ;•soit chercher la probabilité que le résultat soit strictement positif ; dans ce cas, il faut reconstituer la loi de probabilité suivie par le résultat.Commencez par déterminer les paramètres de la loi suivie par la variable aléatoire étudiée. Ensuite, vous calculerez la probabilité d’atteindre le seuil de rentabilité."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "A4.4",
    "title": "Surène",
    "statement": [
      {
        "type": "p",
        "text": "Soit l’entreprise Surène dont les caractéristiques d’exploitation pour l’année N sont les suivantes. En année N, une étude de marché estime la demande moyenne à 42 000 produits avec une fluctuation de plus ou moins 4 200 autour de cette moyenne dans 95 % des cas pour l’année N (loi normale)."
      },
      {
        "type": "p",
        "text": "En N+1, les ventes augmenteraient de 10 % avec une fluctuation réduite à plus ou moins 2 295 autour de la moyenne dans 60 % des cas. Un phénomène d’apprentissage organisationnel permettrait de réduire les charges variables unitaires à 52 €. Les charges fixes augmenteront de 120 000 € sur cet exercice pour pouvoir satisfaire la hausse de la demande."
      },
      {
        "type": "p",
        "text": "En N, comme en N+1, on supposera une distribution normale de la demande."
      },
      {
        "type": "p",
        "text": "**➔ Déterminer et interpréter le seuil de rentabilité en avenir aléatoire de l’entreprise Surène.**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Déterminer et interpréter le seuil de rentabilité en avenir aléatoire de l’entreprise Surène**"
      },
      {
        "type": "p",
        "text": "Paramètres de la loi de la demande"
      },
      {
        "type": "p",
        "text": "•Année N : E (Q) = 42 000 et Prob (42 000 – 4 200 < Q < 42 000 + 4 200) = 0,95"
      },
      {
        "type": "p",
        "text": "En centrant et réduisant la loi normale, il vient :"
      },
      {
        "type": "p",
        "text": "Prob [– 4 200 / σ (Q) < Q < + 4 200 / σ (Q)] = Prob { – t1 < T < + t1} = 0,95"
      },
      {
        "type": "p",
        "text": "⇒ 2 σ (t1) – 1 = 0,95 ⇒ 2 σ (t1) = 1,95 et σ (t1) = 0,975 ⇒ la table donne t1 = 1,96"
      },
      {
        "type": "p",
        "text": "et 4 200 / σ (Q) = 1,96 donc σ (Q) = 2 143"
      },
      {
        "type": "p",
        "text": "En année N, les paramètres de Q sont : (42 000 ; 2 143)"
      },
      {
        "type": "p",
        "text": "Ou encore on utilise la règle concernant les encadrements de la loi normale. Il est connu de [m – 2 σ ; m + 2 σ ] = 95 % donc 4 200 = 2 σ donc σ = 2 100"
      },
      {
        "type": "p",
        "text": "•Année N + 1 : E (Q) = 42 000 × 1,1 = 46 200 et Prob (43 905 < Q < 48 495) = 0,60"
      },
      {
        "type": "p",
        "text": "En centrant et réduisant la loi normale, il vient :"
      },
      {
        "type": "p",
        "text": "Prob [– 2 295 / σ (Q) < Q < + 2 295 / σ (Q)] = Prob { – t1 < T < + t1} = 0,60"
      },
      {
        "type": "p",
        "text": "⇒ 2 σ (t1) – 1 = 0,60 ⇒ σ (t1) = 0,80 ⇒ la table donne t1 = 0, 85 et"
      },
      {
        "type": "p",
        "text": "2 295 / σ (Q) = 0,85 donc σ (Q) = 2 700"
      },
      {
        "type": "p",
        "text": "En année N+1, les paramètres de Q sont : (46 200 ; 2 700)"
      },
      {
        "type": "p",
        "text": "Résultat espéré et analyse du risque"
      },
      {
        "type": "p",
        "text": "•Année N : E (R) = (70 – 55) E(Q) - 480 000 = 150 000"
      },
      {
        "type": "p",
        "text": "Dispersion absolue ⇒ σ (R) = (70 – 55) σ (Q) = 15 × 2 143 = 32 145 (ou 31 500)"
      },
      {
        "type": "p",
        "text": "Dispersion relative ⇒ σ (R) / E(R) = 32 145 / 150 000 = 0, 2143"
      },
      {
        "type": "p",
        "text": "•Année N + 1 : E (R) = (70 – 52) E(Q) – 600 000 = 231 600"
      },
      {
        "type": "p",
        "text": "Dispersion absolue ⇒ σ (R) = (70 – 52) σ (Q) = 18 × 2 700 = 48 600"
      },
      {
        "type": "p",
        "text": "Dispersion relative ⇒ σ (R) / E(R) = 48 600 / 231 600 = 0, 2098"
      },
      {
        "type": "p",
        "text": "L’évolution des ventes sur les deux années est contradictoire : elle constate une augmentation du résultat espéré de 54 % (espérance de 231600 en N+1 contre 150 000 en N) mais en supportant une augmentation du risque de l’ordre de 51 % (écart-type de 48 600 en N+1 contre 32 145 en N)."
      },
      {
        "type": "p",
        "text": "Cependant l’étude de la dispersion relative montre une dispersion légèrement plus faible en N+1 (0,2098) qu’en N (0,2143), ce qui tendrait à indiquer que la situation en N+1 est plus faiblement risquée que celle de N lorsqu’on la compare à l’espérance de gain."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C4.1",
    "title": "100 Dessus-Dessous",
    "statement": [
      {
        "type": "p",
        "text": "Le parc d’attractions 100 Dessus-Dessous, situé en Île-de-France, s’étend sur 52 hec-"
      },
      {
        "type": "p",
        "text": "tares. Il requiert de lourds investissements initiaux visant à offrir des attractions, si possible spectaculaires."
      },
      {
        "type": "p",
        "text": "Face à une concurrence de plus en plus large, le dirigeant propriétaire du parc souhaite mieux connaître ses données d’exploitation comme les coûts, les marges, les risques d’exploitation pour orienter le cas échéant, ses décisions d’investissements et de prix."
      },
      {
        "type": "p",
        "text": "Il envisage de réduire de 10 % le prix du billet d’entrée si cela est pertinent et lui permet de rester dans une zone profitabilité. Le montant annuel des coûts fixes, correspondant principalement aux amortissements des investissements, loyers et frais de personnel, s’élève à 2 880 000 €."
      },
      {
        "type": "p",
        "text": "Le coût variable unitaire induit par l’accueil d’un visiteur est estimé à 9 € par visiteur et par entrée (émission de billets, contrôle, assistance…). La clientèle est composée essentiellement de familles comprenant deux enfants âgés de 5 à 12 ans. Cette clientèle recherche principalement l’aspect ludique et la proximité de la capitale. Elle est sensible à la variable prix car il s’agit de dépenses de loisirs qui sont parmi les premières à être supprimées, ou du moins diminuées, en cas de crise."
      },
      {
        "type": "p",
        "text": "La fréquentation actuelle du parc est de 150 000 entrées avec un ticket d’entrée à 30 €. La fréquentation générale des parcs d’attractions est en hausse même si ces dépenses sont les premières à souffrir de la crise. Un sondage a été réalisé auprès des visiteurs. Le service commercial et le contrôleur de gestion estiment qu’en faisant varier le prix de plus ou moins 5 € autour du prix de base de 30 €, la fréquentation annuelle du parc, mesurée par le nombre de visiteurs, s’établirait à :"
      },
      {
        "type": "table",
        "headers": [
          "**Prix (€)**",
          "**Demande**"
        ],
        "rows": [
          [
            "25",
            "187 500"
          ],
          [
            "30",
            "150 000"
          ],
          [
            "35",
            "112 500"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et les marges de l’activité et les interpréter pour aider le dirigeant à décider.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs du risque d’exploitation pour apprécier la marge de manoeuvre du parc.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Apprécier les intérêts et limites des méthodes utilisées par Styldust pour analyser sa profitabilité.**"
      },
      {
        "type": "p",
        "text": "Le choix de matériel (trois extrudeuses) par le modèle volume prix coût est un outil simple et compréhensible par les opérationnels pour peu que les données soient valides et réalistes. Dans un choix a priori, l’entreprise s’appuie sur les données nominales fournies par les constructeurs des matériels qui peuvent se révéler trop optimistes."
      },
      {
        "type": "p",
        "text": "L’outil de simulation permet de clarifier les zones de choix de l’entreprise (voir les points d’indifférence entre les trois matériels) et peut servir de base à des arbitrages. En revanche, il ne donne pas « la » solution, et le niveau anticipé des ventes relève de la responsabilité du dirigeant."
      },
      {
        "type": "p",
        "text": "Trop souvent, les managers, par optimisme, choisissent les investissements de grande taille sans lien réel avec les ventes attendues qui seront réalisées, faisant apparaître des coûts fixes excessifs qui doivent alors être supportées par des volumes inférieurs à ceux retenus dans la simulation."
      },
      {
        "type": "p",
        "text": "**Argumentaire**"
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
        "text": "**Méthode***Un argumentaire doit être une liste structurée d’éléments d’analyse pour convaincre d’une position. Selon le domaine concerné, il faut trouver les thèmes ou les critères sur lesquels fonder un argumentaire.*Trois critères existent : la profitabilité, la sécurité et la flexibilité.L’argumentaire doit présenter, pour une organisation dans son contexte, les points forts et les points faibles au regard des critères analysés."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C4.2",
    "title": "Caves Bélier",
    "statement": [
      {
        "type": "p",
        "text": "Le dirigeant des caves Bélier souhaite mieux analyser les coûts et les marges de son exploitation pour faire faire à une concurrence de plus en plus forte. Il aimerait également anticiper les risques possibles de son activité et en particulier la baisse tendancielle des prix de vente du vin."
      },
      {
        "type": "p",
        "text": "Le comptable de l’exploitation coopérative agricole a relevé les données suivantes :"
      },
      {
        "type": "ul",
        "items": [
          "Nombre de cartons de 3 bouteilles produits et vendus : 42 000 unités.",
          "Prix de vente du carton de 3 bouteilles : 70 €.",
          "Charges variables de production et de distribution : 55 € par carton.",
          "Charges fixes globales : 480 000 €."
        ]
      },
      {
        "type": "p",
        "text": "La concurrence sur le secteur du vignoble concerné conduit à une élasticité de la demande par rapport au prix égal à – 1,5."
      },
      {
        "type": "p",
        "text": "Pour y faire face, la coopérative souhaite déterminer son degré de flexibilité quant au volume et au prix. Dans tous les cas de figure, la coopérative souhaite rester profitable."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et les marges de l’activité pour en analyser la rentabilité.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs du risque d’exploitation pour apprécier la marge de manoeuvre de la coopérative.**"
      },
      {
        "type": "p",
        "text": "**3. Répondre aux interrogations de la coopérative en termes de flexibilité.**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Calculer et interpréter les coûts, marges et résultats dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Rédiger un argumentaire afin de conseiller le décideur"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et les marges de l’activité pour en analyser la profitabilité.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**Coût unitaire**",
          "**Total**",
          "**Taux**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "42 000",
            "70",
            "2 940 000",
            ""
          ],
          [
            "**Charges variables**",
            "42 000",
            "55",
            "2 310 000",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "42 000",
            "15",
            "630 000",
            "21,43 %"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "480 000",
            ""
          ],
          [
            "**Résultat d’exploitation**",
            "",
            "",
            "150 000",
            "5,10 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs du risque d’exploitation pour apprécier la marge de manoeuvre de la coopérative.**"
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité est le chiffre d’affaires (CA) pour lequel l’entreprise couvre la totalité de ses charges (charges variables et charges fixes), dégageant ainsi un résultat nul. Il s’élève à 2 239 851 € et correspond à 31 998 cartons. Il sera atteint assez tôt dans l’année, le 5 octobre."
      },
      {
        "type": "p",
        "text": "La marge de sécurité (MS) correspond à l’écart entre le chiffre d’affaires obtenu et le seuil de rentabilité. Elle s’élève à 700 149 €. La marge de sécurité est importante."
      },
      {
        "type": "p",
        "text": "L’indice de sécurité (IS) correspond à la marge de sécurité rapportée au chiffre d’affaires. L’IS permet de déterminer la tolérance de variation de chiffre d’affaires avant de se retrouver en perte. L’entreprise peut subir une perte de chiffre d’affaires de 23,81 % en étant toujours profitable. La marge de sécurité est donc importante."
      },
      {
        "type": "p",
        "text": "Le levier opérationnel (LO) mesure l’impact d’une variation du CAHT sur le résultat d’exploitation. Cette sensibilité est fonction de la structure des charges (charges variables/charges fixes). Plus les charges fixes sont importantes, plus le risque est grand. Le coefficient obtenu est un coefficient multiplicateur. Ici, LO = 4,2. Si le chiffre d’affaires augmente de 10 % alors le résultat d’exploitation progressera de 42 %. Si le chiffre d’affaires baisse de 10 % alors le résultat d’exploitation diminuera de 42 %."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire pour analyser l’intérêt d’une stratégie plus flexible.**"
      },
      {
        "type": "p",
        "text": "Le dirigeant des caves Bélier souhaite effectuer une étude de profitabilité pour mieux anticiper les risques possibles de son activité et notamment la baisse tendancielle des prix de vente du vin."
      },
      {
        "type": "p",
        "text": "La coopérative vend des coffrets de trois bouteilles de vin."
      },
      {
        "type": "p",
        "text": "La commercialisation de ces coffrets semble être une activité profitable. De plus, au regard des différents indicateurs du risque d’exploitation, le risque semble maîtrisé. La marge de sécurité et l’indice de prélèvement sont satisfaisants."
      },
      {
        "type": "p",
        "text": "Grâce au levier opérationnel, le dirigeant des caves Bélier observe qu’une baisse de 1 % du chiffre d’affaires entraîne une diminution de 4,2 % du résultat global de l’entreprise."
      },
      {
        "type": "p",
        "text": "L’activité pourrait devenir dangereuse si la baisse tendancielle était amenée à durer."
      },
      {
        "type": "p",
        "text": "Le dirigeant des caves Bélier doit absolument maîtriser ses charges fixes ainsi que ses charges variables pour maintenir le niveau actuel de profitabilité."
      },
      {
        "type": "p",
        "text": "Le dirigeant pourra poursuivre son analyse en détaillant davantage les coûts, la saisonnalité…"
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C4.3",
    "title": "Parc du Bocage",
    "statement": [
      {
        "type": "p",
        "text": "Vous venez d’être nommé contrôleur de gestion au sein du Parc du Bocage. Le directeur général vous demande de réaliser une étude de rentabilité pour optimiser le résultat global de l’entreprise."
      },
      {
        "type": "p",
        "text": "Situé dans le Bocage normand, le Parc du Bocage est composé de cottages de plusieurs gammes (élémentaire, confort, VIP)."
      },
      {
        "type": "h4",
        "text": "Première partie"
      },
      {
        "type": "p",
        "text": "Le cottage élémentaire est une auberge de jeunesse. Il offre des solutions économiques aux clients : des dortoirs collectifs."
      },
      {
        "type": "p",
        "text": "Le prix moyen de la nuit est de 18 €. Le nombre de places s’élève à 145."
      },
      {
        "type": "p",
        "text": "Une étude de marché réalisée par un cabinet de consulting montre qu’une publicité plus agressive sur les réseaux sociaux permettrait d’attirer de nombreux étudiants et, par conséquent, d’augmenter significativement le nombre de réservations."
      },
      {
        "type": "p",
        "text": "Il faudrait pour cela que le budget alloué à la publicité atteigne 120 000 €, soit 50 % d’augmentation par rapport à la situation actuelle."
      },
      {
        "type": "p",
        "text": "Les informations connues dont vous disposez sont les suivantes :"
      },
      {
        "type": "ul",
        "items": [
          "Le coût variable d’un lit est de 6,60 €.",
          "L’élasticité de la demande par rapport à la variation des charges de marketing peut être évaluée à + 0,3.",
          "Les charges fixes prévues hors publicité de l’exercice sont de 250 000 €.",
          "Le cottage élémentaire comporte actuellement environ 120 réservations par jour.",
          "Le Parc du Bocage est ouvert 270 jours par an."
        ]
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et les marges dans le pour les cottages élémentaires.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs du risque d’exploitation du Parc du Bocage.**"
      },
      {
        "type": "h4",
        "text": "Deuxième partie"
      },
      {
        "type": "p",
        "text": "Le Parc du Bocage dispose également de 80 cottages individuels répartis en deux catégories :"
      },
      {
        "type": "ul",
        "items": [
          "30 cottages VIP à 600 € la semaine, notés VIP ;",
          "50 cottages confort à 350 € la semaine, notés CC."
        ]
      },
      {
        "type": "p",
        "text": "Afin d’optimiser la politique de prix et le résultat d’exploitation de la société, vous envisagez plusieurs stratégies alternatives :"
      },
      {
        "type": "ul",
        "items": [
          "Stratégie A : augmentation du prix du cottage VIP de 10 %.",
          "Stratégie B : baisse du prix du cottage VIP de 72 €.",
          "Stratégie C : augmentation du prix du cottage confort de 35 €."
        ]
      },
      {
        "type": "p",
        "text": "Le coût variable d’une semaine est de 350 € pour le cottage VIP et de 200 € pour le cottage confort. Les charges fixes prévisionnelles sont estimées à 410 000 €."
      },
      {
        "type": "p",
        "text": "Le dirigeant du parc souhaite connaître la marge prévisionnelle annuelle sur coût variable ainsi que la date à laquelle le seuil de rentabilité sera atteint. Il aimerait que lui soit remis un rapport commenté et synthétique du projet."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**3. Analyser les trois stratégies evoquées en termes de profitabilité.**"
      },
      {
        "type": "p",
        "text": "**4. Rédiger un argumentaire afin de conseiller le directeur général du Parc du Bocage sur d’éventuelles décisions à prendre.**"
      },
      {
        "type": "p",
        "text": "**Coefficient d’occupation et élasticité-prix**"
      },
      {
        "type": "p",
        "text": "Le parc est ouvert 39 semaines par an. Le coefficient d’occupation est de 80 % pour les cottages confort et de 90 % pour les cottages VIP."
      },
      {
        "type": "p",
        "text": "***Tableau des coefficients d’élasticité-prix***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Élasticité-prix par rapport à une hausse des prix**",
          "**Élasticité-prix par rapport à une baisse des prix**"
        ],
        "rows": [
          [
            "",
            "**Demande VIP**",
            "**Demande CC**",
            "**Demande VIP**",
            "**Demande CC**"
          ],
          [
            "**Prix VIP**",
            "– 0,3",
            "0,5",
            "– 1,1",
            "0,4"
          ],
          [
            "**Prix CC**",
            "0,6",
            "– 0,4",
            "– 0,1",
            "– 0,4"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**Partie 1**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et les marges pour les cottages élémentaires en distinguant les deux scenarii.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Activité réelle**"
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "Taux"
          ],
          [
            "**CA**",
            "18",
            "27 000",
            "486 000",
            ""
          ],
          [
            "**CV**",
            "6",
            "27 000",
            "162 000",
            ""
          ],
          [
            "**MCV**",
            "",
            "",
            "324 000",
            "67 %"
          ],
          [
            "**CF**",
            "",
            "",
            "330 000",
            ""
          ],
          [
            "**R**",
            "",
            "",
            "– 6 000",
            "– 1 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "27 000 = 100 × 270"
      },
      {
        "type": "p",
        "text": "330 000 = 250 000 + 80 000 avec 80 000 = 120 000 ÷ 1,5"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Activité prévisionnelle avec publicité supplémentaire**"
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "Taux"
          ],
          [
            "**CA**",
            "18",
            "32 400",
            "583 200",
            ""
          ],
          [
            "**CV**",
            "6",
            "32 400",
            "194 400",
            ""
          ],
          [
            "**MCV**",
            "",
            "",
            "388 800",
            "67 %"
          ],
          [
            "**CF**",
            "",
            "",
            "370 000",
            ""
          ],
          [
            "**R**",
            "",
            "",
            "18 800",
            "3 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "32 400 = 120 × 270"
      },
      {
        "type": "p",
        "text": "330 000 = 250 000 + 120 000"
      },
      {
        "type": "p",
        "text": "Le Parc du Bocage envisage une modification de ses charges de publicité pour attirer plus de clients sur le segment des cottages élémentaires. Selon les prévisions, le résultat négatif (– 6 000 €) deviendrait positif (+ 18 800 €)."
      },
      {
        "type": "p",
        "text": "Le taux de profitabilité évoluerait positivement et passerait à 3 % au lieu de – 1 %."
      },
      {
        "type": "p",
        "text": "L’importance des charges explique le résultat faible de l’activité des cottages élémentaires."
      },
      {
        "type": "p",
        "text": "Les calculs d’indicateurs du risque d’exploitation permettront au dirigeant du Parc du Bocage de disposer d’une meilleure vision pour piloter l’entreprise."
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter trois indicateurs du risque d’exploitation du Parc du Bocage en distinguant les deux scenarii.**"
      },
      {
        "type": "table",
        "headers": [
          "**Indicateurs**",
          "**Formules**",
          "**Activité réelle**",
          "**Activité prévisionnelle**"
        ],
        "rows": [
          [
            "**Seuil de rentabilité (S*)**",
            "CF / Taux de MCV",
            "495 000",
            "555 000"
          ],
          [
            "**Date du seuil de rentabilité**",
            "(CF / CA) × 270",
            "Aucune",
            "257"
          ],
          [
            "**Marge de sécurité (MS)**",
            "CA – S*",
            "– 9 000",
            "28 200"
          ],
          [
            "**Indice de sécurité (IS)**",
            "MS / CA",
            "– 0,02",
            "0,05"
          ],
          [
            "**Indice de prélèvement (IP)**",
            "CF / CA",
            "68 %",
            "63 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité est le chiffre d’affaires pour lequel l’entreprise couvre la totalité de ses charges, dégageant ainsi un résultat nul. La date du seuil de rentabilité nous permet de constater que l’activité n’est pas profitable avec l’activité réelle. Cependant, avec l’activité prévisionnelle, le Parc du Bocage serait profitable à partir du 257e jour. L’activité reste donc fragile."
      },
      {
        "type": "p",
        "text": "La marge de sécurité est le montant de chiffre d’affaires qui peut être supprimé par une conjoncture défavorable sans entraîner de pertes pour l’entreprise. Cette marge est négative dans le cadre de l’activité réelle et faible même avec le renforcement de la publicité. Elle s’élève à 28 200 €."
      },
      {
        "type": "p",
        "text": "L’indice de prélèvement est le pourcentage du chiffre d’affaires qui sert à couvrir les charges fixes. Il est en diminution de 5 points grâce au renforcement publicitaire, et ce en raison de l’augmentation importante de chiffre d’affaires."
      },
      {
        "type": "p",
        "text": "**Partie 2**"
      },
      {
        "type": "p",
        "text": "**3. Calculer les coûts, les marges et les résultats pour les trois stratégies envisagées par le dirigeant.**"
      },
      {
        "type": "p",
        "text": "Étude de la situation initiale"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Cottage VIP**",
          "",
          "",
          "**Cottage Confort**",
          "",
          "",
          ""
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Total"
          ],
          [
            "**CA**",
            "600",
            "1 053",
            "631 800",
            "",
            "CA",
            "350",
            "1 560",
            "546 000",
            "",
            "CA",
            "1 177 800"
          ],
          [
            "**CV**",
            "350",
            "1 053",
            "368 550",
            "",
            "CV",
            "200",
            "1 560",
            "312 000",
            "",
            "CV",
            "680 550"
          ],
          [
            "**MCV**",
            "",
            "",
            "263 250",
            "",
            "MCV",
            "",
            "",
            "234 000",
            "",
            "MCV",
            "497 250"
          ],
          [
            "**CF**",
            "",
            "",
            "",
            "",
            "CF",
            "",
            "",
            "",
            "",
            "CF",
            "410 000"
          ],
          [
            "**R**",
            "",
            "",
            "",
            "",
            "R",
            "",
            "",
            "",
            "",
            "R",
            "87 250"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Stratégie A"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Cottage VIP**",
          "",
          "",
          "**Cottage Confort**",
          "",
          "",
          ""
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Total"
          ],
          [
            "**CA**",
            "660",
            "1 105,65",
            "729 729",
            "",
            "CA",
            "350",
            "1 560",
            "546 000",
            "",
            "CA",
            "1 275 729"
          ],
          [
            "**CV**",
            "350",
            "1 105,65",
            "386 977,5",
            "",
            "CV",
            "200",
            "1 560",
            "312 000",
            "",
            "CV",
            "698 978"
          ],
          [
            "**MCV**",
            "",
            "",
            "342 751,5",
            "",
            "MCV",
            "",
            "",
            "234 000",
            "",
            "MCV",
            "576 752"
          ],
          [
            "**CF**",
            "",
            "",
            "",
            "",
            "CF",
            "",
            "",
            "",
            "",
            "CF",
            "410 000"
          ],
          [
            "**R**",
            "",
            "",
            "",
            "",
            "R",
            "",
            "",
            "",
            "",
            "R",
            "166 752"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Stratégie B"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Cottage VIP**",
          "",
          "",
          "**Cottage Confort**",
          "",
          "",
          ""
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Total"
          ],
          [
            "**CA**",
            "528",
            "895,05",
            "472 586,4",
            "",
            "CA",
            "350",
            "1 560",
            "546 000",
            "",
            "CA",
            "1 018 586"
          ],
          [
            "**CV**",
            "350",
            "895,05",
            "313 267,5",
            "",
            "CV",
            "200",
            "1 560",
            "312 000",
            "",
            "CV",
            "625 268"
          ],
          [
            "**MCV**",
            "",
            "",
            "159 318,9",
            "",
            "MCV",
            "",
            "",
            "234 000",
            "",
            "MCV",
            "393 319"
          ],
          [
            "**CF**",
            "",
            "",
            "",
            "",
            "CF",
            "",
            "",
            "",
            "",
            "CF",
            "410 000"
          ],
          [
            "**R**",
            "",
            "",
            "",
            "",
            "R",
            "",
            "",
            "",
            "",
            "R",
            "– 16 681"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Stratégie C"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Cottage VIP**",
          "",
          "",
          "**Cottage Confort**",
          "",
          "",
          ""
        ],
        "rows": [
          [
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Prix unitaire",
            "Quantité",
            "Total",
            "",
            "",
            "Total"
          ],
          [
            "**CA**",
            "600",
            "1 053",
            "631 800",
            "",
            "CA",
            "405",
            "1 248",
            "505 440",
            "",
            "CA",
            "1 137 240"
          ],
          [
            "**CV**",
            "350",
            "1 053",
            "368 550",
            "",
            "CV",
            "200",
            "1 248",
            "249 600",
            "",
            "CV",
            "618 150"
          ],
          [
            "**MCV**",
            "",
            "",
            "263 250",
            "",
            "MCV",
            "",
            "",
            "255 840",
            "",
            "MCV",
            "519 090"
          ],
          [
            "**CF**",
            "",
            "",
            "",
            "",
            "CF",
            "",
            "",
            "",
            "",
            "CF",
            "410 000"
          ],
          [
            "**R**",
            "",
            "",
            "",
            "",
            "R",
            "",
            "",
            "",
            "",
            "R",
            "109 090"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Partie 3**"
      },
      {
        "type": "p",
        "text": "**4. Rédiger un argumentaire afin de conseiller le directeur général du Parc du Bocage sur d’éventuelles décisions à prendre.**"
      },
      {
        "type": "p",
        "text": "Le directeur général du Parc du Bocage a confié au contrôleur de gestion, nouvellement nommé, une étude de profitabilité. Le parc se compose de cottages de plusieurs gammes : élémentaires, confort et VIP."
      },
      {
        "type": "p",
        "text": "Le cottage élémentaire semble être une activité non rentable. Avec de la publicité, celle-ci le deviendrait. Il serait donc opportun d’activer ce levier pour avoir davantage de réservations. De plus, aux yeux des différents indicateurs du risque d’exploitation, cette option est à privilégier. La marge de sécurité progresse et l’indice de prélèvement baisse de 5 points."
      },
      {
        "type": "p",
        "text": "Concernant les cottages individuels VIP et confort, plusieurs stratégies ont été étudiées."
      },
      {
        "type": "p",
        "text": "La situation initiale présente un résultat global positif de 87 250 €."
      },
      {
        "type": "p",
        "text": "Les charges fixes étant constantes, il est préférable de comparer les marges sur coûts variables prévisionnelles. La marge globale actuelle est de 497 250 €."
      },
      {
        "type": "p",
        "text": "Afin d’optimiser la politique de prix et le résultat d’exploitation du Parc du Bocage, il a été envisagé plusieurs scénarios :"
      },
      {
        "type": "p",
        "text": "– scénario A : une augmentation du prix du cottage VIP de 10 % entraîne une hausse de la marge globale de l’entreprise de 79 502 €."
      },
      {
        "type": "p",
        "text": "– scénario B : une baisse de prix du cottage VIP de 72 € entraîne une marge sur coûts variables de 393 319 €. La réservation de cottages VIP baisse d’autant plus avec cette stratégie que le résultat global devient négatif de 16 681 €."
      },
      {
        "type": "p",
        "text": "– scénario C : une augmentation du prix du cottage confort de 55 € entraîne un résultat global de 109 090 €."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion peut conseiller au dirigeant la stratégie A alliée à la publicité agressive sur les réseaux sociaux."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion pourra continuer son analyse en détaillant davantage les coûts, la saisonnalité… Il pourrait également entamer une étude de la démarche budgétaire de l’entreprise le Parc du Bocage."
      }
    ]
  },
  {
    "id": "ex8",
    "label": "C4.4",
    "title": "Gaspard",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "La société Gaspard souhaite analyser la profitabilité de son produit phare : la balançoire Bintje, un kit à monter soi-même. Le bois, fourni par un grossiste situé à côté de l’usine, est scié pour réaliser les éléments, puis percé afin d’aménager les trous destinés à recevoir la visserie. M. Gaspard s’interroge sur la profitabilité des balançoires et se pose la question d’un éventuel investissement."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer les coûts, marges et le résultat du premier trimestre en présentant un compte de résultat différentiel.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer et interpréter trois indicateurs du risque d’exploitation.*"
      },
      {
        "type": "p",
        "text": "*3. Calculer les coûts, les marges et le résultat du premier trimestre en présentant un compte de résultat différentiel dans le cadre du projet d’investissement.*"
      },
      {
        "type": "p",
        "text": "*4. Déterminer et interpréter le seuil de rentabilité en avenir aléatoire.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Données comptables liées à l’exploitation (premier trimestre N)**"
      },
      {
        "type": "p",
        "text": "Ces données concernent la balançoire Bintje pour le premier trimestre N."
      },
      {
        "type": "p",
        "text": "1 500 balançoires ont été vendues au prix unitaire de 220 €. Les charges suivantes ont été constatées :"
      },
      {
        "type": "p",
        "text": "**•**consommation de 0,3 m³ de bois à 325 € le m³ ;"
      },
      {
        "type": "p",
        "text": "**•**chaque balançoire est livrée avec un kit de visserie acheté 15 € pièce ;"
      },
      {
        "type": "p",
        "text": "**•**des charges variables diverses représentent 32 € par balançoire ;"
      },
      {
        "type": "p",
        "text": "**•**les charges fixes s’élèvent à 50 000 €."
      },
      {
        "type": "p",
        "text": "**Document 2 — Informations sur l’investissement envisagé (premier trimestre N)**"
      },
      {
        "type": "p",
        "text": "L’investissement envisagé est une modernisation de l’atelier de sciage permettant principalement de réduire les chutes de bois. En plus des gains espérés en termes de rentabilité, cela contribue à la volonté de la société Gaspard de s’inscrire dans une logique de responsabilité sociétale."
      },
      {
        "type": "p",
        "text": "Le projet a les caractéristiques suivantes :"
      },
      {
        "type": "p",
        "text": "**•**la consommation de bois est réduite à 0,05 m³ par balançoire ;"
      },
      {
        "type": "p",
        "text": "**•**les charges variables diverses sont également réduites à hauteur de 1 € par balançoire ;"
      },
      {
        "type": "p",
        "text": "**•**les charges fixes supplémentaires s’élèvent à 20 000 € par trimestre ;"
      },
      {
        "type": "p",
        "text": "**•**le chiffre d’affaires reste inchangé."
      },
      {
        "type": "p",
        "text": "**Document 3 — Analyse en avenir aléatoire (premier trimestre N)**"
      },
      {
        "type": "p",
        "text": "Suite à une étude de marché, on estime que le nombre de balançoires vendues par trimestre suit une loi normale de moyenne 1 500 et d’écart-type 600. On considère que l’investissement permettra d’obtenir une marge sur coût variable de 90 € par balançoire et que les charges fixes seraient de 70 000 €. Le prix de vente reste inchangé."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts, marges et le résultat du premier trimestre en présentant un compte de résultat différentiel.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**Coût unitaire**",
          "**Total**",
          "**Taux**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "1 500",
            "220",
            "330 000",
            ""
          ],
          [
            "**Charges variables**",
            "",
            "",
            "216 750",
            ""
          ],
          [
            "**Achat de bois**",
            "450",
            "325",
            "146 250",
            ""
          ],
          [
            "**Achat de visserie**",
            "1 500",
            "15",
            "22 500",
            ""
          ],
          [
            "**Charges variables diverses**",
            "1 500",
            "32",
            "48 000",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "1 500",
            "76",
            "113 250",
            "34,32%"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "50 000",
            ""
          ],
          [
            "**Résultat d’exploitation**",
            "",
            "",
            "63 250",
            "19,17%"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter trois indicateurs du risque d’exploitation.**"
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité est le chiffre d’affaires (CA) pour lequel l’entreprise couvre la totalité de ses charges (charges variables et charges fixes), dégageant ainsi un résultat nul. Il s’élève à 145 688 € et correspond à 663 balançoires."
      },
      {
        "type": "p",
        "text": "La marge de sécurité (MS) correspond à l’écart entre le chiffre d’affaires obtenu et le seuil de rentabilité. Elle s’élève à 184 312 €. La marge de sécurité est importante."
      },
      {
        "type": "p",
        "text": "L’indice de sécurité (IS) correspond à la marge de sécurité rapportée au chiffre d’affaires. L’IS permet de déterminer la tolérance de variation de chiffre d’affaires avant de se retrouver en perte. L’entreprise peut subir une perte de 55,85 % en étant toujours profitable. La marge de sécurité est donc importante."
      },
      {
        "type": "p",
        "text": "Le levier opérationnel (LO) mesure l’impact d’une variation du CAHT sur le résultat d’exploitation. Cette sensibilité est fonction de la structure des charges (charges variables/charges fixes). Plus les charges fixes sont importantes, plus le risque est grand. Le coefficient obtenu est un coefficient multiplicateur."
      },
      {
        "type": "p",
        "text": "Ici, LO = 1,79. Si le chiffre d’affaires augmente de 10 %, alors le résultat d’exploitation progressera de 17,9 %."
      },
      {
        "type": "p",
        "text": "Si le chiffre d’affaires baisse de 10 %, alors le résultat d’exploitation diminuera de 17,9 %."
      },
      {
        "type": "p",
        "text": "Le risque d’exploitation de la société Gaspard apparaît limité et maîtrisé."
      },
      {
        "type": "p",
        "text": "**3. Calculer les coûts, les marges et le résultat du premier trimestre en présentant un compte de résultat différentiel dans le cadre du projet d’investissement.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**Coût unitaire (en €)**",
          "**Total (en €)**",
          "**Taux**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "1 500",
            "220",
            "330 000",
            ""
          ],
          [
            "**Charges variables**",
            "",
            "",
            "190 875",
            ""
          ],
          [
            "**Achat de bois**",
            "375",
            "325",
            "121 875",
            ""
          ],
          [
            "**Achat de visserie**",
            "1 500",
            "15",
            "22 500",
            ""
          ],
          [
            "**Charges variables diverses**",
            "1 500",
            "31",
            "46 500",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "1 500",
            "93",
            "139 125",
            "42,16%"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "70 000",
            ""
          ],
          [
            "**Résultat d’exploitation**",
            "",
            "",
            "69 125",
            "20,95%"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat d’exploitation progresse, de même que le risque du fait de l’accroissement des charges fixes de 20 000 €, ce qui augmente le seuil de rentabilité (6 jours). Les autres indicateurs confirment cette montée du risque. Ceci dit, le risque, même s’il augmente, reste très faible. L’investissement est donc souhaitable puisqu’il conduit à une amélioration du résultat et à une réduction des pertes de bois."
      },
      {
        "type": "p",
        "text": "**4. Déterminer et interpréter le seuil de rentabilité en avenir aléatoire.**"
      },
      {
        "type": "p",
        "text": "Étape 1 : détermination des paramètres de la loi suivie par le résultat."
      },
      {
        "type": "p",
        "text": "Q → 𝒩(1 500 ; 600)."
      },
      {
        "type": "p",
        "text": "Le résultat est une variable aléatoire (R) qui est une combinaison linéaire de la variable aléatoire Q qui représente les quantités vendues."
      },
      {
        "type": "p",
        "text": "R = 90 Q – 70 000"
      },
      {
        "type": "p",
        "text": "On détermine l’espérance et la variance de la variable aléatoire résultat (R) :"
      },
      {
        "type": "p",
        "text": "E(R) = 90 × E(Q) – 70 000"
      },
      {
        "type": "p",
        "text": "V(R) = 902 × V(Q)"
      },
      {
        "type": "p",
        "text": "σ(R) = 90 σ (Q)."
      },
      {
        "type": "p",
        "text": "Donc R → 𝒩(65 000 ; 54 000)."
      },
      {
        "type": "p",
        "text": "Étape 2 : calcul de la probabilité d’atteindre le seuil de rentabilité."
      },
      {
        "type": "p",
        "text": "•Méthode 1 : On cherche P( R > 0)."
      },
      {
        "type": "p",
        "text": "On centre et on réduit."
      },
      {
        "type": "p",
        "text": "On note T la variable aléatoire centrée réduite."
      },
      {
        "type": "p",
        "text": "P(T > (0 – 65 000)/54 000)"
      },
      {
        "type": "p",
        "text": "P(T > – 1,2) = P(T < 1,2)"
      },
      {
        "type": "p",
        "text": "Sur la table, on peut lire que la valeur correspond à une probabilité de 88,5 %."
      },
      {
        "type": "p",
        "text": "•Méthode 2 : On détermine le seuil de rentabilité en quantité."
      },
      {
        "type": "p",
        "text": "Pour atteindre le seuil de rentabilité, il faut vendre 70 000 ÷ 90, soit 778 balançoires."
      },
      {
        "type": "p",
        "text": "On cherche P(Q > 778)."
      },
      {
        "type": "p",
        "text": "On centre et on réduit."
      },
      {
        "type": "p",
        "text": "On note T la variable aléatoire centrée réduite."
      },
      {
        "type": "p",
        "text": "P(T > (778 – 1 500)/600)"
      },
      {
        "type": "p",
        "text": "P(T > – 1,2) = P(T < 1,2)"
      },
      {
        "type": "p",
        "text": "Sur la table, on peut lire que la valeur correspond à une probabilité de 88,5 %."
      },
      {
        "type": "p",
        "text": "Étape 3 : conclusion sur l’opportunité de réaliser cet investissement."
      },
      {
        "type": "p",
        "text": "La probabilité d’atteindre le seuil de rentabilité est très élevée, ce qui confirme le caractère peu risqué de l’investissement."
      },
      {
        "type": "p",
        "text": "Cet investissement est donc souhaitable."
      }
    ]
  },
  {
    "id": "ex9",
    "label": "C4.5",
    "title": "Burgerhôte",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion du groupe Burgerhôte s’intéresse au nouveau complexe d’hôtel-restaurant implanté depuis un an sur l’aire d’autoroute « Les trois sources », car il doit rédiger un rapport sur les résultats de l’année écoulée pour la direction du groupe. Il étudie différents points significatifs. Contrairement à la politique du groupe, le concept est ici plutôt celui d’une restauration rapide et bon marché pour une clientèle de passage. Le contrôleur de gestion s’intéresse particulièrement à la mise en place de menus enfants dans le restaurant."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer les coûts, les marges et le résultat prévisionnels pour la première année en présentant un compte de résultat différentiel.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer et interpréter des indicateurs du risque d’exploitation.*"
      },
      {
        "type": "p",
        "text": "*3. Déterminer et interpréter le seuil de rentabilité en avenir aléatoire à partir du résultat dégagé par les menus enfants.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Mise en place de menus enfants**"
      },
      {
        "type": "p",
        "text": "Proposés à un prix forfaitaire de 12 €, les menus enfants comprendraient un plat complet, une boisson et un dessert glacé."
      },
      {
        "type": "p",
        "text": "**•**Prévisions des ventes la 1re année : 40 menus vendus en moyenne par jour, à raison de 20 jours d’exploitation en moyenne par mois, pour 10 mois d’activité par an."
      },
      {
        "type": "p",
        "text": "**•**Taux moyen de charges variables (matières premières) : 1/3, soit 33,33 %."
      },
      {
        "type": "p",
        "text": "**•**Charges fixes annuelles prévisionnelles : 60 000 €."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion effectue des prévisions prudentes en ne considérant que les 5 jours les plus chargés de la semaine."
      },
      {
        "type": "p",
        "text": "**Document 2 — Paramètres de la loi normale des menus enfants**"
      },
      {
        "type": "p",
        "text": "La loi normale du résultat réalisé sur les menus enfants a pour paramètres (4 000 ; 16 000)."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts, les marges et le résultat prévisionnels pour la première année en présentant un compte de résultat différentiel.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Quantité**",
          "**Coût unitaire**",
          "**Total**",
          "**Taux**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "8 000",
            "12",
            "96 000",
            ""
          ],
          [
            "**Charges variables**",
            "8 000",
            "4",
            "32 000",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "8 000",
            "8",
            "64 000",
            "66,67 %"
          ],
          [
            "**Charges fixes**",
            "",
            "",
            "60 000",
            ""
          ],
          [
            "**Résultat d’exploitation**",
            "",
            "",
            "4 000",
            "4,17 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La quantité de 8 000 est obtenue par : 40 × 20 × 10 = 8 000."
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs du risque d’exploitation.**"
      },
      {
        "type": "table",
        "headers": [
          "**Levier opérationnel**",
          ""
        ],
        "rows": [
          [
            "**Seuil de rentabilité**",
            ""
          ],
          [
            "**Marge de sécurité**",
            "MS = CA – SR = 96 000 – 89 996 = 6 004 €"
          ],
          [
            "**Indice de sécurité**",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité est le chiffre d’affaires (CA) pour lequel l’entreprise couvre la totalité de ses charges (charges variables et charges fixes), dégageant ainsi un résultat nul. Il s’élève à 89 996 € et correspond à 7 500 menus."
      },
      {
        "type": "p",
        "text": "La marge de sécurité (MS) correspond à l’écart entre le chiffre d’affaires obtenu et le seuil de rentabilité. Elle s’élève à 6 004 €."
      },
      {
        "type": "p",
        "text": "La marge de sécurité est peu importante."
      },
      {
        "type": "p",
        "text": "L’indice de sécurité (IS) correspond à la marge de sécurité rapportée au chiffre d’affaires. L’IS permet de déterminer la tolérance de variation de chiffre d’affaires avant de se retrouver en perte. L’entreprise peut subir une perte de 6,25 % en étant toujours profitable. La marge de sécurité est donc très faible."
      },
      {
        "type": "p",
        "text": "Le levier opérationnel (LO) mesure l’impact d’une variation du CAHT sur le résultat d’exploitation. Cette sensibilité est fonction de la structure des charges (charges variables/charges fixes). Plus les charges fixes sont importantes, plus le risque est grand. Le coefficient obtenu est un coefficient multiplicateur."
      },
      {
        "type": "p",
        "text": "Ici, LO = 16. Si le chiffre d’affaires augmente de 1 %, alors le résultat d’exploitation progressera de 16 %."
      },
      {
        "type": "p",
        "text": "Si le chiffre d’affaires baisse de 1 %, alors le résultat d’exploitation diminuera de 16 %."
      },
      {
        "type": "p",
        "text": "Le risque d’exploitation de la société Burgerhôte apparaît élevé."
      },
      {
        "type": "p",
        "text": "**3. Déterminer et interpréter le seuil de rentabilité en avenir aléatoire à partir du résultat dégagé par les menus enfants.**"
      },
      {
        "type": "p",
        "text": "•Calcul de la probabilité d’atteindre le seuil de rentabilité"
      },
      {
        "type": "p",
        "text": "On cherche P(R > 0)."
      },
      {
        "type": "p",
        "text": "On centre et on réduit."
      },
      {
        "type": "p",
        "text": "On note T la variable aléatoire centrée réduite."
      },
      {
        "type": "p",
        "text": "Sur la table, on peut lire que cette valeur correspond à une probabilité de 59,87 %."
      },
      {
        "type": "p",
        "text": "On peut également directement utiliser la calculatrice."
      },
      {
        "type": "p",
        "text": "•Conclusion"
      },
      {
        "type": "p",
        "text": "La probabilité d’atteindre le seuil de rentabilité est moyenne, ce qui confirme le risque important pour l’entreprise."
      }
    ]
  },
  {
    "id": "ex10",
    "label": "C4.6",
    "title": "Isno Boulangerie",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "La société Baro propose aux boulangers d’acquérir une boulangerie modulaire : la solution « Isno Boulangerie ». Parfaite pour se lancer ou pour ouvrir une deuxième affaire dans une zone de grand passage, cette solution économique (moins de 200 000 €) permet aux boulangers de se lancer avec un budget limité. La préparation d’un argumentaire commercial est envisagée afin de rassurer les acquéreurs sur la profitabilité future de leur activité. Le dirigeant de Baro souhaite démontrer aux boulangers qu’ils disposent d’un outil performant où rien n’est laissé au hasard, y compris le budget qui est sans surprise et qui leur permet d’atteindre très rapidement leur seuil de rentabilité."
      },
      {
        "type": "p",
        "text": "L’analyse de la profitabilité de la solution « Isno Boulangerie » au cours de la première année d’exploitation fait partie de l’accompagnement des acquéreurs de la solution « Isno Boulangerie »."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter les coûts, marges et résultats prévisionnels liés à la solution « Isno Boulangerie ».*"
      },
      {
        "type": "p",
        "text": "*2. Calculer et interpréter des indicateurs de risque d’exploitation associés à l’acquisition de la solution « Isno Boulangerie ».*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger un argumentaire critique pour le dirigeant de la société Baro qui doit convaincre les prospects de la solution « Isno Boulangerie » sachant que l’argument premier est que l’affaire est profitable à partir de 1 000 habitants dans la zone de chalandise.*"
      },
      {
        "type": "p",
        "text": "*4. Déterminer et interpréter le seuil de rentabilité aléatoire, sachant qu’un chiffre d’affaires de 165 000 € environ permet de couvrir les charges d’exploitation.*"
      },
      {
        "type": "p",
        "text": "*5. Déterminer et interpréter le chiffre d’affaires qu’un artisan boulanger, acquéreur de la solution « Isno Boulangerie », dépassera avec une probabilité de 95 %.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et un résultat dans un contexte donné• Calculer et interpréter des indicateurs du risque d’exploitation afin d’identifier des problèmes et de proposer des solutions de gestion adaptées• Déterminer et interpréter le seuil de rentabilité en avenir aléatoire."
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts, marges et résultats prévisionnels liés à la solution « Isno Boulangerie ».**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Détail des calculs**",
          "**Total**",
          "**Taux**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "",
            "180 000",
            ""
          ],
          [
            "**Charges variables**",
            "68 400",
            ""
          ],
          [
            "**Matières premières**",
            "0,26 × 180 000",
            "46 800",
            ""
          ],
          [
            "**Eau et énergie**",
            "0,032 × × 180 00034",
            "4 320",
            ""
          ],
          [
            "**Autres achats externes**",
            "0,16 × 0,60 × 180 000",
            "17 280",
            ""
          ],
          [
            "**Marge sur coût variable**",
            "",
            "111 600",
            "62,00 %"
          ],
          [
            "**Charges fixes**",
            "107 480",
            ""
          ],
          [
            "**Charges de personnel**",
            "2 × 35 × 52 × 11 × 1,42",
            "56 857",
            ""
          ],
          [
            "**Eau et énergie**",
            "0,032 × × 180 00014",
            "1 440",
            ""
          ],
          [
            "**Autres achats externes**",
            "0,16 × 0,40 × 180 000",
            "11 520",
            ""
          ],
          [
            "**ITVA**",
            "",
            "3 240",
            ""
          ],
          [
            "**Dotations aux amortissements**",
            "",
            "34 423",
            ""
          ],
          [
            "**Résultat d’exploitation**",
            "",
            "4 120",
            "2,29 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter des indicateurs de risque d’exploitation associés à l’acquisition de la solution « Isno Boulangerie ».**"
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité est le chiffre d’affaires (CA) pour lequel l’entreprise couvre la totalité de ses charges (charges variables et charges fixes), dégageant ainsi un résultat nul. Il s’élève à 173 355 €."
      },
      {
        "type": "p",
        "text": "Le point mort est la date à laquelle l’activité commence à être profitable. Les 280 jours se rapprochent dangereusement des 290 jours d’ouverture."
      },
      {
        "type": "p",
        "text": "La marge de sécurité (MS) correspond à l’écart entre le chiffre d’affaires obtenu et le seuil de rentabilité. Elle s’élève à 6 645 €. La marge de sécurité s’avère peu importante."
      },
      {
        "type": "p",
        "text": "L’indice de sécurité (IS) correspond à la marge de sécurité rapportée au chiffre d’affaires. L’IS permet de déterminer la tolérance de variation de chiffre d’affaires avant de se retrouver en perte. L’entreprise peut subir une perte de 3,69 % en étant toujours profitable. La marge de sécurité est donc très faible."
      },
      {
        "type": "p",
        "text": "Le levier opérationnel (LO) mesure l’impact d’une variation du CAHT sur le résultat d’exploitation. Cette sensibilité est fonction de la structure des charges (charges variables/charges fixes). Plus les charges fixes sont importantes, plus le risque est grand. Le coefficient obtenu est un coefficient multiplicateur."
      },
      {
        "type": "p",
        "text": "Ici, LO = 27. Si le chiffre d’affaires augmente de 1 %, alors le résultat d’exploitation progressera de 27 %."
      },
      {
        "type": "p",
        "text": "Si le chiffre d’affaires baisse de 1 %, alors le résultat d’exploitation diminuera de 27 %."
      },
      {
        "type": "p",
        "text": "Le risque d’exploitation du projet « Isno Boulangerie » apparaît conséquent. Le poids des charges fixes en est la cause."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire critique pour le dirigeant de la société Baro qui doit convaincre les prospects de la solution « Isno Boulangerie », sachant que l’argument premier est que l’affaire est profitable à partir de 1 000 habitants dans la zone de chalandise.**"
      },
      {
        "type": "p",
        "text": "Dans une zone de chalandise de 1 000 habitants, on compte 435 ménages (1 000 ÷ 2,30). Ces ménages dépensent en moyenne 665 € par an en pain et produits de boulangerie. Les boulangeries détenant 60 % des parts de marché, le chiffre d’affaires prévisionnel est donc de 202 493 € (665 × 435 × 70 %). Ce chiffre d’affaires est supérieur au seuil de rentabilité prévisionnel calculé précédemment ainsi qu’au chiffre d’affaires prévisionnel."
      },
      {
        "type": "p",
        "text": "Le compte de résultat différentiel et les indicateurs du risque d’exploitation fournissent des outils d’aide à la décision simples et aident à l’évaluation du risque par les gestionnaires (en l’occurrence, les boulangers). Le commercial peut aisément proposer des simulations aux boulangers pour leur démontrer la profitabilité de la solution « Isno Boulangerie »."
      },
      {
        "type": "p",
        "text": "Les éléments calculés font référence à des éléments correspondant à la réalité du métier des boulangers : en boulangerie, les charges variables, proportionnelles au niveau d’activité, correspondent aux achats de matières premières (farine, oeufs, beurre, sucre, ovoproduits, nappages...). Les charges fixes sont indépendantes du niveau d’activité : c’est le cas des charges d’amortissement, des loyers..."
      },
      {
        "type": "p",
        "text": "Les intérêts de la solution « Isno Boulangerie » sont nombreux, notamment pour la gestion d’une boulangerie. Le modèle fournit un cadre pertinent pour de nombreuses décisions de gestion, comme pour évaluer le niveau de profitabilité à partir d’un chiffre d’affaires et de calculer ainsi le seuil de rentabilité pour dégager un résultat positif. Le seuil de rentabilité est un indicateur essentiel, notamment lors de la première année d’exploitation après la création d’entreprise. Le seuil de rentabilité peut être complété par le calcul du point mort, qui n’est autre que l’expression du seuil de rentabilité en un nombre de jours."
      },
      {
        "type": "p",
        "text": "Le dirigeant a prévu un scénario pessimiste. Nous pouvons lui suggérer de s’appuyer exactement sur les chiffres de l’Insee pour présenter une analyse plus réaliste et montrer un résultat meilleur."
      },
      {
        "type": "p",
        "text": "Il conviendra d’alerter les boulangers sur la nécessité d’évaluer régulièrement leurs charges variables et de surveiller de près les charges fixes qui gonflent le risque d’exploitation."
      },
      {
        "type": "p",
        "text": "**4. Déterminer et interpréter le seuil de rentabilité aléatoire sachant qu’un chiffre d’affaires de 165 000 € environ permet de couvrir les charges d’exploitation.**"
      },
      {
        "type": "p",
        "text": "On cherche la probabilité que le chiffre d’affaires X soit supérieur à 165 milliers d’euros."
      },
      {
        "type": "p",
        "text": "π(0,68) = 0,7517 = 75,17 %"
      },
      {
        "type": "p",
        "text": "Le seuil de rentabilité a donc une probabilité de 75,17 % d’être dépassé."
      },
      {
        "type": "p",
        "text": "**5. Déterminer et interpréter le chiffre d’affaires qu’un artisan boulanger, acquéreur de la solution « Isno Boulangerie », dépassera avec une probabilité de 95 %.**"
      },
      {
        "type": "p",
        "text": "On cherche x tel que : P(X > x) = 0,95"
      },
      {
        "type": "p",
        "text": "On lit dans la table :"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**"
        ],
        "rows": [
          [
            "**1,6**",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505"
          ]
        ]
      },
      {
        "type": "p",
        "text": "0,95 = π(t) avec t = ((1,65 – 1,64) /2) ; 0,95 = π(1,645)"
      },
      {
        "type": "p",
        "text": "Or : P(T < 1,645) = P(T > –1,645) = 0,95"
      },
      {
        "type": "p",
        "text": "On a donc ; P(X > x) = P(T > –1,645)"
      },
      {
        "type": "p",
        "text": "Soit –1,645 = ((x - 220)/2); x = 180 – (22 × 1,645) = 143,81"
      },
      {
        "type": "p",
        "text": "Il y a donc 95 chances sur 100 pour que le chiffre d’affaires réalisé la première année dépasse 143,81 milliers d’euros."
      }
    ]
  }
];
