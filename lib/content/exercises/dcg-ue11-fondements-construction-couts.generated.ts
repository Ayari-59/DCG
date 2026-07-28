// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A2.1",
    "title": "Petitgrand",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise Petitgrand s’interroge sur un choix d’organisation de la production, entre petite ou grande taille de lots de fabrication d’un produit standard stockable (annexe)."
      },
      {
        "type": "p",
        "text": "**Identifier les coûts, marges et résultats selon les deux hypothèses envisagées par Petigrand.**"
      },
      {
        "type": "table",
        "headers": [
          "**Prévision de vente sur la période**",
          "8 000 unités"
        ],
        "rows": [
          [
            "**Prix de vente unitaire**",
            "50 €"
          ],
          [
            "**Organisation de la production**",
            "Séries de 100",
            "Séries de 1 000"
          ],
          [
            "**Coûts variables par produit**",
            "20",
            "20"
          ],
          [
            "**Coûts fixes totaux de production**",
            "3 000"
          ],
          [
            "**Coût de gestion par lots**",
            "60",
            "200"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Périmètre de la structure**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’information des décideurs"
      },
      {
        "type": "p",
        "text": "**Méthode***Vous devez montrer les influences réciproques entre le type de configurations structurelles et la construction des coûts d’une entité. Le contrôleur de gestion détermine les critères affectant ou non les coûts. Il arbitre et adapte les périmètres des coûts afin d’éclairer les décisions. Dès lors, de nombreuses questions se posent : • En fonction des demandes du décideur, faut-il limiter le périmètre du calcul de coût à un bien/service, à un site, à une zone de vente, à l’ensemble de l’entité ? • Faut-il prendre en compte tous les coûts afférents à une activité ou seulement les coûts directs ? les coûts de production ? • Sur quelles variables le calcul doit-il porter (une quantité produite, un service vendu, une qualité perçue par le client, un investissement immatériel à long terme…) ? Vous devez procéder en quatre étapes pour délimiter un périmètre pertinent :*1. délimiter l’objectif ;2. délimiter l’objet d’analyse ;3. tenir compte des contraintes et des données collectées ;4. en déterminer le périmètre de calcul."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Identifier les coûts, marges et résultats selon les deux hypothèses envisagées par Petitgrand.**"
      },
      {
        "type": "p",
        "text": "Il s’agit de calculer et de comparer les marges et les résultats en fonction des coûts de chaque hypothèse. Il est possible de faire les calculs unitaires dans les deux cas."
      },
      {
        "type": "p",
        "text": "On constate qu’il n’y a pas d’information supplémentaire sur des coûts liés à chaque lancement de série. Les coûts donnés sont donc partiels mais l’analyse se fait dans ce contexte :"
      },
      {
        "type": "table",
        "headers": [
          "**Coût (en €)**",
          "**Coûts identifiés pour les petites séries**",
          "**Coûts identifiés pour les grandes séries**"
        ],
        "rows": [
          [
            "**Coûts variables**",
            "160 000",
            "160 000"
          ],
          [
            "**Coûts fixes totaux de production**",
            "30 000",
            "30 000"
          ],
          [
            "**Coût de gestion des séries**",
            "4 800",
            "1 600"
          ],
          [
            "**Total des coûts**",
            "194 800",
            "191 600"
          ],
          [
            "**Coût unitaire**",
            "24,35",
            "23,95"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les marges obtenues sont récapitulées dans le tableau suivant :"
      },
      {
        "type": "table",
        "headers": [
          "**Marges (en €)**",
          "**Marge globale pour les petites séries**",
          "**Marge globale pour les grandes séries**"
        ],
        "rows": [
          [
            "**Marge sur coûts variables**",
            "240 000",
            "240 000"
          ],
          [
            "**Résultat global**",
            "205 200",
            "208 400"
          ],
          [
            "**Résultat global par produit**",
            "25,65",
            "26,05"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Analyse : si on compare dans ce contexte les deux hypothèses, on constate que la marge sur coût variable est identique mais que la grande série apporte un résultat final unitaire plus élevé, ce qui s’explique par un poids du coût de gestion des séries qui diminue avec le lancement de grandes séries."
      },
      {
        "type": "p",
        "text": "**Périmètre de la structure**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’information des décideurs• Vous devez montrer les influences réciproques entre le type de configurations structurelles et la construction des coûts d’une entité."
      },
      {
        "type": "p",
        "text": "**Méthode***Le contrôleur de gestion détermine les critères affectant ou non les coûts. Il arbitre et adapte les périmètres des coûts afin d’éclairer les décisions. Dès lors, de nombreuses questions se posent :*•En fonction des demandes du décideur, faut-il limiter le périmètre du calcul de coût à un bien/service, à un site, à une zone de vente, à l’ensemble de l’entité ?•Faut-il prendre en compte tous les coûts afférents à une activité ou seulement les coûts directs ? les coûts de production ?•Sur quelles variables le calcul doit-il porter (une quantité produite, un service vendu, une qualité perçue par le client, un investissement immatériel à long terme…) ?Vous devez procéder en quatre étapes pour délimiter un périmètre pertinent :1. délimiter l’objectif ;2. délimiter l’objet d’analyse ;3. tenir compte des contraintes et des données collectées ;4. en déterminer le périmètre de calcul."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A2.2",
    "title": "Ministère de l'Environnement",
    "statement": [
      {
        "type": "p",
        "text": "Le ministère de l’Environnement souhaite orienter sa politique vis-à-vis des voitures polluantes par une analyse des coûts. De nombreux acteurs sont concernés : les automobilistes, les constructeurs automobiles, les assureurs, les concessionnaires, l’État… Les coûts sont aussi bien directs qu’indirects, avec des externalités économiques notamment pour les collectivités territoriales."
      },
      {
        "type": "p",
        "text": "**Justifier le périmètre de calcul à délimiter pour les besoins d’information du décideur « ministère de l’Environnement ».**"
      },
      {
        "type": "p",
        "text": "**Différences d’incorporation**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Justifier l’existence des différences d’incorporation"
      },
      {
        "type": "p",
        "text": "**Méthode***1. Déterminer le montant des charges incorporables aux coûts pour une période. des contextes variés.*2. En déduire les différences d’incorporation obtenues."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Justifier le périmètre de calcul à délimiter pour les besoins d’information du décideur « ministère de l’Environnement »**"
      },
      {
        "type": "p",
        "text": "Le ministère de l’environnement doit adapter le périmètre de calcul de coûts en distinguant ceux-ci par acteurs. Le périmètre est extrêmement large et il est difficile pour le ministère d’être exhaustif. Le contrôleur de gestion du ministère de l’Environnement énumère les différents acteurs pour déterminer les différents coûts engendrés par la pollution."
      },
      {
        "type": "p",
        "text": "Le contrôleur doit-il se préoccuper seulement des coûts directs ? Des coûts indirects ? Des coûts des externalités négatives ? Le contrôleur de gestion doit effectuer un choix de périmètre pour délimiter un calcul de coût pertinent."
      },
      {
        "type": "p",
        "text": "**Différences d’incorporation**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Justifier l’existence des différences d’incorporation• L’influence des différences d’incorporation est variée. Si certaines d’entre elles ne peuvent agir que dans un sens, d’autres peuvent avoir des incidences inverses au sein d’un même exercice ou entre exercices."
      },
      {
        "type": "p",
        "text": "**Méthode***Il s’agit, dans un premier temps, d’identifier les sources d’information disponibles, d’en vérifier la cohérence, la pertinence et de déterminer les retraitements nécessaires, puis de mettre en évidence les charges incorporées, non incorporables et supplétives.*Vous devez respecter deux étapes pour justifier les différences d’incorporation :1. Déterminer le montant des charges incorporables aux coûts pour une période.2. En déduire les différences d’incorporation obtenues."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A2.3",
    "title": "Vendôme",
    "statement": [
      {
        "type": "p",
        "text": "Les informations suivantes extraites de la comptabilité financière de la société Vendôme vous sont fournies :"
      },
      {
        "type": "p",
        "text": "Le comptable financier vous précise que :"
      },
      {
        "type": "table",
        "headers": [
          "**Informations concernant le mois de septembre**",
          "**Informations annuelles**"
        ],
        "rows": [
          [
            "• Ensemble des comptes 60 à 66 : 127 000 €• Compte 67 : 2 300 €",
            "• Compte 6811 : 60 000 €• Compte 6815 : 260 000 €• Compte 6872 : 36 000 €"
          ]
        ]
      },
      {
        "type": "ul",
        "items": [
          "les dotations aux amortissements comprennent 18 000 € de dotations aux frais d’établissement ;",
          "les immobilisations ont une valeur d’origine de 420 000 € et sont amorties linéairement sur une durée de 10 ans ;",
          "les dépenses de chauffage des locaux sont abonnées et prises en compte pour un montant mensuel de 2 200 €. Le montant des dépenses réelles est de 22 300 €."
        ]
      },
      {
        "type": "p",
        "text": "Le responsable analytique vous explique son intention de tenir compte, dans l’évaluation des charges incorporables, des éléments suivants :"
      },
      {
        "type": "ul",
        "items": [
          "la moitié des immobilisations a une valeur sur le marché de 300 000 € et l’entreprise n’envisage de les utiliser que sur une période de 5 ans ; en conséquence, des charges d’usage seront intégrées aux coûts ;",
          "parmi les provisions, 120 000 € concernent un litige exceptionnel et l’entreprise a l’habitude d’étaler des charges pour un montant annuel de 180 000 € ;",
          "les capitaux propres de l’entreprise s’élèvent à 400 000 €. Ils sont rémunérés au taux de 6 % l’an ;",
          "l’exploitant évalue sa rémunération à 9 500 € par mois. Le contrôleur de gestion souhaite préparer un tableau récapitulatif de concordance entre charges de la comptabilité financière et charges incorporables dans lequel les différences d’incorporation seront calculées et explicitées."
        ]
      },
      {
        "type": "p",
        "text": "**Justifier les différences d’incorporation pour le mois de septembre.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Justifier les différences d’incorporation pour le mois de septembre.**"
      },
      {
        "type": "table",
        "headers": [
          "**Nature des charges**",
          "**Comptabilité financière**",
          "**Comptabilité de gestion**",
          "**Nature des différences d’incorporation et commentaires**"
        ],
        "rows": [
          [
            "**Comptes 60 à 66(1)**",
            "Année",
            "Mois",
            "Année",
            "Mois",
            "–",
            "Ce sont des charges d’exploitation incorporables. Les charges abonnées de chauffage sont incluses dans les 127 000 € et n’entraînent pas de différence d’incorporation."
          ],
          [
            "–",
            "127 000",
            "",
            "127 000"
          ],
          [
            "**Compte 67 – Charges exceptionnelles**",
            "",
            "2 300",
            "",
            "–",
            "– 2 300",
            "Les charges exceptionnelles ne sont pas liées à l’exploitation normale, elles sont donc non incorporables.Différence sur les autres charges."
          ],
          [
            "**Compte 6811– Frais d’établissement– Immob. corporelles : moitié 1 : 210 000 × 10 %moitié 2 : 300 000 × 20 %**",
            "18 00021 00021 000",
            "1 5001 7501 750",
            "21 00060 000",
            "–1 7505 000",
            "– 1 500+ 3 250",
            "• Charges non incorporables, les frais d’établissement sont des frais étalés lors de la constitution et non liés à l’exploitation.• Rien à faire.• La seconde moitié des immobilisations doivent être amorties sur des règles plus économiques : valeur de marché et durée réduite.• Charges d’usage."
          ],
          [
            "",
            "",
            "5 000",
            "",
            "6 750",
            "+ 1 750",
            "Différence sur amortissements et provisions."
          ],
          [
            "**Compte 6815– Litige exceptionnel– Autres provisions pour risques**",
            "120 000140 000",
            "10 000 11 667",
            "180 000",
            "–15 000",
            "– 10 000+ 3 333",
            "Charges non incorporables car litige exceptionnel.Par choix de gestion, utilisation de charges étalées."
          ],
          [
            "",
            "",
            "21 667",
            "",
            "15 000",
            "– 6 667",
            "Différence sur amortissements et provisions."
          ],
          [
            "**Compte 6872– Provisions réglementées**",
            "36 000",
            "3 000",
            "",
            "–",
            "– 3 000",
            "Les provisions réglementées sont des charges fiscales sans lien avec l’exploitation.Différence sur amortissements et provisions."
          ],
          [
            "**Rémunération des capitaux400 000 × 6 % × 1/12Rémunération de l’exploitant**",
            "",
            "––",
            "",
            "2 0009 500",
            "+ 2 000+ 9 500",
            "L’utilisation de charges supplétives est un choix de gestion pour se comparer avec des entreprises qui auraient fait le choix de l’endettement, et d’un statut sociétal où la rémunération du dirigeant serait déjà une charge incorporable."
          ],
          [
            "0",
            "11 500",
            "11 500",
            "Différence pour éléments supplétifs."
          ],
          [
            "**Total**",
            "158 967",
            "",
            "160 250",
            "+ 1 283",
            "–"
          ],
          [
            "**On vérifie que :Charges incorporables en Comptabilité de gestion (160 250) = Charges de la comptabilité financière (158 967) + Différence d’incorporation (+ 1 283)**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Comptabilité financière et comptabilité de gestion**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Analyser les liens entre la comptabilité financière et la comptabilité de gestion"
      },
      {
        "type": "p",
        "text": "**Méthode***Méthode1. La délimitation des deux domaines*•La comptabilité de gestion organise le cheminement des flux internes physiques et monétaires en vue d’aboutir à des coûts par produit ; elle présente une vision détaillée de chaque activité et développe des procédures spécifiques à chaque entreprise.•La comptabilité financière offre une vue globale et synthétique des comptes de l’entreprise. Obligatoire et normalisée, elle manipule des flux externes essentiellement monétaires. Base de calcul de l’impôt, fortement influencée par des visions juridiques et patrimoniales, la comptabilité financière est incapable, par sa seule logique, de répondre à des questions indispensables au calcul du résultat.2. Les liens informationnels entre les deux comptabilités•La comptabilité financière transmet les informations sur les charges qui seront retraitées par la comptabilité de gestion. Elle puise dans l’architecture des coûts de la comptabilité de gestion les informations nécessaires à l’évaluation :–des stocks et en-cours dont l’importance croît avec la complexification des processus productifs de plus en plus complexes ;–des productions d’immobilisations de l’entreprise.•Une fois la budgétisation de l’activité effectuée par la comptabilité de gestion, la comptabilité financière élabore les documents de synthèse (bilan et compte de résultat prévisionnels).Techniquement, les liens à obtenir sont calculatoires et démontrent la concordance entre les résultats issus des deux comptabilités.3. Une vision complémentaireLa vision financière globale de l’entreprise résulte de la comptabilité financière. La comptabilité de gestion la complète par une vision segmentée (profitabilité, prévisions, allocations des ressources) par focus. Les charges de la comptabilité financière ne suffisent pas à déterminer et à gérer un objet de coût ; la comptabilité de gestion calcule des coûts à tous les niveaux souhaités.4. Des finalités différentesLes angles d’analyse des deux comptabilités diffèrent par l’utilisation des informations. En effet, la comptabilité financière est « réservée » à ceux qui financent les activités, alors que la comptabilité de gestion est utilisée par ceux qui gèrent les activités (positionnement dans l’environnement concurrentiel)."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "A2.4",
    "title": "Borelli",
    "statement": [
      {
        "type": "p",
        "text": "**À partir des annexes, présenter au directeur de Borelli l’utilité des deux comptabilités, et dresser une analyse des liens entre la comptabilité générale et la comptabilité de gestion dans ce contexte.**"
      },
      {
        "type": "table",
        "headers": [
          "**Différences de traitement comptable**"
        ],
        "rows": [
          [
            "**Mali (charge)**",
            "**Montant**",
            "**Boni (produit)**",
            "**Montant**"
          ],
          [
            "• Charges non incorporées• Valeur des manquants sur stock• Différences d’arrondis par défaut• Résultat (boni net)",
            "",
            "• Charges supplétives• Produits non incorporés• Valeur des excédents sur stock• Valeur des arrondis par excès• Résultat (mali net)",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Compte de résultat de la comptabilité de gestion de la période**"
        ],
        "rows": [
          [
            "**Charges**",
            "**Montant**",
            "**Produits**",
            "**Montant**"
          ],
          [
            "• Résultat de gestion (perte)• Mali net• Résultat de la comptabilité de gestion (bénéfice)",
            "",
            "• Résultat de gestion (bénéfice)• Boni net• Résultat de la comptabilité de gestion (perte)",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Identifier les coûts, marges et résultats à calculer• Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’informations des décideurs• Analyser les liens entre la comptabilité financière et la comptabilité de gestion• Justifier l’existence des différences d’incorporation"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**À partir des documents, présenter au directeur de Borelli l’utilité des deux comptabilités, et dresser une analyse des liens entre la comptabilité générale et la comptabilité de gestion.**"
      },
      {
        "type": "p",
        "text": "La comptabilité financière est structurée autour de règles comptables normées et fortement impactées par des éléments juridiques et fiscaux (charges déductibles…)."
      },
      {
        "type": "p",
        "text": "La comptabilité de gestion vise une orientation économique et se doit de se libérer des contraintes juridiques et fiscales qui pèsent sur les éléments de la comptabilité financière. Elle permet de construire des données pertinentes pour analyser et piloter la performance financière de l’entreprise."
      },
      {
        "type": "p",
        "text": "La comptabilité de gestion diffère par le fait de la nature des charges retenues : charges non incorporables et charges supplétives."
      },
      {
        "type": "p",
        "text": "Elle diffère également par la nature des produits retenus :"
      },
      {
        "type": "p",
        "text": "On exclut tous les produits hors exploitation."
      },
      {
        "type": "p",
        "text": "Dans le traitement comptable, les différences proviennent de :"
      },
      {
        "type": "p",
        "text": "– la gestion des arrondis (utilisation des coûts d’unité d’oeuvre arrondis) ;"
      },
      {
        "type": "p",
        "text": "– la gestion des stocks car la comptabilité de gestion privilégie l’inventaire intermittent tandis que la comptabilité financière utilise l’inventaire permanent. Il existe donc des différences d’inventaire."
      },
      {
        "type": "p",
        "text": "Pour retrouver le résultat de la comptabilité financière, il faut intégrer l’influence de toutes ces différences en analysant : les différences d’incorporation (charges supplétives, charges d’usages, charges étalées) et les différences de traitement comptable."
      },
      {
        "type": "p",
        "text": "Ce processus s’appelle « mise en concordance » des résultats élémentaires obtenus en comptabilité de gestion avec le résultat global en comptabilité financière."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C2.1",
    "title": "Bodin",
    "statement": [
      {
        "type": "p",
        "text": "La société Bodin, localisée dans le Grand Est de la France, commercialise des machines-"
      },
      {
        "type": "p",
        "text": "outils pour professionnels. Certaines machines sont achetées et revendues directement. D’autres nécessitent des modifications. Des prestations complémentaires avec installation et maintenance peuvent être associées à la vente."
      },
      {
        "type": "p",
        "text": "L’entreprise est organisée selon une structure divisionnelle par catégorie de clients : secteur aéronautique/secteur automobile/autre."
      },
      {
        "type": "p",
        "text": "L’examen de la comptabilité analytique fait apparaître les coûts et soldes de l’entreprise Bodin (annexe)."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Identifier les coûts, marges et résultats à calculer.**"
      },
      {
        "type": "p",
        "text": "**2. Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’informations des décideurs.**"
      },
      {
        "type": "p",
        "text": "**3. Justifier l’existence des différences d’incorporation.**"
      },
      {
        "type": "p",
        "text": "**4. Analyser les liens entre la comptabilité financière et la comptabilité de gestion.**"
      },
      {
        "type": "p",
        "text": "**Examen de la comptabilité analytique de Bodin**"
      },
      {
        "type": "p",
        "text": "Les charges indirectes de la période transférées de la comptabilité financière s’élèvent à un montant de 700 000 € de charges, dont 1 500 € de charges exceptionnelles non incorporables. Par ailleurs, il a été tenu compte de 10 300 € de charges supplétives. Les imputations de charges indirectes dans les coûts des produits stockés ont été de 708 000 €."
      },
      {
        "type": "p",
        "text": "Après traitement analytique, le coût des produits vendus apparaît pour un total de :"
      },
      {
        "type": "ul",
        "items": [
          "produit A : 710 000 € ;",
          "produit B : 376 200 € ;",
          "produit C : 196 200 €."
        ]
      },
      {
        "type": "p",
        "text": "Les produits de la comptabilité financière s’élèvent à 1 400 000 €, dont 5 000 € de produits exceptionnels. Leur répartition est la suivante entre les trois produits :"
      },
      {
        "type": "ul",
        "items": [
          "produit A : 800 000 € ;",
          "produit B : 400 000 € ;",
          "produit C : 195 000 €."
        ]
      },
      {
        "type": "p",
        "text": "En fin de période comptable, l’inventaire physique extracomptable fait apparaître :"
      },
      {
        "type": "ul",
        "items": [
          "le stock réel de matières premières, inférieur au stock calculé de 380 € ;",
          "le stock réel de produits finis, supérieur de 2 300 € au stock calculé."
        ]
      },
      {
        "type": "p",
        "text": "En comptabilité financière, le solde du compte de résultat présente un solde créditeur de 127 520 €."
      },
      {
        "type": "p",
        "text": "**Fondements de la comptabilité de gestion**"
      },
      {
        "type": "p",
        "text": "**Réflexions sur la comptabilité de gestion**"
      },
      {
        "type": "p",
        "text": "**DONNÉES ET ÉNONCÉ**"
      },
      {
        "type": "p",
        "text": "La Société méridionale de menuiserie s’est beaucoup développée depuis quelques années sous l’impulsion de son nouveau dirigeant, Paul Dubosque, et compte maintenant 700 personnes. Au départ, le fondateur, Jean Dubosque, le grand-père de Paul, n’était qu’un modeste artisan, fabricant à la demande de buffets et d’armoires. Dans les années 1970, son fils, Pierre, le père de Paul, se lança dans une production industrielle à plus grande échelle, en travaillant en tant que sous-traitant pour les grandes marques de meubles standardisés vendus en kit dans les grandes surfaces spécialisées (armoires et bibliothèques notamment)."
      },
      {
        "type": "p",
        "text": "Paul, s’apercevant que la valeur ajoutée se réalisait plutôt en aval de la filière, chercha à se diversifier dans la fabrication et surtout l’installation de cuisines intégrées dans lesquelles les ménages investissent actuellement, ainsi que dans une activité d’aménagement de bureaux et de magasins. Actuellement, le site historique initial de Marseille existe toujours. Il a été beaucoup agrandi dans les années 1980. On y fabrique surtout les « façades » des éléments de cuisine. Mais un autre établissement de production, beaucoup plus spacieux et fonctionnel, a été ouvert en zone industrielle dans la région de Nîmes. Quatre « cuisineries » ont été ouvertes : deux à Marseille, une à Aix et une autre à Toulon. Enfin, l’activité « aménagement de magasins », qui est basée à Marseille, a ouvert une antenne à Lyon. Paul Dubosque continue à superviser l’ensemble des activités. Il parcourt 40 000 kilomètres par an au volant de sa Volvo ! L’entreprise semble très saine, mais la rentabilité globale est faible : le résultat net ne représente pas plus de 1 % du chiffre d’affaires et baisse très lentement mais très régulièrement depuis 3 ans. Une comptabilité de gestion a été mise en place récemment, mais personne n’est d’accord sur les répartitions de charges. Les états semblent néanmoins montrer que les bénéfices de l’activité « cuisinerie » compensent des pertes dans les autres secteurs. Il est difficile de"
      },
      {
        "type": "p",
        "text": "localiser les possibilités d’amélioration. Par exemple, au niveau de l’aménagement des magasins, les chargés d’affaires établissent les plans et font fabriquer les éléments à Marseille. Les éléments sont prédécoupés et ensuite assemblés sur place, dans le magasin à aménager. Le coût de production de ces éléments semble trop élevé et pèse sur les marges. Il y a souvent des conflits entre les différents responsables pour savoir qui devrait faire des efforts. La concurrence se fait plus âpre depuis quelques années du fait de l’arrivée des concurrents Italiens, et maintenant d’entreprises slovènes, qui viennent réaliser en sous-traitance des chantiers en déplacement à des prix cassés. Il devient vital de réaliser des gains de productivité et de « mettre sous tension », de dynamiser et de mieux motiver les différentes équipes. Par ailleurs, Paul Dubosque approche de l’âge de la retraite et ses deux enfants n’ont pas du tout l’intention de continuer : sa fille est installée comme médecin à Montpellier et son fils est au Conservatoire de musique de Paris. Il lui faudra trouver un repreneur."
      },
      {
        "type": "p",
        "text": "**TRAVAIL À FAIRE**"
      },
      {
        "type": "p",
        "text": "**Que pouvez-vous conseiller à Paul Dubosque ?**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Identifier les coûts, marges et résultats à calculer• Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’information des décideurs• Justifier l’existence des différences d’incorporation"
      },
      {
        "type": "p",
        "text": "**1. Identifier les coûts, marges et résultats à calculer.**"
      },
      {
        "type": "p",
        "text": "Résultats analytiques élémentaires"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Produit A**",
          "**Produit B**",
          "**Produit C**"
        ],
        "rows": [
          [
            "**Chiffre d’affaires**",
            "800 000",
            "400 000",
            "195 000"
          ],
          [
            "**Coût des produits vendus**",
            "– 710 000",
            "– 376 200",
            "– 196 200"
          ],
          [
            "**Résultat analytique**",
            "+ 90 000",
            "+ 23 800",
            "– 1 200"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Justifier la nécessité d’adapter les périmètres de calcul de coûts à l’activité de l’entité et aux besoins d’informations des décideurs.**"
      },
      {
        "type": "p",
        "text": "Dans un premier temps, les décideurs voulaient connaître la structure du résultat global positif de 127 520 €, soit une profitabilité de 127 520 / 1 400 000 = 9,11 %. Cette volonté d’analyse se retrouve dans le calcul de résultats par produits appelés « résultats analytiques » qui mettent en évidence la perte sur le produit C."
      },
      {
        "type": "p",
        "text": "**3. Justifier l’existence des différences d’incorporation.**"
      },
      {
        "type": "p",
        "text": "Les différences d’incorporation traduisent les différences de traitement entre les deux comptabilités. Par convention, c’est la comptabilité de gestion (facultative) qui s’ajuste sur la comptabilité financière (obligatoire) dans un processus de concordance."
      },
      {
        "type": "p",
        "text": "**4. Analyser les liens entre la comptabilité financière et la comptabilité de gestion.**"
      },
      {
        "type": "p",
        "text": "La comptabilité de gestion se construit à partir des données de la comptabilité financière, dont elle retraite les charges et les produits pour élaborer des coûts et des résultats analytiques orientés vers la décision. Les deux comptabilités restent donc étroitement liées et doivent concorder : en partant des résultats analytiques élémentaires (112 600 €) et en réintégrant les différences d’incorporation — charges non incorporables (charges exceptionnelles), charges supplétives, différences sur charges indirectes, différences d’inventaire sur matières premières et sur produits finis, produits non incorporables (produits exceptionnels) — on retrouve le résultat de la comptabilité financière (127 520 €). Ce rapprochement, présenté ci-dessous, garantit la cohérence entre l’information interne, destinée au pilotage, et l’information externe, destinée aux tiers."
      },
      {
        "type": "table",
        "headers": [
          "**Résultats analytiques élémentaires**",
          "**(+ 90 000) + (+ 23 800) + (– 1 200)**",
          "**112 600**"
        ],
        "rows": [
          [
            "**Charges exceptionnelles**",
            "Les charges exceptionnelles ne sont pas prises en compte en comptabilité de gestion ; elles ont majoré les résultats analytiques.",
            "– 1 500"
          ],
          [
            "**Charges supplétives**",
            "Les charges strictement analytiques ont minoré les résultats analytiques.",
            "+ 10 300"
          ],
          [
            "**Différences sur charges indirectes**",
            "Charges potentiellement incorporables :700 000 – 1 500 + 10 300 = 708 800Charges imputées dans les coûts : 708 000Charges d’arrondis non prises en compte en comptabilité de gestion : 800",
            "– 800"
          ],
          [
            "**Différences d’inventaire sur matières premières**",
            "Stock réel inférieur, donc mali d’inventaire.",
            "– 380"
          ],
          [
            "**Différences d’inventaire sur produits finis**",
            "Stock réel supérieur, donc boni d’inventaire.",
            "+ 2 300"
          ],
          [
            "**Produits exceptionnels**",
            "Produits non incorporables de 5 000 €.",
            "+ 5 000"
          ],
          [
            "**Résultat de la comptabilité financière**",
            "+ 127 520"
          ]
        ]
      }
    ]
  }
];
