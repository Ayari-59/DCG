// Généré par scripts/convert-docx.mjs depuis CHAPITRE_18__LES_PRIX_DE_CESSION_INTERNE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-prix-cession-interne",
  "level": "DCG",
  "ue": "UE11",
  "number": 18,
  "title": "Les prix de cession interne",
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
          "text": "**Axe 4 — Le pilotage de la performance · Compétence 4.4 : « Proposer des pistes pour améliorer la performance globale ».**\nLe prix de cession interne est l’un des points nouveaux du référentiel DCG rénové (réforme 2027)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Expliquer le rôle et les objectifs des prix de cession interne dans une organisation décentralisée.\n• Distinguer les modes de fixation : prix de marché, coût complet, coût standard, coût variable, prix négocié.\n• Calculer un prix de cession interne selon chacune de ces méthodes.\n• Analyser les conséquences managériales d’un mode de fixation sur la performance des centres.\n• Évaluer la performance d’un centre de responsabilité et repérer les comportements dysfonctionnels.\n• Intégrer le prix de cession interne dans une logique de pilotage de la performance globale.\n**▸ PLAN DU CHAPITRE**\n**Partie 1 —**Les fondements des prix de cession interne\n**Partie 2 —**Les modes de fixation des prix de cession interne\n**Partie 3 —**Prix de cession interne et évaluation des centres de responsabilité\n**Partie 4 —**Le pilotage de la performance par les prix de cession interne"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**INTRODUCTION GÉNÉRALE**"
        },
        {
          "type": "p",
          "text": "Au fur et à mesure qu’une organisation grandit, sa direction ne peut plus tout décider seule. Elle délègue : elle confie à des responsables locaux le pouvoir d’engager des moyens et d’atteindre des objectifs. Cette décentralisation, qui s’est imposée dès les années 1930 dans les grands groupes industriels nord-américains, découpe l’entreprise en centres de responsabilité, véritables « mini-entreprises » jugées sur leurs résultats."
        },
        {
          "type": "p",
          "text": "Mais découper l’entreprise crée aussitôt un problème nouveau : ces centres échangent en permanence des biens et des services. Le centre Production cède des produits au centre Logistique ; le centre Logistique livre les centres commerciaux. Ces échanges internes n’ont pas de prix « naturel » donné par un marché : il faut les valoriser. C’est précisément le rôle du prix de cession interne (PCI)."
        },
        {
          "type": "p",
          "text": "Le PCI n’est donc pas une simple écriture comptable. C’est un instrument de pilotage : il détermine la marge de chaque centre, oriente les décisions des responsables, et conditionne la convergence entre l’intérêt local de chaque unité et l’intérêt global de l’organisation. Mal fixé, il provoque des conflits, des sous-optimisations, des comportements opportunistes. Bien fixé, il aligne les décisions locales sur la performance d’ensemble."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/01.png",
          "alt": "Figure du cours",
          "width": 1520,
          "height": 600,
          "caption": "Figure 1 — Les flux internes et les prix de cession entre les centres de l’entreprise."
        },
        {
          "type": "p",
          "text": "Ce chapitre suit un cheminement logique, du fondement organisationnel jusqu’au pilotage global :"
        },
        {
          "type": "ul",
          "items": [
            "la décentralisation engendre des centres de responsabilité (Partie 1) ;",
            "ces centres réalisent des transactions internes qu’il faut valoriser par un PCI selon différents modes (Partie 2) ;",
            "le PCI sert alors à mesurer la performance des centres (Partie 3) ;",
            "et, au-delà, à piloter la performance globale de l’organisation à l’heure des outils numériques et de la durabilité (Partie 4)."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une précision de vocabulaire essentielle",
          "text": "Le prix de cession interne (gestion interne, objet de ce chapitre) ne doit pas être confondu avec le prix de transfert (transfer pricing), notion fiscale qui régit la valorisation des transactions entre entités d’un même groupe pour le calcul de l’impôt. Le programme DCG rénové le précise expressément : le prix de transfert n’est pas étudié ici."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Présentation du groupe",
          "text": "Rakéo est une PME française (effectif 240 personnes, chiffre d’affaires 48 M€) spécialisée dans les équipements sportifs éco-responsables. Son produit phare est la raquette de tennis Rakéo, fabriquée à partir de matériaux recyclés. Pour gagner en réactivité, la direction générale a décentralisé l’organisation en plusieurs centres de responsabilité autonomes :\nCentre Approvisionnement — achète et stocke les matières (fibres recyclées, résines) ;\nCentre Production — fabrique les produits et les transfère à la logistique ;\nCentre Logistique — stocke et achemine les produits vers les canaux de vente ;\nCentre E-commerce — vend en ligne directement aux particuliers (centre de profit) ;\nCentre Distribution B2B — vend aux enseignes et clubs (centre de recettes) ;\nDirection générale — fixe les objectifs et pilote la performance globale."
        },
        {
          "type": "p",
          "text": "Chaque responsable de centre dispose d’une autonomie de gestion et reçoit une prime indexée sur la performance de son centre. Très vite, des tensions apparaissent : le responsable Production veut « vendre cher » ses produits en interne pour gonfler sa marge ; le responsable E-commerce veut « acheter bas » pour préserver la sienne. La même produit, selon le prix retenu, fait apparaître un centre comme performant et l’autre comme déficitaire — alors que la marge réelle pour le groupe, elle, n’a pas bougé."
        },
        {
          "type": "p",
          "text": "La direction confie au contrôleur de gestion une mission claire : concevoir un système de prix de cession interne qui mesure équitablement la performance de chaque centre tout en garantissant que les décisions locales restent favorables au groupe. Ce cas servira de fil rouge à tout le chapitre."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Les chiffres de référence de la raquette Rakéo",
          "text": "Pour fixer les idées, voici les données du transfert interne de la raquette, qui reviendront dans toutes les illustrations :\nPrix de vente final au consommateur (E-commerce) : 90 € ;\nCoût variable de production unitaire : 38 € ;\nCoût standard complet de production : 67 € (dont 29 € de charges fixes réparties) ;\nMarge sur coût standard = 90 − 67 = 23 € ; marge sur coût variable = 90 − 38 = 52 € ;\nPrix de marché d’une raquette comparable (sous-traitant externe) : 75 € ;\nCoûts propres de l’aval (E-commerce) : 8 €."
        }
      ]
    },
    {
      "id": "1-les-fondements-des-prix-de-cession-interne",
      "title": "1. Les fondements des prix de cession interne",
      "blocks": [
        {
          "type": "p",
          "text": "Avant de calculer un prix de cession, il faut comprendre pourquoi il existe et à quoi il sert. Cette première partie pose les fondations : la définition du PCI, les objectifs qu’il poursuit et les enjeux organisationnels qu’il soulève."
        },
        {
          "type": "h3",
          "text": "1.1 Définition et mécanisme du prix de cession interne"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession interne",
          "text": "Le prix de cession interne (PCI) est la valeur monétaire à laquelle un centre de responsabilité cède un bien ou un service à un autre centre de la même organisation. Cette cession donne lieu à un double enregistrement de gestion : elle constitue un produit (un « chiffre d’affaires interne ») pour le centre vendeur, et une charge (un « achat interne ») pour le centre acheteur."
        },
        {
          "type": "p",
          "text": "Le mécanisme est simple dans son principe mais lourd de conséquences. Lorsqu’aucune transaction interne n’existe — par exemple dans une petite entreprise non décentralisée — la question du PCI ne se pose pas : la marge se calcule globalement. Dès qu’on découpe l’organisation en centres autonomes dont on veut mesurer séparément la performance, il devient nécessaire de valoriser les flux qui circulent entre eux."
        },
        {
          "type": "h4",
          "text": "Les domaines d’application"
        },
        {
          "type": "p",
          "text": "On rencontre des prix de cession interne dans de nombreuses configurations :"
        },
        {
          "type": "ul",
          "items": [
            "entre ateliers ou usines d’une même entreprise (cession de produits semi-finis) ;",
            "entre une fonction support et les fonctions opérationnelles (un service informatique « facture » ses prestations aux divisions) ;",
            "entre filiales d’un groupe lorsqu’on raisonne en gestion (et non en fiscalité) ;",
            "dans les organisations publiques et associatives, lorsqu’un service mutualisé refacture ses coûts aux autres."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Cession interne et chaîne de valeur",
          "text": "Le PCI matérialise, en euros, le passage de la raquette d’un maillon à l’autre de la chaîne de valeur interne. Il rend visible la contribution de chaque centre à la valeur finale, ce qui en fait un instrument de lecture de la chaîne de valeur autant qu’un outil de mesure."
        },
        {
          "type": "h3",
          "text": "1.2 Les objectifs des prix de cession interne"
        },
        {
          "type": "p",
          "text": "Le PCI poursuit simultanément plusieurs objectifs, parfois en tension les uns avec les autres. C’est cette multiplicité qui rend son choix délicat."
        },
        {
          "type": "h4",
          "text": "Coordonner les centres"
        },
        {
          "type": "p",
          "text": "Le PCI organise les échanges internes : il indique à chaque centre les conditions auxquelles il peut « acheter » ou « vendre » à un autre. Il sert de signal-prix interne qui coordonne les décisions sans recourir à l’ordre hiérarchique direct."
        },
        {
          "type": "h4",
          "text": "Motiver et responsabiliser"
        },
        {
          "type": "p",
          "text": "En transformant chaque centre en entité jugée sur sa propre marge, le PCI responsabilise les managers et les motive à optimiser leur gestion. Le responsable d’un centre de profit est incité à maîtriser ses coûts et à valoriser ses cessions, comme un véritable chef d’entreprise."
        },
        {
          "type": "h4",
          "text": "Évaluer la performance"
        },
        {
          "type": "p",
          "text": "Le PCI permet de calculer un résultat par centre et donc d’évaluer la performance de chaque unité et de son responsable. C’est la condition même d’un pilotage décentralisé : sans valorisation des flux internes, impossible d’isoler la contribution de chacun."
        },
        {
          "type": "h4",
          "text": "Orienter les décisions (optimisation)"
        },
        {
          "type": "p",
          "text": "Enfin, un PCI bien conçu oriente les décisions locales (faire ou faire-faire, accepter ou refuser une commande) dans le sens de l’intérêt global. Un PCI mal conçu, au contraire, peut conduire un centre à prendre une décision rationnelle pour lui mais coûteuse pour le groupe."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Objectif",
          "text": "**Ce que le PCI permet**\n**Risque si mal fixé**\nCoordination\nOrganiser les flux internes par un signal-prix\nBlocage ou conflit entre centres\nMotivation\nResponsabiliser chaque manager sur sa marge\nDémotivation, sentiment d’injustice\nÉvaluation\nMesurer un résultat par centre\nPerformance faussée, mal attribuée\nResponsabilisation\nFaire de chaque centre une mini-entreprise\nRepli sur l’intérêt local\nOptimisation\nAligner décisions locales et intérêt global\nSous-optimisation, décisions sous-optimales"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — L’objectif structurant : la convergence des buts",
          "text": "Tous ces objectifs se ramènent à un seul, central en contrôle de gestion : la convergence des buts (goal congruence). Le bon PCI est celui qui fait coïncider l’intérêt de chaque centre avec l’intérêt de l’organisation. Retenez cette idée : elle est le fil conducteur du chapitre et un attendu fort de l’épreuve."
        },
        {
          "type": "h3",
          "text": "1.3 Les enjeux organisationnels"
        },
        {
          "type": "p",
          "text": "Le PCI n’a de sens que dans une organisation décentralisée. Il faut donc le replacer dans la dynamique autonomie / décentralisation / convergence."
        },
        {
          "type": "h4",
          "text": "Autonomie et décentralisation"
        },
        {
          "type": "p",
          "text": "La décentralisation confie aux responsables locaux un réel pouvoir de décision. Cette autonomie est la source de la réactivité et de la motivation, mais elle a un revers : chaque centre peut être tenté de privilégier son intérêt propre. Plus l’autonomie est grande, plus le PCI doit être conçu avec soin pour éviter les dérives."
        },
        {
          "type": "h4",
          "text": "La convergence des objectifs"
        },
        {
          "type": "p",
          "text": "L’enjeu fondamental est d’assurer que la somme des intérêts locaux serve l’intérêt global. C’est rarement automatique : un prix qui avantage le vendeur désavantage l’acheteur, et inversement. Le contrôleur de gestion arbitre en permanence entre l’autonomie laissée aux centres et la nécessité de préserver la cohérence d’ensemble."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le dilemme de Rakéo",
          "text": "Chez Rakéo, le responsable production est jugé sur sa marge ; le responsable E-commerce aussi. Si le PCI de la raquette est fixé à 75 € (prix de marché), la Production affiche une marge confortable (75 − 38 = 37 €) mais l’E-commerce se trouve étranglé (90 − 75 − 8 = 7 €). Si le PCI est fixé à 38 € (coût variable), c’est l’inverse : l’E-commerce prospère et la Production n’affiche aucune marge.\nOr, dans les deux cas, la marge du groupe est identique : 90 − 38 − 8 = 44 €. Le PCI ne crée ni ne détruit de richesse : il répartit une marge globale entre les centres. Tout le débat est là."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Les quatre temps à maîtriser",
          "text": "Comprendre : le PCI valorise les flux internes pour mesurer la performance des centres décentralisés.\nCalculer : selon le mode retenu (marché, coût, négocié) — objet de la Partie 2.\nInterpréter : analyser comment le PCI répartit la marge et oriente les décisions.\nCritiquer : repérer les risques de conflit, de sous-optimisation et d’évaluation faussée."
        }
      ]
    },
    {
      "id": "2-les-modes-de-fixation-des-prix-de-cession-interne",
      "title": "2. Les modes de fixation des prix de cession interne",
      "blocks": [
        {
          "type": "p",
          "text": "Le référentiel rénové cadre précisément les méthodes attendues : le prix de cession interne s’apprécie « par rapport au prix de marché, au coût standard, au coût réel (partiel ou complet) ». À ces références fondées sur le coût ou le marché s’ajoute, en pratique managériale, le prix négocié. Cette partie présente chaque mode selon les quatre temps : principe, calcul, intérêts, limites."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/02.png",
          "alt": "2. Les modes de fixation des prix de cession interne",
          "width": 1520,
          "height": 580,
          "caption": "Figure 2 — Positionnement des cinq modes sur l’axe du prix (raquette Rakéo)."
        },
        {
          "type": "h3",
          "text": "2.1 Le prix de cession au prix de marché"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession au prix de marché",
          "text": "Le PCI est aligné sur le prix auquel le bien ou le service pourrait être acheté ou vendu sur le marché externe, à un fournisseur ou un client indépendant."
        },
        {
          "type": "p",
          "text": "Pour la raquette Rakéo, le prix de marché d’une raquette comparable produite par un sous-traitant est de 75 €. Le centre Production cède donc en interne à 75 €, comme s’il vendait à l’extérieur."
        },
        {
          "type": "h4",
          "text": "Intérêts"
        },
        {
          "type": "ul",
          "items": [
            "Objectivité : le prix est fixé par le marché, non par négociation interne ; il est difficilement contestable.",
            "Mesure « vraie » de la performance : chaque centre est jugé comme une entreprise autonome confrontée au marché.",
            "Incitation à la compétitivité : le centre vendeur doit être aussi efficace qu’un concurrent externe, sinon l’acheteur se fournira ailleurs."
          ]
        },
        {
          "type": "h4",
          "text": "Limites"
        },
        {
          "type": "ul",
          "items": [
            "Il faut qu’un marché existe et soit représentatif : pour un produit spécifique ou un semi-fini sur mesure, aucun prix de marché fiable n’est disponible.",
            "Le prix de marché peut être volatil, ce qui rend la performance interne instable et difficile à comparer dans le temps.",
            "Il peut conduire un centre à privilégier le marché externe au détriment de la cohésion du groupe."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — La tentation de « sortir » du groupe",
          "text": "Si le PCI est le prix de marché et que l’acheteur trouve moins cher à l’extérieur, il peut refuser la cession interne. Cela peut être bon pour lui mais laisser la capacité interne inutilisée — donc mauvais pour le groupe si les charges fixes restent à couvrir. Une règle prudente consiste à plafonner le PCI au prix de marché, mais à autoriser l’achat externe seulement si le centre interne ne peut s’aligner sur le coût pertinent."
        },
        {
          "type": "h3",
          "text": "2.2 Le prix de cession au coût réel (partiel ou complet)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession au coût réel (partiel ou complet)",
          "text": "Le PCI est fixé sur la base du coût réellement constaté du bien cédé. Le référentiel distingue deux assiettes : le coût réel partiel (charges variables seules) et le coût réel complet (charges variables + quote-part de charges fixes). Une variante très fréquente ajoute une marge au coût complet : c’est le coût complet majoré, ou « cost plus ».\nÀ ce coût réel s’oppose le coût standard (section 2.4), prévu et stable. La différence est capitale : le coût réel transmet à l’aval les écarts de gestion de l’amont, le coût standard les isole."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/03.png",
          "alt": "Limites",
          "width": 1430,
          "height": 920,
          "caption": "Figure 3 — Décomposition en cascade : du coût variable au prix « coût complet + marge » (raquette Rakéo)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calcul détaillé pour la raquette Rakéo",
          "text": "Coût réel partiel (variable) = 38 € ⇒ PCI au coût variable = 38 € (voir section 2.3).\nCharges fixes réparties : 29 € / unité.\nCoût réel complet = 38 + 29 = 67 € ⇒ PCI au coût complet = 67 €.\nAvec une marge de 7 € (≈ 10 % du coût) : 67 + 7 = 74 € ⇒ PCI « cost plus » = 74 €."
        },
        {
          "type": "h4",
          "text": "Intérêts"
        },
        {
          "type": "ul",
          "items": [
            "Applicable même en l’absence de marché externe : on dispose toujours d’un coût.",
            "Le centre vendeur couvre l’intégralité de ses charges, y compris fixes.",
            "Avec marge, le centre vendeur peut devenir un centre de profit à part entière."
          ]
        },
        {
          "type": "h4",
          "text": "Limites"
        },
        {
          "type": "ul",
          "items": [
            "Le coût complet intègre des charges fixes et un éventuel sous-emploi : le centre vendeur transmet ses inefficiences au centre acheteur.",
            "Au coût réel, le centre acheteur subit les écarts de gestion de l’amont, qu’il ne maîtrise pas.",
            "Effet « boule de neige » : si chaque centre ajoute sa marge, le coût final est gonflé par l’empilement des marges internes (marge sur marge)."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Coût réel transmis = irresponsabilité de l’amont",
          "text": "Au coût complet réel, si la Production gaspille, son coût grimpe et elle « facture » ce surcoût à l’aval, sans en supporter elle-même les conséquences. Le centre acheteur est pénalisé pour une inefficience qu’il ne contrôle pas. C’est pourquoi on préfère souvent le coût standard."
        },
        {
          "type": "h3",
          "text": "2.3 Le prix de cession au coût variable"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession au coût variable",
          "text": "Le PCI est limité aux seules charges variables du bien cédé (ici 38 € pour la raquette). Les charges fixes ne sont pas refacturées au centre acheteur."
        },
        {
          "type": "p",
          "text": "Ce mode prend tout son sens dans une logique de décision de court terme. Le coût variable représente le coût pertinent d’une cession supplémentaire lorsque la capacité de production n’est pas saturée : produire un produit de plus ne coûte que ses 38 € de charges variables."
        },
        {
          "type": "h4",
          "text": "Domaines d’utilisation et conséquences"
        },
        {
          "type": "ul",
          "items": [
            "Décisions ponctuelles : accepter une commande supplémentaire, arbitrer faire / faire-faire.",
            "Optimisation globale : en cédant au coût variable, l’aval voit le vrai coût marginal interne et prend des décisions favorables au groupe.",
            "Mais le centre vendeur n’affiche aucune marge et ne couvre pas ses charges fixes : il apparaît structurellement « non rentable », ce qui fausse son évaluation comme centre de profit."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Vocabulaire à respecter",
          "text": "On parle bien de seuil de profitabilité (et non de « rentabilité ») lorsqu’on raisonne sur la couverture des charges fixes par la marge sur coût variable. Au coût variable, le centre vendeur ne dégage aucune marge sur coût variable interne : il ne peut pas franchir son seuil sur ses seules cessions internes."
        },
        {
          "type": "h3",
          "text": "2.4 Le prix de cession au coût standard"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession au coût standard",
          "text": "Le PCI est fixé sur la base d’un coût prévu et stable (standard), déterminé à l’avance, indépendamment des coûts réellement constatés sur la période."
        },
        {
          "type": "p",
          "text": "Le coût standard répond au principal défaut du coût réel : il isole le centre acheteur des aléas et inefficiences de l’amont. Si la Production dépasse son coût standard, l’écart reste à sa charge et n’est pas transmis à l’aval. Chaque centre est ainsi responsabilisé sur ce qu’il maîtrise."
        },
        {
          "type": "h4",
          "text": "Intérêt pour le pilotage"
        },
        {
          "type": "ul",
          "items": [
            "Stabilité : le PCI ne varie pas au gré des coûts réels, ce qui facilite la prévision et la comparaison.",
            "Responsabilisation : l’écart entre coût réel et coût standard reste imputé au centre qui l’a généré.",
            "Cohérence avec le contrôle budgétaire : le coût standard est le langage commun des budgets et de l’analyse des écarts (chapitres La procédure budgétaire et Le contrôle budgétaire et l’analyse des écarts)."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Le coût standard, choix de référence du pilotage",
          "text": "Pour l’évaluation des centres, le coût standard (éventuellement majoré d’une marge) est souvent considéré comme le meilleur compromis : il couvre les coûts, n’avantage personne arbitrairement et n’autorise pas le transfert d’inefficiences. C’est un point d’examen fréquent."
        },
        {
          "type": "h3",
          "text": "2.5 Les prix de cession négociés"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Prix de cession négocié",
          "text": "Le PCI résulte d’une négociation directe entre le responsable du centre vendeur et celui du centre acheteur, généralement à l’intérieur d’une fourchette définie par la direction."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/04.png",
          "alt": "Intérêt pour le pilotage",
          "width": 1330,
          "height": 535,
          "caption": "Figure 4 — Prix plancher et prix plafond : la zone de négociation acceptable (raquette Rakéo)."
        },
        {
          "type": "p",
          "text": "La théorie économique fournit deux bornes naturelles à la négociation :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Les bornes du prix négocié",
          "text": "Prix plancher = coût variable du vendeur (ici 38 €) : en deçà, le vendeur perd à céder.\nPrix plafond = prix de marché pour l’acheteur (ici 75 €) : au-delà, l’acheteur préfère acheter à l’extérieur.\nTout prix négocié dans l’intervalle [38 € ; 75 €] est acceptable pour le groupe."
        },
        {
          "type": "h4",
          "text": "Avantages et risques"
        },
        {
          "type": "ul",
          "items": [
            "Avantage : il préserve l’autonomie et la motivation des responsables, qui s’approprient le prix.",
            "Avantage : il s’adapte aux situations particulières (capacité disponible, urgence, qualité).",
            "Risque : la négociation peut être déséquilibrée (rapport de force entre centres) et consommer du temps de management.",
            "Risque : elle peut dégénérer en conflits internes récurrents si la direction n’arbitre pas."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes sur les modes de fixation",
          "text": "Confondre coût complet et coût variable dans le calcul du PCI : vérifier toujours si les charges fixes sont incluses.\nCroire que le PCI modifie la marge du groupe : il ne fait que la répartir entre centres.\nOublier que le coût réel transmet les inefficiences de l’amont, contrairement au coût standard.\nFixer un PCI hors de l’intervalle [coût variable vendeur ; prix de marché acheteur] : la cession interne perd alors sa justification économique."
        },
        {
          "type": "h3",
          "text": "2.6 Tableau comparatif des cinq modes de fixation"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe**",
            "**Avantages**",
            "**Limites**"
          ],
          "rows": [
            [
              "Prix de marché",
              "Aligné sur le prix externe",
              "Objectif, mesure « vraie », incite à la compétitivité",
              "Exige un marché représentatif ; volatil"
            ],
            [
              "Coût complet réel",
              "Charges variables + fixes constatées",
              "Couvre tous les coûts ; pas de marché requis",
              "Transmet les inefficiences de l’amont"
            ],
            [
              "Coût complet standard",
              "Coût complet prévu et stable",
              "Stable, responsabilise, cohérent avec les budgets",
              "Standard à actualiser ; ne reflète pas le réel"
            ],
            [
              "Coût variable",
              "Charges variables seules",
              "Coût pertinent pour les décisions de CT",
              "Aucune marge pour le vendeur ; CF non couvertes"
            ],
            [
              "Prix négocié",
              "Accord entre responsables",
              "Préserve autonomie et motivation",
              "Rapport de force ; chronophage ; conflits"
            ]
          ]
        }
      ]
    },
    {
      "id": "3-prix-de-cession-interne-et-evaluation-des-centres-de-respo",
      "title": "3. Prix de cession interne et évaluation des centres de responsabilité",
      "blocks": [
        {
          "type": "p",
          "text": "Le PCI prend tout son sens lorsqu’il sert à mesurer la performance des centres. Encore faut-il savoir quel type de centre on évalue, sur quels indicateurs, et avec quels effets selon le mode de fixation retenu."
        },
        {
          "type": "h3",
          "text": "3.1 Les centres de responsabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Centre de responsabilité",
          "text": "Un centre de responsabilité est une unité de gestion dotée d’objectifs propres, de moyens pour les atteindre, et d’un responsable jugé sur ses résultats. On les classe selon l’étendue de l’autonomie déléguée."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/05.png",
          "alt": "3. Prix de cession interne et évaluation des centres de responsabilité",
          "width": 1548,
          "height": 843,
          "caption": "Figure 5 — Les quatre types de centres de responsabilité et leurs critères d’évaluation."
        },
        {
          "type": "h4",
          "text": "Centre de coûts"
        },
        {
          "type": "p",
          "text": "Le responsable maîtrise les coûts mais pas les recettes. Il est jugé sur le respect des coûts pour un niveau de production et de qualité donnés. Exemple : le centre Production de Rakéo."
        },
        {
          "type": "h4",
          "text": "Centre de recettes (ou de chiffre d’affaires)"
        },
        {
          "type": "p",
          "text": "Le responsable maîtrise le volume des ventes et le chiffre d’affaires, mais pas les coûts de production. Exemple : le centre Distribution B2B."
        },
        {
          "type": "h4",
          "text": "Centre de profit"
        },
        {
          "type": "p",
          "text": "Le responsable maîtrise à la fois les recettes et les coûts : il est jugé sur sa marge ou son résultat. C’est là que le PCI devient déterminant, puisqu’il fixe le « chiffre d’affaires » ou le « coût d’achat » interne. Exemple : le centre E-commerce."
        },
        {
          "type": "h4",
          "text": "Centre d’investissement"
        },
        {
          "type": "p",
          "text": "Le responsable maîtrise en outre les capitaux engagés. Il est jugé sur la rentabilité des capitaux investis (ROI, ROCE) ou sur la valeur créée (EVA). Exemple : une division complète du groupe."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le PCI concerne surtout les centres de profit et d’investissement",
          "text": "C’est lorsqu’un centre est jugé sur sa marge ou sa rentabilité que le PCI pèse directement sur son évaluation. Pour un pur centre de coûts, la question est plus simple : le coût cédé est son coût constaté."
        },
        {
          "type": "h3",
          "text": "3.2 La mesure de la performance des centres"
        },
        {
          "type": "p",
          "text": "Selon le type de centre, les indicateurs diffèrent. Le PCI alimente directement plusieurs d’entre eux."
        },
        {
          "type": "table",
          "headers": [
            "**Type de centre**",
            "**Indicateur principal**",
            "**Rôle du PCI**"
          ],
          "rows": [
            [
              "Coûts",
              "Écart sur coûts, coût unitaire",
              "Définit la valeur des cessions sortantes"
            ],
            [
              "Recettes",
              "CA, volume, mix de ventes",
              "Marginal (peu d’achats internes)"
            ],
            [
              "Profit",
              "Marge, résultat du centre",
              "Détermine produits et charges internes"
            ],
            [
              "Investissement",
              "ROI, ROCE, EVA, résultat résiduel",
              "Influence le résultat, donc la rentabilité"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Indicateurs de rentabilité d’un centre d’investissement",
          "text": "ROI = Résultat du centre / Capitaux investis.\nRésultat résiduel = Résultat − (Capitaux investis × taux de rémunération exigé).\nLe résultat du centre dépendant du PCI, celui-ci influence mécaniquement ces ratios."
        },
        {
          "type": "h3",
          "text": "3.3 L’impact du mode de fixation sur la performance"
        },
        {
          "type": "p",
          "text": "C’est le cœur de l’analyse : le même flux interne, valorisé différemment, fait apparaître des performances très contrastées. Reprenons la raquette Rakéo (vente finale 90 €, coût variable amont 38 €, coûts propres aval 8 €) selon trois PCI."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/06.png",
          "alt": "Centre d’investissement",
          "width": 1440,
          "height": 796,
          "caption": "Figure 6 — Répartition de la marge entre Production et E-commerce selon le PCI retenu."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Trois scénarios chiffrés pour la raquette Rakéo",
          "text": "PCI = coût variable (38 €) : marge Production = 0 € ; marge E-commerce = 90 − 38 − 8 = 44 €.\nPCI = coût standard (67 €) : marge Production = 67 − 38 = 29 € ; marge E-commerce = 90 − 67 − 8 = 15 €.\nPCI = prix de marché (75 €) : marge Production = 75 − 38 = 37 € ; marge E-commerce = 90 − 75 − 8 = 7 €.\nDans les trois cas, marge globale du groupe = 44 € (0 + 44 = 29 + 15 = 37 + 7). Le PCI ne change que le partage."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Lecture managériale",
          "text": "Le choix du PCI est un choix politique autant que technique : il décide quel centre « apparaît » performant. D’où l’importance de fixer la règle à l’avance, de façon transparente et stable, pour que les responsables ne se sentent pas arbitrairement avantagés ou pénalisés."
        },
        {
          "type": "h3",
          "text": "3.4 Les risques de comportements dysfonctionnels"
        },
        {
          "type": "p",
          "text": "Lorsque le PCI est mal conçu, les responsables, agissant rationnellement pour leur centre, peuvent nuire au groupe. On parle de comportements dysfonctionnels."
        },
        {
          "type": "h4",
          "text": "La sous-optimisation"
        },
        {
          "type": "p",
          "text": "Un centre refuse une transaction pourtant favorable au groupe parce qu’elle ne lui profite pas localement. Exemple : si le PCI est trop bas, la Production préfère vendre à l’extérieur plutôt qu’à l’E-commerce, même quand la cession interne serait plus profitable au groupe."
        },
        {
          "type": "h4",
          "text": "Les conflits entre centres"
        },
        {
          "type": "p",
          "text": "La négociation du prix tourne au rapport de force. Les responsables consacrent leur énergie à se disputer le partage de la marge plutôt qu’à créer de la valeur. La relation client-fournisseur interne se dégrade."
        },
        {
          "type": "h4",
          "text": "La sous-performance globale"
        },
        {
          "type": "p",
          "text": "À force d’optimisations locales, l’ensemble perd. Chaque centre maximise sa marge, mais les décisions accumulées (refus de cession, achats externes, surstockage) dégradent le résultat consolidé."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-prix-cession-interne/07.png",
          "alt": "La sous-performance globale",
          "width": 1120,
          "height": 880,
          "caption": "Figure 7 — Matrice autonomie locale / intérêt global : repérer les situations à risque."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Un comportement dysfonctionnel évité chez Rakéo",
          "text": "La Production dispose de capacité libre. Une commande supplémentaire de l’E-commerce rapporterait au groupe 90 − 38 − 8 = 44 € par raquette. Mais le PCI étant fixé à 75 €, l’E-commerce calcule sa marge à 7 € et juge l’opération peu intéressante face à d’autres priorités.\nLe contrôleur de gestion détecte le risque : un PCI au coût variable (38 €), réservé aux ventes additionnelles sur capacité libre, révélerait à l’aval le vrai coût marginal interne et déclencherait la commande, au bénéfice du groupe. C’est l’illustration du rôle d’arbitrage du PCI."
        }
      ]
    },
    {
      "id": "4-le-pilotage-de-la-performance-par-les-prix-de-cession-inte",
      "title": "4. Le pilotage de la performance par les prix de cession interne",
      "blocks": [
        {
          "type": "p",
          "text": "Au-delà de la mesure, le PCI est un levier de pilotage de la performance globale, notion centrale du référentiel rénové. Il s’agit de faire converger les intérêts, d’arbitrer entre autonomie et contrôle, d’articuler le PCI avec les tableaux de bord, puis de tirer parti des outils numériques et d’orienter la chaîne interne vers la durabilité."
        },
        {
          "type": "h3",
          "text": "4.1 La convergence des objectifs"
        },
        {
          "type": "p",
          "text": "La performance globale ne se réduit pas à la somme des performances locales. Un système de PCI réussi est celui qui rend l’intérêt individuel de chaque centre compatible avec l’intérêt collectif."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le principe de convergence (goal congruence)",
          "text": "Décision optimale pour le centre ⇔ Décision optimale pour le groupe.\nRègle pratique : fixer le PCI de sorte que le centre acheteur « voie » le coût pertinent pour le groupe — souvent le coût variable (ou marginal) du vendeur lorsque la capacité est disponible."
        },
        {
          "type": "p",
          "text": "Quand la capacité est saturée, le coût pertinent inclut le coût d’opportunité (la marge perdue sur la vente externe sacrifiée). Le PCI optimal devient alors : coût variable + coût d’opportunité, ce qui rejoint souvent le prix de marché."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — La règle générale du PCI optimal",
          "text": "PCI optimal = coût variable du vendeur + coût d’opportunité.\nCapacité disponible ⇒ coût d’opportunité nul ⇒ PCI = coût variable.\nCapacité saturée ⇒ coût d’opportunité = marge externe perdue ⇒ PCI ≈ prix de marché.\nCette règle assure la convergence : c’est un résultat à connaître pour l’analyse critique."
        },
        {
          "type": "h3",
          "text": "4.2 Les arbitrages managériaux"
        },
        {
          "type": "p",
          "text": "La direction doit en permanence arbitrer entre trois exigences souvent contradictoires :"
        },
        {
          "type": "ul",
          "items": [
            "l’autonomie, qui motive et responsabilise mais peut nourrir l’égoïsme local ;",
            "le contrôle, qui garantit la cohérence mais peut brider l’initiative ;",
            "la coordination, qui assure la fluidité des échanges internes mais a un coût."
          ]
        },
        {
          "type": "p",
          "text": "Le choix du mode de PCI traduit cet arbitrage. Un PCI imposé au coût standard privilégie le contrôle et la cohérence ; un PCI négocié privilégie l’autonomie. Il n’existe pas de solution universelle : le bon système dépend du contexte, de la stratégie et de la culture de l’organisation."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Décentraliser sans désintégrer",
          "text": "Tout l’art du contrôle de gestion est de décentraliser suffisamment pour gagner en réactivité, sans laisser les centres se comporter comme des entreprises rivales. Le PCI est l’un des principaux instruments de cet équilibre."
        },
        {
          "type": "h3",
          "text": "4.3 Les prix de cession et les tableaux de bord"
        },
        {
          "type": "p",
          "text": "Le PCI alimente directement le reporting et les tableaux de bord par centre (chapitre Les tableaux de bord et le reporting). Les marges internes, calculées à partir du PCI, deviennent des indicateurs suivis périodiquement par la direction. Le contrôleur de gestion peut ainsi améliorer un tableau de bord existant — ou en concevoir un — en y intégrant la marge sur cessions internes, la marge nette par produit et la marge consolidée."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Indicateur de tableau de bord**",
            "**Lien avec le PCI**"
          ],
          "rows": [
            [
              "Production",
              "Marge sur cessions internes",
              "Produit interne = quantité × PCI"
            ],
            [
              "E-commerce",
              "Marge nette par produit",
              "Charge interne = quantité × PCI"
            ],
            [
              "Direction",
              "Marge globale consolidée",
              "Élimination des marges internes croisées"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Cohérence avec le contrôle budgétaire",
          "text": "Quand le PCI est fixé au coût standard, les écarts entre coût réel et coût standard s’analysent exactement comme dans le contrôle budgétaire (chapitre Le contrôle budgétaire et l’analyse des écarts) : écart sur quantité, écart sur coût. Le PCI s’insère ainsi dans le dispositif global d’analyse des écarts."
        },
        {
          "type": "h3",
          "text": "4.4 Les prix de cession dans les groupes intégrés"
        },
        {
          "type": "p",
          "text": "Dans les organisations multi-sites et les groupes, le PCI se complexifie : multiplicité des centres, chaînes de cessions, dimension internationale. La logique de gestion reste la même, mais l’enjeu de coordination est démultiplié."
        },
        {
          "type": "ul",
          "items": [
            "Organisations multi-sites : un même produit transite par plusieurs établissements, chaque cession devant être valorisée.",
            "Groupes internationaux : les cessions traversent les frontières — mais attention, la dimension fiscale (prix de transfert) relève d’un autre cadre, hors programme DCG.",
            "Pilotage décentralisé : la direction du groupe pilote par les résultats consolidés, en neutralisant les marges internes."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — HORS PROGRAMME — Le prix de transfert fiscal (OCDE)",
          "text": "Le prix de transfert (transfer pricing) désigne la valorisation fiscale des transactions intra-groupe transfrontalières, encadrée par l’OCDE et l’administration fiscale (principe de pleine concurrence). Le guide pédagogique (REF-01, §4.4) l’exclut expressément de l’étude du prix de cession interne en DCG : c’est une notion fiscale réservée au DSCG. Il est mentionné ici uniquement pour éviter toute confusion avec le prix de cession interne (notion de gestion) ; il n’est ni développé ni évaluable à ce niveau."
        },
        {
          "type": "h3",
          "text": "4.5 Le pilotage augmenté : apports du numérique"
        },
        {
          "type": "p",
          "text": "La transformation numérique modifie profondément la gestion des flux internes et des prix de cession. Le référentiel rénové insiste sur cette dimension numérique du contrôle de gestion."
        },
        {
          "type": "h4",
          "text": "ERP et flux internes"
        },
        {
          "type": "p",
          "text": "Les progiciels de gestion intégrée enregistrent automatiquement chaque transaction interne et lui appliquent le PCI paramétré. La cession devient une écriture instantanée, traçable, fiable. Le contrôleur de gestion n’a plus à reconstituer manuellement les flux : il les pilote."
        },
        {
          "type": "h4",
          "text": "Data Analytics et pilotage en temps réel"
        },
        {
          "type": "p",
          "text": "L’analyse de données permet d’évaluer en continu l’effet des PCI sur les marges des centres, de simuler des scénarios (« et si le PCI passait au coût standard ? ») et de détecter les comportements dysfonctionnels à partir des historiques de cessions. Les tableaux de bord dynamiques actualisent les marges par centre au fil des cessions : la direction visualise immédiatement les déséquilibres et peut réajuster les règles sans attendre la clôture."
        },
        {
          "type": "h4",
          "text": "Informatique décisionnelle et contrôle de gestion augmenté"
        },
        {
          "type": "p",
          "text": "Les outils d’informatique décisionnelle consolident les données des différents centres et restituent la performance globale en neutralisant les marges internes. L’intelligence artificielle et l’automatisation ouvrent en outre la voie à des PCI « intelligents » : ajustement automatique en fonction de la capacité disponible, alertes sur les risques de sous-optimisation, recommandations de prix optimaux. Le contrôleur de gestion se recentre alors sur l’analyse et le conseil."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE — Le PCI augmenté",
          "text": "Rakéo a paramétré dans son ERP un PCI de la raquette au coût standard (67 €). Un tableau de bord décisionnel suit en temps réel la marge de chaque centre. Lorsque la capacité de production est libre, un module d’aide à la décision propose automatiquement un PCI réduit au coût variable (38 €) pour les ventes additionnelles — déclenchant les cessions favorables au groupe que le prix standard aurait bloquées.\nRésultat : la convergence des objectifs est en partie automatisée, et le contrôleur se concentre sur l’analyse des écarts et le conseil à la direction."
        },
        {
          "type": "h3",
          "text": "4.6 Prix de cession interne et performance globale durable"
        },
        {
          "type": "p",
          "text": "La performance globale, au sens du référentiel rénové, intègre les dimensions économique, sociale et environnementale (ESG / RSE). Le PCI peut être mobilisé au service de ces objectifs."
        },
        {
          "type": "ul",
          "items": [
            "Internaliser le coût environnemental : intégrer dans le PCI le coût carbone ou le coût des déchets incite chaque centre à des choix plus sobres.",
            "Favoriser les approvisionnements responsables : un PCI bonifié pour les matières recyclées oriente la chaîne interne vers l’éco-conception.",
            "Aligner les centres sur la stratégie RSE : les indicateurs extra-financiers complètent la marge dans l’évaluation des centres."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ — Le PCI « vert »",
          "text": "Rakéo teste l’intégration d’un coût carbone interne de 3 € par raquette dans le PCI de la raquette. Ce signal-prix interne rend visible l’empreinte environnementale à chaque maillon et incite la Production à réduire ses émissions pour rester compétitive en interne. Le PCI devient alors un instrument de pilotage de la performance globale, et non plus seulement financière."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**APPLICATIONS CORRIGÉES**"
        },
        {
          "type": "p",
          "text": "Les applications suivantes mobilisent les quatre temps — comprendre, calculer, interpréter, critiquer — sur le cas Rakéo. Chaque énoncé est suivi d’une solution détaillée, visible et entièrement justifiée."
        }
      ]
    },
    {
      "id": "application-1-calculer-un-pci-selon-trois-methodes",
      "title": "Application 1 — Calculer un PCI selon trois méthodes",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Énoncé",
          "text": "Le centre Production de Rakéo cède la raquette au centre Logistique. Données unitaires : coût variable de production 38 € ; charges fixes réparties 29 € ; prix de marché d’une raquette équivalente 75 €. La direction envisage une marge de 7 € sur le coût complet.\nTravail à faire : calculer le PCI au coût variable, au coût complet, au coût complet majoré et au prix de marché. Préciser, dans chaque cas, la marge dégagée par le centre Production."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Solution détaillée",
          "text": "PCI au coût variable = 38 €. Marge Production = 38 − 38 = 0 €.\nPCI au coût complet = 38 + 29 = 67 €. Marge Production = 67 − 38 = 29 € (couvre les charges fixes).\nPCI au coût complet majoré = 67 + 7 = 74 €. Marge Production = 74 − 38 = 36 €.\nPCI au prix de marché = 75 €. Marge Production = 75 − 38 = 37 €.\nInterprétation : plus le PCI est élevé, plus la marge affichée par la Production augmente — mais cette marge est « prise » sur l’aval. Le PCI ne crée pas de valeur, il la déplace."
        }
      ]
    },
    {
      "id": "application-2-repartir-la-marge-entre-deux-centres",
      "title": "Application 2 — Répartir la marge entre deux centres",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Énoncé",
          "text": "Le centre E-commerce achète la raquette au centre Production (PCI), supporte 8 € de coûts propres (emballage, expédition) et la revend 90 € au consommateur final.\nTravail à faire : pour un PCI de 67 € puis de 75 €, calculer la marge de chaque centre et la marge globale du groupe. Conclure."
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**PCI = 67 €**",
            "**PCI = 75 €**"
          ],
          "rows": [
            [
              "Marge Production = PCI − 38",
              "29 €",
              "37 €"
            ],
            [
              "Marge E-commerce = 90 − PCI − 8",
              "15 €",
              "7 €"
            ],
            [
              "Marge globale du groupe",
              "44 €",
              "44 €"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Commentaire",
          "text": "La marge globale (44 €) est rigoureusement identique dans les deux cas : 90 − 38 − 8 = 44 €. Le PCI n’a fait que répartir cette marge différemment entre les deux centres. À 67 €, l’aval conserve encore 15 € ; à 75 €, l’amont capte l’essentiel. Le choix du PCI est donc un arbitrage de répartition, pas de création de richesse — point capital à souligner dans une copie."
        }
      ]
    },
    {
      "id": "application-3-pci-decision-et-convergence-des-buts",
      "title": "Application 3 — PCI, décision et convergence des buts",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Énoncé",
          "text": "La production dispose d’une capacité libre. L’E-commerce envisage une opération promotionnelle : 1 000 raquettes vendues à 80 € (au lieu de 90 €), avec 8 € de coûts propres. Le PCI en vigueur est de 75 € (prix de marché).\nTravail à faire : (a) l’E-commerce acceptera-t-il l’opération avec le PCI actuel ? (b) l’opération est-elle favorable au groupe ? (c) quel PCI assurerait la convergence ?"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Solution détaillée",
          "text": "(a) Marge E-commerce par raquette = 80 − 75 − 8 = −3 €. L’opération est déficitaire pour le centre : l’E-commerce la refusera.\n(b) Pour le groupe : marge = 80 − 38 (coût variable réel) − 8 = 34 € par raquette, soit 34 000 €. Comme la capacité est libre, les charges fixes sont déjà engagées : l’opération est nettement favorable au groupe.\n(c) En cédant au coût variable (38 €), l’E-commerce verrait sa marge à 80 − 38 − 8 = 34 € et accepterait sans hésiter. Le PCI au coût variable révèle le vrai coût marginal interne et assure la convergence des buts lorsque la capacité est disponible.\nConclusion : un PCI au prix de marché, ici, provoque une sous-optimisation. Le contrôleur de gestion recommandera un PCI au coût variable pour les ventes additionnelles sur capacité libre."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Le réflexe « capacité »",
          "text": "Toujours se demander si la capacité du vendeur est disponible ou saturée : capacité libre ⇒ coût pertinent = coût variable ; capacité saturée ⇒ ajouter le coût d’opportunité (marge perdue sur la vente sacrifiée). C’est la clé des questions de décision sur le PCI."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**APPLICATION RÉCAPITULATIVE — Rakéo**"
        }
      ]
    },
    {
      "id": "concevoir-un-systeme-de-pci-coherent",
      "title": "Concevoir un système de PCI cohérent",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Énoncé complet",
          "text": "La direction de Rakéo vous confie l’analyse de sa chaîne interne pour la raquette. Trois centres sont concernés : Production (centre de coûts), Logistique (centre de coûts), E-commerce (centre de profit).\nDonnées par produit : coût variable Production 38 € ; charges fixes Production 29 € (coût standard 67 €) ; coût de la Logistique 6 € (dont 4 € variables et 2 € fixes) ; coûts propres E-commerce 8 € ; prix de vente final 90 € ; prix de marché d’une raquette équivalente 75 €. Capacité de production actuellement disponible.\nTravail à faire : (1) calculer la marge globale du groupe ; (2) déterminer les marges de chaque centre si le PCI Production→Logistique = coût standard 67 € et Logistique→E-commerce = coût standard cumulé ; (3) identifier un risque de comportement dysfonctionnel ; (4) rédiger une recommandation argumentée à la direction (écrit d’analyse)."
        },
        {
          "type": "h4",
          "text": "1. Marge globale du groupe"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calcul",
          "text": "Coûts variables totaux internes = 38 (prod) + 4 (logistique var.) + 8 (e-com) = 50 €.\nEn tenant compte des charges fixes engagées (29 + 2 = 31 €), coût complet de la chaîne = 81 €.\nMarge globale sur coût complet = 90 − 81 = 9 € par produit.\nMarge globale sur coût variable = 90 − 50 = 40 € par produit (utile pour les décisions de court terme)."
        },
        {
          "type": "h4",
          "text": "2. Marges par centre (PCI au coût standard)"
        },
        {
          "type": "p",
          "text": "On enchaîne les cessions au coût complet standard. La Logistique reçoit à 67 €, ajoute son coût (6 €) et cède à 73 € ; l’E-commerce reçoit à 73 €."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Produit (cession ou vente)**",
            "**Charges**",
            "**Marge**"
          ],
          "rows": [
            [
              "Production",
              "67 € (PCI sortant)",
              "38 + 29 = 67 €",
              "0 €"
            ],
            [
              "Logistique",
              "73 € (PCI sortant)",
              "67 + 6 = 73 €",
              "0 €"
            ],
            [
              "E-commerce",
              "90 € (vente finale)",
              "73 + 8 = 81 €",
              "9 €"
            ],
            [
              "Groupe (total)",
              "90 €",
              "81 €",
              "9 €"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Lecture",
          "text": "Au coût complet standard sans marge, les centres de coûts (Production, Logistique) affichent une marge nulle : c’est cohérent avec leur statut. Toute la marge (9 €) se concentre sur le centre de profit E-commerce. La somme des marges (0 + 0 + 9) égale bien la marge globale sur coût complet."
        },
        {
          "type": "h4",
          "text": "3. Risque de comportement dysfonctionnel"
        },
        {
          "type": "p",
          "text": "Supposons que l’E-commerce reçoive une commande spéciale à 75 € l’unité (au lieu de 90 €). Avec un PCI cumulé de 73 €, sa marge serait de 75 − 73 − 8 = −6 € : il refusera, jugeant l’opération déficitaire."
        },
        {
          "type": "p",
          "text": "Or, pour le groupe, la capacité étant libre, le coût pertinent est le coût variable cumulé = 38 + 4 + 8 = 50 €. La marge groupe serait de 75 − 50 = 25 € : l’opération est clairement favorable. Le PCI au coût complet standard masque ici le vrai coût marginal et risque de provoquer une sous-optimisation."
        },
        {
          "type": "h4",
          "text": "4. Recommandation argumentée à la direction"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Écrit d’analyse (proposition de corrigé)",
          "text": "« Madame, Monsieur, l’analyse de la chaîne interne de la raquette conduit à trois recommandations.\nPremièrement, retenir le coût standard comme base du PCI pour la mesure courante de la performance : il responsabilise chaque centre sur ses propres écarts sans transmettre les inefficiences de l’amont, et reste cohérent avec le contrôle budgétaire.\nDeuxièmement, prévoir une règle dérogatoire pour les décisions de court terme : lorsque la capacité de production est disponible, valoriser les cessions additionnelles au coût variable, afin que le centre E-commerce perçoive le vrai coût marginal interne et ne refuse pas des opérations favorables au groupe.\nTroisièmement, accompagner le dispositif d’un tableau de bord par centre et d’indicateurs de performance globale (y compris environnementaux), pour éviter que la recherche de la marge locale ne nuise à la cohésion et à la stratégie RSE du groupe. Cette architecture concilie autonomie des centres et convergence vers l’intérêt global. »"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Ce que valorise le correcteur",
          "text": "La vérification que la somme des marges = marge globale (contrôle de cohérence).\nLa distinction nette coût complet (mesure) / coût variable (décision).\nUne recommandation structurée reliant le PCI à la performance globale — l’écrit argumenté attendu par le référentiel rénové."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**FOCUS RÉFORME 2027**"
        }
      ]
    },
    {
      "id": "pourquoi-les-prix-de-cession-interne-entrent-dans-le-nouveau",
      "title": "Pourquoi les prix de cession interne entrent dans le nouveau référentiel",
      "blocks": [
        {
          "type": "p",
          "text": "Le prix de cession interne est l’une des nouveautés explicites du référentiel DCG rénové. Il figure dans la compétence 4.4 — « Proposer des pistes pour améliorer la performance globale » — avec la mention : « Prix de cession interne par rapport au prix de marché, au coût standard, au coût réel (partiel ou complet) ». Son introduction n’est pas anodine ; elle traduit l’évolution de la discipline."
        },
        {
          "type": "ul",
          "items": [
            "Les organisations deviennent plus complexes : décentralisation, multiplication des centres, fonctionnement en réseau. Le contrôle de gestion doit savoir piloter cette complexité.",
            "Les centres de responsabilité jouent un rôle croissant : on ne pilote plus une entreprise monolithique mais un ensemble d’unités autonomes dont il faut mesurer la contribution.",
            "La performance locale doit rester cohérente avec la performance globale : le PCI est précisément l’instrument qui relie les deux niveaux.",
            "Le PCI est un outil de gouvernance et de pilotage : il dépasse le calcul de coûts pour toucher à la motivation, à la coordination et à la création de valeur."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Ce que la réforme attend de l’étudiant",
          "text": "Au-delà du calcul, l’épreuve valorise l’analyse critique et l’écrit argumenté : savoir expliquer les effets d’un mode de fixation, conseiller une direction, relier le PCI à la performance globale. La maîtrise des quatre temps (comprendre, calculer, interpréter, critiquer) est donc essentielle."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — HORS PROGRAMME — Ce qui n’est pas attendu en DCG",
          "text": "Le prix de transfert fiscal et les obligations documentaires OCDE : réservés au DSCG et aux UE fiscales.\nLes modèles mathématiques avancés d’optimisation des prix internes (programmation, théorie des jeux formalisée) : non exigibles.\nCes points sont signalés pour cadrage, jamais développés ni évaluables à ce niveau."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**REGARD CRITIQUE**"
        }
      ]
    },
    {
      "id": "les-apports-des-prix-de-cession-interne",
      "title": "Les apports des prix de cession interne",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Ils rendent possible la mesure décentralisée de la performance, condition d’un pilotage par les résultats.",
            "Ils responsabilisent et motivent les managers en les traitant comme des chefs d’entreprise.",
            "Ils fournissent un signal-prix interne qui coordonne les décisions sans recours systématique à la hiérarchie."
          ]
        }
      ]
    },
    {
      "id": "les-limites-des-differentes-methodes",
      "title": "Les limites des différentes méthodes",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Aucune méthode n’est parfaite : le marché exige un référent externe, le coût réel transmet les inefficiences, le coût variable prive le vendeur de marge, le négocié consomme du temps et crée des tensions.",
            "Le choix dépend du contexte (existence d’un marché, capacité disponible, stratégie), ce qui interdit toute solution universelle."
          ]
        }
      ]
    },
    {
      "id": "les-risques-de-conflits-entre-centres",
      "title": "Les risques de conflits entre centres",
      "blocks": [
        {
          "type": "p",
          "text": "La logique de mini-entreprise peut dégénérer en rivalité interne : chaque centre défend sa marge au détriment de la coopération. Le PCI, censé fluidifier les échanges, peut alors devenir un objet de litige permanent."
        }
      ]
    },
    {
      "id": "les-effets-pervers-possibles",
      "title": "Les effets pervers possibles",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Sous-optimisation : refus de cessions pourtant favorables au groupe.",
            "Manipulation : un responsable peut chercher à influencer le PCI pour embellir sa performance.",
            "Court-termisme : optimisation de la marge immédiate au détriment d’investissements ou de la qualité."
          ]
        }
      ]
    },
    {
      "id": "les-difficultes-d-evaluation",
      "title": "Les difficultés d’évaluation",
      "blocks": [
        {
          "type": "p",
          "text": "Le résultat d’un centre dépend d’un PCI partiellement conventionnel : il ne reflète donc jamais une performance « pure ». Comparer les centres entre eux ou dans le temps suppose une grande prudence méthodologique et une stabilité des règles."
        }
      ]
    },
    {
      "id": "les-defis-du-pilotage-decentralise",
      "title": "Les défis du pilotage décentralisé",
      "blocks": [
        {
          "type": "p",
          "text": "Le PCI cristallise la tension permanente entre autonomie et contrôle. Trop de contrôle étouffe l’initiative ; trop d’autonomie disloque le groupe. Le contrôleur de gestion doit donc accompagner le système de PCI d’un dialogue de gestion et d’indicateurs complémentaires — notamment extra-financiers — pour piloter la performance globale, et non la seule marge comptable."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Synthèse critique pour l’écrit argumenté",
          "text": "Un bon écrit ne se contente pas de calculer un PCI : il discute le choix de la méthode au regard du contexte, anticipe les comportements qu’elle induit, et conclut sur sa cohérence avec la performance globale. C’est exactement la posture attendue par le référentiel rénové."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**SYNTHÈSE FINALE**"
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
            "**Intérêt**",
            "**Limites**"
          ],
          "rows": [
            [
              "Prix de marché",
              "PCI aligné sur le prix externe de référence",
              "Objectivité ; vraie mesure de performance",
              "Marché requis ; volatilité"
            ],
            [
              "Coût réel complet",
              "Charges variables + fixes réelles constatées",
              "Couvre tous les coûts ; sans marché",
              "Transmet les inefficiences de l’amont"
            ],
            [
              "Coût standard",
              "Coût complet prévu et stable",
              "Responsabilise ; stable ; cohérent budgets",
              "À actualiser ; conventionnel"
            ],
            [
              "Coût variable",
              "Charges variables seules (coût réel partiel)",
              "Coût pertinent (CT) ; assure la convergence",
              "Aucune marge vendeur ; CF non couvertes"
            ],
            [
              "Prix négocié",
              "Accord encadré entre responsables",
              "Préserve autonomie ; souplesse",
              "Rapport de force ; conflits ; chronophage"
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
          "title": "À connaître par cœur",
          "text": "Capacité libre ⇒ PCI = coût variable ; capacité saturée ⇒ PCI ≈ prix de marché."
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — À éviter le jour de l’épreuve",
          "text": "Croire que le PCI modifie la marge du groupe : il ne fait que la répartir.\nConfondre coût complet et coût variable (charges fixes incluses ou non).\nOublier le coût d’opportunité quand la capacité est saturée.\nConfondre prix de cession interne (gestion) et prix de transfert fiscal (hors programme).\nDire « rentabilité » pour « profitabilité » lorsqu’on raisonne sur la couverture des charges fixes."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
