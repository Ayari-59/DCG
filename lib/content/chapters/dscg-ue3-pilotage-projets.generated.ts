// Généré par scripts/convert-docx.mjs depuis 02_Pilotage_des_projets.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-pilotage-projets",
  "level": "DSCG",
  "ue": "UE3",
  "number": 2,
  "title": "Le management et le pilotage des projets",
  "description": "",
  "durationMin": 55,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "p",
          "text": "**DSCG — UE3**"
        },
        {
          "type": "p",
          "text": "Management et contrôle de gestion"
        },
        {
          "type": "p",
          "text": "**Le management et le pilotage des projets**"
        },
        {
          "type": "p",
          "text": "*Manuel premium de préparation à l'épreuve nationale*"
        },
        {
          "type": "p",
          "text": "Partie 2 — Sous-partie 2.2 — Volume indicatif : 20 heures"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Manuel premium de préparation à l'épreuve nationale du DSCG — UE3 « Management et contrôle de gestion »** Nouveau référentiel — Partie 2 « Favoriser le déploiement de la stratégie de l'organisation grâce à des outils de contrôle de gestion » — **Sous-partie 2.2 — Volume indicatif : 20 heures**"
        }
      ]
    },
    {
      "id": "note-de-conformite-au-referentiel-a-lire-avant-le-chapitre",
      "title": "Note de conformité au référentiel (à lire avant le chapitre)",
      "blocks": [
        {
          "type": "p",
          "text": "Conformément à la méthodologie imposée (vérification systématique de la conformité et signalement explicite des contenus repris, adaptés ou créés), cette note ouvre le chapitre."
        },
        {
          "type": "p",
          "text": "**Rattachement au référentiel officiel.** Le présent chapitre couvre la sous-partie **2.2 « Le pilotage des projets » (20 heures)** de la Partie 2 du nouveau référentiel. Les **compétences professionnelles** attendues sont, dans leur libellé officiel : concevoir le plan de financement d'un projet ; élaborer la planification du projet ; réaliser un suivi de l'avancement et des coûts du projet ; analyser les résultats obtenus ; produire une synthèse rédigée et structurée concernant le pilotage du projet. Les **connaissances et savoirs associés** officiels sont : spécificités de l'organisation projet (caractéristiques du projet, acteurs, chronologie, plan de financement (budget) du projet, revues d'avancement) ; triptyque QCD (qualité, coûts, délais) ; risques du projet ; cycle de vie et phases du projet (conception, exécution et *post-mortem*) ; diagramme de Gantt (processus, tâches, durées, marges de temps, jalons, ressources, livrables, chemin critique) ; outils de pilotage des coûts du projet (courbe en S, suivi budgétaire — coût budgété du travail prévu, coût réel du travail effectué, coût budgété du travail effectué —, calcul et analyse des écarts) ; tableau de bord du projet et reporting. La **limite de champ** officielle précise qu'« il est attendu de pouvoir construire des diagrammes à partir de données brutes (textes) » et que des liens peuvent être faits avec l'UE5 du DSCG (systèmes d'information)."
        },
        {
          "type": "p",
          "text": "**Écarts signalés avec le cahier des charges de rédaction.** Le plan de commande mobilise des référentiels professionnels (PMI/PMBOK, PRINCE2, ISO 21500) et des notions (WBS, PERT, *Earned Value Management*, méthodes agiles) qui ne figurent pas tous explicitement dans le libellé du référentiel DSCG. La discipline d'examen impose de hiérarchiser :"
        },
        {
          "type": "ul",
          "items": [
            "Le **diagramme de Gantt** (avec chemin critique, marges, jalons, ressources) et le **suivi budgétaire par les trois grandeurs CBTP / CRTE / CBTE** assorti de la **courbe en S** constituent le **cœur évaluable** : ils sont nommés dans le référentiel et traités ici en priorité, avec exemples chiffrés complets.",
            "Le **réseau PERT / la méthode des potentiels (MPM)** est l'outil naturel de détermination du chemin critique : conservé car techniquement indispensable au Gantt, mais présenté comme moyen au service du Gantt, conformément à l'esprit du programme.",
            "L'***Earned Value Management*** est la formalisation anglo-saxonne du suivi CBTP/CBTE/CRTE : le référentiel emploie le vocabulaire français ; ce chapitre privilégie donc les sigles français (et donne les équivalents PV/EV/AC à titre de correspondance, sans en faire le centre).",
            "**PMI, PRINCE2, ISO 21500, WBS, méthodes agiles (Scrum, Kanban)** : abordés comme **culture professionnelle et ouverture** (utiles pour situer les pratiques et pour la partie « transformations contemporaines »), sans être érigés en objets d'évaluation centraux. Ils sont clairement signalés comme tels."
          ]
        },
        {
          "type": "p",
          "text": "Cette hiérarchisation est précisément ce que récompense l'épreuve nationale : un candidat qui maîtrise le Gantt, le chemin critique et le suivi CBTP/CBTE/CRTE répond au référentiel ; un candidat qui récite le PMBOK sans savoir lire un écart de coût se trompe de cible."
        },
        {
          "type": "p",
          "text": "**Origine des contenus** (repris / adaptés / créés), signalée section par section :"
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
              "Structures organisationnelles de projet (sans structure formelle, matricielle, projet sorti)",
              "**Repris-adapté**",
              "Ancien cours (Cours 3, structures temporaires & adhocratie)"
            ],
            [
              "PERT / chemin critique dans le BTP (exemple introductif)",
              "**Repris-adapté**",
              "Ancien cours (Cours 2, ordonnancement de chantier)"
            ],
            [
              "Définition et caractéristiques du projet ; référentiels PMI/PRINCE2/ISO 21500",
              "**Créé**",
              "Culture professionnelle ; hors ancien cours"
            ],
            [
              "Cycle de vie et phases (conception / exécution / post-mortem)",
              "**Créé**",
              "Exigé par le référentiel"
            ],
            [
              "WBS / décomposition",
              "**Créé**",
              "Culture professionnelle ; signalé comme ouverture"
            ],
            [
              "Planification : Gantt, PERT/MPM, chemin critique, marges, jalons",
              "**Créé**",
              "Cœur du référentiel"
            ],
            [
              "Budgétisation et plan de financement du projet",
              "**Créé / complété**",
              "Cœur du référentiel"
            ],
            [
              "Suivi budgétaire CBTP/CBTE/CRTE, courbe en S, écarts, EVM",
              "**Créé**",
              "Cœur du référentiel"
            ],
            [
              "Gestion des risques projet",
              "**Créé / complété**",
              "Référentiel (risques du projet) ; lien risques 2.5"
            ],
            [
              "Tableau de bord et reporting projet",
              "**Créé**",
              "Référentiel"
            ],
            [
              "Agilité (Scrum, Kanban)",
              "**Créé**",
              "Ouverture contemporaine ; signalé comme tel"
            ],
            [
              "Transformation numérique / IA",
              "**Créé**",
              "Ouverture contemporaine"
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
          "text": "1.1 L'émergence du management par projet"
        },
        {
          "type": "p",
          "text": "Le projet n'est pas une invention récente : les cathédrales, les pyramides ou les grands chantiers d'infrastructure du XIXᵉ siècle étaient déjà des projets au sens plein du terme — des entreprises uniques, bornées dans le temps, mobilisant des ressources considérables vers un objectif spécifié. Ce qui est récent, en revanche, c'est l'érection du **management de projet en discipline structurée**, dotée de méthodes, d'outils et de référentiels normalisés. Cette formalisation est née des grands programmes du milieu du XXᵉ siècle : le **projet Manhattan**, puis le **programme Polaris** de l'US Navy (qui donna naissance à la méthode PERT en 1958) et le **programme Apollo** de la NASA. Ces programmes, d'une complexité inédite, ont imposé d'inventer des techniques capables de coordonner des milliers de tâches interdépendantes sous contrainte simultanée de délai, de coût et de performance technique."
        },
        {
          "type": "p",
          "text": "Du monde de l'ingénierie militaire et aérospatiale, le management de projet a essaimé vers le BTP, l'informatique, l'industrie, puis vers l'ensemble des organisations. Aujourd'hui, une part croissante de l'activité économique se réalise « en mode projet » : développement de nouveaux produits, déploiement de systèmes d'information, fusions-acquisitions, transformations organisationnelles, campagnes marketing, événements. Cette évolution est telle que certains auteurs parlent de **« projectification »** de l'économie et des organisations. Gilles Garel, dans son *Manuel de gestion de projet*, distingue trois âges : un management de projet **implicite** (les grands ouvrages historiques, sans méthode formalisée), un management **standardisé** (l'invention des outils PERT, Gantt, du contrôle des coûts au milieu du XXᵉ siècle dans l'ingénierie et la défense), puis un management **élargi** où le projet devient un mode d'organisation générique, jusque dans les services et les fonctions support. Cette diffusion s'accompagne d'une professionnalisation : certifications (PMP du PMI, PRINCE2 Practitioner), corps de doctrine, et reconnaissance du chef de projet comme métier à part entière. Pour le contrôleur de gestion, cette professionnalisation a une conséquence directe : le projet devient un objet de gestion normé, doté d'un vocabulaire, d'indicateurs et de référentiels partagés, qu'il doit savoir mobiliser au service du pilotage de la performance."
        },
        {
          "type": "h3",
          "text": "1.2 Les limites des structures permanentes"
        },
        {
          "type": "p",
          "text": "Pourquoi cette montée en puissance ? Parce que la structure permanente — l'organisation fonctionnelle hiérarchique étudiée au chapitre précédent — est mal armée pour traiter des activités **non répétitives, transversales et temporaires**. Une organisation fonctionnelle excelle à reproduire des opérations stables (produire en série, traiter des dossiers récurrents) ; elle peine à mobiliser ponctuellement des compétences éclatées entre plusieurs directions pour réaliser un objectif unique dans un délai serré. L'ancien cours INTEC le formulait clairement : les entreprises ont dû « faire coexister une structure permanente (résumée par l'organigramme) et des structures temporaires (les projets) ». Le projet est précisément le dispositif qui réconcilie la verticalité des métiers et l'horizontalité d'un objectif transversal."
        },
        {
          "type": "h3",
          "text": "1.3 Projet et déploiement de la stratégie"
        },
        {
          "type": "p",
          "text": "Le référentiel range le pilotage des projets dans la Partie 2, consacrée au **déploiement de la stratégie**. Ce positionnement est essentiel : un projet n'a de sens que s'il sert une intention stratégique. La stratégie se décline en un **portefeuille de projets** (§11) qui en sont les véhicules d'exécution : c'est par des projets que l'entreprise lance un produit, conquiert un marché, internalise une compétence ou réduit son empreinte carbone. Réciproquement, un projet sans ancrage stratégique consomme des ressources sans créer de valeur durable. Le management de projet est donc le **mécanisme de transformation de la stratégie en réalisations concrètes et mesurables.** Cette articulation fonctionne dans les deux sens. De haut en bas (*top-down*), la stratégie engendre des projets : un plan stratégique se traduit en feuille de route, elle-même déclinée en programmes et projets dotés d'objectifs, de budgets et d'échéances. De bas en haut (*bottom-up*), les projets remontent de l'information stratégique : leurs résultats, leurs difficultés et leurs apprentissages nourrissent la révision de la stratégie. Le projet est ainsi à la fois un **instrument d'exécution** et un **capteur** de la pertinence stratégique. C'est pourquoi le pilotage de projet ne peut être purement technique : il engage la cohérence d'ensemble de l'organisation, et son défaut — projets foisonnants mais désalignés, ressources dispersées, abandons coûteux — est un symptôme classique de déficit de gouvernance stratégique, que la gestion de portefeuille (§11) a précisément pour fonction de corriger."
        },
        {
          "type": "h3",
          "text": "1.4 Les enjeux de performance"
        },
        {
          "type": "p",
          "text": "La performance d'un projet se joue sur un équilibre instable entre trois exigences contradictoires — la **qualité** du livrable, le **coût** consommé et le **délai** de réalisation — que le référentiel nomme explicitement le **triptyque QCD**. À ces trois dimensions s'ajoute la maîtrise des **risques**, inhérents à toute entreprise unique et incertaine. Le rôle du contrôle de gestion est de fournir au chef de projet les instruments qui rendent ces dimensions mesurables et pilotables : planification temporelle, budgétisation, suivi de l'avancement physique et financier, analyse des écarts, cartographie des risques, tableau de bord."
        },
        {
          "type": "h3",
          "text": "1.5 Problématique générale du chapitre"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment l'organisation peut-elle, à l'aide des outils du contrôle de gestion, planifier, financer et piloter un projet — entreprise unique, temporaire et risquée — de manière à déployer sa stratégie tout en maîtrisant simultanément la qualité, les coûts et les délais, et en arbitrant ces objectifs lorsqu'ils entrent en tension ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en construisant l'outillage de façon progressive : **fondements** du projet et de ses catégories (§2) ; **gouvernance et structures** organisationnelles (§3) ; **cycle de vie** et livrables (§4) ; **planification** (WBS, Gantt, chemin critique, marges — §5) ; **pilotage économique et financier** (budget, suivi CBTP/CBTE/CRTE, courbe en S, EVM — §6) ; **gestion des risques** (§7) ; **rôle du contrôle de gestion** et tableau de bord (§8) ; **agilité** (§9) ; **transformation numérique et IA** (§10) ; avant les **approfondissements DSCG**, la **synthèse** et la **fiche de révision** (§11 à §13)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Connaître la définition normalisée du projet et ses caractéristiques (unicité, temporalité, objectif, contraintes) ; connaître les acteurs (maîtrise d'ouvrage, maîtrise d'œuvre, chef de projet, équipe, parties prenantes) ; connaître les structures projet (fonctionnelle, matricielle, sortie, PMO) ; connaître le cycle de vie et ses phases ; maîtriser le vocabulaire du suivi budgétaire (CBTP, CBTE, CRTE) et de l'EVM (PV, EV, AC, CPI, SPI)."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Construire un WBS et un diagramme de Gantt à partir de données textuelles ; déterminer un chemin critique et calculer les marges (totale, libre) ; construire un plan de financement et un budget de projet ; calculer et interpréter des écarts de coût et de délai par la méthode CBTP/CBTE/CRTE et par l'EVM ; tracer une courbe en S ; cartographier les risques par criticité."
        },
        {
          "type": "p",
          "text": "**Compétences.** Concevoir le plan de financement d'un projet ; élaborer la planification ; réaliser un suivi de l'avancement et des coûts ; analyser les résultats et formuler des préconisations ; produire une synthèse rédigée et structurée — exactement le format de production attendu à l'épreuve."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (libellé officiel 2.2).** Concevoir le plan de financement d'un projet ; élaborer la planification du projet ; réaliser un suivi de l'avancement et des coûts du projet ; analyser les résultats obtenus ; produire une synthèse rédigée et structurée concernant le pilotage du projet."
        }
      ]
    },
    {
      "id": "2-les-fondements-du-management-de-projet",
      "title": "2. Les fondements du management de projet",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé (définition, référentiels), enrichi de la culture professionnelle. Le référentiel cible « spécificités de l'organisation projet : caractéristiques du projet ».*"
        },
        {
          "type": "h3",
          "text": "2.0 Cadre conceptuel et débats doctrinaux"
        },
        {
          "type": "p",
          "text": "Le management de projet a longtemps été dominé par un **modèle standard** — rationnel, séquentiel, normatif — incarné par les référentiels professionnels (PMBOK en tête) : on définit, on planifie, on exécute, on contrôle. Ce modèle, issu de l'ingénierie, postule qu'un projet bien défini et bien planifié réussira pourvu qu'on en maîtrise l'exécution. Il a fait l'objet de critiques nourries en sciences de gestion. Christophe Midler, dans son étude célèbre du projet Twingo (*L'auto qui n'existait pas*, 1993), montre que le projet est aussi un processus d'**apprentissage collectif** et de transformation de l'organisation, irréductible à une simple application de procédures. Gilles Garel insiste sur la dimension **cognitive et organisationnelle** du projet, et sur les limites d'une vision purement instrumentale. D'autres travaux soulignent le caractère **politique** du projet (jeux d'acteurs, négociation des objectifs, gestion des parties prenantes) que le modèle standard tend à sous-estimer."
        },
        {
          "type": "p",
          "text": "Ces débats ne sont pas que théoriques : ils expliquent la coexistence de deux grandes familles d'approches que ce chapitre présente — l'approche **prédictive** (héritière du modèle standard, §5-6) et l'approche **agile** (réponse aux limites du modèle standard face à l'incertitude, §9). Pour le contrôleur de gestion, la leçon est qu'un projet ne se pilote pas seulement par les chiffres : les outils quantitatifs (Gantt, écarts, EVM) sont nécessaires mais insuffisants ; ils doivent s'articuler à une compréhension des dynamiques humaines et organisationnelles. C'est cette articulation entre rigueur instrumentale et intelligence des situations qui définit le bon pilotage de projet — et que l'épreuve du DSCG cherche à évaluer à travers des cas contextualisés."
        },
        {
          "type": "h3",
          "text": "2.1 Définition et caractéristiques du projet"
        },
        {
          "type": "h4",
          "text": "2.1.1 Cadre conceptuel et définitions normalisées"
        },
        {
          "type": "p",
          "text": "La définition la plus répandue est celle de l'AFNOR (norme X50-105) : un projet est une *démarche spécifique qui permet de structurer méthodiquement une réalité à venir*, entreprise pour répondre au besoin d'un client, impliquant un objectif, des actions à entreprendre avec des ressources données, dans des délais donnés. Les grands référentiels professionnels convergent autour de la même intuition tout en l'inflléchissant :"
        },
        {
          "type": "ul",
          "items": [
            "le **PMI** (*Project Management Institute*, référentiel **PMBOK**) définit le projet comme un *effort temporaire entrepris pour créer un produit, un service ou un résultat unique* ;",
            "**PRINCE2** (*PRojects IN Controlled Environments*, méthode d'origine britannique) insiste sur l'*organisation temporaire créée dans le but de livrer un ou plusieurs produits selon un cas d'affaire (business case) défini* ;",
            "la norme **ISO 21500** (lignes directrices sur le management de projet) retient un *ensemble unique de processus, constitués d'activités coordonnées et maîtrisées, entrepris pour atteindre un objectif*."
          ]
        },
        {
          "type": "p",
          "text": "Deux caractéristiques structurantes émergent de toutes ces définitions : l'**unicité** (le projet produit quelque chose de non répétitif, par opposition à l'opération récurrente) et la **temporalité** (le projet a un début et une fin déterminés, par opposition à l'activité permanente). S'y ajoutent un **objectif** spécifié (le livrable), des **ressources** limitées et un faisceau de **contraintes** — au premier rang desquelles le triptyque QCD."
        },
        {
          "type": "p",
          "text": "Au-delà de ces deux invariants, on attribue classiquement au projet d'autres traits distinctifs. Le projet est **irréversible et incertain** : il avance vers un futur non entièrement connu, et l'incertitude y est maximale au démarrage — précisément lorsque les décisions structurantes (donc les marges d'action) sont les plus grandes, mais où l'information disponible est la plus faible. C'est le paradoxe fondamental du management de projet, souvent représenté par deux courbes inverses : la **capacité d'action** décroît avec l'avancement, tandis que le **niveau de connaissance** croît. Agir tôt, c'est agir avec beaucoup de levier mais peu d'information ; agir tard, c'est agir en connaissance de cause mais avec peu de marge. Le projet est en outre **pluridisciplinaire** (il mobilise des compétences éclatées) et **soumis à une logique de rupture** plutôt que de continuité, ce qui le distingue radicalement de l'opération répétitive. Ces caractéristiques expliquent pourquoi les outils de pilotage de projet sont à la fois prévisionnels (planifier l'inconnu) et adaptatifs (corriger en cours de route)."
        },
        {
          "type": "h4",
          "text": "2.1.2 Projet, opération et programme"
        },
        {
          "type": "p",
          "text": "Il importe de distinguer le projet de notions voisines. L'**opération** (ou processus, cf. chapitre 1) est répétitive et permanente ; le projet est unique et temporaire. Le **programme** est un ensemble de projets coordonnés poursuivant un objectif commun de niveau supérieur (ex. : un programme de transformation digitale regroupant plusieurs projets). Le **portefeuille** (§11) est l'ensemble des projets et programmes qu'une organisation conduit, sélectionnés et arbitrés au regard de la stratégie."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Comparaison des définitions du projet *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Référentiel**",
            "**Origine**",
            "**Définition retenue**",
            "**Accent**",
            "**Apport pour le contrôle de gestion**"
          ],
          "rows": [
            [
              "**AFNOR X50-105**",
              "France",
              "Démarche spécifique structurant une réalité à venir, sous contrainte de ressources et de délais",
              "La **structuration méthodique** d'un besoin",
              "Cadre la planification et la budgétisation"
            ],
            [
              "**PMI / PMBOK**",
              "États-Unis",
              "Effort **temporaire** créant un produit/service/résultat **unique**",
              "Unicité + temporalité",
              "Fonde l'EVM et le pilotage par les processus de management"
            ],
            [
              "**PRINCE2**",
              "Royaume-Uni",
              "Organisation temporaire livrant des produits selon un *business case*",
              "La **justification économique** continue (*business case*)",
              "Lie le projet à sa rentabilité ; revue de continuation"
            ],
            [
              "**ISO 21500**",
              "International",
              "Ensemble unique de processus coordonnés et maîtrisés visant un objectif",
              "La **maîtrise des processus**",
              "Normalise le vocabulaire et les groupes de processus"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.2 Les catégories de projets"
        },
        {
          "type": "p",
          "text": "Les projets se déclinent en familles dont les contraintes dominantes diffèrent — ce qui oriente le choix des outils de pilotage."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — Typologie des projets *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Type de projet**",
            "**Objectif**",
            "**Exemples**",
            "**Principales contraintes**"
          ],
          "rows": [
            [
              "**Industriel**",
              "Concevoir/produire un ouvrage ou un bien complexe",
              "Construction d'usine, A380, chantier BTP, navire",
              "Délais et coûts lourds ; sécurité ; coordination de sous-traitants"
            ],
            [
              "**Informatique / SI**",
              "Développer ou déployer un système d'information",
              "ERP, application mobile, migration cloud",
              "Expression de besoin instable ; risque de dérive ; qualité logicielle (lien UE5)"
            ],
            [
              "**Organisationnel**",
              "Transformer la structure ou les processus",
              "Réorganisation, fusion, conduite du changement",
              "Résistance humaine ; accompagnement (lien 2.4)"
            ],
            [
              "**Innovation / R&D**",
              "Créer un produit ou une technologie nouvelle",
              "Nouveau médicament, prototype, brevet",
              "Forte incertitude ; risque d'échec ; financement"
            ],
            [
              "**Public**",
              "Réaliser une infrastructure ou une politique publique",
              "Ligne TGV, hôpital, programme social",
              "Réglementation ; redevabilité ; parties prenantes nombreuses"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.3 Illustrations professionnelles"
        },
        {
          "type": "p",
          "text": "La diversité des secteurs éclaire la plasticité du management de projet et la manière dont la contrainte dominante oriente les outils."
        },
        {
          "type": "p",
          "text": "Dans le **BTP et les grands travaux**, le projet est l'unité naturelle d'activité : un chantier est un projet, avec maîtrise d'ouvrage (le commanditaire), maîtrise d'œuvre (l'architecte, le bureau d'études) et entreprises de réalisation. La contrainte de délai y est cardinale — d'où l'usage historique du PERT et du chemin critique pour ordonnancer des corps d'état interdépendants (gros œuvre avant second œuvre), et des pénalités de retard contractuelles qui matérialisent le coût du délai."
        },
        {
          "type": "p",
          "text": "Dans l'**industrie aéronautique et automobile**, le projet de **développement de produit** (un nouveau modèle, un nouvel avion) mobilise des milliers d'acteurs sur plusieurs années, avec des jalons « go / no-go » stricts et une ingénierie concourante (*concurrent engineering*) qui chevauche conception et industrialisation pour réduire le *time-to-market*. Le coût de développement, amorti sur les volumes futurs, est un déterminant majeur de la rentabilité (lien avec le *target costing*, chapitre 1)."
        },
        {
          "type": "p",
          "text": "Dans les **systèmes d'information**, le besoin est souvent instable et l'expression initiale incomplète : c'est le terrain d'élection des méthodes agiles (§9). Les taux d'échec historiquement élevés des grands projets informatiques (dépassements de coûts et de délais, abandons) ont précisément motivé l'essor de l'agilité et la vigilance accrue sur le pilotage des écarts."
        },
        {
          "type": "p",
          "text": "Dans le **secteur public**, le projet (infrastructure, système d'information administratif, politique publique) se distingue par la multiplicité des parties prenantes, l'exigence de redevabilité (argent public), la réglementation des marchés publics et des horizons longs qui exposent à l'instabilité politique. Le pilotage y est autant politique que technique."
        },
        {
          "type": "p",
          "text": "Dans le **secteur associatif et l'événementiel**, enfin, le projet (festival, campagne, événement caritatif) se caractérise par une date butoir non négociable (le délai est figé : l'événement a lieu à la date prévue ou n'a pas lieu) et des ressources souvent bénévoles, ce qui déplace l'arbitrage QCD vers l'ajustement du périmètre et de la qualité."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Quelle que soit la famille, un projet exige une organisation *ad hoc* qui se superpose à la structure permanente. C'est l'objet de la gouvernance et des structures projet."
        }
      ]
    },
    {
      "id": "3-gouvernance-et-organisation-des-projets",
      "title": "3. Gouvernance et organisation des projets",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Cours 3, structures temporaires) pour les structures ; créé pour les acteurs et le PMO. Le référentiel cible « acteurs » du projet.*"
        },
        {
          "type": "h3",
          "text": "3.1 Les acteurs du projet"
        },
        {
          "type": "p",
          "text": "Le projet articule une **maîtrise d'ouvrage (MOA)** et une **maîtrise d'œuvre (MOE)**, distinction héritée du BTP et généralisée. La MOA est le commanditaire : elle exprime le besoin, finance, valide les livrables et porte la responsabilité de l'usage. La MOE conçoit et réalise la solution répondant au besoin exprimé. Entre les deux, le **chef de projet** pilote au quotidien : il planifie, coordonne, arbitre et rend compte. Il s'appuie sur une **équipe projet** pluridisciplinaire et compose avec un ensemble de **parties prenantes** (*stakeholders*) — internes (directions, salariés) et externes (clients, fournisseurs, riverains, autorités) — dont les attentes parfois divergentes doivent être identifiées et gérées (lien avec le pilotage de la performance globale et les parties prenantes, renvoi sous-partie 3.3). La gestion des parties prenantes constitue à elle seule un enjeu majeur : on les cartographie souvent selon deux axes — leur **pouvoir** (capacité à influer sur le projet) et leur **intérêt** (degré de concernement) — pour calibrer la stratégie relationnelle : informer les parties peu puissantes mais intéressées, satisfaire et impliquer étroitement les parties à la fois puissantes et intéressées, surveiller les autres. Une partie prenante puissante négligée peut, à elle seule, bloquer un projet techniquement réussi : l'histoire des grands projets d'infrastructure abandonnés sous la pression de riverains ou d'associations en témoigne. Le chef de projet est ainsi autant un coordinateur technique qu'un gestionnaire de relations et de pouvoirs."
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Rôles et responsabilités des acteurs *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Acteur**",
            "**Rôle**",
            "**Responsabilités clés**",
            "**Redevabilité**"
          ],
          "rows": [
            [
              "**Maîtrise d'ouvrage (MOA)**",
              "Commanditaire / propriétaire",
              "Exprimer le besoin, financer, valider les livrables, décider des jalons",
              "Devant la direction / le client final"
            ],
            [
              "**Maîtrise d'œuvre (MOE)**",
              "Concepteur-réalisateur",
              "Concevoir la solution, organiser la réalisation, garantir la qualité technique",
              "Devant la MOA"
            ],
            [
              "**Chef de projet**",
              "Pilote opérationnel",
              "Planifier, coordonner, suivre coûts/délais, arbitrer, reporter",
              "Devant la MOA et la MOE"
            ],
            [
              "**Équipe projet**",
              "Réalisation",
              "Exécuter les lots de travaux, alerter sur les risques",
              "Devant le chef de projet"
            ],
            [
              "**Parties prenantes**",
              "Influence / intérêt",
              "Exprimer attentes et contraintes ; soutenir ou freiner",
              "Variable ; à cartographier"
            ],
            [
              "**Comité de pilotage**",
              "Gouvernance",
              "Décider aux jalons, allouer les ressources, trancher les arbitrages",
              "Instance de décision"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.2 Les structures organisationnelles de projet"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Cours 3).*"
        },
        {
          "type": "p",
          "text": "L'ancien cours INTEC recense les solutions expérimentées pour faire coexister structure permanente et projet, que l'on présente classiquement sur un continuum d'autonomie croissante du projet."
        },
        {
          "type": "ul",
          "items": [
            "**Structure fonctionnelle (sans structure projet formelle).** Les membres de l'équipe restent rattachés à leurs directions et participent au projet sans structure dédiée (exemple historique : les cercles de qualité). Le projet reste subordonné aux logiques métiers. *Avantage* : préserve l'expertise et la flexibilité ; *limite* : le chef de projet sans autorité hiérarchique peine à mobiliser les ressources, le projet est souvent sacrifié aux priorités fonctionnelles.",
            "**Structure matricielle.** L'une des dimensions de la matrice est constituée par les projets, l'autre par les fonctions. Chaque collaborateur dépend à la fois d'un responsable fonctionnel et d'un chef de projet (double rattachement). *Avantage* : équilibre expertise et coordination transversale ; *limite* : conflits d'autorité et de priorité, ambiguïté pour les collaborateurs. On distingue matrice *faible* (le métier domine), *équilibrée* et *forte* (le projet domine).",
            "**Structure par projet (« projet sorti »).** L'équipe est constituée en division autonome disposant en propre de toutes les ressources nécessaires. Réservée aux projets hautement stratégiques. *Avantage* : le directeur de projet ne négocie plus ses ressources, plein engagement de l'équipe ; *limite* : coûteuse, redondance de ressources, et — l'ancien cours le souligne — pose la **question du statut des membres au terme du projet**.",
            "**Le PMO (*Project Management Office*).** Cellule transverse qui standardise les méthodes, outille les chefs de projet, consolide le reporting multi-projets et appuie la gouvernance du portefeuille. Il professionnalise la pratique sans porter lui-même la réalisation."
          ]
        },
        {
          "type": "p",
          "text": "Cette logique rejoint la notion d'**adhocratie** de Mintzberg (étudiée au chapitre Organisation) : configuration de groupes *ad hoc* constitués pour mener à bien un projet, adaptée aux environnements complexes et innovants (l'ancien cours cite le tunnel sous la Manche, le projet Apollo)."
        },
        {
          "type": "h4",
          "text": "Schéma 1 — Les structures organisationnelles de projet *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/01.png",
          "alt": "Schéma 1 — Les structures organisationnelles de projet *(obligatoire)*",
          "width": 2200,
          "height": 1672
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Avantages et limites des structures *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Structure**",
            "**Autorité du chef de projet**",
            "**Avantages**",
            "**Limites**",
            "**Contexte adapté**"
          ],
          "rows": [
            [
              "**Fonctionnelle**",
              "Faible (coordination)",
              "Expertise préservée ; flexibilité ; coût faible",
              "Projet sacrifié aux priorités métiers ; lenteur",
              "Petits projets internes"
            ],
            [
              "**Matricielle**",
              "Partagée",
              "Équilibre expertise/transversalité ; mutualisation",
              "Double autorité ; conflits de priorité",
              "Multi-projets, ressources rares"
            ],
            [
              "**Par projet (sortie)**",
              "Forte (hiérarchique)",
              "Engagement total ; réactivité ; ressources dédiées",
              "Coûteuse ; redondances ; reclassement en fin de projet",
              "Projets stratégiques majeurs"
            ],
            [
              "**PMO (transverse)**",
              "Soutien méthodologique",
              "Standardise, outille, consolide le portefeuille",
              "Risque de bureaucratie ; coût de structure",
              "Organisations « projectifiées »"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Quelle que soit la structure retenue, tout projet suit une trajectoire temporelle balisée : son cycle de vie."
        }
      ]
    },
    {
      "id": "4-le-cycle-de-vie-du-projet",
      "title": "4. Le cycle de vie du projet",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Le référentiel cible « cycle de vie et phases du projet (conception, exécution et post-mortem) ».*"
        },
        {
          "type": "h3",
          "text": "4.1 Les phases du projet"
        },
        {
          "type": "p",
          "text": "Le référentiel retient une trilogie — **conception, exécution,*post-mortem*** — que l'on peut détailler selon les cinq groupes de processus normalisés (PMI / ISO 21500), utiles comme grille d'analyse."
        },
        {
          "type": "ul",
          "items": [
            "**Initialisation / conception.** On formalise le besoin, on justifie le projet (*business case*), on en fixe le périmètre, les objectifs QCD et la gouvernance. Livrable clé : la **charte de projet** et le **cahier des charges**.",
            "**Planification.** On décompose le travail (WBS, §5.1), on ordonnance les tâches (Gantt, chemin critique, §5.2), on budgète (§6.1), on planifie les ressources et les risques. Livrable : le **plan de projet** (référence, ou *baseline*, contre laquelle on mesurera les écarts).",
            "**Exécution.** On réalise les lots de travaux et on produit les livrables.",
            "**Contrôle / suivi.** Mené en parallèle de l'exécution : on mesure l'avancement physique et financier, on calcule les écarts (§6.2-6.3), on pilote les risques, on tient les **revues d'avancement** et le tableau de bord (§8).",
            "**Clôture /*post-mortem*. On réceptionne les livrables, on solde les contrats, et surtout on conduit le retour d'expérience (*lessons learned*) — phase trop souvent négligée alors qu'elle capitalise les apprentissages pour les projets futurs."
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Cycle de vie du projet et effort *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/02.png",
          "alt": "Schéma 2 — Cycle de vie du projet et effort *(obligatoire)*",
          "width": 2068,
          "height": 1034
        },
        {
          "type": "h3",
          "text": "4.2 Les livrables"
        },
        {
          "type": "p",
          "text": "Le projet jalonne sa trajectoire de **livrables** : le **cahier des charges** (expression formalisée du besoin et des exigences), la **charte de projet** (acte de naissance officiel mandatant le chef de projet et cadrant le projet), les **livrables intermédiaires** (prototypes, maquettes, documents de conception validés en revue) et les **livrables finaux** (le produit ou service achevé et réceptionné). Les **jalons** (*milestones*) sont des points de contrôle de durée nulle marquant l'achèvement d'une étape et conditionnant — en gouvernance « go / no-go » — la poursuite du projet."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Pour piloter cette trajectoire, il faut d'abord la rendre planifiable : décomposer, ordonnancer, dater."
        }
      ]
    },
    {
      "id": "5-la-planification-des-projets",
      "title": "5. La planification des projets",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Cœur du référentiel : « diagramme de Gantt : processus, tâches, durées, marges de temps, jalons, ressources, livrables, chemin critique ». Attendu explicite : construire un diagramme à partir de données brutes.*"
        },
        {
          "type": "h3",
          "text": "5.1 La décomposition du projet (WBS)"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "*Le WBS est présenté comme outil-méthode amont, ouverture professionnelle au service du Gantt exigé par le référentiel.*"
        },
        {
          "type": "p",
          "text": "Avant d'ordonnancer, il faut **décomposer**. Le **WBS** (*Work Breakdown Structure*, ou organigramme des tâches) découpe le projet, du global au détail, en éléments de plus en plus fins : le projet se subdivise en **sous-projets / phases**, eux-mêmes en **lots de travaux** (*work packages*), eux-mêmes en **tâches** élémentaires. La règle de bonne décomposition est la règle des **100 %** : la somme des éléments d'un niveau doit couvrir exactement le périmètre du niveau supérieur — ni plus (pas de travail hors périmètre), ni moins (pas d'oubli). Le plus petit niveau, le lot de travaux, est l'unité à laquelle on rattachera une durée, un responsable, un coût et un risque : c'est le pivot qui relie planification temporelle (§5.2) et budgétisation (§6)."
        },
        {
          "type": "h4",
          "text": "Schéma 3 — Exemple de WBS (lancement d'une application mobile) *(illustration obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/03.png",
          "alt": "Schéma 3 — Exemple de WBS (lancement d'une application mobile) *(illustration obligatoire)*",
          "width": 2200,
          "height": 1034
        },
        {
          "type": "h3",
          "text": "5.2 La planification temporelle"
        },
        {
          "type": "h4",
          "text": "5.2.1 Du réseau au chemin critique"
        },
        {
          "type": "p",
          "text": "Une fois les tâches identifiées, on établit leurs **relations d'antériorité** (quelle tâche doit précéder quelle autre) et leurs **durées**. On en déduit un **réseau** (PERT — *Program Evaluation and Review Technique*, ou méthode des potentiels MPM) qui permet de calculer, par un double parcours :"
        },
        {
          "type": "ul",
          "items": [
            "les **dates au plus tôt** (parcours « aller », de gauche à droite : une tâche commence au plus tôt quand toutes ses antériorités sont finies) ;",
            "les **dates au plus tard** (parcours « retour », de droite à gauche : la dernière date à laquelle une tâche peut commencer sans retarder la fin du projet)."
          ]
        },
        {
          "type": "p",
          "text": "La différence entre date au plus tard et date au plus tôt d'une tâche est sa **marge totale**. Le **chemin critique** est la séquence de tâches à **marge totale nulle** : tout retard sur l'une d'elles retarde mécaniquement la fin du projet. C'est exactement ce qu'illustrait l'ancien cours pour le BTP : « une panne de bulldozer sur le chemin critique » fait prendre du retard à l'ensemble du chantier. Ce résultat a une portée managériale considérable : il hiérarchise l'attention. Sur un projet de plusieurs centaines de tâches, le chef de projet ne peut surveiller chaque activité avec la même intensité. Le chemin critique lui indique **où** porter l'effort : ce sont les tâches critiques qui, en cas de dérive, propagent le retard ; les tâches non critiques disposent d'un coussin (la marge) qui absorbe les aléas mineurs. Cette logique fonde aussi les techniques d'**accélération** d'un projet : pour réduire la durée totale, il est inutile (et coûteux) d'accélérer une tâche non critique — cela ne fait qu'augmenter sa marge ; il faut agir sur le chemin critique, soit en y ajoutant des ressources (*crashing*, avec un arbitrage coût/délai car l'accélération a un coût marginal croissant), soit en chevauchant des tâches normalement séquentielles (*fast tracking*, au prix d'un risque accru). On retrouve ici, transposée au temps, la logique du goulot d'étranglement du chapitre 1 : c'est la contrainte qui commande, et agir ailleurs est un mirage."
        },
        {
          "type": "p",
          "text": "On distingue deux marges. La **marge totale (MT)** d'une tâche est le retard maximal qu'elle peut prendre sans repousser la fin du projet. La **marge libre (ML)** est le retard qu'elle peut prendre sans décaler la date au plus tôt de ses *successeurs* (ML ≤ MT). Les tâches du chemin critique ont MT = ML = 0."
        },
        {
          "type": "h4",
          "text": "5.2.2 Exemple chiffré complet — planification d'un projet *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Soit un projet de déploiement d'un site e-commerce, décomposé en 7 tâches :"
        },
        {
          "type": "table",
          "headers": [
            "**Tâche**",
            "**Désignation**",
            "**Durée (j)**",
            "**Antériorités**"
          ],
          "rows": [
            [
              "A",
              "Cadrage / cahier des charges",
              "5",
              "—"
            ],
            [
              "B",
              "Conception graphique (maquettes)",
              "8",
              "A"
            ],
            [
              "C",
              "Développement back-end",
              "12",
              "A"
            ],
            [
              "D",
              "Développement front-end",
              "10",
              "B"
            ],
            [
              "E",
              "Intégration des contenus",
              "6",
              "C, D"
            ],
            [
              "F",
              "Recette / tests",
              "5",
              "E"
            ],
            [
              "G",
              "Mise en production",
              "2",
              "F"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Calcul des dates au plus tôt (DTO) et au plus tard (DTA)** (le projet démarre à t = 0) :"
        },
        {
          "type": "table",
          "headers": [
            "**Tâche**",
            "**Durée**",
            "**DTO début**",
            "**DTO fin**",
            "**DTA début**",
            "**DTA fin**",
            "**Marge totale**",
            "**Critique ?**"
          ],
          "rows": [
            [
              "A",
              "5",
              "0",
              "5",
              "0",
              "5",
              "0",
              "**Oui**"
            ],
            [
              "B",
              "8",
              "5",
              "13",
              "7",
              "15",
              "2",
              "Non"
            ],
            [
              "C",
              "12",
              "5",
              "17",
              "5",
              "17",
              "0",
              "**Oui**"
            ],
            [
              "D",
              "10",
              "13",
              "23",
              "15",
              "25",
              "2",
              "Non"
            ],
            [
              "E",
              "6",
              "23*",
              "29",
              "23",
              "29",
              "0",
              "**Oui**"
            ],
            [
              "F",
              "5",
              "29",
              "34",
              "29",
              "34",
              "0",
              "**Oui**"
            ],
            [
              "G",
              "2",
              "34",
              "36",
              "34",
              "36",
              "0",
              "**Oui**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*E ne peut commencer qu'après C (fin 17) et** D (fin 23) : on retient le maximum, soit 23."
        },
        {
          "type": "p",
          "text": "**Lecture.** La durée minimale du projet est de **36 jours**. Le **chemin critique** est **A → C → E → F → G** (marge nulle). Les tâches B et D disposent d'une marge totale de 2 jours : un retard de 2 jours sur la conception graphique reste absorbable, un retard de 3 jours repousse la livraison. **Préconisation type DSCG** : concentrer la surveillance managériale et les ressources de secours sur le chemin critique ; les marges de B et D peuvent servir à lisser la charge ou parer à un aléa sur C."
        },
        {
          "type": "h4",
          "text": "5.2.4 Approfondissement — l'estimation probabiliste des durées (PERT)"
        },
        {
          "type": "p",
          "text": "La méthode PERT, dans sa version d'origine, ne se contente pas de durées déterministes : elle reconnaît l'incertitude en demandant pour chaque tâche **trois estimations** — optimiste (a), la plus probable (m) et pessimiste (b) — et en calculant une **durée attendue** par moyenne pondérée : te = (a + 4m + b) / 6. La dispersion se mesure par l'écart-type σ = (b − a) / 6. Cette approche, qui suppose une distribution de type bêta, permet d'associer à la durée du chemin critique une probabilité d'achèvement à une date donnée, en sommant les variances des tâches critiques."
        },
        {
          "type": "p",
          "text": "*Exemple.* Soit une tâche estimée à a = 4 j (optimiste), m = 6 j (probable), b = 14 j (pessimiste). La durée attendue est te = (4 + 24 + 14) / 6 = **7 jours**, et non 6 : l'asymétrie vers le pessimiste « pénalise » l'estimation, ce qui corrige précisément le biais d'optimisme évoqué plus haut. L'écart-type, σ = (14 − 4) / 6 ≈ **1,67 j**, quantifie l'incertitude de cette tâche. Sur un chemin critique de plusieurs tâches, le cumul des variances permet d'affirmer, par exemple, qu'il y a 90 % de chances d'achever le projet sous tel délai — information autrement plus riche qu'une date unique. Pour le DSCG, retenir le principe et la formule de la durée attendue suffit généralement ; l'essentiel est de comprendre que **planifier, c'est gérer de l'incertitude, pas afficher une fausse précision.**"
        },
        {
          "type": "h4",
          "text": "5.2.5 Approfondissement — l'arbitrage coût-délai (compression du planning)"
        },
        {
          "type": "p",
          "text": "Réduire la durée d'un projet a un coût. La technique du *crashing* consiste à raccourcir les tâches du chemin critique en y affectant des ressources supplémentaires (heures supplémentaires, intérimaires, équipements), en privilégiant celles dont le **coût marginal d'accélération** (coût pour gagner un jour) est le plus faible. C'est une application directe de l'arbitrage QCD et du raisonnement marginal du chapitre 1."
        },
        {
          "type": "p",
          "text": "*Exemple.* Supposons que l'on doive gagner 2 jours sur le projet e-commerce (chemin critique A → C → E → F → G). Trois tâches critiques sont compressibles : C (gagner jusqu'à 3 j à 800 €/j), F (jusqu'à 2 j à 500 €/j), G (jusqu'à 1 j à 1 200 €/j). Pour gagner 2 jours au moindre coût, on accélère d'abord F (la moins chère : 2 × 500 = **1 000 €**) plutôt que C (1 600 €) ou G. Coût total de l'accélération : **1 000 €**, contre une économie de pénalités de retard ou un gain de *time-to-market* à mettre en regard. La règle : **toujours compresser d'abord la tâche critique la moins chère à accélérer, et s'arrêter dès que le coût marginal d'accélération dépasse le bénéfice du jour gagné** — au-delà, accélérer détruit de la valeur. Attention : en compressant le chemin critique, on peut rendre critique un autre chemin (les marges des chemins parallèles se réduisent), ce qui oblige à recalculer le réseau après chaque compression."
        },
        {
          "type": "h4",
          "text": "5.2.3 Le diagramme de Gantt"
        },
        {
          "type": "p",
          "text": "Le **diagramme de Gantt** (Henry Gantt, vers 1910) traduit cet ordonnancement en une représentation à barres sur un axe temporel : chaque tâche est une barre dont la longueur est proportionnelle à sa durée, positionnée à sa date de début. Il visualise d'un coup d'œil l'enchaînement, les **chevauchements**, les **jalons** (losanges), les **marges** (souvent en pointillés) et l'affectation des **ressources**. C'est l'outil de communication et de suivi par excellence — et l'outil nommément exigé par le référentiel. On y reporte le **chemin critique** (barres mises en évidence) pour focaliser l'attention."
        },
        {
          "type": "h4",
          "text": "Graphique 4 — Diagramme de Gantt du projet e-commerce *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/04.png",
          "alt": "Graphique 4 — Diagramme de Gantt du projet e-commerce *(obligatoire)*",
          "width": 2156,
          "height": 1012
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** La planification dit *quand* et *avec quoi*. Reste à dire *combien* : c'est le pilotage économique et financier."
        }
      ]
    },
    {
      "id": "6-le-pilotage-economique-et-financier-du-projet",
      "title": "6. Le pilotage économique et financier du projet",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Cœur du référentiel : « plan de financement (budget) du projet » ; « outils de pilotage des coûts : courbe en S, suivi budgétaire (CBTP, CRTE, CBTE), calcul et analyse des écarts ».*"
        },
        {
          "type": "h3",
          "text": "6.1 La budgétisation et le plan de financement"
        },
        {
          "type": "h4",
          "text": "6.1.1 Estimer les coûts"
        },
        {
          "type": "p",
          "text": "Le budget de projet agrège l'estimation des coûts de chaque lot de travaux. On distingue les **coûts directs** (directement imputables au projet : main-d'œuvre projet, matériels, prestations) des **coûts indirects** (quote-part de frais de structure). À l'estimation des coûts identifiés s'ajoute une **réserve pour aléas** (*contingency*), provision destinée à couvrir les risques identifiés (cf. §7), distincte de la réserve de management couvrant les risques non identifiés. Les méthodes d'estimation vont de l'**analogique** (par comparaison à un projet passé), au **paramétrique** (par ratios : coût au m², coût par jour-homme), jusqu'à l'estimation **ascendante** (*bottom-up*, par sommation des lots) — la plus fiable mais la plus tardive. La qualité de l'estimation conditionne tout le pilotage ultérieur : un budget initial irréaliste rend les écarts ininterprétables (dérive-t-on, ou l'estimation était-elle fausse ?). Or l'estimation est systématiquement biaisée dans le sens de l'optimisme — phénomène que Kahneman nomme le *planning fallacy* (illusion de planification) : on sous-estime durées et coûts, et l'on néglige les aléas. Deux parades : raisonner par **fourchettes** plutôt que par valeurs ponctuelles (estimation à trois points : optimiste, probable, pessimiste, comme dans le PERT probabiliste), et **provisionner** explicitement l'incertitude par la réserve pour aléas. C'est précisément le rôle du contrôleur de gestion que d'introduire ce réalisme prudentiel face à l'enthousiasme des porteurs de projet."
        },
        {
          "type": "h4",
          "text": "6.1.2 Le plan de financement"
        },
        {
          "type": "p",
          "text": "Concevoir le **plan de financement** — première compétence officielle de la sous-partie — consiste à confronter dans le temps les **besoins** (décaissements échelonnés selon l'avancement) et les **ressources** (apports, subventions, emprunts, autofinancement, recettes éventuelles). Pour un projet d'investissement, on raisonne souvent en **flux de trésorerie actualisés** : le projet n'est financièrement justifié que si la somme actualisée de ses flux (VAN positive) est favorable et si la trésorerie reste équilibrée à chaque période."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Construction d'un budget de projet *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Poste**",
            "**Nature**",
            "**Mois 1**",
            "**Mois 2**",
            "**Mois 3**",
            "**Total**"
          ],
          "rows": [
            [
              "Main-d'œuvre projet (jours-homme)",
              "Direct",
              "18 000",
              "24 000",
              "12 000",
              "54 000"
            ],
            [
              "Prestations externes (dév., design)",
              "Direct",
              "8 000",
              "15 000",
              "5 000",
              "28 000"
            ],
            [
              "Matériels / licences",
              "Direct",
              "6 000",
              "2 000",
              "1 000",
              "9 000"
            ],
            [
              "Frais de structure (quote-part)",
              "Indirect",
              "3 000",
              "3 000",
              "3 000",
              "9 000"
            ],
            [
              "**Sous-total coûts**",
              "",
              "**35 000**",
              "**44 000**",
              "**21 000**",
              "**100 000**"
            ],
            [
              "Réserve pour aléas (8 %)",
              "Provision",
              "",
              "",
              "",
              "8 000"
            ],
            [
              "**Budget total (BAC)**",
              "",
              "",
              "",
              "",
              "**108 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le **budget à l'achèvement** (BAC, *Budget At Completion*) est le coût total prévu de référence — pivot du suivi des écarts."
        },
        {
          "type": "h4",
          "text": "6.1.3 Apprécier la rentabilité du projet d'investissement"
        },
        {
          "type": "p",
          "text": "Concevoir le plan de financement suppose d'abord de s'assurer que le projet **crée de la valeur**. Pour un projet d'investissement, le critère central est la **valeur actuelle nette (VAN)** : somme des flux de trésorerie futurs (recettes nettes attendues du projet) actualisés au coût du capital, diminuée de l'investissement initial. Une VAN positive signifie que le projet rapporte plus que son coût de financement et crée donc de la valeur ; une VAN négative qu'il en détruit. Le **taux de rentabilité interne (TRI)** est le taux d'actualisation qui annule la VAN : le projet est acceptable si le TRI excède le coût du capital exigé. Le **délai de récupération** (*payback*) complète l'analyse en indiquant en combien de temps l'investissement est récupéré — critère de liquidité utile sous contrainte de trésorerie."
        },
        {
          "type": "p",
          "text": "*Exemple.* Un projet exige un investissement initial de **100 000 €** et génère des flux nets attendus de 35 000 €, 45 000 € et 50 000 € sur trois ans. Au coût du capital de 10 %, la VAN se calcule en actualisant chaque flux : 35 000 / 1,10 + 45 000 / 1,10² + 50 000 / 1,10³ − 100 000 ≈ 31 818 + 37 190 + 37 566 − 100 000 ≈ **+ 6 574 €**. La VAN étant positive, le projet est créateur de valeur et son financement justifié ; le TRI, supérieur à 10 %, le confirme. Cette appréciation économique conditionne la décision d'engagement au jalon d'initialisation et fonde le *business case* (logique PRINCE2). Elle se relie à la décision d'arrêt (§11) : en cours de projet, c'est la VAN du **reste à faire** — et non les sommes déjà engagées — qui doit commander la poursuite ou l'abandon."
        },
        {
          "type": "p",
          "text": "Le plan de financement proprement dit échelonne ensuite, période par période, les **décaissements** (selon la courbe en S des dépenses) et les **encaissements / ressources de financement** (apports, emprunts, subventions, recettes), en veillant à ce que la trésorerie cumulée reste positive à chaque échéance. Un projet économiquement rentable mais mal financé dans le temps peut échouer sur une simple rupture de trésorerie — d'où l'importance de cet échéancier, que le référentiel place au cœur de la première compétence de la sous-partie."
        },
        {
          "type": "h3",
          "text": "6.2 Le contrôle des coûts et le suivi budgétaire"
        },
        {
          "type": "h4",
          "text": "6.2.1 Les trois grandeurs fondamentales (CBTP, CBTE, CRTE)"
        },
        {
          "type": "p",
          "text": "Le suivi budgétaire d'un projet repose sur **trois grandeurs** mesurées à une date donnée, que le référentiel nomme explicitement et qui correspondent aux trois piliers de l'EVM :"
        },
        {
          "type": "table",
          "headers": [
            "**Sigle français**",
            "**Définition**",
            "**Sigle EVM (anglais)**"
          ],
          "rows": [
            [
              "**CBTP** — Coût Budgété du Travail **Prévu**",
              "Ce que l'on *prévoyait* d'avoir dépensé à cette date (budget planifié)",
              "**PV** — *Planned Value*"
            ],
            [
              "**CBTE** — Coût Budgété du Travail **Effectué**",
              "Valeur budgétaire du travail *réellement réalisé* (avancement physique valorisé au budget)",
              "**EV** — *Earned Value* (valeur acquise)"
            ],
            [
              "**CRTE** — Coût Réel du Travail **Effectué**",
              "Ce que le travail réalisé a *réellement coûté*",
              "**AC** — *Actual Cost*"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La grandeur centrale et la plus subtile est le **CBTE / valeur acquise** : elle valorise l'**avancement physique** au coût budgété. C'est elle qui permet de répondre à la vraie question du pilotage : « en ai-je fait pour mon argent ? ». Comparer le seul coût réel au budget prévu (sans tenir compte de l'avancement) est l'erreur classique : un projet peut sembler « sous budget » simplement parce qu'il est en retard."
        },
        {
          "type": "h4",
          "text": "6.2.2 Les deux écarts fondamentaux"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Formules clés.** - **Écart de coût** : EC = CBTE − CRTE ( = EV − AC ). Positif → on dépense moins que la valeur produite (favorable). - **Écart de délai (planning)** : ED = CBTE − CBTP ( = EV − PV ). Positif → on a produit plus que prévu à cette date (avance)."
        },
        {
          "type": "h4",
          "text": "6.2.3 La courbe en S"
        },
        {
          "type": "p",
          "text": "Reportées dans le temps, ces grandeurs (notamment le CBTP cumulé) dessinent une **courbe en S** : les dépenses cumulées progressent lentement au démarrage (montée en charge), s'accélèrent en phase d'exécution, puis ralentissent à l'approche de la clôture — d'où la forme en « S » caractéristique. Superposer les courbes CBTP, CBTE et CRTE rend les écarts immédiatement visibles. La lecture graphique est immédiate et fait la force de l'outil : si la courbe du CRTE (coût réel) passe **au-dessus** de celle du CBTE (valeur acquise), le projet dépense plus que ce qu'il produit — dérive de coût ; si la courbe du CBTE passe **en dessous** de celle du CBTP (budget prévu), le projet produit moins que prévu à la date — retard. L'écartement vertical entre les courbes matérialise l'ampleur des écarts, et leur évolution dans le temps indique si la situation se dégrade ou se redresse. C'est cette capacité à révéler une tendance — et non un simple point — qui distingue le suivi par la valeur acquise d'un banal pointage budgétaire."
        },
        {
          "type": "h4",
          "text": "Graphique 5 — Courbe en S : CBTP, CBTE, CRTE *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/05.png",
          "alt": "Graphique 5 — Courbe en S : CBTP, CBTE, CRTE *(obligatoire)*",
          "width": 1804,
          "height": 1100
        },
        {
          "type": "h4",
          "text": "Exemple chiffré complet — analyse des écarts *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Reprenons le projet à **108 000 €** de budget (BAC). À la fin du **mois 2**, point d'avancement :"
        },
        {
          "type": "ul",
          "items": [
            "**CBTP** (budget prévu fin M2) = 35 000 + 44 000 = **79 000 €**.",
            "Avancement physique constaté = **65 %** du projet → **CBTE** = 65 % × 108 000 = **70 200 €**.",
            "Dépenses réelles engagées = **CRTE** = **77 000 €**."
          ]
        },
        {
          "type": "p",
          "text": "Calcul :"
        },
        {
          "type": "ul",
          "items": [
            "**Écart de coût** EC = CBTE − CRTE = 70 200 − 77 000 = **− 6 800 €** (défavorable : on a dépensé 77 000 € pour une valeur produite de 70 200 €).",
            "**Écart de délai** ED = CBTE − CBTP = 70 200 − 79 000 = **− 8 800 €** (défavorable : on aurait dû avoir produit pour 79 000 €, on n'en a produit que 70 200 € → **retard**)."
          ]
        },
        {
          "type": "p",
          "text": "**Diagnostic** : le projet est à la fois **en dépassement de coût** et **en retard**. Préconisations attendues : analyser l'origine (sous-estimation ? aléa technique ? dérive de périmètre ?), mobiliser la réserve pour aléas, replanifier les tâches du chemin critique, et alerter le comité de pilotage."
        },
        {
          "type": "h3",
          "text": "6.3 L'Earned Value Management (EVM) et les indices"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*L'EVM formalise le suivi CBTP/CBTE/CRTE par des indices et des prévisions à terminaison. Présenté comme prolongement, vocabulaire français privilégié.*"
        },
        {
          "type": "h4",
          "text": "Tableau 6 — Les indicateurs de l'EVM *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule**",
            "**Lecture**",
            "**Seuil**"
          ],
          "rows": [
            [
              "**CPI** (indice de performance des coûts)",
              "CBTE / CRTE (EV/AC)",
              "Efficience de la dépense",
              "> 1 favorable ; < 1 défavorable"
            ],
            [
              "**SPI** (indice de performance des délais)",
              "CBTE / CBTP (EV/PV)",
              "Respect du planning",
              "> 1 en avance ; < 1 en retard"
            ],
            [
              "**EAC** (coût final estimé)",
              "BAC / CPI",
              "Coût total réestimé à terminaison",
              "À comparer au BAC"
            ],
            [
              "**ETC** (reste à faire estimé)",
              "EAC − CRTE",
              "Coût restant prévisionnel",
              "—"
            ],
            [
              "**VAC** (écart à terminaison)",
              "BAC − EAC",
              "Dépassement final anticipé",
              "< 0 → dépassement"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Exemple complet — calcul et interprétation EVM *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Avec les chiffres précédents (BAC = 108 000 ; CBTE = 70 200 ; CRTE = 77 000 ; CBTP = 79 000) :"
        },
        {
          "type": "ul",
          "items": [
            "**CPI** = 70 200 / 77 000 = **0,91** → on obtient 0,91 € de valeur par euro dépensé : **dérive de coût**.",
            "**SPI** = 70 200 / 79 000 = **0,89** → on réalise 89 % de ce qui était planifié : **retard**.",
            "**EAC** = 108 000 / 0,91 = **≈ 118 700 €** → si la tendance de coût se poursuit, le projet coûtera environ 118 700 €.",
            "**VAC** = 108 000 − 118 700 = **− 10 700 €** → dépassement final anticipé d'environ 10 700 € (la réserve de 8 000 € ne suffirait pas : décision d'arbitrage requise)."
          ]
        },
        {
          "type": "p",
          "text": "**Lecture managériale.** CPI et SPI tous deux < 1 signalent un projet en difficulté sur les deux fronts. L'EAC transforme un constat en **prévision** : c'est l'apport décisif de l'EVM, qui permet d'alerter *avant* que le dépassement ne soit consommé et de décider (réduire le périmètre, renforcer les moyens, renégocier le délai)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Coûts et délais dérivent rarement par hasard : ils sont la matérialisation de risques. D'où la nécessité d'une gestion explicite des risques projet."
        }
      ]
    },
    {
      "id": "7-la-gestion-des-risques-projet",
      "title": "7. La gestion des risques projet",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé / complété. Le référentiel cible « risques du projet ». Lien explicite avec la gestion des risques (sous-partie 2.5) et l'analyse des dysfonctionnements (2.1).*"
        },
        {
          "type": "h3",
          "text": "7.1 L'identification des risques"
        },
        {
          "type": "p",
          "text": "Le risque projet est un événement incertain qui, s'il survient, affecte les objectifs QCD. L'incertitude étant maximale en début de projet (où les marges de manœuvre sont les plus grandes) et le coût de correction croissant avec l'avancement, l'identification doit être **précoce et continue**. On catégorise classiquement :"
        },
        {
          "type": "ul",
          "items": [
            "**risques techniques** : faisabilité, complexité, immaturité technologique, défauts de qualité ;",
            "**risques financiers** : dérive des coûts, financement insuffisant, variation des taux ou des changes ;",
            "**risques humains / organisationnels** : indisponibilité de compétences, turnover, conflits, résistance au changement (lien 2.4) ;",
            "**risques externes / juridiques** : réglementation, contentieux, défaillance d'un sous-traitant, aléas de marché ;",
            "**risques de management** : périmètre mal défini, dérive du périmètre (*scope creep*), planning irréaliste."
          ]
        },
        {
          "type": "h3",
          "text": "7.2 L'analyse et le traitement des risques"
        },
        {
          "type": "p",
          "text": "Chaque risque s'évalue selon deux dimensions : sa **probabilité** d'occurrence et son **impact** (gravité des conséquences). Leur produit définit la **criticité** : Criticité = Probabilité × Impact. La criticité hiérarchise les risques et concentre l'effort sur les plus menaçants. Quatre **stratégies de réponse** sont disponibles :"
        },
        {
          "type": "ul",
          "items": [
            "**Éviter** : supprimer la cause (renoncer à une option technique risquée, modifier le périmètre).",
            "**Réduire (atténuer)** : abaisser la probabilité ou l'impact (tests, prototypage, formation, redondance).",
            "**Transférer** : faire porter le risque par un tiers (assurance, clause contractuelle, sous-traitance avec pénalités).",
            "**Accepter** : assumer le risque (avec ou sans provision / réserve pour aléas), lorsque le coût de traitement excède l'enjeu."
          ]
        },
        {
          "type": "p",
          "text": "Le suivi s'organise dans un **registre des risques** (description, criticité, stratégie, responsable, plan d'action) réexaminé à chaque revue d'avancement. Deux principes affinent cette gestion. D'abord, la distinction entre risque **négatif** (menace) et risque **positif** (opportunité) : un projet peut aussi être traversé d'événements favorables que l'on cherchera, symétriquement, à exploiter, partager ou améliorer. Ensuite, la notion de **risque résiduel** : après traitement, un risque n'est jamais totalement annulé ; il subsiste une exposition résiduelle qu'il faut accepter en connaissance de cause et provisionner. Enfin, la gestion des risques projet s'articule avec la gestion globale des risques de l'organisation (référentiels COSO et ISO 31000, étudiés en sous-partie 2.5) : un risque projet majeur peut devenir un risque d'entreprise, et inversement le contexte de risque de l'organisation borne l'appétence au risque admissible sur chaque projet."
        },
        {
          "type": "h4",
          "text": "Matrice 6 — Cartographie des risques projet (probabilité × impact) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/06.png",
          "alt": "Matrice 6 — Cartographie des risques projet (probabilité × impact) *(obligatoire)*",
          "width": 1584,
          "height": 1232
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Planification, coûts et risques convergent vers un même besoin : un dispositif de mesure et de décision. C'est le rôle du contrôle de gestion de projet."
        }
      ]
    },
    {
      "id": "8-le-role-du-controle-de-gestion-dans-les-projets",
      "title": "8. Le rôle du contrôle de gestion dans les projets",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Le référentiel cible « revues d'avancement », « tableau de bord du projet et reporting ».*"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion de projet ne se confond pas avec le contrôle de gestion par centres de responsabilité : son objet est temporaire, transversal et orienté vers un livrable unique. Sa fonction est d'instrumenter le pilotage à chaque **revue d'avancement** : consolider l'information physique (avancement des tâches), temporelle (respect du planning) et financière (CBTP/CBTE/CRTE), calculer les écarts et les indices (CPI, SPI), réestimer le coût à terminaison (EAC), et restituer le tout dans un **tableau de bord** synthétique et un **reporting** adapté à chaque destinataire (équipe, chef de projet, comité de pilotage, direction). Il éclaire la décision : faut-il renforcer les moyens, replanifier, réduire le périmètre, ou — décision la plus difficile — arrêter le projet (lien avec les coûts irrécupérables vus au chapitre 1 : un projet déjà coûteux ne doit pas être poursuivi au seul motif des sommes engagées)."
        },
        {
          "type": "h4",
          "text": "8.1 L'approche managériale : pourquoi, pour qui, comment ?"
        },
        {
          "type": "p",
          "text": "Le tableau de bord de projet n'a de valeur que rapporté à des questions managériales précises. **Pourquoi** piloter ? Pour détecter tôt les dérives, alors qu'il est encore possible d'agir, et pour fonder les décisions d'arbitrage sur des faits plutôt que sur des impressions. **Pour qui** ? Le reporting se décline par destinataire : l'équipe projet a besoin d'un suivi opérationnel fin (avancement des tâches, points de blocage) ; le chef de projet, d'une vue consolidée coûts-délais-risques ; le comité de pilotage, d'une synthèse décisionnelle (feux tricolores, écarts majeurs, décisions attendues) ; la direction, d'une vue portefeuille. **Comment** ? Par une remontée d'information cadencée (revues d'avancement périodiques), des indicateurs stables d'une période à l'autre (pour suivre les tendances), et une mise en forme synthétique privilégiant l'exception (on commente ce qui dévie, pas ce qui est conforme). **Avec quels outils** ? Le suivi CBTP/CBTE/CRTE, la courbe en S, les indices CPI/SPI, la cartographie des risques, le suivi des jalons. **Avec quelles limites** ? Un tableau de bord ne remplace pas le jugement : il signale, il n'explique pas ; la mesure de l'avancement physique reste partiellement subjective ; et l'excès d'indicateurs noie l'information utile. Le contrôleur de gestion de projet est, à cet égard, autant un interprète qu'un calculateur. Les **revues d'avancement** — explicitement visées par le référentiel — structurent ce dialogue : tenues à intervalles réguliers (hebdomadaires pour l'équipe, mensuelles pour le comité de pilotage) ou aux jalons, elles confrontent le réalisé au planifié, statuent sur les écarts, réexaminent les risques et arrêtent les décisions correctives. Une revue d'avancement efficace ne se borne pas à constater le passé : elle réestime systématiquement le **reste à faire** (durée et coût à terminaison) et engage les arbitrages nécessaires. C'est le moment où le pilotage produit son effet : transformer une mesure en décision."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Principaux KPI de pilotage de projet *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**KPI**",
            "**Formule / nature**",
            "**Ce qu'il mesure**",
            "**Seuil d'alerte**"
          ],
          "rows": [
            [
              "**CPI**",
              "CBTE / CRTE",
              "Performance de coût",
              "< 1"
            ],
            [
              "**SPI**",
              "CBTE / CBTP",
              "Performance de délai",
              "< 1"
            ],
            [
              "**Écart de coût (EC)**",
              "CBTE − CRTE",
              "Surcoût / économie",
              "< 0"
            ],
            [
              "**Écart de délai (ED)**",
              "CBTE − CBTP",
              "Avance / retard",
              "< 0"
            ],
            [
              "**EAC / VAC**",
              "BAC/CPI ; BAC − EAC",
              "Coût final anticipé",
              "VAC < 0"
            ],
            [
              "**% d'avancement physique**",
              "Travail réalisé / total",
              "Progression réelle",
              "< planning"
            ],
            [
              "**Taux de consommation de la réserve**",
              "Réserve utilisée / réserve totale",
              "Exposition résiduelle aux aléas",
              "> avancement"
            ],
            [
              "**Nombre de risques critiques ouverts**",
              "Comptage (criticité élevée)",
              "Exposition au risque",
              "en hausse"
            ],
            [
              "**Respect des jalons**",
              "Jalons tenus / planifiés",
              "Tenue des engagements",
              "< 100 %"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ce dispositif classique, dit « prédictif » (on planifie tout en amont), montre ses limites dans les environnements incertains. D'où l'essor des approches agiles."
        }
      ]
    },
    {
      "id": "9-agilite-et-nouvelles-formes-de-gestion-de-projet",
      "title": "9. Agilité et nouvelles formes de gestion de projet",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Ouverture contemporaine ; signalée comme culture professionnelle, non comme objet central du référentiel.*"
        },
        {
          "type": "h3",
          "text": "9.1 Les limites des approches traditionnelles"
        },
        {
          "type": "p",
          "text": "L'approche classique, dite **prédictive** ou « en cascade » (*waterfall*), planifie l'intégralité du projet en amont puis l'exécute séquentiellement. Elle est efficace quand le besoin est stable et bien défini (construction, ingénierie). Elle se révèle fragile quand le besoin est **instable ou émergent** — cas fréquent des projets informatiques et d'innovation : à vouloir tout figer au départ, on livre tardivement un produit éventuellement périmé, et l'effet tunnel masque les dérives jusqu'à la recette."
        },
        {
          "type": "h3",
          "text": "9.2 Les méthodes agiles"
        },
        {
          "type": "p",
          "text": "Les méthodes **agiles** (Manifeste agile, 2001) renversent la logique : plutôt que de tout planifier, on livre par **itérations courtes** un produit incrémental, en intégrant le retour client en continu. Deux cadres dominants :"
        },
        {
          "type": "ul",
          "items": [
            "**Scrum** : le travail est découpé en **sprints** (itérations de 2 à 4 semaines) produisant chacun un incrément livrable. Le ***Product Owner***porte la voix du client et priorise le*backlog*(liste ordonnée des besoins) ; le***Scrum Master*** facilite et lève les obstacles ; l'équipe est auto-organisée. Des rituels (mêlée quotidienne, revue et rétrospective de sprint) rythment le travail.",
            "**Kanban** : pilotage par le **flux** et la **limitation du travail en cours** (*WIP limit*), visualisé sur un tableau à colonnes (à faire / en cours / fait). Hérité du *lean* (lien chapitre 1). Il convient de souligner que l'agilité n'est pas un relâchement du pilotage mais un **déplacement** de celui-ci : là où le prédictif fige le périmètre et laisse varier coût et délai, l'agile fige le coût et le délai (la capacité de l'équipe sur un sprint est stable) et laisse varier le périmètre, en livrant d'abord les fonctionnalités de plus forte valeur. Le contrôle de gestion s'y adapte : on suit la **vélocité** (quantité de valeur produite par sprint), le *burndown chart* (reste à faire au fil du sprint) et le coût par incrément livré, plutôt que des écarts sur un plan figé. Beaucoup d'organisations adoptent enfin des approches **hybrides** : un cadrage et un budget prédictifs au niveau du programme, une exécution agile au niveau des lots — combinaison qui répond à l'exigence de redevabilité financière tout en préservant la souplesse d'exécution. Pour le DSCG, l'essentiel est de comprendre que le choix d'une approche découle du **degré de stabilité du besoin** et de l'arbitrage QCD retenu, non d'un effet de mode."
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 7 — Fonctionnement d'un projet agile (Scrum) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/07.png",
          "alt": "Schéma 7 — Fonctionnement d'un projet agile (Scrum) *(obligatoire)*",
          "width": 2156,
          "height": 1034
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Approche prédictive vs approche agile *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Approche prédictive (cascade)**",
            "**Approche agile**"
          ],
          "rows": [
            [
              "Besoin",
              "Figé en amont",
              "Émergent, affiné en continu"
            ],
            [
              "Livraison",
              "Unique, en fin de projet",
              "Itérative, incrémentale"
            ],
            [
              "Planification",
              "Détaillée et globale dès le départ",
              "Glissante, par itération"
            ],
            [
              "Pilotage du QCD",
              "Périmètre fixe, coût/délai variables",
              "Coût/délai fixes (par sprint), périmètre variable"
            ],
            [
              "Relation client",
              "Contractuelle, en début/fin",
              "Collaborative, permanente"
            ],
            [
              "Gestion du changement",
              "Coûteuse, via avenants",
              "Intégrée par construction"
            ],
            [
              "Contexte adapté",
              "Besoin stable, fort enjeu de conformité",
              "Incertitude, innovation, time-to-market"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Prédictif ou agile, le pilotage de projet est aujourd'hui profondément reconfiguré par le numérique et l'intelligence artificielle."
        }
      ]
    },
    {
      "id": "10-transformation-numerique-et-intelligence-artificielle",
      "title": "10. Transformation numérique et intelligence artificielle",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Ouverture contemporaine exigée ; lien UE5 (systèmes d'information) prévu par le référentiel.*"
        },
        {
          "type": "p",
          "text": "La gestion de projet est l'une des fonctions les plus transformées par le numérique. Les **outils collaboratifs** (plateformes de gestion de tâches, planning partagé, espaces documentaires, visioconférence) ont dématérialisé la coordination et permis le pilotage d'équipes distribuées. L'**automatisation** prend en charge les tâches répétitives du chef de projet : mise à jour des plannings, relances, consolidation du reporting, alertes sur les jalons. L'**analyse de données** et l'**IA prédictive** exploitent l'historique des projets passés pour estimer plus justement les durées et les coûts, anticiper les dérives (prévoir un dépassement à partir des tendances de CPI/SPI) et affiner la cartographie des risques. L'**IA générative** assiste la rédaction des livrables documentaires (cahiers des charges, comptes rendus, synthèses) et la simulation de scénarios. Le **pilotage en temps réel** — tableaux de bord alimentés en continu — rapproche le contrôle de l'instantané, déplaçant le rôle du contrôleur de gestion de la production de chiffres vers leur interprétation et l'aide à la décision."
        },
        {
          "type": "h4",
          "text": "Tableau 9 — Impact de l'IA sur les activités du chef de projet *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Activité du chef de projet**",
            "**Apport de l'IA / du numérique**",
            "**Bénéfice**",
            "**Vigilance**"
          ],
          "rows": [
            [
              "Estimation des coûts et délais",
              "Modèles prédictifs sur historique",
              "Estimations plus fiables, moins de biais optimiste",
              "Qualité et représentativité des données"
            ],
            [
              "Planification",
              "Optimisation automatique de l'ordonnancement",
              "Gain de temps ; scénarios alternatifs",
              "Garder la maîtrise des hypothèses"
            ],
            [
              "Suivi et reporting",
              "Consolidation et tableaux de bord automatisés",
              "Pilotage temps réel ; alertes précoces",
              "Risque de pilotage « presse-bouton » sans analyse"
            ],
            [
              "Gestion des risques",
              "Détection de signaux faibles, alertes",
              "Anticipation des dérives",
              "Faux positifs ; confiance excessive"
            ],
            [
              "Production de livrables",
              "IA générative (rédaction, synthèse)",
              "Productivité documentaire",
              "Vérification humaine ; confidentialité"
            ],
            [
              "Communication d'équipe",
              "Outils collaboratifs, assistants",
              "Coordination d'équipes distribuées",
              "Surcharge informationnelle"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces évolutions ne dispensent pas de la maîtrise des fondamentaux, qu'éclairent les approfondissements DSCG."
        }
      ]
    },
    {
      "id": "11-approfondissements-dscg",
      "title": "11. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé, orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "11.1 Les arbitrages du triptyque QCD"
        },
        {
          "type": "p",
          "text": "Le **triptyque QCD** (Qualité – Coûts – Délais) est le cœur des arbitrages de projet, et le référentiel le nomme explicitement. Ces trois objectifs sont en tension : accélérer un projet (réduire le délai) impose souvent d'ajouter des ressources (hausse du coût) ou de réduire le périmètre/la qualité ; viser une qualité maximale allonge délais et coûts. L'erreur d'examen est de promettre les trois simultanément. La maîtrise consiste à **identifier la variable d'ajustement** cohérente avec la stratégie et le type de projet : un projet réglementaire fige la qualité et ajuste coût/délai ; un projet *time-to-market* fige le délai et ajuste le périmètre (logique agile). Historiquement, le triptyque est représenté par un **triangle** (parfois appelé « triangle de fer » du projet) dont les trois sommets — qualité (ou périmètre/performance), coût et délai — sont liés : on ne peut déplacer un sommet sans affecter les autres, la surface du triangle figurant en quelque sorte la « quantité de projet » réalisable avec les ressources données. Modifier une contrainte impose donc d'ajuster au moins une autre : vouloir « plus de qualité » à coût et délai constants est, sauf gain de productivité, une impossibilité logique. Certaines formulations enrichissent le triangle d'une quatrième dimension, le **risque**, voire d'une cinquième, la **valeur** créée pour les parties prenantes — rappelant que l'objectif ultime n'est pas de respecter le triangle pour lui-même, mais de produire de la valeur. Le pilotage de projet est ainsi, fondamentalement, une discipline de l'arbitrage sous contrainte, ce qui explique sa parenté étroite avec le contrôle de gestion. On relie ici QCD au chemin critique (§5) — c'est sur lui qu'un arbitrage de délai produit un effet — et au suivi des écarts (§6)."
        },
        {
          "type": "h3",
          "text": "11.2 Du projet au portefeuille de projets"
        },
        {
          "type": "p",
          "text": "Une organisation conduit rarement un seul projet. La **gestion multi-projets** pose le problème du partage de ressources rares entre projets concurrents (un même expert sollicité par plusieurs chefs de projet — situation de goulot, cf. chapitre 1). La **gestion de portefeuille** (*Project Portfolio Management*) opère à un niveau supérieur : elle **sélectionne et priorise** les projets au regard de leur alignement stratégique, de leur rentabilité (VAN, retour sur investissement) et de leur risque, et arbitre l'allocation des ressources. La **gouvernance des projets stratégiques** s'appuie sur des **revues de jalons « go / no-go »** : à chaque jalon, le comité décide de poursuivre, réorienter ou arrêter — décision qui doit ignorer les coûts déjà engagés (*sunk costs*) et ne considérer que la valeur restant à créer."
        },
        {
          "type": "h3",
          "text": "11.3 Difficultés et pièges récurrents des sujets DSCG"
        },
        {
          "type": "ul",
          "items": [
            "**Confondre CRTE et CBTE** : comparer le coût réel au budget sans valoriser l'avancement physique fausse tout le diagnostic. Le CBTE (valeur acquise) est la clé.",
            "**Oublier le signe et le sens des écarts** : EC ou ED négatif = défavorable. Toujours commenter (coût *ET/OU* délai).",
            "**Identifier mal le chemin critique** : prendre le maximum des dates de fin des antériorités pour une tâche convergente (cas de la tâche E dans l'exemple §5.2.2).",
            "**Confondre marge totale et marge libre.**",
            "**Poursuivre un projet pour les sommes déjà engagées** (*sunk cost fallacy*) au lieu de raisonner sur le reste à faire.",
            "**Réciter un référentiel (PMBOK) sans savoir l'appliquer** : l'épreuve évalue la mise en œuvre (Gantt, écarts), pas la récitation.",
            "**Promettre Q, C et D ensemble** sans arbitrage."
          ]
        }
      ]
    },
    {
      "id": "12-synthese-generale",
      "title": "12. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "12.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Le management de projet est le mécanisme par lequel l'organisation transforme sa stratégie en réalisations concrètes, bornées et mesurables. Né des grands programmes du XXᵉ siècle, il répond aux limites des structures permanentes face aux activités uniques, transversales et temporaires. Tout projet se définit par son **unicité**, sa **temporalité**, un **objectif** et un faisceau de **contraintes** dominé par le triptyque qualité-coûts-délais."
        },
        {
          "type": "p",
          "text": "Sa réussite suppose d'abord une **gouvernance** claire — articulation maîtrise d'ouvrage / maîtrise d'œuvre, chef de projet, parties prenantes — et une **structure** adaptée, du simple rattachement fonctionnel à la structure matricielle ou au projet sorti, éventuellement appuyée par un PMO. Elle suppose ensuite une **planification** rigoureuse : décomposition en lots (WBS), ordonnancement en réseau permettant de dégager le **chemin critique** et les **marges**, traduction en **diagramme de Gantt**. Elle suppose surtout un **pilotage économique** fondé sur le suivi budgétaire à trois grandeurs — **CBTP, CBTE et CRTE** — dont la comparaison fournit les **écarts de coût et de délai**, visualisés par la **courbe en S** et synthétisés par les indices de l'**EVM** (CPI, SPI) qui permettent d'anticiper le coût à terminaison."
        },
        {
          "type": "p",
          "text": "À cela s'ajoute une **gestion explicite des risques**, hiérarchisés par criticité (probabilité × impact) et traités par évitement, réduction, transfert ou acceptation. Le **contrôle de gestion de projet** instrumente ces dimensions dans un tableau de bord et un reporting alimentant les revues d'avancement et la décision. Enfin, les approches **agiles** répondent aux limites du prédictif dans les environnements incertains, tandis que le **numérique et l'IA** reconfigurent l'estimation, le suivi et l'anticipation. Au centre de tout demeure l'**arbitrage QCD**, qui doit rester cohérent avec la stratégie déployée — bouclant ainsi le lien entre projet et déploiement stratégique qui justifie la place de ce chapitre dans la Partie 2 du référentiel."
        },
        {
          "type": "p",
          "text": "En définitive, le pilotage des projets condense l'essentiel des savoir-faire du contrôleur de gestion appliqués à un objet singulier : prévoir (planifier, budgéter), mesurer (avancement, écarts), comparer (réalisé / prévu), interpréter (causes, tendances) et décider (arbitrer, corriger, voire arrêter). Il illustre de manière exemplaire la fonction du contrôle de gestion comme **aide à la décision sous contrainte**, et fait dialoguer toutes les compétences du référentiel : calcul de coûts et raisonnement marginal (chapitre 1), analyse des écarts (chapitre sur la gestion prévisionnelle), gestion des risques, accompagnement du changement. Maîtriser le pilotage de projet, c'est donc maîtriser une forme concentrée du métier — ce qui explique la place centrale, et le volume horaire important (20 heures), que le référentiel lui accorde."
        },
        {
          "type": "h3",
          "text": "12.2 Carte mentale textuelle"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-projets/08.png",
          "alt": "12.2 Carte mentale textuelle",
          "width": 2244,
          "height": 1320
        },
        {
          "type": "h3",
          "text": "12.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Auteur / référentiel**",
            "**Apport principal**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Définition du projet",
              "PMI, PRINCE2, ISO 21500, AFNOR",
              "Unicité + temporalité + objectif sous contrainte",
              "Frontière floue avec l'opération",
              "Cadrage de tout projet"
            ],
            [
              "Structures projet",
              "Mintzberg (adhocratie) ; ancien cours INTEC",
              "Adapter l'organisation au degré d'autonomie du projet",
              "Conflits d'autorité (matrice) ; coût (projet sorti)",
              "Choix d'organisation"
            ],
            [
              "WBS",
              "Pratique PMI",
              "Décomposition exhaustive (règle des 100 %)",
              "Statique ; ne dit pas l'ordonnancement",
              "Préparation du Gantt et du budget"
            ],
            [
              "PERT / chemin critique",
              "US Navy (Polaris, 1958)",
              "Identifier les tâches déterminantes du délai",
              "Durées déterministes ; complexité",
              "Ordonnancement, focalisation managériale"
            ],
            [
              "Diagramme de Gantt",
              "H. Gantt (~1910)",
              "Visualiser et suivre l'ordonnancement",
              "Lourd à actualiser sur grands projets",
              "Planification et communication"
            ],
            [
              "Suivi CBTP/CBTE/CRTE",
              "Contrôle de gestion / EVM",
              "Mesurer coût ET avancement physique",
              "Mesure de l'avancement délicate",
              "Suivi budgétaire, analyse des écarts"
            ],
            [
              "EVM (CPI, SPI, EAC)",
              "DoD / PMI",
              "Indices et prévision à terminaison",
              "Sensible à la qualité des données",
              "Alerte précoce, réestimation"
            ],
            [
              "Gestion des risques",
              "ISO 31000 / PMI",
              "Hiérarchiser (criticité) et traiter",
              "Subjectivité de l'estimation",
              "Cartographie, registre des risques"
            ],
            [
              "Méthodes agiles",
              "Manifeste agile (2001) ; Scrum",
              "Itération, retour client continu",
              "Mal adaptée aux besoins figés / contractuels",
              "SI, innovation, time-to-market"
            ]
          ]
        }
      ]
    },
    {
      "id": "13-fiche-de-revision-dscg",
      "title": "13. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "13.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Projet** : effort temporaire et unique visant un livrable sous contrainte QCD.",
            "**Chemin critique** : séquence de tâches à marge totale nulle ; il fixe la durée minimale du projet.",
            "**Marge totale** : retard maximal d'une tâche sans repousser la fin du projet. **Marge libre** : sans décaler le début au plus tôt des successeurs.",
            "**CBTP / CBTE / CRTE** : coût budgété du travail prévu / effectué / coût réel du travail effectué.",
            "**Jalon** : point de contrôle de durée nulle (décision go/no-go).",
            "**Triptyque QCD** : qualité, coûts, délais — objectifs en tension."
          ]
        },
        {
          "type": "h3",
          "text": "13.2 Auteurs et référentiels à retenir"
        },
        {
          "type": "p",
          "text": "H. Gantt (diagramme) · US Navy / Polaris (PERT, 1958) · PMI/PMBOK · PRINCE2 · ISO 21500 · ISO 31000 (risques) · Mintzberg (adhocratie) · Manifeste agile / Scrum (Sutherland & Schwaber)."
        },
        {
          "type": "h3",
          "text": "13.3 Concepts essentiels"
        },
        {
          "type": "p",
          "text": "WBS (règle des 100 %) · réseau PERT/MPM · dates au plus tôt / au plus tard · marges (totale, libre) · plan de financement · réserve pour aléas · valeur acquise (CBTE/EV) · courbe en S · CPI/SPI · EAC/VAC · criticité (P × I) · stratégies de réponse au risque · sprint / backlog."
        },
        {
          "type": "h3",
          "text": "13.4 Formules à connaître"
        },
        {
          "type": "ul",
          "items": [
            "Écart de coût : **EC = CBTE − CRTE**",
            "Écart de délai : **ED = CBTE − CBTP**",
            "**CPI = CBTE / CRTE** ; **SPI = CBTE / CBTP**",
            "**EAC = BAC / CPI** ; **VAC = BAC − EAC**",
            "**Criticité = Probabilité × Impact**"
          ]
        },
        {
          "type": "h3",
          "text": "13.5 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Confondre CRTE et CBTE · oublier le sens des écarts · mal identifier une tâche convergente sur le chemin critique · confondre marge totale et libre · poursuivre pour les sunk costs · réciter le PMBOK sans l'appliquer · promettre Q+C+D ensemble."
        },
        {
          "type": "h3",
          "text": "13.6 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "À partir d'un tableau de tâches et d'antériorités, déterminer le chemin critique, la durée minimale et les marges, puis tracer le Gantt.",
            "Construire le budget et le plan de financement d'un projet ; calculer la réserve pour aléas.",
            "À une date donnée, calculer CBTP, CBTE, CRTE, les écarts de coût et de délai, et conclure.",
            "Calculer CPI, SPI, EAC, VAC et formuler un diagnostic et des préconisations.",
            "Cartographier les risques d'un projet (criticité) et proposer une stratégie de réponse pour chacun.",
            "Choisir et justifier une structure organisationnelle de projet selon le contexte.",
            "Apprécier l'opportunité de poursuivre ou d'arrêter un projet en difficulté (raisonnement en reste à faire)."
          ]
        },
        {
          "type": "h3",
          "text": "13.7 Liens avec les autres sous-parties du référentiel"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : choix stratégiques (1.2) et création de valeur (1.3) — le projet exécute la stratégie ; structures et frontières (1.4) — structures projet.",
            "**Latéral (Partie 2)** : pilotage des processus de production (2.1, triptyque QCD, sunk costs, goulots de ressources) ; pilotage des processus support (2.3) ; accompagnement du changement (2.4, projets organisationnels) ; gestion des risques (2.5, cartographie et criticité).",
            "**Aval (Partie 3)** : gestion prévisionnelle et contrôle budgétaire (3.1, écarts) ; performance globale et tableaux de bord (3.3).",
            "**Transversal** : lien explicite avec l'UE5 du DSCG (systèmes d'information : outils de gestion de projet, modélisation, données)."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.2 « Le pilotage des projets ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
