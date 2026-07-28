// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A11.1",
    "title": "Mathoux",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise Mathoux fabrique un aliment pour chats à base de potassium. La consommation annuelle de cette matière première est de 6 tonnes pour un prix d’achat de 4 € le kg. Le coût de passation d’une commande est évalué à 20 €. Le coût de possession du stock peut être évalué à 2 € par mois pour 100 kg, compte tenu d’un stock de sécurité"
      },
      {
        "type": "p",
        "text": "fixé à 400 kg."
      },
      {
        "type": "p",
        "text": "**Déterminer le programme optimal d’approvisionnement en potassium en avenir certain.**"
      },
      {
        "type": "p",
        "text": "**Budget d’approvisionnement**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
      },
      {
        "type": "p",
        "text": "**Méthode***Afin de budgétiser correctement les approvisionnements, vous devez : •*1. Repérer les modalités d’approvisionnement retenues par l’entreprise : – Périodes constantes : le nombre de commandes est connu, de même que le temps constant séparant deux commandes. Il faut déduire les volumes à approvisionner en lien avec les consommations cumulées. – Quantités constantes : le volume des commandes est connu. Il faut déterminer les dates des commandes en lien avec les consommations cumulées. • Choisir une technique (méthode graphique ou méthode comptable).2. •3. Reporter les résultats obtenus dans un tableau comparable à celui proposé dans l’exemple APMo du cours."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "L’entreprise Mathoux fabrique un aliment pour chats à base de potassium. La consommation annuelle de cette matière première est de 6 tonnes pour un prix d’achat de 4 € le kg. Le coût de passation d’une commande est évalué à 20 €. Le coût de possession du stock peut être évalué à 2 € par mois pour 100 kg, compte tenu d’un stock de sécurité fixé à 400 kg."
      },
      {
        "type": "p",
        "text": "**Déterminer le programme optimal d’approvisionnement en potassium en avenir certain.**"
      },
      {
        "type": "p",
        "text": "Reprise des données pour les rendre homogènes"
      },
      {
        "type": "p",
        "text": "C = 6 t ou 6 000 kg / an p = 4 € / kg f = 20 €"
      },
      {
        "type": "p",
        "text": "cS = 2 € / 100 kg / mois = 0,02 / kg / mois soit à l’année 0,02 / kg / mois × 12 mois = 0,24 € / kg / an"
      },
      {
        "type": "p",
        "text": "et comme cS = p × t alors on en déduit que t = (0,24 € / kg / an)/4 € / kg = 6 % / an"
      },
      {
        "type": "p",
        "text": "Quantité économique à commander"
      },
      {
        "type": "p",
        "text": "Paramètres principaux de la gestion des stocks de cet aliment."
      },
      {
        "type": "p",
        "text": "N* (nombre de commandes = 6 000 kg / 1 000 kg = 6 commandes"
      },
      {
        "type": "p",
        "text": "T*(temps entre deux commandes) = 12 mois /6 commandes = 2 mois"
      },
      {
        "type": "p",
        "text": "K* (coût de gestion de ce stock) ="
      },
      {
        "type": "p",
        "text": "√(6 000 kg / an × 20 € /commande × 4 €/produit × 6 % / an × 2) = 240 €/an"
      },
      {
        "type": "p",
        "text": "Niveau du stock après la commande"
      },
      {
        "type": "p",
        "text": "Stock maximum = Stock actif + Stock de sécurité = 1 000 + 400, soit 1 400 kg"
      },
      {
        "type": "p",
        "text": "**Budget d’approvisionnement**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
      },
      {
        "type": "p",
        "text": "**Méthode***Afin de budgétiser correctement les approvisionnements, vous devez :*1. Repérer les modalités d’approvisionnement retenues par l’entreprise :–périodes constantes : le nombre de commandes est connu, de même que le temps constant séparant deux commandes. Il faut déduire les volumes à approvisionner en lien avec les consommations cumulées.–quantités constantes : le volume des commandes est connu. Il faut déterminer les dates des commandes en lien avec les consommations cumulées.2. Choisir une technique (méthode graphique ou méthode par tableau).3. Reporter les résultats obtenus dans un tableau."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A11.2",
    "title": "Kverneland",
    "statement": [
      {
        "type": "p",
        "text": "La société Kverneland fabrique des pelles de jardin en aluminium. Le responsable des approvisionnements vous communique les informations suivantes :"
      },
      {
        "type": "p",
        "text": "• La consommation annuelle est de 360 tonnes et est régulière sur 12 mois ;"
      },
      {
        "type": "p",
        "text": "• La cadence d’approvisionnement est de 8 commandes par année ;"
      },
      {
        "type": "p",
        "text": "• Le stock initial est de 30 tonnes au 1er janvier ;"
      },
      {
        "type": "p",
        "text": "• Le délai de réapprovisionnement est de deux semaines ;"
      },
      {
        "type": "p",
        "text": "• Le stock de sécurité est de 6 jours."
      },
      {
        "type": "p",
        "text": "**Concevoir le budget des approvisionnements en tenant compte de la solution d’approvisionnement de Kverneland.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Concevoir le budget des approvisionnements en tenant compte de la solution d’approvisionnement de Kverneland.**"
      },
      {
        "type": "p",
        "text": "L’entreprise consomme 360 tonnes d’aluminium par an, ce qui équivaut à une consommation de 1 tonne par jour. La cadence d’approvisionnement est fixée à 8 commandes/an, soit 1 commande tous les 1,5 mois (45 jours). Le stock initial étant de 30 tonnes, la rupture de stock aurait lieu le 30 janvier. L’entreprise prend en compte un délai de réapprovisionnement de 14 jours et un stock de sécurité de 6 jours, ce qui équivaut à un stock d’alerte de 20 jours (20 tonnes ici). La première commande sera donc établie le 10 janvier, pour une livraison au 24 janvier. Le budget d’approvisionnement est retracé dans le tableau ci-après. (Voir le tableau en page suivante.)"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Janvier**",
          "**Février**",
          "**Mars**",
          "**Avril**",
          "**Mai**",
          "**Juin**",
          "**Juillet**",
          "**Août**",
          "**Septembre**",
          "**Octobre**",
          "**Novembre**",
          "**Décembre**"
        ],
        "rows": [
          [
            "**Stock initial**",
            "30",
            "45",
            "15",
            "30",
            "45",
            "15",
            "30",
            "45",
            "15",
            "30",
            "45",
            "15"
          ],
          [
            "**Quantités commandées**",
            "45",
            "45",
            "",
            "45",
            "45",
            "",
            "45",
            "45",
            "",
            "45",
            "45",
            ""
          ],
          [
            "**Date de commandes**",
            "10-janv.",
            "24-févr.",
            "",
            "09-avr.",
            "24-mai",
            "",
            "08-juil.",
            "22-août",
            "",
            "06-oct.",
            "20-nov.",
            ""
          ],
          [
            "**Quantités réceptionnées**",
            "45",
            "",
            "45",
            "45",
            "",
            "45",
            "45",
            "",
            "45",
            "45",
            "",
            "45"
          ],
          [
            "**Date de réception**",
            "24-janv.",
            "",
            "10-mars",
            "23-avr.",
            "",
            "07-juin",
            "22-juil.",
            "",
            "05-sept.",
            "20-oct.",
            "",
            "04-déc."
          ],
          [
            "**Consommation**",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30",
            "30"
          ],
          [
            "**Stock final**",
            "45",
            "15",
            "30",
            "45",
            "15",
            "30",
            "45",
            "15",
            "30",
            "45",
            "15",
            "30"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Gestion de stocks en avenir aléatoire**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**Méthode**• Vous devez repérer que le dossier évoquant la gestion des stocks fait apparaître la notion d’avenir incertain. Dans la majorité des cas, la loi normale sera à appliquer.•Les modèles de gestion des stocks en avenir incertain s’utilisent dans des situations probabilisables pouvant provenir :–d’aléas concernant la demande par unité de temps ;–d’approvisionnements dont les délais ne peuvent être assurés ;–ou de la conjonction des deux phénomènes : demande et délai incertains.•Pour se protéger contre les variations aléatoires de la demande aléatoire, l’entreprise doit se constituer un stock de sécurité (SS) au-delà du stock actif. Ce stock est souvent donné en unité de volume."
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A11.3",
    "title": "Sport & Co",
    "statement": [
      {
        "type": "p",
        "text": "La distribution de la demande d’articles de sport chez Sport & Co pendant la période de réapprovisionnement suit une loi normale de moyenne 12 000 et d’écart-type 7 000 unités."
      },
      {
        "type": "p",
        "text": "Le magasin choisit comme stock de sécurité un stock correspondant à un taux de service de 87 %. Le délai moyen de livraison est de 4 jours."
      },
      {
        "type": "p",
        "text": "Le dirigeant se demande quel niveau de stock de sécurité est nécessaire."
      },
      {
        "type": "p",
        "text": "**➔ Déterminer le stock de sécurité, SS, en avenir aléatoire pour répondre aux exigences du magasin.**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Déterminer le stock de sécurité (SS) en avenir aléatoire pour répondre aux exigences du magasin.**"
      },
      {
        "type": "p",
        "text": "Taux de rupture de stock = 1 – 0,87 = 0,13 ⇒ 13 %"
      },
      {
        "type": "p",
        "text": "P ((x < (12 000 + SS)) = 0,87"
      },
      {
        "type": "p",
        "text": "P (x < (SS/7 000)) = 0,87"
      },
      {
        "type": "p",
        "text": "Par lecture de la table de la loi normale : (SS/7 000) = 1,13"
      },
      {
        "type": "p",
        "text": "SS = 7 000 × 1,13 = 7 910"
      },
      {
        "type": "p",
        "text": "Il faut que l’entreprise dispose d’un stock de sécurité de 7 910."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex4",
    "label": "C11.1",
    "title": "Aquaserv",
    "statement": [
      {
        "type": "p",
        "text": "La société Aquaserv propose des services d’entretien de piscines et de commercialisa-"
      },
      {
        "type": "p",
        "text": "tion de produits destinés à l’entretien des piscines."
      },
      {
        "type": "p",
        "text": "Dans la catégorie des produits dont le stock doit être suivi avec rigueur, l’entreprise s’intéresse au produit « sel » qui, bien que peu onéreux avec un coût de 12 € le sac de 15 kg, représente un volume annuel de 18 000 sacs dans des lieux de stockage spécifiques car ce produit craint l’humidité. En conséquence, le taux de possession est estimé à 6 % de sa valeur moyenne."
      },
      {
        "type": "p",
        "text": "Le fournisseur traditionnel de l’entreprise facture 45 € de frais de livraison quelle que soit la quantité de sacs commandés."
      },
      {
        "type": "p",
        "text": "Le responsable du centre approvisionnement est contacté par un fournisseur alternatif qui lui propose les modalités suivantes :"
      },
      {
        "type": "p",
        "text": "– livraison bimensuelle gratuite pendant les mois de juin à septembre pour des volumes de 1 000 sacs ;"
      },
      {
        "type": "p",
        "text": "– livraison mensuelle de 1 250 sacs le reste de l’année contre un coût de livraison de 20 € par livraison."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**Déterminer le programme optimal d’approvisionnement d’Aquaserv en avenir certain.**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain• Concevoir un budget des approvisionnements"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain"
      },
      {
        "type": "p",
        "text": "**Déterminer le programme optimal d’approvisionnement d’Aquaserv en avenir certain.**"
      },
      {
        "type": "p",
        "text": "**Gestion actuelle de l’entreprise Aquaserv**"
      },
      {
        "type": "p",
        "text": "•Paramètres de gestion du stock :"
      },
      {
        "type": "p",
        "text": "– Consommation = 18 000 sacs/an ;"
      },
      {
        "type": "p",
        "text": "– Prix d’un sac = 12 € le sac ;"
      },
      {
        "type": "p",
        "text": "– f = 45 €/commandes ;"
      },
      {
        "type": "p",
        "text": "– taux de possession = 6 %/an"
      },
      {
        "type": "p",
        "text": "L’étude peut se faire par rapport au nombre de commandes (N) ou par rapport au lot économique (Q) :"
      },
      {
        "type": "p",
        "text": "La solution optimale consiste à passer 12 commandes par an de 1 500 sacs, soit une commande tous les 30 jours pour un coût de 1 080 €. Avec le fournisseur alternatif, les livraisons ne sont plus régulières."
      },
      {
        "type": "p",
        "text": "Les hypothèses du modèle de Wilson sont respectées : consommation régulière, unicité du tarif et docilité du fournisseur. Il est possible de se servir de la formule du modèle."
      },
      {
        "type": "p",
        "text": "**Gestion prévisionnelle en cas de choix du fournisseur alternatif**"
      },
      {
        "type": "p",
        "text": "•Paramètres de gestion du stock :"
      },
      {
        "type": "p",
        "text": "– Consommation = 18 000 sacs / an ;"
      },
      {
        "type": "p",
        "text": "– Prix d’un sac = 12 € le sac ;"
      },
      {
        "type": "p",
        "text": "– f = gratuit de juin à septembre et 20 € les autres mois ;"
      },
      {
        "type": "p",
        "text": "– Taux de possession = 6 % /an."
      },
      {
        "type": "p",
        "text": "•Nombre de commandes :"
      },
      {
        "type": "p",
        "text": "– Juin à septembre : 8 livraisons de 1 000 sacs soit 8 000 sacs."
      },
      {
        "type": "p",
        "text": "– Les autres mois : 10 000 sacs à livrer par lots de 1 250 sacs, soit 8 livraisons."
      },
      {
        "type": "p",
        "text": "– Coût de lancement des commandes : 8 livraisons × 20 € = 160 € contre 540 € (12 commandes × 45 €)."
      },
      {
        "type": "p",
        "text": "Coût du stockage :"
      },
      {
        "type": "p",
        "text": "– De juin à septembre : stock moyen de 500 sacs × 12 € par sac × 6 % / an × 4 mois / 12 = 120 €."
      },
      {
        "type": "p",
        "text": "– Les autres mois : stock moyen de 625 sacs × 12 € par sac × 6 % / an × 8 mois / 12 = 300 €."
      },
      {
        "type": "p",
        "text": "– Contre un coût de stockage initial de 540 € (750 sacs × 12 € × 6 %)"
      },
      {
        "type": "p",
        "text": "Coût global de gestion du stock de 160 € + 120 € + 300 € = 580 € soit un coût bien moindre que celui (1 080 €) de l’organisation actuelle d’Aquaserv."
      },
      {
        "type": "p",
        "text": "Ce résultat pouvait être envisagé sans calcul puisque la proposition du fournisseur alternatif conduisait à un stock moyen toujours inférieur à celui observé dans la première solution pour un coût de livraison total trois fois moins élevé."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C11.2",
    "title": "Chavil",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise Chavil fabrique des tubes qui nécessitent un approvisionnement régulier."
      },
      {
        "type": "p",
        "text": "Le directeur du site de production doit élaborer le programme d’approvisionnement des 6 prochains mois pour présenter le budget prévisionnel correspondant au directeur financier."
      },
      {
        "type": "p",
        "text": "Le programme de production en volume, établi par le directeur de la production, fournit les renseignements ci-après pour le premier semestre N :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Nombre de tubes X**",
          "**Nombre de tubes Y**"
        ],
        "rows": [
          [
            "**Janvier**",
            "18 000",
            "240 000"
          ],
          [
            "**Février**",
            "16 000",
            "225 000"
          ],
          [
            "**Mars**",
            "20 000",
            "240 000"
          ],
          [
            "**Avril**",
            "16 000",
            "235 000"
          ],
          [
            "**Mai**",
            "15 000",
            "200 000"
          ],
          [
            "**Juin**",
            "19 000",
            "225 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "L’objectif est d’établir un plan d’approvisionnement en culots de tubes nécessaires pour"
      },
      {
        "type": "p",
        "text": "satisfaire régulièrement les besoins de la fabrication. À cette fin, voici les éléments de la politique d’approvisionnement adoptée par l’entreprise."
      },
      {
        "type": "p",
        "text": "**1. Culots de tubes X**"
      },
      {
        "type": "p",
        "text": "• Utilisation, pour un tube X, d’un jeu complet de culots présenté sous sachet."
      },
      {
        "type": "p",
        "text": "• Acquisition par caisses contenant 1 000 sachets."
      },
      {
        "type": "p",
        "text": "• Commandes par quantités constantes de 20 000 jeux de culots, soit 20 caisses, à des dates déterminées en fonction des besoins de la fabrication, la date de commande correspondant au jour où le stock réel atteint le stock d’alerte."
      },
      {
        "type": "p",
        "text": "• Le stock d’alerte est composé :"
      },
      {
        "type": "p",
        "text": "– d’un stock minimum destiné à couvrir le délai de livraison des fournisseurs ;"
      },
      {
        "type": "p",
        "text": "– d’un stock de sécurité fixé à 3 000 jeux de culots X."
      },
      {
        "type": "p",
        "text": "• Le délai de livraison des fournisseurs est de 1 mois."
      },
      {
        "type": "p",
        "text": "• Au 1er janvier N, le stock initial s’élève à 25 000 jeux."
      },
      {
        "type": "p",
        "text": "• Le stock au 30 juin N doit être suffisant pour couvrir les consommations du mois de juillet que l’on peut estimer à 20 000 tubes X."
      },
      {
        "type": "p",
        "text": "**2. Culots de tubes Y**"
      },
      {
        "type": "p",
        "text": "• Utilisation d’un jeu de culots, par tube, présenté également sous sachet."
      },
      {
        "type": "p",
        "text": "• Acquisition par caisses contenant 5 000 sachets."
      },
      {
        "type": "p",
        "text": "• Commandes passées le premier jour de chaque mois, en quantités variables déterminées en fonction des besoins de la production."
      },
      {
        "type": "p",
        "text": "• Le stock d’alerte est composé :"
      },
      {
        "type": "p",
        "text": "– d’un stock minimum correspondant au délai de livraison des fournisseurs ;"
      },
      {
        "type": "p",
        "text": "– d’un stock de sécurité fixé à 15 000 jeux de culots Y."
      },
      {
        "type": "p",
        "text": "• Délai de livraison des fournisseurs : 15 jours."
      },
      {
        "type": "p",
        "text": "• Stock au 1er janvier N : 140 000 sachets."
      },
      {
        "type": "p",
        "text": "• Stockau 30 juin N : stock nécessaire pour couvrir les besoins de la fabrication du moisde juillet, que l’on peut estimer à 245 000 tubes Y."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1.Déterminer un programme d’approvisionnement relatif aux culots de tubes X.**"
      },
      {
        "type": "p",
        "text": "**2. Présenter, sous formegraphique, un programmed’approvisionnement relatif aux culots de tubes Y.**"
      },
      {
        "type": "p",
        "text": "**3. Concevoir le budget des approvisionnements (en quantité) des deux types de tubes.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain• Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
      },
      {
        "type": "p",
        "text": "**1. Déterminer un programme d’approvisionnement relatif aux culots de tubes X.**"
      },
      {
        "type": "p",
        "text": "Les consommations sont régulières sur le mois, les livraisons ont lieu en cours de mois en fonction des dates de commandes qui sont déclenchées quand le stock d’alerte est atteint."
      },
      {
        "type": "p",
        "text": "Le stock théorique est calculé en fin de mois, il ne tient pas d’éventuelles livraisons"
      },
      {
        "type": "p",
        "text": "Le stock réel est calculé en fin de mois, il tient compte des livraisons programmées."
      },
      {
        "type": "p",
        "text": "Le stock d’alerte est défini comme d’un stock minimum destiné à couvrir le délai de livraison des fournisseurs (1 mois de consommation) plus un stock de sécurité fixé à 3 000 jeux de culots X."
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Consommations**",
          "**Stock théorique**",
          "**Livraisons**",
          "**Stock réel**",
          "**Dates des commandes**"
        ],
        "rows": [
          [
            "**01/01/N**",
            "",
            "",
            "",
            "25 000",
            "",
            ""
          ],
          [
            "**Janvier**",
            "18 000",
            "+ 7 000",
            "",
            "7 000",
            "",
            "(7 000-3 000) /16 000 × 28 = 7 Janv."
          ],
          [
            "**Février**",
            "16 000",
            "– 9 000",
            "20 000",
            "11 000",
            "",
            "(11 000-3 000) /20 000 × 31 = 12 Févr."
          ],
          [
            "**Mars**",
            "20 000",
            "– 9 000",
            "20 000",
            "11 000",
            "",
            "(11 000-3 000) /16 000 × 30 = 15 mars"
          ],
          [
            "**Avril**",
            "16 000",
            "– 5 000",
            "20 000",
            "15 000",
            "",
            "(15 000-3 000) /15 000 × 31 = 24 avril"
          ],
          [
            "**Mai**",
            "15 000",
            "0",
            "20 000",
            "20 000",
            "",
            "(20 000-3 000) /19 000 × 30 = 26 mai"
          ],
          [
            "**Juin**",
            "19 000",
            "+ 1 000",
            "20 000",
            "21 000",
            "",
            "(21 000-3 000) /20 000 × 31 × 31 = 27 juin"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Explications (tous les mois comptent 30 jours) :"
      },
      {
        "type": "p",
        "text": "•Janvier : Le mois débute avec un stock de 25 000, 18 000 jeux sont consommés, il reste en fin de mois 7 000 jeux."
      },
      {
        "type": "p",
        "text": "•Février : La consommation du mois de février est supérieure au stock, d’ou un stock théorique de – 9 000 jeux. Une livraison de 20 000 jeux doit être prévue sur ce mois. Il s’agit d’en déterminer la date. Pour commander, il faut avoir en stock un mois de consommation et 3 000 jeux de sécurité soit 16 000 jeux + 3 000 jeux soit 19 000 jeux ce qui s’est passé le 10 janvier compte tenu du rythme de consommation de 600 produits/jour en janvier. En conséquence la livraison est prévue le 10 février. Le stock réel de fin de période s’établit à SI (7 000) + livraison (20 000) – consommations (16 000) = SF (11 000)."
      },
      {
        "type": "p",
        "text": "•Mars : La consommation du mois de mars (20 000) est supérieure au stock (11 000), d’ou un stock théorique de – 9 000 jeux. Une livraison de 20 000 jeux doit être prévue en mars. Il s’agit d’en déterminer la date. Pour commander le mois précédent, il faut avoir en stock un mois de consommation à venir et 3 000 jeux de sécurité soit 20 000 jeux + 3 000 jeux soit 21 000 jeux. Compte tenu du rythme de consommation de février (16 000 jeux /30 jours = 5 33 jeux/jour), il faut 28 jours pour consommer 15 000 produits. À ce moment, il restera 21 000 jeux en stock (1 000 de reste à consommer sur février et 20 000 de livraison). En conséquence la livraison est prévue le 28 mars. Le stock réel de fin mars s’établit à SI (11 000) + livraison (20 000) – consommations (20 000) = SF (11 000)."
      },
      {
        "type": "p",
        "text": "•Avril : La consommation du mois d’avril (16 000) est supérieure au stock (11 000), d’ou un stock théorique de – 5 000 jeux. Une livraison de 20 000 jeux doit être prévue en avril. Il s’agit d’en déterminer la date. Pour commander le mois précédent, il faut avoir en stock un mois de consommation à venir et 3 000 jeux de sécurité soit 16 000 jeux + 3 000 jeux soit 19 000 jeux. Compte tenu du rythme de consommation de mars (20 000 jeux /30 jours = 667 jeux/jour), le stock sera à un niveau de 19 000 jeux, 12 jours avant la fin du mois soit une commande 18 mars. En conséquence la livraison est prévue le 18 avril. Le stock réel de fin avril s’établit à SI (11 000) + livraison (20 000) – consommations (16 000) = SF (15 000)."
      },
      {
        "type": "p",
        "text": "Le raisonnement se poursuit sur mai et juin."
      },
      {
        "type": "p",
        "text": "**2. Présenter, sous forme graphique, un programme d’approvisionnement relatif aux culots de tubes Y.**"
      },
      {
        "type": "p",
        "text": "Programme d’approvisionnement des culots de tubes Y"
      },
      {
        "type": "p",
        "text": "Budgétisation en périodes constantes en six commandes de début de mois."
      },
      {
        "type": "p",
        "text": "Si les commandes sont passées en début de chaque mois, les livraisons ont lieu le 15 de chaque mois (délai de 15 jours) et doivent permettre de tenir jusqu’au 15 du mois suivant et du stock de sécurité."
      },
      {
        "type": "table",
        "headers": [
          "**1re commande :**",
          "**Consommations 2e quinzaine de janvier**",
          "**+**",
          "**Consommations 1re quinzaine**",
          "**+**",
          "**Stock de sécurité**",
          "**–**",
          "**Stock réel au 15/01**"
        ],
        "rows": [
          [
            "",
            "= 120 000= 227 500",
            "+",
            "112 500",
            "+",
            "15 000",
            "–",
            "20 000"
          ],
          [
            "**À livrer par caisses de 5 000 unités ⇒ 230 000 unités.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**3. Concevoir le budget des approvisionnements (en quantité) des deux types de tubes.**"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Janv.**",
          "**Fév.**",
          "**Mars**",
          "**Avril**",
          "**Mai**",
          "**Juin**"
        ],
        "rows": [
          [
            "**Tubes X**",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "**Stock initial (début de mois)**",
            "25 000",
            "7 000",
            "11 000",
            "11 000",
            "15 000",
            "20 000"
          ],
          [
            "**+ Livraisons (début de mois)**",
            "–",
            "20 000",
            "20 000",
            "20 000",
            "20 000",
            "20 000"
          ],
          [
            "**– Consommations**",
            "18 000",
            "16 000",
            "20 000",
            "16 000",
            "15 000",
            "19 000"
          ],
          [
            "**= Stock fin de mois**",
            "7 000",
            "11 000",
            "11 000",
            "15 000",
            "20 000",
            "21 000"
          ],
          [
            "**Tubes Y**",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "**Stock initial (début de mois)**",
            "140 000",
            "130 000",
            "135 000",
            "135 000",
            "115 000",
            "130 000"
          ],
          [
            "**+ Livraisons**",
            "230 000",
            "230 000",
            "240 000",
            "215 000",
            "215 000",
            "235 000"
          ],
          [
            "**– Consommations**",
            "240 000",
            "225 000",
            "240 000",
            "235 000",
            "200 000",
            "225 000"
          ],
          [
            "**= Stock fin de mois**",
            "130 000",
            "135 000",
            "135 000",
            "115 000",
            "130 000",
            "140 000"
          ]
        ]
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C11.3",
    "title": "Ducastol",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "La société Ducastol distribue du matériel agricole dans quatre magasins situés en Normandie (Le Havre, Rouen, Évreux et Dieppe). Les tracteurs Claas sont livrés une fois par mois par le constructeur. Ils proviennent directement d’Italie. Les demandes des clients dans chacun des points de vente suivent des lois normales de paramètres :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Moyenne**",
          "**Écart-type**"
        ],
        "rows": [
          [
            "**Le Havre**",
            "25",
            "4"
          ],
          [
            "**Rouen**",
            "37",
            "6"
          ],
          [
            "**Évreux**",
            "20",
            "3"
          ],
          [
            "**Dieppe**",
            "18",
            "2"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Ces demandes peuvent être considérées comme des variables aléatoires indépendantes. Le dirigeant désire limiter à 3 % le risque de rupture de stock. Il souhaite déterminer le stock de sécurité nécessaire pour réaliser cet objectif."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**Déterminer le stock de sécurité (SS) en avenir aléatoire pour répondre aux exigences du dirigeant de l’entreprise Ducastol.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**Déterminer le stock de sécurité (SS) en avenir aléatoire pour répondre aux exigences du dirigeant de l’entreprise Ducastol.**"
      },
      {
        "type": "p",
        "text": "Soit S le stock après réapprovisionnement."
      },
      {
        "type": "p",
        "text": "Pour limiter à 3 % le risque de rupture de stock, il faut que le stock S vérifie l’égalité suivante :"
      },
      {
        "type": "p",
        "text": "π ((S – m)/σ) = 0,97"
      },
      {
        "type": "p",
        "text": "En utilisant la table de la loi normale centrée réduite, on a :"
      },
      {
        "type": "p",
        "text": "(S – m)/ σ = 1,88"
      },
      {
        "type": "p",
        "text": "⇒ S – m = 1,88 × σ"
      },
      {
        "type": "p",
        "text": "⇒ S = 1,88 σ + m"
      },
      {
        "type": "p",
        "text": "⇒ S = m + 1,88σ"
      },
      {
        "type": "p",
        "text": "On trouve donc, pour chaque site, un stock de sécurité de :"
      },
      {
        "type": "p",
        "text": "•Le Havre : 25 + 1,88 × 4 = 33⇒SS = 33 – 25 = 8"
      },
      {
        "type": "p",
        "text": "•Rouen : 37 + 1,88 × 6 = 48⇒SS = 48 – 37 = 11"
      },
      {
        "type": "p",
        "text": "•Évreux : 20 + 1,88 × 3 = 26⇒ SS = 26 – 20 = 6"
      },
      {
        "type": "p",
        "text": "•Dieppe : 18 + 1,88 × 2 = 22⇒SS = 22 – 18 = 4"
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C11.4",
    "title": "Nat Lin",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain et le stock optimal en avenir aléatoire• Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
      },
      {
        "type": "p",
        "text": "Nat Lin est une coopérative, basée en Normandie, spécialisée dans la transformation du lin textile, de la semence à la fibre. Ses 60 agriculteurs adhérents et 10 salariés partagent la même passion du lin, l’exigence de la qualité et de l’innovation. Nat Lin est l’acteur majeur de l’amont de la filière lin textile."
      },
      {
        "type": "p",
        "text": "M. Dubos, directeur général de la coopérative, vous demande d’étudier la gestion des approvisionnements en lin. En effet, il s’agit d’un poste de charges important, et les ruptures de stock sont absolument interdites. Les agriculteurs adhérents apportent alors leur lin instantanément."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Déterminer le programme optimal d’approvisionnement de la coopérative Nat Lin.*"
      },
      {
        "type": "p",
        "text": "Nat Lin souhaite se prémunir contre le risque de rupture de stock et souhaite instaurer un stock de sécurité correspondant à deux semaines de consommation. Ce stock serait détenu à l’année."
      },
      {
        "type": "p",
        "text": "*2. Calculer le coût du stock de sécurité envisagé par la coopérative Nat Lin.*"
      },
      {
        "type": "p",
        "text": "*3. Concevoir le budget des approvisionnements par quantités constantes en tenant compte de la solution optimale d’approvisionnement retenue.*"
      },
      {
        "type": "p",
        "text": "**Document — Informations complémentaires relatives à la gestion du stock de lin**"
      },
      {
        "type": "p",
        "text": "Les informations complémentaires relatives à la gestion du stock de lin sont les suivantes :"
      },
      {
        "type": "p",
        "text": "– consommation annuelle de lin : 3 540 tonnes ;"
      },
      {
        "type": "p",
        "text": "– prix de la tonne : 500 € ;"
      },
      {
        "type": "p",
        "text": "– coût de lancement et de réception d’une commande : 2 458,33 € ;"
      },
      {
        "type": "p",
        "text": "– coût de possession du stock : 1 € par tonne par semaine de détention."
      },
      {
        "type": "p",
        "text": "L’activité se déroule sur 52 semaines."
      },
      {
        "type": "p",
        "text": "Délais de livraison : 3 jours"
      },
      {
        "type": "p",
        "text": "Consommation prévisionnelle par mois :"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**J**",
          "**F**",
          "**M**",
          "**A**",
          "**M**",
          "**J**",
          "**J**",
          "**A**",
          "**S**",
          "**O**",
          "**N**",
          "**D**"
        ],
        "rows": [
          [
            "**Consommation prévisionnelle**",
            "200",
            "300",
            "445",
            "280",
            "400",
            "200",
            "400",
            "340",
            "280",
            "400",
            "400",
            "295"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les commandes sont passées par quantités constantes de 590 unités."
      },
      {
        "type": "p",
        "text": "Le stock d’alerte est composé d’un stock de sécurité de 136 tonnes."
      },
      {
        "type": "p",
        "text": "Le délai de livraison des fournisseurs est de 1 mois. Au 1er janvier N, le stock initial est de 200 unités."
      },
      {
        "type": "p",
        "text": "Le stock au 31 décembre N doit couvrir les consommations de janvier N+1, s’élevant à 200 unités."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain et le stock optimal en avenir aléatoire• Concevoir un budget des approvisionnements en tenant compte des solutions d’approvisionnement"
      },
      {
        "type": "p",
        "text": "**1. Déterminer le programme optimal d’approvisionnement de la coopérative Nat Lin.**"
      },
      {
        "type": "p",
        "text": "Le modèle de Wilson peut s’appliquer ici car :"
      },
      {
        "type": "p",
        "text": "– la demande est certaine ;"
      },
      {
        "type": "p",
        "text": "– la consommation est constante et régulière dans le temps ;"
      },
      {
        "type": "p",
        "text": "– le prix d’approvisionnement et le coût de lancement sont indépendants des quantités commandées."
      },
      {
        "type": "p",
        "text": "Coût de gestion total : CGT"
      },
      {
        "type": "p",
        "text": "CGT = Coût de passation (ou de lancement) + Coût de possession (ou de stockage) = CL + CP"
      },
      {
        "type": "p",
        "text": "CGT = 2 458,33 n +"
      },
      {
        "type": "p",
        "text": "L’optimum est atteint quand la dérivée s’annule :"
      },
      {
        "type": "p",
        "text": "C’GT = 2 458,33 –"
      },
      {
        "type": "p",
        "text": "s’annule pour n ="
      },
      {
        "type": "p",
        "text": "Coût de gestion total : CGT = CL + CP"
      },
      {
        "type": "p",
        "text": "= (3 540 × 50) / (2 × 6) + 6 × 2 458,33"
      },
      {
        "type": "p",
        "text": "= 14 750 + 14 750"
      },
      {
        "type": "p",
        "text": "= 29 500 €"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût du stock de sécurité envisagé par la coopérative Nat Lin.**"
      },
      {
        "type": "p",
        "text": "Stock de sécurité = (3 540 ÷ 52) × 2 = 136,15 tonnes arrondi à 136 tonnes."
      },
      {
        "type": "p",
        "text": "Coût du stock de sécurité détenu pendant 52 semaines :"
      },
      {
        "type": "p",
        "text": "141,6 × 1 € × 52 semaines = 7 363,20 €"
      },
      {
        "type": "p",
        "text": "Le rythme de commandes est inchangé car la présence d’un stock de sécurité ne joue pas sur l’optimisation : il s’agit d’une constante dont la dérivée est nulle."
      },
      {
        "type": "p",
        "text": "**3. Concevoir le budget des approvisionnements par quantités constantes en tenant compte de la solution optimale d’approvisionnement retenue.**"
      },
      {
        "type": "p",
        "text": "Au 1er janvier N, les besoins s’élèvent à :"
      },
      {
        "type": "p",
        "text": "200 + 136 = 336 tonnes"
      },
      {
        "type": "p",
        "text": "Le stock de début de mois de 200 tonnes ne suffira pas à couvrir le besoin. Il faut donc une livraison. Celle-ci interviendra quand on atteindra le stock de sécurité, c’est-à-dire 136 tonnes, soit une consommation de :"
      },
      {
        "type": "p",
        "text": "200 – 136 = 64 tonnes dans le mois."
      },
      {
        "type": "p",
        "text": "Consommation quotidienne = (200 ÷ 30) ≈ 7 tonnes par jour"
      },
      {
        "type": "p",
        "text": "Il faudra donc 10 jours (64 ÷ 7) pour atteindre le stock de sécurité."
      },
      {
        "type": "p",
        "text": "La livraison devra donc avoir lieu le 10 janvier. La commande sera passée 3 jours avant, soit le 7 janvier."
      },
      {
        "type": "p",
        "text": "**Budget par quantités constantes**"
      },
      {
        "type": "table",
        "headers": [
          "**Mois**",
          "**Consommations**",
          "**Besoins**",
          "**Stock initial**",
          "**Quantités livrées**",
          "**Stock réel = Stock après consommation et livraison**",
          "**Date de la rupture de stock**",
          "**Date de commande**",
          "**Consommation moyenne par jour**",
          "**Nombre de jours pour atteindre le stock de sécurité**"
        ],
        "rows": [
          [
            "**Fin déc. N –1**",
            "",
            "",
            "",
            "",
            "200",
            "",
            "",
            "",
            ""
          ],
          [
            "**Janvier**",
            "200",
            "336",
            "200",
            "590",
            "590",
            "10-janv",
            "07-janv",
            "7",
            "10"
          ],
          [
            "**Février**",
            "300",
            "436",
            "590",
            "",
            "290",
            "",
            "",
            "",
            ""
          ],
          [
            "**Mars**",
            "445",
            "581",
            "290",
            "590",
            "435",
            "21-mars",
            "18-mars",
            "15",
            "21"
          ],
          [
            "**Avril**",
            "280",
            "416",
            "435",
            "",
            "155",
            "",
            "",
            "",
            ""
          ],
          [
            "**Mai**",
            "400",
            "536",
            "155",
            "590",
            "345",
            "20-mai",
            "17-mai",
            "13",
            "20"
          ],
          [
            "**Juin**",
            "200",
            "336",
            "345",
            "",
            "145",
            "",
            "",
            "",
            ""
          ],
          [
            "**Juillet**",
            "200",
            "336",
            "145",
            "590",
            "535",
            "10-juil",
            "07-juil",
            "7",
            "10"
          ],
          [
            "**Août**",
            "400",
            "536",
            "535",
            "590",
            "725",
            "20-août",
            "17-août",
            "13",
            "20"
          ],
          [
            "**Septembre**",
            "340",
            "476",
            "725",
            "",
            "385",
            "",
            "",
            "",
            ""
          ],
          [
            "**Octobre**",
            "280",
            "416",
            "385",
            "",
            "105",
            "",
            "",
            "",
            ""
          ],
          [
            "**Novembre**",
            "400",
            "536",
            "105",
            "590",
            "295",
            "20-nov",
            "17-nov",
            "13",
            "20"
          ],
          [
            "**Décembre**",
            "295",
            "431",
            "295",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        ]
      }
    ]
  },
  {
    "id": "ex8",
    "label": "C11.5",
    "title": "Cartoons",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain et le stock optimal en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "L’entreprise Cartoons est un réseau exclusif de distribution de bandes-dessinées pour certaines collections."
      },
      {
        "type": "p",
        "text": "Le responsable des approvisionnements de ce réseau de distribution souhaite améliorer la gestion des stocks des produits les plus coûteux afin de réduire les coûts de stockage."
      },
      {
        "type": "p",
        "text": "Il étudie ainsi la collection New20, qui correspond à des nouveautés d’auteurs appréciés du grand public et qui promettent de devenir des best-sellers. Ces bandes dessinées sont publiées dans un format haut de gamme."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Déterminer le programme optimal d’approvisionnement à conseiller au responsable des approvisionnements qui permet de minimiser le coût lié à la gestion du stock de bandes dessinées de la collection New20 dans un contexte où la pénurie est refusée.**"
      },
      {
        "type": "p",
        "text": "**Document — Informations relatives à la gestion du stock de la collection New20**"
      },
      {
        "type": "p",
        "text": "Le stock de livres pour la collection New20 était de 20 000 unités au 1er janvier N et il devra être porté à 35 000 unités au 31 décembre N."
      },
      {
        "type": "p",
        "text": "On prévoit des ventes de 900 000 exemplaires pour l’année N."
      },
      {
        "type": "p",
        "text": "Le coût de passation d’une commande est de 658,80 €."
      },
      {
        "type": "p",
        "text": "Le prix d’achat unitaire d’un livre de cette collection est de 12,80 €."
      },
      {
        "type": "p",
        "text": "Le coût de possession est de 18 € pour 100 € stockés pendant un an."
      },
      {
        "type": "p",
        "text": "On retient une année de 360 jours."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Déterminer le programme optimal d’approvisionnement en avenir certain et le stock optimal en avenir aléatoire"
      },
      {
        "type": "p",
        "text": "**1. Déterminer le programme optimal d’approvisionnement à conseiller au responsable des approvisionnements qui permet de minimiser le coût lié à la gestion du stock de bandes dessinées de la collection New20 dans un contexte où la pénurie est refusée.**"
      },
      {
        "type": "p",
        "text": "Le programme d’approvisionnement à appliquer est le modèle de Wilson :"
      },
      {
        "type": "p",
        "text": "– les consommations sont régulières et connues avec certitude ;"
      },
      {
        "type": "p",
        "text": "– la pénurie n’existe pas (on suppose qu’il n’y a jamais de retard de livraison ni d’augmentation de la consommation qui reste linéaire et constante) ;"
      },
      {
        "type": "p",
        "text": "– le tarif du fournisseur est fixe quelle que soit la quantité commandée ;"
      },
      {
        "type": "p",
        "text": "– le fournisseur est flexible et réactif ;"
      },
      {
        "type": "p",
        "text": "– il n’y a pas de stock de sécurité."
      },
      {
        "type": "p",
        "text": "En notant :C la quantité totale annuelle de bandes dessinées à approvisionner ;"
      },
      {
        "type": "p",
        "text": "C = consommation annuelle + reconstitution du stock"
      },
      {
        "type": "p",
        "text": "C = 900 000 + (35 000 – 20 000) = 915 000"
      },
      {
        "type": "p",
        "text": "K1 le coût de passation d’une commande ; K1 = 658,80 € ;"
      },
      {
        "type": "p",
        "text": "K2 le coût de possession ; K2 = 0,18 × 12,80 = 2,304 € ;"
      },
      {
        "type": "p",
        "text": "on construit le tableau suivant :"
      },
      {
        "type": "p",
        "text": "La formule de Wilson donne également directement la quantité optimale Q* à commander, égale à 22 875 unités."
      },
      {
        "type": "p",
        "text": "Le coût total annuel lié à la gestion du stock est donc 52 704 €."
      }
    ]
  }
];
