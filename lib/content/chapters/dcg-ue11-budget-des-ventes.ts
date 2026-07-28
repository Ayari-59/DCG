import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-budget-des-ventes.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const budgetDesVentes: Chapter = {
  ...generated,
  videos: [{ youtubeId: "slHszzS0BPo", title: "Le budget des ventes" }],
  description:
    "Le budget des ventes, point de départ de toute la construction budgétaire : corrélation et élasticités, ajustements linéaire (moindres carrés), exponentiel et puissance, saisonnalité par les rapports à la tendance, lissage exponentiel et méthodes qualitatives, jusqu'à la valorisation du budget et son pilotage.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que le budget des ventes et pourquoi est-il construit en premier ?",
      back: "C'est la valorisation, en quantités et en chiffre d'affaires, des ventes prévisionnelles sur la période budgétaire, ventilée par produits, marchés et périodes. Il est le premier budget construit car il conditionne tous les autres : production, approvisionnements, jusqu'au budget de trésorerie.",
    },
    {
      id: "fc2",
      front: "Programme des ventes vs budget des ventes : la différence ?",
      back: "Le programme des ventes exprime les quantités à vendre ; le budget des ventes les valorise en chiffre d'affaires (quantités × prix). Le passage de l'un à l'autre suppose une hypothèse de prix.",
    },
    {
      id: "fc3",
      front: "Comment interpréter le coefficient de corrélation linéaire r ?",
      back: "r est compris entre −1 et +1. Proche de +1 : liaison croissante forte ; proche de −1 : liaison décroissante ; proche de 0 : pas de liaison linéaire. On retient souvent │r│ ≈ 0,9 comme seuil de significativité. Attention : corrélation n'implique pas causalité.",
    },
    {
      id: "fc4",
      front: "Élasticité-prix de la demande : formule et interprétation",
      back: "e = (ΔQ/Q) ÷ (ΔP/P). Elle est en général négative (la demande baisse quand le prix monte). Si |e| > 1, la demande est élastique (très sensible au prix) ; si |e| < 1, elle est inélastique. Si la demande est élastique, une hausse de prix fait baisser le chiffre d'affaires.",
    },
    {
      id: "fc5",
      front: "Élasticité croisée : que signale son signe ?",
      back: "Elle mesure la sensibilité de la demande d'un bien A à la variation du prix d'un bien B. Positive : A et B sont substituts (le client reporte sa demande). Négative : ils sont complémentaires (ils se vendent ensemble).",
    },
    {
      id: "fc6",
      front: "Comment choisir l'ajustement selon l'allure de la série ?",
      back: "On trace le nuage de points puis on teste : écarts successifs yᵢ₊₁ − yᵢ ≈ constants → ajustement linéaire ; ratios yᵢ₊₁ / yᵢ ≈ constants → ajustement exponentiel ; croissance qui s'accélère ou ralentit → puissance ; ralentissement vers un palier → logarithme (complément).",
    },
    {
      id: "fc7",
      front: "Les coefficients de la droite des moindres carrés y = ax + b",
      back: "a = cov(X,Y) ÷ V(X) et b = ȳ − a·x̄. a est la pente (variation moyenne par période), b l'ordonnée à l'origine (valeur théorique pour x = 0). Ils s'obtiennent aussi par les fonctions statistiques de la calculatrice.",
    },
    {
      id: "fc8",
      front: "L'ajustement exponentiel : forme et linéarisation",
      back: "y = b · aˣ, adapté quand le taux de croissance est ≈ constant (lancement réussi). On linéarise par les logarithmes : ln y = (ln a)·x + ln b, soit une régression linéaire sur les couples (xᵢ, ln yᵢ). Limite : le modèle diverge très vite, valable seulement sur l'horizon du décollage.",
    },
    {
      id: "fc9",
      front: "L'ajustement puissance : forme et linéarisation",
      back: "y = b · xᵃ, pour les croissances non linéaires : a < 1 traduit une croissance qui ralentit, a > 1 une croissance qui s'accélère. Linéarisation : ln y = a·(ln x) + ln b, régression sur les couples (ln xᵢ, ln yᵢ).",
    },
    {
      id: "fc10",
      front: "Les trois composantes d'une série chronologique",
      back: "La tendance (trend, mouvement de fond), les variations saisonnières (fluctuations régulières aux mêmes périodes, modélisables) et les aléas (mouvements imprévisibles, non prévisibles).",
    },
    {
      id: "fc11",
      front: "La méthode des rapports à la tendance (coefficients saisonniers)",
      back: "1. Déterminer la tendance par les moindres carrés sur l'ensemble des périodes. 2. Calculer les rapports observation ÷ tendance pour chaque période. 3. Moyenner par saison pour obtenir un coefficient par trimestre, puis ajuster pour que la somme des coefficients égale le nombre de périodes (Σ c = p).",
    },
    {
      id: "fc12",
      front: "Désaisonnalisation (CVS) et prévision : quelles formules ?",
      back: "Deux usages symétriques : valeur CVS = observation ÷ coefficient (pour étudier l'évolution réelle hors effet saison) ; valeur prévue = tendance × coefficient (pour estimer les ventes futures, saison comprise). On divise pour désaisonnaliser, on multiplie pour prévoir.",
    },
    {
      id: "fc13",
      front: "Le lissage exponentiel simple : formule et rôle de α",
      back: "Sₜ = α · Yₜ + (1 − α) · Sₜ₋₁, où Yₜ est l'observation et α (entre 0 et 1) le coefficient de lissage : proche de 1, la prévision réagit vite aux variations récentes ; proche de 0, elle les lisse fortement. Méthode de court terme : elle ne capte ni la tendance ni la saisonnalité.",
    },
    {
      id: "fc14",
      front: "Les méthodes qualitatives de prévision des ventes",
      back: "Force de vente (agrégation des estimations des commerciaux, court terme), études de marché (lancement, nouveau produit), méthode Delphi (consultation itérative d'experts jusqu'au consensus, long terme), méthode des scénarios (plusieurs hypothèses contrastées, environnement incertain). Indispensables sans historique ou en cas de rupture.",
    },
    {
      id: "fc15",
      front: "Moyennes mobiles et prix psychologique : que dit le programme du DCG ?",
      back: "Les moyennes mobiles ne sont pas à traiter (elles lissent la série mais ne permettent pas d'extrapoler) : la méthode au programme est la tendance par les moindres carrés puis les rapports à la tendance. Le prix psychologique n'est pas à calculer, seulement à interpréter (fourchette de prix acceptable).",
    },
    {
      id: "fc16",
      front: "Point aberrant et piège du R² : quelles précautions avant d'ajuster ?",
      back: "Retirer les points aberrants (valeurs inexplicables : accident, événement exceptionnel) avant l'ajustement, en justifiant l'exclusion. Ne jamais se fier au seul R² : un R² élevé ne garantit pas de bonnes prévisions, surtout aux bornes — toujours tracer la série.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Pourquoi le budget des ventes est-il le premier budget construit dans la démarche budgétaire ?",
      choices: [
        "Parce qu'il est le plus simple à établir",
        "Parce que la réglementation comptable l'impose",
        "Parce qu'il conditionne tous les autres budgets : production, approvisionnements, jusqu'à la trésorerie",
        "Parce que la force de vente doit être payée en premier",
      ],
      answer: 2,
      explanation:
        "La prévision des ventes est le point de départ de la démarche budgétaire : la production s'aligne sur les quantités à vendre, les approvisionnements sur la production, et la trésorerie sur les encaissements attendus. Une erreur de prévision commerciale se propage à toute la construction budgétaire.",
    },
    {
      id: "q2",
      question:
        "Une série de ventes (milliers d'unités) donne : x = 1 à 5, y = 40 ; 42 ; 45 ; 43 ; 48, avec x̄ = 3, ȳ = 43,6, cov(X,Y) = 3,4 et V(X) = 2. Quelle est la prévision pour x = 6 ?",
      choices: ["43,6 milliers d'unités", "48,7 milliers d'unités", "50,4 milliers d'unités", "45,3 milliers d'unités"],
      answer: 1,
      explanation:
        "a = cov(X,Y) ÷ V(X) = 3,4 ÷ 2 = 1,7 ; b = ȳ − a·x̄ = 43,6 − 1,7 × 3 = 38,5. Droite : y = 1,7x + 38,5. Prévision N+1 (x = 6) : 1,7 × 6 + 38,5 = 48,7 milliers d'unités. Attention au piège classique : la prévision correspond à x = 6, pas à x = 1.",
    },
    {
      id: "q3",
      question:
        "Le prix d'un produit passe de 90 € à 99 € et les ventes passeraient de 214 à 180 milliers d'unités. Quelle est l'élasticité-prix et que peut-on en conclure ?",
      choices: [
        "e = −0,63 : la demande est inélastique",
        "e = +1,59 : les produits sont substituables",
        "e = −1,59 : la demande est inélastique, la hausse de prix est conseillée",
        "e = −1,59 : la demande est élastique, la hausse de prix ferait baisser le chiffre d'affaires",
      ],
      answer: 3,
      explanation:
        "ΔP/P = +9/90 = +10,0 % ; ΔQ/Q = −34/214 = −15,9 %. e = −15,9 % ÷ +10,0 % = −1,59. |e| = 1,59 > 1 : la demande est élastique. Vérification : CA₀ = 90 × 214 = 19 260 k€ contre CA₁ = 99 × 180 = 17 820 k€, soit −7,5 %. La hausse de prix serait contre-productive en volume comme en valeur.",
    },
    {
      id: "q4",
      question: "Une élasticité croisée positive entre deux biens A et B signifie que :",
      choices: [
        "A et B sont des biens substituts",
        "A et B sont des biens complémentaires",
        "La demande de A est insensible au prix de B",
        "La demande de A est élastique à son propre prix",
      ],
      answer: 0,
      explanation:
        "L'élasticité croisée mesure la sensibilité de la demande de A à la variation du prix de B. Positive : A et B sont substituts (si le prix de B baisse, la demande de A recule car le client se reporte sur B). Négative : ils sont complémentaires (ils se vendent ensemble).",
    },
    {
      id: "q5",
      question:
        "Sur une série de ventes, les ratios successifs yᵢ₊₁ / yᵢ sont quasi constants (≈ 1,50) alors que les écarts yᵢ₊₁ − yᵢ augmentent. Quel ajustement retenir ?",
      choices: [
        "Un ajustement linéaire, le plus fréquent au DCG",
        "Un ajustement logarithmique, car la série tend vers un palier",
        "Des moyennes mobiles centrées",
        "Un ajustement exponentiel, car la progression est géométrique",
      ],
      answer: 3,
      explanation:
        "Ratios constants → progression géométrique (taux de croissance ≈ constant) → ajustement exponentiel y = b·aˣ, linéarisé par ln y = (ln a)·x + ln b. Écarts constants auraient indiqué un ajustement linéaire. Les moyennes mobiles sont hors programme et ne permettent pas d'extrapoler.",
    },
    {
      id: "q6",
      question:
        "La tendance trimestrielle des ventes est Tᵢ = 1,280 xᵢ + 45,02 et le coefficient saisonnier du T3 vaut 1,223. Quelle est la prévision du T3 de N+1 (x = 15), en milliers d'unités ?",
      choices: ["52,5", "64,2", "78,5", "88,1"],
      answer: 2,
      explanation:
        "Tendance prolongée : T(15) = 1,280 × 15 + 45,02 = 64,21. Prévision saisonnalisée = tendance × coefficient = 64,21 × 1,223 ≈ 78,5 milliers d'unités. 64,2 est la tendance seule (oubli du coefficient) ; la prévision se calcule bien sur la tendance prolongée, pas sur la dernière observation.",
    },
    {
      id: "q7",
      question:
        "Au T3 de l'année N, les ventes brutes s'élèvent à 72 milliers d'unités et le coefficient saisonnier du T3 vaut 1,223. Quelle est la valeur corrigée des variations saisonnières (CVS) ?",
      choices: ["88,1 milliers d'unités", "58,9 milliers d'unités", "72,0 milliers d'unités", "60,2 milliers d'unités"],
      answer: 1,
      explanation:
        "On divise pour désaisonnaliser : valeur CVS = 72 ÷ 1,223 = 58,9 milliers d'unités. Multiplier (88,1) est l'erreur classique : on multiplie la tendance par le coefficient pour prévoir, on divise l'observation par le coefficient pour désaisonnaliser. La série CVS révèle le mouvement de fond, hors effet saison.",
    },
    {
      id: "q8",
      question:
        "Lissage exponentiel simple avec α = 0,3 : la valeur lissée initiale est S₁ = 38 et l'observation suivante Y₂ = 55. Que vaut S₂ ?",
      choices: ["43,1", "46,5", "49,9", "55,0"],
      answer: 0,
      explanation:
        "Sₜ = α·Yₜ + (1 − α)·Sₜ₋₁, soit S₂ = 0,3 × 55 + 0,7 × 38 = 16,5 + 26,6 = 43,1. Avec α = 0,3, proche de 0, la prévision lisse fortement les variations récentes ; un α proche de 1 la rendrait plus réactive mais plus nerveuse.",
    },
    {
      id: "q9",
      question: "Quelle propriété de contrôle doivent vérifier les coefficients saisonniers trimestriels ?",
      choices: [
        "Leur produit doit être égal à 1",
        "Chacun doit être supérieur à 1",
        "Leur moyenne doit être égale au R² de la tendance",
        "Leur somme doit être égale au nombre de périodes (4 pour des trimestres)",
      ],
      answer: 3,
      explanation:
        "La somme des coefficients saisonniers doit égaler le nombre de périodes p : par exemple 0,823 + 1,146 + 1,223 + 0,808 = 4,00 pour 4 trimestres. Sinon, on normalise en multipliant chaque coefficient par p ÷ Σ. Un coefficient > 1 signale une saison forte, < 1 une saison creuse.",
    },
    {
      id: "q10",
      question: "Quelle méthode de prévision des ventes est explicitement HORS programme du DCG ?",
      choices: [
        "La méthode des rapports à la tendance",
        "Les moyennes mobiles centrées",
        "Le lissage exponentiel simple",
        "L'ajustement linéaire par les moindres carrés",
      ],
      answer: 1,
      explanation:
        "Le référentiel précise que les moyennes mobiles ne sont pas à traiter : elles lissent la série mais n'expriment pas de relation mathématique et ne permettent pas d'extrapoler. La méthode au programme pour la saisonnalité est la tendance par les moindres carrés puis les rapports à la tendance. Le lissage exponentiel et l'élasticité sont, eux, bien au programme.",
    },
  ],
};
