// Généré par scripts/convert-docx.mjs depuis 01_Pilotage_des_processus_de_production.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-pilotage-processus-production",
  "level": "DSCG",
  "ue": "UE3",
  "number": 1,
  "title": "Le pilotage des processus de production",
  "description": "",
  "durationMin": 50,
  "sections": [
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
          "text": "**Rattachement au référentiel officiel.** Le présent chapitre couvre la sous-partie **2.1 « Le pilotage des processus de production » (10 heures)** de la Partie 2 du nouveau référentiel. Le libellé officiel des **compétences professionnelles** attendues est : analyser la situation de gestion ; sélectionner des outils de gestion adaptés au contexte ; élaborer et mettre en œuvre des outils de gestion adaptés au contexte ; évaluer les résultats obtenus ; élaborer des préconisations en matière de gestion des processus de production ; produire une synthèse rédigée et structurée portant sur les décisions concernant les processus de production. Les **connaissances et savoirs associés** officiels sont : calcul de coûts prenant en compte les en-cours de production, les produits conjoints, les produits dérivés, les sous-produits, le traitement des déchets et autres externalités négatives ; gestion des processus de production (analyse de la valeur, coûts cibles) ; optimisation des capacités (gestion des goulots d'étranglement et *yield management*) ; gestion stratégique de la qualité et analyse des dysfonctionnements ; structure de coûts, approche marginale, coûts pertinents et *sunk costs* ; cartographie de processus. La **limite de champ** officielle précise que les outils étudiés en DCG sont approfondis et exploités au service du déploiement de la stratégie, et surtout que **l'étude du pilotage des processus de production ne se limite pas aux processus industriels : elle peut porter sur des processus artisanaux, agricoles ou de service**."
        },
        {
          "type": "p",
          "text": "**Écart signalé avec le cahier des charges de rédaction.** Le plan de commande initial intitulait le chapitre « Le pilotage des processus *et de la performance opérationnelle* » et plaçait au même rang des développements autonomes sur la chaîne de valeur de Porter, la typologie générale des processus support/pilotage, ou un bloc « indicateurs de performance opérationnelle ». Ces objets relèvent en toute rigueur d'autres sous-parties du référentiel : la chaîne de valeur appartient au diagnostic stratégique (1.1) et à la création de valeur (1.3) ; les processus support relèvent de la sous-partie 2.3 ; les indicateurs de performance globale (KPI, BSC) relèvent de la sous-partie 3.3. **La priorité absolue étant la conformité au référentiel**, ils ne sont mobilisés ici que comme cadre d'entrée (transition stratégique) et non développés pour eux-mêmes ; des renvois explicites vers les chapitres correspondants sont indiqués. Cette discipline est précisément ce que l'épreuve nationale récompense : un candidat qui « plaque » la chaîne de valeur dans une question portant sur l'optimisation d'un goulot perd du temps et des points."
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
              "Définition et caractéristiques du processus",
              "**Repris-adapté**",
              "Ancien cours (Cours 3, vision processuelle ; Löning *et al.*, Lorino, Hammer-Champy, Zarifian)"
            ],
            [
              "Limites de l'organisation fonctionnelle ; *job shop* / *flow shop*",
              "**Repris-adapté**",
              "Ancien cours (Cours 3)"
            ],
            [
              "Cartographie des processus (SIPOC, logigramme, BPMN)",
              "**Créé**",
              "Hors ancien cours ; exigé par le nouveau référentiel"
            ],
            [
              "Calcul de coûts : en-cours, produits conjoints, sous-produits, déchets",
              "**Créé / complété**",
              "Approfondissement DCG ; en-cours évoqués dans l'ancien cours"
            ],
            [
              "Gestion des capacités et théorie des contraintes (Goldratt)",
              "**Adapté-complété**",
              "Exemple chiffré de goulot dans l'ancien cours (Cours 1) ; TOC créée"
            ],
            [
              "Coûts cibles (*target costing*) et analyse de la valeur",
              "**Repris-adapté**",
              "Ancien cours (Cours 3, section ABM/target costing)"
            ],
            [
              "*Yield management*",
              "**Créé**",
              "Listé comme concept à connaître dans l'ancien cours mais non développé"
            ],
            [
              "Approche marginale, coûts pertinents, *sunk costs*",
              "**Créé / complété**",
              "Référentiel ; approfondissement"
            ],
            [
              "Gestion stratégique de la qualité, dysfonctionnements",
              "**Créé**",
              "Exigé par le nouveau référentiel"
            ],
            [
              "Ouverture IA / digitalisation / ESG",
              "**Créé**",
              "Exigé par le nouveau référentiel"
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
          "text": "1.1 De la fonction au flux : une révolution silencieuse du pilotage"
        },
        {
          "type": "p",
          "text": "Pendant la plus grande partie du XXᵉ siècle, l'entreprise a été pensée et pilotée comme un assemblage de fonctions. L'organigramme, hérité de la division du travail théorisée par Adam Smith puis systématisée par Frederick Taylor et Henri Fayol, découpe l'entreprise en directions spécialisées — production, achats, commercial, finance, ressources humaines — chacune dotée de ses objectifs, de son budget et de son responsable. Cette architecture verticale a une vertu cardinale : elle clarifie les responsabilités et permet d'accumuler de l'expertise par métier. Le contrôle de gestion classique, organisé autour des centres de responsabilité et du contrôle budgétaire, en est le reflet exact : à chaque entité, son compte d'exploitation, ses écarts, son reporting."
        },
        {
          "type": "p",
          "text": "Mais cette force est aussi une faiblesse. Le client, lui, ne perçoit ni la direction des achats ni celle de la logistique : il perçoit un délai de livraison, un niveau de qualité, un prix. Or ce délai, cette qualité, ce prix ne sont jamais produits par une fonction isolée ; ils résultent de l'**enchaînement transversal** d'activités qui traversent l'entreprise de part en part. L'optimisation locale de chaque fonction — chacune cherchant à minimiser *son* coût ou à maximiser *son* rendement — peut parfaitement dégrader la performance d'ensemble. Un service achats récompensé sur le seul prix d'acquisition négociera des lots gigantesques à bas prix unitaire, gonflant les stocks, immobilisant la trésorerie et masquant des défauts de qualité qui se révéleront en aval, en production puis chez le client. C'est le paradoxe central que le nouveau référentiel DSCG place au cœur de la Partie 2 : **la somme des optima locaux n'est pas l'optimum global.**"
        },
        {
          "type": "h3",
          "text": "1.2 Les limites de l'approche fonctionnelle traditionnelle"
        },
        {
          "type": "p",
          "text": "Trois limites majeures de l'approche purement fonctionnelle justifient le basculement vers une logique de pilotage par les processus."
        },
        {
          "type": "p",
          "text": "D'abord, le **cloisonnement** : les frontières entre directions créent des zones grises où la responsabilité se dilue. Entre la prise de commande (commercial) et la livraison (logistique), qui répond du délai global ? Personne, précisément, parce que chacun ne répond que de son segment. Ensuite, l'**inefficience des interfaces** : les coûts cachés se logent dans les points de passage entre fonctions — ressaisies d'information, attentes, reprises, allers-retours. La recherche en sciences de gestion (notamment les travaux de Henri Savall sur les coûts cachés) a montré que ces inefficiences d'interface représentent une part considérable et invisible des coûts. Enfin, la **myopie stratégique** : une organisation qui ne se pense qu'en fonctions a le plus grand mal à se transformer, car aucune entité ne « possède » le flux de bout en bout qu'il faudrait reconfigurer."
        },
        {
          "type": "h3",
          "text": "1.3 Performance opérationnelle et déploiement de la stratégie"
        },
        {
          "type": "p",
          "text": "Le référentiel range délibérément le pilotage des processus de production dans la partie consacrée au **déploiement de la stratégie**. Ce choix n'est pas anodin. Une stratégie de domination par les coûts ne se décrète pas : elle se construit dans la maîtrise concrète des processus de production, dans la chasse aux gaspillages, dans l'optimisation des capacités. Une stratégie de différenciation par la qualité ou par le délai ne vit que si les processus la rendent possible jour après jour. Le pilotage des processus est donc le **maillon opérationnel qui transforme l'intention stratégique en performance réalisée.** C'est exactement le sens du verbe choisi par le référentiel : « *favoriser le déploiement* de la stratégie grâce à des outils de contrôle de gestion »."
        },
        {
          "type": "h3",
          "text": "1.4 Le rôle du contrôle de gestion"
        },
        {
          "type": "p",
          "text": "Dans ce cadre, le contrôle de gestion change de rôle. Il n'est plus seulement le gardien du budget et le calculateur d'écarts *a posteriori* ; il devient l'**architecte de la mesure transversale** de la performance. Sa mission : modéliser les processus, en calculer le coût réel (y compris les en-cours, les produits joints, les déchets et les externalités), identifier les contraintes qui en bornent le débit, et fournir au manager opérationnel les outils de décision — coûts pertinents, approche marginale, *yield management* — adaptés à la situation de gestion. Le contrôleur de gestion devient, selon la formule consacrée, un *business partner* du responsable de production."
        },
        {
          "type": "h3",
          "text": "1.5 Problématique générale du chapitre"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment le contrôle de gestion peut-il aider l'organisation à piloter ses processus de production — qu'ils soient industriels, artisanaux, agricoles ou de service — de manière à transformer la stratégie en performance opérationnelle durable, en calculant le coût réel des activités, en optimisant les capacités sous contrainte, et en arbitrant entre des objectifs partiellement contradictoires de coût, de qualité et de délai ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en construisant progressivement l'outillage : il pose d'abord les **fondements de l'approche processus** (§2), puis la **cartographie** qui rend le processus visible et pilotable (§3), avant d'aborder le cœur technique du référentiel — le **calcul des coûts de production complexes** (§4), l'**optimisation des capacités sous contrainte** avec la théorie des contraintes et le *yield management* (§5), les **outils de pilotage de la valeur** que sont le *target costing* et l'analyse de la valeur (§6), la **gestion stratégique de la qualité** (§7) —, avant d'ouvrir sur les **transformations contemporaines** (§8) et de consolider par les **approfondissements DSCG**, la **synthèse** et la **fiche de révision** (§9 à §11)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Connaître la définition académique du processus et ses caractéristiques ; maîtriser les notions de capacité (théorique, pratique, normale, réelle), de goulot d'étranglement, de coût pertinent, de coût irrécupérable (*sunk cost*), de coût marginal ; connaître les principes du calcul de coûts en présence d'en-cours, de produits conjoints, de sous-produits et de déchets ; connaître les fondements du *target costing*, de l'analyse de la valeur, de la théorie des contraintes (Goldratt) et du *yield management*."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Cartographier un processus (SIPOC, logigramme, BPMN) à partir de données brutes ; calculer un coût de production intégrant les en-cours via les équivalents-produits finis ; répartir un coût commun entre produits conjoints ; identifier un goulot et appliquer les cinq étapes de la TOC ; calculer une marge sur coût variable par unité de facteur rare pour arbitrer ; estimer un coût cible et un coût estimé, en déduire l'effort de réduction ; raisonner en coûts pertinents pour une décision ponctuelle (commande spéciale, *make or buy*)."
        },
        {
          "type": "p",
          "text": "**Compétences.** Analyser une situation de gestion productive complexe ; sélectionner et mettre en œuvre l'outil adapté au contexte (industriel, artisanal, agricole, de service) ; évaluer les résultats et formuler des préconisations argumentées ; produire une synthèse rédigée et structurée — exactement le format de production attendu à l'épreuve."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (libellé officiel 2.1).** Analyser la situation de gestion ; sélectionner des outils de gestion adaptés au contexte ; élaborer et mettre en œuvre des outils de gestion adaptés au contexte ; évaluer les résultats obtenus ; élaborer des préconisations en matière de gestion des processus de production ; produire une synthèse rédigée et structurée portant sur les décisions concernant les processus de production."
        }
      ]
    },
    {
      "id": "2-les-fondements-de-l-approche-processus",
      "title": "2. Les fondements de l'approche processus",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut des contenus : repris et adaptés de l'ancien cours (Cours 3, « Vision processuelle de l'organisation et gestion par les activités »), réorganisés et enrichis pour le nouveau référentiel.*"
        },
        {
          "type": "h3",
          "text": "2.1 Cadre conceptuel : qu'est-ce qu'un processus ?"
        },
        {
          "type": "h4",
          "text": "2.1.1 La notion, ses auteurs et ses fondements"
        },
        {
          "type": "p",
          "text": "La notion de processus s'est imposée dans les années 1990, au croisement de deux courants. Le premier, **académique et gestionnaire**, prolonge la réflexion sur la transversalité : Philippe Lorino (*Le contrôle de gestion stratégique — la gestion par les activités*, 1991) et l'équipe de Hélène Löning (*Le contrôle de gestion*, Dunod) définissent le processus comme un **enchaînement d'activités** orienté vers la production d'un résultat de valeur pour un client interne ou externe. Le second, **managérial et radical**, est porté par Michael Hammer et James Champy (*Reengineering the Corporation*, 1993), qui font du processus l'unité de base d'une refonte complète de l'entreprise."
        },
        {
          "type": "p",
          "text": "On retiendra la définition synthétique, directement reprise de l'ancien cours et conforme à la doctrine DSCG :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Définition.** Un processus est un *enchaînement d'activités* qui concourent à la création d'un bien ou d'un service destiné à un client final, ou à d'autres services ou processus internes. Il regroupe un ensemble d'activités finalisées par un *objectif global*, et donc par un *output* matériel ou immatériel qui doit représenter une *valeur* pour un client interne ou externe."
        },
        {
          "type": "h4",
          "text": "2.1.2 Les caractéristiques d'un processus"
        },
        {
          "type": "p",
          "text": "L'ancien cours, citant les travaux de Philippe Zarifian, recense les caractéristiques constitutives d'un processus. Elles sont au programme et structurent toute analyse :"
        },
        {
          "type": "ul",
          "items": [
            "des **entrées** (*inputs*) : matières, informations, demandes ;",
            "une ou des **sorties** (*outputs*) : le livrable de valeur ;",
            "des **ressources** mobilisées : humaines, machines, systèmes ;",
            "un **coût** (qui peut n'être qu'approximatif tant que le processus n'est pas modélisé) ;",
            "une **performance globale**, et des **éléments de performance** attachés aux *points critiques* ;",
            "un **développement temporel** (le processus a une durée, un cycle) ;",
            "des **règles et procédures** qui le gouvernent."
          ]
        },
        {
          "type": "p",
          "text": "La notion clé est celle de **client interne ou externe** : chaque activité a un « client » (l'activité suivante) auquel elle doit fournir un *output* conforme. Cette idée, héritée de la qualité totale japonaise, transforme la coordination : ce n'est plus la hiérarchie qui impose la coordination verticale, c'est la relation client-fournisseur interne qui l'organise horizontalement."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Comparaison des définitions du processus *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Auteur(s)**",
            "**Ouvrage / année**",
            "**Définition retenue du processus**",
            "**Accent mis sur**",
            "**Portée pour le contrôle de gestion**"
          ],
          "rows": [
            [
              "**M. Hammer & J. Champy**",
              "*Reengineering the Corporation*, 1993",
              "Ensemble d'activités qui, à partir d'une ou plusieurs entrées, produit un résultat représentant une valeur pour un client",
              "La **refonte radicale** (« réinventer », non « améliorer ») et la valeur client",
              "Justifie le *reengineering* ; impose une mesure transversale, pas seulement par fonction"
            ],
            [
              "**T. Davenport**",
              "*Process Innovation*, 1993",
              "Ensemble structuré et mesuré d'activités conçu pour produire un *output* spécifié pour un client ou un marché donné",
              "La **structuration et la mesurabilité** (un processus se mesure) ; le rôle des SI",
              "Place la mesure au cœur : sans indicateurs de processus, pas de pilotage"
            ],
            [
              "**P. Lorino**",
              "*Le contrôle de gestion stratégique*, 1991",
              "Combinaison d'activités reliées par des flux d'information (ou de matière) significatifs, se combinant pour fournir un produit matériel ou immatériel important et bien défini",
              "Le **lien activités–valeur** (fondement de l'ABM/ABC)",
              "Fonde la gestion par les activités : le coût suit l'activité, l'activité sert le processus"
            ],
            [
              "**P. Zarifian**",
              "Note LATTS, 1994",
              "Enchaînement transversal d'activités relevant de fonctions différentes, finalisé par un objectif global",
              "La **transversalité** et l'objectif global *vs* objectifs locaux",
              "Met en évidence le risque d'optima locaux contradictoires"
            ],
            [
              "**M. Porter (chaîne de valeur)**",
              "*Competitive Advantage*, 1985",
              "Suite d'activités (principales et de soutien) créant de la valeur le long de la chaîne",
              "L'**avantage concurrentiel** et la valeur stratégique",
              "Cadre d'entrée stratégique (renvoi sous-partie 1.3) ; relie processus et stratégie"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Lien avec le référentiel — vigilance.** La chaîne de valeur de Porter est ici présentée *uniquement* comme repère conceptuel reliant processus et stratégie. Son développement (activités principales/soutien, sources d'avantage) appartient aux sous-parties 1.1 et 1.3 et y est traité. Dans une copie portant sur 2.1, mobiliser Porter en une phrase de cadrage suffit ; le cœur attendu est le calcul de coûts et l'optimisation des capacités."
        },
        {
          "type": "h3",
          "text": "2.2 Pourquoi gérer par les processus ? Les limites de l'organisation fonctionnelle"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Cours 3, « Les limites de l'organisation fonctionnelle »).*"
        },
        {
          "type": "p",
          "text": "Gérer par processus, c'est poser que **les interdépendances entre activités sont essentielles** et que l'organisation fonctionnelle classique, en cloisonnant, engendre des inefficiences. Le processus devient le « trait d'union » entre les objectifs de l'entreprise et le déroulement concret des activités."
        },
        {
          "type": "p",
          "text": "L'ancien cours illustre ces limites par l'organisation des ateliers de production, distinction toujours pertinente pour analyser une situation de gestion industrielle :"
        },
        {
          "type": "ul",
          "items": [
            "**Implantation par ateliers fonctionnels (*job shop*). Les machines sont regroupées par nature (tous les tours ensemble, toutes les fraiseuses ensemble). Adaptée aux productions variées en petites et moyennes séries (sous-traitance mécanique). Elle génère des va-et-vient fréquents, des files d'attente, des en-cours importants et une coordination qui se fait souvent par*ajustement mutuel* (au sens de Mintzberg), avec un risque de conflits et de flux mal maîtrisés.",
            "**Implantation en ligne (*flow shop*). Les ressources sont disposées selon la séquence du produit. Réservée aux productions standardisées à processus unique (agroalimentaire, cosmétique). Elle fluidifie le flux, réduit les en-cours, mais rigidifie l'outil et le rend sensible au moindre goulot** (cf. §5)."
          ]
        },
        {
          "type": "p",
          "text": "Ce simple contraste éclaire une idée directrice du chapitre : **la performance d'un processus de production dépend autant de son agencement (le flux) que de l'efficacité de chaque poste pris isolément.** C'est précisément ce que l'optimisation locale ignore."
        },
        {
          "type": "h4",
          "text": "Schéma 1 — Du fonctionnel au processus *(schéma textuel obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/01.png",
          "alt": "Schéma 1 — Du fonctionnel au processus *(schéma textuel obligatoire)*",
          "width": 2156,
          "height": 1012
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Avant de calculer le coût d'un processus ou d'en optimiser le débit, encore faut-il le *rendre visible*. C'est l'objet de la cartographie, que le référentiel inscrit explicitement parmi les savoirs associés de 2.1."
        }
      ]
    },
    {
      "id": "3-la-cartographie-des-processus",
      "title": "3. La cartographie des processus",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. La cartographie figure explicitement dans les savoirs associés de 2.1 (« cartographie de processus ») et la limite de champ précise qu'« il est attendu de pouvoir construire des diagrammes à partir de données brutes (textes) ». Ce point est un attendu opératoire directement évaluable.*"
        },
        {
          "type": "h3",
          "text": "3.1 Objectifs et enjeux de la cartographie"
        },
        {
          "type": "p",
          "text": "Cartographier un processus, c'est en produire une représentation graphique normalisée qui en explicite les activités, les acteurs, les flux et les points de décision. Trois finalités, du diagnostic à la décision :"
        },
        {
          "type": "ul",
          "items": [
            "**Comprendre et partager** une représentation commune du flux réel (et non du flux supposé) — point de départ de tout diagnostic de dysfonctionnement.",
            "**Mesurer et coûter** : la carte localise les activités auxquelles rattacher temps, ressources et coûts (passerelle vers l'ABC/ABM et le calcul de coûts du §4).",
            "**Améliorer et décider** : elle révèle les redondances, les attentes, les goulots et les boucles de reprise, fondant les préconisations attendues à l'examen."
          ]
        },
        {
          "type": "h3",
          "text": "3.2 Les outils de cartographie"
        },
        {
          "type": "h4",
          "text": "3.2.1 Le SIPOC — la vue macroscopique"
        },
        {
          "type": "p",
          "text": "Le **SIPOC** (*Suppliers – Inputs – Process – Outputs – Customers*) est l'outil de cadrage de haut niveau. Il borne le processus avant tout détail : il répond aux questions « d'où vient quoi, vers qui va quoi ». On le construit en cinq colonnes et il tient sur une page — d'où sa valeur en début de copie."
        },
        {
          "type": "h4",
          "text": "Illustration — SIPOC d'un processus de production (atelier de pâtisserie artisanale)"
        },
        {
          "type": "p",
          "text": "*Exemple choisi hors industrie pour respecter la limite de champ du référentiel (processus artisanal).*"
        },
        {
          "type": "table",
          "headers": [
            "**Suppliers (Fournisseurs)**",
            "**Inputs (Entrées)**",
            "**Process (Étapes)**",
            "**Outputs (Sorties)**",
            "**Customers (Clients)**"
          ],
          "rows": [
            [
              "Meunier, crémier, producteur de fruits",
              "Farine, beurre, fruits, énergie, commande",
              "1. Réception & contrôle MP → 2. Pesée → 3. Pétrissage → 4. Façonnage → 5. Cuisson → 6. Refroidissement → 7. Conditionnement",
              "Pâtisseries conformes ; sous-produits (chutes) ; déchets",
              "Boutique, clients en ligne, restaurants"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "3.2.2 Le diagramme de flux et le logigramme"
        },
        {
          "type": "p",
          "text": "Le **diagramme de flux** (ou *flowchart*) détaille la séquence des activités à l'aide d'une symbolique normalisée. Le **logigramme** y ajoute la dimension décisionnelle (losanges de test oui/non) et, dans sa version « couloirs » (*swimlanes*), l'attribution de chaque activité à un acteur — ce qui révèle d'un coup d'œil les passages d'interface, lieux privilégiés des coûts cachés."
        },
        {
          "type": "p",
          "text": "Symbolique de base : ( ) début/fin ; [ ] tâche/opération ; < > décision ; ▷ flux ; ⛁ document/stock."
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Logigramme avec point de contrôle qualité *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/02.png",
          "alt": "Schéma 2 — Logigramme avec point de contrôle qualité *(obligatoire)*",
          "width": 1584,
          "height": 1364
        },
        {
          "type": "h4",
          "text": "3.2.3 Le BPMN — la norme de référence"
        },
        {
          "type": "p",
          "text": "Le **BPMN** (*Business Process Model and Notation*) est le standard international de modélisation. Plus riche que le logigramme, il distingue les **événements** (cercles : début, intermédiaire, fin), les **activités** (rectangles arrondis), les **passerelles** (losanges : exclusives, parallèles, inclusives) et les **couloirs** (*pools* et *lanes* matérialisant organisations et acteurs). Sa force : il est à la fois lisible par les opérationnels et suffisamment formel pour alimenter directement des outils de *workflow* et d'automatisation (cf. §8). Pour le DSCG, on n'attend pas une maîtrise d'expert mais la capacité à **lire et construire** un diagramme cohérent à partir d'un énoncé textuel."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — Comparaison des méthodes de cartographie *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Niveau de détail**",
            "**Force principale**",
            "**Limite**",
            "**Usage privilégié en situation DSCG**"
          ],
          "rows": [
            [
              "**SIPOC**",
              "Macro (vue d'ensemble)",
              "Cadrage rapide, borne le périmètre",
              "Ne montre pas la logique interne ni les décisions",
              "Ouvrir l'analyse, fixer entrées/sorties/clients"
            ],
            [
              "**Diagramme de flux**",
              "Intermédiaire",
              "Visualise la séquence des opérations",
              "Peu adapté aux décisions complexes",
              "Décrire un enchaînement linéaire de production"
            ],
            [
              "**Logigramme (*swimlanes*)**",
              "Détaillé",
              "Intègre décisions + acteurs ; révèle les interfaces",
              "Devient illisible si trop d'acteurs",
              "Diagnostiquer dysfonctionnements et coûts d'interface"
            ],
            [
              "**BPMN**",
              "Détaillé / standardisé",
              "Norme universelle ; exécutable (automatisation)",
              "Courbe d'apprentissage ; surdimensionné pour cas simples",
              "Modéliser un processus à automatiser / digitaliser"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Conseil de méthode (épreuve).** Face à un énoncé décrivant « en mots » un processus, la démarche gagnante est : (1) un SIPOC pour borner ; (2) un logigramme à couloirs pour faire apparaître les acteurs et les points de contrôle ; (3) une lecture critique localisant attente, reprise et goulot — qui amorce naturellement l'analyse de coûts et de capacité des sections suivantes.\n**Transition.** La carte rend le processus visible ; il faut maintenant lui attacher un *coût*. Or les processus de production réels engendrent des situations de calcul que le référentiel cible nommément : en-cours, produits conjoints, sous-produits, déchets et externalités."
        }
      ]
    },
    {
      "id": "4-le-calcul-des-couts-de-production-complexes",
      "title": "4. Le calcul des coûts de production complexes",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé et complété. C'est le premier savoir associé explicitement listé par le référentiel pour 2.1 : « calcul de coûts prenant en compte les en-cours de production, les produits conjoints, les produits dérivés, les sous-produits, le traitement des déchets et autres externalités négatives ». Les outils de DCG (coûts complets, imputation rationnelle) sont supposés acquis et sont ici approfondis au service de la décision.*"
        },
        {
          "type": "h3",
          "text": "4.1 Pourquoi les coûts de production résistent au calcul simple"
        },
        {
          "type": "p",
          "text": "Le coût de production « manuel » — additionner matières, main-d'œuvre et charges indirectes d'une période — suppose que tout ce qui entre en production en ressort, sous une forme unique, sans reliquat. La réalité productive contredit cette hypothèse de trois manières, chacune correspondant à une rubrique du référentiel."
        },
        {
          "type": "h3",
          "text": "4.2 Les en-cours de production et les équivalents-produits finis"
        },
        {
          "type": "p",
          "text": "À la clôture d'une période, une partie de la production est inachevée : ce sont les **en-cours** (*work in process*). Ils ont déjà consommé des matières et de la main-d'œuvre, mais ne sont pas des produits finis. Imputer tout le coût de la période aux seules unités achevées surévaluerait leur coût ; l'ignorer fausserait la valorisation du stock d'en-cours au bilan."
        },
        {
          "type": "p",
          "text": "La technique de référence est celle des **équivalents-produits finis (EPF)** (ou unités équivalentes). On convertit les en-cours en un nombre d'unités finies « équivalentes » selon leur **degré d'avancement**, distinct pour les matières (souvent injectées à 100 % en début de processus) et pour les coûts de transformation (engagés progressivement)."
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Méthode (coût moyen pondéré).** 1. Calculer la **production équivalente** par catégorie de coût : unités terminées + (en-cours finals × % d'avancement). 2. Calculer un **coût unitaire d'équivalent** par catégorie : coût total de la catégorie / production équivalente. 3. **Valoriser** : produits finis au coût unitaire complet ; en-cours en appliquant le % d'avancement à chaque catégorie."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré 1 — En-cours et équivalents-produits finis"
        },
        {
          "type": "p",
          "text": "Un atelier agroalimentaire produit un concentré. Sur le mois : matières injectées en totalité dès le départ ; coûts de transformation engagés au fil du process."
        },
        {
          "type": "ul",
          "items": [
            "Unités **terminées** : 8 000.",
            "**En-cours final** : 2 000 unités, avancées à **100 % en matières** et **40 % en transformation**.",
            "Coûts de la période : **matières 50 000 €** ; **transformation 33 600 €**."
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Unités terminées**",
            "**En-cours équivalents**",
            "**Production équivalente**",
            "**Coût période**",
            "**Coût unitaire équivalent**"
          ],
          "rows": [
            [
              "Matières",
              "8 000",
              "2 000 × 100 % = 2 000",
              "10 000",
              "50 000 €",
              "**5,00 €**"
            ],
            [
              "Transformation",
              "8 000",
              "2 000 × 40 % = 800",
              "8 800",
              "33 600 €",
              "**3,818 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Valorisation :**"
        },
        {
          "type": "ul",
          "items": [
            "Coût d'un produit fini = 5,00 + 3,818 = **8,818 €** → 8 000 × 8,818 = **70 545 €**.",
            "En-cours final = (2 000 × 5,00) + (800 × 3,818) = 10 000 + 3 055 = **13 055 €**.",
            "Contrôle : 70 545 + 13 055 ≈ 83 600 € = 50 000 + 33 600. ✓"
          ]
        },
        {
          "type": "p",
          "text": "**Lecture managériale.** Sans EPF, on aurait dilué le coût sur 8 000 unités seulement, surcoûtant le produit fini d'environ 10 % et faussant tout prix de cession ou décision de tarification fondés dessus."
        },
        {
          "type": "h3",
          "text": "4.3 Produits conjoints, sous-produits, produits dérivés"
        },
        {
          "type": "p",
          "text": "Certains processus engendrent **simultanément plusieurs produits** à partir d'une matière et d'un processus communs jusqu'à un **point de séparation** (*split-off point*). Trois cas, hiérarchisés par valeur relative :"
        },
        {
          "type": "ul",
          "items": [
            "**Produits conjoints (ou produits liés)** : plusieurs produits de **valeurs comparables**, dont aucun n'est accessoire (ex. raffinage : essence, gazole, kérosène ; abattage : différentes pièces de viande).",
            "**Sous-produits** : produit de **valeur faible** obtenu accessoirement (ex. son issu de la mouture du blé ; sciure d'une scierie).",
            "**Produits dérivés / résiduels** : issus de résidus revalorisés (ex. glycérine dérivée de la fabrication du savon)."
          ]
        },
        {
          "type": "p",
          "text": "L'enjeu de contrôle de gestion est la **répartition du coût commun** (engagé avant le point de séparation) entre ces produits. Deux familles de méthodes :"
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Méthodes de répartition des coûts conjoints"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe**",
            "**Avantage**",
            "**Limite**"
          ],
          "rows": [
            [
              "**Au prorata des quantités physiques**",
              "Le coût commun est réparti selon les volumes (kg, litres)",
              "Simple, objective",
              "Ignore la valeur : un produit lourd mais peu cher est surchargé"
            ],
            [
              "**Au prorata de la valeur de marché au point de séparation**",
              "Répartition selon la valeur vénale relative",
              "Aligne coût et capacité contributive",
              "Suppose un prix de marché au point de séparation"
            ],
            [
              "**Valeur nette réalisable (VNR)**",
              "Valeur de vente finale − coûts spécifiques postérieurs à la séparation",
              "Utilisable quand pas de marché au split-off",
              "Calcul plus lourd"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Pour les **sous-produits**, la pratique courante est de **déduire** leur valeur nette de réalisation du coût des produits principaux (le sous-produit « allège » le coût du produit principal) plutôt que de leur affecter une quote-part de coût commun."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré 2 — Répartition de produits conjoints"
        },
        {
          "type": "p",
          "text": "Une scierie transforme 100 m³ de grumes (coût commun jusqu'au sciage : **24 000 €**) en deux produits conjoints : **planches** (60 m³, prix de marché 500 €/m³) et **madriers** (40 m³, prix de marché 250 €/m³). Sous-produit : **sciure**, VNR globale 1 000 €."
        },
        {
          "type": "p",
          "text": "*Étape 0 — traiter le sous-produit* : on déduit la sciure du coût commun → coût commun à répartir = 24 000 − 1 000 = **23 000 €**."
        },
        {
          "type": "p",
          "text": "*Méthode valeur de marché :*"
        },
        {
          "type": "ul",
          "items": [
            "Valeur planches = 60 × 500 = 30 000 € ; valeur madriers = 40 × 250 = 10 000 € ; total = 40 000 €.",
            "Coût aux planches = 23 000 × (30 000 / 40 000) = **17 250 €** (soit 287,5 €/m³).",
            "Coût aux madriers = 23 000 × (10 000 / 40 000) = **5 750 €** (soit 143,75 €/m³)."
          ]
        },
        {
          "type": "p",
          "text": "*À comparer avec la méthode physique* (60/100 et 40/100) : planches 13 800 €, madriers 9 200 €. Les madriers, peu valorisés, supporteraient un coût bien plus lourd — au risque de les faire apparaître à tort déficitaires. **Le choix de méthode n'est pas neutre : il oriente les décisions de maintien ou d'abandon de produits.**"
        },
        {
          "type": "h3",
          "text": "4.4 Déchets, rebuts et externalités négatives"
        },
        {
          "type": "p",
          "text": "Le référentiel intègre — innovation notable du nouveau programme — le **traitement des déchets et autres externalités négatives**. On distingue :"
        },
        {
          "type": "ul",
          "items": [
            "les **déchets** (résidus sans valeur ou à valeur négative car leur élimination coûte) ;",
            "les **rebuts** (produits non conformes : à jeter, ou à reprendre — d'où un coût de non-qualité, cf. §7) ;",
            "les **externalités négatives** : coûts supportés par des tiers ou la collectivité (pollution, émissions), de plus en plus **internalisés** par la réglementation (taxes, quotas carbone) et la comptabilité environnementale."
          ]
        },
        {
          "type": "p",
          "text": "Sur le plan du calcul : le coût d'élimination des déchets s'ajoute au coût de production des bons produits (il faut bien le financer) ; la valeur des déchets revendables s'en déduit. L'enjeu contemporain est l'**internalisation** : intégrer dans le coût de production le prix d'une tonne de CO₂ ou le coût de retraitement transforme l'arbitrage économique et relie directement cette section à l'ESG (§8) et au pilotage de la durabilité (renvoi sous-partie 3.2)."
        },
        {
          "type": "h3",
          "text": "4.5 Structure de coûts, coûts pertinents et *sunk costs*"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Savoir associé explicite : « structure de coûts, approche marginale, coûts pertinents et sunk costs ».*"
        },
        {
          "type": "p",
          "text": "La décision de gestion productive ne mobilise pas le coût complet historique, mais les **coûts pertinents** (*relevant costs*) : les seuls coûts **futurs** et **différentiels** modifiés par la décision. Deux notions-pièges, classiques à l'examen :"
        },
        {
          "type": "ul",
          "items": [
            "Le **coût irrécupérable (*sunk cost*) : déjà engagé, non récupérable, donc non pertinent pour une décision future. Une étude de R&D déjà payée, une machine déjà achetée : leur coût ne doit pas peser sur le choix de continuer ou d'arrêter. L'erreur de « l'engagement par le passé » (*sunk cost fallacy*) consiste à poursuivre un projet déficitaire au motif qu'on y a déjà investi.",
            "Le **coût d'opportunité** : le manque à gagner de la meilleure alternative sacrifiée — pertinent, lui, bien qu'il ne corresponde à aucun décaissement."
          ]
        },
        {
          "type": "p",
          "text": "L'**approche marginale** complète le dispositif : pour une décision d'incrément de production (commande supplémentaire), seul compte le **coût marginal** (coût de la dernière unité ou du dernier lot). Si la capacité existe et n'est pas saturée, le coût marginal se réduit souvent au coût variable ; accepter une commande au-dessus du coût variable unitaire améliore le résultat même si le prix est inférieur au coût complet."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré 3 — Commande spéciale et coûts pertinents"
        },
        {
          "type": "p",
          "text": "Une entreprise de services (imprimerie) tourne à 80 % de capacité. Coût complet d'un lot standard : 100 € (dont 60 € variables, 40 € de charges fixes imputées). Un client propose un lot ponctuel à **75 €**. Faut-il accepter ?"
        },
        {
          "type": "ul",
          "items": [
            "Raisonnement en coût complet : 75 < 100 → refus apparent.",
            "Raisonnement en **coûts pertinents** : la capacité est disponible (les charges fixes sont des *sunk costs* de période, déjà engagées). Seul le coût variable de 60 € est pertinent. Marge sur coût variable = 75 − 60 = **+15 € par lot** → la commande **améliore** le résultat.",
            "**Réserves** (préconisation attendue) : ne pas cannibaliser les ventes au prix plein, vérifier que la capacité reste disponible (sinon coût d'opportunité), prévenir l'effet de référence sur les prix futurs."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** L'exemple ci-dessus supposait une capacité disponible. Lorsque la capacité est *saturée*, la question bascule : il ne s'agit plus de savoir si une unité est rentable, mais quelle unité produire en priorité quand une ressource manque. C'est l'objet de l'optimisation des capacités et de la théorie des contraintes."
        }
      ]
    },
    {
      "id": "5-optimisation-des-capacites-theorie-des-contraintes-et-yiel",
      "title": "5. Optimisation des capacités, théorie des contraintes et *yield management*",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : adapté-complété (capacités, goulot, exemple chiffré : repris de l'ancien cours, Cours 1) et créé (formalisation TOC de Goldratt, yield management). Savoir associé : « optimisation des capacités : gestion des goulots d'étranglement et yield management ».*"
        },
        {
          "type": "h3",
          "text": "5.1 Les différentes mesures de la capacité"
        },
        {
          "type": "p",
          "text": "Piloter une capacité suppose d'abord de la définir, car le mot recouvre plusieurs réalités dont la confusion est une source d'erreur fréquente."
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Les niveaux de capacité *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Définition**",
            "**Hypothèse implicite**",
            "**Usage**"
          ],
          "rows": [
            [
              "**Capacité théorique (maximale)**",
              "Production maximale en fonctionnement continu idéal, sans aucun arrêt",
              "Aucune panne, aucun changement de série, 24 h/24",
              "Borne haute irréaliste ; référence d'ingénierie"
            ],
            [
              "**Capacité pratique**",
              "Capacité théorique diminuée des arrêts inévitables (maintenance, congés, réglages)",
              "Arrêts normaux pris en compte",
              "Base réaliste de dimensionnement"
            ],
            [
              "**Capacité normale**",
              "Niveau d'activité moyen attendu sur le moyen terme, intégrant la saisonnalité de la demande",
              "Demande moyenne pluri-périodes",
              "**Base de l'imputation rationnelle des charges fixes**"
            ],
            [
              "**Capacité réelle (effective)**",
              "Production effectivement réalisée sur la période",
              "Constatée *a posteriori*",
              "Mesure de l'activité ; base des écarts"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Deux ratios de pilotage en découlent :"
        },
        {
          "type": "ul",
          "items": [
            "**Taux d'utilisation** = capacité réelle / capacité pratique → mesure le degré de sollicitation de l'outil.",
            "**Taux d'occupation (ou de remplissage)** = quantité produite ou vendue / capacité offerte → central pour les services à capacité périssable (cf. *yield management*, §5.4)."
          ]
        },
        {
          "type": "p",
          "text": "L'écart entre capacité normale et capacité réelle fonde le **coût de sous-activité** (ou *boni* de suractivité), via l'imputation rationnelle : l'ancien cours rappelle qu'une activité à 76 % d'une norme à 80 % induit un malus de sous-activité — illustration directe du lien capacité ↔ coût."
        },
        {
          "type": "h3",
          "text": "5.2 La théorie des contraintes (Goldratt) : le débit avant le coût"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé (formalisation), s'appuyant sur l'exemple chiffré de goulot de l'ancien cours.*"
        },
        {
          "type": "h4",
          "text": "5.2.1 Fondements"
        },
        {
          "type": "p",
          "text": "Eliyahu **Goldratt**, dans *The Goal* (« Le But », 1984), développe la **théorie des contraintes** (*Theory of Constraints*, TOC). Son intuition est radicale : **tout système est limité par un très petit nombre de contraintes** ; le débit global du processus est entièrement déterminé par son maillon le plus faible — le **goulot d'étranglement** (*bottleneck*). Optimiser un poste non-goulot n'augmente pas la production : cela ne fait que gonfler les en-cours devant le goulot. La célèbre analogie de la troupe de scouts en marche le résume : la colonne avance à la vitesse du plus lent, et faire accélérer les plus rapides ne fait qu'étirer la file."
        },
        {
          "type": "p",
          "text": "La TOC opère un renversement par rapport au contrôle de gestion traditionnel : elle privilégie le **débit** (*throughput*, défini comme le rythme auquel le système génère de l'argent par les ventes) sur la réduction des coûts locaux. Trois indicateurs : le **débit** (T), les **stocks/investissements** (I), les **dépenses d'exploitation** (OE) — l'objectif étant d'augmenter T tout en réduisant I et OE."
        },
        {
          "type": "h4",
          "text": "5.2.2 Les cinq étapes focalisées d'amélioration continue"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Méthode (cycle TOC).** 1. **Identifier** la contrainte (le goulot) du système. 2. **Exploiter** la contrainte : en tirer le maximum sans investissement (éliminer ses temps morts, ne lui faire traiter que du bon, la faire tourner pendant les pauses). 3. **Subordonner** tout le reste à la contrainte : les postes non-goulots travaillent au rythme du goulot (inutile de produire plus vite en amont). 4. **Élever** la contrainte : si nécessaire, investir pour augmenter sa capacité (heures sup., machine supplémentaire, sous-traitance). 5. **Recommencer** : une fois la contrainte levée, une autre apparaît ailleurs — la contrainte se déplace. Ne jamais laisser l'inertie devenir la nouvelle contrainte."
        },
        {
          "type": "h4",
          "text": "Schéma 3 — Système de production avec goulot *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/03.png",
          "alt": "Schéma 3 — Système de production avec goulot *(obligatoire)*",
          "width": 1980,
          "height": 836
        },
        {
          "type": "h4",
          "text": "5.2.3 Décision sous contrainte : la marge par unité de facteur rare"
        },
        {
          "type": "p",
          "text": "Lorsqu'un facteur est rare (heures-goulot, matière contingentée), le critère de décision n'est plus la marge par produit, mais la **marge sur coût variable par unité de facteur rare**. On donne la priorité au produit qui « rentabilise » le mieux la ressource contrainte. C'est l'application directe de l'exemple de l'ancien cours (« lorsque les ventes possibles excèdent les capacités de production »)."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré 4 — Arbitrage de production sous goulot *(adapté de l'ancien cours)*"
        },
        {
          "type": "p",
          "text": "L'atelier B (goulot) dispose de **2 400 minutes** disponibles par semaine. Deux produits se disputent cette ressource :"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Produit X**",
            "**Produit Y**"
          ],
          "rows": [
            [
              "Prix de vente",
              "80 €",
              "120 €"
            ],
            [
              "Coût variable unitaire",
              "50 €",
              "78 €"
            ],
            [
              "**Marge sur coût variable (MCV)**",
              "**30 €**",
              "**42 €**"
            ],
            [
              "Temps requis sur le goulot B",
              "10 min",
              "20 min"
            ],
            [
              "**MCV par minute de goulot**",
              "**3,00 €/min**",
              "**2,10 €/min**"
            ],
            [
              "Demande maximale",
              "150 u",
              "120 u"
            ]
          ]
        },
        {
          "type": "p",
          "text": "À l'intuition, Y semble préférable (MCV de 42 € > 30 €). **Mais au regard de la ressource rare, X rapporte 3,00 €/min contre 2,10 €/min pour Y.** Programme optimal :"
        },
        {
          "type": "ul",
          "items": [
            "Servir X en priorité : 150 × 10 = 1 500 min → MCV = 150 × 30 = 4 500 €.",
            "Reste 2 400 − 1 500 = 900 min pour Y → 900 / 20 = 45 unités de Y → MCV = 45 × 42 = 1 890 €.",
            "**MCV totale = 6 390 €.**"
          ]
        },
        {
          "type": "p",
          "text": "*Vérification de l'erreur classique* : prioriser Y (le « plus margé ») donnerait 120 × 20 = 2 400 min, soit 120 Y et 0 X → MCV = 5 040 € seulement. **L'arbitrage par la ressource rare rapporte 1 350 € de plus.** C'est exactement le type de raisonnement que l'épreuve attend, accompagné d'une préconisation (ex. : « élever la contrainte » en sous-traitant une partie de Y)."
        },
        {
          "type": "h3",
          "text": "5.3 *Yield management* / *revenue management* : optimiser le revenu d'une capacité périssable"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Le yield management était listé comme « concept à connaître » dans l'ancien cours mais non développé ; le nouveau référentiel l'inscrit dans les savoirs associés de 2.1.*"
        },
        {
          "type": "h4",
          "text": "5.3.1 Fondements"
        },
        {
          "type": "p",
          "text": "Le ***yield management***(gestion du rendement, ou*revenue management*) est l'ensemble des techniques d'optimisation du revenu** par ajustement dynamique des prix et de l'allocation des capacités, en fonction de la demande prévue. Né dans le transport aérien américain après la déréglementation de 1978 (American Airlines), il répond à une situation très précise."
        },
        {
          "type": "h4",
          "text": "5.3.2 Conditions de mise en œuvre"
        },
        {
          "type": "p",
          "text": "Le *yield management* n'est pertinent que si plusieurs conditions sont réunies :"
        },
        {
          "type": "ul",
          "items": [
            "**capacité fixe et périssable** à court terme (un siège d'avion, une chambre d'hôtel, une place de spectacle invendus le jour J sont définitivement perdus) ;",
            "**coût marginal de la dernière unité vendue très faible** (remplir un siège vide ne coûte presque rien) ;",
            "**demande variable et segmentable** (clients sensibles au prix *vs* clients sensibles à la disponibilité) ;",
            "possibilité de **réservation anticipée** et de **différenciation tarifaire** (clôtures, conditions de modification) ;",
            "**systèmes d'information** capables de prévoir la demande et de piloter les prix en temps réel."
          ]
        },
        {
          "type": "h4",
          "text": "5.3.3 Méthodes de tarification"
        },
        {
          "type": "p",
          "text": "La tarification combine : **segmentation** de la clientèle (barrières tarifaires : durée de séjour, flexibilité, anticipation) ; **tarification différenciée** dans le temps (le prix monte à mesure que la date approche et que le remplissage progresse) ; **gestion des contingents** (nombre de places allouées à chaque classe tarifaire, réajusté dynamiquement) ; **surréservation** (*overbooking*) calculée sur le taux statistique de défection."
        },
        {
          "type": "h4",
          "text": "5.3.4 Applications sectorielles"
        },
        {
          "type": "p",
          "text": "Transport aérien (berceau historique), **hôtellerie** (prix par nuitée selon le taux d'occupation prévu), **tourisme** (séjours, croisières), **plateformes numériques** (tarification dynamique des VTC, de la billetterie événementielle, de l'énergie). Le point commun : une capacité contrainte et périssable, une demande hétérogène, un coût marginal faible."
        },
        {
          "type": "h4",
          "text": "Étude de cas — Compagnie aérienne *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Une compagnie opère un vol de **180 sièges**, coût fixe du vol **27 000 €** (soit 150 €/siège au seuil de remplissage complet), coût marginal par passager (repas, taxe) **20 €**. Trois segments :"
        },
        {
          "type": "table",
          "headers": [
            "**Segment**",
            "**Comportement**",
            "**Réservation**",
            "**Sensibilité prix**"
          ],
          "rows": [
            [
              "Loisir",
              "Réserve tôt, flexible sur dates, fuit les prix élevés",
              "J−60 à J−30",
              "Forte"
            ],
            [
              "Affaires",
              "Réserve tard, exige flexibilité, peu sensible au prix",
              "J−7 à J−1",
              "Faible"
            ],
            [
              "Dernière minute",
              "Opportuniste",
              "J−2 à J",
              "Variable"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Sans yield management* (tarif unique 200 €) : la compagnie remplit 120 sièges (les sensibles au prix et quelques affaires), laisse partir 60 sièges vides et refuse implicitement les clients affaires prêts à payer davantage. Revenu = 120 × 200 = 24 000 € → **perte de 3 000 €**."
        },
        {
          "type": "p",
          "text": "*Avec yield management* : 90 sièges « loisir » vendus tôt à 120 € (couvrent le coût marginal et participent aux fixes) ; 70 sièges « affaires » à 350 € ; 10 sièges dernière minute à 280 €. Revenu = (90×120) + (70×350) + (10×280) = 10 800 + 24 500 + 2 800 = **38 100 €** → résultat = 38 100 − 27 000 − (170×20) = **+7 700 €**."
        },
        {
          "type": "p",
          "text": "**Lecture managériale.** Le *yield management* ne « baisse » ni ne « monte » les prix : il **alloue la bonne capacité au bon client au bon prix au bon moment**, en exploitant la disposition à payer hétérogène. Tant que le prix d'un siège marginal dépasse son coût marginal (20 €), le vendre améliore le résultat — application directe de l'approche marginale du §4.5."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Avantages et limites du *yield management* *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Avantages**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Maximise le revenu d'une capacité fixe et périssable",
              "**Risque d'image / d'équité perçue** : clients irrités de payer plus que leur voisin"
            ],
            [
              "Valorise la disposition à payer de chaque segment",
              "Complexité technique et besoin de SI lourds"
            ],
            [
              "Améliore le taux de remplissage et lisse la demande",
              "**Surréservation** : risque de refus d'embarquement, indemnisations, litige"
            ],
            [
              "Coût marginal faible : presque tout revenu additionnel est du résultat",
              "Dépendance à la qualité des prévisions de demande"
            ],
            [
              "Transférable au-delà du transport (hôtellerie, plateformes)",
              "Questions **éthiques** : tarification opaque, discrimination par le prix"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 6 — Prix, taux de remplissage et revenu dans le temps *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/04.png",
          "alt": "Graphique 6 — Prix, taux de remplissage et revenu dans le temps *(obligatoire)*",
          "width": 1672,
          "height": 1012
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Coûts maîtrisés, capacités optimisées : reste à orienter le processus vers la *valeur* attendue par le client et le marché — au juste coût. C'est la fonction des outils de pilotage de la valeur que sont le *target costing* et l'analyse de la valeur."
        }
      ]
    },
    {
      "id": "6-piloter-la-valeur-target-costing-et-analyse-de-la-valeur",
      "title": "6. Piloter la valeur : *target costing* et analyse de la valeur",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris et adapté de l'ancien cours (Cours 3, « Target costing et analyse de la valeur »). Savoir associé : « gestion des processus de production : analyse de la valeur, coûts cibles ».*"
        },
        {
          "type": "h3",
          "text": "6.1 Le *target costing* (coût cible) : du marché au coût"
        },
        {
          "type": "h4",
          "text": "6.1.1 Principe et renversement de logique"
        },
        {
          "type": "p",
          "text": "Le ***target costing***(méthode des coûts cibles), formalisé au Japon (Toyota, années 1960-70) et théorisé notamment par Tanaka et Monden, opère un renversement par rapport à la logique comptable traditionnelle. Le raisonnement classique est additif : `coût + marge = prix`. Le*target costing*part du marché** :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Équation fondatrice.** Coût cible = Prix de vente cible (accepté par le marché) − Marge cible (exigée par la stratégie)"
        },
        {
          "type": "p",
          "text": "Le coût n'est plus une donnée subie que l'on majore d'une marge ; c'est un **objectif à atteindre**, déterminé en amont, dès la conception du produit. C'est en phase de conception que se joue l'essentiel : on estime que **70 à 80 % du coût d'un produit est figé dès sa conception**, avant tout lancement en production. Agir sur les processus de production *après* coup ne corrige donc qu'une fraction du coût."
        },
        {
          "type": "h4",
          "text": "6.1.2 Coût cible, coût estimé et effort de réduction"
        },
        {
          "type": "p",
          "text": "Face au coût cible (ce que le produit *doit* coûter), on calcule le **coût estimé** (*drifting cost* : ce que le produit coûterait avec la conception et les processus actuels). L'écart définit l'**effort de réduction** à conduire par ingénierie de la valeur, en itérant jusqu'à convergence."
        },
        {
          "type": "h4",
          "text": "Schéma 4 — La boucle du *target costing*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/05.png",
          "alt": "Schéma 4 — La boucle du *target costing*",
          "width": 1804,
          "height": 924
        },
        {
          "type": "h4",
          "text": "Exemple chiffré 5 — Détermination d'un coût cible"
        },
        {
          "type": "p",
          "text": "Un fabricant d'électroménager veut lancer un robot culinaire. Étude de marché : prix acceptable **150 €**. Marge cible exigée : **20 % du prix**, soit 30 €. → **Coût cible = 150 − 30 = 120 €.** Le bureau d'études chiffre le **coût estimé** de la conception actuelle à **138 €**. **Effort de réduction = 18 € (13 %).** La démarche consiste alors à décomposer ce coût par **fonction** du produit (mixer, hacher, doser, design…), à confronter le coût de chaque fonction à la **valeur** qu'elle apporte aux yeux du client, et à réduire ou supprimer les coûts des fonctions surdimensionnées."
        },
        {
          "type": "h3",
          "text": "6.2 L'analyse de la valeur : le coût au service de la fonction"
        },
        {
          "type": "p",
          "text": "L'**analyse de la valeur** (Lawrence Miles, General Electric, années 1940 ; norme AFNOR) est la méthode complémentaire qui rend le *target costing* opérationnel. Elle définit la **valeur** comme le rapport entre la **fonction** rendue (ce que le produit fait pour l'utilisateur) et le **coût** nécessaire pour l'assurer :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "Valeur = Fonctions (satisfaction du besoin) / Coût"
        },
        {
          "type": "p",
          "text": "On améliore la valeur en augmentant la fonction à coût constant, en réduisant le coût à fonction constante, ou les deux. L'analyse fonctionnelle distingue **fonctions principales** (raison d'être du produit), **fonctions secondaires** et **fonctions inutiles ou superflues** (sur-qualité que le client ne valorise pas mais paie). La chasse aux fonctions superflues est le gisement d'économie privilégié — c'est ainsi que l'on comble l'écart de l'exemple 5."
        },
        {
          "type": "h4",
          "text": "Tableau 6 — *Target costing* et analyse de la valeur : articulation"
        },
        {
          "type": "table",
          "headers": [
            "",
            "***Target costing***",
            "**Analyse de la valeur**"
          ],
          "rows": [
            [
              "Question",
              "Combien le produit **doit-il** coûter ?",
              "Chaque euro dépensé **crée-t-il** de la valeur pour le client ?"
            ],
            [
              "Point de départ",
              "Prix de marché et marge stratégique",
              "Besoin et fonctions attendues"
            ],
            [
              "Horizon",
              "Conception (amont)",
              "Conception **et** amélioration continue"
            ],
            [
              "Apport au pilotage des processus",
              "Fixe l'objectif de coût à atteindre",
              "Fournit la méthode pour l'atteindre"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Lien processus.** *Target costing* et analyse de la valeur ne portent pas que sur le produit : ils s'appliquent au **processus de production lui-même**, dont on questionne chaque activité — apporte-t-elle de la valeur au client (au sens du *lean*, qui distingue activités à valeur ajoutée et gaspillages, *muda*) ? On rejoint ici la cartographie du §3 : chaque activité cartographiée peut être qualifiée « VA » ou « non-VA ».\n**Transition.** Maîtriser le coût et la valeur ne suffit pas si le processus produit des défauts. La qualité — et le coût de la non-qualité — constitue le dernier pilier opérationnel du référentiel pour cette sous-partie."
        }
      ]
    },
    {
      "id": "7-gestion-strategique-de-la-qualite-et-analyse-des-dysfoncti",
      "title": "7. Gestion stratégique de la qualité et analyse des dysfonctionnements",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Savoir associé : « gestion stratégique de la qualité et analyse des dysfonctionnements ».*"
        },
        {
          "type": "h3",
          "text": "7.1 De la conformité à la qualité totale"
        },
        {
          "type": "p",
          "text": "La qualité a connu une évolution doctrinale en plusieurs temps : du **contrôle final** (trier le bon du mauvais en sortie), on est passé à l'**assurance qualité** (garantir le processus par des procédures, normes ISO 9000), puis à la **qualité totale** (*Total Quality Management*) qui fait de la qualité l'affaire de tous et de chaque activité. Les figures de référence — **Deming** (roue PDCA : *Plan-Do-Check-Act*, amélioration continue), **Juran** (trilogie planification/contrôle/amélioration), **Ishikawa** (diagramme causes-effets en arête de poisson, cercles de qualité), **Crosby** (« la qualité est gratuite », *zéro défaut*) — fondent une approche où **prévenir coûte moins cher que réparer**."
        },
        {
          "type": "h3",
          "text": "7.2 Le coût d'obtention de la qualité (COQ)"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion mesure la qualité par le **coût d'obtention de la qualité**, classiquement décomposé en quatre catégories (modèle PAF : prévention, évaluation, défaillances)."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Les composantes du coût de la qualité"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Nature**",
            "**Exemples**",
            "**Logique**"
          ],
          "rows": [
            [
              "**Prévention**",
              "Coûts engagés pour éviter les défauts",
              "Formation, conception robuste, maintenance préventive",
              "**Coûts « voulus »** : investir ici…"
            ],
            [
              "**Évaluation (détection)**",
              "Coûts de contrôle et de vérification",
              "Contrôles, tests, audits qualité",
              "…et ici…"
            ],
            [
              "**Défaillances internes**",
              "Défauts détectés avant livraison",
              "Rebuts, reprises, déclassements",
              "…pour réduire ceux-là…"
            ],
            [
              "**Défaillances externes**",
              "Défauts détectés par le client",
              "Retours, garanties, pénalités, **perte d'image**",
              "…et surtout ceux-là (les plus coûteux)"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Principe de pilotage.** Les coûts de prévention et d'évaluation sont des **coûts de conformité** (maîtrisés, choisis) ; les défaillances internes et externes sont des **coûts de non-conformité** (subis). L'arbitrage stratégique consiste à augmenter les premiers pour faire chuter les seconds — les défaillances externes étant les plus destructrices car elles ajoutent au coût direct une perte de confiance difficilement chiffrable."
        },
        {
          "type": "h3",
          "text": "7.3 L'analyse des dysfonctionnements"
        },
        {
          "type": "p",
          "text": "Analyser un dysfonctionnement, c'est en rechercher la **cause racine** plutôt que traiter le symptôme. Les outils mobilisables (et attendus en situation DSCG) : le **diagramme d'Ishikawa** (5M : Matière, Main-d'œuvre, Méthode, Machine, Milieu), les **5 Pourquoi**, le **diagramme de Pareto** (loi 80/20 : 80 % des défauts proviennent de 20 % des causes — concentrer l'effort sur le vital). Ces outils relient directement la qualité à la **cartographie des processus** (§3) : on localise le dysfonctionnement sur la carte, on remonte à sa cause, on agit sur l'activité concernée. La limite de champ du référentiel précise un lien explicite avec la gestion des risques (renvoi sous-partie 2.5) : un dysfonctionnement récurrent est un risque opérationnel à cartographier."
        },
        {
          "type": "h4",
          "text": "Schéma 5 — Diagramme d'Ishikawa (arête de poisson, 5M)"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/06.png",
          "alt": "Schéma 5 — Diagramme d'Ishikawa (arête de poisson, 5M)",
          "width": 1804,
          "height": 924
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Coûts, capacités, valeur, qualité : l'outillage classique est posé. Le nouveau référentiel impose d'y ajouter la lecture des transformations contemporaines, qui reconfigurent en profondeur le pilotage des processus."
        }
      ]
    },
    {
      "id": "8-les-transformations-contemporaines-des-processus",
      "title": "8. Les transformations contemporaines des processus",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé. Exigé par la dimension « ouverture contemporaine » du nouveau référentiel et par la limite de champ (liens digital, ESG, automatisation).*"
        },
        {
          "type": "h3",
          "text": "8.1 Digitalisation et automatisation"
        },
        {
          "type": "p",
          "text": "La numérisation transforme le pilotage des processus à trois niveaux. L'**automatisation** des tâches répétitives par la **RPA** (*Robotic Process Automation*) libère des activités à faible valeur ajoutée, en particulier dans les processus administratifs et support. La **robotisation** des ateliers (cobots, lignes flexibles) reconfigure les capacités et déplace les goulots. Surtout, la digitalisation rend le processus **traçable en temps réel** : capteurs IoT, jumeaux numériques (*digital twins*), MES (*Manufacturing Execution Systems*) alimentent un flux continu de données qui rapproche le pilotage de l'instantané."
        },
        {
          "type": "h3",
          "text": "8.2 Intelligence artificielle et analyse de données"
        },
        {
          "type": "p",
          "text": "L'IA déplace le contrôle de gestion du **descriptif** (que s'est-il passé ?) vers le **prédictif** (que va-t-il se passer ?) et le **prescriptif** (que faire ?). Appliquée aux processus de production, elle alimente la **maintenance prédictive** (anticiper la panne du goulot avant qu'elle ne survienne), affine les **prévisions de demande** qui nourrissent le *yield management*, optimise en continu l'**allocation des capacités** et la tarification dynamique, et détecte les **anomalies qualité** par vision industrielle. Le contrôleur de gestion devient analyste de données et garant de la pertinence des modèles."
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Impact des nouvelles technologies sur les processus *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Technologie**",
            "**Apport au pilotage des processus**",
            "**Effet sur les coûts / capacités**",
            "**Risques et limites**"
          ],
          "rows": [
            [
              "**RPA / automatisation**",
              "Exécution sans erreur des tâches répétitives",
              "Baisse coûts de main-d'œuvre ; rebascule la structure vers les fixes",
              "Rigidité ; coût de paramétrage ; accompagnement du changement"
            ],
            [
              "**Robotisation / cobots**",
              "Flexibilité et cadence des ateliers",
              "Augmente la capacité ; déplace le goulot",
              "Investissement lourd (*sunk cost*) ; obsolescence"
            ],
            [
              "**IoT / capteurs / jumeau numérique**",
              "Traçabilité et pilotage en temps réel",
              "Réduit les arrêts ; affine l'imputation des coûts",
              "Cybersécurité ; volume de données à gouverner"
            ],
            [
              "**IA prédictive/prescriptive**",
              "Maintenance prédictive, prévision, optimisation",
              "Réduit la sous-activité ; optimise le revenu (yield)",
              "Boîte noire ; biais ; dépendance aux données"
            ],
            [
              "**Big data / analytics**",
              "Décision fondée sur la donnée",
              "Identifie gisements d'efficience",
              "Qualité des données ; coût des compétences"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 6 — Processus traditionnel *vs* processus augmenté par l'IA *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/07.png",
          "alt": "Schéma 6 — Processus traditionnel *vs* processus augmenté par l'IA *(obligatoire)*",
          "width": 1936,
          "height": 946
        },
        {
          "type": "h3",
          "text": "8.3 ESG, durabilité et performance durable"
        },
        {
          "type": "p",
          "text": "L'intégration des critères **ESG** (environnement, social, gouvernance) reconfigure le pilotage des processus de production. L'**internalisation des externalités** (§4.4) — prix du carbone, coût de retraitement, écotaxes — modifie les arbitrages de coût et peut renverser un classement de rentabilité entre produits ou procédés. La logique d'**économie circulaire** transforme les déchets en ressources (les sous-produits du §4.3 deviennent des intrants). Les processus sont désormais évalués non seulement sur le triptyque coût-qualité-délai, mais sur leur **empreinte environnementale et sociale**. Ce point ouvre directement sur le pilotage stratégique de la durabilité (renvoi sous-partie 3.2 : double matérialité, bilan carbone, KPI ESG) et sur la performance globale (renvoi 3.3)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces transformations ne suppriment pas les arbitrages fondamentaux du pilotage : elles les déplacent et les intensifient. C'est l'objet des approfondissements DSCG."
        }
      ]
    },
    {
      "id": "9-approfondissements-dscg",
      "title": "9. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé, orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "9.1 Les arbitrages et contradictions entre objectifs — le triangle QCD"
        },
        {
          "type": "p",
          "text": "L'erreur de raisonnement la plus pénalisée à l'examen est de traiter coût, qualité et délai comme des objectifs additifs que l'on maximiserait simultanément. Ils sont en **tension** : le **triangle QCD** (Qualité – Coût – Délai) modélise ces arbitrages. Réduire le délai peut imposer des heures supplémentaires (coût) ou un relâchement des contrôles (qualité) ; viser le zéro défaut alourdit les coûts de prévention. **La performance opérationnelle n'est pas l'optimisation d'un sommet mais le réglage d'un compromis cohérent avec la stratégie** : une stratégie de différenciation premium privilégiera la qualité ; une domination par les coûts arbitrera autrement."
        },
        {
          "type": "h4",
          "text": "Graphique 7 — Le triangle Coût – Qualité – Délai *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/08.png",
          "alt": "Graphique 7 — Le triangle Coût – Qualité – Délai *(obligatoire)*",
          "width": 1364,
          "height": 968
        },
        {
          "type": "h3",
          "text": "9.2 Les difficultés et pièges récurrents"
        },
        {
          "type": "ul",
          "items": [
            "**Confondre marge par produit et marge par unité de facteur rare** (§5.2.3) : en situation de goulot, c'est la seconde qui décide. Piège quasi systématique.",
            "**Intégrer un*sunk cost*dans une décision future** (§4.5) : un coût déjà engagé ne doit jamais peser sur un choix prospectif.",
            "**Imputer tout le coût de période aux seules unités finies** en négligeant les en-cours (§4.2).",
            "**Répartir les coûts conjoints au prorata des seules quantités** quand les valeurs diffèrent fortement (§4.3), faisant apparaître des produits faussement déficitaires.",
            "**Oublier les réserves** dans une décision de commande spéciale ou de *make-or-buy* (cannibalisation, capacité, effet prix) : l'examinateur attend une préconisation nuancée, pas un calcul sec.",
            "**Plaquer la chaîne de valeur de Porter** sur une question d'optimisation de processus : hors sujet partiel (cf. note de conformité)."
          ]
        },
        {
          "type": "h3",
          "text": "9.3 Les thèmes récurrents des sujets"
        },
        {
          "type": "p",
          "text": "Les sujets DSCG sur cette sous-partie mobilisent typiquement : un calcul de coût de production complexe (en-cours et/ou conjoints) débouchant sur une **décision** ; un arbitrage de production sous contrainte de capacité ; une appréciation d'opportunité d'une commande spéciale en coûts pertinents ; la construction ou la lecture critique d'une cartographie à partir d'un texte ; un raisonnement de *target costing*. Le tout couronné par une **synthèse rédigée et structurée** avec préconisations — d'où l'importance de la forme « copie » (analyser la situation → sélectionner l'outil → calculer → évaluer → préconiser)."
        }
      ]
    },
    {
      "id": "10-synthese-generale",
      "title": "10. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "10.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Le pilotage des processus de production constitue le maillon opérationnel par lequel la stratégie devient performance réalisée. Le chapitre a montré qu'une organisation pensée seulement en fonctions s'expose à l'optimisation locale au détriment de l'optimum global : la **logique processus**, transversale et orientée client interne ou externe, corrige cette myopie en faisant du flux — et non du silo — l'unité de pilotage. Encore faut-il rendre ce flux visible : la **cartographie** (SIPOC, logigramme, BPMN) en est l'instrument, attendu de façon opératoire à l'examen puisqu'il s'agit de construire un diagramme à partir de données textuelles."
        },
        {
          "type": "p",
          "text": "Vient ensuite le cœur technique du référentiel. Le **calcul des coûts de production** ne peut ignorer les réalités productives : les **en-cours** se valorisent par les équivalents-produits finis ; les **produits conjoints** se répartissent au prorata de leur valeur plutôt que de leurs seules quantités ; les **sous-produits, déchets et externalités** s'intègrent désormais au coût, sous l'effet de leur internalisation croissante. Pour décider, le contrôleur raisonne en **coûts pertinents** — futurs et différentiels —, écarte les **coûts irrécupérables** et mobilise l'**approche marginale**."
        },
        {
          "type": "p",
          "text": "Lorsque la capacité devient rare, le raisonnement bascule : la **théorie des contraintes** de Goldratt établit que le débit du système est fixé par son goulot, et que la décision se prend à la **marge par unité de facteur rare**. Le ***yield management***prolonge cette logique pour les capacités fixes et périssables, en allouant la bonne capacité au bon client, au bon prix, au bon moment. En amont, le***target costing***et l'analyse de la valeur orientent produit et processus vers la valeur attendue par le marché, au coût qu'il accepte. La gestion stratégique de la qualité ferme la boucle : prévenir coûte moins que réparer, et le coût de la non-qualité — surtout externe — est le plus destructeur. Enfin, digitalisation, IA et ESG déplacent le pilotage vers le temps réel, le prédictif et la durabilité, sans abolir les arbitrages fondamentaux que synthétise le triangle Coût-Qualité-Délai**, dont le réglage doit rester cohérent avec la stratégie déployée."
        },
        {
          "type": "h3",
          "text": "10.2 Carte mentale textuelle"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-processus-production/09.png",
          "alt": "10.2 Carte mentale textuelle",
          "width": 2200,
          "height": 1232
        },
        {
          "type": "h3",
          "text": "10.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Auteur(s) de référence**",
            "**Apport principal**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Approche processus",
              "Hammer & Champy ; Lorino ; Zarifian",
              "Transversalité ; valeur pour le client interne/externe",
              "Refonte coûteuse ; résistance au changement",
              "Reconfiguration de tout processus de production/service"
            ],
            [
              "Cartographie",
              "(outils : SIPOC, BPMN)",
              "Rend le processus visible, mesurable, améliorable",
              "Carte du « prescrit » ≠ flux réel",
              "Diagnostic, coûtage, automatisation"
            ],
            [
              "Équivalents-produits finis",
              "Comptabilité de gestion",
              "Valorise correctement en-cours et produits finis",
              "Estimation du % d'avancement",
              "Industries de process (agro, chimie)"
            ],
            [
              "Coûts conjoints (valeur de marché / VNR)",
              "Comptabilité de gestion",
              "Répartit un coût commun selon la valeur",
              "Suppose un prix au point de séparation",
              "Raffinage, scierie, abattage, laiterie"
            ],
            [
              "Coûts pertinents / *sunk costs*",
              "Théorie de la décision",
              "Isole les coûts futurs et différentiels",
              "Risque d'oublier le coût d'opportunité",
              "Commande spéciale, *make-or-buy*"
            ],
            [
              "Théorie des contraintes",
              "E. Goldratt",
              "Débit fixé par le goulot ; 5 étapes ; MCV/unité rare",
              "Vision centrée production",
              "Arbitrage de programme sous capacité limitée"
            ],
            [
              "*Yield management*",
              "American Airlines (déréglementation)",
              "Optimise le revenu d'une capacité périssable",
              "Risques d'équité, éthiques, prévisionnels",
              "Aérien, hôtellerie, tourisme, plateformes"
            ],
            [
              "*Target costing*",
              "Tanaka, Monden (Toyota)",
              "Coût = prix marché − marge ; coût décidé dès la conception",
              "Pression sur fournisseurs ; horizon conception",
              "Conception de produits de grande série"
            ],
            [
              "Analyse de la valeur",
              "L. Miles (GE)",
              "Valeur = fonction / coût ; chasse aux fonctions superflues",
              "Mesure subjective de la valeur perçue",
              "Conception produit ET processus (lean)"
            ],
            [
              "Coût d'obtention de la qualité",
              "Deming, Juran, Crosby, Ishikawa",
              "Conformité vs non-conformité ; prévenir < réparer",
              "Coûts d'image difficiles à chiffrer",
              "Pilotage qualité, analyse des dysfonctionnements"
            ]
          ]
        }
      ]
    },
    {
      "id": "11-fiche-de-revision-dscg",
      "title": "11. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Format de révision express — sous-partie 2.1.*"
        },
        {
          "type": "h3",
          "text": "11.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Processus** : enchaînement transversal d'activités produisant un *output* de valeur pour un client interne ou externe.",
            "**Goulot d'étranglement** : ressource dont la capacité borne le débit de tout le système.",
            "**Coût pertinent** : coût futur et différentiel modifié par la décision (≠ *sunk cost*).",
            "**Coût irrécupérable (*sunk cost*) : coût déjà engagé, non récupérable, non pertinent**.",
            "**Coût cible** : prix de vente cible − marge cible.",
            "**Yield management** : optimisation du revenu d'une capacité fixe et périssable par tarification et allocation dynamiques.",
            "**Équivalent-produit fini** : conversion des en-cours en unités finies selon le % d'avancement."
          ]
        },
        {
          "type": "h3",
          "text": "11.2 Auteurs à retenir"
        },
        {
          "type": "p",
          "text": "Hammer & Champy (*reengineering*) · Lorino (gestion par les activités) · Zarifian (caractéristiques du processus) · Davenport (mesure du processus) · Goldratt (théorie des contraintes, *The Goal*) · Tanaka/Monden (*target costing*, Toyota) · Miles (analyse de la valeur) · Deming/Juran/Ishikawa/Crosby (qualité) · Porter (chaîne de valeur — cadrage uniquement)."
        },
        {
          "type": "h3",
          "text": "11.3 Concepts essentiels"
        },
        {
          "type": "p",
          "text": "EPF · répartition des coûts conjoints (physique / valeur de marché / VNR) · traitement des sous-produits par déduction · approche marginale · 5 étapes de la TOC · MCV par unité de facteur rare · conditions du *yield management* · boucle *target costing* · COQ (modèle PAF) · 5M d'Ishikawa · triangle QCD."
        },
        {
          "type": "h3",
          "text": "11.4 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Marge/produit vs marge/unité rare · intégrer un *sunk cost* · oublier les en-cours · répartir les conjoints aux seules quantités · décision sans réserves · plaquer Porter hors sujet."
        },
        {
          "type": "h3",
          "text": "11.5 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Valoriser produits finis et en-cours par la méthode des équivalents-produits finis, puis en déduire un prix de cession.",
            "Répartir un coût conjoint par deux méthodes et discuter l'impact sur la rentabilité apparente des produits.",
            "Déterminer le programme de production optimal sous contrainte d'un goulot et préconiser comment élever la contrainte.",
            "Apprécier l'opportunité d'une commande spéciale en coûts pertinents et formuler les réserves.",
            "Construire une cartographie (SIPOC + logigramme) à partir d'un énoncé textuel et identifier les dysfonctionnements.",
            "Déterminer un coût cible, l'effort de réduction, et proposer une démarche d'analyse de la valeur.",
            "Discuter l'apport et les limites du *yield management* pour une entreprise de services."
          ]
        },
        {
          "type": "h3",
          "text": "11.6 Liens avec les autres sous-parties du référentiel"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : diagnostic stratégique et chaîne de valeur (1.1, 1.3) — la stratégie fixe l'arbitrage QCD.",
            "**Latéral (Partie 2)** : pilotage des projets (2.2, triptyque QCD partagé) ; processus support (2.3) ; gestion des risques et dysfonctionnements (2.5).",
            "**Aval (Partie 3)** : gestion prévisionnelle et contrôle budgétaire (3.1) ; pilotage de la durabilité — internalisation des externalités, ESG (3.2) ; performance globale et tableaux de bord/BSC (3.3).",
            "**Transversal** : liens explicites prévus par le référentiel avec l'UE5 (systèmes d'information) pour la modélisation des processus."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.1 « Le pilotage des processus de production ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
