// Généré par scripts/convert-docx.mjs depuis CHAPITRE_08__LA_METHODE_DES_COUTS_PARTIELS.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-methode-couts-partiels",
  "level": "DCG",
  "ue": "UE11",
  "number": 8,
  "title": "La méthode des coûts partiels",
  "description": "",
  "durationMin": 25,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 2 du programme UE11 — « Déterminer et analyser des coûts pour évaluer la performance », savoir associé 2.3 « Le calcul et l'analyse des coûts partiels ». Après les méthodes de coûts complets (centres d'analyse, ABC) et l'imputation rationnelle, les coûts partiels constituent la deuxième grande famille de méthodes : non plus répartir la totalité des charges, mais ne retenir que les charges pertinentes pour la décision et raisonner par marges. Ils préparent le modèle coût-volume-profit (seuil de profitabilité) et le pilotage des centres de responsabilité.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Distinguer les charges selon leur variabilité (fixes / variables) et leur traçabilité (directes / indirectes, spécifiques / communes).\n• Calculer et interpréter les marges sur coût variable et sur coût spécifique ; construire un compte de résultat différentiel.\n• Mettre en œuvre l'approche marginale et déterminer un prix de vente minimal (prix plancher).\n• Mobiliser les coûts partiels pour éclairer une décision de gestion de court terme et justifier le choix de la méthode au regard de la décision.\n• Apprécier les apports et les limites de l'approche ; rédiger un écrit argumenté pour conseiller le décideur.\n• Coût direct, coût variable, coût spécifique ; coût marginal.\n• Marge sur coût variable, taux de marge, marge sur coût spécifique ; compte de résultat différentiel.\n• Coûts partiels et aide à la décision : mix de produits, commande supplémentaire, make or buy, maintien / abandon, prix plancher."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Les méthodes de coût complet (centres d'analyse, ABC) cherchent à répartir la **totalité** des charges sur les produits. Cette exhaustivité a un prix : elle suppose des répartitions parfois arbitraires des charges indirectes, elle est lourde, et elle se prête mal aux décisions rapides. Pour de nombreuses décisions de gestion, on n'a pas besoin de connaître le coût « complet » d'un produit — on a besoin de savoir **ce qu'il rapporte réellement, à la marge.**"
        },
        {
          "type": "p",
          "text": "C'est l'objet des **méthodes de coûts partiels** : ne retenir dans le coût que la partie jugée pertinente des charges, les autres étant regroupées en masses non réparties. On raisonne alors non plus en résultat par produit, mais en **marges** — chaque produit contribue, par sa marge, à couvrir les charges communes."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Le principe des coûts partiels**"
        },
        {
          "type": "p",
          "text": "*Figure 1 — La logique des coûts partiels : du tri des charges à la marge contributive*"
        },
        {
          "type": "p",
          "text": "Ce chapitre suit une progression en **quatre temps**, reflétée par ses quatre parties : **comprendre** pourquoi les coûts partiels existent (Partie 1), **calculer** les marges (Partie 2), **interpréter** les résultats pour décider (Partie 3), puis **critiquer** la portée et les limites de l'approche (Partie 4)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Articulation avec les autres chapitres",
          "text": "Le modèle coût-volume-profit, le **seuil de profitabilité**, la marge de sécurité et le risque d'exploitation (y compris en avenir aléatoire) prolongent directement la marge sur coût variable : ils font l'objet d'un chapitre dédié. De même, l'optimisation sous contrainte (programmation linéaire, facteur rare) relève des outils de prévision de la production. Ce chapitre se concentre sur les coûts partiels eux-mêmes : direct, variable, spécifique et approche marginale."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Cohérence des données chiffrées",
          "text": "Pour les applications mono-produit, on raisonne sur un atelier produisant 5 000 produits par période, supportant 200 000 € de charges fixes. Les cas multi-produits (arbitrage, abandon) mobilisent des sociétés complémentaires (Nautis, Éditions du Phare) pour disposer de plusieurs gammes."
        }
      ]
    },
    {
      "id": "1-comprendre-les-fondements-des-couts-partiels",
      "title": "1. Comprendre — les fondements des coûts partiels",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "LES QUATRE DIMENSIONS DU CHAPITRE",
          "text": "**Comprendre (Partie 1) :**pourquoi renoncer à l'exhaustivité du coût complet ? Parce que beaucoup de décisions n'exigent pas un coût « vrai », mais une mesure de contribution.\n**Calculer (Partie 2) :**trier les charges, puis empiler les marges jusqu'au résultat.\n**Interpréter (Partie 3) :**traduire les marges en décisions de gestion, en choisissant la méthode adaptée.\n**Critiquer (Partie 4) :**mesurer la portée et les limites de l'approche, à l'ère numérique et durable."
        },
        {
          "type": "h3",
          "text": "1.1 Les limites des coûts complets"
        },
        {
          "type": "p",
          "text": "Le coût complet répond à deux besoins essentiels : **fixer un prix de vente** et **valoriser les stocks au bilan**. Mais il atteint ses limites dès qu'il s'agit d'éclairer une décision de gestion courante. La répartition des charges indirectes y est partiellement arbitraire ; un produit peut paraître déficitaire en coût complet uniquement parce qu'il supporte une quote-part de charges communes *qui subsisteraient même s'il disparaissait*. Décider sur cette seule base conduit à des erreurs."
        },
        {
          "type": "p",
          "text": "L'idée des coûts partiels est donc de ne retenir que les charges **réellement pertinentes** pour la décision : celles que l'on peut affecter sans ambiguïté (traçabilité) et celles que les décideurs maîtrisent (contrôlabilité)."
        },
        {
          "type": "h3",
          "text": "1.2 La logique des coûts partiels : raisonner par marges"
        },
        {
          "type": "p",
          "text": "Au lieu de répartir toutes les charges, on en isole une partie et on laisse le reste en **masse non répartie**. Le coût obtenu est « partiel » ; la différence entre le chiffre d'affaires et ce coût partiel est une **marge**, qui mesure la capacité contributive du produit — sa contribution à la couverture des charges non réparties, puis au résultat."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Deux qualités attendues des charges retenues",
          "text": "**Traçabilité :**la charge doit pouvoir être affectée sans ambiguïté à l'objet de coût.\n**Contrôlabilité :**la charge doit être maîtrisée par le décideur dont on évalue la performance."
        },
        {
          "type": "h3",
          "text": "1.3 Charges fixes, variables et semi-variables"
        },
        {
          "type": "p",
          "text": "Les coûts partiels reposent sur la distinction entre charges fixes et charges variables. Si **X** représente l'activité et **a** le coût variable unitaire : le coût variable total vaut **aX**, le coût fixe total vaut **b** (constant pour une structure donnée). Au niveau unitaire, le coût variable unitaire est fixe (= a) tandis que le coût fixe unitaire est variable (= b/X)."
        },
        {
          "type": "p",
          "text": "Cette dualité a une conséquence majeure : **le coût unitaire d'un produit dépend du volume produit**, non parce que les charges variables changent (elles sont fixes à l'unité), mais parce que les charges fixes se diluent sur un nombre croissant d'unités. C'est cet effet de dilution que les coûts partiels neutralisent en sortant les charges fixes du calcul par produit."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Une distinction toujours partiellement arbitraire",
          "text": "La frontière fixe/variable dépend de l'horizon retenu. Toute charge est **fixe par paliers** : une machine produisant 100 unités et un ouvrier 20 rendent l'amortissement fixe par palier de 100 et la main-d'œuvre fixe par palier de 20. Selon que la production oscille entre 5 et 15 ou entre 500 et 1 500, les mêmes charges seront considérées comme fixes ou variables."
        },
        {
          "type": "h3",
          "text": "Les charges semi-variables"
        },
        {
          "type": "p",
          "text": "Certaines charges comportent une part fixe (un abonnement) et une part proportionnelle à l'activité (la consommation) : ce sont les **charges semi-variables** (ou mixtes). Pour appliquer la méthode du coût variable, on les décompose sous la forme **Y = aX + b**, par ajustement linéaire (régression) des coûts totaux sur l'activité."
        },
        {
          "type": "p",
          "text": "*Figure 2 — Comportement des charges variables et fixes selon le niveau d’activité (total et unitaire)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Décomposer une charge semi-variable",
          "text": "On observe les charges totales pour quatre niveaux d'activité : 50 000 € (2 000 u), 55 000 € (2 400 u), 60 000 € (2 600 u), 70 000 € (3 200 u).**Un ajustement linéaire (fonction régression de la calculatrice) donne : Y = 17 X + 15 400.** Le coût variable unitaire est donc de 17 € et les charges fixes totales de 15 400 €.\n**Travail à faire : à partir de la série statistique, déterminer le coût variable unitaire et le montant des charges fixes totales par ajustement linéaire.**\n**Corrigé : un ajustement linéaire (fonction régression de la calculatrice) donne Y = 17 X + 15 400. Le coût variable unitaire est donc de 17 € et les charges fixes totales de 15 400 €.**"
        },
        {
          "type": "h3",
          "text": "1.4 Les quatre catégories de charges et les trois coûts partiels"
        },
        {
          "type": "p",
          "text": "La typologie la plus utile croise **deux critères** — direct/indirect et fixe/variable — et fait apparaître quatre catégories de charges."
        },
        {
          "type": "p",
          "text": "*Figure 3 — Les quatre catégories de charges au croisement des deux critères*"
        },
        {
          "type": "p",
          "text": "De ces catégories découlent les **trois coûts partiels** au programme (savoir 2.3) :"
        },
        {
          "type": "ul",
          "items": [
            "**Le coût direct :**ne retient que les charges directes (affectables sans calcul intermédiaire à un produit), qu'elles soient variables ou fixes. C'est la forme la plus simple de coût partiel.",
            "**Le coût variable :**ne retient que les charges variables (directes et indirectes). C'est la base de la méthode du même nom et de la marge sur coût variable.",
            "**Le coût spécifique :**retient les charges variables ET les charges fixes spécifiques (directes). On parle de « coût variable évolué »."
          ]
        },
        {
          "type": "p",
          "text": "À ces trois coûts s'ajoute le **coût marginal**, notion transversale qui ne correspond à aucune des quatre cases : c'est le coût d'une unité (ou d'une série) supplémentaire à produire. Il est étudié en Partie 3."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — « Coût direct » n'est pas « coût spécifique »",
          "text": "On évite d'appeler la méthode du coût spécifique « méthode du coût direct », car le coût spécifique intègre aussi des charges variables **indirectes** (énergie, transport), qui ne sont pas directes. Inversement, le coût direct peut inclure des charges fixes directes. Les deux notions se recoupent sans se confondre.\n**POINT EXAMEN — Point examen — Partie 1**\nCoûts partiels : ne retenir que les charges pertinentes ; raisonner en marges.\nMarge = CA − coût partiel = capacité contributive aux charges non réparties.\nQuatre catégories : variables directes/indirectes, fixes spécifiques/de structure.\nTrois coûts partiels : direct, variable, spécifique ; + le coût marginal."
        }
      ]
    },
    {
      "id": "2-calculer-les-methodes-et-les-marges",
      "title": "2. Calculer — les méthodes et les marges",
      "blocks": [
        {
          "type": "p",
          "text": "Cette partie constitue le **cœur technique** du chapitre. Elle présente les méthodes de coûts partiels — coût variable, coût spécifique, coût direct — et la construction des comptes de résultat qui les accompagnent. Le cas mono-produit COMPOSAL illustre le coût variable ; le cas multi-gammes **Nautis** sert la lecture par produit."
        },
        {
          "type": "h3",
          "text": "2.1 La méthode du coût variable et la marge sur coût variable"
        },
        {
          "type": "p",
          "text": "**Comprendre.**La méthode du coût variable isole les charges qui varient avec l'activité et laisse toutes les charges fixes en masse non répartie. Elle répond à la question : « combien chaque produit rapporte-t-il avant de financer la structure ? »"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le coût variable",
          "text": "Le coût variable est constitué de l'ensemble des charges qui **varient avec le volume d'activité** (production et/ou vente). La méthode ne s'intéresse qu'à la partie variable des charges ; les charges fixes restent une masse non répartie."
        },
        {
          "type": "h3",
          "text": "Calculer : la marge sur coût variable"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Marge sur coût variable et taux de marge**"
        },
        {
          "type": "p",
          "text": "Appliquée au composant COMPOSAL : MCV unitaire = 90 − 40 = 50 € ; taux de MCV = . Le compte de résultat différentiel de la période (5 000 composants) s'établit ainsi :"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Par unité**",
            "**Pour 5 000 u**"
          ],
          "rows": [
            [
              "Chiffre d'affaires",
              "90 €",
              "450 000 €"
            ],
            [
              "Charges variables",
              "40 €",
              "200 000 €"
            ],
            [
              "**Marge sur coût variable**",
              "**50 €**",
              "**250 000 €**"
            ],
            [
              "Charges fixes (masse non répartie)",
              "—",
              "200 000 €"
            ],
            [
              "**Résultat**",
              "—",
              "**50 000 €**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Interpréter le compte différentiel",
          "text": "Les charges fixes ne sont **jamais réparties** par produit : elles forment une masse globale, déduite une seule fois de la marge totale. C'est ce qui rend le compte différentiel si commode pour les décisions de court terme : la structure n'est pas affectée par la décision. La MCV est aussi la base du **seuil de profitabilité (CF / taux de MCV) déjà étudié au chapitre 3 (modèle Volume-Coût-Profit)**."
        },
        {
          "type": "h3",
          "text": "2.2 La méthode des coûts spécifiques et la marge sur coût spécifique"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Le coût variable ignore que certaines charges fixes sont propres à un produit (une machine dédiée). Le coût spécifique les réintègre, pour mesurer la contribution réelle de chaque produit."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le coût spécifique",
          "text": "La méthode des coûts spécifiques incorpore les **charges spécifiques**, c'est-à-dire les charges variables ET les charges fixes spécifiques (charges fixes directes, rattachables sans arbitraire à un objet de coût). Les charges fixes communes restent une masse non répartie."
        },
        {
          "type": "h3",
          "text": "Calculer : la marge sur coût spécifique"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**La marge sur coût spécifique**"
        },
        {
          "type": "p",
          "text": "La marge sur coût spécifique mesure la contribution **propre** d'un produit : ce qu'il dégage après avoir couvert non seulement ses charges variables, mais aussi les charges fixes qui n'existent que grâce à lui. Une lecture en deux étages s'installe :"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau de marge**",
            "**Ce qu'elle couvre**",
            "**Décision qu'elle éclaire**"
          ],
          "rows": [
            [
              "Marge sur coût variable",
              "Les charges fixes (spécifiques + communes)",
              "Faut-il abandonner à court terme ?"
            ],
            [
              "Marge sur coût spécifique",
              "Les charges fixes communes seulement",
              "Le produit couvre-t-il ses propres charges fixes ?"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.3 Le coût direct : précision terminologique"
        },
        {
          "type": "p",
          "text": "Le **coût direct** ne retient que les charges directes — affectables à un produit sans calcul de répartition. Il diffère du coût variable (qui peut inclure des variables indirectes) et du coût spécifique. Au DCG, on retient surtout que la méthode anglo-saxonne du *direct costing* correspond en réalité à notre **méthode du coût variable** : le terme « direct » y désigne, par abus de langage, les charges directement liées au volume. La rigueur française distingue trois notions — direct, variable, spécifique — qu'il ne faut pas confondre."
        },
        {
          "type": "h3",
          "text": "2.4 Construire et interpréter les comptes de résultat différentiels"
        },
        {
          "type": "p",
          "text": "Le compte de résultat différentiel et le compte par coûts spécifiques aboutissent au **même résultat global**, mais éclairent des questions différentes. Le cas multi-gammes Nautis permet de les confronter sur trois produits."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — NAUTIS — présentation du cas multi-gammes",
          "text": "Nautis conçoit et commercialise trois gammes de produits nautiques : kayaks, paddles et planches à voile. Données du dernier exercice (en euros) : **Kayak** — CA 300 000, charges variables 180 000, charges fixes spécifiques 40 000 ; **Paddle** — CA 200 000, charges variables 140 000, charges fixes spécifiques 20 000 ; **Voile** — CA 150 000, charges variables 120 000, charges fixes spécifiques 50 000. Charges fixes communes (non réparties) : 60 000."
        },
        {
          "type": "p",
          "text": "*Figure 4 — La cascade des marges, du chiffre d'affaires au résultat (cas Nautis)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Comptes différentiel et par coûts spécifiques",
          "text": "La société TechnoSport fabrique deux produits : une montre GPS et un bracelet connecté. Données de l'exercice : **Montre GPS** — CA 400 000 €, charges variables 240 000 €, charges fixes spécifiques 70 000 € ; **Bracelet** — CA 250 000 €, charges variables 175 000 €, charges fixes spécifiques 30 000 €. Charges fixes communes : 80 000 €.*Travail à faire : présenter le compte différentiel, puis le compte par coûts spécifiques, et conclure.*"
        },
        {
          "type": "p",
          "text": "**Corrigé :**"
        },
        {
          "type": "h3",
          "text": "1. Compte de résultat différentiel (coût variable)"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Montre GPS**",
            "**Bracelet**",
            "**TOTAL**"
          ],
          "rows": [
            [
              "Chiffre d'affaires",
              "400 000",
              "250 000",
              "650 000"
            ],
            [
              "Charges variables",
              "240 000",
              "175 000",
              "415 000"
            ],
            [
              "**Marge sur coût variable**",
              "**160 000**",
              "**75 000**",
              "**235 000**"
            ],
            [
              "Taux de MCV",
              "40 %",
              "30 %",
              "36,2 %"
            ],
            [
              "Charges fixes (100 000 + 80 000)",
              "",
              "",
              "180 000"
            ],
            [
              "**Résultat**",
              "",
              "",
              "**55 000**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2. Compte de résultat par coûts spécifiques"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Montre GPS**",
            "**Bracelet**",
            "**TOTAL**"
          ],
          "rows": [
            [
              "Marge sur coût variable",
              "160 000",
              "75 000",
              "235 000"
            ],
            [
              "Charges fixes spécifiques",
              "70 000",
              "30 000",
              "100 000"
            ],
            [
              "**Marge sur coût spécifique**",
              "**90 000**",
              "**45 000**",
              "**135 000**"
            ],
            [
              "Charges fixes communes",
              "",
              "",
              "80 000"
            ],
            [
              "**Résultat**",
              "",
              "",
              "**55 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Conclusion.**Les deux produits dégagent des marges sur coût variable et sur coût spécifique positives : chacun couvre ses charges variables et ses charges fixes spécifiques, et contribue aux charges communes. La montre GPS est la plus contributive (taux de MCV de 40 % et MCS de 90 000 €). Aucun abandon n'est à envisager. Les deux comptes donnent le même résultat (55 000 €), mais le second éclaire la contribution propre de chaque produit."
        },
        {
          "type": "h3",
          "text": "2.5 Comparaison coût variable / coût spécifique"
        },
        {
          "type": "p",
          "text": "Le coût spécifique est un **intermédiaire** entre le coût variable et le coût complet : plus exhaustif (donc plus précis) que le coût variable, mais plus sûr que le coût complet puisqu'il évite la répartition arbitraire des charges fixes communes."
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Coût variable**",
            "**Coût spécifique**"
          ],
          "rows": [
            [
              "Charges retenues",
              "Variables seulement",
              "Variables + fixes spécifiques"
            ],
            [
              "Marge calculée",
              "Marge sur coût variable",
              "Marge sur coût spécifique"
            ],
            [
              "Masse non répartie",
              "Toutes les charges fixes",
              "Charges fixes communes seulement"
            ],
            [
              "Apport principal",
              "Simplicité, risque d'exploitation",
              "Contribution réelle d'un produit"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Figure 5 — Marges par produit : la MCS négative de Voile saute aux yeux (cas Nautis)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 2",
          "text": "Coût variable → marge sur coût variable (MCV) ; .\nCoût spécifique → marge sur coût spécifique (MCS) = MCV − charges fixes spécifiques.\nDirect costing anglo-saxon = méthode du coût variable française.\nUne MCS négative est un signal d'alerte, pas une décision d'abandon."
        }
      ]
    },
    {
      "id": "3-interpreter-les-couts-partiels-outil-de-decision",
      "title": "3. Interpréter — les coûts partiels, outil de décision",
      "blocks": [
        {
          "type": "p",
          "text": "C'est ici que les coûts partiels prennent toute leur valeur. En raisonnant par marges, ils éclairent une série de décisions de gestion de **court terme** — à condition de poser l'hypothèse que la structure (les charges fixes) n'est pas modifiée par la décision."
        },
        {
          "type": "h3",
          "text": "3.1 Choisir la méthode selon la décision à éclairer"
        },
        {
          "type": "p",
          "text": "Aucune méthode de coûts n'est « la meilleure » dans l'absolu : **le choix dépend de la décision à éclairer**. C'est un attendu explicite du référentiel. Le tableau suivant guide ce choix."
        },
        {
          "type": "table",
          "headers": [
            "**Décision à prendre**",
            "**Méthode pertinente**",
            "**Pourquoi**"
          ],
          "rows": [
            [
              "Fixer un prix de vente durable",
              "Coût complet",
              "Doit couvrir toutes les charges"
            ],
            [
              "Valoriser les stocks (bilan)",
              "Coût complet",
              "Norme comptable"
            ],
            [
              "Accepter une commande ponctuelle",
              "Coût variable / marginal",
              "Structure inchangée"
            ],
            [
              "Maintenir ou abandonner un produit",
              "Coût spécifique",
              "Contribution propre du produit"
            ],
            [
              "Neutraliser le niveau d'activité",
              "Imputation rationnelle",
              "Isole l'effet volume"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.2 Le choix d'un mix de produits"
        },
        {
          "type": "p",
          "text": "Quand les ressources sont limitées (financement, capacité), on oriente l'effort vers les produits dégageant la plus forte **marge sur coût variable**, car ce sont eux qui contribuent le plus à couvrir les charges fixes. Le taux de marge sur coût variable est alors un guide précieux pour arbitrer le mix de produits."
        },
        {
          "type": "h3",
          "text": "3.3 L'acceptation d'une commande supplémentaire"
        },
        {
          "type": "p",
          "text": "Face à une commande exceptionnelle à un prix inférieur au prix habituel, il ne faut surtout pas « tout recalculer » en coût complet : il faut raisonner **à la marge**, en comparant la recette marginale (le prix proposé) au coût marginal (le coût de l'unité supplémentaire). La commande est acceptable dès lors qu'elle dégage une marge positive, même si son prix est inférieur au coût complet."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Accepter une commande spéciale ?",
          "text": "La Cidrerie Belval (boissons artisanales) reçoit une commande exceptionnelle. Un distributeur étranger commande 800 bouteilles supplémentaires à 60 € l'unité (prix habituel : 90 €). Le coût variable unitaire est de 40 €. La capacité de l'atelier est suffisante : aucune charge de structure supplémentaire.\n**Travail à faire : déterminer s'il faut accepter cette commande à prix réduit, en raisonnant à la marge.**\n**Corrigé :**\n**Raisonnement à la marge :**coût marginal = coût variable unitaire = 40 € ; recette marginale = 60 €. Résultat marginal unitaire = 60 − 40 = + 20 €.\n**Décision : accepter.**La commande améliore le résultat de 20 × 800 = + 16 000 €, alors même que son prix (60 €) est inférieur au coût complet (80 €). Le prix proposé couvre le coût variable et dégage une contribution aux charges fixes.\n**ERREURS FRÉQUENTES — Les conditions du raisonnement marginal**\nCe raisonnement n'est valable que si : la capacité est suffisante (pas d'investissement), la commande est **ponctuelle** et non récurrente, et elle ne « cannibalise » pas les ventes au prix normal (marché segmenté). Accepter durablement des prix proches du coût variable ruinerait l'entreprise."
        },
        {
          "type": "h3",
          "text": "3.4 Produire ou sous-traiter (make or buy)"
        },
        {
          "type": "p",
          "text": "La décision de sous-traiter se prend également à la marge. On compare le **coût variable interne** (économisé en cas de sous-traitance) au prix du sous-traitant. Les charges fixes de structure qui subsisteraient de toute façon ne doivent pas entrer dans la comparaison : seules comptent les charges réellement **évitables**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 4 — Produire ou sous-traiter (make or buy)",
          "text": "Le composant coûte aujourd'hui 9 € de charges variables par produit en interne, plus 30 000 € de charges fixes spécifiques (machine à corder amortissable). Un prestataire propose le composant à 11 € l'unité. Pour 5 000 produits :\n**Travail à faire : comparer le coût interne évitable au coût de la sous-traitance et conclure.**\n**Corrigé :**\n**Coût interne évitable =**9 × 5 000 + 30 000 (si la machine est revendable) = **75 000 €** ; coût de la sous-traitance = 11 × 5 000 = **55 000 €**.\n**Décision : sous-traiter (économie de 20 000 €)**— à condition que les 30 000 € soient réellement évitables. Si la machine n'est ni revendable ni réaffectable, seul le coût variable (45 000 €) est évité : la sous-traitance (55 000 €) coûterait alors 10 000 € de plus, et il faudrait produire en interne."
        },
        {
          "type": "h3",
          "text": "3.5 Le maintien ou l'abandon d'une activité"
        },
        {
          "type": "p",
          "text": "C'est la décision emblématique des coûts partiels. Un produit déficitaire en coût complet ne doit **jamais** être abandonné sur ce seul critère : il faut dérouler la lecture par marges."
        },
        {
          "type": "p",
          "text": "*Figure 6 — L'arbre de décision : faut-il abandonner un produit déficitaire en coût complet ?*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — NAUTIS — faut-il abandonner la gamme Voile ?",
          "text": "Si l'on répartit les charges fixes communes au prorata du chiffre d'affaires, la gamme Voile ressort déficitaire en coût complet (environ − 34 000 €). Faut-il l'abandonner ? Déroulons l'analyse par les marges.\n**Étape 1 — marge sur coût variable.**MCV de Voile = 150 000 − 120 000 = **+ 30 000 €** (positive). L'abandonner ferait perdre 30 000 € de contribution : le résultat global tomberait de 40 000 à 10 000 €. Il ne faut donc pas l'abandonner à la légère.\n**Étape 2 — marge sur coût spécifique.**MCS de Voile = 30 000 − 50 000 = **− 20 000 €** (négative). La gamme ne couvre pas ses propres charges fixes spécifiques : c'est un vrai signal d'alerte.\nÉtape 3 — nuancer avant de décider. Avant de condamner Voile, il faut vérifier qu'on ne peut pas augmenter son activité. Son seuil de profitabilité spécifique = = 50 000 / 0,20 = 250 000 € de chiffre d'affaires (contre 150 000 € actuels). Si ce niveau est atteignable, la gamme redevient contributive. S'y ajoutent des considérations stratégiques (image, gamme complète, ne pas laisser la place à un concurrent).\n**La règle de décision**\nMCV négative → le produit ne couvre même pas ses charges variables : abandon à envisager.\nMCV positive mais MCS négative → contribue aux charges communes mais pas à ses charges spécifiques : analyser (seuil spécifique, stratégie) avant de décider.\nMCS positive → le produit contribue à la couverture des charges communes : maintien."
        },
        {
          "type": "h3",
          "text": "3.6 L'approche marginale et la fixation du prix plancher"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Le coût marginal mesure ce que coûte réellement « une unité de plus ». C'est lui — et non le coût complet — qui détermine le prix minimal acceptable d'une commande."
        },
        {
          "type": "p",
          "text": "*Figure 7 — Le coût moyen : allure en U selon les rendements (croissants → décroissants)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le coût marginal",
          "text": "Le coût marginal est, selon le PCG, la différence entre l'ensemble des charges nécessaires à une production donnée et celles nécessaires à cette même production **majorée (ou minorée) d'une unité**. En contrôle de gestion, on l'étend à une série supplémentaire : coût marginal = Δ Coût total / Δ Quantité."
        },
        {
          "type": "p",
          "text": "*Figure 8 — Le coût marginal selon que la structure est suffisante ou non*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 5 — Commande à structure insuffisante",
          "text": "Méca-Précision (sous-traitance industrielle) reçoit une commande de 300 pièces à 70 €, mais l'atelier est déjà saturé : l'honorer impose 12 000 € de location de machine (répercutés sur la seule commande). Coût variable unitaire majoré : 48 € (heures supplémentaires). Coût marginal total = 48 × 300 + 12 000 = 26 400 €, soit 88 € l'unité.\n**Travail à faire : déterminer le résultat marginal de la commande et le prix plancher ; conclure.**\n**Corrigé :**\n**Recette marginale unitaire = 70 € < coût marginal unitaire = 88 € → résultat marginal = − 18 € par pièce (− 5 400 € au total).**\nDécision : **refuser** la commande. Le **prix plancher** (prix de vente minimum acceptable) serait de **88 €** — le coût marginal unitaire.\n**REMARQUE — Optimum économique et optimum technique**\nL'analyse marginale montre que les rendements sont généralement décroissants. Deux repères : l'**optimum économique** est atteint quand la recette marginale égale le coût marginal ; l'**optimum technique**, quand le coût moyen est minimum. (Les démonstrations mathématiques ne sont pas exigées au DCG.)"
        },
        {
          "type": "p",
          "text": "*Figure 9 — La décision se lit d'un coup d'œil : accepter si la recette dépasse le coût marginal*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 3",
          "text": "Choisir la méthode selon la décision : c'est un attendu du référentiel.\nCommande supplémentaire : comparer recette marginale et coût marginal.\nAbandon : MCV puis MCS, puis nuancer (seuil de profitabilité spécifique, stratégie).\nPrix plancher = coût marginal unitaire (= coût variable si structure suffisante)."
        }
      ]
    },
    {
      "id": "4-critiquer-portee-limites-et-evolutions",
      "title": "4. Critiquer — portée, limites et évolutions",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Les apports des coûts partiels"
        },
        {
          "type": "p",
          "text": "Les méthodes de coûts partiels sont **simples et rapides** à mettre en œuvre dès lors que l'organisation sait distinguer charges fixes et variables. Elles évitent l'arbitraire des répartitions, facilitent les simulations et la prévision, et sont bien adaptées au pilotage des centres de responsabilité (les responsables subalternes maîtrisent les charges variables, peu les charges de structure). Elles éclairent les décisions de court terme et permettent de calculer les indicateurs de risque d'exploitation et le seuil de profitabilité."
        },
        {
          "type": "h3",
          "text": "4.2 Les limites de l'approche"
        },
        {
          "type": "ul",
          "items": [
            "**Hypothèse de proportionnalité :**le coût variable est supposé proportionnel au volume, alors que le volume n'est qu'un facteur de coût parmi d'autres.",
            "**Risque de dérive des charges fixes :**pousser les produits à forte MCV peut alourdir les fonctions de support (R&D, logistique, qualité) et donc les charges de structure.",
            "**Pas de prix de vente :**en l'absence de résultat par produit, les coûts partiels ne permettent pas de fixer un prix de vente durable (il faut un coût complet).",
            "**Stocks sous-évalués :**un coût partiel sous-évalue les stocks ; au bilan, ceux-ci doivent être valorisés au coût complet.",
            "**Vision de court terme :**à long terme, les décisions stratégiques modifient les charges de structure ; l'analyse par marges ne suffit plus."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Abandon d'un produit : ne pas oublier la stratégie",
          "text": "Une marge sur coût spécifique négative ne justifie pas, à elle seule, l'abandon : il faut considérer l'image de marque, la complémentarité de la gamme, le risque de laisser le créneau à un concurrent, et les coûts induits par l'abandon (réorganisation). **L'analyse chiffrée éclaire la décision, elle ne la remplace pas.**"
        },
        {
          "type": "h3",
          "text": "4.3 Comparaison raisonnée avec les autres méthodes"
        },
        {
          "type": "p",
          "text": "*Figure 10 — Quelle méthode de coûts pour quelle décision ?*"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Ce qu'elle apporte**",
            "**Sa limite principale**"
          ],
          "rows": [
            [
              "Coût complet",
              "Coût de revient, prix, valorisation des stocks",
              "Répartitions arbitraires, lourdeur"
            ],
            [
              "Imputation rationnelle",
              "Neutralise l'effet du niveau d'activité",
              "Activité normale conventionnelle"
            ],
            [
              "ABC",
              "Répartition fine des indirects par activités",
              "Coûteuse, complexe"
            ],
            [
              "Coûts partiels",
              "Décisions de court terme par les marges",
              "Pas de prix, vision court terme"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Ces méthodes ne s'excluent pas : dans un sujet d'examen, la marge sur coût variable vient souvent **compléter** une analyse en coût complet — typiquement pour décider du maintien ou de l'abandon d'un produit, ou pour étudier le risque d'exploitation. Le bon réflexe est de choisir la méthode selon la décision à éclairer."
        },
        {
          "type": "h3",
          "text": "4.4 Contrôle de gestion et numérique"
        },
        {
          "type": "p",
          "text": "La principale difficulté pratique des coûts partiels — **séparer charges fixes et variables** — est aujourd'hui largement facilitée par les outils numériques."
        },
        {
          "type": "p",
          "text": "*Figure 11 — Les outils numériques au service des coûts partiels*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE",
          "text": "**ERP / PGI :**paramétrage de la nature (fixe/variable) des charges et calcul automatique des marges par produit, par client ou par canal.\n**Tableur et régression :**la décomposition des charges semi-variables (Y = aX + b), longtemps fastidieuse, s'obtient en quelques clics ; les simulations de mix sont instantanées.\n**Business Intelligence (Power BI) :**tableaux de bord dynamiques des contributions, permettant de visualiser en temps réel les marges par segment et de détecter les produits à MCS négative.\n**Data analytics et IA :**prévision des volumes et estimation de l'élasticité-prix affinent l'évaluation des recettes marginales et la pertinence des décisions de commande spéciale."
        },
        {
          "type": "h3",
          "text": "4.5 Performance globale et durabilité"
        },
        {
          "type": "p",
          "text": "Le raisonnement par marges, longtemps cantonné à la performance financière, s'étend à la **performance globale**. Plusieurs ponts existent avec la dimension extra-financière (ESG/RSE) :"
        },
        {
          "type": "ul",
          "items": [
            "**Marge sur coût variable « verte » : isoler le coût des intrants écoresponsables permet de mesurer la contribution réelle des gammes durables. Chez COMPOSAL, le composant écoconçu conserve une MCV élevée (50 €) malgré un surcoût matière, ce qui valide économiquement le positionnement durable.**",
            "**Décisions d'abandon et parties prenantes :**une activité à MCS négative peut être maintenue pour des raisons sociales (emploi local) ou environnementales (recyclage), au titre de la responsabilité élargie de l'entreprise. La marge éclaire le coût de ce choix, sans le dicter.",
            "**Coût marginal et sobriété :**refuser une commande à coût marginal supérieur au prix, c'est aussi refuser une production destructrice de valeur et consommatrice de ressources — convergence entre rationalité économique et sobriété."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Niveau attendu au DCG",
          "text": "Le lien entre coûts partiels et performance globale est traité au niveau de la **sensibilisation** : savoir l'évoquer dans un écrit argumenté, non maîtriser des outils extra-financiers avancés (réservés au DSCG).\n**POINT EXAMEN — Point examen — Partie 4**\nApports : simplicité, évite l'arbitraire, décisions de court terme, seuil de profitabilité.\nLimites : pas de prix de vente, stocks au coût complet, vision court terme.\nComplémentaires des coûts complets, de l'imputation rationnelle et de l'ABC.\nLe numérique facilite la séparation fixes/variables ; lien avec la performance globale."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ Application récapitulative**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 6 — Éclairer trois décisions par les marges (récapitulative)",
          "text": "Les Éditions du Phare exploitent trois activités : **Livres**, **Revues** et **Emballages** (vente de cartons aux confrères). Données de l'exercice (en euros) :\n**Livres** — CA 500 000, charges variables 300 000, charges fixes spécifiques 90 000 ; **Revues** — CA 300 000, charges variables 195 000, charges fixes spécifiques 50 000 ; **Emballages** — CA 100 000, charges variables 78 000, charges fixes spécifiques 40 000. Charges fixes communes : 70 000.\n*Travail à faire : (1) résultat de chaque activité en coût complet (charges communes au prorata du CA) ; (2) compte différentiel et compte par coûts spécifiques ; (3) se prononcer sur l'abandon des Emballages ; (4) un client propose 20 000 livres supplémentaires à 5 € (capacité disponible, prix habituel 6 €, coût variable unitaire 3,60 €) : faut-il accepter ?*"
        },
        {
          "type": "p",
          "text": "**Corrigé :**"
        },
        {
          "type": "h3",
          "text": "1. Résultat par activité en coût complet (le piège)"
        },
        {
          "type": "p",
          "text": "Charges communes réparties au prorata du CA (total CA = 900 000) : Livres ; Revues 23 333 ; Emballages 7 778."
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Livres**",
            "**Revues**",
            "**Emballages**"
          ],
          "rows": [
            [
              "Chiffre d'affaires",
              "500 000",
              "300 000",
              "100 000"
            ],
            [
              "Charges variables",
              "300 000",
              "195 000",
              "78 000"
            ],
            [
              "Charges fixes spécifiques",
              "90 000",
              "50 000",
              "40 000"
            ],
            [
              "Quote-part charges communes",
              "38 889",
              "23 333",
              "7 778"
            ],
            [
              "**Résultat (coût complet)**",
              "**71 111**",
              "**31 667**",
              "**− 25 778**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "En coût complet, les Emballages ressortent largement déficitaires (− 25 778 €). Un raisonnement hâtif conclurait à l'abandon."
        },
        {
          "type": "h3",
          "text": "2. Compte de résultat différentiel et par coûts spécifiques"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Livres**",
            "**Revues**",
            "**Emballages**",
            "**TOTAL**"
          ],
          "rows": [
            [
              "Marge sur coût variable",
              "200 000",
              "105 000",
              "22 000",
              "327 000"
            ],
            [
              "Taux de MCV",
              "40 %",
              "35 %",
              "22 %",
              "36,3 %"
            ],
            [
              "Charges fixes spécifiques",
              "90 000",
              "50 000",
              "40 000",
              "180 000"
            ],
            [
              "**Marge sur coût spécifique**",
              "**110 000**",
              "**55 000**",
              "**− 18 000**",
              "**147 000**"
            ],
            [
              "Charges fixes communes",
              "",
              "",
              "",
              "70 000"
            ],
            [
              "**Résultat global**",
              "",
              "",
              "",
              "**77 000**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3. Faut-il abandonner les Emballages ?"
        },
        {
          "type": "p",
          "text": "**Non, pas mécaniquement.**La MCV des Emballages est **positive (+ 22 000 €)** : l'activité contribue à couvrir les charges communes. Si on l'abandonnait sans rien changer d'autre, on perdrait ces 22 000 € de contribution et le résultat global tomberait de 77 000 à 55 000 €. En revanche, la MCS est **négative (− 18 000 €)** : l'activité ne couvre pas ses propres charges fixes spécifiques. C'est un signal d'alerte. Le **seuil de profitabilité spécifique** = 40 000 / 0,22 = **181 818 € de CA** (contre 100 000 actuels). Si ce niveau n'est pas atteignable et si les 40 000 € de charges fixes spécifiques sont réellement évitables, l'abandon devient pertinent — sous réserve des effets stratégiques (service rendu aux clients, image)."
        },
        {
          "type": "h3",
          "text": "4. Faut-il accepter la commande de 20 000 livres à 5 € ?"
        },
        {
          "type": "p",
          "text": "**Oui.**Capacité disponible → raisonnement à la marge. Coût marginal = coût variable unitaire = **3,60 €** ; recette marginale = 5 €. Marge unitaire = 5 − 3,60 = **+ 1,40 €**."
        },
        {
          "type": "p",
          "text": "**La commande dégage 1,40 € de marge par livre, soit + 28 000 € de résultat** — alors même que le prix (5 €) est inférieur au prix habituel (6 €) —, à condition qu'elle ne se substitue pas aux ventes normales (marché distinct) et reste ponctuelle."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les réflexes de l'application",
          "text": "Ne jamais conclure à l'abandon sur le seul résultat en coût complet.\nMCV positive → l'abandon détruirait de la contribution ; MCS négative → signal d'alerte.\nVérifier le seuil de profitabilité spécifique avant de décider.\nPour une commande spéciale : raisonner à la marge, vérifier la capacité."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse et fiche de révision**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Deux axes à ne jamais confondre : direct/indirect (rattachement) et variable/fixe (comportement) — les coûts partiels reposent sur le second.\n• Décision d'abandon : on n'abandonne un produit que si sa marge sur coût spécifique est négative ; les charges fixes communes subsistent après l'abandon.\n• Coût marginal = coût de la dernière unité produite ; accepter une commande supplémentaire si son prix dépasse le coût marginal, à condition d'avoir de la capacité disponible.\n• Ne pas imputer de charges fixes communes à un produit pour juger de son intérêt : raisonner en marges (sur coût variable, puis sur coût spécifique).\n• Pont → Ch03 (marge sur coût variable, seuil), Ch12 (maximiser la MCV sous contraintes) et Ch18 (prix de cession au coût marginal)."
        },
        {
          "type": "h3",
          "text": "Fiche de révision"
        },
        {
          "type": "h3",
          "text": "Tableau récapitulatif des notions"
        },
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
              "Coût direct",
              "Charges affectables sans répartition",
              "Simplicité maximale",
              "Ignore les indirects pertinents"
            ],
            [
              "Coût variable",
              "Charges variant avec l'activité",
              "MCV, seuil, risque d'exploitation",
              "Ignore les charges fixes"
            ],
            [
              "Coût spécifique",
              "Variables + fixes spécifiques",
              "Contribution réelle d'un produit",
              "Charges communes non réparties"
            ],
            [
              "Marge sur coût variable",
              "CA − charges variables",
              "Décision d'abandon court terme",
              "Dépend du volume"
            ],
            [
              "Marge sur coût spécifique",
              "MCV − charges fixes spécifiques",
              "Couverture des charges communes",
              "Signal, pas décision"
            ],
            [
              "Coût marginal",
              "Coût d'une unité/série supplémentaire",
              "Commande, prix plancher",
              "Usage ponctuel"
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
          "text": "**Les relations essentielles**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Pièges classiques & conseils méthodologiques",
          "text": "Abandonner un produit à MCV positive : on perdrait sa contribution aux charges fixes.\nConclure à l'abandon sur une MCS négative sans vérifier le seuil spécifique ni la stratégie.\n« Tout recalculer » pour une commande spéciale : il faut raisonner à la marge.\nValoriser les stocks au coût partiel : au bilan, c'est le coût complet.\nOublier le coût de structure supplémentaire quand la structure est insuffisante."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
