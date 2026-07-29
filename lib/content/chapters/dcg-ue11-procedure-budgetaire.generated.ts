// Généré par scripts/convert-docx.mjs depuis CHAPITRE_09__LA_PROCEDURE_BUDGETAIRE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-procedure-budgetaire",
  "level": "DCG",
  "ue": "UE11",
  "number": 9,
  "title": "La procédure budgétaire",
  "description": "",
  "durationMin": 30,
  "sections": [
    {
      "id": "introduction",
      "title": "Introduction",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Axe 3 — Les budgets, outil de pilotage de la performance. Compétence 3.1 « Analyser la démarche budgétaire » (5 heures). Ce chapitre ouvre la partie « pilotage budgétaire ». Il pose la logique d’ensemble du système budgétaire — sa raison d’être, son déroulement et ses limites — avant l’étude détaillée des outils de prévision (chapitre suivant) et du contrôle budgétaire.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Délimiter et analyser la démarche budgétaire dans tout type d’organisation.\n• Repérer les rôles de la démarche budgétaire, ses intérêts et ses limites.\n• Situer le budget dans l’articulation stratégie — plans — programmes — budgets.\n• Identifier les acteurs du processus et le rôle de la négociation d’objectifs.\n• Analyser le budget par centre, par activité et par processus, et porter un regard critique sur le système budgétaire (enjeux comportementaux, évolutions contemporaines)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "*« Un long voyage ne s’improvise pas. »*Cette formule, qui renvoie à l’origine même du mot budget, résume l’enjeu du présent chapitre. Toute organisation — entreprise industrielle, société de services, administration, association — doit anticiper : combien vendre, produire, acheter, investir, et avec quelles ressources financières ? Faute de prévoir, elle subit les événements au lieu de les piloter."
        },
        {
          "type": "p",
          "text": "Le **système budgétaire** est précisément l’outil par lequel les organisations traduisent leurs objectifs stratégiques en plans d’action puis en budgets chiffrés. Il constitue, avec les coûts et les indicateurs, l’une des trois dimensions de la « boîte à outils » du contrôle de gestion. Mais il ne se réduit pas à une mécanique comptable : c’est un dispositif de pilotage, de coordination, de communication et de motivation, qui engage des comportements humains."
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit de la réforme, ce chapitre vise à **comprendre la démarche budgétaire, son utilité et ses limites**, sans entrer dans la construction fine des budgets — celle-ci relève des techniques de prévision étudiées ensuite. Chaque notion est donc abordée selon quatre dimensions : **comprendre** pourquoi le budget existe, **décrire** comment se déroule la procédure, **interpréter** son rôle dans le pilotage, et **critiquer** ses dérives et ses alternatives."
        },
        {
          "type": "p",
          "text": "La planification suit une cascade logique : la vision stratégique se décline en objectifs, puis en plans d’action, puis en programmes et budgets, dont l’exécution est enfin confrontée aux réalisations par le contrôle budgétaire. Cette boucle de régulation — dite cybernétique — fait du budget la « boussole » de l’action quotidienne."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/01.png",
          "alt": "Figure du cours",
          "width": 1640,
          "height": 600,
          "caption": "Figure 1 — De la vision stratégique au contrôle : la boucle de régulation budgétaire"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une question de vocabulaire",
          "text": "On réserve le terme **budget** aux prévisions chiffrées *en valeur monétaire* (budget des ventes, des investissements…). Une prévision chiffrée *non monétaire* — quantités, heures, tonnes — relève du **programme** : ainsi le « programme des approvisionnements » décrit des quantités et des dates, là où le « budget des approvisionnements » en chiffre le montant."
        }
      ]
    },
    {
      "id": "1-les-fondements-de-la-gestion-budgetaire",
      "title": "1. Les fondements de la gestion budgétaire",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 La notion de budget"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Gestion budgétaire et budget",
          "text": "La **gestion budgétaire** est un mode de gestion à court terme qui englobe l’ensemble des activités d’une organisation. Elle comprend une **période de budgétisation** (prévision) suivie d’une **période de contrôle budgétaire** (suivi des écarts). Un **budget** est un ensemble cohérent de prévisions chiffrées — ventes, production, approvisionnements, investissements, financement, personnel — exprimées en valeur monétaire. Le réseau des budgets assure la cohérence à court terme de l’ensemble et permet la consolidation en documents de synthèse prévisionnels."
        },
        {
          "type": "p",
          "text": "La gestion budgétaire est donc à la fois un **langage commun** (tout est ramené à une unité monétaire, ce qui permet d’agréger des éléments hétérogènes) et un **contrat de gestion** (chaque responsable s’engage sur des objectifs chiffrés)."
        },
        {
          "type": "h3",
          "text": "1.2 Origines : du voyageur au contrôle de gestion"
        },
        {
          "type": "p",
          "text": "Le terme « budget » vient du vieux français *bougette* (« petite bouge »), le sac ou la bourse dans lequel le voyageur du Moyen-Âge serrait ses écus. Préparer un voyage, c’était estimer à l’avance le montant des frais : la bougette représentait la prévision des coûts. Le mot fut repris par les Anglais à l’issue de la guerre de Cent Ans, à l’époque où naissaient les institutions parlementaires : le budget devint la somme allouée par un vote du Parlement à une administration pour son fonctionnement."
        },
        {
          "type": "p",
          "text": "Ce mécanisme d’allocation résout un problème de gestion universel : **décentraliser tout en gardant le contrôle**. Une dépense ne peut être engagée que si elle a été prévue dans une ligne budgétaire. Au début du XXe siècle, les grandes entreprises ont transposé cette procédure pour leurs besoins internes : centraliser la réflexion stratégique, décentraliser la gestion opérationnelle, et contrôler le système par l’allocation budgétaire des ressources. Le budget devient ainsi l’instrument fondateur du contrôle de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — La relation d’agence (Jensen et Meckling, 1976)",
          "text": "Une **relation d’agence** est un contrat par lequel une personne (le *principal*) engage une autre (l’*agent*) pour agir en son nom, ce qui implique une délégation du pouvoir de décision. Le vote du budget régule cette relation : il permet au principal de fixer un cadre et de contrôler l’agent. La théorie de l’agence éclaire ainsi pourquoi le budget est aussi un dispositif de réduction des divergences d’intérêts au sein de l’organisation."
        },
        {
          "type": "h3",
          "text": "1.3 Les finalités du système budgétaire"
        },
        {
          "type": "p",
          "text": "Le budget remplit simultanément plusieurs fonctions, qu’il faut savoir distinguer pour comprendre son rôle de pilotage."
        },
        {
          "type": "h3",
          "text": "Un instrument de pilotage et de prévision"
        },
        {
          "type": "p",
          "text": "Le budget est la pièce centrale du mécanisme de régulation « cybernétique » : il explicite l’ensemble des prévisions et objectifs qui servent de boussole à l’action. Les gestionnaires étant toujours en situation d’information imparfaite, les réalisations s’écartent inévitablement des objectifs ; il faut donc une procédure de contrôle par rétroaction des écarts pour éviter les « dérapages ». Sans prévision budgétaire, pas de contrôle budgétaire possible."
        },
        {
          "type": "h3",
          "text": "Un instrument de simulation et d’aide à la décision"
        },
        {
          "type": "p",
          "text": "Avant d’arrêter le budget définitif, on « teste à blanc » plusieurs hypothèses, en mesurant l’impact d’une décision sur le résultat prévisionnel. Le budget joue alors le rôle d’un outil d’aide à la décision — d’où l’utilité majeure du tableur, où il suffit de changer une donnée (niveau d’activité, prix) pour obtenir une nouvelle prévision. Ces simulations supposent une comptabilité de gestion en coûts partiels : c’est la connaissance de la structure des charges (fixes et variables) qui permet les calculs prévisionnels."
        },
        {
          "type": "h3",
          "text": "Un instrument de coordination et de communication"
        },
        {
          "type": "p",
          "text": "Les budgets relient les services : le budget des ventes conditionne celui de la production, qui conditionne ceux des approvisionnements et des investissements. La construction du réseau budgétaire force les unités à se coordonner et diffuse, du sommet vers la base, les objectifs de l’organisation. Le budget est ainsi un puissant vecteur de communication interne."
        },
        {
          "type": "h3",
          "text": "Un instrument de motivation et de prévention des conflits"
        },
        {
          "type": "p",
          "text": "L’entreprise est un milieu où s’opposent des intérêts (direction et syndicats, services entre eux). La procédure budgétaire permet d’arriver, par la négociation, à un compromis qui se présente comme un contrat entre parties prenantes. Plus la procédure est décentralisée et participative, plus le budget explicite ce compromis et fixe des objectifs mobilisateurs : on touche ici au management et à la gestion des ressources humaines."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Les cinq fonctions à citer",
          "text": "**Prévision** · **coordination** · **communication** · **motivation** · **contrôle**. Une copie qui, avant tout calcul, situe le budget dans ces cinq rôles montre au correcteur une compréhension d’ensemble de la démarche — exactement ce qu’attend la compétence 3.1."
        },
        {
          "type": "h3",
          "text": "1.4 Budget par centre, par activité, par processus"
        },
        {
          "type": "p",
          "text": "Le programme rénové demande de distinguer trois logiques de découpage budgétaire, de plus en plus transversales."
        },
        {
          "type": "table",
          "headers": [
            "**Logique**",
            "**Maille budgétaire**",
            "**Apport**",
            "**Limite**"
          ],
          "rows": [
            [
              "**Par centre**",
              "Centre de responsabilité (service, division)",
              "Responsabilise un manager identifié ; cohérent avec l’organigramme",
              "Vision verticale « en silo », peu transversale"
            ],
            [
              "**Par activité**",
              "Activité (au sens ABC/ABM)",
              "Relie les ressources aux activités consommatrices ; éclaire les inducteurs de coûts",
              "Plus lourd à mettre en place"
            ],
            [
              "**Par processus**",
              "Processus transversal (de bout en bout)",
              "Décloisonne, oriente vers la valeur client",
              "Difficile à rattacher à un responsable unique"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Ces trois approches ne s’excluent pas : une entreprise peut budgéter par centre pour la responsabilisation, tout en suivant ses processus clés pour piloter la performance transversale. La logique par activité fait le pont entre les deux."
        },
        {
          "type": "h3",
          "text": "1.5 Les limites du budget : un premier regard critique"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "Dès ce stade, trois limites doivent être posées : **la rigidité** (un budget annuel fige des hypothèses dans un environnement parfois turbulent), **le coût et la lourdeur** de la procédure (plusieurs mois de travail), et **les effets comportementaux** (le budget engage des personnes, avec des risques de jeux et de dérives). La Partie 4 y reviendra en détail. Le budget n’est ni une vérité ni une fin en soi : c’est un outil dont la valeur dépend de l’intelligence de son usage."
        }
      ]
    },
    {
      "id": "2-la-procedure-budgetaire",
      "title": "2. La procédure budgétaire",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 L’articulation plan — programmes — budgets"
        },
        {
          "type": "p",
          "text": "La gestion budgétaire illustre la conception du contrôle de gestion comme moyen de décliner la stratégie. Trois niveaux s’emboîtent, du plus global au plus opérationnel."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/02.png",
          "alt": "2. La procédure budgétaire",
          "width": 1520,
          "height": 640,
          "caption": "Figure 2 — L’articulation plan — programmes — budgets : décliner la stratégie"
        },
        {
          "type": "p",
          "text": "Les **plans** pluriannuels (3 à 5 ans) explicitent les orientations stratégiques : projections de chiffre d’affaires et de résultat, principales opérations d’investissement et de financement. Ils fournissent le cadre général du développement."
        },
        {
          "type": "p",
          "text": "Les **programmes** précisent, à plus court terme, les niveaux d’activité en unités physiques (nombre de produits, tonnes, heures-machine). Pour un atelier, le programme mensuel de fabrication permet de prévoir le plan de charge des machines."
        },
        {
          "type": "p",
          "text": "Les **budgets** représentent le chiffrage en unités monétaires de la mise en œuvre d’un programme. Pour passer du programme au budget, on fait des hypothèses économiques sur les prix et les coûts (cours des matières, coûts variables unitaires, charges fixes)."
        },
        {
          "type": "h3",
          "text": "2.2 Le réseau des budgets"
        },
        {
          "type": "p",
          "text": "Les budgets s’enchaînent selon une logique précise. On distingue les **budgets opérationnels (ou fonctionnels)** — ventes, production, approvisionnements, services administratifs, investissements — et les **budgets financiers (ou de synthèse)**, qui récapitulent l’impact des premiers : essentiellement le budget de trésorerie."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/03.png",
          "alt": "2. La procédure budgétaire",
          "width": 1640,
          "height": 760,
          "caption": "Figure 3 — Le réseau des budgets : tout découle des ventes, tout converge vers la trésorerie"
        },
        {
          "type": "p",
          "text": "Deux principes gouvernent cet enchaînement. **En amont**, tous les budgets découlent des prévisions de ventes : le budget des ventes est donc le premier construit, car c’est l’activité commerciale qui détermine la production, puis les approvisionnements et les investissements. **En aval**, tous les budgets ont des conséquences sur la trésorerie : le budget de trésorerie est le dernier établi, car il fait la synthèse financière et permet de vérifier « si ça passe ou si ça casse »."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Hors programme",
          "text": "Le budget de trésorerie détaillé (budgets des encaissements, de la TVA à décaisser, des décaissements) ainsi que les **comptes financiers prévisionnels** (compte de résultat et bilan prévisionnels) ne sont pas au programme de la compétence 3.1 : le référentiel précise qu’ils ne sont pas abordés. On les cite ici comme aboutissement logique de la procédure, sans en développer la mécanique de calcul, qui relève d’autres enseignements."
        },
        {
          "type": "h3",
          "text": "2.3 Le cycle budgétaire"
        },
        {
          "type": "p",
          "text": "La procédure budgétaire est une activité cyclique qui rythme annuellement la vie de l’entreprise. Pour une entreprise calant son exercice sur l’année civile, le scénario classique se déroule de septembre à décembre, puis se prolonge par un suivi mensuel."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/04.png",
          "alt": "2. La procédure budgétaire",
          "width": 1640,
          "height": 600,
          "caption": "Figure 4 — Le calendrier budgétaire type et la procédure de navette"
        },
        {
          "type": "h3",
          "text": "Septembre — la note d’orientation"
        },
        {
          "type": "p",
          "text": "La direction générale publie une **note d’orientation générale** (aussi appelée « lettre de cadrage » ou « prébudget »), adressée aux principaux responsables. Elle fixe les objectifs et les grandes orientations de l’année à venir, en cohérence avec le plan stratégique mais en tenant compte des infléchissements imposés par l’environnement (une tranche d’investissement peut être différée)."
        },
        {
          "type": "h3",
          "text": "Octobre — les budgets décentralisés"
        },
        {
          "type": "p",
          "text": "Chaque composante (département, direction, ou filiale dans un groupe) établit de façon décentralisée son propre budget : ce sont les opérationnels qui sont les mieux placés pour évaluer les contraintes. Ce principe doit toutefois être relativisé : plus l’activité est intégrée verticalement, plus les unités amont ont besoin des prévisions des unités aval, ce qui peut justifier une certaine centralisation. Les esquisses budgétaires sont réunies par le contrôleur de gestion."
        },
        {
          "type": "h3",
          "text": "Novembre — la navette budgétaire"
        },
        {
          "type": "p",
          "text": "L’harmonisation se réalise selon un processus itératif de **« navette »** : les projets de budgets font l’aller-retour entre les unités décentralisées et la cellule de coordination (direction financière ou contrôle de gestion), par analogie avec la navette parlementaire d’un projet de loi. Cette procédure réduit les incohérences, dégage des compromis et opère les arbitrages, notamment sous contrainte financière. Le budget n’explicite donc pas des prévisions imposées, mais des **objectifs négociés**."
        },
        {
          "type": "h3",
          "text": "Décembre — le budget définitif"
        },
        {
          "type": "p",
          "text": "Le budget définitif est arrêté, les derniers arbitrages relevant de la direction générale. Dans les grandes entreprises, ce document — la **liasse budgétaire** — peut compter plusieurs centaines de pages, mais sa synthèse est assurée par le compte de résultat prévisionnel. Les budgets sont alors **mensualisés** pour permettre le contrôle budgétaire en cours d’exercice."
        },
        {
          "type": "h3",
          "text": "En cours d’exercice — le suivi mensuel"
        },
        {
          "type": "p",
          "text": "Mensuellement, les prévisions sont rapprochées des réalisations fournies par la comptabilité, dans des états de contrôle budgétaire permettant de calculer des écarts. Ce « suivi » met en jeu les responsabilités en cas de dérapage — il fait l’objet de la compétence 3.3."
        },
        {
          "type": "h3",
          "text": "2.4 Les acteurs et le rôle de la négociation"
        },
        {
          "type": "p",
          "text": "La procédure mobilise trois grands types d’acteurs, dont la coordination conditionne la qualité du budget."
        },
        {
          "type": "table",
          "headers": [
            "**Acteur**",
            "**Rôle dans la procédure**"
          ],
          "rows": [
            [
              "**Direction générale**",
              "Fixe les orientations (note de cadrage), arbitre en dernier ressort, valide le budget définitif."
            ],
            [
              "**Responsables opérationnels**",
              "Établissent les budgets de leur centre, négocient leurs objectifs, s’engagent sur leur réalisation."
            ],
            [
              "**Contrôleur de gestion**",
              "Anime la procédure, harmonise les esquisses, vérifie la cohérence, fait circuler la navette, consolide."
            ]
          ]
        },
        {
          "type": "p",
          "text": "La **négociation d’objectifs** est au cœur du processus. Un objectif imposé sans discussion est rarement approprié ; un objectif négocié devient un engagement. Mais la négociation ouvre aussi la porte à des jeux d’acteurs (Partie 4). Le contrôleur de gestion n’est donc pas un simple « teneur de chiffres » : il est un animateur du dialogue de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — ILLUSTRATION",
          "text": "**Chez l’entreprise,**le contrôleur de gestion diffuse la note de cadrage en septembre (objectif 48 M€, lancement de la gamme recyclée). En octobre, chaque agence régionale et l’atelier de production bâtissent leur budget. En novembre, la navette révèle une incohérence : la somme des budgets commerciaux dépasse la capacité de production budgétée de l’atelier. Deux arbitrages sont rendus en décembre : accélérer un investissement de capacité et lisser le lancement de la nouvelle gamme sur deux exercices, afin de ne pas dégrader la qualité éco-responsable."
        },
        {
          "type": "h3",
          "text": "2.5 La communication par les budgets"
        },
        {
          "type": "p",
          "text": "Au-delà de sa fonction de prévision, le budget est un acte de **communication**. Descendante, d’abord : la note de cadrage diffuse les priorités stratégiques à toute la ligne managériale et donne du sens aux objectifs locaux. Ascendante, ensuite : les esquisses budgétaires font remonter vers la direction la connaissance fine du terrain, les contraintes et les opportunités que seuls les opérationnels perçoivent. Transversale, enfin : la navette oblige les unités à confronter leurs hypothèses (les ventes prévues par le commerce doivent être réalisables par la production)."
        },
        {
          "type": "p",
          "text": "Cette dimension explique pourquoi un budget purement imposé « par le haut » est rarement efficace : privé du dialogue, il perd sa valeur d’engagement et de coordination. La qualité d’une procédure budgétaire se mesure autant à la richesse des échanges qu’elle suscite qu’à la précision des chiffres qu’elle produit."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — Démarche budgétaire et types d’organisation",
          "text": "Le référentiel insiste : la démarche doit être appréhendée **dans tout type d’activité**, sans occulter les services. Une copie complète illustre donc la procédure non seulement dans l’industrie, mais aussi dans une société de services (budget calé sur le cycle de prestation : par commande, par client, par période) et dans une organisation publique ou associative (le budget comme autorisation de dépense et arbitrage entre missions). Cette capacité à transposer dans plusieurs contextes est explicitement valorisée."
        }
      ]
    },
    {
      "id": "3-l-articulation-des-budgets-et-les-centres-de-responsabilit",
      "title": "3. L’articulation des budgets et les centres de responsabilité",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Le budget maître et les budgets opérationnels"
        },
        {
          "type": "p",
          "text": "L’ensemble cohérent des budgets opérationnels et financiers, consolidé, forme le **budget maître** (ou budget général). Il se lit comme la traduction chiffrée intégrale du plan annuel. Sans en construire le détail (hors programme), on en retient l’architecture : les budgets opérationnels (ventes → production → approvisionnements, investissements, RH, charges des services) alimentent les budgets de synthèse, dont le budget de trésorerie est le point de convergence."
        },
        {
          "type": "h3",
          "text": "3.2 Le budget flexible"
        },
        {
          "type": "p",
          "text": "Un budget est par nature fonction du niveau d’activité retenu comme hypothèse. Le budget de fonctionnement B d’un atelier, dont l’unité d’œuvre est l’heure-machine, s’écrit :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LE BUDGET FLEXIBLE",
          "text": "**B = v · N + F**\noù *N* = nombre d’unités d’œuvre, *v* = coût variable de l’unité d’œuvre, *F* = frais fixes totaux."
        },
        {
          "type": "p",
          "text": "Comme on peut faire une infinité d’hypothèses sur N, on raisonne en pratique dans le cadre d’une « fourchette » budgétaire, en présentant au moins trois hypothèses : moyenne (la plus probable), basse (pessimiste) et haute (optimiste)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/05.png",
          "alt": "3. L’articulation des budgets et les centres de responsabilité",
          "width": 1520,
          "height": 840,
          "caption": "Figure 5 — Le budget flexible : une droite B = v·N + F et sa fourchette d’hypothèses"
        },
        {
          "type": "p",
          "text": "**Application — Le budget flexible chiffré**"
        },
        {
          "type": "p",
          "text": "Le coût variable de l’unité d’œuvre est égal à 5 € et les frais fixes s’élèvent à 10 000 €. Le niveau d’activité normal retenu est de 6 000 heures-machine, encadré par une hypothèse basse (5 000 h) et une hypothèse haute (7 000 h). Le budget de fonctionnement s’écrit B = 5 × N + 10 000."
        },
        {
          "type": "p",
          "text": "Le budget flexible se présente alors ainsi :"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Hypothèse basse**",
            "**Hypothèse moyenne**",
            "**Hypothèse haute**"
          ],
          "rows": [
            [
              "Niveau d’activité prévisionnel (N, en h-machine)",
              "5 000",
              "6 000",
              "7 000"
            ],
            [
              "Frais fixes prévisionnels (F)",
              "10 000",
              "10 000",
              "10 000"
            ],
            [
              "Frais variables prévisionnels (5 € × N)",
              "25 000",
              "30 000",
              "35 000"
            ],
            [
              "**Total du budget (B = 5·N + 10 000)**",
              "**35 000**",
              "**40 000**",
              "**45 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Lecture : pour chaque hypothèse d’activité, le budget combine une part fixe constante (10 000 €) et une part variable proportionnelle au volume. La fonction reste une droite ; ce sont les frais variables qui « flexibilisent » le budget. La fonction peut être plus complexe qu’une simple relation linéaire (paliers de charges fixes, rendements non constants…)."
        },
        {
          "type": "table",
          "headers": [
            "**■ APPLICATION 1 — Un budget flexible chiffré**Le coût variable de l’unité d’œuvre est de 5 €, les frais fixes de 10 000 €. L’activité, prévue à 6 000 heures, peut varier entre 5 000 et 7 000 heures. Le budget flexible se présente ainsi :**Travail à faire : présenter le budget flexible de l'atelier pour les trois hypothèses d'activité (basse, moyenne, haute).Corrigé :Niveau d’activité (heures)5 0006 0007 000**Frais fixes prévisionnels10 00010 00010 000Frais variables prévisionnels25 00030 00035 000**Total budget35 00040 00045 000***La fonction B = f(N) peut être plus complexe qu’une droite : il peut exister des effets de seuil (heures supplémentaires au-delà d’un certain volume).*",
            "**Niveau d’activité (heures)**",
            "**5 000**",
            "**6 000**",
            "**7 000**",
            "Frais fixes prévisionnels",
            "10 000",
            "10 000",
            "10 000",
            "Frais variables prévisionnels",
            "25 000",
            "30 000",
            "35 000",
            "**Total budget**",
            "**35 000**",
            "**40 000**",
            "**45 000**"
          ],
          "rows": [
            [
              "**Niveau d’activité (heures)**",
              "**5 000**",
              "**6 000**",
              "**7 000**"
            ],
            [
              "Frais fixes prévisionnels",
              "10 000",
              "10 000",
              "10 000"
            ],
            [
              "Frais variables prévisionnels",
              "25 000",
              "30 000",
              "35 000"
            ],
            [
              "**Total budget**",
              "**35 000**",
              "**40 000**",
              "**45 000**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.3 Les centres de responsabilité"
        },
        {
          "type": "p",
          "text": "La procédure budgétaire permet de décentraliser la gestion en déléguant des responsabilités à des cadres qui jouissent d’une autonomie, mais doivent en contrepartie **rendre compte** (le reporting). L’entreprise est découpée en centres de responsabilité, indissociables de l’étude budgétaire."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Centre de responsabilité",
          "text": "Un **centre de responsabilité** est une subdivision de l’organisation regroupée autour d’un responsable qui dispose de moyens et d’une autonomie de gestion pour atteindre un objectif assigné. Son contrôle suppose un indicateur de performance et la maîtrise, par le responsable, du domaine concerné."
        },
        {
          "type": "p",
          "text": "On distingue quatre types de centres, selon le degré d’autonomie et l’ampleur des missions confiées."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/06.png",
          "alt": "3. L’articulation des budgets et les centres de responsabilité",
          "width": 1600,
          "height": 600,
          "caption": "Figure 6 — Les quatre types de centres de responsabilité"
        },
        {
          "type": "h3",
          "text": "Centres de coûts"
        },
        {
          "type": "p",
          "text": "Le responsable (directeur d’usine, chef d’atelier) est jugé sur le niveau de ses coûts, la qualité et les délais. Sa mission n’est pas de minimiser les coûts à tout prix, mais de les **optimiser** compte tenu des objectifs de qualité. Dans un centre opérationnel, les coûts budgétés suivent le niveau d’activité (budget flexible) ; dans les fonctions support, ils sont plus « discrétionnaires »."
        },
        {
          "type": "h3",
          "text": "Centres de chiffre d’affaires"
        },
        {
          "type": "p",
          "text": "Le responsable (agence commerciale, réseau de vente) est jugé sur le chiffre d’affaires réalisé. Attention aux effets pervers : pour « faire du chiffre », un commercial peut casser les prix par des remises excessives ou négliger la solvabilité d’un client."
        },
        {
          "type": "h3",
          "text": "Centres de profit"
        },
        {
          "type": "p",
          "text": "Le responsable est jugé à la fois sur les charges et les produits, donc sur la marge ou le résultat dégagé. Cela limite les effets pervers précédents et exige un manager généraliste, capable de se conduire en entrepreneur. Dans les activités intégrées, la mesure du profit pose le problème délicat des **prix de cession internes**."
        },
        {
          "type": "h3",
          "text": "Centres d’investissement"
        },
        {
          "type": "p",
          "text": "La délégation dépasse l’exploitation et s’élargit à l’investissement en immobilisations. L’objectif est de maximiser la rentabilité du capital investi : le responsable défend ses projets devant sa hiérarchie au moyen de critères financiers (VAN, TRI). On ne trouve cette formule que dans les grands groupes, au niveau des divisions et filiales."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — ILLUSTRATION",
          "text": "**Le découpage en centres chez l’entreprise.**L’atelier de production du produit est un **centre de coûts** : son responsable est jugé sur le respect du coût standard (67 €), la qualité et les délais. Chaque agence régionale est un **centre de chiffre d’affaires**. La direction d’une gamme (produits éco-conçues) pourrait constituer un **centre de profit**, responsable de sa marge sur coût variable (52 € par le produit). Les fonctions R&D et informatique sont des centres de coûts discrétionnaires. l’entreprise, PME, ne dispose pas de centre d’investissement autonome : les arbitrages d’immobilisations remontent à la direction générale."
        },
        {
          "type": "h4",
          "text": "*L’emboîtement « gigogne » des centres*"
        },
        {
          "type": "p",
          "text": "Selon la taille, plusieurs étages de délégation se superposent : ateliers dans une usine, usines dans une division. Les budgets se consolident de bas en haut, comme des poupées russes. À chaque niveau, le responsable est à la fois contrôleur (de l’échelon inférieur) et contrôlé (par sa hiérarchie)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/07.png",
          "alt": "*L’emboîtement « gigogne » des centres*",
          "width": 1440,
          "height": 640,
          "caption": "Figure 7 — L’emboîtement gigogne des centres et des budgets"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Responsabilité et contrôlabilité",
          "text": "Deux principes rendent le système pertinent. Le **principe de responsabilité** : un responsable répond de toutes les conséquences des décisions relevant de sa délégation (les surcoûts SAV d’une mauvaise production sont imputés à la production, non à la distribution). Le **principe de contrôlabilité** : il ne répond que des éléments qu’il maîtrise — d’où l’intérêt de raisonner sur une contribution (coûts partiels) ou de neutraliser les éléments non contrôlables (coûts standards), plutôt que d’imputer arbitrairement des frais de siège."
        },
        {
          "type": "h3",
          "text": "3.4 Le cas des services généraux et le BBZ"
        },
        {
          "type": "p",
          "text": "De nombreux services — direction, comptabilité, informatique, R&D, juridique, contrôle de gestion… — posent un problème de budgétisation spécifique. Qualifiés de **fonctionnels** (par opposition à opérationnels), ou d’**activités de support** (terminologie de Porter), ils n’entretiennent qu’un lien indirect avec la production. Il y est difficile de mesurer l’activité et d’apprécier les charges nécessaires."
        },
        {
          "type": "p",
          "text": "Leurs charges sont en général indirectes et fixes : ce sont des **coûts discrétionnaires** — « à la discrétion » des managers. Difficiles à contrôler (tâches hétérogènes, peu répétitives, non « taylorisables »), ils tendent à une **dérive inflationniste** (prestige, pouvoir, statut), aggravée par la bureaucratisation des grandes structures. À l’inverse, en période de difficultés, la tentation de « tailler » dans ces dépenses peut sacrifier des compétences précieuses de façon stratégiquement suicidaire."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "REMARQUE — Le piège du budget reconduit",
          "text": "La bibliothèque d’une université reçoit 100 000 € pour l’année. Si l’enveloppe est épuisée trop tôt, plus aucun achat n’est possible ; si elle n’est pas dépensée, le responsable craint de la voir réduite l’an prochain. La reconduction mécanique (base + un pourcentage) ne garantit ni l’optimalité, ni la satisfaction des besoins réels : le partage reflète surtout les rapports de pouvoir."
        },
        {
          "type": "h3",
          "text": "La procédure du budget base zéro (BBZ)"
        },
        {
          "type": "p",
          "text": "Popularisée par **Peter Pyhrr** (Harvard Business Review, 1970) et adoptée par de grandes entreprises américaines (Texas Instruments, Xerox), la procédure **BBZ** (*Zero Base Budgeting*) exclut par principe la reconduction : **rien n’est jamais acquis, chaque dépense doit être justifiée**, indépendamment des pratiques antérieures. On « recommence à zéro » chaque année."
        },
        {
          "type": "p",
          "text": "La méthode découpe l’activité en **modules** (centres de décision avec un responsable identifié et des tâches homogènes). Chaque responsable établit un « ensemble budgétaire » contenant des projets **alternatifs** (solutions mutuellement exclusives — par exemple développer un logiciel en interne ou acquérir un progiciel) et des projets **complémentaires** (non indispensables mais utiles, donc différables). Les projets sont ensuite hiérarchisés par un comité, selon des critères financiers ou des scores additifs (le « système 5P » de Pyhrr : chaque membre note les projets de 1 à 6)."
        },
        {
          "type": "p",
          "text": "La BBZ étant longue et coûteuse, une version allégée — la **procédure du « coucher de soleil »** (*sunset*) — audite chaque année une partie seulement des services par rotation. Une fois son budget accepté, un service est « tranquille » pour 4 ou 5 ans. Une procédure analogue existe dans les universités françaises, dont les filières sont habilitées et financées par périodes pluriannuelles : la démarche vaut donc aussi en management public."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Hors programme — le budget de trésorerie détaillé",
          "text": "Le document historique développe ici le budget de trésorerie (encaissements, TVA à décaisser, décaissements, budget récapitulatif) et les comptes prévisionnels. Conformément au référentiel, ces constructions **ne sont pas abordées** dans la compétence 3.1, centrée sur l’analyse de la démarche. On en retient seulement la place dans le réseau des budgets (figure 11.3)."
        },
        {
          "type": "h3",
          "text": "3.5 Le budget de trésorerie et les documents de synthèse prévisionnels"
        },
        {
          "type": "p",
          "text": "Le budget de trésorerie constitue l’aboutissement de la procédure : il regroupe, mois par mois, tous les encaissements et tous les décaissements issus des budgets précédents afin de vérifier l’équilibre financier et d’anticiper les besoins ou les excédents de trésorerie. Tous les flux y sont exprimés TTC."
        },
        {
          "type": "p",
          "text": "**Le budget des encaissements**"
        },
        {
          "type": "p",
          "text": "Il présente les mois en colonnes et les catégories de recettes en lignes. Lorsque l’entreprise accorde un mois de crédit à ses clients, l’encaissement d’une vente est décalé d’un mois par rapport à la facturation. La dernière colonne isole les créances reportées au bilan prévisionnel de fin de période."
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Janvier N+1**",
            "**Février N+1**",
            "**…**",
            "**Décembre N+1**",
            "**Bilan prév. à fin N+1**"
          ],
          "rows": [
            [
              "Ventes au comptant",
              "VJ",
              "VF",
              "…",
              "VD",
              "—"
            ],
            [
              "Ventes à crédit (1 mois)",
              "CCDN",
              "VACJ",
              "…",
              "VACN",
              "VACD"
            ],
            [
              "Autres encaissements (cessions, emprunts…)",
              "",
              "",
              "…",
              "",
              "Poste « clients »"
            ],
            [
              "**Total des encaissements**",
              "",
              "",
              "…",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "*VJ, VF, VD : ventes au comptant de janvier, février, décembre N+1. CCDN : créances clients sur ventes à crédit de décembre N. VACJ à VACD : ventes à crédit de N+1, la dernière (VACD) étant portée au bilan prévisionnel. Ces ventes sont TTC : elles incluent la TVA collectée pour le compte du Trésor.*"
        },
        {
          "type": "p",
          "text": "**Le budget de la TVA à décaisser**"
        },
        {
          "type": "p",
          "text": "L’entreprise collecte la TVA sur ses ventes et déduit la TVA sur ses achats et investissements. Chaque mois, elle reverse au Trésor public la différence (TVA collectée − TVA déductible). La TVA à décaisser au titre de décembre N+1 figure au bilan prévisionnel et n’est réglée qu’en janvier suivant."
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Janvier N+1**",
            "**…**",
            "**Décembre N+1**",
            "**Bilan prév.**"
          ],
          "rows": [
            [
              "TVA collectée sur les ventes",
              "+",
              "…",
              "+",
              ""
            ],
            [
              "(−) TVA déductible sur les achats",
              "−",
              "…",
              "−",
              ""
            ],
            [
              "(−) TVA déductible sur les autres charges",
              "−",
              "…",
              "−",
              ""
            ],
            [
              "(−) TVA déductible sur les immobilisations",
              "−",
              "…",
              "−",
              ""
            ],
            [
              "**(=) TVA à décaisser**",
              "",
              "…",
              "",
              "TVA due"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Si la TVA déductible excède la TVA collectée, on ajoute une ligne « Report de crédit de TVA ». Attention : les dotations aux amortissements et provisions n’entraînent aucun décaissement (erreur classique), et il ne faut pas oublier la TVA à décaisser ni les acomptes d’IS dans le budget des décaissements.*"
        },
        {
          "type": "p",
          "text": "**Le budget général de trésorerie**"
        },
        {
          "type": "p",
          "text": "Il regroupe tous les flux pour suivre l’évolution de la trésorerie. On l’établit souvent par tâtonnements successifs afin d’éviter les découverts coûteux (agios) : placement des excédents, escompte d’effets, report de dépenses discrétionnaires… Deux présentations sont usuelles. On suppose ici une trésorerie initiale de 100."
        },
        {
          "type": "p",
          "text": "**Première méthode — par les variations de trésorerie**"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Janvier N+1**",
            "**Février N+1**",
            "**…**",
            "**Décembre N+1**"
          ],
          "rows": [
            [
              "Encaissements",
              "1 000",
              "1 200",
              "…",
              ""
            ],
            [
              "(−) Décaissements",
              "800",
              "900",
              "…",
              ""
            ],
            [
              "(=) Variation de trésorerie",
              "200",
              "300",
              "…",
              ""
            ],
            [
              "**Trésorerie finale**",
              "**300 (1)**",
              "**600**",
              "…",
              "**(X)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*(1) 300 = 200 + 100 : la trésorerie finale s’obtient par cumul algébrique de la trésorerie initiale et des variations mensuelles.*"
        },
        {
          "type": "p",
          "text": "**Seconde méthode — par les soldes successifs**"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Janvier N+1**",
            "**Février N+1**",
            "**…**",
            "**Décembre N+1**"
          ],
          "rows": [
            [
              "Trésorerie initiale",
              "100",
              "300",
              "…",
              ""
            ],
            [
              "(+) Encaissements",
              "1 000",
              "1 200",
              "…",
              ""
            ],
            [
              "(=) Disponibilités",
              "1 100",
              "1 500",
              "…",
              ""
            ],
            [
              "(−) Décaissements",
              "800",
              "900",
              "…",
              ""
            ],
            [
              "**(=) Trésorerie finale**",
              "**300**",
              "**600**",
              "…",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "*La trésorerie finale du mois m est reportée en trésorerie initiale du mois m+1.*"
        },
        {
          "type": "p",
          "text": "**Les comptes de résultat et bilan prévisionnels**"
        },
        {
          "type": "p",
          "text": "Les comptes prévisionnels « bouclent » la procédure budgétaire. Le compte de résultat prévisionnel centralise les produits et charges issus de l’ensemble des budgets ; son solde donne le résultat prévisionnel, qui vient équilibrer le bilan. Dans le bilan prévisionnel, les postes de haut de bilan traduisent les décisions d’investissement et de financement, tandis que les postes de bas de bilan (éléments du besoin en fonds de roulement) découlent directement des budgets d’exploitation et de TVA."
        }
      ]
    },
    {
      "id": "4-les-enjeux-contemporains-du-pilotage-budgetaire",
      "title": "4. Les enjeux contemporains du pilotage budgétaire",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Les enjeux comportementaux du budget"
        },
        {
          "type": "p",
          "text": "Un budget n’est un bon outil de gestion et de motivation que si le niveau des objectifs est fixé avec intelligence : il faut « placer la barre » assez haut, mais pas trop. Des objectifs trop faibles n’engagent pas l’organisation ; des objectifs inatteignables démobilisent (« puisqu’on n’y arrivera pas, autant ne pas essayer »)."
        },
        {
          "type": "p",
          "text": "Des auteurs comme **Argyris** ont mis en évidence les effets psychologiques dévastateurs d’une pression budgétaire excessive : frustration, agressivité, troubles psychosomatiques. La « gestion par le stress » peut alors être assimilée à une forme de harcèlement. Face à cette pression, les individus élaborent des stratégies de défense."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Slack budgétaire",
          "text": "Le **slack budgétaire** (de l’anglais *slack*, le « mou » d’une corde ; théorie du slack organisationnel de Cyert et March) désigne la marge de manœuvre ou « matelas » que l’on négocie lors de la construction des budgets. On sait pouvoir fonctionner avec 100, on demande 120, on obtient 110 : il devient alors facile de tenir le budget, voire de dégager un écart favorable en dépensant 109."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Quand le budget produit l’effet inverse",
          "text": "Le **slack** : au lieu de réduire les coûts, la négociation de marges de sécurité les augmente. **Le « droit à dépenser » :**utiliser toute l’enveloppe de peur de la voir réduite (les camions militaires qui tournent dans la cour pour épuiser le budget essence). **La rigidité bureaucratique :**exécuter ce qui est prévu même quand l’action n’est plus pertinente, en inhibant l’adaptation aux opportunités."
        },
        {
          "type": "h3",
          "text": "4.2 Les critiques contemporaines et le Beyond Budgeting"
        },
        {
          "type": "p",
          "text": "Ces dérives ont nourri une critique radicale : certains préconisent d’**abandonner le budget annuel** au profit d’un pilotage plus réactif. C’est le mouvement du **Beyond Budgeting**, qui propose de remplacer les objectifs fixes et négociés par des objectifs relatifs (benchmark interne ou externe), de décentraliser la décision et de substituer au budget figé des **prévisions glissantes** (*rolling forecasts*) régulièrement réactualisées."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-procedure-budgetaire/08.png",
          "alt": "4. Les enjeux contemporains du pilotage budgétaire",
          "width": 1600,
          "height": 640,
          "caption": "Figure 8 — Du budget traditionnel au Beyond Budgeting : deux philosophies du pilotage"
        },
        {
          "type": "p",
          "text": "Le **budget flexible** (Partie 3) et le **BBZ** constituent des réponses intermédiaires, moins radicales : le premier adapte les prévisions au niveau réel d’activité, le second combat la reconduction mécanique. Abandonner totalement le budget serait sans doute « jeter le bébé avec l’eau du bain » : la plupart des organisations conservent une démarche budgétaire, mais l’assouplissent."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS NUMÉRIQUE — Le pilotage budgétaire à l’ère numérique",
          "text": "Les outils numériques transforment la pratique budgétaire bien au-delà du tableur historique :\n**ERP / PGI —**les progiciels intégrés alimentent les budgets en données réelles et actualisées, supprimant les ressaisies et fiabilisant la consolidation.\n**EPM (Enterprise Performance Management) —**des plateformes dédiées (type Anaplan, Tagetik, Board) industrialisent la collecte, la navette et la consolidation budgétaire, et facilitent les scénarios.\n**Business Intelligence & Power BI —**le suivi budgétaire devient un tableau de bord interactif, en temps réel, déclinable par centre, activité ou processus.\n**Prévisions automatisées & IA —**les algorithmes affinent les prévisions de ventes et alimentent les prévisions glissantes, rendant possible un pilotage plus continu et moins dépendant du cycle annuel.\n*Le numérique ne supprime pas le jugement de gestion : il déplace la valeur ajoutée du contrôleur, du calcul vers l’analyse, le conseil et l’animation du dialogue de gestion.*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS DURABILITÉ — Budget et performance globale",
          "text": "La réforme inscrit le pilotage dans une logique de **performance globale** (économique, sociale, environnementale). La démarche budgétaire y contribue :\n**Budgets extra-financiers —**au-delà des euros, on budgète désormais des objectifs de consommation d’énergie, d’émissions de CO₂, de recyclage ou de formation, suivis comme des budgets à part entière.\n**Arbitrages durables —**la note de cadrage intègre des orientations RSE (chez l’entreprise, le lancement de la gamme de produits recyclées) qui se déclinent ensuite dans les budgets des unités.\n**Parties prenantes —**le budget devient un support de dialogue avec l’ensemble des parties prenantes (salariés, clients, territoires), et non le seul reflet des intérêts financiers de court terme.\n*Le budget cesse alors d’être un pur exercice comptable pour devenir un instrument de pilotage de la création de valeur durable.*"
        },
        {
          "type": "h3",
          "text": "4.3 Regard critique d’ensemble"
        },
        {
          "type": "p",
          "text": "La compétence 3.1 attend une analyse équilibrée des intérêts et des limites, **dans différents contextes**. On peut la synthétiser ainsi."
        },
        {
          "type": "table",
          "headers": [
            "**Apports**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Décline la stratégie en action chiffrée",
              "Rigidité face à un environnement turbulent"
            ],
            [
              "Coordonne et fait communiquer les unités",
              "Lourdeur et coût de la procédure (plusieurs mois)"
            ],
            [
              "Responsabilise par les centres et le reporting",
              "Jeux d’acteurs : slack, course à la dépense"
            ],
            [
              "Motive par des objectifs négociés",
              "Pression excessive : effets psychologiques (Argyris)"
            ],
            [
              "Permet le contrôle par les écarts",
              "Comportements bureaucratiques et conservateurs"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — La démarche dans différents contextes",
          "text": "**Services :**le découpage en centres de profit/coût doit épouser le cycle productif (par commande, par client, par période). **Secteur public :**le budget reste un acte d’autorisation de la dépense ; le BBZ et la rotation « sunset » y trouvent un terrain naturel. **Associations :**le budget articule subventions et missions sociales, et arbitre entre les attentes des parties prenantes plutôt qu’un résultat."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ Application récapitulative**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Le budget flexible de l'atelier de production",
          "text": "L’atelier de production de la Menuiserie Dubois (mobilier bois), qui fabrique le meuble, a pour unité d’œuvre l’heure-machine. Son coût variable unitaire est de 18 € et ses frais fixes annuels de 1 200 000 €. L’activité normale est de 90 000 heures, mais la direction veut raisonner sur une fourchette de 80 000 à 100 000 heures.\n**Travail à faire :**Écrire la fonction de budget flexible de l’atelier. Présenter le budget flexible pour les trois hypothèses. Interpréter l’évolution du coût unitaire complet de l’heure-machine et en tirer une conclusion de pilotage."
        },
        {
          "type": "table",
          "headers": [
            "**Corrigé — budget flexible de l'atelierQuestion 1 — Fonction de budget.**B = v · N + F = **18 · N + 1 200 000**.**Question 2 — Budget flexible.Niveau d’activité (heures)80 00090 000100 000**Frais fixes1 200 0001 200 0001 200 000Frais variables (18 € × N)1 440 0001 620 0001 800 000**Budget total2 640 0002 820 0003 000 000Coût unitaire (B / N)**33,00 €31,33 €30,00 €**Question 3 — Interprétation.**Le budget total progresse avec l’activité, mais **le coût unitaire complet diminue** (de 33,00 € à 30,00 €) : les frais fixes se répartissent sur un plus grand nombre d’heures — c’est l’effet d’absorption des charges fixes. Conclusion de pilotage : à structure donnée, l’atelier a intérêt à fonctionner près de sa capacité haute pour diluer ses coûts fixes. Le budget flexible permet précisément de neutraliser l’effet du volume dans le contrôle ultérieur des écarts, en comparant les réalisations à un budget recalculé au niveau d’activité réel — et non au budget initial.",
            "**Niveau d’activité (heures)**",
            "**80 000**",
            "**90 000**",
            "**100 000**",
            "Frais fixes",
            "1 200 000",
            "1 200 000",
            "1 200 000",
            "Frais variables (18 € × N)",
            "1 440 000",
            "1 620 000",
            "1 800 000",
            "**Budget total**",
            "**2 640 000**",
            "**2 820 000**",
            "**3 000 000**",
            "**Coût unitaire (B / N)**",
            "33,00 €",
            "31,33 €",
            "30,00 €"
          ],
          "rows": [
            [
              "**Niveau d’activité (heures)**",
              "**80 000**",
              "**90 000**",
              "**100 000**"
            ],
            [
              "Frais fixes",
              "1 200 000",
              "1 200 000",
              "1 200 000"
            ],
            [
              "Frais variables (18 € × N)",
              "1 440 000",
              "1 620 000",
              "1 800 000"
            ],
            [
              "**Budget total**",
              "**2 640 000**",
              "**2 820 000**",
              "**3 000 000**"
            ],
            [
              "**Coût unitaire (B / N)**",
              "33,00 €",
              "31,33 €",
              "30,00 €"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse finale**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Articulation des budgets : ventes → production → approvisionnements et autres charges → trésorerie → compte de résultat et bilan prévisionnels. Le budget des ventes pilote l'ensemble.\n• Budget de TVA : la TVA due au titre du mois M est généralement décaissée en M+1 ; ne pas oublier le report de crédit de TVA.\n• Budget de trésorerie : intégrer les décalages d'encaissement clients et de décaissement fournisseurs, ainsi que les flux de TVA.\n• Un budget équilibré en résultat peut être en tension de trésorerie : le résultat n'est pas la trésorerie (créances, stocks, décalages).\n• Pont → Ch10 (la prévision des ventes amorce tous les budgets) et Ch14 (le contrôle budgétaire compare le réalisé au budget)."
        },
        {
          "type": "h3",
          "text": "Fiche de révision"
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
            "**Utilité**",
            "**Limites**"
          ],
          "rows": [
            [
              "**Budget**",
              "Prévision chiffrée en valeur monétaire",
              "Pilotage, coordination, contrôle",
              "Rigidité ; coût d’élaboration"
            ],
            [
              "**Plan / programme**",
              "Orientations pluriannuelles / prévisions physiques",
              "Décline la stratégie en action",
              "Horizon parfois dépassé par l’environnement"
            ],
            [
              "**Cycle budgétaire**",
              "Procédure annuelle sept. → déc. + navette",
              "Cadre, négocie et arbitre",
              "Lourd ; calendrier figé"
            ],
            [
              "**Budget flexible**",
              "B = v·N + F selon plusieurs hypothèses",
              "Adapte la prévision à l’activité",
              "Suppose une structure de coûts connue"
            ],
            [
              "**Centre de responsabilité**",
              "Entité autonome avec objectif et reporting",
              "Décentralise et responsabilise",
              "Culture des « territoires »"
            ],
            [
              "**Coûts discrétionnaires / BBZ**",
              "Charges fixes des services ; remise à plat annuelle",
              "Combat la reconduction mécanique",
              "BBZ long et coûteux"
            ],
            [
              "**Slack budgétaire**",
              "Marge de sécurité négociée",
              "(détourne le budget)",
              "Augmente les coûts au lieu de les réduire"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "PIÈGES CLASSIQUES & CONSEILS",
          "text": "Ne pas confondre budget (en €) et programme (en unités physiques). Ne pas développer le budget de trésorerie ni les comptes prévisionnels (hors programme 3.1). Toujours équilibrer apports et limites, et varier les contextes (services, public, association). Rattacher la critique à des auteurs : Argyris (pression), Cyert et March (slack), Pyhrr (BBZ). En rédaction, finir par une ouverture : numérique (EPM, IA) et performance globale."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
