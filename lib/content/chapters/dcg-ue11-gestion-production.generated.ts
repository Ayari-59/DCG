// Généré par scripts/convert-docx.mjs depuis CHAPITRE_12__LA_GESTION_DE_LA_PRODUCTION.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-gestion-production",
  "level": "DCG",
  "ue": "UE11",
  "number": 12,
  "title": "La gestion de la production",
  "description": "",
  "durationMin": 25,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Axe 3 — Les budgets, outil de pilotage de la performance. Compétence 3.2 « Mettre en œuvre les techniques prévisionnelles » (volet production). La production est la charnière entre les ventes et les approvisionnements. Ce chapitre met en œuvre les outils de prévision de la production : la programmation linéaire (méthode graphique et méthode du facteur rare) et l’ordonnancement par la méthode MPM (chemin critique, marges), au service d’un budget de production cohérent.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Comprendre les objectifs et les contraintes de la fonction production.\n• Construire un budget de production cohérent avec les ventes et les stocks.\n• Optimiser une combinaison productive par la programmation linéaire (méthode graphique) et le facteur rare.\n• Ordonnancer un projet par la méthode MPM : chemin critique, marges totales et libres.\n• Situer la production dans une logique de Lean, d’industrie 4.0 et de performance durable."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Le rôle de la fonction production est de **fournir les biens et services** correspondant aux objectifs de la direction et permettant de satisfaire la demande du marché, en combinant des facteurs de production. Comme toute problématique de gestion, elle vise à **optimiser sous contrainte** : produire le plus possible, dans les meilleurs délais et avec la meilleure qualité, alors que les ressources de l’entreprise ne sont pas illimitées."
        },
        {
          "type": "p",
          "text": "Le problème clé est celui de la **concordance entre la production et les ventes**. La production se situe à la charnière de la chaîne budgétaire : en aval du budget des ventes, en amont des approvisionnements. Deux familles de problèmes se posent : **combien produire de chaque produit** (combinaison optimale sous contrainte de ressources — la programmation linéaire) et **comment organiser la production dans le temps** (l’ordonnancement)."
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit de la réforme, chaque méthode est abordée selon quatre dimensions : **comprendre** l’enjeu industriel, **calculer** la solution optimale, **interpréter** les résultats, et **critiquer** les modèles."
        },
        {
          "type": "h4",
          "text": "*Présentation du chapitre*"
        },
        {
          "type": "p",
          "text": "La production traduit les prévisions de ventes en un programme réalisable : elle détermine les quantités à produire, en déduit les besoins en ressources et en approvisionnements, jusqu’à la production réalisée et la performance."
        },
        {
          "type": "p",
          "text": "*Figure 1 — La production, charnière entre ventes et approvisionnements*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le cadre du programme",
          "text": "Le référentiel cible la **programmation linéaire (méthode graphique et facteur rare / goulot d’étranglement)** et l’**ordonnancement par la méthode MPM** (marges libres et totales à calculer et analyser). En revanche, **la méthode du simplexe, le diagramme de Gantt, le suivi des délais et des coûts, ainsi que le juste-à-temps ne sont pas au programme** : ils sont signalés comme tels et abordés à titre de culture professionnelle."
        },
        {
          "type": "p",
          "text": "**1**"
        }
      ]
    },
    {
      "id": "les-fondements-de-la-gestion-de-la-production",
      "title": "Les fondements de la gestion de la production",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Les objectifs de la fonction production"
        },
        {
          "type": "p",
          "text": "La gestion de la production vise à **satisfaire la demande au moindre coût**, en combinant efficacement les facteurs de production. Pour une entreprise monoproduit, le problème se résume à organiser la production dans le temps. Pour une entreprise multiproduit, s’y ajoute le choix de la **combinaison optimale** : quelles quantités de chaque produit fabriquer pour maximiser le résultat sous contrainte de ressources limitées ?"
        },
        {
          "type": "h3",
          "text": "1.2 Les contraintes de production"
        },
        {
          "type": "p",
          "text": "La production est soumise à de multiples contraintes : **capacités** (heures-machine, heures de main-d’œuvre, surface d’atelier), **techniques** (nomenclatures, gammes opératoires), **commerciales** (demande maximale, délais clients) et **financières**. Ces contraintes s’expriment sous forme d’inéquations qui délimitent l’espace des productions réalisables."
        },
        {
          "type": "h3",
          "text": "1.3 Les indicateurs de performance industrielle"
        },
        {
          "type": "p",
          "text": "La performance industrielle se mesure par des indicateurs croisant productivité, qualité et délais."
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Mesure**",
            "**Finalité**"
          ],
          "rows": [
            [
              "Taux d’utilisation des capacités",
              "Heures utilisées / heures disponibles",
              "Repérer la sous-charge ou la saturation"
            ],
            [
              "Taux de rendement (TRS)",
              "Disponibilité × performance × qualité",
              "Mesurer l’efficacité globale d’un équipement"
            ],
            [
              "Taux de rebut / non-qualité",
              "Produits défectueux / produits fabriqués",
              "Piloter la qualité"
            ],
            [
              "Délai / taux de service",
              "Commandes livrées à l’heure",
              "Mesurer la tenue des délais"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "1.4 L’arbitrage coûts-délais-qualité"
        },
        {
          "type": "p",
          "text": "Toute décision de production met en tension trois objectifs souvent contradictoires : le **coût**, le **délai** et la **qualité**. Améliorer l’un pèse fréquemment sur les autres : accélérer la production peut dégrader la qualité ou renchérir les coûts. Le pilotage industriel consiste à trouver le bon compromis selon la stratégie de l’entreprise."
        },
        {
          "type": "p",
          "text": "*Figure 2 — L’arbitrage fondamental coûts-délais-qualité*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION",
          "text": "**Chez l’entreprise,**le positionnement « écoresponsable » privilégie la qualité et la durabilité des produits. Cet arbitrage assumé — une qualité élevée, des matériaux durables — pèse sur les coûts, mais constitue l’avantage concurrentiel de la marque. Le contrôle de gestion doit en mesurer le surcoût et le rapporter à la valeur perçue par le client."
        },
        {
          "type": "p",
          "text": "**2**"
        }
      ]
    },
    {
      "id": "la-construction-du-budget-de-production",
      "title": "La construction du budget de production",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Le principe et le lien avec le budget des ventes"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — le budget de production",
          "text": "Le **budget de production** traduit le programme des ventes en un programme de fabrication : il détermine les **quantités à produire**, période par période, compte tenu des stocks et des capacités. Il découle du budget des ventes (qui fixe la demande à satisfaire) et commande le budget des approvisionnements (matières nécessaires)."
        },
        {
          "type": "p",
          "text": "La relation fondamentale qui relie ventes, stocks et production est la suivante :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "L’ÉQUATION DU PROGRAMME DE PRODUCTION",
          "text": "**Production = Ventes prévues + Stock final souhaité − Stock initial**"
        },
        {
          "type": "h3",
          "text": "2.2 La prise en compte des stocks et le lissage de la charge"
        },
        {
          "type": "p",
          "text": "Les ventes sont généralement irrégulières (saisonnalité), alors qu’il est préférable d’utiliser l’outil de production de façon régulière pour réduire les coûts. L’entreprise arbitre donc entre suivre la demande (production au plus juste, mais coûts variables et risque de saturation) et lisser la production (charge régulière, mais constitution de stocks). Les stocks jouent ici un rôle de régulation entre une demande variable et une production lissée."
        },
        {
          "type": "h3",
          "text": "2.3 La détermination des quantités à produire (cas monoproduit)"
        },
        {
          "type": "p",
          "text": "Pour une entreprise monoproduit, la gestion se limite à organiser la production dans le temps. L’astuce consiste à **partir du programme des ventes et à remonter le temps** depuis la fin du tableau, afin d’anticiper les contraintes (capacité maximale, fermeture d’atelier)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Programme de production monoproduit (Société E)",
          "text": "Ventes mensuelles (janvier à juillet) : 50, 50, 100, 75, 80, 80, 120. L’entreprise doit posséder en début de mois de quoi couvrir les ventes du mois ; elle ne peut produire plus de 100 unités/mois ; elle ferme l’atelier en juin ; le stock initial est de 100. Travail à faire : établir le programme de production du semestre."
        },
        {
          "type": "p",
          "text": "**Corrigé — programme de production :**"
        },
        {
          "type": "table",
          "headers": [
            "",
            "**J**",
            "**F**",
            "**M**",
            "**A**",
            "**M**",
            "**J**",
            "**J**"
          ],
          "rows": [
            [
              "**Stock début**",
              "100",
              "105",
              "155",
              "155",
              "180",
              "200",
              "120"
            ],
            [
              "**Production**",
              "55",
              "100",
              "100",
              "100",
              "100",
              "0",
              "—"
            ],
            [
              "**Ventes**",
              "50",
              "50",
              "100",
              "75",
              "80",
              "80",
              "120"
            ],
            [
              "**Stock fin**",
              "105",
              "155",
              "155",
              "180",
              "200",
              "120",
              "—"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*L’entreprise produit au maximum (100) en mai pour constituer le stock qui couvrira juin (atelier fermé) et juillet (ventes de 120). La production est lissée à 100, le stock absorbe l’irrégularité des ventes.*"
        },
        {
          "type": "p",
          "text": "*Figure 3 — Lisser la charge de production malgré des ventes irrégulières*"
        },
        {
          "type": "h3",
          "text": "2.4 Les ajustements de capacité"
        },
        {
          "type": "p",
          "text": "Quand la demande dépasse durablement la capacité, l’entreprise doit ajuster : **heures supplémentaires, intérim, sous-traitance, équipes supplémentaires** à court terme ; **investissement en nouvelles machines** à plus long terme. Inversement, en cas de sous-charge, elle cherche à réduire les coûts fixes ou à réorienter la capacité. Ces décisions relèvent d’un arbitrage entre coût et flexibilité."
        },
        {
          "type": "p",
          "text": "**3**"
        }
      ]
    },
    {
      "id": "les-methodes-de-planification-et-d-ordonnancement",
      "title": "Les méthodes de planification et d’ordonnancement",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Les deux logiques de pilotage : flux poussés et flux tirés"
        },
        {
          "type": "p",
          "text": "Deux grands modèles d’organisation de la production s’opposent."
        },
        {
          "type": "table",
          "headers": [
            "",
            "**Flux poussés (amont)**",
            "**Flux tirés (aval)**"
          ],
          "rows": [
            [
              "**Modèle**",
              "Taylorien / fordien",
              "Toyota / japonais"
            ],
            [
              "**Principe**",
              "La production est poussée par les prévisions",
              "La production est tirée par la demande réelle"
            ],
            [
              "**Outil**",
              "MRP (planification des besoins)",
              "Juste-à-temps, Kanban"
            ],
            [
              "**Stocks**",
              "Stocks de régulation",
              "Tendance au « zéro stock »"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Figure 4 — Flux poussés (pilotage amont) et flux tirés (pilotage aval)*"
        },
        {
          "type": "h3",
          "text": "3.2 Le pilotage par l’amont : la méthode MRP"
        },
        {
          "type": "p",
          "text": "Le **MRP** (Management Resources Planning, ou planification des besoins en composants — PBC) est une technique de pilotage par l’amont. À partir des prévisions de ventes, elle planifie l’ensemble de l’activité : elle part du produit fini et utilise les **nomenclatures**, les **gammes opératoires**, les stocks actuels et souhaités pour calculer, par calculs matriciels, les **besoins dépendants** (matières et composants). Tous les flux sont orientés dans le même sens : des prévisions vers le produit fini."
        },
        {
          "type": "p",
          "text": "*Figure 5 — Le MRP : des données d’entrée aux ordres de fabrication*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Quand le MRP est-il performant ?",
          "text": "Le MRP est d’autant plus efficace que la demande est **prévisible**, que les produits font l’objet de nomenclatures stabilisées, qu’ils sont produits par lots et que des composants identiques entrent dans la fabrication de plusieurs produits."
        },
        {
          "type": "h3",
          "text": "3.3 La programmation linéaire : la méthode graphique"
        },
        {
          "type": "p",
          "text": "La **programmation linéaire** a pour objet d’**optimiser** (maximiser un résultat ou minimiser un coût) une fonction économique linéaire, **compte tenu de contraintes** linéaires. Pour deux produits, la résolution **graphique** est à privilégier."
        },
        {
          "type": "h3",
          "text": "La forme canonique"
        },
        {
          "type": "p",
          "text": "Étape la plus importante : traduire l’énoncé en langage mathématique. Il faut définir les variables, exprimer les contraintes (inéquations) et la fonction économique à optimiser. On maximise généralement la **marge sur coûts variables** (et non le chiffre d’affaires — erreur classique), les coûts fixes étant considérés comme non pertinents à court terme."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Programme linéaire (ALTIS Sport : produits Bet et Num)",
          "text": "ALTIS Sport (articles de sport) fabrique deux produits, le Bet et le Num. Deux produits passent par un atelier (capacité 900 uo) et la MOD (capacité 720 h). Un Bet consomme 6 uo d’atelier et 6 h de MOD ; un Num, 5 uo et 3 h. La demande maximale est de 100 Bet et 150 Num ; il faut produire au moins 80 produits. Les marges sur coûts variables sont de 260 € (Bet) et 200 € (Num). Travail à faire : (1) écrire la forme canonique ; (2) résoudre graphiquement ; (3) déterminer la combinaison optimale et la marge maximale.\nCorrigé — forme canonique. Soit x = nombre de Bet, y = nombre de Num :\n**Maximiser F = 260 x + 200 y**\nsous : 6x + 5y ≤ 900 (atelier) ; 6x + 3y ≤ 720 (MOD) ; x ≤ 100 ; y ≤ 150 ; x + y ≥ 80 ; x, y ≥ 0"
        },
        {
          "type": "h3",
          "text": "La résolution graphique"
        },
        {
          "type": "p",
          "text": "On trace les contraintes, qui délimitent le **domaine des solutions acceptables (DSA)** — l’ensemble des combinaisons (x, y) respectant toutes les contraintes. On trace ensuite la droite objectif F = 260x + 200y (famille de droites parallèles) et on la translate dans le sens des valeurs croissantes : **l’optimum est atteint au dernier sommet du DSA touché**. On admet en effet qu’une solution optimale, si elle existe, correspond à un sommet du DSA."
        },
        {
          "type": "h4",
          "text": "*Comment représenter une contrainte*"
        },
        {
          "type": "p",
          "text": "Chaque contrainte est une inéquation (par exemple **6x + 5y ≤ 900**). On la représente en quatre temps :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REPRÉSENTER UNE CONTRAINTE — PAS À PAS",
          "text": "Transformer l’inéquation en égalité (la droite frontière) : 6x + 5y = 900.\nTrouver deux points simples pour la tracer : si x = 0 → y = 180 ; si y = 0 → x = 150.\nJoindre (150 ; 0) et (0 ; 180).\nTester le point origine (0 ; 0) : 6(0) + 5(0) = 0 ≤ 900, c’est vrai → le demi-plan acceptable contient l’origine. Hachurer ce demi-plan. (Si le test était faux, on hachurerait l’autre côté.)"
        },
        {
          "type": "p",
          "text": "*Figure 6 — Représenter une contrainte : droite frontière, test de l’origine, demi-plan acceptable*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le domaine des solutions acceptables",
          "text": "On répète l’opération pour chaque contrainte. Le **DSA** est l’**intersection** de tous les demi-plans acceptables : c’est la zone qui respecte simultanément toutes les contraintes. Les contraintes de positivité (x ≥ 0, y ≥ 0) limitent l’étude au quart de plan supérieur droit."
        },
        {
          "type": "h4",
          "text": "*Déterminer les repères de la droite objectif*"
        },
        {
          "type": "p",
          "text": "Comme une contrainte, la droite objectif F = 260x + 200y se trace à partir de deux points. On lui donne une valeur arbitraire k (un multiple commode des coefficients facilite les calculs), puis on cherche ses intersections avec les axes :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "TRACER LA DROITE OBJECTIF — LES REPÈRES",
          "text": "Choisir une valeur k pour F (ex. k = 26 000) : on étudie 260x + 200y = 26 000.\nRepère sur l’axe des x (poser y = 0) : 260x = 26 000 → x = 100. Premier point : (100 ; 0).\nRepère sur l’axe des y (poser x = 0) : 200y = 26 000 → y = 130. Second point : (0 ; 130).\nJoindre (100 ; 0) et (0 ; 130) : toutes les droites objectif lui sont parallèles (pente −260/200 = −1,3). On les translate en augmentant k."
        },
        {
          "type": "h4",
          "text": "*Déterminer l’optimum*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LA RÉSOLUTION GRAPHIQUE PAS À PAS",
          "text": "Tracer chaque contrainte (droite frontière + test de l’origine) et hachurer son demi-plan acceptable.\nDélimiter le domaine des solutions acceptables (DSA), intersection de tous les demi-plans.\nTracer une première droite objectif F = k, puis la translater parallèlement vers les valeurs croissantes.\nIdentifier le dernier sommet du DSA touché : c’est l’optimum.\nLire ses coordonnées en projetant sur les axes.\nVérifier au besoin par la méthode énumérative (valeur de F en chaque sommet)."
        },
        {
          "type": "p",
          "text": "*Figure 7 — Résolution graphique : DSA, translation de l’objectif et lecture de l’optimum*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Corrigé (suite) — Détermination de l’optimum (ALTIS Sport)",
          "text": "La translation de la droite objectif désigne le sommet D, à l’intersection des deux contraintes saturées (atelier et MOD) ; on résout le système :\n**6x + 5y = 900 et 6x + 3y = 720**\nPar soustraction : 2y = 180 → **y = 90** ; puis 6x + 270 = 720 → **x = 75**. On lit ces coordonnées sur les axes par projection.\n**F = (75 × 260) + (90 × 200) = 37 500 €**\nLe programme optimal est de produire **75 Bet et 90 Num** par mois, pour une marge sur coûts variables maximale de **37 500 €**. La méthode énumérative confirme ce résultat. La contrainte x + y ≥ 80 est superflue : elle peut être supprimée sans changer la solution."
        },
        {
          "type": "p",
          "text": "**Méthode énumérative (à titre indicatif) — valeur de F à chaque sommet du DSA ; le maximum est en D (75 ; 90).**"
        },
        {
          "type": "table",
          "headers": [
            "**Sommet**",
            "**(0 ; 80)**",
            "**(0 ; 150)**",
            "**(25 ; 150)**",
            "**(75 ; 90)**",
            "**(100 ; 40)**",
            "**(100 ; 0)**",
            "**(80 ; 0)**"
          ],
          "rows": [
            [
              "F (€)",
              "16 000",
              "30 000",
              "36 500",
              "**37 500**",
              "34 000",
              "26 000",
              "20 800"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Résoudre le système quand la soustraction directe ne marche pas",
          "text": "Ici, les deux équations avaient le même coefficient pour x (6 et 6) : une simple soustraction éliminait x. Ce n’est pas toujours le cas. La méthode générale (élimination par combinaison) consiste à multiplier les équations pour rendre égaux les coefficients d’une inconnue, avant de soustraire.\nExemple : intersection de 4x + 3y = 480 et 2x + 5y = 400.\nChoisir l’inconnue à éliminer (ici x). Les coefficients sont 4 et 2 ; leur PPCM est 4.\nMultiplier la 2ᵉ équation par 2 : 4x + 10y = 800.\nSoustraire la 1ʳᵉ : (4x + 10y) − (4x + 3y) = 800 − 480 → 7y = 320 → y ≈ 45,7.\nReporter : 4x + 3(45,7) = 480 → 4x = 342,9 → x ≈ 85,7.\n**Astuce :**on peut aussi éliminer y, ou employer la substitution (isoler une inconnue puis remplacer) : même résultat. On choisit la voie aux calculs les plus simples."
        },
        {
          "type": "h3",
          "text": "3.4 La programmation linéaire : la méthode du facteur rare"
        },
        {
          "type": "p",
          "text": "Au-delà de deux produits, la résolution graphique devient impossible. Lorsqu’une **seule contrainte est commune à tous les produits** (un atelier goulot d’étranglement), on applique la **méthode du facteur rare** : on classe les produits selon la marge sur coût variable dégagée **par unité de facteur rare consommée**, et on sature la capacité en commençant par le plus rentable."
        },
        {
          "type": "p",
          "text": "*Figure 8 — Le facteur rare : classer les produits par marge / unité d’œuvre*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le facteur rare (trois produits A, B, C)",
          "text": "Trois produits A, B, C ; l’atelier (capacité 8 500 uo) est le facteur rare. Consommations : 2, 4, 6 uo ; marges : 100, 300, 360 € ; ventes maximales : 1 000, 1 000, 500."
        },
        {
          "type": "table",
          "headers": [
            "",
            "**A**",
            "**B**",
            "**C**"
          ],
          "rows": [
            [
              "**Marge / uo**",
              "50",
              "75",
              "60"
            ],
            [
              "**Classement**",
              "3ᵉ",
              "1ᵉʳ",
              "2ᵉ"
            ],
            [
              "**Quantité produite**",
              "750",
              "1 000",
              "500"
            ]
          ]
        },
        {
          "type": "p",
          "text": "On produit d’abord B (1 000 → 4 000 uo), puis C (500 → 3 000 uo), puis A avec le reste (1 500 uo / 2 = 750). L’atelier est saturé. MCV = 75 000 + 300 000 + 180 000 = **555 000 €**."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Hors programme — la méthode du simplexe",
          "text": "Au-delà de deux variables sans facteur rare, le document historique présente la **méthode du simplexe** (tableaux de Dantzig, variables d’écart, pivot de Gauss). Le référentiel précise que **la méthode du simplexe n’est pas abordée au DCG**. On la mentionne pour mémoire ; les exercices se résolvent par la méthode graphique (2 produits) ou le facteur rare (3 produits et plus)."
        },
        {
          "type": "h3",
          "text": "3.5 L’ordonnancement par la méthode MPM"
        },
        {
          "type": "p",
          "text": "L’**ordonnancement** organise dans le temps un ensemble de tâches soumises à des contraintes d’antériorité, pour minimiser la durée totale d’un projet. Il identifie les tâches qui ne peuvent souffrir aucun retard. Le programme retient la **méthode des potentiels Métra (MPM)**, où les tâches sont représentées par des sommets (carrés) et les contraintes de succession par des arcs valués par les durées."
        },
        {
          "type": "h3",
          "text": "L’ordonnancement pas à pas"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**▣ APPLICATION 3 — Ordonnancement d’un projet (méthode MPM)**"
        },
        {
          "type": "p",
          "text": "La réalisation d’un projet nécessite 10 tâches dont les conditions d’antériorité et la durée (en semaines) figurent dans le tableau ci-dessous."
        },
        {
          "type": "table",
          "headers": [
            "**Tâche**",
            "**Durée**",
            "**Antériorités**",
            "**Tâche**",
            "**Durée**",
            "**Antériorités**"
          ],
          "rows": [
            [
              "A",
              "6",
              "aucune",
              "F",
              "5",
              "A, C, E"
            ],
            [
              "B",
              "10",
              "A",
              "G",
              "9",
              "A, B, C, J"
            ],
            [
              "C",
              "6",
              "A",
              "H",
              "15",
              "D"
            ],
            [
              "D",
              "3",
              "aucune",
              "I",
              "7",
              "A, B, C, E, F, G, J"
            ],
            [
              "E",
              "14",
              "A, C",
              "J",
              "7",
              "A, C"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Travail à faire :"
        },
        {
          "type": "p",
          "text": "1. Déterminer les niveaux du graphe."
        },
        {
          "type": "p",
          "text": "2. Établir le dictionnaire des tâches immédiatement antérieures (après suppression des redondances)."
        },
        {
          "type": "p",
          "text": "3. Tracer le graphe MPM."
        },
        {
          "type": "p",
          "text": "4. Calculer les dates au plus tôt et au plus tard, puis déterminer le chemin critique."
        },
        {
          "type": "p",
          "text": "5. Calculer les marges totales et libres ; interpréter celles de la tâche J."
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**✓ CORRIGÉ — Ordonnancement (méthode MPM)**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LES DATES ET LE CHEMIN CRITIQUE",
          "text": "**Date au plus tôt :**calculée de la gauche vers la droite ; en cas de convergence, on retient le chemin le plus long.\n**Date au plus tard :**calculée de la fin vers le début ; en cas de convergence, on retient le chemin le plus court.\n**Chemin critique :**le chemin le plus long ; ses tâches ont une date au plus tôt égale à la date au plus tard (marges nulles)."
        },
        {
          "type": "h4",
          "text": "*Le dictionnaire des antériorités*"
        },
        {
          "type": "p",
          "text": "Avant de tracer le graphe, on construit le **dictionnaire des antériorités** : pour chaque tâche, la liste de ses **précédents**. Le terme « antérieur » signifie avant, mais pas nécessairement de façon immédiate. Pour tracer le graphe, on a besoin des seules tâches **immédiatement antérieures** : on supprime les **redondances**, c’est-à-dire les antériorités déjà impliquées par une autre."
        },
        {
          "type": "table",
          "headers": [
            "**Tâche**",
            "**Tâches antérieures (tous les précédents)**",
            "**Tâches immédiatement antérieures**"
          ],
          "rows": [
            [
              "A",
              "—",
              "—"
            ],
            [
              "B",
              "A",
              "A"
            ],
            [
              "C",
              "A",
              "A"
            ],
            [
              "D",
              "—",
              "—"
            ],
            [
              "E",
              "A, C",
              "C"
            ],
            [
              "F",
              "A, C, E",
              "E"
            ],
            [
              "G",
              "A, B, C, J",
              "B, J"
            ],
            [
              "H",
              "D",
              "D"
            ],
            [
              "I",
              "A, B, C, E, F, G, J",
              "F, G"
            ],
            [
              "J",
              "A, C",
              "C"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Supprimer les redondances",
          "text": "Exemple pour la tâche E : ses antériorités sont A et C. Or A précède déjà C : l’antériorité « A » est redondante, il suffit d’écrire que E suit immédiatement C. De même, pour F l’antériorité immédiate est E (qui contient déjà A et C) ; pour I, ce sont F et G. Seules les tâches immédiatement antérieures sont reliées par un arc dans le graphe MPM."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "LA MÉTHODE D’ORDONNANCEMENT MPM PAS À PAS",
          "text": "Construire le dictionnaire des antériorités, supprimer les redondances, puis tracer le graphe : un sommet par tâche (nom et durée), un arc par lien d’antériorité immédiate ; ajouter un sommet « Début » et un sommet « Fin ».\nCalculer les dates au plus tôt de gauche à droite : date au plus tôt = plus grande des (date au plus tôt + durée) des antérieures. En convergence, on retient le chemin le plus long.\nReporter la date de fin au plus tôt (ici 38) sur le sommet « Fin » : c’est aussi sa date au plus tard.\nCalculer les dates au plus tard de droite à gauche : date au plus tard = plus petite des (date au plus tard − durée) des suivantes. En convergence, on retient le chemin le plus court.\nIdentifier le chemin critique : tâches dont la date au plus tôt égale la date au plus tard (marge nulle). C’est le chemin le plus long.\nCalculer les marges (totale et libre) de chaque tâche non critique."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le calcul des dates, étape par étape",
          "text": "**Dates au plus tôt (gauche → droite).**A et D n’ont pas d’antériorité : début au plus tôt = 0. C : après A → 0 + 6 = 6 ; E : après C → 6 + 6 = 12. G converge (B et J) : max(6 + 10 ; 12 + 7) = max(16 ; 19) = 19 → chemin le plus long. I converge (F et G) : max(26 + 5 ; 19 + 9) = max(31 ; 28) = 31 ; puis FIN : 31 + 7 = 38 semaines.\n**Dates au plus tard (droite → gauche).**On part de 38 et on recule. J précède G : date au plus tard = 22 − 7 = 15 ; sa date au plus tôt est 12 → J dispose d’une marge. A converge en arrière (B et C) : min(12 − 6 ; 6 − 6) = 0 → chemin le plus court.\n**Chemin critique.**Les tâches A, C, E, F, I ont une date au plus tôt égale à leur date au plus tard. Le chemin A – C – E – F – I dure 6 + 6 + 14 + 5 + 7 = 38 semaines, soit la durée minimale du projet."
        },
        {
          "type": "p",
          "text": "*Figure 9 — Ordonnancement, étape 1 : le tracé du graphe (tâches, contraintes, durées)*"
        },
        {
          "type": "p",
          "text": "*Figure 10 — Étape 2 : les dates au plus tôt (calcul de gauche à droite)*"
        },
        {
          "type": "p",
          "text": "*Figure 11 — Étape 3 : les dates au plus tard (calcul de droite à gauche)*"
        },
        {
          "type": "p",
          "text": "*Figure 12 — Étape 4 : le chemin critique A‑C‑E‑F‑I (38 semaines)*"
        },
        {
          "type": "h3",
          "text": "3.6 Le calcul et l’interprétation des marges"
        },
        {
          "type": "p",
          "text": "Pour chaque tâche, on calcule deux marges. La marge totale est le retard maximal possible sans allonger la durée du projet (= ). La marge libre est le retard possible sans décaler le début au plus tôt des tâches suivantes. La marge libre est toujours inférieure ou égale à la marge totale ; les tâches critiques ont des marges nulles."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CALCULER LES MARGES",
          "text": "Marge totale (MT) = date au plus tard − date au plus tôt de la tâche.\nMarge libre (ML) = date au plus tôt de la tâche suivante − durée de la tâche − date au plus tôt de la tâche.\nUne tâche critique a MT = ML = 0 ; et toujours ML ≤ MT.\nExemple — tâche J : MT = 15 − 12 = 3 ; ML = 19 − 7 − 12 = 0 (la tâche suivante, G, démarre au plus tôt en 19)."
        },
        {
          "type": "p",
          "text": "*Figure 13 — Marge totale et marge libre : l’exemple de la tâche J*"
        },
        {
          "type": "table",
          "headers": [
            "**Tâche**",
            "**Au plus tôt**",
            "**Au plus tard**",
            "**Marge totale**",
            "**Marge libre**",
            "**Calcul de la marge libre**"
          ],
          "rows": [
            [
              "A",
              "0",
              "0",
              "0",
              "0",
              "6 − 6 − 0 = 0"
            ],
            [
              "B",
              "6",
              "12",
              "6",
              "3",
              "19 − 10 − 6 = 3"
            ],
            [
              "C",
              "6",
              "6",
              "0",
              "0",
              "12 − 6 − 6 = 0"
            ],
            [
              "D",
              "0",
              "20",
              "20",
              "0",
              "3 − 3 − 0 = 0"
            ],
            [
              "E",
              "12",
              "12",
              "0",
              "0",
              "26 − 14 − 12 = 0"
            ],
            [
              "F",
              "26",
              "26",
              "0",
              "0",
              "31 − 5 − 26 = 0"
            ],
            [
              "G",
              "19",
              "22",
              "3",
              "3",
              "31 − 9 − 19 = 3"
            ],
            [
              "H",
              "3",
              "23",
              "20",
              "20",
              "38 − 15 − 3 = 20"
            ],
            [
              "I",
              "31",
              "31",
              "0",
              "0",
              "38 − 7 − 31 = 0"
            ],
            [
              "J",
              "12",
              "15",
              "3",
              "0",
              "19 − 7 − 12 = 0"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Lire les marges de la tâche J",
          "text": "La tâche J a une marge totale de 3 (retard de 3 semaines possible sans allonger le projet) mais une marge libre nulle : tout retard décalerait le début au plus tôt des tâches suivantes. Les tâches A, C, E, F, I (chemin critique) ont des marges nulles : aucun retard n’y est toléré."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Hors programme — Gantt et suivi délais/coûts",
          "text": "Le document historique présente aussi le **diagramme de Gantt** et le suivi des délais et des coûts d’un projet en cours. Le référentiel indique que **le Gantt et le suivi des délais et des coûts ne sont pas abordés au DCG**. On retient que le Gantt, plus simple à lire que le MPM, ne fait apparaître ni les dates au plus tard ni le chemin critique."
        },
        {
          "type": "p",
          "text": "**4**"
        }
      ]
    },
    {
      "id": "les-evolutions-contemporaines-de-la-gestion-de-production",
      "title": "Les évolutions contemporaines de la gestion de production",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Le Lean Management et le juste-à-temps"
        },
        {
          "type": "p",
          "text": "Issu du modèle Toyota, le **Lean Management** vise l’élimination des gaspillages (muda) et la création de valeur au plus juste. Il s’appuie sur le **juste-à-temps** (produire la bonne quantité au bon moment) et la démarche de **qualité totale**, résumée par les « cinq zéros »."
        },
        {
          "type": "p",
          "text": "*Figure 14 — Le Lean Management et les « cinq zéros »*"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Hors programme — Lean et juste-à-temps",
          "text": "Les **méthodes de juste-à-temps ne sont pas au programme** du DCG (compétence 3.2). Le Lean, le JàT et les cinq zéros (zéro stock, défaut, délai, panne, papier) sont présentés ici comme **culture professionnelle** indispensable pour comprendre la production contemporaine, sans constituer une méthode de calcul exigée à l’examen."
        },
        {
          "type": "h3",
          "text": "4.2 Production flexible et industrie 4.0"
        },
        {
          "type": "p",
          "text": "La **production flexible** permet de fabriquer de petites séries variées sans surcoût majeur, pour répondre à une demande personnalisée. L’**industrie 4.0** pousse cette logique plus loin : usines connectées, machines communicantes, jumeaux numériques et pilotage en temps réel rendent la production à la fois plus réactive et plus efficiente."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE — La gestion de production à l’ère numérique",
          "text": "**ERP & GPAO —**les progiciels intégrés et la gestion de production assistée par ordinateur planifient et suivent la fabrication de bout en bout.\n**MES & IoT —**les systèmes d’exécution de la fabrication (Manufacturing Execution Systems) et les capteurs connectés remontent les données d’atelier en temps réel.\n**Business Intelligence & IA —**l’analyse de données optimise l’ordonnancement et anticipe la demande ; l’intelligence artificielle ajuste dynamiquement les plans de production.\n**Maintenance prédictive —**l’analyse des signaux machines anticipe les pannes (« zéro panne »), réduisant les arrêts non planifiés.\n*Le numérique rapproche les deux modèles : il rend les flux poussés plus réactifs et les flux tirés plus pilotables.*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ — La production durable",
          "text": "**Machines plus économes —**nouveaux équipements, chauffage optimisé, flotte de transport électrique réduisent la consommation d’énergie.\n**Arbitrage coût / CO₂ —**ces investissements augmentent les coûts mais font baisser les émissions de CO₂ : un nouvel arbitrage s’ajoute au triangle coûts-délais-qualité.\n**Production plus durable —**l’amélioration de la qualité allonge la durée de vie des produits ; chez l’entreprise, les produits écoresponsables incarnent cette orientation.\n**Conditions de travail —**la modernisation de l’outil améliore aussi les conditions de travail des salariés.\n*La performance industrielle intègre désormais une dimension environnementale et sociale, au-delà du seul coût.*"
        },
        {
          "type": "h3",
          "text": "4.3 Regard critique : apports et limites des modèles"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — REGARD CRITIQUE",
          "text": "Les outils de planification (MRP, programmation linéaire, MPM) apportent rigueur et optimisation, mais reposent sur des hypothèses fortes : **demande prévisible, capacités et durées connues, linéarité des contraintes**. La réalité industrielle est plus incertaine : aléas de la demande, pannes, retards fournisseurs. Une planification trop rigide expose à deux risques symétriques — la **sous-charge** (capacités gaspillées) et la **saturation** (goulots, retards). D’où l’importance de la flexibilité et d’un pilotage réactif, que le numérique facilite. Les modèles sont des aides à la décision, non des automatismes."
        },
        {
          "type": "table",
          "headers": [
            "**Apports des outils de production**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Optimisent la combinaison productive",
              "Hypothèses de linéarité et de certitude"
            ],
            [
              "Planifient et sécurisent les délais (MPM)",
              "Demande et durées en réalité incertaines"
            ],
            [
              "Lissent la charge, réduisent les coûts",
              "Rigidité face aux aléas (pannes, retards)"
            ],
            [
              "Base d’un pilotage numérique réactif",
              "Risque de sous-charge ou de saturation"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ Synthèse finale**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Programmation linéaire : définir les variables de décision, la fonction objectif (souvent maximiser la marge sur coût variable) et les contraintes (≤ capacités) avec non-négativité ; l'optimum se trouve sur un sommet du polygone des contraintes.\n• Contrainte saturée (vérifiée à l'égalité) = ressource limitante ; le prix dual (ou coût d'opportunité) mesure le gain procuré par une unité supplémentaire de cette ressource.\n• Ordonnancement (MPM/PERT) : dates au plus tôt (parcours aller), au plus tard (parcours retour) ; marge = date au plus tard − date au plus tôt.\n• Chemin critique = succession des tâches à marge nulle ; la durée du projet est la date au plus tôt de la tâche finale.\n• Pont → Ch08 (la fonction objectif est la marge sur coût variable) et Ch11 (les contraintes traduisent les capacités d'approvisionnement)."
        },
        {
          "type": "h4",
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
            "**Utilité**",
            "**Limites**"
          ],
          "rows": [
            [
              "Budget de production",
              "Ventes + stock final − stock initial",
              "Traduire les ventes en programme de fabrication",
              "Dépend de la fiabilité des prévisions"
            ],
            [
              "Pilotage amont (MRP)",
              "Production poussée par les prévisions",
              "Planifier besoins et capacités",
              "Suppose une demande prévisible"
            ],
            [
              "Pilotage aval (JàT)",
              "Production tirée par la demande",
              "Réduire les stocks",
              "Sensible aux aléas amont"
            ],
            [
              "Programmation linéaire",
              "Optimiser une marge sous contraintes",
              "Combinaison productive optimale",
              "Linéarité ; graphique limité à 2 produits"
            ],
            [
              "Facteur rare",
              "Classer par marge / unité d’œuvre",
              "Résoudre 3 produits et plus",
              "Une seule contrainte commune"
            ],
            [
              "Ordonnancement MPM",
              "Graphe des tâches, chemin critique",
              "Tenir les délais, repérer les marges",
              "Durées supposées connues"
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
          "title": "FORMULES & REPÈRES",
          "text": "**Production = Ventes + Stock final − Stock initial**\n**Maximiser F = Σ (marge sur coût variable × quantité)**\n**marge/uo = marge sur coût variable ÷ conso. du facteur rare**\n**marge totale = date au + tard − date au + tôt · tâche critique → marges = 0**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "PIÈGES CLASSIQUES & CONSEILS",
          "text": "Maximiser la marge sur coût variable, pas le chiffre d’affaires (erreur fréquente).\nRepérer les contraintes superflues (qui ne modifient pas la solution).\nDates au plus tôt : chemin le plus long en convergence ; au plus tard : le plus court.\nHors programme : simplexe, Gantt, suivi délais/coûts, juste-à-temps — ne pas les développer.\nToujours conclure par une interprétation (contraintes saturées, arbitrage capacité)."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
