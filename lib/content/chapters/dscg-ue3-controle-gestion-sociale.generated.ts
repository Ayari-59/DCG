// Généré par scripts/convert-docx.mjs depuis 06_Controle_de_gestion_sociale.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-controle-gestion-sociale",
  "level": "DSCG",
  "ue": "UE3",
  "number": 6,
  "title": "Le contrôle de gestion sociale et le pilotage des ressources humaines",
  "description": "",
  "durationMin": 65,
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
          "text": "**Rattachement au référentiel officiel.** Ce chapitre couvre la sous-partie **2.6 « Le contrôle de gestion sociale » (20 heures)** de la Partie 2 — la plus volumineuse de la partie, ce qui traduit son importance dans l'épreuve. Les **compétences** attendues portent sur la capacité à définir et analyser une politique de GPEC, à piloter et prévoir la masse salariale (décomposition de ses variations en effets), à construire et exploiter des indicateurs sociaux et des tableaux de bord RH, et à relier la performance sociale à la performance économique et globale. Les **savoirs associés** sont : les fondements et finalités du contrôle de gestion sociale ; la GPEC et la gestion des compétences ; le pilotage de la masse salariale (effets de niveau, de masse, de report, GVT, effets d'effectif et de structure) ; le bilan social, les indicateurs sociaux et les tableaux de bord ; le lien capital humain / performance."
        },
        {
          "type": "p",
          "text": "**Articulation avec les autres sous-parties (limites de champ).** Ce chapitre prolonge et approfondit le pilotage de la fonction RH abordé, du point de vue des fonctions support, dans la sous-partie 2.3 : là où le chapitre 3 traitait la RH comme une fonction support parmi d'autres (KPI, radar de comparaison), le présent chapitre se consacre **entièrement et en profondeur** au pilotage social, avec sa technicité propre — au premier rang de laquelle la décomposition de la masse salariale, attendue avec une grande rigueur en DSCG. Il mobilise par ailleurs les tableaux de bord et le Balanced Scorecard (vus en 2.3 et approfondis en Partie 3), le management du changement (2.4 — la GPEC accompagne les transformations) et les enjeux ESG (Partie 3.2 — volet social). Les notions de capital humain et de coûts cachés, esquissées au chapitre 3, sont ici développées."
        },
        {
          "type": "p",
          "text": "**Avertissement sur les illustrations d'entreprises (§11).** Les cas (Michelin, L'Oréal, Airbus, Decathlon, Google) sont des illustrations pédagogiques simplifiées, fondées sur des éléments de notoriété publique ; ils ne constituent pas une analyse vérifiée et servent de supports d'apprentissage."
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
              "Effets de masse salariale (niveau, masse, report, GVT) et leurs formules",
              "**Repris-adapté**",
              "Ancien cours (Cours 4, contrôle de l'évolution de la masse salariale)"
            ],
            [
              "GPEC : processus, gestion des compétences",
              "**Repris-adapté**",
              "Ancien cours (Cours 4, GPEC)"
            ],
            [
              "Capital humain, ressources stratégiques",
              "**Repris-adapté**",
              "Ancien cours (Cours 4) + Becker, Barney"
            ],
            [
              "Définition et finalités du contrôle de gestion sociale",
              "**Créé**",
              "Martory, Crozet, Peretti"
            ],
            [
              "Indicateurs sociaux (effectifs, mobilité, climat)",
              "**Créé / complété**",
              "Culture professionnelle + bilan social"
            ],
            [
              "Tableaux de bord RH et architecture de pilotage",
              "**Créé**",
              "Référentiel (tableaux de bord)"
            ],
            [
              "Lien performance sociale / économique",
              "**Créé**",
              "Becker, Barney, Kaplan & Norton"
            ],
            [
              "Dialogue social et gouvernance RH",
              "**Créé**",
              "Référentiel"
            ],
            [
              "Digitalisation RH, SIRH, people analytics, IA",
              "**Créé**",
              "Ouverture contemporaine"
            ],
            [
              "ESG social, diversité, QVT, CSRD sociale",
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
          "text": "1.1 L'évolution de la fonction RH : de l'administration au pilotage stratégique"
        },
        {
          "type": "p",
          "text": "La fonction ressources humaines a connu une mutation profonde. Longtemps réduite à l'**administration du personnel** (paie, contrats, application du droit du travail), elle s'est progressivement affirmée comme une **fonction stratégique**, partenaire de la direction générale et créatrice de valeur. Dave Ulrich a théorisé cette évolution en distinguant les rôles de la fonction RH : expert administratif, champion des salariés, agent du changement et — surtout — **partenaire stratégique**. Ces quatre rôles se déploient sur deux axes : l'horizon (opérationnel/quotidien vs stratégique/futur) et l'objet (processus vs personnes). L'expert administratif gère efficacement les processus quotidiens (paie, administration) ; le champion des salariés (ou « employee champion ») répond aux attentes des personnes au quotidien (écoute, soutien) ; l'agent du changement accompagne les transformations (lien chapitre 4) ; le partenaire stratégique aligne la politique RH sur la stratégie d'entreprise. La maturité de la fonction RH se mesure à sa capacité à investir les rôles stratégiques sans négliger les rôles opérationnels — équilibre que la digitalisation facilite en automatisant l'administratif (§9) pour libérer du temps stratégique. Le contrôle de gestion sociale est précisément l'outil qui permet à la RH d'assumer son rôle de partenaire stratégique, en parlant le langage de la performance et des chiffres que comprend la direction générale. Cette montée en puissance s'explique par un constat devenu central : dans une économie de la connaissance et des services, le **capital humain** est souvent la principale source d'avantage concurrentiel. L'ancien cours le souligne : les modèles économiques sont « désormais fondés sur le capital humain, sur les ressources immatérielles et sur le développement des compétences »."
        },
        {
          "type": "h3",
          "text": "1.2 Le capital humain comme ressource stratégique"
        },
        {
          "type": "p",
          "text": "Le concept de **capital humain**, initialement développé par les économistes Gary Becker et Theodore Schultz, désigne l'ensemble des compétences, connaissances, expériences et capacités des individus, considéré comme un actif productif dans lequel l'organisation investit (par la formation, le développement). La **théorie des ressources** (Resource-Based View) de Jay Barney prolonge cette idée : un avantage concurrentiel durable repose sur des ressources qui sont à la fois **valorisables, rares, difficilement imitables et organisées** (modèle VRIO). Or le capital humain — compétences distinctives, savoir-faire collectifs, culture — réunit précisément ces caractéristiques : il est difficilement imitable car ancré dans l'histoire et les interactions de l'organisation. La RH cesse alors d'être un centre de coûts pour devenir un **gisement de valeur** — à condition de savoir le piloter. Le paradoxe du capital humain est qu'il constitue souvent l'actif le plus précieux de l'organisation sans figurer au bilan comptable : la comptabilité enregistre les salaires en charges, non en investissement, et ne valorise pas les compétences accumulées. Cette invisibilité comptable explique en partie la sous-estimation historique de la fonction RH et la difficulté à justifier l'investissement social. Plusieurs tentatives de « comptabilité des ressources humaines » ont cherché à valoriser le capital humain à l'actif, sans s'imposer en pratique en raison des difficultés de mesure. Le contrôle de gestion sociale apporte une réponse pragmatique : à défaut de valoriser le capital humain au bilan, il en **mesure les flux et les effets** (compétences, engagement, productivité, coûts cachés) pour en piloter le développement et en démontrer la contribution. C'est précisément l'enjeu de tout le chapitre : rendre visible et pilotable une valeur que la comptabilité classique ignore."
        },
        {
          "type": "h3",
          "text": "1.3 La montée du pilotage social et les attentes des parties prenantes"
        },
        {
          "type": "p",
          "text": "Cette reconnaissance du capital humain appelle des outils pour le mesurer et le piloter : c'est la raison d'être du **contrôle de gestion sociale**. Le mouvement est renforcé par la pression croissante des **parties prenantes** : les investisseurs intègrent les critères sociaux dans leurs décisions (montée de l'investissement responsable) ; les salariés et candidats attendent du sens, de l'équité et de la qualité de vie au travail ; les régulateurs imposent une transparence sociale accrue (bilan social, index d'égalité professionnelle, reporting de durabilité CSRD incluant un volet social). La performance d'une organisation ne se mesure plus seulement à l'aune financière, mais aussi à sa **performance sociale et durable**."
        },
        {
          "type": "h3",
          "text": "1.4 Problématique centrale"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment le contrôle de gestion sociale permet-il de piloter le capital humain comme un levier stratégique de création de valeur, en articulant simultanément la performance économique (maîtrise de la masse salariale, productivité), la performance sociale (climat, engagement, équité) et la performance organisationnelle (compétences, adaptation), au service d'une performance globale et durable ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en posant d'abord les **fondements** du contrôle de gestion sociale (§2), puis la **GPEC** et le pilotage des compétences (§3), avant de développer le cœur technique : le **pilotage de la masse salariale** et la décomposition de ses variations (§4). Il traite ensuite les **indicateurs sociaux** (§5), les **tableaux de bord RH** (§6), le lien **capital humain / performance globale** (§7), le **dialogue social** (§8), la **digitalisation RH** (§9) et les **enjeux ESG sociaux** (§10). Il se clôt sur des **cas d'entreprises** (§11), les **approfondissements DSCG** (§12), la synthèse (§13) et la fiche de révision (§14)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir le contrôle de gestion sociale et ses finalités ; connaître la démarche de GPEC ; maîtriser la composition de la masse salariale et la définition des effets (niveau, masse, report, GVT, effectif, structure) ; connaître les principaux indicateurs sociaux et leur calcul ; connaître les apports théoriques (Becker, Barney, Ulrich, Martory, Peretti)."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Construire une cartographie et une matrice des compétences ; **calculer et interpréter les effets de variation de la masse salariale** (compétence technique centrale) ; calculer et interpréter les indicateurs sociaux (turnover, absentéisme, etc.) ; construire un tableau de bord RH ; relier performance sociale et économique."
        },
        {
          "type": "p",
          "text": "**Compétences.** Analyser une politique de GPEC ; piloter la masse salariale ; concevoir un système d'indicateurs et de tableaux de bord sociaux ; apprécier la contribution RH à la performance globale ; formuler des préconisations."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (sous-partie 2.6).** Définir et analyser une politique de GPEC ; piloter et prévoir la masse salariale ; construire et exploiter des indicateurs et tableaux de bord sociaux ; relier performance sociale et performance économique."
        }
      ]
    },
    {
      "id": "2-les-fondements-du-controle-de-gestion-sociale",
      "title": "2. Les fondements du contrôle de gestion sociale",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Définition et finalités"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; auteurs Martory, Crozet, Peretti, Ulrich.*"
        },
        {
          "type": "p",
          "text": "Le **contrôle de gestion sociale** est, selon la définition de référence de **Bernard Martory**, « un système d'aide au pilotage social de l'organisation ayant pour objectif de contribuer à la gestion des ressources humaines dans leurs performances et leurs coûts ». C'est l'application des principes et méthodes du contrôle de gestion au domaine social : il s'agit de **mesurer**, **analyser** et **piloter** la dimension humaine de la performance, en articulant deux logiques souvent perçues comme antagonistes — la maîtrise des **coûts** sociaux (au premier rang desquels la masse salariale) et le développement de la **performance** sociale (compétences, engagement, climat)."
        },
        {
          "type": "p",
          "text": "Ses finalités sont multiples. Il **éclaire la décision** RH par des données objectives (faut-il recruter, former, externaliser ?). Il **maîtrise les coûts** sociaux, notamment la masse salariale, premier poste de charges de nombreuses organisations. Il **mesure la performance** sociale et son lien avec la performance économique. Il **anticipe** les évolutions (GPEC) et **alimente le dialogue social** par des indicateurs partagés. Jean-Marie Peretti et Bernard Martory ont largement contribué à structurer cette discipline en France, autour du bilan social, des tableaux de bord sociaux et de l'audit social. La place du contrôle de gestion sociale dans le système de pilotage mérite d'être précisée. Il se situe à l'intersection de trois mondes : le **contrôle de gestion** (dont il emprunte les méthodes — budgets, écarts, tableaux de bord, indicateurs), la **gestion des ressources humaines** (dont il instrumente le pilotage) et la **direction générale** (qu'il éclaire sur la dimension humaine de la performance). Cette position de carrefour explique sa richesse mais aussi son ambiguïté : rattaché tantôt à la direction financière (vision « coûts »), tantôt à la DRH (vision « développement »), il doit en permanence concilier ces perspectives. Historiquement, la discipline s'est développée en France à partir des années 1970-1980, portée par l'institution du **bilan social** (loi de 1977) qui a imposé la production d'indicateurs sociaux standardisés, puis enrichie par les travaux académiques de Martory, Crozet et Peretti. Elle connaît aujourd'hui un renouveau sous l'effet de la digitalisation (people analytics, §9) et de la montée des exigences extra-financières (CSRD, §10), qui élargissent considérablement son périmètre et ses outils."
        },
        {
          "type": "p",
          "text": "On distingue par ailleurs le contrôle de gestion sociale de l'**audit social**, avec lequel il est complémentaire. Là où le contrôle de gestion sociale est un dispositif **permanent** de pilotage (indicateurs, tableaux de bord, budgets), l'audit social est une démarche **périodique** d'évaluation, conduite par un auditeur (interne ou externe), visant à apprécier la conformité, l'efficacité et la cohérence des politiques sociales — exactement comme l'audit interne évalue le contrôle interne (lien chapitre 5). Peretti distingue plusieurs niveaux d'audit social : l'audit de **conformité** (respect du droit social), l'audit d'**efficacité** (les politiques RH atteignent-elles leurs objectifs ?) et l'audit **stratégique** (la politique sociale est-elle alignée sur la stratégie ?). Cette gradation rejoint la logique des trois lignes de maîtrise vue au chapitre précédent. Le contrôle de gestion sociale et l'audit social forment ainsi un dispositif complet de maîtrise de la dimension sociale."
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard DSCG.** Le contrôle de gestion sociale n'est pas la GRH : il en est l'**instrumentation de pilotage**. Un sujet attend que l'on mobilise des **outils** (indicateurs, tableaux de bord, calcul de masse salariale, GPEC) au service d'une **décision** ou d'un **diagnostic**, en reliant systématiquement le social à l'économique. La tentation à éviter : un développement « RH » général et qualitatif, sans mesure ni chiffrage."
        },
        {
          "type": "h3",
          "text": "2.2 Le contrôle de gestion sociale comme outil stratégique"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion sociale opère sur quatre registres de pilotage complémentaires, qui structurent l'ensemble du chapitre."
        },
        {
          "type": "p",
          "text": "Le **pilotage des compétences** (GPEC, §3) anticipe l'adéquation entre les besoins de l'organisation et les ressources humaines disponibles, à court et moyen terme. Le **pilotage de la masse salariale** (§4) maîtrise l'évolution du premier poste de charges, en comprenant les mécanismes de sa variation. Le **pilotage de la performance sociale** (§5-6) suit, par des indicateurs et des tableaux de bord, l'état du corps social (climat, mobilité, engagement). Le **pilotage de la création de valeur** (§7) relie l'investissement dans le capital humain à la performance économique et globale. Ces quatre registres ne sont pas cloisonnés : une politique de formation (compétences) influe sur la masse salariale (coûts), sur l'engagement (performance sociale) et sur la productivité (création de valeur)."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Les registres du pilotage social *(obligatoire)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Objectif",
          "text": "**Outils**\n**Indicateurs clés**\n**Décisions associées**\n**Piloter les compétences**\nGPEC, cartographie, matrice de compétences\nÉcarts de compétences, % de polyvalence\nRecruter, former, mobilité, externaliser\n**Piloter la masse salariale**\nDécomposition en effets, budget, prévision\nEffets niveau/masse/report, GVT, ratio MS/VA\nPolitique salariale, recrutements, NAO\n**Piloter la performance sociale**\nIndicateurs sociaux, tableaux de bord, bilan social\nTurnover, absentéisme, climat, AT\nPlans d'action sociaux, QVT\n**Piloter la création de valeur**\nBSC, ratios de productivité, ROI formation\nVA/salarié, engagement, ROI capital humain\nInvestissement RH, marque employeur"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Transition.** Le premier registre, le pilotage des compétences, se déploie à travers la démarche de GPEC."
        }
      ]
    },
    {
      "id": "3-la-gestion-previsionnelle-des-emplois-et-des-competences-g",
      "title": "3. La gestion prévisionnelle des emplois et des compétences (GPEC)",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Cours 4, GPEC) ; matrices créées.*"
        },
        {
          "type": "h3",
          "text": "3.1 Fondements et enjeux"
        },
        {
          "type": "p",
          "text": "La **GPEC** (gestion prévisionnelle des emplois et des compétences) est une démarche d'**anticipation** visant à réduire, de façon proactive, les écarts entre les besoins en compétences de l'organisation (déterminés par sa stratégie) et ses ressources humaines disponibles (en effectifs et en compétences), à un horizon de moyen terme. Elle répond à plusieurs enjeux majeurs. L'**anticipation** des évolutions (technologiques, démographiques, stratégiques) permet d'éviter les ruptures (pénuries de compétences, sureffectifs). L'**employabilité** des salariés est préservée par le développement continu de leurs compétences — enjeu social autant qu'économique. L'**évolution des métiers**, accélérée par le numérique et l'IA (chapitre 4), rend l'anticipation des compétences plus cruciale que jamais. Enfin, l'identification et le développement des **compétences stratégiques** (les *core competences* de Prahalad et Hamel, mentionnées dans l'ancien cours) fondent l'avantage concurrentiel."
        },
        {
          "type": "p",
          "text": "La GPEC a par ailleurs un cadre légal en France (obligation de négociation triennale dans les entreprises d'une certaine taille), ce qui en fait aussi un objet de dialogue social (§8)."
        },
        {
          "type": "h4",
          "text": "Encadré — Focus professionnel"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus professionnel.** La GPEC s'est enrichie d'une dimension territoriale (GPEC-T, à l'échelle d'un bassin d'emploi) et d'une logique de « GEPP » (gestion des emplois et des parcours professionnels), terminologie introduite par les ordonnances de 2017, qui met l'accent sur les parcours et la mobilité. Au-delà du vocabulaire, la logique reste la même : anticiper pour adapter les compétences aux besoins stratégiques."
        },
        {
          "type": "h3",
          "text": "3.2 Le processus de GPEC"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Cours 4).*"
        },
        {
          "type": "p",
          "text": "La GPEC se déroule en quatre grandes étapes articulées. L'**analyse des emplois et des besoins futurs** part de la stratégie pour déterminer les emplois et compétences dont l'organisation aura besoin (cible). La **cartographie des compétences actuelles** dresse l'inventaire des ressources disponibles (existant). L'**identification des écarts** — quantitatifs (effectifs) et qualitatifs (compétences) — confronte la cible et l'existant pour révéler les déficits (compétences manquantes) et les excédents (compétences obsolètes ou en sureffectif). Les **plans d'action** réduisent ces écarts par les leviers RH : recrutement, formation, mobilité interne, gestion des départs, externalisation. L'ancien cours résume cette logique : « définition de la politique sociale : politiques de recrutement et de formation pour développer les compétences-clés ; prévision des besoins en fonction des stratégies de l'entreprise »."
        },
        {
          "type": "p",
          "text": "Chacune de ces étapes mobilise des outils spécifiques. L'**analyse des emplois** repose sur des référentiels (fiches de poste, référentiels métiers et de compétences, nomenclatures internes) qui décrivent les activités et les compétences requises. La distinction entre **compétences** est ici essentielle : les *savoirs* (connaissances), les *savoir-faire* (compétences techniques, opérationnelles) et les *savoir-être* (compétences comportementales, relationnelles). L'analyse des besoins futurs s'appuie sur des **scénarios** dérivés de la stratégie et des évolutions de l'environnement (technologiques, démographiques, réglementaires) — un exercice prospectif par nature incertain, qui gagne à être réactualisé. L'identification des écarts distingue les écarts **quantitatifs** (combien de personnes sur tel emploi ?) et **qualitatifs** (quelles compétences manquantes ou obsolètes ?). Les plans d'action, enfin, combinent plusieurs leviers dont le contrôle de gestion sociale doit chiffrer le coût et l'efficacité comparée : recruter (coût et délai), former (coût et durée de montée en compétence), mobiliser la mobilité interne (moins coûteuse mais limitée), ou recourir à l'externalisation et la sous-traitance (lien chapitre 3). L'arbitrage entre ces leviers — par exemple « former vs recruter » pour combler un déficit de compétence — est un grand classique des sujets DSCG, qui appelle un raisonnement à la fois économique (coûts comparés) et stratégique (la compétence est-elle cœur de métier ?)."
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Le processus complet de GPEC *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/01.png",
          "alt": "Schéma 2 — Le processus complet de GPEC *(obligatoire)*",
          "width": 2024,
          "height": 1056
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma articule les deux branches de la GPEC — les **besoins futurs** (dérivés de la stratégie) et les **ressources actuelles** (inventaire) — qui convergent vers l'**analyse des écarts**, d'où découlent les **plans d'action**. Sa lecture met en évidence le caractère **stratégique** (tout part de la stratégie) et **dynamique** (la démarche se réactualise) de la GPEC. Le point clé : la GPEC n'a de sens que reliée à la stratégie ; une cartographie des compétences déconnectée des besoins futurs n'est qu'un inventaire stérile. Les plans d'action, enfin, doivent être chiffrés et suivis — c'est là qu'intervient le contrôle de gestion sociale."
        },
        {
          "type": "h3",
          "text": "3.3 La cartographie et la matrice des compétences"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "L'outil opérationnel central de la GPEC est la **cartographie des compétences**, qui recense les compétences requises par emploi et les niveaux de maîtrise. Sa déclinaison individuelle est la **matrice de compétences** (ou matrice de polyvalence), qui croise les collaborateurs et les compétences, en indiquant le niveau de maîtrise de chacun. Cet outil visuel est précieux : il révèle les **compétences critiques** (maîtrisées par trop peu de personnes — risque de dépendance), les besoins de **formation** (écarts individuels), les possibilités de **polyvalence** et de mobilité, et les **vulnérabilités** (départ d'un expert unique)."
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Exemple de cartographie des compétences (par emploi) *(obligatoire)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Compétence",
          "text": "**Niveau requis**\n**Criticité stratégique**\n**Nb de salariés maîtrisant**\n**Vulnérabilité**\nAnalyse de données\nExpert\nÉlevée\n2 / 12\n**Forte** (dépendance)\nGestion de projet\nConfirmé\nÉlevée\n6 / 12\nModérée\nMaîtrise de l'ERP\nConfirmé\nMoyenne\n9 / 12\nFaible\nRelation client\nConfirmé\nÉlevée\n8 / 12\nFaible\nRéglementation sectorielle\nExpert\nÉlevée\n3 / 12\nModérée"
        },
        {
          "type": "h4",
          "text": "Matrice 4 — Matrice compétences × collaborateurs *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/02.png",
          "alt": "Matrice 4 — Matrice compétences × collaborateurs *(obligatoire)*",
          "width": 1958,
          "height": 1201
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice de polyvalence croise les collaborateurs (lignes) et les compétences (colonnes), chaque cellule indiquant le niveau de maîtrise (de « non maîtrisé » à « expert »). Sa lecture est doublement instructive. En **colonnes**, elle révèle les compétences fragiles (peu de maîtres — comme l'analyse de données, concentrée sur deux personnes) : ce sont des **risques** (lien chapitre 5) appelant un plan de montée en compétences ou de recrutement. En **lignes**, elle révèle la polyvalence de chaque collaborateur et ses besoins de développement. La matrice oriente ainsi le **plan de formation** (combler les cases faibles sur les compétences critiques) et sécurise l'organisation contre la dépendance à des individus clés. C'est l'instrument de pilotage des compétences par excellence."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — l'arbitrage « former ou recruter » *(approfondissement)*"
        },
        {
          "type": "p",
          "text": "Face à un déficit de 3 collaborateurs maîtrisant l'analyse de données (compétence critique identifiée par la matrice, §3.3), l'entreprise compare deux options."
        },
        {
          "type": "p",
          "text": "*Option « recruter »* : 3 recrutements externes de profils confirmés. Coût de recrutement : 3 × 12 000 € = 36 000 € ; surcoût salarial (profils data plus chers) : 3 × 8 000 €/an = 24 000 €/an. Délai : 3 à 6 mois. Avantage : compétence immédiate. Risque : intégration, fidélisation, surenchère salariale du marché."
        },
        {
          "type": "p",
          "text": "*Option « former »* : faire monter en compétence 3 collaborateurs internes volontaires. Coût de formation : 3 × 9 000 € = 27 000 € (une fois) ; pas de surcoût salarial permanent majeur. Délai : 9 à 12 mois. Avantage : fidélisation, motivation, préservation de la connaissance métier. Risque : durée de montée en compétence, disponibilité pendant la formation."
        },
        {
          "type": "p",
          "text": "**Interprétation.** Sur le strict plan du coût de première année, la formation (27 000 €) est moins coûteuse que le recrutement (36 000 € + 24 000 € de surcoût). Mais l'arbitrage ne se réduit pas au coût : le recrutement apporte la compétence **plus vite** (enjeu si le besoin est urgent), tandis que la formation **fidélise** et **valorise** les collaborateurs internes (enjeu d'engagement et de rétention, lien §7). Le bon choix dépend de l'**urgence** du besoin, de la **disponibilité** de profils internes formables et du **caractère stratégique** de la compétence. C'est un arbitrage type des sujets DSCG, qui appelle un raisonnement combinant chiffrage économique et logique stratégique — jamais un calcul mécanique."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Au-delà des compétences, le contrôle de gestion sociale pilote le premier poste de charges de l'organisation : la masse salariale."
        }
      ]
    },
    {
      "id": "4-le-pilotage-de-la-masse-salariale",
      "title": "4. Le pilotage de la masse salariale",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Cours 4, contrôle de l'évolution de la masse salariale) — cœur technique de la sous-partie.*"
        },
        {
          "type": "p",
          "text": "Le pilotage de la masse salariale est la **compétence technique centrale** de cette sous-partie et l'un des thèmes les plus fréquemment évalués au DSCG. Il exige rigueur et maîtrise des mécanismes de variation."
        },
        {
          "type": "h3",
          "text": "4.1 Les composantes de la masse salariale"
        },
        {
          "type": "p",
          "text": "La **masse salariale** est l'ensemble des rémunérations versées aux salariés sur une période. Selon le périmètre retenu, elle comprend : le **salaire de base** (rémunération principale), les **primes et compléments** (ancienneté, performance, 13ᵉ mois), les **heures supplémentaires**, les **avantages** (en nature ou monétaires), et — pour la masse salariale « chargée » — les **charges sociales patronales**. Le périmètre doit être précisé : on distingue la masse salariale **brute** (rémunérations brutes versées aux salariés) de la masse salariale **chargée** (incluant les cotisations patronales, soit un coût total pour l'employeur de l'ordre de 1,4 à 1,5 fois le salaire brut). La masse salariale représente souvent **50 à 80 %** des charges d'exploitation dans les entreprises de services : sa maîtrise est donc un enjeu de premier ordre."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Les composantes de la masse salariale *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Composante**",
            "**Description**",
            "**Levier de pilotage**"
          ],
          "rows": [
            [
              "**Salaire de base**",
              "Rémunération principale fixe",
              "Politique salariale, grille"
            ],
            [
              "**Primes et compléments**",
              "Ancienneté, performance, 13ᵉ mois",
              "Politique de rémunération variable"
            ],
            [
              "**Heures supplémentaires**",
              "Majoration des heures au-delà du contrat",
              "Organisation du travail"
            ],
            [
              "**Avantages**",
              "En nature (logement, véhicule), monétaires",
              "Politique d'avantages sociaux"
            ],
            [
              "**Charges sociales patronales**",
              "Cotisations (≈ 40-45 % du brut)",
              "Exonérations, structure des rémunérations"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "4.2 L'analyse des variations de la masse salariale"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "*Statut : repris-adapté — méthode et formules conformes à l'enseignement DSCG.*"
        },
        {
          "type": "p",
          "text": "La masse salariale varie sous l'effet de multiples facteurs qu'il faut savoir **décomposer** pour piloter. On distingue les facteurs liés aux **rémunérations** (augmentations) et ceux liés aux **effectifs et à la structure**."
        },
        {
          "type": "h4",
          "text": "4.2.1 Les trois effets fondamentaux des augmentations : niveau, masse, report"
        },
        {
          "type": "p",
          "text": "Trois notions, définies comme des **coefficients multiplicateurs** (1 + taux de variation), structurent l'analyse des augmentations de salaire. Elles sont au cœur des sujets DSCG."
        },
        {
          "type": "p",
          "text": "L'**effet de niveau** (ou effet en niveau) mesure la variation de la rémunération entre deux dates précises, généralement de décembre N–1 à décembre N. Il compare le salaire d'un mois à celui du même mois l'année précédente : Effet de niveau (N) = Salaire de décembre N / Salaire de décembre N–1 Il traduit la progression « instantanée » du salaire en fin d'année."
        },
        {
          "type": "p",
          "text": "L'**effet de masse** mesure l'impact des augmentations décidées en N **sur la masse salariale de l'année N** elle-même. Il rapporte la masse salariale annuelle réellement versée en N à la masse salariale qu'il y aurait eu en N en l'absence de toute augmentation (soit le salaire de décembre N–1 reconduit sur les 12 mois) : Effet de masse (N) = Masse salariale annuelle N / (Salaire de décembre N–1 × 12) Point fondamental : **l'effet de masse est d'autant plus fort que les augmentations interviennent tôt dans l'année** (une augmentation en janvier produit son plein effet sur les 12 mois ; la même augmentation en décembre n'a d'effet que sur un mois)."
        },
        {
          "type": "p",
          "text": "L'**effet de report** mesure l'impact des augmentations passées sur la masse salariale **de l'année suivante**. Le report de N–1 sur N mesure l'effet, sur l'année N entière, des augmentations accordées en cours d'année N–1 : Effet de report (N–1 sur N) = (Salaire de décembre N–1 × 12) / Masse salariale annuelle N–1 Point fondamental, symétrique du précédent : **l'effet de report est d'autant plus fort que les augmentations sont intervenues tard dans l'année** (une augmentation en décembre N–1 n'a quasiment pas pesé sur N–1, mais pèsera sur les 12 mois de N)."
        },
        {
          "type": "h4",
          "text": "4.2.2 Les relations fondamentales entre les effets"
        },
        {
          "type": "p",
          "text": "Ces trois effets sont reliés par deux égalités essentielles, que l'ancien cours établit et que le candidat doit maîtriser :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Variation de la masse salariale (N–1 → N) = Effet de masse (N) × Effet de report (N–1 sur N)**\n**Effet de niveau (N) = Effet de masse (N) × Effet de report (N sur N+1)**"
        },
        {
          "type": "p",
          "text": "La première relation décompose la variation observée de la masse salariale en deux causes : ce qui a été décidé en N (effet de masse) et l'héritage des décisions de N–1 (effet de report). La seconde relie la progression de niveau aux augmentations de N et à leur prolongement sur N+1. Ces relations permettent, par exemple, de prévoir la masse salariale de N+1 « à politique salariale constante » : même sans nouvelle augmentation, la masse salariale de N+1 augmentera mécaniquement sous le seul effet de report des augmentations de N."
        },
        {
          "type": "h4",
          "text": "Tableau 6 — Synthèse des effets de la masse salariale *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Effet**",
            "**Ce qu'il mesure**",
            "**Formule (coefficient)**",
            "**Maximal quand…**"
          ],
          "rows": [
            [
              "**Effet de niveau (N)**",
              "Variation de salaire déc. N–1 → déc. N",
              "Salaire déc. N / Salaire déc. N–1",
              "(mesure ponctuelle)"
            ],
            [
              "**Effet de masse (N)**",
              "Impact des hausses de N sur la MS de N",
              "MS annuelle N / (Salaire déc. N–1 × 12)",
              "les hausses sont **précoces** (début d'année)"
            ],
            [
              "**Effet de report (N–1→N)**",
              "Impact des hausses de N–1 sur la MS de N",
              "(Salaire déc. N–1 × 12) / MS annuelle N–1",
              "les hausses sont **tardives** (fin d'année)"
            ],
            [
              "**GVT**",
              "Évolution du salaire moyen à effectif constant",
              "voir §4.2.4",
              "—"
            ],
            [
              "**Effet d'effectif**",
              "Impact de la variation du nombre de salariés",
              "MS à structure constante N / MS N–1",
              "—"
            ],
            [
              "**Effet de structure**",
              "Impact de la déformation de la composition",
              "résiduel",
              "—"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Exemple chiffré complet — la décomposition de la masse salariale *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Considérons une entreprise dont les salariés perçoivent, fin N–1, un salaire mensuel total de **100 000 €** (décembre N–1). Au cours de l'année N, la direction accorde une augmentation générale de **3 %** appliquée au **1ᵉʳ juillet N**. On suppose l'effectif et la structure constants."
        },
        {
          "type": "p",
          "text": "**Étape 1 — Masse salariale de N–1.** En supposant le salaire de décembre N–1 représentatif de toute l'année N–1 (pas d'augmentation en N–1) : MS(N–1) = 100 000 × 12 = **1 200 000 €**."
        },
        {
          "type": "p",
          "text": "**Étape 2 — Masse salariale de N.** De janvier à juin (6 mois) : 100 000 €/mois. De juillet à décembre (6 mois) : 100 000 × 1,03 = 103 000 €/mois. MS(N) = (100 000 × 6) + (103 000 × 6) = 600 000 + 618 000 = **1 218 000 €**."
        },
        {
          "type": "p",
          "text": "**Étape 3 — Effet de masse (N).** Masse de référence sans augmentation = 100 000 × 12 = 1 200 000 €. Effet de masse = 1 218 000 / 1 200 000 = **1,015**, soit **+ 1,5 %**. *(L'augmentation de 3 % accordée à mi-année ne produit qu'un effet de 1,5 % sur la masse de N, car elle ne porte que sur 6 mois.)*"
        },
        {
          "type": "p",
          "text": "**Étape 4 — Effet de niveau (N).** Salaire de décembre N = 103 000 ; salaire de décembre N–1 = 100 000. Effet de niveau = 103 000 / 100 000 = **1,03**, soit **+ 3 %**. *(En fin d'année, le niveau de salaire a bien progressé de 3 %.)*"
        },
        {
          "type": "p",
          "text": "**Étape 5 — Effet de report (N sur N+1).** Si aucune nouvelle augmentation n'est décidée en N+1, la masse salariale de N+1 sera de 103 000 × 12 = 1 236 000 €. Effet de report = 1 236 000 / 1 218 000 = **1,01478**, soit **+ 1,48 %**. *Vérification de la relation : Effet de niveau = Effet de masse × Effet de report (N sur N+1) = 1,015 × 1,01478 ≈ 1,030 ✓*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Cet exemple révèle le mécanisme clé du pilotage de la masse salariale : **une augmentation de 3 % ne coûte que 1,5 % l'année où elle est décidée (effet de masse), mais laisse un report de près de 1,5 % sur l'année suivante** — coût « mécanique » que subira N+1 même sans nouvelle décision. C'est ce que les contrôleurs de gestion sociale appellent l'« effet de report » ou le coût « en année pleine ». La **date** de l'augmentation est donc un levier stratégique : accorder les augmentations en fin d'année minimise leur coût immédiat (effet de masse faible) mais maximise le report (coût futur élevé) ; les accorder en début d'année produit l'effet inverse. Le pilotage consiste à arbitrer entre l'impact sur l'exercice courant et l'héritage transmis à l'exercice suivant — arbitrage au cœur des négociations annuelles obligatoires (NAO)."
        },
        {
          "type": "h4",
          "text": "Graphique 5 — Décomposition des variations de la masse salariale *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/03.png",
          "alt": "Graphique 5 — Décomposition des variations de la masse salariale *(obligatoire)*",
          "width": 1892,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le graphique en cascade (waterfall) décompose la variation totale de la masse salariale entre N–1 et N en ses contributions : effet de report hérité de N–1, effet de masse des augmentations de N, effet d'effectif (recrutements/départs), effet de structure (déformation de la composition — par exemple un *effet Noria* lorsque des départs de seniors bien rémunérés sont remplacés par des juniors moins payés, qui réduit la masse). La visualisation rend tangible la contribution de chaque facteur et identifie les leviers d'action : on voit immédiatement si la hausse provient des augmentations, des effectifs ou de la structure — diagnostic indispensable avant toute décision corrective."
        },
        {
          "type": "h4",
          "text": "4.2.3 Effet d'effectif et effet de structure"
        },
        {
          "type": "p",
          "text": "Au-delà des augmentations, la masse salariale varie sous l'effet des **mouvements d'effectifs** et de la **déformation de la structure**. L'**effet d'effectif** mesure l'impact de la variation du nombre de salariés (recrutements, départs) à structure et rémunération constantes. L'**effet de structure** mesure l'impact de la déformation de la composition de l'effectif (par qualification, ancienneté, âge). Un cas classique est l'**effet Noria** (ou effet de noria) : le remplacement de salariés âgés et bien rémunérés (qui partent en retraite) par des salariés jeunes et moins payés *réduit* la masse salariale à effectif constant — effet de structure favorable au coût, mais qui peut signaler une perte de compétences et d'expérience (lien GPEC)."
        },
        {
          "type": "p",
          "text": "**Exemple chiffré — effet d'effectif et effet Noria.** Une entreprise compte au 31/12/N–1 un effectif de 100 salariés pour une masse salariale annuelle de 4 000 000 € (salaire moyen : 40 000 €). Au cours de N : 5 départs en retraite de salariés payés en moyenne 55 000 €, remplacés par 5 recrues à 35 000 € ; et 3 recrutements nets supplémentaires à 38 000 €."
        },
        {
          "type": "p",
          "text": "*Effet Noria (remplacement)* : les 5 remplacements font varier la masse de 5 × (35 000 − 55 000) = **− 100 000 €** : la déformation de la structure (départ de seniors bien payés, arrivée de juniors) **réduit** la masse de 100 000 €, à effectif constant. C'est l'effet Noria, favorable au coût."
        },
        {
          "type": "p",
          "text": "*Effet d'effectif (croissance)* : les 3 recrutements nets ajoutent 3 × 38 000 = **+ 114 000 €**."
        },
        {
          "type": "p",
          "text": "*Variation totale liée aux mouvements* : − 100 000 + 114 000 = **+ 14 000 €** (+ 0,35 %)."
        },
        {
          "type": "p",
          "text": "**Interprétation.** L'effet Noria masque ici partiellement la hausse liée à la croissance des effectifs : sans renouvellement des générations, la masse aurait crû de 114 000 € ; le départ des seniors en a « financé » une partie. Le contrôleur de gestion sociale doit toutefois alerter : cet effet Noria favorable au coût peut cacher une **perte de compétences et d'expérience** (lien GPEC, §3) — un gain économique de court terme potentiellement coûteux à long terme. C'est l'illustration parfaite de l'arbitrage social/économique (§12.1) : un indicateur favorable au coût n'est pas nécessairement favorable à la performance globale."
        },
        {
          "type": "h4",
          "text": "4.2.4 L'effet GVT (Glissement-Vieillissement-Technicité)"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris de l'ancien cours.*"
        },
        {
          "type": "p",
          "text": "L'**effet GVT** analyse l'évolution du salaire moyen **à effectif constant**, indépendamment des augmentations générales. Il se décompose en trois éléments, repris de l'ancien cours. Le **glissement** correspond aux augmentations individuelles sans changement de catégorie (mérite, performance). Le **vieillissement** correspond aux augmentations liées à l'ancienneté (avancement automatique). La **technicité** correspond aux augmentations liées à un changement de qualification ou de poste (promotion). Le GVT mesure ainsi la dérive « naturelle » de la masse salariale, hors politique d'augmentation générale — dérive souvent positive (le GVT positif tend à faire croître la masse salariale) qu'il faut anticiper dans la prévision budgétaire. À l'inverse, l'effet Noria peut produire un « GVT négatif » par renouvellement des générations."
        },
        {
          "type": "h4",
          "text": "Encadré — Point méthode"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Point méthode — réussir un calcul de masse salariale en DSCG.** (1) Bien identifier le **périmètre** (brut ou chargé) et la **date** des augmentations. (2) Calculer la masse salariale de chaque année **mois par mois** si les augmentations sont en cours d'année. (3) Définir tous les effets comme des **coefficients multiplicateurs** (1 + taux). (4) Vérifier les relations : variation MS = masse × report (N–1→N) ; niveau = masse × report (N→N+1). (5) **Interpréter** systématiquement : un effet n'a de valeur que commenté (qui paie quoi, quand, et avec quel report futur). L'erreur classique est de confondre effet de masse (sur l'année courante) et effet de niveau (en fin d'année)."
        },
        {
          "type": "h3",
          "text": "4.3 La prévision budgétaire de la masse salariale"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé / complété à partir de la logique de l'ancien cours.*"
        },
        {
          "type": "p",
          "text": "Au-delà de l'analyse rétrospective des variations, le contrôle de gestion sociale doit **prévoir** la masse salariale de l'exercice à venir — exercice budgétaire central, car la masse salariale est le premier poste de charges. La construction du budget de masse salariale agrège plusieurs composantes prévisionnelles. Le **point de départ** est la masse salariale de l'année en cours. On y ajoute l'**effet de report** des augmentations de l'année en cours (coût mécanique en année pleine, §4.2.1), souvent significatif et pourtant fréquemment oublié. On intègre ensuite le **GVT** prévisionnel (glissement, vieillissement, technicité — la dérive du salaire moyen), l'**effet d'effectif** (recrutements et départs prévus, en tenant compte de l'effet Noria), l'**effet de structure**, et enfin la **politique salariale** envisagée (augmentations générales et individuelles prévues, avec leur date d'effet qui détermine leur effet de masse)."
        },
        {
          "type": "p",
          "text": "Cette construction « par briques » permet de simuler différents scénarios de politique salariale et d'en mesurer l'impact budgétaire avant décision — outil indispensable à la préparation des négociations annuelles (NAO, §8). Elle illustre la dimension prospective du contrôle de gestion sociale : ne pas seulement constater, mais anticiper et éclairer la décision."
        },
        {
          "type": "h4",
          "text": "Tableau 6 bis — Construction du budget de masse salariale *(synthèse)*"
        },
        {
          "type": "table",
          "headers": [
            "**Brique**",
            "**Nature**",
            "**Impact type**"
          ],
          "rows": [
            [
              "Masse salariale de référence (N)",
              "Point de départ",
              "base"
            ],
            [
              "+ Effet de report des hausses de N",
              "Coût mécanique en année pleine",
              "+"
            ],
            [
              "+ GVT prévisionnel",
              "Glissement, vieillissement, technicité",
              "+"
            ],
            [
              "± Effet d'effectif (recrutements − départs)",
              "Variation du nombre de salariés",
              "±"
            ],
            [
              "± Effet de structure (dont Noria)",
              "Déformation de la composition",
              "± (souvent −)"
            ],
            [
              "+ Politique salariale N+1 (selon date)",
              "Augmentations décidées (effet de masse)",
              "+"
            ],
            [
              "= **Masse salariale prévisionnelle N+1**",
              "Budget",
              "total"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** La masse salariale n'est qu'une dimension du pilotage social ; les indicateurs sociaux en élargissent la mesure."
        }
      ]
    },
    {
      "id": "5-les-indicateurs-sociaux",
      "title": "5. Les indicateurs sociaux",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé / complété ; s'appuie sur le bilan social et la pratique professionnelle.*"
        },
        {
          "type": "p",
          "text": "Les indicateurs sociaux mesurent l'état et la dynamique du corps social. Le **bilan social** (obligatoire en France au-delà de 300 salariés) en fournit un cadre normalisé. On les regroupe en trois familles : effectifs, mobilité, climat social. Le bilan social, institué par la loi de 1977, récapitule en un document unique les principales données chiffrées permettant d'apprécier la situation de l'entreprise dans le domaine social, sur trois années (emploi, rémunérations, conditions de santé et sécurité, autres conditions de travail, formation, relations professionnelles, conditions de vie). Il constitue à la fois un outil d'information des représentants du personnel, un instrument de dialogue social et une base pour le pilotage. Mais le bilan social, exhaustif et rétrospectif, ne suffit pas au pilotage : le contrôle de gestion sociale lui adjoint des **tableaux de bord** sélectifs et prospectifs (§6). On les regroupe en trois familles : effectifs, mobilité, climat social."
        },
        {
          "type": "h3",
          "text": "5.1 Les indicateurs d'effectifs"
        },
        {
          "type": "p",
          "text": "La mesure des effectifs, en apparence simple, requiert de la rigueur car plusieurs notions coexistent. L'**effectif inscrit** comprend tous les salariés liés par un contrat (y compris absents). L'**effectif présent** ne compte que les salariés effectivement au travail. L'**effectif moyen** (souvent en équivalents temps plein, ETP) est la moyenne sur la période, utilisée pour les ratios (un salarié à mi-temps compte pour 0,5 ETP). Le choix de la notion influe sur les indicateurs : un turnover ou une productivité se calculent sur l'effectif moyen ETP. La **pyramide des âges** complète cette analyse en visualisant la structure démographique — outil essentiel de la GPEC pour anticiper les départs en retraite et le renouvellement."
        },
        {
          "type": "h4",
          "text": "Graphique 6 — Pyramide des âges *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/04.png",
          "alt": "Graphique 6 — Pyramide des âges *(obligatoire)*",
          "width": 1892,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La pyramide des âges répartit l'effectif par tranche d'âge et par sexe. Sa forme révèle des enjeux stratégiques. Une pyramide « en champignon » (sureffectif de seniors) annonce de nombreux départs en retraite à anticiper (risque de perte de compétences, mais opportunité d'effet Noria). Une pyramide « en toupie » (creux des âges intermédiaires) signale un déficit de relève et de transmission. Une pyramide équilibrée facilite la transmission des compétences entre générations. La lecture de la pyramide oriente directement la GPEC (§3) : recrutements, plans de transmission, gestion des fins de carrière."
        },
        {
          "type": "h3",
          "text": "5.2 Les indicateurs de mobilité"
        },
        {
          "type": "p",
          "text": "Les indicateurs de mobilité mesurent les flux de personnel. Le **turnover** (taux de rotation) est l'indicateur phare : Turnover = (Départs + Arrivées) / 2 / Effectif moyen, ou, dans sa version simple, Départs / Effectif moyen. Un turnover élevé détruit du capital humain et génère des coûts (recrutement, formation, perte de productivité), mais un turnover trop faible peut signaler un manque de renouvellement. L'**ancienneté** moyenne mesure la fidélité et la stabilité. Le **taux de promotion** mesure la mobilité interne ascendante et les perspectives d'évolution offertes — facteur d'engagement et de rétention."
        },
        {
          "type": "p",
          "text": "Le turnover, en particulier, recèle un **coût souvent sous-estimé** que le contrôle de gestion sociale doit chiffrer pour éclairer les décisions de fidélisation. Le coût de remplacement d'un salarié comprend : les **coûts de départ** (solde de tout compte, désorganisation, perte de savoir), les **coûts de recrutement** (annonces, cabinet, temps de sélection), les **coûts d'intégration et de formation** du remplaçant, et le **coût de la moindre productivité** pendant la montée en compétence. Selon les fonctions, ce coût total est fréquemment estimé entre **6 mois et 1 an de salaire** (davantage pour des profils experts ou des postes à forte technicité). Pour une entreprise de 500 salariés avec un turnover de 12 % (soit 60 départs/an) et un coût moyen de remplacement de 30 000 €, le coût annuel du turnover atteint **1,8 million d'euros** — un montant qui justifie économiquement des investissements de fidélisation bien moindres. Chiffrer ce coût caché transforme le débat : réduire le turnover de 12 % à 9 % « rapporterait » ici 450 000 €/an, à comparer au coût des actions de fidélisation. C'est l'illustration concrète de l'articulation performance sociale / performance économique (§7)."
        },
        {
          "type": "h3",
          "text": "5.3 Les indicateurs de climat social"
        },
        {
          "type": "p",
          "text": "Le climat social s'apprécie par plusieurs indicateurs. L'**absentéisme** : Taux d'absentéisme = Heures d'absence / Heures théoriques, indicateur de conditions de travail et de climat, dont le coût (remplacement, désorganisation) est souvent sous-estimé. Les **accidents du travail** se mesurent par le taux de fréquence (nombre d'accidents avec arrêt × 1 000 000 / heures travaillées) et le taux de gravité (jours perdus × 1 000 / heures travaillées). Les **conflits sociaux** se mesurent par le nombre de jours de grève. L'**engagement** se mesure par des enquêtes (eNPS, taux d'engagement) — dimension de plus en plus suivie car corrélée à la performance."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Indicateurs sociaux : formules et interprétation *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule**",
            "**Interprétation**",
            "**Limites**"
          ],
          "rows": [
            [
              "**Effectif moyen (ETP)**",
              "Moyenne des effectifs en ETP sur la période",
              "Base des ratios sociaux",
              "Lisse les variations saisonnières"
            ],
            [
              "**Turnover**",
              "(Départs + Arrivées)/2 / Effectif moyen",
              "Stabilité, fidélisation",
              "Ne distingue pas départs subis/choisis"
            ],
            [
              "**Ancienneté moyenne**",
              "Σ anciennetés / effectif",
              "Stabilité, expérience",
              "Peut masquer une dualité (anciens/nouveaux)"
            ],
            [
              "**Taux de promotion**",
              "Promotions / effectif moyen",
              "Mobilité interne, perspectives",
              "Dépend de la structure"
            ],
            [
              "**Taux d'absentéisme**",
              "Heures d'absence / heures théoriques",
              "Climat, conditions de travail",
              "Sensible au périmètre (maladie, etc.)"
            ],
            [
              "**Taux de fréquence (AT)**",
              "AT avec arrêt × 10⁶ / heures travaillées",
              "Sécurité au travail",
              "Sous-déclaration possible"
            ],
            [
              "**Taux de gravité (AT)**",
              "Jours perdus × 10³ / heures travaillées",
              "Gravité des accidents",
              "—"
            ],
            [
              "**eNPS / engagement**",
              "Enquête (promoteurs − détracteurs)",
              "Mobilisation, climat",
              "Déclaratif, biais de réponse"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 7 — Évolution des indicateurs sociaux *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/05.png",
          "alt": "Graphique 7 — Évolution des indicateurs sociaux *(obligatoire)*",
          "width": 1804,
          "height": 1056
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique suit l'évolution sur plusieurs périodes de quelques indicateurs sociaux clés (turnover, absentéisme, engagement). Sa lecture révèle les **tendances** et les **corrélations** : une hausse simultanée du turnover et de l'absentéisme, accompagnée d'une baisse de l'engagement, signale une dégradation du climat social appelant une action. Le suivi dans le temps est plus instructif que la valeur ponctuelle : c'est la **trajectoire** qui alerte. Le contrôle de gestion sociale exploite ces séries pour anticiper (un turnover qui monte annonce des coûts de recrutement futurs) et pour évaluer l'effet des actions RH engagées."
        },
        {
          "type": "h4",
          "text": "Encadré — Erreurs fréquentes"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Erreurs fréquentes.** (1) Confondre les notions d'effectif (inscrit, présent, moyen, ETP) : toujours préciser laquelle on utilise. (2) Interpréter un indicateur isolément : le turnover ne se juge qu'au regard du secteur, du contexte et croisé avec d'autres indicateurs. (3) Oublier le **coût caché** des indicateurs dégradés (l'absentéisme et le turnover coûtent bien plus que leur mesure apparente — lien Savall). (4) Négliger que « tout ce qui se mesure n'est pas important, et tout ce qui est important ne se mesure pas » : les indicateurs éclairent mais ne remplacent pas le jugement managérial.\n**Transition.** Ces indicateurs ne prennent leur sens que rassemblés et hiérarchisés dans un tableau de bord social."
        }
      ]
    },
    {
      "id": "6-les-tableaux-de-bord-rh",
      "title": "6. Les tableaux de bord RH",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; lien tableaux de bord (2.3) et bilan social.*"
        },
        {
          "type": "h3",
          "text": "6.1 La construction d'un tableau de bord RH"
        },
        {
          "type": "p",
          "text": "Un **tableau de bord RH** (ou tableau de bord social) est un ensemble synthétique et hiérarchisé d'indicateurs permettant de piloter la dimension sociale au regard des objectifs. Sa construction obéit à la même rigueur que tout tableau de bord (chapitre 3) : partir des **objectifs** sociaux (déclinés de la stratégie RH), sélectionner un nombre **limité** d'indicateurs pertinents et actionnables, définir leurs **cibles**, leur **périodicité** (mensuelle pour le pilotage opérationnel, trimestrielle ou annuelle pour le pilotage stratégique) et leurs **destinataires** (la DRH, les managers opérationnels, la direction générale, les instances représentatives — chacun ayant besoin d'un niveau d'information adapté). Le tableau de bord se distingue du bilan social, plus exhaustif et réglementaire, par sa vocation de **pilotage** : il sélectionne, alerte et oriente l'action."
        },
        {
          "type": "h3",
          "text": "6.2 L'exploitation du tableau de bord"
        },
        {
          "type": "p",
          "text": "L'exploitation suit la logique du pilotage par exception : repérer les **écarts** par rapport aux cibles (via un code couleur), en **analyser** les causes, **décider** des actions correctives et **suivre** leur effet. Le tableau de bord alimente aussi le **reporting** social — vers la direction (contribution RH à la performance), vers les instances représentatives (dialogue social, §8), et désormais vers l'extérieur (reporting de durabilité CSRD, volet social, §10)."
        },
        {
          "type": "h4",
          "text": "Tableau de bord 8 — Tableau de bord RH complet *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Domaine**",
            "**Indicateur**",
            "**N–1**",
            "**N**",
            "**Cible**",
            "**Statut**"
          ],
          "rows": [
            [
              "**Effectifs**",
              "Effectif moyen (ETP)",
              "480",
              "495",
              "500",
              "🟢 conforme"
            ],
            [
              "**Effectifs**",
              "Taux d'encadrement",
              "11 %",
              "11,5 %",
              "12 %",
              "🟠 à surveiller"
            ],
            [
              "**Mobilité**",
              "Turnover",
              "14 %",
              "12 %",
              "10 %",
              "🟠 en amélioration"
            ],
            [
              "**Climat**",
              "Absentéisme",
              "5,2 %",
              "5,8 %",
              "4,5 %",
              "🔴 alerte"
            ],
            [
              "**Masse salariale**",
              "Évolution MS",
              "+2,8 %",
              "+3,4 %",
              "+3,0 %",
              "🟠 dépassement"
            ],
            [
              "**Masse salariale**",
              "Ratio MS / VA",
              "62 %",
              "63 %",
              "≤ 62 %",
              "🟠 à surveiller"
            ],
            [
              "**Formation**",
              "% masse salariale en formation",
              "2,4 %",
              "2,9 %",
              "3,0 %",
              "🟢 quasi atteint"
            ],
            [
              "**Productivité**",
              "VA / salarié (k€)",
              "78",
              "82",
              "85",
              "🟠 en progression"
            ],
            [
              "**Engagement**",
              "eNPS",
              "+8",
              "+12",
              "+20",
              "🟠 fragile"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ce tableau de bord intégré offre à la direction une vue d'ensemble. Il révèle des dynamiques contrastées : des progrès (turnover en baisse, formation et productivité en hausse, engagement qui remonte) mais deux signaux d'alerte majeurs — l'**absentéisme** qui se dégrade (rouge) et l'**évolution de la masse salariale** qui dépasse la cible (+3,4 % contre +3,0 %), avec un ratio MS/VA qui se tend. Le croisement est éclairant : la hausse de la masse salariale (effet de report des augmentations + GVT, §4) et la dégradation de l'absentéisme appellent une analyse conjointe (la masse salariale subit-elle le coût des remplacements liés à l'absentéisme ?). Le tableau de bord ne donne pas la réponse mais **pose les bonnes questions** et déclenche l'investigation — c'est sa fonction."
        },
        {
          "type": "h4",
          "text": "Schéma 9 — Architecture d'un système de pilotage RH *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/06.png",
          "alt": "Schéma 9 — Architecture d'un système de pilotage RH *(obligatoire)*",
          "width": 1980,
          "height": 1056
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma articule les niveaux du système de pilotage social : à la base, le **SIRH** (système d'information RH) qui collecte les données (paie, temps, formation, recrutement) ; au-dessus, les **indicateurs** et **tableaux de bord** par destinataire ; au sommet, le **pilotage stratégique** reliant la performance sociale à la performance globale (Balanced Scorecard, perspective apprentissage). Le **bilan social** et le **reporting de durabilité** (CSRD) constituent les sorties réglementaires. Cette architecture montre que le contrôle de gestion sociale transforme une donnée administrative (la paie) en information de pilotage stratégique — réalisant la promesse du chapitre."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ce pilotage n'a de sens que s'il démontre la contribution du social à la performance globale."
        }
      ]
    },
    {
      "id": "7-controle-de-gestion-sociale-et-performance-globale",
      "title": "7. Contrôle de gestion sociale et performance globale",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; capital humain repris de l'ancien cours ; Becker, Barney, Kaplan & Norton.*"
        },
        {
          "type": "h3",
          "text": "7.1 Capital humain et performance"
        },
        {
          "type": "p",
          "text": "La question fondamentale du contrôle de gestion sociale est celle du **lien entre l'investissement dans le capital humain et la performance**. Trois cadres théoriques l'éclairent. La **théorie du capital humain** (Becker, Schultz) considère la formation et le développement des compétences comme un **investissement** (et non une charge) générant un rendement futur (productivité accrue). La **théorie des ressources** (Barney, RBV) fait du capital humain une ressource potentiellement source d'avantage concurrentiel durable lorsqu'elle est valorisable, rare, inimitable et organisée — l'ancien cours rappelle que les ressources créatrices de valeur sont « rares, difficilement imitables et bien gérées ». Le **Balanced Scorecard** (Kaplan & Norton, chapitre 3) intègre enfin le capital humain dans la perspective « apprentissage et croissance », à la racine de la chaîne de causalité menant à la performance financière : des collaborateurs compétents et engagés → de meilleurs processus → des clients satisfaits → un résultat amélioré."
        },
        {
          "type": "p",
          "text": "L'enjeu, pour le contrôle de gestion sociale, est de **rendre visible et mesurable** cette contribution, par nature indirecte et différée. C'est tout le défi : justifier économiquement l'investissement RH (formation, qualité de vie au travail, marque employeur) en démontrant son rendement, alors même que ce rendement est diffus et décalé dans le temps."
        },
        {
          "type": "h3",
          "text": "7.2 La création de valeur sociale"
        },
        {
          "type": "p",
          "text": "La performance sociale crée de la valeur économique par plusieurs canaux. La **productivité** : des salariés compétents, bien organisés et engagés produisent davantage et mieux. L'**innovation** : l'engagement et la diversité des équipes nourrissent la capacité d'innovation. L'**engagement** : de nombreuses études établissent une corrélation entre engagement des salariés et performance (productivité, qualité, satisfaction client, moindre turnover). La **marque employeur** : une réputation d'employeur attractif réduit les coûts de recrutement, attire les talents et fidélise. À l'inverse, la **non-performance sociale** détruit de la valeur par les **coûts cachés** (Savall) : l'absentéisme, le turnover, les conflits, la démotivation engendrent des surcoûts (remplacements, désorganisation, non-qualité) considérables, que la comptabilité ne fait pas apparaître mais qui pèsent bien réellement sur la performance. La théorie socio-économique des organisations d'**Henri Savall** (ISEOR) mérite ici un développement, car elle fournit le cadre conceptuel le plus abouti pour relier social et économique. Savall identifie cinq **indicateurs de dysfonctionnement social** générateurs de coûts cachés : l'**absentéisme**, les **accidents du travail**, la **rotation du personnel** (turnover), la **non-qualité** et les **écarts de productivité directe**. Chacun engendre des coûts selon six composantes : sursalaires, surtemps, surconsommations, non-production, non-création de potentiel et risques. Le point central de Savall est que ces coûts, **invisibles dans la comptabilité classique** (ils se dissolvent dans les charges courantes), sont pourtant considérables — l'ISEOR les évalue souvent à plusieurs milliers, voire dizaines de milliers d'euros par personne et par an. Les rendre visibles par un calcul explicite est précisément le rôle du contrôle de gestion sociale : c'est ce qui permet de démontrer qu'une action sociale (amélioration des conditions de travail, réduction de l'absentéisme) n'est pas une dépense mais un **investissement à fort rendement**. La thèse de Savall — la performance économique et la performance sociale se renforcent mutuellement — constitue le socle théorique de tout le chapitre."
        },
        {
          "type": "h4",
          "text": "Tableau 9 — Lien entre performance sociale et performance économique *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Levier social**",
            "**Mécanisme**",
            "**Effet économique**",
            "**Indicateur de suivi**"
          ],
          "rows": [
            [
              "**Compétences (formation)**",
              "Investissement capital humain",
              "Productivité, qualité, innovation",
              "ROI formation, VA/salarié"
            ],
            [
              "**Engagement**",
              "Mobilisation, discrétionnaire",
              "Productivité, qualité, fidélisation",
              "eNPS, turnover"
            ],
            [
              "**Fidélisation (faible turnover)**",
              "Rétention du capital humain",
              "Économies de recrutement/formation",
              "Turnover, coût de remplacement"
            ],
            [
              "**Qualité de vie au travail**",
              "Réduction des risques psychosociaux",
              "Baisse de l'absentéisme et des AT",
              "Absentéisme, taux d'AT"
            ],
            [
              "**Marque employeur**",
              "Attractivité",
              "Baisse des coûts de recrutement, qualité des recrues",
              "Coût/délai de recrutement"
            ],
            [
              "*(Non-performance)*",
              "Coûts cachés (Savall)",
              "Surcoûts d'absentéisme, turnover, non-qualité",
              "Coûts cachés évalués"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ce tableau matérialise la **chaîne de valeur sociale** : chaque levier social produit un effet économique mesurable. Son intérêt est double. Il **légitime** l'investissement RH en le reliant à la performance économique (argument décisif face à une direction financière). Il **oriente** le pilotage en associant à chaque levier un indicateur de suivi. La logique d'ensemble rejoint la problématique du chapitre : performance sociale et performance économique ne s'opposent pas, elles se renforcent — à condition d'être pilotées conjointement. C'est le fondement de la **performance globale** (lien Partie 3)."
        },
        {
          "type": "p",
          "text": "La mesure de la **productivité du travail** mérite une attention particulière, car elle relie directement le social à l'économique. Plusieurs ratios coexistent : la **valeur ajoutée par salarié** (VA / effectif moyen), indicateur de l'efficience globale du travail ; le **chiffre d'affaires par salarié** ; le **ratio de productivité** rapportant la production à la quantité de travail. Un ratio voisin et stratégique est le **taux de marge sur coût du travail** ou, inversement, le poids de la masse salariale dans la valeur ajoutée (**MS / VA**), qui mesure le partage de la valeur ajoutée entre rémunération du travail et autres facteurs. Un ratio MS/VA croissant peut signaler soit une dégradation de la productivité, soit un choix de partage plus favorable aux salariés — l'interprétation suppose le croisement avec d'autres indicateurs. Ces ratios sont au cœur du diagnostic de performance sociale : ils permettent de répondre à la question « le coût du travail est-il soutenable au regard de la valeur créée ? » et de se comparer (benchmark sectoriel). Le contrôleur de gestion sociale veille toutefois à ne pas réduire la productivité à un ratio comptable : la productivité durable repose sur l'engagement, les compétences et la qualité, que les ratios ne captent qu'imparfaitement."
        },
        {
          "type": "h4",
          "text": "Encadré — Bonnes pratiques"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Bonnes pratiques.** Pour démontrer le ROI d'un investissement social (ex. un programme de formation ou de QVT) : (1) chiffrer le **coût** complet (direct + temps mobilisé) ; (2) identifier les **gains** attendus (productivité, baisse de l'absentéisme/turnover, des coûts cachés) ; (3) les **monétiser** prudemment ; (4) comparer sur un horizon pertinent. Cette démarche, proche du business case de transformation (chapitre 4), transforme un débat d'opinion (« la formation, ça sert ») en décision étayée.\n**Transition.** Le pilotage social s'exerce aussi dans le cadre particulier du dialogue avec les parties prenantes sociales."
        }
      ]
    },
    {
      "id": "8-dialogue-social-et-gouvernance-rh",
      "title": "8. Dialogue social et gouvernance RH",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; dialogue social repris de l'ancien cours (Cours 3 & 4).*"
        },
        {
          "type": "h3",
          "text": "8.1 Les parties prenantes sociales"
        },
        {
          "type": "p",
          "text": "La gouvernance sociale met en jeu de multiples acteurs aux attentes parfois divergentes. La **direction** vise la performance, la maîtrise des coûts et l'adaptation. Les **salariés** attendent rémunération équitable, conditions de travail, perspectives et sens. Les **représentants du personnel** (élus du CSE, délégués syndicaux) portent les revendications collectives et négocient. Les **managers de proximité** font vivre la relation sociale au quotidien. À l'extérieur, les **pouvoirs publics** (inspection du travail, administration) veillent à l'application du droit, et les **parties prenantes externes** (investisseurs responsables, société civile) scrutent la performance sociale. Le contrôle de gestion sociale alimente ce dialogue par des **indicateurs partagés**, support d'un débat fondé sur des faits."
        },
        {
          "type": "h3",
          "text": "8.2 Les négociations collectives"
        },
        {
          "type": "p",
          "text": "Le dialogue social s'institutionnalise dans les **négociations collectives**, dont les plus emblématiques pour le contrôle de gestion sociale sont les **négociations annuelles obligatoires (NAO)** sur les salaires. C'est ici que se décident les augmentations dont le chapitre a montré l'impact (effets de masse et de report, §4) : la direction y arbitre, données à l'appui, entre les attentes salariales, la maîtrise de la masse salariale et l'équité. D'autres négociations portent sur la GPEC, l'égalité professionnelle, la qualité de vie au travail, l'intéressement et la participation. Le contrôle de gestion sociale est le fournisseur de données indispensable à ces négociations : simulations de coût des augmentations, comparaisons, projections."
        },
        {
          "type": "h3",
          "text": "8.3 Les indicateurs de gouvernance sociale"
        },
        {
          "type": "p",
          "text": "La gouvernance sociale se mesure elle-même par des indicateurs : taux de participation aux élections professionnelles, nombre d'accords signés, climat des relations sociales (conflictualité, jours de grève), respect des obligations (index égalité professionnelle, emploi des travailleurs handicapés). Ces indicateurs, de plus en plus suivis par les parties prenantes externes, intègrent le volet « S » et « G » des critères ESG (§10)."
        },
        {
          "type": "h4",
          "text": "Tableau 10 — Acteurs du dialogue social et attentes *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Acteur**",
            "**Rôle**",
            "**Attentes principales**",
            "**Apport du CG social**"
          ],
          "rows": [
            [
              "**Direction / DRH**",
              "Décide, pilote",
              "Performance, maîtrise des coûts, adaptation",
              "Indicateurs, simulations, projections"
            ],
            [
              "**Salariés**",
              "Travaillent",
              "Rémunération, conditions, sens, perspectives",
              "Transparence, équité mesurée"
            ],
            [
              "**Représentants du personnel (CSE)**",
              "Négocient, représentent",
              "Pouvoir d'achat, emploi, conditions",
              "Données partagées pour la négociation"
            ],
            [
              "**Managers de proximité**",
              "Animent",
              "Outils, marges de manœuvre",
              "Tableaux de bord opérationnels"
            ],
            [
              "**Pouvoirs publics**",
              "Contrôlent",
              "Respect du droit",
              "Bilan social, index réglementaires"
            ],
            [
              "**Investisseurs / société civile**",
              "Évaluent",
              "Performance sociale, responsabilité",
              "Reporting extra-financier (CSRD)"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 10 — L'écosystème social de l'entreprise *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/07.png",
          "alt": "Schéma 10 — L'écosystème social de l'entreprise *(obligatoire)*",
          "width": 1892,
          "height": 1188
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma place l'entreprise au centre d'un écosystème d'acteurs sociaux — internes (direction, salariés, représentants, managers) et externes (pouvoirs publics, investisseurs, société civile) — reliés par des flux d'attentes et d'informations. Le contrôle de gestion sociale y joue un rôle de **tiers de confiance** : en produisant des indicateurs objectifs et partagés, il fonde le dialogue sur des faits plutôt que sur des perceptions, désamorçant une partie des tensions. La qualité du dialogue social, longtemps perçue comme une contrainte, apparaît ainsi comme un facteur de performance (anticipation des conflits, adhésion aux transformations — lien chapitre 4)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ce pilotage social est profondément transformé par la digitalisation et l'intelligence artificielle."
        }
      ]
    },
    {
      "id": "9-la-digitalisation-de-la-fonction-rh",
      "title": "9. La digitalisation de la fonction RH",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine ; lien chapitre 4 et UE5.*"
        },
        {
          "type": "h3",
          "text": "9.1 Le SIRH"
        },
        {
          "type": "p",
          "text": "Le **système d'information des ressources humaines (SIRH)** est l'infrastructure numérique de la fonction RH : il intègre la gestion de la paie, des temps et activités, de la formation, du recrutement, des carrières et des compétences. Sa valeur pour le contrôle de gestion sociale est décisive : il **automatise** la production des données sociales (effectifs, masse salariale, indicateurs), libérant du temps pour l'analyse, et **fiabilise** ces données. Un SIRH intégré est le préalable d'un pilotage social efficace : sans données fiables et accessibles, pas de tableau de bord pertinent."
        },
        {
          "type": "h3",
          "text": "9.2 Le people analytics"
        },
        {
          "type": "p",
          "text": "Le **people analytics** (ou *HR analytics*) désigne l'exploitation analytique des données RH pour éclairer la décision. Il fait passer la fonction RH d'un pilotage **descriptif** (que s'est-il passé ?) à un pilotage **prédictif** (que va-t-il se passer ?) et **prescriptif** (que faire ?). Exemples : prédiction du risque de départ (turnover prédictif) pour agir avant la démission, analyse des facteurs d'engagement, optimisation des parcours, objectivation des décisions de rémunération. Le people analytics est l'évolution naturelle du contrôle de gestion sociale à l'ère de la donnée — sous réserve d'une vigilance éthique et réglementaire (RGPD, consentement, non-discrimination). On distingue classiquement quatre niveaux de maturité du people analytics, par sophistication croissante : l'analytique **descriptive** (tableaux de bord, reporting du passé), **diagnostique** (comprendre les causes — pourquoi le turnover augmente-t-il dans telle équipe ?), **prédictive** (anticiper — quels salariés présentent un risque de départ ?) et **prescriptive** (recommander des actions). La plupart des organisations maîtrisent le descriptif mais peinent à accéder au prédictif, faute de données de qualité, de compétences analytiques au sein de la fonction RH, ou d'une culture de la décision fondée sur les données. La montée en maturité suppose donc d'investir conjointement dans les **outils** (SIRH, data), les **compétences** (data analysts RH) et la **gouvernance des données** (qualité, éthique, conformité RGPD). Le people analytics ne remplace pas le jugement RH : il l'**objective** et l'**éclaire**, en évitant deux écueils symétriques — la décision « au feeling » déconnectée des faits, et le « solutionnisme » de la donnée qui croirait tout résoudre par l'algorithme."
        },
        {
          "type": "h3",
          "text": "9.3 L'intelligence artificielle et la RH"
        },
        {
          "type": "p",
          "text": "L'**intelligence artificielle**, et notamment l'IA générative, transforme les processus RH. Le **recrutement assisté** mobilise l'IA pour le sourcing, la présélection des candidatures, voire l'analyse des entretiens — avec un risque majeur de **biais algorithmiques** (un algorithme entraîné sur des données historiques peut reproduire des discriminations passées). La **gestion prédictive** (turnover, besoins en compétences) affine la GPEC. La **formation personnalisée** adapte les parcours d'apprentissage à chaque collaborateur (*adaptive learning*). La **gestion des talents** s'appuie sur l'IA pour identifier les hauts potentiels et proposer des mobilités. L'IA générative, enfin, assiste les tâches RH quotidiennes (rédaction, réponse aux questions des salariés via des chatbots)."
        },
        {
          "type": "p",
          "text": "Ces apports s'accompagnent de **vigilances** fortes : biais et discrimination, protection des données personnelles (RGPD), transparence et explicabilité des décisions algorithmiques, acceptabilité par les salariés, et maintien d'une **supervision humaine** sur des décisions qui engagent des personnes. L'IA augmente la fonction RH ; elle ne saurait la déshumaniser. Cette tension est au cœur des débats contemporains : la donnée et l'algorithme apportent objectivité et efficacité, mais la gestion des hommes engage des dimensions — équité, confiance, dignité, sens — qui résistent à la quantification et exigent le jugement humain. Une décision de licenciement, de promotion ou d'évaluation ne peut être déléguée à un algorithme, même performant : la responsabilité reste humaine. Le défi de la fonction RH augmentée est donc de **combiner** la puissance analytique de la donnée et la sensibilité du jugement humain, en gardant toujours l'humain « dans la boucle » (human in the loop) pour les décisions qui engagent les personnes. C'est aussi un enjeu d'**acceptabilité** : les salariés acceptent d'autant mieux l'usage de leurs données que la finalité est transparente, la gouvernance maîtrisée et l'usage loyal. La digitalisation de la RH est ainsi elle-même une conduite du changement (chapitre 4), où la technologie ne réussit que si la transformation humaine et culturelle l'accompagne."
        },
        {
          "type": "h4",
          "text": "Tableau 11 — Impact des technologies sur les processus RH *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Processus RH**",
            "**Apport technologique**",
            "**Bénéfice**",
            "**Vigilance**"
          ],
          "rows": [
            [
              "**Recrutement**",
              "IA de sourcing et présélection",
              "Gain de temps, élargissement du vivier",
              "Biais algorithmiques, discrimination"
            ],
            [
              "**Formation**",
              "Adaptive learning, plateformes",
              "Personnalisation, accessibilité",
              "Engagement, qualité pédagogique"
            ],
            [
              "**Gestion des compétences**",
              "SIRH, cartographies dynamiques",
              "Pilotage GPEC en continu",
              "Qualité et mise à jour des données"
            ],
            [
              "**Rémunération / paie**",
              "Automatisation, simulation",
              "Fiabilité, gain de temps",
              "Contrôle, conformité"
            ],
            [
              "**Engagement / climat**",
              "Enquêtes en continu, analyse de sentiment",
              "Détection précoce",
              "RGPD, confiance"
            ],
            [
              "**Pilotage / reporting**",
              "People analytics, dashboards",
              "Prédiction, aide à la décision",
              "Éthique, supervision humaine"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 11 — Maturité digitale de la fonction RH (radar) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/08.png",
          "alt": "Graphique 11 — Maturité digitale de la fonction RH (radar) *(obligatoire)*",
          "width": 1804,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le radar évalue la maturité digitale de la fonction RH sur plusieurs axes (SIRH intégré, dématérialisation des processus, people analytics, IA, expérience collaborateur digitale, compétences data de l'équipe RH), en comparant éventuellement l'existant à une cible. Sa lecture révèle les **chantiers prioritaires** : une fonction RH peut disposer d'un bon SIRH (socle) mais accuser un retard sur le people analytics et l'IA — axes d'investissement. Le radar est un outil de diagnostic et de feuille de route de la transformation digitale RH (lien chapitre 4), reliant la modernisation de l'outillage à la montée en compétences de l'équipe RH elle-même."
        },
        {
          "type": "h4",
          "text": "Schéma 11 — La fonction RH augmentée par l'IA *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/09.png",
          "alt": "Schéma 11 — La fonction RH augmentée par l'IA *(obligatoire)*",
          "width": 1892,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente la fonction RH augmentée : autour d'un socle de **données RH** (SIRH) et d'**IA/analytics**, gravitent les processus RH (recrutement, formation, compétences, engagement, paie), tous enrichis par l'exploitation de la donnée. Au centre, le rôle du professionnel RH se déplace de l'**exécution administrative** (automatisée) vers le **conseil, l'analyse et l'accompagnement humain** — la valeur ajoutée se concentrant sur ce que l'IA ne peut faire : le jugement, l'empathie, la décision éthique. Le message clé rejoint le chapitre 4 : la technologie ne remplace pas la fonction RH, elle la **recentre sur sa valeur humaine**, à condition d'accompagner cette transformation."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** La fonction RH est enfin au cœur des enjeux ESG, dont elle porte la dimension sociale."
        }
      ]
    },
    {
      "id": "10-enjeux-esg-et-pilotage-social",
      "title": "10. Enjeux ESG et pilotage social",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine ; lien fort Partie 3 (durabilité, CSRD).*"
        },
        {
          "type": "p",
          "text": "La dimension **sociale** des critères **ESG** (le « S ») place la fonction RH et son pilotage au cœur de la responsabilité de l'entreprise. Plusieurs enjeux structurent ce champ. La **diversité** et l'**inclusion** (de genre, d'origine, d'âge, de handicap) sont à la fois un impératif éthique, une exigence réglementaire et un facteur de performance (la diversité nourrit l'innovation). L'**égalité professionnelle** entre les femmes et les hommes fait l'objet d'obligations précises (en France, l'**index de l'égalité professionnelle**, noté sur 100, à publier annuellement). Cet index, introduit en France, agrège plusieurs indicateurs (écart de rémunération entre femmes et hommes, écart de répartition des augmentations et des promotions, pourcentage de salariées augmentées au retour de congé maternité, parité parmi les plus hautes rémunérations) en une note sur 100 ; en deçà d'un seuil, l'entreprise doit mettre en œuvre des mesures correctives sous peine de sanction. Cet exemple illustre une tendance de fond : la **quantification réglementaire** des enjeux sociaux. Le contrôle de gestion sociale est en première ligne pour produire ces indicateurs, fiabiliser leur calcul et piloter les plans d'action correctifs. L'enjeu dépasse la conformité : ces indicateurs sont désormais scrutés par les candidats, les salariés et les investisseurs, faisant de la performance en matière d'égalité un facteur d'attractivité et de réputation. La **qualité de vie au travail (QVT)** et la prévention des **risques psychosociaux** (RPS) sont devenues des priorités, sous l'effet des attentes des salariés et de la jurisprudence. La **santé et la sécurité au travail** (réduction des accidents et maladies professionnelles) restent un socle. La **responsabilité sociale** s'étend enfin à la chaîne de valeur (devoir de vigilance sur les conditions de travail des fournisseurs)."
        },
        {
          "type": "p",
          "text": "Ces enjeux sont désormais soumis à un **reporting** obligatoire et audité via la **CSRD** (directive européenne de reporting de durabilité), dont les normes (ESRS) comportent un important volet social (effectifs, conditions de travail, diversité, formation, dialogue social). La logique de **double matérialité** (chapitre 5) s'y applique : l'entreprise rend compte de la façon dont les enjeux sociaux l'affectent (matérialité financière) *et* de son impact social (matérialité d'impact). Le contrôle de gestion sociale devient ainsi le producteur des indicateurs du reporting de durabilité sociale."
        },
        {
          "type": "h4",
          "text": "Tableau 12 — Indicateurs sociaux ESG *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Enjeu ESG (volet S)**",
            "**Indicateur**",
            "**Cadre / obligation**",
            "**Lien performance**"
          ],
          "rows": [
            [
              "**Égalité professionnelle**",
              "Index égalité F/H (/100), écart de rémunération",
              "Obligation légale (France)",
              "Équité, réputation, attractivité"
            ],
            [
              "**Diversité / inclusion**",
              "% femmes cadres, % travailleurs handicapés",
              "Obligations + CSRD",
              "Innovation, conformité"
            ],
            [
              "**Formation**",
              "Heures de formation / salarié, % accès",
              "CSRD (ESRS S1)",
              "Employabilité, compétences"
            ],
            [
              "**Santé / sécurité**",
              "Taux de fréquence et de gravité des AT",
              "Obligation + CSRD",
              "Réduction des coûts, climat"
            ],
            [
              "**QVT / RPS**",
              "Absentéisme, enquêtes, taux de RPS",
              "CSRD, jurisprudence",
              "Engagement, productivité"
            ],
            [
              "**Dialogue social**",
              "% couverture par accords, conflictualité",
              "CSRD (ESRS S1)",
              "Anticipation, adhésion"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Matrice 12 — Lien entre objectifs ESG et pilotage RH *(matrice obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/10.png",
          "alt": "Matrice 12 — Lien entre objectifs ESG et pilotage RH *(matrice obligatoire)*",
          "width": 1870,
          "height": 1192
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice croise les **objectifs ESG sociaux** (égalité, diversité, QVT, santé, formation, dialogue) et les **leviers du pilotage RH** (recrutement, rémunération, formation, organisation, dialogue social), en identifiant les points d'action. Sa lecture montre que les objectifs ESG ne sont pas un domaine séparé mais s'**incarnent dans les processus RH ordinaires** : l'égalité se joue dans les politiques de rémunération et de promotion, la diversité dans le recrutement, la QVT dans l'organisation du travail. Le contrôle de gestion sociale, en mesurant ces objectifs par des indicateurs (tableau 12), permet de les **piloter** comme tout autre objectif de performance — et de répondre aux exigences croissantes de transparence (CSRD). C'est l'aboutissement de la vision du chapitre : un pilotage social qui intègre l'économique, le social et le durable dans une performance globale."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces concepts s'incarnent dans les pratiques d'entreprises réelles."
        }
      ]
    },
    {
      "id": "11-cas-d-entreprises-et-illustrations-professionnelles",
      "title": "11. Cas d'entreprises et illustrations professionnelles",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé — illustrations pédagogiques simplifiées (voir avertissement en tête de chapitre).*"
        },
        {
          "type": "p",
          "text": "**Michelin — responsabilisation et qualité de vie au travail.** Le groupe est souvent cité pour ses démarches de **responsabilisation des équipes** (autonomie, management participatif) et d'attention aux conditions de travail. *Dispositif RH* : organisation responsabilisante, dialogue social développé, indicateurs d'engagement. *Enseignement* : l'investissement dans l'autonomie et la QVT peut soutenir l'engagement et la performance industrielle."
        },
        {
          "type": "p",
          "text": "**L'Oréal — diversité et marque employeur.** Le groupe illustre une politique active de **diversité et d'inclusion** et une **marque employeur** forte, régulièrement distinguée. *Dispositif* : objectifs chiffrés de diversité, index égalité, développement des talents. *Enseignement* : la diversité et la marque employeur sont des leviers d'attractivité et d'innovation, mesurables et pilotables."
        },
        {
          "type": "p",
          "text": "**Airbus — GPEC et gestion des compétences à grande échelle.** Le groupe aéronautique illustre les enjeux de **GPEC** dans un contexte de compétences techniques rares et de cycles longs. *Dispositif* : cartographie des compétences, plans de formation, gestion prévisionnelle des métiers critiques. *Enseignement* : dans les industries de haute technologie, l'anticipation des compétences est stratégique (lien §3)."
        },
        {
          "type": "p",
          "text": "**Decathlon — responsabilisation et engagement.** L'entreprise est connue pour sa culture de **responsabilisation** et d'**actionnariat salarié**, facteurs d'engagement. *Dispositif* : décentralisation des décisions, intéressement, indicateurs d'engagement. *Enseignement* : l'engagement par la responsabilisation et le partage de la valeur peut nourrir la performance commerciale."
        },
        {
          "type": "p",
          "text": "**Google — people analytics et expérience collaborateur.** L'entreprise est pionnière du **people analytics** (décisions RH fondées sur la donnée, ex. les analyses sur les facteurs de performance des équipes) et de l'attention à l'**expérience collaborateur**. *Dispositif* : people analytics avancé, environnement de travail, développement. *Enseignement* : la donnée RH, bien exploitée, objective et améliore les décisions sociales (lien §9)."
        },
        {
          "type": "h4",
          "text": "Tableau 13 — Comparaison des pratiques observées *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Entreprise**",
            "**Levier social dominant**",
            "**Outil de pilotage**",
            "**Enseignement clé**"
          ],
          "rows": [
            [
              "**Michelin**",
              "Responsabilisation, QVT",
              "Engagement, dialogue social",
              "Autonomie et QVT au service de la performance"
            ],
            [
              "**L'Oréal**",
              "Diversité, marque employeur",
              "Index égalité, objectifs diversité",
              "Diversité = attractivité + innovation"
            ],
            [
              "**Airbus**",
              "GPEC, compétences critiques",
              "Cartographie des compétences",
              "Anticiper les compétences stratégiques"
            ],
            [
              "**Decathlon**",
              "Responsabilisation, actionnariat",
              "Intéressement, engagement",
              "Partage de la valeur et engagement"
            ],
            [
              "**Google**",
              "People analytics, expérience",
              "Données RH, analytics",
              "La donnée au service de la décision RH"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces pratiques et ces concepts convergent vers les attendus de l'épreuve."
        }
      ]
    },
    {
      "id": "12-approfondissements-dscg",
      "title": "12. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "12.1 Les arbitrages sociaux et économiques"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion sociale est par essence le lieu d'un **arbitrage** entre logique économique (maîtriser les coûts, notamment la masse salariale) et logique sociale (rémunérer, fidéliser, développer). Un sujet DSCG attend que l'on dépasse l'opposition simpliste pour montrer que les deux logiques peuvent converger (un investissement social bien ciblé crée de la valeur économique) tout en reconnaissant les arbitrages réels (une augmentation générale améliore le climat mais pèse sur la compétitivité). La maturité consiste à raisonner en **performance globale**."
        },
        {
          "type": "h3",
          "text": "12.2 Le pilotage de la masse salariale : le cœur technique"
        },
        {
          "type": "p",
          "text": "C'est le thème le plus probable et le plus discriminant. Le candidat doit savoir **calculer** les effets (niveau, masse, report, GVT, effectif, structure), **vérifier** les relations entre eux, et surtout **interpréter** les résultats en termes de décision (quand accorder les augmentations ? quel report sur l'an prochain ?). La maîtrise du calcul mois par mois et de la distinction masse/niveau/report fait la différence."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré complémentaire — effet de report et prévision *(approfondissement)*"
        },
        {
          "type": "p",
          "text": "Reprenons une entreprise dont la masse salariale de N est de **2 400 000 €**, après une augmentation de **2 %** accordée au **1ᵉʳ octobre N**. Quelle sera la masse salariale de N+1 « à politique salariale constante » (sans nouvelle augmentation) ?"
        },
        {
          "type": "p",
          "text": "L'augmentation du 1ᵉʳ octobre N n'a porté que sur 3 mois en N (octobre à décembre). En N+1, elle portera sur **12 mois** : c'est l'effet de report. Le salaire mensuel de décembre N (après augmentation) reconduit sur 12 mois donne la masse salariale de N+1 à politique constante."
        },
        {
          "type": "p",
          "text": "Si le salaire mensuel avant augmentation était de S, la masse N = 9S (jan-sept) + 3 × 1,02S (oct-déc) = 9S + 3,06S = 12,06S = 2 400 000 €, d'où S ≈ 198 675 € (mensuel avant hausse). Salaire de décembre N = 1,02S ≈ 202 649 €. Masse N+1 = 202 649 × 12 ≈ **2 431 788 €**, soit un effet de report de 2 431 788 / 2 400 000 ≈ **1,32 %**."
        },
        {
          "type": "p",
          "text": "**Interprétation.** Même sans aucune décision en N+1, la masse salariale augmentera mécaniquement de **+ 1,32 %** sous le seul effet de report de l'augmentation tardive de N. Cet exemple illustre pourquoi le contrôleur de gestion sociale doit **anticiper le report** dans la construction du budget N+1 : ignorer le report conduit à sous-estimer la masse salariale prévisionnelle. Plus une augmentation est accordée tardivement, plus son report est lourd — l'inverse de l'effet de masse."
        },
        {
          "type": "h3",
          "text": "12.3 Le contrôle des compétences et la GPEC"
        },
        {
          "type": "p",
          "text": "Savoir analyser une politique de GPEC (processus, cartographie, matrice de compétences, plans d'action) et la relier à la stratégie. Un sujet peut demander d'identifier des écarts de compétences et de proposer des leviers chiffrés (coût d'un plan de formation vs recrutement)."
        },
        {
          "type": "h3",
          "text": "12.4 La performance sociale"
        },
        {
          "type": "p",
          "text": "Savoir construire et interpréter des indicateurs sociaux et un tableau de bord RH, et relier la performance sociale à la performance économique (coûts cachés, ROI du capital humain). Mobiliser Becker, Barney, le BSC."
        },
        {
          "type": "h3",
          "text": "12.5 Difficultés méthodologiques fréquentes des candidats"
        },
        {
          "type": "p",
          "text": "Les écueils récurrents : confondre effet de masse et effet de niveau ; oublier de calculer la masse mois par mois ; négliger l'effet de report dans une prévision ; confondre les notions d'effectif ; interpréter un indicateur isolément ; rester qualitatif là où un chiffrage est attendu ; oublier de relier le social à l'économique et à la stratégie."
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
          "text": "Le contrôle de gestion sociale est l'instrumentation de pilotage du capital humain, devenu ressource stratégique de premier plan dans l'économie de la connaissance. Prolongeant et approfondissant le pilotage de la fonction RH, il articule quatre registres : le pilotage des **compétences** (GPEC), de la **masse salariale**, de la **performance sociale** et de la **création de valeur**. Sa finalité, selon Martory, est de contribuer à la gestion des ressources humaines « dans leurs performances et leurs coûts » — réconciliant deux logiques longtemps opposées."
        },
        {
          "type": "p",
          "text": "La **GPEC** anticipe l'adéquation entre les besoins en compétences, dérivés de la stratégie, et les ressources disponibles, à l'aide d'outils comme la cartographie et la matrice de compétences, qui révèlent écarts et vulnérabilités. Le **pilotage de la masse salariale**, cœur technique de la discipline, repose sur la décomposition de ses variations en effets — effet de niveau (progression de fin d'année), effet de masse (impact des augmentations sur l'année courante, d'autant plus fort qu'elles sont précoces), effet de report (héritage sur l'année suivante, d'autant plus fort qu'elles sont tardives), effet GVT (dérive du salaire moyen à effectif constant), effets d'effectif et de structure (dont l'effet Noria). Les relations fondamentales — variation de la masse = effet de masse × effet de report ; effet de niveau = effet de masse × effet de report sur N+1 — structurent l'analyse et la prévision."
        },
        {
          "type": "p",
          "text": "Les **indicateurs sociaux** (effectifs, mobilité, climat) et les **tableaux de bord RH** mesurent et pilotent la performance sociale, du SIRH jusqu'au pilotage stratégique. Le lien **capital humain / performance globale**, éclairé par Becker, Barney et le Balanced Scorecard, démontre que la performance sociale crée de la valeur économique (productivité, innovation, engagement, marque employeur) tandis que sa dégradation la détruit par les coûts cachés (Savall). Le **dialogue social** organise la relation aux parties prenantes, nourri par les indicateurs partagés. Enfin, la **digitalisation** (SIRH, people analytics, IA) et les **enjeux ESG** (diversité, égalité, QVT, CSRD) constituent les fronts contemporains, recentrant la fonction RH sur sa valeur humaine et l'inscrivant dans la performance durable. La conclusion rejoint la problématique : le contrôle de gestion sociale permet de piloter le capital humain comme un levier de création de valeur, en articulant performances économique, sociale et organisationnelle au service d'une performance globale et durable."
        },
        {
          "type": "h3",
          "text": "13.2 Carte mentale"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-controle-gestion-sociale/11.png",
          "alt": "13.2 Carte mentale",
          "width": 2288,
          "height": 1364
        },
        {
          "type": "h3",
          "text": "13.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Concept**",
            "**Auteur / référence**",
            "**Apport**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Contrôle de gestion sociale",
              "Martory, Peretti",
              "Piloter RH dans performances et coûts",
              "Risque de réductionnisme quantitatif",
              "Indicateurs, tableaux de bord, masse salariale"
            ],
            [
              "Capital humain",
              "Becker, Schultz",
              "La RH comme investissement, non charge",
              "Mesure difficile du rendement",
              "Justifier l'investissement formation"
            ],
            [
              "Théorie des ressources (RBV)",
              "Barney",
              "Capital humain = avantage concurrentiel",
              "Caractère statique",
              "Compétences distinctives, GPEC"
            ],
            [
              "Rôles de la fonction RH",
              "Ulrich",
              "RH partenaire stratégique",
              "Modèle parfois idéalisé",
              "Positionnement de la fonction"
            ],
            [
              "Effets de masse salariale",
              "(pratique CG sociale)",
              "Décomposer et piloter la masse salariale",
              "Sensible aux hypothèses (dates)",
              "Budget, NAO, prévision"
            ],
            [
              "Balanced Scorecard",
              "Kaplan & Norton",
              "Relier capital humain et performance",
              "Causalité parfois supposée",
              "Pilotage de la performance globale"
            ],
            [
              "Coûts cachés",
              "Savall",
              "Chiffrer la non-performance sociale",
              "Évaluation conventionnelle",
              "Justifier les actions QVT/fidélisation"
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
            "**Contrôle de gestion sociale** (Martory) : aide au pilotage social, gérant les RH dans leurs performances et leurs coûts.",
            "**GPEC** : démarche d'anticipation réduisant les écarts entre besoins (stratégie) et ressources en compétences.",
            "**Masse salariale** : ensemble des rémunérations versées (brute) ou coût total employeur (chargée).",
            "**Capital humain** (Becker) : ensemble des compétences considéré comme un actif productif.",
            "**Effet Noria** : baisse de la masse salariale par remplacement de seniors par des juniors moins payés."
          ]
        },
        {
          "type": "h3",
          "text": "14.2 Formules à connaître"
        },
        {
          "type": "ul",
          "items": [
            "**Effet de niveau (N)** = Salaire déc. N / Salaire déc. N–1",
            "**Effet de masse (N)** = MS annuelle N / (Salaire déc. N–1 × 12)",
            "**Effet de report (N–1→N)** = (Salaire déc. N–1 × 12) / MS annuelle N–1",
            "**Turnover** = (Départs + Arrivées)/2 / Effectif moyen",
            "**Absentéisme** = Heures d'absence / Heures théoriques",
            "**Taux de fréquence AT** = AT avec arrêt × 10⁶ / heures travaillées"
          ]
        },
        {
          "type": "h3",
          "text": "14.3 Effets de masse salariale à maîtriser"
        },
        {
          "type": "ul",
          "items": [
            "Variation de la MS = **Effet de masse × Effet de report (N–1→N)**",
            "Effet de niveau = **Effet de masse × Effet de report (N→N+1)**",
            "Effet de masse fort si augmentations **précoces** ; effet de report fort si augmentations **tardives**.",
            "GVT = Glissement (mérite) + Vieillissement (ancienneté) + Technicité (promotion)."
          ]
        },
        {
          "type": "h3",
          "text": "14.4 KPI sociaux essentiels"
        },
        {
          "type": "p",
          "text": "Effectif moyen (ETP) · turnover · ancienneté · taux de promotion · absentéisme · taux de fréquence/gravité des AT · eNPS/engagement · ratio MS/VA · VA/salarié · % masse salariale en formation · index égalité F/H."
        },
        {
          "type": "h3",
          "text": "14.5 Auteurs à retenir"
        },
        {
          "type": "p",
          "text": "Martory & Crozet (contrôle de gestion sociale) · Peretti (audit social, GRH) · Becker & Schultz (capital humain) · Barney (RBV) · Ulrich (rôles RH) · Kaplan & Norton (BSC) · Savall (coûts cachés) · Prahalad & Hamel (compétences clés)."
        },
        {
          "type": "h3",
          "text": "14.6 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Confondre effet de masse et effet de niveau · oublier le calcul mois par mois · négliger le report dans une prévision · confondre les notions d'effectif · interpréter un indicateur isolément · rester qualitatif sans chiffrage · oublier de relier le social à l'économique et à la stratégie · réduire le CG social à la seule maîtrise des coûts (oublier la création de valeur)."
        },
        {
          "type": "h3",
          "text": "14.7 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Calculer et interpréter les effets de variation de la masse salariale (niveau, masse, report).",
            "Prévoir la masse salariale de N+1 en intégrant l'effet de report.",
            "Analyser une politique de GPEC ; construire une matrice de compétences et identifier les écarts.",
            "Calculer et interpréter des indicateurs sociaux (turnover, absentéisme).",
            "Construire et exploiter un tableau de bord RH.",
            "Démontrer le lien entre performance sociale et performance économique (ROI capital humain, coûts cachés).",
            "Intégrer les enjeux ESG sociaux (égalité, diversité, QVT) dans le pilotage RH."
          ]
        },
        {
          "type": "h3",
          "text": "14.8 Liens avec les autres chapitres"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : choix stratégiques — la GPEC découle de la stratégie ; ressources et compétences (RBV).",
            "**Latéral (Partie 2)** : fonctions support (2.3 — la RH comme fonction support, pilotage de sa performance) ; management du changement (2.4 — la GPEC accompagne les transformations) ; gestion des risques (2.5 — risque de compétences, social).",
            "**Aval (Partie 3)** : performance globale et tableaux de bord (3.3 — BSC, performance sociale) ; **durabilité** (3.2 — volet social de l'ESG, CSRD).",
            "**Transversal** : UE5 (systèmes d'information) pour le SIRH et le people analytics."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.6 « Le contrôle de gestion sociale ». Fin de la Partie 2 du référentiel.*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
