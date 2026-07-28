// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "A1",
    "title": "Golf du Bois",
    "statement": [
      {
        "type": "p",
        "text": "Implantée à l’orée du golf de Deauville, la PME Golf du Bois commercialise du matériel de golf (clubs, sacs, chaussures, accessoires divers…). Elle exerce son activité de négoce sur tout le territoire français et exporte même en Europe. Son dirigeant, M. Dubois, a décidé de se lancer dans l’assemblage de chariots qu’il commercialise sous la marque"
      },
      {
        "type": "p",
        "text": "« Golfybois », créée pour l’occasion. Un chariot de golf sert à transporter le sac du golfeur pesant entre 10 et 12 kg sur les 6 km que compte un parcours de 18 trous. Ce type de produits offre, selon M. Dubois, des perspectives de développement et de profitabilité intéressantes."
      },
      {
        "type": "p",
        "text": "En tant que contrôleur de gestion stagiaire, vous prenez l’initiative de mettre en place la méthode ABC."
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts et résultats du Golf du Bois selon la méthode choisie.**"
      },
      {
        "type": "p",
        "text": "**ANNEXE**"
      },
      {
        "type": "p",
        "text": "**Informations extraites de la comptabilité de gestion et complétées par le responsable de la division Golfybois**"
      },
      {
        "type": "ul",
        "items": [
          "Au cours de l’année, 1 000 chariots ont été fabriqués et vendus dont 836 modèles",
          "« Loisir ». Les prix de vente unitaires hors taxes ont été de 122 € pour le modèle",
          "« Loisir » et de 311 € pour le modèle « Intense ». Il n’y a eu ni stock initial, ni stock final de chariots."
        ]
      },
      {
        "type": "p",
        "text": "Les chariots sont assemblés à partir de diverses fournitures (tubes d’aluminium, roues, visserie, moteur, batterie, etc.) regroupées en six catégories (trois communes aux deux types de chariots et trois spécifiques au modèle électrique)."
      },
      {
        "type": "p",
        "text": "Ces fournitures sont achetées auprès de cinq fournisseurs (deux communs aux deux types de chariots et trois spécifiques au modèle électrique). Elles représentent un montant de charges directes de 18,30 € pour un modèle « Loisir » et un montant de 49,60 € pour un modèle « Intense »."
      },
      {
        "type": "p",
        "text": "L’entreprise travaille sans stocks de fournitures, s’approvisionnant au fur et à mesure de ses besoins."
      },
      {
        "type": "p",
        "text": "Le montage des chariots nécessite 0,5 heure de main-d’oeuvre directe pour un chariot classique et 1,5 heure pour un chariot électrique. Le coût d’une heure de maind’oeuvre directe est de 24,40 € charges comprises."
      },
      {
        "type": "p",
        "text": "**Analyse des charges indirectes de la division GO**"
      },
      {
        "type": "p",
        "text": "L’analyse approfondie que vous avez menée vous a permis de distinguer les activités réalisées dans chaque centre et d’en chiffrer le coût pour l’année en cours. Pour le centre « Approvisionnement » :"
      },
      {
        "type": "ul",
        "items": [
          "Négociation commerciale : 5 850,00 €.",
          "Gestion des commandes : 2 929,15 €.",
          "Gestion des composants : 2 937,45 €. Pour le centre « Assemblage » :",
          "Montage manuel : 12 549,60 €.",
          "Montage automatisé : 31 374,00 €.",
          "Contrôle qualité : 18 824,40 €. Pour le centre « Distribution » :",
          "Administration : 9 179,30 €.",
          "Expédition : 6 120,30 €."
        ]
      },
      {
        "type": "p",
        "text": "**Les inducteurs d’activités retenus sont les suivants :**"
      },
      {
        "type": "ul",
        "items": [
          "pour la négociation commerciale : le fournisseur ;",
          "pour la gestion des commandes : le montant des achats ;",
          "pour la gestion des composants : le nombre de références gérées ;",
          "pour le montage manuel : l’heure de main-d’oeuvre directe ;",
          "pour le montage automatisé : l’heure-machine ;",
          "pour le contrôle de qualité : le chariot contrôlé (avec prise en compte d’un coefficient d’équivalence pour les chariots électriques) ;",
          "pour l’administration : le coût de production des chariots vendus ;",
          "pour l’expédition : le poids des chariots livrés."
        ]
      },
      {
        "type": "p",
        "text": "L’assemblage automatisé a nécessité 1 328 heures-machine, à raison de 0,75 heure par chariot « Loisir », le reste des heures ayant été consommé par les chariots « Intense »."
      },
      {
        "type": "p",
        "text": "Le contrôle de qualité est exhaustif et un chariot électrique, compte tenu de sa sophistication et des normes de sécurité, nécessite un contrôle plus poussé qui requiert trois fois plus de temps qu’un chariot classique. Pour le contrôle, un chariot"
      },
      {
        "type": "p",
        "text": "« Intense » est donc considéré comme équivalent à trois chariots « Loisir ». Un chariot « Loisir » pèse 5 kg, alors qu’un chariot « Intense » pèse 15 kg. Enfin, il a été décidé que :"
      },
      {
        "type": "ul",
        "items": [
          "les frais de négociation commerciale relatives aux fournisseurs communs seraient répartis entre les deux modèles au prorata du nombre de chariots fabriqués ;",
          "les frais de gestion des composants communs seraient également répartis entre les deux modèles au prorata du nombre de chariots fabriqués.",
          "au vu de la comptabilité de gestion existante, il apparaît que le coût de production des chariots vendus s’élève à 114 100 €."
        ]
      },
      {
        "type": "p",
        "text": "On retient quatre décimales pour le calcul du coût unitaire des inducteurs."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer et interpréter les coûts et résultats du Golf du Bois selon la méthode choisie.**"
      },
      {
        "type": "p",
        "text": "Coûts des inducteurs sélectionnés"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Inducteur**",
          "**Volume**",
          "**Coût total**",
          "**Coût unitaire**",
          ""
        ],
        "rows": [
          [
            "**Négociation commerciale**",
            "Fournisseur",
            "5",
            "5 850,00",
            "1 170,00",
            "données"
          ],
          [
            "**Gestion des commandes**",
            "Montant des achats",
            "23 433,20",
            "2 929,15",
            "0,1250",
            "données"
          ],
          [
            "**Gestion des composants**",
            "Catégorie de fournitures",
            "6",
            "2 937,45",
            "489,575",
            "données"
          ],
          [
            "**Montage manuel**",
            "MOD",
            "664",
            "12 549,60",
            "18,900",
            "données"
          ],
          [
            "**Montage automatisé**",
            "Heure-machine",
            "1 328",
            "31 374,00",
            "23,6250",
            "données"
          ],
          [
            "**Contrôle de qualité**",
            "Chariot contrôlé",
            "1 328",
            "18 824,40",
            "14,1750",
            "836 l + (164 I × 3)"
          ],
          [
            "**Administration**",
            "Coût de production des chariots",
            "114 099,40",
            "9 179,30",
            "0,0805",
            ""
          ],
          [
            "**Expédition**",
            "Le poids des chariots livrés",
            "6 640",
            "6 120,30",
            "0,9217",
            "5 kg × 836 l + 164 I × 15 kg"
          ],
          [
            "**Total Charges indirectes**",
            "89 764,20",
            "–",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Coût de revient des deux modèles"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Loisir**",
          "**Intense**"
        ],
        "rows": [
          [
            "**Coût direct**",
            "",
            "30,5000",
            "",
            "86,2000"
          ],
          [
            "**Négo. commerciale (fourn. communs)**",
            "1 170 € × 2 fourn. /1 000 produits",
            "2,3400",
            "1 170 € × 2 fourn. /1 000 prod.",
            "2,3400"
          ],
          [
            "**Négo. commerciale (fourn. spécifiques)**",
            "–",
            "–",
            "1 170 € × 3 fourn./164 prod.",
            "21,4024"
          ],
          [
            "**Gestion des commandes**",
            "0,12 € × 18,30 € d’achats",
            "2,2875",
            "0,12 € × 49,60 € d’achats",
            "6,2000"
          ],
          [
            "**Gestion des composants communs**",
            "3 réf. × 489,57 € / 1 000 prod.",
            "1,4687",
            "3 réf. × 489,57 €/ 1 000 prod.",
            "1,4687"
          ],
          [
            "**Gestion des composants spécifiques**",
            "–",
            "–",
            "3 réf. × 489,57 €/164 prod",
            "8,9556"
          ],
          [
            "**Montage manuel**",
            "0,5 HMOD × 18,90 €",
            "9,4500",
            "1,5 HMOD × 18,90 €",
            "28,3500"
          ],
          [
            "**Montage automatisé**",
            "0,75 hm × 23,62 € et 0,75 HM × 836 l = 627 HM",
            "17,7188",
            "(1 328 HM – 627 HM) × 23,62 € /164 prod.",
            "100,9825"
          ],
          [
            "**Contrôle de qualité**",
            "1 produit de référence loisir",
            "14,1750",
            "14,175 × 3 l",
            "42,5250"
          ],
          [
            "**Total Coût de production**",
            "",
            "77,9400",
            "",
            "298,4242"
          ],
          [
            "**Administration**",
            "77,94 € × 0,0805",
            "6,2703",
            "298,42 € × 0,0805",
            "24,0082"
          ],
          [
            "**Expédition**",
            "5 kg × 0,9217 €",
            "4,6087",
            "15 kg × 0,9217",
            "13,8260"
          ],
          [
            "**Total Coût indirect**",
            "",
            "58,3189",
            "",
            "250,0584"
          ],
          [
            "**Coût de revient**",
            "88,8189",
            "",
            "336,2584"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat global"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Loisir**",
          "**Intense**",
          ""
        ],
        "rows": [
          [
            "**Prix de vente**",
            "122,00",
            "311,00",
            ""
          ],
          [
            "**Coût de revient**",
            "88,82",
            "336,26",
            ""
          ],
          [
            "**Résultat unitaire**",
            "33,180",
            "– 25,260",
            ""
          ],
          [
            "**Quantité**",
            "836",
            "164",
            "Total"
          ],
          [
            "**Résultat global**",
            "27 738,48",
            "– 4 142,64",
            "23 595,84"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Pertinence de la méthode ABC**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion"
      },
      {
        "type": "table",
        "headers": [
          "**De manière générale, pour la méthode ABC**"
        ],
        "rows": [
          [
            "**Intérêts**",
            "**Limites**"
          ],
          [
            "**• Une meilleure représentation de l’activité : représenter et structurer une organisation par les processus qu’elle pilote pour la multiplicité de ses « objets de coût ».• Repérer les activités réellement nécessaires pour le processus de transformation et l’obtention des produits.• Une meilleure réflexion sur les causes des coûts : élaborer des inducteurs de coûts traduisant fidèlement la variation des coûts, ainsi que la complexité des processus.• Circonscrire les phénomènes de subventionnement.• Permettre des calculs sur des temps différents du temps comptable.• Offrir une plus grande souplesse pour adapter les coûts en fonction des évolutions des processus de transformation.**",
            "• Une démarche longue et difficile : quelles activités délimiter ? avec quels inducteurs ? Plus le nombre d’activités augmente, plus le modèle est lourd à gérer ; mais avec peu d’activités, on risque de revenir à une hétérogénéité dans le coût des activités.• Une vision partielle des charges : il n’y a pas de solution spécifique pour les coûts de l’administration générale, qui peuvent être importants pour des activités de services et immatérielles. La méthode ABC propose de ne pas les intégrer dans le calcul des coûts."
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Méthode**•Afin d’analyser les intérêts d’une méthode dans un contexte donné, vous devez modéliser les coûts et vous poser les bonnes questions : les activités choisies et découpées représentent-elles bien le processus de l’entreprise ? Les inducteurs de coût sont-ils plus réalistes que les unités d’oeuvre de la méthode classique ? Les consommations des différentes activités sont-elles bien affectées aux objets de coûts ?•Afin d’évaluer les limites d’une méthode, vous devez systématiquement vous questionner sur :–la fiabilité et la stabilité des données ;–la multiplication des activités et des inducteurs (et, par conséquent, la complexité des calculs) ;–l’amélioration apportée aux seules charges indirectes des produits."
      },
      {
        "type": "p",
        "text": "**4 18 Mise en pratique autonome : Élec**"
      },
      {
        "type": "p",
        "text": "**Analyser les intérêts et limites des inducteurs utilisés, c’est-à-dire leur pertinence pour affecter les charges indirectes.**"
      },
      {
        "type": "p",
        "text": "Intérêts des inducteurs de coûts"
      },
      {
        "type": "p",
        "text": "Avec la méthode des centres d’analyse, les charges indirectes totales du service achat sont affectées aux produits selon le nombre de produits fabriqués ; on trouve le même coût pour les deux produits (70 € par produit) : la seule clé de répartition « volume fabriqué » ne représente pas bien la réalité de toutes les tâches réalisées pour acheter les composants aux fournisseurs car chaque produit n’a pas les mêmes besoins. Comme le coût pour les deux produits est identique, il est difficile pour le décideur de trouver des pistes pour réduire le coût ou améliorer le fonctionnement du service."
      },
      {
        "type": "p",
        "text": "Avec la méthode ABC, on peut repérer a trois activités différentes pour gérer les achats, ce qui est réaliste pour analyser le fonctionnement du service et l’améliorer. Les charges indirectes affectées aux deux produits sont alors différentes car la consommation de ressources n’est pas la même."
      },
      {
        "type": "p",
        "text": "Limites des inducteurs de coûts"
      },
      {
        "type": "p",
        "text": "L’inducteur de coût « nombre de lots » permet de bien répartir les charges ; en revanche on constate un décalage pour l’inducteur « nombre de fournisseurs » :"
      },
      {
        "type": "p",
        "text": "– on retrouve bien les 29 000 € de charges indirectes sur les deux produits avec la répartition des 82 lots traités entre 24 et 58 lots."
      },
      {
        "type": "p",
        "text": "– on ne retrouve pas les 20 000 € de charges indirectes sur les deux produits avec la répartition des fournisseurs puisqu’un produit n’utilise pas tous les fournisseurs. Dans la méthode du centre d’analyse, il y avait subventionnement du produit P2 au produit P1 puisqu’on affecte en fonction du volume produit et non du nombre de fournisseurs utilisés. Le composant C2 n’est utilisé que par P2, le produit supporte toute la charge ; le composant C1 est utilisé par les deux produits : il faudrait donc répartir la charge en fonction des quantités achetées aux fournisseurs et pas seulement le nombre de fournisseurs. On pourrait donc améliorer l’inducteur de coût de l’activité « négociation fournisseur » en intégrant un deuxième paramètre « quantité achetée », en plus du « nombre de fournisseurs » (inducteur mixte) ou en le remplaçant par un seul inducteur, « quantité achetée », ce qui réduirait la prise en compte des relations et de la gestion du nombre de fournisseurs."
      },
      {
        "type": "p",
        "text": "**Argumentaire**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "Méthode"
      },
      {
        "type": "p",
        "text": "Pour évaluer les résultats obtenus avec la méthode ABC, vous devez respecter les étapes suivantes :"
      },
      {
        "type": "p",
        "text": "1. Présenter le résultat global et les résultats par produit en resituant le contexte et les objectifs."
      },
      {
        "type": "p",
        "text": "2. Lister les analyses et commentaires en les regroupant par thèmes ou idées."
      },
      {
        "type": "p",
        "text": "3. Structurer la présentation écrite en fonction du poids des arguments retenus."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "Cas",
    "title": "Lux",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné.• Rédiger un argumentaire afin de conseiller le décideur"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Rédiger un argumentaire afin de conseiller M. Dubois sur le pilotage des coûts et la stratégie.**"
      },
      {
        "type": "p",
        "text": "L’entreprise dégage un résultat positif global de 23 595,84 € sur la commande globale, ce qui traduit une marge positive et un bon niveau de profitabilité."
      },
      {
        "type": "p",
        "text": "Le modèle Loisir fabriqué en grande quantité a un coût de revient inférieur au modèle Intense (88,82 €, contre 336,26 €). Le modèle Loisir est profitable (résultat de 33,80 € par modèle) tandis que le modèle Intense dégage une profitabilité négative de 25,26 € par unité. Les volumes du modèle Intense sont moins importants que ceux du modèle Loisir. Ceci permet à l’entreprise de dégager un résultat global positif de 23 595,84 €."
      },
      {
        "type": "p",
        "text": "Compte tenu des profitabilités respectives des deux produits, il peut être décidé le développement de la vente et de la production du modèle Loisir."
      },
      {
        "type": "p",
        "text": "Le système de calcul des coûts modélise le fonctionnement de l’entreprise et il est d’importance stratégique que cette représentation soit la plus pertinente possible pour servir d’aide à la décision."
      },
      {
        "type": "p",
        "text": "Il apparaît un éventuel effet de subventionnement sur le produit Intense au détriment de l’autre produit. Les résultats dépendent également du choix des inducteurs."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex3",
    "label": "Cas1",
    "title": "Lux",
    "statement": [
      {
        "type": "p",
        "text": "L’entreprise Lux est une PME de 30 personnes implantée en Auvergne."
      },
      {
        "type": "p",
        "text": "Elle conçoit, fabrique et vend des matériels d’éclairage à destination des grandes surfaces commerciales et des immeubles tertiaires."
      },
      {
        "type": "p",
        "text": "**Marché**"
      },
      {
        "type": "p",
        "text": "Les prix de vente des produits sont en baisse en raison d’importations massives en provenance de nouveaux pays où le coût de la main-d’oeuvre est beaucoup moins élevé. L’envol du coût de certaines matières premières augmente les prix des nombreux composants achetés. Certains clients pratiquent le système des « enchères inversées » sur Internet. Ils réunissent leurs fournisseurs potentiels autour d’un principe simple consistant à proposer le moins cher pour emporter le marché. En N–1, un grand compte a ainsi été perdu."
      },
      {
        "type": "p",
        "text": "**Processus productif**"
      },
      {
        "type": "p",
        "text": "À partir d’un cahier des charges arrêté avec le client, Lux achète les composants, effectue les opérations de peinture, câblage et assemblage. Elle travaille en juste-à-temps et en étroite collaboration avec ses fournisseurs et sous-traitants."
      },
      {
        "type": "p",
        "text": "**Objectifs**"
      },
      {
        "type": "p",
        "text": "Rompre avec la baisse continue depuis trois ans de sa marge brute. Le principal indicateur d’alerte de la direction est le « taux de marge brute », c’est-à-dire : (Chiffre d’affaires – Coût de production direct)/Chiffre d’affaires."
      },
      {
        "type": "p",
        "text": "**En N, l’entreprise envisage de délocaliser une partie de sa production :**"
      },
      {
        "type": "ul",
        "items": [
          "Dans un premier temps, le contrôleur de gestion vous demande votre appréciation sur les méthodes de calcul de coûts des produits de l’entreprise pour N.",
          "Dans un second temps, il sollicite votre avis pour confirmer des choix stratégiques importants relatifs aux produits, dictés par l’évolution rapide du marché."
        ]
      },
      {
        "type": "p",
        "text": "Soucieux d’améliorer la pertinence du calcul des coûts, le contrôleur de gestion vous remet les éléments d’une étude pour la construction d’un nouveau système de mesure fondé sur la méthode des coûts par activités (ABC) (annexes 1 à 6)."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et résultats analytiques unitaires des quatre produits à l’aide de la**"
      },
      {
        "type": "p",
        "text": "**méthode ABC.**"
      },
      {
        "type": "p",
        "text": "**2. Apprécier l’intérêt et les limites de la méthode de calcul de coûts ABC pour la prise de décision.**"
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller le dirigeant.**"
      },
      {
        "type": "p",
        "text": "**Projections N initiales dictées par le marché**"
      },
      {
        "type": "table",
        "headers": [
          "**Produits**",
          "**A**",
          "**B**",
          "**C**",
          "**D**"
        ],
        "rows": [
          [
            "**Quantités vendues**",
            "10 000",
            "15 000",
            "40 000",
            "35 000"
          ],
          [
            "**Prix de vente unitaire HT (€)**",
            "100",
            "58",
            "67",
            "132"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Budget des charges directes par produit**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**A**",
          "**B**",
          "**C**",
          "**D**"
        ],
        "rows": [
          [
            "**Coût direct des composants (€)**",
            "16",
            "21",
            "25",
            "46"
          ],
          [
            "**Main-d’œuvre directe (20 €/h)**",
            "0,8 h",
            "0,15 h",
            "0,2 h",
            "0,5 h"
          ],
          [
            "**Autres charges directes en €**",
            "–",
            "2,00",
            "1,00",
            "1,16"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Budget des charges indirectes**"
      },
      {
        "type": "table",
        "headers": [
          "**Centres**",
          "**Coût total (€)**",
          "**Nature de l’unité d’œuvre**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "1 542 500",
            "100 € de composants utilisés"
          ],
          [
            "**Ateliers**",
            "2 681 250",
            "Heures de main-d’œuvre directe"
          ],
          [
            "**Administration**",
            "917 000",
            "100 € de chiffre d’affaires"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Identification de six activités à l’issue de l’analyse des charges indirectes prévisionnelles de N**"
      },
      {
        "type": "table",
        "headers": [
          "**Activités**",
          "**Inducteurs de coûts**",
          "**Charges (€)**"
        ],
        "rows": [
          [
            "**Gestion des composants**",
            "Références des composants utilisés",
            "627 380"
          ],
          [
            "**Peinture**",
            "Lots de produits entrés en fabrication",
            "1 213 520"
          ],
          [
            "**Câblage**",
            "Heures de main-d’œuvre directe",
            "1 042 750"
          ],
          [
            "**Assemblage**",
            "Heures de main-d’œuvre directe",
            "852 000"
          ],
          [
            "**Gestion des clients**",
            "Nombre de livraisons",
            "623 100"
          ],
          [
            "**Administration**",
            "Références fabriquées",
            "782 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Organisation de la production**"
      },
      {
        "type": "table",
        "headers": [
          "**Modèles**",
          "**A**",
          "**B**",
          "**C**",
          "**D**"
        ],
        "rows": [
          [
            "**Production prévue en unités**",
            "10 000",
            "15 000",
            "40 000",
            "35 000"
          ],
          [
            "**Lots de 1 000 unités**",
            "10",
            "",
            "",
            "28"
          ],
          [
            "**Lots de 500 unités**",
            "",
            "",
            "80",
            "10"
          ],
          [
            "**Lots de 100 unités**",
            "",
            "150",
            "",
            "10"
          ],
          [
            "**Lots de 50 unités**",
            "",
            "",
            "",
            "20"
          ],
          [
            "**Nombre de livraisons**",
            "4",
            "30",
            "80",
            "20"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Imputation du coût de l’inducteur référence composant**"
      },
      {
        "type": "p",
        "text": "Le nombre de composants utilisés pour l’ensemble des quatre produits est de 30. Cet inducteur est imputé sur les produits utilisateurs du composant en tenant compte des volumes consommés et des produits concernés. À partir des nomenclatures, on obtient l’imputation par produits suivante (valeurs arrondies) :"
      },
      {
        "type": "table",
        "headers": [
          "**Modèles**",
          "**A**",
          "**B**",
          "**C**",
          "**D**"
        ],
        "rows": [
          [
            "**Coût unitaire imputé**",
            "1,80 €",
            "4,24 €",
            "2,43 €",
            "12,82 €"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et résultats analytiques unitaires des quatre produits à l’aide de la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "Calcul du coût direct et du taux de marge par produit"
      },
      {
        "type": "p",
        "text": "Il s’agit de calculer un taux de marge sur coût direct de fabrication."
      },
      {
        "type": "table",
        "headers": [
          "**Produits**",
          "**A**",
          "**B**",
          "**C**",
          "**D**",
          "**Total**"
        ],
        "rows": [
          [
            "**Prix de vente unitaire**",
            "100,00 €",
            "58,00 €",
            "67,00 €",
            "132,00 €",
            ""
          ],
          [
            "**Composants**",
            "16,00 €",
            "21,00 €",
            "25,00 €",
            "46,00 €",
            ""
          ],
          [
            "**Main-d’œuvre directe**",
            "16,00 €",
            "3,00 €",
            "4,00 €",
            "10,00 €",
            ""
          ],
          [
            "**Autres charges directes**",
            "0,00 €",
            "2,00 €",
            "1,00 €",
            "1,16 €",
            ""
          ],
          [
            "**Coût direct**",
            "32,00 €",
            "26,00 €",
            "30,00 €",
            "57,16 €",
            ""
          ],
          [
            "**Marge sur coût direct**",
            "68,00 €",
            "32,00 €",
            "37,00 €",
            "74,84 €",
            ""
          ],
          [
            "**Taux de marge sur coût direct**",
            "68,00 %",
            "55,17 %",
            "55,22 %",
            "56,70 %",
            ""
          ],
          [
            "**Quantité**",
            "10 000",
            "15 000",
            "40 000",
            "35 000",
            "100 000"
          ],
          [
            "**Marge totale sur produit**",
            "680 000",
            "480 000",
            "1 480 000",
            "2 619 400",
            "5 259 400"
          ],
          [
            "**Chiffre d’affaires**",
            "1 000 000",
            "870 000",
            "2 680 000",
            "4 620 000",
            "9 170 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour information :"
      },
      {
        "type": "p",
        "text": "•Total charges indirectes : 5 140 750 €"
      },
      {
        "type": "p",
        "text": "•Résultat : 118 650 €"
      },
      {
        "type": "p",
        "text": "Calcul du coût de chaque inducteur"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Inducteurs de coûts**",
          "**Charges en €**",
          "**Volume d’inducteurs**",
          "**Coût unitaire en €**"
        ],
        "rows": [
          [
            "**Gestion des composants**",
            "Références composants",
            "627 380",
            "30",
            "20 913"
          ],
          [
            "**Peinture**",
            "Lots de produits fabriqués",
            "1 213 520",
            "308",
            "3 940"
          ],
          [
            "**Câblage /assemblage**",
            "Heure de main-d’œuvre directe",
            "1 894 750",
            "35 750(1)",
            "53"
          ],
          [
            "**Gestion des clients**",
            "Nombre de livraisons",
            "623 100",
            "134",
            "4 650"
          ],
          [
            "**Administration**",
            "Modèles fabriqués",
            "782 000",
            "4",
            "195 500"
          ],
          [
            "**(1) 0,8 × 10 000 + 0,15 × 15 000 + etc.**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Calcul des coûts unitaires moyens de luminaires en ABC"
      },
      {
        "type": "table",
        "headers": [
          "**Produits**",
          "**A**",
          "**B**",
          "**C**",
          "**D**"
        ],
        "rows": [
          [
            "**Coût direct**",
            "32,00 €",
            "26,00 €",
            "30,00 €",
            "57,16 €"
          ],
          [
            "**Gestion des composants**"
          ],
          [
            "**Données unitaires fournies**",
            "1,80 €",
            "4,24 €",
            "2,43 €",
            "12,82 €"
          ],
          [
            "**Peinture**"
          ],
          [
            "**• Taille moyenne des lots (prod/nbre lots)**",
            "1 000",
            "100",
            "500",
            "515"
          ],
          [
            "**• Coût attribué**",
            "3,94 €",
            "39,40 €",
            "7,88 €",
            "7,65 €"
          ],
          [
            "**Câblage/assemblage**",
            "42,40 €",
            "7,95 €",
            "10,60 €",
            "26,50 €"
          ],
          [
            "**Gestion des clients**"
          ],
          [
            "**• Taille moyenne des livraisons**",
            "2 500",
            "500",
            "500",
            "1 750"
          ],
          [
            "**• Coût attribué**",
            "1,86 €",
            "9,30 €",
            "9,30 €",
            "2,66 €"
          ],
          [
            "**Administration**"
          ],
          [
            "**• Coût fixe par production**",
            "195 500 €",
            "195 500 €",
            "195 500 €",
            "195 500 €"
          ],
          [
            "**• Coût attribué (Coût fixe/Nbr de prods)**",
            "19,55 €",
            "13,03 €",
            "4,89 €",
            "5,59 €"
          ],
          [
            "**Coût attribuable**",
            "69,55 €",
            "73,92 €",
            "35,10 €",
            "55,22 €"
          ],
          [
            "**Coût de revient**",
            "101,55 €",
            "99,92 €",
            "65,10 €",
            "112,38 €"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Produit**",
          "**A**",
          "**B**",
          "**C**",
          "**D**",
          "**Total**"
        ],
        "rows": [
          [
            "**Prix de vente**",
            "100,00 €",
            "58,00 €",
            "67,00 €",
            "132,00 €",
            ""
          ],
          [
            "**Résultat unitaire**",
            "– 1,55 €",
            "– 41,92 €",
            "1,90 €",
            "19,62 €",
            ""
          ],
          [
            "**Taux de profitabilité**",
            "– 1,55 %",
            "– 72,28 %",
            "2,84 %",
            "14,86 %",
            ""
          ],
          [
            "**Quantité**",
            "10 000",
            "15 000",
            "40 000",
            "35 000",
            "100 000"
          ],
          [
            "**Résultat global**",
            "– 15 500",
            "– 628 800",
            "76 000",
            "686 700",
            "118 400"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de la méthode de calcul de coûts ABC pour la prise de décision.**"
      },
      {
        "type": "p",
        "text": "Intérêts"
      },
      {
        "type": "p",
        "text": "•Les cinq inducteurs de coûts choisis pour chaque activité sont bien représentatifs de ce qui déclenche le travail réel pour fabriquer les produits ; par exemple le nombre de livraisons pour gérer les clients."
      },
      {
        "type": "p",
        "text": "•Les activités et les inducteurs de coûts montrent quelles sont les marges de manoeuvre et sur quels paramètres prendre des décisions pour réduire les coûts. Lux voit que c’est l’activité peinture qui génère le plus de charges (1 213 520 €) et doit chercher des solutions."
      },
      {
        "type": "p",
        "text": "•La méthode fait apparaître deux produits A et B déficitaires."
      },
      {
        "type": "p",
        "text": "Limites"
      },
      {
        "type": "p",
        "text": "•Le calcul du transfert des montants de charges indirectes des centres d’analyse aux différentes activités peut être une limite ; par exemple sur quelles observations, quels critères les 1 542 500 € du centre approvisionnement sont répartis sur les activités ?"
      },
      {
        "type": "p",
        "text": "•Une autre limite porte sur la part des charges indirectes dans le coût total du produit ; la méthode ABC est pertinente si la part de ces charges est importante puisqu’elle n’améliore que ces charges : ici c’est vrai pour le produit A (32 € de coût direct et 69,55 € de coût indirect) mais moins pour le produit D (57,16 € de coût direct et 55,22 € de coût indirect). Il faut analyser le total des charges indirectes pour l’ensemble de l’organisation."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller le contrôleur de gestion quant à l’amélioration et l’utilisation de la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "L’argumentaire peut reprendre les points des intérêts et limites présentés auparavant."
      },
      {
        "type": "p",
        "text": "Pour améliorer l’utilisation de la méthode ABC, il semble pertinent de réfléchir et de trouver des évolutions sur les points suivants :"
      },
      {
        "type": "p",
        "text": "•Le choix des activités pour représenter le fonctionnement du processus de transformation : les cinq activités sont-elles bien représentatives du fonctionnement des services nécessaires au fonctionnement de la production ? Peut-on en trouver d’autres (par exemple gestion des stocks) ou en séparer certaines (par exemple cablage/assemblage) ? Il peut être utile d’observer le terrain et d’interroger le personnel pour faire évoluer le périmètre et le nombre des activités. Il faut qu’une activité rassemble des tâches homogènes."
      },
      {
        "type": "p",
        "text": "•Le choix des inducteurs de coûts : les cinq inducteurs avec un seul inducteur par activité sont-ils suffisants et pertinents ? Peut-on les remettre en cause ?"
      },
      {
        "type": "p",
        "text": "•La gestion des références permet de mieux tracer l’impact de la complexité des produits : ainsi le produit D est consommateur de plus de composants que les autres produits."
      },
      {
        "type": "p",
        "text": "•La gestion des lots introduit la prise en compte des conditions réelles et locales de fabrication : le produit B fabriqué en lots de petite taille se voit attribuer plus de charges que les autres produits dont la taille des lots est plus importante."
      },
      {
        "type": "p",
        "text": "•La prise en compte de l’inducteur « modèles fabriqués » permet de répartir les charges administratives (le plus souvent fixes) par parts égales sur chaque modèle : dans ce contexte, les produits des modèles fabriqués en grand volume reçoivent moins de charges à l’unité que ceux fabriqués en faible quantité. Seule une connaissance de l’entreprise peut dire si ce parti pris exprime une bonne traçabilité des coûts."
      },
      {
        "type": "p",
        "text": "•La gestion des clients est un inducteur qui traduit des conditions de livraisons spécifiques à chaque produit. Les produits livrés en faible quantité (nombreuses livraisons) supportent un coût de livraison unitaire plus élevé que ceux qui sont livrés en grande quantité. Ce choix considère implicitement que toutes les livraisons d’un produit sont de même taille ce que rien n’indique expressément. Si ce n’est pas le cas, les remarques formulées sur les mécanismes de subventionnement du fait de la prise en compte d’une taille moyenne de lot devraient s’appliquer ici."
      },
      {
        "type": "p",
        "text": "•L’inducteur « heures MOD » est, en fait, une unité d’oeuvre de nature volumique mais qui, ici, doit traduire la réalité des temps de gamme compte tenu de la variété de la production"
      },
      {
        "type": "p",
        "text": "•La fiabilité du montant des charges indirectes affectées aux activités : le montant total des charges indirectes de 5 140 750 € est-il bien réparti entre les cinq activités ? Une analyse des différents postes de charges de la comptabilité financière peut être menée pour mieux les isoler et les répartir sur les activités."
      },
      {
        "type": "p",
        "text": "Il y a donc plusieurs pistes possibles d’amélioration de la méthode ABC."
      }
    ]
  },
  {
    "id": "ex4",
    "label": "Cas2",
    "title": "Aquarun",
    "statement": [
      {
        "type": "p",
        "text": "Positionnée sur un marché régional à fort potentiel de développement, l’activité de la"
      },
      {
        "type": "p",
        "text": "société Aquarun, dirigée par son fondateur Yves Stinox, consiste à fabriquer des piscines et à les proposer aux promoteurs de maisons individuelles situées dans des lotissements. La stratégie de l’entreprise est axée sur quelques facteurs clés de succès spécifiques au produit et au marché :"
      },
      {
        "type": "p",
        "text": "– les modèles de piscines en PVC moulé et renforcé par une armature garantissent une longévité plus grande que les modèles concurrents ;"
      },
      {
        "type": "p",
        "text": "– le client promoteur est contacté en amont de la construction du lotissement et passe des contrats avant l’achèvement des maisons individuelles. Aquarun s’engage alors sur des délais de livraison précis."
      },
      {
        "type": "p",
        "text": "Plus récemment, Aquarun a cherché à diversifier son activité :"
      },
      {
        "type": "p",
        "text": "– en proposant des piscines construites selon d’autres technologies à de nouveaux types de clients ;"
      },
      {
        "type": "p",
        "text": "– en commercialisant une gamme de produits destinés à l’entretien des piscines."
      },
      {
        "type": "p",
        "text": "La société Aquarun fabrique trois modèles de piscines privatives à base de PVC moulé renforcé par une armature. La fabrication des piscines s’effectue à la demande des promoteurs et les stocks de piscine sont, en conséquence, réduits."
      },
      {
        "type": "p",
        "text": "Le processus de fabrication est structuré en trois étapes :"
      },
      {
        "type": "p",
        "text": "• Le service approvisionnement réceptionne et contrôle les matières et composants commandés : PVC, armatures d’acier, colorants pour peinture."
      },
      {
        "type": "p",
        "text": "• L’atelier Moulage utilise le PVC et l’armature d’acier pour fabriquer la coque armée. Les coques sont alors réparties selon les modèles commercialisés :"
      },
      {
        "type": "p",
        "text": "– les coques A et B sont dirigées vers l’atelier Peinture ;"
      },
      {
        "type": "p",
        "text": "– les coques C ne sont pas peintes avant d’être livrées aux distributeurs."
      },
      {
        "type": "p",
        "text": "• L’atelier Vernissage finalise les trois types de coque et procède à des contrôles de qualité. Le service de livraison se charge de l’acheminement des piscines vers les chantiers. Pour les devis, le contrôleur de gestion, en liaison directe avec l’ingénieur consultant chargé des méthodes de fabrication, a choisi de mettre en place une méthode d’évaluation des coûts standard fondée sur les coûts par activités. Les standards techniques ont été établis par le bureau des méthodes et un ingénieur consultant. Ils réunissent les données techniques présentées en annexe."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion souhaite appliquer la méthode ABC. Après avoir calculé le coût standard des inducteurs des différentes activités, il pense en déduire le coût de revient unitaire standard du modèle A en précisant le détail de chaque élément de coût."
      },
      {
        "type": "p",
        "text": "Yves Stinox est surpris du coût standard de revient obtenu par le contrôleur de gestion"
      },
      {
        "type": "p",
        "text": "(il obtient, selon la méthode des centres d’analyse, 6 800 € pour le modèle A). Il cherche à expliquer les raisons de cet écart et se demande également s’il doit continuer à fabriquer le modèle A sachant que son prix de vente est de 10 328 €."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "Au vu des annexes 1 à 3 et des souhaits d’Yves Stinox :"
      },
      {
        "type": "p",
        "text": "1. Calculer les coûts et résultats analytiques unitaires du modèle A par la méthode ABC."
      },
      {
        "type": "p",
        "text": "2. Apprécier l’intérêt et les limites de la méthode de calcul de coûts de la méthode ABC pour la prise de décision."
      },
      {
        "type": "p",
        "text": "3. Rédiger un argumentaire afin de conseiller le dirigeant."
      },
      {
        "type": "p",
        "text": "**Standards techniques par coque**"
      },
      {
        "type": "p",
        "text": "L’atelier de moulage, fortement mécanisé, utilise le PVC et fabrique les coques de piscine. Les coques passent ensuite en peinture, atelier artisanal où sont finalisés les produits pour le client."
      },
      {
        "type": "table",
        "headers": [
          "**Modèle Coques de piscine**",
          "**A**",
          "**B**",
          "**C**"
        ],
        "rows": [
          [
            "**Matière PVC**",
            "1 800 kg",
            "1 500 kg",
            "1 400 kg"
          ],
          [
            "**Armature**",
            "200 kg",
            "100 kg",
            "100 kg"
          ],
          [
            "**Main-d’œuvre directe au moulage**",
            "15 heures",
            "6 heures",
            "6 heures"
          ],
          [
            "**Heures-machine au moulage**",
            "15 heures",
            "6 heures",
            "6 heures"
          ],
          [
            "**Main-d’œuvre en peinture**",
            "3 heures",
            "2 heures",
            "–"
          ],
          [
            "**Peinture**",
            "15 litres",
            "10 litres",
            "–"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Standards de coûts unitaires**"
      },
      {
        "type": "p",
        "text": "Le service approvisionnement suit les achats nécessaires à la fabrication sur un semestre. Les cours des matières étant sujets à fluctuations, il procède à une moyenne qui servira de standard pour les mois suivants."
      },
      {
        "type": "table",
        "headers": [
          "**Coût unitaire du kg de PVC**",
          "1,50 €"
        ],
        "rows": [
          [
            "**Coût unitaire du kg d’armature**",
            "12 €"
          ],
          [
            "**Coût du litre de peinture**",
            "8 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le taux standard d’une heure productive par ouvrier de l’atelier moulage est de 24 € de l’heure."
      },
      {
        "type": "p",
        "text": "**Données sur les coûts prévisionnels des activités**"
      },
      {
        "type": "p",
        "text": "En collaboration avec le contrôle de gestion, l’étude basée sur les activités a donné les informations suivantes correspondent à la production et à la vente mensuelles prévisionnelles de 16 coques A, 55 coques B et 20 coques C."
      },
      {
        "type": "table",
        "headers": [
          "**Centres**",
          "**Activités**",
          "**Inducteurs de coût**",
          "**Charges mensuelles (€)**"
        ],
        "rows": [
          [
            "**Moulage**",
            "Changement de moule",
            "Nombre de lots produits (1)",
            "48 300"
          ],
          [
            "Introduction armature",
            "Nombre d’heures de MOD moulage",
            "11 730"
          ],
          [
            "**Peinture**",
            "Changement de couleur",
            "Nombre de couleurs (2)",
            "11 000"
          ],
          [
            "**Finition**",
            "Vernissage",
            "Nombre de coques produites",
            "13 650"
          ],
          [
            "**Livraison**",
            "Livraison",
            "Nombre de coques produites (3)",
            "14 742"
          ],
          [
            "**Administration**",
            "Gestion des fournisseurs",
            "Nombre de références (4)",
            "2 800"
          ],
          [
            "Gestion des clients",
            "Nombre de coques produites",
            "4 550"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(1) Le nombre de lots produits dépend du type de coques. Le modèle A est davantage adapté aux exigences"
      },
      {
        "type": "p",
        "text": "de la clientèle et lancé par série de 2. Le modèle B est réalisé par séries de 5 coques. L’ensemble des modèles C, entrée de gamme, est fabriqué en une seule série."
      },
      {
        "type": "p",
        "text": "(2) Il existe cinq couleurs. Les modèles A peuvent être peints en gris, bleu, blanc et vert ; les modèles B sont peints en gris, bleu, noir. Le modèle C n’est pas peint."
      },
      {
        "type": "p",
        "text": "Les inducteurs relatifs aux couleurs se répartissent comme suit : un modèle ne consomme qu’une fraction des références si la couleur est commune aux modèles. Ainsi, une demi-référence est retenue lorsque"
      },
      {
        "type": "p",
        "text": "la couleur est commune à deux modèles."
      },
      {
        "type": "p",
        "text": "(3) La livraison se fait à l’unité sur chaque chantier."
      },
      {
        "type": "p",
        "text": "(4) Une référence pour le PVC, une pour l’armature d’acier, une pour chaque couleur. Chaque référence est spécifique à un fournisseur. Le coût de cet inducteur sera attribué aux produits en fonction des volumes consommés par chaque production de modèles de piscine."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Apprécier les intérêts et limites de la méthode de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer les coûts et résultats analytiques unitaires du modèle A par la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "Plusieurs étapes sont essentielles pour calculer les coûts et résultats analytiques unitaires du modèle A par la méthode ABC :"
      },
      {
        "type": "p",
        "text": "Calcul du nombre d’ouvriers nécessaires à l’atelier moulage"
      },
      {
        "type": "p",
        "text": "Soit une activité normale mensuelle de 16 coques A, 55 coques B et 20 coques C :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Coque A**",
          "**Coque B**",
          "**Coque C**",
          "**Total**"
        ],
        "rows": [
          [
            "**Main-d’œuvre directe**",
            "15 h",
            "6 h",
            "6 h",
            "–"
          ],
          [
            "**Volume de production**",
            "16",
            "55",
            "20",
            "–"
          ],
          [
            "**Total HMOD**",
            "240 h",
            "330 h",
            "120 h",
            "690 h"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Ou annuellement [(16 × 15 h) + (55 ×6 h) + (20 × 6 h)] × 12 mois = 8 280 h nécessaires"
      },
      {
        "type": "p",
        "text": "Par ailleurs, le temps productif effectif est plus faible que le temps de présence (25 % de temps improductif) :"
      },
      {
        "type": "p",
        "text": "Temps productif mensuel = Temps productif annuel /12 × (1 – Temps improductif)"
      },
      {
        "type": "p",
        "text": "= 1 645/12 × 0,75 = 102,8125 h"
      },
      {
        "type": "p",
        "text": "Si, sur un mois la fabrication demande 690 h et qu’un ouvrier a un temps productif de 102,8125 h, il faut une équipe de :"
      },
      {
        "type": "p",
        "text": "690 h / 102,8125 h = 6,71 ouvriers soit 7 ouvriers"
      },
      {
        "type": "p",
        "text": "Calcul du taux standard d’une heure productive d’ouvrier de l’atelier moulage"
      },
      {
        "type": "p",
        "text": "Montant des salaires annuels (charges comprises) / Total annuel d’heures productives :"
      },
      {
        "type": "p",
        "text": "Calcul du coût standard des inducteurs des différentes activités"
      },
      {
        "type": "p",
        "text": "Comme certaines activités ont le même inducteur, il est possible de former un centre de regroupement de type « gestion des coques produites » qui regroupent les activités vernissage, livraison, gestion des clients."
      },
      {
        "type": "table",
        "headers": [
          "**Activités**",
          "**Coût total**",
          "**Nombre inducteurs**",
          "**Coût inducteur**"
        ],
        "rows": [
          [
            "**Changement de moule**",
            "48 300 €",
            "8 lots pour A, 11 lots pour B, 1 lot pour C : 20 lots",
            "2 415 €"
          ],
          [
            "**Introduction Armature**",
            "11 730 €",
            "Réponse question 1 = 690 h",
            "17 €"
          ],
          [
            "**Changement couleur**",
            "11 000 €",
            "Gris, bleu, blanc, noir et vert : 5 couleurs",
            "2 200 €"
          ],
          [
            "**Vernissage**",
            "13 650 €",
            "16 coques A, 55 coques B et 20 coques C : 91 unités",
            "362 €"
          ],
          [
            "**Livraison**",
            "14 742 €"
          ],
          [
            "**Gestion des clients**",
            "4 550 €"
          ],
          [
            "**Total**",
            "32 942 €"
          ],
          [
            "**Gestion fournisseurs**",
            "2 800 €",
            "PVC, armature et 5 couleurs : 7 références",
            "400 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Calcul du coût de revient unitaire standard du modèle A"
      },
      {
        "type": "table",
        "headers": [
          "**Charges directes**"
        ],
        "rows": [
          [
            "**Consommation de PVC**",
            "**1 800 kg × 1,50 €**",
            "**2 700,00 €**"
          ],
          [
            "**Consommation armature**",
            "200 kg × 12 €",
            "2 400,00 €"
          ],
          [
            "**Main-d’œuvre directe**",
            "15 h × 24 €",
            "360,00 €"
          ],
          [
            "**Consommation de peinture**",
            "15 litres × 8 €",
            "120,00 €"
          ],
          [
            "**Main-d’œuvre en peinture**",
            "3 h × 22 €",
            "66,00 €"
          ],
          [
            "**Coût direct**",
            "",
            "5 646,00 €"
          ],
          [
            "**Nb de lots produits**",
            "1 inducteur pour 2 coques A (2 415 € / 2 coques)",
            "1 207,50 €"
          ],
          [
            "**Nb d’heures moulage**",
            "15 h pour introduire l’armature × 17 €",
            "255,00 €"
          ],
          [
            "**Nb de couleurs**",
            "Couleurs gris et bleu sert à coque A et coque B et blanc et vert uniquement pour coque A[2 200 € × (2 × 1/2 référence + 2 référence)] / 16 coques A",
            "412,50 €"
          ],
          [
            "**Nb de coques produites**",
            "362 € × 1 coque",
            "362,00 €"
          ],
          [
            "**Nb de références**",
            "Voir tableau ci-après",
            "70,04 €"
          ],
          [
            "**Coût attribuable**",
            "2 307,04 €"
          ],
          [
            "**Coût de revient standard unitaire**",
            "7 953,04 €"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Référence**",
          "**A**",
          "**B**",
          "**C**",
          "**Total**",
          "**Coût unitaire**"
        ],
        "rows": [
          [
            "**Nombre de produits**",
            "16",
            "55",
            "20",
            "91",
            ""
          ],
          [
            "**PVC**",
            "OUI",
            "OUI",
            "OUI",
            "91",
            "400/91 = 4,39 €"
          ],
          [
            "**Armature**",
            "OUI",
            "OUI",
            "OUI",
            "91",
            "400/91 = 4,39 €"
          ],
          [
            "**Gris**",
            "OUI",
            "OUI",
            "NON",
            "71",
            "400/71 = 5,63 €"
          ],
          [
            "**Bleu**",
            "OUI",
            "OUI",
            "NON",
            "71",
            "400/71 = 5,63 €"
          ],
          [
            "**Blanc**",
            "OUI",
            "NON",
            "NON",
            "16",
            "400/16 = 25,00 €"
          ],
          [
            "**Noir**",
            "NON",
            "OUI",
            "NON",
            "55",
            "400/55 = 7,27 €"
          ],
          [
            "**Vert**",
            "OUI",
            "NON",
            "NON",
            "16",
            "400/16 = 25,00 €"
          ],
          [
            "**Coût imputé par coque**",
            "70,04 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Résultat obtenu"
      },
      {
        "type": "p",
        "text": "Prix de vente = 10 328 €"
      },
      {
        "type": "p",
        "text": "Résultat = Prix de vente – Coûts"
      },
      {
        "type": "p",
        "text": "Résultat = 10 328 – 7 953,04 = 2 374,96 €"
      },
      {
        "type": "p",
        "text": "**2. Apprécier l’intérêt et les limites de la méthode de calcul de coûts ABC pour la prise de décision.**"
      },
      {
        "type": "p",
        "text": "Intérêts"
      },
      {
        "type": "p",
        "text": "•Les sept activités représentent mieux le fonctionnement de l’organisation pour fabriquer les trois produits. Ce sont ces activités que consomment les trois produits."
      },
      {
        "type": "p",
        "text": "•Les activités peuvent être gérées plus précisément : par exemple l’activité « vernissage » peut être améliorée en agissant sur le fournisseur, sur la matière première, etc."
      },
      {
        "type": "p",
        "text": "•Les inducteurs de coûts sont plus diversifiés que les UO uniquement volumiques et permettent de mieux affecter la consommation des ressources aux produits : par exemple, en fonction du nombre de couleurs nécessaires pour un produit (quatre couleurs pour A, trois couleurs pour B)."
      },
      {
        "type": "p",
        "text": "Limites"
      },
      {
        "type": "p",
        "text": "•Plusieurs activités ont le même inducteur de coût : par exemple, nombre de coques produits pour l’activité administration mais aussi finition et livraison. Est-ce pertinent ? Cela conduit à des regroupements de charges qui peuvent cacher des différences de traitement des produits."
      },
      {
        "type": "p",
        "text": "•Il faut analyser la répartition des charges indirectes totales sur les activités : sur quel critère sont-elles affectées ? Il peut y avoir de l’approximation qui biaise les résultats."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller le dirigeant pour le modèle A.**"
      },
      {
        "type": "p",
        "text": "Aquarun est une entreprise industrielle qui fabrique des piscines. Le dirigeant a opté pour une stratégie de diversification en se développant sur le créneau des produits liés à l’achat d’une piscine. Il souhaite que son contrôleur de gestion applique une nouvelle méthode de calcul des coûts, la méthode ABC. L’étude se concentrera principalement sur le modèle A."
      },
      {
        "type": "p",
        "text": "L’entreprise dégage un résultat positif global de 2 374,96 € sur le produit A, ce qui traduit une marge positive et un niveau convenable de profitabilité. Pour rappel, avec la méthode des centres d’analyse, le contrôleur de gestion obtenait un coût de revient de 6 800 €, soit un résultat de 3 528 €. Avec la méthode ABC le contrôleur de gestion fait appel à des inducteurs de coûts pas uniquement volumiques. Il introduit l’impact :"
      },
      {
        "type": "p",
        "text": "– des conditions de fabrication par l’intermédiaire des inducteurs de lots (la piscine A est fabriquée en lots de petite taille) ;"
      },
      {
        "type": "p",
        "text": "– des conditions de complexité des produits par l’intermédiaire des inducteurs de gestion de références et des changements de couleurs (nombreuses couleurs pour les coques de type A)."
      },
      {
        "type": "p",
        "text": "Il y avait sans doute des effets de subventionnement (nombre de lots, nombre de références, nombre de couleurs). Le modèle A était subventionné par les autres modèles de piscine."
      },
      {
        "type": "p",
        "text": "Compte tenu du niveau de profitabilité du produit A, il est souhaitable d’en poursuivre la production. Il est profitable avec les deux méthodes de coûts complets (centres d’analyse et ABC). Enfin, il est fortement recommandé que le contrôleur de gestion applique la méthode ABC à l’ensemble de la gamme pour préparer un dossier complet d’éclairage des décisions du directeur général."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "Cas",
    "title": "Netplus",
    "difficulty": 3,
    "durationMin": 60,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argument afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "La société Netplus, créée en 2005 à Grenoble, évolue dans le secteur de la Vidéo à la Demande (VOD)."
      },
      {
        "type": "p",
        "text": "Ce secteur s’est développé au cours des dernières années grâce à l’évolution de la technologie numérique et au développement des réseaux à très haut débit."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion n’est pas satisfait par la méthode actuelle de répartition des charges indirectes, il pense que les résultats calculés sur les abonnés professionnels et les clients occasionnels sont erronés et souhaite mettre en œuvre la comptabilité analytique par activités."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter, selon la méthode ABC, le coût de revient unitaire du visionnage d’une vidéo faite par un abonné « particulier ». Arrondir chaque coût unitaire à la quatrième décimale.*"
      },
      {
        "type": "p",
        "text": "*2. Rédiger un argumentaire en commentant les différences obtenues avec la méthode des centres d’analyse (Cas Netplus, chapitre « Méthode des coûts complets »).*"
      },
      {
        "type": "p",
        "text": "**Document — Société Netplus : informations complémentaires pour mettre en place la méthode ABC**"
      },
      {
        "type": "p",
        "text": "***Détails de l’activité de l’entreprise Netplus***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Abonnés professionnels**",
          "**Abonnés particuliers**",
          "**Clients occasionnels**"
        ],
        "rows": [
          [
            "**Nombre de visionnages dans le premier mois de l’entrée de la vidéo au catalogue**",
            "30 000",
            "40 000",
            "20 000"
          ],
          [
            "**Nouveaux abonnés**",
            "200",
            "20 000",
            ""
          ],
          [
            "**Nombre de visionnages d’une bande annonce**",
            "15 000",
            "500 000",
            "10 000"
          ],
          [
            "**Appel à la hotline**",
            "50",
            "5 000",
            ""
          ],
          [
            "",
            "**Activités**",
            "**Technologie**",
            "**Édition/Marketing**",
            "**Frais généraux**",
            "**Inducteur**"
          ],
          [
            "**A1**",
            "Visionnage d’une vidéo",
            "330 000 €",
            "324 000 €",
            "",
            "Vidéos visionnées"
          ],
          [
            "**A2**",
            "Gestion des clients particuliers",
            "",
            "152 000 €",
            "",
            "Nombre d’abonnés particuliers"
          ],
          [
            "**A3**",
            "Gestion des clients professionnels",
            "",
            "152 000 €",
            "",
            "Nombre d’abonnés professionnels"
          ],
          [
            "**A4**",
            "Recherche de nouvelles vidéos à diffuser",
            "",
            "324 000 €",
            "",
            "Nombre de visionnages dans le premier mois de l’entrée au catalogue"
          ],
          [
            "**A5**",
            "Création d’un nouvel abonnement",
            "",
            "",
            "225 000 €",
            "Nouvel abonné"
          ],
          [
            "**A6**",
            "Prospect des futurs clients",
            "",
            "324 000 €",
            "",
            "Nouvel abonné"
          ],
          [
            "**A7**",
            "Écriture d’une bande annonce",
            "20 000 €",
            "152 000 €",
            "",
            "Visionnage d’une bande annonce"
          ],
          [
            "**A8**",
            "Frais de hotline",
            "60 000 €",
            "",
            "",
            "Appel d’un abonné à la hotline"
          ],
          [
            "**A9**",
            "Signature d’un contrat de diffusion des vidéos",
            "",
            "152 000 €",
            "",
            "Nouvel abonné"
          ],
          [
            "**A10**",
            "Frais de structure",
            "",
            "",
            "2 515 000 €",
            "Coût ajouté"
          ],
          [
            "**Total**",
            "410 000 €",
            "1 620 000 €",
            "2 740 000 €",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le coût ajouté correspond aux charges indirectes hors frais de structure."
      },
      {
        "type": "p",
        "text": "***Calculs de coûts effectués pour le mois de janvier N (méthode ABC)***"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Abonné professionnel**",
          "**Abonné particulier**",
          "**Client occasionnel**"
        ],
        "rows": [
          [
            "**Coût de revient unitaire du visionnage d’une vidéo**",
            "2,1333 €",
            "À déterminer",
            "1,6850 €"
          ]
        ]
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Rédiger un argument afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter, selon la méthode ABC, le coût de revient unitaire du visionnage d’une vidéo faite par un abonné « particulier ». Arrondir chaque coût unitaire à la quatrième décimale.**"
      },
      {
        "type": "table",
        "headers": [
          "**Inducteurs**",
          "**Nombre d’inducteurs**",
          "**Coût total (en €)**",
          "**Coût de l’inducteur (en €)**"
        ],
        "rows": [
          [
            "**Vidéos visionnées**",
            "15 880 000",
            "654 000",
            "0,0412"
          ],
          [
            "**Nombre d’abonnés particuliers**",
            "1 250 000",
            "162 000",
            "0,1296"
          ],
          [
            "**Nombre d’abonnés professionnels**",
            "12 000",
            "162 000",
            "13,5000"
          ],
          [
            "**Nombre de visionnages dans le premier mois de l’entrée au catalogue**",
            "90 000",
            "324 000",
            "3,6000"
          ],
          [
            "**Nouvel abonné**",
            "20 200",
            "711 000",
            "35,1980"
          ],
          [
            "**Visionnage d’une bande annonce**",
            "525 000",
            "182 000",
            "0,3467"
          ],
          [
            "**Appel d’un abonné à la hotline**",
            "5 050",
            "60 000",
            "11,8812"
          ],
          [
            "**Coût ajouté**",
            "2 255 000",
            "2 515 000",
            "1,1153"
          ],
          [
            "**TOTAL**",
            "–",
            "4 770 000",
            "–"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Q**",
          "**CU (en €)**",
          "**M (en €)**"
        ],
        "rows": [
          [
            "**Charges directes**",
            "15 200 000",
            "0,7997",
            "12 155 440"
          ],
          [
            "**Charges indirectes**",
            "",
            "",
            ""
          ],
          [
            "**Vidéos visionnées**",
            "15 200 000",
            "0,0412",
            "626 240"
          ],
          [
            "**Nombre d’abonnés particuliers**",
            "1 250 000",
            "0,1296",
            "162 000"
          ],
          [
            "**Nombre d’abonnés professionnels**",
            "–",
            "13,5000",
            "–"
          ],
          [
            "**Nombre de visionnages dans le premier mois de l’entrée au catalogue**",
            "40 000",
            "3,6000",
            "144 000"
          ],
          [
            "**Nouvel abonné**",
            "20 000",
            "35,1980",
            "703 960"
          ],
          [
            "**Visionnage d’une bande annonce**",
            "500 000",
            "0,3467",
            "173 350"
          ],
          [
            "**Appel d’un abonné à la hotline**",
            "5 000",
            "11,8812",
            "59 406"
          ],
          [
            "**Coût ajouté**",
            "1 868 956",
            "1,1153",
            "2 084 447"
          ],
          [
            "**Total charges indirectes**",
            "–",
            "–",
            "3 953 403"
          ],
          [
            "**Coût de revient**",
            "15 200 000",
            "1,0598",
            "16 108 843"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Particulier**",
          "**Professionnel**",
          "**1 vidéo**",
          "**Total**"
        ],
        "rows": [
          [
            "**CA (en €)**",
            "16 750 000",
            "600 000",
            "200 000",
            "17 550 000"
          ],
          [
            "**Coût de revient (en €)**",
            "16 108 843",
            "1 023 973",
            "337 007",
            "17 457 532"
          ],
          [
            "**Résultat (en €)**",
            "641 157",
            "– 423 973",
            "– 137 007",
            "80 177"
          ],
          [
            "**Taux de profitabilité**",
            "3,83 %",
            "– 70,66 %",
            "– 68,50 %",
            "0,46 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Rédiger un argumentaire en commentant les différences obtenues avec la méthode des centres d’analyse (cf. cas 10 du chapitre 4).**"
      },
      {
        "type": "p",
        "text": "Pour rappel, les résultats obtenus avec la méthode des centres d’analyse sont :"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Particuliers**",
          "**Professionnels**",
          "**1 vidéo**",
          "**Total**"
        ],
        "rows": [
          [
            "**CA (en €)**",
            "16 750 000",
            "600 000",
            "200 000",
            "17 550 000"
          ],
          [
            "**Coût de revient (en €)**",
            "16 766 900",
            "505 296",
            "196 320",
            "17 468 516"
          ],
          [
            "**Résultat (en €)**",
            "– 16 900",
            "94 704",
            "3 680",
            "81 484"
          ],
          [
            "**Taux de profitabilité**",
            "– 0,10 %",
            "15,78 %",
            "1,84 %",
            "0,46 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Rappel du contexte"
      },
      {
        "type": "p",
        "text": "La société Netplus propose ses services dans le secteur de la vidéo à la demande (VoD). Le contrôleur de gestion n’est pas satisfait par la méthode actuelle de répartition des charges indirectes, il pense que les résultats calculés sur les abonnés professionnels et les clients occasionnels sont erronés et souhaite mettre en oeuvre la comptabilité analytique par activités."
      },
      {
        "type": "p",
        "text": "**Remarque***Justification des divergences de résultats entre les deux modèles de calcul des coûts*"
      },
      {
        "type": "p",
        "text": "Les arrondis n’ont pas permis de trouver exactement le même résultat avec les deux méthodes. La méthode ABC s’appuie sur les activités. Les coûts de toutes les activités sont ensuite affectés directement aux objets de coûts."
      },
      {
        "type": "p",
        "text": "La méthode ABC est mieux adaptée au contrôle de gestion de la production d’un service. Les processus avec les activités qui en découlent sont pris en compte. Dans le cas de l’entreprise Netplus, la méthode ABC intègre, dans le calcul des coûts, de nombreux inducteurs."
      },
      {
        "type": "p",
        "text": "Ici, les résultats sont différents entre la méthode des coûts complets par les centres d’analyse et la méthode ABC. La branche « particulier » qui était déficitaire avec la première méthode est devenue largement profitable avec la méthode ABC."
      },
      {
        "type": "p",
        "text": "**Remarque***Effets de subventionnement*"
      },
      {
        "type": "p",
        "text": "Il existe des effets de subventionnement. Les ventes aux abonnés professionnels et aux clients occasionnels étaient subventionnées par celles aux abonnés particuliers. En effet, pour les clients particuliers, le résultat global est passé de – 16 900 € à 641 157 €. Pour les clients professionnels et occasionnels, les résultats ont fondu."
      },
      {
        "type": "p",
        "text": "**Remarque***Choix d’inducteurs pertinents*"
      },
      {
        "type": "p",
        "text": "Le coût ajouté n’est pas un inducteur pertinent puisqu’il dépend directement d’autres coûts. Les frais de structure sont importants. Pourtant, les inducteurs ne prennent pas bien en compte cet aspect. La pertinence de prendre en compte les nouveaux abonnés est également discutable."
      },
      {
        "type": "p",
        "text": "**Remarque***Conclusion*"
      },
      {
        "type": "p",
        "text": "Le dirigeant de la société Netplus pourra, avec la mise en place d’une méthode ABC, mieux tenir compte des contraintes liées à la production de services. Il pourrait être envisageable d’amplifier l’étude sur les activités."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "Cas",
    "title": "Fonéa",
    "difficulty": 3,
    "durationMin": 60,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argument afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "Fonéa (FOrmation, NÉgociation en Achats) est une société anonyme qui a été créée en septembre 2012 par Daniel Goulard et dont le siège social est situé en région parisienne. Après avoir passé 20 ans en tant que manager des achats dans différents groupes, il a créé cette société, qui a pour objet d’offrir des formations qualifiantes pour les professionnels des achats."
      },
      {
        "type": "p",
        "text": "Avant d’envisager la mise en place de nouvelles formations, monsieur Goulard souhaite d’abord s’assurer de la profitabilité des formations actuelles."
      },
      {
        "type": "p",
        "text": "Jusqu’à présent, le comptable de l’entreprise, qui n’est pas un spécialiste du contrôle de gestion et qui dispose de très peu de temps pour effectuer cette tâche, avait utilisé la méthode des centres d’analyse pour déterminer un coût complet de chacune des deux formations afin de comparer leur profitabilité."
      },
      {
        "type": "p",
        "text": "Ayant des doutes sur les résultats obtenus, vous vous interrogez sur l’intérêt de mettre en place une évaluation des coûts basée sur la méthode des coûts par activités (ABC)."
      },
      {
        "type": "p",
        "text": "Cependant, vous devez vous assurer du bien-fondé de la mise en place de cette nouvelle démarche et justifier de son intérêt auprès de monsieur Goulard. Vous envisagez d’effectuer une comparaison des résultats obtenus avec chacune des formations afin de le conseiller objectivement sur la profitabilité de chacune d’entre elles."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter les coûts et les résultats analytiques unitaires de chacune des formations à l’aide de la méthode ABC.*"
      },
      {
        "type": "p",
        "text": "*2. Énoncer les deux principaux intérêts et les deux principales limites de cette méthode de calcul de coûts dont la mise en place est envisagée, dans le cadre du contexte de Fonéa.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger un argumentaire, en une page et demie environ, afin de conseiller monsieur Goulard, au regard du taux de profitabilité des formations, sur la méthode à utiliser et conclure sur les décisions à prendre quant au maintien ou non des formations proposées.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Analyse de la profitabilité par la méthode des centres d’analyse**"
      },
      {
        "type": "p",
        "text": "Les résultats des travaux du comptable (à partir de la méthode des centres d’analyse) sont les suivants."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Résultats**",
            "44 550 €",
            "1 350 €"
          ],
          [
            "**Taux de profitabilité**",
            "3,07 %",
            "0,61 %"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour la répartition des charges indirectes, une seule assiette de frais a été utilisée : le chiffre d’affaires réalisé."
      },
      {
        "type": "p",
        "text": "**Document 2 — Données relatives aux prestations vendues en 2019**"
      },
      {
        "type": "p",
        "text": "Le prix facturé aux clients est fonction des spécificités de la formation."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Tarifs**",
          "**Durée d’une formation (en jours)**"
        ],
        "rows": [
          [
            "**Manager des achats**",
            "11 000 €",
            "50"
          ],
          [
            "**Certification acheteur**",
            "5 500 €",
            "16"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour l’ensemble des centres de formation, les prestations réalisées ont été les suivantes."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Nombre de formations**",
          "**Nombre moyen d’auditeurs inscrits (*)**",
          "**Nombre d’heures de formation par jour**"
        ],
        "rows": [
          [
            "**Manager des achats**",
            "11",
            "12",
            "7"
          ],
          [
            "**Certification acheteur**",
            "4",
            "10",
            "6"
          ]
        ]
      },
      {
        "type": "p",
        "text": "(*) On appelle auditeur une personne inscrite à une formation."
      },
      {
        "type": "p",
        "text": "**Document 3 — Charges directes inhérentes aux prestations vendues en 2019**"
      },
      {
        "type": "p",
        "text": "Le coût de gestion d’un contrat et les fournitures diverses pour un auditeur a été estimé par le comptable."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Gestion des contrats**",
            "2 000 €",
            "1 200 €"
          ],
          [
            "**Fournitures diverses**",
            "1 000 €",
            "800 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les formateurs interviennent toujours sur une journée complète."
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "**Rémunération pour une journée**",
            "450 €",
            "400 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 4 — Données relatives aux différentes activités**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Activités**",
          "**Inducteurs de coûts**",
          "**Charges annuelles (en €)**"
        ],
        "rows": [
          [
            "**A1**",
            "Prospection commerciale",
            "Nombre de contacts",
            "62 000"
          ],
          [
            "**A2**",
            "Organisation des salons",
            "Nombre de salons",
            "80 000"
          ],
          [
            "**A3**",
            "Location de salles",
            "Nombre d’heures de formation dans les salles louées",
            "100 000"
          ],
          [
            "**A4**",
            "Maintenance informatique",
            "Nombre de jours de formation pour l’ensemble des formations",
            "30 700"
          ],
          [
            "**A5**",
            "Conception de plaquettes",
            "Nombre de contacts",
            "7 000"
          ],
          [
            "**A6**",
            "Gestion administrative",
            "Nombre de régions",
            "600 000"
          ],
          [
            "**Total**",
            "879 700"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pour développer ses ventes et accroître sa notoriété, les commerciaux de l’entreprise participent à des salons d’information sur les formations. Les coordonnées de toutes les personnes demandant des renseignements sur le stand sont répertoriées afin d’assurer un suivi commercial."
      },
      {
        "type": "p",
        "text": "***Nombre de contacts moyen par salon pour 2019***"
      },
      {
        "type": "table",
        "headers": [
          "**Régions**",
          "**Nombre de salons**",
          "**Nombre de contacts pour Manager des achats**",
          "**Nombre de contacts pour Certification acheteur**"
        ],
        "rows": [
          [
            "**Île-de-France**",
            "5",
            "60",
            "20"
          ],
          [
            "**Auvergne-Rhône-Alpes**",
            "2",
            "50",
            "10"
          ],
          [
            "**Grand-Est**",
            "1",
            "40",
            "Formation non présentée dans les salons"
          ],
          [
            "**Nouvelle Aquitaine**",
            "1",
            "70"
          ],
          [
            "**Provence-Alpes-Côte-d’Azur**",
            "1",
            "60"
          ],
          [
            "**Nombre total de contacts pour l’ensemble des salons**",
            "570",
            "120"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Lorsque les deux formations participent à un salon, il a été décidé de pondérer à 75 % le calcul des inducteurs correspondants pour la formation « Manager des achats » et à 25 % pour la formation « Certification ». Cette pondération s’applique aussi pour le calcul des inducteurs liés aux régions. Cette règle a été établie en raison du poids différent de chacune des formations dans le chiffre d’affaires."
      },
      {
        "type": "p",
        "text": "Les locaux des différentes antennes ne permettent pas toujours d’accueillir l’ensemble des groupes. C’est pourquoi l’entreprise a négocié des locations de salles à proximité. Les salles louées font l’objet d’un contrat global négocié pour l’année en fonction des plannings établis pour la formation."
      },
      {
        "type": "p",
        "text": "***Nombre d’heures de formation effectuées dans des salles louées***"
      },
      {
        "type": "table",
        "headers": [
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "450",
            "50"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La maintenance informatique est nécessaire quel que soit l’endroit de la formation car les auditeurs disposent d’ordinateurs portables prêtés par l’entreprise en raison de l’utilisation de progiciels spécifiques. Par ailleurs, les formateurs mettent à disposition l’ensemble des supports sur un espace partagé sur Internet."
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argument afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et les résultats analytiques unitaires de chacune des formations à l’aide de la méthode ABC.**"
      },
      {
        "type": "table",
        "headers": [
          "**Inducteurs**",
          "**Activités**",
          "**Ressources consommées**",
          "**Nombre d’inducteurs**",
          "**Coût de l’inducteur**"
        ],
        "rows": [
          [
            "**Nombre de contacts**",
            "Prospection commerciale",
            "62 000",
            "",
            ""
          ],
          [
            "Conception de plaquettes",
            "7 000",
            "",
            ""
          ],
          [
            "Sous-total",
            "69 000",
            "570 + 120 = 690",
            "100,00"
          ],
          [
            "**Nombre de salons**",
            "Organisation de salons",
            "80 000",
            "10",
            "8 000,00"
          ],
          [
            "**Nombre d’heures de formation**",
            "Location de salles",
            "100 000",
            "450 + 50 = 500",
            "200,00"
          ],
          [
            "**Nombre de jours de formation**",
            "Maintenance informatique",
            "30 700",
            "50 × 11 + 16 × 4 = 614",
            "50,00"
          ],
          [
            "**Nombre de régions**",
            "Gestion administrative",
            "600 000",
            "5",
            "120 000,00"
          ],
          [
            "",
            "Total",
            "879 700",
            "",
            ""
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Manager des achats**",
          "**Certification acheteur**"
        ],
        "rows": [
          [
            "",
            "Q",
            "CU",
            "Montant",
            "Q",
            "CU",
            "Montant"
          ],
          [
            "**CA**",
            "11 × 12 = 132",
            "11 000",
            "1 452 000",
            "40",
            "5 500",
            "220 000"
          ],
          [
            "**Gestion des contrats**",
            "132",
            "2 000",
            "264 000",
            "40",
            "1 200",
            "48 000"
          ],
          [
            "**Fournitures diverses**",
            "132",
            "1 000",
            "132 000",
            "40",
            "800",
            "32 000"
          ],
          [
            "**Rémunération**",
            "11 × 50 = 550",
            "450",
            "247 500",
            "64",
            "400",
            "25 600"
          ],
          [
            "**Total Charges directes**",
            "",
            "",
            "643 500",
            "",
            "",
            "105 600"
          ],
          [
            "**Nombre de contacts**",
            "570",
            "100",
            "57 000",
            "120",
            "100",
            "12 000"
          ],
          [
            "**Nombre de salons**",
            "(5 + 2) × 75 % + 3 = 8,25",
            "8 000",
            "66 000",
            "1,75",
            "8 000",
            "14 000"
          ],
          [
            "**Nombre d’heures de formation**",
            "450",
            "200",
            "90 000",
            "50",
            "200",
            "10 000"
          ],
          [
            "**Nombre de jours de formation**",
            "550",
            "50",
            "27 500",
            "64",
            "50",
            "3 200"
          ],
          [
            "**Nombre de régions**",
            "2 × 75 % + 3 = 4,50",
            "120 000",
            "540 000",
            "0,50",
            "120 000",
            "60 000"
          ],
          [
            "**Total Charges indirectes**",
            "",
            "",
            "780 500",
            "",
            "",
            "99 200"
          ],
          [
            "**Résultats analytiques**",
            "",
            "",
            "28 000",
            "",
            "",
            "15 200"
          ],
          [
            "**Taux de profitabilité**",
            "",
            "",
            "1,93%",
            "",
            "",
            "6,91%"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Interprétation : La méthode ABC permet de constater que les deux formations sont profitables. La formation Certification acheteur est la plus profitable mais elle ne représente que 13 % du chiffre d’affaires."
      },
      {
        "type": "p",
        "text": "**2. Énoncer les deux principaux intérêts et les deux principales limites de cette méthode de calcul de coûts dont la mise en place est envisagée, dans le contexte de Fonéa.**"
      },
      {
        "type": "p",
        "text": "Les intérêts de la méthode ABC sont les suivants :"
      },
      {
        "type": "p",
        "text": "•Elle permet d’intégrer la multiplicité des activités et d’opérer une répartition des charges indirectes beaucoup plus affinée que la méthode des centres d’analyse. Pour Fonéa, avec la méthode des centres d’analyse, les charges indirectes ont été réparties selon un seul critère, le chiffre d’affaires. Avec la méthode ABC, six activités ont été identifiées, avec des inducteurs beaucoup plus représentatifs de l’évolution des coûts. Cela permet davantage de prendre en compte l’hétérogénéité des différentes activités. Ainsi, davantage de charges sont donc attribuées à la formation Manager des achats, car, par exemple, la gestion administrative et la maintenance informatique sont beaucoup plus lourdes en raison du nombre de sites d’auditeurs. De même, le nombre de jours d’utilisation des salles est plus important que pour la formation Certification acheteur."
      },
      {
        "type": "p",
        "text": "•Avec la méthode des centres d’analyse, la formation Certification acheteur subventionne la formation Manager des achats."
      },
      {
        "type": "p",
        "text": "•Cette méthode est plus adaptée pour les prestations de services, et notamment pour des services davantage « personnalisés » ce qui est bien le cas ici, chaque formation ayant ses propres spécificités."
      },
      {
        "type": "p",
        "text": "•Cette méthode permet d’apporter plus de souplesse et de flexibilité pour la prise en compte des charges indirectes, ce qui permet notamment une réadaptation du mode de calcul des coûts en cas d’évolution de l’organisation ou en cas de création d’une nouvelle prestation."
      },
      {
        "type": "p",
        "text": "Cette méthode comporte différentes limites :"
      },
      {
        "type": "p",
        "text": "•La première limite concerne le nombre d’activités identifiées :"
      },
      {
        "type": "p",
        "text": "– plus le nombre d’activités est élevé, plus le modèle est complexe et lourd à gérer ;"
      },
      {
        "type": "p",
        "text": "– s’il est trop faible, on risque d’introduire une hétérogénéité dans le coût des activités."
      },
      {
        "type": "p",
        "text": "•Cette démarche requiert l’usage d’un système d’information adapté pour recueillir une multiplicité de données (ex. : nombre de jours de formation, nombre de contacts...) ainsi que les ressources consommées par les activités."
      },
      {
        "type": "p",
        "text": "•La mise en place de la méthode suppose l’adhésion de l’ensemble du personnel. Elle peut être ressentie comme la remise en cause des compétences et du pouvoir de chacun."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller M. Goulard, au regard du taux de profitabilité des formations, sur la méthode à utiliser et conclure sur les décisions à prendre quant au maintien ou non des formations proposées.**"
      },
      {
        "type": "p",
        "text": "Notions attendues dans le développement :"
      },
      {
        "type": "p",
        "text": "– rappel du contexte ;"
      },
      {
        "type": "p",
        "text": "– comparaison de la profitabilité entre les deux méthodes ;"
      },
      {
        "type": "p",
        "text": "– justification des divergences de résultats ;"
      },
      {
        "type": "p",
        "text": "– notion de subventionnement appliquée au cas ;"
      },
      {
        "type": "p",
        "text": "– argumentaire en faveur de la méthode ABC ;"
      },
      {
        "type": "p",
        "text": "– maintien des deux formations."
      },
      {
        "type": "p",
        "text": "Avec la méthode des centres d’analyse, la formation Certification acheteur n’est pas profitable. Le taux de profitabilité de la formation Manager des achats est de 3,07 %. La situation s’inverse avec la méthode à base d’activités car la formation Certification acheteur devient profitable avec un taux de profitabilité de 6,91 %. La formation Manager des achats est encore profitable mais moins performante avec un taux de profitabilité qui passe à 1,93 %."
      },
      {
        "type": "p",
        "text": "Les divergences de résultats s’expliquent par la méthode de répartition des charges indirectes. La méthode utilisée dans le cadre des centres d’analyse est relativement simpliste puisque les charges indirectes sont réparties en fonction du chiffre d’affaires réalisé, alors qu’avec la méthode ABC il est tenu compte des différentes activités, ce qui permet d’imputer davantage de charges à la formation Manager des achats. Ainsi les résultats obtenus avec la méthode des centres d’analyse sont erronés et induisent en erreur car la formation Manager des achats était subventionnée par la formation Certification acheteur."
      },
      {
        "type": "p",
        "text": "Il faut donc conseiller à M. Goulard de privilégier la méthode à base d’activités en raison de la pertinence de la répartition des charges indirectes. Par ailleurs, l’entreprise étant en forte croissance, on peut supposer que de nouveaux débouchés puissent apparaître. Même si la formation Manager des achats est moins profitable, il faut continuer à la soutenir car elle est le produit phare de l’entreprise et elle peut conduire à ouvrir vers d’autres besoins en formation."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "Cas",
    "title": "France Saboai",
    "difficulty": 3,
    "durationMin": 60,
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argumentaire afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "France Saboai est une entreprise industrielle spécialisée dans la fabrication de pièces coniques en composite. Les matériaux composites commencent à peine aujourd’hui à supplanter leurs rivaux métalliques dans les applications aéronautiques. Associés à une solidité remarquable, les composites à base de fibres de carbone aujourd’hui utilisés en aéronautique possèdent une durée de vie largement supérieure aux matériaux métalliques."
      },
      {
        "type": "p",
        "text": "L’actuel dirigeant de l’entreprise, M. Gaspard, a compris depuis longtemps les enjeux stratégiques de ce marché et s’est très vite spécialisé dans les composites. France Saboai fabrique à la fois des composites pour l’industrie aéronautiques et l’industrie aérospatiale."
      },
      {
        "type": "p",
        "text": "**•**Les pièces coniques en composite pour l’aéronautique sont fabriquées de manière industrielle."
      },
      {
        "type": "p",
        "text": "De manière générale, le composite est obtenu à partir des substances chimiques de base suivantes : K2, N3, L2. Il est possible d’ajouter à ces substances chimiques de base différents éléments spéciaux, selon un dosage très précis, pour personnaliser le composite (densité, luminosité, résistance…). Cette composition (substances chimiques + éléments spéciaux), appelée « composite liquide », est déposée dans un refroidisseur spécialisé où la température est portée à environ -200 °C. Le composite gazeux est ensuite déversé vers les lignes de moulage des pièces coniques en composite pour l’aéronautique. À l’issue du moulage, les pièces coniques en composite sont alignées automatiquement sur un tapis roulant, progressivement réchauffées, et polies avant d’être expédiées."
      },
      {
        "type": "p",
        "text": "**•**Les pièces coniques en composite pour l’industrie aérospatiale sont fabriquées de manière artisanale."
      },
      {
        "type": "p",
        "text": "Les enjeux commerciaux associés à ces pièces sont énormes pour France Saboai. La composition du composite liquide nécessite les mêmes éléments. Néanmoins, ce mélange est préparé, de manière plus rigoureuse, en très petits volumes et il fait l’objet de nombreux tests de résistance. Cette composition est alors déposée dans des petits refroidisseurs. Un technicien spécialisé en composite prélève alors une partie de ce mélange pour le déposer dans un moule sur mesure. Le moule est scrupuleusement nettoyé après chaque pièce produite. Les pièces coniques sont refroidies pendant trois heures. Un contrôle qualité manuel, visant à repérer la moindre fissure et la résistance du composite, est effectué sur chaque pièce conique. La dernière étape, spécifique à certaines pièces coniques (C4AS), est la gravure d’un numéro de série individuel."
      },
      {
        "type": "p",
        "text": "France Saboai propose, sur la période étudiée, quatre modèles de pièces coniques en composite : C1AN, C2AN, C3AS et C4AS."
      },
      {
        "type": "p",
        "text": "Les modèles C1AN et C2AN sont totalement conçus, fabriqués et distribués par l’entreprise France Saboai. Ils sont proposés à tous les avionneurs. Le marché aéronautique est extrêmement concurrentiel."
      },
      {
        "type": "p",
        "text": "Les modèles C3AS et C4AS, quant à eux, sont proposés exclusivement à l’industrie aérospatiale. À ce titre, ils sont conçus en étroite collaboration avec les ingénieurs et chercheurs du domaine aérospatial. Ils sont fabriqués uniquement sur commande. La société fixe son prix de vente de manière unilatérale en fonction du coût de revient."
      },
      {
        "type": "p",
        "text": "La société ne fait pas face à de véritables concurrents sur cette niche."
      },
      {
        "type": "p",
        "text": "M. Gaspard se demande sans cesse s’il doit continuer ou non à produire tous les modèles. Vous êtes le premier contrôleur de gestion embauché au sein de l’entreprise. Auparavant, le contrôle de gestion était externalisé auprès du cabinet d’expertise comptable de l’entreprise qui utilisait la méthode des centres d’analyse. Vous tenterez de répartir les charges fixes indirectes différemment."
      },
      {
        "type": "p",
        "text": "Il vous est demandé de calculer le coût des inducteurs sélectionnés ainsi que de calculer le coût unitaire des quatre modèles de pièces coniques en composite selon cette comptabilité à base d’activités."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter les coûts et résultats au sein de l’entreprise France Saboai pour les quatre pièces coniques en appliquant la méthode ABC.*"
      },
      {
        "type": "p",
        "text": "*2. Apprécier les intérêts et les limites de cette méthode de calcul des coûts.*"
      },
      {
        "type": "p",
        "text": "*3. Rédiger un argumentaire afin de conseiller monsieur Gaspard sur ses choix stratégiques.*"
      },
      {
        "type": "p",
        "text": "**Document 1 — Nombre de pièces en composite vendues**"
      },
      {
        "type": "table",
        "headers": [
          "**Modèles**",
          "**Nombre de lots**",
          "**Nombre de pièces coniques par lot**"
        ],
        "rows": [
          [
            "**C1AN**",
            "868",
            "5 00020 00010 000"
          ],
          [
            "**C2AN**",
            "103020",
            "1 0001 6002 600"
          ],
          [
            "**C3AS**",
            "102010010",
            "10020030400"
          ],
          [
            "**C4AS**",
            "200100504360",
            "248010010"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Toutes les pièces coniques en composite fabriquées présentent les mêmes dimensions."
      },
      {
        "type": "p",
        "text": "**Document 2 — Analyse d’une pièce conique en composite (nombre de composants en unités)**"
      },
      {
        "type": "table",
        "headers": [
          "**Composants**",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**"
        ],
        "rows": [
          [
            "**Composants de base**"
          ],
          [
            "**K2**",
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "**N3**",
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "**L2**",
            "1",
            "1",
            "1",
            "1"
          ],
          [
            "**Composants spéciaux**"
          ],
          [
            "**S1**",
            "0",
            "0",
            "0",
            "1"
          ],
          [
            "**S2**",
            "0",
            "0",
            "0",
            "1"
          ],
          [
            "**O1**",
            "0",
            "0",
            "1",
            "0"
          ],
          [
            "**O2**",
            "0",
            "1",
            "0",
            "0"
          ],
          [
            "**O3**",
            "0",
            "0",
            "1",
            "0"
          ],
          [
            "**O5**",
            "0",
            "0",
            "1",
            "1"
          ],
          [
            "**Produits sous-traités**"
          ],
          [
            "**Vis C1AN**",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "**Vis C2AN**",
            "0",
            "1",
            "0",
            "0"
          ],
          [
            "**Écrou C4AS**",
            "0",
            "0",
            "0",
            "1"
          ],
          [
            "**Temps de moulage en minutes**",
            "4",
            "5",
            "8",
            "18"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 3 — Coût direct (en €) d’une pièce conique en composite**"
      },
      {
        "type": "table",
        "headers": [
          "**Composants**",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**"
        ],
        "rows": [
          [
            "**Composants de base**"
          ],
          [
            "**K2, N3 et L2**",
            "1,5",
            "1,5",
            "1,5",
            "1,5"
          ],
          [
            "**Composants spéciaux**"
          ],
          [
            "**S1**",
            "–",
            "–",
            "–",
            "1"
          ],
          [
            "**S2**",
            "–",
            "–",
            "–",
            "2,5"
          ],
          [
            "**O1**",
            "–",
            "–",
            "3",
            "–"
          ],
          [
            "**O2**",
            "–",
            "0,5",
            "–",
            "–"
          ],
          [
            "**O3**",
            "–",
            "–",
            "0,5",
            "–"
          ],
          [
            "**O5**",
            "–",
            "–",
            "5",
            "9"
          ],
          [
            "**Produits sous-traités**"
          ],
          [
            "**Vis**",
            "0,25",
            "0,3",
            "–",
            "–"
          ],
          [
            "**Écrou**",
            "–",
            "–",
            "–",
            "2,5"
          ],
          [
            "**TOTAL**",
            "1,75",
            "2,3",
            "10",
            "16,5"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 4 — Prix de vente (en €) d’une pièce conique en composite**"
      },
      {
        "type": "table",
        "headers": [
          "**Type de pièce**",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**"
        ],
        "rows": [
          [
            "**Prix de vente (en €)**",
            "40",
            "52",
            "100",
            "320"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 5 — Charges indirectes fixes de la société France Saboai (en €)**"
      },
      {
        "type": "table",
        "headers": [
          "**Approvisionnement**",
          "936 000"
        ],
        "rows": [
          [
            "**Études techniques et R & D**",
            "3 200 000"
          ],
          [
            "**Solidification, moulage**",
            "1 667 600"
          ],
          [
            "**Polissage, finition**",
            "906 000"
          ],
          [
            "**Expédition, administration**",
            "624 400"
          ],
          [
            "**Total**",
            "7 334 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 6 — Inducteurs de coûts**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Activités**",
          "**Coûts (en €)**",
          "**Inducteurs**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "Étude de marchés (a)",
            "374 400",
            "Nombre de références"
          ],
          [
            "Gestion des sous-traitants",
            "280 800",
            "Nombre de références"
          ],
          [
            "Réception",
            "280 800",
            "Nombre de références"
          ],
          [
            "**Études techniques et R et D**",
            "Conception, étude",
            "2 254 000",
            "Nombre de modèles"
          ],
          [
            "Ordonnancement",
            "946 000",
            "Nombre de lots"
          ],
          [
            "**Solidification, moulage**",
            "Refroidissement industriel",
            "221 000",
            "Nombre de lots pour l’aéronautique"
          ],
          [
            "Moulage industriel",
            "250 000",
            "Nombre de lots pour l’aéronautique"
          ],
          [
            "Maintenance industrielle",
            "75 000",
            "Nombre de lots pour l’aéronautique"
          ],
          [
            "Refroidissement artisanale",
            "330 000",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "Moulage artisanal",
            "450 000",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "Maintenance artisanale",
            "341 600",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "**Polissage, finition**",
            "Polissage industriel",
            "270 000",
            "Nombre de pièces coniques pour l’aéronautique"
          ],
          [
            "Polissage manuel",
            "212 000",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "Contrôle qualité manuel",
            "212 000",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "Gravure d’un numéro de série individuel",
            "212 000",
            "Nombre de pièces coniques pour l’aérospatial"
          ],
          [
            "**Expédition, administration**",
            "Expédition (b)",
            "312 400",
            "« Coût ajouté » aux pièces coniques"
          ],
          [
            "Administration (b)",
            "312 000",
            "« Coût ajouté » aux pièces coniques"
          ],
          [
            "**Total**",
            "7 334 000",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "(a) Fournisseurs de composants et sous-traitants."
      },
      {
        "type": "p",
        "text": "(b) Les charges d’expédition et d’administration seront réparties d’une manière plus conventionnelle, en fonction des coûts ajoutés aux cônes par la société France Saboai (hors coûts directs et hors frais d’expédition-administration) exprimés en %."
      },
      {
        "type": "p",
        "text": "**Document 7 — Données obtenues par la méthode des centres d’analyse**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**",
          "**TOTAL**"
        ],
        "rows": [
          [
            "**Coût unitaire total (en €)**",
            "18,38",
            "23,08",
            "43,25",
            "87,32",
            ""
          ],
          [
            "**Prix de vente (en €)**",
            "40",
            "52",
            "100",
            "320",
            ""
          ],
          [
            "**Résultat unitaire (en €)**",
            "21,62",
            "28,92",
            "56,75",
            "232,68",
            ""
          ],
          [
            "**Quantité**",
            "240 000",
            "110 000",
            "12 000",
            "8 800",
            ""
          ],
          [
            "**Résultat global/produit (en €)**",
            "5 189 612",
            "3 180 840",
            "680 961",
            "2 047 586",
            "11 099 000"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Atelier Zephyr**"
      },
      {
        "type": "p",
        "text": "L’Atelier Zephyr fabrique deux produits, X (1 000 unités) et Y (500 unités). Les charges indirectes sont analysées par la méthode ABC en trois activités, chacune dotée d’un inducteur de coût."
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Inducteur**",
          "**Volume de l’inducteur**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "24 000 €",
            "la commande",
            "120 commandes"
          ],
          [
            "**Production**",
            "90 000 €",
            "l’heure-machine",
            "3 000 heures"
          ],
          [
            "**Contrôle qualité**",
            "16 000 €",
            "le lot",
            "80 lots"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Consommations d’inducteurs et charges directes : X consomme 40 commandes, 1 500 heures-machine et 30 lots, pour des charges directes de 50 € l’unité ; Y consomme 80 commandes, 1 500 heures-machine et 50 lots, pour des charges directes de 60 € l’unité."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer le coût unitaire de chaque inducteur.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût de revient unitaire de X et de Y par la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Plasturge Novak**"
      },
      {
        "type": "p",
        "text": "La société Plasturge Novak fabrique deux produits : GV, un article standard de grande série (10 000 unités), et PV, un article spécifique de petite série (1 000 unités). Ses charges indirectes s’élèvent à 200 000 €. Elle les impute aujourd’hui à l’heure de main-d’œuvre directe (5 000 h pour GV, 1 000 h pour PV) et se demande si la méthode ABC modifierait son diagnostic."
      },
      {
        "type": "p",
        "text": "**Charges directes et prix de vente**"
      },
      {
        "type": "p",
        "text": "Charges directes : GV 20 € l’unité, PV 40 € l’unité. Prix de vente : GV 40 €, PV 120 €."
      },
      {
        "type": "p",
        "text": "**Analyse ABC des charges indirectes**"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Inducteur**",
          "**GV**",
          "**PV**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "40 000 €",
            "commande",
            "50",
            "150"
          ],
          [
            "**Lancement de série**",
            "45 000 €",
            "série",
            "30",
            "120"
          ],
          [
            "**Production**",
            "75 000 €",
            "heure-machine",
            "4 000",
            "1 000"
          ],
          [
            "**Administration des ventes**",
            "40 000 €",
            "commande client",
            "40",
            "160"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Méthode classique : calculer le coût de revient et le résultat unitaire de chaque produit, les charges indirectes étant imputées à l’heure de main-d’œuvre directe.**"
      },
      {
        "type": "p",
        "text": "**2. Méthode ABC : calculer le coût de chaque inducteur, puis le coût de revient et le résultat de chaque produit.**"
      },
      {
        "type": "p",
        "text": "**3. Comparer les deux méthodes et commenter le phénomène de subventionnement croisé.**"
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Micronix**"
      },
      {
        "type": "p",
        "text": "La société Micronix fabrique trois produits électroniques : A, de grande série (5 000 unités), B, de moyenne série (2 000 unités), et C, de petite série sur mesure (500 unités). Ses charges indirectes, soit 470 000 €, sont aujourd’hui imputées à l’heure de main-d’œuvre directe. La direction veut confronter cette approche à une analyse ABC en six activités."
      },
      {
        "type": "p",
        "text": "**Document 1 — Charges directes et prix de vente**"
      },
      {
        "type": "p",
        "text": "Charges directes (matières et main-d’œuvre) : A 40 €, B 55 €, C 90 € l’unité. Prix de vente : A 90 €, B 130 €, C 260 € l’unité."
      },
      {
        "type": "p",
        "text": "**Document 2 — Activités et inducteurs**"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Inducteur**",
          "**A**",
          "**B**",
          "**C**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "60 000 €",
            "commande fournisseur",
            "60",
            "100",
            "140"
          ],
          [
            "**Lancement de série**",
            "48 000 €",
            "lot",
            "40",
            "80",
            "120"
          ],
          [
            "**Usinage**",
            "180 000 €",
            "heure-machine",
            "5 000",
            "3 000",
            "1 000"
          ],
          [
            "**Montage**",
            "96 000 €",
            "heure de MOD",
            "2 500",
            "1 600",
            "700"
          ],
          [
            "**Contrôle qualité**",
            "36 000 €",
            "contrôle",
            "200",
            "300",
            "400"
          ],
          [
            "**Administration commerciale**",
            "50 000 €",
            "commande client",
            "100",
            "150",
            "250"
          ]
        ]
      },
      {
        "type": "p",
        "text": "La méthode classique impute la totalité des charges indirectes à l’heure de main-d’œuvre directe (total 4 800 heures : 2 500 pour A, 1 600 pour B, 700 pour C)."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**1. Calculer le coût de chaque inducteur.**"
      },
      {
        "type": "p",
        "text": "**2. Calculer le coût de revient et le résultat unitaire de chaque produit par la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "**3. Calculer le coût de revient et le résultat unitaire de chaque produit par la méthode classique (imputation à l’heure de MOD).**"
      },
      {
        "type": "p",
        "text": "**4. Comparer les deux méthodes produit par produit et analyser les distorsions révélées par l’ABC.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter des coûts, des marges et des résultats dans un contexte donné• Apprécier les intérêts et limites des méthodes de calcul de coûts afin de choisir celle(s) adaptée(s) au contexte de gestion• Rédiger un argument afin de conseiller le décideur"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les coûts et résultats au sein de l’entreprise France Saboai pour les quatre pièces coniques en appliquant la méthode ABC.**"
      },
      {
        "type": "p",
        "text": "**Coût des inducteurs sélectionnés**"
      },
      {
        "type": "table",
        "headers": [
          "**Inducteurs**",
          "**Coût total (en €)**",
          "**Nombre d’inducteurs**",
          "**Coût par inducteur (en €)**"
        ],
        "rows": [
          [
            "**Nombre de références globales**",
            "374 400",
            "12",
            "54 600,00"
          ],
          [
            "280 800"
          ],
          [
            "**Somme du nombre de références globales**",
            "655 200"
          ],
          [
            "**Nombre de références sous-traitées**",
            "280 800",
            "3",
            "93 600,00"
          ],
          [
            "**Nombre de modèles**",
            "2 254 000",
            "4",
            "563 500,00"
          ],
          [
            "**Nombre de lots**",
            "946 000",
            "936",
            "1 010,68"
          ],
          [
            "**Gestion des lots aéronautiques**",
            "221 000",
            "82",
            "6 658,54"
          ],
          [
            "250 000"
          ],
          [
            "75 000"
          ],
          [
            "**Somme de la gestion des lots aéronautiques**",
            "546 000"
          ],
          [
            "**Gestion des pièces coniques pour l’aéronautique**",
            "270 000",
            "350 000",
            "0,77"
          ],
          [
            "**Gestion des pièces coniques pour l’aérospatial**",
            "330 000",
            "20 800",
            "74,31"
          ],
          [
            "450 000"
          ],
          [
            "341 600"
          ],
          [
            "212 000"
          ],
          [
            "212 000"
          ],
          [
            "**Somme de la gestion des pièces coniques pour l’aérospatial**",
            "1 545 600"
          ],
          [
            "**Gestion de la gravure d’un numéro**",
            "212 000",
            "8 800",
            "24,09"
          ],
          [
            "**Coût ajouté**",
            "312 400",
            "936 000",
            "9,31 %"
          ],
          [
            "**Coût ajouté**",
            "312 000",
            "3 200 000"
          ],
          [
            "",
            "",
            "1 667 600"
          ],
          [
            "",
            "",
            "906 000"
          ],
          [
            "**Somme**",
            "624 400",
            "6 709 600"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Calculs préalables à la détermination du coût des produits par la méthode ABC**"
      },
      {
        "type": "table",
        "headers": [
          "**Type**",
          "**Coût de l’inducteur**",
          "**Quantités / consommation**",
          "**Coût par référence**"
        ],
        "rows": [
          [
            "**K2**",
            "54 600",
            "370 800",
            "0,15"
          ],
          [
            "**N3**",
            "54 600",
            "370 800",
            "0,15"
          ],
          [
            "**L2**",
            "54 600",
            "370 800",
            "0,15"
          ],
          [
            "**S1**",
            "54 600",
            "8 800",
            "6,20"
          ],
          [
            "**S2**",
            "54 600",
            "8 800",
            "6,20"
          ],
          [
            "**O1**",
            "54 600",
            "12 000",
            "4,55"
          ],
          [
            "**O2**",
            "54 600",
            "110 000",
            "0,50"
          ],
          [
            "**O3**",
            "54 600",
            "12 000",
            "4,55"
          ],
          [
            "**O5**",
            "54 600",
            "20 800",
            "2,63"
          ],
          [
            "**Vis C1AN**",
            "54 600",
            "240 000",
            "0,23"
          ],
          [
            "**Vis C2AN**",
            "54 600",
            "110 000",
            "0,50"
          ],
          [
            "**Écrou C4AS**",
            "54 600",
            "8 800",
            "6,20"
          ],
          [
            "**Répartition du coût de gestion des références sous-traitées selon le même principe**"
          ],
          [
            "**Vis C1AN**",
            "93 600",
            "240 000",
            "0,390"
          ],
          [
            "**Vis C2AN**",
            "93 600",
            "110 000",
            "0,851"
          ],
          [
            "**Écrou C4AS**",
            "93 600",
            "8 800",
            "10,636"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Détermination du coût des différentes pièces coniques**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**"
        ],
        "rows": [
          [
            "**Coût direct**",
            "1,75",
            "2,30",
            "10,00",
            "12,50"
          ],
          [
            "**Coût attribuable**",
            "",
            "",
            "",
            ""
          ],
          [
            "**Gestion des références globales**",
            "",
            "",
            "",
            ""
          ],
          [
            "**K2, N3 et L2**",
            "0,44",
            "0,44",
            "0,44",
            "0,44"
          ],
          [
            "**S1**",
            "",
            "",
            "",
            "6,20"
          ],
          [
            "**S2**",
            "",
            "",
            "",
            "6,20"
          ],
          [
            "**O1**",
            "",
            "",
            "4,55",
            ""
          ],
          [
            "**O2**",
            "",
            "0,50",
            "",
            ""
          ],
          [
            "**O3**",
            "",
            "",
            "4,55",
            ""
          ],
          [
            "**O5**",
            "",
            "",
            "2,63",
            "2,63"
          ],
          [
            "**Vis**",
            "0,23",
            "0,50",
            "",
            ""
          ],
          [
            "**Écrou**",
            "",
            "",
            "",
            "6,20"
          ],
          [
            "**Gestion des références sous-traitées**",
            "",
            "",
            "",
            ""
          ],
          [
            "**Vis**",
            "0,39",
            "0,85",
            "",
            ""
          ],
          [
            "**Écrou**",
            "",
            "",
            "",
            "10,64"
          ],
          [
            "**Gestion des références sous-total**",
            "1,06",
            "2,29",
            "12,17",
            "32,32"
          ],
          [
            "**Nombre de modèles**",
            "2,35",
            "5,12",
            "46,96",
            "64,03"
          ],
          [
            "**Nombre de lots**",
            "0,09",
            "0,55",
            "11,79",
            "82,00"
          ],
          [
            "**Gestion des lots aéronautiques**",
            "0,61",
            "3,63",
            "",
            ""
          ],
          [
            "**Gestion des pièces coniques pour l’aéronautique**",
            "0,77",
            "0,77",
            "",
            ""
          ],
          [
            "**Gestion des pièces coniques pour l’aérospatial**",
            "",
            "",
            "74,31",
            "74,31"
          ],
          [
            "**Gestion de la gravure**",
            "",
            "",
            "",
            "24,09"
          ],
          [
            "**Coût ajouté hors charges directes**",
            "4,88",
            "12,36",
            "145,22",
            "276,75"
          ],
          [
            "**Gestion du coût ajouté**",
            "0,45",
            "1,150",
            "13,51",
            "25,75"
          ],
          [
            "**Total Coût attribuable**",
            "5,34",
            "13,51",
            "158,74",
            "302,51"
          ],
          [
            "**Pour mémoire, coût direct**",
            "1,75",
            "2,30",
            "10,00",
            "12,50"
          ],
          [
            "**Total Coût de revient ABC**",
            "7,09",
            "15,81",
            "168,74",
            "315,01"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**2. Apprécier les intérêts et les limites de cette méthode de calcul des coûts.**"
      },
      {
        "type": "p",
        "text": "Pourquoi utiliser la méthode ABC ? En raison de l’inadéquation des clés de répartition classiques des charges indirectes du fait, d’une part de l’homogénéité d’activités qu’elles sous-tendent et, d’autre part, de la trop faible représentativité des comportements de coûts."
      },
      {
        "type": "p",
        "text": "On peut admettre que ce sont les activités qui consomment les ressources (et donc génèrent les coûts) et non les produits. Ce préalable dans l’architecture d’un système de détermination des coûts de revient permettra de mieux fonder les lois de variation des coûts et, ce faisant, assurera une prise de décision plus pertinente."
      },
      {
        "type": "p",
        "text": "Les modalités de mise en oeuvre de la méthode nécessitent :"
      },
      {
        "type": "p",
        "text": "– de prendre en compte la multiplicité des activités qui existent dans la société France Saboai ;"
      },
      {
        "type": "p",
        "text": "– d’appréhender des inducteurs d’activités pertinents susceptibles de traduire fidèlement les lois de variation des coûts ;"
      },
      {
        "type": "p",
        "text": "– de circonscrire au mieux les phénomènes de subventionnement des produits en distinguant trois niveaux d’affectation des charges, chacun représentatif d’un mode de consommation des ressources mobilisées par les activités : le produit, le lot et le volume ;"
      },
      {
        "type": "p",
        "text": "– de concevoir un système de calcul des coûts selon la méthode des coûts par activités, ce qui implique une réelle clarification de la structure et du processus de production et non une complexification à outrance de la modélisation des coûts. Cette démarche nécessite des qualités indéniables de dialogue de la part de l’initiateur d’un tel projet et favorise la coopération de tous les responsables opérationnels concernés pour appréhender fidèlement les inducteurs d’activités."
      },
      {
        "type": "p",
        "text": "**3. Rédiger un argumentaire afin de conseiller M. Gaspard sur ses choix stratégiques.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**C1AN**",
          "**C2AN**",
          "**C3AS**",
          "**C4AS**",
          "**TOTAL**"
        ],
        "rows": [
          [
            "**Prix de vente**",
            "40,00",
            "52,00",
            "100,00",
            "320,00",
            ""
          ],
          [
            "**Coût de revient (ABC)**",
            "7,09",
            "15,81",
            "168,74",
            "319,01",
            ""
          ],
          [
            "**Résultats unitaires**",
            "32,91",
            "36,19",
            "– 68,74",
            "0,99",
            ""
          ],
          [
            "**Quantité**",
            "240 000",
            "110 000",
            "12 000",
            "8 800",
            ""
          ],
          [
            "**Résultat global par produit**",
            "7 899 386,36",
            "3 980 543,93",
            "– 824 864,84",
            "43 934,56",
            "11 099 000"
          ],
          [
            "**Marge en %**",
            "82,29 %",
            "69,59 %",
            "– 68,74 %",
            "2 %",
            ""
          ]
        ]
      },
      {
        "type": "p",
        "text": "Le résultat global reste le même (11 099 000 €) qu’avec la méthode des coûts complets. Cependant, la profitabilité relative des pièces coniques change complètement. Avec la méthode des coûts complets, tous les produits étaient profitables et seules les pièces C4AS se distinguaient par une profitabilité légèrement supérieure aux autres pièces."
      },
      {
        "type": "p",
        "text": "Le C1AN devient la pièce la plus profitable avec un taux de profitabilité de 82 %."
      },
      {
        "type": "p",
        "text": "Le C2AN suit avec une profitabilité de quasiment 70 %."
      },
      {
        "type": "p",
        "text": "Le C4AS est tout juste profitable avec un taux de 2 %. À noter qu’il s’agissait de la pièce la plus profitable selon la méthode des coûts complets."
      },
      {
        "type": "p",
        "text": "Le C3AS présente une profitabilité négative (taux de – 69 %)."
      },
      {
        "type": "p",
        "text": "La méthode ABC permet une analyse plus fine et plus crédible des charges indirectes en réintroduisant un lien de causalité entre consommations de ressources et volumes des inducteurs. Elle permet de tenir compte de la complexité du processus de fabrication et de la complexité du produit (nombre de composants…)."
      },
      {
        "type": "p",
        "text": "L’utilisation d’une méthode de calcul de coûts peut changer complètement le résultat de gestion de chacun des produits. Le choix de la méthode est donc stratégique."
      },
      {
        "type": "p",
        "text": "**Parcours progressif — s’entraîner en trois étapes**"
      },
      {
        "type": "p",
        "text": "**Étape 1 — Initiation : Atelier Zephyr**"
      },
      {
        "type": "p",
        "text": "1. Coût unitaire de chaque inducteur"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Volume inducteur**",
          "**Coût de l’inducteur**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "24 000 €",
            "120 commandes",
            "200,00 € / commande"
          ],
          [
            "**Production**",
            "90 000 €",
            "3 000 heures-machine",
            "30,00 € / heure"
          ],
          [
            "**Contrôle qualité**",
            "16 000 €",
            "80 lots",
            "200,00 € / lot"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Coût de revient unitaire par la méthode ABC"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**Produit X (1 000 u)**",
          "**Produit Y (500 u)**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "8 000 € (40 × 200)",
            "16 000 € (80 × 200)"
          ],
          [
            "**Production**",
            "45 000 € (1 500 × 30)",
            "45 000 € (1 500 × 30)"
          ],
          [
            "**Contrôle qualité**",
            "6 000 € (30 × 200)",
            "10 000 € (50 × 200)"
          ],
          [
            "**Total charges indirectes**",
            "**59 000 €**",
            "**71 000 €**"
          ],
          [
            "**Charges indirectes unitaires**",
            "59,00 €",
            "142,00 €"
          ],
          [
            "**Charges directes unitaires**",
            "50,00 €",
            "60,00 €"
          ],
          [
            "**Coût de revient unitaire**",
            "**109,00 €**",
            "**202,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Bien que X et Y consomment autant d’heures-machine, Y supporte un coût indirect unitaire près de 2,5 fois supérieur : produit en plus petite série, il concentre proportionnellement plus de commandes et de lots. L’ABC met en évidence ce que masquerait une clé unique fondée sur le volume."
      },
      {
        "type": "p",
        "text": "**Étape 2 — Application : Plasturge Novak**"
      },
      {
        "type": "p",
        "text": "1. Méthode classique (imputation à l’heure de MOD)"
      },
      {
        "type": "p",
        "text": "Taux de charges indirectes = 200 000 / (5 000 + 1 000) = 200 000 / 6 000 = 33,3333 € par heure de MOD."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**GV (10 000 u)**",
          "**PV (1 000 u)**"
        ],
        "rows": [
          [
            "**Charges indirectes**",
            "166 666,67 € (5 000 × 33,3333)",
            "33 333,33 € (1 000 × 33,3333)"
          ],
          [
            "**Charges indirectes unitaires**",
            "16,67 €",
            "33,33 €"
          ],
          [
            "**Charges directes unitaires**",
            "20,00 €",
            "40,00 €"
          ],
          [
            "**Coût de revient unitaire**",
            "**36,67 €**",
            "**73,33 €**"
          ],
          [
            "**Prix de vente**",
            "40,00 €",
            "120,00 €"
          ],
          [
            "**Résultat unitaire**",
            "**3,33 €**",
            "**46,67 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Méthode ABC"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Volume**",
          "**Coût inducteur**",
          "**GV**",
          "**PV**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "40 000 €",
            "200",
            "200,00 €",
            "10 000 €",
            "30 000 €"
          ],
          [
            "**Lancement de série**",
            "45 000 €",
            "150",
            "300,00 €",
            "9 000 €",
            "36 000 €"
          ],
          [
            "**Production**",
            "75 000 €",
            "5 000",
            "15,00 €",
            "60 000 €",
            "15 000 €"
          ],
          [
            "**Administration ventes**",
            "40 000 €",
            "200",
            "200,00 €",
            "8 000 €",
            "32 000 €"
          ],
          [
            "**Total charges indirectes**",
            "",
            "",
            "",
            "**87 000 €**",
            "**113 000 €**"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**GV (10 000 u)**",
          "**PV (1 000 u)**"
        ],
        "rows": [
          [
            "**Charges indirectes unitaires (ABC)**",
            "8,70 €",
            "113,00 €"
          ],
          [
            "**Charges directes unitaires**",
            "20,00 €",
            "40,00 €"
          ],
          [
            "**Coût de revient unitaire (ABC)**",
            "**28,70 €**",
            "**153,00 €**"
          ],
          [
            "**Prix de vente**",
            "40,00 €",
            "120,00 €"
          ],
          [
            "**Résultat unitaire (ABC)**",
            "**11,30 €**",
            "**− 33,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Comparaison et subventionnement croisé"
      },
      {
        "type": "p",
        "text": "La méthode classique attribue à PV un coût indirect de 33,33 € l’unité, l’ABC de 113,00 € : l’écart est considérable. En imputant les charges au seul volume d’heures de MOD, la méthode classique fait supporter par GV (grande série) une part des coûts réellement engagés pour PV (petite série, nombreuses commandes, séries et lancements). GV « subventionne » ainsi PV. Le diagnostic s’inverse : PV, apparemment très rentable (+46,67 € l’unité), est en réalité déficitaire (− 33,00 € l’unité) une fois ses coûts d’activité correctement affectés. Le résultat global est identique (80 000 €), mais sa répartition entre produits — donc les décisions de prix, de gamme et de développement — change radicalement."
      },
      {
        "type": "p",
        "text": "**Étape 3 — Synthèse : Société Micronix**"
      },
      {
        "type": "p",
        "text": "1. Coût de chaque inducteur"
      },
      {
        "type": "table",
        "headers": [
          "**Activité**",
          "**Charges**",
          "**Volume inducteur**",
          "**Coût de l’inducteur**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "60 000 €",
            "300 commandes",
            "200,00 €"
          ],
          [
            "**Lancement de série**",
            "48 000 €",
            "240 lots",
            "200,00 €"
          ],
          [
            "**Usinage**",
            "180 000 €",
            "9 000 heures-machine",
            "20,00 €"
          ],
          [
            "**Montage**",
            "96 000 €",
            "4 800 heures de MOD",
            "20,00 €"
          ],
          [
            "**Contrôle qualité**",
            "36 000 €",
            "900 contrôles",
            "40,00 €"
          ],
          [
            "**Administration commerciale**",
            "50 000 €",
            "500 commandes clients",
            "100,00 €"
          ]
        ]
      },
      {
        "type": "p",
        "text": "2. Coût de revient et résultat par la méthode ABC"
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**A (5 000 u)**",
          "**B (2 000 u)**",
          "**C (500 u)**"
        ],
        "rows": [
          [
            "**Approvisionnement**",
            "12 000 €",
            "20 000 €",
            "28 000 €"
          ],
          [
            "**Lancement de série**",
            "8 000 €",
            "16 000 €",
            "24 000 €"
          ],
          [
            "**Usinage**",
            "100 000 €",
            "60 000 €",
            "20 000 €"
          ],
          [
            "**Montage**",
            "50 000 €",
            "32 000 €",
            "14 000 €"
          ],
          [
            "**Contrôle qualité**",
            "8 000 €",
            "12 000 €",
            "16 000 €"
          ],
          [
            "**Administration commerciale**",
            "10 000 €",
            "15 000 €",
            "25 000 €"
          ],
          [
            "**Total charges indirectes**",
            "**188 000 €**",
            "**155 000 €**",
            "**127 000 €**"
          ],
          [
            "**Charges indirectes unitaires**",
            "37,60 €",
            "77,50 €",
            "254,00 €"
          ],
          [
            "**Charges directes unitaires**",
            "40,00 €",
            "55,00 €",
            "90,00 €"
          ],
          [
            "**Coût de revient unitaire (ABC)**",
            "**77,60 €**",
            "**132,50 €**",
            "**344,00 €**"
          ],
          [
            "**Prix de vente**",
            "90,00 €",
            "130,00 €",
            "260,00 €"
          ],
          [
            "**Résultat unitaire (ABC)**",
            "**12,40 €**",
            "**− 2,50 €**",
            "**− 84,00 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "3. Coût de revient et résultat par la méthode classique"
      },
      {
        "type": "p",
        "text": "Taux classique = 470 000 / 4 800 = 97,9167 € par heure de MOD. Les charges indirectes sont réparties selon les heures de MOD (A 2 500 h, B 1 600 h, C 700 h)."
      },
      {
        "type": "table",
        "headers": [
          "**Élément**",
          "**A (5 000 u)**",
          "**B (2 000 u)**",
          "**C (500 u)**"
        ],
        "rows": [
          [
            "**Charges indirectes**",
            "244 791,67 €",
            "156 666,67 €",
            "68 541,67 €"
          ],
          [
            "**Charges indirectes unitaires**",
            "48,96 €",
            "78,33 €",
            "137,08 €"
          ],
          [
            "**Coût de revient unitaire**",
            "**88,96 €**",
            "**133,33 €**",
            "**227,08 €**"
          ],
          [
            "**Résultat unitaire (classique)**",
            "**1,04 €**",
            "**− 3,33 €**",
            "**32,92 €**"
          ]
        ]
      },
      {
        "type": "p",
        "text": "4. Comparaison et analyse des distorsions"
      },
      {
        "type": "p",
        "text": "Le résultat global est le même dans les deux méthodes (15 000 €), mais sa répartition diffère profondément. La méthode classique, fondée sur les seules heures de MOD, sous-estime lourdement le coût de C (petite série sur mesure) : 227,08 € contre 344,00 € en ABC. C consomme en effet une part disproportionnée d’activités « hors volume » — commandes fournisseurs, lots, contrôles, commandes clients — que la clé unique ignore. Résultat : C paraît bénéficiaire (+32,92 € l’unité) alors qu’il est en réalité fortement déficitaire (− 84,00 € l’unité), tandis que A (grande série) est pénalisé à l’inverse. L’ABC redonne une image fidèle de la rentabilité : elle conduirait à revoir le prix de C, à réduire la complexité de sa production, ou à réexaminer l’opportunité de le maintenir au catalogue."
      }
    ]
  }
];
