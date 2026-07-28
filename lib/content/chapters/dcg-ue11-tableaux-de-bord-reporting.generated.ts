// Généré par scripts/convert-docx.mjs depuis CHAPITRE_15__LES_TABLEAUX_DE_BORD_ET_LE_REPORTING.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-tableaux-de-bord-reporting",
  "level": "DCG",
  "ue": "UE11",
  "number": 15,
  "title": "Les tableaux de bord et le reporting",
  "description": "",
  "durationMin": 35,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "Place dans le manuel. Le référentiel rénové introduit les tableaux de bord très tôt — dès le §1.2 « Analyser le contrôle de gestion comme aide au pilotage de la performance » — pour souligner leur rôle fédérateur, puis les décline dans toutes les parties suivantes (analyse des écarts au §3.3, pilotage de la qualité et des causes de non-performance au §4.2-4.3, amélioration de la performance globale au §4.4). Ce chapitre constitue le point d’aboutissement et de synthèse de cette logique : il pose le vocabulaire « indicateurs » et la démarche de conception réutilisés partout ailleurs, et développe la compétence dédiée du §4.1."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Délimiter les notions de pilotage et de tableaux de bord ; définir leur rôle.\n• Identifier, analyser, interpréter et concevoir un tableau de bord de gestion ; repérer des KPI (simples et globaux, financiers et extra-financiers) ; calculer et analyser des indicateurs de durabilité.\n• Identifier les indicateurs selon la structure (centres de responsabilité, chaîne de valeur) ; identifier les risques liés aux indicateurs et à leur mesure ; analyser avantages et limites.\n• Améliorer un tableau de bord ; proposer des indicateurs de performance globale par centre de responsabilité ; rédiger un écrit de conseil.\n• Tableaux de bord de gestion : objectifs, principes de conception, intérêts et limites.\n• La méthode OVAR et les facteurs clés de succès.\n• Indicateurs selon la structure : centres de responsabilité, chaîne de valeur.\n• Indicateurs financiers, extra-financiers et de durabilité (ESG).\n• Reporting, balanced scorecard (sensibilisation), risques liés aux indicateurs et à leur mesure."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "La comptabilité financière et la comptabilité de gestion sont des systèmes d’information puissants, mais ils ne sont pas conçus pour le pilotage en temps réel. Trois limites les rendent insuffisants pour diriger l’action au quotidien."
        },
        {
          "type": "ul",
          "items": [
            "**La lenteur.**Les états comptables sont disponibles avec retard ; or piloter, c’est réagir vite. Un renseignement approché mais immédiat est souvent plus utile qu’un chiffre exact connu trop tard.",
            "**La nature des données.**La comptabilité raisonne en unités monétaires ; elle peine à saisir la qualité, la satisfaction client, l’empreinte carbone ou le climat social, qui relèvent d’indicateurs non financiers.",
            "**L’exhaustivité.**La comptabilité enregistre tout, sans hiérarchiser. Le décideur, lui, a besoin de distinguer immédiatement l’essentiel de l’accessoire."
          ]
        },
        {
          "type": "p",
          "text": "Le **tableau de bord** répond à ce triple besoin de rapidité, de concision et de pluralité des indicateurs. Il sélectionne quelques mesures clés, les actualise fréquemment et les présente de façon lisible pour permettre au responsable d’analyser, d’anticiper et de réagir. Le programme rénové lui accorde une place centrale : il n’est plus un simple « état de reporting » financier, mais l’outil qui matérialise le passage de la **stratégie** à la **performance globale**."
        },
        {
          "type": "p",
          "text": "La logique d’ensemble peut se représenter comme une chaîne continue : la stratégie fixe le cap, les objectifs la chiffrent, les facteurs clés de succès identifient les leviers décisifs, les indicateurs les mesurent, le tableau de bord les rassemble, l’action corrige, et la performance en résulte. Chaque maillon conditionne le suivant."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/01.png",
          "alt": "Figure du cours",
          "width": 1800,
          "height": 420,
          "caption": "De la stratégie à la performance : la chaîne du pilotage"
        },
        {
          "type": "p",
          "text": "***Problématique.Comment concevoir un système d’indicateurs qui traduise fidèlement la stratégie, alerte à temps sur les dérives, équilibre financier et extra-financier, sans tomber dans la surcharge ni dans les effets pervers du pilotage par les chiffres ?*"
        }
      ]
    },
    {
      "id": "1-comprendre-le-tableau-de-bord-definition-et-finalites",
      "title": "1. Comprendre : le tableau de bord, définition et finalités",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Qu’est-ce qu’un tableau de bord ?"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Tableau de bord",
          "text": "Un tableau de bord est un document de synthèse, « sur mesure », constitué d’un ensemble sélectif d’indicateurs régulièrement mis à jour, destiné à un responsable pour suivre son activité, mesurer la performance, alerter sur les écarts et aider à la décision."
        },
        {
          "type": "p",
          "text": "Trois mots résument cette définition. **Synthétique** : il tient en une page et une dizaine d’indicateurs significatifs. **Sur mesure** : son contenu dépend de l’activité et du responsable concerné ; il est **contingent**, jamais standardisé. **Orienté vers l’action** : chaque indicateur doit pouvoir déclencher une décision."
        },
        {
          "type": "p",
          "text": "Le mot **contrôle** a ici son double sens. Au sens restrictif, il signifie *vérifier* (comparer le réalisé à la norme). Au sens large, plus fidèle à l’esprit du programme, il signifie *maîtriser* — « avoir le contrôle de » son activité. Le tableau de bord s’inscrit d’abord dans cette seconde perspective : c’est un instrument de pilotage, non de simple surveillance."
        },
        {
          "type": "h4",
          "text": "Le tableau de bord répond à trois questions"
        },
        {
          "type": "table",
          "headers": [
            "**Question**",
            "**Rôle de l’outil**"
          ],
          "rows": [
            [
              "Où en suis-je ?",
              "Mesurer la situation actuelle au regard des objectifs (constat)."
            ],
            [
              "Où vais-je ?",
              "Anticiper les évolutions et repérer les dérives à temps (alerte)."
            ],
            [
              "Que dois-je faire ?",
              "Déclencher des actions correctrices et éclairer la décision (pilotage)."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "1.2 Les finalités du tableau de bord"
        },
        {
          "type": "p",
          "text": "Au-delà de la mesure, le tableau de bord remplit plusieurs fonctions complémentaires dans l’organisation."
        },
        {
          "type": "h4",
          "text": "Un outil de pilotage"
        },
        {
          "type": "p",
          "text": "Il fournit au responsable les informations essentielles, le plus rapidement et le plus régulièrement possible, pour s’assurer que les objectifs sont atteints et réagir sans délai. Il intègre des données a posteriori (résultats des centres de responsabilité) mais aussi des informations prévisionnelles, qualitatives ou environnementales qui concourent à la décision."
        },
        {
          "type": "h4",
          "text": "Un outil de coordination et de communication"
        },
        {
          "type": "p",
          "text": "Il organise le dialogue entre celui qui a reçu une délégation et celui qui l’a accordée. Ce dialogue s’instaure dès la conception (sur quels indicateurs s’accorde-t-on ?) et se poursuit pendant le pilotage. Le tableau de bord devient ainsi un langage commun entre niveaux hiérarchiques et entre fonctions."
        },
        {
          "type": "h4",
          "text": "Un outil de responsabilisation et d’évaluation"
        },
        {
          "type": "p",
          "text": "Dans les organisations découpées en centres de responsabilité, il permet de vérifier que la stratégie est mise en œuvre et que les efforts attendus sont déployés. Chaque indicateur est rattaché à un responsable, ce qui rend l’évaluation possible — à condition que le responsable maîtrise effectivement le levier mesuré (principe de contrôlabilité)."
        },
        {
          "type": "h4",
          "text": "Un outil d’aide à la décision"
        },
        {
          "type": "p",
          "text": "C’est la finalité ultime, mise en avant par le programme rénové : le tableau de bord n’a de valeur que s’il débouche sur une décision. Un indicateur que l’on regarde sans jamais agir dessus est inutile."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Flash et tableau de bord définitif",
          "text": "La rapidité étant essentielle, on diffuse souvent un « flash » (données approchées, par exemple hebdomadaires) en attendant le tableau de bord définitif (souvent mensuel). Mieux vaut une information approximative à temps qu’une information exacte trop tardive."
        },
        {
          "type": "h3",
          "text": "1.3 Les caractéristiques d’un bon tableau de bord"
        },
        {
          "type": "p",
          "text": "La clarté conditionne le succès d’un tableau de bord. Cinq qualités en font un outil efficace ; elles se traduisent par des exigences concrètes de conception."
        },
        {
          "type": "table",
          "headers": [
            "**Qualité**",
            "**Principe**",
            "**Exigence concrète**"
          ],
          "rows": [
            [
              "Pertinence",
              "Mesurer ce qui compte vraiment",
              "Indicateurs liés aux facteurs clés de succès, pas au « mesurable facile »"
            ],
            [
              "Sélectivité / simplicité",
              "Peu d’indicateurs, les plus significatifs",
              "Une page, une dizaine d’indicateurs au plus"
            ],
            [
              "Fiabilité",
              "Données exactes et objectives",
              "Sources traçables, modalités de calcul stables"
            ],
            [
              "Réactivité",
              "Disponible à temps pour agir",
              "Fréquence adaptée au rythme de décision"
            ],
            [
              "Lisibilité",
              "Compréhensible d’un coup d’œil",
              "Graphiques, codes couleur, comparaison objectif / réalisé / écart"
            ]
          ]
        },
        {
          "type": "p",
          "text": "On apprécie la qualité d’un indicateur à travers trois critères : sa **signification** (capacité à révéler durablement l’essentiel, avec objectivité et fiabilité), sa **rapidité d’obtention**, et son **utilité** (il a pour but l’action). Un bon indicateur est également compréhensible par celui qui l’utilise et difficile à manipuler."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Rakéo — un indicateur mal choisi",
          "text": "Le service e-commerce de Rakéo suivait le « nombre de visites du site ». Or ce chiffre montait sans que les ventes suivent : beaucoup de visiteurs quittaient le site au moment du paiement. L’indicateur n’était pas pertinent. Il a été remplacé par le taux de conversion (commandes / visites) et le taux d’abandon de panier, directement reliés au facteur clé de succès « transformer le trafic en ventes »."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — distinguer tableau de bord et comptabilité",
          "text": "Une question récurrente demande pourquoi la comptabilité ne suffit pas à piloter. Réponse attendue : lenteur, données exclusivement monétaires, absence de hiérarchisation. Le tableau de bord apporte rapidité, sélectivité et pluralité d’indicateurs (financiers et extra-financiers)."
        },
        {
          "type": "h3",
          "text": "1.4 Premiers repères sur les limites"
        },
        {
          "type": "p",
          "text": "Un tableau de bord mal conçu ou mal utilisé peut nuire au pilotage. On en pose ici les premiers repères ; la Partie 4 y consacre une analyse critique complète."
        },
        {
          "type": "ul",
          "items": [
            "**La surcharge informationnelle.**Trop d’indicateurs noie l’essentiel ; le responsable ne sait plus où regarder.",
            "**Les indicateurs inadaptés.**Plaquer des indicateurs standards sur toutes les entités, ou mesurer ce qui est facile plutôt que ce qui est utile, conduit à piloter à côté de la réalité.",
            "**La vision cloisonnée.**Organisés par centre, les tableaux de bord ignorent parfois la transversalité des processus.",
            "**La rigidité et les effets pervers.**Figés trop longtemps, ils ne suivent plus les besoins ; mesurer un comportement, c’est aussi l’orienter (voir Partie 4)."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Piège classique",
          "text": "Confondre « beaucoup d’indicateurs » et « bon tableau de bord ». Un tableau de bord de 40 lignes n’est pas un outil de pilotage : c’est un fichier comptable déguisé. La valeur vient de la sélection, pas de l’accumulation."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 1 (Comprendre)",
          "text": "Le tableau de bord est synthétique, sur mesure (contingent) et orienté vers l’action.\nQuatre finalités : pilotage, coordination/communication, responsabilisation, aide à la décision.\nCinq qualités : pertinence, sélectivité, fiabilité, réactivité, lisibilité.\nIl complète la comptabilité (lente, monétaire, exhaustive) par la rapidité et la sélectivité."
        }
      ]
    },
    {
      "id": "2-calculer-construire-le-systeme-d-indicateurs",
      "title": "2. Calculer : construire le système d’indicateurs",
      "blocks": [
        {
          "type": "p",
          "text": "C’est le cœur technique du chapitre. Construire un tableau de bord, c’est choisir les bons indicateurs : partir des facteurs clés de succès, suivre la méthode OVAR, décliner les indicateurs selon la structure de l’organisation, puis les organiser en niveaux et les articuler avec le reporting."
        },
        {
          "type": "h3",
          "text": "2.1 Les facteurs clés de succès (FCS)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Facteur clé de succès (FCS)",
          "text": "Un facteur clé de succès est une variable d’action essentielle dont la maîtrise conditionne l’atteinte des objectifs. Issue de l’analyse stratégique, la notion repose sur l’idée que le succès d’une organisation s’appuie sur un nombre restreint de domaines décisifs."
        },
        {
          "type": "p",
          "text": "Identifier les FCS, c’est répondre à la question : « Sur quels quelques leviers se joue réellement ma réussite ? » Les FCS sont contingents : ce qui est décisif pour une activité ne l’est pas pour une autre."
        },
        {
          "type": "table",
          "headers": [
            "**Activité**",
            "**Facteur clé de succès typique**"
          ],
          "rows": [
            [
              "Vente à distance",
              "Rapidité et fiabilité de la livraison"
            ],
            [
              "Magasin de sport haut de gamme",
              "Largeur et qualité de la gamme (nombre de références)"
            ],
            [
              "Laboratoire pharmaceutique",
              "Budget recherche et développement"
            ],
            [
              "Lancement d’un film",
              "Notoriété et publicité"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le budget R&D, FCS pour le laboratoire, n’en est pas un pour le vendeur à distance ; le délai de livraison, décisif pour ce dernier, est secondaire pour le magasin spécialisé. **Il n’existe pas de liste universelle de FCS** : c’est l’analyse de chaque activité qui les révèle."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Les facteurs clés de succès de Rakéo",
          "text": "La direction de Rakéo identifie quatre FCS à partir de sa stratégie (« être le référent du sport écoresponsable, en ligne et en B2B ») :\n**Qualité et innovation produit — le produit doit rester techniquement compétitive.**\n**Excellence logistique** — livrer vite et sans erreur, condition de la satisfaction e-commerce.\n**Maîtrise des coûts industriels** — préserver la marge malgré des matières recyclées plus chères.\n**Performance environnementale** — l’écoresponsabilité est un argument commercial autant qu’un engagement."
        },
        {
          "type": "h3",
          "text": "2.2 Les indicateurs clés de performance (KPI)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Indicateur clé de performance (KPI)",
          "text": "Un KPI (key performance indicator) est une mesure quantifiée d’un facteur clé de succès, comparée à une référence (objectif, période précédente, norme sectorielle), qui permet d’apprécier le degré d’atteinte d’un objectif et de déclencher l’action."
        },
        {
          "type": "p",
          "text": "On classe traditionnellement les indicateurs selon leur nature en trois grandes familles."
        },
        {
          "type": "h4",
          "text": "Les indicateurs financiers"
        },
        {
          "type": "p",
          "text": "Exprimés en valeur monétaire, ils apprécient un coût, un chiffre d’affaires, une marge, un résultat, une trésorerie, des créances. Ce sont les plus anciens et les plus objectifs, mais ils mesurent le passé et restent insuffisants seuls."
        },
        {
          "type": "h4",
          "text": "Les indicateurs quantitatifs non financiers"
        },
        {
          "type": "p",
          "text": "Volumes, délais, taux, effectifs : ils varient selon le centre piloté et révèlent souvent les causes des résultats financiers."
        },
        {
          "type": "h4",
          "text": "Les indicateurs qualitatifs"
        },
        {
          "type": "p",
          "text": "Satisfaction, motivation, image, climat social : plus ils sont qualitatifs, plus ils sont subjectifs, mais ils captent des dimensions essentielles de la performance globale. On les rend mesurables par des échelles, des enquêtes, des notes."
        },
        {
          "type": "p",
          "text": "Le programme rénové insiste sur l’équilibre entre indicateurs financiers et extra-financiers. Le tableau suivant illustre cette palette pour les différents centres de l’entreprise."
        },
        {
          "type": "table",
          "headers": [
            "**Domaine**",
            "**Exemples de KPI**"
          ],
          "rows": [
            [
              "Financiers",
              "Chiffre d’affaires, taux de marge, résultat, ROCE, BFR, coût unitaire"
            ],
            [
              "Commerciaux",
              "Taux de conversion, panier moyen, part de marché, taux de fidélité, coût d’acquisition client"
            ],
            [
              "Industriels",
              "Taux de rendement, taux de rebut, taux de panne, productivité, TRS"
            ],
            [
              "Logistiques",
              "Délai de livraison, taux de service, taux de rupture, coût de transport / commande"
            ],
            [
              "RH",
              "Absentéisme, turnover, heures de formation, fréquence des accidents"
            ],
            [
              "Qualité",
              "Taux de retour, nombre de réclamations, coût de non-qualité, taux de conformité"
            ],
            [
              "Environnementaux (E)",
              "Émissions CO₂ / unité, part d’énergie renouvelable, % matière recyclée, déchets"
            ],
            [
              "Sociaux & gouvernance (SG)",
              "Parité, écart salarial, % d’achats responsables, satisfaction des parties prenantes"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — KPI financiers et extra-financiers : la grille ESG",
          "text": "Les indicateurs de durabilité se structurent selon trois axes : **E** (environnement : carbone, énergie, eau, déchets), **S** (social : conditions de travail, parité, formation, sécurité) et **G** (gouvernance : éthique, transparence, achats responsables). Le programme demande une **sensibilisation** à ces indicateurs et leur traduction en mesures ; il ne s’agit pas de maîtriser le détail des normes de reporting de durabilité (ESRS), évoquées en Partie 3."
        },
        {
          "type": "h3",
          "text": "2.3 La méthode OVAR"
        },
        {
          "type": "p",
          "text": "**OVAR** (Objectifs — Variables d’Action — Responsables) est la démarche de référence pour concevoir un tableau de bord et sélectionner ses indicateurs. Son principe : ne jamais partir des indicateurs disponibles, mais **descendre de la stratégie vers les indicateurs**."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/02.png",
          "alt": "Les indicateurs qualitatifs",
          "width": 1640,
          "height": 600,
          "caption": "La logique OVAR : des objectifs aux responsables"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/03.png",
          "alt": "Les indicateurs qualitatifs",
          "width": 1806,
          "height": 1650,
          "caption": "Figure 1 — La logique OVAR : de la mission aux indicateurs (objectifs, facteurs clés de succès, indicateurs)."
        },
        {
          "type": "h4",
          "text": "Les trois étapes"
        },
        {
          "type": "ul",
          "items": [
            "**Objectifs.**Pour chaque entité (ou centre de responsabilité), préciser ce qu’elle doit atteindre, en lien direct avec la stratégie.",
            "**Variables d’action.**Identifier les leviers essentiels — les FCS — sur lesquels agir pour atteindre chaque objectif, puis les décliner par centre.",
            "**Responsables.**Rattacher clairement chaque variable, donc chaque indicateur, à un responsable qui maîtrise le levier correspondant."
          ]
        },
        {
          "type": "p",
          "text": "Pour chaque variable d’action, on précise ensuite : le niveau à atteindre (objectif) ou le seuil d’alerte, la modalité de calcul, les sources et moyens de collecte, et la fréquence de mesure. On obtient ainsi une grille OVAR qui croise objectifs et variables d’action, et débouche sur les indicateurs à retenir."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Grille OVAR du centre logistique de Rakéo",
          "text": "**Objectif** du centre : garantir la satisfaction e-commerce par une livraison rapide et fiable. **Variables d’action (FCS déclinés)** et indicateurs rattachés :"
        },
        {
          "type": "table",
          "headers": [
            "**Variable d’action**",
            "**Indicateur**",
            "**Cible**",
            "**Responsable**"
          ],
          "rows": [
            [
              "Rapidité de préparation",
              "Délai de préparation des commandes",
              "< 24 h",
              "Chef d’entrepôt"
            ],
            [
              "Fiabilité de préparation",
              "Taux d’erreur de préparation",
              "< 1 %",
              "Chef d’entrepôt"
            ],
            [
              "Disponibilité produit",
              "Taux de rupture de stock",
              "< 3 %",
              "Resp. approvisionnement"
            ],
            [
              "Performance transport",
              "Taux de livraison à l’heure",
              "> 95 %",
              "Resp. transport"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — OVAR",
          "text": "Aux examens, ce n’est pas la liste d’indicateurs retenus qui est évaluée, mais la démarche pour les déterminer et les justifier. Respecter l’enchaînement : objectif → variable d’action (FCS) → indicateur → cible → responsable → fréquence. Toujours justifier chaque indicateur par le FCS qu’il mesure. Un indicateur non rattaché à un objectif est hors sujet."
        },
        {
          "type": "h3",
          "text": "2.4 Les indicateurs selon la structure de l’organisation"
        },
        {
          "type": "p",
          "text": "Le référentiel demande explicitement de décliner les indicateurs selon la structure : par centre de responsabilité (logique verticale, hiérarchique) et le long de la chaîne de valeur (logique horizontale, transversale). Les deux approches sont complémentaires."
        },
        {
          "type": "h3",
          "text": "Par centre de responsabilité"
        },
        {
          "type": "p",
          "text": "À chaque type de centre correspondent des indicateurs adaptés à ce que le responsable maîtrise réellement — c’est le principe de contrôlabilité."
        },
        {
          "type": "table",
          "headers": [
            "**Type de centre**",
            "**Ce qu’il maîtrise**",
            "**Indicateurs adaptés**"
          ],
          "rows": [
            [
              "Centre de coûts",
              "Les charges, pas les recettes",
              "Coût unitaire, écart sur coûts, taux de rebut"
            ],
            [
              "Centre de revenus",
              "Le chiffre d’affaires",
              "CA, panier moyen, part de marché"
            ],
            [
              "Centre de profit",
              "Charges et produits",
              "Marge, résultat, taux de marge"
            ],
            [
              "Centre d’investissement",
              "Profit et capitaux engagés",
              "ROCE, ROI, EVA"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Rakéo — un indicateur par type de centre",
          "text": "L’atelier de fabrication est un centre de coûts : on le pilote au coût de production unitaire et au taux de rebut. Le e-commerce est un centre de profit : on le suit à la marge et au taux de conversion. La direction générale raisonne en centre d’investissement : ROCE et création de valeur. Plaquer le ROCE sur le chef d’atelier serait une erreur : il ne maîtrise pas les capitaux engagés."
        },
        {
          "type": "h3",
          "text": "Le long de la chaîne de valeur"
        },
        {
          "type": "p",
          "text": "La satisfaction du client final ne dépend pas d’un seul centre, mais de l’enchaînement de toutes les activités. Suivre un indicateur par maillon permet de localiser où se crée — ou se perd — la valeur, et de dépasser la vision cloisonnée par centre."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/04.png",
          "alt": "Les trois étapes",
          "width": 1800,
          "height": 640,
          "caption": "l’entreprise — indicateurs le long de la chaîne de valeur"
        },
        {
          "type": "p",
          "text": "Cette lecture transversale révèle, par exemple, qu’un excellent taux de conversion commercial est annulé par un délai logistique trop long : la valeur créée en amont est détruite en aval. C’est l’articulation des indicateurs, et non leur juxtaposition, qui éclaire la performance globale."
        },
        {
          "type": "h3",
          "text": "2.5 Niveaux de tableaux de bord et reporting"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion n’établit pas un, mais des tableaux de bord, organisés selon le principe de l’emboîtement gigogne, parallèlement à la ligne hiérarchique. Chaque niveau ne fait remonter au niveau supérieur que l’information essentielle."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/05.png",
          "alt": "Les trois étapes",
          "width": 1520,
          "height": 600,
          "caption": "L’emboîtement gigogne : un tableau de bord par centre, remontée sélective"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/06.png",
          "alt": "Les trois étapes",
          "width": 1515,
          "height": 761,
          "caption": "Figure 2 — L’emboîtement gigogne des tableaux de bord : intégration verticale parallèle à la ligne hiérarchique."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/07.png",
          "alt": "Les trois étapes",
          "width": 1640,
          "height": 500,
          "caption": "Opérationnel, tactique, stratégique : trois horizons de pilotage"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Destinataire**",
            "**Horizon**",
            "**Exemples d’indicateurs**"
          ],
          "rows": [
            [
              "Opérationnel",
              "Chef d’équipe, d’atelier",
              "Jour / semaine",
              "Production du jour, rebuts, retards de livraison"
            ],
            [
              "Tactique",
              "Responsable de fonction",
              "Mois / trimestre",
              "Marge commerciale, coût de production, taux de service"
            ],
            [
              "Stratégique",
              "Direction générale",
              "Trimestre / année",
              "ROCE, part de marché, performance ESG globale"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Le reporting"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Reporting",
          "text": "Le reporting est le processus de remontée périodique et normalisée d’informations des entités opérationnelles vers les niveaux hiérarchiques supérieurs, destiné à rendre compte des résultats et à vérifier l’atteinte des objectifs."
        },
        {
          "type": "p",
          "text": "Reporting et tableau de bord sont proches mais distincts. Le reporting est tourné **vers le haut** (rendre compte à la hiérarchie ou aux actionnaires) ; il est plutôt standardisé, exhaustif et financier. Le tableau de bord est tourné **vers l’action locale** (piloter son propre périmètre) ; il est sur mesure, sélectif et mêle financier et extra-financier. En pratique, les deux coexistent et se nourrissent."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/08.png",
          "alt": "Les trois étapes",
          "width": 1640,
          "height": 580,
          "caption": "Reporting et tableau de bord : deux logiques complémentaires"
        },
        {
          "type": "h3",
          "text": "Sensibilisation au balanced scorecard"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Balanced scorecard (tableau de bord prospectif)",
          "text": "Conçu par Kaplan et Norton (1992), le balanced scorecard est un tableau de bord stratégique qui équilibre quatre axes — financier, client, processus internes, apprentissage organisationnel — afin de traduire la vision et la stratégie en objectifs et indicateurs cohérents."
        },
        {
          "type": "p",
          "text": "Son apport, qu’il faut connaître au niveau de la sensibilisation : sortir du tout-financier en reliant des indicateurs d’effet (axe financier) à des indicateurs de cause (client, processus, apprentissage)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/09.png",
          "alt": "Les trois étapes",
          "width": 1440,
          "height": 840,
          "caption": "Les quatre axes du balanced scorecard, reliés par la stratégie"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Garde-fou de conformité — balanced scorecard",
          "text": "Au DCG, le balanced scorecard relève de la **sensibilisation** : on en comprend la logique (équilibrer financier et extra-financier, relier cause et effet). La **construction complète d’un BSC d’entreprise et les tableaux de bord stratégiques sont approfondis au DSCG**. On vise ici la capacité à concevoir, analyser, critiquer et améliorer un tableau de bord à tous les niveaux de décision."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 2 (Calculer)",
          "text": "La démarche : FCS → KPI → grille OVAR (objectif, indicateur, cible, responsable, fréquence).\nDécliner les indicateurs par centre de responsabilité (contrôlabilité) ET le long de la chaîne de valeur (transversalité).\nTrois niveaux emboîtés (opérationnel, tactique, stratégique) ; reporting = vers le haut, TB = local.\nBalanced scorecard : sensibilisation seulement (approfondissement DSCG)."
        }
      ]
    },
    {
      "id": "3-interpreter-exploiter-le-tableau-de-bord-pour-piloter-la-p",
      "title": "3. Interpréter : exploiter le tableau de bord pour piloter la performance globale",
      "blocks": [
        {
          "type": "p",
          "text": "Construire un tableau de bord ne suffit pas : encore faut-il l’exploiter. Cette partie montre comment lire les indicateurs, piloter une performance désormais globale et durable, mobiliser le numérique, et rédiger l’écrit de conseil attendu par le programme."
        },
        {
          "type": "h3",
          "text": "3.1 Le tableau de bord, instrument du pilotage"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Performance globale",
          "text": "La performance globale appréhende la réussite de l’organisation au-delà du seul résultat financier, en intégrant ses dimensions économique, sociale et environnementale, et la valeur créée pour l’ensemble des parties prenantes."
        },
        {
          "type": "p",
          "text": "Piloter la performance globale suppose un système d’indicateurs équilibré, relié à la stratégie et nourrissant une boucle de rétroaction : mesurer, analyser, décider, agir, puis réévaluer."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le tableau de bord de direction de Rakéo",
          "text": "Pour piloter sa performance globale, la direction de Rakéo adopte une vue équilibrée qui combine quatre perspectives : financière, client, processus et durabilité. Chaque indicateur est exprimé en taux d’atteinte de sa cible."
        },
        {
          "type": "p",
          "text": "*l’entreprise — tableau de bord de direction (taux d’atteinte des cibles)*"
        },
        {
          "type": "p",
          "text": "Lecture interprétative : la performance financière progresse (résultat à 106 % de la cible) mais la marge reste sous l’objectif (98 %), tandis que les indicateurs de durabilité avancent sans encore atteindre la cible (CO₂ à 80 %). Le pilotage consiste alors à arbitrer entre ces dimensions plutôt qu’à se réjouir du seul résultat."
        },
        {
          "type": "h3",
          "text": "3.2 Tableaux de bord et création de valeur"
        },
        {
          "type": "p",
          "text": "La performance globale se lit aussi comme la valeur créée pour chaque partie prenante. Le tableau de bord aide à équilibrer ces attentes parfois divergentes."
        },
        {
          "type": "table",
          "headers": [
            "**Partie prenante**",
            "**Valeur attendue**",
            "**Indicateur de suivi**"
          ],
          "rows": [
            [
              "Actionnaires",
              "Rentabilité, pérennité",
              "ROCE, résultat, création de valeur"
            ],
            [
              "Clients",
              "Qualité, prix, service",
              "Satisfaction, taux de retour, délai"
            ],
            [
              "Salariés",
              "Emploi, conditions, sens",
              "Climat social, sécurité, formation"
            ],
            [
              "Fournisseurs",
              "Relations équitables et durables",
              "Délais de paiement, % achats responsables"
            ],
            [
              "Société / environnement",
              "Impact maîtrisé",
              "Émissions CO₂, emplois locaux, déchets"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.3 Performance globale et durabilité : les tableaux de bord ESG"
        },
        {
          "type": "p",
          "text": "La traduction de la durabilité en indicateurs constitue le « nouveau point » du programme. Un tableau de bord ESG suit les engagements environnementaux, sociaux et de gouvernance, comparés à des cibles."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le tableau de bord ESG",
          "text": "l’entreprise suit cinq indicateurs de durabilité, chacun rapporté à sa cible annuelle. Les codes couleur signalent immédiatement les points de vigilance."
        },
        {
          "type": "p",
          "text": "*l’entreprise — tableau de bord ESG : taux d’atteinte des cibles*"
        },
        {
          "type": "p",
          "text": "La lecture est immédiate : l’énergie renouvelable (89 %) et la réduction des émissions (80 %) progressent bien, mais la part de matière recyclée (80 %), la parité de l’encadrement (72 %) et la fréquence des accidents (88 %) restent sous vigilance. Ces indicateurs extra-financiers se relient aux coûts (matières), à la qualité et au climat social — illustrant la transversalité de la performance globale."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ — traduire un enjeu en indicateur",
          "text": "La démarche est identique à OVAR : partir de l’enjeu (réduire l’empreinte carbone), identifier le levier (mix énergétique, transport, matières), puis définir l’indicateur (kg CO₂ par unité produite), sa cible et son responsable.\n**Cadre réglementaire (sensibilisation).**La directive CSRD impose progressivement un reporting de durabilité structuré par les normes ESRS. Au DCG, on comprend la logique — traduire des enjeux en indicateurs — sans maîtriser le détail des normes (DSCG).\n**Difficultés spécifiques.**disponibilité et fiabilité des données, périmètre de mesure, risque de greenwashing si l’indicateur flatte sans refléter l’impact réel."
        },
        {
          "type": "h3",
          "text": "3.4 Améliorer la performance globale : le prix de cession interne"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession interne (PCI)",
          "text": "Le prix de cession interne est le prix auquel un centre de responsabilité facture à un autre centre de la même entreprise un bien ou un service. Il permet d’évaluer la performance de chaque centre tout en organisant leurs échanges."
        },
        {
          "type": "p",
          "text": "Le PCI est un outil de pilotage de la performance globale : mal fixé, il peut opposer les centres ; bien fixé, il aligne leurs intérêts sur celui de l’entreprise. Trois méthodes principales existent."
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe**",
            "**Intérêt / limite**"
          ],
          "rows": [
            [
              "Prix de marché",
              "Le PCI égale le prix externe du bien",
              "Objectif et incitatif ; suppose un marché existant"
            ],
            [
              "Coût standard",
              "Le PCI égale le coût préétabli (complet ou partiel)",
              "Évite de transférer l’inefficience ; néglige l’offre externe"
            ],
            [
              "Coût réel",
              "Le PCI égale le coût constaté (complet ou partiel)",
              "Simple ; transfère les écarts du centre amont à l’aval"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — l’entreprise — cession entre l’atelier et l’assemblage",
          "text": "L’atelier « matières » fabrique des cadres de produit cédés au centre « Assemblage ». Si le PCI est le coût réel, toute dérive de l’atelier est supportée par l’assemblage, qui ne la maîtrise pas : l’évaluation devient injuste. En retenant le coût standard, l’atelier supporte ses propres écarts ; l’assemblage est évalué sur ce qu’il maîtrise. Le PCI clarifie ainsi les responsabilités — à condition que le tableau de bord de chaque centre en tienne compte."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Garde-fou de conformité — PCI",
          "text": "Au DCG, le PCI est abordé dans une logique de comparaison (prix de marché, coût standard, coût réel — complet ou partiel) et d’amélioration de la performance globale, sans les développements de négociation et de fiscalité internationale réservés au DSCG."
        },
        {
          "type": "h3",
          "text": "3.5 Tableaux de bord à l’ère du numérique"
        },
        {
          "type": "p",
          "text": "Le numérique transforme en profondeur la production et l’usage des tableaux de bord : la donnée circule en continu, le reporting s’automatise, et le pilotage devient prédictif."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/10.png",
          "alt": "3. Interpréter : exploiter le tableau de bord pour piloter la performance globale",
          "width": 1800,
          "height": 400,
          "caption": "De la donnée à la décision : la chaîne numérique du pilotage"
        },
        {
          "type": "ul",
          "items": [
            "**ERP / PGI.**Le progiciel de gestion intégré centralise les données autour d’une base unique : une vente saisie met à jour stocks, comptabilité et indicateurs sans ressaisie. C’est la source fiable des tableaux de bord.",
            "**Informatique décisionnelle (BI).**En aval de l’ERP, des outils de business intelligence consolident et restituent la donnée sous forme de tableaux de bord dynamiques, actualisés automatiquement, avec exploration interactive (drill-down).",
            "**Data visualisation.**Représenter graphiquement l’information pour la rendre immédiatement compréhensible : un bon graphique fait ressortir une tendance ou une anomalie plus vite qu’un tableau de chiffres."
          ]
        },
        {
          "type": "p",
          "text": "Les niveaux d’analyse de la donnée progressent en valeur : on passe du constat à l’anticipation, puis à la recommandation."
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Question**",
            "**Exemple l’entreprise**"
          ],
          "rows": [
            [
              "Descriptif",
              "Que s’est-il passé ?",
              "Le CA e-commerce a baissé de 4 % ce mois."
            ],
            [
              "Diagnostique",
              "Pourquoi ?",
              "Une rupture de stock sur le produit a fait fuir les acheteurs."
            ],
            [
              "Prédictif",
              "Que va-t-il se passer ?",
              "Sans réassort, la baisse atteindra 10 % le mois prochain."
            ],
            [
              "Prescriptif",
              "Que faut-il faire ?",
              "Réapprovisionner sous 48 h et ajuster le budget achats."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE",
          "text": "l’entreprise a connecté son ERP à un outil d’informatique décisionnelle. Les tableaux de bord commercial, logistique et ESG se rafraîchissent chaque nuit ; les responsables filtrent par produit, canal ou région. Le contrôleur ne passe plus ses journées à « fabriquer le reporting » : il anime le pilotage, analyse les écarts et conseille.\n**L’intelligence artificielle et l’automatisation** déchargent des tâches répétitives et permettent un pilotage prédictif (détection d’anomalies, prévision de ventes, alertes). Le jugement humain reste indispensable pour interpréter et décider."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Vigilance numérique",
          "text": "La qualité du tableau de bord dépend de la qualité des données : une BI alimentée par des données fausses produit de belles visualisations trompeuses. Enjeux de cybersécurité et de protection des données : la centralisation accroît le risque en cas de défaillance."
        },
        {
          "type": "h3",
          "text": "3.6 Le contrôleur de gestion, business partner"
        },
        {
          "type": "p",
          "text": "Cette évolution du pilotage transforme le métier. Le contrôleur de gestion n’est plus un simple producteur de chiffres : il devient l’analyste des données, le concepteur des tableaux de bord et le conseiller du décideur — un business partner."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/11.png",
          "alt": "3. Interpréter : exploiter le tableau de bord pour piloter la performance globale",
          "width": 1640,
          "height": 460,
          "caption": "L’évolution du rôle du contrôleur de gestion"
        },
        {
          "type": "p",
          "text": "Cette montée en valeur s’appuie sur trois familles de compétences : **techniques** (coûts, budgets, indicateurs), **numériques** (maîtrise des outils de données), et **comportementales** (communication, conseil, esprit critique). Le programme valorise particulièrement la capacité à **rédiger des écrits argumentés** pour conseiller le décideur à partir des indicateurs."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 3 (Interpréter)",
          "text": "Interpréter, c’est lire l’écart à la cible et arbitrer entre dimensions, pas se contenter du financier.\nLa performance globale intègre l’économique, le social et l’environnemental, pour toutes les parties prenantes.\nLe tableau de bord ESG traduit les enjeux de durabilité en indicateurs reliés à des cibles ; CSRD/ESRS en sensibilisation.\nLe PCI (marché, coût standard, coût réel) aligne les centres ; le numérique automatise et rend le pilotage prédictif.\nLe contrôleur devient business partner : analyste, concepteur, conseiller."
        }
      ]
    },
    {
      "id": "4-critiquer-risques-limites-et-amelioration-des-indicateurs",
      "title": "4. Critiquer : risques, limites et amélioration des indicateurs",
      "blocks": [
        {
          "type": "p",
          "text": "Le programme l’affirme : il est aussi essentiel de critiquer un tableau de bord que de le concevoir ou de l’améliorer. Cette partie analyse les risques liés aux indicateurs, leurs effets pervers, et la démarche d’amélioration."
        },
        {
          "type": "h3",
          "text": "4.1 Les risques liés aux indicateurs et à leur mesure"
        },
        {
          "type": "p",
          "text": "Le référentiel demande d’identifier les risques liés aux indicateurs et à leur mesure. On peut en distinguer six grandes catégories, qui se combinent souvent."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-tableaux-de-bord-reporting/12.png",
          "alt": "4. Critiquer : risques, limites et amélioration des indicateurs",
          "width": 1720,
          "height": 700,
          "caption": "Typologie des risques liés aux indicateurs et à leur mesure"
        },
        {
          "type": "ul",
          "items": [
            "**Risque de mesure.**Donnée fausse, périmètre flou, mode de calcul instable : l’indicateur n’est pas fiable et induit en erreur.",
            "**Risque de pertinence.**Mesurer ce qui est facile plutôt que ce qui est utile ; plaquer des indicateurs standards inadaptés à l’organisation.",
            "**Risque de manipulation.**Les acteurs optimisent l’indicateur, pas la performance réelle (loi de Goodhart).",
            "**Risque de cloisonnement.**Une vision locale par centre qui ignore la transversalité des processus.",
            "**Risque de surcharge.**Trop d’indicateurs : l’essentiel se noie dans l’accessoire, surtout à l’ère du big data.",
            "**Risque de greenwashing.**Un indicateur ESG qui flatte la communication sans refléter l’impact réel."
          ]
        },
        {
          "type": "h3",
          "text": "4.2 Les effets pervers du pilotage par les indicateurs"
        },
        {
          "type": "p",
          "text": "La **loi de Goodhart** résume le risque majeur : « quand une mesure devient un objectif, elle cesse d’être une bonne mesure ». Mesurer un comportement, c’est l’orienter — parfois dans le mauvais sens."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Effets pervers — exemples chez l’entreprise",
          "text": "**Court-termisme.**Pour tenir l’objectif de marge mensuel, un responsable repousse des dépenses de maintenance — au prix de pannes futures.\n**Manipulation.**Le service livraison enregistre une commande comme « livrée à l’heure » dès la sortie d’entrepôt, gonflant artificiellement le taux de service.\n**Sous-optimisation.**Le commercial maximise ses ventes sans tenir compte de la capacité logistique, créant des ruptures qui dégradent la satisfaction globale."
        },
        {
          "type": "h3",
          "text": "4.3 L’adéquation des indicateurs aux besoins"
        },
        {
          "type": "p",
          "text": "Le programme insiste sur un point précis : il ne faut jamais plaquer les mêmes indicateurs standards à toutes les organisations. L’adéquation aux besoins est un critère de conformité autant que de qualité."
        },
        {
          "type": "ul",
          "items": [
            "**Adapter au type d’organisation.**Une association suit le taux de réalisation de sa mission et le nombre de bénéficiaires ; une administration, des indicateurs de service public ; une PME industrielle comme l’entreprise, des indicateurs de coût, de qualité et d’empreinte.",
            "**Adapter au type d’activité.**Productive, commerciale ou de service : les FCS diffèrent, donc les indicateurs aussi.",
            "**Adapter au niveau de décision.**Opérationnel, tactique ou stratégique : un même phénomène se mesure différemment selon l’horizon."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreur fréquente",
          "text": "Reprendre tel quel le tableau de bord d’une autre entreprise ou d’un manuel. Un indicateur n’a de sens que rapporté aux FCS de l’organisation concernée : l’adéquation prime sur la standardisation."
        },
        {
          "type": "h3",
          "text": "4.4 Améliorer un tableau de bord existant"
        },
        {
          "type": "p",
          "text": "Critiquer n’a de valeur que si la critique débouche sur une amélioration. Face à un tableau de bord donné, la démarche d’amélioration suit quelques questions clés."
        },
        {
          "type": "table",
          "headers": [
            "**Question critique**",
            "**Amélioration possible**"
          ],
          "rows": [
            [
              "Que manque-t-il ?",
              "Ajouter des indicateurs de cause (avancés) et un cumul depuis le début de l’année"
            ],
            [
              "Qu’est-ce qui peut être manipulé ?",
              "Préciser le mode de calcul, croiser avec un indicateur de contrôle"
            ],
            [
              "Est-ce lisible et sélectif ?",
              "Réduire le nombre de lignes, ajouter codes couleur et comparaison objectif/réalisé"
            ],
            [
              "Est-ce équilibré ?",
              "Compléter le financier par de l’extra-financier (qualité, satisfaction, ESG)"
            ],
            [
              "Est-ce adapté ?",
              "Vérifier que chaque indicateur correspond à un FCS de l’entité"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — La posture d’examen",
          "text": "Face à un tableau de bord donné, attendez-vous à trois tâches : l’analyser (que disent les indicateurs ?), le critiquer (qu’est-ce qui manque, qu’est-ce qui peut être manipulé ?), et l’améliorer (quels indicateurs ajouter ou remplacer ?). La critique vaut autant que la conception."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 4 (Critiquer)",
          "text": "Six risques : mesure, pertinence, manipulation, cloisonnement, surcharge, greenwashing.\nEffets pervers (loi de Goodhart) : court-termisme, manipulation, sous-optimisation.\nAdéquation des indicateurs aux besoins : ne jamais plaquer des standards.\nAméliorer = ajouter des indicateurs de cause, fiabiliser, sélectionner, équilibrer, adapter."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus réforme 2027**"
        },
        {
          "type": "p",
          "text": "Le programme rénové place délibérément les tableaux de bord au cœur du cours, dès le §1.2, pour souligner leur rôle fédérateur, puis les décline dans chaque partie. Cinq évolutions expliquent cette centralité."
        },
        {
          "type": "ul",
          "items": [
            "**La performance devient multidimensionnelle.**On ne pilote plus le seul résultat, mais une performance globale économique, sociale et environnementale.",
            "**Les KPI extra-financiers montent en importance.**Les indicateurs de durabilité (ESG) deviennent un point explicite du programme (compétence 4.1).",
            "**Le pilotage devient global.**Le contrôle de gestion aide à piloter toute l’organisation, pour tous les niveaux de décision et toutes les formes d’organisation (privées, publiques, associatives).",
            "**Le numérique transforme le reporting.**ERP, informatique décisionnelle et IA automatisent la production et ouvrent le pilotage prédictif.",
            "**Le contrôleur devient un acteur stratégique.**Business partner et conseiller, il rédige des écrits argumentés pour éclairer la décision."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Ce que le DCG attend (et ne demande pas)",
          "text": "Attendu : définir, analyser, interpréter, concevoir, améliorer et critiquer un tableau de bord ; bâtir des KPI financiers et extra-financiers ; maîtriser OVAR ; décliner les indicateurs par centre et par chaîne de valeur ; identifier les risques liés aux indicateurs. **Hors programme DCG** (réservé au DSCG) : la construction complète d’un balanced scorecard d’entreprise, le détail des normes ESRS, la négociation et la fiscalité des prix de cession interne."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Applications corrigées**"
        }
      ]
    },
    {
      "id": "application-1-identifier-les-fcs-et-les-kpi",
      "title": "■ APPLICATION 1 — Identifier les FCS et les KPI",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "Énoncé",
          "text": "Le centre e-commerce de Rakéo (articles de sport écoresponsables) a pour objectif de transformer le trafic du site en ventes rentables, tout en fidélisant la clientèle. Le responsable dispose des données : visites, commandes, paniers abandonnés, marge, clients ayant recommandé. Travail à faire : identifier deux facteurs clés de succès et proposer, pour chacun, deux indicateurs justifiés."
        },
        {
          "type": "h4",
          "text": "Corrigé"
        },
        {
          "type": "p",
          "text": "**Démarche.**On part de l’objectif (transformer et fidéliser), on en déduit les leviers décisifs (FCS), puis on rattache à chaque levier des indicateurs mesurables."
        },
        {
          "type": "table",
          "headers": [
            "**FCS**",
            "**Indicateur**",
            "**Justification**"
          ],
          "rows": [
            [
              "Transformation du trafic",
              "Taux de conversion (commandes / visites)",
              "Mesure directement la capacité à transformer le trafic en ventes"
            ],
            [
              "",
              "Taux d’abandon de panier",
              "Repère la perte juste avant l’achat (frein à lever)"
            ],
            [
              "Fidélisation client",
              "Taux de réachat à 12 mois",
              "Mesure la fidélité réelle, plus rentable que l’acquisition"
            ],
            [
              "",
              "Taux de recommandation (NPS)",
              "Indicateur avancé de la fidélité et du bouche-à-oreille"
            ]
          ]
        },
        {
          "type": "p",
          "text": "***Commentaire.Le « nombre de visites », souvent retenu spontanément, n’est pas un bon KPI : il mesure le trafic, pas la performance. C’est la justification par le FCS qui fait la qualité de la réponse.*"
        }
      ]
    },
    {
      "id": "application-2-construire-une-matrice-ovar",
      "title": "■ APPLICATION 2 — Construire une matrice OVAR",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "Énoncé",
          "text": "L’atelier de fabrication de Rakéo doit maîtriser ses coûts et sa qualité tout en respectant les engagements environnementaux. Construire la grille OVAR de ce centre. **Travail à faire :**préciser l’objectif, les variables d’action, les indicateurs, les cibles et les responsables."
        },
        {
          "type": "h4",
          "text": "Corrigé"
        },
        {
          "type": "p",
          "text": "**Objectif du centre :**produire le produit au coût cible, avec une qualité conforme et une empreinte environnementale maîtrisée."
        },
        {
          "type": "table",
          "headers": [
            "**Variable d’action (FCS)**",
            "**Indicateur**",
            "**Cible**",
            "**Responsable**"
          ],
          "rows": [
            [
              "Maîtrise des coûts",
              "Coût de production unitaire",
              "≤ coût standard (67 €)",
              "Resp. atelier"
            ],
            [
              "Productivité",
              "Taux de rendement synthétique (TRS)",
              "> 85 %",
              "Resp. atelier"
            ],
            [
              "Qualité",
              "Taux de rebut",
              "< 2 %",
              "Resp. qualité"
            ],
            [
              "Performance énergétique",
              "kWh par unité produite",
              "-5 % / an",
              "Resp. HSE"
            ],
            [
              "Sécurité",
              "Fréquence des accidents",
              "< 8",
              "Resp. HSE"
            ]
          ]
        },
        {
          "type": "p",
          "text": "***Commentaire.La grille respecte l’enchaînement OVAR et équilibre indicateurs financiers (coût, rapporté au coût standard de 67 €), opérationnels (TRS, rebut) et extra-financiers (énergie, sécurité). Chaque indicateur est rattaché à un responsable maîtrisant le levier.*"
        }
      ]
    },
    {
      "id": "application-3-analyser-et-ameliorer-un-tableau-de-bord",
      "title": "■ APPLICATION 3 — Analyser et améliorer un tableau de bord",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "Énoncé",
          "text": "La direction de Rakéo reçoit le tableau de bord commercial suivant (CA mensuel en k€, objectif et réalisé). Analyser la performance, puis proposer deux améliorations du tableau de bord. Travail à faire : analyser la performance commerciale du semestre, puis proposer deux améliorations du tableau de bord."
        },
        {
          "type": "p",
          "text": "*l’entreprise — tableau de bord commercial : CA mensuel (k€)*"
        },
        {
          "type": "h4",
          "text": "Corrigé"
        },
        {
          "type": "p",
          "text": "**Analyse.**Sur le semestre, le CA réalisé (1 353 k€) dépasse l’objectif (1 335 k€), soit +1,3 %. Mais la lecture mensuelle nuance : janvier est en retrait (-12 k€), avant un fort rebond. La tendance est favorable (les écarts positifs s’accentuent), portant le cumul au-dessus de la cible. Une alerte s’imposait toutefois en janvier."
        },
        {
          "type": "p",
          "text": "**Améliorations proposées :**"
        },
        {
          "type": "ul",
          "items": [
            "Ajouter le **cumul depuis le début de l’année** et l’écart cumulé, pour distinguer un retard ponctuel d’une dérive durable.",
            "Compléter par des indicateurs de **cause** (taux de conversion, panier moyen) et un indicateur extra-financier (satisfaction client), le CA seul ne disant pas *pourquoi* l’objectif est ou non atteint."
          ]
        },
        {
          "type": "p",
          "text": "***Commentaire.L’enjeu d’examen est d’équilibrer l’analyse (lecture chiffrée), la critique (le CA est un indicateur de résultat, pas de cause) et l’amélioration (ajouter cumul et indicateurs avancés).*"
        }
      ]
    },
    {
      "id": "application-4-reporting-esg",
      "title": "■ APPLICATION 4 — Reporting ESG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "Énoncé",
          "text": "La direction de Rakéo veut un reporting de durabilité pour ses parties prenantes. À partir des données ci-dessous, calculer les taux d’atteinte et rédiger un bref commentaire de conseil. Données : CO₂/unité réduit de 12 % (cible -15 %) ; énergie renouvelable 62 % (cible 70 %) ; matière recyclée 48 % (cible 60 %) ; fréquence accidents 9,1 (cible 8,0). Travail à faire : calculer les taux d’atteinte de chaque indicateur et rédiger un bref commentaire de conseil."
        },
        {
          "type": "h4",
          "text": "Corrigé"
        },
        {
          "type": "p",
          "text": "**Taux d’atteinte** (réalisé rapporté à la cible) :"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Réalisé**",
            "**Cible**",
            "**Taux d’atteinte**"
          ],
          "rows": [
            [
              "Réduction CO₂/unité",
              "-12 %",
              "-15 %",
              "12/15 = 80 %"
            ],
            [
              "Énergie renouvelable",
              "62 %",
              "70 %",
              "62/70 ≈ 89 %"
            ],
            [
              "Matière recyclée",
              "48 %",
              "60 %",
              "48/60 = 80 %"
            ],
            [
              "Fréquence accidents",
              "9,1",
              "8,0",
              "cible non atteinte (écart +1,1)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Commentaire de conseil.**La trajectoire environnementale est encourageante (énergie renouvelable proche de la cible à 89 %), mais trois points appellent une action : l’incorporation de matière recyclée et la réduction du carbone restent en retrait (80 %), et surtout la fréquence des accidents dépasse la cible — priorité sociale immédiate. Je recommande un plan sécurité ciblé et un suivi mensuel de ces trois indicateurs, les autres pouvant rester en suivi trimestriel."
        },
        {
          "type": "p",
          "text": "***Commentaire.Noter la dimension « écrit de conseil » attendue par le programme : l’analyse doit déboucher sur une recommandation hiérarchisée et argumentée.*"
        }
      ]
    },
    {
      "id": "application-5-cas-de-synthese-recapitulatif-type-dcg",
      "title": "■ APPLICATION 5 — Cas de synthèse récapitulatif (type DCG)",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "Énoncé",
          "text": "La direction générale de Rakéo souhaite mettre en place un tableau de bord de direction reflétant sa performance globale. Elle vous communique les éléments suivants pour le dernier exercice :\nRésultat 1 240 k€ (objectif 1 170) ; taux de marge 31,5 % (cible 32 %) ; satisfaction client 8,4/10 (cible 8,5) ; taux de rebut 2,1 % (cible 2,0 %) ; délai de livraison 3,2 j (cible 3,0) ; CO₂/unité -12 % (cible -15 %).\n**Travail à faire :**(1) organiser ces indicateurs selon une logique équilibrée et calculer le taux d’atteinte de chacun ; (2) analyser la performance globale ; (3) identifier un risque lié à l’un des indicateurs ; (4) rédiger un écrit de conseil de 5 à 6 lignes à la direction."
        },
        {
          "type": "h4",
          "text": "Corrigé détaillé"
        },
        {
          "type": "p",
          "text": "**1. Organisation équilibrée et taux d’atteinte** (logique balanced scorecard ; pour les indicateurs « moins = mieux » — rebut, délai — le taux d’atteinte se calcule cible / réalisé) :"
        },
        {
          "type": "table",
          "headers": [
            "**Axe**",
            "**Indicateur**",
            "**Réalisé / cible**",
            "**Taux d’atteinte**",
            "**Appréciation**"
          ],
          "rows": [
            [
              "Financier",
              "Résultat",
              "1 240 / 1 170 k€",
              "106 %",
              "Au-delà (+6 %)"
            ],
            [
              "Financier",
              "Taux de marge",
              "31,5 % / 32 %",
              "98 %",
              "Légèrement sous cible"
            ],
            [
              "Client",
              "Satisfaction",
              "8,4 / 8,5",
              "99 %",
              "Quasi atteint"
            ],
            [
              "Processus",
              "Taux de rebut",
              "2,1 % / 2,0 %",
              "95 %",
              "Sous cible (plus de rebut)"
            ],
            [
              "Processus",
              "Délai de livraison",
              "3,2 / 3,0 j",
              "94 %",
              "À surveiller"
            ],
            [
              "Durabilité",
              "CO₂ / unité",
              "-12 % / -15 %",
              "80 %",
              "En retrait"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Détail des calculs. Résultat 1 240 / 1 170 = 106 % ; marge 31,5 / 32 = 98 % ; satisfaction 8,4 / 8,5 = 99 % ; rebut 2,0 / 2,1 = 95 % (cible/réalisé car « moins = mieux ») ; délai 3,0 / 3,2 = 94 % ; CO₂ 12 / 15 = 80 %.*"
        },
        {
          "type": "p",
          "text": "**2. Analyse.**La performance financière est solide : le résultat dépasse nettement l’objectif (+6 %). Mais la marge, le rebut, le délai et le carbone restent sous leurs cibles : la croissance s’est faite au prix d’une légère tension opérationnelle et environnementale. La satisfaction client se maintient à un bon niveau. La performance est donc globalement bonne mais déséquilibrée en faveur du financier."
        },
        {
          "type": "p",
          "text": "**3. Risque identifié.**Le résultat (+6 %) pourrait masquer un effet de court-termisme : si la marge et le rebut se dégradent pendant que le résultat progresse, c’est peut-être que des dépenses de qualité ou de maintenance ont été repoussées. Risque de manipulation / court-termisme (loi de Goodhart) à surveiller en croisant le résultat avec les indicateurs de cause."
        },
        {
          "type": "p",
          "text": "**4. Écrit de conseil.**"
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "Écrit de conseil à la direction",
          "text": "*« Madame la Directrice, les résultats de l’exercice sont satisfaisants : le résultat dépasse l’objectif de 6 %. Toutefois, cette performance financière s’accompagne de tensions sur la qualité (rebut à 95 % de la cible), les délais (94 %) et l’empreinte carbone (80 %), tous sous leurs cibles. Je recommande de ne pas relâcher l’effort sur ces trois leviers, qui conditionnent la performance durable et la satisfaction client à moyen terme. Un suivi mensuel de la qualité et du carbone, couplé à un plan d’amélioration ciblé, permettrait de rééquilibrer la performance globale sans compromettre la rentabilité. »*"
        },
        {
          "type": "p",
          "text": "***Commentaire.Le cas réunit toutes les compétences du chapitre : organiser et calculer des indicateurs (4.1), analyser une performance globale, identifier un risque (4.1), et rédiger un écrit de conseil argumenté (4.4) — exactement le format attendu à l’épreuve.*"
        }
      ]
    },
    {
      "id": "application-6-concevoir-un-tableau-de-bord-cas-d-un-club-spo",
      "title": "■ APPLICATION 6 — Concevoir un tableau de bord (cas d’un club sportif associatif)",
      "blocks": [
        {
          "type": "p",
          "text": "Les dirigeants d’un club de tennis situé en région parisienne cherchent à améliorer leurs outils de gestion. Le club poursuit un double objet : former des jeunes et offrir une activité de loisir. En engageant ses équipes dans des compétitions, il contribue en outre à la bonne image de la commune."
        },
        {
          "type": "p",
          "text": "L’école de tennis s’adresse à des jeunes en formation ; elle fonctionne pendant 35 semaines par an. À ces jeunes s’ajoutent des « adhérents loisirs », essentiellement des adultes, dont beaucoup sont parents d’enfants de l’école. Les cotisations sont versées surtout à la rentrée de septembre (avec quelques semaines de retard). Certaines recettes proviennent de sponsors et ne sont jamais garanties d’une année sur l’autre. Cette année, le club a renforcé l’encadrement : un moniteur anime un groupe de 6 jeunes au lieu de 8."
        },
        {
          "type": "p",
          "text": "**Travail à faire.**Établir un tableau de bord pour le club : identifier ses destinataires, sa périodicité, puis choisir les indicateurs pertinents en s’appuyant sur les facteurs clés de succès."
        },
        {
          "type": "h4",
          "text": "Corrigé"
        },
        {
          "type": "p",
          "text": "**Destinataires.**Il n’existe pas une seule solution : l’essentiel est de justifier les propositions. Le tableau de bord est utile aux responsables du club. Réservé aux seuls président et vice-président, il ne sensibiliserait pas les autres membres du bureau ; mieux vaut donc l’établir pour tout le bureau. S’il comporte des éléments financiers, une diffusion restreinte est préférable, mais le directeur sportif doit en être destinataire afin de mieux mobiliser son équipe."
        },
        {
          "type": "p",
          "text": "**Périodicité.**Les recettes sont enregistrées surtout en septembre-octobre-novembre, alors que les dépenses sont régulières sur l’année ; les compétitions s’étalent généralement sur plus d’un mois. Une périodicité trimestrielle paraît adaptée : par exemple, fin novembre, on fait le point des recettes et des encaissements."
        },
        {
          "type": "p",
          "text": "**Choix des indicateurs.**Les indicateurs dépendent des facteurs clés à identifier. On retient trois FCS : le rôle social du club, le niveau de performance sportive et l’équilibre financier. Chaque FCS est ensuite décliné en un ou plusieurs indicateurs simples, dont l’information est accessible, en diversifiant les natures (quantitatifs, qualitatifs, financiers)."
        },
        {
          "type": "p",
          "text": "Déclinaison des FCS en indicateurs :"
        },
        {
          "type": "table",
          "headers": [
            "**FCS**",
            "**Indicateur retenu**",
            "**Justification**"
          ],
          "rows": [
            [
              "Rôle social",
              "Nombre de jeunes inscrits par catégorie d’âge",
              "Mesure le potentiel de talents formés"
            ],
            [
              "Rôle social",
              "Nombre de réclamations ou de mécontentements",
              "Suit la satisfaction des adhérents"
            ],
            [
              "Performance",
              "Nombre de membres classés par catégorie d’âge",
              "Incite les membres à poursuivre les compétitions"
            ],
            [
              "Performance",
              "Nombre de compétitions (équipe / individuelles) gagnées ou finalistes",
              "La renommée du club et de la commune repose sur ces résultats"
            ],
            [
              "Équilibre financier",
              "Nombre d’adhérents loisirs",
              "Ces adhérents financent en partie la formation des jeunes"
            ],
            [
              "Équilibre financier",
              "Recettes par catégorie (loisirs…)",
              "Il faut augmenter les recettes pour assurer l’équilibre"
            ],
            [
              "Équilibre financier",
              "Recettes non encaissées",
              "Éviter que des recettes attendues ne se transforment en non-recettes"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Maquette du tableau de bord — comparaison objectif / réalisation / écart :"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Objectif**",
            "**Réalisation**",
            "**Écart**",
            "**Commentaire**"
          ],
          "rows": [
            [
              "Indicateur 1",
              "…",
              "…",
              "…",
              "…"
            ],
            [
              "…",
              "",
              "",
              "",
              ""
            ],
            [
              "Indicateur n",
              "…",
              "…",
              "…",
              "…"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Variante « suivi périodique » (lecture trimestrielle et en cumul) :"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Trim. année en cours**",
            "**Trim. année préc.**",
            "**Écart**",
            "**Cumul année en cours**",
            "**Cumul année préc.**",
            "**Commentaires**"
          ],
          "rows": [
            [
              "…",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "…",
              "",
              "",
              "",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Commentaire.**Lecture. La maquette met en regard l’objectif, la réalisation et l’écart, complétés d’un commentaire : l’utilisateur repère immédiatement l’information révélant un problème et appelant une réaction."
        }
      ]
    },
    {
      "id": "pieges-a-eviter",
      "title": "Pièges à éviter",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Confondre reporting (vers le haut, financier) et tableau de bord (local, mixte).",
            "Multiplier les indicateurs : la valeur vient de la sélection, pas de l’accumulation.",
            "Choisir un indicateur « facile à mesurer » plutôt qu’un indicateur pertinent (ex. visites au lieu de conversion).",
            "Oublier de justifier chaque indicateur par le FCS qu’il mesure.",
            "Plaquer des indicateurs standards sans vérifier l’adéquation aux besoins de l’organisation.",
            "Ignorer les effets pervers (loi de Goodhart) et la transversalité des processus."
          ]
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
