// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Flashcards tirées du QCM : énoncé au recto, justification au verso.
import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  {
    "id": "qcm1",
    "front": "L'équation du programme de production s'écrit :",
    "back": "Production = Ventes prévues + Stock final souhaité - Stock initial."
  },
  {
    "id": "qcm2",
    "front": "Dans une entreprise multiproduit, l'enjeu supplémentaire par rapport au monoproduit est :",
    "back": "Le multiproduit ajoute le choix de la combinaison optimale de produits sous ressources limitées."
  },
  {
    "id": "qcm3",
    "front": "En programmation linéaire, quelle grandeur maximise-t-on généralement ?",
    "back": "On maximise la MCV, non le CA (erreur classique), car les charges fixes ne dépendent pas du programme."
  },
  {
    "id": "qcm4",
    "front": "Programme ALPHA SPORT : Max F = 260x + 200y ; 6x+5y ≤ 900 et 6x+3y ≤ 720. La résolution au sommet optimal donne :",
    "back": "6x+5y=900 et 6x+3y=720 -> 2y=180 -> y=90 ; x=75."
  },
  {
    "id": "qcm5",
    "front": "Avec x = 75 (marge 260 €) et y = 90 (marge 200 €), la marge totale F vaut :",
    "back": "F = 75×260 + 90×200 = 19 500 + 18 000 = 37 500 €."
  },
  {
    "id": "qcm6",
    "front": "Une contrainte qui n'est pas atteinte à l'optimum (par ex. x+y ≥ 80 ici non saturante) est dite :",
    "back": "Une contrainte non saturée à l'optimum est superflue (non saturante)."
  },
  {
    "id": "qcm7",
    "front": "En présence d'un seul facteur rare, comment classe-t-on les produits ?",
    "back": "On classe par marge / unité de facteur rare, puis on sature en commençant par le plus rentable."
  },
  {
    "id": "qcm8",
    "front": "La marge par unité de facteur rare se calcule par :",
    "back": "Marge / facteur rare = MCV unitaire / consommation du facteur rare."
  },
  {
    "id": "qcm9",
    "front": "Atelier 8 500 uo ; produits A (2 uo, marge 100 €), B (4 uo, marge 300 €), C (6 uo, marge 360 €). Le classement par marge/uo donne en premier :",
    "back": "Marge/uo : A=50, B=75, C=60 ; B est donc le plus rentable par unité de facteur rare."
  },
  {
    "id": "qcm10",
    "front": "Dans la méthode MPM, la date au plus tôt d'une tâche s'obtient :",
    "back": "Les dates au plus tôt se calculent de gauche à droite ; à une convergence on retient le maximum (chemin le plus long)."
  },
  {
    "id": "qcm11",
    "front": "La marge totale d'une tâche se calcule par :",
    "back": "Marge totale = date au plus tard - date au plus tôt."
  },
  {
    "id": "qcm12",
    "front": "Le chemin critique est constitué des tâches dont :",
    "back": "Le chemin critique relie les tâches à marge nulle (MT = ML = 0)."
  },
  {
    "id": "qcm13",
    "front": "À une convergence, les chemins valent 16 et 19 semaines pour les dates au plus tôt. On retient :",
    "back": "À une convergence, la date au plus tôt est le maximum des chemins entrants, soit 19."
  },
  {
    "id": "qcm14",
    "front": "Tâche J : date au plus tard 15, date au plus tôt 12. Sa marge totale vaut :",
    "back": "MT = 15 - 12 = 3 semaines."
  },
  {
    "id": "qcm15",
    "front": "Quel indicateur correspond au produit disponibilité × performance × qualité ?",
    "back": "Le TRS = disponibilité × performance × qualité."
  },
  {
    "id": "qcm16",
    "front": "Parmi ces propositions, lesquelles sont des contraintes pesant sur la production ?",
    "back": "Capacités, techniques et commerciales sont des contraintes de production ; le coefficient de corrélation n'en est pas une."
  },
  {
    "id": "qcm17",
    "front": "Quelles affirmations sur la méthode graphique en programmation linéaire sont exactes ?",
    "back": "Méthode graphique pour 2 produits, maximisation de la MCV, optimum sur un sommet ; pas le CA."
  },
  {
    "id": "qcm18",
    "front": "Quelles affirmations distinguent flux poussés et flux tirés ?",
    "back": "Flux poussés = production sur prévisions (stocks) ; flux tirés = pilotage par la demande (juste-à-temps)."
  },
  {
    "id": "qcm19",
    "front": "Quelles affirmations sur les marges en MPM sont exactes ?",
    "back": "MT = plus tard - plus tôt, ML ≤ MT, et la tâche critique a des marges nulles ; l'inégalité inverse (MT ≤ ML) est fausse."
  },
  {
    "id": "qcm20",
    "front": "Pour faire face à une surcharge (demande > capacité) à court terme, on peut :",
    "back": "Heures supplémentaires, intérim/sous-traitance et équipes supplémentaires sont des ajustements de court terme."
  },
  {
    "id": "qcm21",
    "front": "Le lissage de la production permet une charge régulière au prix de la constitution de stocks.",
    "back": "Vrai : lisser la production crée des stocks qui absorbent l'irrégularité des ventes."
  },
  {
    "id": "qcm22",
    "front": "En programmation linéaire, maximiser le chiffre d'affaires conduit toujours à la même solution que maximiser la marge sur coût variable.",
    "back": "Faux : on maximise la MCV ; raisonner sur le CA est une erreur classique qui peut fausser l'optimum."
  },
  {
    "id": "qcm23",
    "front": "En MPM, une tâche peut avoir une marge libre nulle alors que sa marge totale est strictement positive.",
    "back": "Vrai : exemple de la tâche J (MT = 3, ML = 0) ; tout retard décale alors les tâches suivantes."
  },
  {
    "id": "qcm24",
    "front": "Le Lean Management, le juste-à-temps et les cinq zéros sont des méthodes de calcul exigées au DCG.",
    "back": "Faux : ils relèvent de la culture professionnelle et ne sont pas des méthodes de calcul exigées."
  },
  {
    "id": "qcm25",
    "front": "Les modèles d'optimisation (PL, facteur rare, MPM) sont des aides à la décision et non des automatismes infaillibles.",
    "back": "Vrai : ils reposent sur des hypothèses fortes (demande prévisible, durées connues) et restent des aides à la décision."
  }
];
