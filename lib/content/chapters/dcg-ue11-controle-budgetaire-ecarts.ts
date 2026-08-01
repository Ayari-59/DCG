import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-controle-budgetaire-ecarts.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const controleBudgetaireEcarts: Chapter = {
  ...generated,
  videos: [
    { youtubeId: "xiQIMir9skE", title: "Écarts sur coûts directs" },
    { youtubeId: "G3LQpHeObFM", title: "Écarts sur coûts indirects" },
    { youtubeId: "CjaEzzsBOgA", title: "Ventes — effet mix" },
  ],
  description:
    "Le contrôle budgétaire confronte réalisations et prévisions selon la convention Réel − Prévu : écarts sur chiffre d'affaires, sur marge et sur coûts (volume, prix, quantité, temps), budget flexible et écarts sur charges indirectes (rendement, activité, budget), puis interprétation des causes, des responsabilités et des limites (Beyond Budgeting).",
  flashcards: [
    {
      id: "fc1",
      front: "Définition du contrôle budgétaire",
      back: "Utilisation des prévisions budgétaires pour (1) inciter les acteurs à atteindre des objectifs convergents avec ceux de la direction et (2) vérifier que ces objectifs sont atteints, par le calcul et l'analyse des écarts. Double dimension : incitation + vérification.",
    },
    {
      id: "fc2",
      front: "Définition d'un écart et convention de calcul",
      back: "Un écart est la différence entre une valeur réelle (constatée) et une valeur prévue (de référence) : Écart = Réel − Prévu. Il mesure une dérive par rapport à un objectif. La référence peut être un coût préétabli, standard, prévisionnel ou budgété — les calculs ne changent pas.",
    },
    {
      id: "fc3",
      front: "Écart favorable ou défavorable : la règle du sens",
      back: "Le signe n'a aucune signification en soi ; tout dépend de l'effet sur le résultat. Pour un COÛT : écart positif (Réel > Prévu) = DÉFAVORABLE. Pour un PRODUIT (CA, marge) : écart positif = FAVORABLE. À l'examen, toujours faire suivre l'écart de son sens (F) ou (D) — la moitié des points en dépend.",
    },
    {
      id: "fc4",
      front: "Le principe de gestion par exception",
      back: "Seuls les écarts d'amplitude anormale par rapport à une norme font l'objet d'une analyse approfondie ; les écarts dans le seuil de tolérance sont négligés. On raisonne en valeur RELATIVE (% du prévu) : 1 M€ sur 100 M€ de CA = 1 % (faible), 1 M€ sur 5 M€ de coût = 20 % (dérapage majeur).",
    },
    {
      id: "fc5",
      front: "La convention de décomposition d'un écart sur produit (P × V)",
      back: "Écart sur VOLUME, valorisé au PRIX PRÉVU : (Vr − Vp) × Pp. Écart sur PRIX, rapporté aux QUANTITÉS RÉELLES : (Pr − Pp) × Vr. La somme des sous-écarts doit toujours être égale à l'écart total (règle de cohérence universelle).",
    },
    {
      id: "fc6",
      front: "Formules de décomposition de l'écart sur chiffre d'affaires",
      back: "Écart sur CA = CA réel − CA prévu. Δ/Volume = (Vr − Vp) × Pp (au prix prévu) ; Δ/Prix = (Pr − Pp) × Vr (au volume réel). Exemple du cours : prévu 90 × 10 €, réel 100 × 11 € → Δ/Volume = +100 (F), Δ/Prix = +100 (F), écart CA = +200 € (F).",
    },
    {
      id: "fc7",
      front: "L'écart sur marge sur coût préétabli : pourquoi figer le coût au standard ?",
      back: "Marge unitaire préétablie = Pp − Cp ; marge unitaire « réelle » = Pr − Cp (le coût de production reste au standard dans les deux termes). But : isoler la performance COMMERCIALE (prix, quantités vendues) de la performance INDUSTRIELLE, analysée séparément dans les écarts sur coûts. Décomposition : écart sur marge unitaire = (mur − mup) × Qr ; écart sur quantité = (Qr − Qp) × mup.",
    },
    {
      id: "fc8",
      front: "En multiproduction : écart de volume global et écart de composition (mix)",
      back: "L'écart sur quantité Σ(Qrᵢ − Qpᵢ) × mᵢ se scinde en : ① Écart de volume global = (ΣQr − ΣQp) × m̄ₚ (effet du volume total, à mix prévu) ; ② Écart de composition (mix) = (m̄ᵣ − m̄ₚ) × ΣQr (déformation de la répartition entre produits, aux marges préétablies). Conditions : au moins deux produits substituables.",
    },
    {
      id: "fc9",
      front: "Écart total sur un coût : la décomposition PCG en deux niveaux",
      back: "Écart total = coût réel de la production réelle − coût préétabli de la production PRÉVUE. Il se scinde en : Écart sur VOLUME = (Vr − Vp) × Qp × Pp (non imputable au responsable de production) + Écart relatif à la production constatée (« écart global ») = coût réel − coût préétabli de la production RÉELLE (l'écart réellement pilotable).",
    },
    {
      id: "fc10",
      front: "Décomposition de l'écart global sur un coût direct (matières)",
      back: "Écart sur QUANTITÉ = (Qr − Qs) × Cs, valorisé au coût prévu (Qs = quantité préétablie allouée à la production réelle) : mesure la sur- ou sous-consommation. Écart sur PRIX (coût) = (Cr − Cs) × Qr, rapporté aux quantités réelles : mesure la dérive du prix d'achat. Somme = écart global.",
    },
    {
      id: "fc11",
      front: "Les écarts sur main-d'œuvre directe : vocabulaire spécifique",
      back: "Même logique que les matières, avec un vocabulaire propre : l'écart sur quantité devient l'écart sur TEMPS (rendement) = (Hr − Hs) × taux prévu ; l'écart sur prix devient l'écart sur TAUX horaire = (taux réel − taux prévu) × Hr.",
    },
    {
      id: "fc12",
      front: "Définition et équation du budget flexible",
      back: "Budget établi pour plusieurs niveaux d'activité, distinguant charges variables et charges fixes, construit par rapport à l'activité normale : Y = a·X + CF, où a = coût variable de l'UO et X = niveau d'activité. Exemple du cours : 60 000 € pour 1 000 UO dont 20 000 € fixes → Y = 40·X + 20 000.",
    },
    {
      id: "fc13",
      front: "Les quatre sous-écarts sur charges indirectes d'un centre (budget flexible)",
      back: "① Écart / volume = (Vr − Vp) × UO par unité × coût prévu de l'UO ; ② Écart / rendement = (activité réelle − activité préétablie de la production réelle) × coût prévu de l'UO ; ③ Écart / activité (imputation des CF) = budget flexible(Ar) − Ar × coût prévu de l'UO ; ④ Écart / budget = coût réel − budget flexible(Ar). L'écart d'activité négatif traduit une suractivité : meilleure absorption des charges fixes (favorable).",
    },
    {
      id: "fc14",
      front: "L'écart sur marge commerciale",
      back: "Écart entre la marge réelle évaluée au coût standard et la marge prévue : Vr × (Pr − Cup) − Vp × (Pp − Cup). En neutralisant l'effet des coûts, il isole la seule performance commerciale. Il évite les effets pervers d'un objectif de CA (remises, vente à perte) et d'une marge réelle (coûts non maîtrisés par le vendeur).",
    },
    {
      id: "fc15",
      front: "Les comportements opportunistes induits par le budget",
      back: "Slack budgétaire : sous-estimer ses objectifs pour les atteindre facilement. Effet cliquet : ne pas trop sur-performer pour éviter le relèvement des objectifs. Consommation de fin d'exercice : dépenser le budget non utilisé pour ne pas le voir réduit. Jeux sur la décomposition : faire porter les écarts défavorables sur un autre centre.",
    },
    {
      id: "fc16",
      front: "Le Beyond Budgeting",
      back: "Modèle de gestion qui remet en cause le budget annuel traditionnel et lui substitue des objectifs RELATIFS (par rapport au marché ou aux concurrents), des prévisions GLISSANTES (rolling forecasts) et une DÉCENTRALISATION accrue des décisions. Réponse aux limites du contrôle budgétaire : lourdeur, court-termisme, indicateurs exclusivement financiers, hypothèse de stabilité.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Selon la convention de décomposition du cours, comment valorise-t-on l'effet volume et l'effet prix d'un écart sur chiffre d'affaires ?",
      choices: [
        "Écart sur prix au volume prévu, écart sur volume au prix réel",
        "Écart sur prix et écart sur volume tous deux valorisés au réel",
        "Écart sur volume au prix prévu, écart sur prix aux quantités réelles",
        "Peu importe, puisque la somme des sous-écarts retombe toujours sur l'écart total",
      ],
      answers: [2],
      explanation:
        "Convention à retenir absolument : Δ/Volume = (Vr − Vp) × Pp (au prix PRÉVU) et Δ/Prix = (Pr − Pp) × Vr (aux quantités RÉELLES). La décomposition inverse retrouve aussi l'écart total, mais c'est une erreur de méthode : seule la convention du cours est admise.",
    },
    {
      id: "q2",
      question:
        "Ventes prévues : 200 unités à 50 €. Ventes réelles : 220 unités à 48 €. Quel est l'écart sur prix ?",
      choices: [
        "− 440 € (défavorable)",
        "+ 1 000 € (favorable)",
        "− 400 € (défavorable)",
        "+ 560 € (favorable)",
      ],
      answers: [0],
      explanation:
        "Écart sur prix = (Pr − Pp) × Vr = (48 − 50) × 220 = − 440 € (D) : la baisse du prix ampute le CA. − 400 € serait l'erreur de méthode (valorisation au volume prévu 200). L'écart sur volume vaut (220 − 200) × 50 = + 1 000 € (F), et l'écart total sur CA = 10 560 − 10 000 = + 560 € (F) = + 1 000 − 440. La cohérence est vérifiée.",
    },
    {
      id: "q3",
      question: "Un écart sur coût de matières premières de − 529 € est :",
      choices: [
        "Défavorable, car il est négatif",
        "Favorable, car le coût réel est inférieur au coût prévu",
        "Ni favorable ni défavorable : seul le montant compte",
        "Défavorable, car tout écart sur coût dégrade le résultat",
      ],
      answers: [1],
      explanation:
        "Pour un coût, écart = Réel − Prévu : un écart NÉGATIF signifie que le coût a baissé, ce qui est FAVORABLE au résultat. Le signe arithmétique n'a pas de sens en soi : positif = défavorable pour un coût, favorable pour un produit (CA, marge). Écrire « − 529 » sans préciser (F) est l'erreur fréquente signalée par le cours.",
    },
    {
      id: "q4",
      question:
        "Fiche standard : 2 kg de matière par unité à 13 €/kg. Production réelle : 1 900 unités ; consommation réelle : 3 990 kg à 12,90 €/kg. Quel est l'écart sur quantité de matière ?",
      choices: [
        "− 399 € (favorable)",
        "+ 2 071 € (défavorable)",
        "+ 2 470 € (favorable)",
        "+ 2 470 € (défavorable)",
      ],
      answers: [3],
      explanation:
        "Quantité allouée à la production réelle : Qs = 2 × 1 900 = 3 800 kg. Écart sur quantité = (Qr − Qs) × Cs = (3 990 − 3 800) × 13 = + 2 470 € : positif sur un coût, donc DÉFAVORABLE (surconsommation, 2,1 kg réels contre 2 kg standard). − 399 € est l'écart sur prix (12,90 − 13) × 3 990 (F), et + 2 071 € l'écart global (− 399 + 2 470).",
    },
    {
      id: "q5",
      question:
        "Temps standard : 2 h de MOD par unité à 20 €/h. Production réelle : 500 unités ; heures réelles : 1 100 h à 21 €/h. Quel est l'écart sur taux horaire ?",
      choices: [
        "+ 2 000 € (défavorable)",
        "+ 1 100 € (défavorable)",
        "+ 1 000 € (défavorable)",
        "+ 1 100 € (favorable)",
      ],
      answers: [1],
      explanation:
        "Écart sur taux = (taux réel − taux prévu) × heures RÉELLES = (21 − 20) × 1 100 = + 1 100 € (D) : le taux horaire a dérapé. + 1 000 € serait l'erreur de valorisation aux heures allouées (2 × 500 = 1 000 h). L'écart sur temps vaut (1 100 − 1 000) × 20 = + 2 000 € (D), et l'écart global = + 3 100 € (D) = 23 100 − 20 000.",
    },
    {
      id: "q6",
      question: "L'écart sur volume d'un coût de production est en principe imputable :",
      choices: [
        "Au responsable de l'atelier, qui maîtrise sa production",
        "À la direction des achats, qui négocie les prix",
        "À la direction commerciale, qui détermine le programme des ventes",
        "Au contrôleur de gestion, qui a établi les standards",
      ],
      answers: [2],
      explanation:
        "L'écart sur volume = (Vr − Vp) × Qp × Pp traduit la seule variation du niveau de production, que l'atelier SUBIT : le programme est décidé par le commercial. L'imputer au directeur de production serait une erreur de management qui sanctionnerait injustement un responsable — c'est le « piège de l'écart sur volume » du cours.",
    },
    {
      id: "q7",
      question:
        "Centre usinage : budget de 60 000 € pour une activité normale de 1 000 UO, dont 20 000 € de charges fixes (coût prévu de l'UO : 60 €). Activité réelle : 1 200 UO ; coût réel : 72 600 €. Quel est l'écart sur activité ?",
      choices: [
        "− 4 000 € (favorable)",
        "+ 4 600 € (défavorable)",
        "− 4 000 € (défavorable)",
        "+ 600 € (défavorable)",
      ],
      answers: [0],
      explanation:
        "Coût variable de l'UO : a = (60 000 − 20 000) / 1 000 = 40 € → budget flexible : Y = 40·X + 20 000. Pour Ar = 1 200 UO : Y = 68 000 €. Écart sur activité = budget flexible − (Ar × 60) = 68 000 − 72 000 = − 4 000 € (F) : la suractivité améliore l'absorption des charges fixes. L'écart sur budget = 72 600 − 68 000 = + 4 600 € (D) ; leur somme redonne l'écart sur coût de + 600 € (D).",
    },
    {
      id: "q8",
      question:
        "Ventes prévues : 80 unités à 12 € (coût de production préétabli : 7 €). Ventes réelles : 100 unités à 10 €. Quel est l'écart sur marge commerciale ?",
      choices: [
        "+ 100 € (favorable)",
        "− 200 € (défavorable)",
        "0 € (aucun écart)",
        "− 100 € (défavorable)",
      ],
      answers: [3],
      explanation:
        "Marge prévue = 80 × (12 − 7) = 400 €. Marge réelle SUR COÛT PRÉÉTABLI = 100 × (10 − 7) = 300 €. Écart = 300 − 400 = − 100 € (D). Décomposition : effet volume = (100 − 80) × 5 = + 100 € (F) ; effet prix = (10 − 12) × 100 = − 200 € (D). La baisse de prix détruit deux fois plus de marge que la hausse de volume n'en crée : le CA progresse mais l'action commerciale détruit de la marge.",
    },
    {
      id: "q9",
      question:
        "Dans l'écart sur marge, pourquoi la marge est-elle calculée sur coût de production PRÉÉTABLI et non sur coût réel ?",
      choices: [
        "Parce que le coût réel n'est jamais connu au moment du calcul",
        "Pour isoler la performance commerciale des variations de coûts de production, analysées séparément",
        "Parce que le PCG interdit d'utiliser le coût réel dans une marge",
        "Pour majorer systématiquement la marge des commerciaux",
      ],
      answers: [1],
      explanation:
        "Le coût est figé au standard dans la marge prévue ET dans la marge réelle (Pr − Cp). Ainsi, l'écart ne reflète que ce que le commercial maîtrise : prix et quantités vendues. Les dérives de coûts réels relèvent des écarts sur coûts, imputés aux centres de production ou d'achats. C'est une exigence de contrôlabilité : on n'évalue un responsable que sur ce qu'il maîtrise.",
    },
    {
      id: "q10",
      question: "Le « slack » budgétaire consiste à :",
      choices: [
        "Sous-estimer volontairement ses objectifs pour les atteindre plus facilement",
        "Dépenser le budget non utilisé en fin d'exercice pour ne pas le voir réduit",
        "Éviter de trop sur-performer pour ne pas voir ses objectifs relevés l'année suivante",
        "Faire porter les écarts défavorables sur un autre centre de responsabilité",
      ],
      answers: [0],
      explanation:
        "Le slack budgétaire est la constitution d'une « marge de sécurité » par sous-estimation des objectifs lors de la négociation budgétaire. Les autres propositions sont d'autres comportements opportunistes du cours : la consommation de fin d'exercice, l'effet cliquet et les jeux sur la décomposition des écarts.",
    },
  ],
};
