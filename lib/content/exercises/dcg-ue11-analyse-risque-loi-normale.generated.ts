// Généré par scripts/convert-exercises.mjs depuis les cahiers d'énoncés et de corrigés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    "id": "ex1",
    "label": "Mise en pratique corrigée",
    "title": "SARL Dubois",
    "statement": [
      {
        "type": "p",
        "text": "La SARL Dubois est une entreprise artisanale qui fabrique des baby-foot en bois. Dans ce marché des jeux de loisirs pour adultes, les prévisions de la demande sont difficiles. Face à ces aléas, l’entreprise considère que les ventes des trois modèles sont indépendantes et suivent une loi normale."
      },
      {
        "type": "table",
        "headers": [
          "**Modèles**",
          "**Paramètres de la loi**",
          "**Marge sur coût variable unitaire (en €)**"
        ],
        "rows": [
          [
            "**Baby Young (MBY)**",
            "",
            "35"
          ],
          [
            "**Baby Teen (MBT)**",
            "",
            "45"
          ],
          [
            "**Baby Older (MBO)**",
            "",
            "72"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Les coûts fixes s’élèvent à 4 200 € pour l’année."
      },
      {
        "type": "p",
        "text": "**➔***Calculer et interpréter une espérance et un écart-type de marge et de résultat pour les trois produits proposés.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "***1. Passer des lois sur les quantités à celles du résultat***"
      },
      {
        "type": "p",
        "text": "Il faut s’assurer que les variables sont indépendantes et, compte tenu des variables linéaires, écrire que :"
      },
      {
        "type": "p",
        "text": "Par rapport aux marges, les espérances sont de :"
      },
      {
        "type": "p",
        "text": "Les écarts-types sont de :"
      },
      {
        "type": "p",
        "text": "***2. Disposer d’une vision globale de l’exploitation grâce à la loi suivie par la somme des marges***"
      },
      {
        "type": "p",
        "text": "Comme les variables sont indépendantes, il est possible d’utiliser les propriétés suivantes : l’espérance de la somme des marges est égale à la somme des espérances de chaque produit ; l’écart-type de la somme des marges est égal à la racine carrée de la somme des variances de chaque produit."
      },
      {
        "type": "p",
        "text": "**• Pour la marge nette annuelle :**"
      },
      {
        "type": "p",
        "text": "**• Pour le résultat annuel :**"
      },
      {
        "type": "p",
        "text": "***3. Interpréter les résultats***"
      },
      {
        "type": "p",
        "text": "L’interprétation consiste à donner du sens aux résultats obtenus. Si l’écart-type est faible, cela traduit que les valeurs sont peu dispersées autour de la moyenne. Si l’écart-type est fort, cela traduit que les valeurs sont très dispersées autour de la moyenne. Quand les valeurs moyennes ne sont pas du même ordre de grandeur, mesurer le risque consiste à ne pas se satisfaire des dispersions absolues exprimées par les écarts-types, mais à calculer une dispersion relative."
      },
      {
        "type": "p",
        "text": "La dispersion relative (écart-type rapporté à la moyenne) donne :"
      },
      {
        "type": "p",
        "text": "MBY : — MBT : — MBO :"
      },
      {
        "type": "p",
        "text": "Les modèles BT et BO ont des risques similaires alors que le modèle BY présente une dispersion beaucoup plus faible. Plus la dispersion relative est forte, plus le risque est élevé et les résultats volatils. Ici, le produit BO se dissocie clairement du produit BY."
      },
      {
        "type": "p",
        "text": "Au regard des résultats obtenus, l’espérance de résultat attendue s’élève à 4 270 €. L’écart-type (environ 432 €) permet de montrer la dispersion des données autour de la moyenne."
      }
    ]
  },
  {
    "id": "ex2",
    "label": "A3.1",
    "title": "Longuevilla",
    "statement": [
      {
        "type": "p",
        "text": "La SARL Longuevilla est une société qui construit des jouets en bois. L’entreprise propose aujourd’hui deux modèles dans sa gamme."
      },
      {
        "type": "p",
        "text": "• La production et la commercialisation des deux modèles pour le mois de septembre sont représentées par des variables aléatoires indépendantes :"
      },
      {
        "type": "p",
        "text": "– Modèle A1 : A1 → N(30 ; 4)"
      },
      {
        "type": "p",
        "text": "– Modèle A2 : A2 → N(35 ; 5)"
      },
      {
        "type": "p",
        "text": "• Les marges sur coût variable pour chaque modèle A1 et A2 sont respectivement les suivantes : 15 € et 17 €."
      },
      {
        "type": "p",
        "text": "• Les coûts fixes s’élèvent à 500 € pour l’année."
      },
      {
        "type": "p",
        "text": "**➔ Calculer et interpréter une espérance et un écart-type de marge et de résultat pour les deux produits proposés.**"
      },
      {
        "type": "p",
        "text": "**B) Lois de probabilité**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**Méthode***Face à une situation de gestion, il vous sera demandé d’utiliser une loi de probabilité. Dans le cours, il est explicitement développé l’utilisation de la loi binomiale, de la loi de Poisson et de la loi normale dans une situation de gestion. Vous devez immédiatement repérer dans l’énoncé les données présentes qui vous éclaireront sur la loi à utiliser.*Voici des exemples de lois de probabilité adaptée à des situations de gestion :Loi binomiale et loi de Poisson : acceptation d’un niveau de qualité ; réponse à une demande d’information.Loi normale : gestion des stocks (stock de sécurité) ; gestion des ventes (seuil de rentabilité) ; gestion de projet (durée probable de réalisation) ; gestion de la qualité (niveau de risque acceptable à partir d’un échantillon).Pour interpréter les probabilités, vous jugez la situation par rapport au contexte. Les probabilités obtenues sont-elles fortes ou faibles ? Sont-elles pertinentes ?"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Calculer et interpréter une espérance et un écart-type de marge pour les deux produits proposés.**"
      },
      {
        "type": "p",
        "text": "Les espérances sont de :"
      },
      {
        "type": "p",
        "text": "E (Marge A1) = 15 × E(X1) = 15 × 30 = 450"
      },
      {
        "type": "p",
        "text": "E (Marge A2) = 17 × E(X2) = 17 × 35 = 595"
      },
      {
        "type": "p",
        "text": "Les écarts-types sont de :"
      },
      {
        "type": "p",
        "text": "σMarge A1 = 15 × σX1 = 15 × 4 = 60"
      },
      {
        "type": "p",
        "text": "σMarge A2 = 17 × σX2 = 17 × 5 = 85"
      },
      {
        "type": "p",
        "text": "Pour la marge nette annuelle :"
      },
      {
        "type": "p",
        "text": "E (Marge annuelle) = sommes des espérances – charges fixes annuelles"
      },
      {
        "type": "p",
        "text": "E (Marge annuelle) = E (Marge A1) + E (Marge A2) – charges fixes annuelles"
      },
      {
        "type": "p",
        "text": "E (Marge annuelle) = 450 + 595 – 500 = 545 €"
      },
      {
        "type": "p",
        "text": "V (Marge annuelle) = 602 + 852 = 10 825"
      },
      {
        "type": "p",
        "text": "σMarge annuelle = √10 825 ≈ 104 €"
      },
      {
        "type": "p",
        "text": "Interprétation :"
      },
      {
        "type": "p",
        "text": "Au regard des résultats obtenus, l’espérance de marge attendue s’élève à 545 €. L’écart-type permet de montrer la dispersion des données autour de la moyenne. Ici, il est de 104 €, ce qui traduit le fait que la majorité des valeurs sont comprises entre 441 € (545 – 104) et 649 € (545 + 104). L’écart-type demeure important et illustre une certaine dispersion."
      },
      {
        "type": "p",
        "text": "**Lois de probabilité**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**Méthode***Face à une situation de gestion, il vous sera demandé d’utiliser une loi de probabilité. Dans le cours, il est explicitement développé l’utilisation de la loi binomiale, de la loi de Poisson et de la loi normale dans une situation de gestion. Vous devez immédiatement repérer dans l’énoncé les données présentes qui vous éclaireront sur la loi à utiliser.*Voici des exemples de lois de probabilité adaptée à des situations de gestion :Loi binomiale et loi de Poisson (voir les fiches B.1, B.2, C.1 et C.2 du manuel)•Acceptation d’un niveau de qualité•Réponse à une demande d’informationLoi normale (voir les fiches D.1 et D.2 du manuel)•Gestion des stocks (stock de sécurité)•Gestion des ventes (seuil de rentabilité)•Gestion de projet (durée probable de réalisation)•Gestion de la qualité (niveau de risque acceptable à partir d’un échantillon)Pour interpréter les probabilités, vous jugez la situation par rapport au contexte. Les probabilités obtenues sont-elles fortes ou faibles ? Sont-elles pertinentes ?"
      }
    ]
  },
  {
    "id": "ex3",
    "label": "A3.2",
    "title": "Pépinière",
    "statement": [
      {
        "type": "p",
        "text": "Sébastien Jonc, créateur d’une pépinière, souhaite diversifier son activité en l’ouvrant à la décoration. Il observe que le panier moyen du client peut être modélisé par une loi normale de moyenne 30 € et d’écart-type 5 €."
      },
      {
        "type": "p",
        "text": "Sébastien Jonc se demande quelle proportion de clients dépense plus de 40 €, moins de 20 € et entre 20 et 40 €. Il aimerait avoir une interprétation des chiffres obtenus."
      },
      {
        "type": "p",
        "text": "**➔ Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités.**"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités.**"
      },
      {
        "type": "p",
        "text": "Interprétation. La majeure partie du panier moyen des clients se situe dans la zone comprise entre 20 et 40 €. Très peu de clients dépensent plus de 40 €. L’idée d’une diversification visant à gonfler le panier moyen semble bonne."
      },
      {
        "type": "p",
        "text": "**PRÉPARER L’ÉPREUVE**"
      }
    ]
  },
  {
    "id": "ex4",
    "label": "C3.1",
    "title": "Docks 76",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "La période des soldes a commencé. Le centre commercial Docks 76 de Rouen enregistre le temps de présence de chaque client, c’est-à-dire le temps total moyen que passe le client à parcourir les trois étages du centre."
      },
      {
        "type": "p",
        "text": "On admet que l’ensemble des temps de présence, exprimés en heures, peut être modélisé par une variable aléatoire qui suit la loi normale d’espérance 2,5 et d’écart-type 0,25."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter ce résultat.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer la probabilité qu’un temps de présence d’un client pris au hasard se situe entre 2 heures et 3 heures.*"
      },
      {
        "type": "p",
        "text": "*3. Déterminer pour que , puis interpréter le résultat.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**1. Calculer P (T ≥ 3) et interpréter ce résultat.**"
      },
      {
        "type": "p",
        "text": "On obtient le même résultat avec la calculatrice."
      },
      {
        "type": "p",
        "text": "Interprétation. Il existe une probabilité assez faible (2,28 %) que le client passe plus de 3 heures dans le centre commercial Docks 76."
      },
      {
        "type": "p",
        "text": "**2. Calculer la probabilité qu’un temps de présence d’un client pris au hasard se situe entre 2 heures et 3 heures.**"
      },
      {
        "type": "p",
        "text": "P(2 ≤ T ≤ 3) = 1 – P(T > 3) – P(T < 2) = 0,9545"
      },
      {
        "type": "p",
        "text": "**3. Déterminer t pour que P(T ≤ t) = 0,75 puis interpréter le résultat.**"
      },
      {
        "type": "p",
        "text": "t = 2,6686 (avec la calculatrice)"
      },
      {
        "type": "p",
        "text": "En moyenne, il y a 75 % de chances que le client passe moins de 2,67 heures dans le centre commercial."
      }
    ]
  },
  {
    "id": "ex5",
    "label": "C3.2",
    "title": "Musée des Beaux-Arts",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "Le musée des Beaux-Arts de Rouen s’intéresse à la fréquentation de sa boutique de souvenirs. On note la variable aléatoire qui à chaque visiteur associe la durée en minutes passée dans la boutique. Une étude statistique a montré que la variable aléatoire suit la loi normale de moyenne et d’écart-type ."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer la probabilité qu’un visiteur reste moins de cinq minutes dans la boutique.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer .*"
      },
      {
        "type": "p",
        "text": "*3. Déterminer une valeur approchée au dixième du nombre réel tel que . Interpréter le résultat.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "**1. Calculer la probabilité qu’un visiteur reste moins de cinq minutes dans la boutique.**"
      },
      {
        "type": "p",
        "text": "P (X < 5) = P(T > (5 – 10) ÷ 2) = 0,00621 (en utilisant la table de la loi normale)"
      },
      {
        "type": "p",
        "text": "On obtient le même résultat avec la calculatrice."
      },
      {
        "type": "p",
        "text": "Il existe une probabilité quasiment nulle que le client reste moins de cinq minutes dans la boutique. Le client restera donc plus de cinq minutes lors d’une visite de la boutique."
      },
      {
        "type": "p",
        "text": "**2. Calculer P(4 ≤ T ≤ 14).**"
      },
      {
        "type": "p",
        "text": "P (4 ≤ X ≤ 14) = P(X ≤ 14) – P(X ≤ 4) = 0,9759"
      },
      {
        "type": "p",
        "text": "**3. Déterminer une valeur approchée au dixième du nombre réel a tel que P(T ≥ a) = 0,25. Interpréter le résultat.**"
      },
      {
        "type": "p",
        "text": "t = 11,35"
      },
      {
        "type": "p",
        "text": "En moyenne, il y a 75 % de chances que le client passe moins de 11,35 minutes dans la boutique du musée."
      }
    ]
  },
  {
    "id": "ex6",
    "label": "C3.3",
    "title": "Do Mac",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "La direction du fast-food Do Mac étudie le temps que ses clients passent dans son restaurant. On admet que le temps, exprimé en minutes, passé dans ce restaurant par un client peut être modélisé par une variable aléatoire qui suit la loi normale d’espérance et d’écart-type ."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter la probabilité qu’un client pris au hasard dans ce restaurant reste entre 30 et 60 minutes.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer et interpréter la probabilité qu’un client pris au hasard dans ce restaurant reste plus de 50 minutes.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter la probabilité qu’un client pris au hasard dans ce restaurant reste entre 30 et 60 minutes.**"
      },
      {
        "type": "p",
        "text": "P(30 ≤ X ≤ 60) = P(X ≤ 60) – P(X ≤ 30) = 0,997"
      },
      {
        "type": "p",
        "text": "La probabilité qu’un client pris au hasard dans ce restaurant reste entre 30 et 60 minutes est de 0,997, soit quasiment 100 %."
      },
      {
        "type": "p",
        "text": "**2. Calculer et interpréter la probabilité qu’un client pris au hasard dans ce restaurant reste plus de 50 minutes.**"
      },
      {
        "type": "p",
        "text": "(en utilisant la table de la loi normale)"
      },
      {
        "type": "p",
        "text": "On obtient le même résultat avec la calculatrice."
      },
      {
        "type": "p",
        "text": "La probabilité qu’un client pris au hasard dans ce restaurant reste plus de 50 minutes est de 0,1587, soit environ 84 % de chances que le client soit parti avant 50 minutes."
      }
    ]
  },
  {
    "id": "ex7",
    "label": "C3.4",
    "title": "Pafla",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "La société Pafla, grossiste en flacons de parfum, souhaite étudier la qualité des flacons qu’elle reçoit. Elle a reçu 1 500 flacons d’un certain modèle provenant de deux sites de production différents (Amiens et Biarritz). Sur les 1 500 flacons reçus, 900 proviennent du site d’Amiens, les autres du site de Biarritz. On considère qu’un flacon est correctement rempli s’il contient plus de 98 mL de parfum. On admet que le volume de parfum, exprimé en millilitres, contenu dans un flacon prélevé au hasard peut être modélisé par une variable aléatoire qui suit une loi normale d’espérance et d’écart-type ."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*Calculer et interpréter la probabilité qu’un flacon prélevé au hasard soit correctement rempli.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCE ATTENDUE**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type"
      },
      {
        "type": "p",
        "text": "**Calculer et interpréter la probabilité qu’un flacon prélevé au hasard soit correctement rempli.**"
      },
      {
        "type": "p",
        "text": "On obtient le même résultat avec la calculatrice."
      },
      {
        "type": "p",
        "text": "L’entreprise a 97,72 % de chances d’obtenir un flacon bien rempli. Selon l’exigence de l’entreprise en termes de qualité, la société Pafla pourra prendre des décisions pour améliorer ce taux de qualité."
      }
    ]
  },
  {
    "id": "ex8",
    "label": "C3.5",
    "title": "Le VTT Français",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "L’entreprise Le VTT Français est une PME spécialisée dans la production de VTT. L’organisation choisie par le dirigeant est de séparer la production en trois unités , , , spécialisées respectivement dans le montage des modèles Aspin, Iseran et Tourmalet."
      },
      {
        "type": "p",
        "text": "Les nombres de VTT montés par semaine dans chaque unité ne sont pas fixes mais sont représentés par des variables aléatoires indépendantes , , qui suivent des lois normales, respectivement : , et , le premier paramètre désignant l’espérance mathématique et le second l’écart-type."
      },
      {
        "type": "p",
        "text": "Les marges unitaires brutes sur chacun des modèles sont toujours de 32, 45 et 72 euros et le montant total des coûts annexes est de 5 200 euros par semaine."
      },
      {
        "type": "p",
        "text": "On note , et les marges totales brutes hebdomadaires sur chacun des trois modèles. On note la marge nette hebdomadaire (marge totale brute moins coûts annexes) et on admet que la variable aléatoire suit une loi normale."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer l’espérance mathématique et l’écart-type de chacune des trois variables , et .*"
      },
      {
        "type": "p",
        "text": "*2. Calculer l’espérance mathématique et l’écart-type de la variable aléatoire . En déduire la loi de probabilité suivie par .*"
      },
      {
        "type": "p",
        "text": "*3. Calculer la probabilité que la marge nette hebdomadaire soit :*"
      },
      {
        "type": "p",
        "text": "*a. supérieure à 2 100 euros.*"
      },
      {
        "type": "p",
        "text": "*b. comprise entre 1 900 euros et 2 300 euros.*"
      },
      {
        "type": "p",
        "text": "*4. Calculer le montant des coûts annexes hebdomadaires tels que la probabilité d’obtenir une marge nette hebdomadaire supérieure à 2 100 euros dépasse 0,9.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**1. Calculer l’espérance mathématique et l’écart-type de chacune des trois variables M1, M2 et M3.**"
      },
      {
        "type": "p",
        "text": "E(M1) = 32E(X1) = 32 × 50 = 1 600 ; σ(M1) = 32σ(X1) = 32 × 5 = 160 ;"
      },
      {
        "type": "p",
        "text": "E(M2) = 45E(X2) = 45 × 70 = 3 150 ; σ (M2) = 45σ(X2) = 45 × 6 = 270 ;"
      },
      {
        "type": "p",
        "text": "E(M3) = 72E(X3) = 72 × 35 = 2 520 ; σ (M3) = 72σ(X3) = 72 × 4 = 288."
      },
      {
        "type": "p",
        "text": "**2. Calculer l’espérance mathématique et l’écart-type de la variable aléatoire Mh. En déduire la loi de probabilité suivie par Mh.**"
      },
      {
        "type": "p",
        "text": "Mh = M1 + M2 + M3 – 5 200, donc E(Mh) = 1 600 + 3 150 + 2 520 – 5 200 = 2 070."
      },
      {
        "type": "p",
        "text": "**3. a. Calculer la probabilité que la marge nette hebdomadaire soit supérieure à 2 100 euros.**"
      },
      {
        "type": "p",
        "text": "P(Mh > 2 100) = 1 – P(Mh ⩽ 2 100) = 1 – π = 1 – π (0,07) = 1 – 0,5279 ≈ 0,472"
      },
      {
        "type": "p",
        "text": "3. b. Calculer la probabilité que la marge nette hebdomadaire soit comprise entre 1 900 euros et 2 300 euros."
      },
      {
        "type": "p",
        "text": "P(1 900 ≤ Mh ≤ 2 300) = 0,36 (en utilisant la calculatrice)"
      },
      {
        "type": "p",
        "text": "4. Calculer le montant des coûts annexes hebdomadaires pour que la probabilité d’avoir une marge nette hebdomadaire supérieure à 2 100 euros dépasse 0,9."
      },
      {
        "type": "p",
        "text": "Soit x le montant recherché des coûts annexes hebdomadaires."
      },
      {
        "type": "p",
        "text": "D’où x < (5 170 – 1,29 × 426) : il faudrait donc limiter les coûts annexes hebdomadaires à 4 620 €."
      }
    ]
  },
  {
    "id": "ex9",
    "label": "C3.6",
    "title": "Lanz",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "La société internationale Lanz produit des miniatures de voitures anciennes de collection. Soit la variable aléatoire qui à une journée choisie au hasard dans une année associe le nombre de miniatures vendues sur son site internet marchand. suit une loi normale de moyenne 4 000 et d’écart-type 340."
      },
      {
        "type": "p",
        "text": "Chaque miniature est vendue 330 €. La marge réalisée sur la vente d’une miniature représente 45 % de son prix de vente. Toutes les miniatures respectent un processus qualité drastique. La société Lanz remplace gratuitement toute miniature égratignée. Le contrôleur de gestion évalue à 2 le nombre de retours de miniatures égratignées par jour."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Exprimer en fonction de la marge quotidienne .*"
      },
      {
        "type": "p",
        "text": "*2. Identifier la loi de probabilité et les paramètres de la marge quotidienne.*"
      },
      {
        "type": "p",
        "text": "*3. Calculer et interpréter la probabilité d’avoir une marge supérieure à 600 000 €.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**1. Exprimer en fonction de X la marge quotidienne (M).**"
      },
      {
        "type": "p",
        "text": "Marge quotidienne = 330 × X × 0,45 – (2 × 330) = 148,5X – 660"
      },
      {
        "type": "p",
        "text": "M = 148,5X – 660"
      },
      {
        "type": "p",
        "text": "**2. Identifier la loi de probabilité et les paramètres de la marge quotidienne.**"
      },
      {
        "type": "p",
        "text": "Propriétés de la loi normale : la variable aléatoire X suit une loi normale, alors la variable aléatoire M suit également une loi normale car c’est une combinaison linéaire."
      },
      {
        "type": "p",
        "text": "On doit utiliser la propriété des combinaisons linéaires suivante :"
      },
      {
        "type": "p",
        "text": "**3. Calculer et interpréter la probabilité d’avoir une marge supérieure à 600 000 €.**"
      },
      {
        "type": "p",
        "text": "P(M ≥ 600 000) = 0,4475, soit 44,75 % (en utilisant la loi normale)."
      },
      {
        "type": "p",
        "text": "La société Lanz a 44,75 % de chances de dépasser 600 000 € de marge par jour."
      }
    ]
  },
  {
    "id": "ex10",
    "label": "C3.7",
    "title": "Desjardins",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "L’entreprise de jardinerie Desjardins a fait faire une étude sur la vente de cactus de petite taille dans ses magasins. La demande mensuelle est une variable aléatoire supposée continue qui suit une loi normale d’espérance mathématique 200 et d’écart-type 20. On suppose que la demande mensuelle n’est pas affectée par les variations saisonnières, et qu’il y a indépendance entre la demande d’un mois et celle d’un autre."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer la probabilité que la demande mensuelle soit comprise, au sens large, entre 190 et 220 cactus.*"
      },
      {
        "type": "p",
        "text": "*2. Calculer la probabilité que la demande mensuelle dépasse 240 cactus.*"
      },
      {
        "type": "p",
        "text": "On suppose que le réapprovisionnement est mensuel et que la quantité de cactus commandée permet de reconstituer exactement, au début de chaque mois, le stock initial."
      },
      {
        "type": "p",
        "text": "*3. Calculer le taux de service , probabilité que la demande mensuelle soit satisfaite, dans l’hypothèse où le stock initial serait de 180 cactus.*"
      },
      {
        "type": "p",
        "text": "*4. Déterminer le stock initial dont on doit disposer si on vise un taux de service égal à 0,96.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**1. Calculer la probabilité que la demande mensuelle X soit comprise, au sens large, entre 190 et 220 cactus.**"
      },
      {
        "type": "p",
        "text": "La probabilité que la demande mensuelle X soit comprise entre 190 et 220 cactus est d’environ 0,53, soit une chance sur deux."
      },
      {
        "type": "p",
        "text": "**2. Calculer la probabilité que la demande mensuelle X dépasse 240 cactus.**"
      },
      {
        "type": "p",
        "text": "La probabilité que la demande mensuelle X dépasse 240 cactus est d’environ 0,02. Les chances d’obtenir ce niveau de ventes sont donc très faibles."
      },
      {
        "type": "p",
        "text": "**3. Calculer le taux de service (t), probabilité que la demande mensuelle soit satisfaite, dans l’hypothèse où le stock initial serait de 180 cactus.**"
      },
      {
        "type": "p",
        "text": "On cherche P(X ⩽ 180)."
      },
      {
        "type": "p",
        "text": "**4. Déterminer le stock initial dont on doit disposer si on vise un taux de service (t) égal à 0,96.**"
      },
      {
        "type": "p",
        "text": "On cherche N tel que P(X ⩽ N) = 0,96 soit = 0,96, ce qui donne d’où N = 235."
      },
      {
        "type": "p",
        "text": "Pour obtenir un taux de service de 0,96, il faut prévoir un stock de 235 cactus."
      }
    ]
  },
  {
    "id": "ex11",
    "label": "C3.8",
    "title": "Chocolor",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "La société Chocolor produit pour Pâques des œufs en chocolat garnis d’un assortiment de bonbons maisons. L’atelier familial se situe à la Croix-Rousse, à Lyon. Les époux Richart ont développé une approche qualité qui s’appuie sur les probabilités."
      },
      {
        "type": "p",
        "text": "**Partie 1**"
      },
      {
        "type": "p",
        "text": "Avant d’être garnis et emballés, les œufs sont soumis à un contrôle visuel de Renée Richart. On suppose que 5 % des œufs présentent des défauts qui les rendent impropres à la commercialisation. Ces œufs sont rejetés au contrôle avec une probabilité de 96 %. Il arrive aussi, avec une probabilité de 2 %, que des œufs sans défaut soient rejetés au contrôle."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer la probabilité qu’un œuf soit accepté au contrôle.*"
      },
      {
        "type": "p",
        "text": "On suppose que la probabilité qu’un œuf présente des défauts qui le rendent impropre à la commercialisation sachant qu’il a été accepté au contrôle vaut exactement 0,002. On note la variable aléatoire qui, à tout lot de 100 œufs pris au hasard parmi ceux acceptés au contrôle, associe le nombre d’entre eux qui présentent des défauts les rendant impropres à la commercialisation."
      },
      {
        "type": "p",
        "text": "*2. Identifier la loi de probabilité suivie par et préciser ses paramètres.*"
      },
      {
        "type": "p",
        "text": "*3. Calculer la probabilité que, sur 100 œufs pris au hasard parmi ceux acceptés au contrôle, au moins un présente des défauts qui le rendent impropre à la commercialisation.*"
      },
      {
        "type": "p",
        "text": "**Partie 2**"
      },
      {
        "type": "p",
        "text": "La masse de chocolat, en grammes, d’un œuf vide est une variable aléatoire qui suit la loi normale d’espérance mathématique 50 et d’écart type 3."
      },
      {
        "type": "p",
        "text": "La masse de garniture pour un œuf est une variable aléatoire qui suit la loi normale d’espérance mathématique 78 et d’écart type 4. On suppose que les variables aléatoires et sont indépendantes."
      },
      {
        "type": "p",
        "text": "Le chocolat utilisé pour la fabrication des œufs vides coûte 10 euros le kg, et le coût unitaire de fabrication, hors matière première, est estimé à 0,15 euro. La garniture de bonbons coûte 18 euros le kg. L’emballage d’une boîte de 20 œufs coûte 0,2 euro. Les œufs garnis sont vendus aux détaillants au prix de 50 euros la boîte de 20."
      },
      {
        "type": "p",
        "text": "On suppose que les masses des œufs garnis, dans une boîte, sont des variables aléatoires indépendantes. On note :"
      },
      {
        "type": "p",
        "text": "• le coût unitaire d’un œuf vide ;"
      },
      {
        "type": "p",
        "text": "• le coût de la garniture pour un œuf ;"
      },
      {
        "type": "p",
        "text": "• le coût unitaire (en tenant compte du coût de l’emballage) d’un œuf garni."
      },
      {
        "type": "p",
        "text": "On admet que les variables aléatoires , et suivent des lois normales."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*4. Donner l’expression de , de et de en fonction de et .*"
      },
      {
        "type": "p",
        "text": "*5. Déterminer, en justifiant les réponses, les paramètres de et .*"
      },
      {
        "type": "p",
        "text": "*6. Identifier la loi de probabilité suivie par en précisant ses paramètres.*"
      },
      {
        "type": "p",
        "text": "*7. Calculer la probabilité .*"
      },
      {
        "type": "p",
        "text": "On note le coût total de fabrication d’une boîte de 20 œufs garnis (tenant compte du prix de l’emballage)."
      },
      {
        "type": "p",
        "text": "*8. Expliquer pourquoi suit une loi normale et déterminer ses paramètres.*"
      },
      {
        "type": "p",
        "text": "*9. Calculer la probabilité que la marge sur une boîte de 20 œufs garnis soit supérieure à 8 euros.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**Partie 1**"
      },
      {
        "type": "p",
        "text": "**1. Calculer la probabilité qu’un oeuf soit accepté au contrôle.**"
      },
      {
        "type": "p",
        "text": "P(A) = 1 – [(0,05 × 0,96) + (0,95 × 0,02)] ≈ 0,933"
      },
      {
        "type": "p",
        "text": "**2. Identifier la loi de probabilité suivie par N et préciser ses paramètres.**"
      },
      {
        "type": "p",
        "text": "N suit une loi binomiale de paramètres 100 et 0,002 : (100 ; 0,002)."
      },
      {
        "type": "p",
        "text": "**3. Calculer la probabilité que, sur 100 oeufs pris au hasard parmi ceux acceptés au contrôle, au moins un présente des défauts qui le rendent impropre à la commercialisation.**"
      },
      {
        "type": "p",
        "text": "P(X ≥ 1) = 1 – P(X = 0) =1 – 0,819 = 0,181"
      },
      {
        "type": "p",
        "text": "**Partie 2**"
      },
      {
        "type": "p",
        "text": "**4. Donner l’expression de Cv , de CG et de CT en fonction de X et Y.**"
      },
      {
        "type": "p",
        "text": "**5. Déterminer, en justifiant les réponses, les paramètres de Cv et CG.**"
      },
      {
        "type": "p",
        "text": "CV et CG sont des combinaisons linéaires."
      },
      {
        "type": "p",
        "text": "Cv : N(50 × 0,01 + 0,15 ; 3 × 0,01)"
      },
      {
        "type": "p",
        "text": "Cv : N(0,65 ; 0,03)"
      },
      {
        "type": "p",
        "text": "CG : N(78 × 0,018 ; 4 × 0,018)"
      },
      {
        "type": "p",
        "text": "CG : N(1,404 ; 0,072)"
      },
      {
        "type": "p",
        "text": "**6. Identifier la loi de probabilité suivie par CT en précisant ses paramètres.**"
      },
      {
        "type": "p",
        "text": "Avec la règle d’additivité des lois normales :"
      },
      {
        "type": "p",
        "text": "**7. Calculer la probabilité P(CT < 2,1).**"
      },
      {
        "type": "p",
        "text": "**8. Expliquer pourquoi C suit une loi normale et déterminer ses paramètres.**"
      },
      {
        "type": "p",
        "text": "Il s’agit d’une addition de 20 lois normales (combinaison linéaire)."
      },
      {
        "type": "p",
        "text": "C N(20 × 2,064 ; )"
      },
      {
        "type": "p",
        "text": "C N(41,28 ; 0,349)"
      },
      {
        "type": "p",
        "text": "**9. Calculer la probabilité que la marge sur une boîte de 20 oeufs garnis soit supérieure à 8 euros.**"
      },
      {
        "type": "p",
        "text": "Recettes – Coûts (C) = Marge (M)"
      },
      {
        "type": "p",
        "text": "50 – C = M"
      },
      {
        "type": "p",
        "text": "On souhaite que la marge soit supérieure à 8 €, on cherche alors P(C < 42)."
      }
    ]
  },
  {
    "id": "ex12",
    "label": "C3.9",
    "title": "Maillard",
    "statement": [
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "La société Maillard est une PME spécialisée dans la fabrication de coussins pour fauteuils et canapés. Elle vend des coussins 1ᵉʳ prix au prix de 14 € et des coussins renforcés au prix de 38 €."
      },
      {
        "type": "p",
        "text": "Le contrôleur de gestion a modélisé les quantités vendues et des produits et par des lois normales indépendantes de paramètres :"
      },
      {
        "type": "p",
        "text": "• : et ;"
      },
      {
        "type": "p",
        "text": "• : et ."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "*1. Calculer et interpréter les probabilités suivantes :*"
      },
      {
        "type": "p",
        "text": "*• ;*"
      },
      {
        "type": "p",
        "text": "*• ;*"
      },
      {
        "type": "p",
        "text": "*• .*"
      },
      {
        "type": "p",
        "text": "*2. Déterminer l’expression du chiffre d’affaires de la société Maillard.*"
      },
      {
        "type": "p",
        "text": "*3. Identifier la loi de probabilité suivie par le chiffre d’affaires.*"
      },
      {
        "type": "p",
        "text": "*4. Calculer l’espérance et l’écart-type du chiffre d’affaires.*"
      },
      {
        "type": "p",
        "text": "*5. Calculer et interpréter la probabilité que le chiffre d’affaires dépasse 3 millions d’euros.*"
      },
      {
        "type": "p",
        "text": "*6. Calculer et interpréter la probabilité que le chiffre d’affaires passe sous la barre des 2 millions d’euros.*"
      }
    ],
    "correction": [
      {
        "type": "p",
        "text": "**COMPÉTENCES ATTENDUES**"
      },
      {
        "type": "p",
        "text": "**Compétences visées**• Calculer et interpréter une espérance et un écart-type• Identifier la loi de probabilité adaptée à une situation de gestion donnée puis calculer et interpréter les probabilités"
      },
      {
        "type": "p",
        "text": "**1. Calculer et interpréter les probabilités suivantes : P(Q1 ≥ 104 000) ; P(Q1 ⩽ 108 000) ; P(93 000 ⩽ Q1 ⩽ 99 000).**"
      },
      {
        "type": "p",
        "text": "(en utilisant la table de la loi normale)"
      },
      {
        "type": "p",
        "text": "La société Maillard a une probabilité de 32,8 % de vendre plus de 104 000 coussins de premier prix."
      },
      {
        "type": "p",
        "text": "•P(Q1 ⩽ 108 000) = 0,813"
      },
      {
        "type": "p",
        "text": "(en utilisant la table de la loi normale)"
      },
      {
        "type": "p",
        "text": "La société Maillard a 81,3 % de chances de vendre moins de 108 000 coussins de premier prix."
      },
      {
        "type": "p",
        "text": "•P(93 000 ⩽ Q1 ⩽ 99 000) = P(Q1 ⩽ 99 000) – P(Q1 ⩽ 93 000) = 0,237"
      },
      {
        "type": "p",
        "text": "La société Maillard a 23,7 % de chances de vendre entre 93 000 et 99 000 coussins de premier prix."
      },
      {
        "type": "p",
        "text": "**2. Déterminer l’expression du chiffre d’affaires de la société Maillard.**"
      },
      {
        "type": "p",
        "text": "Le chiffre d’affaires est une combinaison des ventes des deux catégories de coussins C1 et C2."
      },
      {
        "type": "p",
        "text": "CA = 14 Q1 + 38 Q2"
      },
      {
        "type": "p",
        "text": "**3. Identifier la loi de probabilité suivie par le chiffre d’affaires.**"
      },
      {
        "type": "p",
        "text": "Le chiffre d’affaires est représenté par une combinaison linéaire de deux variables indépendantes. Chaque variable suivant une loi normale, le chiffre d’affaires suivra une loi normale avec de nouveaux paramètres à déterminer."
      },
      {
        "type": "p",
        "text": "**4. Calculer l’espérance et l’écart-type du chiffre d’affaires.**"
      },
      {
        "type": "p",
        "text": "Le chiffre d’affaires est donné par l’expression : CA = 14 Q1 + 38 Q2."
      },
      {
        "type": "p",
        "text": "On doit utiliser deux propriétés des combinaisons linéaires :"
      },
      {
        "type": "p",
        "text": "X + Y => 14 Q1 + 38 Q2 avec X = 14 Q1 et Y = 38 Q2"
      },
      {
        "type": "p",
        "text": "aX + b => 14 Q1 avec a = 14 et b = 0"
      },
      {
        "type": "p",
        "text": "aX + b => 38 Q2 avec a = 38 et b = 0"
      },
      {
        "type": "p",
        "text": "E(X + Y) = E(X) + E(Y)"
      },
      {
        "type": "p",
        "text": "E(CA) = E(14 Q1 + 38 Q2) = 14 E(Q1) + 38E(Q2) = (14 × 100 000) + (38 × 34 000) = 2 692 000 €."
      },
      {
        "type": "p",
        "text": "V(CA) = V(14 Q1 + 38 Q2) = 14² V(Q1) + 38²V(Q2) = (14² × 9 000²) + (38² × 6 000²) = 67 860 000 000"
      },
      {
        "type": "p",
        "text": "(CA) = = 260 500 €"
      },
      {
        "type": "p",
        "text": "N(2 692 000 ; 260 500)"
      },
      {
        "type": "p",
        "text": "**5. Calculer et interpréter la probabilité que le chiffre d’affaires dépasse 3 millions d’euros.**"
      },
      {
        "type": "p",
        "text": "P(Q1 ≥ 3 000 000) = 0,1185"
      },
      {
        "type": "p",
        "text": "La société Maillard a 11,85 % de chances d’obtenir un chiffre d’affaires supérieur à 3 millions d’euros."
      },
      {
        "type": "p",
        "text": "**6. Calculer et interpréter la probabilité que le chiffre d’affaires passe sous la barre des 2 millions d’euros.**"
      },
      {
        "type": "p",
        "text": "P(Q1 ⩽ 2 000 000) = 0,0039"
      },
      {
        "type": "p",
        "text": "La société Maillard a 0,39 % de chance d’obtenir un chiffre d’affaires inférieur à 2 millions d’euros."
      }
    ]
  }
];
