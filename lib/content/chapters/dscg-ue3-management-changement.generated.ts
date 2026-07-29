// Généré par scripts/convert-docx.mjs depuis 04_Management_du_changement.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-management-changement",
  "level": "DSCG",
  "ue": "UE3",
  "number": 4,
  "title": "Le management du changement et la transformation des organisations",
  "description": "",
  "durationMin": 45,
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
          "text": "**Rattachement au référentiel officiel.** Ce chapitre couvre la sous-partie **2.4 « L'accompagnement du changement » (10 heures)** de la Partie 2. Les **compétences** attendues portent sur la capacité à identifier les facteurs et les formes du changement, à analyser les résistances et les jeux d'acteurs, à mobiliser les modèles de conduite du changement, et surtout à préciser **le rôle du contrôle de gestion dans l'accompagnement et la mesure du changement** (indicateurs de suivi, tableau de bord de la transformation). Les **savoirs associés** sont : les facteurs et formes du changement organisationnel ; les acteurs du changement et les résistances ; les modèles de conduite du changement (Lewin, Kotter, approches contemporaines) ; les leviers d'accompagnement (gouvernance, communication, formation) ; les indicateurs et tableaux de bord de suivi du changement."
        },
        {
          "type": "p",
          "text": "**Articulation avec les autres sous-parties (limites de champ).** Le management du changement est par nature transversal et mobilise des notions étudiées ailleurs : le **mode projet** (sous-partie 2.2) — une transformation se conduit comme un projet, avec gouvernance, planning et jalons ; les **fonctions support**, RH en particulier (2.3 et 2.6) — la conduite du changement est un levier RH majeur ; la **gestion des risques** (2.5) — le risque d'échec de la transformation ; les **tableaux de bord** et la **performance globale** (Partie 3). Le présent chapitre se concentre sur ce qui fait sa spécificité au sein de l'UE3 : la dimension **comportementale et organisationnelle** du changement (pourquoi les acteurs résistent, comment les accompagner) et, surtout, **la contribution propre du contrôle de gestion** : mesurer, sécuriser et piloter la transformation par des indicateurs — angle qui distingue ce chapitre d'un cours de sociologie des organisations."
        },
        {
          "type": "p",
          "text": "**Avertissement sur les illustrations d'entreprises (§9).** Le cahier des charges demande des cas d'entreprises réelles (Microsoft, Netflix, etc.). Ils sont présentés à titre d'illustration pédagogique, à partir d'éléments de notoriété publique et nécessairement simplifiés ; ils ne constituent pas une analyse exhaustive ni vérifiée de la situation de ces entreprises, et doivent être lus comme des supports d'apprentissage, non comme des études de cas certifiées."
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
              "Jeux d'acteurs, pouvoir, zones d'incertitude (Crozier & Friedberg)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1 & 3, pouvoir et acteur stratégique)"
            ],
            [
              "Inertie structurelle et résistances (écologie des populations, Hannan & Freeman)",
              "**Repris-adapté**",
              "Ancien cours (Cours 3)"
            ],
            [
              "Modèle de Lewin (champ de forces, groupes)",
              "**Repris-adapté**",
              "Ancien cours (Cours 3, à la suite de Lewin)"
            ],
            [
              "Conduite du changement et dialogue social ; organisation apprenante",
              "**Repris-adapté**",
              "Ancien cours (Cours 4, gestion du changement)"
            ],
            [
              "Typologie des formes du changement",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Modèle de Kotter (8 étapes) ; Beer & Nohria",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Approches contemporaines (agile, lean, entreprise apprenante)",
              "**Créé / complété**",
              "Culture professionnelle"
            ],
            [
              "Gouvernance, communication, formation du changement",
              "**Créé**",
              "Référentiel (accompagnement)"
            ],
            [
              "Rôle du CG, indicateurs et tableau de bord du changement",
              "**Créé**",
              "Cœur du référentiel (mesure du changement)"
            ],
            [
              "Transformation digitale et IA",
              "**Créé**",
              "Ouverture contemporaine"
            ],
            [
              "Cas d'entreprises (Microsoft, Netflix, Schneider, Amazon, Airbus)",
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
          "text": "1.1 L'accélération des transformations"
        },
        {
          "type": "p",
          "text": "Les organisations ont toujours changé, mais jamais à un tel rythme. Plusieurs forces convergentes ont fait de la transformation une condition permanente de survie. La **mondialisation** a intensifié la concurrence et raccourci les cycles de vie des produits. La **digitalisation** a bouleversé les modèles d'affaires, faisant émerger des acteurs qui ont disrupté des secteurs entiers (la distribution par le commerce en ligne, l'hôtellerie par les plateformes, les médias par le streaming). Les **mutations technologiques** — automatisation, données massives, et désormais intelligence artificielle générative — redéfinissent les métiers et les compétences à une cadence inédite. Les **attentes sociétales** (durabilité, sens au travail, responsabilité) imposent enfin de nouvelles exigences. Dans ce contexte, l'avantage concurrentiel n'appartient plus aux organisations les plus grandes ou les mieux établies, mais aux plus **adaptatives** — celles qui savent transformer leur stratégie, leur organisation et leur culture aussi vite que leur environnement."
        },
        {
          "type": "h3",
          "text": "1.2 Du changement-événement au changement permanent"
        },
        {
          "type": "p",
          "text": "Cette accélération opère un renversement conceptuel majeur. Le changement n'est plus un **événement** exceptionnel — une rupture ponctuelle entre deux périodes de stabilité — mais un **état permanent**. La métaphore classique de Lewin (décristalliser, déplacer, recristalliser, §4.1) supposait un retour à la stabilité ; les approches contemporaines (Weick) postulent au contraire que le changement est continu, émergent, tissé dans le fonctionnement quotidien. L'enjeu n'est dès lors plus seulement de réussir *un* changement, mais de bâtir une organisation **capable de changer en continu** — une organisation apprenante et adaptative."
        },
        {
          "type": "h3",
          "text": "1.3 Le paradoxe du changement et le rôle du contrôle de gestion"
        },
        {
          "type": "p",
          "text": "Or le changement se heurte à un paradoxe : il est vital pour l'organisation, mais menaçant pour les individus qui la composent. L'ancien cours le rappelle à travers la théorie de l'**inertie structurelle** : les organisations « peuvent difficilement transformer leur structure », en raison des « résistances au changement », du manque d'information et des « investissements préalablement réalisés qui seraient perdus en cas de changement ». Conduire le changement, c'est donc surmonter cette inertie. Et c'est ici que le contrôle de gestion joue un rôle décisif, trop souvent sous-estimé : il **objective** la nécessité du changement (par le diagnostic chiffré), il **sécurise** la décision (par l'évaluation économique des options), il **pilote** la transformation (par des indicateurs et un tableau de bord dédiés) et il **mesure** la réussite (par l'évaluation des résultats post-transformation). Le contrôleur de gestion devient ainsi un acteur de la conduite du changement, et non son simple comptable."
        },
        {
          "type": "h3",
          "text": "1.4 Problématique centrale"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment les organisations peuvent-elles conduire les transformations indispensables à leur adaptation stratégique, en surmontant les résistances humaines et organisationnelles, et comment le contrôle de gestion contribue-t-il à accompagner, mesurer et sécuriser ce changement pour en garantir la création de valeur ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en analysant d'abord la **nature** du changement (§2) et les **résistances** qu'il suscite (§3), puis les grands **modèles** de conduite (§4) et les **leviers de pilotage** — gouvernance, communication, formation (§5). Il développe ensuite le **rôle du contrôle de gestion** et les **indicateurs** du changement (§6), avant d'aborder la **transformation digitale et l'IA** (§7), les **causes d'échec** et facteurs de succès (§8), des **cas d'entreprises** (§9), les **approfondissements DSCG** (§10), la synthèse (§11) et la fiche de révision (§12)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir le changement organisationnel et ses formes ; connaître les sources de résistance et la théorie des jeux d'acteurs (Crozier & Friedberg) ; maîtriser les modèles de Lewin et de Kotter ; connaître les approches contemporaines ; connaître les indicateurs de suivi du changement."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Diagnostiquer une situation de changement et qualifier son type ; cartographier les acteurs et les résistances ; mobiliser un modèle de conduite adapté ; concevoir une gouvernance, un plan de communication et un dispositif d'accompagnement ; construire un tableau de bord de pilotage de la transformation."
        },
        {
          "type": "p",
          "text": "**Compétences.** Analyser une situation de transformation ; proposer une démarche de conduite du changement ; définir le rôle du contrôle de gestion dans l'accompagnement ; mesurer la performance de la transformation ; formuler des préconisations argumentées."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (sous-partie 2.4).** Identifier les facteurs et formes du changement ; analyser les résistances ; mobiliser les modèles de conduite ; préciser et mettre en œuvre le rôle du contrôle de gestion dans l'accompagnement et la mesure du changement."
        }
      ]
    },
    {
      "id": "2-comprendre-le-changement-organisationnel",
      "title": "2. Comprendre le changement organisationnel",
      "blocks": [
        {
          "type": "h3",
          "text": "2.0 Les facteurs du changement"
        },
        {
          "type": "p",
          "text": "Avant de définir le changement, il faut comprendre ce qui le déclenche. Le référentiel cible explicitement les **facteurs du changement**, que l'on classe en deux grandes catégories. Les **facteurs externes** proviennent de l'environnement : évolutions du marché et de la concurrence (nouveaux entrants, disruption), mutations technologiques (numérique, IA), évolutions réglementaires et normatives (durabilité, conformité), transformations sociétales (attentes des clients et des collaborateurs), chocs économiques ou géopolitiques. La grille **PESTEL** (politique, économique, social, technologique, environnemental, légal), étudiée dans le diagnostic stratégique, fournit un cadre d'analyse systématique de ces facteurs. Les **facteurs internes** proviennent de l'organisation elle-même : croissance (qui impose de nouvelles structures, comme le montrait le modèle de Greiner dans l'ancien cours), dégradation de la performance, changement de dirigeants ou d'actionnariat, fusion-acquisition, tensions sociales, obsolescence des processus."
        },
        {
          "type": "p",
          "text": "La distinction est managérialement importante. Un changement **réactif**, déclenché par une menace externe subie, s'opère souvent dans l'urgence et la contrainte, ce qui accroît les résistances et le risque. Un changement **proactif**, anticipé avant que la nécessité ne devienne pressante, se conduit dans de meilleures conditions mais se heurte à la difficulté de mobiliser autour d'une urgence non encore visible — c'est tout l'enjeu de la première étape de Kotter (« créer un sentiment d'urgence ») lorsque la maison ne brûle pas encore. Le contrôle de gestion joue ici un rôle d'**alerte précoce** : par le suivi des indicateurs et la veille, il peut signaler la nécessité d'un changement avant que la crise n'éclate, permettant un changement proactif moins coûteux et mieux maîtrisé."
        },
        {
          "type": "h3",
          "text": "2.1 Définition du changement"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : cadre conceptuel créé ; auteurs (Crozier, Mintzberg, Weick) mobilisés, Crozier repris de l'ancien cours.*"
        },
        {
          "type": "p",
          "text": "Le **changement organisationnel** désigne toute modification significative et durable de l'état d'une organisation — de sa stratégie, de sa structure, de ses processus, de ses technologies ou de sa culture. Sa nature varie selon l'objet qu'il affecte. Le **changement stratégique** modifie les orientations fondamentales (nouveau marché, nouveau modèle d'affaires, repositionnement). Le **changement organisationnel** au sens étroit touche la structure et les processus (réorganisation, fusion, nouveau mode de fonctionnement). Le **changement technologique** introduit de nouveaux outils ou systèmes (ERP, automatisation, IA). Le **changement culturel**, le plus profond et le plus lent, transforme les valeurs, les comportements et les représentations partagées — c'est souvent le plus difficile, car il ne se décrète pas."
        },
        {
          "type": "p",
          "text": "Plusieurs auteurs éclairent la nature du changement. **Michel Crozier et Erhard Friedberg** (*L'Acteur et le système*, 1977) montrent que l'organisation n'est pas une mécanique que l'on reconfigure à volonté, mais un système d'acteurs poursuivant des stratégies propres : le changement se heurte donc inévitablement à des jeux de pouvoir (§3.2). **Henry Mintzberg** souligne que la structure possède une cohérence interne (une « configuration ») qui résiste aux changements partiels et appelle des transformations cohérentes d'ensemble. **Karl Weick** propose une vision du changement comme processus continu de *sensemaking* (construction de sens) : changer, c'est d'abord transformer la façon dont les acteurs interprètent leur réalité. Ces apports convergent vers une idée essentielle pour le contrôleur de gestion : **le changement n'est jamais purement technique ; il est toujours humain et politique**, ce qui explique pourquoi les transformations bien conçues sur le papier échouent si souvent dans les faits. L'apport de Weick mérite un développement, car il déplace le regard. Pour lui, les organisations sont des construits de sens : les acteurs agissent en fonction de l'interprétation qu'ils se font de leur situation. Un changement n'est donc pas seulement une modification de structures ou de processus ; c'est une **transformation des cadres d'interprétation**. Tant que les acteurs n'ont pas reconstruit un sens cohérent de la nouvelle situation, le changement formel reste lettre morte. Cela explique pourquoi la communication du « pourquoi » (le sens) précède nécessairement celle du « comment » (la méthode) : on ne change pas des comportements sans d'abord changer les représentations qui les sous-tendent. Pour le contrôleur de gestion, cet enseignement invite à la prudence : un indicateur, un tableau de bord ou une nouvelle procédure ne produisent du changement que s'ils sont porteurs de sens pour ceux qui doivent se les approprier."
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard DSCG.** Un sujet de changement attend rarement une simple récitation de modèles. Il attend une **analyse de situation** : quel type de changement ? quels acteurs et quelles résistances ? quel modèle de conduite mobiliser ? et surtout — c'est l'angle UE3 — **quels indicateurs** pour piloter et mesurer la transformation ? Toujours relier le changement à la stratégie (pourquoi changer ?) et à la performance (comment mesurer la réussite ?)."
        },
        {
          "type": "h3",
          "text": "2.2 Les formes du changement"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "Le changement se décline selon deux axes principaux : son **ampleur** (marginal ou profond) et son **rythme** (progressif ou brutal). Le croisement de ces dimensions distingue quatre formes, dont la conduite diffère radicalement."
        },
        {
          "type": "p",
          "text": "Le **changement incrémental** procède par petites améliorations continues (logique *kaizen*, lien chapitre 1) : peu risqué, bien accepté, il fait évoluer l'organisation sans la bouleverser, mais peut s'avérer insuffisant face à une rupture d'environnement. Le **changement radical** (ou transformationnel) modifie en profondeur et rapidement l'organisation (réorganisation majeure, changement de modèle d'affaires) : porteur de fort potentiel mais très risqué, il génère de fortes résistances. Le **changement continu** institutionnalise l'adaptation permanente (organisation apprenante) : il fait du changement une routine plutôt qu'une crise. Le **changement de rupture** (disruptif) répond à un bouleversement brutal de l'environnement et impose une réinvention rapide, souvent dans l'urgence."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Typologie des formes du changement *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Type de changement**",
            "**Caractéristiques**",
            "**Avantages**",
            "**Risques**",
            "**Exemples**"
          ],
          "rows": [
            [
              "**Incrémental**",
              "Petites améliorations continues, progressif",
              "Faible résistance, faible risque, apprentissage",
              "Insuffisant face à une rupture ; lenteur",
              "Amélioration continue (*kaizen*), optimisation de processus"
            ],
            [
              "**Radical / transformationnel**",
              "Profond et rapide, remet en cause l'existant",
              "Fort potentiel de gain, repositionnement",
              "Forte résistance, risque d'échec élevé",
              "Réorganisation majeure, changement de modèle d'affaires"
            ],
            [
              "**Continu**",
              "Adaptation permanente institutionnalisée",
              "Agilité, résilience, pas d'effet de crise",
              "Exige une culture mature ; fatigue du changement",
              "Organisation apprenante, amélioration permanente"
            ],
            [
              "**De rupture (disruptif)**",
              "Réinvention brutale imposée par l'environnement",
              "Survie, réinvention",
              "Urgence, déstabilisation, risque social",
              "Pivot stratégique face à une disruption technologique"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Typologie des changements (ampleur × rythme) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/01.png",
          "alt": "Schéma 2 — Typologie des changements (ampleur × rythme) *(obligatoire)*",
          "width": 1672,
          "height": 1276
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le positionnement sur la matrice oriente la démarche de conduite. Un changement incrémental (bas-gauche) se conduit par l'amélioration continue et l'implication des équipes ; un changement radical (haut-droite) exige une gouvernance forte, un sponsor de haut niveau et une gestion intensive des résistances (§3, §5). L'erreur fréquente consiste à conduire un changement radical avec les méthodes douces de l'incrémental — ou l'inverse, à brutaliser un changement qui aurait gagné à être progressif. Le diagnostic du *type* de changement est donc le préalable au choix de la *méthode*."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Quelle que soit sa forme, le changement se heurte à un obstacle universel : la résistance des acteurs."
        }
      ]
    },
    {
      "id": "3-les-resistances-au-changement",
      "title": "3. Les résistances au changement",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : jeux d'acteurs et zones d'incertitude (Crozier & Friedberg) repris de l'ancien cours ; typologie des facteurs créée.*"
        },
        {
          "type": "h3",
          "text": "3.1 Les mécanismes de résistance"
        },
        {
          "type": "p",
          "text": "La résistance au changement n'est ni de l'irrationalité ni de la mauvaise volonté : c'est une réaction rationnelle d'acteurs qui perçoivent une menace pour leurs intérêts, leurs repères ou leur identité. Comprendre ses ressorts est la condition d'une conduite efficace. On distingue cinq familles de facteurs."
        },
        {
          "type": "p",
          "text": "Les **facteurs psychologiques** relèvent de l'individu : peur de l'inconnu, crainte de perdre en compétence ou en statut, attachement aux habitudes, fatigue du changement (lorsque les transformations s'enchaînent sans répit). Les **facteurs sociaux** tiennent au groupe : normes collectives, solidarités d'équipe, crainte de rompre des collectifs de travail. Les **facteurs culturels** renvoient aux valeurs et représentations partagées : un changement heurtant la culture de l'organisation (« ça ne se fait pas ici ») rencontre une résistance profonde. Les **facteurs organisationnels** tiennent aux structures et systèmes : procédures rigides, systèmes d'information inadaptés, inertie structurelle (au sens de Hannan & Freeman, rappelé par l'ancien cours), investissements passés que le changement rendrait obsolètes (lien avec les coûts irrécupérables, chapitre 1). Les **facteurs politiques**, enfin, relèvent des rapports de pouvoir : le changement redistribue les ressources, les responsabilités et l'influence ; ceux qui y perdent résistent."
        },
        {
          "type": "h4",
          "text": "Encadré — Erreurs fréquentes"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Erreurs fréquentes.** L'erreur cardinale est de traiter la résistance comme un obstacle à écraser plutôt que comme une **information à exploiter**. La résistance signale souvent un problème réel (un risque mal évalué, un impact non anticipé, un déficit de sens). L'ignorer ou la réprimer la renforce ; l'écouter et y répondre la transforme en levier. Autre erreur : croire qu'une communication descendante suffit à lever les résistances — elle est nécessaire mais très insuffisante sans participation et accompagnement (§5)."
        },
        {
          "type": "h4",
          "text": "3.1.1 La courbe du changement (transition psychologique)"
        },
        {
          "type": "p",
          "text": "Au niveau individuel, la traversée d'un changement subi suit une trajectoire émotionnelle que l'on représente par la **courbe du changement**, adaptée des travaux d'Elisabeth Kübler-Ross sur le deuil. L'individu passe typiquement par plusieurs phases : le **choc** et le **déni** (« cela ne nous concerne pas / ne durera pas »), puis la **colère** et la **résistance** (opposition active, baisse de performance et de moral), un point bas de **résignation / dépression**, avant la **remontée** : l'**acceptation**, l'**expérimentation** des nouvelles pratiques et enfin l'**intégration** (engagement dans le nouveau modèle). La performance et le moral suivent cette courbe en U : ils chutent d'abord — c'est la « vallée du désespoir » — avant de remonter, idéalement à un niveau supérieur."
        },
        {
          "type": "h4",
          "text": "Graphique 3bis — La courbe du changement *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/02.png",
          "alt": "Graphique 3bis — La courbe du changement *(obligatoire)*",
          "width": 1804,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Cette courbe a une portée opérationnelle directe. D'abord, elle **dédramatise** la baisse de performance initiale : elle est normale et transitoire, non un signe d'échec. Ensuite, elle **calibre l'accompagnement** : la communication et le soutien sont les plus nécessaires dans la phase descendante (choc, résistance) et au point bas, là où le risque d'abandon est maximal. Enfin, elle rappelle que les individus ne traversent pas la courbe au même rythme : un manager peut être en phase d'intégration quand ses équipes sont encore dans le déni — décalage qui explique bien des incompréhensions. Le rôle de l'accompagnement est de **raccourcir et d'adoucir** la vallée, non de prétendre la supprimer."
        },
        {
          "type": "h3",
          "text": "3.2 Les jeux d'acteurs (Crozier et Friedberg)"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (analyse stratégique, pouvoir, zones d'incertitude).*"
        },
        {
          "type": "p",
          "text": "L'analyse stratégique de **Crozier et Friedberg** offre la grille la plus puissante pour comprendre les résistances. Son postulat : dans une organisation, chaque acteur dispose d'une marge de liberté et poursuit une **stratégie** propre, rationnelle de son point de vue. Le **pouvoir** n'est pas un attribut hiérarchique mais une **relation** : il naît de la capacité d'un acteur à maîtriser une **zone d'incertitude** pertinente pour les autres. Celui qui contrôle une compétence rare, une information clé, une relation à l'environnement ou l'application des règles détient un pouvoir, quel que soit son rang. L'exemple canonique de Crozier est l'ouvrier d'entretien qui, maîtrisant la réparation des machines (zone d'incertitude technique), exerce un pouvoir réel sur la production."
        },
        {
          "type": "p",
          "text": "Cette grille éclaire la conduite du changement : un changement modifie les zones d'incertitude et donc la distribution du pouvoir. Ceux dont le changement **réduit** la zone d'incertitude (et donc le pouvoir) y résisteront stratégiquement ; ceux dont il **accroît** le pouvoir le soutiendront. Conduire le changement suppose donc d'identifier ces jeux d'acteurs : qui gagne, qui perd, qui détient les zones d'incertitude critiques pour la réussite ? C'est une **cartographie politique** autant que technique."
        },
        {
          "type": "h4",
          "text": "Point méthode"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Point méthode — analyser les jeux d'acteurs.** (1) Identifier les acteurs concernés par le changement. (2) Pour chacun, repérer sa **stratégie** (que cherche-t-il à préserver ou à obtenir ?) et la **zone d'incertitude** qu'il maîtrise (sa source de pouvoir). (3) Évaluer l'impact du changement sur cette zone (gain ou perte de pouvoir). (4) En déduire son positionnement probable (allié, opposant, hésitant) et la stratégie d'accompagnement adaptée (impliquer les alliés, écouter et compenser les perdants, convaincre les hésitants)."
        },
        {
          "type": "h3",
          "text": "3.3 Cartographier les résistances"
        },
        {
          "type": "p",
          "text": "Pour piloter, il faut visualiser. La cartographie des acteurs croise deux dimensions : leur **niveau de soutien / d'opposition** au changement et leur **influence** (pouvoir) sur sa réussite. Elle permet de prioriser l'effort d'accompagnement."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — Sources de résistance et réponses managériales *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Source de résistance**",
            "**Manifestation**",
            "**Réponse managériale**"
          ],
          "rows": [
            [
              "**Psychologique** (peur, habitudes)",
              "Anxiété, repli, déni",
              "Communication rassurante, accompagnement individuel, formation"
            ],
            [
              "**Sociale** (groupe, normes)",
              "Solidarité de blocage, rumeurs",
              "Implication des leaders d'opinion, dialogue collectif"
            ],
            [
              "**Culturelle** (valeurs)",
              "« Ça ne se fait pas ici »",
              "Travail sur le sens, exemplarité du management, temps long"
            ],
            [
              "**Organisationnelle** (structures, SI)",
              "Procédures qui freinent, inertie",
              "Adapter structures, processus et outils en cohérence"
            ],
            [
              "**Politique** (pouvoir, intérêts)",
              "Opposition stratégique, lobbying interne",
              "Négociation, compensation, redistribution des rôles"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 3 — Cartographie des résistances (influence × opposition) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/03.png",
          "alt": "Graphique 3 — Cartographie des résistances (influence × opposition) *(obligatoire)*",
          "width": 1672,
          "height": 1276
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice répartit les acteurs en quadrants. Les **opposants influents** (haut-gauche) sont les plus dangereux : ils peuvent faire échouer le projet et exigent une attention prioritaire (négociation, recherche de compromis, voire neutralisation politique). Les **soutiens influents** (haut-droite) sont les alliés à mobiliser comme sponsors et ambassadeurs. Les **opposants peu influents** (bas-gauche) appellent écoute et pédagogie sans y consacrer une énergie disproportionnée. Les **soutiens peu influents** (bas-droite) constituent une base à élargir. Cette cartographie, à actualiser au fil du projet, oriente l'allocation de la ressource rare qu'est le temps d'accompagnement — exactement comme le Pareto orientait le temps d'acheteur au chapitre précédent."
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Transition.** Comprendre les résistances ne suffit pas : il faut une méthode de conduite. Les grands modèles du changement structurent cette démarche."
        }
      ]
    },
    {
      "id": "4-les-grands-modeles-du-changement",
      "title": "4. Les grands modèles du changement",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Le modèle de Kurt Lewin"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté de l'ancien cours (Lewin, dynamique des groupes).*"
        },
        {
          "type": "p",
          "text": "Le modèle fondateur de **Kurt Lewin** (années 1940-1950) conçoit le changement en **trois phases**. La **décristallisation** (*unfreezing*) ébranle l'équilibre existant : il s'agit de créer la prise de conscience de la nécessité de changer, de « dégeler » les habitudes en montrant que le statu quo n'est plus tenable. La **transition** (*moving* / *changing*) opère le changement proprement dit : nouvelles pratiques, nouveaux comportements, période d'apprentissage et d'inconfort. La **recristallisation** (*refreezing*) stabilise le nouvel état : on ancre les nouvelles pratiques dans les routines, les procédures et la culture, pour éviter le retour en arrière."
        },
        {
          "type": "p",
          "text": "Lewin complète ce modèle par l'analyse du **champ de forces** : toute situation résulte d'un équilibre entre des **forces motrices** (qui poussent au changement) et des **forces de résistance** (qui s'y opposent). Pour changer, deux stratégies : renforcer les forces motrices — mais cela accroît souvent symétriquement la résistance — ou, plus efficacement, **réduire les forces de résistance**. C'est un enseignement managérial majeur : il vaut souvent mieux lever les freins qu'accentuer la pression."
        },
        {
          "type": "h4",
          "text": "Schéma 4 — Le modèle de Lewin et le champ de forces *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/04.png",
          "alt": "Schéma 4 — Le modèle de Lewin et le champ de forces *(obligatoire)*",
          "width": 2024,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma articule les trois phases (sur un axe temporel) et le champ de forces (forces motrices vers le haut, forces de résistance vers le bas, de part et d'autre de la ligne d'équilibre). Sa lecture managériale : la phase de décristallisation consiste à rompre l'équilibre en agissant sur les forces ; la transition est la zone d'instabilité où l'accompagnement est le plus crucial ; la recristallisation rétablit un équilibre, à un niveau de performance supérieur. **Limite contemporaine** : le modèle suppose un retour à la stabilité, vision contestée par les approches du changement continu (§4.3) — mais il reste un cadre pédagogique de référence."
        },
        {
          "type": "h3",
          "text": "4.2 Le modèle de John Kotter"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "Là où Lewin offre un cadre en trois temps, **John Kotter** (*Leading Change*, 1996) propose une démarche opérationnelle en **huit étapes**, fruit de l'analyse des causes d'échec des transformations. Les quatre premières visent à créer le climat du changement, les trois suivantes à engager et impliquer l'organisation, la dernière à ancrer le changement."
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Les huit étapes de Kotter *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**#**",
            "**Étape**",
            "**Objectif**",
            "**Piège à éviter**"
          ],
          "rows": [
            [
              "1",
              "**Créer un sentiment d'urgence**",
              "Faire prendre conscience de la nécessité de changer",
              "Sous-estimer la force de l'inertie"
            ],
            [
              "2",
              "**Former une coalition directrice**",
              "Réunir une équipe influente et engagée",
              "Coalition trop faible ou sans légitimité"
            ],
            [
              "3",
              "**Développer une vision claire**",
              "Donner un cap compréhensible et mobilisateur",
              "Vision floue ou trop complexe"
            ],
            [
              "4",
              "**Communiquer la vision**",
              "Diffuser largement et de façon répétée",
              "Sous-communiquer (le grand classique)"
            ],
            [
              "5",
              "**Lever les obstacles (*empower*)**",
              "Donner aux acteurs les moyens d'agir",
              "Laisser des freins structurels en place"
            ],
            [
              "6",
              "**Générer des victoires rapides (*quick wins*)**",
              "Démontrer des résultats tangibles à court terme",
              "Attendre trop longtemps les premiers succès"
            ],
            [
              "7",
              "**Consolider et amplifier**",
              "Capitaliser sur les succès pour aller plus loin",
              "Crier victoire trop tôt"
            ],
            [
              "8",
              "**Ancrer dans la culture**",
              "Institutionnaliser les nouvelles pratiques",
              "Ne pas ancrer → retour en arrière"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Frise 5 — Le processus de changement de Kotter *(frise chronologique obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/05.png",
          "alt": "Frise 5 — Le processus de changement de Kotter *(frise chronologique obligatoire)*",
          "width": 2200,
          "height": 1012
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La frise visualise la progression des huit étapes en trois phases (créer le climat → engager → ancrer). Son enseignement central, issu de l'observation des échecs : les transformations échouent le plus souvent faute d'avoir suffisamment travaillé les **premières étapes** (urgence, coalition, vision) — on se précipite sur la mise en œuvre sans avoir créé les conditions de l'adhésion. Les **victoires rapides** (étape 6) sont un levier psychologique décisif : elles entretiennent la motivation et désarment les sceptiques. La dernière étape (ancrage culturel) est la plus négligée et explique nombre de retours en arrière."
        },
        {
          "type": "h3",
          "text": "4.3 Les approches contemporaines"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : organisation apprenante reprise de l'ancien cours ; autres approches créées.*"
        },
        {
          "type": "p",
          "text": "Les approches récentes prolongent et nuancent ces modèles. L'**organisation apprenante** (Peter Senge, *La Cinquième Discipline*, 1990 ; reprise dans l'ancien cours) vise une organisation capable d'apprendre en continu de son expérience — distinguant l'apprentissage en simple boucle (corriger les actions) et en double boucle (remettre en cause les valeurs et représentations sous-jacentes, ce qui implique un changement plus profond). Le ***Change Management***structuré (méthodes type ADKAR :*Awareness, Desire, Knowledge, Ability, Reinforcement*) propose une approche centrée sur la transition individuelle. La transformation agile transpose les principes agiles (itération, équipes autonomes, feedback continu, cf. chapitre 2) à l'échelle de l'organisation. La transformation lean déploie l'amélioration continue et l'élimination des gaspillages (lien chapitre 1). L'entreprise adaptative (ou*ambidextre*, selon March : exploiter l'existant*et* explorer le nouveau) érige la capacité de transformation permanente en compétence stratégique centrale."
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Comparaison des approches du changement *(comparatif)*"
        },
        {
          "type": "table",
          "headers": [
            "**Approche**",
            "**Logique**",
            "**Apport**",
            "**Limite**"
          ],
          "rows": [
            [
              "**Lewin**",
              "Séquentielle (3 phases)",
              "Cadre pédagogique fondateur",
              "Suppose un retour à la stabilité"
            ],
            [
              "**Kotter**",
              "Processus (8 étapes)",
              "Opérationnel, centré sur le leadership",
              "Linéaire, descendant"
            ],
            [
              "**Organisation apprenante (Senge)**",
              "Apprentissage continu",
              "Changement permanent, double boucle",
              "Exige une culture mature"
            ],
            [
              "**Agile / Lean**",
              "Itératif / amélioration continue",
              "Réactivité, implication des équipes",
              "Mal adaptée aux ruptures lourdes"
            ],
            [
              "**Entreprise ambidextre (March)**",
              "Exploiter + explorer",
              "Concilie performance et innovation",
              "Tension organisationnelle à gérer"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces modèles fournissent le « quoi ». Le « comment » opérationnel relève du pilotage : gouvernance, communication, accompagnement."
        }
      ]
    },
    {
      "id": "5-le-pilotage-du-changement",
      "title": "5. Le pilotage du changement",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; conduite du changement et dialogue social repris de l'ancien cours (Cours 4).*"
        },
        {
          "type": "h3",
          "text": "5.1 La gouvernance du changement"
        },
        {
          "type": "p",
          "text": "Conduire une transformation suppose une **structure de gouvernance** dédiée, distincte de la ligne hiérarchique ordinaire et organisée comme un projet (lien chapitre 2). Quatre rôles structurent cette gouvernance. Le **sponsor** (souvent un dirigeant) porte le changement au plus haut niveau, lui donne sa légitimité et débloque les moyens : son engagement visible et constant est le premier facteur de succès. Le **comité de pilotage** (COPIL) décide aux jalons, arbitre et alloue les ressources. Le **chef de projet de transformation** pilote opérationnellement la démarche. Les **ambassadeurs du changement** (*change agents*, relais de terrain) diffusent le changement au sein des équipes, font remonter les résistances et incarnent la transformation au plus près des acteurs — rôle clé, car le changement se joue sur le terrain, pas dans les comités."
        },
        {
          "type": "h4",
          "text": "Organigramme 6 — Gouvernance d'un projet de transformation *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/06.png",
          "alt": "Organigramme 6 — Gouvernance d'un projet de transformation *(obligatoire)*",
          "width": 1980,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation.** L'organigramme distingue trois niveaux : stratégique (sponsor et COPIL, qui décident et légitiment), opérationnel (chef de projet et équipe de transformation, qui pilotent et déploient) et terrain (ambassadeurs et managers de proximité, qui relaient et accompagnent). Les flèches montantes (remontée des résistances et des résultats) sont aussi importantes que les flèches descendantes (décisions et directives) : une gouvernance qui ne fait que descendre échoue. Le rôle du **management de proximité** est décisif — c'est lui qui, in fine, fait vivre ou échouer le changement auprès des équipes."
        },
        {
          "type": "h4",
          "text": "5.1.1 Les styles de conduite du changement"
        },
        {
          "type": "p",
          "text": "Le choix d'un **style de conduite** est une décision stratégique majeure, à calibrer selon le contexte, l'urgence et la culture. On distingue classiquement plusieurs styles, sur un continuum de la contrainte à la collaboration. Le style **directif (ou autoritaire)** impose le changement par l'autorité hiérarchique : rapide et adapté à l'urgence ou à la crise, il maximise toutefois les résistances et l'adhésion superficielle. Le style **persuasif** explique et convainc : il mobilise la communication pour emporter l'adhésion. Le style **participatif (ou collaboratif)** associe les acteurs à la conception du changement : plus lent, il génère une adhésion profonde et durable, et exploite l'intelligence collective, mais suppose du temps et une maturité organisationnelle. Le style **délégatif** confie largement la conduite aux équipes elles-mêmes (logique agile)."
        },
        {
          "type": "p",
          "text": "Aucun style n'est supérieur dans l'absolu : le bon style dépend de la situation. Une crise vitale impose souvent un style directif (il faut agir vite) ; une transformation culturelle de long terme exige au contraire la participation (on ne décrète pas un changement de culture). C'est la tension entre les théories E et O de Beer & Nohria (§8). L'erreur consiste à appliquer un style inadapté au contexte : imposer brutalement un changement culturel, ou au contraire chercher le consensus participatif quand l'urgence commande l'action. Les conduites les plus abouties combinent les styles selon les phases : directif pour enclencher, participatif pour ancrer."
        },
        {
          "type": "h3",
          "text": "5.2 La communication du changement"
        },
        {
          "type": "p",
          "text": "La communication est le levier le plus visible — et le plus souvent mal employé (Kotter en fait sa cause d'échec n°4 : sous-communiquer). Elle se décline selon les flux et les publics. La **communication descendante** (de la direction vers les équipes) porte la vision, le sens et les décisions ; elle doit être répétée, incarnée et cohérente. La **communication ascendante** (du terrain vers la direction) fait remonter les résistances, les difficultés et les suggestions ; elle est indispensable pour ajuster la démarche. La **communication transversale** (entre équipes et fonctions) favorise le partage des pratiques et la cohésion. La **communication de crise**, enfin, gère les moments de tension (conflits, blocages) — l'ancien cours rappelle que « la conduite de changement rend nécessaire le dialogue social : crises et conflits doivent être contenus, sinon évités »."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Outils de communication selon les publics *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Public**",
            "**Objectif de communication**",
            "**Outils adaptés**",
            "**Fréquence**"
          ],
          "rows": [
            [
              "**Direction / COPIL**",
              "Aligner, décider, arbitrer",
              "Reporting, tableau de bord, comités",
              "Régulière (jalons)"
            ],
            [
              "**Managers de proximité**",
              "Outiller pour relayer",
              "Kits managers, réunions dédiées, FAQ",
              "Soutenue"
            ],
            [
              "**Ensemble des collaborateurs**",
              "Donner du sens, rassurer",
              "Réunions plénières, intranet, newsletters, vidéos",
              "Continue"
            ],
            [
              "**Représentants du personnel**",
              "Dialogue social, anticipation",
              "Instances (CSE), négociation, concertation",
              "Selon obligations + besoins"
            ],
            [
              "**Ambassadeurs**",
              "Animer le réseau de relais",
              "Communauté dédiée, formations, retours terrain",
              "Soutenue"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Bonnes pratiques"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Bonnes pratiques.** Une communication de changement efficace : explique le **pourquoi** avant le **comment** (le sens précède la méthode) ; est **incarnée** par le management (l'exemplarité prime sur les discours) ; est **bidirectionnelle** (elle écoute autant qu'elle informe) ; est **répétée** (un message de changement doit être entendu de multiples fois pour être intégré) ; et reconnaît les **difficultés** plutôt que de les nier (la transparence construit la confiance)."
        },
        {
          "type": "h3",
          "text": "5.3 La formation et l'accompagnement"
        },
        {
          "type": "p",
          "text": "Le changement requiert souvent de nouvelles compétences ; le **développement des compétences** (formation) en est donc un levier majeur. L'ancien cours souligne que la formation « accompagne le changement de culture » et « facilite l'évolution des métiers ». L'accompagnement se décline en plusieurs modalités complémentaires : le **coaching** (accompagnement individuel des managers et dirigeants face au changement), le **mentoring** (transmission par un pair expérimenté), et l'**accompagnement collectif** (ateliers, groupes de travail, communautés de pratique) qui favorise l'apprentissage entre pairs et l'appropriation collective. L'enjeu est de combler l'écart entre les compétences actuelles et celles requises par la cible — écart dont la non-prise en compte est une cause fréquente d'échec (les acteurs adhèrent mais ne *savent pas* faire)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Gouvernance, communication et formation déploient le changement. Mais sans mesure, on ne pilote pas : c'est l'apport spécifique du contrôle de gestion."
        }
      ]
    },
    {
      "id": "6-le-role-du-controle-de-gestion-dans-le-changement",
      "title": "6. Le rôle du contrôle de gestion dans le changement",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; cœur de l'angle UE3 de la sous-partie 2.4.*"
        },
        {
          "type": "h3",
          "text": "6.1 Contrôle de gestion et transformation"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion intervient à chaque étape de la transformation, dans quatre rôles complémentaires. En **accompagnement stratégique**, il objective la nécessité du changement par le diagnostic chiffré (dégradation des marges, perte de parts de marché, dérive des coûts) — il fournit ainsi les arguments factuels de la « décristallisation » de Lewin et du « sentiment d'urgence » de Kotter. En **aide à la décision**, il évalue économiquement les options de transformation (coûts, gains attendus, retour sur investissement, VAN d'un projet de transformation — lien chapitre 2). En **pilotage des résultats**, il suit l'avancement de la transformation et ses effets via un tableau de bord dédié. En **mesure de la performance**, il évalue *ex post* la réussite : les bénéfices attendus ont-ils été réalisés ? C'est la dimension la plus négligée et pourtant essentielle — beaucoup de transformations ne sont jamais évaluées, ce qui empêche d'en tirer les enseignements."
        },
        {
          "type": "p",
          "text": "L'ancien cours rappelle d'ailleurs que « les stratégies de changement doivent s'appuyer sur le potentiel humain et faire l'objet d'une évaluation économique » : le contrôle de gestion est précisément le garant de cette évaluation économique, qu'il articule à la dimension humaine."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — le business case d'une transformation *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Une entreprise envisage la digitalisation de son processus de traitement des commandes. Le contrôle de gestion établit le **business case** sur trois ans."
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Année 0**",
            "**Année 1**",
            "**Année 2**",
            "**Année 3**"
          ],
          "rows": [
            [
              "Investissement (outil, intégration)",
              "− 300 000 €",
              "",
              "",
              ""
            ],
            [
              "Coûts d'accompagnement (formation, conduite)",
              "− 80 000 €",
              "− 40 000 €",
              "",
              ""
            ],
            [
              "Gains de productivité (temps gagné)",
              "",
              "+ 150 000 €",
              "+ 220 000 €",
              "+ 240 000 €"
            ],
            [
              "Réduction des erreurs / coûts de non-qualité",
              "",
              "+ 30 000 €",
              "+ 50 000 €",
              "+ 60 000 €"
            ],
            [
              "**Flux net annuel**",
              "**− 380 000 €**",
              "**+ 140 000 €**",
              "**+ 270 000 €**",
              "**+ 300 000 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Au coût du capital de 10 %, la **VAN** = − 380 000 + 140 000/1,1 + 270 000/1,1² + 300 000/1,1³ ≈ − 380 000 + 127 273 + 223 140 + 225 394 ≈ **+ 195 807 €**. La VAN étant nettement positive, la transformation est **créatrice de valeur** ; le délai de récupération se situe au cours de l'année 3."
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Cet exemple illustre l'apport décisif du contrôle de gestion : transformer une intuition (« il faut digitaliser ») en **décision étayée**. Deux points de vigilance, typiques des sujets DSCG : (1) ne pas oublier les **coûts d'accompagnement** (formation, conduite du changement) — souvent sous-estimés, ils peuvent faire basculer un business case ; (2) ne pas surestimer les gains, qui supposent une **adoption effective** (lien §6.2 : un faible taux d'utilisation détruit le business case). Le contrôle de gestion doit donc suivre, après la décision, la réalisation effective de ces gains."
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard DSCG.** C'est ici que se situe le cœur de l'attendu UE3. Un sujet de changement demandera typiquement : (1) de **justifier** économiquement la transformation (diagnostic, business case) ; (2) de proposer des **indicateurs** de pilotage couvrant les dimensions financière, opérationnelle, sociale et comportementale ; (3) de construire un **tableau de bord** de la transformation ; (4) d'**interpréter** des résultats et de formuler des préconisations. Ne jamais se cantonner aux modèles sociologiques : montrer la **valeur ajoutée chiffrée** du contrôle de gestion."
        },
        {
          "type": "h3",
          "text": "6.2 Les indicateurs du changement"
        },
        {
          "type": "p",
          "text": "Mesurer une transformation suppose un jeu d'indicateurs **équilibré**, couvrant ses différentes dimensions — faute de quoi on risque de ne piloter que ce qui est facile à mesurer (les coûts) en négligeant l'essentiel (l'adhésion, les comportements)."
        },
        {
          "type": "p",
          "text": "Les **indicateurs financiers** mesurent le retour économique : coûts de la transformation (engagés vs budgétés), gains réalisés (économies, gains de productivité), retour sur investissement. Les **indicateurs opérationnels** mesurent les effets sur l'activité : productivité, qualité, délais, taux d'adoption des nouveaux outils ou processus. Les **indicateurs sociaux** mesurent l'impact humain : turnover, absentéisme, climat social, conflictualité (lien chapitre 3). Les **indicateurs comportementaux**, plus subtils mais décisifs, mesurent l'adhésion réelle : taux d'utilisation effective des nouvelles pratiques, engagement, participation aux dispositifs d'accompagnement, signaux de résistance."
        },
        {
          "type": "h4",
          "text": "Tableau 6 — KPI de suivi du changement *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension**",
            "**Indicateur**",
            "**Ce qu'il mesure**",
            "**Signal d'alerte**"
          ],
          "rows": [
            [
              "**Financière**",
              "Coûts engagés / budgétés",
              "Maîtrise économique",
              "Dépassement"
            ],
            [
              "**Financière**",
              "Gains réalisés / attendus",
              "Retour de la transformation",
              "Gains < attendus"
            ],
            [
              "**Opérationnelle**",
              "Taux d'adoption des nouveaux processus",
              "Mise en œuvre réelle",
              "Faible adoption"
            ],
            [
              "**Opérationnelle**",
              "Productivité / qualité / délais",
              "Effets sur l'activité",
              "Dégradation transitoire prolongée"
            ],
            [
              "**Sociale**",
              "Turnover, absentéisme",
              "Impact humain",
              "Hausse"
            ],
            [
              "**Sociale**",
              "Climat social (enquête)",
              "Acceptation",
              "Détérioration"
            ],
            [
              "**Comportementale**",
              "Taux d'utilisation effective",
              "Adhésion réelle (au-delà du déclaratif)",
              "Usage faible malgré formation"
            ],
            [
              "**Comportementale**",
              "Participation aux dispositifs",
              "Engagement",
              "Désengagement"
            ],
            [
              "**Avancement**",
              "Jalons tenus / planifiés",
              "Progression du projet",
              "Retard"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Tableau de bord 7 — Pilotage d'une transformation *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Axe**",
            "**Indicateur**",
            "**Réalisé**",
            "**Cible**",
            "**Statut**"
          ],
          "rows": [
            [
              "**Avancement**",
              "Jalons tenus",
              "6/8",
              "8/8",
              "🟠 à surveiller"
            ],
            [
              "**Économique**",
              "Coûts engagés / budget",
              "102 %",
              "≤ 100 %",
              "🟠 léger dépassement"
            ],
            [
              "**Économique**",
              "Gains réalisés / attendus",
              "60 %",
              "100 % (fin)",
              "🟢 conforme au calendrier"
            ],
            [
              "**Opérationnel**",
              "Taux d'adoption",
              "72 %",
              "90 %",
              "🟠 en progression"
            ],
            [
              "**Social**",
              "Absentéisme",
              "6,1 %",
              "5,0 %",
              "🔴 alerte"
            ],
            [
              "**Comportemental**",
              "Utilisation effective",
              "65 %",
              "85 %",
              "🟠 à renforcer"
            ],
            [
              "**Comportemental**",
              "Engagement (eNPS projet)",
              "+5",
              "+15",
              "🟠 fragile"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ce tableau de bord équilibré révèle une transformation **globalement en marche mais fragile sur le plan humain** : l'avancement et les gains sont à peu près au rendez-vous, mais l'adoption et l'utilisation effective restent en deçà des cibles, et surtout l'absentéisme se dégrade — signal d'un coût humain de la transformation qui appelle un renforcement de l'accompagnement (§5.3) avant que la résistance ne compromette les résultats. Le croisement des dimensions est essentiel : des gains économiques obtenus au prix d'une dégradation sociale ne sont pas durables. C'est tout l'apport d'un tableau de bord multidimensionnel par rapport à un suivi purement budgétaire."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Parmi les transformations contemporaines, la transformation digitale et l'IA occupent une place singulière, à la fois objet et moteur du changement."
        }
      ]
    },
    {
      "id": "7-transformation-digitale-et-intelligence-artificielle",
      "title": "7. Transformation digitale et intelligence artificielle",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine ; lien UE5.*"
        },
        {
          "type": "h3",
          "text": "7.1 La transformation numérique"
        },
        {
          "type": "p",
          "text": "La **transformation numérique** est devenue le principal moteur de changement des organisations. Elle combine plusieurs dynamiques : la **digitalisation** des processus (dématérialisation, automatisation des flux) ; l'**automatisation** des tâches répétitives (RPA, robotisation) ; l'émergence de modèles de **plateformes** (mise en relation, effets de réseau) qui ont disrupté des secteurs entiers ; et l'exploitation de la **donnée** (*data*) comme actif stratégique et fondement de la décision. Mais la transformation numérique n'est pas qu'un projet technologique : c'est avant tout un **changement organisationnel et culturel**. Les échecs de transformation digitale tiennent rarement à la technologie elle-même ; ils tiennent à la sous-estimation de la dimension humaine — résistances, compétences manquantes, culture inadaptée. C'est pourquoi elle relève pleinement du management du changement."
        },
        {
          "type": "h3",
          "text": "7.2 Intelligence artificielle et changement"
        },
        {
          "type": "p",
          "text": "L'**intelligence artificielle**, et singulièrement l'**IA générative**, marque une rupture nouvelle. Elle ne se contente plus d'automatiser des tâches routinières : elle augmente des activités cognitives (rédaction, analyse, synthèse, aide à la décision) jusque-là réservées à l'humain. Ses effets sur l'organisation sont profonds. Elle transforme les **métiers** : certaines tâches disparaissent, d'autres émergent, la plupart se recomposent autour de la collaboration humain-IA. Elle fait évoluer les **compétences** requises : moins de tâches d'exécution, davantage de supervision, d'esprit critique, de créativité et de maîtrise des outils. Elle appelle de **nouveaux modes de management** : management d'équipes augmentées, pilotage par la donnée, organisations plus plates et plus agiles. Pour le contrôleur de gestion, l'IA est à la fois un objet de transformation à piloter et un outil qui transforme son propre métier (lien chapitre précédent)."
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Impact de l'IA sur les fonctions de l'entreprise *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction**",
            "**Tâches automatisables / augmentées**",
            "**Compétences nouvelles requises**",
            "**Vigilance**"
          ],
          "rows": [
            [
              "**Production**",
              "Maintenance prédictive, contrôle qualité",
              "Supervision de systèmes, data",
              "Sécurité, dépendance"
            ],
            [
              "**Commercial / Marketing**",
              "Ciblage, personnalisation, prévision",
              "Analyse de données, créativité",
              "Éthique, RGPD"
            ],
            [
              "**RH**",
              "Présélection, people analytics",
              "Accompagnement, éthique RH",
              "Biais algorithmiques"
            ],
            [
              "**Finance / CG**",
              "Automatisation des écritures, reporting, prévision",
              "Interprétation, conseil, modélisation",
              "Contrôle interne, supervision"
            ],
            [
              "**Juridique**",
              "Analyse de contrats, recherche",
              "Validation, jugement",
              "Fiabilité, responsabilité"
            ],
            [
              "**Direction**",
              "Aide à la décision, simulation",
              "Pilotage par la donnée, leadership",
              "Sur-confiance dans l'IA"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 8 — Organisation traditionnelle vs organisation augmentée par l'IA *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/07.png",
          "alt": "Schéma 8 — Organisation traditionnelle vs organisation augmentée par l'IA *(obligatoire)*",
          "width": 2024,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma oppose deux configurations. L'organisation **traditionnelle** est pyramidale, cloisonnée, avec une information qui circule lentement et une décision concentrée au sommet. L'organisation **augmentée par l'IA** est plus plate, décloisonnée autour d'un socle de données partagé, avec une information en temps réel et une décision distribuée, éclairée par l'IA à tous les niveaux. Le message clé : l'IA ne se surajoute pas à l'organisation existante, elle en **reconfigure la structure même**. D'où l'ampleur du changement à conduire — et le risque d'échec si l'on déploie l'IA sans transformer l'organisation qui l'accueille."
        },
        {
          "type": "h4",
          "text": "Graphique 9 — Évolution des compétences attendues *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/08.png",
          "alt": "Graphique 9 — Évolution des compétences attendues *(obligatoire)*",
          "width": 1892,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique compare le poids des grandes familles de compétences « hier » et « demain » : décroissance des compétences d'**exécution / tâches routinières** (automatisables), croissance des compétences **cognitives de haut niveau** (analyse critique, résolution de problèmes complexes), **relationnelles** (collaboration, communication, intelligence émotionnelle) et **d'adaptabilité** (apprentissage continu, agilité). Cette recomposition fonde la priorité donnée à la **formation** et à la **gestion des compétences** (lien §5.3 et sous-partie 2.6) dans toute transformation. L'enjeu social est majeur : accompagner la montée en compétence pour éviter que la transformation ne laisse des collaborateurs sur le bord du chemin."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Malgré ces leviers, une majorité de transformations échouent. Comprendre pourquoi est la condition pour réussir."
        }
      ]
    },
    {
      "id": "8-les-echecs-du-changement",
      "title": "8. Les échecs du changement",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; Kotter, Beer & Nohria.*"
        },
        {
          "type": "h3",
          "text": "8.1 Les causes d'échec"
        },
        {
          "type": "p",
          "text": "Les statistiques sont éloquentes : une majorité des grandes transformations n'atteignent pas leurs objectifs. **John Kotter** attribue ces échecs au franchissement trop rapide ou bâclé de ses huit étapes : urgence insuffisante, coalition trop faible, vision floue, sous-communication, obstacles non levés, absence de victoires rapides, victoire proclamée trop tôt, ancrage négligé. **Michael Beer et Nitin Nohria** (*Cracking the Code of Change*, 2000) ont théorisé une tension fondamentale entre deux logiques de changement : la **théorie E** (*Economic*), centrée sur la valeur actionnariale, descendante, brutale, par restructuration ; et la **théorie O** (*Organizational*), centrée sur le développement des capacités organisationnelles et humaines, participative, progressive. Leur thèse : poursuivre l'une au détriment de l'autre conduit souvent à l'échec ; les transformations réussies savent **combiner** les deux — la rigueur économique de E et l'adhésion humaine de O. Au-delà de cette tension, l'analyse des échecs révèle quelques dynamiques récurrentes. La **fatigue du changement** (*change fatigue*) : lorsque les transformations s'enchaînent sans répit ni évaluation, les acteurs s'épuisent et se désengagent, chaque nouvelle initiative étant accueillie avec cynisme (« encore un projet qui passera »). L'**effet tunnel** : une transformation trop longue sans résultats visibles perd progressivement son énergie et ses soutiens — d'où l'importance des victoires rapides. Le **déficit d'ancrage** : faute d'institutionnalisation (procédures, systèmes, indicateurs, reconnaissance), les nouvelles pratiques s'érodent et l'organisation retourne insidieusement à ses habitudes antérieures, parfois en quelques mois. Enfin, le **désalignement des systèmes de gestion** : si l'on demande aux acteurs de changer de comportement tout en continuant à les évaluer et à les récompenser selon les anciens critères, le système de contrôle de gestion lui-même sabote le changement. Ce dernier point est capital pour l'UE3 : les indicateurs, les budgets et les systèmes d'incitation doivent être **réalignés** sur la cible du changement, sous peine de contradiction destructrice."
        },
        {
          "type": "h3",
          "text": "8.2 Facteurs de succès et facteurs d'échec"
        },
        {
          "type": "h4",
          "text": "Tableau 9 — Facteurs de succès vs facteurs d'échec *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension**",
            "**Facteurs de succès**",
            "**Facteurs d'échec**"
          ],
          "rows": [
            [
              "**Leadership**",
              "Sponsor engagé et visible, coalition forte",
              "Soutien tiède de la direction, sponsor absent"
            ],
            [
              "**Sens / vision**",
              "Vision claire, partagée, porteuse de sens",
              "Vision floue, « pourquoi » non expliqué"
            ],
            [
              "**Participation**",
              "Implication des acteurs, dialogue",
              "Changement imposé, top-down brutal"
            ],
            [
              "**Communication**",
              "Répétée, incarnée, bidirectionnelle",
              "Sous-communication, opacité"
            ],
            [
              "**Compétences**",
              "Formation et accompagnement",
              "Acteurs livrés à eux-mêmes"
            ],
            [
              "**Rythme**",
              "Victoires rapides, jalons",
              "Effet tunnel, résultats trop tardifs"
            ],
            [
              "**Mesure**",
              "Indicateurs, pilotage, évaluation",
              "Aucun suivi, pas d'évaluation post-projet"
            ],
            [
              "**Ancrage**",
              "Institutionnalisation, cohérence des systèmes",
              "Retour en arrière faute d'ancrage"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le tableau fait apparaître que les facteurs de succès relèvent moins de la technique que de l'**humain et du pilotage** : leadership, sens, participation, communication, mesure. Le contrôle de gestion contribue directement à plusieurs d'entre eux (mesure, jalons, évaluation), confirmant son rôle dans la réussite des transformations."
        },
        {
          "type": "h4",
          "text": "Matrice 10 — Analyse des risques d'un projet de transformation *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/09.png",
          "alt": "Matrice 10 — Analyse des risques d'un projet de transformation *(obligatoire)*",
          "width": 1672,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice positionne les principaux risques d'une transformation selon leur probabilité et leur impact (logique de criticité, lien chapitre 2). Les risques **critiques** (forte probabilité, fort impact) — typiquement la résistance des acteurs clés et le défaut de sponsorship — appellent un traitement prioritaire. Les risques de **dérive budgétaire** ou de **retard** se pilotent par le tableau de bord (§6). Les risques **sociaux** (dégradation du climat, conflits) se préviennent par l'accompagnement (§5). Cette cartographie, intégrée à la gouvernance, transforme la gestion du risque de transformation en démarche proactive plutôt que subie."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces enseignements s'incarnent dans des transformations réelles, dont l'analyse nourrit la réflexion."
        }
      ]
    },
    {
      "id": "9-cas-d-entreprises-et-etudes-professionnelles",
      "title": "9. Cas d'entreprises et études professionnelles",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé — illustrations pédagogiques simplifiées à partir d'éléments de notoriété publique (voir avertissement en tête de chapitre).*"
        },
        {
          "type": "p",
          "text": "Les cas suivants illustrent différents types de transformation. Ils sont présentés de façon synthétique et pédagogique."
        },
        {
          "type": "p",
          "text": "**Microsoft — transformation culturelle.** Sous l'impulsion de sa direction à partir de 2014, Microsoft a opéré une transformation moins technologique que **culturelle** : passage d'une culture interne réputée cloisonnée et compétitive à une culture de collaboration et d'apprentissage (*growth mindset*), accompagnée d'un repositionnement stratégique vers le cloud. *Enseignement* : la transformation culturelle, portée par un leadership exemplaire, peut relancer une entreprise mature — illustration de la théorie O de Beer & Nohria."
        },
        {
          "type": "p",
          "text": "**Netflix — transformations successives de modèle.** Netflix a opéré plusieurs **pivots de modèle d'affaires** : de la location de DVD par courrier au streaming, puis à la production de contenus originaux. *Enseignement* : la capacité à cannibaliser son propre modèle avant d'y être contraint illustre l'organisation adaptative et le changement de rupture anticipé."
        },
        {
          "type": "p",
          "text": "**Schneider Electric — transformation digitale et durable.** Le groupe a conduit une transformation vers les solutions de gestion de l'énergie et l'industrie numérique, en intégrant fortement la dimension durabilité. *Enseignement* : une transformation peut articuler digitalisation et responsabilité (lien ESG, Partie 3), créant de la valeur sur les deux fronts."
        },
        {
          "type": "p",
          "text": "**Amazon — culture de l'innovation permanente.** Amazon a institutionnalisé le changement continu par une culture de l'expérimentation, de l'orientation client et de la décentralisation des décisions. *Enseignement* : le changement permanent peut devenir une compétence organisationnelle centrale plutôt qu'une série d'événements."
        },
        {
          "type": "p",
          "text": "**Airbus — transformation industrielle et organisationnelle.** La construction d'un groupe aéronautique européen intégré a supposé une transformation **organisationnelle** majeure (intégration de cultures et de sites nationaux différents) et industrielle (digitalisation de la production). *Enseignement* : les transformations d'intégration post-fusion concentrent des résistances culturelles et politiques fortes (lien chapitre 3)."
        },
        {
          "type": "h4",
          "text": "Tableau 11 — Comparaison des transformations *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Entreprise**",
            "**Type de changement**",
            "**Levier dominant**",
            "**Enseignement clé**"
          ],
          "rows": [
            [
              "**Microsoft**",
              "Culturel + stratégique",
              "Leadership, culture",
              "La culture comme levier de relance"
            ],
            [
              "**Netflix**",
              "Rupture / pivot de modèle",
              "Vision, anticipation",
              "Cannibaliser son modèle avant la disruption"
            ],
            [
              "**Schneider Electric**",
              "Digital + durable",
              "Stratégie, innovation",
              "Articuler numérique et durabilité"
            ],
            [
              "**Amazon**",
              "Continu / permanent",
              "Culture d'expérimentation",
              "Le changement comme compétence"
            ],
            [
              "**Airbus**",
              "Organisationnel (intégration)",
              "Gouvernance, accompagnement",
              "Gérer les résistances culturelles post-fusion"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces cas et ces modèles convergent vers les attendus de l'épreuve, que synthétisent les approfondissements DSCG."
        }
      ]
    },
    {
      "id": "10-approfondissements-dscg",
      "title": "10. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "10.1 Le lien stratégie–changement"
        },
        {
          "type": "p",
          "text": "Le changement n'est jamais une fin en soi : il **exécute une intention stratégique** (lien Partie 1). Un sujet attend que l'on relie systématiquement la transformation à sa justification stratégique (pourquoi changer ?) et à sa contribution à la création de valeur (qu'attend-on du changement ?). Le diagnostic stratégique fonde le « sentiment d'urgence »."
        },
        {
          "type": "h3",
          "text": "10.2 Le rôle du contrôle de gestion : l'angle décisif"
        },
        {
          "type": "p",
          "text": "C'est le cœur de l'attendu UE3. Le candidat doit montrer que le contrôle de gestion **objective** (diagnostic chiffré), **évalue** (business case, ROI de la transformation), **pilote** (tableau de bord équilibré) et **mesure** (évaluation post-transformation). Ne jamais réduire le sujet à la sociologie : la valeur ajoutée attendue est la **quantification** et le **pilotage**."
        },
        {
          "type": "h3",
          "text": "10.3 Les résistances et leur pilotage"
        },
        {
          "type": "p",
          "text": "Mobiliser Crozier & Friedberg (zones d'incertitude, jeux d'acteurs) pour analyser les résistances, et proposer des réponses différenciées (cartographie influence × opposition). Montrer que la résistance est une information, pas seulement un obstacle."
        },
        {
          "type": "h3",
          "text": "10.4 La mesure de la performance post-transformation"
        },
        {
          "type": "p",
          "text": "Thème souvent négligé et donc discriminant : comment vérifie-t-on, *après coup*, que la transformation a créé de la valeur ? Par la comparaison des résultats aux objectifs (gains attendus vs réalisés), par les indicateurs équilibrés (financiers, opérationnels, sociaux, comportementaux), et par le retour d'expérience (lien *post-mortem*, chapitre 2). Cette évaluation se heurte à des difficultés méthodologiques réelles qu'un bon candidat sait identifier. Le problème de l'**attribution** d'abord : comment isoler l'effet de la transformation des autres facteurs qui ont pu influencer la performance (conjoncture, actions concomitantes) ? On y répond par des indicateurs ciblés sur les effets directs attendus et, si possible, par comparaison avec un périmètre témoin. Le problème de l'**horizon** ensuite : les bénéfices d'une transformation (surtout culturelle) se matérialisent souvent à long terme, bien après la fin du projet, alors que les coûts sont immédiats — d'où l'importance d'un suivi prolongé au-delà de la clôture. Le problème de la **mesure de l'immatériel** enfin : engagement, compétences, culture sont difficiles à quantifier, ce qui pousse à négliger ces dimensions pourtant décisives. Le contrôle de gestion apporte ici une valeur considérable en construisant des proxys mesurables (taux d'adoption, enquêtes d'engagement répétées, indicateurs comportementaux) et en organisant le suivi dans la durée. Mesurer la performance post-transformation n'est pas un luxe : c'est la condition de l'apprentissage organisationnel et de l'amélioration des transformations futures."
        },
        {
          "type": "h3",
          "text": "10.5 Synthèse des thèmes mobilisables"
        },
        {
          "type": "p",
          "text": "Diagnostic et typologie d'un changement · analyse des jeux d'acteurs et cartographie des résistances · mobilisation d'un modèle (Lewin, Kotter) · conception d'une gouvernance et d'un plan de communication · construction et interprétation d'un tableau de bord de transformation · évaluation économique et mesure post-transformation · cas de transformation digitale / IA."
        }
      ]
    },
    {
      "id": "11-synthese-generale",
      "title": "11. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "11.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Le changement est devenu la condition permanente de survie des organisations, sous l'effet de la mondialisation, de la digitalisation et des mutations technologiques. Il revêt des formes diverses — incrémental ou radical, continu ou de rupture — dont la conduite diffère, et touche tour à tour la stratégie, l'organisation, la technologie et la culture. Sa difficulté tient moins à sa conception qu'à sa **dimension humaine et politique** : les acteurs résistent, non par irrationalité, mais parce que le changement menace leurs intérêts, leurs repères et leur pouvoir — ce qu'éclaire magistralement l'analyse stratégique de Crozier et Friedberg (zones d'incertitude, jeux d'acteurs)."
        },
        {
          "type": "p",
          "text": "Pour surmonter ces résistances, les organisations mobilisent des **modèles** de conduite : le triptyque fondateur de Lewin (décristalliser, transiter, recristalliser) et son champ de forces ; les huit étapes opérationnelles de Kotter, centrées sur l'urgence, la vision et le leadership ; et les approches contemporaines (organisation apprenante, agile, ambidextre) qui érigent le changement continu en compétence. Le déploiement passe par une **gouvernance** dédiée (sponsor, comité de pilotage, ambassadeurs), une **communication** bidirectionnelle et incarnée, et un **accompagnement** par la formation."
        },
        {
          "type": "p",
          "text": "L'apport spécifique du **contrôle de gestion** est décisif : il objective la nécessité du changement, évalue économiquement les options, pilote la transformation par un **tableau de bord équilibré** (indicateurs financiers, opérationnels, sociaux et comportementaux) et en mesure la réussite *ex post*. La **transformation digitale et l'IA** constituent aujourd'hui le principal terrain de changement, reconfigurant structures, métiers et compétences — et confirmant que la technologie n'est rien sans la transformation humaine qui l'accompagne. La leçon des **échecs** (Kotter, Beer & Nohria) le confirme : les transformations réussissent par le leadership, le sens, la participation, la mesure et l'ancrage, et par la conciliation de la rigueur économique (théorie E) et du développement humain (théorie O). Ainsi se referme la boucle de la problématique : le changement crée de la valeur lorsqu'il est à la fois stratégiquement justifié, humainement accompagné et rigoureusement piloté — ce qui est précisément la contribution du contrôle de gestion."
        },
        {
          "type": "h3",
          "text": "11.2 Carte mentale"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-management-changement/10.png",
          "alt": "11.2 Carte mentale",
          "width": 2244,
          "height": 1320
        },
        {
          "type": "h3",
          "text": "11.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Concept**",
            "**Auteur**",
            "**Apport**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Jeux d'acteurs, zones d'incertitude",
              "Crozier & Friedberg",
              "Le pouvoir comme relation ; analyser les résistances",
              "Vision parfois trop politique",
              "Cartographie des acteurs, conduite"
            ],
            [
              "Modèle en 3 phases + champ de forces",
              "Lewin",
              "Cadre fondateur, lever les résistances",
              "Suppose un retour à la stabilité",
              "Structurer une démarche de changement"
            ],
            [
              "8 étapes du changement",
              "Kotter",
              "Démarche opérationnelle, leadership",
              "Linéaire, descendant",
              "Conduite d'une transformation majeure"
            ],
            [
              "Théories E et O",
              "Beer & Nohria",
              "Concilier valeur économique et capacités",
              "Tension difficile à équilibrer",
              "Choix de la stratégie de changement"
            ],
            [
              "Organisation apprenante",
              "Senge",
              "Apprentissage continu, double boucle",
              "Exige une culture mature",
              "Changement permanent"
            ],
            [
              "Organisation ambidextre",
              "March",
              "Exploiter + explorer",
              "Tension organisationnelle",
              "Concilier performance et innovation"
            ],
            [
              "Inertie structurelle",
              "Hannan & Freeman",
              "Expliquer la difficulté à changer",
              "Déterminisme excessif",
              "Comprendre les résistances"
            ]
          ]
        }
      ]
    },
    {
      "id": "12-fiche-de-revision-dscg",
      "title": "12. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "12.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Changement organisationnel** : modification significative et durable de la stratégie, structure, processus, technologie ou culture.",
            "**Zone d'incertitude** (Crozier) : source de pouvoir d'un acteur, ce qu'il maîtrise et que les autres ne maîtrisent pas.",
            "**Résistance au changement** : réaction rationnelle d'acteurs percevant une menace (psychologique, sociale, culturelle, organisationnelle, politique).",
            "**Décristallisation / transition / recristallisation** (Lewin) : les trois phases du changement.",
            "**Théorie E / théorie O** (Beer & Nohria) : changement par la valeur économique / par les capacités humaines."
          ]
        },
        {
          "type": "h3",
          "text": "12.2 Auteurs à retenir"
        },
        {
          "type": "p",
          "text": "Lewin (3 phases, champ de forces) · Kotter (8 étapes) · Crozier & Friedberg (acteur stratégique, zones d'incertitude) · Beer & Nohria (théories E et O) · Senge (organisation apprenante) · March (ambidextrie) · Weick (sensemaking) · Hannan & Freeman (inertie)."
        },
        {
          "type": "h3",
          "text": "12.3 Modèles à maîtriser"
        },
        {
          "type": "p",
          "text": "Lewin (3 phases + champ de forces) · Kotter (8 étapes) · cartographie des acteurs (influence × opposition) · typologie des changements (ampleur × rythme) · théories E/O · tableau de bord équilibré de la transformation."
        },
        {
          "type": "h3",
          "text": "12.4 Schémas essentiels"
        },
        {
          "type": "p",
          "text": "Champ de forces de Lewin · frise des 8 étapes de Kotter · matrice des résistances · gouvernance du changement · organisation traditionnelle vs augmentée par l'IA · matrice des risques de transformation."
        },
        {
          "type": "h3",
          "text": "12.5 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Réduire le changement à sa dimension technique (oublier l'humain et le politique) · traiter la résistance comme un obstacle plutôt qu'une information · sous-communiquer · oublier les victoires rapides · négliger l'ancrage (retour en arrière) · ne proposer aucun indicateur de pilotage (erreur fatale en UE3) · ne jamais évaluer la transformation *ex post*."
        },
        {
          "type": "h3",
          "text": "12.6 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Diagnostiquer une situation de changement et en qualifier le type.",
            "Analyser les jeux d'acteurs et cartographier les résistances ; proposer des réponses.",
            "Mobiliser un modèle (Lewin ou Kotter) pour structurer une démarche de conduite.",
            "Concevoir la gouvernance et le plan de communication d'une transformation.",
            "Proposer des indicateurs et construire un tableau de bord de pilotage du changement.",
            "Évaluer économiquement une transformation (business case) et mesurer sa réussite *ex post*.",
            "Analyser les causes d'échec d'une transformation et proposer des facteurs de succès."
          ]
        },
        {
          "type": "h3",
          "text": "12.7 Liens avec les autres chapitres"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : choix stratégiques — le changement exécute la stratégie ; structures et configurations (Mintzberg).",
            "**Latéral (Partie 2)** : mode projet (2.2 — une transformation est un projet) ; fonctions support et RH (2.3, 2.6 — leviers d'accompagnement) ; gestion des risques (2.5 — risque d'échec).",
            "**Aval (Partie 3)** : gestion prévisionnelle (3.1) ; performance globale et tableaux de bord (3.3) ; durabilité (3.2 — transformation durable).",
            "**Transversal** : UE5 (systèmes d'information) pour la transformation digitale."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.4 « L'accompagnement du changement ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
