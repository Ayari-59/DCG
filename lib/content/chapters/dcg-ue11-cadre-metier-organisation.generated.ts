// Généré par scripts/convert-docx.mjs depuis CHAPITRE_01__LE_CONTROLE_DE_GESTION_CADRE_METIER_ET_ORGANISATION.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-cadre-metier-organisation",
  "level": "DCG",
  "ue": "UE11",
  "number": 1,
  "title": "Le contrôle de gestion : cadre, métier et organisation",
  "description": "",
  "durationMin": 50,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "Ce chapitre ouvre l’UE11 et correspond à la première partie du référentiel : « Identifier et caractériser la place du contrôle de gestion comme aide au pilotage de la performance des organisations » (30 heures). Le volume horaire est conséquent car tous les savoirs de cette partie sont réutilisés dans les chapitres suivants : ils constituent le socle d’interprétation de l’ensemble du programme.\n**1 — Le cadre et le positionnement du contrôle de gestion.**\n**2 — Valeur, performance et pilotage.**\n**3 — Le métier de contrôleur de gestion et le système d’information.**\n**4 — Outils numériques, Big Data et intelligence artificielle.**\n**5 — Décentralisation et centres de responsabilité.**\n**6 — Chaîne de valeur et indicateurs de performance.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "**Compétence 1.1 — Identifier les besoins en information et repérer le positionnement du contrôle de gestion (15 h)**\n• Identifier les besoins en information et décrire les systèmes de reporting et de contrôle ;\n• Identifier le rôle et la place du CG selon les caractéristiques de l’organisation et le type d’activité ;\n• Repérer les missions du contrôleur de gestion, leurs évolutions et l’intégration des outils numériques ;\n• Délimiter le périmètre du CG (centres de responsabilité, chaîne de valeur) et caractériser les centres ;\n• Rédiger un écrit pour analyser le rôle et la place du CG selon l’organisation.\n**Compétence 1.2 — Analyser le contrôle de gestion comme aide au pilotage de la performance (15 h)**\n• Distinguer valeur, utilité, performance, performance globale et durabilité ;\n• Délimiter les notions de pilotage et de tableaux de bord ;\n• Délimiter les rôles du CG pour piloter la performance et pour aider à la décision.\n**▸ PLAN DU CHAPITRE**\n**1 — Le cadre et le positionnement du contrôle de gestion.**\n**2 — Valeur, performance et pilotage.**\n**3 — Le métier de contrôleur de gestion et le système d’information.**\n**4 — Outils numériques, Big Data et intelligence artificielle.**\n**5 — Décentralisation et centres de responsabilité.**\n**6 — Chaîne de valeur et indicateurs de performance.**"
        },
        {
          "type": "p",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Les organisations contemporaines évoluent dans un environnement de plus en plus complexe et incertain : mondialisation des marchés, accélération technologique, raréfaction des ressources, exigences réglementaires, attentes sociales et environnementales. À mesure qu’une organisation grandit, elle se divise en services, fonctions et niveaux hiérarchiques. Le dirigeant ne peut plus tout observer ni tout décider : il doit déléguer. Or déléguer l’action sans perdre la maîtrise du résultat est précisément le problème que le contrôle de gestion cherche à résoudre."
        },
        {
          "type": "p",
          "text": "Pour piloter, l’organisation a besoin d’information : sur sa situation, ses coûts, ses résultats, son environnement, mais aussi sur la qualité, le climat social ou son empreinte écologique. Le contrôle de gestion est né de ce besoin de relier la décision à l’action, puis l’action au résultat, afin que l’organisation reste pilotable. Historiquement centré sur la maîtrise des coûts, il s’est élargi au contrôle budgétaire, puis au pilotage de la performance, pour aboutir aujourd’hui à une fonction transversale d’aide à la décision et de pilotage de la performance globale — intégrant des dimensions financières, mais aussi sociales, environnementales et sociétales."
        },
        {
          "type": "p",
          "text": "Une particularité fonde tout le chapitre : à la différence de la comptabilité financière, fortement normée, le contrôle de gestion **n’est pas standardisé**. Il s’adapte à chaque organisation — entreprise industrielle, société de services, administration publique, association, cabinet d’expertise comptable. Le maître-mot est donc l’adaptation : un même outil sera mobilisé différemment selon le contexte."
        },
        {
          "type": "p",
          "text": "Ce chapitre constitue le **socle conceptuel** de l’UE11. Toutes les notions techniques étudiées ensuite — coûts complets et partiels, méthode ABC, budgets, écarts, tableaux de bord, coût cible, qualité — prendront leur sens si elles sont reliées aux concepts fondateurs présentés ici. Conformément à l’esprit du référentiel, chaque méthode sera abordée selon quatre dimensions : **comprendre** pourquoi elle existe, **calculer** comment elle fonctionne, **interpréter** ses résultats et les **critiquer** pour en cerner les limites."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**FIL ROUGE DU CHAPITRE — Rakéo. Les illustrations et l’application s’appuient sur une même entreprise : Rakéo, PME d’articles de sport écoresponsables (240 salariés, 48 M€ de chiffre d’affaires). Son produit phare est vendu 90 € pour un coût variable unitaire de 38 € et un coût complet de 67 € ; volume annuel : 200 000 unités. Ce cas sert de référence tout au long du chapitre.**"
        }
      ]
    },
    {
      "id": "1-le-cadre-et-le-positionnement-du-controle-de-gestion",
      "title": "1. Le cadre et le positionnement du contrôle de gestion",
      "blocks": [
        {
          "type": "p",
          "text": "Avant d’étudier les outils, il faut comprendre pourquoi le contrôle de gestion existe : il répond à un besoin d’information pour piloter une organisation devenue trop complexe pour être dirigée « à vue ». Cette partie pose les fondements — besoins en information, définition, formes de contrôle, niveaux et boucle de pilotage."
        },
        {
          "type": "h3",
          "text": "1.1 Les besoins en information des organisations"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — pourquoi un besoin d’information ?**"
        },
        {
          "type": "p",
          "text": "Une organisation est un ensemble de moyens humains, matériels et financiers coordonnés en vue d’atteindre des objectifs. Cette coordination se heurte à cinq grandes difficultés qui, ensemble, fondent le besoin de pilotage et donc d’information."
        },
        {
          "type": "ul",
          "items": [
            "**La complexité.**La croissance multiplie produits, marchés et niveaux hiérarchiques ; le décideur s’éloigne de l’action concrète et a besoin d’une information structurée pour « voir » à distance.",
            "**L’incertitude.**La demande, les prix, les concurrents et la réglementation évoluent. On décide aujourd’hui pour des effets futurs : il faut prévoir, puis surveiller les écarts.",
            "**La concurrence.**La pression du marché interdit la négligence : un coût mal maîtrisé, un délai non tenu, une qualité insuffisante font perdre des clients.",
            "**La rareté des ressources.**Capitaux, temps, compétences et capacités sont limités : décider, c’est arbitrer entre des emplois concurrents de ressources rares.",
            "**Les attentes des parties prenantes.**Actionnaires, salariés, clients, État, société civile portent des attentes non seulement financières : le pilotage moderne intègre cette pluralité."
          ]
        },
        {
          "type": "h4",
          "text": "Information quantitative et information qualitative"
        },
        {
          "type": "p",
          "text": "Le référentiel rénové insiste : le contrôleur doit délimiter les besoins en information **quantitative ET qualitative**. L’information quantitative (coûts, marges, volumes, ratios) reste le cœur du métier, mais elle ne suffit plus. L’information qualitative (satisfaction client, climat social, image, impact environnemental, signaux faibles) est devenue indispensable pour piloter la performance globale. Réduire le pilotage aux seuls chiffres financiers serait une erreur d’analyse aujourd’hui sanctionnée à l’examen."
        },
        {
          "type": "p",
          "text": "*Les deux natures d’information mobilisées par le contrôle de gestion*"
        },
        {
          "type": "h4",
          "text": "Les sources d’information de la comptabilité de gestion"
        },
        {
          "type": "p",
          "text": "L’information de gestion provient de sources internes et externes. En interne : la comptabilité financière (charges et produits), la comptabilité de gestion (coûts), les systèmes d’exploitation (production, ventes, RH), de plus en plus intégrés dans un ERP. En externe : les données de marché, les benchmarks sectoriels, les obligations réglementaires (reporting de durabilité). La comptabilité de gestion retraite ces données brutes pour produire une information utile à la décision."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Les besoins d’information de Rakéo",
          "text": "Le dirigeant a besoin de savoir combien lui coûte un produit (information quantitative : coût de revient 67 €), mais aussi si ses clients sont satisfaits de la nouvelle gamme éco-responsable et si ses salariés adhèrent au projet (information qualitative). Ses sources : la comptabilité (charges), l’atelier (quantités, rebuts), le service commercial (ventes, retours clients) et un tableau de suivi des émissions de CO₂ par lot. Sans cette information organisée, il piloterait à l’aveugle."
        },
        {
          "type": "h3",
          "text": "1.2 La définition et le positionnement du contrôle de gestion"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — qu’est-ce que « contrôler » ?**"
        },
        {
          "type": "p",
          "text": "Le terme « contrôle » prête à confusion : il ne signifie pas « surveillance » mais **« maîtrise »**, au sens anglais de *to control*. Contrôler la gestion, c’est en garder la maîtrise. La définition fondatrice est celle de Robert Anthony (1965)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le contrôle de gestion (R. Anthony, 1965)",
          "text": "*« Le contrôle de gestion est le processus par lequel les managers obtiennent l’assurance que les ressources sont obtenues et utilisées de manière efficace et efficiente pour réaliser les objectifs de l’organisation. »*"
        },
        {
          "type": "p",
          "text": "Trois idées y sont contenues : un processus (démarche continue) ; des managers (ce sont les responsables qui pilotent, le contrôleur les outille) ; une double exigence d’efficacité et d’efficience. La conception contemporaine élargit le propos : le contrôle de gestion devient un système d’aide à la décision et de pilotage de la performance globale, tourné vers la stratégie et intégrant des dimensions extra-financières."
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Conception classique (Anthony)**",
            "**Conception contemporaine**"
          ],
          "rows": [
            [
              "Finalité",
              "Maîtriser ressources, coûts, budgets",
              "Aider à la décision, piloter la performance globale"
            ],
            [
              "Orientation",
              "Interne, tournée vers le passé",
              "Stratégique, tournée vers l’avenir"
            ],
            [
              "Mesure",
              "Quantitative et monétaire",
              "Quantitative ET qualitative, financière ET extra-financière"
            ],
            [
              "Rôle du contrôleur",
              "Technicien des chiffres",
              "Partenaire (business partner), analyste, communicant"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Le contrôle de gestion parmi les autres formes de contrôle"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion n’est pas la seule forme de contrôle dans l’organisation. Il faut le distinguer du contrôle interne (dispositif de maîtrise des risques et de fiabilité des procédures), de l’audit (vérification de conformité a posteriori, interne ou externe) et du contrôle stratégique (orientations de long terme). Tous visent une forme de maîtrise, mais le contrôle de gestion se caractérise par sa finalité : piloter la performance et aider à la décision au quotidien et à moyen terme."
        },
        {
          "type": "p",
          "text": "*Le contrôle de gestion parmi les autres formes de contrôle*"
        },
        {
          "type": "h4",
          "text": "Les trois niveaux de contrôle"
        },
        {
          "type": "p",
          "text": "R. Anthony distingue trois niveaux de contrôle, emboîtés selon l’horizon temporel et le degré de généralité de la décision. Le contrôle de gestion occupe le niveau intermédiaire : il fait la charnière entre la stratégie (le sommet) et l’opérationnel (la base), traduisant les orientations en objectifs et faisant remonter l’information du terrain."
        },
        {
          "type": "p",
          "text": "*Figure 1 — La pyramide des trois niveaux de contrôle (stratégique, gestion, opérationnel).*"
        },
        {
          "type": "h3",
          "text": "1.3 Le pilotage : information, décision et action"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — la boucle de pilotage**"
        },
        {
          "type": "p",
          "text": "Piloter, c’est conduire une organisation vers ses objectifs en corrigeant la trajectoire au fil de l’eau. Le contrôle de gestion en est l’instrumentation."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le pilotage",
          "text": "Le pilotage est le processus par lequel les responsables fixent des objectifs, engagent des actions, mesurent les résultats et mettent en œuvre des actions correctives, dans une boucle continue, afin d’orienter l’organisation vers la performance recherchée."
        },
        {
          "type": "p",
          "text": "Le pilotage emprunte sa logique à la cybernétique : on fixe un cap, on observe ses instruments, on constate les écarts par rapport à la route prévue, et on agit pour y revenir. Le cœur du dispositif est la **boucle de rétroaction (feed-back)** : l’information sur le résultat obtenu est renvoyée vers le décideur pour ajuster l’action future. C’est elle qui distingue un véritable pilotage d’une simple constatation a posteriori."
        },
        {
          "type": "p",
          "text": "*La boucle de pilotage (modèle cybernétique)*"
        },
        {
          "type": "p",
          "text": "*Figure 2 — La boucle de pilotage (modèle cybernétique) : objectifs, décisions, action, écarts et rétroaction.*"
        },
        {
          "type": "p",
          "text": "*Figure 3 — La régulation thermostatique : illustration de la rétroaction (boucle de correction).*"
        },
        {
          "type": "p",
          "text": "**INTERPRÉTER — le cycle information → décision → action**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le cycle fondamental",
          "text": "L’information nourrit la décision, qui déclenche l’action, qui produit un résultat, lequel est mesuré et comparé à l’objectif (contrôle) ; l’écart constaté alimente une nouvelle information, et le cycle recommence. Le contrôle de gestion irrigue chacun de ces maillons, sur trois horizons : long terme (stratégique), moyen terme (gestion), court terme (opérationnel)."
        },
        {
          "type": "p",
          "text": "Ce cycle relie les trois niveaux de contrôle vus en 1.2 : la même boucle se déroule à des rythmes différents selon l’horizon de décision."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir",
          "text": "Le pilotage est une boucle (objectif → action → mesure → régulation) ; mot-clé : rétroaction.\nContrôle de gestion = maîtrise, distinct de l’audit, du contrôle interne et du contrôle stratégique.\nTrois niveaux : stratégique (DG, évoqué), de gestion (charnière), opérationnel (terrain)."
        },
        {
          "type": "p",
          "text": "Le référentiel renforce explicitement l’étude du contrôle de gestion dans **tous types d’organisation et d’activité**. Contrairement à la comptabilité financière, le CG n’est pas standardisé : sa mise en œuvre dépend de la nature de l’organisation et de ses finalités. Le maître-mot est l’adaptation."
        },
        {
          "type": "h3",
          "text": "1.4 Le contrôle de gestion selon le type d’organisation"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — pourquoi adapter ?**"
        },
        {
          "type": "p",
          "text": "Chaque organisation poursuit une finalité propre, qui détermine ce qu’elle entend par « performance » et donc la manière dont elle pilote. Le référentiel demande de savoir analyser cette pluralité : entreprises privées, organisations publiques, associations, et clients des cabinets d’expertise comptable."
        },
        {
          "type": "h4",
          "text": "Les entreprises privées"
        },
        {
          "type": "p",
          "text": "Finalité de profit et de pérennité. Le contrôle de gestion y calcule des coûts de revient, suit marges et rentabilité, construit des budgets et analyse les écarts. C’est le terrain « classique » des outils étudiés dans le manuel."
        },
        {
          "type": "h4",
          "text": "Les organisations publiques"
        },
        {
          "type": "p",
          "text": "La finalité n’est pas le profit mais le service rendu au citoyen avec des fonds publics limités. La **LOLF** (2001) a introduit une logique de résultats : missions, programmes, objectifs, indicateurs. L’efficience y prend un sens fort : rendre le meilleur service au moindre coût pour le contribuable."
        },
        {
          "type": "h4",
          "text": "Les associations"
        },
        {
          "type": "p",
          "text": "Finalité non lucrative mais sociale : la performance se mesure d’abord par l’impact (bénéficiaires, utilité sociale), sous contrainte de soutenabilité financière et de reddition de comptes aux financeurs."
        },
        {
          "type": "h4",
          "text": "Les clients des cabinets d’expertise comptable"
        },
        {
          "type": "p",
          "text": "Cas explicitement cité par le référentiel : les cabinets d’expertise comptable accompagnent de très nombreuses PME et TPE qui n’ont pas de contrôleur de gestion interne. L’expert-comptable assure alors une mission de conseil en pilotage : il met en place des tableaux de bord simples, calcule des coûts, aide à la décision. Pour le futur diplômé du DCG, c’est un débouché professionnel direct."
        },
        {
          "type": "h3",
          "text": "1.5 Le contrôle de gestion selon le type d’activité"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — activité productive, commerciale ou de service**"
        },
        {
          "type": "p",
          "text": "Au-delà de l’organisation, le type d’activité conditionne les outils. La nature de ce qui est produit (un bien matériel, une revente, une prestation immatérielle) change la façon de mesurer coûts et performance."
        },
        {
          "type": "table",
          "headers": [
            "**Type d’activité**",
            "**Spécificité de pilotage**",
            "**Indicateurs typiques**"
          ],
          "rows": [
            [
              "Productive (industrie)",
              "Production matérielle, standardisable",
              "Coût de revient, rebut, taux d’utilisation machines"
            ],
            [
              "Commerciale (négoce)",
              "Achat-revente, rotation des stocks",
              "Marge commerciale, rotation, démarque"
            ],
            [
              "De service",
              "Production immatérielle et variable",
              "Temps passé, coût par dossier, taux d’occupation, satisfaction"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Les services posent une difficulté particulière : la prestation est immatérielle, souvent produite et consommée en même temps, et variable d’un client à l’autre. Définir une **unité d’œuvre** pertinente et mesurer une qualité perçue y est plus délicat que dans l’industrie."
        },
        {
          "type": "p",
          "text": "*Le contrôle de gestion s’adapte à l’organisation et à l’activité*"
        },
        {
          "type": "p",
          "text": "**ANALYSE CRITIQUE**"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Le piège de l’analyse « hors-sol »",
          "text": "À l’examen, ne plaquez jamais une analyse standard. Un sujet portant sur une association ou une mairie n’appelle pas le même raisonnement qu’une usine : dans le non-marchand, l’efficience et l’impact priment sur le profit. Lisez d’abord le contexte, identifiez la finalité, puis adaptez les outils. C’est précisément cette capacité d’adaptation qui est évaluée.\n**POINT EXAMEN — À retenir**\nLe CG s’adapte à l’organisation (privé, public, associatif, clients des cabinets EC).\nIl s’adapte à l’activité (productive, commerciale, de service).\nDans le non-marchand, efficience et impact priment sur le profit ; LOLF = logique de résultats."
        }
      ]
    },
    {
      "id": "2-valeur-performance-et-pilotage",
      "title": "2. Valeur, performance et pilotage",
      "blocks": [
        {
          "type": "p",
          "text": "Cette partie traite le cœur de la compétence 1.2 : distinguer valeur, utilité, performance, performance globale et durabilité ; délimiter le pilotage et les tableaux de bord ; comprendre l’évolution du métier et l’apport du numérique."
        },
        {
          "type": "h3",
          "text": "2.1 Valeur, utilité et performance"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — des notions à distinguer**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Valeur, utilité, performance",
          "text": "**Utilité :**satisfaction qu’un bien ou service procure à celui qui l’utilise.\n**Valeur :**rapport entre l’utilité perçue et le coût (ou le prix) consenti. Créer de la valeur, c’est produire l’utilité attendue au meilleur coût.\n**Performance :**capacité à atteindre les objectifs fixés (efficacité) en mobilisant au mieux les ressources (efficience). Elle est multidimensionnelle."
        },
        {
          "type": "p",
          "text": "Ces distinctions, demandées par le référentiel, fondent des chapitres ultérieurs : la chaîne de valeur (traité plus loin dans ce chapitre) et le coût cible, qui part de la valeur perçue par le client pour fixer un coût admissible."
        },
        {
          "type": "h4",
          "text": "Efficacité, efficience et économie"
        },
        {
          "type": "p",
          "text": "**CALCULER — les « 3 E »**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Les trois « E »",
          "text": "**Économie :**se procurer les ressources au moindre coût, à qualité égale (bien acheter).\n**Efficacité :**atteindre les objectifs fixés, obtenir le résultat visé (atteindre la cible).\n**Efficience :**atteindre le résultat en consommant le minimum de ressources (faire bien avec peu).\n**Formules essentielles**\n**Efficacité = Résultats / Objectifs**\n**Efficience = Résultats / Ressources**"
        },
        {
          "type": "p",
          "text": "*Le triangle de la performance : économie, efficience, efficacité*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Les 3 E chez Rakéo",
          "text": "Objectif de production : 5 000 unités pour un budget de charges de 350 000 €. Réalisé : 5 200 unités produites pour 360 000 € de charges.\n**Efficacité = 5 200 / 5 000 = 1,04, soit 104 % de l’objectif → objectif dépassé : Rakéo est efficace.**\n**Efficience** : coût unitaire réel = 360 000 / 5 200 ≈ 69,23 € contre un coût prévu de 350 000 / 5 000 = 70 € → moins de ressources par unité : l’atelier est efficient.\n**Économie** : si le service achats a négocié la matière à prix égal ou inférieur à qualité constante, le critère d’économie est aussi satisfait.\n*Rakéo est ici à la fois efficace ET efficiente : signe d’une bonne performance opérationnelle.*"
        },
        {
          "type": "p",
          "text": "**INTERPRÉTER**"
        },
        {
          "type": "p",
          "text": "Attention à ne pas confondre les deux premiers E : une équipe qui dépasse son objectif de ventes est efficace ; si elle y parvient en doublant le budget prévu, elle est peu efficiente. Produire beaucoup en gaspillant n’est pas être performant. L’analyse complète croise toujours les trois dimensions."
        },
        {
          "type": "h3",
          "text": "2.2 La performance globale et la durabilité"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — au-delà du financier**"
        },
        {
          "type": "p",
          "text": "La conception moderne dépasse la seule performance financière pour embrasser une performance globale, qui concilie résultats économiques, responsabilité sociale et préservation de l’environnement. Cette ouverture est au cœur du nouveau référentiel."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La performance globale",
          "text": "Aptitude d’une organisation à créer de la valeur de manière durable, en conciliant performance économique, sociale et environnementale, au bénéfice de l’ensemble de ses parties prenantes."
        },
        {
          "type": "p",
          "text": "Le **Triple Bottom Line** (J. Elkington) mesure la performance sur trois « lignes de résultat » — Profit (économique), People (social), Planet (environnemental). Pour la rendre mesurable, on recourt aux critères **ESG** (Environnement, Social, Gouvernance). La RSE en est la déclinaison managériale : l’organisation prend volontairement en compte les impacts sociaux et environnementaux, et pilote une création de valeur non plus seulement actionnariale, mais partenariale."
        },
        {
          "type": "p",
          "text": "*La performance globale selon le Triple Bottom Line*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Performance globale et durabilité",
          "text": "Le programme 2027 introduit explicitement la **durabilité** : une organisation durable satisfait ses besoins présents sans compromettre la capacité des générations futures à satisfaire les leurs. Pour l’entreprise, cela se traduit par des matériaux recyclés dans le produit, une consommation d’énergie maîtrisée et un ancrage territorial dans les Hauts-de-France.\n*Le contrôle de gestion doit traduire cette durabilité en indicateurs (kg de CO₂ par produit, part de matière recyclée, taux de turnover) — lien explicite à approfondir dans la partie consacrée aux tableaux de bord et aux indicateurs.*"
        },
        {
          "type": "h3",
          "text": "2.3 Le pilotage et les tableaux de bord"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — pourquoi un tableau de bord ?**"
        },
        {
          "type": "p",
          "text": "Le référentiel place les tableaux de bord dès le début du programme pour montrer leur importance, avant de les décliner dans les autres parties. Un tableau de bord est un ensemble synthétique d’indicateurs, financiers et extra-financiers, qui permet au responsable de suivre sa performance, de détecter les écarts et de déclencher des actions correctives. C’est l’instrument concret de la boucle de pilotage vue précédemment."
        },
        {
          "type": "p",
          "text": "*Le tableau de bord, instrument central du pilotage*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un fil rouge du programme",
          "text": "Les tableaux de bord seront construits, lus et améliorés tout au long de l’UE : ils relient les objectifs aux indicateurs, intègrent désormais des données ESG, et matérialisent les deux rôles du contrôle de gestion — piloter et aider à décider."
        },
        {
          "type": "p",
          "text": "*Les deux rôles majeurs du contrôle de gestion*"
        },
        {
          "type": "h3",
          "text": "2.4 L’évolution du contrôle de gestion et les outils numériques"
        },
        {
          "type": "p",
          "text": "**COMPRENDRE — un enrichissement cumulatif**"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion s’est construit par couches successives, chacune enrichissant la précédente sans l’effacer : contrôle des coûts (début XXᵉ), contrôle budgétaire (entre-deux-guerres, modèle General Motors d’A. Sloan), pilotage de la performance (années 1980, tableaux de bord multidimensionnels), pilotage stratégique (années 1990), performance globale (depuis 2000)."
        },
        {
          "type": "p",
          "text": "*Les cinq âges du contrôle de gestion : un enrichissement cumulatif*"
        },
        {
          "type": "h4",
          "text": "Le contrôleur, du comptable au business partner"
        },
        {
          "type": "p",
          "text": "Le contrôleur de gestion n’est pas le décideur : il est l’architecte du système d’information de pilotage et le conseiller des managers. Ses missions s’articulent autour de cinq verbes : **analyser**, **prévoir**, **contrôler**, **conseiller** et **communiquer**. Son évolution majeure : le passage du « contrôleur-comptable » tourné vers le passé au business partner, partenaire de la décision."
        },
        {
          "type": "p",
          "text": "*Du contrôleur-comptable au business partner*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Contrôle de gestion et numérique",
          "text": "La transformation numérique recentre le contrôleur sur l’analyse en automatisant la collecte des données. Les outils s’enchaînent : l’ERP intègre des données fiables et uniques ; la Business Intelligence restitue des tableaux de bord interactifs ; le Big Data et la data analytics ouvrent l’analyse prédictive ; l’intelligence artificielle automatise analyses et commentaires. Chez l’entreprise, un ERP unifie production, achats et ventes, et un tableau de bord restitue en temps quasi réel le coût unitaire du produit, la marge et les émissions de CO₂ par lot.\n*Garde-fou programme : ces outils sont présentés de manière générale, sans qu’un logiciel du marché ne soit imposé. La valeur se déplace du recueil vers le jugement et l’interprétation.*"
        },
        {
          "type": "p",
          "text": "*La chaîne de la donnée de gestion : du recueil à la décision*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir",
          "text": "Distinguer valeur, utilité, performance ; maîtriser les 3 E (économie/efficacité/efficience).\nPerformance globale = Triple Bottom Line (Profit/People/Planet), mesurée par les critères ESG ; durabilité = notion nouvelle.\nTableaux de bord présentés tôt ; le CG a deux rôles : piloter et aider à décider.\nÉvolution cumulative ; le numérique (ERP, BI, IA) recentre le contrôleur sur l’analyse."
        }
      ]
    },
    {
      "id": "3-le-metier-de-controleur-de-gestion-et-le-systeme-d-informa",
      "title": "3. Le métier de contrôleur de gestion et le système d’information",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Les besoins d’information des organisations"
        },
        {
          "type": "p",
          "text": "Une organisation ne peut être pilotée sans information. Diriger, c’est décider ; et décider, c’est d’abord s’informer. Les besoins d’information répondent à cinq grandes fonctions."
        },
        {
          "type": "ul",
          "items": [
            "**Le pilotage.**Fixer un cap, suivre la trajectoire et corriger suppose une information continue sur la situation.",
            "**La coordination.**Dans une organisation divisée en services, l’information assure la cohérence de l’action collective.",
            "**Le contrôle.**Comparer le réalisé au prévu, mesurer les écarts : le contrôle repose sur l’information de retour.",
            "**L’anticipation.**Prévoir la demande, détecter les signaux faibles : l’information nourrit la dimension prospective.",
            "**L’aide à la décision.**Toute décision suppose des informations fiables sur la situation et ses conséquences probables."
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Organisation**",
            "**Besoin d’information dominant**"
          ],
          "rows": [
            [
              "PME (ex. l’entreprise)",
              "Information simple, rapide, peu coûteuse ; centrée sur trésorerie et marges."
            ],
            [
              "Groupe international",
              "Consolidation multi-entités et multidevises ; reporting normé et comparable."
            ],
            [
              "Administration publique",
              "Indicateurs de performance publique (LOLF), transparence et reddition de comptes."
            ],
            [
              "Association",
              "Suivi des financements et mesure de l’impact social pour les financeurs."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes",
          "text": "Croire que « plus d’information = meilleure décision » : l’excès d’information (infobésité) nuit au pilotage.\nConfondre le besoin d’information du dirigeant (synthétique) et celui de l’opérationnel (détaillé)."
        },
        {
          "type": "h3",
          "text": "3.2 De la donnée à la connaissance"
        },
        {
          "type": "p",
          "text": "On confond souvent « donnée » et « information ». La distinction est pourtant fondamentale : une donnée brute ne pilote rien ; seule l’information — puis la connaissance — permet de décider."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Donnée, information, connaissance",
          "text": "**Donnée :**un fait brut, isolé, non interprété (un chiffre, une mesure). Ex. : « 12 000 ».\n**Information :**une donnée mise en contexte, porteuse de sens. Ex. : « le magasin A a vendu 12 000 € hier, +8 % ».\n**Connaissance :**une information interprétée, mobilisable pour agir. Ex. : « cette hausse vient de la promotion ; il faut la reconduire ».\n**Intelligence décisionnelle :**la capacité à mobiliser la connaissance au bon moment pour décider et agir."
        },
        {
          "type": "p",
          "text": "*De la donnée à l’intelligence décisionnelle : une valeur ajoutée croissante*"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Nature**",
            "**Question**",
            "**Exemple**"
          ],
          "rows": [
            [
              "Donnée",
              "Fait brut",
              "Quoi ?",
              "« 12 000 »"
            ],
            [
              "Information",
              "Donnée en contexte",
              "Que se passe-t-il ?",
              "« CA = 12 000 €, +8 % »"
            ],
            [
              "Connaissance",
              "Information interprétée",
              "Pourquoi ? Que faire ?",
              "« hausse due à la promo »"
            ],
            [
              "Intelligence",
              "Action au bon moment",
              "Quand et comment agir ?",
              "« reconduire la promo lundi »"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Point examen"
        },
        {
          "type": "p",
          "text": "Savoir illustrer la chaîne donnée → information → connaissance → décision par un exemple chiffré simple est un attendu récurrent. Reliez toujours le dernier maillon à une action concrète."
        },
        {
          "type": "h3",
          "text": "3.3 Les qualités de l’information"
        },
        {
          "type": "p",
          "text": "Pour aider réellement à la décision, une information doit présenter plusieurs qualités. Une information fausse, tardive ou inaccessible peut être plus nuisible qu’une absence d’information, car elle induit en erreur."
        },
        {
          "type": "p",
          "text": "*Les six qualités d’une information utile au pilotage*"
        },
        {
          "type": "table",
          "headers": [
            "**Qualité**",
            "**Signification**"
          ],
          "rows": [
            [
              "Pertinence",
              "Adaptée à la décision à prendre ; apporte une vraie valeur."
            ],
            [
              "Fiabilité",
              "Exacte, vérifiable, sans erreur ni biais."
            ],
            [
              "Exhaustivité",
              "Complète : aucun élément essentiel n’est omis."
            ],
            [
              "Rapidité",
              "Disponible à temps, avant que la décision ne doive être prise."
            ],
            [
              "Accessibilité",
              "Facile à obtenir et à comprendre par celui qui en a besoin."
            ],
            [
              "Traçabilité",
              "On peut remonter à sa source et vérifier comment elle a été produite."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un arbitrage permanent",
          "text": "Ces qualités entrent parfois en tension : une information exhaustive et fiable peut être lente et coûteuse ; une information très rapide peut être moins précise. Le contrôleur arbitre en permanence entre précision, rapidité et coût de l’information."
        },
        {
          "type": "h3",
          "text": "3.4 Le système d’information et ses flux"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le système d’information (SI)",
          "text": "Un système d’information est l’ensemble organisé de ressources — matériel, logiciels, données, procédures et acteurs — qui permet de collecter, stocker, traiter et diffuser l’information au sein d’une organisation, au service de son pilotage et de sa décision."
        },
        {
          "type": "p",
          "text": "Le SI ne se réduit pas à l’informatique : il englobe aussi les hommes et les règles de gestion. L’informatique en est le support technique. Le SI poursuit quatre finalités successives : collecter, stocker, traiter et diffuser l’information vers ceux qui en ont besoin pour décider."
        },
        {
          "type": "p",
          "text": "*Les cinq composantes du système d’information et sa finalité*"
        },
        {
          "type": "h4",
          "text": "Les trois flux d’information"
        },
        {
          "type": "p",
          "text": "L’information circule dans l’organisation selon trois grands types de flux, qui épousent la structure hiérarchique et fonctionnelle."
        },
        {
          "type": "ul",
          "items": [
            "**Flux descendants :**de la direction vers le terrain (objectifs, budgets, consignes).",
            "**Flux ascendants :**du terrain vers la direction (résultats, reporting, alertes).",
            "**Flux transversaux :**entre services de même niveau ; ils assurent la coordination horizontale."
          ]
        },
        {
          "type": "p",
          "text": "*Les trois types de flux d’information dans l’organisation*"
        },
        {
          "type": "h4",
          "text": "Le contrôleur, client et architecte du SI"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion est l’un des principaux « clients » du SI, mais il en est aussi un architecte : il définit les informations nécessaires au pilotage et veille à leur qualité. Son action s’articule autour de cinq opérations : collecter, traiter, stocker, diffuser et exploiter l’information."
        },
        {
          "type": "table",
          "headers": [
            "**Opération**",
            "**Rôle du contrôleur de gestion**"
          ],
          "rows": [
            [
              "Collecte",
              "Définir quelles données sont nécessaires et organiser leur saisie fiable."
            ],
            [
              "Traitement",
              "Calculer coûts, marges, écarts, indicateurs à partir des données brutes."
            ],
            [
              "Stockage",
              "Structurer et conserver les données de façon cohérente et sécurisée."
            ],
            [
              "Diffusion",
              "Produire et transmettre tableaux de bord et reporting aux décideurs."
            ],
            [
              "Exploitation",
              "Interpréter les résultats, expliquer les écarts, proposer des actions."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Analyse critique"
        },
        {
          "type": "p",
          "text": "Un SI performant ne garantit pas un bon pilotage : il peut produire une information abondante mais mal ciblée. La valeur dépend de la pertinence des indicateurs choisis par le contrôleur, et non de la seule puissance technique du système."
        },
        {
          "type": "h3",
          "text": "3.5 Les missions du contrôleur de gestion"
        },
        {
          "type": "h4",
          "text": "Les missions traditionnelles"
        },
        {
          "type": "p",
          "text": "Les missions historiques forment le socle du métier. Elles restent d’actualité, même si leur exécution est de plus en plus automatisée."
        },
        {
          "type": "p",
          "text": "*Figure 1 — La boucle de pilotage : cadre des missions du contrôleur de gestion (objectifs, décisions, action, écarts).*"
        },
        {
          "type": "ul",
          "items": [
            "**Calcul des coûts :**coûts complets, partiels, par activité pour éclairer prix et marges.",
            "**Budgétisation :**animer la construction des budgets, traduire les objectifs en prévisions chiffrées.",
            "**Contrôle budgétaire :**comparer réalisations et prévisions, calculer et analyser les écarts.",
            "**Reporting et tableaux de bord :**rendre compte des résultats et construire des indicateurs de pilotage."
          ]
        },
        {
          "type": "h4",
          "text": "Les missions contemporaines"
        },
        {
          "type": "p",
          "text": "Sous l’effet de l’automatisation, le centre de gravité du métier se déplace de la production de chiffres vers l’analyse et l’accompagnement de la décision."
        },
        {
          "type": "ul",
          "items": [
            "**Aide à la décision :**éclairer les choix par des simulations et des analyses.",
            "**Accompagnement des managers :**appui de proximité aux opérationnels dans leur pilotage.",
            "**Business partner :**partenaire des opérationnels, présent dans les décisions de gestion.",
            "**Communication de la performance :**piloter et communiquer les indicateurs financiers ET extra-financiers (ESG)."
          ]
        },
        {
          "type": "p",
          "text": "*Du producteur de chiffres au business partner*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Garde-fou — niveau DCG",
          "text": "Le contrôleur participe à la déclinaison des objectifs et au dialogue de gestion. La définition de la stratégie elle-même relève de la direction (dimension étudiée au DSCG) : on décrit ici le rôle, pas le pilotage stratégique."
        },
        {
          "type": "h3",
          "text": "3.6 Les qualités attendues"
        },
        {
          "type": "p",
          "text": "Le contrôleur moderne est un profil complet, qui combine savoir, savoir-faire et savoir-être. Aucune dimension ne suffit seule : la technicité sans communication reste stérile ; le numérique sans esprit critique devient dangereux."
        },
        {
          "type": "p",
          "text": "*Les qualités attendues du contrôleur de gestion*"
        },
        {
          "type": "table",
          "headers": [
            "**Famille**",
            "**Compétences**",
            "**Pourquoi**"
          ],
          "rows": [
            [
              "Techniques",
              "Comptabilité, finance, statistiques, contrôle de gestion",
              "Calculer, modéliser, interpréter les chiffres."
            ],
            [
              "Numériques",
              "Tableur avancé, ERP, outils de BI, bases de données, data, IA",
              "Exploiter les outils qui produisent et restituent l’information."
            ],
            [
              "Comportementales",
              "Communication, esprit critique, pédagogie, rigueur",
              "Convaincre, expliquer, animer le dialogue de gestion."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Point examen"
        },
        {
          "type": "p",
          "text": "On attend souvent que vous reliiez une qualité à une mission : par exemple, l’esprit critique pour interpréter un écart, la pédagogie pour faire accepter un budget, la maîtrise du tableur pour fiabiliser un calcul de coût."
        },
        {
          "type": "h3",
          "text": "3.7 Les relations avec les autres métiers"
        },
        {
          "type": "p",
          "text": "Le contrôleur de gestion est un interlocuteur transversal : il ne travaille pas isolé, mais en relation constante avec l’ensemble des fonctions de l’entreprise, dont il collecte les données et auxquelles il restitue une information de gestion."
        },
        {
          "type": "p",
          "text": "*Le contrôleur de gestion au cœur des relations de l’entreprise*"
        },
        {
          "type": "table",
          "headers": [
            "**Interlocuteur**",
            "**Ce que le contrôleur reçoit**",
            "**Ce qu’il apporte**"
          ],
          "rows": [
            [
              "Direction générale",
              "Objectifs, orientations",
              "Reporting, aide à la décision"
            ],
            [
              "Production",
              "Quantités, temps, rebuts",
              "Coûts, écarts, rendements"
            ],
            [
              "Commercial / Ventes",
              "Volumes, prix pratiqués",
              "Marges, budgets, rentabilité"
            ],
            [
              "Comptabilité / Finance",
              "Données comptables",
              "Cohérence, analyses de gestion"
            ],
            [
              "Ressources humaines",
              "Effectifs, rémunérations",
              "Suivi de la masse salariale"
            ],
            [
              "Achats / Logistique",
              "Coûts d’achat, stocks",
              "Valorisation, optimisation"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.8 Un métier en évolution"
        },
        {
          "type": "p",
          "text": "Quatre tendances redessinent le métier. L’automatisation décharge le contrôleur des tâches répétitives (collecte, consolidation, reporting). La digitalisation outille l’analyse. Le contrôle de gestion devient prédictif : il anticipe plutôt qu’il ne constate. Enfin, il intègre la performance globale et les critères ESG dans le pilotage."
        },
        {
          "type": "p",
          "text": "*Les outils numériques au service des activités du contrôleur*"
        },
        {
          "type": "h4",
          "text": "Analyse critique"
        },
        {
          "type": "p",
          "text": "Le glissement vers le rôle de business partner comporte un risque : à trop vouloir conseiller, le contrôleur peut perdre l’indépendance et le recul qui fondent sa crédibilité. Sa légitimité repose sur la fiabilité de ses chiffres autant que sur sa proximité avec les opérationnels."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir",
          "text": "Missions traditionnelles (coûts, budgets, contrôle, reporting) → contemporaines (aide à la décision, business partner).\nProfil complet : savoir, savoir-faire, savoir-être ; trois familles de compétences.\nInterlocuteur transversal de toutes les fonctions ; métier en évolution (automatisation, prédictif, durable)."
        }
      ]
    },
    {
      "id": "4-outils-numeriques-big-data-et-intelligence-artificielle",
      "title": "4. Outils numériques, Big Data et intelligence artificielle",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Les ERP (PGI)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — ERP / PGI",
          "text": "Un ERP (Enterprise Resource Planning), ou PGI (progiciel de gestion intégré), est un logiciel unique qui gère l’ensemble des fonctions de l’entreprise autour d’une base de données commune. Chaque information n’est saisie qu’une fois et devient instantanément disponible pour tous les modules."
        },
        {
          "type": "p",
          "text": "La logique d’intégration est la clé : au lieu d’une mosaïque de logiciels qui ne communiquent pas, un seul système relie achats, production, stocks, ventes, comptabilité et contrôle de gestion. Une vente saisie en caisse met à jour automatiquement les stocks, la comptabilité et les indicateurs, sans ressaisie."
        },
        {
          "type": "p",
          "text": "*ERP / PGI : avantages et limites*"
        },
        {
          "type": "h4",
          "text": "Erreurs fréquentes"
        },
        {
          "type": "p",
          "text": "Présenter l’ERP comme une solution miracle : sa mise en place est longue, coûteuse et impose d’adapter ses processus au logiciel. Présenter un éditeur précis comme « obligatoire » : au DCG, on raisonne sur des outils génériques, pas sur un produit imposé."
        },
        {
          "type": "h3",
          "text": "4.2 La Business Intelligence"
        },
        {
          "type": "p",
          "text": "La Business Intelligence (BI) regroupe les outils qui collectent, consolident et restituent les données sous forme de rapports et de tableaux de bord dynamiques. Elle vient en aval de l’ERP : l’ERP produit la donnée, la BI l’exploite. Elle apporte le reporting interactif, les tableaux de bord actualisés automatiquement, la visualisation et l’aide à la décision — faisant passer le contrôleur du reporting figé au pilotage interactif."
        },
        {
          "type": "h3",
          "text": "4.3 Data analytics et data visualisation"
        },
        {
          "type": "p",
          "text": "La data analytics désigne les techniques d’exploitation des données pour en tirer de la valeur. On distingue quatre niveaux, de complexité et de valeur croissantes."
        },
        {
          "type": "p",
          "text": "*Les quatre niveaux de la data analytics*"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Question**",
            "**Exemple**"
          ],
          "rows": [
            [
              "Descriptive",
              "Que s’est-il passé ?",
              "Le CA du magasin A a baissé de 5 %."
            ],
            [
              "Diagnostique",
              "Pourquoi ?",
              "La baisse vient d’une rupture de stock."
            ],
            [
              "Prédictive",
              "Que va-t-il se passer ?",
              "Sans réassort, −12 % le mois prochain."
            ],
            [
              "Prescriptive",
              "Que faut-il faire ?",
              "Réapprovisionner sous 48 h."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "La data visualisation"
        },
        {
          "type": "p",
          "text": "La data visualisation consiste à représenter graphiquement l’information pour la rendre immédiatement compréhensible. Un bon graphique communique plus vite qu’un tableau de chiffres : il fait apparaître une tendance, un écart, une anomalie."
        },
        {
          "type": "h3",
          "text": "4.4 L’intégration des outils dans le métier"
        },
        {
          "type": "p",
          "text": "Les outils numériques ne valent que par l’usage qu’en fait le contrôleur. Ils s’insèrent dans la chaîne de ses activités : l’ERP fiabilise la collecte, le tableur et l’ERP traitent, la data analytics et l’IA analysent, la BI restitue — et le contrôleur, in fine, interprète et conseille. L’automatisation des premières étapes libère du temps pour les dernières, à plus forte valeur ajoutée."
        },
        {
          "type": "h4",
          "text": "Analyse critique"
        },
        {
          "type": "p",
          "text": "L’outillage numérique crée aussi une dépendance : si la qualité des données en entrée est mauvaise, l’automatisation propage l’erreur à grande échelle (« garbage in, garbage out »). Le contrôleur reste responsable de la fiabilité, que l’outil n’assure jamais à sa place."
        },
        {
          "type": "h3",
          "text": "4.5 Le Big Data"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le Big Data",
          "text": "Le Big Data (« mégadonnées ») désigne des ensembles de données si volumineux, variés et rapidement produits qu’ils dépassent les capacités des outils traditionnels. On le caractérise par cinq « V »."
        },
        {
          "type": "table",
          "headers": [
            "**Les 5 V**",
            "**Signification**"
          ],
          "rows": [
            [
              "Volume",
              "Des masses de données considérables (téraoctets, pétaoctets)."
            ],
            [
              "Variété",
              "Des formats hétérogènes : chiffres, textes, images, capteurs."
            ],
            [
              "Vélocité",
              "Une production et un traitement en temps quasi réel."
            ],
            [
              "Véracité",
              "Une fiabilité variable : la qualité doit être contrôlée."
            ],
            [
              "Valeur",
              "L’enjeu final : extraire une utilité décisionnelle."
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Applications en contrôle de gestion :**affiner les prévisions de ventes et de coûts, segmenter finement clients et produits, piloter en temps réel, simuler des scénarios sur de grands volumes."
        },
        {
          "type": "h3",
          "text": "4.6 L’intelligence artificielle"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L’intelligence artificielle",
          "text": "L’IA regroupe les techniques permettant à des machines de réaliser des tâches qui requièrent normalement l’intelligence humaine : reconnaître, prévoir, classer, rédiger. En gestion, elle s’appuie sur l’apprentissage automatique (machine learning) : la machine apprend des régularités à partir des données."
        },
        {
          "type": "p",
          "text": "L’IA prolonge la data analytics : là où l’analyse classique applique des règles définies par l’humain, l’IA détecte elle-même des modèles et s’améliore avec l’expérience. Ses applications : prévisions budgétaires, détection d’anomalies (dépense atypique, fraude), reporting automatisé et génération de commentaires de gestion."
        },
        {
          "type": "h4",
          "text": "Les IA génératives"
        },
        {
          "type": "p",
          "text": "Les IA génératives produisent du contenu nouveau (texte, tableaux, code) à partir d’instructions en langage naturel. Elles permettent au contrôleur de rédiger des synthèses, d’explorer des données ou d’automatiser des tâches répétitives en dialoguant simplement avec la machine. L’apport est considérable en productivité, mais l’IA ne remplace pas le jugement : elle propose, l’humain valide. On parle d’intelligence augmentée."
        },
        {
          "type": "p",
          "text": "*Applications de l’IA générative au contrôle de gestion*"
        },
        {
          "type": "h3",
          "text": "4.7 Limites, risques et regard critique"
        },
        {
          "type": "p",
          "text": "La transformation numérique doit être appréciée de façon nuancée : elle ouvre des opportunités majeures mais comporte des limites et des risques réels."
        },
        {
          "type": "p",
          "text": "*Analyse SWOT de la transformation numérique du contrôle de gestion*"
        },
        {
          "type": "h4",
          "text": "Les risques liés aux données et à l’IA"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les principaux risques",
          "text": "**Qualité des données :**« garbage in, garbage out » — une analyse ne vaut que ce que valent ses données.\n**Cybersécurité et RGPD :**vulnérabilité des données centralisées, protection des données personnelles.\n**Hallucinations et biais de l’IA :**affirmations fausses présentées avec assurance ; reproduction des biais des données.\n**Dépendance technologique :**une confiance excessive érode l’expertise et l’esprit critique."
        },
        {
          "type": "h4",
          "text": "Les conditions de réussite"
        },
        {
          "type": "p",
          "text": "Garantir la qualité et la sécurité des données en amont ; conserver l’esprit critique (l’outil éclaire, l’humain décide) ; accompagner le changement et former les équipes ; aligner les outils sur les besoins réels de pilotage, et non l’inverse."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Performance globale et durabilité",
          "text": "Le numérique sert aussi le pilotage de la performance globale : il permet de collecter et de restituer des indicateurs extra-financiers (ESG). Chez l’entreprise, le taux de matières recyclées du produit et l’empreinte carbone de la production sont désormais suivis dans le même tableau de bord que la marge. Le contrôleur devient ainsi un acteur de la durabilité, à condition de garder un regard critique sur la fiabilité de ces nouvelles données."
        },
        {
          "type": "h4",
          "text": "Analyse critique"
        },
        {
          "type": "p",
          "text": "La valeur ne vient jamais de l’outil seul, mais de l’usage qu’en fait le contrôleur. Le numérique ne supprime pas le métier : il le recentre sur l’analyse, l’interprétation et le conseil — c’est-à-dire sur le jugement humain, qu’aucune machine ne remplace."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir",
          "text": "Les 5 V du Big Data ; IA = apprentissage ; IA générative = intelligence augmentée (l’humain valide).\nRisques : qualité des données, cyber/RGPD, hallucinations, biais, dépendance.\nConditions de réussite + lien performance globale (ESG) ; toujours conclure par l’esprit critique."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse et fiche de révision**"
        },
        {
          "type": "p",
          "text": "**Idée directrice.**Le contrôle de gestion moderne repose autant sur la maîtrise de l’information et de ses outils que sur celle des calculs. De la donnée brute à la décision, le contrôleur outille toute la chaîne — et son métier se déplace du producteur de chiffres vers le business partner, dans un environnement numérique qu’il doit savoir exploiter… et critiquer."
        }
      ]
    },
    {
      "id": "5-decentralisation-et-centres-de-responsabilite",
      "title": "5. Décentralisation et centres de responsabilité",
      "blocks": [
        {
          "type": "h3",
          "text": "5.1 Du pilotage centralisé à la décentralisation"
        },
        {
          "type": "h3",
          "text": "Comprendre : pourquoi décentraliser ?"
        },
        {
          "type": "p",
          "text": "Le pilotage centralisé — toutes les décisions prises au sommet — fonctionne tant que l’organisation reste simple. Quatre facteurs en révèlent les limites quand l’organisation se développe."
        },
        {
          "type": "ul",
          "items": [
            "**La croissance des entreprises :**le volume de décisions dépasse les capacités d’un seul centre de décision.",
            "**La complexité des activités :**des métiers techniques exigent des compétences spécialisées que le sommet ne maîtrise pas.",
            "**La dispersion géographique :**des sites éloignés ne peuvent être pilotés efficacement, en temps réel, depuis un siège unique.",
            "**La spécialisation :**la division du travail crée des domaines d’expertise qu’il faut confier à ceux qui les connaissent."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La décentralisation",
          "text": "La décentralisation est le transfert du pouvoir de décision de la direction générale vers des responsables d’unités situés à des niveaux inférieurs, qui disposent ainsi d’une autonomie pour gérer leur périmètre et atteindre leurs objectifs."
        },
        {
          "type": "h3",
          "text": "Interpréter : un curseur, pas un choix binaire"
        },
        {
          "type": "p",
          "text": "La décentralisation poursuit des objectifs clairs : gagner en réactivité, rapprocher la décision du terrain, motiver les managers par l’autonomie, et libérer la direction des décisions courantes pour qu’elle se concentre sur la stratégie. Elle a toutefois un coût (coordination, risque d’incohérence). Centralisation et décentralisation ne sont donc pas un choix tout-ou-rien mais un curseur."
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Centralisation**",
            "**Décentralisation**"
          ],
          "rows": [
            [
              "Décision",
              "Concentrée au sommet",
              "Déléguée aux unités"
            ],
            [
              "Réactivité",
              "Faible",
              "Élevée"
            ],
            [
              "Cohérence",
              "Forte",
              "À organiser (risque d’incohérence)"
            ],
            [
              "Motivation",
              "Faible (peu d’autonomie)",
              "Élevée (responsabilisation)"
            ],
            [
              "Coût de coordination",
              "Faible",
              "Plus élevé"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "5.2 Le centre de responsabilité : définition et conditions"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre de responsabilité",
          "text": "Un centre de responsabilité est une unité de gestion (atelier, service, magasin, filiale) dotée d’objectifs propres et de moyens pour les atteindre, et dont le responsable dispose d’une autonomie de décision et rend compte de ses résultats sur les éléments qu’il maîtrise."
        },
        {
          "type": "p",
          "text": "Trois notions structurent cette définition : des objectifs (ce que le centre doit atteindre), une responsabilité (le manager répond de ses résultats) et une mesure de la performance (des indicateurs adaptés). Le centre n’existe vraiment que si le responsable dispose d’une réelle marge de manœuvre."
        },
        {
          "type": "h3",
          "text": "Conditions de fonctionnement"
        },
        {
          "type": "p",
          "text": "Un centre de responsabilité n’est efficace que si plusieurs conditions sont réunies. À défaut, la responsabilisation devient une fiction, voire une source de démotivation."
        },
        {
          "type": "ul",
          "items": [
            "**Une délégation réelle :**un vrai pouvoir de décision, pas seulement d’exécution.",
            "**Des objectifs clairs :**précis, mesurables, négociés et acceptés par le responsable.",
            "**Des indicateurs pertinents :**alignés sur les objectifs et le périmètre réellement maîtrisé.",
            "**Des moyens adaptés :**les ressources nécessaires pour atteindre les objectifs.",
            "**Un système d’information :**capable de produire en temps utile l’information de pilotage et de contrôle."
          ]
        },
        {
          "type": "h3",
          "text": "5.3 Le principe de contrôlabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le principe de contrôlabilité",
          "text": "C’est le principe cardinal des centres de responsabilité : on ne juge un responsable que sur ce qu’il peut maîtriser. Imputer à un manager des charges ou des résultats qu’il ne contrôle pas (une hausse du prix des matières, une décision du siège) est injuste, démotivant et fausse l’évaluation."
        },
        {
          "type": "p",
          "text": "La décentralisation ne peut fonctionner sans contrôle : donner de l’autonomie sans rendre des comptes mènerait à l’anarchie ; contrôler sans déléguer ruinerait la décentralisation. L’équilibre repose sur une boucle vertueuse : délégation, autonomie, responsabilité, contrôle."
        },
        {
          "type": "p",
          "text": "*La boucle autonomie – délégation – responsabilité – contrôle*"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion fournit précisément le dispositif qui permet de déléguer tout en gardant la maîtrise : objectifs négociés, indicateurs de suivi, reporting, dialogue de gestion. C’est ce qui rend la décentralisation sûre. Les centres se distinguent ensuite par la nature des éléments que leur responsable maîtrise — des coûts seuls jusqu’à la rentabilité des capitaux investis ; cette gradation structure la ce chapitre."
        },
        {
          "type": "p",
          "text": "Les centres se distinguent par la nature des éléments que leur responsable maîtrise, du seul coût jusqu’à la rentabilité des capitaux investis. Cette gradation — coûts, recettes, profit, investissement — correspond à une autonomie croissante."
        },
        {
          "type": "p",
          "text": "*Les quatre types de centres de responsabilité, par autonomie croissante*"
        },
        {
          "type": "h3",
          "text": "5.4 Le centre de coûts"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre de coûts",
          "text": "Un centre de coûts est une unité dont le responsable maîtrise un montant de charges, pour un niveau de production ou de service qu’il ne fixe pas lui-même. Sa mission est de minimiser les coûts à qualité et volume donnés."
        },
        {
          "type": "p",
          "text": "La logique est celle de l’efficience : produire le service attendu en consommant le moins de ressources possible. Le responsable n’est pas jugé sur le chiffre d’affaires (qu’il ne maîtrise pas) mais sur sa capacité à tenir, voire réduire, ses coûts."
        },
        {
          "type": "h3",
          "text": "Calculer & interpréter : les indicateurs"
        },
        {
          "type": "ul",
          "items": [
            "**Coût unitaire :**coût de production d’une unité (par produit, par dossier, par acte).",
            "**Coût standard :**coût de référence préétabli, comparé au coût réel (analyse d’écarts).",
            "**Productivité :**rapport entre la production et les ressources consommées (ex. unités / heure).",
            "**Taux d’utilisation :**degré d’emploi des capacités (machines, personnel)."
          ]
        },
        {
          "type": "h3",
          "text": "Critiquer : limites"
        },
        {
          "type": "p",
          "text": "Le centre de coûts présente un risque majeur : la focalisation exclusive sur la réduction des coûts peut dégrader la qualité, rogner sur la maintenance ou la sécurité, et privilégier le court terme. Réduire un coût n’est vertueux que si la qualité et le service rendu sont préservés."
        },
        {
          "type": "h3",
          "text": "5.5 Le centre de recettes"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre de recettes",
          "text": "Un centre de recettes (ou centre de chiffre d’affaires) est une unité dont le responsable maîtrise un volume de ventes ou un chiffre d’affaires, sans maîtriser les coûts de production des biens ou services vendus."
        },
        {
          "type": "p",
          "text": "Sa mission est de maximiser les recettes — volume vendu ou chiffre d’affaires — dans le respect d’un budget de moyens commerciaux qui lui est alloué. Le responsable agit sur les leviers commerciaux (effort de vente, prospection, fidélisation) mais pas sur le coût de fabrication."
        },
        {
          "type": "h3",
          "text": "Calculer & interpréter : les indicateurs"
        },
        {
          "type": "ul",
          "items": [
            "**Chiffre d’affaires :**montant total des ventes réalisées.",
            "**Volume vendu :**quantités écoulées, indépendamment des prix.",
            "**Part de marché :**position relative face à la concurrence.",
            "**Taux de transformation :**proportion de prospects convertis en clients."
          ]
        },
        {
          "type": "h3",
          "text": "Critiquer : limites"
        },
        {
          "type": "p",
          "text": "Le centre de recettes peut inciter à « vendre à tout prix » : remises excessives, volume au détriment de la marge, clients peu rentables. Maximiser le chiffre d’affaires n’est pas maximiser le profit ; on associe donc au CA des indicateurs de marge."
        },
        {
          "type": "h3",
          "text": "5.6 Le centre de profit"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre de profit",
          "text": "Un centre de profit est une unité dont le responsable maîtrise à la fois les recettes et les coûts de son périmètre. Il est jugé sur sa marge ou son résultat, c’est-à-dire sur la différence entre ce qu’il génère et ce qu’il consomme."
        },
        {
          "type": "p",
          "text": "Disposant des deux leviers — recettes et coûts —, le responsable bénéficie d’une large autonomie : il arbitre entre développer les ventes et maîtriser les charges. Sa mission est de maximiser le profit de son périmètre."
        },
        {
          "type": "h3",
          "text": "Calculer & interpréter : les indicateurs"
        },
        {
          "type": "ul",
          "items": [
            "**Résultat :**différence entre produits et charges du centre.",
            "**Marge :**marge sur coûts variables ou marge commerciale, selon le périmètre maîtrisé.",
            "**Taux de marge :**résultat rapporté au chiffre d’affaires."
          ]
        },
        {
          "type": "h3",
          "text": "Critiquer : limites"
        },
        {
          "type": "p",
          "text": "Le centre de profit, plus autonome, fait courir des risques spécifiques :"
        },
        {
          "type": "ul",
          "items": [
            "**Conflits d’objectifs :**le profit local peut s’opposer à l’intérêt du groupe.",
            "**Vision court terme :**gonfler le résultat immédiat en sacrifiant l’avenir (formation, entretien, R&D).",
            "**Optimisation locale :**chaque centre optimise son résultat au détriment de la performance globale (effet de silo)."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le prix de cession interne",
          "text": "Lorsque des centres de profit échangent entre eux (la production « vend » à la direction commerciale), il faut valoriser ces transferts par un prix de cession interne. Mal fixé, il avantage un centre au détriment d’un autre et fausse l’évaluation. Cette question fait l’objet d’un chapitre dédié de l’UE."
        },
        {
          "type": "h3",
          "text": "5.7 Le centre d’investissement"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre d’investissement",
          "text": "Un centre d’investissement est une unité dont le responsable maîtrise les recettes, les coûts ET les capitaux investis (actifs, immobilisations). Il est jugé sur la rentabilité des capitaux engagés. C’est le niveau d’autonomie le plus élevé."
        },
        {
          "type": "p",
          "text": "Au-delà des recettes et des coûts, le responsable prend des décisions d’investissement, de financement et de développement. Il ne suffit plus de dégager un profit : ce profit doit être suffisant au regard des capitaux mobilisés. Les indicateurs de rentabilité correspondants (ROI, ROCE, EVA) sont développés plus loin dans ce chapitre."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Élément maîtrisé**",
            "**Indicateur dominant**",
            "**Exemple l’entreprise**"
          ],
          "rows": [
            [
              "Coûts",
              "Charges",
              "Coût unitaire, écarts",
              "Atelier production le produit"
            ],
            [
              "Recettes",
              "Ventes / CA",
              "CA, volume, part de marché",
              "Équipe de vente régionale"
            ],
            [
              "Profit",
              "Recettes + coûts",
              "Marge, résultat",
              "Direction commerciale"
            ],
            [
              "Investissement",
              "+ capitaux investis",
              "ROI, ROCE, EVA",
              "Direction générale"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen",
          "text": "Savoir qualifier un centre à partir des seuls éléments réellement maîtrisés par son responsable. La différence entre centre de profit et centre d’investissement tient à la maîtrise des capitaux investis."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes",
          "text": "Confondre centre de profit et centre d’investissement. Attribuer à un centre un indicateur qui dépasse son périmètre de maîtrise (ex. juger l’atelier sur le chiffre d’affaires)."
        }
      ]
    },
    {
      "id": "6-chaine-de-valeur-et-indicateurs-de-performance",
      "title": "6. Chaîne de valeur et indicateurs de performance",
      "blocks": [
        {
          "type": "h3",
          "text": "6.1 La chaîne de valeur de Porter"
        },
        {
          "type": "h3",
          "text": "Comprendre"
        },
        {
          "type": "p",
          "text": "Le découpage en centres répond à la question « qui est responsable de quoi ? ». La chaîne de valeur répond à une autre question, stratégique : « où, dans l’organisation, se crée la valeur ? ». Les deux approches sont complémentaires."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Michael Porter (né en 1947)",
          "text": "Professeur à la Harvard Business School, Michael Porter est l’un des penseurs les plus influents de la stratégie d’entreprise. Dans L’Avantage concurrentiel (1985), il introduit la chaîne de valeur (value chain) : un outil qui décompose l’entreprise en activités élémentaires afin d’identifier celles qui créent de la valeur et fondent l’avantage concurrentiel."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La chaîne de valeur",
          "text": "La chaîne de valeur est la représentation de l’ensemble des activités d’une organisation, ordonnées selon leur contribution à la création de valeur pour le client. La différence entre la valeur créée et le coût de ces activités constitue la marge."
        },
        {
          "type": "p",
          "text": "L’avantage concurrentiel ne vient pas de l’entreprise « en général » mais d’activités précises, mieux réalisées que par les concurrents — soit à moindre coût (domination par les coûts), soit avec une valeur perçue supérieure (différenciation). Porter distingue activités principales et activités de soutien."
        },
        {
          "type": "h3",
          "text": "Les activités principales et de soutien"
        },
        {
          "type": "ul",
          "items": [
            "**Logistique interne :**réception, stockage et distribution interne des matières.",
            "**Production :**transformation des intrants en produits finis.",
            "**Logistique externe :**stockage et distribution des produits vers les clients.",
            "**Marketing et ventes :**faire connaître, promouvoir et vendre.",
            "**Service :**service après-vente, maintenance, garantie."
          ]
        },
        {
          "type": "p",
          "text": "Les activités de soutien irriguent transversalement les précédentes : infrastructure de l’entreprise (dont le contrôle de gestion), gestion des ressources humaines, développement technologique (R&D, SI) et approvisionnements."
        },
        {
          "type": "p",
          "text": "*La chaîne de valeur de Michael Porter (1985)*"
        },
        {
          "type": "h3",
          "text": "6.2 Structure organisationnelle et périmètre du contrôle de gestion"
        },
        {
          "type": "h3",
          "text": "Comprendre : relier structure et contrôle"
        },
        {
          "type": "p",
          "text": "La structure organisationnelle (comment l’entreprise se découpe en unités) détermine directement le périmètre du contrôle de gestion : à chaque maille de la structure correspond un centre de responsabilité, donc un objet de pilotage, des indicateurs et un reporting. Le type de centre retenu dépend de l’autonomie réelle confiée à chaque unité."
        },
        {
          "type": "table",
          "headers": [
            "**Type de structure**",
            "**Centres typiques**",
            "**Conséquence pour le contrôle de gestion**"
          ],
          "rows": [
            [
              "Fonctionnelle (par métier)",
              "Centres de coûts (ateliers, support)",
              "Pilotage par les coûts et la productivité"
            ],
            [
              "Divisionnelle (par produit/marché)",
              "Centres de profit / d’investissement",
              "Pilotage par la marge et la rentabilité"
            ],
            [
              "Matricielle",
              "Centres croisés (projet × fonction)",
              "Double reporting, partage des responsabilités"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le choix de la structure n’est donc pas neutre : il fixe ce que le contrôle de gestion peut mesurer et qui rend compte de quoi. C’est pourquoi délimiter le périmètre du contrôle de gestion suppose d’abord de lire la structure de l’organisation."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un second exemple : le passage à une structure divisionnelle",
          "text": "Si l’entreprise créait demain deux divisions autonomes — « Chaussures » et « Textile sport » —, chacune dotée de sa production, de ses ventes et de ses propres capitaux, la structure deviendrait divisionnelle. Le périmètre du contrôle de gestion changerait alors de nature : chaque division deviendrait un centre de profit, voire d’investissement, jugé sur sa marge et sa rentabilité propres, et non plus seulement sur ses coûts. Le même métier, organisé différemment, appelle donc des indicateurs différents : c’est bien la structure qui détermine le périmètre et les objets du contrôle de gestion."
        },
        {
          "type": "h3",
          "text": "6.3 L’organigramme de l’entreprise en centres de responsabilité"
        },
        {
          "type": "h3",
          "text": "Calculer & interpréter : appliquer le découpage"
        },
        {
          "type": "p",
          "text": "La traduction concrète des principes précédents est l’organigramme de l’entreprise « lu » en centres de responsabilité. Chaque unité y est qualifiée selon ce que son responsable maîtrise réellement."
        },
        {
          "type": "p",
          "text": "*L’organigramme de l’entreprise décliné en centres de responsabilité*"
        },
        {
          "type": "ul",
          "items": [
            "**Direction générale → centre d’investissement :**maîtrise des capitaux investis ; jugée sur le ROI et l’EVA.",
            "**Atelier de production le produit → centre de coûts :**jugé sur le respect du coût standard de 67 €/produit et la productivité.",
            "**Direction commerciale → centre de profit :**maîtrise recettes et coûts commerciaux ; jugée sur la marge (23 €/produit).",
            "**Logistique & approvisionnement, fonctions support → centres de coûts :**jugés sur la maîtrise de leur budget de charges."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Centres de coûts discrétionnaires",
          "text": "Les fonctions support (RH, comptabilité, SI) sont des centres de coûts dits « discrétionnaires » : leur production est difficile à mesurer en unités physiques, on encadre donc leur budget plutôt qu’un coût unitaire. À distinguer des centres de coûts « opérationnels » comme l’atelier, dont le coût unitaire est mesurable."
        },
        {
          "type": "h3",
          "text": "6.4 La chaîne de valeur, outil du contrôle de gestion"
        },
        {
          "type": "h3",
          "text": "Interpréter : quatre usages"
        },
        {
          "type": "p",
          "text": "La chaîne de valeur n’est pas qu’un schéma stratégique : c’est un puissant outil de contrôle de gestion. En analysant chaque activité, le contrôleur peut identifier où se crée la valeur, où se concentrent les coûts, où se nichent les dysfonctionnements et comment piloter la performance."
        },
        {
          "type": "p",
          "text": "*Quatre usages de la chaîne de valeur en contrôle de gestion*"
        },
        {
          "type": "ul",
          "items": [
            "**Identifier les sources de valeur :**repérer les activités sur lesquelles l’entreprise se différencie, à préserver même si elles coûtent cher.",
            "**Identifier les coûts :**affecter les coûts à chaque activité (logique proche de la méthode ABC) pour révéler la structure réelle des coûts.",
            "**Repérer les dysfonctionnements :**mettre en lumière les maillons faibles (logistique défaillante, SAV coûteux et peu efficace).",
            "**Piloter la performance :**relier chaque activité à des indicateurs et arbitrer entre internalisation et externalisation."
          ]
        },
        {
          "type": "p",
          "text": "Appliquée à l’entreprise, la confrontation activité par activité de la part des coûts et de la part de la valeur perçue distingue les maillons créateurs nets de valeur des maillons destructeurs nets."
        },
        {
          "type": "p",
          "text": "*l’entreprise : coût et valeur perçue par activité (produit)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen",
          "text": "Relier la chaîne de valeur au contrôle de gestion (sources de valeur, coûts, dysfonctionnements, pilotage) et au lien structure/périmètre du CG. Une activité « coûteuse » peut être une source de valeur : ne pas la supprimer sans analyse."
        },
        {
          "type": "h3",
          "text": "6.5 Construire de bons indicateurs"
        },
        {
          "type": "h3",
          "text": "Comprendre : quatre qualités"
        },
        {
          "type": "p",
          "text": "Un système de centres ne vaut que par la qualité de ses indicateurs : un indicateur mal conçu oriente les comportements dans la mauvaise direction. Quatre qualités guident leur construction."
        },
        {
          "type": "p",
          "text": "*Les quatre qualités d’un bon indicateur*"
        },
        {
          "type": "ul",
          "items": [
            "**Pertinence :**l’indicateur reflète l’objectif et le périmètre maîtrisé.",
            "**Fiabilité :**il mesure exactement ce qu’il prétend mesurer, sans biais ni manipulation facile.",
            "**Simplicité :**il est facile à obtenir, à un coût raisonnable.",
            "**Compréhension :**il est clair et interprétable par l’évalué comme par sa hiérarchie."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — KPI (Key Performance Indicator)",
          "text": "Un KPI, ou indicateur clé de performance, est un indicateur sélectionné parmi d’autres pour sa capacité à résumer l’atteinte d’un objectif essentiel. Peu nombreux et bien choisis, les KPI focalisent l’attention sur ce qui compte vraiment."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Objectif dominant**",
            "**KPI typiques**"
          ],
          "rows": [
            [
              "Coûts",
              "Minimiser les coûts à qualité donnée",
              "Coût unitaire, écart sur coûts, productivité, taux de rebut"
            ],
            [
              "Recettes",
              "Maximiser les ventes",
              "CA, volume, part de marché, taux de transformation"
            ],
            [
              "Profit",
              "Maximiser la marge / le résultat",
              "Marge, résultat, taux de marge"
            ],
            [
              "Investissement",
              "Optimiser la rentabilité des capitaux",
              "ROI, ROCE, EVA"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "6.6 Les indicateurs de rentabilité : ROI, ROCE, EVA"
        },
        {
          "type": "h3",
          "text": "Calculer"
        },
        {
          "type": "p",
          "text": "La performance d’un centre d’investissement se mesure par des indicateurs de rentabilité des capitaux. Trois sont à connaître, accompagnés de la décomposition de DuPont."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Formules à mémoriser**"
        },
        {
          "type": "p",
          "text": "Le ROI (= résultat / capitaux investis) rapporte le résultat aux capitaux investis et peut se décomposer en taux de marge et rotation de l’actif, révélant les deux leviers d’amélioration. Le ROCE (= résultat d’exploitation après impôt / capitaux engagés) mesure la rentabilité économique des capitaux engagés, indépendamment du financement. L’EVA (= résultat d’exploitation après impôt − capitaux investis × coût du capital) mesure la valeur créée au-delà du coût des capitaux : positive, le centre crée de la valeur ; négative, il en détruit, même s’il dégage un profit comptable."
        },
        {
          "type": "p",
          "text": "*La décomposition du ROI selon la formule de DuPont (données Rakéo)*"
        },
        {
          "type": "h3",
          "text": "Interpréter & critiquer : le biais du ROI"
        },
        {
          "type": "p",
          "text": "Les indicateurs de rentabilité comportent un biais célèbre : un responsable jugé sur son ROI moyen peut refuser un bon projet dont la rentabilité, bien que supérieure au coût du capital, est inférieure à son ROI actuel — car il ferait baisser sa moyenne. L’EVA, qui raisonne en valeur absolue créée, corrige ce travers : tout projet à EVA positive est accepté."
        },
        {
          "type": "p",
          "text": "*ROI moyen vs EVA : pourquoi un bon projet peut être refusé à tort*"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes",
          "text": "Confondre ROI (résultat/capitaux) et taux de marge (résultat/CA). Oublier que l’EVA tient compte du coût du capital, contrairement au résultat comptable."
        },
        {
          "type": "h3",
          "text": "6.7 Performance globale et durabilité"
        },
        {
          "type": "h3",
          "text": "Comprendre : dépasser le financier"
        },
        {
          "type": "p",
          "text": "Les indicateurs financiers (coût, marge, ROI) sont indispensables mais insuffisants : tournés vers le passé, le court terme et les seuls actionnaires, ils ignorent qualité, satisfaction, climat social et impact environnemental. Le nouveau référentiel insiste sur l’intégration de critères extra-financiers ESG (Environnement, Social, Gouvernance) dans l’évaluation des centres."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La performance globale",
          "text": "La performance globale concilie résultats économiques, responsabilité sociale et préservation de l’environnement (Triple Bottom Line). Elle suppose des indicateurs équilibrés, mêlant financier et extra-financier, court et long terme, au service de l’ensemble des parties prenantes."
        },
        {
          "type": "p",
          "text": "*La performance globale au service de toutes les parties prenantes*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Performance globale et durabilité",
          "text": "Pour un produit éco-responsable, la création de valeur durable est indissociable de la performance économique : un coût plus élevé sur les approvisionnements (matières recyclées) peut être créateur de valeur perçue et de différenciation. Le contrôle de gestion doit donc piloter conjointement coût, valeur et durabilité — au niveau « sensibilisation » attendu au DCG, la formalisation ESRS/CSRD relevant du DSCG."
        },
        {
          "type": "h3",
          "text": "6.8 Contrôle de gestion et numérique"
        },
        {
          "type": "h3",
          "text": "Interpréter : le pilotage outillé"
        },
        {
          "type": "p",
          "text": "Le numérique transforme le pilotage des centres : il automatise la collecte, fiabilise les indicateurs et permet un suivi en temps réel. Le contrôleur passe de la production de rapports figés à l’animation d’un pilotage interactif."
        },
        {
          "type": "p",
          "text": "*Le pilotage numérique des centres de responsabilité*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Contrôle de gestion et numérique",
          "text": "**ERP :**alimente automatiquement les indicateurs de chaque centre à partir d’une donnée unique et fiable.\n**Power BI / data visualisation :**construit des tableaux de bord par centre, actualisés en continu, où écarts et alertes sont immédiatement lisibles.\n**IA générative :**produit des commentaires de gestion et des analyses d’écarts par centre. Chez l’entreprise, un tableau de bord Power BI par centre relie en temps réel coût standard, marge et indicateurs ESG."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "REMARQUE — Une vigilance maintenue",
          "text": "Le numérique améliore le pilotage mais ne supprime pas les effets pervers : un indicateur manipulable le reste, qu’il soit calculé à la main ou par un ERP. Le numérique amplifie ce qu’on lui demande de mesurer — d’où l’importance du choix des indicateurs et de l’esprit critique."
        },
        {
          "type": "h3",
          "text": "6.9 Analyse critique du dispositif"
        },
        {
          "type": "p",
          "text": "Le système des centres de responsabilité est puissant mais comporte des effets pervers bien documentés. L’esprit du référentiel impose d’en faire l’analyse critique — rubrique que ce chapitre traite explicitement et qui sert de modèle aux autres chapitres du manuel."
        },
        {
          "type": "p",
          "text": "*Forces et limites du système des centres de responsabilité*"
        },
        {
          "type": "h4",
          "text": "Forces"
        },
        {
          "type": "ul",
          "items": [
            "Responsabilise les managers et clarifie « qui répond de quoi ».",
            "Améliore la réactivité et la motivation par l’autonomie.",
            "Permet un pilotage par objectifs et indicateurs, et nourrit le dialogue de gestion."
          ]
        },
        {
          "type": "h4",
          "text": "Limites et risques comportementaux"
        },
        {
          "type": "ul",
          "items": [
            "**Optimisation locale (effet de silo) :**maximiser son indicateur au détriment de la performance globale.",
            "**Court-termisme :**sacrifier l’avenir (R&D, entretien, formation) pour tenir un objectif annuel.",
            "**Manipulation des indicateurs :**selon la loi de Goodhart, « quand une mesure devient une cible, elle cesse d’être une bonne mesure ».",
            "**Coût et lourdeur**du dispositif de mesure."
          ]
        },
        {
          "type": "h4",
          "text": "Conditions de réussite"
        },
        {
          "type": "ul",
          "items": [
            "Respecter le principe de contrôlabilité (ne juger que sur le maîtrisable).",
            "Équilibrer les indicateurs (financiers ET extra-financiers, court ET long terme).",
            "Maintenir un dialogue de gestion : l’indicateur éclaire, il ne sanctionne pas mécaniquement.",
            "Aligner les objectifs des centres sur l’intérêt global de l’organisation."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative — Rakéo**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Énoncé — Rakéo",
          "text": "Rakéo (articles de sport) vous communique les données suivantes pour l’exercice écoulé. Le produit phare : prix de vente 90 €, coût variable unitaire 38 €, coût standard complet 67 €. Volume vendu : 200 000 produits. La direction générale, centre d’investissement, présente un résultat de 6 M€ pour 48 M€ de chiffre d’affaires et 50 M€ de capitaux investis ; le coût du capital est de 8 %.\nTravail à faire : (1) qualifier les centres atelier, direction commerciale et direction générale ; (2) calculer la marge sur coût variable totale et la marge sur coût standard totale du produit phare ; (3) calculer le ROI, sa décomposition de DuPont et l’EVA de la direction générale ; (4) interpréter les résultats et porter un regard critique."
        },
        {
          "type": "h3",
          "text": "Correction détaillée"
        },
        {
          "type": "h4",
          "text": "1. Qualification des centres"
        },
        {
          "type": "ul",
          "items": [
            "**Atelier de production le produit → centre de coûts :**le responsable maîtrise les charges de production, pas le volume vendu.",
            "**Direction commerciale → centre de profit :**elle maîtrise les recettes et les coûts commerciaux, jugée sur la marge.",
            "**Direction générale → centre d’investissement :**elle maîtrise en outre les capitaux investis, jugée sur la rentabilité."
          ]
        },
        {
          "type": "h4",
          "text": "2. Marges sur le produit"
        },
        {
          "type": "ul",
          "items": [
            "**Marge sur coût variable unitaire =**90 − 38 = 52 €/produit. Marge sur coût variable totale = 52 × 200 000 = 10 400 000 €, soit 10,4 M€.",
            "**Marge sur coût standard unitaire =**90 − 67 = 23 €/produit. Marge sur coût standard totale = 23 × 200 000 = 4 600 000 €, soit 4,6 M€."
          ]
        },
        {
          "type": "h4",
          "text": "3. Rentabilité de la direction générale"
        },
        {
          "type": "ul",
          "items": [
            "**ROI =**Résultat / Capitaux investis = 6 / 50 = 12 %.",
            "**Décomposition DuPont :**taux de marge = 6 / 48 = 12,5 % ; rotation de l’actif = 48 / 50 = 0,96 ; vérification : 12,5 % × 0,96 = 12 %.",
            "**EVA =**Résultat − (Capitaux × coût du capital) = 6 − (50 × 8 %) = 6 − 4 = +2 M€."
          ]
        },
        {
          "type": "h4",
          "text": "4. Interprétation et regard critique"
        },
        {
          "type": "p",
          "text": "l’entreprise dégage un ROI de 12 %, supérieur au coût du capital (8 %) : l’EVA est positive (+2 M€), l’entreprise crée donc de la valeur pour ses apporteurs de capitaux. La décomposition DuPont montre que la rentabilité repose autant sur la marge (12,5 %) que sur une rotation de l’actif correcte (0,96) ; pour progresser, deux leviers sont disponibles : améliorer la marge (valeur, mix produit) ou mieux utiliser les actifs."
        },
        {
          "type": "p",
          "text": "Regard critique : jugée sur son ROI moyen de 12 %, la direction générale pourrait refuser un projet rentable à 10 % (supérieur au coût du capital de 8 %, donc créateur de valeur) au seul motif qu’il abaisserait la moyenne. Le raisonnement en EVA évite ce biais. Par ailleurs, la marge sur coût variable (10,4 M€) très supérieure à la marge sur coût standard (4,6 M€) rappelle que les charges fixes pèsent lourd : tout pilotage par le seul coût variable surestimerait la rentabilité réelle. Enfin, le positionnement éco-responsable impose de compléter ces indicateurs financiers par des critères de performance globale (empreinte carbone, matières recyclées)."
        },
        {
          "type": "h4",
          "text": "5. Prolongement : piloter l’atelier (centre de coûts)"
        },
        {
          "type": "p",
          "text": "L’atelier de production, centre de coûts, fabrique le produit pour un coût standard de 67 €. Supposons un coût réel constaté de 69 €/produit sur les 200 000 unités produites."
        },
        {
          "type": "ul",
          "items": [
            "**Écart unitaire sur coût =**69 − 67 = 2 €/produit, défavorable (le coût réel dépasse le standard).",
            "**Écart total =**2 × 200 000 = 400 000 €, soit 0,4 M€ défavorable.",
            "**Interprétation :**le responsable de l’atelier n’est jugé que sur cet écart de coût (contrôlabilité), non sur le volume vendu ni sur le prix. Il faut en rechercher la cause (prix des matières recyclées ? rendement ? sous-activité ?) avant tout jugement — l’analyse d’écarts fait l’objet d’un chapitre dédié."
          ]
        },
        {
          "type": "p",
          "text": "Ce prolongement illustre la cohérence du dispositif : à chaque centre son indicateur, strictement borné à son périmètre de maîtrise — coût pour l’atelier, marge pour la direction commerciale, rentabilité des capitaux pour la direction générale."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen",
          "text": "Toujours poser la formule, calculer, puis interpréter — ne jamais s’arrêter au chiffre. Conclure par les limites et le regard critique : c’est l’attendu majeur de la réforme."
        },
        {
          "type": "p",
          "text": "**— Fin du chapitre 1 —**"
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
            "**Intérêt**",
            "**Limites**"
          ],
          "rows": [
            [
              "Décentralisation",
              "Transfert du pouvoir de décision vers les unités",
              "Réactivité, motivation",
              "Coût de coordination, incohérence"
            ],
            [
              "Centre de responsabilité",
              "Unité jugée sur ce qu’elle maîtrise",
              "Responsabilisation, pilotage",
              "Effet de silo, contrôlabilité difficile"
            ],
            [
              "Centre de coûts",
              "Maîtrise des charges",
              "Efficience",
              "Risque qualité / court terme"
            ],
            [
              "Centre de recettes",
              "Maîtrise des ventes",
              "Dynamique commerciale",
              "Vendre à tout prix, marge négligée"
            ],
            [
              "Centre de profit",
              "Maîtrise recettes + coûts",
              "Autonomie, marge",
              "Optimisation locale, court terme"
            ],
            [
              "Centre d’investissement",
              "+ capitaux investis",
              "Vision rentabilité globale",
              "Biais du ROI, complexité"
            ],
            [
              "Chaîne de valeur",
              "Activités créatrices de valeur (Porter)",
              "Situer valeur et coûts",
              "Analyse parfois lourde"
            ],
            [
              "ROI / EVA",
              "Rentabilité des capitaux / valeur créée",
              "Pilotage de la création de valeur",
              "Biais du ROI, hypothèses de calcul"
            ],
            [
              "Performance globale",
              "Économique + social + environnemental",
              "Pilotage durable, parties prenantes",
              "Mesure extra-financière délicate"
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
          "text": "**À connaître par cœur**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes",
          "text": "Confondre profit et investissement (maîtrise des capitaux). Confondre ROI et taux de marge. Classer une activité de soutien parmi les principales. Juger un responsable sur ce qu’il ne maîtrise pas. Présenter les centres sans en discuter les effets pervers."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
