import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-cadre-metier-organisation.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const cadreMetierOrganisation: Chapter = {
  ...generated,
  videos: [{ youtubeId: "HfyQWYzDuag", title: "Contrôle de gestion" }],
  description:
    "Le socle conceptuel de l'UE11 : définition et positionnement du contrôle de gestion (Anthony, trois niveaux, boucle de pilotage), valeur et performance (les 3 E, performance globale, ESG), métier de contrôleur et système d'information, outils numériques (ERP, BI, Big Data, IA), centres de responsabilité et chaîne de valeur avec les indicateurs ROI, ROCE et EVA.",
  flashcards: [
    {
      id: "fc1",
      front: "Définition du contrôle de gestion (R. Anthony, 1965)",
      back: "« Le processus par lequel les managers obtiennent l'assurance que les ressources sont obtenues et utilisées de manière efficace et efficiente pour réaliser les objectifs de l'organisation. » Trois idées : un processus continu, des managers qui pilotent (le contrôleur les outille), une double exigence d'efficacité et d'efficience.",
    },
    {
      id: "fc2",
      front: "Que signifie « contrôle » dans « contrôle de gestion » ?",
      back: "Non pas « surveillance » mais « MAÎTRISE » (sens anglais de to control). Contrôler la gestion, c'est en garder la maîtrise. À distinguer du contrôle interne (maîtrise des risques et des procédures), de l'audit (vérification a posteriori) et du contrôle stratégique (long terme).",
    },
    {
      id: "fc3",
      front: "Les trois niveaux de contrôle selon Anthony",
      back: "Contrôle stratégique (direction générale, long terme) > contrôle de gestion (niveau intermédiaire, charnière : il traduit la stratégie en objectifs et fait remonter l'information du terrain) > contrôle opérationnel (court terme, terrain).",
    },
    {
      id: "fc4",
      front: "Qu'est-ce que la boucle de pilotage ?",
      back: "Boucle continue empruntée à la cybernétique : fixer des objectifs → décider et agir → mesurer les résultats → constater les écarts → corriger. Le cœur du dispositif est la RÉTROACTION (feed-back) : l'information sur le résultat est renvoyée au décideur pour ajuster l'action future.",
    },
    {
      id: "fc5",
      front: "Les trois « E » : économie, efficacité, efficience (et leurs formules)",
      back: "Économie : se procurer les ressources au moindre coût à qualité égale. Efficacité = Résultats / Objectifs (atteindre la cible). Efficience = Résultats / Ressources (faire bien avec peu). Produire beaucoup en gaspillant n'est pas être performant : on croise toujours les trois.",
    },
    {
      id: "fc6",
      front: "Distinguer utilité, valeur et performance",
      back: "Utilité : satisfaction qu'un bien ou service procure à son utilisateur. Valeur : rapport entre l'utilité perçue et le coût (ou prix) consenti. Performance : capacité à atteindre les objectifs (efficacité) en mobilisant au mieux les ressources (efficience) ; elle est multidimensionnelle.",
    },
    {
      id: "fc7",
      front: "Performance globale, Triple Bottom Line et critères ESG",
      back: "Performance globale : aptitude à créer de la valeur de manière durable en conciliant performance économique, sociale et environnementale, au bénéfice de toutes les parties prenantes. Triple Bottom Line (Elkington) : Profit / People / Planet. Mesurée par les critères ESG (Environnement, Social, Gouvernance).",
    },
    {
      id: "fc8",
      front: "Distinguer donnée, information et connaissance",
      back: "Donnée : fait brut, isolé, non interprété (« 12 000 »). Information : donnée mise en contexte, porteuse de sens (« CA = 12 000 €, +8 % »). Connaissance : information interprétée, mobilisable pour agir (« la hausse vient de la promotion : la reconduire »). L'intelligence décisionnelle mobilise la connaissance au bon moment.",
    },
    {
      id: "fc9",
      front: "Définition du système d'information (SI)",
      back: "Ensemble organisé de ressources — matériel, logiciels, données, procédures et acteurs — qui permet de collecter, stocker, traiter et diffuser l'information au service du pilotage et de la décision. Il ne se réduit pas à l'informatique : il englobe aussi les hommes et les règles de gestion.",
    },
    {
      id: "fc10",
      front: "Les missions du contrôleur de gestion et leur évolution",
      back: "Cinq verbes : analyser, prévoir, contrôler, conseiller, communiquer. Missions traditionnelles (calcul des coûts, budgets, contrôle budgétaire, reporting) → missions contemporaines (aide à la décision, accompagnement des managers, business partner, communication de la performance ESG).",
    },
    {
      id: "fc11",
      front: "Les 5 V du Big Data",
      back: "Volume (masses considérables de données), Variété (formats hétérogènes : chiffres, textes, images, capteurs), Vélocité (production et traitement en temps quasi réel), Véracité (fiabilité variable à contrôler), Valeur (l'enjeu final : extraire une utilité décisionnelle).",
    },
    {
      id: "fc12",
      front: "Les quatre niveaux de la data analytics",
      back: "Descriptive : que s'est-il passé ? Diagnostique : pourquoi ? Prédictive : que va-t-il se passer ? Prescriptive : que faut-il faire ? Complexité et valeur croissantes ; l'IA prolonge la démarche en détectant elle-même des modèles dans les données.",
    },
    {
      id: "fc13",
      front: "Décentralisation et principe de contrôlabilité",
      back: "Décentralisation : transfert du pouvoir de décision de la direction générale vers des responsables d'unités autonomes. Principe de contrôlabilité (principe cardinal) : on ne juge un responsable QUE sur ce qu'il peut maîtriser — lui imputer des éléments qu'il ne contrôle pas est injuste, démotivant et fausse l'évaluation.",
    },
    {
      id: "fc14",
      front: "Les quatre types de centres de responsabilité (par autonomie croissante)",
      back: "Centre de coûts : maîtrise des charges (coût unitaire, écarts). Centre de recettes : maîtrise des ventes (CA, volume, part de marché). Centre de profit : maîtrise des recettes ET des coûts (marge, résultat). Centre d'investissement : maîtrise en plus des capitaux investis (ROI, ROCE, EVA).",
    },
    {
      id: "fc15",
      front: "La chaîne de valeur de Porter (1985)",
      back: "Représentation des activités de l'organisation selon leur contribution à la création de valeur pour le client ; valeur créée − coût des activités = marge. Activités principales : logistique interne, production, logistique externe, marketing/ventes, service. Activités de soutien : infrastructure, RH, développement technologique, approvisionnements.",
    },
    {
      id: "fc16",
      front: "ROI, ROCE et EVA : formules et intérêt",
      back: "ROI = Résultat / Capitaux investis (décomposition DuPont : taux de marge × rotation de l'actif). ROCE = résultat d'exploitation après impôt / capitaux engagés. EVA = résultat d'exploitation après impôt − (capitaux investis × coût du capital) : positive, le centre crée de la valeur ; négative, il en détruit même avec un profit comptable.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Dans l'expression « contrôle de gestion », le mot « contrôle » signifie avant tout :",
      choices: [
        "Surveillance des salariés",
        "Vérification comptable a posteriori",
        "Maîtrise de la gestion (sens anglais de to control)",
        "Sanction des écarts budgétaires",
      ],
      answers: [2],
      explanation:
        "« Contrôler » signifie ici « maîtriser » : contrôler la gestion, c'est en garder la maîtrise. C'est ce qui distingue le contrôle de gestion de l'audit (vérification a posteriori) et du contrôle interne (maîtrise des risques et des procédures).",
    },
    {
      id: "q2",
      question:
        "Une équipe commerciale dépasse son objectif de ventes, mais en doublant le budget de moyens prévu. Elle est :",
      choices: [
        "Efficace mais peu efficiente",
        "Efficiente mais peu efficace",
        "À la fois efficace et efficiente",
        "Ni efficace ni efficiente",
      ],
      answers: [0],
      explanation:
        "Efficacité = Résultats / Objectifs : l'objectif est dépassé, l'équipe est efficace. Efficience = Résultats / Ressources : en doublant le budget, elle consomme trop de ressources pour son résultat — elle est peu efficiente. C'est LA confusion classique à éviter : produire beaucoup en gaspillant n'est pas être performant.",
    },
    {
      id: "q3",
      question:
        "Objectif : produire 5 000 unités pour 350 000 € de charges. Réalisé : 5 200 unités pour 360 000 €. Que peut-on conclure ?",
      choices: [
        "L'atelier est efficace mais pas efficient, car les charges dépassent le budget",
        "L'atelier est à la fois efficace (104 % de l'objectif) et efficient (coût unitaire réel inférieur au prévu)",
        "L'atelier n'est pas efficace car il n'a pas respecté le budget de charges",
        "L'atelier est efficient mais pas efficace",
      ],
      answers: [1],
      explanation:
        "Efficacité = 5 200 / 5 000 = 104 % : objectif dépassé. Efficience : coût unitaire réel = 360 000 / 5 200 ≈ 69,23 €, inférieur au coût prévu de 350 000 / 5 000 = 70 € : moins de ressources par unité. Le dépassement global des charges (360 000 > 350 000) ne suffit pas à conclure : il faut raisonner par unité produite.",
    },
    {
      id: "q4",
      question: "Le Triple Bottom Line de J. Elkington mesure la performance sur trois dimensions :",
      choices: [
        "Économie, efficacité, efficience",
        "Environnement, Social, Gouvernance",
        "Pertinence, fiabilité, rapidité",
        "Profit (économique), People (social), Planet (environnemental)",
      ],
      answers: [3],
      explanation:
        "Le Triple Bottom Line mesure la performance globale sur trois « lignes de résultat » : Profit, People, Planet. Attention au piège : ESG (Environnement, Social, Gouvernance) désigne les CRITÈRES utilisés pour rendre cette performance mesurable, et les 3 E (économie/efficacité/efficience) relèvent du triangle de la performance opérationnelle.",
    },
    {
      id: "q5",
      question: "Le chiffre brut « 12 000 », isolé et non interprété, constitue :",
      choices: [
        "Une donnée",
        "Une information",
        "Une connaissance",
        "Une intelligence décisionnelle",
      ],
      answers: [0],
      explanation:
        "Une donnée est un fait brut non interprété. Mise en contexte (« le magasin A a vendu 12 000 € hier, +8 % »), elle devient information ; interprétée pour agir (« la hausse vient de la promotion, il faut la reconduire »), elle devient connaissance. Une donnée brute ne pilote rien : seule l'information puis la connaissance permettent de décider.",
    },
    {
      id: "q6",
      question: "Lequel de ces « V » ne fait PAS partie des 5 V du Big Data ?",
      choices: ["Vélocité", "Véracité", "Volatilité", "Variété"],
      answers: [2],
      explanation:
        "Les 5 V sont : Volume, Variété, Vélocité, Véracité et Valeur. La « volatilité » n'en fait pas partie. La Valeur est l'enjeu final — extraire une utilité décisionnelle — et la Véracité rappelle que la fiabilité des données doit être contrôlée (« garbage in, garbage out »).",
    },
    {
      id: "q7",
      question: "Ce qui distingue un centre d'investissement d'un centre de profit, c'est la maîtrise :",
      choices: [
        "Du chiffre d'affaires",
        "Des capitaux investis",
        "Des coûts de production",
        "Des prix de cession interne",
      ],
      answers: [1],
      explanation:
        "Le centre de profit maîtrise recettes ET coûts (jugé sur la marge) ; le centre d'investissement maîtrise EN PLUS les capitaux investis (jugé sur ROI, ROCE, EVA). C'est le niveau d'autonomie le plus élevé. Confondre ces deux centres est une erreur fréquente explicitement signalée dans le chapitre.",
    },
    {
      id: "q8",
      question:
        "Juger le responsable d'un atelier de production (centre de coûts) sur le chiffre d'affaires de l'entreprise constitue :",
      choices: [
        "Une bonne pratique, car tout le monde contribue aux ventes",
        "Une application de la loi de Goodhart",
        "Une pratique acceptable si l'atelier est efficient",
        "Une violation du principe de contrôlabilité",
      ],
      answers: [3],
      explanation:
        "Le principe de contrôlabilité, principe cardinal des centres de responsabilité, impose de ne juger un responsable que sur ce qu'il maîtrise. L'atelier maîtrise ses charges, pas le volume vendu ni les prix : le juger sur le CA est injuste, démotivant et fausse l'évaluation. Ses indicateurs pertinents : coût unitaire, écarts sur coûts, productivité.",
    },
    {
      id: "q9",
      question:
        "Un centre d'investissement dégage un résultat de 6 M€ pour 50 M€ de capitaux investis ; le coût du capital est de 8 %. Quels sont son ROI et son EVA ?",
      choices: [
        "ROI = 8 % ; EVA = +6 M€",
        "ROI = 12,5 % ; EVA = −2 M€",
        "ROI = 12 % ; EVA = +2 M€",
        "ROI = 12 % ; EVA = +6 M€",
      ],
      answers: [2],
      explanation:
        "ROI = Résultat / Capitaux investis = 6 / 50 = 12 %. EVA = Résultat − (Capitaux × coût du capital) = 6 − (50 × 8 %) = 6 − 4 = +2 M€ : le centre crée de la valeur au-delà du coût des capitaux. Attention à ne pas confondre ROI (résultat/capitaux) et taux de marge (résultat/CA, ici 6/48 = 12,5 %).",
    },
    {
      id: "q10",
      question:
        "Un responsable jugé sur son ROI moyen de 12 % refuse un projet rentable à 10 %, alors que le coût du capital est de 8 %. Ce comportement illustre :",
      choices: [
        "Une décision rationnelle pour l'entreprise, car le projet est moins rentable que la moyenne",
        "Le biais du ROI, que le raisonnement en EVA permet de corriger",
        "Le principe de contrôlabilité",
        "Un effet de la décomposition de DuPont",
      ],
      answers: [1],
      explanation:
        "C'est le biais célèbre du ROI : le projet à 10 % est supérieur au coût du capital (8 %), donc créateur de valeur (EVA positive), mais il abaisserait le ROI moyen du centre — le responsable le refuse à tort. L'EVA, qui raisonne en valeur absolue créée, corrige ce travers : tout projet à EVA positive doit être accepté.",
    },
  ],
};
