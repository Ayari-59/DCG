// Généré par scripts/convert-docx.mjs depuis CHAPITRE_04__ANALYSE_DU_RISQUE_ET_LOI_NORMALE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-analyse-risque-loi-normale",
  "level": "DCG",
  "ue": "UE11",
  "number": 4,
  "title": "Analyse du risque et loi normale",
  "description": "",
  "durationMin": 30,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "POSITIONNEMENT DANS LE PROGRAMME",
          "text": "**Partie 2 du référentiel — Analyser la formation du résultat et des coûts pour aider aux prises de décisions**\n**Axe 2.1 — Calculer et interpréter des seuils et des marges en avenir certain et aléatoire**\n**Axe 2.2 — Calculer et analyser les indicateurs de risque d’exploitation (élasticité prix et prix croisée)**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Ce chapitre met en œuvre deux compétences professionnelles complémentaires du référentiel UE11, l’une centrée sur l’analyse du résultat en avenir certain et aléatoire, l’autre sur les indicateurs de risque d’exploitation.\n• Mettre en œuvre le modèle coût-volume-profit pour analyser le résultat.\n• Calculer et interpréter des seuils et des marges en avenir certain et aléatoire.\n• Modéliser une grandeur de gestion par une variable aléatoire suivant une loi normale.\n• Calculer et interpréter espérance, variance, écart-type ; évaluer la probabilité d’atteindre un objectif.\n• Identifier les intérêts et les limites de l’approche.\n• Identifier et mesurer le risque d’exploitation par le calcul d’indicateurs.\n• Calculer et utiliser l’élasticité prix de la demande ET l’élasticité prix croisée.\n• Analyser des situations à partir des indicateurs et proposer des solutions de gestion adaptées.\n• Rendre compte des résultats et rédiger un écrit pour conseiller le décideur."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Délimitation stricte du programme (REF-01)",
          "text": "Les calculs sur les variables aléatoires (espérance, variance, écart-type) sont LIMITÉS à la loi normale.\nLa loi binomiale et la loi de Poisson NE SONT PAS étudiées (rappelées en encadré rouge « Hors programme », à titre culturel).\nLes tests d’hypothèse sont HORS PROGRAMME : seules l’estimation et la lecture directe de la table sont attendues ; l’intervalle de confiance porte sur une MOYENNE.\nLes indicateurs de risque se limitent au risque d’EXPLOITATION.\nOn dit toujours « seuil de profitabilité », jamais « seuil de rentabilité ». L’analyse critique est aussi importante que les calculs."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Le contrôle de gestion classique raisonne souvent comme si l’avenir était connu : un seuil de profitabilité fixe, un budget figé, un coût complet calculé une fois pour toutes. Or aucune entreprise n’évolue dans un monde certain. Les ventes fluctuent, les coûts varient, la conjoncture surprend. Présenter un résultat unique, c’est masquer une réalité essentielle : ce résultat n’est qu’une valeur parmi un éventail de possibles."
        },
        {
          "type": "p",
          "text": "Intégrer le risque, c’est remplacer un chiffre par une distribution : non plus « nous vendrons 20 000 produits », mais « nous vendrons en moyenne 20 000 produits, avec une incertitude mesurée »."
        },
        {
          "type": "p",
          "text": "Le programme rénové de l’UE11 inscrit explicitement cette ambition : analyser « les seuils et les marges en avenir certain ET aléatoire », puis « calculer et analyser les indicateurs de risque d’exploitation », incluant désormais l’élasticité prix et l’élasticité prix croisée. La loi normale est l’outil probabiliste unique retenu. Au-delà du calcul, c’est une posture qui est attendue : comprendre pourquoi on probabilise, savoir interpréter le résultat et en mesurer les limites."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — Les quatre dimensions de chaque méthode",
          "text": "Comprendre — pourquoi la méthode existe et ce qu’elle apporte.\nCalculer — la mécanique : espérance, écart-type, probabilités, élasticités.\nInterpréter — traduire un chiffre en conseil de gestion.\nCritiquer — connaître les hypothèses et les limites du modèle."
        },
        {
          "type": "p",
          "text": "Le chapitre est organisé en quatre parties. La **Partie I** pose le cadre du risque et l’outil de la variable aléatoire. La **Partie II** en tire les mesures (espérance, variance, écart-type) et présente la loi normale. La **Partie III** applique cet outillage au seuil de profitabilité probabilisé et à l’estimation. La **Partie IV** complète l’analyse par les indicateurs de risque d’exploitation et l’élasticité de la demande au prix."
        },
        {
          "type": "p",
          "text": "**I**"
        }
      ]
    },
    {
      "id": "risque-incertitude-et-variables-aleatoires",
      "title": "Risque, incertitude et variables aléatoires",
      "blocks": [
        {
          "type": "p",
          "text": "Toute décision de gestion s’inscrit dans un certain rapport à l’avenir. Avant tout calcul, il faut qualifier cet avenir — connu, probabilisable ou imprévisible — puis se doter de l’outil mathématique qui permet de le modéliser : la variable aléatoire."
        },
        {
          "type": "h3",
          "text": "▸ 1.1 Les trois univers de la décision"
        },
        {
          "type": "p",
          "text": "On distingue traditionnellement trois cadres décisionnels, du plus simple au plus difficile à piloter."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/01.png",
          "alt": "Risque, incertitude et variables aléatoires",
          "width": 1400,
          "height": 500,
          "caption": "Figure 1 — Les trois univers de la décision : du déterministe au probabiliste."
        },
        {
          "type": "h4",
          "text": "L’avenir certain"
        },
        {
          "type": "p",
          "text": "En univers certain, une seule conséquence est associée à chaque décision. Le contrôle de gestion déterministe — coût complet, seuil de profitabilité ponctuel, budget figé — relève de ce cadre. La décision se réduit à une optimisation : retenir l’option qui maximise le résultat ou minimise le coût. Ce cadre est un point de départ utile, mais il présente comme certain un résultat qui ne l’est pas."
        },
        {
          "type": "h4",
          "text": "L’avenir risqué (ou aléatoire)"
        },
        {
          "type": "p",
          "text": "En univers risqué, chaque décision peut conduire à plusieurs résultats, chacun affecté d’une probabilité connue ou estimable. La décision s’appuie alors sur deux critères complémentaires :"
        },
        {
          "type": "ul",
          "items": [
            "**un critère de rendement** : l’espérance mathématique du résultat, qui résume le gain moyen attendu ;",
            "**un critère de risque** : l’écart-type du résultat, qui mesure la dispersion et donc le danger de s’écarter de la moyenne."
          ]
        },
        {
          "type": "p",
          "text": "C’est l’univers de ce chapitre : on connaît la « forme » de l’incertitude (ici, une loi normale), ce qui permet de calculer des probabilités."
        },
        {
          "type": "h4",
          "text": "L’avenir incertain"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Incertitude (au sens strict)",
          "text": "L’incertitude désigne une situation où les états futurs sont connus, mais ne peuvent pas être probabilisés, faute d’information ou d’historique fiable. On sait ce qui peut arriver, mais pas avec quelle probabilité."
        },
        {
          "type": "p",
          "text": "La distinction remonte à l’économiste Frank Knight (1921), qui oppose le *risque probabilisable* à l’*incertitude radicale*. Face à l’incertitude, les outils probabilistes ne s’appliquent plus : on recourt à des critères de décision (optimiste, pessimiste, regret minimax) ou à l’analyse de scénarios."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Ne pas confondre risque et incertitude",
          "text": "À l’examen, la nuance est valorisée : le risque se mesure (probabilités, espérance, écart-type) ; l’incertitude se gère par le jugement et les scénarios."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir pour l’examen",
          "text": "Une question d’examen précise toujours le cadre : « en avenir certain » (calcul déterministe) ou « en avenir aléatoire » (loi normale, probabilités). Ces mots-clés déterminent la méthode attendue."
        },
        {
          "type": "h3",
          "text": "▸ 1.2 La variable aléatoire"
        },
        {
          "type": "p",
          "text": "Pour modéliser le risque, on associe à chaque résultat possible d’une expérience une probabilité. L’objet mathématique qui réalise cette association est la variable aléatoire."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Variable aléatoire",
          "text": "Une variable aléatoire est une application qui associe à chaque résultat possible d’une expérience (chaque éventualité) une valeur numérique, à laquelle on attache une probabilité."
        },
        {
          "type": "p",
          "text": "On distingue deux familles selon l’ensemble des valeurs prises :"
        },
        {
          "type": "ul",
          "items": [
            "**les variables discrètes** : l’ensemble des valeurs possibles est dénombrable (nombre de commandes, de pannes, d’unités vendues en entiers) ;",
            "**les variables continues** : les valeurs couvrent tout un intervalle réel (un chiffre d’affaires, une durée, un poids). C’est le cas de la loi normale, au cœur du programme DCG."
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/02.png",
          "alt": "L’avenir incertain",
          "width": 1400,
          "height": 460,
          "caption": "Figure 2 — De l’expérience aléatoire à la variable aléatoire et à sa loi de probabilité."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Conséquence pour le continu",
          "text": "Pour une variable continue, la probabilité d’une valeur ponctuelle est nulle : **P(X = x) = 0**. On ne raisonne que sur des intervalles : P(a < X < b). C’est pourquoi, avec la loi normale, on calcule toujours des probabilités de dépasser, d’être inférieur à, ou d’être compris entre deux bornes."
        },
        {
          "type": "h3",
          "text": "▸ 1.3 La loi de probabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Loi de probabilité",
          "text": "La loi de probabilité d’une variable X associe à chaque valeur possible xi sa probabilité P(X = xi). La somme de toutes les probabilités vaut 1 : **Σ P(xi) = 1**."
        },
        {
          "type": "p",
          "text": "Pour une variable discrète, la loi se représente par un tableau ou un diagramme en bâtons. Pour une variable continue, elle se décrit par une fonction de densité dont l’aire totale sous la courbe vaut 1."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/03.png",
          "alt": "L’avenir incertain",
          "width": 1029,
          "height": 741,
          "caption": "Figure 3 — Fonction de répartition d’une variable discrète : courbe en escalier de la loi de probabilité."
        },
        {
          "type": "h4",
          "text": "Construction d’un tableau probabiliste"
        },
        {
          "type": "p",
          "text": "Lorsque l’entreprise dispose d’un historique stable, les fréquences observées peuvent servir d’estimation des probabilités."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Loi de probabilité et espérance du nombre de commandes",
          "text": "Sur 300 jours travaillés, un commercial de Boréal Cosmétiques (soins vendus en pharmacie) a relevé le nombre de commandes obtenues chaque jour. Les conditions étant stables, les fréquences observées sont assimilées à des probabilités.\n**Travail à faire :**établir la loi de probabilité du nombre de commandes journalières à partir des fréquences observées, puis calculer l’espérance E(X) du nombre de commandes par jour."
        },
        {
          "type": "table",
          "headers": [
            "**Nombre de commandes (xᵢ)**",
            "**0**",
            "**1**",
            "**2**",
            "**3**",
            "**4**",
            "**5**"
          ],
          "rows": [
            [
              "Jours observés",
              "30",
              "60",
              "90",
              "75",
              "30",
              "15"
            ],
            [
              "Probabilité P(xᵢ)",
              "0,10",
              "0,20",
              "0,30",
              "0,25",
              "0,10",
              "0,05"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/04.png",
          "alt": "Construction d’un tableau probabiliste",
          "width": 1400,
          "height": 600,
          "caption": "Figure 4 — Diagramme en bâtons de la loi de probabilité (variable discrète)."
        },
        {
          "type": "p",
          "text": "On vérifie que la somme des probabilités vaut bien 1 (0,10 + 0,20 + 0,30 + 0,25 + 0,10 + 0,05 = 1). Ce tableau servira, en Partie II, à calculer l’espérance et l’écart-type du nombre de commandes."
        },
        {
          "type": "p",
          "text": "**II**"
        }
      ]
    },
    {
      "id": "mesurer-le-risque-esperance-variance-et-loi-normale",
      "title": "Mesurer le risque : espérance, variance et loi normale",
      "blocks": [
        {
          "type": "p",
          "text": "Une loi de probabilité se résume par deux indicateurs : l’espérance (la valeur centrale, le rendement attendu) et l’écart-type (la dispersion, le risque). Cette partie les construit, puis présente la loi normale, seule loi continue au programme."
        },
        {
          "type": "h3",
          "text": "▸ 2.1 L’espérance mathématique : le rendement attendu"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Espérance mathématique E(X)",
          "text": "L’espérance d’une variable aléatoire discrète est la moyenne des valeurs possibles, pondérée par leurs probabilités :"
        },
        {
          "type": "h4",
          "text": "Calculer"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Corrigé — Espérance du nombre de commandes journalières",
          "text": "En reprenant le tableau de la Partie I :\nE(X) = 0×0,10 + 1×0,20 + 2×0,30 + 3×0,25 + 4×0,10 + 5×0,05\nE(X) = 0 + 0,20 + 0,60 + 0,75 + 0,40 + 0,25 = **2,20 commandes/jour**\nLe commercial obtient en moyenne 2,2 commandes par jour. Sur 220 jours travaillés, on anticipe environ 484 commandes annuelles — base directe d’un budget des ventes."
        },
        {
          "type": "h4",
          "text": "Propriétés de linéarité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Propriétés à connaître",
          "text": "(toujours vrai, même si X et Y sont dépendantes)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — De la quantité espérée au résultat espéré",
          "text": "TONIK fabrique un article de sport. La demande annuelle de cet article a pour espérance E(Q) = 20 000 articles. La marge sur coût variable unitaire étant de 20 €, la MCV espérée est de E(MCV) = 20 × 20 000 = 400 000 €.\n**Travail à faire : calculer la marge sur coût variable espérée E(MCV) et le résultat espéré E(R), sachant E(Q) = 20 000 articles, une MCV unitaire de 20 € et des charges fixes de 300 000 €. Commenter.**\n**Corrigé :**\n**Résultat espéré : E(R) = E(MCV) − CF = 400 000 − 300 000 = 100 000 €. En moyenne, le article est bénéficiaire — mais ce chiffre moyen ne dit rien du risque de déficit.**"
        },
        {
          "type": "h3",
          "text": "▸ 2.2 La variance et l’écart-type : la mesure du risque"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Variance et écart-type",
          "text": "La variance mesure la dispersion moyenne des valeurs autour de l’espérance :\nL’écart-type, racine carrée de la variance, est exprimé dans la même unité que X :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Pourquoi l’écart-type plutôt que la variance ?",
          "text": "La variance s’exprime dans une unité quadratique (des « produits au carré »), non interprétable. L’écart-type, en revenant à l’unité d’origine, redevient lisible : un écart-type de 800 produits se comprend immédiatement."
        },
        {
          "type": "h4",
          "text": "Propriétés de la variance"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Propriétés à connaître",
          "text": "(la constante b ne joue pas sur la dispersion)\nSi X et Y sont indépendantes :\n— on additionne les variances, jamais les écarts-types"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les pièges classiques sur la variance",
          "text": "Oublier le carré : , pas a·V(X).\n**Additionner les écarts-types** : σ(X+Y) ≠ σ(X) + σ(Y). On additionne les variances.\n**Faire jouer la constante** : V(aX + b) ne dépend pas de b."
        },
        {
          "type": "h4",
          "text": "Calculer — variance des commandes journalières"
        },
        {
          "type": "p",
          "text": "Reprenons le commercial (E(X) = 2,2 commandes/jour) pour calculer la dispersion de son activité."
        },
        {
          "type": "table",
          "headers": [
            "0",
            "0,10",
            "−2,20",
            "4,84",
            "0,484"
          ],
          "rows": [
            [
              "1",
              "0,20",
              "−1,20",
              "1,44",
              "0,288"
            ],
            [
              "2",
              "0,30",
              "−0,20",
              "0,04",
              "0,012"
            ],
            [
              "3",
              "0,25",
              "0,80",
              "0,64",
              "0,160"
            ],
            [
              "4",
              "0,10",
              "1,80",
              "3,24",
              "0,324"
            ],
            [
              "5",
              "0,05",
              "2,80",
              "7,84",
              "0,392"
            ],
            [
              "Total",
              "1,00",
              "—",
              "—",
              "1,660"
            ]
          ]
        },
        {
          "type": "p",
          "text": "On lit directement V(X) = 1,66, d’où ≈ 1,29 commande. L’activité du commercial oscille, en ordre de grandeur, entre 0,9 et 3,5 commandes par jour autour de sa moyenne de 2,2 — une dispersion à intégrer dans tout objectif commercial."
        },
        {
          "type": "h4",
          "text": "Interpréter — comparer deux projets"
        },
        {
          "type": "p",
          "text": "L’écart-type devient un indicateur de gestion dès lors qu’on compare des alternatives, de même espérance mais de risques différents."
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Projet A — marché établi**",
            "**Projet B — marché émergent**"
          ],
          "rows": [
            [
              "Espérance des ventes",
              "20 000 unités",
              "20 000 unités"
            ],
            [
              "Écart-type",
              "4 000 unités",
              "9 000 unités"
            ],
            [
              "Coefficient de variation (σ/E)",
              "20 %",
              "45 %"
            ],
            [
              "Lecture",
              "Risque maîtrisé",
              "Risque élevé"
            ]
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/05.png",
          "alt": "Interpréter — comparer deux projets",
          "width": 1400,
          "height": 560,
          "caption": "Figure 5 — Même espérance, dispersions différentes : l’écart-type mesure le risque."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/06.png",
          "alt": "Interpréter — comparer deux projets",
          "width": 1400,
          "height": 600,
          "caption": "Figure 6 — À espérance égale, le projet le plus étalé est le plus risqué."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le coefficient de variation",
          "text": "Pour comparer le risque de grandeurs d’échelles différentes : . Ce ratio sans unité exprime le risque relatif. Ici, le projet B est plus de deux fois plus risqué que A."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Règle de décision en univers risqué",
          "text": "À espérance égale, choisir le projet de plus faible écart-type (moins risqué).\nÀ écart-type égal, choisir le projet de plus forte espérance (plus rentable).\nLorsque les deux varient en sens contraire, l’arbitrage relève de l’aversion au risque du décideur."
        },
        {
          "type": "h3",
          "text": "▸ 2.3 La loi normale"
        },
        {
          "type": "p",
          "text": "La loi normale est la seule loi de probabilité au programme du DCG. Elle modélise les grandeurs résultant de nombreuses causes indépendantes dont les effets s’additionnent sans qu’aucune ne domine — la plupart des grandeurs économiques (chiffre d’affaires, volumes, durées)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Loi normale (ou loi de Laplace-Gauss)",
          "text": "Une variable continue X suit une loi normale de paramètres m et σ, notée **N(m ; σ)**, lorsque sa densité est symétrique en cloche, centrée sur m. m est l’espérance (centre) et σ l’écart-type (largeur)."
        },
        {
          "type": "p",
          "text": "La loi normale est entièrement déterminée par deux paramètres : l’espérance m (position du sommet, valeur la plus probable) et l’écart-type σ (largeur de la cloche : plus σ est grand, plus la courbe est aplatie). La courbe est symétrique par rapport à x = m, l’aire totale vaut 1, et la probabilité se répartit selon une règle empirique."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/07.png",
          "alt": "Interpréter — comparer deux projets",
          "width": 1011,
          "height": 636,
          "caption": "Figure 7 — Fonction de répartition d’une variable continue (loi normale) : courbe croissante de 0 à 1."
        },
        {
          "type": "h4",
          "text": "La règle 68 – 95 – 99,7"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/08.png",
          "alt": "La règle 68 – 95 – 99,7",
          "width": 1400,
          "height": 600,
          "caption": "Figure 8 — La courbe de Gauss et la répartition de la probabilité par intervalles d’écarts-types."
        },
        {
          "type": "ul",
          "items": [
            "**environ 68 %** des valeurs sont dans [m − σ ; m + σ] ;",
            "**environ 95 %** dans [m − 2σ ; m + 2σ] ;",
            "**environ 99,7 %** dans [m − 3σ ; m + 3σ]."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Lecture rapide chez l’entreprise",
          "text": "Avec Q ~ N(20 000 ; 4 000), on sait sans calcul que 68 % des réalisations tomberont dans [16 000 ; 24 000], 95 % dans [12 000 ; 28 000] et 99,7 % dans [8 000 ; 32 000]."
        },
        {
          "type": "h4",
          "text": "Le centrage-réduction"
        },
        {
          "type": "p",
          "text": "La table de la loi normale n’est tabulée que pour la loi centrée réduite N(0 ; 1). Pour toute autre loi normale, un changement de variable ramène X à une variable T standard."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/09.png",
          "alt": "Le centrage-réduction",
          "width": 2226,
          "height": 1380,
          "caption": "Figure 9 — Arbre des conditions d’approximation : passage à la loi normale ou à la loi de Poisson."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "La transformation fondamentale",
          "text": "T suit alors la loi N(0 ; 1), dont la fonction de répartition est notée π(t) et lue dans la table."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/10.png",
          "alt": "Le centrage-réduction",
          "width": 1400,
          "height": 500,
          "caption": "Figure 10 — Le centrage-réduction ramène toute loi N(m ; σ) à la loi de référence N(0 ; 1)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — La propriété de symétrie",
          "text": "La courbe N(0 ; 1) étant symétrique par rapport à 0, la table ne donne que les valeurs positives de t. Pour les négatives : **π(−t) = 1 − π(t)**. De même, P(T > t) = 1 − π(t). La maîtrise du signe est la principale source d’erreur."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — Méthode pas à pas pour calculer une probabilité",
          "text": "Identifier la loi de la grandeur (Q, CA, MCV ou R) et ses paramètres m et σ.\nCentrer-réduire la (ou les) borne(s) : t = (borne − m) / σ.\nTraiter le signe de t à l’aide de la symétrie π(−t) = 1 − π(t).\nLire π(t) dans la table et combiner selon le sens de l’inégalité.\nInterpréter économiquement et conseiller le décideur."
        },
        {
          "type": "p",
          "text": "**III**"
        }
      ]
    },
    {
      "id": "le-seuil-de-profitabilite-probabilise-et-l-estimation",
      "title": "Le seuil de profitabilité probabilisé et l’estimation",
      "blocks": [
        {
          "type": "p",
          "text": "Nous disposons à présent de tout l’outillage pour répondre à la question de la direction de l’entreprise. C’est l’application reine du programme : le seuil de profitabilité probabilisé."
        },
        {
          "type": "h3",
          "text": "▸ 3.1 L’application centrale — la probabilité d’atteindre le seuil"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Probabilité d’atteindre le seuil de profitabilité",
          "text": "La demande annuelle de l’article de TONIK suit Q ~ N(20 000 ; 4 000). Le seuil de profitabilité, calculé en avenir certain, est de 15 000 articles (300 000 / 20 €). Quelle est la probabilité que TONIK atteigne son seuil ?\n**Travail à faire : sachant que la demande suit Q ~ N(20 000 ; 4 000) et que le seuil de profitabilité est de 15 000 articles, déterminer la probabilité que TONIK atteigne son seuil.**"
        },
        {
          "type": "p",
          "text": "**Étape 1 — Formaliser. Être bénéficiaire signifie vendre au moins 15 000 produits, soit calculer P(Q ≥ 15 000).**"
        },
        {
          "type": "p",
          "text": "**Étape 2 — Centrer-réduire la borne.**"
        },
        {
          "type": "p",
          "text": "**t = (15 000 − 20 000) / 4 000 = −5 000 / 4 000 = −1,25**"
        },
        {
          "type": "p",
          "text": "**Étape 3 — Traiter le signe. P(Q ≥ 15 000) = P(T ≥ −1,25). Par symétrie, P(T ≥ −1,25) = P(T ≤ 1,25) = π(1,25).**"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/11.png",
          "alt": "Le seuil de profitabilité probabilisé et l’estimation",
          "width": 2073,
          "height": 441,
          "caption": "Figure 11 — Symétrie de la loi normale centrée réduite : π(−t) = 1 − π(t)."
        },
        {
          "type": "p",
          "text": "**Étape 4 — Lire la table.**La table donne π(1,25) = 0,8944."
        },
        {
          "type": "p",
          "text": "**P(Q ≥ 15 000) = 0,8944 = 89,44 %**"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/12.png",
          "alt": "Le seuil de profitabilité probabilisé et l’estimation",
          "width": 1400,
          "height": 640,
          "caption": "Figure 12 — Seuil de profitabilité probabilisé : P(Q ≥ 15 000) = 89,44 %."
        },
        {
          "type": "p",
          "text": "**Étape 5 — Interpréter et conseiller.**l’entreprise a près de 9 chances sur 10 d’atteindre son seuil. Mais le risque résiduel n’est pas nul : **10,56 %** des scénarios conduisent à un déficit. le contrôleur de gestion recommandera soit de constituer une marge de sécurité (réduction des charges fixes, négociation des coûts variables), soit d’accepter ce risque au regard du rendement attendu de 100 000 €."
        },
        {
          "type": "h3",
          "text": "▸ 3.2 Variante — la probabilité d’atteindre un résultat cible"
        },
        {
          "type": "p",
          "text": "La même démarche s’applique à un objectif de résultat. Supposons que la direction vise un résultat d’au moins 50 000 € sur le produit."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Corrigé — Du résultat cible à la probabilité",
          "text": "R = 20·Q − 300 000. Atteindre R ≥ 50 000 impose Q ≥ 17 500 ; t = (17 500 − 20 000) / 4 000 = −0,625, d’où P(R ≥ 50 000) = π(0,625) ≈ 0,734, soit environ 73 %.\nL’objectif de résultat de 50 000 € (73 %) est plus ambitieux que le simple seuil de profitabilité (89 %), mais il reste probable."
        },
        {
          "type": "h3",
          "text": "▸ 3.3 Savoir lire la table de la loi normale"
        },
        {
          "type": "p",
          "text": "La table donne, pour une valeur positive de t, la probabilité π(t) = P(T ≤ t). Trois configurations couvrent l’essentiel des questions d’examen."
        },
        {
          "type": "table",
          "headers": [
            "**On cherche…**",
            "**Si t ≥ 0**",
            "**Si t < 0 (poser u = −t)**"
          ],
          "rows": [
            [
              "P(T ≤ t)",
              "π(t) (lecture directe)",
              "1 − π(u)"
            ],
            [
              "P(T ≥ t)",
              "1 − π(t)",
              "π(u)"
            ],
            [
              "P(a ≤ T ≤ b)",
              "π(b) − π(a)",
              "combiner les deux règles"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — Astuce de contrôle",
          "text": "Avant toute lecture, situez la borne par rapport à la moyenne. Si la borne est inférieure à m (4 000 < 5 000), la probabilité de la dépasser est supérieure à 50 % — ici 89,44 %. Un résultat inférieur à 50 % signalerait une erreur de signe."
        },
        {
          "type": "h3",
          "text": "▸ 3.4 L’analyse de sensibilité par scénarios"
        },
        {
          "type": "p",
          "text": "Le contrôleur teste la robustesse de sa conclusion en faisant varier les hypothèses."
        },
        {
          "type": "table",
          "headers": [
            "**Scénario**",
            "**Hypothèse**",
            "**t**",
            "**P(Q ≥ 15 000)**"
          ],
          "rows": [
            [
              "Central",
              "N(20 000 ; 4 000)",
              "−1,25",
              "89,44 %"
            ],
            [
              "Demande prudente",
              "N(18 400 ; 4 000)",
              "−0,85",
              "80,23 %"
            ],
            [
              "Volatilité accrue",
              "N(20 000 ; 6 000)",
              "−0,83",
              "79,67 %"
            ],
            [
              "Optimiste",
              "N(21 600 ; 4 000)",
              "−1,65",
              "95,05 %"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Lecture managériale",
          "text": "Une baisse de la demande moyenne ou une hausse de la volatilité dégradent la probabilité d’atteindre le seuil. Le pilotage consiste à soutenir le volume (action commerciale) et à réduire la dispersion (fiabilisation des prévisions, diversification)."
        },
        {
          "type": "h3",
          "text": "▸ 3.5 L’estimation par intervalle de confiance d’une moyenne"
        },
        {
          "type": "p",
          "text": "La loi normale fonde aussi l’estimation : la généralisation d’une mesure d’échantillon à toute la population. Lorsqu’l’entreprise ne peut observer qu’un échantillon (durées de production, par exemple), elle en déduit une fourchette pour la moyenne réelle, assortie d’un niveau de confiance."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Périmètre programme",
          "text": "Conformément au référentiel, l’estimation porte sur une MOYENNE (estimation ponctuelle et par intervalle de confiance). Les tests d’hypothèse sont hors programme et ne sont pas traités."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Intervalle de confiance d’une moyenne (loi normale)",
          "text": "**Estimateur ponctuel : m ≈ x̄ (moyenne de l’échantillon)**\nCorrection de l’écart-type :\nIC (n ≥ 30) :\nValeurs usuelles :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 4 — Intervalle de confiance d’une durée moyenne de production",
          "text": "Sur un échantillon de n = 36 lots, la Menuiserie Dubois (mobilier sur mesure) relève une durée moyenne de production x̄ = 52 minutes par meuble, avec un écart-type d’échantillon σ′ = 9 minutes.\n**Travail à faire :**à partir d’un échantillon de n = 36 lots donnant une durée moyenne x̄ = 52 min et un écart-type d’échantillon σ′ = 9 min, déterminer un intervalle de confiance à 95 % de la durée moyenne réelle de production. Interpréter.\n**Corrigé :**\nCorrection : .\nIC à 95 % : I = = [ 52 − 2,98 ; 52 + 2,98 ]\n**I = [ 49,02 ; 54,98 ] minutes**\nAvec 95 % de confiance, la durée moyenne réelle de production se situe entre 49 et 55 minutes. le contrôleur de gestion fixera un standard de temps tenant compte de cette fourchette plutôt qu’une valeur illusoirement précise."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Estimation — réflexes d’examen",
          "text": "Ne pas confondre paramètres de la population (m, σ) et de l’échantillon (x̄, σ′).\nCorriger σ′ en s avant un intervalle de confiance d’une moyenne.\nRetenir t = 1,96 (95 %) et t = 2,575 (99 %).\nPlus la confiance augmente, plus l’intervalle s’élargit : ce qui est gagné en certitude est perdu en précision.\nNe pas traiter de test d’hypothèse : hors programme."
        },
        {
          "type": "h3",
          "text": "▸ 3.6 Encadrés transversaux"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE",
          "text": "Le calcul probabiliste, longtemps réservé aux tables papier, est aujourd’hui instantané et intégré aux outils du contrôleur :\n**Tableur (Excel) :**LOI.NORMALE(x ; m ; σ ; VRAI) renvoie π sans table ; LOI.NORMALE.INVERSE fait le chemin inverse (du seuil de probabilité au volume).\n**Business Intelligence (Power BI) :**les distributions de demande sont actualisées en temps réel ; la probabilité d’atteindre le seuil devient un indicateur vivant du tableau de bord.\n**Simulation de Monte-Carlo :**au-delà du DCG, elle croise plusieurs variables aléatoires (prix, volumes, coûts) pour estimer la distribution du résultat.\n**Intelligence artificielle :**les modèles prédictifs affinent l’estimation de m et σ en intégrant saisonnalité et variables externes."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ",
          "text": "L’analyse du risque ne se limite pas au risque financier. Les démarches ESG intègrent des risques extra-financiers — climatiques, réglementaires, réputationnels — dont certains se prêtent à une modélisation probabiliste. Le pilotage de la performance globale mobilise les mêmes raisonnements espérance / dispersion, étendus aux parties prenantes et à la création de valeur durable.\nPour l’entreprise, dont le positionnement est éco-responsable, un risque d’approvisionnement en matières recyclées ou un risque réglementaire carbone relèvent de la même logique d’anticipation : estimer une espérance d’impact, mesurer sa dispersion, et probabiliser le dépassement d’un seuil critique (coût du carbone, taux d’incorporation de matières recyclées)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — HORS PROGRAMME DCG — Lois discrètes (culture DSCG)",
          "text": "Les développements ci-dessous ne sont PAS exigibles au DCG : le référentiel précise expressément que la loi binomiale et la loi de Poisson ne sont pas étudiées. Ils sont présentés à titre culturel, pour la poursuite d’études (DSCG, Master CCA).\nLoi binomiale B(n ; p) : nombre de succès sur n épreuves indépendantes. E(X) = np ; .\nLoi de Poisson P(λ) : événements rares sur une période. E(X) = λ ; ."
        },
        {
          "type": "p",
          "text": "**IV**"
        }
      ]
    },
    {
      "id": "indicateurs-de-risque-d-exploitation-et-elasticite",
      "title": "Indicateurs de risque d’exploitation et élasticité",
      "blocks": [
        {
          "type": "p",
          "text": "Le risque ne se mesure pas seulement par les probabilités. Le modèle coût-volume-profit fournit une batterie d’**indicateurs de risque d’exploitation** — la probabilité, pour l’entreprise, de ne pas couvrir ses charges de structure et donc de subir une perte. Le programme rénové y ajoute un point nouveau : l’**élasticité prix de la demande** et l’**élasticité prix croisée**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Articulation avec le chapitre 5",
          "text": "Les indicateurs de risque d’exploitation (marge et indice de sécurité, indice de prélèvement, levier opérationnel) sont construits en détail au chapitre 5 (modèle CVP). Ils sont ici synthétisés sous l’angle du risque et reliés à l’analyse probabiliste, conformément à la compétence 2.2."
        },
        {
          "type": "h3",
          "text": "▸ 4.1 Synthèse des indicateurs de risque d’exploitation"
        },
        {
          "type": "p",
          "text": "On rappelle que pour la ligne le produit, au niveau d’activité normal de 20 000 produits : CA = 1 000 000 €, MCV = 400 000 €, CF = 300 000 €, résultat = 100 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule**",
            "**Calcul le produit**",
            "**Lecture du risque**"
          ],
          "rows": [
            [
              "Marge de sécurité",
              "CA − Seuil",
              "1 000 000 − 750 000 = 250 000 €",
              "Baisse de CA supportable"
            ],
            [
              "Indice de sécurité",
              "MS / CA",
              "250 000 / 1 000 000 = 25 %",
              "Recul de 25 % avant perte"
            ],
            [
              "Indice de prélèvement",
              "CF / CA",
              "300 000 / 1 000 000 = 30 %",
              "Part du CA absorbée par les CF"
            ],
            [
              "Levier opérationnel",
              "MCV / Résultat",
              "400 000 / 100 000 = 4",
              "Sensibilité du résultat au CA"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le levier opérationnel (LO)",
          "text": "Aussi nommé coefficient de volatilité, il mesure l’élasticité du résultat par rapport au chiffre d’affaires : de combien de pour cent varie le résultat quand le CA varie de 1 %. **LO = MCV / Résultat = 1 / Indice de sécurité**."
        },
        {
          "type": "p",
          "text": "Pour le produit, LO = 4 : une variation de 10 % du chiffre d’affaires entraîne une variation de 40 % du résultat, dans les deux sens."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Lien avec l’analyse probabiliste",
          "text": "L’indice de sécurité de 25 % signifie que le seuil (15 000 unités) laisse une marge avant la perte ; couplé à une probabilité de 89,44 % d’atteindre ce seuil, le risque d’exploitation reste modéré."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — indicateurs de risque",
          "text": "Confondre marge de sécurité (un montant) et indice de sécurité (un pourcentage).\nOublier que le levier opérationnel amplifie aussi les pertes, pas seulement les profits.\nÉtendre l’analyse au risque financier ou de marché : le programme se limite au risque d’EXPLOITATION."
        },
        {
          "type": "h3",
          "text": "▸ 4.2 L’élasticité prix de la demande"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Élasticité prix de la demande (e)",
          "text": "L’élasticité prix mesure la sensibilité de la quantité demandée à une variation du prix. C’est le rapport de la variation relative de la demande à la variation relative du prix :"
        },
        {
          "type": "p",
          "text": "L’élasticité prix est généralement négative : une hausse du prix fait baisser la demande. On l’interprète par sa valeur absolue :"
        },
        {
          "type": "ul",
          "items": [
            "**|e| > 1 — demande élastique** : la demande réagit fortement au prix ; une hausse de prix réduit le chiffre d’affaires.",
            "**|e| < 1 — demande inélastique** : la demande réagit faiblement ; une hausse de prix augmente le chiffre d’affaires.",
            "**|e| = 1 — élasticité unitaire** : le chiffre d’affaires est insensible à la variation de prix."
          ]
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-analyse-risque-loi-normale/13.png",
          "alt": "Indicateurs de risque d’exploitation et élasticité",
          "width": 1400,
          "height": 560,
          "caption": "Figure 13 — Élasticité prix de la demande : zones élastique et inélastique."
        },
        {
          "type": "h4",
          "text": "Calculer — l’élasticité du produit"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 5 — Élasticité-prix de la demande",
          "text": "La Brasserie du Mont commercialise un coffret dégustation, son produit phare. La direction envisage de porter le prix de 50 € à 55 € (+ 10 %). L’élasticité estimée étant de − 1,08, la demande recule d’environ 10,8 %, passant de 20 000 à ≈ 17 840 unités.\n**Travail à faire : la Brasserie du Mont envisage de porter le prix de 50 € à 55 € (+ 10 %). L’élasticité-prix estimée est de − 1,08. Calculer la variation attendue de la demande et conclure sur l’opportunité de la hausse.**\n**Corrigé :**\n;\ne = −6 % / +5,56 % = **−1,08**\nLa demande du coffret est élastique (|e| = 1,08 > 1). Une hausse de prix de 1 % réduit la demande de 1,08 %. Conséquence : augmenter le prix ferait baisser le chiffre d’affaires."
        },
        {
          "type": "h4",
          "text": "Interpréter — effet sur le chiffre d’affaires"
        },
        {
          "type": "table",
          "headers": [
            "**Scénario**",
            "**Prix**",
            "**Quantité**",
            "**Chiffre d’affaires**"
          ],
          "rows": [
            [
              "Situation actuelle",
              "50 €",
              "20 000",
              "1 000 000 €"
            ],
            [
              "Après hausse de prix",
              "55 €",
              "17 840",
              "981 200 €"
            ],
            [
              "Variation",
              "+10 %",
              "−10,8 %",
              "−1,88 %"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La demande étant élastique, la hausse de prix se traduit par une légère **baisse du chiffre d’affaires (− 18 800 €)**. le contrôleur de gestion déconseillera donc cette hausse si l’objectif est de maximiser le CA — sauf si la marge unitaire dégagée compense la baisse de volume (à analyser via la MCV). Sur un marché concurrentiel, l’élasticité élevée invite à la prudence sur le prix."
        },
        {
          "type": "h3",
          "text": "▸ 4.3 L’élasticité prix croisée"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Élasticité prix croisée (eₓ/ᵧ)",
          "text": "L’élasticité croisée mesure la sensibilité de la demande d’un produit X à la variation du prix d’un autre produit Y :"
        },
        {
          "type": "p",
          "text": "Son signe révèle la nature de la relation entre les deux produits :"
        },
        {
          "type": "ul",
          "items": [
            "**e croisée > 0 — produits substituts** : la hausse du prix de Y reporte la demande vers X (ex. deux marques de produits concurrentes).",
            "**e croisée < 0 — produits compléments : la hausse du prix de Y réduit aussi la demande de X (ex. produit et accessoire).**",
            "**e croisée ≈ 0 — produits indépendants** : aucune relation."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 6 — Élasticité-prix croisée",
          "text": "**Pour ce coffret de la Brasserie du Mont. Substitut. Un coffret concurrent voit son prix passer de 80 € à 88 € (+10 %). La demande du coffret progresse de 4 %.**\n**Travail à faire : déterminer, dans les deux situations décrites, l’élasticité-prix croisée et préciser si les coffrets sont substituts ou compléments.**\n**Corrigé :**\n**e croisée = +4 % / +10 % = +0,40 → positive : les deux coffrets sont bien des substituts. la Brasserie du Mont bénéficie des hausses de prix de ses concurrents.**\n**Complément. Un coffret complémentaire de la Brasserie du Mont augmente de 10 %. La demande du coffret recule de 3 %.**\n**e croisée = −3 % / +10 % = −0,30 → négative : les deux coffrets sont compléments. Une politique de prix sur l’un affecte l’autre.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — élasticités",
          "text": "Élasticité prix : presque toujours négative ; on l’interprète en valeur absolue (élastique si > 1).\nÉlasticité croisée : le SIGNE est l’information clé (positif = substituts, négatif = compléments).\nToujours relier l’élasticité à une décision : politique de prix, gamme, réaction à la concurrence."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — élasticité",
          "text": "Oublier le signe ou le sens : confondre substituts et compléments.\nCalculer une variation absolue au lieu d’une variation relative (en %).\nConclure sur le CA sans vérifier si la demande est élastique ou inélastique."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Analyse critique — portée et limites de l’élasticité",
          "text": "L’élasticité suppose que seul le prix varie, « toutes choses égales par ailleurs » — hypothèse rarement vérifiée (la concurrence réagit, les goûts évoluent). Elle est estimée sur un historique parfois court et peut varier selon l’ampleur de la variation de prix. C’est un indicateur d’aide à la décision, pas une loi mécanique : il éclaire l’arbitrage prix / volume sans s’y substituer."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard critique transversal**"
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit du référentiel rénové, toute méthode doit être interrogée : quels sont ses apports, ses limites et les risques d’une mauvaise interprétation ?"
        },
        {
          "type": "h3",
          "text": "▸ Apports des méthodes d’analyse du risque"
        },
        {
          "type": "ul",
          "items": [
            "Elles transforment une prévision unique en une distribution, faisant apparaître un risque jusque-là invisible.",
            "Le couple espérance / écart-type fournit un langage commun pour comparer des projets et arbitrer rendement contre risque.",
            "La probabilité d’atteindre un objectif et les indicateurs d’exploitation sont directement intégrables aux budgets et tableaux de bord.",
            "L’élasticité éclaire la politique de prix et la compréhension du positionnement concurrentiel."
          ]
        },
        {
          "type": "h3",
          "text": "▸ Limites des modèles"
        },
        {
          "type": "ul",
          "items": [
            "**Hypothèse de normalité :**la loi normale suppose une distribution symétrique. Or de nombreuses grandeurs économiques sont asymétriques ou présentent des événements extrêmes (« queues épaisses ») que la loi normale sous-estime.",
            "**Qualité des données :**l’estimation de m, σ ou de l’élasticité repose sur des historiques. Un historique court ou biaisé fausse toute la suite.",
            "**Stabilité supposée :**le modèle suppose que le passé prédit l’avenir. Une rupture (crise, innovation, réglementation) invalide les paramètres.",
            "**Toutes choses égales par ailleurs :**l’élasticité isole l’effet du prix, alors que la concurrence et les goûts évoluent simultanément."
          ]
        },
        {
          "type": "h3",
          "text": "▸ Risques d’interprétation"
        },
        {
          "type": "ul",
          "items": [
            "Confondre probabilité et certitude : 89,44 % de chances d’atteindre le seuil ne garantit pas le succès ; le risque résiduel de 10,56 % reste réel.",
            "Se focaliser sur l’espérance en négligeant la dispersion — ou l’inverse.",
            "Donner au chiffre une précision fictive : afficher 89,44 % laisse croire à une exactitude que la qualité des données ne justifie pas toujours."
          ]
        },
        {
          "type": "h3",
          "text": "▸ L’importance du jugement managérial"
        },
        {
          "type": "p",
          "text": "Le modèle probabiliste et les indicateurs de risque éclairent la décision, ils ne la remplacent pas. Le contrôleur de gestion confronte le résultat chiffré à sa connaissance du terrain, aux signaux faibles et au contexte stratégique. La valeur ajoutée de l’analyse du risque tient autant à la rigueur du calcul qu’à la lucidité de son interprétation — et à la qualité de l’écrit qui la restitue au décideur."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative corrigée**"
        },
        {
          "type": "p",
          "text": "Cette application mobilise l’ensemble du chapitre : avenir certain, avenir aléatoire, indicateurs de risque et élasticité. Le corrigé détaillé suit immédiatement chaque question."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 7 — Lancement d’un soin haut de gamme (synthèse)",
          "text": "Boréal Cosmétiques lance un soin premium, vendu 130 € (coût variable unitaire 70 €). Les charges fixes spécifiques s’élèvent à 300 000 €. Le bureau d’études estime la demande annuelle à N(6 000 ; 1 000).\nTravail à faire :\n(1) Calculer le seuil de profitabilité et les indicateurs de risque d’exploitation au niveau d’activité moyen.\n(2) Déterminer la probabilité d’atteindre ce seuil.\n(3) Déterminer la probabilité que la demande soit comprise entre 5 000 et 7 000 unités.\n(4) Une hausse de prix de 130 € à 140 € ferait reculer la demande de 6 000 à 5 400 unités : calculer l’élasticité prix et conseiller.\n(5) Conclure sur l’opportunité du lancement."
        },
        {
          "type": "h4",
          "text": "Corrigé — Question 1 : seuil et indicateurs de risque"
        },
        {
          "type": "p",
          "text": "MCV unitaire = 130 − 70 = 60 €. Seuil en volume = 300 000 / 60 = **5 000 produits** (soit 650 000 € de CA)."
        },
        {
          "type": "p",
          "text": "Au niveau d’activité moyen (6 000 unités) : CA = 780 000 € ; MCV = 360 000 € ; résultat = 360 000 − 300 000 = **60 000 €**."
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
              "Marge de sécurité",
              "780 000 − 650 000",
              "130 000 €"
            ],
            [
              "Indice de sécurité",
              "130 000 / 780 000",
              "16,7 %"
            ],
            [
              "Levier opérationnel",
              "360 000 / 60 000",
              "6"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le levier de 6 (supérieur à celui du produit, qui est de 4) traduit une exploitation plus sensible : une baisse de 10 % du CA amputerait le résultat de 60 %."
        },
        {
          "type": "h4",
          "text": "Corrigé — Question 2 : probabilité d’atteindre le seuil"
        },
        {
          "type": "p",
          "text": "On cherche P(Q ≥ 5 000). t = (5 000 − 6 000) / 1 000 = −1. Par symétrie, P(Q ≥ 5 000) = π(1) = **0,8413 = 84,13 %**"
        },
        {
          "type": "h4",
          "text": "Corrigé — Question 3 : probabilité d’un encadrement"
        },
        {
          "type": "p",
          "text": "On cherche P(5 000 ≤ Q ≤ 7 000)."
        },
        {
          "type": "p",
          "text": ";"
        },
        {
          "type": "p",
          "text": "P(−1 ≤ T ≤ 1) = π(1) − π(−1) = 2π(1) − 1 = 2(0,8413) − 1 = **0,6826 = 68,26 %**"
        },
        {
          "type": "p",
          "text": "On retrouve la règle empirique des 68 % de l’intervalle [m − σ ; m + σ] : un bon contrôle de cohérence."
        },
        {
          "type": "h4",
          "text": "Corrigé — Question 4 : élasticité prix et conseil"
        },
        {
          "type": "p",
          "text": ";"
        },
        {
          "type": "p",
          "text": "e = −10 % / +7,69 % = **−1,30** → demande élastique (|e| > 1)."
        },
        {
          "type": "p",
          "text": "Effet sur le CA : 130 € × 6 000 = 780 000 € contre 140 € × 5 400 = 756 000 €, soit **− 24 000 €**. La demande étant élastique, la hausse de prix réduit le chiffre d’affaires : le contrôleur de gestion la déconseille si l’objectif est le CA. Toutefois, la MCV totale passe de 360 000 € à 5 400 × (140 − 70) = 378 000 € (+18 000 €) : si l’objectif est le résultat, la hausse devient au contraire favorable. L’arbitrage dépend de l’objectif poursuivi."
        },
        {
          "type": "h4",
          "text": "Corrigé — Question 5 : conclusion"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE — Conclusion",
          "text": "Le projet de lancement a 84 % de chances d’atteindre son seuil — une sécurité légèrement inférieure à celle du produit de base (89,44 %), du fait d’un levier plus élevé (6) et d’une demande relativement plus dispersée. La probabilité de déficit (15,87 %) reste maîtrisable. L’analyse de l’élasticité montre qu’une hausse de prix dégraderait le CA mais améliorerait le résultat : la décision dépend de l’objectif. Recommandation : lancer le produit en sécurisant un volume de précommandes proche du seuil (5 000 unités) ; une réduction de 10 % des charges fixes (à 270 000 €) abaisserait le seuil à 4 500 unités et porterait la probabilité de succès à 93 %. Dans une logique de performance globale, l’impact environnemental de la nouvelle gamme devra compléter l’analyse financière."
        },
        {
          "type": "h3",
          "text": "Fiche de révision"
        },
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
              "Espérance E(X)",
              "",
              "Rendement moyen attendu",
              "Ne dit rien du risque"
            ],
            [
              "Variance / écart-type",
              "",
              "Mesure du risque (dispersion)",
              "Insuffisant si asymétrie"
            ],
            [
              "Coeff. de variation",
              "",
              "Risque relatif (comparaison)",
              "Peu parlant si E proche de 0"
            ],
            [
              "Loi normale",
              "",
              "Modélise CA, marges, volumes",
              "Symétrie supposée"
            ],
            [
              "Centrage-réduction",
              "",
              "Ramène à N(0 ; 1) tabulée",
              "Erreurs de signe fréquentes"
            ],
            [
              "Seuil probabilisé",
              "P(Q ≥ seuil) via table",
              "Risque de pilotage chiffré",
              "Dépend des données"
            ],
            [
              "IC d’une moyenne",
              "",
              "Fourchette d’estimation",
              "n ≥ 30 ; moyenne seulement"
            ],
            [
              "Indice de sécurité",
              "(CA − Seuil)/CA",
              "Risque d’exploitation",
              "Statique (avenir certain)"
            ],
            [
              "Levier opérationnel",
              "MCV / Résultat",
              "Sensibilité du résultat",
              "Amplifie aussi les pertes"
            ],
            [
              "Élasticité prix",
              "",
              "Effet prix sur demande / CA",
              "Toutes choses égales par ailleurs"
            ],
            [
              "Élasticité croisée",
              "",
              "Substituts / compléments",
              "Estimation instable"
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
          "text": "**À mémoriser**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — À éviter absolument",
          "text": "Oublier le carré dans V(aX) = a² V(X) ; additionner les écarts-types au lieu des variances.\nMal gérer le signe de t (oublier π(−t) = 1 − π(t)).\nParler de « seuil de rentabilité » : le terme exact est seuil de profitabilité.\nTraiter une loi binomiale ou de Poisson, ou un test d’hypothèse : hors programme DCG.\nConfondre substituts (e croisée > 0) et compléments (e croisée < 0).\nCalculer sans interpréter ni conseiller : l’écrit argumenté est attendu."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
