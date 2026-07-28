// Généré par scripts/convert-annales.mjs depuis les annales par thème.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Annale } from "../types";

export const annales: Annale[] = [
  {
    "id": "a1",
    "year": 2019,
    "dossier": "Dossier 1",
    "entreprise": "PLAISIRS DU MIEL",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**PLAISIRS DU MIEL est une société anonyme d’Aquitaine (créée en 2005 par Éloïse FERNANDEZ) spécialisée dans la sélection, le conditionnement et la commercialisation de miels d’apiculteurs français. Réactive, elle s’est diversifiée dans la cosmétique et l’apithérapie ainsi que dans les produits gourmands à base de miel, et vend à la grande distribution, à des boutiques spécialisées et en ligne. Recruté(e) au contrôle de gestion, vous secondez Monsieur MICOUX.\n**Votre mission.**Réaliser l’analyse de la performance commerciale de la gamme de coffrets cadeaux capillaires : établir les prévisions de ventes, puis mesurer et décomposer les écarts sur marge.\n**L’enjeu décisionnel.**Quelle méthode de prévision retenir pour des ventes fortement saisonnières, et que révèlent les écarts sur marge quant à la latitude de prix laissée aux commerciaux ?\n**Compétences mobilisées.**\n– Analyser une série de ventes et choisir une méthode de prévision adaptée (moyennes mobiles, coefficients saisonniers)\n– Établir des prévisions de ventes mensuelles\n– Calculer et décomposer un écart sur marge brute (marge unitaire, volume, composition)\n– Rédiger un argumentaire d’analyse à destination de la direction\n**Notions clés.***Prévision des ventes · saisonnalité · coefficients saisonniers · écart sur marge brute · sous-écarts*\n**Exercice de référence.***DCG UE11 · Session 2019 · Sujet PLAISIRS DU MIEL · Dossier 1.*"
      },
      {
        "type": "p",
        "text": "**NB - Les commentaires et analyses de résultats sont aussi importants que les éléments calculatoires.**"
      },
      {
        "type": "p",
        "text": "**DOSSIER 1 – ANALYSE DE LA PERFORMANCE COMMERCIALE (5 points)**"
      },
      {
        "type": "p",
        "text": "Depuis 2012, l’entreprise a choisi de se diversifier en proposant des produits dérivés du miel et notamment une gamme pour les soins capillaires : shampoing, après-shampoing et masque de soin. Pour dynamiser les ventes, elle propose des coffrets cadeaux. Dès la première année, elle a conçu un coffret comprenant un shampoing et un après-shampoing. Compte tenu du succès de cette offre, elle a créé un autre coffret en 2015 avec un shampoing et un masque de soin. L’engouement croissant de la population pour le bien-être et le retour au naturel a été moteur dans la décision de créer des produits cosmétiques mais la concurrence reste forte."
      },
      {
        "type": "p",
        "text": "Monsieur MICOUX souhaiterait effectuer une analyse de la performance commerciale. Pour cela, il a établi une prévision des ventes."
      },
      {
        "type": "p",
        "text": "**À l’aide de l’*annexe 1***"
      },
      {
        "type": "ol",
        "items": [
          "**Expliciter l’évolution des ventes du coffret 1 et sans faire de calcul, proposer une méthode de calcul de prévision pour 2018.**",
          "**Effectuer les prévisions des ventes du coffret 2 pour décembre 2018 en justifiant la démarche utilisée.**"
        ]
      },
      {
        "type": "p",
        "text": "Eloïse FERNANDEZ souhaiterait s’assurer de la pertinence des méthodes utilisées dans les techniques de prévision."
      },
      {
        "type": "ol",
        "items": [
          "**Analyser l’évolution des ventes des deux coffrets en précisant les limites des techniques de prévision utilisées. Proposer des pistes d’amélioration.**"
        ]
      },
      {
        "type": "p",
        "text": "Eloïse FERNANDEZ pense que la création du nouveau coffret est indispensable à l’évolution globale des ventes."
      },
      {
        "type": "p",
        "text": "Afin d’être sûre que la démarche commerciale engagée soit cohérente, elle s’entretient avec monsieur MICOUX pour lui demander de mettre en place un contrôle plus approfondi des résultats obtenus."
      },
      {
        "type": "p",
        "text": "**À l’aide des *annexes 2 et 3***"
      },
      {
        "type": "ol",
        "items": [
          "**Justifier le choix d’un calcul d’écart sur marge plutôt qu’un calcul d’écart sur chiffre d’affaires.**",
          "**Calculer, globalement et pour chaque modèle, l’écart sur marge brute, conformément aux indications fournies par monsieur MICOUX.**",
          "**Procéder à la décomposition de l’écart sur marge brute en 3 sous-écarts.**",
          "**Rédiger un argumentaire (environ une quinzaine de lignes), à l’attention de madame Fernandez, analysant les résultats des calculs effectués (dans le dossier 1). Proposer une autre assiette de calcul pour la politique de rémunération des commerciaux.**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 1 – Prévision des ventes.**"
      },
      {
        "type": "p",
        "text": "**Coffret 1**"
      },
      {
        "type": "p",
        "text": "**Ventes annuelles en volume**"
      },
      {
        "type": "table",
        "headers": [
          "**2013**",
          "**2014**",
          "**2015**",
          "**2016**",
          "**2017**"
        ],
        "rows": [
          [
            "75000",
            "135000",
            "262500",
            "487500",
            "510000"
          ]
        ]
      },
      {
        "type": "image",
        "src": "/figures/annales-dcg-ue11-budget-des-ventes/01.png",
        "alt": "Annexe",
        "width": 752,
        "height": 452
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
            "Coefficient de corrélation",
            "0,971",
            "0,974"
          ],
          [
            "Équation de tendance annuelle",
            "122 250 x – 72 750",
            "Y = 49 798 * 1,668 x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coffret 2**"
      },
      {
        "type": "table",
        "headers": [
          "**Ventes annuelles en volume**20152016201725 00060 000207 500",
          "2015",
          "2016",
          "2017",
          "25 000",
          "60 000",
          "207 500",
          ""
        ],
        "rows": [
          [
            "2015",
            "2016",
            "2017"
          ],
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
            "Coefficient de corrélation",
            "0,942",
            "0,995"
          ],
          [
            "Équation de tendance annuelle",
            "91 250 x – 85 000",
            "Y = 8 165 * 2,88x"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Coefficients mensuels communs aux deux coffrets**"
      },
      {
        "type": "table",
        "headers": [
          "**Janvier**",
          "**Février**",
          "**Mars**",
          "**Avril**",
          "**Mai**",
          "**Juin**",
          "**Juillet**",
          "**Août**",
          "**Septembre**",
          "**Octobre**",
          "**Novembre**",
          "**Décembre**"
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
      },
      {
        "type": "p",
        "text": "**Annexe 2 – Extrait de l’entretien entre Madame FERNANDEZ et Monsieur MICOUX**"
      },
      {
        "type": "p",
        "text": "**Madame FERNANDEZ (Mme F)** : L’analyse de l’évolution des ventes est certes une première étape de réflexion mais je souhaiterais savoir s’il vous est possible de mettre en place des indicateurs qui permettent de contrôler si les résultats obtenus sont conformes à ceux prévus."
      },
      {
        "type": "p",
        "text": "**Monsieur MICOUX (M. M)** : Tout à fait, je souhaitais justement vous proposer un contrôle budgétaire des ventes. Il s’agirait de calculer différents écarts entre les données réelles et prévues."
      },
      {
        "type": "p",
        "text": "**Mme F -** Très intéressant, quels types d’écarts pourrez-vous calculer ?"
      },
      {
        "type": "p",
        "text": "**M. M-** Je vous propose de calculer pour chaque coffret des écarts sur marge brute, que je décomposerai en écarts sur marge unitaire, sur volume et sur composition des ventes."
      },
      {
        "type": "p",
        "text": "**Mme F** -Je vous fais confiance sur ces aspects techniques. Il sera bien entendu nécessaire que les résultats s’accompagnent d’explications et de commentaires sur chacun des écarts calculés. Je vous propose d’effectuer cette démarche dans un premier temps sur le mois de décembre 2018, cette période étant très importante pour nous en termes d’activité. Avez-vous besoin d’informations complémentaires ?"
      },
      {
        "type": "p",
        "text": "**M. M-**Les commerciaux partent bien d’un prix indicatif mais disposent d’une certaine latitude pour négocier les prix ?"
      },
      {
        "type": "p",
        "text": "**Mme F -** Tout à fait, puisqu’ils s’adressent à des centrales d’achat. Les prix sont négociés en fonction des volumes. D’ailleurs, dans leur rémunération, ils perçoivent une commission sur le chiffre d’affaires réalisé. On s’interroge cependant sur une autre assiette de calcul qui permettrait de mieux les orienter vers une optimisation du résultat de l’entreprise."
      },
      {
        "type": "p",
        "text": "**Annexe 3 – Données relatives aux coffrets cadeaux.**"
      },
      {
        "type": "p",
        "text": "**Prévisions décembre 2018**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente indicatif d’un coffret**",
          "**Quantités produites et vendues**",
          "**Coût de production unitaire préétabli**"
        ],
        "rows": [
          [
            "**Coffret 1 :** un shampoing et un après-shampoing",
            "14,2",
            "71200",
            "11,8"
          ],
          [
            "**Coffret 2** : un shampoing et un masque de soin",
            "17,2",
            "75000",
            "15,5"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Réalisations décembre 2018**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Prix de vente d’un coffret**",
          "**Quantités produites et vendues**",
          "**Coût total de production réel**"
        ],
        "rows": [
          [
            "**Coffret 1** : un shampoing et un après-shampoing",
            "14,5",
            "68 000",
            "816 000"
          ],
          [
            "**Coffret 2** : un shampoing et un masque de soin",
            "16,2",
            "80 000",
            "1 170 000"
          ]
        ]
      }
    ]
  },
  {
    "id": "a2",
    "year": 2020,
    "dossier": "Dossier 2",
    "entreprise": "FONEA",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**FONÉA (Formation, Négociation en Achats), société anonyme créée en 2012 par Daniel GOULARD en région parisienne, propose des formations qualifiantes aux professionnels des achats — deux offres phares, « Manager des achats » et « Certification acheteur » — vendues à des entreprises et à des particuliers via cinq antennes régionales. En forte croissance sur un marché concurrentiel, l’entreprise vous a recruté(e) comme contrôleur de gestion.\n**Votre mission.**Mettre en place le contrôle budgétaire des ventes : établir les prévisions de ventes 2020 de chaque formation et analyser les écarts sur marge.\n**L’enjeu décisionnel.**Les prévisions étaient jusqu’ici établies de façon approximative. Quelle méthode fiabiliser pour prévoir les ventes de chaque formation et éclairer la stratégie de développement ?\n**Compétences mobilisées.**\n– Choisir et justifier une méthode de prévision des ventes adaptée à chaque série\n– Établir des prévisions de ventes chiffrées pour 2020\n– Interpréter des écarts sur marge issus du contrôle budgétaire\n– Rédiger une note d’analyse et de recommandations à la direction\n**Notions clés.***Prévision des ventes · tendance · contrôle budgétaire · écart sur marge · performance commerciale*\n**Exercice de référence.***DCG UE11 · Session 2020 · Sujet FONÉA · Dossier 2.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 2 – GESTION ET CONTRÔLE BUDGÉTAIRE DES VENTES**"
      },
      {
        "type": "p",
        "text": "**BASE DOCUMENTAIRE : documents 5 et 6**"
      },
      {
        "type": "p",
        "text": "Conscient du caractère très concurrentiel du marché de la formation, monsieur GOULARD a souhaité qu’un contrôle budgétaire des ventes soit mis en place en 2019 avant de lancer de nouvelles offres. Les prestations sont proposées à un prix établi mais des négociations sont parfois effectuées notamment par les entreprises clientes qui envoient régulièrement leurs collaborateurs en formation."
      },
      {
        "type": "p",
        "text": "Lors de l’établissement des budgets, les prix de vente prévisionnels sont calculés en fonction des remises ayant été accordées les années précédentes."
      },
      {
        "type": "p",
        "text": "En termes de stratégie, la société avait envisagé pour 2019 de développer les ventes de la formation « Certification acheteur » sur les deux sites où elle est proposée (Île-de-France, Rhône-Alpes). Cette prestation étant relativement récente, il s’agissait d’abord de bien asseoir sa notoriété avant de l’implanter dans d’autres régions à partir de 2020. Il semble également important de maintenir voire développer les ventes de la formation « Manager des achats », car elle est le produit phare et donc la vitrine de l’entreprise."
      },
      {
        "type": "p",
        "text": "Jusqu’à présent pour mettre en œuvre les budgets, les prévisions des ventes étaient effectuées de façon approximative en se basant sur les ventes précédentes et en fonction des ressentis des commerciaux présents dans les différents salons."
      },
      {
        "type": "p",
        "text": "En tant que contrôleur de gestion, vous avez déjà procédé au contrôle budgétaire des ventes en calculant et en décomposant les écarts sur marge."
      },
      {
        "type": "p",
        "text": "**Votre mission consiste à étudier le processus budgétaire des ventes en vue de développer les ventes de formation.**"
      },
      {
        "type": "p",
        "text": "**Pour la réaliser, vous devez :**"
      },
      {
        "type": "ol",
        "items": [
          "**Procéder à la détermination des prévisions de ventes, en choisissant et en justifiant une méthode adaptée aux calculs de ces prévisions pour 2020 pour chacune des formations.**",
          "**Rédiger un document, d’une page environ, à l’attention de monsieur GOULARD qui analysera les prévisions des ventes et les écarts calculés afin d’expliciter les recommandations à mettre en œuvre en matière de performance commerciale.**"
        ]
      },
      {
        "type": "p",
        "text": "Document 5 – Volume et analyse des ventes depuis 2012"
      },
      {
        "type": "p",
        "text": "**Nombre d’auditeurs par année**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**2012**",
          "**2013**",
          "**2014**",
          "**2015**",
          "**2016**",
          "**2017**",
          "**2018**",
          "**2019**"
        ],
        "rows": [
          [
            "Manager des achats.",
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
            "Certification acheteur.",
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
        "text": "**Indicateurs utiles au calcul des prévisions**"
      },
      {
        "type": "p",
        "text": "**Manager des achats**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coefficient de corrélation**"
        ],
        "rows": [
          [
            "Tendance linéaire.",
            "0,971"
          ],
          [
            "Tendance exponentielle.",
            "0,993"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Certification acheteur**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coefficient de corrélation**"
        ],
        "rows": [
          [
            "Tendance linéaire.",
            "0,973"
          ],
          [
            "Tendance exponentielle.",
            "0,924"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Document 6 – Données relatives au contrôle budgétaire des ventes 2019"
      },
      {
        "type": "p",
        "text": "**Données prévisionnelles**"
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
            "Prix de vente",
            "10 500",
            "5 500"
          ],
          [
            "Coût de production unitaire",
            "6 500",
            "3 500"
          ],
          [
            "Nombre d’auditeurs",
            "125",
            "35"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Données réelles**"
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
            "Prix de vente",
            "11 000",
            "5 450"
          ],
          [
            "Coût de production unitaire",
            "6 600",
            "3 700"
          ],
          [
            "Nombre d’auditeurs",
            "132",
            "40"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Écart sur marge et décomposition de cet écart**"
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
            "Écart de marge sur coûts préétablis",
            "94 000 €",
            "8 000 €"
          ],
          [
            "Écart sur marge unitaire(ou écart sur prix)",
            "66 000 €",
            "- 2 000 €"
          ],
          [
            "Écart sur quantité",
            "28 000 €",
            "10 000 €"
          ],
          [
            "Écart de composition des ventes (ou écart sur mix)",
            "- 9 500 €",
            "4 750 €"
          ],
          [
            "Écart sur volume des ventes",
            "37 500 €",
            "5 250 €"
          ]
        ]
      }
    ]
  }
];
