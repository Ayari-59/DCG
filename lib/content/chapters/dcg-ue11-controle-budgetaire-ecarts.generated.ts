// Généré par scripts/convert-docx.mjs depuis CHAPITRE_14__LE_CONTROLE_BUDGETAIRE_ET_L_ANALYSE_DES_ECARTS.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-controle-budgetaire-ecarts",
  "level": "DCG",
  "ue": "UE11",
  "number": 14,
  "title": "Le contrôle budgétaire et l'analyse des écarts",
  "description": "",
  "durationMin": 45,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 3 du programme — « Concevoir et adapter le processus budgétaire de l’organisation ».**\n**Compétence 3.3 — Analyser les résultats d’une gestion budgétaire (20 heures). Ce chapitre constitue l’aboutissement de toute la séquence budgétaire (ventes, approvisionnements, production, masse salariale) : il confronte les prévisions aux réalisations pour piloter la performance à court terme.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Réaliser un contrôle budgétaire en analysant les écarts entre prévisions et réalisations.\n• Expliquer les résultats obtenus et en identifier les causes et les responsabilités.\n• Repérer les risques en proposant des indicateurs de suivi et des tableaux de bord.\n• Proposer des pistes d’amélioration et conseiller le décideur par un écrit structuré.\n• Analyser les intérêts et les limites des techniques prévisionnelles et du contrôle budgétaire.\n• Contrôle budgétaire : calcul et analyse des écarts sur chiffre d’affaires, marges, coûts et résultat. Tableaux de bord. L’écart total et l’écart global sont abordés.\n• REMARQUE — Périmètre du programme réformé\n• La construction des budgets n’est pas demandée : le chapitre se concentre sur le calcul et l’analyse des écarts entre prévisions et réalisations. Les problèmes relatifs aux en-cours de production sont exclus du programme (voir l’encadré « Hors programme » de la Partie 4). L’accent est mis sur l’interprétation, les indicateurs de suivi et la rédaction d’un écrit argumenté, autant que sur les calculs."
        }
      ]
    },
    {
      "id": "introduction-generale",
      "title": "Introduction générale",
      "blocks": [
        {
          "type": "p",
          "text": "Une organisation qui a patiemment construit ses budgets — budget des ventes, budget de production, budget des approvisionnements, budget de la masse salariale — dispose d’une feuille de route chiffrée pour l’exercice à venir. Mais un budget n’a de valeur que s’il est confronté à la réalité. C’est précisément la mission du contrôle budgétaire : comparer périodiquement ce qui était prévu à ce qui s’est réellement produit, mesurer les écarts, en rechercher les causes, et déclencher les actions correctives nécessaires."
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire est ainsi le principal mécanisme de pilotage à court terme de l’entreprise. Il referme la boucle du processus budgétaire et lui donne son sens : sans contrôle, la prévision n’est qu’un exercice formel ; avec lui, elle devient un instrument de management."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/01.png",
          "alt": "Introduction générale",
          "width": 1440,
          "height": 760,
          "caption": "Figure 1 — La boucle du pilotage budgétaire : des objectifs à la performance, avec rétroaction"
        },
        {
          "type": "p",
          "text": "Comme l’indique la définition de référence, le contrôle budgétaire recouvre deux dimensions complémentaires. La première est une dimension d’incitation : les budgets visent à orienter les comportements des acteurs de l’organisation vers des objectifs cohérents avec ceux de la direction générale. La seconde est une dimension de vérification : il s’agit de s’assurer que ces objectifs sont effectivement atteints, en s’appuyant techniquement sur le calcul, puis sur la décomposition et l’analyse des écarts entre réalisations et prévisions."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Contrôle budgétaire",
          "text": "Le contrôle budgétaire est l’utilisation des prévisions budgétaires pour (1) inciter les acteurs de l’entreprise à atteindre des objectifs convergents avec ceux de la direction et (2) vérifier que ces objectifs sont atteints, par le calcul et l’analyse des écarts.\n**REMARQUE — L’analyse des écarts n’est pas une fin en soi**\nCalculer un écart ne présente aucun intérêt si l’on ne se demande pas pourquoi il s’est formé, qui en est responsable et ce qu’il convient de faire. L’analyse des écarts doit identifier les dérives significatives et déboucher sur des décisions. C’est l’esprit de la réforme : « la rédaction d’un écrit structuré est aussi importante que les calculs »."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/02.png",
          "alt": "Introduction générale",
          "width": 1872,
          "height": 1073,
          "caption": "Figure 2 — Décomposition d’un écart et responsabilité des centres (commercial / production)"
        },
        {
          "type": "p",
          "text": "L’unité d’œuvre du centre Montage est l’heure-machine. Les charges fixes indirectes prévues s’élèvent à 30 000 € pour une activité normale de 2 500 UO (soit 5 000 × 0,5). Ces données serviront de fil conducteur à l’ensemble du chapitre."
        }
      ]
    },
    {
      "id": "1-fondements-et-principes-du-controle-budgetaire",
      "title": "1. Fondements et principes du contrôle budgétaire",
      "blocks": [
        {
          "type": "p",
          "text": "Avant d’entrer dans la mécanique des écarts, il faut comprendre la logique d’ensemble : à quoi sert le contrôle budgétaire, où se situe-t-il dans le pilotage de l’organisation, selon quelles étapes il se déroule, et selon quel principe d’attention sélective il opère."
        },
        {
          "type": "h3",
          "text": "1.1 Définition et objectifs"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire poursuit un double objectif, déjà évoqué en introduction. Il oriente les comportements (dimension incitative) et il vérifie l’atteinte des objectifs (dimension de contrôle). Ces deux dimensions sont indissociables : des objectifs irréalistes ou incontrôlables ne motivent personne, et une vérification sans objectifs clairs n’a aucun sens."
        },
        {
          "type": "h4",
          "text": "Les conditions d’un contrôle budgétaire efficace"
        },
        {
          "type": "ul",
          "items": [
            "**Des objectifs réalistes :**ni trop faciles (sans effet incitatif), ni inatteignables (décourageants).",
            "**Des objectifs convergents :**cohérents avec ceux de l’organisation, pour éviter que l’optimisation locale ne nuise à la performance globale.",
            "**Des objectifs contrôlables :**chaque responsable ne doit être évalué que sur ce qu’il maîtrise effectivement."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen",
          "text": "On attend du candidat qu’il dépasse le simple calcul : il faut systématiquement relier un écart à un objectif, à une cause et à un responsable. La réforme valorise explicitement la capacité à « expliquer les résultats » et à « conseiller le décideur »."
        },
        {
          "type": "h3",
          "text": "1.2 La place du contrôle budgétaire dans le pilotage"
        },
        {
          "type": "p",
          "text": "Le pilotage d’une organisation se déploie sur trois horizons. Le contrôle budgétaire occupe l’horizon du court terme : il assure le suivi opérationnel de l’exercice et alimente, par remontée d’informations (reporting), les niveaux supérieurs de décision."
        },
        {
          "type": "table",
          "headers": [
            "**Horizon**",
            "**Nature du pilotage**",
            "**Outils**",
            "**Rôle du contrôle budgétaire**"
          ],
          "rows": [
            [
              "Long terme (3-5 ans)",
              "Stratégique",
              "Plan stratégique, business plan",
              "Cadre de cohérence amont"
            ],
            [
              "Moyen terme (1 an)",
              "Tactique / budgétaire",
              "Budgets, plans d’action",
              "Définition des objectifs chiffrés"
            ],
            [
              "**Court terme (mois, trimestre)**",
              "**Opérationnel**",
              "**Écarts, tableaux de bord**",
              "**Cœur du contrôle budgétaire**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire ne se limite donc pas à constater : il s’inscrit dans une boucle de rétroaction qui relie en permanence la prévision, la mesure et l’action. C’est cette boucle qui transforme le budget en véritable instrument de management."
        },
        {
          "type": "h3",
          "text": "1.3 Les étapes du processus"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire se déroule selon une séquence rigoureuse, qui structure également la progression de ce chapitre :"
        },
        {
          "type": "ul",
          "items": [
            "**Prévoir :**disposer de prévisions chiffrées (les budgets, supposés établis).",
            "**Mesurer :**relever les réalisations effectives de la période (données réelles).",
            "**Calculer les écarts :**confronter réel et prévu selon la convention Réel − Prévu.",
            "**Analyser :**décomposer les écarts, en rechercher les causes et les responsabilités.",
            "**Agir :**mettre en œuvre les actions correctives et en suivre les effets."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Horizon et fréquence",
          "text": "Le budget est généralement annuel. Mais attendre la fin de l’exercice pour réagir serait risqué : les prévisions annuelles sont déclinées en objectifs plus courts (mensuels, trimestriels) et les écarts sont calculés sans attendre, afin de réagir au plus tôt."
        },
        {
          "type": "h3",
          "text": "1.4 Le principe de gestion par exception"
        },
        {
          "type": "p",
          "text": "Une organisation génère un très grand nombre d’écarts. Les analyser tous serait à la fois impossible et contre-productif. Le contrôle budgétaire applique donc le principe de gestion par exception : on ne concentre l’attention que sur les écarts dont l’amplitude est anormale."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Gestion par exception",
          "text": "Principe selon lequel seuls les écarts présentant une amplitude anormale par rapport à une norme (en valeur absolue ou, plus pertinemment, en valeur relative) font l’objet d’une analyse approfondie. Les écarts situés à l’intérieur d’un seuil de tolérance sont considérés comme négligeables."
        },
        {
          "type": "p",
          "text": "La valeur relative (l’écart exprimé en pourcentage du prévu) est ici déterminante. Un écart de 1 million d’euros sur un chiffre d’affaires prévu de 100 millions est faible (1 %) ; le même écart sur un coût prévu de 5 millions est un dérapage majeur (20 %). C’est pourquoi les entreprises fixent des seuils de tolérance, par exemple « tout écart sur coût inférieur à 5 % est ignoré »."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/03.png",
          "alt": "Les conditions d’un contrôle budgétaire efficace",
          "width": 1440,
          "height": 800,
          "caption": "Figure 3 — Gestion par exception : seuls les écarts hors zone de tolérance sont analysés"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Fixer les seuils de tolérance",
          "text": "Un contrôleur retient par exemple un seuil de tolérance de 3 % sur les coûts et de 2 % sur le chiffre d’affaires. Lors de la revue mensuelle, un écart sur la main-d’œuvre directe dépassant largement ce seuil fera l’objet d’une analyse prioritaire, tandis qu’un écart minime sur la matière sera simplement signalé.\n**ERREURS FRÉQUENTES — Erreurs fréquentes**\nConfondre amplitude absolue et amplitude relative : un « gros » écart en euros peut être négligeable en pourcentage, et inversement. Toujours raisonner en valeur relative pour appliquer la gestion par exception. Vouloir tout expliquer : analyser des écarts non significatifs disperse l’attention et fait perdre de vue les véritables dérives."
        },
        {
          "type": "h3",
          "text": "Les centres de responsabilité"
        },
        {
          "type": "p",
          "text": "Les prévisions étant déclinées à tous les niveaux de l’organisation, les écarts le sont aussi. Chaque centre de responsabilité — subdivision regroupée autour d’un responsable disposant de moyens et d’une autonomie de gestion — se voit assigner des objectifs cohérents avec sa nature."
        },
        {
          "type": "table",
          "headers": [
            "**Type de centre**",
            "**Objectif assigné**",
            "**Écart de référence**"
          ],
          "rows": [
            [
              "Centre de coûts (atelier, usine)",
              "Maîtriser / optimiser les coûts",
              "Écarts sur coûts"
            ],
            [
              "Centre de chiffre d’affaires / de marge",
              "Réaliser les ventes",
              "Écarts sur CA, sur marge"
            ],
            [
              "Centre de profit",
              "Optimiser le résultat",
              "Écart sur résultat"
            ],
            [
              "Centre d’investissement",
              "Rentabiliser les capitaux",
              "ROI, écarts associés"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un enjeu de pouvoir, pas seulement technique",
          "text": "Selon la manière dont un écart est décomposé, sa responsabilité peut être attribuée à l’un ou l’autre des centres. La décomposition n’est donc pas un pur exercice mathématique : elle est porteuse d’enjeux de pouvoir et d’équité au sein de l’organisation. Mal attribuer un écart, c’est évaluer injustement un responsable."
        },
        {
          "type": "p",
          "text": "Une fois ces fondements posés, on aborde le socle méthodologique de l’analyse des écarts. Les conventions et raisonnements présentés ci-dessous s’appliqueront ensuite à tous les écarts particuliers (ventes, coûts, marges) étudiés dans les parties suivantes. Les maîtriser, c’est s’épargner l’apprentissage par cœur d’une multitude de formules."
        },
        {
          "type": "h3",
          "text": "1.5 La notion d’écart"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Écart",
          "text": "Un écart est la différence entre une valeur réelle (constatée) et une valeur prévue (de référence). Il mesure une dérive par rapport à un objectif."
        },
        {
          "type": "p",
          "text": "La valeur de référence porte plusieurs noms selon le contexte, mais ces nuances ne modifient jamais les calculs :"
        },
        {
          "type": "table",
          "headers": [
            "**Terme**",
            "**Sens**"
          ],
          "rows": [
            [
              "Coût préétabli (PCG)",
              "Coût évalué a priori pour faciliter les traitements analytiques et le contrôle."
            ],
            [
              "Coût standard",
              "Coût calculé d’après des normes techniques (bureau des méthodes) ; fiche unitaire."
            ],
            [
              "Coût prévisionnel",
              "Coût estimé à partir de données passées (statistiques)."
            ],
            [
              "Coût budgété",
              "Coût défini dans le budget."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Coût de référence",
          "text": "En l’absence de prévision chiffrée, les écarts peuvent être calculés par rapport à une période antérieure (le coût ou le chiffre d’affaires de l’année précédente). On parlera génériquement de « coût prévu » (Cp) opposé au « coût réel » (Cr)."
        },
        {
          "type": "h3",
          "text": "1.6 Écart favorable et écart défavorable"
        },
        {
          "type": "p",
          "text": "C’est l’un des points les plus piégeux — et les plus rémunérateurs à l’examen. La convention universelle est de calculer tout écart selon :"
        },
        {
          "type": "p",
          "text": "Mais le signe de l’écart n’a aucune signification en soi : il dépend de l’objet étudié. Tout dépend de l’effet de l’écart sur le résultat de l’exercice."
        },
        {
          "type": "table",
          "headers": [
            "**Objet de l’écart**",
            "**Écart positif (Réel > Prévu)**",
            "**Sens pour le résultat**"
          ],
          "rows": [
            [
              "Chiffre d’affaires, marge, produit",
              "On a vendu plus / plus cher",
              "**FAVORABLE (Fav.)**"
            ],
            [
              "Coût, charge",
              "Le coût a dérapé",
              "**DÉFAVORABLE (Déf.)**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — La règle d’or du sens",
          "text": "Faites TOUJOURS suivre un écart de sa signification : Fav. ou Déf. À l’examen, les points sont partagés entre la valeur absolue et le sens de l’écart. Un calcul juste sans le sens ne vaut que la moitié des points. Astuce : pour un coût, écart positif = défavorable ; pour un produit (CA, marge), écart positif = favorable. Ne raisonnez jamais sur le seul signe arithmétique.\n**ERREURS FRÉQUENTES — Erreurs fréquentes**\nÉcrire « écart de −529 » sans préciser qu’il s’agit d’un écart sur coût favorable (le coût a baissé). Inverser la convention (Prévu − Réel) en cours d’exercice : on obtient le bon résultat au signe près, mais on inverse mécaniquement tous les sens. Restez constant."
        },
        {
          "type": "h3",
          "text": "1.7 Les méthodes de décomposition"
        },
        {
          "type": "p",
          "text": "Analyser un écart, c’est le décomposer en autant de sous-écarts qu’il existe de causes à sa formation. Deux situations se présentent selon la nature de l’indicateur."
        },
        {
          "type": "h4",
          "text": "a. L’écart d’une somme : l’écart d’une somme est la somme des écarts"
        },
        {
          "type": "p",
          "text": "Lorsque l’indicateur résulte d’une addition ou d’une soustraction (par exemple un résultat = chiffre d’affaires − coût), l’écart se décompose membre par membre :"
        },
        {
          "type": "h4",
          "text": "b. L’écart d’un produit : l’effet volume et l’effet prix"
        },
        {
          "type": "p",
          "text": "Lorsque l’indicateur résulte d’une multiplication (CA = Prix × Volume), la décomposition pose un problème : elle est mathématiquement possible de plusieurs manières. La convention fixe alors un choix unique :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "La convention de décomposition (à retenir absolument)",
          "text": "Écart sur VOLUME, valorisé au PRIX PRÉVU :\nÉcart sur PRIX, rapporté aux QUANTITÉS RÉELLES :\n**ILLUSTRATION — Effet volume et effet prix (illustration)**\nVentes prévues : 90 unités à 10 € (CA prévu = 900 €). Ventes réelles : 100 unités à 11 € (CA réel = 1 100 €). L’écart sur CA est de +200 € (Fav.). Il combine un effet volume et un effet prix, tous deux favorables.\n**Solution 1 (conforme) :**Δ/prix = (11 − 10) × 100 = +100 ; Δ/volume = (100 − 90) × 10 = +100. Total = +200.\n**Solution 2 (à proscrire) :**Δ/prix au volume prévu = (11 − 10) × 90 = +90 ; Δ/volume au prix réel = (100 − 90) × 11 = +110. Total = +200 également… Les deux solutions retrouvent l’écart total, mais seule la solution 1 respecte la convention. La solution 2 est une erreur de méthode."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/04.png",
          "alt": "b. L’écart d’un produit : l’effet volume et l’effet prix",
          "width": 1185,
          "height": 352,
          "caption": "Figure 4 — Écart sur CA : effet volume (au prix prévu) et effet prix (au volume réel)"
        },
        {
          "type": "h4",
          "text": "c. La décomposition à trois membres ou plus"
        },
        {
          "type": "p",
          "text": "Lorsque la multiplication comporte trois facteurs (cas d’un coût direct : Volume de production × Quantité de facteur × Prix du facteur), on procède pas à pas, en respectant la même logique. Soit C = V × Q × P :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Décomposition à trois facteurs",
          "text": "**REMARQUE — La règle de cohérence universelle**\nQuelle que soit la décomposition retenue, la somme des sous-écarts doit toujours être égale à l’écart total. C’est le contrôle ultime de tout calcul d’écart. Les décompositions incohérentes (écart prix sur volume réel ET écart volume sur prix réel) sont des erreurs graves qui conduisent à des décisions erronées.\n**REMARQUE — Volume ou quantité ?**\nPar convention, on réserve le terme « volume » aux quantités de produits fabriqués ou vendus, et le terme « quantité » aux facteurs de production consommés (kg de matière, heures de MOD). « Effet volume » et « effet quantité » désignent ainsi des réalités distinctes qu’il faut bien identifier."
        },
        {
          "type": "h3",
          "text": "1.8 Les principes d’interprétation"
        },
        {
          "type": "p",
          "text": "Un écart calculé n’est qu’un chiffre. L’interpréter, c’est répondre à quatre questions, qui structurent l’analyse critique attendue dans le programme réformé :"
        },
        {
          "type": "ul",
          "items": [
            "**Quelle ampleur ?**L’écart est-il significatif (valeur relative, seuil de tolérance) ?",
            "**Quel sens ?**Favorable ou défavorable pour le résultat ?",
            "**Quelle cause ?**Variation de prix, de quantité, de volume, de rendement, de mix… ?",
            "**Quelle responsabilité ?**Quel centre est concerné — et l’écart relève-t-il bien de sa maîtrise ?"
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen",
          "text": "La structure « Comprendre – Calculer – Interpréter – Critiquer » est la grille de lecture de tout le chapitre. Un candidat qui se contente de calculer plafonne ; celui qui interprète et critique accède à la note maximale."
        }
      ]
    },
    {
      "id": "2-les-ecarts-sur-resultats-et-sur-ventes",
      "title": "2. Les écarts sur résultats et sur ventes",
      "blocks": [
        {
          "type": "p",
          "text": "Le résultat est le solde ultime de l’organisation : la différence entre l’ensemble des produits et l’ensemble des charges. L’écart sur résultat synthétise donc tous les autres écarts. Le décomposer permet d’attribuer la performance (ou la contre-performance) à chaque centre de responsabilité."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/05.png",
          "alt": "2. Les écarts sur résultats et sur ventes",
          "width": 1492,
          "height": 926,
          "caption": "Figure 5 — Arbre de décomposition de l’écart sur résultat : logiques soustractive et multiplicative"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/06.jpg",
          "alt": "2. Les écarts sur résultats et sur ventes"
        },
        {
          "type": "p",
          "text": "Figure 6 — Vue d’ensemble : de l’écart sur résultat aux écarts élémentaires (chiffre d’affaires et coûts)"
        },
        {
          "type": "h3",
          "text": "2.1 L’écart sur chiffre d’affaires"
        },
        {
          "type": "p",
          "text": "Le chiffre d’affaires résulte du produit Volume × Prix. Pour un produit unique, l’écart sur CA se décompose donc en exactement deux sous-écarts, selon la convention de la Partie 2 :"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Prévu**",
            "**Réel**",
            "**Écart**"
          ],
          "rows": [
            [
              "Volume (unités)",
              "90",
              "100",
              "+ 10"
            ],
            [
              "Prix unitaire",
              "10 €",
              "11 €",
              "+ 1 €"
            ],
            [
              "**Chiffre d’affaires**",
              "**900 €**",
              "**1 100 €**",
              "**+ 200 € (F)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Décomposition (convention : volume au prix prévu, prix au volume réel) : Δ/Volume = (100 − 90) × 10 = + 100 € (F) ; Δ/Prix = (11 − 10) × 100 = + 100 € (F). Somme = + 200 € (F). Ici les deux effets sont favorables : on a vendu plus, et plus cher que prévu."
        },
        {
          "type": "h3",
          "text": "2.2 La pertinence de l’écart sur ventes : du CA à la marge"
        },
        {
          "type": "p",
          "text": "Évaluer les commerciaux sur un objectif de chiffre d’affaires présente un effet pervers majeur : pour atteindre l’objectif, un vendeur peut accorder des remises, voire vendre à perte. L’objectif de CA devient alors incohérent avec celui de l’entreprise — la rentabilité."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — L’effet pervers de l’objectif de chiffre d’affaires",
          "text": "Indexer la rémunération d’un commercial sur le seul chiffre d’affaires l’incite à accorder des remises, voire à vendre à perte, pour « faire du volume ». L’objectif de CA devient alors incohérent avec celui de l’entreprise — la rentabilité.\n**D’où la recommandation : évaluer les commerciaux sur un objectif de MARGE (sur coût préétabli), et non de chiffre d’affaires. Voir l’écart sur marge commerciale, section 4.3.**"
        },
        {
          "type": "h3",
          "text": "2.3 Les deux logiques de décomposition de l’écart sur résultat"
        },
        {
          "type": "p",
          "text": "L’écart sur résultat peut se décomposer de deux façons équivalentes, qui aboutissent — c’est rassurant — aux mêmes sous-écarts."
        },
        {
          "type": "h4",
          "text": "a. La logique soustractive : R = CA − Coût"
        },
        {
          "type": "p",
          "text": "L’écart sur résultat est la somme de l’écart sur CA et de l’écart sur coût (au signe près). Chacun se décompose ensuite en effet volume et effet prix/coût."
        },
        {
          "type": "h4",
          "text": "b. La logique multiplicative : R = Volume × Marge unitaire"
        },
        {
          "type": "p",
          "text": "Le résultat peut aussi s’écrire comme le produit du volume par la marge unitaire. L’écart se décompose alors en :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le paradoxe du résultat stable (illustration)",
          "text": "Ventes prévues : 80 unités à marge unitaire 5 € (résultat prévu 400 €). Ventes réelles : 100 unités à marge unitaire 4 € (résultat réel 400 €). L’écart sur résultat est NUL. Δ/Volume = (100 − 80) × 5 = +100 (Fav.) ; Δ/Marge unitaire = 100 × (4 − 5) = −100 (Déf.). Un résultat stable masque ici un double mouvement : davantage de volume (favorable) mais une marge unitaire érodée (défavorable). Se contenter de l’écart global (nul) serait une grave erreur de pilotage : il y a manifestement un problème dans la politique commerciale.\n**POINT EXAMEN — Point examen**\nSachez passer d’une logique à l’autre. La logique multiplicative (volume × marge) est particulièrement adaptée à l’évaluation commerciale ; la logique soustractive (CA − coût) à l’analyse complète du résultat."
        },
        {
          "type": "h4",
          "text": "c. L’écart sur marge sur coût préétabli (précision essentielle)"
        },
        {
          "type": "p",
          "text": "Quand on remplace l’écart sur chiffre d’affaires par l’écart sur marge, il faut être précis sur la marge utilisée : c’est une marge sur coût de production PRÉÉTABLI (standard), et non sur coût réel. Le coût de production est figé à sa valeur standard pour les deux termes de l’écart."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Écart sur marge sur coût préétabli",
          "text": "Marge unitaire = Prix de vente − Coût de production préétabli (standard). Le coût reste au standard dans la marge prévue ET dans la marge réelle.\n**Marge unitaire préétablie = Pp − Cp · Marge unitaire « réelle » (analyse ventes) = Pr − Cp**\nPourquoi le coût préétabli ? Pour isoler la performance commerciale (prix et quantités vendues) de la performance industrielle (consommations et coûts de production). Les écarts de coûts réels sont analysés séparément dans les écarts sur coûts."
        },
        {
          "type": "p",
          "text": "Écart sur marge = (Marge réelle sur coût préétabli) − (Marge préétablie), décomposé en :"
        },
        {
          "type": "p",
          "text": "• Écart sur marge unitaire (effet prix) ="
        },
        {
          "type": "p",
          "text": "• Écart sur quantité (effet volume) ="
        },
        {
          "type": "p",
          "text": "En multiproduction, l’écart sur quantité se subdivise lui-même en écart sur volume global et écart sur composition (mix), tous deux valorisés à la marge unitaire préétablie."
        },
        {
          "type": "h3",
          "text": "2.4 L’écart sur composition des ventes (mix)"
        },
        {
          "type": "p",
          "text": "Lorsque l’entreprise vend plusieurs produits substituables, l’analyse produit par produit devient fastidieuse. On calcule alors un indicateur synthétique : l’écart de composition (ou écart sur « mix »), qui isole l’effet de substitution entre produits."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Écart de composition (mix)",
          "text": "Sous-écart qui mesure l’impact, sur le chiffre d’affaires ou la marge, de la modification de la structure des ventes (la part relative de chaque produit), indépendamment du volume global et du niveau général des prix.\n**REMARQUE — Deux conditions pour calculer un écart de composition**\nIl faut une multiproduction (au moins deux produits, en pratique plus de 4 ou 5 pour que l’écart soit pertinent). Les produits doivent être interdépendants et substituables : sans effet de substitution possible, l’écart n’a pas de sens économique."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/07.png",
          "alt": "c. L’écart sur marge sur coût préétabli (précision essentielle)",
          "width": 1440,
          "height": 760,
          "caption": "Figure 7 — Décomposition de l’écart sur quantité en multiproduction : volume global et composition"
        },
        {
          "type": "p",
          "text": "En multigamme — au moins deux produits substituables —, l’écart sur quantité (volume) de la marge se décompose en deux sous-écarts. Ces deux sous-écarts n’ont de sens qu’en présence de plusieurs produits :"
        },
        {
          "type": "p",
          "text": "Écart sur quantité (volume) = Écart de volume global + Écart de composition (mix)"
        },
        {
          "type": "ul",
          "items": [
            "Écart de volume global = : effet de la variation du volume total vendu, à composition prévue.",
            "**Écart de composition (mix) = (m̄ᵣ − m̄ₚ) × ΣQr** : effet de la déformation de la répartition entre produits, valorisé aux marges préétablies (m̄ᵣ, m̄ₚ = marges unitaires moyennes préétablies aux compositions réelle et prévue). On le retrouve par différence : écart sur quantité − écart de volume global."
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/08.png",
          "alt": "c. L’écart sur marge sur coût préétabli (précision essentielle)",
          "width": 1508,
          "height": 1104,
          "caption": "Figure 8 — Décomposition de l’écart sur quantité : volume global et composition (illustration)"
        },
        {
          "type": "h4",
          "text": "Formalisation : l’écart de volume global et l’écart de composition"
        },
        {
          "type": "p",
          "text": "On part de l’écart sur quantité (volume) de la marge, calculé produit par produit et valorisé à la marge unitaire préétablie. En multiproduction, cet écart se scinde rigoureusement en deux composantes additives."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "NOTATIONS",
          "text": "• i : indice du produit (i = 1 … n).\n• Qpᵢ, Qrᵢ : quantités vendues prévue et réelle du produit i.\n• ΣQp = Σᵢ Qpᵢ et ΣQr = Σᵢ Qrᵢ : volumes totaux prévu et réel.\n• mᵢ : marge unitaire préétablie du produit i (mupᵢ = pᵢ − cᵢ, coût figé au standard).\n• m̄ₚ : marge unitaire moyenne préétablie, à composition PRÉVUE = (Σᵢ Qpᵢ · mᵢ) / ΣQp.\n• m̄ᵣ : marge unitaire moyenne préétablie, à composition RÉELLE = (Σᵢ Qrᵢ · mᵢ) / ΣQr.\n• Qmᵢ : quantité du produit i « à mix prévu » pour le volume total réel = ΣQr · (Qpᵢ / ΣQp)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FORMULES — Les deux sous-écarts",
          "text": "**Écart sur quantité (volume) = Σᵢ (Qrᵢ − Qpᵢ) × mᵢ**\nIl se décompose en deux sous-écarts additifs, chacun défini par sa propre formule :\n**① Écart de volume global = (ΣQr − ΣQp) × m̄ₚ**\nEffet du seul volume total vendu, à structure de gamme inchangée (valorisé à la marge moyenne préétablie m̄ₚ).\n**② Écart de composition (mix) — deux expressions équivalentes :**\n(a) Σᵢ (Qrᵢ − Qmᵢ) × mᵢ avec Qmᵢ = ΣQr · (Qpᵢ / ΣQp) [produit par produit]\n(b) (m̄ᵣ − m̄ₚ) × ΣQr ou, en parts de gamme : ΣQr × Σᵢ (Qrᵢ/ΣQr − Qpᵢ/ΣQp) × mᵢ\nEffet de la déformation de la répartition entre produits, valorisé aux marges préétablies.\n*Vérification arithmétique (et non une définition) : écart de composition = écart sur quantité − écart de volume global.*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉMONSTRATION — La décomposition est exacte",
          "text": "On insère le terme intermédiaire Σᵢ Qmᵢ · mᵢ (ventes au volume réel mais à mix prévu) :\n• Le 1ᵉʳ terme est, par définition, l’écart de composition (a).\n• Pour le 2ᵉ terme, comme Qmᵢ = ΣQr·(Qpᵢ/ΣQp) et Qpᵢ = ΣQp·(Qpᵢ/ΣQp), on a Qmᵢ − Qpᵢ = (Qpᵢ/ΣQp)(ΣQr − ΣQp) ; donc :\nΣᵢ (Qmᵢ − Qpᵢ) mᵢ = (ΣQr − ΣQp) × Σᵢ (Qpᵢ/ΣQp) mᵢ = (ΣQr − ΣQp) × m̄ₚ = écart de volume global ①. CQFD.\nL’équivalence (a) = (b) se vérifie de même : ."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION CHIFFRÉE (cas X / Y / Z ci-dessous)",
          "text": "**① Volume global = (6 100 − 4 500) × 13,111 = + 20 977,78 € (F)**\n**② Mix = (10,443 − 13,111) × 6 100 = − 16 277,78 € (D)**\nSomme = + 4 700 € (F) = écart sur quantité. ✓"
        },
        {
          "type": "p",
          "text": "*Sur le chiffre d’affaires : mêmes formules en remplaçant la marge unitaire préétablie mᵢ par le prix prévu pᵢ (et m̄ₚ par le prix moyen prévu).*"
        },
        {
          "type": "h4",
          "text": "■ APPLICATION 3 — Écart sur marge en multiproduction (produits X, Y, Z)"
        },
        {
          "type": "p",
          "text": "Une entreprise vend trois produits substituables X, Y et Z. On raisonne sur l’écart sur MARGE (à coût préétabli), celui qui sert à évaluer les commerciaux. Marge unitaire préétablie mup = prix prévu − coût préétabli."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPRENDRE — Deux questions, deux écarts",
          "text": "L’écart sur quantité de la marge répond à deux questions distinctes : (1) a-t-on vendu PLUS au total ? → écart de volume global ; (2) a-t-on vendu MIEUX, c’est-à-dire proportionnellement plus de produits margés ? → écart de composition (mix)."
        },
        {
          "type": "p",
          "text": "**Les données de la gamme**"
        },
        {
          "type": "table",
          "headers": [
            "**Produit**",
            "**mup (pp − cp)**",
            "**Qté prévue**",
            "**Part prévue**",
            "**Qté réelle**",
            "**Qr − Qp**"
          ],
          "rows": [
            [
              "X",
              "8 € (20 − 12)",
              "2 000",
              "44,4 %",
              "4 000",
              "+ 2 000"
            ],
            [
              "Y",
              "12 € (18 − 6)",
              "1 500",
              "33,3 %",
              "1 600",
              "+ 100"
            ],
            [
              "Z",
              "25 € (30 − 5)",
              "1 000",
              "22,2 %",
              "500",
              "− 500"
            ],
            [
              "**Total**",
              "",
              "**4 500**",
              "**100 %**",
              "**6 100**",
              "**+ 1 600**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Marge moyenne préétablie mₘ = (2 000×8 + 1 500×12 + 1 000×25) / 4 500 = 59 000 / 4 500 = 13,111 €.*"
        },
        {
          "type": "p",
          "text": "Travail à faire : décomposer l'écart sur marge en effet prix (écart sur marge unitaire) et effet volume (écart sur quantité), puis décomposer l'écart sur quantité en écart de volume global et écart de composition (mix)."
        },
        {
          "type": "p",
          "text": "**Corrigé — double décomposition de l'écart sur marge :**"
        },
        {
          "type": "p",
          "text": "Étape 1 — Écart sur marge unitaire (effet prix) ="
        },
        {
          "type": "table",
          "headers": [
            "**Produit**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "X",
              "(9 − 8) × 4 000",
              "+ 4 000 €",
              "(F)"
            ],
            [
              "Y",
              "(11,5 − 12) × 1 600",
              "− 800 €",
              "(D)"
            ],
            [
              "Z",
              "(23 − 25) × 500",
              "− 1 000 €",
              "(D)"
            ],
            [
              "**Écart sur marge unitaire**",
              "",
              "**+ 2 200 €**",
              "**(F)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Étape 2 — Écart sur quantité (volume) ="
        },
        {
          "type": "table",
          "headers": [
            "**Produit**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "X",
              "(4 000 − 2 000) × 8",
              "+ 16 000 €",
              "(F)"
            ],
            [
              "Y",
              "(1 600 − 1 500) × 12",
              "+ 1 200 €",
              "(F)"
            ],
            [
              "Z",
              "(500 − 1 000) × 25",
              "− 12 500 €",
              "(D)"
            ],
            [
              "**Écart sur quantité**",
              "",
              "**+ 4 700 €**",
              "**(F)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Vérification de l’écart sur marge : 2 200 + 4 700 = + 6 900 € (F). L’écart sur quantité se subdivise alors en volume global et composition.*"
        },
        {
          "type": "p",
          "text": "**Étape 3 — Écart de volume global (effet du volume total, à mix prévu)**"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart de volume global",
              "(6 100 − 4 500) × 13,111",
              "+ 20 977,78 €",
              "(F)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Étape 4 — Écart de composition / mix ="
        },
        {
          "type": "p",
          "text": "Qm = quantité « à mix prévu » = volume total réel × part prévue du produit : X = 6 100 × 44,4 % = 2 711,11 ; Y = 6 100 × 33,3 % = 2 033,33 ; Z = 6 100 × 22,2 % = 1 355,56."
        },
        {
          "type": "table",
          "headers": [
            "**Produit**",
            "**Qté réelle**",
            "**Qté à mix prévu**",
            "**(Qr − Qm) × mup**",
            "**Sens**"
          ],
          "rows": [
            [
              "X",
              "4 000",
              "2 711,11",
              "+ 10 311,11 €",
              "(F)"
            ],
            [
              "Y",
              "1 600",
              "2 033,33",
              "− 5 200,00 €",
              "(D)"
            ],
            [
              "Z",
              "500",
              "1 355,56",
              "− 21 388,89 €",
              "(D)"
            ],
            [
              "**Écart de composition (mix)**",
              "",
              "",
              "**− 16 277,78 €**",
              "**(D)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Vérification de l’écart sur quantité : 20 977,78 (F) − 16 277,78 (D) = + 4 700 € (F).*"
        },
        {
          "type": "p",
          "text": "**Synthèse — la double décomposition de l’écart sur marge**"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Montant**",
            "**Sens**",
            "**Lecture**"
          ],
          "rows": [
            [
              "Écart sur marge unitaire (prix)",
              "+ 2 200 €",
              "(F)",
              "Prix globalement tenus"
            ],
            [
              "Écart de volume global",
              "+ 20 977,78 €",
              "(F)",
              "Volume total en forte hausse"
            ],
            [
              "Écart de composition (mix)",
              "− 16 277,78 €",
              "(D)",
              "Déformation vers les produits peu margés"
            ],
            [
              "**Écart sur marge**",
              "**+ 6 900 €**",
              "**(F)**",
              ""
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LECTURE MANAGÉRIALE — Le mix détruit de la marge",
          "text": "Le volume total bondit (+ 1 600 unités) et les prix sont tenus : pris isolément, une bonne période. Mais le mix s’est dégradé : l’explosion des ventes de X (faible marge, 8 €) et l’effondrement de Z (forte marge, 25 €) coûtent 16 278 € de marge. La hausse de volume sauve le résultat (+ 6 900 €), mais la gamme glisse vers les produits peu rémunérateurs — point de vigilance commercial."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "VARIANTE — La même décomposition sur le chiffre d’affaires",
          "text": "*Écart sur CA = 126 000 − 97 000 = + 29 000 € (F). Décomposition : écart sur prix + 2 200 € (F) ; écart sur quantité + 26 800 € (F) = volume global + 34 488,89 € (F) − composition 7 688,89 € (D). Le mix est défavorable sur le CA aussi, mais c’est l’analyse en marge qui pilote la performance commerciale.*"
        }
      ]
    },
    {
      "id": "3-les-ecarts-sur-couts-de-production",
      "title": "3. Les écarts sur coûts de production",
      "blocks": [
        {
          "type": "p",
          "text": "Cette partie constitue le cœur technique du chapitre. L’analyse des coûts est l’objet même de la comptabilité de gestion ; l’analyse de leurs écarts occupe donc une place centrale dans le contrôle budgétaire. On distingue traditionnellement les écarts sur coûts directs (matières, main-d’œuvre) des écarts sur coûts indirects (centres d’analyse)."
        },
        {
          "type": "h3",
          "text": "3.1 Le cadre d’analyse : écart total, écart sur volume et écart « relatif à la production constatée »"
        },
        {
          "type": "p",
          "text": "Le coût d’un élément de production s’écrit comme un produit de trois facteurs : C = V × Q × P, où V est le volume de production, Q la quantité de facteur consommée par unité produite et P le prix unitaire du facteur. L’écart total compare le coût réel de la production réelle au coût préétabli de la production PRÉVUE. Cet écart total se décompose en deux écarts d’interprétation différente :"
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "MÉTHODE — Les deux niveaux de décomposition (PCG)",
          "text": "**Écart total = Écart sur volume + Écart relatif à la production constatée (« écart global »).**\n• Écart sur volume = (Vr − Vp) × Qp × Pp : variation de coût due au seul niveau de production. Il n’est PAS imputable au responsable de production (il subit le programme décidé par le commercial).\n• Écart relatif à la production constatée (« global ») = coût réel − coût préétabli de la PRODUCTION RÉELLE : c’est l’écart réellement pilotable, décomposé ensuite en écart sur quantité et écart sur prix.\n*Convention : l’effet quantité est valorisé au prix prévu ; l’effet prix est rapporté aux quantités réelles.*"
        },
        {
          "type": "p",
          "text": "■ APPLICATION 4 — Écarts sur coûts de production (matières, MOD, charges indirectes)"
        },
        {
          "type": "p",
          "text": "Les calculs des sections 3.2 et 3.3 s’appuient sur un même exemple. Une entreprise fabrique le produit A. La fiche de coût standard, établie pour une production normale de 2 000 unités, est la suivante :"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Quantité standard**",
            "**Coût unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Matières premières",
              "2 kg / unité",
              "13 €/kg",
              "26,00 €"
            ],
            [
              "Main-d’œuvre directe",
              "0,5 h / unité",
              "36 €/h",
              "18,00 €"
            ],
            [
              "Centre usinage (CI)",
              "0,5 UO / unité",
              "60 €/UO",
              "30,00 €"
            ],
            [
              "**Coût de production standard**",
              "",
              "",
              "**74,00 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Durant la période, 1 900 produits A ont été réellement fabriqués. Consommations réelles : 3 990 kg de matière pour 51 471 € (soit 12,90 €/kg) ; 1 200 h de MOD pour 43 800 € (soit 36,50 €/h) ; centre usinage : 1 200 UO pour 72 600 € (soit 60,50 €/UO)."
        },
        {
          "type": "p",
          "text": "Travail à faire : calculer et décomposer les écarts sur matières premières, sur main-d'œuvre directe et sur charges indirectes (budget simple puis budget flexible), et qualifier chaque sous-écart."
        },
        {
          "type": "h3",
          "text": "3.2 Les écarts sur matières premières"
        },
        {
          "type": "p",
          "text": "**Corrigé — écarts sur coûts de production :**"
        },
        {
          "type": "p",
          "text": "Quantité préétablie de la production prévue : 2 × 2 000 = 4 000 kg, soit 4 000 × 13 = 52 000 €. Quantité allouée à la production réelle : 2 × 1 900 = 3 800 kg, soit 3 800 × 13 = 49 400 €."
        },
        {
          "type": "p",
          "text": "**a. Écart total et ventilation volume / global**"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Coût réel (prod. réelle)",
              "3 990 kg × 12,90 €",
              "51 471 €",
              "réf."
            ],
            [
              "Coût préétabli (prod. prévue)",
              "4 000 kg × 13 €",
              "52 000 €",
              "réf."
            ],
            [
              "Écart total",
              "51 471 − 52 000",
              "− 529 €",
              "(F)"
            ],
            [
              "dont écart sur volume",
              "(3 800 − 4 000) × 13",
              "− 2 600 €",
              "(F)"
            ],
            [
              "dont écart global (prod. réelle)",
              "51 471 − 49 400",
              "+ 2 071 €",
              "(D)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**b. Décomposition de l’écart global (relatif à la production constatée)**"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Formule**",
            "**Mesure**"
          ],
          "rows": [
            [
              "Écart sur quantité",
              "(Qr − Qs) × Cs",
              "Sur-/sous-consommation de matière"
            ],
            [
              "Écart sur prix (coût)",
              "(Cr − Cs) × Qr",
              "Dérive du prix d’achat"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart sur prix",
              "(12,90 − 13) × 3 990",
              "− 399 €",
              "(F)"
            ],
            [
              "Écart sur quantité",
              "(3 990 − 3 800) × 13",
              "+ 2 470 €",
              "(D)"
            ],
            [
              "**Écart global**",
              "**− 399 + 2 470**",
              "**+ 2 071 €**",
              "**(D)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Lecture : le prix d’achat a baissé (effet favorable, − 399 €) mais la consommation par produit a dérapé (2,1 kg réels contre 2 kg standard : + 2 470 € défavorable). La dérive des quantités, masquée au niveau de l’écart total (− 529 €, en apparence favorable) par la baisse du prix et la baisse du volume, relève vraisemblablement de l’atelier ou des approvisionnements.*"
        },
        {
          "type": "h3",
          "text": "3.3 Les écarts sur main-d’œuvre directe"
        },
        {
          "type": "p",
          "text": "Même logique, vocabulaire propre à la MOD : l’écart sur quantité devient écart sur temps, l’écart sur prix devient écart sur taux horaire. Heures préétablies de la production prévue : 0,5 × 2 000 = 1 000 h (36 000 €) ; heures allouées à la production réelle : 0,5 × 1 900 = 950 h (34 200 €)."
        },
        {
          "type": "table",
          "headers": [
            "**Niveau**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Coût réel",
              "1 200 h × 36,50 €",
              "43 800 €",
              "réf."
            ],
            [
              "Coût préétabli (prod. prévue)",
              "1 000 h × 36 €",
              "36 000 €",
              "réf."
            ],
            [
              "Écart total",
              "43 800 − 36 000",
              "+ 7 800 €",
              "(D)"
            ],
            [
              "dont écart sur volume",
              "(950 − 1 000) × 36",
              "− 1 800 €",
              "(F)"
            ],
            [
              "dont écart global",
              "43 800 − 34 200",
              "+ 9 600 €",
              "(D)"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart (global)**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart sur taux",
              "(36,50 − 36) × 1 200",
              "+ 600 €",
              "(D)"
            ],
            [
              "Écart sur temps (rendement)",
              "(1 200 − 950) × 36",
              "+ 9 000 €",
              "(D)"
            ],
            [
              "**Écart global**",
              "**+ 600 + 9 000**",
              "**+ 9 600 €**",
              "**(D)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*L’écart sur temps est très défavorable : 1 200 h consommées contre 950 h allouées, soit une perte de rendement de la main-d’œuvre (0,63 h/unité au lieu de 0,5 h). C’est le sous-écart déterminant à expliquer.*"
        },
        {
          "type": "h3",
          "text": "3.4 Les écarts sur charges indirectes : du budget simple au budget flexible"
        },
        {
          "type": "p",
          "text": "Les charges indirectes d’un centre sont obtenues en multipliant un nombre d’unités d’œuvre (UO) par le coût de l’UO. On peut d’abord les traiter comme un coût direct (budget simple, trois sous-écarts). Mais elles comportent une part importante de charges fixes : le budget flexible permet alors d’isoler l’effet de ces charges fixes (décomposition en quatre sous-écarts)."
        },
        {
          "type": "p",
          "text": "Données du centre usinage. Prévu : production 2 000 unités, 0,5 UO/unité soit activité prévue 1 000 UO, coût de l’UO 60 € → 60 000 €. Réel : production 1 900 unités, activité réelle 1 200 UO, coût total 72 600 € (60,50 €/UO)."
        },
        {
          "type": "p",
          "text": "a. Le budget simple (3 sous-écarts) :"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart / volume",
              "(1 900 − 2 000) × 0,5 × 60",
              "− 3 000 €",
              "(F)"
            ],
            [
              "Écart / rendement",
              "1 900 × (0,6316 − 0,5) × 60",
              "+ 15 000 €",
              "(D)"
            ],
            [
              "Écart / coût",
              "1 900 × 0,6316 × (60,50 − 60)",
              "+ 600 €",
              "(D)"
            ],
            [
              "**Écart total CI**",
              "**72 600 − 60 000**",
              "**+ 12 600 €**",
              "**(D)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Nr = 1 200 / 1 900 = 0,6316 UO par produit. L’écart / coût (+ 600 €) reste ambigu : il assimile toutes les charges à des charges variables. Or les charges indirectes sont en grande partie fixes ; il faut donc le décomposer grâce au budget flexible.*"
        },
        {
          "type": "p",
          "text": "b. Le budget flexible :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Budget flexible",
          "text": "Budget établi pour plusieurs niveaux d’activité, distinguant charges variables et charges fixes, construit par rapport à l’activité normale. La droite Y = a·X + CF donne le montant des charges indirectes (Y) pour une activité X, a étant le coût variable de l’UO.\n**Ici : pour 1 000 UO, total = 60 000 € dont 20 000 € fixes → charges variables 40 000 €, soit a = 40 €/UO. → Y = 40·X + 20 000.**\n*Vérification (X = 1 000) : 40 × 1 000 + 20 000 = 60 000 €. Pour l’activité réelle X = 1 200 : Y = 40 × 1 200 + 20 000 = 68 000 €.*"
        },
        {
          "type": "p",
          "text": "L’écart / coût (+ 600 €) du budget simple se décompose alors en deux sous-écarts :"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart / activité (imputation CF)",
              "Budget flexible (Ar) − budget simple (Ar) = 68 000 − 1 200 × 60",
              "− 4 000 €",
              "(F)"
            ],
            [
              "Écart / budget",
              "Coût réel − budget flexible (Ar) = 72 600 − 68 000",
              "+ 4 600 €",
              "(D)"
            ],
            [
              "**= écart / coût**",
              "**− 4 000 + 4 600**",
              "**+ 600 €**",
              "**(D)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**c. Les quatre sous-écarts du centre**"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Montant**",
            "**Sens**",
            "**Interprétation**"
          ],
          "rows": [
            [
              "Écart / volume",
              "− 3 000 €",
              "(F)",
              "Production inférieure au prévu"
            ],
            [
              "Écart / rendement",
              "+ 15 000 €",
              "(D)",
              "Sur-consommation d’UO"
            ],
            [
              "Écart / activité",
              "− 4 000 €",
              "(F)",
              "Suractivité : meilleure absorption des CF"
            ],
            [
              "Écart / budget",
              "+ 4 600 €",
              "(D)",
              "Dérive des dépenses (CV et CF)"
            ],
            [
              "**Écart total CI**",
              "**+ 12 600 €**",
              "**(D)**",
              ""
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Décomposer encore l’écart sur budget (hors attendu DCG)",
          "text": "L’écart sur budget (+ 4 600 €) est lui-même la somme d’un écart sur charges variables indirectes et d’un écart sur charges fixes indirectes : CV 50 600 − 48 000 = + 2 600 € (D) et CF 22 000 − 20 000 = + 2 000 € (D). L’expression « écart sur charges variables » parfois employée pour le seul écart sur budget est donc impropre."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/09.png",
          "alt": "3. Les écarts sur coûts de production",
          "width": 1034,
          "height": 892,
          "caption": "Figure 9 — Décomposition de l’écart sur charges indirectes : du budget simple au budget flexible"
        },
        {
          "type": "h3",
          "text": "3.5 Le cas des frais généraux"
        },
        {
          "type": "p",
          "text": "Les frais généraux (coûts administratifs et hors production) sont des charges fixes, souvent discrétionnaires. Étant entièrement fixes, leur analyse est immédiate : aucune décomposition n’est nécessaire, on compare simplement le réalisé au budgété."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Écart sur frais généraux",
          "text": "Une bibliothèque universitaire reçoit un budget de 100 000 € pour le renouvellement de ses ouvrages en N. Le budget réellement consommé est de 89 730 €.\nTravail à faire : calculer l'écart sur frais généraux entre le budget consommé et la dotation, et le qualifier.\n**Corrigé — écart sur frais généraux :**\n**Écart sur frais = 89 730 − 100 000 = − 10 270 € (F) : économie par rapport à la dotation. Aucune ventilation volume/prix.**"
        },
        {
          "type": "h3",
          "text": "3.6 Les en-cours de production : le raisonnement en production équivalente (approfondissement)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POUR ALLER PLUS LOIN",
          "text": "*Le traitement des en-cours dépasse les attendus stricts de la plupart des sujets DCG UE11 ; il est présenté ici pour les candidats visant la maîtrise complète (et utile en DSCG). Le principe : ramener les en-cours à un équivalent de produits terminés, élément de coût par élément de coût.*"
        },
        {
          "type": "p",
          "text": "Produit B, fiche standard (production normale 5 000) : MP 3 kg × 5 € = 15 € ; centre usinage 0,25 UO × 80 € (dont 20 € fixes) = 20 € ; coût 35 €. Les matières sont intégrées dès le début du cycle. Pendant la période : production achevée 4 000 ; en-cours final 200 (avancement 60 %) ; en-cours initial 300 (avancement 80 %). Charges réelles : MP 14 500 kg pour 71 050 € ; usinage 950 UO pour 95 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Production achevée**",
            "**− En-cours initial**",
            "**+ En-cours final**",
            "**Production équivalente**"
          ],
          "rows": [
            [
              "Matières (100 %)",
              "4 000",
              "300",
              "200",
              "3 900"
            ],
            [
              "Usinage (avancement)",
              "4 000",
              "300 × 80 % = 240",
              "200 × 60 % = 120",
              "3 880"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Écart total MP = 14 500 × 4,90 − 15 000 × 5 = 71 050 − 75 000 = − 3 950 € (F). Décomposition (quantité allouée = 3 900 × 3 = 11 700 kg) :"
        },
        {
          "type": "table",
          "headers": [
            "**Sous-écart**",
            "**Calcul**",
            "**Montant**",
            "**Sens**"
          ],
          "rows": [
            [
              "Écart sur coût unitaire",
              "(4,90 − 5) × 14 500",
              "− 1 450 €",
              "(F)"
            ],
            [
              "Écart sur quantité",
              "(14 500 − 11 700) × 5",
              "+ 14 000 €",
              "(D)"
            ],
            [
              "Écart sur volume",
              "(3 900 − 5 000) × 15",
              "− 16 500 €",
              "(F)"
            ],
            [
              "**Écart total MP**",
              "",
              "**− 3 950 €**",
              "**(F)**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Le centre usinage se traite de même (activité allouée = 3 880 × 0,25 = 970 UO ; écart total = 95 000 − 100 000 = − 5 000 € (F)). Seule la base de calcul change : la production équivalente remplace la production achevée.*"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/10.png",
          "alt": "3. Les écarts sur coûts de production",
          "width": 1932,
          "height": 513,
          "caption": "Figure 10 — Les en-cours de production : équivalents ECI / ECF par période"
        },
        {
          "type": "h3",
          "text": "3.7 Synthèse des écarts sur coûts de production"
        },
        {
          "type": "p",
          "text": "Le tableau consolide les écarts du produit A et illustre l’égalité fondamentale Écart total = Écart sur volume + Écart relatif à la production constatée."
        },
        {
          "type": "table",
          "headers": [
            "**Élément de coût**",
            "**Écart total**",
            "**Écart sur volume**",
            "**Écart relatif à la prod. constatée**"
          ],
          "rows": [
            [
              "Matières premières",
              "− 529 € (F)",
              "− 2 600 € (F)",
              "+ 2 071 € (D)"
            ],
            [
              "Main-d’œuvre directe",
              "+ 7 800 € (D)",
              "− 1 800 € (F)",
              "+ 9 600 € (D)"
            ],
            [
              "Charges indirectes (usinage)",
              "+ 12 600 € (D)",
              "− 3 000 € (F)",
              "+ 15 600 € (D)"
            ],
            [
              "**Coût de production**",
              "**+ 19 871 € (D)**",
              "**− 7 400 € (F)**",
              "**+ 27 271 € (D)**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Ce qu’il faut retenir",
          "text": "• L’écart sur volume (− 7 400 € F) traduit la seule baisse du programme de production (1 900 au lieu de 2 000) : il n’est PAS imputable aux responsables d’atelier.\n• L’écart relatif à la production constatée (+ 27 271 € D) est l’écart pilotable : rendement MOD et usinage dégradés, prix/taux en dérive. C’est lui qu’il faut expliquer et corriger.\n**• Réflexe de contrôle : pour chaque élément, somme des sous-écarts = écart total. Toujours préciser le sens (F) ou (D).**"
        }
      ]
    },
    {
      "id": "4-interpretation-pilotage-et-limites",
      "title": "4. Interprétation, pilotage et limites",
      "blocks": [
        {
          "type": "p",
          "text": "Calculer et décomposer les écarts n’est qu’une étape. Le véritable apport du contrôle budgétaire réside dans l’exploitation des résultats : comprendre pourquoi les écarts se sont formés, déterminer qui en est responsable, décider des actions correctives et en rendre compte. C’est la dimension la plus valorisée par la réforme."
        },
        {
          "type": "h3",
          "text": "4.1 La recherche des causes"
        },
        {
          "type": "p",
          "text": "Un écart est un symptôme, non un diagnostic. Avant d’agir, il faut remonter aux causes — internes (organisation, méthodes, qualité) ou externes (marché, conjoncture, fournisseurs). Un outil simple, l’analyse causale en arête de poisson, aide à structurer cette recherche."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/11.png",
          "alt": "4. Interprétation, pilotage et limites",
          "width": 1440,
          "height": 720,
          "caption": "Figure 11 — Recherche des causes et des responsabilités d’un écart (diagramme causal, méthode des 5M)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Relier les écarts à leurs causes",
          "text": "**Écart sur temps MOD (+ 9 000 €) : formation insuffisante des opérateurs ? cadence ralentie ? — Écart sur quantité de matière (+ 2 470 €) : taux de rebut élevé, lien direct avec la qualité. — Écart sur prix de vente défavorable : politique de remises décidée par le service commercial pour gagner des volumes.**"
        },
        {
          "type": "h3",
          "text": "4.2 L’analyse des responsabilités"
        },
        {
          "type": "p",
          "text": "Chaque écart doit être rattaché au centre qui le maîtrise réellement. C’est une exigence d’équité : on ne peut évaluer un responsable que sur ce qu’il contrôle."
        },
        {
          "type": "table",
          "headers": [
            "**Écart**",
            "**Responsable probable**",
            "**Contrôlable ?**"
          ],
          "rows": [
            [
              "Écart sur prix des matières",
              "Direction des achats",
              "Oui (négociation fournisseurs)"
            ],
            [
              "Écart sur quantité / rendement",
              "Direction de la production",
              "Oui (gaspillage, réglages)"
            ],
            [
              "Écart sur temps / taux MOD",
              "Production / RH",
              "Oui (organisation, recrutement)"
            ],
            [
              "Écart sur volume",
              "Direction commerciale",
              "Non imputable à la production"
            ],
            [
              "Écart sur prix de vente / mix",
              "Direction commerciale",
              "Oui (politique de prix)"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Le piège de l’écart sur volume",
          "text": "L’écart sur volume des coûts ne doit jamais être reproché au directeur de production : il subit le volume décidé par le commercial. L’imputer à la production serait une erreur de management qui démotiverait un responsable injustement sanctionné."
        },
        {
          "type": "h3",
          "text": "4.3 L’écart sur marge commerciale : évaluer le commercial à coût prévu"
        },
        {
          "type": "p",
          "text": "Comment évaluer équitablement la force de vente ? Pas sur le chiffre d’affaires (qui incite à casser les prix), ni sur la marge réelle (qui inclut des variations de coûts dont elle n’est pas responsable). La solution : l’écart sur marge commerciale, calculé sur la marge réelle à coût prévu."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Écart sur marge commerciale",
          "text": "Écart entre la marge réelle évaluée au coût standard (Mr/cp = Vr × (Pr − Cup)) et la marge prévue (Mp = Vp × (Pp − Cup)). En neutralisant l’effet des coûts, il isole la seule performance commerciale."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-controle-budgetaire-ecarts/12.png",
          "alt": "4. Interprétation, pilotage et limites",
          "width": 1440,
          "height": 760,
          "caption": "Figure 12 — Logique de l’écart sur marge commerciale et sa décomposition volume / prix"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Écart sur marge commerciale",
          "text": "Ventes prévues : 80 unités à 12 € (coût de production prévu 7 €). Ventes réelles : 100 unités à 10 €.\nTravail à faire : calculer la marge prévue, la marge réelle sur coût préétabli, puis l'écart sur marge commerciale et le qualifier.\n**Corrigé — écart sur marge commerciale :**\nMarge prévue = 80 × (12 − 7) = 400 €. Marge réelle sur coût préétabli = 100 × (10 − 7) = 300 €. Écart sur marge commerciale = 300 − 400 = − 100 € (D)."
        },
        {
          "type": "p",
          "text": "Décomposition de cet écart :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉCOMPOSITION — Effet volume et effet prix",
          "text": "Effet volume = (100 − 80) × 5 = + 100 € (F). Effet prix = (10 − 12) × 100 = − 200 € (D). La baisse de prix détruit deux fois plus de marge que la hausse de volume n’en crée : la performance commerciale est négative, masquée par la baisse des coûts de production.\n**REMARQUE — Le paradoxe résolu**\nVoici la clé de l’énigme : un chiffre d’affaires peut progresser alors que l’action commerciale détruit de la marge. Ici, la hausse de volume (+ 100 €) ne compense pas la baisse de prix (− 200 €) : l’écart sur marge commerciale est défavorable (− 100 €). Sans la baisse des coûts de production, le résultat de l’entreprise aurait reculé d’autant.\n**POINT EXAMEN — Point examen**\nL’écart sur marge commerciale est égal à la somme de trois écarts : écart sur prix, écart volume « sur prix » et écart volume « sur coût ». Savoir le démontrer algébriquement est régulièrement valorisé."
        },
        {
          "type": "h3",
          "text": "4.4 Les plans d’action correctifs et le pilotage de la performance"
        },
        {
          "type": "p",
          "text": "L’analyse débouche sur des décisions. Un bon plan d’action est ciblé (il traite les causes, pas les symptômes), responsabilisé (un pilote par action) et suivi (indicateurs et échéances)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Plan d’action correctif",
          "text": "**Production : réduire les rebuts et former les opérateurs pour revenir aux standards de consommation et de temps. Commercial : encadrer la politique de remises et passer à un intéressement sur la marge plutôt que sur le chiffre d’affaires. Achats : sécuriser le prix de la matière par un contrat-cadre pluriannuel.**"
        },
        {
          "type": "h3",
          "text": "4.5 La communication des résultats"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire n’a d’effet que si ses conclusions sont communiquées clairement aux décideurs. Le support privilégié est le tableau de bord, qui sélectionne quelques indicateurs clés et signale les écarts significatifs (gestion par exception). Le programme réformé insiste : « la rédaction d’un écrit structuré est aussi importante que les calculs »."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — L’écrit argumenté",
          "text": "Un sujet de DCG demande fréquemment de « rédiger une note au directeur ». Structurez : (1) constat chiffré, (2) analyse des causes et responsabilités, (3) recommandations hiérarchisées. C’est la compétence 3.3 dans toute sa dimension."
        },
        {
          "type": "h3",
          "text": "4.6 Du diagnostic d’écarts au tableau de bord de suivi"
        },
        {
          "type": "p",
          "text": "L’analyse des écarts n’est pas une fin en soi : elle alimente un dispositif de pilotage permanent. Le référentiel (compétence 3.3) attend du candidat qu’il sache « proposer des indicateurs de suivi ». Concrètement, chaque écart significatif doit se traduire en un indicateur suivi périodiquement dans un tableau de bord, assorti d’une cible, d’un seuil d’alerte et d’un responsable. On passe ainsi du constat ponctuel (l’écart du mois) au pilotage continu (la trajectoire de l’indicateur)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Indicateur de suivi",
          "text": "Grandeur quantifiée, mesurée à intervalles réguliers, qui traduit un écart ou un facteur de performance en signal d’alerte exploitable. Il relie le diagnostic d’écarts (a posteriori) au pilotage prospectif (gestion par exception en temps réel)."
        },
        {
          "type": "h4",
          "text": "Construire le tableau de bord à partir des écarts"
        },
        {
          "type": "p",
          "text": "La logique est descendante : on part des écarts les plus significatifs identifiés dans les Parties II et III, on remonte à leur cause, puis on choisit l’indicateur qui anticipe le mieux la dérive. Le tableau de bord ne reprend donc pas tous les écarts, mais sélectionne les quelques signaux qui déclenchent une action — application directe du principe de gestion par exception."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Un tableau de bord de suivi des écarts",
          "text": "À partir de son analyse, le contrôleur retient quelques indicateurs clés reliés aux écarts les plus sensibles :"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur de suivi**",
            "**Écart d’origine**",
            "**Cible**",
            "**Seuil d’alerte**",
            "**Responsable**",
            "**Fréquence**"
          ],
          "rows": [
            [
              "Prix de vente net",
              "Écart sur prix (CA)",
              "= prix prévu",
              "< prix prévu",
              "Dir. commerciale",
              "Hebdo"
            ],
            [
              "Taux de rebut matière",
              "Écart sur quantité MP",
              "= standard",
              "> standard",
              "Production",
              "Quotidien"
            ],
            [
              "Rendement MOD",
              "Écart sur temps",
              "= temps standard",
              "> temps standard",
              "Production / RH",
              "Hebdo"
            ],
            [
              "Taux d’activité du centre",
              "Écart sur activité",
              "100 %",
              "< 90 %",
              "Production",
              "Mensuel"
            ],
            [
              "Marge commerciale",
              "Écart sur marge",
              "= marge préétablie",
              "< marge préétablie",
              "Dir. générale",
              "Mensuel"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Du tableau de bord à l’action",
          "text": "Le tableau de bord n’a de valeur que par les décisions qu’il déclenche. Lorsqu’un indicateur franchit son seuil d’alerte, il appelle une action correctrice documentée : c’est la boucle « mesurer → alerter → décider → corriger » qui referme le cycle de pilotage. Un suivi rapproché du prix de vente net et de la marge commerciale révèle très tôt une guerre des prix qui détruit du chiffre d’affaires.\n**POINT EXAMEN — Lien avec le chapitre « Les tableaux de bord et le reporting »**\nLa construction détaillée des tableaux de bord (choix des indicateurs, maquettes, reporting) est approfondie dans un chapitre dédié. Ici, l’enjeu est seulement de montrer que l’analyse des écarts débouche naturellement sur un dispositif de suivi : c’est l’articulation attendue par le référentiel au titre de la compétence 3.3."
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire traditionnel, malgré sa puissance, fait l’objet de critiques contemporaines nourries. La réforme invite à porter sur lui un regard critique et à le replacer dans le cadre élargi de la performance globale."
        },
        {
          "type": "h3",
          "text": "4.7 Les limites du contrôle budgétaire traditionnel"
        },
        {
          "type": "ul",
          "items": [
            "**Lourdeur et lenteur :**le cycle annuel est rigide ; attendre la clôture pour réagir peut être coûteux.",
            "**Focalisation court terme :**le pilotage par les écarts privilégie le court terme au détriment de la stratégie.",
            "**Indicateurs exclusivement financiers :**les écarts ignorent la qualité, la satisfaction client, l’impact environnemental.",
            "**Hypothèse de stabilité :**le budget suppose un environnement prévisible, de moins en moins vrai."
          ]
        },
        {
          "type": "h3",
          "text": "4.8 Les comportements opportunistes"
        },
        {
          "type": "p",
          "text": "Le budget, parce qu’il sert à évaluer les hommes, induit des comportements stratégiques :"
        },
        {
          "type": "ul",
          "items": [
            "**Le « slack » budgétaire :**sous-estimer ses objectifs pour les atteindre facilement.",
            "**L’effet cliquet :**ne pas trop sur-performer pour ne pas voir ses objectifs relevés l’année suivante.",
            "**La consommation de fin d’exercice :**dépenser un budget non utilisé pour ne pas le voir réduit.",
            "**Les jeux sur la décomposition :**chercher à faire porter les écarts défavorables sur un autre centre."
          ]
        },
        {
          "type": "h3",
          "text": "4.9 Les critiques contemporaines et le Beyond Budgeting"
        },
        {
          "type": "p",
          "text": "Face à ces limites, des approches alternatives ont émergé. La plus connue, le Beyond Budgeting, propose d’abandonner le budget annuel rigide au profit d’un pilotage plus souple et continu."
        },
        {
          "type": "table",
          "headers": [
            "**DÉFINITION — Beyond Budgeting**Modèle de gestion qui remet en cause le budget annuel traditionnel et lui substitue des objectifs relatifs (par rapport au marché ou aux concurrents), des prévisions glissantes (rolling forecasts) et une décentralisation accrue des décisions."
          ],
          "rows": [
            [
              "**Contrôle budgétaire traditionnel**",
              "**Beyond Budgeting**"
            ],
            [
              "Budget annuel figé",
              "Prévisions glissantes (rolling forecasts)"
            ],
            [
              "Objectifs absolus négociés",
              "Objectifs relatifs (benchmarks)"
            ],
            [
              "Contrôle centralisé a posteriori",
              "Pilotage décentralisé en continu"
            ],
            [
              "Récompense de l’atteinte du budget",
              "Récompense de la performance relative"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "4.10 Le pilotage en temps réel"
        },
        {
          "type": "p",
          "text": "Les systèmes d’information modernes permettent de calculer les écarts en continu, et non plus seulement à la clôture. Le contrôle budgétaire devient prédictif (anticiper les dérives) plutôt que rétrospectif (les constater). Cette évolution est indissociable de la transformation numérique traitée dans le focus ci-après."
        },
        {
          "type": "h3",
          "text": "4.11 Contrôle budgétaire et performance globale"
        },
        {
          "type": "p",
          "text": "La principale évolution attendue par la réforme est l’élargissement du contrôle budgétaire à la performance globale : aux côtés de la performance économique, on intègre désormais les dimensions sociale et environnementale (approche ESG / RSE). Le contrôle budgétaire ne pilote plus seulement le profit, mais la création de valeur durable pour l’ensemble des parties prenantes."
        },
        {
          "type": "ul",
          "items": [
            "**Budgets carbone :**fixer des objectifs d’émissions et calculer des écarts environnementaux.",
            "**Indicateurs extra-financiers :**part de matières recyclées, taux de rebut, consommation d’énergie.",
            "**Parties prenantes :**intégrer les attentes des clients, salariés, fournisseurs et de la société."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus — Le contrôle budgétaire à l’ère numérique**"
        },
        {
          "type": "p",
          "text": "Le guide pédagogique souligne l’importance de la dimension numérique. Les outils digitaux transforment radicalement l’analyse des écarts, en la rendant plus rapide, plus fine et plus prédictive."
        },
        {
          "type": "table",
          "headers": [
            "**Outil**",
            "**Apport pour l’analyse des écarts**"
          ],
          "rows": [
            [
              "Tableur (Excel)",
              "Calcul et automatisation des écarts, simulations, tableaux croisés."
            ],
            [
              "ERP / PGI",
              "Intégration en temps réel des données réelles (ventes, stocks, production)."
            ],
            [
              "EPM (Enterprise Performance Mgt)",
              "Pilotage budgétaire, prévisions glissantes, consolidation des écarts."
            ],
            [
              "Business Intelligence / Power BI",
              "Tableaux de bord interactifs, visualisation dynamique des écarts."
            ],
            [
              "Data Analytics",
              "Détection automatique des écarts significatifs, analyse des causes."
            ],
            [
              "Intelligence artificielle",
              "Prévisions affinées, détection d’anomalies, alertes prédictives."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "L’écart augmenté par la donnée",
          "text": "Là où le contrôleur calculait jadis quelques écarts mensuels sur tableur, il dispose aujourd’hui de tableaux de bord actualisés en continu qui signalent automatiquement les dérives (gestion par exception automatisée) et en suggèrent les causes probables. Le rôle du contrôleur se déplace du calcul vers l’analyse et le conseil.\n**ILLUSTRATION — Vers le pilotage numérique**\nDe plus en plus d’entreprises déploient un tableau de bord (type Power BI) connecté à l’ERP : les écarts sur coûts sont mis à jour quotidiennement, avec une alerte automatique dès qu’un écart sur rendement dépasse un seuil — permettant d’agir en cours de mois plutôt qu’à la clôture."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus durabilité — Performance globale et écarts extra-financiers**"
        },
        {
          "type": "p",
          "text": "Le guide pédagogique de l’UE 11 impose de « faire le lien avec des éléments liés à la durabilité ». Le contrôle budgétaire, longtemps cantonné à la performance économique, s’étend aujourd’hui aux dimensions environnementale et sociale."
        },
        {
          "type": "h4",
          "text": "Des écarts environnementaux"
        },
        {
          "type": "ul",
          "items": [
            "**Coût du traitement des déchets :**écarts sur le volume de chutes de matière et leur coût de valorisation ou d’élimination.",
            "**Budget carbone :**comparer les émissions réelles aux émissions prévues, calculer un écart d’empreinte.",
            "**Arbitrage d’investissement :**un investissement dans des machines moins énergivores augmente les charges fixes (Δ budget potentiellement défavorable) mais réduit les émissions de CO₂ — la performance globale réconcilie ces deux lectures."
          ]
        },
        {
          "type": "h4",
          "text": "Des écarts au service de la performance durable"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS DURABILITÉ — Réduire un écart, c’est aussi servir l’environnement",
          "text": "Un écart sur quantité de matière défavorable n’est pas qu’un problème de coût : chaque kilogramme gaspillé est aussi un impact environnemental. Réduire cet écart améliore simultanément la performance économique (moins de matière achetée) et la performance environnementale (moins de déchets). À l’inverse, une entreprise peut accepter un écart sur budget défavorable (machines plus précises, donc plus coûteuses) s’il réduit durablement le taux de rebut : un arbitrage de performance globale qui dépasse la logique budgétaire de court terme."
        },
        {
          "type": "p",
          "text": "*La « performance globale » consiste précisément à ne plus piloter le seul résultat financier, mais à articuler performance économique, sociale et environnementale au service de toutes les parties prenantes.*"
        }
      ]
    },
    {
      "id": "tableau-recapitulatif-des-ecarts",
      "title": "Tableau récapitulatif des écarts",
      "blocks": [
        {
          "type": "p",
          "text": "Pour chaque écart, retenir trois choses : la formule de calcul, ce que l’écart mesure, et la grille d’interprétation managériale associée."
        },
        {
          "type": "h3",
          "text": "Formules clés"
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
            "**Sens de l’écart :**un écart de coût positif est DÉFAVORABLE ; ne jamais confondre signe arithmétique et sens économique.",
            "**Production de référence :**pour l’écart global et ses sous-écarts, comparer au coût préétabli de la production RÉELLE, pas de la production prévue.",
            "**Budget flexible :**l’écart sur budget se calcule par rapport au budget adapté à l’activité réelle, non au budget initial.",
            "**Oublier la composition :**sur plusieurs produits, un écart de volume favorable peut cacher une dégradation du mix.",
            "**En-cours :**hors programme réformé — ne pas les introduire dans une copie."
          ]
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
