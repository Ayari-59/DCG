// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A10.1",
    "title": "Vandal",
    "statement": [
      {
        "type": "p",
        "text": "Soit l’historique des ventes de l’entreprise Vandal sur trois années. Le dirigeant souhaite prévoir ses ventes de l’année N+1 à l’aide d’une fonction affine"
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
            "**N–2**",
            "1 054",
            "585",
            "724",
            "858"
          ],
          [
            "**N–1**",
            "1 361",
            "505",
            "775",
            "913"
          ],
          [
            "**N**",
            "1 560",
            "417",
            "826",
            "1 122"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Choisir et appliquer la méthode adaptée aux calculs de prévisions commerciales pour conseiller le dirigeant.**"
      },
      {
        "type": "p",
        "text": "**Prévisions commerciales et budget des ventes**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Choisir et appliquer la méthode adaptée aux calculs de prévisions commerciales pour conseiller le dirigeant.**"
      },
      {
        "type": "p",
        "text": "Étape 1. Trouver une fonction ajustée qui extrapole les tendances"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Trimestre 1**",
          "**Trimestre 2**",
          "**Trimestre 3**",
          "**Trimestre 4**",
          "**Total**"
        ],
        "rows": [
          [
            "**N–2**",
            "1 054",
            "585",
            "724",
            "858",
            "3 221"
          ],
          [
            "**N–1**",
            "1 361",
            "505",
            "775",
            "913",
            "3 554"
          ],
          [
            "**N**",
            "1 560",
            "417",
            "826",
            "1 122",
            "3 925"
          ],
          [
            "**Total**",
            "3 975",
            "1 507",
            "2 325",
            "2 893",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les ventes semblent linéaires sur les trois années."
      },
      {
        "type": "p",
        "text": "Un ajustement linéaire semble donc adapté."
      },
      {
        "type": "p",
        "text": "La droite de régression linéaire admet pour équation : y = 352x + 2 862,7"
      },
      {
        "type": "p",
        "text": "Pour l’année 4, on obtient des ventes de 4 270,7."
      },
      {
        "type": "p",
        "text": "Étape 2. Déterminer les coefficients saisonniers à appliquer"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Moyenne des trimestres**",
          "**Coefficients saisonniers**"
        ],
        "rows": [
          [
            "**T1**",
            "3 975 ÷ 3",
            "1 325",
            "1 325 ÷ 891,5",
            "1,49"
          ],
          [
            "**T2**",
            "1 507 ÷ 3",
            "502",
            "502 ÷ 891,5",
            "0,56"
          ],
          [
            "**T3**",
            "2 325 ÷ 3",
            "775",
            "775 ÷ 891,5",
            "0,87"
          ],
          [
            "**T4**",
            "2 893 ÷ 3",
            "964",
            "964 ÷ 891,5",
            "1,08"
          ],
          [
            "**Total**",
            "",
            "3 567",
            "",
            "4"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La moyenne générale trimestrielle s’élève à 3 567 ÷ 4 = 891,5."
      },
      {
        "type": "p",
        "text": "Étape 3. Déterminer les ventes prévisionnelles pour N+1"
      },
      {
        "type": "p",
        "text": "La prévision des ventes pour N+1 est estimée à 4 271 (voir l’étape 1)."
      },
      {
        "type": "p",
        "text": "Par trimestre, cela équivaut à 1 068 k€ de ventes par trimestre (4 271 ÷ 4)."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**T1 N+1**",
          "**T2 N+1**",
          "**T3 N+1**",
          "**T4 N+1**"
        ],
        "rows": [
          [
            "**Coefficient saisonnier**",
            "1,49",
            "0,56",
            "0,87",
            "1,08"
          ],
          [
            "**Ventes prévisionnelles**",
            "1 587",
            "602",
            "928",
            "1 155"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex2",
    "label": "C10.1",
    "title": "Groupe Postal",
    "statement": [
      {
        "type": "p",
        "text": "Le Groupe Postal est une entreprise spécialisée dans la distribution de courriers et de colis."
      },
      {
        "type": "p",
        "text": "Le directeur général, M. Navatin, aimerait que vous l’aidiez à effectuer des prévisions pour les deux années à venir à l’aide de méthodes statistiques. Il se demande si la tendance qui se profile est claire. Il a l’impression que son activité baisse d’années en années."
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales sur deux ans de l’entreprise Le Groupe Postal pour conseiller le dirigeant, M. Navatin.**"
      },
      {
        "type": "p",
        "text": "**Évolution du nombre de courriers**"
      },
      {
        "type": "table",
        "headers": [
          "**Années**",
          "**1**",
          "**2**",
          "**3**",
          "**4**",
          "**5**",
          "**6**",
          "**7**",
          "**8**",
          "**9**",
          "**10**",
          "**11**"
        ],
        "rows": [
          [
            "**Ventes (en milliards de lettres)**",
            "1,45",
            "1,4",
            "1,31",
            "1,31",
            "1,27",
            "1,2",
            "1,18",
            "1,11",
            "1,11",
            "1,09",
            "1,06"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales sur deux ans de l’entreprise Le Groupe Postal pour conseiller le dirigeant, monsieur Navatin.**"
      },
      {
        "type": "p",
        "text": "Voir la fiche E du manuel."
      },
      {
        "type": "p",
        "text": "M. Navatin a extrait 11 ans de données commerciales. Les ventes connaissent une baisse régulière depuis 11 ans."
      },
      {
        "type": "p",
        "text": "Visuellement, l’ajustement fait penser à un ajustement linéaire. Il faut le confirmer avec le calcul de coefficients de corrélation."
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Puissance**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "– 0,983",
            "– 0,9875",
            "– 0,962"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = – 0,039x + 1,4598",
            "Y = 1,4743 × 0,969x",
            "Y = 1,5167⋅*x* -0,1368"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’analyse des données semble privilégier une croissance linéaire ou exponentielle (coefficients de corrélation proches de – 1). C’est un choix arbitraire du contrôleur de gestion. L’ajustement par une fonction exponentielle semble légèrement meilleur."
      },
      {
        "type": "p",
        "text": "Prévisions commerciales :"
      },
      {
        "type": "table",
        "headers": [
          "**AjustementsAnnées**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Moyenne**"
        ],
        "rows": [
          [
            "**12**",
            "Y = ( – 0,039 × 12) + 1,4598 = 0,9918",
            "Y = 1,4743 × 0,96912 = 1,01",
            "1"
          ],
          [
            "**13**",
            "0,9528",
            "0,979",
            "0,96"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’ajustement exponentiel (comme l’ajustement linéaire) prévoit que l’activité courrier va encore baisser les années suivantes. M. Navatin pourra s’appuyer sur ces prévisions des quantités qui ne prennent pas en compte les prévisions de prix, de la concurrence, de l’environnement économique. Nous restons dans une démarche prévisionnelle. Toutefois, la baisse tendancielle se confirme avec un environnement de plus en plus digitalisé. Nous pouvons suggérer à M. Navatin de diversifier son activité pour préparer le déclin du courrier."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "C10.2",
    "title": "Daimler",
    "statement": [
      {
        "type": "p",
        "text": "Le dirigeant de la société Daimler, M. Elon, souhaite prévoir ses ventes pour les trois prochaines années. Il s’appuie pour cela sur 10 ans de données extraites par son contrôleur de gestion."
      },
      {
        "type": "p",
        "text": "En tant que stagiaire de M. Elon, vous devez lui proposer une méthode statistique fiable pour prévoir ses ventes. Vous vous appuierez sur des graphiques, puis vous calculerez des prévisions avec plusieurs hypothèses."
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales sur 3 ans de l’entreprise Daimler pour conseiller le dirigeant, M. Elon.**"
      },
      {
        "type": "p",
        "text": "**Évolution du nombre de véhicules Daimler vendus**"
      },
      {
        "type": "table",
        "headers": [
          "**Années**",
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
            "**Nombre de véhicules vendus (en milliers)**",
            "772",
            "690",
            "710",
            "695",
            "625",
            "640",
            "637",
            "708",
            "757",
            "797"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales sur 3 ans de l’entreprise Daimler pour conseiller le dirigeant, M. Elon.**"
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion a extrait 10 ans de données commerciales. Les ventes ont connu des fluctuations importantes et semblent avoir repris un rythme normal de croissance depuis l’année 5."
      },
      {
        "type": "p",
        "text": "En effet, lorsqu’on calcule les coefficients de corrélation, ils sont très éloignés de –1 et 1, ce qui signifie que les ajustements sont de très mauvaise qualité."
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Puissance**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,1635",
            "0,1501",
            "– 0,1"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Au vu du graphique, il semble judicieux d’effectuer un ajustement à partir de l’année 5."
      },
      {
        "type": "table",
        "headers": [
          "**Année**",
          "**Nombre de véhicules vendus (en milliers)**"
        ],
        "rows": [
          [
            "**5**",
            "625"
          ],
          [
            "**6**",
            "640"
          ],
          [
            "**7**",
            "637"
          ],
          [
            "**8**",
            "708"
          ],
          [
            "**9**",
            "757"
          ],
          [
            "**10**",
            "797"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Puissance**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,9558",
            "0,9578",
            "0,932"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = 36,6286x + 419,4",
            "Y = 467 × 1,053x",
            "Y = 333,46x0,3665"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’analyse des données semble privilégier une croissance linéaire ou exponentielle (coefficients de corrélation proches de –1 ou 1). C’est un choix arbitraire du contrôleur de gestion. La croissance exponentielle semble être un ajustement un peu plus juste."
      },
      {
        "type": "p",
        "text": "Prévisions commerciales :"
      },
      {
        "type": "table",
        "headers": [
          "**AjustementsAnnées**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Moyenne**"
        ],
        "rows": [
          [
            "**11**",
            "Y = (36,6286 × 11) + 419,4 = 822",
            "Y = 467 × 1,05311 = 824",
            "823"
          ],
          [
            "**12**",
            "859",
            "868",
            "864"
          ],
          [
            "**13**",
            "896",
            "914",
            "905"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’ajustement exponentiel semble plus optimiste que l’ajustement linéaire. Il paraît opportun de proposer des prévisions avec une moyenne des deux ajustements étant donnée la proximité des coefficients de corrélation. Monsieur Elon pourra s’appuyer sur ces prévisions des quantités, qui ne prennent pas en compte les prévisions de prix, de la concurrence, de l’environnement économique. Nous restons ici dans une démarche prévisionnelle."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "C10.3",
    "title": "Tisio",
    "statement": [
      {
        "type": "p",
        "text": "La dirigeante de la société Tisio, Mme Duri, souhaite prévoir ses ventes pour la prochaine année. Elle aimerait lancer une nouvelle calculatrice, la Tisio35. Elle dispose pour cela de 6 ans de données extraites sur le site de l’Insee."
      },
      {
        "type": "p",
        "text": "En tant qu’assistant de Mme Duri, vous lui proposez une analyse du marché sur 3 ans qui l’éclairera sur sa prise de décision."
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller Mme Duri.**"
      },
      {
        "type": "p",
        "text": "**Évolution de l’offre et de la demande de calculatrices en France**"
      },
      {
        "type": "table",
        "headers": [
          "**Années**",
          "**1**",
          "**2**",
          "**3**",
          "**4**",
          "**5**",
          "**6**"
        ],
        "rows": [
          [
            "**Demande (yi, en millions d’unités)**",
            "6,25",
            "4,9",
            "3,75",
            "2,75",
            "2,4",
            "2,25"
          ],
          [
            "**Offre (xi, en millions d’unités)**",
            "1,25",
            "1,3",
            "1,3",
            "1,5",
            "1,55",
            "1,6"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller madame Duri.**"
      },
      {
        "type": "p",
        "text": "La demande est représentée par le graphique suivant :"
      },
      {
        "type": "p",
        "text": "La tendance semble légèrement exponentielle."
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Puissance**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "– 0,958",
            "– 0,981",
            "– 0,983"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = – 0,814x + 6,567",
            "Y = 7,361 × 0,806x",
            "Y = 6,7565×x–0,6112"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’analyse des données semble privilégier une décroissance exponentielle ou puissance (coefficients de corrélation très proches de –1). C’est un choix arbitraire du contrôleur de gestion. L’ajustement puissance semble être un ajustement un peu plus juste."
      },
      {
        "type": "p",
        "text": "Prévisions de la demande"
      },
      {
        "type": "table",
        "headers": [
          "**Années**",
          "**Ajustement puissance**"
        ],
        "rows": [
          [
            "**7**",
            "Y = 6,7565×7‑0,6112 = 2,06"
          ],
          [
            "**8**",
            "1,90"
          ],
          [
            "**9**",
            "1,76"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’offre est représentée par le graphique suivant :"
      },
      {
        "type": "table",
        "headers": [
          "**Ajustements**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Puissance**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,959",
            "0,958",
            "0,906"
          ],
          [
            "**Équation de tendance annuelle**",
            "Y = 0,077x + 1,147",
            "Y = 1,165 × 1,056 x",
            "Y = 1,2023×x0,1453"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’analyse des données semble privilégier une croissance linéaire ou exponentielle (coefficients de corrélation proches de 1). C’est un choix arbitraire du contrôleur de gestion. La croissance linéaire semble être un ajustement un peu plus juste. On peut également faire une moyenne des deux ajustements."
      },
      {
        "type": "p",
        "text": "Prévisions de l’offre"
      },
      {
        "type": "table",
        "headers": [
          "**AjustementsAnnées**",
          "**Linéaire**",
          "**Exponentiel**",
          "**Moyenne**"
        ],
        "rows": [
          [
            "**7**",
            "Y = (0,077 × 7) + 1,147 = 1,686",
            "Y = 1,165 × 1,0567 = 1,706",
            "1,696"
          ],
          [
            "**8**",
            "1,763",
            "1,801",
            "1,782"
          ],
          [
            "**9**",
            "1,84",
            "1,902",
            "1,871"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les ajustements de l’offre et de la demande sur trois ans montrent que l’offre dépassera la demande à court terme. Mme Duri pourra s’appuyer sur ces prévisions qui ne prennent pas en compte les prévisions de prix. Toutefois, l’offre dépassant la demande, le prix de vente aura tendance à baisser. Nous conseillons à Mme Duri de ne pas s’engager sur le marché des calculatrices."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C10.4",
    "title": "Mavoibrot",
    "statement": [
      {
        "type": "p",
        "text": "Le dirigeant de la société Mavoibrot, M. Mavoibrot, pense qu’il est nécessaire d’élargir la gamme de produits proposée par son entreprise pour en accroître l’attractivité et élargir son marché. Il pense ainsi relancer la croissance de l’entreprise et en améliorer la rentabilité. M. Mavoibrot a décidé d’étudier le projet de lancement d’un disque dur destiné à équiper des élèves d’écoles, de collèges et de lycées. Une étude de marché, réalisée par un cabinet de consulting, vous a été confiée pour déterminer le prix psychologique."
      },
      {
        "type": "p",
        "text": "**À partir des résultats de l’enquête, identifier et interpréter le prix psychologique.**"
      },
      {
        "type": "p",
        "text": "**Résultats de l’étude de prix**"
      },
      {
        "type": "p",
        "text": "Le cabinet de consulting ayant réalisé l’étude de marché a interrogé un millier de clients potentiels sur divers aspects du produit projeté et sur le prix que ces personnes accepteraient de payer."
      },
      {
        "type": "p",
        "text": "Pour ce faire, il leur a été posé deux questions."
      },
      {
        "type": "p",
        "text": "• Question 1 : à quel prix n’achèteriez-vous pas ce produit en raison de son prix trop élevé ?"
      },
      {
        "type": "p",
        "text": "• Question 2 : à quel prix n’achèteriez-vous pas ce produit en raison d’un doute sur sa qualité ?"
      },
      {
        "type": "p",
        "text": "Les résultats de cette enquête sont résumés dans le tableau ci-dessous."
      },
      {
        "type": "table",
        "headers": [
          "**Prix public**",
          "**Exploitation des réponses**"
        ],
        "rows": [
          [
            "**(HT)**",
            "**Question 1**",
            "**Question 2**"
          ],
          [
            "**20 €**",
            "0",
            "1 000"
          ],
          [
            "**40 €**",
            "0",
            "610"
          ],
          [
            "**60 €**",
            "60",
            "350"
          ],
          [
            "**80 €**",
            "190",
            "200"
          ],
          [
            "**100 €**",
            "370",
            "100"
          ],
          [
            "**120 €**",
            "660",
            "20"
          ],
          [
            "**140 €**",
            "980",
            "0"
          ],
          [
            "**160 €**",
            "1 000",
            "0"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**À partir des résultats de l’enquête, identifier et interpréter le prix psychologique.**"
      },
      {
        "type": "p",
        "text": "Le prix psychologique est le prix acceptable par le plus grand nombre de clients. Il est obtenu par interrogation directe sous forme d’une fourchette de prix dont la limite supérieure correspond au prix au-delà duquel le produit est jugé trop cher et la limite inférieure au prix en deçà duquel le produit est jugé trop bon marché, donc présumé de mauvaise qualité."
      },
      {
        "type": "table",
        "headers": [
          "**Prix public (HT)**",
          "**Prix excessif (% cumulé croissant)**",
          "**Qualité insuffisante (% cumulé décroissant)**",
          "**Non- achat**",
          "**Taux d’acceptabilité**"
        ],
        "rows": [
          [
            "**20 €**",
            "0,00 %",
            "100,00 %",
            "100,00 %",
            "0,00 %"
          ],
          [
            "**40 €**",
            "0,00 %",
            "61,00 %",
            "61,00 %",
            "39,00 %"
          ],
          [
            "**60 €**",
            "6,00 %",
            "35,00 %",
            "41,00 %",
            "59,00 %"
          ],
          [
            "**80 €**",
            "19,00 %",
            "20,00 %",
            "39,00 %",
            "61,00 %"
          ],
          [
            "**100 €**",
            "37,00 %",
            "10,00 %",
            "47,00 %",
            "53,00 %"
          ],
          [
            "**120 €**",
            "66,00 %",
            "2,00 %",
            "68,00 %",
            "32,00 %"
          ],
          [
            "**140 €**",
            "98,00 %",
            "0,00 %",
            "98,00 %",
            "2,00 %"
          ],
          [
            "**160 €**",
            "100,00 %",
            "0,00 %",
            "100,00 %",
            "0,00 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Non-achat = somme des pourcentages cumulés"
      },
      {
        "type": "p",
        "text": "Taux d’acceptabilité = 100 % – % de non-achat"
      },
      {
        "type": "p",
        "text": "Le prix psychologique correspond au taux d’acceptabilité le plus élevé, soit 61 %, donnant un prix de 80 €. M. Mavoibrot devra veiller à ne trop s’éloigner de ce prix pour lancer ce produit."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C10.5",
    "title": "Sportgol",
    "statement": [
      {
        "type": "p",
        "text": "Le directeur commercial de la société Sportgol souhaite améliorer son système de pré-"
      },
      {
        "type": "p",
        "text": "visions de ventes en tenant compte d’une saisonnalité. Il aimerait chiffrer les ventes en volume, qui tiennent compte des variations saisonnières et par mois pour N+1, pour le département Camping. Compte tenu de l’expérience de l’entreprise, la composante tendancielle des ventes en volume est représentée par la relation Y = 3,3459 x + 1 453. Il doit construire le budget des ventes en volume et en valeur afin d’analyser les écarts sur ventes du mois de janvier N+1."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Appliquer une méthode adaptée aux calculs de prévisions demandés, pour construire le budget des ventes.**"
      },
      {
        "type": "p",
        "text": "**2. Rédiger une note de synthèse sur les écarts calculés du mois de janvier.**"
      },
      {
        "type": "p",
        "text": "**Volume de ventes réalisé au cours des trois derniers exercices**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Janv.**",
          "**Fév.**",
          "**Mars**",
          "**Av.**",
          "**Mai**",
          "**Juin**",
          "**Juill.**",
          "**Août**",
          "**Sept.**",
          "**Oct.**",
          "**Nov.**",
          "**Déc.**",
          "**Total**"
        ],
        "rows": [
          [
            "**N–2**",
            "650",
            "647",
            "1 739",
            "1 860",
            "2 013",
            "2 134",
            "2 200",
            "1 854",
            "1 736",
            "1 160",
            "754",
            "488",
            "17 235"
          ],
          [
            "**N–1**",
            "680",
            "684",
            "1 830",
            "1 970",
            "2 128",
            "2 270",
            "2 300",
            "1 960",
            "1 804",
            "1 278",
            "790",
            "520",
            "18 214"
          ],
          [
            "**N**",
            "710",
            "720",
            "1 920",
            "2 100",
            "2 230",
            "2 380",
            "2 410",
            "2 000",
            "1 890",
            "1 350",
            "830",
            "545",
            "19 085"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Informations complémentaires**"
      },
      {
        "type": "p",
        "text": "Dans le département Camping de la société Sportgol, le service commercial prévoit des quantités prévisionnelles de 21 500 tentes pour l’exercice à venir pour un prix moyen de 50 € HT. Il est prévu des actions promotionnelles sur ces produits :"
      },
      {
        "type": "p",
        "text": "en mars et avril, réduction de 10 % pour lancer les ventes avant le début de la période estivale ;"
      },
      {
        "type": "p",
        "text": "en octobre et novembre, solde de 30 % sur les prix HT."
      },
      {
        "type": "p",
        "text": "Au cours du mois de janvier N+1, le logiciel comptable a comptabilisé 32 289 € de chiffre d’affaires et le magasin a relevé des sorties de stock pour 687 tentes."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**Appliquer une méthode adaptée aux calculs de prévisions demandés, pour construire le budget des ventes.**"
      },
      {
        "type": "p",
        "text": "Les ventes sont irrégulières et respectent une saisonnalité, il faut donc trouver les coefficients saisonniers pour établir les prévisions :"
      },
      {
        "type": "p",
        "text": "•En utilisant le fonction fournie Y = 3,3459x + 1 453 et en considérant chaque année de l’historique de 1 à 36, on obtient les valeurs ajustées de la fonction."
      },
      {
        "type": "p",
        "text": "(Voir le tableau 1.)"
      },
      {
        "type": "p",
        "text": "•En établissant les rapports entre les valeurs réelles et les valeurs ajustées et en calculant la moyenne des coefficients obtenus sur les trois ans pour obtenir les coefficients saisonniers (coeff.). On vérifie alors que la somme des coefficients est bien égale à 12 (périodicité de la série chronologique)."
      },
      {
        "type": "p",
        "text": "(Voir le tableau 2.)"
      },
      {
        "type": "p",
        "text": "•En se servant de ces coefficients pour établir les volumes de ventes et en établissant les prévisions grâce à la fonction pour les valeurs 37 à 48 (quatrième année de travail)."
      },
      {
        "type": "p",
        "text": "(Voir le tableau 3.)"
      },
      {
        "type": "p",
        "text": "•En valorisant les volumes en tenant compte des promotions et des soldes."
      },
      {
        "type": "p",
        "text": "(Voir le tableau 4.)"
      },
      {
        "type": "table",
        "headers": [
          "**Tableau 1. Données ajustées en euros**"
        ],
        "rows": [
          [
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
          [
            "**Année 1**",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453",
            "1 453"
          ],
          [
            "**Année 2**",
            "1 496",
            "1 500",
            "1 503",
            "1 507",
            "1 510",
            "1 513",
            "1 517",
            "1 520",
            "1 523",
            "1 527",
            "1 530",
            "1 533"
          ],
          [
            "**Année 3**",
            "1 537",
            "1 540",
            "1 543",
            "1 547",
            "1 550",
            "1 553",
            "1 557",
            "1 560",
            "1 563",
            "1 567",
            "1 570",
            "1 573"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Tableau 2. Rapport entre données réelles et données ajustées**"
        ],
        "rows": [
          [
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
          [
            "**Année 1**",
            "0,446",
            "0,443",
            "1,189",
            "1,269",
            "1,369",
            "1,449",
            "1,491",
            "1,253",
            "1,171",
            "0,781",
            "0,506",
            "0,327"
          ],
          [
            "**Année 2**",
            "0,455",
            "0,456",
            "1,218",
            "1,307",
            "1,409",
            "1,5",
            "1,516",
            "1,289",
            "1,185",
            "0,837",
            "0,516",
            "0,339"
          ],
          [
            "**Année 3**",
            "0,462",
            "0,468",
            "1,244",
            "1,357",
            "1,439",
            "1,533",
            "1,548",
            "1,282",
            "1,209",
            "0,862",
            "0,529",
            "0,346"
          ],
          [
            "",
            "0,454",
            "0,456",
            "1,217",
            "1,311",
            "1,406",
            "1,494",
            "1,518",
            "1,275",
            "1,188",
            "0,827",
            "0,517",
            "0,337"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Tableau 3. Prévisions des ventes"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
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
            "**Coefficients saisonniers**",
            "0,454",
            "0,456",
            "1,217",
            "1,311",
            "1,406",
            "1,494",
            "1,518",
            "1,275",
            "1,188",
            "0,827",
            "0,517",
            "0,337"
          ],
          [
            "**Volume ajusté**",
            "1 577",
            "1 580",
            "1 583",
            "1 587",
            "1 590",
            "1 594",
            "1 597",
            "1 600",
            "1 604",
            "1 607",
            "1 610",
            "1 614"
          ],
          [
            "**Volume coefficienté**",
            "716",
            "720",
            "1927",
            "2081",
            "2236",
            "2381",
            "2424",
            "2040",
            "1906",
            "1329",
            "832",
            "544"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Tableau 4. Valorisation des volumes de vente"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
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
            "**Volume N+1**",
            "716",
            "720",
            "1927",
            "2081",
            "2236",
            "2381",
            "2424",
            "2040",
            "1906",
            "1329",
            "832",
            "544"
          ],
          [
            "**Prix de référence**",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50",
            "50"
          ],
          [
            "**Prix avec promotion**",
            "50",
            "50",
            "45",
            "45",
            "50",
            "50",
            "50",
            "50",
            "50",
            "35",
            "35",
            "50"
          ],
          [
            "**Chiffres d’affaires**",
            "35 800",
            "36 000",
            "86 715",
            "93 645",
            "111 800",
            "119 050",
            "121 200",
            "102 000",
            "95 300",
            "46 515",
            "29 120",
            "27 200"
          ]
        ]
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C10.6",
    "title": "Shampoing Maud",
    "statement": [
      {
        "type": "p",
        "text": "Depuis quelques années, l’entreprise Shampoing Maud a choisi de se diversifier en proposant des produits dérivés du miel, et notamment une gamme pour les soins capillaires : shampoing, après-shampoing et masque de soin. Pour dynamiser les ventes, elle propose des coffrets cadeaux. Dès la première année, elle a conçu un coffret comprenant un shampoing et un après-shampoing. Compte tenu du succès de cette offre, elle a créé un autre coffret en N–2 avec un shampoing et un masque de soin. L’engouement croissant de la population pour le bien-être et le retour au naturel a été moteur dans la décision de créer des produits cosmétiques, mais la concurrence reste forte."
      },
      {
        "type": "p",
        "text": "La dirigeante, Mme Maud, souhaiterait effectuer une analyse de la performance commerciale. Pour cela, elle a établi une prévision des ventes."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Expliciter l’évolution des ventes du coffret 1. Sans effectuer de calcul, proposer une méthode de calcul de prévision pour N+1.**"
      },
      {
        "type": "p",
        "text": "**2. Déterminer et appliquer les prévisions des ventes du coffret 2 pour décembre N+1 en justifiant la démarche utilisée.**"
      },
      {
        "type": "p",
        "text": "**Mme Maud souhaiterait s’assurer de la pertinence des méthodes utilisées dans les techniques de prévision.**"
      },
      {
        "type": "p",
        "text": "**3. Analyser l’évolution des ventes des deux coffrets en précisant les limites des techniques de prévision utilisées et en proposant des pistes d’amélioration.**"
      },
      {
        "type": "p",
        "text": "**Prévision des ventes — Coffret 1**"
      },
      {
        "type": "p",
        "text": "***Ventes annuelles en volume***"
      },
      {
        "type": "table",
        "headers": [
          "**N–4**",
          "**N–3**",
          "**N–2**",
          "**N–1**",
          "**N**"
        ],
        "rows": [
          [
            "75 000",
            "135 000",
            "262 500",
            "487 500",
            "510 000"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Linéaire**",
          "**Exponentiel**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,971",
            "0,974"
          ],
          [
            "**Équation de tendance annuelle**",
            "122 250x – 72 750",
            "Y = 49 798 × 1,668^x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Prévision des ventes — Coffret 2**"
      },
      {
        "type": "p",
        "text": "***Ventes annuelles en volume***"
      },
      {
        "type": "table",
        "headers": [
          "**N–2**",
          "**N–1**",
          "**N**"
        ],
        "rows": [
          [
            "25 000",
            "60 000",
            "207 500"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Linéaire**",
          "**Exponentiel**"
        ],
        "rows": [
          [
            "**Coefficient de corrélation**",
            "0,942",
            "0,995"
          ],
          [
            "**Équation de tendance annuelle**",
            "91 250x – 85 000",
            "Y = 8 165 × 2,88^x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "***Coefficients mensuels communs aux deux coffrets***"
      },
      {
        "type": "table",
        "headers": [
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
            "0,6",
            "1,2",
            "0,9",
            "0,7",
            "1,2",
            "0,9",
            "0,8",
            "0,7",
            "0,8",
            "1,1",
            "1,5",
            "1,6"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer et appliquer une méthode adaptée à des calculs de prévisions commerciales pour conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Expliciter l’évolution des ventes du coffret 1. Sans effectuer de calcul, proposer une méthode de prévision pour N+1.**"
      },
      {
        "type": "p",
        "text": "Le coffret 1 est créé depuis N–3. Il a connu une forte progression (courbe exponentielle) jusqu’en N–1 mais on constate un ralentissement en N. Ce produit semble en phase de maturité. L’analyse des données semble privilégier une croissance exponentielle (coefficient de corrélation). Cependant, compte tenu du ralentissement observé, il ne semble pas judicieux d’effectuer des prévisions selon cette tendance. On pourrait par exemple envisager un ajustement linéaire sur les deux dernières années, voire appliquer le même taux de progression qu’entre N–1 et N."
      },
      {
        "type": "p",
        "text": "**2. Déterminer et appliquer les prévisions des ventes du coffret 2 pour décembre N+1 en justifiant la démarche utilisée.**"
      },
      {
        "type": "p",
        "text": "Compte tenu de la tendance (graphique) et des coefficients de corrélation, la méthode de prévision la plus pertinente est l’ajustement exponentiel."
      },
      {
        "type": "p",
        "text": "Ventes annuelles N+1 = 8 165 × 2,884 = 561 728 coffrets."
      },
      {
        "type": "p",
        "text": "Ventes décembre N+1 = 561 728 ÷ 12 × 1,6 = 74 897 coffrets."
      },
      {
        "type": "p",
        "text": "**3. Analyser l’évolution des ventes des deux coffrets en précisant les limites des techniques de prévision utilisées et en proposant des pistes d’amélioration.**"
      },
      {
        "type": "p",
        "text": "Globalement les ventes semblent progresser en volume pour les deux coffrets. Cependant, on observe un ralentissement du coffret 1 alors que le coffret 2 est en pleine expansion. Il est donc probable qu’il ait eu substitution du coffret 1 au profit du coffret 2."
      },
      {
        "type": "p",
        "text": "Les méthodes utilisées sont basées uniquement sur des données quantitatives antérieures, ce qui suppose que les tendances observées se reproduisent. Or, il est nécessaire de prendre en compte d’autres variables plus qualitatives, telles que l’analyse de la concurrence, la conjoncture économique, l’évolution des tendances de consommation (produits naturels, modes, influenceurs...)."
      }
    ]
  }
];
