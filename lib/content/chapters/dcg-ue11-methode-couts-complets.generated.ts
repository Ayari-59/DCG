// Généré par scripts/convert-docx.mjs depuis CHAPITRE_05__LA_METHODE_DES_COUTS_COMPLETS.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-methode-couts-complets",
  "level": "DCG",
  "ue": "UE11",
  "number": 5,
  "title": "La méthode des coûts complets",
  "description": "",
  "durationMin": 35,
  "sections": [
    {
      "id": "introduction",
      "title": "Introduction",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 2 du référentiel — calcul, analyse et pilotage des coûts. Compétence : mettre en œuvre la méthode des centres d’analyse (sections homogènes) pour déterminer un coût de revient et un résultat analytique.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Limites du programme : les en-cours de production sont exclus ; l’analyse des déchets et produits résiduels est conservée.\n• Chapitre socle : il fournit la grammaire commune mobilisée ensuite par l’ABC, les coûts partiels et l’imputation rationnelle.\n• Place dans la progression : chapitre 5 du cours — il ouvre l’étude des méthodes de coûts après le modèle volume-coût-profit (chap. 3) et l’analyse du risque (chap. 4), et précède la méthode ABC (chap. 6), l’imputation rationnelle (chap. 7) et les coûts partiels (chap. 8).\n• Distinguer charges directes et indirectes et justifier leur traitement différencié.\n• Construire un tableau de répartition (primaire puis secondaire), y compris en présence de prestations réciproques.\n• Choisir une unité d’œuvre pertinente et calculer son coût ; distinguer coût d’UO et taux de frais.\n• Tenir les fiches de stock (CMUP, PEPS) et calculer les variations de stocks.\n• Dérouler la chaîne coût d’achat → coût de production → coût de revient → résultat analytique.\n• Interpréter les coûts pour la décision et porter un regard critique sur la méthode.\n• Relier le calcul des coûts aux enjeux numériques et de durabilité."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "La méthode des coûts complets est la méthode fondatrice du calcul des coûts. Élaborée pour les entreprises industrielles du début du XXᵉ siècle et formalisée par le Plan comptable général (jusqu’en 1982) sous le nom de méthode des centres d’analyse — ou méthode des sections homogènes — elle a vocation à s’appliquer à toutes les organisations, quelle que soit leur activité."
        },
        {
          "type": "p",
          "text": "Un coût complet réunit la totalité des charges consommées par un objet de coût. Son calcul est, par nature, relativement méthodique : certaines charges sont facilement identifiables (les charges directes), d’autres sont communes à plusieurs objets (les charges indirectes) ; certaines sont variables, d’autres fixes. Attribuer à un même objet toutes les charges qui le concernent suit donc un cheminement rigoureux."
        },
        {
          "type": "p",
          "text": "Pour comprendre ce cheminement, il faut garder en tête **l’objectif** pour lequel les coûts complets sont calculés. La méthode répond à deux finalités : **connaître la rentabilité** d’une activité (le coût de revient est-il inférieur au chiffre d’affaires ?) et **valoriser les stocks** au bilan, comme l’exige la comptabilité financière."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/01.png",
          "alt": "Figure du cours",
          "width": 1440,
          "height": 420,
          "caption": "Figure 1 — La logique d’ensemble : le calcul épouse le processus de production"
        },
        {
          "type": "p",
          "text": "Le chapitre s’organise en quatre parties, selon une progression « comprendre → calculer → interpréter → critiquer ». La Partie 1 pose les principes et les finalités de la méthode. La Partie 2 détaille le traitement des charges indirectes par les centres d’analyse. La Partie 3 construit les coûts (achat, stocks, production, revient, résultat) et traite les situations particulières. La Partie 4 exploite les coûts pour la décision, intègre les enjeux numériques et de durabilité, et porte une analyse critique de la méthode."
        }
      ]
    },
    {
      "id": "partie-1-comprendre-la-methode-des-couts-complets",
      "title": "Partie 1 — Comprendre la méthode des coûts complets",
      "blocks": [
        {
          "type": "p",
          "text": "***Comprendre avant de calculer.***Cette première partie répond à la question « pourquoi cette méthode existe-t-elle ? » : ses finalités, sa logique économique, ses domaines d’application et sa place dans le contrôle de gestion. Les parties II et III traiteront du « comment calculer », la partie 4 de l’interprétation et de la critique."
        },
        {
          "type": "h3",
          "text": "1.1 Origine et finalités"
        },
        {
          "type": "p",
          "text": "Pourquoi calcule-t-on des coûts complets ? Pour deux raisons essentielles, qui commandent toute la démarche."
        },
        {
          "type": "ul",
          "items": [
            "**Apprécier la rentabilité d’une activité :**on cherche à savoir si le coût de revient — le coût le plus complet, celui qui additionne la totalité des consommations nécessaires jusqu’à la livraison au client — est inférieur au chiffre d’affaires généré.",
            "**Valoriser les stocks :**pour établir ses comptes (notamment le bilan annuel), l’entreprise doit valoriser ses stocks au coût complet, c’est-à-dire à la valeur de toutes les consommations nécessaires à leur existence (prix d’achat ou de production, frais indirects, coût de stockage)."
          ]
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — Deux conséquences sur la démarche",
          "text": "Toute entreprise doit calculer un coût de revient, stade ultime des calculs de coûts complets.\nLes entreprises qui ont des stocks doivent calculer un coût complet correspondant à chacun de leurs stocks."
        },
        {
          "type": "p",
          "text": "Autrement dit, c’est l’existence (ou non) de stocks qui guide la démarche de calcul. Cette structure, issue de l’économie industrielle, s’adapte ensuite à tous les secteurs."
        },
        {
          "type": "h3",
          "text": "1.2 La logique économique de la méthode"
        },
        {
          "type": "p",
          "text": "La méthode épouse le processus de production. Dans une entreprise industrielle, ce processus suit un schéma traditionnel : on approvisionne des matières (stockées), on produit (les produits finis sont stockés), puis on distribue et on vend. À chaque étape comportant un stock, un coût complet doit être calculé."
        },
        {
          "type": "p",
          "text": "Le calcul fait ainsi apparaître successivement : le coût complet des matières premières stockées, le coût complet des produits finis stockés, puis le coût de revient (coût complet des produits finis vendus). Si le processus comporte des stades intermédiaires, on décompose les étapes en conséquence."
        },
        {
          "type": "h3",
          "text": "1.3 Les domaines d’application"
        },
        {
          "type": "p",
          "text": "La structure de calcul, conçue pour l’industrie, est aisément transposable aux autres types d’organisations."
        },
        {
          "type": "table",
          "headers": [
            "**Type d’entreprise**",
            "**Adaptation de la démarche**"
          ],
          "rows": [
            [
              "Industrielle",
              "Schéma complet : coût d’achat → stock matières → coût de production → stock produits finis → coût de revient."
            ],
            [
              "Commerciale",
              "Pas de production : coût de revient = coût d’achat des marchandises + frais commerciaux et administratifs."
            ],
            [
              "De services",
              "Souvent sans stocks de produits finis : on passe au coût de revient et au résultat (en-cours possibles pour les gros contrats)."
            ],
            [
              "Bancaire",
              "« Coût d’achat » des fonds (faible) replacés en prêts : la marge tient au différentiel de taux."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "1.4 La place de la méthode dans le contrôle de gestion"
        },
        {
          "type": "p",
          "text": "La méthode des coûts complets est le socle historique du calcul des coûts. Elle fournit le coût de revient indispensable à la fixation des prix et à la valorisation des stocks, et constitue le point de départ à partir duquel se comprennent les méthodes ultérieures (ABC, coûts partiels, imputation rationnelle), qui répondent à ses limites. La maîtriser, c’est disposer de la grammaire commune de toute la comptabilité de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 1",
          "text": "Deux finalités : apprécier la rentabilité (coût de revient) et valoriser les stocks.\nLa démarche suit le processus de production ; l’existence de stocks la structure.\nMéthode des centres d’analyse (= sections homogènes), socle historique du PCG."
        }
      ]
    },
    {
      "id": "partie-2-calculer-1-le-traitement-des-charges-indirectes-par",
      "title": "Partie 2 — Calculer (1) : le traitement des charges indirectes par les centres d’analyse",
      "blocks": [
        {
          "type": "p",
          "text": "La méthode repose essentiellement sur la différence de traitement entre charges directes et charges indirectes. Les charges directes sont facilement affectées aux coûts ; les charges indirectes doivent d’abord être réparties sur des centres d’analyse avant d’être imputées aux coûts."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Affectation, répartition, imputation",
          "text": "**Affectation :**attribution directe d’une charge directe à un coût (sans calcul intermédiaire).\n**Répartition :**ventilation des charges indirectes sur les centres d’analyse, à l’aide de clés de répartition.\n**Imputation :**transfert des charges des centres vers les coûts des produits, via les unités d’œuvre."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/02.png",
          "alt": "Partie 2 — Calculer (1) : le traitement des charges indirectes par les centres d’analyse",
          "width": 1733,
          "height": 481,
          "caption": "Figure 2 — Charges directes affectées ; charges indirectes réparties puis imputées"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Vocabulaire à ne pas confondre",
          "text": "On parle d’affectation pour les charges directes, et de répartition puis d’imputation pour les charges indirectes. L’affectation est conceptuellement simple mais suppose une organisation administrative en amont ; l’imputation des charges indirectes nécessite, elle, le traitement spécifique présenté ci-après."
        },
        {
          "type": "h3",
          "text": "2.1 Les centres d’analyse"
        },
        {
          "type": "p",
          "text": "Pour traiter les charges indirectes, on part de l’analyse de l’activité technique de l’entreprise — le « process », ses différentes phases. Chez l’entreprise, il faut approvisionner le matière, l’usiner et le monter, puis distribuer. L’activité est découpée en centres d’analyse, chaque centre correspondant à une opération bien identifiée. Le plus souvent, ce découpage épouse l’organisation fonctionnelle."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le centre d’analyse",
          "text": "Un centre d’analyse est une division de l’organisation dans laquelle sont regroupées des charges indirectes avant leur imputation aux coûts. Il doit être homogène : on n’y effectue qu’une seule activité, avec une seule technologie, afin que l’imputation soit pertinente."
        },
        {
          "type": "p",
          "text": "L’exigence d’homogénéité est centrale : si un atelier réalise deux tâches distinctes, il faut définir deux centres (deux « sections »), sinon les imputations risquent d’être faussées. En pratique, on procède à des regroupements raisonnables — sous peine d’une « usine à gaz » coûteuse et peu utile."
        },
        {
          "type": "h3",
          "text": "2.1.1 Centres principaux et centres auxiliaires"
        },
        {
          "type": "p",
          "text": "On distingue deux grandes catégories de centres, ce qui impose une répartition en deux temps."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Rôle**",
            "**Exemples**"
          ],
          "rows": [
            [
              "Principal",
              "Directement impliqué dans le process, à un stade fonctionnel (appro., production, distribution).",
              "Bureau d’achat, ateliers, service livraison"
            ],
            [
              "Auxiliaire",
              "En position de support ; rend des services indispensables aux centres principaux.",
              "Administration, entretien, comptabilité"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.2 Les unités d’œuvre"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L’unité d’œuvre",
          "text": "L’unité d’œuvre est une variable représentative de l’activité d’un centre principal, qui permet de mesurer cette activité et d’imputer ses charges aux produits. Idéalement, elle exprime une relation causale entre l’activité et les ressources consommées."
        },
        {
          "type": "p",
          "text": "Le choix de l’unité d’œuvre part d’une bonne compréhension des technologies. Dans un atelier fortement mécanisé, on retiendra l’heure-machine ; dans un atelier resté artisanal, l’heure de main-d’œuvre directe. Plus rigoureusement, si l’on hésite entre plusieurs unités, on choisit celle qui donne le meilleur ajustement linéaire des charges par rapport à l’activité, soit le coefficient de corrélation le plus proche de **|1|**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Unité d’œuvre et homogénéité",
          "text": "L’unicité de la variable retenue est liée à l’homogénéité du centre. Si l’on ne trouve pas de bon coefficient de corrélation, c’est que la condition d’homogénéité n’est pas satisfaite : il faut redécouper le centre en sections plus fines."
        },
        {
          "type": "p",
          "text": "Le coût de l’unité d’œuvre s’obtient en divisant le total du centre (après répartition secondaire) par le nombre total d’unités d’œuvre de la période."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Coût de l’unité d’œuvre d’un atelier",
          "text": "L’atelier traitement-finition anticorrosion est fortement automatisé (robot peintre). L’ajustement linéaire des charges sur le temps de fonctionnement du robot donne un coefficient de corrélation de 0,92 : on retient l’heure d’utilisation du robot comme unité d’œuvre.\n**Travail à faire :**déterminer l’unité d’œuvre pertinente puis calculer le coût de l’unité d’œuvre, sachant que les charges indirectes du mois s’élèvent à 8 000 € pour une activité de 200 heures-robot.\n**Corrigé :**\nLe robot étant fortement automatisé (corrélation 0,92 entre charges et temps de fonctionnement), on retient l’heure-robot comme unité d’œuvre. Coût de l’unité d’œuvre = € : chaque heure-robot impute 40 € au coût du produit."
        },
        {
          "type": "p",
          "text": "Imputation aux trois commandes traitées dans le mois (au prorata des heures-robot) :"
        },
        {
          "type": "table",
          "headers": [
            "**Commande**",
            "**Heures de fonctionnement**",
            "**Calcul**",
            "**Montant imputé**"
          ],
          "rows": [
            [
              "C1",
              "100",
              "100 × 40",
              "4 000 €"
            ],
            [
              "C2",
              "60",
              "60 × 40",
              "2 400 €"
            ],
            [
              "C3",
              "40",
              "40 × 40",
              "1 600 €"
            ],
            [
              "**Total**",
              "**200**",
              "",
              "**8 000 €**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.3 Les taux de frais"
        },
        {
          "type": "p",
          "text": "Quand le « nombre d’unités d’œuvre » est une assiette monétaire (coût de production, chiffre d’affaires), le résultat obtenu n’est pas à proprement parler un coût d’unité d’œuvre mais un taux de frais, exprimé en pourcentage."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Application — le taux de frais de distribution",
          "text": "Charges indirectes du centre Distribution = 15 000 € ; assiette = chiffre d’affaires de 200 000 € (dont 50 000 € pour le produit A). Taux de frais = . Pour le produit A : 50 000 × 7,5 % = 3 750 € de charges indirectes de distribution.\n**REMARQUE — Une distinction souvent implicite**\nPar souci de simplification, la distinction entre « coût de l’unité d’œuvre » et « taux de frais » n’est pas toujours faite. La limite du taux de frais est qu’une assiette monétaire n’exprime pas toujours une relation causale (deux commandes de chiffre d’affaires égal peuvent demander un travail très différent)."
        },
        {
          "type": "h3",
          "text": "2.4 La répartition primaire"
        },
        {
          "type": "p",
          "text": "Les charges indirectes sont d’abord réparties sur tous les centres — auxiliaires comme principaux. Pour certaines charges, la répartition ne pose pas de problème (les charges de personnel suivent l’affectation connue des salariés aux services). Pour d’autres, on recourt à une clé de répartition, plus ou moins arbitraire : le loyer global, par exemple, peut être réparti au prorata des mètres carrés occupés."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/03.png",
          "alt": "Partie 2 — Calculer (1) : le traitement des charges indirectes par les centres d’analyse",
          "width": 1440,
          "height": 430,
          "caption": "Figure 3 — Les trois temps du traitement des charges indirectes"
        },
        {
          "type": "h3",
          "text": "2.5 La répartition secondaire"
        },
        {
          "type": "p",
          "text": "Dans un second temps, les frais de fonctionnement des centres auxiliaires sont déversés sur les centres principaux, là encore à l’aide d’une clé de répartition (par exemple le nombre de salariés). À l’issue de la répartition secondaire, tout le coût indirect est concentré sur les centres principaux, prêt à être imputé via les unités d’œuvre."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — L’ordre des opérations",
          "text": "La répartition se fait toujours en deux temps : primaire (sur tous les centres), puis secondaire (auxiliaires → principaux). Inverser cet ordre, ou imputer aux produits avant d’avoir bouclé la répartition secondaire, fausse les coûts. Les centres auxiliaires doivent être « vidés » avant le calcul des coûts d’unité d’œuvre."
        },
        {
          "type": "h3",
          "text": "2.6 Les prestations réciproques"
        },
        {
          "type": "p",
          "text": "Lorsque deux centres se fournissent mutuellement des prestations, le calcul du coût des unités d’œuvre passe par la résolution d’un système d’équations. Chaque centre obéit au principe : valeur des prestations fournies = frais propres + valeur des prestations reçues."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Prestations réciproques entre deux centres",
          "text": "E engage 19 500 € de frais propres et produit 1 000 UO, dont 100 fournies à G. G engage 3 000 € et produit 500 UO, dont 50 fournies à E.\n**Travail à faire :**déterminer le coût de l’unité d’œuvre de chacun des deux centres E et G en résolvant le système des prestations réciproques.\n**Corrigé :**\nSoit e et g les coûts d’UO : 1 000 e = 19 500 + 50 g (1) ; 500 g = 3 000 + 100 e (2).\n**Par substitution : e = 19,5 + 0,05 g, reporté dans (2) → 495 g = 4 950 → g = 10 €, puis e = 20 €.**"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/04.png",
          "alt": "Partie 2 — Calculer (1) : le traitement des charges indirectes par les centres d’analyse",
          "width": 1064,
          "height": 554,
          "caption": "Figure 4 — Prestations réciproques entre centres"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Cas général",
          "text": "Si « n » centres sont en interaction réciproque, il faut résoudre un système de n équations à n inconnues. Le tableur ou l’ERP automatise cette résolution."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/05.png",
          "alt": "Partie 2 — Calculer (1) : le traitement des charges indirectes par les centres d’analyse",
          "width": 1338,
          "height": 446,
          "caption": "Figure 5 — Le traitement des charges indirectes : affectation, répartition, imputation"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 2",
          "text": "Affectation (directes) ; répartition + imputation (indirectes).\nCentres homogènes, principaux vs auxiliaires ; répartition primaire puis secondaire.\nUnité d’œuvre = corrélation la plus proche de |1| ; .\nPrestations réciproques = système d’équations."
        }
      ]
    },
    {
      "id": "partie-3-calculer-2-construire-les-couts-le-resultat-analyti",
      "title": "Partie 3 — Calculer (2) : construire les coûts, le résultat analytique et traiter les situations particulières",
      "blocks": [
        {
          "type": "p",
          "text": "Les calculs suivent toujours le même ordre : coût d’achat → fiche de stock des matières → coût de production → fiche de stock des produits finis → coût de revient des produits vendus. Les calculs se présentent sous forme de tableaux à double entrée, avec les produits en colonnes et les éléments (directs et indirects) en lignes."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/06.png",
          "alt": "Partie 3 — Calculer (2) : construire les coûts, le résultat analytique et traiter les situations particulières",
          "width": 1326,
          "height": 626,
          "caption": "Figure 6 — La construction progressive du coût de revient"
        },
        {
          "type": "h3",
          "text": "3.1 Le coût d’achat"
        },
        {
          "type": "p",
          "text": "On calcule un coût d’achat pour tous les produits achetés pendant la période (matières premières, matières consommables). Il comprend des éléments directs (prix d’achat, frais de transport, courtages) et des éléments indirects (imputation des charges du service d’approvisionnement). La connaissance du coût d’achat permet de valoriser l’entrée en stock des matières."
        },
        {
          "type": "h3",
          "text": "3.2 La tenue des comptes de stocks"
        },
        {
          "type": "p",
          "text": "Pour calculer des coûts à une périodicité rapprochée, la comptabilité de gestion tient un inventaire permanent : une organisation comptable qui enregistre régulièrement les mouvements (entrées et sorties) en quantités et en valeurs."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**La relation fondamentale des stocks**"
        },
        {
          "type": "p",
          "text": "Les entrées sont valorisées au coût qui les précède : les éléments achetés au coût d’achat, les éléments fabriqués au coût de production. Les sorties, elles, peuvent être valorisées selon plusieurs méthodes."
        },
        {
          "type": "h3",
          "text": "3.2.1 Les méthodes de valorisation des sorties"
        },
        {
          "type": "ul",
          "items": [
            "**CMUP :**coût moyen unitaire pondéré, en fin de période ou après chaque entrée (méthode fondée sur la fongibilité des lots).",
            "**PEPS (FIFO) :**premier entré, premier sorti ; les sorties sont valorisées au coût des lots les plus anciens.",
            "**DEPS (LIFO) :**dernier entré, premier sorti ; non admis comptablement ni fiscalement (retraitement nécessaire).",
            "**Valeurs de substitution :**coût approché ou préétabli (régularisé ensuite), valeur de remplacement (NIFO, non admise)."
          ]
        },
        {
          "type": "p",
          "text": "Application. Stock initial au 01/03 : 10 000 kg à 2 € (20 000 €). Le 15/03, achat de 6 000 kg à 2 € + 1 200 € de frais (entrée valorisée à 2,20 €). Le 20/03, sortie de 8 000 kg. Le 28/03, achat de 10 000 kg à 1,90 € + 1 500 € de frais (entrée à 2,05 €)."
        },
        {
          "type": "p",
          "text": "**Méthode PEPS (premier entré, premier sorti)**"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Entrées**",
            "**Sorties**",
            "**Stock**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**"
            ],
            [
              "01/03",
              "",
              "",
              "",
              "",
              "",
              "",
              "10 000",
              "2",
              "20 000"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "",
              "",
              "",
              "10 000",
              "2",
              "20 000"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "6 000",
              "2,20",
              "13 200"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "**16 000**",
              "",
              "**33 200**"
            ],
            [
              "20/03",
              "",
              "",
              "",
              "8 000",
              "2",
              "16 000",
              "2 000",
              "2",
              "4 000"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "6 000",
              "2,20",
              "13 200"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "**8 000**",
              "",
              "**17 200**"
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "",
              "",
              "",
              "2 000",
              "2",
              "4 000"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "6 000",
              "2,20",
              "13 200"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "10 000",
              "2,05",
              "20 500"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "**18 000**",
              "",
              "**37 700**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Méthode DEPS (dernier entré, premier sorti — non admise comptablement)**"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Entrées**",
            "**Sorties**",
            "**Stock**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**"
            ],
            [
              "01/03",
              "",
              "",
              "",
              "",
              "",
              "",
              "10 000",
              "2",
              "20 000"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "",
              "",
              "",
              "10 000",
              "2",
              "20 000"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "6 000",
              "2,20",
              "13 200"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "**16 000**",
              "",
              "**33 200**"
            ],
            [
              "20/03",
              "",
              "",
              "",
              "6 000",
              "2,20",
              "13 200",
              "8 000",
              "2",
              "16 000"
            ],
            [
              "",
              "",
              "",
              "",
              "2 000",
              "2",
              "4 000",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "**8 000**",
              "",
              "**17 200**",
              "",
              "",
              ""
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "",
              "",
              "",
              "8 000",
              "2",
              "16 000"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "10 000",
              "2,05",
              "20 500"
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "**18 000**",
              "",
              "**36 500**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**CMUP après chaque entrée**"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Entrées**",
            "**Sorties**",
            "**Stock**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**",
              "**Q**",
              "**CU**",
              "**Mt**"
            ],
            [
              "01/03",
              "",
              "",
              "",
              "",
              "",
              "",
              "10 000",
              "2",
              "20 000"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "",
              "",
              "",
              "16 000",
              "2,075",
              "33 200"
            ],
            [
              "20/03",
              "",
              "",
              "",
              "8 000",
              "2,075",
              "16 600",
              "8 000",
              "2,075",
              "16 600"
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "",
              "",
              "",
              "18 000",
              "2,0611",
              "37 100"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**CMUP de fin de période**"
        },
        {
          "type": "table",
          "headers": [
            "**Débit**",
            "**Crédit**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Montant**",
              "**Libellé**",
              "**Q**",
              "**CU**",
              "**Montant**"
            ],
            [
              "01/03",
              "10 000",
              "2",
              "20 000",
              "Sorties",
              "8 000",
              "2,06538",
              "16 523,08"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "Stock final",
              "18 000",
              "2,06538",
              "37 176,92"
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "",
              "",
              "",
              ""
            ],
            [
              "**Total**",
              "**26 000**",
              "**2,06538**",
              "**53 700**",
              "**Total**",
              "**26 000**",
              "",
              "**53 700**"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/07.png",
          "alt": "Partie 3 — Calculer (2) : construire les coûts, le résultat analytique et traiter les situations particulières",
          "width": 1772,
          "height": 886,
          "caption": "Figure 7 — En période de hausse des prix, le PEPS minore la sortie, le DEPS la majore"
        },
        {
          "type": "p",
          "text": "**Comparaison.**En période de hausse des prix, le PEPS minore les sorties (et majore le stock final), le DEPS fait l’inverse ; le CMUP se situe entre les deux. Le choix de la méthode influence donc le coût de production puis le résultat — d’où l’encadrement comptable (DEPS interdit)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Différences d’inventaire",
          "text": "Quand l’énoncé donne le stock final réel, il faut vérifier l’absence de différence d’inventaire. Si le stock réel est inférieur au stock théorique, il y a un mali d’inventaire (consommations sous-évaluées) ; s’il est supérieur, un boni. L’origine peut être comptable (mouvement mal enregistré) ou physique (vol, casse)."
        },
        {
          "type": "p",
          "text": "**Différences d’inventaire (CMUP de fin de période)**"
        },
        {
          "type": "p",
          "text": "Le stock théorique est de 18 000 kg. Hypothèse 1 — stock réel 17 800 kg : mali de 200 kg (consommations sous-évaluées)."
        },
        {
          "type": "table",
          "headers": [
            "**Débit**",
            "**Crédit**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Montant**",
              "**Libellé**",
              "**Q**",
              "**CU**",
              "**Montant**"
            ],
            [
              "01/03",
              "10 000",
              "2",
              "20 000",
              "Sorties",
              "8 000",
              "2,06538",
              "16 523,08"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "Stock final",
              "17 800",
              "2,06538",
              "36 763,85"
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "Mali",
              "200",
              "2,06538",
              "413,08"
            ],
            [
              "**Total**",
              "**26 000**",
              "**2,06538**",
              "**53 700**",
              "**Total**",
              "**26 000**",
              "",
              "**53 700**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Hypothèse 2 — stock réel 18 500 kg : boni de 500 kg (consommations surévaluées)."
        },
        {
          "type": "table",
          "headers": [
            "**Débit**",
            "**Crédit**"
          ],
          "rows": [
            [
              "**Date**",
              "**Q**",
              "**CU**",
              "**Montant**",
              "**Libellé**",
              "**Q**",
              "**CU**",
              "**Montant**"
            ],
            [
              "01/03",
              "10 000",
              "2",
              "20 000",
              "Sorties",
              "8 000",
              "2,06538",
              "16 523,08"
            ],
            [
              "15/03",
              "6 000",
              "2,20",
              "13 200",
              "Stock final",
              "18 500",
              "2,06538",
              "38 209,62"
            ],
            [
              "28/03",
              "10 000",
              "2,05",
              "20 500",
              "",
              "",
              "",
              ""
            ],
            [
              "Boni",
              "500",
              "2,06538",
              "1 032,69",
              "",
              "",
              "",
              ""
            ],
            [
              "**Total**",
              "**26 500**",
              "",
              "**54 732,69**",
              "**Total**",
              "**26 500**",
              "",
              "**54 732,69**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.3 Les variations de stocks"
        },
        {
          "type": "p",
          "text": "Lorsqu’un compte de résultat de la comptabilité financière doit être établi, il faut calculer les variations de stocks — et la règle diffère selon la nature des éléments."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Deux formules de variation à ne pas confondre",
          "text": "**Éléments achetés :**Variation = Stock initial − Stock final (donne les consommations : Achats + variation).\n**Éléments produits :**Variation = Stock final − Stock initial (production stockée, au crédit, évaluée au coût de production).\n**ERREURS FRÉQUENTES — L’erreur classique sur la production stockée**\nDans le compte de stock des produits, les sorties correspondent au coût de production des produits VENDUS — et non au chiffre d’affaires. Confondre les deux est l’erreur la plus fréquente."
        },
        {
          "type": "p",
          "text": "**Éléments achetés — Variation = SI − SF**"
        },
        {
          "type": "p",
          "text": "Achats 100 000 € ; stock initial 20 000 € ; consommations 90 000 €. Variation de stock = 20 000 − 30 000 = − 10 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Débit**",
            "**Crédit**"
          ],
          "rows": [
            [
              "Stock initial",
              "20 000",
              "Sorties",
              "90 000"
            ],
            [
              "Entrées",
              "100 000",
              "Stock final",
              "30 000"
            ],
            [
              "**Total**",
              "**120 000**",
              "**Total**",
              "**120 000**"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Charges**",
            "**Produits**"
          ],
          "rows": [
            [
              "Achats",
              "100 000",
              "",
              ""
            ],
            [
              "Variation de stock",
              "– 10 000",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Éléments produits — Variation = SF − SI**"
        },
        {
          "type": "p",
          "text": "Production 200 000 € ; stock initial 40 000 € ; coût de production des produits vendus 180 000 € ; CA 220 000 €. Production stockée = 60 000 − 40 000 = + 20 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Débit**",
            "**Crédit**"
          ],
          "rows": [
            [
              "Stock initial",
              "40 000",
              "Sorties (coût prod. vendus)",
              "180 000"
            ],
            [
              "Entrées",
              "200 000",
              "Stock final",
              "60 000"
            ],
            [
              "**Total**",
              "**240 000**",
              "**Total**",
              "**240 000**"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Charges**",
            "**Produits**"
          ],
          "rows": [
            [
              "",
              "",
              "Chiffre d’affaires",
              "220 000"
            ],
            [
              "",
              "",
              "Production stockée",
              "+ 20 000"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.4 Le coût de production"
        },
        {
          "type": "p",
          "text": "On calcule un coût de production pour tous les produits fabriqués pendant la période. Il comprend : des éléments directs (la main-d’œuvre directe), les consommations de matières premières (sorties de stock au coût d’achat, en principe au CMUP), et des charges indirectes (imputation des charges des ateliers via leurs unités d’œuvre)."
        },
        {
          "type": "h3",
          "text": "3.5 Le coût de revient"
        },
        {
          "type": "p",
          "text": "On calcule un coût de revient pour tous les produits vendus pendant la période. Il est la somme du coût de production des produits finis vendus (sortis du stock au coût de production, en principe au CMUP) et du coût de distribution de ces produits (éléments directs comme les commissions, et indirects des services commerciaux)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Coût de revient = produits VENDUS",
          "text": "Le coût de revient n’inclut que le coût de production des produits vendus, et non des produits fabriqués : attention à la variation de stock de produits finis ! On dit « coût » de revient, et non « prix » de revient, expression désuite depuis sa disparition du plan comptable en 1982."
        },
        {
          "type": "h3",
          "text": "3.6 Le résultat analytique"
        },
        {
          "type": "p",
          "text": "Pour chaque produit vendu, on calcule un résultat analytique : la différence entre les ventes et le coût de revient complet. Calculé produit par produit, il révèle la contribution réelle de chacun au résultat global — ce que la comptabilité financière, globale, ne permet pas."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le résultat analytique",
          "text": "**ILLUSTRATION — Le déroulé complet, étape par étape**\nLa chaîne complète coût d’achat → fiche de stock → coût de production → fiche de stock des produits finis → coût de revient → résultat analytique est déroulée dans l’application récapitulative corrigée en fin de chapitre (société Mobilis)."
        },
        {
          "type": "h3",
          "text": "3.7 Les situations particulières : ce que le programme retient"
        },
        {
          "type": "p",
          "text": "Le schéma de base se complexifie dans plusieurs situations courantes. Le référentiel réformé en retient certaines (déchets, produits résiduels, adaptations sectorielles) et en exclut d’autres."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Hors programme : les en-cours de production",
          "text": "Le guide pédagogique du DCG rénové précise que, dans la méthode des centres d’analyse, les problèmes relatifs aux en-cours sont exclus. Le traitement des en-cours (produits non terminés en fin de période, valorisés en équivalents finis) n’est donc pas attendu à l’examen et n’est pas développé ici. En revanche, l’analyse des déchets et produits résiduels est, elle, expressément conservée."
        },
        {
          "type": "h3",
          "text": "3.8 Les produits joints, sous-produits et co-produits"
        },
        {
          "type": "p",
          "text": "Les produits joints apparaissent simultanément lors d’un même processus (fréquent en chimie, en agroalimentaire : à partir du lait, on obtient beurre, lait écrémé, lactosérum). Séparer, parmi des charges communes, celles qui reviennent à chaque produit est un problème redoutable. On procède empiriquement selon l’importance relative des produits."
        },
        {
          "type": "table",
          "headers": [
            "**Situation**",
            "**Traitement**"
          ],
          "rows": [
            [
              "Produits d’importance comparable (co-produits)",
              "Répartir le coût commun selon une clé physique (poids, volume)."
            ],
            [
              "Un produit principal + un sous-produit",
              "Répartir au prorata de la valeur de revente ; calcul approché mais accepté."
            ],
            [
              "Sous-produit de valeur négligeable",
              "Le déduire du coût du produit principal à sa valeur de revente (produit résiduel)."
            ],
            [
              "**ILLUSTRATION — Application — produit principal et sous-produit**À la sortie de l’atelier, le coût de production du produit principal P et du sous-produit S est de 100 €. S nécessite un traitement de 5 € pour être commercialisé à 20 €. **Coût de S à la sortie (raisonnement « à rebours ») = 20 − 5 = 15 €.Coût de production du produit principal P = 100 − 15 = 85 €.**"
            ],
            [
              "**ILLUSTRATION — les chutes de matière (sous-produit) chez l’entreprise**L’usinage des cadres le produit génère des chutes de matière revendues à un recycleur. Sur le mois, ces chutes sont vendues 3 000 €, après un coût de conditionnement de 500 €. **Valeur nette du sous-produit = 3 000 − 500 = 2 500 €.**Cette valeur vient en déduction du coût de production : 330 000 − 2 500 = 327 500 €, soit 65,50 € par produit au lieu de 66,00 €."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.9 Les déchets et rebuts"
        },
        {
          "type": "p",
          "text": "Les produits résiduels sont généralement des déchets (fraction de matière non utilisée, « chutes ») ou des rebuts (produits finis « ratés », invendables en l’état). Quand ils peuvent être récupérés ou revendus, leur valeur de revente vient en diminution du coût du produit principal — c’est une exception, admise en comptabilité financière, au principe de valorisation au coût de production."
        },
        {
          "type": "h3",
          "text": "3.10 La production d’immobilisations"
        },
        {
          "type": "p",
          "text": "Une entreprise peut produire ses propres immobilisations (à un certain coût de production), les activer, puis les incorporer en charges sur plusieurs périodes par la dotation aux amortissements. C’est fréquent pour les activités innovantes impliquant de la recherche."
        },
        {
          "type": "h3",
          "text": "3.11 Les adaptations sectorielles"
        },
        {
          "type": "p",
          "text": "Le schéma industriel s’adapte avec bon sens. Dans une entreprise commerciale, il n’y a pas de production : le coût de revient = coût d’achat des marchandises + frais commerciaux et administratifs ; on parle de marge brute (sur coût d’achat) et de marge nette. Dans une entreprise de services, le schéma « implose » : pas de stocks, on passe directement au coût de revient et au résultat. Dans une banque, la « marge » tient au différentiel entre le coût des fonds et le taux des prêts."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 3 (situations particulières)",
          "text": "Produits joints : co-produits (clé physique) / sous-produits (valeur de revente).\nDéchets et rebuts récupérables : déduits du coût du produit principal.\nEn-cours : hors programme DCG réformé (exclus).\nAdapter le schéma au secteur (commerce, services, banque)."
        }
      ]
    },
    {
      "id": "partie-4-interpreter-et-porter-un-regard-critique-decision-d",
      "title": "Partie 4 — Interpréter et porter un regard critique : décision, durabilité et analyse de la méthode",
      "blocks": [
        {
          "type": "p",
          "text": "***Calculer ne suffit pas.***Cette dernière partie exploite les coûts pour la décision (4.1 à 4.4), intègre les enjeux numériques et de durabilité (4.5 et 4.6), puis formalise l’analyse critique de la méthode — apports, limites, comparaison avec les autres méthodes de coûts et conditions de pertinence (4.7)."
        },
        {
          "type": "h3",
          "text": "4.1 La fixation des prix"
        },
        {
          "type": "p",
          "text": "Le coût de revient complet fournit un plancher de tarification : vendre durablement en dessous détruit de la valeur. Dans une logique de coût majoré (cost-plus), le prix s’obtient en ajoutant une marge au coût de revient. Pour l’le produit, le coût de revient de 76 € laisse une marge de 14 € au prix de 90 € — un éclairage direct pour la politique tarifaire."
        },
        {
          "type": "h3",
          "text": "4.2 L’analyse de la rentabilité"
        },
        {
          "type": "p",
          "text": "Le résultat analytique par produit révèle les véritables sources de profit. Un produit important en chiffre d’affaires peut s’avérer peu rentable, tandis qu’un autre, discret, dégage l’essentiel de la marge. Le coût complet oriente ainsi les arbitrages de gamme et l’effort commercial."
        },
        {
          "type": "h3",
          "text": "4.3 La valorisation des stocks"
        },
        {
          "type": "p",
          "text": "La valorisation des stocks au coût complet de production est une obligation de la comptabilité financière (établissement du bilan). C’est l’une des deux finalités fondatrices de la méthode : sans coût complet, pas de valorisation conforme des stocks."
        },
        {
          "type": "h3",
          "text": "4.4 Le pilotage économique et l’évaluation de la performance"
        },
        {
          "type": "p",
          "text": "En comparant coûts réels et coûts prévus (standards), le contrôle de gestion mesure des écarts, en recherche les causes et déclenche des actions correctives. Le coût complet alimente ainsi le contrôle budgétaire et l’évaluation des centres de responsabilité. Chez l’entreprise, le coût réel de 66 €, inférieur au standard de 67 €, traduit un écart favorable à analyser."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — le coût complet pour la décision",
          "text": "Fixation des prix (coût majoré), analyse de la rentabilité par produit.\nValorisation des stocks au coût complet : obligation comptable.\nBase du contrôle budgétaire (écarts) et de l’évaluation de la performance."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**4.5 ⚙ Contrôle de gestion et numérique : le coût complet à l’ère numérique**"
        },
        {
          "type": "p",
          "text": "Le calcul des coûts complets, longtemps manuel et fastidieux (tableaux de répartition tenus à la main), est aujourd’hui largement automatisé. Le numérique transforme la production des coûts et recentre le contrôleur sur l’analyse."
        },
        {
          "type": "ul",
          "items": [
            "**ERP / PGI :**le tableau de répartition est automatisé ; les clés et unités d’œuvre paramétrées une fois alimentent les coûts en continu, à partir d’une donnée unique et fiable.",
            "**Automatisation des imputations :**la répartition primaire/secondaire et la résolution des prestations réciproques sont calculées instantanément.",
            "**Business Intelligence :**coûts et marges sont restitués dans des tableaux de bord interactifs, par produit, centre ou période.",
            "**Data Analytics :**l’analyse des données aide à choisir des clés et des unités d’œuvre plus pertinentes (meilleure corrélation).",
            "**Intelligence artificielle :**détection d’anomalies dans les coûts, génération de commentaires d’analyse."
          ]
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — L’outil n’efface pas la méthode",
          "text": "L’automatisation accélère et fiabilise, mais un paramétrage erroné (mauvaise clé de répartition) produit un coût faux — d’autant plus dangereux qu’il paraît « calculé par la machine ». La maîtrise des mécanismes présentés dans ce chapitre reste indispensable pour paramétrer et interpréter correctement."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**4.6 ⚘ Performance globale et durabilité : intégrer les enjeux environnementaux et sociaux**"
        },
        {
          "type": "p",
          "text": "Le référentiel rénové demande explicitement de faire le lien entre le calcul des coûts et la durabilité. La méthode des coûts complets, parce qu’elle recense la totalité des consommations, est un point d’entrée naturel pour intégrer les enjeux environnementaux et sociaux (RSE) dans le pilotage économique."
        },
        {
          "type": "h3",
          "text": "4.6.1 Le coût du traitement des déchets"
        },
        {
          "type": "p",
          "text": "Les coûts liés aux déchets ne sont plus négligeables : collecte, tri, mise aux normes, traitement réglementaire, taxes. Intégrés au coût complet, ils rendent visible l’impact économique de la production de déchets et incitent à les réduire. À l’inverse, la valorisation des déchets (revente, réemploi) vient diminuer le coût du produit principal — mécanisme déjà vu pour les produits résiduels, ici au service de l’économie circulaire."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le coût du traitement des déchets",
          "text": "Les chutes de matière (déchets de production) génèrent un coût de traitement — collecte, tri, élimination — qui s’ajoute au coût de production. Lorsqu’elles peuvent être revendues ou recyclées, leur valeur de revente vient en déduction du coût du produit principal (produit résiduel). Réduire les déchets améliore donc simultanément le coût et l’empreinte environnementale."
        },
        {
          "type": "h3",
          "text": "4.6.2 L’investissement « vert » : arbitrer coût et impact"
        },
        {
          "type": "p",
          "text": "Moderniser l’appareil productif (machines plus économes, chauffage performant, flotte de transport électrique) modifie la structure des coûts : les charges fixes (amortissements) augmentent, mais les charges variables (énergie, carburant) et les émissions de CO₂ baissent. Le coût complet permet de chiffrer cet arbitrage et d’éclairer la décision."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/08.png",
          "alt": "Partie 4 — Interpréter et porter un regard critique : décision, durabilité et analyse de la méthode",
          "width": 1360,
          "height": 600,
          "caption": "Figure 8 — Investissement vert : l’amortissement augmente, l’énergie et le CO₂ baissent"
        },
        {
          "type": "table",
          "headers": [
            "**Décision durable**",
            "**Effet sur les coûts**",
            "**Effet extra-financier**"
          ],
          "rows": [
            [
              "Machine plus économe en énergie",
              "Amortissement ↑, énergie ↓",
              "Émissions de CO₂ ↓"
            ],
            [
              "Matières recyclées ou locales",
              "Coût d’achat parfois ↑",
              "Empreinte carbone ↓"
            ],
            [
              "Amélioration de la qualité (durabilité)",
              "Coût de production ↑",
              "Moins de retours, fidélisation"
            ],
            [
              "Meilleures conditions de travail",
              "Charges de personnel ↑",
              "Climat social, moins d’accidents"
            ],
            [
              "**Coût et performance globale**Une hausse du coût n’est pas nécessairement une mauvaise décision : un coût complet plus élevé peut s’accompagner d’une baisse des émissions, d’une meilleure qualité ou de conditions de travail améliorées. Le contrôleur de gestion doit présenter au décideur une lecture conjointe du coût et de ses effets environnementaux et sociaux — c’est la logique de performance globale du nouveau programme."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "4.6.3 Le coût de la qualité (et de la non-qualité)"
        },
        {
          "type": "p",
          "text": "Produire plus durable, c’est souvent produire mieux. Le coût complet peut intégrer le coût de la qualité (prévention, contrôle) et révéler le coût de la non-qualité (rebuts, retours, garanties, perte d’image). Réduire la non-qualité diminue les coûts tout en améliorant la satisfaction et la durabilité des produits — un cercle vertueux que le pilotage par les coûts aide à objectiver."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Focus durabilité",
          "text": "Le référentiel impose de relier le calcul des coûts à la durabilité.\nCoût du traitement des déchets ; valorisation des déchets (économie circulaire).\nInvestissement vert : charges fixes ↑ mais énergie et CO₂ ↓ ; arbitrage chiffré par le coût complet.\nUne hausse de coût peut être justifiée par la performance globale (CO₂, qualité, social)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**4.7 ⚠ Analyse critique de la méthode des coûts complets**"
        },
        {
          "type": "p",
          "text": "La dernière compétence attendue est de **porter un regard critique argumenté** : apprécier les apports et les limites de la méthode, la comparer aux autres méthodes de coûts, et justifier son choix selon le contexte de l’organisation — condition d’un écrit de conseil de qualité."
        },
        {
          "type": "h3",
          "text": "Les forces de la méthode"
        },
        {
          "type": "p",
          "text": "Elle offre une vision exhaustive du coût (toutes les charges sont prises en compte), fournit le coût de revient indispensable à la fixation des prix et la valorisation des stocks au bilan, et s’applique à tous les secteurs. C’est le langage commun de la comptabilité de gestion."
        },
        {
          "type": "h3",
          "text": "Les limites de la méthode"
        },
        {
          "type": "p",
          "text": "La répartition des charges indirectes repose sur des clés et des unités d’œuvre partiellement arbitraires — le talon d’Achille de la méthode. Une assiette monétaire (chiffre d’affaires) n’exprime pas toujours une relation causale, et plus la part des charges indirectes augmente, plus le coût devient sensible à ces conventions. La méthode est par ailleurs lourde et coûteuse ; son découpage, calqué sur l’organisation hiérarchique, peut être daté ; enfin, le coût unitaire dépend du niveau d’activité (il est mécaniquement majoré en sous-activité)."
        },
        {
          "type": "h3",
          "text": "Les risques d’interprétation"
        },
        {
          "type": "p",
          "text": "Prendre un coût complet pour une vérité exacte conduit à des décisions erronées : abandonner un produit jugé « non rentable » sur la base d’une répartition contestable, alors qu’il contribue à absorber les charges fixes. En sous-activité, un résultat déficitaire peut traduire non un mauvais produit, mais un coût de sous-activité conjoncturel — d’où l’intérêt de l’imputation rationnelle."
        },
        {
          "type": "h3",
          "text": "Comparaison avec les autres méthodes de coûts"
        },
        {
          "type": "p",
          "text": "Les limites du coût complet par centres d’analyse ont motivé trois prolongements, chacun étudié dans un chapitre dédié. Le tableau ci-dessous les positionne par rapport à la méthode de base."
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe distinctif**",
            "**Réponse à quelle limite ?**",
            "**Chapitre**"
          ],
          "rows": [
            [
              "Centres d’analyse (ce chapitre)",
              "Répartir la totalité des charges via centres et unités d’œuvre.",
              "— (méthode de référence)",
              "7"
            ],
            [
              "Méthode ABC",
              "Rattacher les charges indirectes à des activités, via des inducteurs.",
              "Arbitraire des clés quand l’indirect est lourd et hétérogène.",
              "8"
            ],
            [
              "Imputation rationnelle",
              "Ajuster les charges fixes au niveau réel d’activité.",
              "Sensibilité du coût unitaire à la sous-activité.",
              "9"
            ],
            [
              "Coûts partiels",
              "Ne retenir que les charges pertinentes (variables, spécifiques).",
              "Lourdeur et inadaptation aux décisions de court terme.",
              "10"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-couts-complets/09.png",
          "alt": "Partie 4 — Interpréter et porter un regard critique : décision, durabilité et analyse de la méthode",
          "width": 1634,
          "height": 748,
          "caption": "Figure 9 — Des limites du coût complet aux méthodes alternatives"
        },
        {
          "type": "h3",
          "text": "Conditions de pertinence et choix de la méthode selon le contexte"
        },
        {
          "type": "p",
          "text": "La méthode est pertinente lorsque les centres sont réellement homogènes, que les unités d’œuvre expriment une relation causale, que la part des charges indirectes reste maîtrisée et que le niveau d’activité est normal. Quand les charges indirectes deviennent prépondérantes et hétérogènes (services, production diversifiée), l’ABC s’impose ; pour des décisions de court terme, les coûts partiels sont plus adaptés ; en cas de variations d’activité, l’imputation rationnelle est nécessaire."
        },
        {
          "type": "p",
          "text": "**Le bon réflexe — et l’attendu de l’épreuve — est de justifier le choix de la méthode selon la décision à éclairer et le contexte de l’organisation.**"
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — La méthode n’est pas « dépassée »",
          "text": "Le coût complet reste la référence pour le coût de revient et la valorisation des stocks. Les méthodes suivantes ne la remplacent pas : elles la complètent selon la décision à éclairer.\n**POINT EXAMEN — À retenir — Analyse critique**\nForces : vision exhaustive, coût de revient, valorisation des stocks, universalité.\nLimite majeure : l’arbitraire des répartitions et du choix des unités d’œuvre.\nSensibilité au niveau d’activité (coût unitaire majoré en sous-activité).\nChoisir la méthode selon le contexte : ABC, imputation rationnelle, coûts partiels."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ APPLICATION 3 — Coût complet : cas de synthèse (Société Mobilia)**"
        },
        {
          "type": "p",
          "text": "Cette application finale rejoue la totalité de la méthode sur un cas neuf et complet. Elle mobilise successivement : le tableau de répartition (avec un centre auxiliaire), les unités d’œuvre et le taux de frais, le coût d’achat, la tenue des stocks au CMUP, le coût de production, le coût de revient et le résultat analytique. Le corrigé est détaillé étape par étape."
        },
        {
          "type": "h3",
          "text": "Énoncé :"
        },
        {
          "type": "p",
          "text": "La société Mobilia fabrique un seul modèle de chaise, l’« Atlas ». Pour le mois m, on dispose des informations suivantes."
        },
        {
          "type": "ul",
          "items": [
            "**Charges indirectes :**un tableau de répartition primaire donne Maintenance (auxiliaire) 6 000 €, Approvisionnement 9 000 €, Atelier 33 000 €, Distribution 7 000 €. Le centre Maintenance est déversé : 20 % à l’Approvisionnement, 70 % à l’Atelier, 10 % à la Distribution.",
            "**Unités d’œuvre :**Approvisionnement = le kg de hêtre acheté ; Atelier = l’heure-machine ; Distribution = 100 € de chiffre d’affaires (taux de frais).",
            "**Achats :**3 000 kg de hêtre à 6 € le kg, plus 600 € de frais de transport (direct).",
            "**Stocks de matières :**stock initial 1 000 kg à 8,40 € le kg ; sortie vers l’atelier 3 200 kg ; sorties au CMUP de fin de période.",
            "**Production :**400 chaises, consommant 3 200 kg de hêtre, 200 heures de main-d’œuvre directe à 24 € et 480 heures-machine.",
            "**Stocks de produits finis :**stock initial 50 chaises à 170 € ; ventes 420 chaises à 240 € l’unité ; sorties au CMUP. Commissions : 4 % du chiffre d’affaires (direct)."
          ]
        },
        {
          "type": "p",
          "text": "**Travail à faire :**achever le tableau de répartition, calculer le coût d’achat, tenir la fiche de stock du hêtre, calculer le coût de production, tenir la fiche de stock des chaises, puis calculer le coût de revient et le résultat analytique."
        },
        {
          "type": "h3",
          "text": "Corrigé — résolution détaillée :"
        },
        {
          "type": "h4",
          "text": "1. Tableau de répartition"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Maintenance**",
            "**Approvision.**",
            "**Atelier**",
            "**Distribution**"
          ],
          "rows": [
            [
              "Répartition primaire",
              "6 000",
              "9 000",
              "33 000",
              "7 000"
            ],
            [
              "Déversement Maintenance",
              "− 6 000",
              "+ 1 200",
              "+ 4 200",
              "+ 600"
            ],
            [
              "Total secondaire",
              "0",
              "10 200",
              "37 200",
              "7 600"
            ],
            [
              "Unité d’œuvre",
              "—",
              "kg acheté",
              "heure-machine",
              "100 € de CA"
            ],
            [
              "Nombre d’UO",
              "—",
              "3 000",
              "480",
              "CA = 100 800"
            ],
            [
              "Coût de l’UO",
              "—",
              "3,40 €",
              "77,50 €",
              "7,54 % (taux)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Note : le taux de frais de distribution () ne peut être calculé qu’une fois le chiffre d’affaires connu ; on l’applique au stade du coût de revient."
        },
        {
          "type": "h4",
          "text": "2. Coût d’achat du hêtre (3 000 kg)"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Quantité**",
            "**Coût unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Prix d’achat",
              "3 000 kg",
              "6,00",
              "18 000"
            ],
            [
              "Frais de transport (direct)",
              "—",
              "—",
              "600"
            ],
            [
              "Charges indirectes appro. (3,40 €/kg)",
              "3 000",
              "3,40",
              "10 200"
            ],
            [
              "Coût d’achat",
              "3 000 kg",
              "9,60",
              "28 800"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "3. Fiche de stock du hêtre (CMUP)"
        },
        {
          "type": "p",
          "text": "€ le kg."
        },
        {
          "type": "table",
          "headers": [
            "**Mouvement**",
            "**Quantité**",
            "**Coût unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Stock initial",
              "1 000 kg",
              "8,40",
              "8 400"
            ],
            [
              "Entrée (coût d’achat)",
              "3 000 kg",
              "9,60",
              "28 800"
            ],
            [
              "Sortie vers l’atelier",
              "3 200 kg",
              "9,30",
              "29 760"
            ],
            [
              "Stock final",
              "800 kg",
              "9,30",
              "7 440"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "4. Coût de production (400 chaises)"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Quantité**",
            "**Coût unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Hêtre consommé (sortie de stock)",
              "3 200 kg",
              "9,30",
              "29 760"
            ],
            [
              "Main-d’œuvre directe",
              "200 h",
              "24,00",
              "4 800"
            ],
            [
              "Charges indirectes atelier (77,50 €/h)",
              "480",
              "77,50",
              "37 200"
            ],
            [
              "Coût de production",
              "400 chaises",
              "179,40",
              "71 760"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "5. Fiche de stock des chaises (CMUP)"
        },
        {
          "type": "p",
          "text": "€ la chaise (arrondi)."
        },
        {
          "type": "table",
          "headers": [
            "**Mouvement**",
            "**Quantité**",
            "**Coût unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Stock initial",
              "50 chaises",
              "170,00",
              "8 500"
            ],
            [
              "Entrée (coût de production)",
              "400 chaises",
              "179,40",
              "71 760"
            ],
            [
              "Sortie (ventes)",
              "420 chaises",
              "178,36",
              "74 911,20"
            ],
            [
              "Stock final",
              "30 chaises",
              "178,36",
              "5 350,80"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "6. Coût de revient et résultat analytique (420 chaises vendues)"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Montant**"
          ],
          "rows": [
            [
              "Coût de production des chaises VENDUES (420 × 178,36)",
              "74 911,20"
            ],
            [
              "Commissions (4 % du CA, direct)",
              "4 032,00"
            ],
            [
              "Charges indirectes de distribution (7,54 % du CA)",
              "7 600,00"
            ],
            [
              "Coût de revient (420 chaises)",
              "86 543,20"
            ],
            [
              "Chiffre d’affaires (420 × 240)",
              "100 800,00"
            ],
            [
              "Résultat analytique",
              "+ 14 256,80"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.**Le résultat analytique du mois est de + 14 256,80 €, soit environ 34 € par chaise vendue. Chaque chaise, vendue 240 €, revient à 206,06 € (86 543,20 / 420). On retrouve tous les mécanismes du chapitre : répartition en deux temps, imputation par unités d’œuvre, taux de frais, valorisation des stocks au CMUP, et coût de revient calculé sur les seules chaises vendues."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Vérifiez toujours ces points",
          "text": "Le centre auxiliaire doit être totalement vidé (Maintenance = 0 après déversement).\nLa sortie de stock se valorise au CMUP, pas au dernier coût d’entrée.\nLe coût de revient porte sur 420 chaises vendues, pas sur 400 produites.\nLe taux de frais de distribution s’applique au chiffre d’affaires, pas au coût."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse et fiche de révision**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Enchaînement : répartition primaire → répartition secondaire (prestations entre centres) → coût d'unité d'œuvre ; les prestations réciproques se résolvent par un système d'équations.\n• Coût d'UO = total du centre / nombre d'UO ; choisir une UO réellement corrélée à l'activité, sinon l'imputation devient arbitraire (subventionnement croisé entre produits).\n• Ne pas oublier la différence d'inventaire dans le passage production → coût de revient (les en-cours de production sont hors programme).\n• Pont → Ch06 (ABC) : les inducteurs d'activité remplacent les UO pour corriger le subventionnement croisé des petites séries.\n• Pont → Ch07 : en sous-activité, le coût complet gonfle le coût unitaire → l'imputation rationnelle neutralise cet effet."
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
              "Charge directe / indirecte",
              "Affectable / commune à plusieurs objets",
              "Base du traitement analytique",
              "Frontière parfois floue"
            ],
            [
              "Centre d’analyse",
              "Division homogène regroupant des charges indirectes",
              "Étape de répartition",
              "Découpage parfois arbitraire"
            ],
            [
              "Unité d’œuvre",
              "Variable mesurant l’activité d’un centre",
              "Imputer les indirects aux produits",
              "Choix discutable (corrélation)"
            ],
            [
              "Taux de frais",
              "UO exprimée en assiette monétaire (%)",
              "Imputer sur le CA, le coût de prod.",
              "Pas toujours causal"
            ],
            [
              "Coût de revient",
              "Coût complet des produits vendus",
              "Fixer le prix, calculer le résultat",
              "Inclut des répartitions arbitraires"
            ],
            [
              "Résultat analytique",
              "CA − coût de revient",
              "Rentabilité par produit",
              "Dépend de la méthode de calcul"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Formules clés"
        },
        {
          "type": "table",
          "headers": [
            "**Relations à connaître**"
          ],
          "rows": [
            [
              "**À ne pas confondre**",
              "**Distinction essentielle**"
            ],
            [
              "Affectation / imputation",
              "Directes affectées / indirectes imputées via UO."
            ],
            [
              "Répartition primaire / secondaire",
              "Sur tous les centres / auxiliaires → principaux."
            ],
            [
              "Centre principal / auxiliaire",
              "Dans le process / en support."
            ],
            [
              "Coût d’UO / taux de frais",
              "UO physique / assiette monétaire (%)."
            ],
            [
              "Coût de revient / coût de production",
              "Produits vendus / produits fabriqués."
            ],
            [
              "Résultat / marge",
              "Sur coût complet / sur un coût à préciser."
            ],
            [
              "**ERREURS FRÉQUENTES — Pièges classiques & conseils méthodologiques**Calculer le coût de revient sur les produits fabriqués au lieu des produits vendus.Prendre le chiffre d’affaires au lieu du coût de production pour les sorties de produits.Oublier la répartition secondaire avant le calcul des coûts d’unité d’œuvre.Confondre coût d’unité d’œuvre et taux de frais.Oublier de vérifier les différences d’inventaire quand le stock final est donné.Dire « prix » de revient : terme désuet depuis 1982."
            ]
          ]
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
