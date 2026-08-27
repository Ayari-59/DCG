// Généré par scripts/convert-docx.mjs depuis CHAPITRE_16__LA_GESTION_DE_LA_QUALITE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-gestion-qualite",
  "level": "DCG",
  "ue": "UE11",
  "number": 16,
  "title": "La gestion de la qualité",
  "description": "",
  "durationMin": 30,
  "sections": [
    {
      "id": "introduction",
      "title": "Introduction",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 4 du référentiel — le contrôle de gestion comme aide au pilotage de la performance globale.**\n**Compétence 4.3 — aider au pilotage de la qualité (10 h). Le chapitre mobilise aussi la compétence 4.2 (analyser les causes de non-performance : coûts cachés, coûts liés à la qualité et à la non-qualité) et prolonge les compétences 4.1 (indicateurs financiers et extra-financiers) et 4.4 (performance globale).**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Mettre en œuvre et interpréter les outils de gestion de la qualité.\n• Analyser les intérêts et les limites de ces outils.\n• Analyser les coûts liés à la qualité, à la non-qualité, ainsi que les coûts cachés.\n• Réaliser un écrit argumenté pour conseiller le décideur quant à la gestion de la qualité.\n• Relier la démarche qualité au pilotage de la performance globale et à la durabilité.\n• Comprendre — pourquoi la qualité est un levier de performance et non une simple exigence commerciale.\n• Calculer — structurer et chiffrer le coût d'obtention de la qualité (prévention, évaluation, défaillances interne et externe).\n• Interpréter — un diagramme de Pareto, un diagramme d'Ishikawa, une estimation par intervalle de confiance.\n• Critiquer — les démarches qualité : coûts cachés, surqualité, effets pervers, limites des certifications."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Articulation avec le reste de l'UE 11",
          "text": "Ce chapitre s'inscrit dans la continuité du chapitre sur les **tableaux de bord** (un tableau de bord peut servir à piloter la qualité), du chapitre sur le **coût cible** (la qualité optimale à un coût acceptable) et des chapitres sur les **coûts** (la qualité a un coût qu'il faut mesurer et arbitrer)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale — Pourquoi piloter la qualité ?**"
        },
        {
          "type": "p",
          "text": "Pendant longtemps, la qualité a été perçue comme une contrainte : un coût supplémentaire que l'entreprise devait supporter pour satisfaire des clients de plus en plus exigeants. Cette vision est aujourd'hui dépassée. Dans un environnement marqué par l'intensification de la concurrence, la mondialisation des marchés, la montée des exigences réglementaires et la sensibilité croissante des consommateurs aux enjeux environnementaux et sociaux, la qualité est devenue un levier majeur de performance et de compétitivité."
        },
        {
          "type": "p",
          "text": "Le paradoxe est désormais bien établi : ce n'est pas la qualité qui coûte cher, mais la **non-qualité**. Un produit défectueux livré au client engendre des coûts de garantie, des retours, des litiges, une dégradation de l'image de marque et, in fine, une perte de parts de marché. À l'inverse, une démarche qualité bien conçue réduit les gaspillages, fluidifie les processus, fidélise la clientèle et soutient durablement la marge."
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion joue ici un rôle central. Il lui revient de **mesurer** ce qui était jusque-là invisible (les coûts cachés de la non-qualité), de **piloter** l'amélioration continue à l'aide d'indicateurs pertinents, et de **conseiller** le décideur sur les arbitrages entre l'effort de prévention et le coût des défaillances. La réforme 2027 du DCG accorde une place renforcée à cette dimension qualitative et extra-financière de la performance : la qualité y est explicitement reliée à la performance globale et à la durabilité."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/01.png",
          "alt": "Figure du cours",
          "width": 1440,
          "height": 600,
          "caption": "Figure 1 — De la qualité à la création de valeur : une logique en cascade."
        },
        {
          "type": "p",
          "text": "Ce chapitre adopte la démarche pédagogique du nouveau programme, structurée autour de quatre questions : **comprendre** (pourquoi la qualité existe-t-elle ?), **calculer** (comment mesurer son coût ?), **interpréter** (comment exploiter les outils ?) et **critiquer** (quelles sont les limites ?)."
        }
      ]
    },
    {
      "id": "1-comprendre-la-qualite-et-son-management",
      "title": "1. Comprendre : la qualité et son management",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 La notion de qualité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La qualité",
          "text": "Selon la définition de **l'ISO** (Organisation internationale de normalisation), la qualité d'un produit ou d'un service est **l'aptitude d'un ensemble de caractéristiques à satisfaire des besoins ou des attentes**, qu'ils soient exprimés ou implicites."
        },
        {
          "type": "p",
          "text": "Cette définition est riche d'enseignements. La qualité **n'est pas une propriété objective et absolue** du produit : un bien n'est pas « de qualité » par nature. La qualité ne se comprend que **relativement à l'usage** et aux attentes du client. Une montre de plongée et une montre de soirée ne se jugent pas selon les mêmes critères ; ce qui compte, c'est l'adéquation entre les caractéristiques offertes et les besoins du bénéficiaire."
        },
        {
          "type": "p",
          "text": "Il en découle une conséquence essentielle pour le pilotage : l'objectif n'est pas la **qualité maximale** (toujours plus, sans limite), mais la **qualité optimale** — celle qui satisfait le client au meilleur coût. Viser au-delà des attentes du client, c'est engager des dépenses qui ne seront pas valorisées : c'est la *surqualité*, que nous étudierons dans la partie critique."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La gestion de la qualité",
          "text": "La **gestion de la qualité** (ou management de la qualité) est la mise en place, dans un organisme quel qu'il soit, d'un **ensemble d'activités coordonnées orientées vers la satisfaction du client**, bénéficiaire final de son activité, ainsi que de l'ensemble de ses parties prenantes.\n**ILLUSTRATION — l’entreprise — la qualité, une notion relative**\nPour un client compétiteur, la qualité d'un produit réside dans sa précision et sa durabilité ; pour un client soucieux d'environnement, elle réside aussi dans la traçabilité des matières recyclées. Le même produit est jugé selon des attentes différentes : la démarche qualité doit donc satisfaire plusieurs dimensions simultanément."
        },
        {
          "type": "h3",
          "text": "1.2 L'évolution du management de la qualité"
        },
        {
          "type": "p",
          "text": "La conception de la qualité a profondément évolué au cours du XXᵉ siècle, en quatre grandes étapes qui correspondent à un élargissement progressif du périmètre de responsabilité."
        },
        {
          "type": "table",
          "headers": [
            "**Étape**",
            "**Logique dominante**",
            "**Caractéristique**"
          ],
          "rows": [
            [
              "Le contrôle final",
              "Vérifier a posteriori",
              "On trie les produits conformes / non conformes en fin de chaîne ; on constate les effets, pas les causes."
            ],
            [
              "L'assurance qualité",
              "Garantir le processus",
              "On documente et formalise les procédures pour donner confiance (norme ISO 9001)."
            ],
            [
              "La qualité totale (TQM)",
              "Prévenir et améliorer",
              "La qualité devient l'affaire de tous, en continu, vers le « zéro défaut »."
            ],
            [
              "La qualité durable",
              "Intégrer la perf. globale",
              "La qualité englobe les dimensions sociales et environnementales (RSE, ESG)."
            ]
          ]
        },
        {
          "type": "p",
          "text": "La première approche, le **contrôle de la qualité**, est une action de fin de processus : on procède à des tests de conformité destinés à rejeter les productions non conformes. Cette procédure **ne fait que constater les effets et non les causes** — c'est le contrôle au sens restrictif de « vérification »."
        },
        {
          "type": "p",
          "text": "Progressivement, le contrôle s'est déplacé vers **l'amont** des processus. L'objectif n'est plus d'atteindre un « niveau acceptable de défauts » mais de viser, par **l'amélioration continue**, le « zéro défaut » : c'est le contrôle au sens étendu de « maîtrise ». On parle alors de **qualité totale** (*Total Quality Management*)."
        },
        {
          "type": "h3",
          "text": "1.3 Les principes du management de la qualité"
        },
        {
          "type": "p",
          "text": "La famille des normes ISO 9000 fonde le management de la qualité moderne sur sept principes directeurs :"
        },
        {
          "type": "ul",
          "items": [
            "**Orientation client :**comprendre et satisfaire les besoins présents et futurs des clients.",
            "**Leadership :**la direction donne le cap et crée les conditions de l'implication de tous.",
            "**Implication du personnel :**la qualité est l'affaire de chacun, à tous les niveaux.",
            "**Approche processus :**piloter les activités comme des processus reliés entre eux.",
            "**Amélioration continue :**faire de la progression un objectif permanent (logique PDCA).",
            "**Décision fondée sur des preuves :**s'appuyer sur l'analyse de données fiables.",
            "**Management des relations avec les parties prenantes :**fournisseurs, partenaires, société."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LA CERTIFICATION — attester la conformité",
          "text": "La **certification** est une procédure par laquelle un **organisme externe indépendant** atteste qu'un produit, un service ou un processus est conforme aux exigences d'une norme.\n**ISO 9000 :**principes essentiels et vocabulaire de la qualité.\n**ISO 9001 :**exigences d'un système de management de la qualité (la norme certifiable).\n**ISO 9004 :**lignes directrices pour l'amélioration permanente du système.\nEn France, ces normes sont répertoriées par **l'AFNOR** ; la procédure est confiée à des organismes accrédités par le **COFRAC** (Comité français d'accréditation)."
        },
        {
          "type": "h3",
          "text": "1.4 La qualité comme levier de performance"
        },
        {
          "type": "p",
          "text": "La gestion de la qualité est une démarche globale qui agit simultanément sur trois registres de la performance :"
        },
        {
          "type": "ul",
          "items": [
            "**Un registre économique :**source d'économies sur toute la chaîne de valeur (réduction des rebuts, retouches, dysfonctionnements) et de rentabilité — un produit fiable justifie un prix plus élevé et différencie l'offre.",
            "**Un registre commercial :**satisfaction et fidélisation du client, protection de l'image de marque, conquête de parts de marché.",
            "**Un registre social :**élément fédérateur et culture d'entreprise ; la démarche participative est source d'adhésion, de motivation et de satisfaction du personnel."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — la formule à retenir",
          "text": "Le jury attend que vous sachiez **renverser l'intuition naïve** : « la qualité ne coûte pas cher, c'est la non-qualité qui coûte cher ». Sachez relier la qualité aux trois performances (économique, commerciale, sociale) et, depuis la réforme, à la **performance globale** (volet environnemental et durable).\n**ERREURS FRÉQUENTES — sur la notion de qualité**\nConfondre **qualité maximale** et **qualité optimale** : viser le « toujours plus » génère de la surqualité non valorisée.\nRéduire la qualité au seul **contrôle final** : la maîtrise se construit en amont, par la prévention.\nOublier que la certification atteste la **conformité d'un processus**, pas la « qualité » perçue par le client."
        }
      ]
    },
    {
      "id": "2-les-couts-de-la-qualite",
      "title": "2. Les coûts de la qualité",
      "blocks": [
        {
          "type": "p",
          "text": "Mesurer la qualité, c'est d'abord en chiffrer le coût. Le **coût d'obtention de la qualité (COQ)**, parfois appelé coût total de la qualité, regroupe l'ensemble des dépenses engagées pour **obtenir** la qualité et l'ensemble des pertes subies du fait de la **non-qualité**. La typologie de référence, héritée des travaux de Feigenbaum et de l'AFNOR, distingue quatre catégories regroupées en deux familles."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/02.png",
          "alt": "2. Les coûts de la qualité",
          "width": 1440,
          "height": 680,
          "caption": "Figure 2 — Cartographie du coût d'obtention de la qualité (COQ)."
        },
        {
          "type": "h3",
          "text": "2.1 Les quatre catégories de coûts"
        },
        {
          "type": "h3",
          "text": "Les coûts de prévention"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coûts de prévention",
          "text": "Coûts engagés pour **éviter préventivement** l'apparition des anomalies, **avant** que le défaut ne survienne."
        },
        {
          "type": "p",
          "text": "Exemples : formation du personnel à la qualité, maintenance préventive des équipements, conception soignée du produit, ingénierie des méthodes, sélection et audit des fournisseurs."
        },
        {
          "type": "h3",
          "text": "Les coûts d'évaluation (ou de détection)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coûts d'évaluation",
          "text": "Coûts liés à la **vérification et à la détection** des produits non conformes : ils servent à mesurer le niveau de qualité atteint."
        },
        {
          "type": "p",
          "text": "Exemples : équipements et personnel affectés aux contrôles (sondages, tests, mesures), inspection des approvisionnements, contrôle des produits finis, campagnes d'échantillonnage et traitement statistique."
        },
        {
          "type": "h3",
          "text": "Les coûts de défaillance interne"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coûts de défaillance interne",
          "text": "Coûts des défaillances (malfaçons) **détectées avant la livraison** au client."
        },
        {
          "type": "p",
          "text": "Exemples : matières perdues et temps passé sur les rebuts, retouches et reprises, déclassement de produits, inactivité des installations, sur-stocks de sécurité destinés à pallier l'irrégularité de la production."
        },
        {
          "type": "h3",
          "text": "Les coûts de défaillance externe"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coûts de défaillance externe",
          "text": "Coûts des défaillances **détectées après la livraison** au client. Ce sont les plus dangereux, car aux coûts directs s'ajoutent des coûts difficilement chiffrables."
        },
        {
          "type": "p",
          "text": "Exemples : échanges et réparations sous garantie, traitement du SAV, indemnités et frais de procès, rappels de produits, et surtout **détérioration de l'image de marque** et manque à gagner sur les ventes perdues."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une relation fondamentale entre les quatre catégories",
          "text": "Les quatre catégories ne sont pas indépendantes : elles sont **substituables**. Investir davantage en **prévention** et **évaluation** (coûts de conformité) fait mécaniquement **baisser** les coûts de défaillance interne et externe (coûts de non-conformité). C'est cet arbitrage que le contrôleur de gestion doit éclairer."
        },
        {
          "type": "h3",
          "text": "2.2 Le coût global de la qualité et l'optimum économique"
        },
        {
          "type": "p",
          "text": "En additionnant les coûts de conformité (croissants avec l'effort qualité) et les coûts de non-conformité (décroissants avec cet effort), on obtient le **coût total de la qualité**. Sa représentation graphique fait apparaître un **minimum** : l'optimum économique, qui correspond à la qualité optimale."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/03.png",
          "alt": "2. Les coûts de la qualité",
          "width": 1440,
          "height": 760,
          "caption": "Figure 3 — Courbe du coût total de la qualité et optimum économique (Q*)."
        },
        {
          "type": "p",
          "text": "La lecture de cette courbe est essentielle. À **gauche** de l'optimum, l'entreprise sous-investit dans la prévention : les défaillances coûtent cher. À **droite**, elle sur-investit : elle paie une qualité que le client ne valorise pas (surqualité). Le point **Q*** matérialise la qualité optimale, non pas maximale : le seuil où un euro supplémentaire de prévention ne fait plus économiser un euro de défaillance."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — interpréter la courbe",
          "text": "Le jury valorise l'interprétation, pas seulement le tracé. Sachez expliquer que le minimum de la courbe traduit un **arbitrage coût/qualité**, et reliez-le au **coût cible** (chapitre dédié) : la qualité optimale s'inscrit dans la recherche du coût acceptable pour le marché."
        },
        {
          "type": "h3",
          "text": "2.3 Application chiffrée — le COQ de l’entreprise"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Le coût d’obtention de la qualité (COQ)",
          "text": "Chez CERAMIX (fabricant de céramiques pour les arts de la table), le contrôleur de gestion a reconstitué, pour l'exercice écoulé, les dépenses liées à la qualité (en milliers d'euros). Les données comptables et les estimations des services concernés sont les suivantes :"
        },
        {
          "type": "table",
          "headers": [
            "**Poste**",
            "**Catégorie**",
            "**Montant (k€)**"
          ],
          "rows": [
            [
              "Formation qualité des opérateurs",
              "Prévention",
              "18"
            ],
            [
              "Maintenance préventive des machines",
              "Prévention",
              "24"
            ],
            [
              "Audit et sélection des fournisseurs",
              "Prévention",
              "13"
            ],
            [
              "Contrôles et tests en cours de production",
              "Évaluation",
              "31"
            ],
            [
              "Inspection finale et échantillonnage",
              "Évaluation",
              "22"
            ],
            [
              "Rebuts et matières perdues",
              "Défaillance interne",
              "47"
            ],
            [
              "Retouches et reprises en atelier",
              "Défaillance interne",
              "36"
            ],
            [
              "Garanties, SAV et réexpéditions",
              "Défaillance externe",
              "58"
            ],
            [
              "Avoirs, indemnités et litiges clients",
              "Défaillance externe",
              "41"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 (suite) — Travail à faire",
          "text": "Regrouper les coûts par catégorie puis par famille (conformité / non-conformité). Calculer le COQ total et la part de chaque famille. Commenter et proposer une orientation d'action."
        },
        {
          "type": "h4",
          "text": "Corrigé — regroupement par catégorie"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Détail**",
            "**Total (k€)**",
            "**% du COQ**"
          ],
          "rows": [
            [
              "Prévention",
              "18 + 24 + 13",
              "55",
              "19,0 %"
            ],
            [
              "Évaluation",
              "31 + 22",
              "53",
              "18,3 %"
            ],
            [
              "Défaillance interne",
              "47 + 36",
              "83",
              "28,6 %"
            ],
            [
              "Défaillance externe",
              "58 + 41",
              "99",
              "34,1 %"
            ],
            [
              "COQ TOTAL",
              "",
              "290",
              "100 %"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Corrigé — regroupement par famille"
        },
        {
          "type": "table",
          "headers": [
            "**Famille**",
            "**Composantes**",
            "**Total (k€)**",
            "**Part**"
          ],
          "rows": [
            [
              "Coûts de CONFORMITÉ (on investit)",
              "Prévention + Évaluation = 55 + 53",
              "108",
              "37,2 %"
            ],
            [
              "Coûts de NON-CONFORMITÉ (on subit)",
              "Déf. interne + externe = 83 + 99",
              "182",
              "62,8 %"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Interprétation — le diagnostic du contrôleur de gestion",
          "text": "Près de 63 % du COQ est constitué de coûts de non-conformité, c'est-à-dire de pertes subies. Le poste le plus lourd (34,1 %) est la défaillance externe : les défauts atteignent le client, scénario le plus coûteux et le plus dangereux pour l'image de l’entreprise. Or l'effort de prévention ne représente que 19 % du total.\nLe diagnostic est clair : **l’entreprise se situe à gauche de l'optimum**. En réallouant quelques dizaines de milliers d'euros vers la prévention (formation, maintenance, sélection des fournisseurs), l'entreprise peut espérer réduire fortement les 182 k€ de défaillances. C'est l'arbitrage que le contrôleur de gestion recommandera à la direction.\n**ERREURS FRÉQUENTES — les coûts de la qualité**\nClasser une dépense dans la mauvaise catégorie : un **contrôle** est de l'évaluation, une **retouche** est une défaillance interne.\nOublier les coûts de défaillance externe **difficilement chiffrables** (image, ventes perdues) : ils sont réels même hors comptabilité.\nConclure qu'il faut « supprimer » les défaillances à tout prix : l'objectif est l'**optimum**, pas le zéro absolu coûte que coûte."
        },
        {
          "type": "h3",
          "text": "2.4 Les coûts cachés (Savall — ISÉOR)"
        },
        {
          "type": "p",
          "text": "La notion de **coût caché** a été développée par Henri **Savall** et l'**ISÉOR** (Institut de socio-économie des entreprises et des organisations, Lyon). Elle est explicitement au programme de la réforme, au titre de l'analyse des causes de non-performance."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coûts cachés",
          "text": "Les **coûts cachés** désignent les coûts **non repérés par les systèmes d'information classiques** (comptabilité générale ou de gestion, budgets, tableaux de bord financiers), par opposition aux **coûts visibles** qui possèdent une dénomination comptable (charges de personnel, achats…)."
        },
        {
          "type": "p",
          "text": "Les coûts cachés **existent** mais ne sont pas identifiés correctement : confondus avec d'autres coûts, ils ne sont pas pris en compte dans la décision. Les coûts de la non-qualité sont, par nature, largement cachés et **transversaux**. Selon l'ISÉOR, leur origine réside dans cinq **dysfonctionnements** qui se traduisent en cinq composantes de coût :"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/04.png",
          "alt": "Corrigé — regroupement par famille",
          "width": 906,
          "height": 858,
          "caption": "Figure 4 — Mécanisme des coûts cachés : des composants aux impacts."
        },
        {
          "type": "table",
          "headers": [
            "**Cinq indicateurs de dysfonctionnement**",
            "**Cinq composantes de coût caché**"
          ],
          "rows": [
            [
              "Absentéisme",
              "Sursalaires (remplacement de l'absent)"
            ],
            [
              "Accidents du travail",
              "Surtemps (régulation du dysfonctionnement)"
            ],
            [
              "Rotation du personnel",
              "Surconsommations"
            ],
            [
              "Non-qualité des produits",
              "Non-productions (manque à produire)"
            ],
            [
              "Surcroît de contrôle",
              "Non-création de potentiel stratégique"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — l’entreprise — l'effet pervers d'une décision « rentable »",
          "text": "Pour réduire le coût de production, le responsable d'atelier accélère les cadences. À court terme, le coût unitaire baisse : il sera félicité. Mais la cadence excessive multiplie les **malfaçons**. Les conséquences — retours, avoirs, perte d'un distributeur — apparaîtront **ailleurs** (chez le directeur commercial) et **plus tard**. Le système de coûts classique **n'impute pas** ces pertes à la décision qui les a causées : un gain visible et localisé masque une perte invisible et transversale, bien supérieure.\n**POINT EXAMEN — coûts cachés**\nQuestion classique : « pourquoi les coûts de la non-qualité sont-ils souvent cachés ? » Réponse attendue : parce qu'ils sont **transversaux** (répartis sur plusieurs services), **différés** dans le temps, et qu'ils ne possèdent **pas de dénomination comptable propre**. D'où l'intérêt d'un suivi spécifique par le contrôle de gestion."
        }
      ]
    },
    {
      "id": "3-les-outils-et-demarches-qualite",
      "title": "3. Les outils et démarches qualité",
      "blocks": [
        {
          "type": "p",
          "text": "Les outils de la qualité se répartissent selon le moment où ils interviennent. En **amont** (logique ex ante ou continue), ils servent à comprendre et améliorer les processus : roue de Deming, Pareto, Ishikawa, cercles de qualité. En **aval** (logique ex post), les techniques d'échantillonnage vérifient statistiquement la conformité d'une production déjà lancée. Ces outils sont, pour la plupart, peu formalisés et peu mathématiques : leur valeur tient à la rigueur de la démarche."
        },
        {
          "type": "h3",
          "text": "3.1 La roue de Deming (PDCA)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La roue de Deming — cycle PDCA",
          "text": "Le cycle **PDCA** (*Plan – Do – Check – Act*) est une méthode d'amélioration continue en quatre étapes, représentée par une roue qui « monte » progressivement la pente du progrès."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/05.png",
          "alt": "3. Les outils et démarches qualité",
          "width": 1240,
          "height": 720,
          "caption": "Figure 5 — La roue de Deming (PDCA) et le principe d'amélioration continue."
        },
        {
          "type": "p",
          "text": "Le cycle se lit ainsi :"
        },
        {
          "type": "ul",
          "items": [
            "**Plan (Planifier) :**identifier le problème, analyser ses causes, définir des objectifs et un plan d'action.",
            "**Do (Réaliser) :**mettre en œuvre les actions décidées, le plus souvent à titre expérimental.",
            "**Check (Vérifier) :**mesurer les résultats obtenus et les comparer aux objectifs.",
            "**Act (Agir / Réagir) :**corriger les écarts, puis standardiser et généraliser ce qui fonctionne."
          ]
        },
        {
          "type": "p",
          "text": "La métaphore de la roue est précieuse : à chaque tour, on progresse. Une **cale** (la standardisation, étape Act) empêche la roue de redescendre — sans elle, l'organisation retomberait dans ses anciennes habitudes. Le PDCA incarne le principe de l'amélioration continue (*kaizen*) qui fonde la qualité totale."
        },
        {
          "type": "h3",
          "text": "3.2 Le diagramme de Pareto (loi des 20/80)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le diagramme de Pareto",
          "text": "Le **diagramme de Pareto** repose sur le principe qu'**un petit nombre de causes produit la majorité des effets** (loi des « 20/80 ») : environ 20 % des causes expliquent environ 80 % des problèmes."
        },
        {
          "type": "p",
          "text": "La construction se fait en plusieurs temps : recenser les défauts et relever leur fréquence, les **classer par ordre décroissant**, calculer les fréquences **cumulées**, puis représenter graphiquement (barres pour les effectifs, courbe pour le cumul). L'analyse permet de **hiérarchiser les priorités d'action**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Le diagramme de Pareto des défauts",
          "text": "Le contrôleur de gestion relève, sur le dernier trimestre, les défauts ayant motivé un retour client (380 retours au total) :"
        },
        {
          "type": "table",
          "headers": [
            "**Type de défaut**",
            "**Nb**",
            "**Fréq.**",
            "**Fréq. cumulée**",
            "**Rang**"
          ],
          "rows": [
            [
              "Coutures défectueuses",
              "156",
              "41,1 %",
              "41,1 %",
              "1"
            ],
            [
              "Défaut de teinture",
              "92",
              "24,2 %",
              "65,3 %",
              "2"
            ],
            [
              "Pièce manquante",
              "58",
              "15,3 %",
              "80,5 %",
              "3"
            ],
            [
              "Erreur de taille",
              "40",
              "10,5 %",
              "91,1 %",
              "4"
            ],
            [
              "Emballage abîmé",
              "22",
              "5,8 %",
              "96,8 %",
              "5"
            ],
            [
              "Autres",
              "12",
              "3,2 %",
              "100 %",
              "6"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Travail à faire : construire le tableau de Pareto (fréquences, fréquences cumulées, rang), tracer le diagramme et identifier les défauts prioritaires sur lesquels concentrer les actions correctives."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/06.png",
          "alt": "3. Les outils et démarches qualité",
          "width": 1485,
          "height": 839,
          "caption": "Figure 6 — Diagramme de Pareto des défauts (l’entreprise)."
        },
        {
          "type": "p",
          "text": "**Corrigé — diagramme de Pareto :**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 (suite) — Corrigé et interprétation",
          "text": "Deux défauts seulement — **coutures défectueuses** et **défaut de teinture** — concentrent près de **65 % des retours**, et les trois premiers en expliquent plus de 80 %. La conclusion opérationnelle s'impose : plutôt que de disperser ses moyens sur six défauts, l’entreprise doit **concentrer son plan d'action sur les coutures et la teinture**. C'est là que le retour sur effort sera le plus élevé."
        },
        {
          "type": "h3",
          "text": "3.3 Le diagramme causes-effets (Ishikawa, 5 M)"
        },
        {
          "type": "p",
          "text": "Le diagramme de Pareto dit où agir ; le diagramme d'Ishikawa cherche pourquoi le problème survient. Les deux outils sont complémentaires."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le diagramme d'Ishikawa",
          "text": "Le **diagramme d'Ishikawa** (ou diagramme « en arêtes de poisson », ou causes-effets) est un **support de réflexion collective** destiné à examiner les causes profondes d'un problème. Les causes sont classées en cinq familles, les **« 5 M »** : Matière, Matériel, Méthode, Main-d'œuvre, Milieu."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/07.png",
          "alt": "3. Les outils et démarches qualité",
          "width": 1520,
          "height": 760,
          "caption": "Figure 7 — Diagramme d'Ishikawa (5 M) appliqué aux retours clients de l’entreprise."
        },
        {
          "type": "p",
          "text": "L'outil n'a **rien de mathématique**. Issu d'un brainstorming, il recense les causes aboutissant à un effet en posant continuellement la question « pourquoi ? » (technique des « 5 pourquoi »). C'est simultanément un outil d'animation, de formation, de collecte et de diagnostic, qui donne une vision globale des interdépendances entre causes."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Mémoriser les 5 M",
          "text": "**Matière** (tissu recyclé irrégulier), **Matériel** (machine mal réglée), **Méthode** (gamme floue, auto-contrôle absent), **Main-d'œuvre** (formation insuffisante), **Milieu** (éclairage, cadence). On ajoute parfois un 6ᵉ M : le **Management** (moyens financiers)."
        },
        {
          "type": "h3",
          "text": "3.4 Les cercles de qualité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Les cercles de qualité",
          "text": "Les **cercles de qualité** sont de petits **groupes de salariés volontaires** (4 à 15 personnes, de niveaux et services différents) qui se réunissent régulièrement pour identifier, analyser et résoudre les problèmes de qualité rencontrés dans leur travail."
        },
        {
          "type": "p",
          "text": "Apparus au Japon au début des années 1960 sous l'influence d'**Ishikawa**, diffusés en Occident à la fin des années 1970, les cercles relèvent du **management participatif** : ceux qui connaissent le mieux le travail sont les mieux placés pour l'améliorer. Le diagramme d'Ishikawa est leur principal outil d'animation."
        },
        {
          "type": "p",
          "text": "Ils remplissent trois fonctions — **technique** (améliorer la qualité), **économique** (réduire les coûts) et **sociale** (impliquer et motiver). Leur bon fonctionnement suppose le volontariat, un animateur, une communication égalitaire et une délimitation claire des problèmes traités."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un outil au destin contrasté",
          "text": "Les cercles de qualité n'ont **aucun pouvoir de décision** : leurs propositions sont transmises à la hiérarchie. Après un fort effet de mode, ils ont largement disparu en Europe et aux États-Unis, faute d'engagement durable des directions. L'idée d'amélioration participative survit cependant sous d'autres formes (groupes kaizen, chantiers d'amélioration)."
        },
        {
          "type": "h3",
          "text": "3.5 Le contrôle par échantillonnage : l'estimation"
        },
        {
          "type": "p",
          "text": "Lorsque la production est lancée, l'entreprise doit vérifier la conformité des biens produits. Un **contrôle exhaustif** n'est justifié que pour des enjeux de sécurité ou de très haute technologie, car il est coûteux. Dans la plupart des cas, l'entreprise recourt à des **techniques d'échantillonnage** : elle prélève un échantillon et **généralise** l'observation à l'ensemble de la production, en quantifiant le risque d'erreur."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — LIMITES DU PROGRAMME — réforme 2027",
          "text": "Le guide pédagogique officiel encadre strictement le contrôle statistique de la qualité :\nSeule la **loi normale** est mobilisée.\nL'échantillonnage est abordé **sous le seul angle des estimations** (ponctuelle et par intervalle de confiance).\nLes **tests d'hypothèse** (unilatéraux et bilatéraux) ne sont PAS au programme — contrairement à l'ancien cours. Ils sont mentionnés ici pour mémoire mais ne feront pas l'objet d'exercices."
        },
        {
          "type": "h3",
          "text": "Distribution d'échantillonnage"
        },
        {
          "type": "p",
          "text": "Soit une population mère Ω de taille N et une variable aléatoire X. On en tire des échantillons de taille n. La variable Xₙ qui associe à chaque échantillon sa moyenne, et la variable Fₙ qui lui associe sa fréquence, obéissent (sous conditions) à une loi normale :"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/08.png",
          "alt": "3. Les outils et démarches qualité",
          "width": 1444,
          "height": 422,
          "caption": "Figure 8 — Estimation : de l’échantillon à la population mère."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Paramètres des lois d'échantillonnage",
          "text": "**Moyennes :**si X suit une loi normale, ou si n ≥ 30 (théorème central limite), alors Xₙ suit une loi N( m ; σ/√n ).\n**Fréquences :**si n ≥ 30, alors Fₙ suit approximativement une loi N( p ; √(pq/n) ), avec q = 1 − p."
        },
        {
          "type": "h3",
          "text": "Estimation ponctuelle"
        },
        {
          "type": "p",
          "text": "À partir des caractéristiques calculées sur un échantillon, on estime celles, inconnues, de la population mère."
        },
        {
          "type": "table",
          "headers": [
            "**Paramètre de la population**",
            "**Estimateur ponctuel**"
          ],
          "rows": [
            [
              "Moyenne m",
              "la moyenne x̄ de l'échantillon"
            ],
            [
              "Proportion p",
              "la fréquence f de l'échantillon"
            ],
            [
              "Écart type σ",
              "s = √( n/(n−1) ) × σ' (σ' = écart type de l'échantillon)"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Pourquoi corriger l'écart type ?",
          "text": "σ' mesure la dispersion autour de la moyenne de l'**échantillon**, non de la population : il **sous-estime** σ, d'autant plus que n est petit. Le facteur n/(n−1) corrige ce biais. La touche σₙ₋₁ de la calculatrice donne directement s."
        },
        {
          "type": "h3",
          "text": "Estimation par intervalle de confiance"
        },
        {
          "type": "p",
          "text": "Plutôt qu'une valeur unique, on fournit une « fourchette » qui contient le paramètre cherché avec une probabilité α (le coefficient de confiance) :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Intervalle de confiance d'une MOYENNE (loi normale)",
          "text": "Moyenne (σ connu) : .\nMoyenne (σ inconnu, n ≥ 30) : .\n**Valeurs de t :**t = 1,96 pour α = 95 % · t = 2,575 pour α = 99 %.\n**ERREURS FRÉQUENTES — HORS PROGRAMME DCG — l'intervalle de confiance d'une proportion**\nLe guide pédagogique officiel (REF-01, compétence 4.3) précise que **le calcul d'un intervalle de confiance n'est étudié que pour une moyenne** : **les intervalles pour une proportion ne sont pas abordés** au DCG.\nLa formule I = [ f ± t·√(f(1−f)/n) ] est mentionnée ici **pour mémoire uniquement** ; elle **ne fera l'objet d'aucun exercice** et ne doit pas être mobilisée dans une copie d'examen. Au DCG, l'estimation d'une proportion se limite à l'**estimation ponctuelle** (p ≈ f).\n**ILLUSTRATION — Application — durée de traitement d'une réclamation**\nLe service relation client mesure la durée de traitement de 30 réclamations (échantillon non exhaustif). On obtient x̄ = 26,33 minutes et un écart type d'échantillon σ' = 12,31 minutes.\n1. Estimations ponctuelles. Moyenne m ≈ 26,33 min. Écart type : .\n2. Intervalle de confiance à 95 % de la moyenne (σ inconnu, n ≥ 30) : .\n3. Intervalle à 99 % : .\n**Interprétation :**plus le niveau de confiance augmente, plus l'intervalle s'élargit — ce qui est gagné en certitude est perdu en précision. Le contrôleur de gestion retient 95 % pour fixer un objectif de délai « sous 31 minutes » dans le tableau de bord qualité.\n**POINT EXAMEN — échantillonnage**\nNe pas confondre les paramètres de la **population** (m, p, σ) et de l'**échantillon** (x̄, f, σ').\nPenser à **corriger σ'** en s avant tout intervalle de confiance d'une moyenne.\nRetenir par cœur **t = 1,96 (95 %)** et **t = 2,575 (99 %)**.\nNe pas traiter de **test d'hypothèse**, ni d'**IC pour une proportion** : tous deux hors programme. L'IC ne concerne que la **moyenne**."
        },
        {
          "type": "h3",
          "text": "3.6 Indicateurs, normes et amélioration continue"
        },
        {
          "type": "p",
          "text": "Le pilotage de la qualité s'appuie sur des **indicateurs qualité** intégrés au tableau de bord : taux de rebut, taux de retours clients, taux de service, taux de réclamation, coût de non-qualité rapporté au chiffre d'affaires, délai de traitement des réclamations, taux de satisfaction client (NPS). Le guide précise d'ailleurs qu'un tableau de bord peut être exploité pour piloter la qualité."
        },
        {
          "type": "p",
          "text": "Ces indicateurs s'inscrivent dans une **démarche d'amélioration continue** : on ne mesure que pour agir. La logique PDCA, alimentée par Pareto et Ishikawa et portée par les démarches participatives, transforme la mesure en progrès durable. Les **normes et certifications** (ISO 9001) en constituent le cadre formel et la preuve vis-à-vis des parties prenantes."
        }
      ]
    },
    {
      "id": "4-la-qualite-au-service-du-pilotage-de-la-performance",
      "title": "4. La qualité au service du pilotage de la performance",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Qualité et contrôle de gestion"
        },
        {
          "type": "p",
          "text": "La qualité n'est pleinement utile au pilotage que si elle est **mesurée, suivie et reliée à la décision**. C'est précisément le rôle du contrôleur de gestion, dont la fonction a évolué : historiquement centrée sur les variables monétaires, elle intègre désormais les variables qualitatives et extra-financières de la performance."
        },
        {
          "type": "p",
          "text": "Concrètement, le contrôle de gestion apporte trois contributions à la qualité : il **rend visibles** les coûts cachés de la non-qualité (en les isolant des coûts classiques) ; il **instrumente** le pilotage par des indicateurs et des tableaux de bord qualité ; il **éclaire les arbitrages** (prévention contre défaillance, qualité optimale contre maximale) en chiffrant leurs conséquences."
        },
        {
          "type": "h3",
          "text": "4.2 Qualité et création de valeur"
        },
        {
          "type": "p",
          "text": "La qualité crée de la valeur par deux mécanismes complémentaires. Du côté des **coûts**, elle réduit les gaspillages, les rebuts et les défaillances : c'est un gain d'efficience. Du côté de la **valeur perçue**, elle fidélise le client, protège l'image de marque et autorise un positionnement premium : c'est un gain de différenciation. La qualité agit donc simultanément sur les deux leviers fondamentaux de la performance — réduire les coûts et accroître la valeur."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — l’entreprise — de la dépense à l'investissement",
          "text": "Le plan du contrôleur de gestion prévoit 40 k€ de prévention supplémentaire (formation couture, fiabilisation des machines, resserrement des achats de tissu). Objectif : ramener la défaillance externe de 99 k€ à 55 k€. Le COQ passerait de 290 à environ **246 k€**, soit **44 k€ d'économie nette**, tout en sécurisant le contrat du distributeur. La prévention n'est plus une charge : c'est un **investissement rentable**."
        },
        {
          "type": "h3",
          "text": "4.3 Qualité, performance globale et durabilité"
        },
        {
          "type": "p",
          "text": "La réforme 2027 inscrit explicitement la qualité dans la **performance globale**, c'est-à-dire la prise en compte conjointe des dimensions **économique**, **sociale** et **environnementale** (triple bottom line). La qualité dialogue naturellement avec les enjeux **ESG** et **RSE**."
        },
        {
          "type": "table",
          "headers": [
            "**Dimension de la performance globale**",
            "**Lien avec la qualité**",
            "**Indicateur de durabilité**"
          ],
          "rows": [
            [
              "Environnementale (E)",
              "Moins de rebuts = moins de matières gaspillées et de déchets",
              "Taux de rebut, déchets évités, taux de matière recyclée conforme"
            ],
            [
              "Sociale (S)",
              "Démarche participative, sécurité, montée en compétence",
              "Taux de formation qualité, accidents du travail, absentéisme"
            ],
            [
              "Gouvernance (G)",
              "Traçabilité, fiabilité de l'information, conformité",
              "Taux de conformité fournisseurs, indicateurs de certification"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS DURABILITÉ — la qualité comme levier écologique",
          "text": "Pour l’entreprise, qualité et durabilité sont **indissociables**. Chaque produit défectueux, c'est du tissu recyclé gaspillé, de l'énergie de production perdue et un transport de retour qui alourdit l'empreinte carbone. **Réduire la non-qualité, c'est réduire l'impact environnemental**. La promesse écoresponsable de la marque exige donc une qualité irréprochable : un défaut n'est pas seulement un coût économique, c'est aussi une **incohérence stratégique** au regard de la performance globale. Le contrôleur de gestion propose d'ajouter au tableau de bord un indicateur croisé : le « coût de non-qualité par kg de matière recyclée gaspillée »."
        },
        {
          "type": "h3",
          "text": "4.4 Les limites des démarches qualité"
        },
        {
          "type": "p",
          "text": "Si la qualité est un levier puissant, les démarches qui la portent présentent des limites et des effets pervers que le contrôleur de gestion doit savoir identifier. Cette analyse critique est explicitement attendue par le référentiel."
        },
        {
          "type": "h3",
          "text": "La surqualité"
        },
        {
          "type": "p",
          "text": "Viser la qualité **maximale** plutôt qu'**optimale** conduit à engager des dépenses que le client ne valorise pas. La surqualité dégrade la compétitivité (prix trop élevé) sans améliorer la satisfaction : c'est le retour à droite de l'optimum sur la courbe du coût total."
        },
        {
          "type": "h3",
          "text": "Les coûts cachés et la bureaucratie qualité"
        },
        {
          "type": "p",
          "text": "Les démarches de certification peuvent générer une lourdeur documentaire et un formalisme excessif : on « fait du papier » pour la norme plutôt que de la qualité pour le client. Les heures consacrées aux procédures et aux audits sont elles-mêmes des coûts (souvent cachés)."
        },
        {
          "type": "h3",
          "text": "Les effets pervers des indicateurs"
        },
        {
          "type": "p",
          "text": "Tout indicateur peut être **manipulé** ou mal interprété. Un objectif de « zéro retour » mal piloté peut inciter à dissuader les réclamations légitimes plutôt qu'à corriger les causes. Le guide rappelle l'existence de risques liés aux indicateurs et à leur mesure, ainsi qu'aux outils de gestion de la qualité et à leur contrôle."
        },
        {
          "type": "h3",
          "text": "Les limites des outils eux-mêmes"
        },
        {
          "type": "table",
          "headers": [
            "**Outil**",
            "**Apport principal**",
            "**Limite**"
          ],
          "rows": [
            [
              "Pareto",
              "Hiérarchise les priorités",
              "Ne dit pas pourquoi ; dépend de la qualité du relevé"
            ],
            [
              "Ishikawa",
              "Recherche les causes",
              "Subjectif, non quantitatif ; risque de causes oubliées"
            ],
            [
              "Cercles de qualité",
              "Implication du personnel",
              "Aucun pouvoir de décision ; essoufflement fréquent"
            ],
            [
              "Échantillonnage",
              "Contrôle économique",
              "Risque statistique d'erreur ; suppose un tirage aléatoire correct"
            ],
            [
              "Certification",
              "Confiance, structuration",
              "Atteste un processus, pas la satisfaction réelle ; coûteuse"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Les défis contemporains",
          "text": "Le management de la qualité doit aujourd'hui composer avec l'accélération des cycles produits, l'exigence de personnalisation, la complexité des chaînes d'approvisionnement mondialisées et l'intégration des critères de durabilité. La qualité devient **multidimensionnelle** : satisfaire le client et la planète et les parties prenantes."
        },
        {
          "type": "h3",
          "text": "4.5 Focus — la qualité à l'ère numérique"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE",
          "text": "Les technologies numériques font passer le management de la qualité d'une logique **corrective** (constater le défaut) à une logique **prédictive** (anticiper le défaut).\n**ERP / PGI :**centralisation et fiabilisation des données qualité, traçabilité de bout en bout (lots, fournisseurs, retours).\n**MES (Manufacturing Execution System) :**pilotage de l'atelier en temps réel, remontée immédiate des non-conformités.\n**IoT et capteurs connectés :**surveillance continue des paramètres de production (température de teinture, tension du fil).\n**Qualité prédictive :**les algorithmes détectent les dérives avant l'apparition du défaut, déclenchant une maintenance ciblée.\n**Data Analytics & BI :**Power BI et tableaux de bord dynamiques pour suivre les indicateurs et automatiser les Pareto.\n**Intelligence artificielle :**vision par ordinateur pour le contrôle visuel automatisé (détection des coutures défectueuses sur ligne).\nPour l’entreprise, des capteurs sur les machines et un module de contrôle visuel par IA permettraient de détecter une couture défectueuse **en temps réel**, avant même que le produit ne quitte l'atelier — réduisant d'autant les coûts de défaillance externe."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative**"
        }
      ]
    },
    {
      "id": "le-pilotage-qualite-de-l-atelier-de-production",
      "title": "Le pilotage qualité de l'atelier de production",
      "blocks": [
        {
          "type": "p",
          "text": "Cette application de synthèse mobilise les quatre dimensions du chapitre — **comprendre, calculer, interpréter, critiquer** — sur le cas étudié. Elle est représentative d'un sujet d'examen national : énoncé unique, plusieurs questions, écrit argumenté attendu en conclusion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Application récapitulative (COQ, Pareto, échantillonnage)",
          "text": "La direction de CERAMIX (céramiques, arts de la table) veut sécuriser la qualité de son article phare (prix de vente 90 €, coût standard 67 €). Pour l'exercice N, le contrôleur de gestion réunit trois jeux de données relatifs à l'atelier de production des articles.\n**Donnée 1 — coûts liés à la qualité de l’article (en k€) :**\nFormation des opérateurs 22 · maintenance préventive 16 · audit fournisseurs 14 · contrôles en cours de production 28 · inspection finale 19 · rebuts et matières perdues 52 · retouches en atelier 38 · garanties et SAV 61 · avoirs et litiges clients 44.\n**Donnée 2 — défauts ayant entraîné le rejet de 310 articles :**\ndéfaut d’assemblage 132 · défaut de finition 78 · composant défectueux 46 · dimension hors tolérance 28 · emballage abîmé 16 · autres 10.\n**Donnée 3 — durée de montage d'un article : sur un échantillon de n = 36 articles, la moyenne observée est x̄ = 18,5 min et l'écart type de l'échantillon σ' = 3,6 min.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 (suite) — Travail à faire",
          "text": "1. Structurer les coûts par catégorie et par famille ; calculer le COQ et la part de la non-conformité.\n2. Construire le tableau de Pareto des défauts et identifier les causes prioritaires.\n3. Estimer la durée moyenne de montage par un intervalle de confiance à 95 % (puis 99 %).\n4. Rédiger un écrit argumenté conseillant la direction (diagnostic, plan d'action chiffré, lien performance globale)."
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 1 : le coût d'obtention de la qualité"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Détail (k€)**",
            "**Total (k€)**",
            "**% du COQ**"
          ],
          "rows": [
            [
              "Prévention",
              "22 + 16 + 14",
              "52",
              "17,7 %"
            ],
            [
              "Évaluation",
              "28 + 19",
              "47",
              "16,0 %"
            ],
            [
              "Défaillance interne",
              "52 + 38",
              "90",
              "30,6 %"
            ],
            [
              "Défaillance externe",
              "61 + 44",
              "105",
              "35,7 %"
            ],
            [
              "COQ TOTAL",
              "",
              "294",
              "100 %"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Famille**",
            "**Composantes (k€)**",
            "**Total (k€)**",
            "**Part**"
          ],
          "rows": [
            [
              "Conformité (on investit)",
              "Prévention 52 + Évaluation 47",
              "99",
              "33,7 %"
            ],
            [
              "Non-conformité (on subit)",
              "Déf. interne 90 + externe 105",
              "195",
              "66,3 %"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La **non-conformité représente 66,3 % du COQ**, dont 35,7 % de défaillance externe (la plus dangereuse). La prévention ne pèse que 17,7 % : l’entreprise se situe nettement **à gauche de l'optimum économique**. Un rééquilibrage vers la prévention est justifié."
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 2 : le diagramme de Pareto"
        },
        {
          "type": "table",
          "headers": [
            "**Défaut**",
            "**Nb**",
            "**Fréq.**",
            "**Fréq. cumulée**",
            "**Rang**"
          ],
          "rows": [
            [
              "Défaut d’assemblage",
              "132",
              "42,6 %",
              "42,6 %",
              "1"
            ],
            [
              "Défaut de finition",
              "78",
              "25,2 %",
              "67,7 %",
              "2"
            ],
            [
              "Composant défectueux",
              "46",
              "14,8 %",
              "82,6 %",
              "3"
            ],
            [
              "Dimension hors tolérance",
              "28",
              "9,0 %",
              "91,6 %",
              "4"
            ],
            [
              "Emballage abîmé",
              "16",
              "5,2 %",
              "96,8 %",
              "5"
            ],
            [
              "Autres",
              "10",
              "3,2 %",
              "100 %",
              "6"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-gestion-qualite/09.png",
          "alt": "Le pilotage qualité de l'atelier de production",
          "width": 1485,
          "height": 839,
          "caption": "Figure 9 — Diagramme de Pareto des défauts du produit."
        },
        {
          "type": "p",
          "text": "Deux défauts — défaut d'assemblage et défaut de finition — concentrent près de 68 % des rejets ; les trois premiers dépassent 80 %. Le plan d'action doit cibler en priorité le poste d'assemblage et l'usinage de la pièce."
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 3 : l'intervalle de confiance de la durée moyenne"
        },
        {
          "type": "p",
          "text": "L'échantillon donne σ' = 3,6 min. On corrige d'abord l'écart type (estimation de σ) :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Calcul de l'écart type corrigé et de l'IC d'une moyenne",
          "text": "Écart type corrigé : ."
        },
        {
          "type": "p",
          "text": "Avec 95 % de confiance, la durée moyenne réelle de montage d'un produit est comprise entre 17,3 et 19,7 minutes. Le contrôleur de gestion peut fixer dans le tableau de bord un objectif de cadence prudent (« montage moyen ≤ 19,7 min ») sans risque de sous-estimer le temps réel. Conformément au programme, seule la moyenne fait l'objet d'un IC ; aucune estimation par intervalle n'est conduite sur une proportion."
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 4 : l'écrit argumenté"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Note de synthèse du contrôleur de gestion à la direction (proposition de corrigé)**\n**Diagnostic. Le coût de la non-qualité de l’article atteint 294 k€, dont 66 % de pertes subies et 36 % de défaillances externes atteignant le client. L'entreprise sous-investit en prévention (18 %). L'analyse de Pareto montre que deux causes — défaut d'assemblage et défaut de finition — expliquent près de 68 % des rejets.**\n**Plan d'action chiffré.**J'estime qu'un effort de prévention supplémentaire de **30 k€** (fiabilisation du poste d'assemblage, contrôle dimensionnel de la pièce, formation ciblée) ramènerait la défaillance interne de 90 à 70 k€ et la défaillance externe de 105 à 60 k€. Le COQ passerait de **294 à 259 k€**, soit une **économie nette de 35 k€** (65 k€ de défaillances évitées − 30 k€ investis), tout en sécurisant la relation client.\n**Performance globale. Chaque article rejeté représente de la matière et de l'énergie gaspillées et un transport de retour : réduire la non-qualité réduit aussi l'empreinte environnementale, en cohérence avec le positionnement écoresponsable. Je propose un indicateur croisé « coût de non-qualité par kg de matière gaspillée » au tableau de bord.**\n**Limite.**L'objectif reste la qualité optimale, non maximale : au-delà d'un certain effort de prévention, le gain marginal sur les défaillances deviendra inférieur au coût engagé. Le suivi du COQ permettra de détecter ce point d'inflexion.\n**POINT EXAMEN — ce que le jury valorise dans cette application**\nUne arithmétique exacte ET interprétée (ne pas s'arrêter au calcul du COQ ou de l'IC).\nUn plan d'action chiffré reliant prévention et baisse des défaillances (logique d'arbitrage).\nLe lien explicite avec la performance globale et la durabilité.\nLe respect des limites de programme : IC sur la moyenne uniquement, pas de proportion, pas de test."
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
              "Qualité",
              "Aptitude à satisfaire des besoins (ISO)",
              "Levier de compétitivité et de valeur",
              "Notion relative ; risque de surqualité"
            ],
            [
              "Qualité totale (TQM)",
              "Maîtrise globale et continue, zéro défaut",
              "Mobilise toute l'organisation",
              "Exigeante ; coûteuse à instaurer"
            ],
            [
              "Coûts de prévention",
              "Éviter le défaut en amont",
              "Réduisent les défaillances",
              "Investissement immédiat sans gain visible"
            ],
            [
              "Coûts d'évaluation",
              "Détecter le défaut (contrôles)",
              "Mesurent le niveau atteint",
              "Ne corrigent pas la cause"
            ],
            [
              "Défaillance interne",
              "Défaut détecté avant livraison",
              "Évite l'atteinte au client",
              "Rebuts, retouches, gaspillage"
            ],
            [
              "Défaillance externe",
              "Défaut détecté après livraison",
              "—",
              "Le plus coûteux : image, litiges"
            ],
            [
              "Coûts cachés",
              "Coûts non repérés par la compta (Savall)",
              "Révèlent la non-qualité réelle",
              "Difficiles à isoler et chiffrer"
            ],
            [
              "PDCA (Deming)",
              "Cycle d'amélioration continue",
              "Structure le progrès durable",
              "Suppose une cale (standardisation)"
            ],
            [
              "Pareto (20/80)",
              "Hiérarchise les causes par effet",
              "Cible les priorités d'action",
              "Ne donne pas les causes"
            ],
            [
              "Ishikawa (5 M)",
              "Recherche des causes (causes-effets)",
              "Vision globale, animation",
              "Subjectif, non quantitatif"
            ],
            [
              "Estimation",
              "Généraliser un échantillon (loi normale)",
              "Contrôle économique de la qualité",
              "Risque d'erreur ; tests hors programme"
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
          "title": "À retenir par cœur",
          "text": "Écart type corrigé : .\nIC d'une MOYENNE (n ≥ 30) : — seul IC au programme DCG.\n**t = 1,96 (95 %) · t = 2,575 (99 %).**\nIC d'une proportion : **hors programme DCG** (estimation ponctuelle p ≈ f uniquement)."
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — À éviter le jour de l'épreuve",
          "text": "Confondre qualité maximale et optimale.\nMal classer un coût (contrôle ≠ retouche ≠ garantie).\nOublier de corriger σ' en s avant un intervalle de confiance.\nTraiter un **test d'hypothèse** : hors programme depuis la réforme.\nCalculer un **IC pour une proportion** : hors programme — l'IC ne concerne que la moyenne.\nSe contenter de calculer sans **interpréter** ni **conseiller** : l'écrit argumenté est attendu."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
