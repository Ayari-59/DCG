// Généré par scripts/convert-docx.mjs depuis 05_Management_des_risques.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-management-risques",
  "level": "DSCG",
  "ue": "UE3",
  "number": 5,
  "title": "Le management des risques et le contrôle interne",
  "description": "",
  "durationMin": 55,
  "sections": [
    {
      "id": "note-de-conformite-au-referentiel-a-lire-avant-le-chapitre",
      "title": "Note de conformité au référentiel (à lire avant le chapitre)",
      "blocks": [
        {
          "type": "p",
          "text": "Conformément à la méthodologie de ce manuel, cette note ouvre le chapitre et signale les contenus repris, adaptés ou créés."
        },
        {
          "type": "p",
          "text": "**Rattachement au référentiel officiel.** Ce chapitre couvre la sous-partie **2.5 « La gestion des risques » (10 heures)** de la Partie 2. Les **compétences** attendues portent sur la capacité à identifier et catégoriser les risques d'une organisation, à les évaluer (probabilité, impact, criticité), à les cartographier, à concevoir et apprécier les dispositifs de maîtrise (contrôle interne, référentiels), et à préciser le rôle du contrôle de gestion dans la maîtrise des risques. Les **savoirs associés** sont : la notion de risque et sa typologie ; les méthodes d'identification, d'évaluation et de cartographie des risques ; le contrôle interne et ses composantes ; les référentiels (COSO, ISO 31000) ; le modèle des trois lignes de maîtrise ; l'articulation entre audit interne, audit externe et contrôle de gestion."
        },
        {
          "type": "p",
          "text": "**Articulation avec les autres sous-parties (limites de champ).** La gestion des risques irrigue tout le programme : le **risque projet** (sous-partie 2.2, criticité = probabilité × impact, déjà introduite) ; les **risques fournisseurs et cyber** des fonctions support (2.3) ; le **risque d'échec** des transformations (2.4) ; les **risques de durabilité** (Partie 3.2, ESG et CSRD). Le présent chapitre se concentre sur ce qui constitue le cœur de la sous-partie 2.5 : la **démarche d'ensemble** de management des risques (de l'identification à la maîtrise), les **dispositifs de contrôle interne** et leurs **référentiels**, et l'**articulation des fonctions de maîtrise** (trois lignes, audit, contrôle de gestion). Les notions de probabilité, impact et criticité, déjà vues pour les projets, sont ici généralisées à l'échelle de l'organisation."
        },
        {
          "type": "p",
          "text": "**Avertissement sur les illustrations d'entreprises (§11).** Le cahier des charges demande des cas réels (Société Générale, Airbus, TotalEnergies, Amazon, Microsoft). Ils sont présentés à titre d'illustration pédagogique, à partir d'éléments de notoriété publique et nécessairement simplifiés ; ils ne constituent pas une analyse exhaustive ni vérifiée et doivent être lus comme des supports d'apprentissage."
        },
        {
          "type": "p",
          "text": "**Origine des contenus** (repris / adaptés / créés) :"
        },
        {
          "type": "table",
          "headers": [
            "**Bloc du chapitre**",
            "**Statut**",
            "**Origine**"
          ],
          "rows": [
            [
              "Définition du contrôle interne (sauvegarde du patrimoine, fraude, séparation des fonctions)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1, audit et contrôle interne)"
            ],
            [
              "Audit légal / contractuel ; audit interne ; comité d'audit",
              "**Repris-adapté**",
              "Ancien cours (Cours 1)"
            ],
            [
              "Cartographie des risques (probabilité × impact, stratégies de traitement)",
              "**Repris-adapté**",
              "Ancien cours (Cours 4, audit des risques)"
            ],
            [
              "Affaire Société Générale / Kerviel (défaillance du contrôle interne)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1, gouvernance)"
            ],
            [
              "Définition du risque, incertitude (Knight), appétence",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Typologie des risques",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Référentiels COSO, COSO ERM, ISO 31000",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Modèle des trois lignes de maîtrise (IIA)",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Risques numériques, IA, cyber",
              "**Créé**",
              "Ouverture contemporaine"
            ],
            [
              "ESG, double matérialité, CSRD",
              "**Créé**",
              "Ouverture contemporaine ; lien Partie 3"
            ],
            [
              "Cas d'entreprises",
              "**Créé**",
              "Illustrations (voir avertissement)"
            ]
          ]
        }
      ]
    },
    {
      "id": "1-introduction-generale",
      "title": "1. Introduction générale",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Un environnement d'incertitude croissante"
        },
        {
          "type": "p",
          "text": "Les organisations évoluent dans un monde dont l'incertitude n'a jamais été aussi forte. La **mondialisation** a allongé et complexifié les chaînes de valeur, exposant les entreprises à des risques lointains (défaillance d'un fournisseur à l'autre bout du monde, tensions géopolitiques sur une route commerciale). La **digitalisation** a créé une dépendance critique aux systèmes d'information et fait émerger une catégorie entière de risques nouveaux — cyberattaques, fuites de données, pannes systémiques. Les dernières années ont par ailleurs vu se succéder des chocs majeurs : **crise sanitaire** (pandémie de 2020 et ses ruptures d'approvisionnement), **tensions géopolitiques** (conflits, sanctions, fragmentation des échanges), **crise climatique** (événements extrêmes, transition réglementaire). Cette accumulation de chocs, longtemps considérés comme improbables, a fait prendre conscience que l'exceptionnel était devenu fréquent — ce que certains nomment l'ère de la « polycrise ». Cette notion de polycrise désigne l'enchevêtrement de crises de natures différentes (sanitaire, géopolitique, climatique, financière) qui se nourrissent mutuellement et dont les effets se combinent de façon non linéaire. Elle traduit un changement qualitatif : les organisations ne font plus face à des risques isolés et séquentiels, mais à des systèmes de risques interconnectés. Nassim Nicholas Taleb a popularisé le concept de « cygne noir » pour désigner ces événements à très faible probabilité mais à impact extrême, imprévisibles *a priori* mais rationalisés *a posteriori* ; il a aussi forgé celui d'« antifragilité » pour caractériser les organisations qui non seulement résistent aux chocs mais en sortent renforcées. Ces apports déplacent le management des risques d'une logique purement probabiliste (calculer et se prémunir contre les risques connus) vers une logique de **résilience** et d'**adaptabilité** (se rendre capable d'absorber l'imprévisible). C'est une évolution majeure que les sujets contemporains valorisent."
        },
        {
          "type": "h3",
          "text": "1.2 Du risque subi au risque piloté"
        },
        {
          "type": "p",
          "text": "Face à cette incertitude, la posture des organisations a profondément évolué. Longtemps, le risque était **subi** : on le découvrait quand il se réalisait, et l'on réagissait dans l'urgence. La démarche moderne consiste au contraire à **piloter** le risque : l'identifier *a priori*, l'évaluer, le hiérarchiser et le maîtriser de façon proactive. Cette transformation a été accélérée par une série de scandales et de défaillances retentissants — l'affaire Enron (2001) à l'origine de la loi Sarbanes-Oxley, ou, en France, l'affaire de la Société Générale en 2008, où, comme le rappelle l'ancien cours, « la défaillance des systèmes de contrôle interne a été mise en évidence » à l'occasion d'une fraude de 4,9 milliards d'euros. Ces événements ont fait du management des risques et du contrôle interne une exigence réglementaire et une priorité de gouvernance."
        },
        {
          "type": "h3",
          "text": "1.3 La maîtrise des risques comme levier de création de valeur"
        },
        {
          "type": "p",
          "text": "L'erreur serait de réduire le management des risques à une logique défensive de conformité. Ce basculement d'une vision défensive vers une vision créatrice de valeur constitue le fil conducteur du chapitre et reflète l'évolution historique de la discipline. Née dans le monde de l'assurance (transférer le risque), puis développée dans la finance (mesurer et couvrir le risque de marché), la gestion des risques s'est ensuite étendue à l'ensemble de l'entreprise (Enterprise Risk Management) avant de s'intégrer pleinement à la stratégie. Chaque étape a élargi le périmètre : du risque assurable au risque financier, puis au risque opérationnel, stratégique, et aujourd'hui aux risques émergents (cyber, climatique). Cette extension traduit une prise de conscience : dans un monde incertain, la capacité à maîtriser ses risques est devenue une compétence stratégique distinctive, au même titre que la capacité à innover ou à maîtriser ses coûts. Sa vision moderne est **stratégique et créatrice de valeur**. D'abord parce que le risque est indissociable de l'**opportunité** : il n'y a pas de rendement sans prise de risque, et une organisation qui ne prendrait aucun risque renoncerait à toute création de valeur. Ensuite parce qu'une bonne maîtrise des risques **protège les ressources** (actifs, réputation, continuité), **sécurise la stratégie** (en évitant que des aléas ne fassent dérailler les plans) et **améliore la performance durable** (en intégrant les risques de long terme, notamment ESG). Maîtriser ses risques, c'est donc se donner les moyens de prendre les *bons* risques en connaissance de cause — ceux qui servent la stratégie — tout en se prémunissant contre ceux qui la menacent."
        },
        {
          "type": "h3",
          "text": "1.4 Problématique centrale"
        },
        {
          "type": "p",
          "text": "**Problématique centrale.** Comment les organisations peuvent-elles identifier, évaluer, hiérarchiser et maîtriser leurs risques — au moyen du contrôle interne et des référentiels de management des risques — afin de protéger leurs ressources, de sécuriser leur stratégie et de transformer la maîtrise des risques en un véritable levier de création de valeur durable, et quel rôle le contrôle de gestion joue-t-il dans ce dispositif ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en posant d'abord les **fondements** du risque et sa typologie (§2), puis la démarche d'**identification et d'évaluation** (§3) et la **cartographie** (§4). Il développe ensuite le **contrôle interne** (§5), les **référentiels** COSO et ISO 31000 (§6), le modèle des **trois lignes de maîtrise** (§7) et l'articulation **audit / contrôle de gestion** (§8). Il aborde enfin les **risques numériques** (§9), les **risques ESG** (§10), des **cas d'entreprises** (§11), les **approfondissements DSCG** (§12), la synthèse (§13) et la fiche de révision (§14)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir le risque et le distinguer de l'incertitude (Knight) ; connaître la typologie des risques ; connaître les composantes du contrôle interne et les référentiels (COSO, COSO ERM, ISO 31000) ; connaître le modèle des trois lignes de maîtrise ; distinguer audit interne, audit externe et contrôle de gestion."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Identifier et catégoriser les risques d'une organisation ; évaluer un risque (probabilité × impact = criticité) et le positionner sur une matrice ; construire et interpréter une cartographie des risques (heat map) ; apprécier un dispositif de contrôle interne ; choisir une stratégie de traitement du risque."
        },
        {
          "type": "p",
          "text": "**Compétences.** Concevoir une démarche de management des risques ; apprécier la qualité d'un dispositif de maîtrise ; articuler les fonctions de contrôle ; relier maîtrise des risques et création de valeur ; formuler des préconisations."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (sous-partie 2.5).** Identifier et évaluer les risques ; construire une cartographie ; concevoir et apprécier les dispositifs de contrôle interne ; mobiliser les référentiels ; préciser le rôle du contrôle de gestion dans la maîtrise des risques."
        }
      ]
    },
    {
      "id": "2-les-fondements-du-management-des-risques",
      "title": "2. Les fondements du management des risques",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 La notion de risque"
        },
        {
          "type": "p",
          "text": "*Statut : créé ; définitions de référence (Knight, ISO 31000, COSO ERM).*"
        },
        {
          "type": "h4",
          "text": "2.1.1 Risque et incertitude"
        },
        {
          "type": "p",
          "text": "La distinction fondatrice revient à l'économiste **Frank Knight** (*Risk, Uncertainty and Profit*, 1921). Le **risque** désigne une situation où les issues possibles sont connues et **probabilisables** (on peut leur attribuer une probabilité, comme au jeu de dés) ; l'**incertitude** désigne une situation où les issues ou leurs probabilités sont **inconnues** (on ne peut pas calculer). Cette distinction est cruciale : le management des risques s'applique pleinement au domaine probabilisable, mais doit aussi composer avec l'incertitude radicale (les « cygnes noirs » de Taleb — événements imprévisibles à fort impact), face à laquelle on privilégie la résilience et l'adaptabilité plutôt que le calcul."
        },
        {
          "type": "h4",
          "text": "2.1.2 Définitions normalisées"
        },
        {
          "type": "p",
          "text": "Les grands référentiels convergent vers une définition moderne du risque comme **effet de l'incertitude sur l'atteinte des objectifs**. La norme **ISO 31000** le définit précisément ainsi : « l'effet de l'incertitude sur l'atteinte des objectifs » — définition remarquable car elle relie le risque aux **objectifs** (donc à la stratégie) et reconnaît que l'effet peut être négatif (menace) *ou positif* (opportunité). Le référentiel **COSO ERM** (*Enterprise Risk Management*) insiste de même sur l'intégration du risque à la stratégie et à la performance. On est loin de la conception étroite du risque comme simple danger : le risque est l'incertitude qui pèse — dans les deux sens — sur la réalisation des objectifs."
        },
        {
          "type": "h4",
          "text": "2.1.3 Risque, opportunité et appétence"
        },
        {
          "type": "p",
          "text": "Deux notions complètent ce cadre. La symétrie **risque / opportunité** rappelle qu'un même aléa peut receler une menace et une chance : la transition écologique est un risque pour certains modèles d'affaires et une opportunité pour d'autres. L'**appétence au risque** (*risk appetite*) désigne le niveau de risque qu'une organisation est prête à accepter pour atteindre ses objectifs : elle traduit une décision stratégique de gouvernance. Une *start-up* a une forte appétence (elle parie sur la croissance) ; une banque de dépôt, une faible appétence (elle protège l'épargne). L'appétence se décline en **tolérance** (les limites acceptables autour des objectifs) et en **capacité** (le risque maximal soutenable). Définir son appétence est le préalable de toute politique de risque : on ne cherche pas à éliminer le risque (ce serait renoncer à la valeur), mais à le maintenir dans les limites voulues. Cette idée est contre-intuitive mais fondamentale : une organisation qui afficherait une appétence nulle serait paralysée, incapable d'innover, d'investir ou de se développer — car toute création de valeur suppose une exposition au risque. À l'inverse, une appétence excessive, mal encadrée, conduit aux prises de risque inconsidérées dont l'histoire financière offre de nombreux exemples (la crise de 2008 résultant pour partie d'une appétence démesurée au risque de crédit). Le bon management des risques consiste donc à **calibrer** consciemment cette appétence, à la décliner en limites opérationnelles concrètes, et à s'assurer que la prise de risque réelle reste dans ces limites — ce qui suppose un dispositif de surveillance (deuxième et troisième lignes, §7). L'appétence au risque est ainsi le pivot qui relie la gouvernance (qui la fixe) au pilotage opérationnel (qui la respecte)."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Comparaison des définitions du risque *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Source**",
            "**Définition du risque**",
            "**Accent**",
            "**Apport**"
          ],
          "rows": [
            [
              "**Frank Knight (1921)**",
              "Aléa probabilisable (vs incertitude non probabilisable)",
              "La mesurabilité",
              "Distinguer risque et incertitude"
            ],
            [
              "**ISO 31000**",
              "Effet de l'incertitude sur l'atteinte des objectifs",
              "Lien aux objectifs ; risque ↔ opportunité",
              "Définition de référence, universelle"
            ],
            [
              "**COSO ERM**",
              "Possibilité que des événements affectent la stratégie et les objectifs",
              "Intégration stratégique",
              "Relier risque, stratégie et performance"
            ],
            [
              "**Approche assurantielle**",
              "Probabilité × gravité d'un événement dommageable",
              "La quantification",
              "Fonder le calcul de la criticité"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "p",
          "text": "**Regard DSCG.** Retenir impérativement la définition ISO 31000 (« effet de l'incertitude sur l'atteinte des objectifs ») et la double nature menace/opportunité du risque. Une copie qui ne voit le risque que comme un danger passe à côté de la vision moderne attendue. Toujours relier le risque aux **objectifs** et donc à la **stratégie**."
        },
        {
          "type": "h3",
          "text": "2.2 Les catégories de risques"
        },
        {
          "type": "p",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "La maîtrise des risques suppose d'abord de les **catégoriser**, pour s'assurer de la complétude de l'identification (ne rien oublier) et organiser la responsabilité de leur gestion. On distingue classiquement plusieurs grandes familles."
        },
        {
          "type": "p",
          "text": "Les **risques stratégiques** menacent les choix fondamentaux et le modèle d'affaires (mauvaise décision stratégique, disruption, perte d'un marché). Les **risques opérationnels** affectent le fonctionnement courant (défaillance de processus, erreur humaine, panne, accident — c'est la catégorie où s'est logée la fraude Kerviel). Les **risques financiers** concernent la liquidité, le crédit, le marché, le change, les taux. Les **risques juridiques** tiennent aux contrats, contentieux et responsabilités ; les **risques fiscaux**, à la conformité et aux redressements. Les **risques sociaux** relèvent du climat, des conflits, de la sécurité au travail. Les **risques réputationnels** menacent l'image et la confiance — souvent conséquence d'autres risques, ils peuvent être les plus destructeurs. Les **risques environnementaux** (pollution, climat) et les **risques cyber** (attaques, fuites de données) complètent ce panorama, en forte croissance."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — Typologie des risques *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Description**",
            "**Causes typiques**",
            "**Conséquences**",
            "**Exemples**"
          ],
          "rows": [
            [
              "**Stratégique**",
              "Menace sur le modèle d'affaires et les choix",
              "Mauvaise décision, disruption",
              "Perte de position, déclin",
              "Pari technologique manqué, marché perdu"
            ],
            [
              "**Opérationnel**",
              "Défaillance du fonctionnement courant",
              "Processus, erreur, fraude, panne",
              "Pertes, interruption",
              "Fraude interne, accident industriel"
            ],
            [
              "**Financier**",
              "Liquidité, crédit, marché, change",
              "Endettement, volatilité",
              "Pertes financières, défaut",
              "Crise de liquidité, perte de change"
            ],
            [
              "**Juridique / fiscal**",
              "Contentieux, non-conformité",
              "Contrats, réglementation",
              "Sanctions, redressements",
              "Litige commercial, redressement fiscal"
            ],
            [
              "**Social**",
              "Climat, conflits, sécurité",
              "Tensions, conditions de travail",
              "Grèves, accidents, turnover",
              "Conflit social, accident du travail"
            ],
            [
              "**Réputationnel**",
              "Atteinte à l'image et à la confiance",
              "Scandale, autre risque réalisé",
              "Perte de clients, de valeur",
              "Scandale médiatisé, bad buzz"
            ],
            [
              "**Environnemental**",
              "Atteinte à l'environnement",
              "Pollution, climat",
              "Sanctions, coûts, image",
              "Pollution accidentelle, sinistre climatique"
            ],
            [
              "**Cyber**",
              "Atteinte aux SI et aux données",
              "Attaque, faille, négligence",
              "Interruption, fuite, rançon",
              "Rançongiciel, fuite de données"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Focus professionnel"
        },
        {
          "type": "p",
          "text": "**Focus professionnel.** Les risques sont **interdépendants** : un risque cyber (attaque) peut déclencher un risque opérationnel (interruption), financier (perte, rançon), juridique (sanctions RGPD) et réputationnel (perte de confiance). Cette propagation, ou « effet domino », explique pourquoi on ne gère pas les risques en silos mais de façon **intégrée** (logique ERM, *Enterprise Risk Management*, §6). Un risque réputationnel est presque toujours la conséquence amplifiée d'un autre risque mal maîtrisé.**Transition.** Une fois les risques catégorisés, la démarche consiste à les identifier concrètement puis à les évaluer."
        }
      ]
    },
    {
      "id": "3-l-identification-et-l-evaluation-des-risques",
      "title": "3. L'identification et l'évaluation des risques",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; logique probabilité × impact reprise de l'ancien cours (Cours 4).*"
        },
        {
          "type": "h3",
          "text": "3.1 Les méthodes d'identification"
        },
        {
          "type": "p",
          "text": "Identifier les risques est la première étape — et la plus déterminante : un risque non identifié ne peut être maîtrisé. La démarche combine plusieurs méthodes complémentaires, pour croiser les regards et limiter les angles morts. Les **interviews** d'experts et de responsables font remonter les risques perçus du terrain. Les **questionnaires** et **check-lists** systématisent le recensement par référence à des typologies. Les **ateliers** (*risk workshops*) réunissent des acteurs de fonctions différentes pour une identification collective, féconde car elle croise les points de vue. Les **audits** (internes ou externes) détectent les failles des dispositifs existants. Les **analyses documentaires** (rapports d'incidents, comptes rendus, données sectorielles) exploitent l'information disponible. Les **retours d'expérience** (*REX*) — internes (incidents passés) et externes (sinistres survenus chez d'autres) — sont une source précieuse : l'ancien cours recommandait déjà de « s'inspirer des expériences vécues dans l'entreprise et dans d'autres institutions ». L'identification se heurte toutefois à des **biais cognitifs** qu'il faut connaître pour les contrer. Le biais de **disponibilité** conduit à surévaluer les risques récents ou médiatisés (on prépare la dernière crise, pas la prochaine) et à sous-estimer les risques anciens ou abstraits. Le biais d'**optimisme** minimise sa propre exposition (« cela n'arrive qu'aux autres »). Le biais de **confirmation** privilégie les informations qui rassurent. L'**effet de groupe** (*groupthink*) peut conduire un collectif à écarter les signaux dérangeants pour préserver le consensus. C'est précisément pour contrer ces biais que l'on croise les méthodes et les points de vue, que l'on sollicite des regards externes (audit, benchmarking) et que l'on cultive une culture où l'expression des risques — y compris les mauvaises nouvelles — est encouragée plutôt que sanctionnée. Une organisation qui « tue le messager » s'aveugle sur ses propres risques."
        },
        {
          "type": "h4",
          "text": "Encadré — Point méthode"
        },
        {
          "type": "p",
          "text": "**Point méthode — réussir l'identification.** Combiner systématiquement les méthodes (aucune n'est exhaustive) ; partir d'une **typologie** structurée (§2.2) pour garantir la complétude ; impliquer les opérationnels (qui connaissent les risques réels) autant que les experts ; ne pas se limiter aux risques connus — chercher activement les **signaux faibles** et les scénarios extrêmes ; documenter chaque risque dans un **registre des risques** (description, causes, conséquences, propriétaire)."
        },
        {
          "type": "h3",
          "text": "3.2 L'évaluation des risques"
        },
        {
          "type": "p",
          "text": "Une fois identifiés, les risques doivent être **évalués** pour être hiérarchisés. L'évaluation repose sur deux dimensions fondamentales et une notion dérivée."
        },
        {
          "type": "p",
          "text": "La **probabilité** (ou fréquence, ou vraisemblance) mesure la chance que le risque se réalise. Elle s'apprécie sur une échelle (par exemple de 1 « très improbable » à 5 « quasi certain »), à partir de données historiques quand elles existent, ou à dire d'expert. L'**impact** (ou gravité) mesure l'ampleur des conséquences si le risque se réalise — financières, opérationnelles, réputationnelles, humaines. Il s'apprécie également sur une échelle (de 1 « négligeable » à 5 « catastrophique »). La **criticité** est le produit des deux : Criticité = Probabilité × Impact. Elle hiérarchise les risques et fonde la priorisation des actions. À ces deux dimensions, les démarches matures ajoutent le **niveau de maîtrise** existant : un risque très critique mais déjà bien maîtrisé (dispositifs en place) appelle une vigilance différente d'un risque critique non maîtrisé. On distingue alors le **risque inhérent** (brut, avant maîtrise) du **risque résiduel** (net, après prise en compte des dispositifs de contrôle)."
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Méthodes de mesure des risques *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension**",
            "**Ce qu'elle mesure**",
            "**Échelle type**",
            "**Source d'évaluation**"
          ],
          "rows": [
            [
              "**Probabilité**",
              "Vraisemblance de survenance",
              "1 (rare) à 5 (quasi certain)",
              "Historique, statistiques, dire d'expert"
            ],
            [
              "**Impact**",
              "Gravité des conséquences",
              "1 (négligeable) à 5 (catastrophique)",
              "Estimation financière, scénarios"
            ],
            [
              "**Criticité**",
              "Priorité du risque (P × I)",
              "1 à 25",
              "Produit probabilité × impact"
            ],
            [
              "**Niveau de maîtrise**",
              "Qualité des dispositifs existants",
              "Faible / moyen / fort",
              "Audit, auto-évaluation"
            ],
            [
              "**Risque résiduel**",
              "Risque net après maîtrise",
              "Recalculé",
              "Criticité ajustée du niveau de maîtrise"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — évaluation et arbitrage de maîtrise *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Une PME industrielle évalue cinq risques sur des échelles de 1 à 5. La criticité (P × I) hiérarchise les priorités ; le coût de maîtrise éclaire l'arbitrage."
        },
        {
          "type": "table",
          "headers": [
            "**Risque**",
            "**Probabilité**",
            "**Impact**",
            "**Criticité (P×I)**",
            "**Coût annuel de maîtrise**",
            "**Décision**"
          ],
          "rows": [
            [
              "R1 — Cyberattaque",
              "4",
              "5",
              "**20**",
              "60 000 €",
              "Réduire (prioritaire)"
            ],
            [
              "R2 — Rupture fournisseur clé",
              "4",
              "4",
              "**16**",
              "25 000 € (2ᵉ source)",
              "Réduire / transférer"
            ],
            [
              "R3 — Incendie entrepôt",
              "2",
              "5",
              "**10**",
              "18 000 € (assurance)",
              "Transférer"
            ],
            [
              "R4 — Litige client",
              "3",
              "2",
              "**6**",
              "12 000 €",
              "Réduire si raisonnable"
            ],
            [
              "R5 — Absentéisme ponctuel",
              "3",
              "1",
              "**3**",
              "—",
              "Accepter"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Analyse.** La hiérarchisation par criticité fait ressortir R1 (cyber, criticité 20) et R2 (rupture, 16) comme priorités absolues. Mais l'arbitrage intègre le **coût de maîtrise** : R2 se traite à faible coût (référencer une seconde source : 25 000 €) pour un gain de criticité élevé — excellent rapport. R3 (incendie), à forte gravité mais faible probabilité, relève typiquement du **transfert par assurance** (18 000 €) plutôt que d'une coûteuse réduction. R5, peu critique, est **accepté** sans dépense. Le raisonnement clé, attendu en DSCG : on ne traite pas les risques par ordre de criticité brute, mais en optimisant le **rapport entre la réduction de criticité obtenue et le coût de maîtrise engagé** — exactement la logique d'allocation de ressource rare déjà rencontrée (Pareto des achats, chemin critique des projets). Maîtriser, c'est arbitrer."
        },
        {
          "type": "h4",
          "text": "Matrice 4 — Matrice Impact × Probabilité *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice croise probabilité (en abscisse) et impact (en ordonnée), chaque case correspondant à un niveau de criticité matérialisé par une couleur (vert = acceptable, jaune = modéré, orange = élevé, rouge = critique). Elle permet de **positionner** chaque risque et d'en **déduire la stratégie de traitement** : les risques de la zone rouge (forte probabilité ET fort impact) exigent un traitement prioritaire et immédiat ; les risques de forte gravité mais faible probabilité appellent des plans de continuité et des transferts (assurance) ; les risques fréquents mais peu graves se traitent par la prévention et la réduction ; les risques de la zone verte sont acceptés en l'état. C'est l'outil de hiérarchisation par excellence, qui transforme une liste de risques en priorités d'action."
        },
        {
          "type": "h4",
          "text": "Heat map 5 — Cartographie visuelle des risques *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La *heat map* enrichit la matrice en y positionnant les **risques réels** de l'organisation (points numérotés), offrant une vue synthétique de l'exposition globale. Sa lecture est immédiate : la concentration de points dans la zone rouge/orange signale une exposition préoccupante appelant un renforcement des dispositifs ; une répartition majoritairement verte traduit une bonne maîtrise. Au-delà de l'instantané, le suivi de la *heat map* dans le **temps** (déplacement des points d'une revue à l'autre) montre si la maîtrise progresse — un risque qui « descend » de la zone rouge vers le vert atteste de l'efficacité des plans d'action. C'est l'outil de pilotage et de communication des risques auprès de la direction et du conseil."
        },
        {
          "type": "p",
          "text": "**Transition.** Matrice et heat map sont les briques de l'outil de synthèse du management des risques : la cartographie."
        }
      ]
    },
    {
      "id": "4-la-cartographie-des-risques",
      "title": "4. La cartographie des risques",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; démarche reprise de l'ancien cours (Cours 4).*"
        },
        {
          "type": "h3",
          "text": "4.1 Principes"
        },
        {
          "type": "p",
          "text": "La **cartographie des risques** est la représentation structurée et hiérarchisée de l'ensemble des risques d'une organisation (ou d'un périmètre), positionnés selon leur criticité. Elle constitue le document de référence du management des risques : elle donne une vision d'ensemble, hiérarchise les priorités, fonde l'allocation des ressources de maîtrise et sert de base au reporting vers la gouvernance. La cartographie se décline à plusieurs niveaux selon le périmètre et le destinataire : une cartographie **stratégique** (macro-risques de l'organisation, destinée au conseil et à la direction générale), des cartographies **opérationnelles** (risques de processus ou de fonction, destinées au management), et des cartographies **thématiques** (cyber, ESG, fraude). Ces niveaux s'articulent : les cartographies opérationnelles, consolidées, alimentent la cartographie stratégique. Cette consolidation est un enjeu majeur dans les groupes (§12.4), où il faut agréger des risques hétérogènes issus de filiales et de pays différents en une vision cohérente. La qualité d'une cartographie tient autant à la rigueur de la méthode qu'à la **franchise** de l'exercice : une cartographie qui minimise les risques pour rassurer la direction est non seulement inutile mais dangereuse, car elle endort la vigilance. D'où l'importance d'une fonction risques indépendante et d'une culture qui valorise la remontée honnête des risques. L'ancien cours en résumait l'esprit : « à chaque risque répertorié est attachée sa probabilité de survenance et son niveau d'impact ; une cartographie des risques est établie et des décisions relatives à chaque risque sont retenues »."
        },
        {
          "type": "h3",
          "text": "4.2 Construction"
        },
        {
          "type": "p",
          "text": "La construction d'une cartographie suit une démarche rigoureuse : (1) **identifier** les risques (§3.1) et les consigner dans un registre ; (2) les **évaluer** en probabilité et impact (§3.2) ; (3) calculer la **criticité** et les positionner sur la matrice ; (4) apprécier le **niveau de maîtrise** et en déduire le risque résiduel ; (5) **hiérarchiser** et définir, pour chaque risque, une stratégie de traitement et un plan d'action assorti d'un responsable et d'échéances ; (6) **suivre** dans le temps. La cartographie n'est pas un exercice ponctuel mais un processus **vivant**, réactualisé périodiquement (au moins annuellement) et à chaque évolution majeure de l'environnement."
        },
        {
          "type": "h3",
          "text": "4.3 Les stratégies de traitement et l'exploitation managériale"
        },
        {
          "type": "p",
          "text": "À chaque risque cartographié correspond une **stratégie de traitement**, choisie selon sa criticité et le coût de maîtrise. On retrouve les quatre options canoniques (déjà vues pour les projets, chapitre 2), que l'ancien cours décrivait précisément. **Éviter (supprimer)** : renoncer à l'activité ou à l'option porteuse du risque, lorsque celui-ci est inacceptable. **Réduire (atténuer)** : abaisser la probabilité (prévention) ou l'impact (protection) par des dispositifs de contrôle — c'est le domaine du contrôle interne (§5). **Transférer (partager)** : faire porter le risque par un tiers (assurance, sous-traitance, clause contractuelle) ; l'ancien cours évoquait précisément la possibilité de « transférer le risque totalement ou partiellement à des tiers ». **Accepter (conserver)** : assumer le risque, avec ou sans provision, lorsqu'il est faible ou que le coût de traitement excède l'enjeu — l'ancien cours notait que l'on peut « ne rien faire si le risque est peu probable et peu important »."
        },
        {
          "type": "p",
          "text": "L'exploitation managériale de la cartographie consiste précisément à **arbitrer** : allouer les ressources de maîtrise (toujours limitées) aux risques les plus critiques, en cohérence avec l'appétence au risque définie par la gouvernance, et à **suivre** l'exécution des plans d'action. C'est ici que le management des risques rejoint le pilotage de la performance : maîtriser les risques consomme des ressources, et l'enjeu est d'optimiser le couple risque/coût de maîtrise."
        },
        {
          "type": "h4",
          "text": "Cartographie 6 — Exemple complet d'entreprise *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Cette cartographie illustrative positionne une dizaine de risques d'une entreprise industrielle sur la matrice criticité, en distinguant par une flèche le risque inhérent (brut) du risque résiduel (après maîtrise) pour quelques risques clés. Sa lecture révèle les priorités : le risque cyber et le risque de rupture d'approvisionnement, en zone rouge, concentrent l'effort ; on observe que les dispositifs de maîtrise font « descendre » certains risques (la flèche matérialise la réduction obtenue). C'est cette vision dynamique — risque brut, action de maîtrise, risque résiduel — qui distingue une cartographie de pilotage d'un simple inventaire statique."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Lecture des niveaux de criticité *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau de criticité**",
            "**Zone (couleur)**",
            "**Interprétation**",
            "**Stratégie type**",
            "**Suivi**"
          ],
          "rows": [
            [
              "**Critique (15-25)**",
              "Rouge",
              "Inacceptable en l'état",
              "Éviter ou réduire d'urgence",
              "Comité de direction, suivi rapproché"
            ],
            [
              "**Élevé (8-14)**",
              "Orange",
              "À traiter en priorité",
              "Réduire et/ou transférer",
              "Reporting régulier"
            ],
            [
              "**Modéré (4-7)**",
              "Jaune",
              "À surveiller",
              "Réduire si coût raisonnable, surveiller",
              "Revue périodique"
            ],
            [
              "**Faible (1-3)**",
              "Vert",
              "Acceptable",
              "Accepter (conserver)",
              "Veille"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** La principale stratégie de réduction des risques passe par un dispositif structuré : le contrôle interne."
        }
      ]
    },
    {
      "id": "5-le-controle-interne",
      "title": "5. Le contrôle interne",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : définition et principes (sauvegarde du patrimoine, séparation des fonctions) repris de l'ancien cours ; composantes COSO créées.*"
        },
        {
          "type": "h3",
          "text": "5.1 Définition et objectifs"
        },
        {
          "type": "p",
          "text": "Le **contrôle interne** est l'ensemble des dispositifs (organisation, procédures, contrôles) mis en place par une organisation pour maîtriser ses activités et donner une **assurance raisonnable** quant à l'atteinte de ses objectifs. L'ancien cours en donne une définition opérationnelle : « un ensemble de principes et de procédures liés à l'organisation permettant de sauvegarder le patrimoine de l'entreprise en prévenant ou détectant les erreurs et les fraudes, et d'assurer la fiabilité des informations ». La définition moderne (COSO) élargit cette vision autour de plusieurs objectifs : la **sécurisation** des opérations et la **protection des actifs** (prévenir pertes, fraudes, gaspillages) ; la **conformité** aux lois et règlements ; la **fiabilité de l'information** financière et de gestion ; l'**efficacité et l'efficience opérationnelles**. Le contrôle interne n'est donc pas qu'un dispositif comptable : c'est un système de maîtrise global au service de la performance."
        },
        {
          "type": "p",
          "text": "Un principe fondateur, souligné par l'ancien cours, mérite l'attention : la **séparation des fonctions** (ou séparation des tâches incompatibles). « Si le vendeur est en même temps caissier, il y a un risque objectif de détournement » : confier à une même personne l'autorisation, l'exécution, la conservation et le contrôle d'une opération crée un risque de fraude. La séparation de ces fonctions est l'un des contrôles les plus efficaces et les plus universels. On distingue par ailleurs plusieurs types de contrôles selon leur finalité temporelle. Les contrôles **préventifs** agissent en amont pour empêcher la survenance d'un incident (autorisations préalables, habilitations, séparation des fonctions) ; ils sont les plus efficaces car ils évitent le dommage. Les contrôles **détectifs** repèrent *a posteriori* les anomalies (rapprochements bancaires, inventaires, revues, alertes) ; ils limitent l'ampleur du dommage en le détectant tôt. Les contrôles **correctifs**, enfin, rétablissent la situation après détection (procédures de remédiation, plans de continuité). Un dispositif équilibré combine les trois, en privilégiant la prévention. On distingue aussi les contrôles **manuels** (exercés par des personnes) et **automatisés** (intégrés aux systèmes d'information) ; ces derniers, plus fiables et moins coûteux à grande échelle, montent en puissance avec la digitalisation, mais créent en retour une dépendance aux SI (lien §9). La responsabilité du contrôle interne incombe à l'ensemble de l'organisation : la direction le conçoit et en répond, le management le met en œuvre, chaque collaborateur y participe, et l'audit interne en évalue l'efficacité."
        },
        {
          "type": "h4",
          "text": "Focus — le triangle de la fraude (Cressey)"
        },
        {
          "type": "p",
          "text": "La fraude, risque opérationnel majeur que le contrôle interne vise à prévenir, s'analyse classiquement par le **triangle de la fraude** de Donald Cressey, qui identifie trois conditions réunies chez le fraudeur : la **pression** (un besoin ou une incitation — difficultés financières, objectifs intenables, appât du gain) ; l'**opportunité** (une faille du contrôle interne permettant d'agir sans être détecté — c'est le seul facteur sur lequel l'organisation a une prise directe) ; et la **rationalisation** (la justification que le fraudeur se donne à lui-même — « je me rembourse », « tout le monde le fait », « je rétablirai avant qu'on s'en aperçoive »). L'enseignement est précieux : le contrôle interne agit principalement sur l'**opportunité** (séparation des fonctions, contrôles, supervision), mais la prévention complète suppose aussi d'agir sur la pression (objectifs réalistes, conditions de travail) et la rationalisation (éthique, culture, exemplarité — l'environnement de contrôle COSO). L'affaire Société Générale (§11) illustre ces trois sommets : pression de la performance, opportunité liée à une supervision défaillante, rationalisation du trader persuadé de pouvoir « se refaire ». Réduire la fraude à un problème de procédures, en négligeant la culture et la pression, est une erreur classique."
        },
        {
          "type": "h4",
          "text": "Encadré — Erreurs fréquentes"
        },
        {
          "type": "p",
          "text": "**Erreurs fréquentes.** Le contrôle interne ne donne qu'une **assurance raisonnable**, jamais absolue : aucun dispositif n'élimine totalement le risque (collusion, contournement par la direction, événement imprévu). L'affaire Société Générale (§11) illustre les **limites** : des procédures existaient, mais la fraude a contourné les contrôles. Autre erreur : confondre contrôle interne (dispositif permanent, porté par le management) et audit interne (évaluation périodique de ce dispositif par une fonction indépendante, §7-8). Enfin, un contrôle interne trop lourd (sur-procéduré) nuit à l'efficacité : il faut un équilibre coût/maîtrise."
        },
        {
          "type": "h3",
          "text": "5.2 Les composantes du contrôle interne (modèle COSO)"
        },
        {
          "type": "p",
          "text": "*Statut : créé (cadre COSO).*"
        },
        {
          "type": "p",
          "text": "Le référentiel de référence est le **COSO** (*Committee of Sponsoring Organizations of the Treadway Commission*), publié en 1992 et actualisé en 2013. Il structure le contrôle interne en **cinq composantes** interdépendantes, souvent représentées en cube ou en pyramide."
        },
        {
          "type": "p",
          "text": "L'**environnement de contrôle** est le socle : il regroupe la culture, l'intégrité, les valeurs éthiques, la compétence, le style de direction et la gouvernance. C'est le « ton donné par le sommet » (*tone at the top*) : sans un environnement sain, les meilleurs contrôles restent lettre morte. L'**évaluation des risques** identifie et analyse les risques susceptibles d'affecter les objectifs (c'est le lien direct avec les §3-4). Les **activités de contrôle** sont les dispositifs concrets qui maîtrisent les risques : procédures, autorisations, séparation des fonctions, rapprochements, contrôles physiques, contrôles applicatifs. L'**information et la communication** assurent que l'information pertinente circule en temps utile, vers le haut, le bas et le travers. Le **pilotage** (*monitoring*) évalue dans la durée le bon fonctionnement du dispositif et déclenche les corrections — il inclut l'auto-évaluation et l'audit interne."
        },
        {
          "type": "h4",
          "text": "Schéma 8 — Le modèle COSO du contrôle interne *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma représente les cinq composantes empilées en pyramide, de l'environnement de contrôle (socle) au pilotage (sommet), traversées par les objectifs (opérations, reporting, conformité). Sa lecture est instructive : les composantes ne sont pas une simple liste mais un **système** où chacune conditionne les autres. L'environnement de contrôle est le fondement — un contrôle interne ne vaut que ce que vaut la culture qui le porte. Le pilotage referme la boucle en assurant l'amélioration continue du dispositif. Cette architecture montre que le contrôle interne est autant affaire de **culture et de comportements** que de procédures."
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Les cinq composantes du contrôle interne *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Composante**",
            "**Rôle**",
            "**Exemples de dispositifs**",
            "**Question clé**"
          ],
          "rows": [
            [
              "**Environnement de contrôle**",
              "Socle : culture, intégrité, gouvernance",
              "Code éthique, organigramme, compétences, *tone at the top*",
              "La culture favorise-t-elle la maîtrise ?"
            ],
            [
              "**Évaluation des risques**",
              "Identifier et analyser les risques",
              "Cartographie des risques, analyse de processus",
              "Les risques sont-ils identifiés et évalués ?"
            ],
            [
              "**Activités de contrôle**",
              "Maîtriser concrètement les risques",
              "Séparation des fonctions, autorisations, rapprochements",
              "Les contrôles couvrent-ils les risques clés ?"
            ],
            [
              "**Information et communication**",
              "Faire circuler l'information pertinente",
              "Reporting, systèmes d'information, remontée d'alertes",
              "L'information circule-t-elle en temps utile ?"
            ],
            [
              "**Pilotage (*monitoring*)**",
              "Évaluer et améliorer le dispositif",
              "Auto-évaluation, audit interne, indicateurs",
              "Le dispositif est-il surveillé et corrigé ?"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** Le contrôle interne (COSO) s'inscrit dans des référentiels plus larges de management des risques, qu'il convient de connaître."
        }
      ]
    },
    {
      "id": "6-les-referentiels-internationaux",
      "title": "6. Les référentiels internationaux",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé.*"
        },
        {
          "type": "h3",
          "text": "6.1 COSO ERM"
        },
        {
          "type": "p",
          "text": "Au-delà du contrôle interne (COSO 1992/2013), le **COSO ERM** (*Enterprise Risk Management*, 2004, refondu en 2017 sous le titre « Aligner le management des risques à la stratégie et à la performance ») propose un cadre de management **global et intégré** des risques de l'entreprise. Son apport décisif est l'**intégration stratégique** : le risque n'y est plus géré en silos ni cantonné à la conformité, mais relié à la stratégie et à la création de valeur. La version 2017 articule le management des risques autour de cinq composantes (gouvernance et culture ; stratégie et définition des objectifs ; performance ; revue et amélioration ; information, communication et reporting) et insiste sur l'**appétence au risque** comme variable stratégique. Chacune de ces cinq composantes mérite d'être située. La **gouvernance et la culture** posent le ton et les responsabilités de surveillance des risques (rôle du conseil, valeurs, comportements souhaités). La **stratégie et la définition des objectifs** intègrent le management des risques dès la formulation stratégique : on y analyse le contexte, on définit l'appétence et on aligne les objectifs. La **performance** identifie, évalue et hiérarchise les risques susceptibles d'affecter l'atteinte des objectifs, et sélectionne les réponses — c'est le cœur opérationnel, qui rejoint la démarche des §3-4. La **revue et l'amélioration** évaluent dans la durée le fonctionnement du dispositif et l'adaptent. L'**information, la communication et le reporting** assurent la circulation de l'information sur les risques à tous les niveaux. La grande nouveauté de COSO ERM 2017 par rapport à la version 2004 (qui se représentait en cube) est précisément ce **recentrage sur la stratégie et la performance** : le management des risques n'est plus un processus parallèle de conformité, mais une dimension intégrée du pilotage stratégique. C'est cette intégration que les sujets DSCG valorisent particulièrement. COSO ERM répond ainsi à la question : comment intégrer la prise de risque maîtrisée au pilotage de la performance ?"
        },
        {
          "type": "h3",
          "text": "6.2 ISO 31000"
        },
        {
          "type": "p",
          "text": "La norme **ISO 31000** (2009, révisée en 2018) est le standard international du management des risques. Elle ne certifie pas (ce sont des lignes directrices, non une norme certifiable) mais propose un cadre universel applicable à toute organisation. Elle s'articule autour de trois éléments. Les **principes** : le management des risques crée et préserve la valeur, est intégré aux processus, est adapté, inclusif, dynamique, fondé sur la meilleure information disponible. Le **cadre organisationnel** (*framework*) : leadership, intégration, conception, mise en œuvre, évaluation, amélioration — il ancre le management des risques dans la gouvernance. Le **processus** : communication et concertation ; établissement du contexte ; appréciation du risque (identification, analyse, évaluation) ; traitement ; suivi et revue. C'est ce processus qui structure la démarche opérationnelle décrite aux §3-4. Un principe central d'ISO 31000 mérite d'être souligné : le management des risques doit être **intégré** à tous les processus de l'organisation et non constituer une activité séparée. Trop souvent, la gestion des risques est vécue comme un exercice formel et annuel, déconnecté des décisions réelles — une cartographie que l'on produit pour la conformité puis que l'on range jusqu'à l'année suivante. ISO 31000 plaide au contraire pour un management des risques **vivant**, irriguant les décisions quotidiennes, du choix d'investissement à la sélection d'un fournisseur. C'est la condition pour que la démarche crée réellement de la valeur plutôt que de générer une bureaucratie supplémentaire. Cette exigence d'intégration rejoint la critique récurrente adressée aux dispositifs trop formels : un management des risques qui ne change aucune décision ne sert à rien."
        },
        {
          "type": "h4",
          "text": "Tableau 9 — COSO ERM vs ISO 31000 *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**COSO ERM**",
            "**ISO 31000**"
          ],
          "rows": [
            [
              "**Origine**",
              "États-Unis (COSO)",
              "International (ISO)"
            ],
            [
              "**Nature**",
              "Cadre de référence (*framework*)",
              "Lignes directrices (non certifiable)"
            ],
            [
              "**Orientation**",
              "Forte intégration stratégie/performance",
              "Processus universel, adaptable"
            ],
            [
              "**Focalisation**",
              "Entreprise (gouvernance, reporting financier à l'origine)",
              "Toute organisation, tout type de risque"
            ],
            [
              "**Structure**",
              "Composantes + principes (v2017)",
              "Principes + cadre + processus"
            ],
            [
              "**Appétence au risque**",
              "Centrale",
              "Présente (contexte)"
            ],
            [
              "**Complémentarité**",
              "Vision stratégique d'ensemble",
              "Démarche processuelle opérationnelle"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Les deux référentiels sont **complémentaires** plutôt que concurrents : COSO ERM apporte la vision stratégique et l'intégration à la performance (le « pourquoi » et le « quoi »), ISO 31000 apporte le processus opérationnel universel (le « comment »). Beaucoup d'organisations combinent les deux. Pour le DSCG, retenir leur logique commune — relier le risque aux objectifs, structurer une démarche d'identification, évaluation, traitement et suivi — plus que le détail de leurs composantes respectives."
        },
        {
          "type": "h4",
          "text": "Schéma 9 — Le processus de management des risques (ISO 31000) *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma représente le processus ISO 31000 en boucle : établissement du contexte → appréciation du risque (identifier, analyser, évaluer) → traitement → suivi et revue, le tout enveloppé par la communication/concertation permanente. Sa lecture souligne deux traits essentiels : le caractère **itératif** (le management des risques n'est pas linéaire mais cyclique, réactualisé en continu) et le rôle **transversal de la communication** (à toutes les étapes, la concertation avec les parties prenantes est requise). Cette représentation processuelle est directement mobilisable pour structurer une réponse d'examen."
        },
        {
          "type": "p",
          "text": "**Transition.** Ce processus suppose une organisation des responsabilités, qu'incarne le modèle des trois lignes de maîtrise."
        }
      ]
    },
    {
      "id": "7-les-trois-lignes-de-maitrise",
      "title": "7. Les trois lignes de maîtrise",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé (modèle IIA) ; audit interne repris de l'ancien cours.*"
        },
        {
          "type": "p",
          "text": "Le modèle des **trois lignes de maîtrise** (*Three Lines Model*, formalisé par l'IIA — *Institute of Internal Auditors* — en 2013, actualisé en 2020) clarifie la répartition des rôles dans la maîtrise des risques. Sa force pédagogique est de répondre à une question récurrente : qui fait quoi dans la gestion des risques ? Il distingue trois niveaux de responsabilité, indépendants mais coordonnés."
        },
        {
          "type": "p",
          "text": "La **première ligne** est le **management opérationnel** : ce sont les opérationnels qui, dans leur activité quotidienne, **détiennent et gèrent les risques** au plus près du terrain. Ils mettent en œuvre les contrôles intégrés aux processus. C'est la ligne de front : c'est là que les risques naissent et que la maîtrise s'exerce d'abord."
        },
        {
          "type": "p",
          "text": "La **deuxième ligne** regroupe les **fonctions de support et de contrôle** spécialisées : gestion des risques (*risk management*), conformité (*compliance*), contrôle interne, qualité, parfois contrôle de gestion. Elle ne gère pas directement les risques opérationnels mais **définit les cadres, outille, surveille et appuie** la première ligne. Elle apporte l'expertise et la cohérence d'ensemble."
        },
        {
          "type": "p",
          "text": "La **troisième ligne** est l'**audit interne** : fonction **indépendante** qui fournit à la gouvernance (conseil d'administration, comité d'audit) une **assurance objective** sur l'efficacité de l'ensemble du dispositif (première et deuxième lignes incluses). L'ancien cours décrivait déjà ce « service d'audit interne regroupant des inspecteurs chargés de contrôler la bonne application des procédures ». Son indépendance est sa valeur : elle rapporte au comité d'audit, non au management opérationnel qu'elle évalue."
        },
        {
          "type": "p",
          "text": "À ces trois lignes s'ajoutent les **auditeurs externes** et les **régulateurs**, parfois qualifiés de « quatrième ligne », qui apportent une assurance externe. Il faut noter que le modèle a évolué : la version initiale de 2013 parlait de « trois lignes de *défense* », expression connotant une posture défensive et cloisonnée. La refonte de 2020 a substitué le terme de « trois lignes » (ou « lignes de maîtrise »), pour souligner que la maîtrise des risques n'est pas qu'une affaire de défense mais aussi de création de valeur, et insister sur la **coopération** entre les lignes plutôt que sur leur cloisonnement. Cette nuance terminologique traduit l'évolution de fond du management des risques, de la conformité défensive vers le pilotage stratégique créateur de valeur. Une limite du modèle doit cependant être signalée : appliqué de façon rigide, il peut induire une déresponsabilisation (« le risque, c'est l'affaire de la deuxième ligne ») alors que la maîtrise des risques relève d'abord de ceux qui les prennent, en première ligne. Le modèle clarifie les rôles ; il ne doit pas diluer la responsabilité première des opérationnels."
        },
        {
          "type": "p",
          "text": "La gouvernance d'ensemble du dispositif relève du **conseil d'administration**, souvent via un **comité des risques** ou un **comité d'audit** spécialisé, qui supervise la politique de risque, valide l'appétence et s'assure de l'efficacité du dispositif. La direction générale porte la responsabilité opérationnelle de la mise en œuvre, parfois incarnée par un **directeur des risques** (*Chief Risk Officer*, CRO) dans les organisations matures, notamment financières. Cette architecture de gouvernance garantit que la maîtrise des risques ne reste pas confinée aux niveaux techniques mais remonte jusqu'au sommet, où se prennent les arbitrages stratégiques entre risque et performance. L'articulation entre ces instances de gouvernance et les trois lignes opérationnelles constitue le système complet de maîtrise des risques de l'organisation."
        },
        {
          "type": "h4",
          "text": "Schéma 10 — Le modèle des trois lignes de maîtrise *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma étage les trois lignes sous la gouvernance (conseil/comité d'audit), avec à droite l'assurance externe (CAC, régulateurs). Sa lecture clarifie un principe essentiel : l'**indépendance croissante** à mesure que l'on s'éloigne du terrain. La première ligne est juge et partie (elle gère ses propres risques) ; la deuxième apporte un regard spécialisé mais reste interne au management ; seule la troisième (audit interne) est véritablement indépendante, car rattachée à la gouvernance. Cette gradation garantit qu'aucun niveau ne se contrôle entièrement lui-même. Le modèle prévient ainsi deux écueils : la dilution des responsabilités (chacun sait ce qu'il doit faire) et l'absence de regard indépendant (l'audit interne assure le contrôle du contrôle)."
        },
        {
          "type": "h4",
          "text": "Tableau 10 — Responsabilités des trois lignes *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Ligne**",
            "**Acteurs**",
            "**Rôle**",
            "**Rattachement**",
            "**Degré d'indépendance**"
          ],
          "rows": [
            [
              "**1ʳᵉ ligne**",
              "Management opérationnel",
              "Détenir et gérer les risques ; contrôles intégrés",
              "Hiérarchie opérationnelle",
              "Faible (juge et partie)"
            ],
            [
              "**2ᵉ ligne**",
              "Risk management, conformité, contrôle interne",
              "Cadrer, outiller, surveiller, appuyer",
              "Direction",
              "Moyen"
            ],
            [
              "**3ᵉ ligne**",
              "Audit interne",
              "Assurance objective sur tout le dispositif",
              "Comité d'audit / gouvernance",
              "Fort (indépendant)"
            ],
            [
              "*(Externe)*",
              "CAC, régulateurs",
              "Assurance externe",
              "Externe",
              "Total"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** La troisième ligne — l'audit interne — et le contrôle de gestion entretiennent des relations de complémentarité qu'il faut clarifier."
        }
      ]
    },
    {
      "id": "8-audit-interne-audit-externe-et-controle-de-gestion",
      "title": "8. Audit interne, audit externe et contrôle de gestion",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : audit légal/contractuel et comité d'audit repris de l'ancien cours ; comparaison créée.*"
        },
        {
          "type": "h3",
          "text": "8.1 L'audit interne"
        },
        {
          "type": "p",
          "text": "L'**audit interne** est une fonction indépendante d'évaluation, exercée à l'intérieur de l'organisation, qui apprécie l'efficacité des dispositifs de management des risques, de contrôle interne et de gouvernance, et formule des recommandations d'amélioration. Selon la définition de l'IIA, c'est une « activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations ». Il opère par missions (audits de processus, de fonctions, de filiales) et rapporte au **comité d'audit** — émanation du conseil d'administration que l'ancien cours décrit comme chargé d'« inciter à une amélioration des processus d'audit interne ». Son indépendance vis-à-vis du management opérationnel est la condition de sa valeur."
        },
        {
          "type": "h3",
          "text": "8.2 L'audit externe"
        },
        {
          "type": "p",
          "text": "L'**audit externe** est exercé par un professionnel indépendant extérieur à l'organisation. L'ancien cours en distingue deux formes. L'**audit légal**, mission du **commissaire aux comptes** (CAC), est obligatoire dans de nombreux cas (sociétés anonymes, seuils) : le CAC « examine les comptes dans le but d'émettre une opinion sur la sincérité des états financiers destinés aux actionnaires », sans s'immiscer dans la gestion. L'**audit contractuel** utilise les mêmes techniques mais répond à une demande volontaire (par exemple lors d'un projet de rachat, pour confirmer la situation financière). L'audit externe, dans le cadre de sa mission, apprécie le contrôle interne pour orienter ses travaux et identifier les risques."
        },
        {
          "type": "h3",
          "text": "8.3 Le contrôle de gestion"
        },
        {
          "type": "p",
          "text": "Le **contrôle de gestion**, fil rouge de ce manuel, n'a pas pour fonction première la maîtrise des risques, mais y contribue de façon décisive. Il **identifie** des risques par son analyse des écarts et de la performance (un écart inexpliqué peut signaler un risque) ; il **alimente** la cartographie par ses données et ses indicateurs ; il **pilote** les plans d'action de maîtrise par son reporting ; et il **éclaire** l'arbitrage risque/coût de maîtrise. Surtout, il relie la maîtrise des risques à la **performance** : un dispositif de contrôle interne a un coût, et le contrôle de gestion aide à en optimiser le rapport au risque maîtrisé. Cette contribution prend plusieurs formes concrètes. Le contrôle budgétaire et l'analyse des écarts (lien Partie 3) constituent un **dispositif de détection** : un écart significatif et inexpliqué peut révéler une anomalie, une erreur, voire une fraude — c'est souvent par l'analyse de gestion que des dysfonctionnements affleurent. Les **tableaux de bord** intègrent désormais des indicateurs de risque (KRI, *Key Risk Indicators*) aux côtés des indicateurs de performance (KPI), reliant ainsi pilotage de la performance et surveillance des risques. La **budgétisation** intègre les provisions pour risques et le coût des dispositifs de maîtrise. Enfin, le contrôle de gestion participe à l'**évaluation économique** des décisions de traitement des risques (assurer ou non ? internaliser ou externaliser un contrôle ?), apportant la rationalité économique à des arbitrages parfois traités de façon purement réglementaire. Le contrôleur de gestion et le *risk manager* (deuxième ligne) sont ainsi des partenaires naturels, dont la coopération renforce à la fois la performance et la maîtrise."
        },
        {
          "type": "h4",
          "text": "Tableau 11 — Audit interne / Audit externe / Contrôle de gestion *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Audit interne**",
            "**Audit externe (CAC)**",
            "**Contrôle de gestion**"
          ],
          "rows": [
            [
              "**Position**",
              "Interne, indépendant",
              "Externe, indépendant",
              "Interne, intégré au management"
            ],
            [
              "**Mission**",
              "Évaluer la maîtrise des opérations",
              "Certifier la sincérité des comptes",
              "Piloter la performance"
            ],
            [
              "**Périmètre**",
              "Tous les processus et risques",
              "Comptes et information financière",
              "Performance, coûts, résultats"
            ],
            [
              "**Caractère**",
              "Périodique (missions)",
              "Annuel (légal)",
              "Permanent (continu)"
            ],
            [
              "**Destinataire**",
              "Comité d'audit / direction",
              "Actionnaires / tiers",
              "Management"
            ],
            [
              "**Apport à la maîtrise des risques**",
              "Assurance sur le dispositif (3ᵉ ligne)",
              "Appréciation du contrôle interne comptable",
              "Détection, données, pilotage, arbitrage"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Matrice 11 — Interactions entre les fonctions de maîtrise *(matrice obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice positionne les fonctions selon deux axes : leur **indépendance** (vis-à-vis du management) et leur **continuité** (ponctuelle vs permanente). Le contrôle de gestion est permanent mais peu indépendant (il est partie prenante du management) ; l'audit interne est indépendant mais périodique ; l'audit externe est indépendant et ponctuel. Cette complémentarité est précieuse : aucune fonction ne couvre seule tout l'espace, mais leur **combinaison** assure une maîtrise à la fois continue (contrôle de gestion), indépendante (audit interne) et certifiée (audit externe). L'enjeu de gouvernance est de les **coordonner** sans les confondre, en préservant l'indépendance de l'audit."
        },
        {
          "type": "p",
          "text": "**Transition.** Le panorama des risques se transforme profondément sous l'effet du numérique, qui fait émerger des risques inédits."
        }
      ]
    },
    {
      "id": "9-les-nouveaux-risques-a-l-ere-numerique",
      "title": "9. Les nouveaux risques à l'ère numérique",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; ouverture contemporaine ; lien UE5.*"
        },
        {
          "type": "p",
          "text": "La transformation numérique (chapitre précédent) crée une catégorie entière de risques nouveaux, dont l'ampleur et la rapidité d'évolution défient les dispositifs traditionnels. La **cybersécurité** est devenue l'enjeu majeur : les cyberattaques (rançongiciels, intrusions, déni de service) peuvent paralyser une organisation, et leur coût — interruption, rançon, remédiation, atteinte réputationnelle — est considérable. L'**intelligence artificielle** introduit des risques spécifiques : opacité des décisions algorithmiques (« boîte noire »), erreurs à grande échelle, dépendance excessive. Les **données personnelles** exposent à des risques de conformité majeurs (RGPD, sanctions pouvant atteindre 4 % du chiffre d'affaires mondial) et réputationnels. Le **cloud computing**, en externalisant l'infrastructure, crée une **dépendance technologique** à des prestataires et des risques de continuité et de souveraineté. Les **risques algorithmiques** — biais, discriminations, décisions injustes produites par des modèles mal conçus ou mal entraînés — soulèvent des enjeux éthiques et juridiques croissants."
        },
        {
          "type": "p",
          "text": "Deux notions transversales structurent la maîtrise de ces risques numériques. La **résilience opérationnelle** désigne la capacité d'une organisation à continuer de fonctionner et à se rétablir rapidement après un incident majeur (cyberattaque, panne) : elle se construit par la redondance des systèmes, les sauvegardes, les plans de continuité d'activité (PCA) et de reprise (PRA), et les exercices de crise. Elle complète la prévention (qu'on ne peut jamais rendre parfaite) par la capacité d'absorption et de rebond — rejoignant la logique d'antifragilité (§1). La **gouvernance des données et de l'IA**, ensuite, devient un chantier à part entière : qui est responsable d'un algorithme défaillant ? comment garantir l'auditabilité et l'explicabilité des décisions automatisées ? comment prévenir les biais ? Le règlement européen sur l'IA (*AI Act*) et le RGPD encadrent progressivement ces enjeux, faisant de la conformité numérique une composante majeure du management des risques. Pour le contrôleur de gestion et l'auditeur, ces risques imposent de nouvelles compétences : on n'audite pas un algorithme comme on audite un processus manuel."
        },
        {
          "type": "h4",
          "text": "Tableau 12 — Cartographie des risques numériques *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Risque numérique**",
            "**Nature**",
            "**Conséquences**",
            "**Dispositifs de maîtrise**"
          ],
          "rows": [
            [
              "**Cybersécurité**",
              "Attaques (rançongiciel, intrusion)",
              "Interruption, rançon, fuite, réputation",
              "SOC, sauvegardes, sensibilisation, tests d'intrusion"
            ],
            [
              "**IA / algorithmique**",
              "Opacité, biais, erreurs d'échelle",
              "Décisions injustes, juridique, réputation",
              "Gouvernance de l'IA, auditabilité, supervision humaine"
            ],
            [
              "**Données personnelles**",
              "Non-conformité (RGPD)",
              "Sanctions, réputation",
              "DPO, registre des traitements, privacy by design"
            ],
            [
              "**Cloud / dépendance**",
              "Dépendance à un prestataire",
              "Continuité, souveraineté",
              "Plans de réversibilité, multi-cloud, clauses contractuelles"
            ],
            [
              "**Dépendance technologique**",
              "Concentration des fournisseurs",
              "Rupture, perte de contrôle",
              "Diversification, plans de continuité"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 12 — Niveau d'exposition aux risques numériques (radar) *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le radar compare le niveau d'exposition d'une organisation sur les grandes dimensions de risque numérique (cybersécurité, IA, données, cloud, dépendance), éventuellement face à un niveau de maîtrise cible. Sa lecture révèle les **déséquilibres** d'exposition : une organisation peut être bien protégée sur la cybersécurité classique mais très exposée sur la gouvernance de l'IA, domaine émergent où les dispositifs sont encore immatures. Le radar oriente ainsi l'investissement en maîtrise vers les axes les plus exposés et les moins maîtrisés. Il constitue aussi un puissant outil de communication auprès de la direction, en visualisant d'un coup d'œil le profil de risque numérique."
        },
        {
          "type": "p",
          "text": "**Transition.** Aux risques numériques s'ajoutent les risques de durabilité, désormais au cœur des préoccupations et de la réglementation."
        }
      ]
    },
    {
      "id": "10-esg-durabilite-et-risques-emergents",
      "title": "10. ESG, durabilité et risques émergents",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; ouverture contemporaine ; lien fort avec la Partie 3 (durabilité).*"
        },
        {
          "type": "p",
          "text": "Les enjeux **ESG** (environnementaux, sociaux, de gouvernance) sont devenus une dimension majeure du management des risques, sous le double effet de la pression des parties prenantes et d'une réglementation en plein essor. Les **risques climatiques** se déclinent en risques **physiques** (événements extrêmes, montée des eaux affectant actifs et chaînes d'approvisionnement) et risques de **transition** (réglementation carbone, évolution des marchés et des technologies rendant obsolètes certains modèles — *stranded assets*). Les **risques sociaux** (conditions de travail, droits humains dans la chaîne d'approvisionnement) et de **gouvernance** (éthique, corruption, transparence) complètent le triptyque. Les **risques réputationnels** liés à l'ESG sont particulièrement vifs (accusations de *greenwashing*, scandales sociaux)."
        },
        {
          "type": "p",
          "text": "Deux notions structurent ce champ. La **double matérialité**, introduite par la réglementation européenne, distingue la matérialité **financière** (en quoi les enjeux ESG affectent la performance de l'entreprise) et la matérialité **d'impact** (en quoi l'entreprise affecte l'environnement et la société) : l'organisation doit considérer les deux. La **CSRD** (*Corporate Sustainability Reporting Directive*) impose, depuis son entrée en vigueur progressive, un reporting de durabilité détaillé et audité à un large périmètre d'entreprises — faisant de la maîtrise et de la mesure des risques ESG une obligation, et non plus une option."
        },
        {
          "type": "h4",
          "text": "Tableau 13 — Lien entre ESG et management des risques *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension ESG**",
            "**Risques associés**",
            "**Matérialité**",
            "**Dispositifs de maîtrise**"
          ],
          "rows": [
            [
              "**Environnement (E)**",
              "Climat (physique, transition), pollution, biodiversité",
              "Financière + impact",
              "Bilan carbone, plan de transition, adaptation"
            ],
            [
              "**Social (S)**",
              "Conditions de travail, droits humains, sécurité",
              "Financière + impact",
              "Devoir de vigilance, audits sociaux, dialogue"
            ],
            [
              "**Gouvernance (G)**",
              "Éthique, corruption, transparence",
              "Financière + impact",
              "Code éthique, conformité, contrôle interne"
            ],
            [
              "**Reporting**",
              "Non-conformité CSRD, greenwashing",
              "Financière (sanctions, réputation)",
              "Reporting CSRD, double matérialité, assurance"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 13 — Intégration des risques ESG dans la stratégie *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma montre comment les risques ESG s'intègrent au pilotage stratégique : identifiés via une analyse de **double matérialité**, ils alimentent la cartographie des risques globale, nourrissent la stratégie (plan de transition, objectifs de durabilité) et font l'objet d'un reporting (CSRD) audité. Le message clé : les risques ESG ne sont pas un sujet périphérique de conformité mais une composante à part entière du management stratégique des risques et de la création de valeur durable. Une entreprise qui anticipe les risques de transition (en décarbonant) transforme une menace réglementaire en avantage concurrentiel — illustration de la symétrie risque/opportunité (§2). C'est le pont direct vers la Partie 3 du référentiel (performance globale et durabilité). Il convient d'insister sur la spécificité des **risques climatiques**, dont l'horizon et la nature défient les outils classiques. Leur horizon est **long** (plusieurs décennies), ce qui les rend difficiles à intégrer dans des cartographies traditionnellement annuelles ; leur réalisation est **non linéaire** (effets de seuil, points de bascule) ; et ils sont **systémiques** (ils affectent simultanément toute l'économie, échappant à la logique de diversification). Les autorités de supervision financière (banques centrales, régulateurs) imposent désormais des **tests de résistance climatiques** (*stress tests*) aux institutions financières, signe de la reconnaissance du risque climatique comme risque financier à part entière. Pour les entreprises, l'enjeu est de construire des **scénarios** (alignés sur les trajectoires de réchauffement) pour évaluer leur exposition et adapter leur stratégie. La maîtrise de ces risques rejoint alors pleinement la **création de valeur durable** : anticiper la transition, c'est éviter de se retrouver avec des actifs échoués (*stranded assets*) et capter les opportunités de la décarbonation. La gestion des risques ESG n'est donc pas une contrainte périphérique mais un déterminant de la pérennité même de l'organisation."
        },
        {
          "type": "p",
          "text": "**Transition.** Ces concepts s'incarnent dans des cas réels, dont l'analyse éclaire les enjeux concrets de la maîtrise des risques."
        }
      ]
    },
    {
      "id": "11-cas-d-entreprises-et-illustrations-professionnelles",
      "title": "11. Cas d'entreprises et illustrations professionnelles",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé — illustrations pédagogiques simplifiées (voir avertissement en tête de chapitre) ; cas Société Générale repris de l'ancien cours.*"
        },
        {
          "type": "p",
          "text": "**Société Générale — la défaillance du contrôle interne (2008).** Comme le rappelle l'ancien cours, la banque a révélé en janvier 2008 une fraude d'un trader, Jérôme Kerviel, portant sur des produits dérivés et menant à une **perte de 4,9 milliards d'euros**. *Risques* : risque opérationnel (fraude interne), de marché, réputationnel. *Défaillance* : contournement des contrôles, dépassement non détecté des limites, insuffisance de la séparation des fonctions et du suivi. *Enseignement* : des procédures existaient, mais leur application et leur supervision ont failli — illustration que le contrôle interne ne donne qu'une assurance *raisonnable* et que l'environnement de contrôle (culture, supervision) prime sur les seules procédures."
        },
        {
          "type": "p",
          "text": "**Airbus — conformité et risques juridiques.** Le groupe a fait face à des enjeux majeurs de conformité (enquêtes sur des pratiques commerciales passées, aboutissant à des accords transactionnels de grande ampleur). *Enseignement* : les risques juridiques et de conformité (corruption, sanctions internationales) peuvent atteindre des montants considérables et imposent des dispositifs de *compliance* robustes — illustration de la deuxième ligne de maîtrise."
        },
        {
          "type": "p",
          "text": "**TotalEnergies — risques climatiques et de transition.** Le groupe énergétique illustre les risques ESG : risques physiques et de transition, pression des parties prenantes, enjeux réputationnels liés à la transition énergétique. *Enseignement* : pour les secteurs exposés, les risques climatiques sont devenus stratégiques et structurent la transformation du modèle d'affaires (lien §10)."
        },
        {
          "type": "p",
          "text": "**Amazon — risques opérationnels et résilience.** L'entreprise illustre la maîtrise de risques opérationnels à très grande échelle (logistique, continuité informatique) et la transformation du risque en avantage par la redondance et la résilience. *Enseignement* : investir dans la résilience opérationnelle peut devenir une source d'avantage concurrentiel."
        },
        {
          "type": "p",
          "text": "**Microsoft — cybersécurité et confiance.** Acteur majeur du cloud, Microsoft illustre les enjeux de cybersécurité et de continuité à l'échelle systémique, où la confiance des clients repose sur la maîtrise du risque. *Enseignement* : pour les acteurs du numérique, la cybersécurité est un risque existentiel et un argument commercial."
        },
        {
          "type": "h4",
          "text": "Tableau 14 — Comparaison des pratiques observées *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Entreprise**",
            "**Risque dominant**",
            "**Dispositif / réponse**",
            "**Enseignement clé**"
          ],
          "rows": [
            [
              "**Société Générale**",
              "Opérationnel (fraude)",
              "Renforcement du contrôle interne *a posteriori*",
              "L'assurance n'est que raisonnable ; culture > procédures"
            ],
            [
              "**Airbus**",
              "Juridique / conformité",
              "Programmes de *compliance*",
              "Le coût de la non-conformité peut être colossal"
            ],
            [
              "**TotalEnergies**",
              "ESG / transition",
              "Stratégie de transition, reporting",
              "Les risques climatiques sont stratégiques"
            ],
            [
              "**Amazon**",
              "Opérationnel / continuité",
              "Résilience, redondance",
              "La résilience comme avantage concurrentiel"
            ],
            [
              "**Microsoft**",
              "Cyber",
              "Sécurité, continuité, confiance",
              "La cybersécurité, risque existentiel du numérique"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** Ces cas et ces concepts convergent vers les attendus de l'épreuve, que synthétisent les approfondissements DSCG."
        }
      ]
    },
    {
      "id": "12-approfondissements-dscg",
      "title": "12. Approfondissements DSCG",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "12.1 Le pilotage stratégique des risques"
        },
        {
          "type": "p",
          "text": "Le management des risques moderne (COSO ERM) est **intégré à la stratégie** : il ne s'agit pas de gérer les risques en silos mais de les relier aux objectifs et à l'appétence définie par la gouvernance. Un sujet DSCG attend que l'on relie systématiquement les risques à la stratégie (quels risques menacent quels objectifs ?) et que l'on raisonne en termes d'appétence (quel niveau de risque l'organisation accepte-t-elle ?)."
        },
        {
          "type": "h3",
          "text": "12.2 L'articulation risque–performance"
        },
        {
          "type": "p",
          "text": "C'est l'angle le plus discriminant. La maîtrise des risques a un **coût** ; l'enjeu n'est pas de tout maîtriser mais d'optimiser le couple **risque / coût de maîtrise**, en cohérence avec l'appétence. Un contrôle interne pléthorique détruit de la valeur (lourdeur, coûts) autant qu'un contrôle insuffisant (pertes, sinistres). Le contrôle de gestion éclaire cet arbitrage. Montrer que la maîtrise des risques *crée* de la valeur (sécurisation, confiance, opportunités) et n'est pas qu'un coût de conformité."
        },
        {
          "type": "h3",
          "text": "12.3 Contrôle interne et création de valeur"
        },
        {
          "type": "p",
          "text": "Dépasser la vision défensive : un bon contrôle interne fiabilise l'information (donc la décision), protège les actifs, renforce la confiance des parties prenantes (investisseurs, clients) et sécurise la stratégie. Il est un actif immatériel de l'organisation. La défaillance (cas Société Générale) montre *a contrario* le coût de son absence."
        },
        {
          "type": "h3",
          "text": "12.4 La gestion des risques dans les groupes internationaux"
        },
        {
          "type": "p",
          "text": "Les groupes font face à des enjeux spécifiques : diversité des réglementations, risques pays, consolidation des risques à l'échelle du groupe, coordination entre maison mère et filiales, risques de change et géopolitiques. La fonction *risk management* groupe (deuxième ligne) consolide les cartographies locales en une vision d'ensemble."
        },
        {
          "type": "h3",
          "text": "12.5 Synthèse des thèmes mobilisables"
        },
        {
          "type": "p",
          "text": "Identification et catégorisation des risques · construction et interprétation d'une matrice / heat map / cartographie · choix d'une stratégie de traitement (éviter/réduire/transférer/accepter) · appréciation d'un dispositif de contrôle interne (composantes COSO, séparation des fonctions) · mobilisation des référentiels (COSO, ISO 31000) · modèle des trois lignes · articulation audit / contrôle de gestion · risques cyber et ESG."
        }
      ]
    },
    {
      "id": "13-synthese-generale",
      "title": "13. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "13.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Dans un environnement d'incertitude croissante, le management des risques s'est imposé comme un levier stratégique de création de valeur durable, bien au-delà d'une simple logique défensive de conformité. Le risque, défini par l'ISO 31000 comme « l'effet de l'incertitude sur l'atteinte des objectifs », est à distinguer de l'incertitude radicale (Knight) et recèle toujours une double nature de menace et d'opportunité. Sa maîtrise commence par une **catégorisation** (risques stratégiques, opérationnels, financiers, juridiques, sociaux, réputationnels, environnementaux, cyber), une **identification** rigoureuse (interviews, ateliers, audits, retours d'expérience) et une **évaluation** fondée sur la probabilité, l'impact et leur produit, la criticité."
        },
        {
          "type": "p",
          "text": "La **cartographie des risques** synthétise et hiérarchise cette analyse, et fonde le choix des **stratégies de traitement** : éviter, réduire, transférer ou accepter, en cohérence avec l'appétence au risque. La principale stratégie de réduction passe par le **contrôle interne**, dispositif global dont le référentiel **COSO** identifie cinq composantes — environnement de contrôle, évaluation des risques, activités de contrôle, information et communication, pilotage — et dont un principe cardinal est la séparation des fonctions. À l'échelle de l'entreprise, les référentiels **COSO ERM** et **ISO 31000**, complémentaires, structurent un management des risques intégré à la stratégie et organisé en processus."
        },
        {
          "type": "p",
          "text": "La répartition des responsabilités s'organise selon le modèle des **trois lignes de maîtrise** — management opérationnel (1ʳᵉ), fonctions de contrôle (2ᵉ), audit interne indépendant (3ᵉ) —, complété par l'audit externe et le régulateur. Le **contrôle de gestion**, sans être une fonction de maîtrise des risques au sens strict, y contribue de façon décisive : détection par l'analyse des écarts, alimentation de la cartographie, pilotage des plans d'action et, surtout, éclairage de l'arbitrage entre risque et coût de maîtrise. Enfin, les **risques numériques** (cyber, IA, données) et les **risques ESG** (climat, double matérialité, CSRD) constituent les fronts émergents, où la maîtrise des risques rejoint la transformation et la durabilité. La conclusion rejoint la problématique : maîtriser ses risques, c'est se donner les moyens de prendre les bons risques en connaissance de cause, au service d'une performance durable — et c'est en cela que le management des risques est créateur de valeur. Pour le futur diplômé d'expertise comptable, cette matière est doublement essentielle : comme professionnel, il sera amené à concevoir, apprécier ou auditer des dispositifs de maîtrise des risques ; comme acteur de la gouvernance, il devra relier en permanence la prise de risque à la création de valeur. La maîtrise des risques n'est pas une discipline annexe du contrôle de gestion : elle en est le prolongement naturel, car contrôler la gestion, c'est aussi maîtriser les aléas qui menacent l'atteinte des objectifs. C'est pourquoi cette sous-partie occupe une place centrale dans le déploiement de la stratégie qu'organise la Partie 2 du référentiel."
        },
        {
          "type": "h3",
          "text": "13.2 Carte mentale"
        },
        {
          "type": "h3",
          "text": "13.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Concept**",
            "**Auteur / référentiel**",
            "**Apport**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Risque vs incertitude",
              "Frank Knight",
              "Distinguer l'aléa probabilisable de l'incertitude radicale",
              "Frontière parfois floue",
              "Choix des méthodes (calcul vs résilience)"
            ],
            [
              "Risque = effet de l'incertitude sur les objectifs",
              "ISO 31000",
              "Relier risque, objectifs et opportunité",
              "Lignes directrices non certifiables",
              "Démarche universelle de management des risques"
            ],
            [
              "Management des risques intégré à la stratégie",
              "COSO ERM",
              "Relier risque, stratégie, performance",
              "Complexité de mise en œuvre",
              "Pilotage stratégique des risques"
            ],
            [
              "Contrôle interne (5 composantes)",
              "COSO",
              "Cadre du contrôle interne",
              "Assurance raisonnable, non absolue",
              "Concevoir/apprécier un dispositif"
            ],
            [
              "Criticité = probabilité × impact",
              "Pratique / assurantiel",
              "Hiérarchiser les risques",
              "Subjectivité de l'évaluation",
              "Matrice, heat map, cartographie"
            ],
            [
              "Trois lignes de maîtrise",
              "IIA",
              "Clarifier les responsabilités",
              "Risque de cloisonnement",
              "Organisation de la maîtrise des risques"
            ],
            [
              "Double matérialité / CSRD",
              "Réglementation UE",
              "Intégrer l'ESG aux risques",
              "Coût et complexité du reporting",
              "Risques climatiques, reporting durabilité"
            ]
          ]
        }
      ]
    },
    {
      "id": "14-fiche-de-revision-dscg",
      "title": "14. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "14.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Risque** (ISO 31000) : effet de l'incertitude sur l'atteinte des objectifs (menace *ou* opportunité).",
            "**Incertitude** (Knight) : aléa non probabilisable (vs risque probabilisable).",
            "**Appétence au risque** : niveau de risque qu'une organisation accepte pour atteindre ses objectifs.",
            "**Criticité** : probabilité × impact.",
            "**Risque inhérent / résiduel** : avant / après prise en compte des dispositifs de maîtrise.",
            "**Contrôle interne** : dispositif donnant une assurance *raisonnable* d'atteinte des objectifs (sécurité, conformité, fiabilité, efficacité)."
          ]
        },
        {
          "type": "h3",
          "text": "14.2 Référentiels à connaître"
        },
        {
          "type": "p",
          "text": "COSO (contrôle interne, 5 composantes) · COSO ERM (management des risques intégré à la stratégie) · ISO 31000 (principes + cadre + processus) · modèle des trois lignes de maîtrise (IIA) · CSRD et double matérialité (ESG)."
        },
        {
          "type": "h3",
          "text": "14.3 Modèles à maîtriser"
        },
        {
          "type": "p",
          "text": "Matrice probabilité × impact · heat map · cartographie des risques · cube/pyramide COSO · processus ISO 31000 · trois lignes de maîtrise · stratégies de traitement (éviter/réduire/transférer/accepter)."
        },
        {
          "type": "h3",
          "text": "14.4 Schémas essentiels"
        },
        {
          "type": "p",
          "text": "Matrice impact × probabilité · heat map · modèle COSO (5 composantes) · processus ISO 31000 · trois lignes de maîtrise · intégration ESG dans la stratégie."
        },
        {
          "type": "h3",
          "text": "14.5 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Voir le risque comme un simple danger (oublier l'opportunité) · croire le contrôle interne « absolu » (il n'est que raisonnable) · confondre contrôle interne (permanent, management) et audit interne (périodique, indépendant) · confondre audit interne et externe · gérer les risques en silos (oublier l'ERM intégré et l'effet domino) · oublier l'arbitrage risque / coût de maîtrise · négliger l'appétence au risque."
        },
        {
          "type": "h3",
          "text": "14.6 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Identifier et catégoriser les risques d'une organisation à partir d'un cas.",
            "Évaluer des risques (probabilité, impact, criticité) et construire une matrice / heat map.",
            "Choisir et justifier une stratégie de traitement pour chaque risque (éviter/réduire/transférer/accepter).",
            "Apprécier un dispositif de contrôle interne au regard des composantes COSO ; détecter une faille (ex. séparation des fonctions).",
            "Comparer COSO ERM et ISO 31000 ; mobiliser le processus de management des risques.",
            "Expliquer le modèle des trois lignes de maîtrise et le rôle de chaque acteur.",
            "Analyser une défaillance (type Société Générale) et proposer des mesures correctives.",
            "Intégrer les risques cyber ou ESG dans une démarche de management des risques."
          ]
        },
        {
          "type": "h3",
          "text": "14.7 Liens avec les autres chapitres"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : choix stratégiques et création de valeur — la maîtrise des risques sécurise la stratégie.",
            "**Latéral (Partie 2)** : risque projet (2.2, criticité = P × I, déjà vue) ; risques fournisseurs et cyber des fonctions support (2.3) ; risque d'échec des transformations (2.4).",
            "**Aval (Partie 3)** : performance globale et tableaux de bord (3.3) ; **durabilité** (3.2 — risques ESG, double matérialité, CSRD, lien direct).",
            "**Transversal** : UE5 (systèmes d'information) pour les risques cyber et numériques ; gouvernance et audit (lien avec les autres UE du DSCG)."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.5 « La gestion des risques ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
