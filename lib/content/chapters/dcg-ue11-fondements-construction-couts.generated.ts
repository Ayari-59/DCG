// Généré par scripts/convert-docx.mjs depuis CHAPITRE_02__FONDEMENTS_COMPTABILITE_DE_GESTION_ET_CONSTRUCTION_DES_COUTS.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-fondements-construction-couts",
  "level": "DCG",
  "ue": "UE11",
  "number": 2,
  "title": "Fondements de la comptabilité de gestion et construction des coûts",
  "description": "",
  "durationMin": 25,
  "sections": [
    {
      "id": "introduction",
      "title": "Introduction",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "Chapitre fondateur de la partie consacrée au calcul et à l’analyse des coûts. Il précède et conditionne l’étude du coût complet (chap. 5), de la méthode ABC (chap. 6), de l’imputation rationnelle (chap. 7) et des coûts partiels (chap. 8). Il fournit le vocabulaire, les classifications et le cheminement de construction d’un coût indispensables à tout le bloc « coûts ».\nComprendre — pourquoi existe-t-elle ? À quel besoin de pilotage répond-elle ?\nCalculer — comment fonctionne-t-elle, selon quelles conventions ?\nInterpréter — comment exploiter les résultats pour décider ?\nCritiquer — quelles sont ses limites et ses angles morts ?"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Distinguer charge et coût ; repérer les charges incorporables, non incorporables et supplétives.\n• Classer les charges selon plusieurs critères (directes/indirectes, fixes/variables, opérationnelles/structure).\n• Définir un objet de coût et le cheminement coût d’achat → coût de production → coût de revient → résultat.\n• Calculer et interpréter une marge, un taux de marge, un taux de profitabilité, un résultat analytique.\n• Situer les grandes méthodes et porter un regard critique sur l’information de coût.\n**▸ PLAN DU CHAPITRE**\n**Partie 1 —**Le coût, information de gestion\n**Partie 2 —**Les classifications des charges\n**Partie 3 —**Les objets de coûts et la construction d’un coût\n**Partie 4 —**Les méthodes et l’usage décisionnel des coûts"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Combien coûte réellement un produit ? Un service rendu à un usager ? Un client ? Un projet ? Ces questions, apparemment simples, sont parmi les plus difficiles de la gestion — et parmi les plus décisives. Fixer un prix, accepter une commande, abandonner une activité, investir : toutes ces décisions supposent de connaître un coût. L’information de coût est ainsi au cœur du pilotage économique de toute organisation."
        },
        {
          "type": "p",
          "text": "Or un coût ne se lit pas dans la comptabilité financière. Celle-ci enregistre des charges par nature (achats, salaires, amortissements) pour produire un résultat global et répondre à des obligations légales et fiscales. Elle ne dit pas combien coûte tel produit ou tel service. C’est le rôle de la comptabilité de gestion (ou comptabilité analytique) : retraiter et réorganiser les charges pour calculer des coûts par objet, utiles à la décision interne."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Un coût est une construction",
          "text": "Un coût n’est pas une donnée objective que l’on « relève ». C’est une construction, le résultat de choix et de conventions (quelles charges retenir ? comment les répartir ?). Selon les conventions adoptées, le coût d’un même produit varie. C’est pourquoi plusieurs méthodes coexistent — coûts complets, ABC, coûts partiels, imputation rationnelle —, chacune adaptée à un type de décision. Le coût n’est donc jamais une fin en soi : c’est un outil d’aide à la décision."
        },
        {
          "type": "p",
          "text": "*Des activités aux décisions : le coût, maillon du pilotage*"
        },
        {
          "type": "p",
          "text": "Ce chapitre est le chapitre fondateur de toute la partie consacrée aux coûts. Quatre parties en organisent l’étude : la partie 1 présente le coût comme information de gestion et la matière première qu’il mobilise (les charges) ; la partie 2 détaille les classifications des charges, illustrées par des données chiffrées ; la partie 3 construit pas à pas un coût et introduit les indicateurs de marge et de profitabilité ; la partie 4 situe les grandes méthodes et leur usage décisionnel. L’ensemble prépare l’étude détaillée du coût complet, de l’ABC, des coûts partiels et de l’imputation rationnelle dans les chapitres suivants."
        }
      ]
    },
    {
      "id": "1-le-cout-information-de-gestion",
      "title": "1. Le coût, information de gestion",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Pourquoi calculer des coûts ?"
        },
        {
          "type": "p",
          "text": "Calculer un coût n’a de sens que par les décisions qu’il éclaire. Cinq grands usages justifient l’effort de mesure."
        },
        {
          "type": "ul",
          "items": [
            "**Fixer les prix :**connaître le coût de revient pour fixer un prix de vente couvrant les charges et dégageant une marge.",
            "**Mesurer la profitabilité :**déterminer quels produits, clients ou activités dégagent une marge, et lesquels détruisent de la valeur.",
            "**Éclairer les choix d’investissement :**comparer le coût d’une fabrication interne à celui d’une sous-traitance (« faire ou faire-faire »).",
            "**Arbitrer :**accepter ou refuser une commande spéciale, abandonner ou maintenir une activité.",
            "**Piloter la performance :**comparer coûts réels et coûts prévus, analyser les écarts, responsabiliser les acteurs."
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Organisation**",
            "**Usage typique de l’information de coût**"
          ],
          "rows": [
            [
              "Industrie",
              "Calculer le coût de revient d’un produit pour fixer son prix et suivre ses marges."
            ],
            [
              "Services",
              "Déterminer le coût d’un dossier ou d’une prestation (par heure, par client)."
            ],
            [
              "Administration",
              "Mesurer le coût d’un service public rendu à l’usager (logique d’efficience, LOLF)."
            ],
            [
              "Association",
              "Justifier l’emploi des fonds et calculer le coût d’une action auprès des financeurs."
            ],
            [
              "Club sportif",
              "Suivre le coût du centre de formation, de l’organisation d’un match."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Illustration professionnelle — COMPOSAL",
          "text": "Chez COMPOSAL, l’information de coût sert simultanément plusieurs décisions : vérifier que le prix de 90 € du produit couvre bien le coût de revient et dégage une marge ; comparer le coût de production interne d’un composant à son prix d’achat auprès d’un sous-traitant ; et répondre, ou non, à une commande spéciale à prix réduit. Une même donnée de coût, plusieurs décisions."
        },
        {
          "type": "h3",
          "text": "1.2 Les quatre fonctions du coût"
        },
        {
          "type": "p",
          "text": "Au-delà de ses usages concrets, le coût remplit quatre grandes fonctions dans l’organisation."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/01.png",
          "alt": "1. Le coût, information de gestion",
          "width": 1440,
          "height": 660,
          "caption": "Les quatre fonctions du coût"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction**",
            "**Rôle**"
          ],
          "rows": [
            [
              "Informative",
              "Donner une image chiffrée de la réalité économique (ce que consomme une activité)."
            ],
            [
              "Décisionnelle",
              "Fournir une base de comparaison pour choisir entre plusieurs options."
            ],
            [
              "De contrôle",
              "Comparer le réalisé au prévu, mesurer les écarts, évaluer la performance."
            ],
            [
              "Stratégique",
              "Éclairer le positionnement (prix, différenciation, domination par les coûts)."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "1.3 La notion de charge et le passage à la comptabilité de gestion"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La charge",
          "text": "Une charge est la valorisation monétaire d’une consommation de ressources par l’organisation. En comptabilité financière, les charges diminuent le résultat de l’exercice. En comptabilité de gestion, elles sont la matière première du calcul des coûts."
        },
        {
          "type": "p",
          "text": "Toutes les charges de la comptabilité financière ne sont pas reprises telles quelles pour calculer les coûts. La comptabilité de gestion opère un tri : elle écarte certaines charges (non incorporables), retient les autres (incorporables) et en ajoute parfois de nouvelles (supplétives)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/02.png",
          "alt": "1. Le coût, information de gestion",
          "width": 1440,
          "height": 720,
          "caption": "Du résultat financier aux charges incorporées aux coûts (illustration chiffrée)"
        },
        {
          "type": "h3",
          "text": "Les charges incorporables"
        },
        {
          "type": "p",
          "text": "Les charges incorporables correspondent à l’activité normale et courante d’exploitation et sont donc intégrées aux coûts. Elles constituent l’essentiel des charges : achats de matières, salaires, loyers, énergie, amortissements des équipements de production. Ce sont les consommations « légitimes » qu’un coût doit refléter."
        },
        {
          "type": "h3",
          "text": "Les charges non incorporables"
        },
        {
          "type": "p",
          "text": "Les charges non incorporables sont enregistrées en comptabilité financière mais exclues du calcul des coûts, car elles ne relèvent pas de l’exploitation normale et courante. Les y intégrer fausserait le coût des produits."
        },
        {
          "type": "ul",
          "items": [
            "Charges exceptionnelles (pénalités, amendes, créances irrécouvrables) ;",
            "charges sans rapport avec l’objet de l’entreprise (certaines charges financières) ;",
            "dotations à caractère fiscal ou exceptionnel (certaines provisions, amortissements dérogatoires)."
          ]
        },
        {
          "type": "h3",
          "text": "Les charges supplétives"
        },
        {
          "type": "p",
          "text": "À l’inverse, les charges supplétives ne figurent pas en comptabilité financière mais sont ajoutées en comptabilité de gestion, car elles correspondent à une consommation économique réelle qu’il faut prendre en compte pour comparer des entreprises de statuts différents."
        },
        {
          "type": "ul",
          "items": [
            "**La rémunération de l’exploitant :**dans une entreprise individuelle, le travail du dirigeant n’est pas un salaire comptabilisé, mais représente un coût économique réel.",
            "**La rémunération des capitaux propres :**les capitaux apportés par les associés ont un coût d’opportunité, même s’il n’apparaît pas en charges."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Pourquoi les charges supplétives ?",
          "text": "Elles assurent la comparabilité économique. Deux entreprises identiques, l’une finançant son activité par emprunt (intérêts = charges), l’autre par capitaux propres (pas de charge comptable), n’ont pas le même résultat comptable alors qu’elles consomment la même ressource « capital ». La charge supplétive rétablit la comparaison."
        },
        {
          "type": "table",
          "headers": [
            "**Type de charge**",
            "**Comptabilité financière**",
            "**Comptabilité de gestion**"
          ],
          "rows": [
            [
              "Charges incorporables",
              "Enregistrées",
              "Reprises dans les coûts"
            ],
            [
              "Charges non incorporables",
              "Enregistrées",
              "Exclues des coûts"
            ],
            [
              "Charges supplétives",
              "Absentes",
              "Ajoutées aux coûts"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**La relation fondamentale**"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — charges et coûts",
          "text": "Reprendre toutes les charges de la comptabilité financière sans opérer le tri (oubli des non incorporables).\nOublier les charges supplétives dans le passage CF → CG, notamment la rémunération des capitaux propres.\nConfondre la charge (consommation par nature) et le coût (regroupement par objet)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 1",
          "text": "Cinq usages (prix, profitabilité, investir, arbitrer, piloter) ; quatre fonctions (informative, décisionnelle, contrôle, stratégique).\nIncorporables (reprises), non incorporables (exclues), supplétives (ajoutées).\nCharges incorporées = CF − non incorporables + supplétives."
        }
      ]
    },
    {
      "id": "2-les-classifications-des-charges",
      "title": "2. Les classifications des charges",
      "blocks": [
        {
          "type": "p",
          "text": "Une même charge peut être analysée selon plusieurs critères complémentaires. Ces classifications ne s’excluent pas : elles répondent à des questions différentes et fondent les différentes méthodes de calcul des coûts. Les deux distinctions majeures — directes/indirectes et fixes/variables — sont ici illustrées sur les données du produit."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/03.png",
          "alt": "2. Les classifications des charges",
          "width": 1440,
          "height": 600,
          "caption": "Une charge se classe simultanément selon plusieurs critères"
        },
        {
          "type": "h3",
          "text": "2.1 Charges directes et charges indirectes"
        },
        {
          "type": "p",
          "text": "Cette distinction — fondée sur la destination de la charge — est au cœur de la méthode du coût complet."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Charges directes / indirectes",
          "text": "**Charge directe :**affectable sans ambiguïté à un seul objet de coût (ex. : le bois d’une table, le salaire d’un ouvrier dédié).\n**Charge indirecte :**commune à plusieurs objets ; elle doit être répartie selon une clé ou une unité d’œuvre (ex. : loyer de l’atelier, salaire du chef d’atelier)."
        },
        {
          "type": "p",
          "text": "Le critère décisif est la possibilité d’affectation directe. Une charge indirecte nécessite une clé de répartition, source d’approximation. Plus la part des charges indirectes est élevée, plus le calcul du coût est délicat — c’est précisément ce qui a motivé la méthode ABC."
        },
        {
          "type": "h3",
          "text": "Illustration chiffrée — décomposition du coût du composant COMPOSAL"
        },
        {
          "type": "p",
          "text": "Le coût standard de production du composant fabriqué par COMPOSAL (composants industriels), soit 70 €, se décompose en charges directes et indirectes :"
        },
        {
          "type": "table",
          "headers": [
            "**Composante du coût**",
            "**Montant**",
            "**Nature**",
            "**Mode de rattachement**"
          ],
          "rows": [
            [
              "Composants (matières)",
              "20 €",
              "Directe",
              "Affectée au produit"
            ],
            [
              "Main-d’œuvre directe (MOD)",
              "27 €",
              "Directe",
              "Affectée (temps passé)"
            ],
            [
              "Centre Montage",
              "20 €",
              "Indirecte",
              "Répartie via unité d’œuvre"
            ],
            [
              "Coût standard de production",
              "70 €",
              "—",
              "Total"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Décomposition du coût standard du composant COMPOSAL : 47 € directs, 20 € indirects*"
        },
        {
          "type": "p",
          "text": "Les charges directes (composants + MOD = 47 €) représentent 70 % du coût de production et s’affectent sans difficulté. Les charges indirectes (centre Montage = 20 €, soit 30 %) supposent une clé de répartition : ici, l’unité d’œuvre du centre Montage. C’est sur ces 30 % que pèse l’essentiel de l’incertitude du calcul."
        },
        {
          "type": "table",
          "headers": [
            "**Exemple de charge (l’entreprise)**",
            "**Nature**",
            "**Justification**"
          ],
          "rows": [
            [
              "Cadre matière du produit",
              "Directe",
              "Consommé par la seule produit"
            ],
            [
              "Heures de l’opérateur de montage le produit",
              "Directe",
              "Temps affecté au produit"
            ],
            [
              "Loyer de l’atelier de Lens",
              "Indirecte",
              "Commun à toutes les références"
            ],
            [
              "Salaire du responsable qualité",
              "Indirecte",
              "Commun à toute la production"
            ],
            [
              "Électricité générale de l’usine",
              "Indirecte",
              "Répartie selon une clé"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.2 Charges fixes et charges variables"
        },
        {
          "type": "p",
          "text": "Cette distinction — fondée sur le comportement de la charge face au volume d’activité — fonde la méthode des coûts partiels et l’analyse coût-volume-profit."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Charges fixes / variables",
          "text": "**Charge variable (opérationnelle) :**varie avec le niveau d’activité (ex. : matières premières, consommables). Elle est proportionnelle au volume.\n**Charge fixe (de structure) :**indépendante du volume sur une période et une zone d’activité données (ex. : loyer, amortissement, encadrement)."
        },
        {
          "type": "p",
          "text": "*Le comportement des charges fixes et variables (en total et à l’unité)*"
        },
        {
          "type": "p",
          "text": "Le graphique de gauche montre les charges totales : les charges fixes forment une droite horizontale (constantes), les charges variables une droite croissante. À l’unité (graphique de droite), c’est l’inverse : la charge variable unitaire est constante, tandis que la charge fixe unitaire diminue quand l’activité augmente — c’est l’effet d’absorption des charges fixes, ou « économies d’échelle »."
        },
        {
          "type": "h3",
          "text": "Illustration chiffrée — le coût variable du composant COMPOSAL"
        },
        {
          "type": "p",
          "text": "Le coût variable unitaire du composant COMPOSAL est de 40 € (matières, consommables, énergie de production proportionnelle). Avec un prix de vente de 90 €, chaque produit dégage une marge sur coût variable de 90 − 40 = 50 €, destinée à couvrir les charges fixes puis à former le résultat. COMPOSAL supporte 200 000 € de charges fixes annuelles sur cette ligne de produit."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Marge sur coût variable et seuil de profitabilité",
          "text": "= 90 − 38 = 52 €\n= 200 000 ÷ 50 = 4 000 produits"
        },
        {
          "type": "p",
          "text": "*Charges fixes, charges variables et seuil de profitabilité (composant COMPOSAL)*"
        },
        {
          "type": "p",
          "text": "Au-delà de 4 000 produits vendus, chaque unité supplémentaire dégage 50 € de marge qui alimente directement le résultat. COMPOSAL, qui produit et vend 5 000 composants, dépasse son seuil de 1 000 unités : la marge au-delà du seuil s’élève à 1 000 × 50 = 50 000 €."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — La zone de pertinence",
          "text": "Une charge n’est fixe que sur une certaine plage d’activité (la zone de pertinence) et sur un horizon donné. Au-delà (ouverture d’un nouvel atelier), elle augmente par paliers. À long terme, presque toutes les charges deviennent variables."
        },
        {
          "type": "h3",
          "text": "2.3 Autres classifications utiles"
        },
        {
          "type": "p",
          "text": "La classification opérationnelles/structure recoupe la distinction fixes/variables en insistant sur l’horizon de pilotage : les charges opérationnelles varient avec l’activité et sont pilotables à court terme ; les charges de structure découlent des capacités installées et ne se modifient qu’à moyen-long terme. Trois autres distinctions, à forte portée décisionnelle, seront mobilisées dans les chapitres suivants."
        },
        {
          "type": "ul",
          "items": [
            "**Charges contrôlables / non contrôlables :**selon que le responsable peut ou non les maîtriser (lien avec la contrôlabilité des centres de responsabilité).",
            "**Charges pertinentes :**celles qui changent selon la décision envisagée ; seules elles comptent dans un choix.",
            "**Charges irrécupérables (coûts irréversibles, sunk costs) :**déjà engagées et non récupérables ; elles ne doivent PAS influencer une décision future."
          ]
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Le piège des coûts irréversibles",
          "text": "Une erreur classique consiste à tenir compte d’une dépense déjà engagée (« on a déjà investi 100 000 € ») pour justifier de poursuivre un projet. Or un coût irrécupérable est perdu quoi qu’il arrive : seule compte la comparaison des coûts et recettes futurs."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 2",
          "text": "Directes/indirectes (destination) ; fixes/variables (comportement) ; opérationnelles/structure (horizon).\nle produit : 50 € directs (71 %) + 20 € indirects (29 %) ; coût variable 40 €, MCV 50 €, seuil 4 000 unités.\nCharge fixe unitaire ↓ quand l’activité ↑ (absorption). Notions décisionnelles : contrôlables, pertinentes, irrécupérables."
        }
      ]
    },
    {
      "id": "3-les-objets-de-couts-et-la-construction-d-un-cout",
      "title": "3. Les objets de coûts et la construction d’un coût",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Qu’est-ce qu’un objet de coût ?"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L’objet de coût",
          "text": "Un objet de coût est tout élément pour lequel on souhaite mesurer un coût de façon autonome. Avant tout calcul, il faut définir précisément ce que l’on veut coûter : la réponse oriente toute la démarche."
        },
        {
          "type": "p",
          "text": "L’objet de coût peut être un produit, un service, une activité, un client, un projet ou un processus. Le même ensemble de charges peut être réorganisé selon différents objets : on peut calculer le coût d’un produit (le produit), mais aussi le coût d’un client (intéressant pour la profitabilité commerciale) ou d’un processus (utile en ABC)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/04.png",
          "alt": "3. Les objets de coûts et la construction d’un coût",
          "width": 1440,
          "height": 480,
          "caption": "Un coût se rapporte toujours à un objet"
        },
        {
          "type": "h3",
          "text": "3.2 Les différents niveaux de coûts"
        },
        {
          "type": "p",
          "text": "Dans une entreprise, le coût se construit progressivement, en suivant le cycle d’exploitation : on achète, on produit, on vend. À chaque étape, le coût précédent est repris et enrichi de nouvelles charges."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/05.png",
          "alt": "3. Les objets de coûts et la construction d’un coût",
          "width": 1640,
          "height": 720,
          "caption": "La construction des coûts, étape par étape (produit, l’entreprise)"
        },
        {
          "type": "h4",
          "text": "*Le coût d’achat*"
        },
        {
          "type": "p",
          "text": "Premier niveau : le coût des matières ou marchandises achetées, incluant le prix d’achat et les frais d’approvisionnement (transport, réception, manutention)."
        },
        {
          "type": "h4",
          "text": "*Le coût de production*"
        },
        {
          "type": "p",
          "text": "Le coût d’achat des matières consommées, augmenté des charges de fabrication : main-d’œuvre directe (MOD) et frais d’atelier (charges indirectes de production)."
        },
        {
          "type": "h4",
          "text": "*Le coût de revient*"
        },
        {
          "type": "p",
          "text": "Le coût de production des produits vendus, augmenté des charges « hors production » : distribution, commercialisation, administration. C’est le coût complet et final du produit vendu."
        },
        {
          "type": "h4",
          "text": "*Le résultat analytique*"
        },
        {
          "type": "p",
          "text": "La différence entre le prix de vente et le coût de revient. Calculé par produit, il révèle la contribution réelle de chacun au résultat global — ce que la comptabilité financière, globale, ne permet pas."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**L’enchaînement des coûts**"
        },
        {
          "type": "h3",
          "text": "3.3 Marge, taux de marge, taux de profitabilité et résultat"
        },
        {
          "type": "p",
          "text": "Le calcul du coût débouche sur des indicateurs de gestion qu’il faut définir avec précision. Le programme distingue nettement la marge (en valeur), les taux (en pourcentage) et le résultat."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Coût, marge, résultat et taux",
          "text": "**Coût :**somme des charges rapportée à un objet (coût d’achat, de production, de revient).\n**Marge :**différence entre un prix (ou un chiffre d’affaires) et un coût ; ex. marge sur coût variable = prix − coût variable.\n**Résultat :**différence entre le chiffre d’affaires et le coût de revient complet (par produit : résultat analytique).\n**Taux de marge :**marge rapportée au coût — (marge ÷ coût) × 100.\n**Taux de profitabilité :**résultat rapporté au chiffre d’affaires — (résultat ÷ CA) × 100."
        },
        {
          "type": "p",
          "text": "*Du prix de vente au résultat : les indicateurs clés (par produit)*"
        },
        {
          "type": "h3",
          "text": "Application chiffrée — les indicateurs du composant COMPOSAL"
        },
        {
          "type": "p",
          "text": "En retenant un coût de revient de 80 € (coût de production 70 € + 10 € de charges hors production), on obtient, par produit :"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Calcul**",
            "**Résultat**"
          ],
          "rows": [
            [
              "Marge sur coût variable",
              "90 − 38",
              "52 €"
            ],
            [
              "Résultat analytique unitaire",
              "90 − 75",
              "10 €"
            ],
            [
              "Taux de marge (sur coût de revient)",
              "(10 ÷ 80) × 100",
              "20 %"
            ],
            [
              "Taux de profitabilité (sur CA)",
              "(10 ÷ 90) × 100",
              "11,1 %"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Profitabilité n’est pas rentabilité",
          "text": "Le taux de profitabilité rapporte le résultat au chiffre d’affaires : il mesure la capacité de l’activité à dégager un résultat sur ses ventes. La rentabilité, elle, rapporte un résultat aux capitaux ou aux moyens engagés (rentabilité économique, rentabilité financière, ROI). Le programme de l’UE11 privilégie la notion de profitabilité pour l’analyse des coûts ; le terme « rentabilité » reste réservé à son sens financier précis."
        },
        {
          "type": "h3",
          "text": "3.4 Le cheminement général des coûts"
        },
        {
          "type": "p",
          "text": "Les charges directes sont affectées sans difficulté aux produits. Les charges indirectes, elles, ne peuvent l’être directement : elles transitent d’abord par des centres d’analyse (méthode du coût complet) ou par des activités (méthode ABC) avant d’être imputées aux produits. C’est ce cheminement qui distingue les différentes méthodes."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/06.png",
          "alt": "*Le résultat analytique*",
          "width": 1440,
          "height": 660,
          "caption": "Le cheminement général des coûts : des charges aux résultats"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 3",
          "text": "Définir l’objet de coût avant tout calcul ; enchaîner coût d’achat → production → revient → résultat.\nMarge = prix − coût ; résultat = CA − coût de revient ; taux de marge = marge/coût ; taux de profitabilité = résultat/CA.\nle produit : MCV 50 €, résultat 10 €, taux de profitabilité 11,1 %."
        }
      ]
    },
    {
      "id": "4-les-methodes-et-l-usage-decisionnel-des-couts",
      "title": "4. Les méthodes et l’usage décisionnel des coûts",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Pourquoi plusieurs méthodes ?"
        },
        {
          "type": "p",
          "text": "Il n’existe pas un coût « vrai » et unique, mais des coûts construits selon des conventions adaptées à des besoins. La coexistence de plusieurs méthodes répond à trois diversités : la diversité des besoins (fixer un prix de long terme n’appelle pas le même calcul qu’une décision ponctuelle), la diversité des organisations (industrie, services, structures à fortes charges indirectes) et la diversité des décisions (court terme vs structurel)."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/07.png",
          "alt": "4. Les méthodes et l’usage décisionnel des coûts",
          "width": 1440,
          "height": 600,
          "caption": "Les quatre grandes méthodes de calcul des coûts"
        },
        {
          "type": "h3",
          "text": "Les coûts complets"
        },
        {
          "type": "p",
          "text": "La méthode des coûts complets calcule le coût de revient complet d’un produit en lui affectant l’ensemble des charges, directes et indirectes. Les charges indirectes transitent par des centres d’analyse, réparties via des unités d’œuvre. C’est la méthode de référence pour fixer un prix de vente et établir un résultat par produit (cf. chapitre 5)."
        },
        {
          "type": "h3",
          "text": "La méthode ABC (Activity Based Costing)"
        },
        {
          "type": "p",
          "text": "L’ABC affine le traitement des charges indirectes en les rattachant à des activités (et non à des centres), puis aux produits via des inducteurs de coûts. Elle répond à la montée des charges indirectes dans les organisations modernes et fournit des coûts plus justes lorsque les produits consomment les ressources de façon hétérogène (cf. chapitre 6)."
        },
        {
          "type": "h3",
          "text": "Les coûts partiels"
        },
        {
          "type": "p",
          "text": "Les méthodes des coûts partiels ne retiennent qu’une partie des charges — les charges variables (direct costing) ou les charges directes. Elles font apparaître une marge sur coûts variables et sont adaptées aux décisions de court terme (accepter une commande, calculer un seuil de profitabilité — cf. chapitres 3 et 8)."
        },
        {
          "type": "h3",
          "text": "L’imputation rationnelle"
        },
        {
          "type": "p",
          "text": "L’imputation rationnelle des charges fixes corrige l’effet du niveau d’activité sur le coût unitaire : les charges fixes sont imputées au prorata de l’activité réelle rapportée à une activité normale, ce qui neutralise l’impact de la sous-activité et isole le coût de la sous-activité (cf. chapitre 7)."
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Finalité**",
            "**Avantages**",
            "**Limites**"
          ],
          "rows": [
            [
              "Coûts complets",
              "Coût de revient complet, prix",
              "Vision exhaustive, fixation des prix",
              "Répartition arbitraire des indirects"
            ],
            [
              "ABC",
              "Coûts indirects plus justes",
              "Pertinence, analyse des activités",
              "Lourdeur de mise en œuvre"
            ],
            [
              "Coûts partiels",
              "Décisions de court terme",
              "Simplicité, marge sur coûts variables",
              "Ignore une partie des charges"
            ],
            [
              "Imputation rationnelle",
              "Neutraliser la (sous-)activité",
              "Coût unitaire stable",
              "Définition de l’activité normale"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "4.2 Le coût au service de la décision"
        },
        {
          "type": "p",
          "text": "Le coût n’est pas une fin en soi, mais un outil au service de la décision. Quatre grands champs de décision en dépendent."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/08.png",
          "alt": "4. Les méthodes et l’usage décisionnel des coûts",
          "width": 1440,
          "height": 500,
          "caption": "Le coût alimente quatre grands champs de décision"
        },
        {
          "type": "h3",
          "text": "Coût et fixation du prix"
        },
        {
          "type": "p",
          "text": "Le coût de revient constitue un plancher : vendre durablement en dessous détruit de la valeur. Le prix se fixe en ajoutant une marge au coût, ou en vérifiant que le prix de marché couvre le coût. La connaissance fine du coût est une condition de la politique tarifaire."
        },
        {
          "type": "h3",
          "text": "Coût et profitabilité"
        },
        {
          "type": "p",
          "text": "Le résultat analytique par produit, client ou activité révèle les sources réelles de profit. Il arrive qu’un produit phare en chiffre d’affaires soit peu profitable, tandis qu’un produit discret dégage l’essentiel de la marge. Le coût éclaire ces réalités cachées et oriente les efforts commerciaux."
        },
        {
          "type": "h3",
          "text": "Coût et performance"
        },
        {
          "type": "p",
          "text": "En comparant coûts réels et coûts prévus (standards), le contrôle de gestion mesure des écarts, en recherche les causes et déclenche des actions correctives. Le coût devient un instrument de pilotage et de responsabilisation, au cœur du contrôle budgétaire (cf. chapitre 14)."
        },
        {
          "type": "h3",
          "text": "Coût et stratégie"
        },
        {
          "type": "p",
          "text": "À l’échelle stratégique, la maîtrise des coûts fonde l’une des deux stratégies génériques de Porter : la domination par les coûts. L’analyse des coûts par activité (chaîne de valeur, ABC) aide à décider d’externaliser, d’investir ou de réorganiser."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — usage décisionnel",
          "text": "Décider d’abandonner un produit sur la base du seul coût complet, sans raisonner en charges pertinentes.\nRefuser une commande spéciale rentable au niveau du coût variable parce que son prix est inférieur au coût complet.\nConfondre profitabilité (résultat/CA) et rentabilité (résultat/capitaux engagés)."
        },
        {
          "type": "h3",
          "text": "4.3 Contrôle de gestion et numérique"
        },
        {
          "type": "p",
          "text": "Le calcul des coûts a longtemps été un travail manuel, long et fastidieux. Le numérique l’a transformé : la collecte et le calcul sont automatisés, et le contrôleur se concentre sur l’analyse et l’interprétation."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/09.png",
          "alt": "4. Les méthodes et l’usage décisionnel des coûts",
          "width": 1440,
          "height": 460,
          "caption": "Les outils numériques au service du calcul des coûts"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE",
          "text": "**Excel :**outil de modélisation pour construire et simuler des coûts (tables, scénarios).\n**ERP :**automatise la collecte des charges à partir d’une donnée unique et fiable.\n**Business Intelligence / dataviz :**restitue coûts et marges dans des tableaux de bord interactifs.\n**Automatisation :**les calculs récurrents (coûts mensuels, écarts) sont produits sans intervention manuelle.\n**IA générative :**aide à rédiger les commentaires d’analyse et à explorer les données."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — L’outil ne remplace pas le jugement",
          "text": "L’automatisation fiabilise et accélère, mais ne dispense pas de comprendre la construction d’un coût : un paramétrage erroné (mauvaise clé de répartition) produit un coût faux, plus dangereux car il paraît « calculé par la machine ». La maîtrise des concepts de ce chapitre reste indispensable."
        },
        {
          "type": "h3",
          "text": "4.4 Performance globale et durabilité : le coût élargi"
        },
        {
          "type": "p",
          "text": "Le calcul des coûts s’élargit : intégration des coûts environnementaux et sociaux (coûts cachés, coût du carbone), coût du cycle de vie, coût de la non-qualité. La performance globale appelle des coûts qui dépassent la seule dimension financière. Pour une entreprise éco-responsable comme l’entreprise, la question des déchets de production est centrale."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/10.png",
          "alt": "4. Les méthodes et l’usage décisionnel des coûts",
          "width": 1440,
          "height": 600,
          "caption": "Le coût des déchets : charge subie ou ressource valorisée ?"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ — Coût et valorisation des déchets",
          "text": "**Le coût du traitement des déchets. La fabrication du produit génère des chutes de matière et des rebuts. Leur traitement (collecte, transport, élimination en filière agréée) représente une charge réelle : supposons 1,20 € par produit fabriqué. Sur 5 000 produits, le coût annuel de traitement des déchets atteint 6 000 € — une charge longtemps ignorée du coût de revient classique.**\n**La valorisation des déchets.**l’entreprise met en place le recyclage des chutes de matière, revendues à un partenaire à 0,50 € par produit, soit 2 500 € de recettes annuelles. Le coût net des déchets tombe alors à 6 000 − 2 500 = 3 500 €. La valorisation transforme une charge subie en ressource partielle.\n**Lecture en performance globale.**Intégrer ce coût net (0,70 € par produit) au coût de revient le porte de 80 € à 80,70 € : la profitabilité financière baisse légèrement, mais la démarche réduit l’empreinte environnementale et renforce l’image de marque. Le coût élargi éclaire ainsi un arbitrage entre performance financière et performance durable — conformément à l’esprit de la réforme."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 4",
          "text": "Quatre méthodes (complets, ABC, partiels, imputation rationnelle) ; le choix dépend de la décision à éclairer.\nLe coût éclaire prix, profitabilité, performance, stratégie ; raisonner en charges pertinentes pour décider.\nLe coût élargi (déchets, carbone, cycle de vie) prolonge la logique du coût vers la performance globale."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative — l’entreprise**"
        },
        {
          "type": "p",
          "text": "**Énoncé. COMPOSAL (composants industriels) fabrique et vend 5 000 produits par an au prix de 90 €. Le coût standard de production unitaire est de 70 € (composants 20 €, MOD 30 €, centre Montage 20 €) ; les charges hors production (distribution, administration) s’élèvent à 10 € par produit. Le coût variable unitaire est de 40 € et les charges fixes annuelles de la ligne à 200 000 €. Un distributeur propose une commande spéciale ponctuelle de 800 produits à 60 € l’unité. La capacité de production est suffisante pour l’honorer sans investissement nouveau.**"
        },
        {
          "type": "p",
          "text": "**Travail à faire.**(1) Calculer le coût de revient et le résultat analytique unitaire ; (2) en déduire le taux de profitabilité ; (3) déterminer le seuil de profitabilité en quantité ; (4) décider, en raisonnant en coûts pertinents, s’il faut accepter la commande spéciale."
        }
      ]
    },
    {
      "id": "solution-detaillee",
      "title": "Solution détaillée",
      "blocks": [
        {
          "type": "h3",
          "text": "1. Coût de revient et résultat analytique unitaire"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Calcul**",
            "**Montant**"
          ],
          "rows": [
            [
              "Coût de production",
              "20 + 27 + 20",
              "70 €"
            ],
            [
              "+ Charges hors production",
              "",
              "8 €"
            ],
            [
              "= Coût de revient",
              "67 + 8",
              "80 €"
            ],
            [
              "Prix de vente",
              "",
              "90 €"
            ],
            [
              "= Résultat analytique unitaire",
              "90 − 75",
              "10 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Chaque produit vendu 90 € dégage donc un résultat analytique de 10 €. Sur 5 000 produits, le résultat analytique global s’élève à 5 000 × 10 = 50 000 €."
        },
        {
          "type": "h3",
          "text": "2. Taux de profitabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Taux de profitabilité",
          "text": "= (10 ÷ 90) × 100 ≈ 11,1 %"
        },
        {
          "type": "p",
          "text": "Pour 100 € de ventes, le produit dégage environ 11,1 € de résultat. À titre de comparaison, le taux de marge sur coût de revient vaut (10 ÷ 80) × 100 = 12,5 % : la marge représente 12,5 % du coût engagé. Les deux taux mesurent des choses différentes et ne doivent pas être confondus."
        },
        {
          "type": "h3",
          "text": "3. Seuil de profitabilité en quantité"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Calcul**",
            "**Montant**"
          ],
          "rows": [
            [
              "Marge sur coût variable unitaire",
              "90 − 38",
              "52 €"
            ],
            [
              "Charges fixes annuelles",
              "",
              "200 000 €"
            ],
            [
              "= Seuil de profitabilité (quantité)",
              "200 000 ÷ 50",
              "4 000 produits"
            ],
            [
              "Production actuelle",
              "",
              "5 000 produits"
            ],
            [
              "= Marge de sécurité (quantité)",
              "5 000 − 4 000",
              "1 000 produits"
            ]
          ]
        },
        {
          "type": "p",
          "text": "L’entreprise doit vendre 4 000 produits pour couvrir ses charges fixes. Au-delà, chaque produit apporte 50 € au résultat. Avec 5 000 unités vendues, la marge de sécurité est de 1 000 produits, soit 1 000 × 50 = 50 000 € de marge au-delà du seuil."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Vérification",
          "text": "Résultat = (MCV totale) − (charges fixes) = (5 000 × 50) − 200 000 = 250 000 − 200 000 = 50 000 €. Ce résultat, calculé en coûts partiels, est identique au résultat analytique de 50 000 € (calculé en coût complet) : c’est logique puisque la production est égale aux ventes (aucune variation de stock). Les deux méthodes ne divergeraient qu’en présence de stocks, qui absorbent différemment les charges fixes — d’où le principe : « aucune méthode n’est vraie dans l’absolu, chacune éclaire une décision »."
        },
        {
          "type": "h3",
          "text": "4. Décision sur la commande spéciale (raisonnement en coûts pertinents)"
        },
        {
          "type": "p",
          "text": "La commande porte sur 800 produits à 60 €, soit un prix inférieur au coût de revient complet de 80 €. Un raisonnement naïf en coût complet conduirait à refuser (marge apparente de 60 − 80 = − 20 €). Mais les charges fixes sont déjà couvertes par l’activité courante (5 000 > 4 000) et la capacité est disponible : seules les charges variables sont pertinentes pour cette commande supplémentaire."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-fondements-construction-couts/11.png",
          "alt": "Solution détaillée",
          "width": 1440,
          "height": 600,
          "caption": "Commande spéciale : coût complet (refus) vs coût pertinent (acceptation)"
        },
        {
          "type": "table",
          "headers": [
            "**Élément (par produit)**",
            "**Coût complet**",
            "**Coût pertinent**"
          ],
          "rows": [
            [
              "Prix offert",
              "60 €",
              "60 €"
            ],
            [
              "Coût pris en compte",
              "80 € (revient)",
              "40 € (variable)"
            ],
            [
              "Marge",
              "− 20 €",
              "+ 20 €"
            ],
            [
              "Décision",
              "Refuser",
              "Accepter"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Puisque les charges fixes sont déjà absorbées, chaque produit de la commande spéciale dégage une marge sur coût variable de 60 − 40 = 20 €. Sur 800 produits, la commande apporte 800 × 20 = 16 000 € de marge supplémentaire, qui s’ajoute intégralement au résultat."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Conclusion chiffrée",
          "text": "**Marge supplémentaire = 800 × (60 − 40) = 800 × 20 = 16 000 €**\n**Décision :**ACCEPTER la commande — à condition qu’elle reste ponctuelle et ne cannibalise pas les ventes à 90 €."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les limites de la décision",
          "text": "La décision n’est valable que ponctuellement : généralisée, la vente à 60 € ne couvrirait plus les charges fixes.\nRisque commercial : un prix bas accordé à un client peut dégrader le prix de référence auprès des autres.\nVérifier l’absence de coûts pertinents cachés (logistique spécifique, délais) qui réduiraient la marge de 20 €."
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
          "text": "• Trois familles de charges : incorporables, non incorporables (charges exceptionnelles, impôt sur les bénéfices) et supplétives (rémunération des capitaux propres et du travail de l'exploitant) — les supplétives s'ajoutent en comptabilité de gestion.\n• Hiérarchie à respecter sans sauter d'étape : coût d'achat → coût de production → coût de revient ; chaque coût intègre le précédent.\n• Stocks : CMUP = (valeur SI + valeur entrées) / (quantité SI + quantité entrées) ; en hausse des prix, le PEPS laisse un stock final plus élevé et un coût de sortie plus faible que le CMUP.\n• Différence d'incorporation = charges supplétives − charges non incorporables (± écarts) : elle réconcilie résultat de la comptabilité de gestion et résultat comptable.\n• Pont → Ch05 (coût complet par centres), Ch07 (imputation rationnelle des charges fixes) et Ch08 (coûts partiels) : même base de charges, traitements différents."
        }
      ]
    },
    {
      "id": "fiche-de-revision",
      "title": "Fiche de révision",
      "blocks": [
        {
          "type": "h3",
          "text": "Tableau récapitulatif des notions"
        },
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
              "Charge",
              "Consommation de ressources valorisée",
              "Matière première du coût",
              "Tri nécessaire (incorp./non/suppl.)"
            ],
            [
              "Charge directe",
              "Affectable à un seul objet",
              "Calcul simple et fiable",
              "Souvent minoritaire"
            ],
            [
              "Charge indirecte",
              "Commune, à répartir",
              "Réalisme du coût complet",
              "Clés de répartition arbitraires"
            ],
            [
              "Charge fixe / variable",
              "Selon le comportement",
              "Analyse coût-volume-profit",
              "Valable en zone de pertinence"
            ],
            [
              "Marge sur coût variable",
              "Prix − coût variable",
              "Seuil, décisions court terme",
              "Ignore les charges fixes"
            ],
            [
              "Coût de revient",
              "Coût complet du produit vendu",
              "Fixation du prix, résultat",
              "Dépend de la méthode"
            ],
            [
              "Taux de profitabilité",
              "Résultat ÷ CA",
              "Mesure le résultat sur ventes",
              "Ne mesure pas la rentabilité des capitaux"
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
          "text": "**Relations à connaître**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Pièges classiques & conseils méthodologiques",
          "text": "Confondre charge (par nature) et coût (par objet) ; croire qu’un coût est objectif.\nTenir compte des coûts irrécupérables ; oublier les charges supplétives.\nConfondre profitabilité (résultat/CA) et rentabilité (résultat/capitaux).\nDécider une commande spéciale en coût complet au lieu du coût pertinent.\nConclure une analyse de coût sans rappeler la méthode et ses limites."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
