// Généré par scripts/convert-docx.mjs depuis CHAPITRE_10__LE_BUDGET_DES_VENTES.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-budget-des-ventes",
  "level": "DCG",
  "ue": "UE11",
  "number": 10,
  "title": "Le budget des ventes",
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
          "text": "**Axe 3 — Les budgets, outil de pilotage de la performance. Compétence 3.2 « Mettre en œuvre les techniques prévisionnelles pour la gestion budgétaire » (volet commercial). Le budget des ventes est le point de départ de toute la construction budgétaire. Ce chapitre met en œuvre l’ensemble des outils de prévision exigés au DCG : corrélation linéaire ; ajustement par les moindres carrés ; ajustements exponentiel et puissance ; variations saisonnières par les rapports à la tendance ; lissage exponentiel ; élasticité-prix et élasticité croisée, ainsi que leur interprétation et leur mise en perspective critique.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Exploiter les outils de prévision pour préparer le budget commercial.\n• Mesurer une liaison par le coefficient de corrélation et calculer une élasticité-prix et une élasticité croisée.\n• Choisir et mettre en œuvre un ajustement (linéaire, exponentiel, puissance) selon l’allure de la série.\n• Traiter les variations saisonnières par la méthode des rapports à la tendance et calculer des prévisions corrigées.\n• Mobiliser le lissage exponentiel et compléter les modèles par des approches qualitatives (force de vente, Delphi, scénarios).\n• Interpréter les résultats, apprécier les intérêts et les limites des techniques prévisionnelles, et construire le budget des ventes pour des activités saisonnières comme non saisonnières."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Combien l’entreprise va-t-elle vendre l’an prochain ? De cette question découle presque tout le reste : la production à programmer, les matières à acheter, les effectifs à mobiliser, la trésorerie à anticiper. **La prévision des ventes est le point de départ de la démarche budgétaire** : tous les budgets dépendent du niveau prévisionnel de l’activité commerciale."
        },
        {
          "type": "p",
          "text": "Prévoir n’est pas deviner. Les techniques étudiées dans ce chapitre s’appuient sur l’observation rigoureuse des ventes passées pour en extraire une loi mathématique — une fonction *y = f(x)* reliant les ventes au temps (ou à une variable économique) — qui permet d’extrapoler. Mais elles doivent être maniées avec discernement : une prévision n’est jamais qu’une hypothèse, à confronter au jugement des équipes et aux ruptures du marché."
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit de la réforme, chaque méthode est abordée selon quatre dimensions : **comprendre** à quelle situation elle répond, **calculer** la fonction d’ajustement, **interpréter** la qualité et la portée de la prévision, et **critiquer** ses limites. L’écrit d’analyse compte autant que le calcul."
        },
        {
          "type": "p",
          "text": "Le budget des ventes irrigue toute la construction budgétaire : il commande la production, qui commande les approvisionnements, jusqu’au budget de trésorerie. Maîtriser la prévision commerciale, c’est donc tenir le premier maillon de toute la chaîne."
        },
        {
          "type": "p",
          "text": "*Figure 1 — Le budget des ventes, pivot de la construction budgétaire*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le cadre du programme",
          "text": "Le référentiel cible des outils précis : **corrélation linéaire, moindres carrés, ajustements exponentiel et puissance, rapports à la tendance, lissage exponentiel, élasticité-prix et croisée**. En revanche, les *moyennes mobiles* ne sont pas à traiter et le *prix psychologique* s’interprète sans se calculer. Ces bornes sont signalées au fil du chapitre par des encadrés dédiés."
        },
        {
          "type": "p",
          "text": "**PARTIE 1 Comprendre les fondements de la prévision des ventes**"
        },
        {
          "type": "p",
          "text": "**1**"
        }
      ]
    },
    {
      "id": "partie-1-le-budget-des-ventes-et-l-analyse-de-la-demande",
      "title": "Partie 1 — Le budget des ventes et l'analyse de la demande",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Le rôle et la nature du budget des ventes"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le budget des ventes",
          "text": "Le **budget des ventes** est la valorisation, en quantités et en chiffre d’affaires, des ventes prévisionnelles de l’entreprise sur la période budgétaire, ventilée selon les axes pertinents (produits, marchés, périodes). Il est **le premier budget construit** car il conditionne tous les autres : la production s’aligne sur les quantités à vendre, les approvisionnements sur la production, et la trésorerie sur les encaissements attendus."
        },
        {
          "type": "p",
          "text": "Le budget des ventes a une **double nature**. Il est **prévisionnel** — fondé sur l’analyse objective des données passées et de l’environnement — mais aussi **volontariste** : il affiche des objectifs mobilisateurs pour la force de vente. Nous ne sommes pas dans un univers totalement déterministe comme la météorologie : « quand on veut, on peut » dans une certaine mesure, par la politique commerciale, la motivation des vendeurs et l’action sur le client."
        },
        {
          "type": "h4",
          "text": "*Point examen*"
        },
        {
          "type": "p",
          "text": "Une question classique demande de distinguer le programme des ventes (en quantités) du budget des ventes (en valeur). Le passage de l’un à l’autre suppose une hypothèse de prix. Sachez aussi justifier pourquoi le budget des ventes est construit en premier."
        },
        {
          "type": "h3",
          "text": "1.2 Les objectifs des prévisions commerciales"
        },
        {
          "type": "p",
          "text": "Prévoir les ventes répond à plusieurs objectifs complémentaires : **dimensionner** l’outil de production et la logistique ; **anticiper** les besoins de financement (la saisonnalité crée des tensions de trésorerie) ; **fixer des objectifs** aux équipes commerciales et les évaluer ; et **éclairer les décisions** de lancement, de prix ou de retrait de produits. Chez l’entreprise, la prévision conditionne aussi l’approvisionnement en matériaux recyclés, dont les délais sont longs."
        },
        {
          "type": "h3",
          "text": "1.3 Les sources d’information commerciale"
        },
        {
          "type": "p",
          "text": "La qualité d’une prévision dépend d’abord de celle de ses données. On mobilise des sources **internes** (historique des ventes, statistiques commerciales, données du CRM, remontées de la force de vente) et **externes** (études de marché, panels de distributeurs et de consommateurs, données sectorielles, indicateurs macro-économiques). L’adhésion à un panel permet à l’entreprise de se situer face à ses concurrents et d’anticiper l’évolution du marché."
        },
        {
          "type": "h3",
          "text": "1.4 Les facteurs influençant les ventes"
        },
        {
          "type": "p",
          "text": "Les ventes résultent de l’interaction de nombreux facteurs, qu’il faut distinguer pour interpréter une série et juger de la pertinence d’une extrapolation."
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Facteurs**",
            "**Effet sur la prévision**"
          ],
          "rows": [
            [
              "**Internes**",
              "Prix, qualité, gamme, distribution, publicité, force de vente",
              "Leviers actionnables (marketing-mix) ; rendent le budget partiellement volontariste"
            ],
            [
              "**Externes**",
              "Concurrence, réglementation, conjoncture, pouvoir d’achat",
              "Subis ; à intégrer comme hypothèses d’environnement"
            ],
            [
              "**Comportement client**",
              "Élasticité au prix, fidélité, « zapping » entre marques",
              "Rend la demande sensible et parfois instable"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le prix psychologique (à interpréter, non à calculer)",
          "text": "Le programme précise que le prix psychologique — prix d’acceptabilité qui maximise le nombre d’acheteurs potentiels — n’est pas à calculer, mais à interpréter. On retiendra qu’il existe une fourchette de prix acceptable : trop bas, le produit inquiète sur sa qualité ; trop haut, il devient inabordable. Pour le produit éco-responsable, un prix trop bas nuirait même à l’image de qualité durable revendiquée."
        },
        {
          "type": "h3",
          "text": "1.5 Mesurer une liaison : le coefficient de corrélation"
        },
        {
          "type": "p",
          "text": "Avant d’ajuster une série, il est souvent utile de mesurer la force de la liaison entre deux variables — par exemple entre les ventes et le temps, ou entre les ventes et une variable économique explicative (PIB, ventes d’un produit complémentaire). Le coefficient de corrélation linéaire r quantifie cette liaison."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COEFFICIENT DE CORRÉLATION LINÉAIRE",
          "text": "r est compris entre −1 et +1. Proche de +1, la liaison croissante est forte ; proche de −1, la liaison est décroissante ; proche de 0, il n’y a pas de liaison linéaire. On retient souvent une corrélation comme significative au-delà de │r│ ≈ 0,9."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Corrélation ventes / temps pour le produit",
          "text": "Sur la série annuelle du produit (40 ; 42 ; 45 ; 43 ; 48), avec x̄ = 3 et ȳ = 43,6 :\ncov(X,Y) = 3,4 ; ;\nTrès proche de 1 : la liaison linéaire est quasi parfaite, ce qui justifie l’ajustement linéaire retenu en partie 2."
        },
        {
          "type": "p",
          "text": "Attention : une corrélation forte n’implique pas un lien de causalité. Deux séries peuvent évoluer parallèlement sans que l’une explique l’autre (corrélation fortuite). Le jugement économique reste indispensable pour valider qu’une variable explicative a un sens."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Choisir la bonne variable explicative",
          "text": "Lorsque les ventes d’un produit dépendent davantage d’une grandeur économique que du simple écoulement du temps, on ajuste sur cette grandeur. Un fabricant de pneus « première monte » corrèle ses ventes à celles de voitures neuves ; un producteur d’électricité, à la croissance du PIB. En cas de dépendance à plusieurs variables (Y = f(X₁ ; X₂)), on entre dans le champ de l’économétrie, hors programme au DCG."
        },
        {
          "type": "h3",
          "text": "1.6 L’élasticité-prix et l’élasticité croisée"
        },
        {
          "type": "p",
          "text": "Parmi les facteurs internes, le prix est souvent le plus déterminant. L’élasticité mesure la sensibilité de la demande à une variation de prix : c’est un outil de prévision à part entière, au programme du DCG."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Élasticité-prix de la demande",
          "text": "L’**élasticité-prix** (e) mesure la variation relative de la quantité demandée pour une variation relative du prix :\nElle est en général négative (la demande baisse quand le prix monte). Si |e| > 1, la demande est dite élastique (très sensible au prix) ; si |e| < 1, elle est inélastique (peu sensible)."
        },
        {
          "type": "p",
          "text": "Comprendre —"
        },
        {
          "type": "p",
          "text": "Le signe et l’ampleur de e renseignent sur le pouvoir de marché et sur l’effet d’une politique de prix. Le calcul est direct ; l’enjeu est d’en tirer la bonne décision commerciale."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calculer — élasticité-prix du produit",
          "text": "La direction de l’entreprise envisage de porter le prix du produit de 90 € à 99 €. Une étude estime que les ventes passeraient de 214 à 180 milliers d’unités.\n= +10,0 %\n= −15,9 %\n**e = −15,9 % ÷ +10,0 % = −1,59**\n**|e| = 1,59 > 1 : la demande du produit est élastique.**"
        },
        {
          "type": "p",
          "text": "*Figure 2 — Élasticité-prix de la demande du produit*"
        },
        {
          "type": "p",
          "text": "Interpréter —"
        },
        {
          "type": "p",
          "text": "Comme la demande est élastique, la hausse de prix fait baisser le chiffre d’affaires : CA₀ = 90 × 214 = 19 260 k€ contre CA₁ = 99 × 180 = 17 820 k€, soit −7,5 %. Augmenter le prix serait ici contre-productif en volume comme en valeur. À l’inverse, si la demande était inélastique (|e| < 1), la hausse de prix augmenterait le CA."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Élasticité croisée",
          "text": "L’**élasticité croisée** mesure la sensibilité de la demande d’un bien A à la variation du prix d’un bien B :\nSi elle est positive, A et B sont substituts (le client reporte sa demande). Si elle est négative, ils sont complémentaires (ils se vendent ensemble)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calculer — élasticités croisées du produit",
          "text": "**Substitut.**Un concurrent baisse le prix de sa produit de 10 %, et la demande du produit recule de 8 % : e = −8 % ÷ −10 % = +0,80 (> 0). Les deux produits sont substituables.\n**Complément. Le prix des accessoires compatibles avec le produit augmente de 10 %, et la demande pour le produit recule de 3 % : e = −3 % ÷ +10 % = −0,30 (< 0). le produit et l’accessoire sont complémentaires.**"
        },
        {
          "type": "p",
          "text": "Critiquer —"
        },
        {
          "type": "p",
          "text": "L’élasticité est calculée « toutes choses égales par ailleurs » ; en pratique, prix, publicité et conjoncture varient ensemble. Elle n’est stable que sur de faibles variations et autour du point observé. C’est un éclairage précieux, pas une loi rigide."
        },
        {
          "type": "h3",
          "text": "1.7 La place du budget des ventes dans la procédure budgétaire"
        },
        {
          "type": "p",
          "text": "Le budget des ventes ouvre un enchaînement logique. Une fois les **quantités à vendre** arrêtées, le service production en déduit le **programme de production** (en tenant compte des stocks et des capacités), qui détermine à son tour les **approvisionnements** en matières et composants. Les charges de personnel, les investissements et, en bout de chaîne, le **budget de trésorerie** en découlent. Une erreur de prévision commerciale se propage donc à toute la construction budgétaire : sous-évaluer les ventes expose à la rupture et à la perte de marché ; les surévaluer conduit à la surproduction, au surstockage et à l’immobilisation de trésorerie."
        },
        {
          "type": "p",
          "text": "C’est pourquoi le budget des ventes fait l’objet d’une **navette** entre la direction commerciale et le contrôle de gestion : confronté aux capacités industrielles et aux objectifs de rentabilité, il est révisé jusqu’à obtenir un plan à la fois ambitieux et réaliste. Pour l’entreprise, dont les matières recyclées ont des délais d’approvisionnement longs, la qualité de cette prévision conditionne directement la capacité à honorer les pics saisonniers."
        },
        {
          "type": "p",
          "text": "**PARTIE 2 Calculer : les méthodes de prévision des ventes**"
        },
        {
          "type": "p",
          "text": "C’est le cœur technique du chapitre. On distingue les méthodes quantitatives (fondées sur l’historique et l’extrapolation mathématique) et les méthodes qualitatives (fondées sur l’expertise et le jugement), complémentaires plus que concurrentes. Chaque ajustement est présenté selon les quatre dimensions comprendre / calculer / interpréter / critiquer."
        },
        {
          "type": "p",
          "text": "**2**"
        }
      ]
    },
    {
      "id": "partie-2-les-techniques-de-prevision-des-ventes",
      "title": "Partie 2 — Les techniques de prévision des ventes",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Choisir l’ajustement selon l’allure de la série"
        },
        {
          "type": "p",
          "text": "Les méthodes quantitatives expriment les ventes (*y*, variable à expliquer) en fonction du temps (*x*, variable explicative). La fonction d’ajustement dépend de la forme du nuage de points. Avant tout calcul, il est essentiel de **tracer la série** et d’observer l’écart entre deux valeurs successives."
        },
        {
          "type": "p",
          "text": "*Figure 3 — Quatre allures de croissance et l’ajustement correspondant*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Le réflexe : tracer puis tester avant de choisir",
          "text": "Avant de retenir un modèle, on trace le nuage de points, puis on examine deux indices numériques simples : la suite des écarts yᵢ₊₁ − yᵢ (constants → linéaire) et la suite des ratios yᵢ₊₁ / yᵢ (constants → exponentiel). Ce double test évite de plaquer une droite sur une série manifestement courbe, erreur fréquente à l’examen."
        },
        {
          "type": "table",
          "headers": [
            "**Allure de la série**",
            "**Indice**",
            "**Ajustement adapté**"
          ],
          "rows": [
            [
              "Écarts successifs ≈ constants (progression arithmétique)",
              "yᵢ₊₁ − yᵢ ≈ constante",
              "**Linéaire**"
            ],
            [
              "Taux de croissance ≈ constant (progression géométrique)",
              "yᵢ₊₁ / yᵢ ≈ constante",
              "**Exponentiel**"
            ],
            [
              "Croissance qui s’accélère ou ralentit",
              "taux variable",
              "**Puissance (a>1 ou a<1)**"
            ],
            [
              "Croissance qui ralentit vers un palier apparent",
              "taux décroissant",
              "**Logarithme (complément)**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.2 L’ajustement linéaire par les moindres carrés"
        },
        {
          "type": "p",
          "text": "Comprendre. Lorsque les ventes évoluent régulièrement (écarts ≈ constants), on modélise la tendance par une droite . C’est l’ajustement le plus fréquent au DCG et il doit être parfaitement maîtrisé."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LES COEFFICIENTS DE LA DROITE DES MOINDRES CARRÉS",
          "text": "où cov(X,Y) est la covariance, V(X) la variance de X, et x̄, ȳ les moyennes. En pratique, a et b s’obtiennent aussi directement par les fonctions statistiques de la calculatrice."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Prévision linéaire des ventes",
          "text": "On pose x = 1 pour l’année N–4. Les ventes (milliers d’unités) :\nx : 1 2 3 4 5\ny : 40 42 45 43 48\n**Travail à faire : ajuster une droite des moindres carrés et prévoir les ventes de N+1.**\n**Corrigé :**\nx̄ = 3 ; ȳ = 43,6 ; cov(X,Y) = 3,4 ; V(X) = 2\n; b = 43,6 − 1,7 × 3 = 38,5\n**Droite : y = 1,7 x + 38,5 (R² = 0,89)**\nPrévision N+1 (x = 6) : 1,7 × 6 + 38,5 = 48,7 milliers d’unités."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Interpréter — le sens de a et b",
          "text": "Le coefficient a est la **pente** : l’entreprise vend en moyenne **+1 700 produits par an**. Le coefficient b (38,5) est l’ordonnée à l’origine (valeur théorique pour x = 0). À 90 € l’unité, la prévision N+1 représente un chiffre d’affaires le produit d’environ 48,7 × 90 = 19,95 M€. Interpréter ces nombres — et pas seulement les calculer — fait partie de l’analyse attendue."
        },
        {
          "type": "p",
          "text": "*Figure 4 — Ajustement linéaire des ventes annuelles du produit*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Critiquer — le point aberrant",
          "text": "Une série peut comporter un point aberrant — une valeur inexplicable (accident, événement exceptionnel) — qui doit être retiré avant l’ajustement. Ainsi, pour une société créée en cours d’année, le premier exercice (CA de 100 contre une tendance vers 320–420) est exclu : l’ajustement sur les seuls points suivants donne y = 24,5 x + 297,5, d’où une prévision N+1 ≈ 444,5. La décision d’exclusion reste un jugement à expliciter."
        },
        {
          "type": "p",
          "text": "*Figure 5 — Le retrait d’un point aberrant avant ajustement*"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — l’ajustement linéaire",
          "text": "**Mauvaise origine des x :**oublier que la prévision N+1 correspond à x = 6 (et non x = 1) quand la série commence à x = 1. **Confusion a / b :**a est la pente (variation annuelle), b l’ordonnée à l’origine. **Arrondis prématurés :**arrondir a et b trop tôt fausse la prévision ; ne le faire qu’au résultat final. **Calculatrice mal paramétrée :**vérifier le mode statistique (régression linéaire) avant de lire a, b et r."
        },
        {
          "type": "h3",
          "text": "2.3 L’ajustement exponentiel"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Quand la croissance s’accélère — phase de lancement réussie — les ventes progressent géométriquement (taux de croissance ≈ constant). On ajuste alors par une fonction y = b · aˣ, linéarisée par les logarithmes : ln y = (ln a) x + ln b, soit une régression linéaire sur les couples (xᵢ, ln yᵢ)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Ajustement exponentiel",
          "text": "Les ventes (milliers d’unités) du nouveau modèle la version Trail sur six années :\nx : 1 2 3 4 5 6\ny : 12 16 21 28 37 49\n**Travail à faire : justifier l'allure exponentielle, linéariser et prévoir les ventes futures.**\n**Corrigé :**\nLes ratios yᵢ₊₁/yᵢ (≈ 1,33 ; 1,31 ; 1,33 ; 1,32 ; 1,32) sont quasi constants → allure exponentielle.\nOn linéarise en posant Y = ln y, puis on ajuste Y = (ln a)·x + ln b :\nx : 1 2 3 4 5 6\nln y: 2,485 2,773 3,045 3,332 3,611 3,892\nRégression : ln y = 0,2811 x + 2,2058 → ; .\n**Ajustement : y = 9,08 × 1,3245ˣ (≈ +32,5 % par an)**\nPrévision x = 7 : ≈ 65 milliers d’unités."
        },
        {
          "type": "p",
          "text": "*Figure 6 — Ajustement exponentiel : le lancement du produit Trail*"
        },
        {
          "type": "p",
          "text": "**Interpréter / critiquer.**L’exponentielle traduit bien un démarrage, mais elle **diverge très vite** : prolongée quelques années, elle prédirait des volumes irréalistes. Aucune croissance ne reste exponentielle indéfiniment ; le modèle n’est valable que sur l’horizon du décollage, avant le passage en phase de maturité."
        },
        {
          "type": "h3",
          "text": "2.4 L’ajustement puissance (et le complément logarithmique)"
        },
        {
          "type": "p",
          "text": "Comprendre. L’ajustement puissance () s’applique aux croissances non linéaires : un exposant a < 1 traduit une croissance qui ralentit, a > 1 une croissance qui s’accélère. On le linéarise par les logarithmes : ln y = a (ln x) + ln b, régression sur les couples (ln xᵢ, ln yᵢ)."
        },
        {
          "type": "p",
          "text": "Lorsqu’une croissance ralentit vers un palier apparent, l’ajustement logarithmique () peut être préférable. Il n’est pas au cœur du programme mais éclaire utilement le choix d’un modèle."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Ajustement puissance",
          "text": "Les ventes d’accessoires associés au produit (housses, grips), tirées par le parc installé, croissent de façon accélérée (milliers d’unités) :\nx : 1 2 3 4 5 6\ny : 20 48 82 120 162 207\n**Travail à faire : ajuster un modèle puissance par linéarisation et prévoir les ventes futures.**\n**Corrigé :**\nLinéarisation : on régresse ln y sur ln x → ln y = 1,306 · ln x + 2,982.\nAjustement : (exposant > 1 : croissance accélérée)\nPrévision x = 7 : ≈ 250 milliers d’unités."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ILLUSTRATION — Critiquer — puissance contre logarithme : le piège du R²",
          "text": "Sur une série tendant vers un palier (≈ 1 600), deux ajustements concurrents :\nPuissance : — R² = 98,95 % — prévision mois 19/20 : 1 854 / 1 926\nLogarithme : y = 557,88 ln x − 62,45 — R² = 95,26 % — prévision mois 19/20 : 1 580 / 1 609\nLe R² favorise la puissance, mais celle-ci prédit ≈ 1 900 alors que la série tend visiblement vers ≈ 1 600. **Le logarithme, malgré un R² plus faible, donne de meilleures prévisions** là où elles comptent. Leçon : ne jamais se fier au seul R², toujours tracer la série."
        },
        {
          "type": "p",
          "text": "*Figure 7 — Puissance contre logarithme : le R² ne suffit pas*"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les pièges des ajustements",
          "text": "**Séries trop courtes :**un ajustement sur peu de points n’est pas fiable. **R² roi :**un R² élevé ne garantit pas de bonnes prévisions, surtout aux bornes. **Extrapolation aveugle :**le modèle suppose que le passé se reproduit ; il ne « voit » pas les ruptures."
        },
        {
          "type": "h3",
          "text": "2.5 La prise en compte de la saisonnalité"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Une série chronologique combine trois composantes : la **tendance** (trend), les **variations saisonnières** (fluctuations régulières aux mêmes périodes) et les **aléas** (mouvements imprévisibles). Les aléas ne se prévoient pas ; les variations saisonnières, récurrentes, peuvent être modélisées."
        },
        {
          "type": "p",
          "text": "Chez l’entreprise, les ventes du produit culminent au printemps et en été (T2 et T3) et chutent en automne-hiver (T1 et T4). Superposer les courbes annuelles fait apparaître ce profil, stable d’une année à l’autre."
        },
        {
          "type": "p",
          "text": "*Figure 8 — Profil saisonnier des ventes du produit (superposition des années)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Hors programme — les moyennes mobiles",
          "text": "Une approche classique dégage la tendance par les moyennes mobiles centrées. Or le référentiel précise que les moyennes mobiles ne sont pas à traiter. On les mentionne donc pour mémoire (elles lissent la série mais n’expriment pas de relation mathématique et ne permettent pas d’extrapoler), et l’on retient la méthode au programme : tendance par les moindres carrés, puis saisonnalité par les rapports à la tendance."
        },
        {
          "type": "h3",
          "text": "2.6 Les coefficients saisonniers : la méthode des rapports à la tendance"
        },
        {
          "type": "p",
          "text": "**Calculer.**C’est la méthode explicitement au programme. Elle se déroule en trois étapes."
        },
        {
          "type": "p",
          "text": "*Figure 9 — La méthode des rapports à la tendance en trois étapes*"
        },
        {
          "type": "ul",
          "items": [
            "Déterminer la tendance par les moindres carrés sur l’ensemble des périodes.",
            "Calculer les rapports , pour chaque période.",
            "**Moyenner par saison**pour obtenir un coefficient saisonnier par trimestre, puis ajuster pour que leur somme égale le nombre de périodes."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 4 — Coefficients saisonniers",
          "text": "Ventes trimestrielles du produit (milliers d’unités) sur trois ans :\n**T1 T2 T3 T4**\nN–2 38 55 60 40\nN–1 42 60 66 45\nN 47 66 72 49\n**Travail à faire : déterminer la tendance et calculer les coefficients saisonniers trimestriels.**\n**Corrigé :**\nTendance sur les 12 trimestres : Tᵢ = 1,280 xᵢ + 45,02.\n**Coefficients saisonniers moyens : T1 = 0,823 ; T2 = 1,146 ; T3 = 1,223 ; T4 = 0,808.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PROPRIÉTÉ DE CONTRÔLE",
          "text": "La somme des coefficients saisonniers doit égaler le nombre de périodes p. Ici : 0,823 + 1,146 + 1,223 + 0,808 = 4,00. ✓"
        },
        {
          "type": "p",
          "text": "Interpréter —"
        },
        {
          "type": "p",
          "text": "Un coefficient supérieur à 1 signale une saison « forte » (T2 à +14,6 %, T3 à +22,3 %), un coefficient inférieur à 1 une saison « creuse » (T1 à −17,7 %, T4 à −19,2 %). Le profil confirme la forte saisonnalité sportive du produit."
        },
        {
          "type": "h3",
          "text": "2.7 Désaisonnalisation et prévisions corrigées"
        },
        {
          "type": "p",
          "text": "Les coefficients servent à deux usages symétriques."
        },
        {
          "type": "table",
          "headers": [
            "**Usage**",
            "**Formule**",
            "**Finalité**"
          ],
          "rows": [
            [
              "**Désaisonnalisation (CVS)**",
              "valeur CVS = observation ÷ c",
              "Étudier l’évolution réelle, hors effet saison"
            ],
            [
              "**Prévision**",
              "valeur prévue = tendance × c",
              "Estimer les ventes futures, saison comprise"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calculer — désaisonnaliser une observation (CVS)",
          "text": "Au T3 de l’année N, l’entreprise a vendu 72 milliers du produit. Cette valeur brute, dopée par la haute saison, surestime la tendance réelle. On la corrige des variations saisonnières :\n**valeur CVS = 72 ÷ 1,223 = 58,9 milliers d’unités**\nLa série CVS (corrigée des variations saisonnières) révèle le mouvement de fond, débarrassé de l’effet saison : c’est sur elle que l’on apprécie une véritable accélération ou un ralentissement des ventes — démarche utilisée par l’INSEE pour les statistiques de conjoncture."
        },
        {
          "type": "p",
          "text": "*Figure 10 — Désaisonnalisation : série brute et série corrigée (CVS) du produit*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calculer — prévisions trimestrielles N+1 du produit",
          "text": "Avec la tendance Tᵢ = 1,280 xᵢ + 45,02 et les coefficients ci-dessus, on prévoit N+1 (x = 13 à 16) :\nT1 (x=13) : 61,65 × 0,823 = 50,8\nT2 (x=14) : 62,93 × 1,146 = 72,1\nT3 (x=15) : 64,21 × 1,223 = 78,5\nT4 (x=16) : 65,49 × 0,808 = 52,9\n**Total N+1 ≈ 254,3 milliers d’unités, soit ≈ 22,9 M€ à 90 € l’unité.**"
        },
        {
          "type": "p",
          "text": "**Interpréter.**La prévision « saisonnalisée » restitue le relief des ventes : sommet au T3 (≈ 78,5), creux au T1 (≈ 50,8). le contrôleur de gestion peut ainsi dimensionner la production trimestre par trimestre et anticiper les tensions de trésorerie qui précèdent les pics."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Erreurs fréquentes — les coefficients saisonniers",
          "text": "**Oublier la normalisation :**la somme des coefficients doit égaler le nombre de périodes (4 trimestres, 12 mois) ; sinon, multiplier chaque coefficient par p ÷ Σ. **Confondre les deux usages :**on divise pour désaisonnaliser (CVS), on multiplie pour prévoir. **Mauvaise base de tendance :**la prévision se calcule sur la tendance prolongée (x = 13 à 16), pas sur la dernière observation."
        },
        {
          "type": "h3",
          "text": "2.8 Le lissage exponentiel"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Au programme également, le lissage exponentiel est une méthode de prévision à court terme qui actualise la prévision en pondérant la dernière observation et la dernière prévision."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "LISSAGE EXPONENTIEL SIMPLE",
          "text": "**Sₜ = α · Yₜ + (1 − α) · Sₜ₋₁**\noù Yₜ est l’observation, Sₜ la valeur lissée, et α (entre 0 et 1) le coefficient de lissage : proche de 1, la prévision réagit vite aux variations récentes ; proche de 0, elle les lisse fortement."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Calculer — lissage des ventes du produit (α = 0,3)",
          "text": "Sur les huit premiers trimestres (38, 55, 60, 40, 42, 60, 66, 45), avec S₁ = 38 :\nS₂ = 0,3×55 + 0,7×38 = 43,1 ; … ; S₈ = 51,5\n**Prévision du trimestre suivant ≈ 51,5 milliers d’unités (avant correction saisonnière).**"
        },
        {
          "type": "p",
          "text": "*Figure 11 — Le lissage exponentiel des ventes trimestrielles du produit (α = 0,3)*"
        },
        {
          "type": "p",
          "text": "**Interpréter / critiquer.**Le lissage est réactif et simple, mais il ne capte ni la tendance ni la saisonnalité ; il convient au très court terme. Le choix de α est délicat : trop fort, la prévision devient nerveuse ; trop faible, elle réagit trop lentement."
        },
        {
          "type": "h3",
          "text": "2.9 Les méthodes qualitatives"
        },
        {
          "type": "p",
          "text": "**Comprendre.**Les méthodes statistiques supposent un historique et la poursuite de la tendance. Elles sont donc inopérantes pour un produit nouveau ou lors d’un changement de tendance, et doivent être complétées par des approches qualitatives."
        },
        {
          "type": "h3",
          "text": "Le cycle de vie du produit"
        },
        {
          "type": "p",
          "text": "Un produit traverse quatre phases — lancement, développement, maturité, déclin — qui appellent chacune un ajustement différent. L’le produit est en maturité (linéaire), la version Trail en lancement (exponentiel) : le contrôleur combine statistique et analyse stratégique."
        },
        {
          "type": "p",
          "text": "*Figure 12 — Le cycle de vie du produit et l’ajustement adapté*"
        },
        {
          "type": "h3",
          "text": "Les enquêtes et la prospective"
        },
        {
          "type": "p",
          "text": "À court terme, on interroge la **force de vente** (les commerciaux « sentent » le marché) et les **clients** (études et enquêtes). À long terme, la **prospective** mobilise l’expertise :"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe**",
            "**Usage**"
          ],
          "rows": [
            [
              "**Force de vente**",
              "Agrégation des estimations des commerciaux",
              "Court terme, terrain"
            ],
            [
              "**Études de marché**",
              "Enquêtes auprès des clients potentiels",
              "Lancement, nouveau produit"
            ],
            [
              "**Méthode Delphi**",
              "Consultation itérative d’experts jusqu’au consensus",
              "Long terme, prospective"
            ],
            [
              "**Méthode des scénarios**",
              "Plusieurs hypothèses contrastées (et non un consensus)",
              "Environnement incertain"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Figure 13 — Arbre de décision : quelle méthode de prévision choisir ?*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — L’essentiel — articuler quantitatif et qualitatif",
          "text": "Aucune méthode n’est supérieure dans l’absolu : le bon réflexe est de combiner. Le quantitatif fournit une base objective lorsque l’historique est riche et la tendance stable ; le qualitatif prend le relais pour les produits nouveaux, les ruptures de marché et le long terme. Chez l’entreprise, le produit (mature) relève de l’ajustement linéaire, la version Trail (lancement) de l’exponentiel à horizon court, et un produit à venir d’une étude de marché — le contrôleur de gestion orchestrant l’ensemble."
        },
        {
          "type": "p",
          "text": "**PARTIE 3 Interpréter : la construction du budget des ventes**"
        },
        {
          "type": "p",
          "text": "**3**"
        }
      ]
    },
    {
      "id": "partie-3-la-construction-du-budget-des-ventes",
      "title": "Partie 3 — La construction du budget des ventes",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Du programme au budget : quantités puis chiffre d’affaires"
        },
        {
          "type": "p",
          "text": "La prévision débouche sur deux documents articulés. Le **programme des ventes** exprime les quantités à vendre ; le **budget des ventes** les valorise en chiffre d’affaires (quantités × prix). Pour le produit, le programme N+1 (48,7 milliers d’unités en cumul annuel linéaire, ou 254,3 en cumul saisonnalisé trimestriel) se valorise au prix de 90 €."
        },
        {
          "type": "h3",
          "text": "3.2 Un budget multidimensionnel : produit × marché × période"
        },
        {
          "type": "p",
          "text": "Un budget des ventes ne peut se réduire à une prévision annuelle globale. Il doit être ventilé selon plusieurs axes, car les produits n’évoluent pas de façon homothétique et la saisonnalité impose un découpage infra-annuel."
        },
        {
          "type": "table",
          "headers": [
            "**Axe**",
            "**Pourquoi le retenir**"
          ],
          "rows": [
            [
              "**Produit**",
              "le produit standard, la version Trail et la version premium : chacun a sa dynamique (cycle de vie, saisonnalité)."
            ],
            [
              "**Période**",
              "La saisonnalité impose un découpage mensuel ou trimestriel."
            ],
            [
              "**Marché / zone**",
              "Marchés géographiques (national / export) ou types de clientèle."
            ],
            [
              "**Réseau commercial**",
              "Chaque agence a son budget, pour le contrôle ultérieur des performances."
            ]
          ]
        },
        {
          "type": "p",
          "text": "Comme un tableau n’offre que deux dimensions, on présente par exemple, pour chaque agence, les produits en lignes et les mois en colonnes. Les budgets des agences sont ensuite **consolidés** pour obtenir le budget global. En aval, les totaux par produit alimentent le programme de production, et les totaux mensuels en euros le budget des encaissements."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**ILLUSTRATION — Illustration — extrait du budget des ventes le produit par trimestre (N+1)**\nÀ partir des prévisions trimestrielles saisonnalisées, le budget se valorise au prix de 90 € :\n**T1 T2 T3 T4 Année**\nQuantités 50,8 72,1 78,5 52,9 254,3 (k u.)\nCA (k€) 4 572 6 489 7 065 4 761 22 887\n*Le relief saisonnier apparaît nettement : le T3 pèse à lui seul 31 % du chiffre d’affaires annuel, contre 20 % pour le T1. Ce profil commande le calendrier de production et révèle les trimestres où la trésorerie sera la plus sollicitée en amont.*"
        },
        {
          "type": "h3",
          "text": "3.3 Le budget des frais commerciaux"
        },
        {
          "type": "p",
          "text": "Le budget des ventes s’accompagne d’un budget des frais commerciaux, dont la logique diffère selon les postes."
        },
        {
          "type": "table",
          "headers": [
            "**Type de frais**",
            "**Logique**",
            "**Traitement budgétaire**"
          ],
          "rows": [
            [
              "Frais variables (livraison, commissions)",
              "Proportionnels aux ventes",
              "Budget flexible : Frais = f(ventes)"
            ],
            [
              "Frais fixes de structure (locaux, ADV)",
              "Indépendants du volume à court terme",
              "Reconduits selon la structure"
            ],
            [
              "Publicité",
              "Les ventes dépendent de la publicité, pas l’inverse",
              "Décidée en amont (logique d’investissement)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La **publicité** inverse la logique habituelle : ce ne sont pas les ventes qui la déterminent, mais elle qui détermine les ventes. C’est en réalité un **investissement**, avec un effet de rémanence : supprimer brutalement la publicité ne fait chuter les ventes qu’avec retard, la notoriété persistant un temps."
        },
        {
          "type": "h3",
          "text": "3.4 Scénarios et prévisions pour activités saisonnières et non saisonnières"
        },
        {
          "type": "p",
          "text": "La démarche de prévision s’adapte à la nature de l’activité. Pour une activité **non saisonnière** (ventes régulières, comme le produit en cumul annuel), la tendance suffit : la prévision est directement la valeur ajustée. Pour une activité **saisonnière** (ventes trimestrielles du produit), on saisonnalise la tendance par les coefficients. Dans les deux cas, on n’affiche pas une prévision unique mais une **fourchette** : un scénario central, un scénario bas et un scénario haut, reposant sur des hypothèses explicites (croissance du marché, part de marché, prix, effort publicitaire)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**ILLUSTRATION — Application — confronter la prévision à la capacité (la version Trail)**\nL’ajustement exponentiel prévoit 65 milliers d’la version Trail en N+1. Or l’atelier dédié ne peut en produire que 55 milliers à capacité actuelle. Deux lectures s’imposent au contrôleur :\n**– Plafonner**la prévision à 55 (le budget des ventes ne peut excéder ce que l’on sait produire et livrer), au risque de laisser filer 10 milliers d’unités de demande vers la concurrence ;\n**– Investir**pour porter la capacité à 65, si la marge sur coût variable (90 − 38 = 52 €/u) sur ces 10 milliers supplémentaires — soit 520 k€ — couvre le coût de l’extension.\n*La prévision n’est donc pas une fin en soi : elle nourrit un arbitrage économique. Le budget des ventes dialogue avec le budget de production et les décisions d’investissement.*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Les choix du contrôleur de gestion pour le budget N+1",
          "text": "le contrôleur de gestion retient pour le produit l’ajustement linéaire (non saisonnier en cumul, ≈ 48,7 k u.) ; pour le suivi trimestriel, la version saisonnalisée (≈ 254,3 k u.). Pour la version Trail en lancement, un ajustement exponentiel (≈ 65 k u.) ; pour un futur modèle sans historique, une étude de marché complétée d’un test régional. Elle renonce à la hausse de prix du produit, l’élasticité (−1,59) montrant qu’elle détruirait du chiffre d’affaires. Trois scénarios encadrent le budget global, pour anticiper les tensions de trésorerie liées à la saisonnalité."
        },
        {
          "type": "p",
          "text": "**PARTIE 4 Critiquer et piloter : performance, durabilité, numérique**"
        },
        {
          "type": "p",
          "text": "**4**"
        }
      ]
    },
    {
      "id": "partie-4-le-pilotage-et-l-analyse-critique",
      "title": "Partie 4 — Le pilotage et l'analyse critique",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Les indicateurs de performance commerciale"
        },
        {
          "type": "p",
          "text": "Le budget des ventes n’a de valeur que s’il est suivi. Quelques indicateurs structurent le pilotage commercial : le **taux de réalisation**, l’**écart sur chiffre d’affaires** (décomposable en effet prix et effet volume, étudié au chapitre du contrôle budgétaire), le **taux de transformation**, la **part de marché** et le **panier moyen**."
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Calcul**",
            "**Ce qu’il pilote**"
          ],
          "rows": [
            [
              "**Taux de réalisation**",
              "Ventes réelles / ventes budgétées",
              "Tenue du budget commercial"
            ],
            [
              "**Taux de transformation**",
              "Ventes / contacts (ou devis)",
              "Efficacité de la force de vente"
            ],
            [
              "**Panier moyen**",
              "CA / nombre de transactions",
              "Montée en gamme, ventes croisées"
            ],
            [
              "**Part de marché**",
              "Ventes / ventes du marché",
              "Position concurrentielle"
            ],
            [
              "**Taux de fidélisation**",
              "Clients conservés / clients initiaux",
              "Qualité de la relation client"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Ces indicateurs, financiers (CA, marge) ou extra-financiers (satisfaction, fidélité), se déclinent par produit, marché et canal, et nourrissent le tableau de bord commercial. Le suivi périodique des écarts permet de réagir : renforcer un canal, ajuster un prix, relancer une gamme."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Illustration — lecture d’un écart chez l’entreprise",
          "text": "Au terme du T3, l’entreprise a vendu 75 000 le produit pour un budget de 78 500. Le taux de réalisation s’établit à %. L’écart défavorable (−3 500 unités) peut provenir d’un effet volume (marché moins porteur) ou d’un effet prix (remises consenties). Seule la décomposition de l’écart sur chiffre d’affaires — étudiée au chapitre du contrôle budgétaire — permet de trancher et d’orienter l’action corrective."
        },
        {
          "type": "h3",
          "text": "4.2 Performance globale et durabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE ET DURABILITÉ",
          "text": "La prévision des ventes ne se limite plus au volume et au chiffre d’affaires. Pour une PME éco-responsable comme l’entreprise, le budget commercial intègre une **dimension extra-financière** : prévoir la part des ventes de produits éco-conçus, anticiper la demande sensible aux critères ESG, et mesurer la satisfaction et la fidélité client comme actifs durables.\nLa saisonnalité a aussi un coût environnemental : les pics de production tendus consomment plus d’énergie et génèrent des transports en urgence. Une prévision fine, en lissant la charge, sert à la fois la **performance économique** (moins de surcoûts) et la **performance environnementale**. La prévision des ventes devient ainsi un levier de création de valeur partagée entre l’entreprise, ses clients et ses parties prenantes."
        },
        {
          "type": "h3",
          "text": "4.3 Les limites des prévisions et les biais"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "Toute prévision fondée sur le passé suppose que les structures observées se reproduiront : elle n’est fiable qu’**à court terme** et reste « aveugle » aux ruptures (innovation, crise, changement réglementaire). S’y ajoutent des biais : le R² peut être trompeur ; le temps n’est qu’un facteur explicatif réducteur ; et les prévisions volontaristes peuvent verser dans l’excès d’optimisme ou, à l’inverse, dans le « slack » prudent. La prévision est une aide à la décision, pas un oracle."
        },
        {
          "type": "h3",
          "text": "4.4 Le pilotage à l’ère numérique"
        },
        {
          "type": "p",
          "text": "Face à la volatilité, les entreprises délaissent la prévision annuelle figée au profit d’approches plus réactives : **prévisions glissantes** (rolling forecasts) réactualisées chaque mois ou trimestre, pilotage par scénarios, et raccourcissement de l’horizon."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION ET NUMÉRIQUE — La prévision des ventes augmentée",
          "text": "**Tableur —**les fonctions statistiques (DROITEREG, TENDANCE, coefficient de corrélation) réalisent instantanément les ajustements ; la valeur cible et les tables de données permettent les analyses de sensibilité (au programme).\n**ERP & CRM —**les progiciels intégrés et la gestion de la relation client alimentent les modèles en données de ventes fiables, multidimensionnelles et actualisées.\n**Business Intelligence —**les ventes et les écarts deviennent des tableaux de bord interactifs, déclinables par produit, marché ou agence.\n**Data analytics & IA —**le machine learning intègre des dizaines de variables (météo, prix concurrents, signaux web) et capte des non-linéarités que les régressions classiques ignorent, à condition de disposer de données massives et de qualité.\n*Le numérique ne supprime pas le jugement : il déplace la valeur ajoutée du contrôleur vers l’interprétation et le conseil.*"
        },
        {
          "type": "h3",
          "text": "4.5 Regard critique d’ensemble"
        },
        {
          "type": "table",
          "headers": [
            "**Apports des méthodes de prévision**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Objectivent la prévision sur des données",
              "Le passé ne préjuge pas du futur (ruptures)"
            ],
            [
              "Quantifient et permettent le suivi des écarts",
              "R² trompeur ; sur-confiance dans les modèles"
            ],
            [
              "Saisonnalité et tendance séparées",
              "Inopérantes sans historique (nouveaux produits)"
            ],
            [
              "Combinables avec le qualitatif et l’IA",
              "Biais comportementaux (optimisme, slack)"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ Application récapitulative**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 5 — Le budget des ventes (récapitulative)",
          "text": "Le produit (prix 90 €) présente les ventes trimestrielles suivantes (milliers d’unités) sur trois ans :\n**T1 T2 T3 T4**\nN–2 38 55 60 40\nN–1 42 60 66 45\nN 47 66 72 49\nOn donne la tendance (moindres carrés sur les 12 trimestres, x = 1 à 12) : **Tᵢ = 1,280 xᵢ + 45,02**, et les coefficients saisonniers : T1 = 0,823 ; T2 = 1,146 ; T3 = 1,223 ; T4 = 0,808.\n**Travail à faire :**(1) Vérifier la propriété de contrôle des coefficients. (2) Calculer les prévisions trimestrielles N+1 (x = 13 à 16) et le total annuel. (3) Valoriser le budget des ventes N+1 au prix de 90 €. (4) La direction propose de monter le prix à 99 € ; sachant que l’élasticité-prix vaut −1,59, conclure sur l’opportunité de cette hausse."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Corrigé — budget des ventes",
          "text": "**Question 1 — Contrôle des coefficients**\n0,823 + 1,146 + 1,223 + 0,808 = **4,00** = nombre de périodes (4 trimestres). ✓ La propriété est vérifiée.\n**Question 2 — Prévisions N+1**\nT1 (x=13) : 1,280×13+45,02 = 61,65 × 0,823 = 50,8\nT2 (x=14) : 1,280×14+45,02 = 62,93 × 1,146 = 72,1\nT3 (x=15) : 1,280×15+45,02 = 64,21 × 1,223 = 78,5\nT4 (x=16) : 1,280×16+45,02 = 65,49 × 0,808 = 52,9\nTotal annuel N+1 = 50,8 + 72,1 + 78,5 + 52,9 = **254,3 milliers d’unités**.\n**Question 3 — Budget des ventes N+1**\n254,3 milliers × 90 € = **22 887 k€, soit ≈ 22,9 M€**.\n**Question 4 — Opportunité de la hausse de prix**\n|e| = 1,59 > 1 : demande élastique. Une hausse de prix de +10 % entraîne une baisse des quantités de −15,9 %, donc une baisse du CA.\nVérification : nouveau CA indexé ≈ (1+0,10) × (1−0,159) = 1,10 × 0,841 = 0,925, soit −7,5 %. La hausse de prix détruirait environ 7,5 % du chiffre d’affaires : **elle est déconseillée**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 6 — Choix d'un ajustement (mini-application)",
          "text": "Boréal Cosmétiques (soins de la peau) suit les ventes annuelles d’un de ses soins (milliers d’unités) sur quatre ans : 30 ; 45 ; 67 ; 101. (1) Les écarts successifs (15 ; 22 ; 34) et les ratios (1,50 ; 1,49 ; 1,51) : quel ajustement choisir et pourquoi ? (2) Sachant que l’ajustement donne y = 20,0 × 1,50ˣ, prévoir l’année 5. (3) Cette prévision est-elle fiable à l’horizon de 10 ans ?\n**Travail à faire : identifier la nature de la progression, ajuster le modèle adapté et conclure.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Corrigé — mini-application",
          "text": "**(1)**Les ratios sont quasi constants (≈ 1,50) alors que les écarts augmentent : la croissance est géométrique → ajustement exponentiel.\n(2) Année 5 (x = 5) : = 20,0 × 7,594 ≈ 152 milliers d’unités.\n(3) Non : prolongée à 10 ans, l’exponentielle donnerait ≈ 1 153 milliers d’unités, volume irréaliste. Aucune croissance ne reste exponentielle indéfiniment : le modèle n’est valable que sur l’horizon du décollage, avant le passage en maturité."
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
              "**Corrélation**",
              "Force de la liaison linéaire (r ∈ [−1;1])",
              "Valide le choix d’un ajustement",
              "N’implique pas la causalité"
            ],
            [
              "**Élasticité-prix**",
              "",
              "Éclaire la politique de prix",
              "Stable seulement localement"
            ],
            [
              "**Ajust. linéaire**",
              "y = a x + b (moindres carrés)",
              "Simple, robuste, incontournable",
              "Suppose une progression régulière"
            ],
            [
              "**Ajust. exponentiel**",
              "y = b·aˣ (croissance géométrique)",
              "Adapté aux lancements",
              "Diverge vite en extrapolation"
            ],
            [
              "**Ajust. puissance**",
              "y = b·xᵃ (linéarisé par ln)",
              "Souple (accélère/ralentit)",
              "R² parfois trompeur"
            ],
            [
              "**Rapports tendance**",
              "Coefficients saisonniers (Σ = p)",
              "Traite la saisonnalité",
              "Suppose une saisonnalité stable"
            ],
            [
              "**Lissage expon.**",
              "Sₜ = αYₜ + (1−α)Sₜ₋₁",
              "Réactif, court terme",
              "Ni tendance ni saison ; choix de α"
            ],
            [
              "**Qualitatif**",
              "Force de vente, Delphi, scénarios",
              "Utile sans historique",
              "Subjectif"
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
          "title": "FORMULES À CONNAÎTRE",
          "text": "e = (ΔQ/Q)÷(ΔP/P) ;\nexponentiel : ln y = (ln a)·x + ln b ; puissance : ln y = a·ln x + ln b\nCVS = obs ÷ c ; prévision = tendance × c ; Σ c = p\nlissage : Sₜ = α·Yₜ + (1−α)·Sₜ₋₁"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "PIÈGES CLASSIQUES & CONSEILS",
          "text": "Ne pas traiter les moyennes mobiles (hors programme) ; utiliser les rapports à la tendance. Ne pas calculer le prix psychologique (à interpréter). Retirer les points aberrants avant l’ajustement. Bien repartir des bons x pour les prévisions. Vérifier Σ coefficients = nombre de périodes. Ne pas confondre élasticité élastique (|e|>1) et inélastique (|e|<1). Compléter chaque calcul par une interprétation et une ouverture (qualitatif, IA, durabilité)."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
