// Généré par scripts/convert-annales.mjs depuis les annales par thème.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Annale } from "../types";

export const annales: Annale[] = [
  {
    "id": "a1",
    "year": 2012,
    "dossier": "Dossier 2",
    "entreprise": "OUF",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Le parc d’attraction OUF, créé dans les années 1980 en grande périphérie de la capitale, s’étend sur 52 hectares. Sur un marché des parcs à thème en progression mais sensible à la conjoncture, il connaît des difficultés de fréquentation et cherche à mieux connaître et fidéliser sa clientèle. La direction a mis en place un baromètre de satisfaction des visiteurs.\n**Votre mission.**Concevoir et exploiter le baromètre de satisfaction : définir des facteurs clés de succès et leurs indicateurs, puis traiter statistiquement les résultats du sondage.\n**L’enjeu décisionnel.**Les visiteurs sont-ils satisfaits, et l’action commerciale (entrée gratuite en échange du questionnaire) sera-t-elle jugée efficace au regard du taux de retour attendu ?\n**Compétences mobilisées.**\n– Définir des facteurs clés de succès et leurs indicateurs de qualité de service\n– Construire un intervalle de confiance d’une proportion\n– Mobiliser une loi de probabilité pour apprécier l’efficacité d’une action\n– Relier mesure de la satisfaction et pilotage de la qualité\n**Notions clés.***Qualité de service · facteurs clés de succès · indicateurs · intervalle de confiance d’une proportion · loi de probabilité*\n**Exercice de référence.***DCG UE11 · Session 2012 · Sujet OUF · Dossier 2.*"
      },
      {
        "type": "p",
        "text": "*Il est vous est demandé d’apporter un soin particulier à la présentation de votre copie. Toute information calculée devra être justifiée.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 2 - ENQUÊTE DE SATISFACTION DE CLIENTÈLE**"
      },
      {
        "type": "p",
        "text": "La direction du parc Ouf est soucieuse de répondre aux attentes des visiteurs et, dans cet esprit, a mis en place un baromètre de satisfaction de la clientèle."
      },
      {
        "type": "p",
        "text": "**Travail à faire À partir de l’annexe 6,**"
      },
      {
        "type": "p",
        "text": "Le service commercial envisage de pratiquer un sondage auprès de la clientèle afin de mieux la cerner."
      },
      {
        "type": "ol",
        "items": [
          "**Définir la notion de facteur clé de succès. Indiquer deux facteurs clé de succès et proposer, pour chacun d’eux, deux indicateurs qui seront intégrés dans le questionnaire.**"
        ]
      },
      {
        "type": "p",
        "text": "Le service commercial a pratiqué un sondage auprès de 500 personnes. À la question binaire du sondage « êtes-vous satisfait de votre journée au parc Ouf ? », le nombre de personnes interrogées ayant répondu « oui » s’est élevé à 350."
      },
      {
        "type": "ol",
        "items": [
          "**Calculer l’intervalle de confiance à 95 % de la proportion de personnes satisfaites sur l’ensemble de la clientèle.**"
        ]
      },
      {
        "type": "p",
        "text": "Le service commercial effectue deux sondages par an. Il propose, en échange du temps accordé au remplissage des questionnaires, un bon par famille pour une entrée gratuite d’un adulte valable pendant trois mois. L’expérience marketing de l’entreprise montre que sur l’ensemble des personnes ayant reçu un bon gratuit au cours d’une année, 300 personnes se présenteront au parc dans les trois mois pour bénéficier de la gratuité offerte. L’écart type est de 50."
      },
      {
        "type": "p",
        "text": "Le responsable marketing s’interroge sur l’opportunité de cette action commerciale. Il considère qu’elle ne peut être efficace que si le nombre de personnes intéressées qui se présentent est supérieur à 250."
      },
      {
        "type": "ol",
        "items": [
          "**Calculer la probabilité pour que l’opération soit jugée efficace par le responsable marketing.**"
        ]
      }
    ]
  },
  {
    "id": "a2",
    "year": 2015,
    "dossier": "Dossier 4",
    "entreprise": "HOUBLON",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**HOUBLON est l’une des dernières brasseries françaises indépendantes (fondée en 1748, société anonyme familiale, une centaine de salariés). Son produit phare, la bière « Grand Houblon », s’écoule à 400 000 hectolitres par an auprès des GMS et des CHR. La qualité des matières premières — levures et épices fournies notamment par SPICE — est déterminante, et la multiplication des livraisons défectueuses pèserait sur l’organisation et les coûts.\n**Votre mission.**Comme contrôleur de gestion, apprécier le risque de non-qualité des livraisons du fournisseur SPICE et évaluer une modification du système de pénalités.\n**L’enjeu décisionnel.**Quelle est la probabilité de livraisons défectueuses, et la société a-t-elle intérêt à accepter la nouvelle clause de pénalité proposée par le fournisseur ?\n**Compétences mobilisées.**\n– Identifier les impacts organisationnels et économiques de la non-qualité\n– Modéliser un nombre de défauts par la loi binomiale\n– Approcher la loi binomiale par les lois de Poisson et normale\n– Éclairer une décision d’acceptation d’une clause de pénalité\n**Notions clés.***Qualité fournisseur · loi binomiale · loi de Poisson · loi normale · pénalités de non-qualité*\n**Exercice de référence.***DCG UE11 · Session 2015 · Sujet HOUBLON · Dossier 4.*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 4 - GESTION DE la QUalitÉ"
      },
      {
        "type": "p",
        "text": "Dans la composition de la bière entrent les levures et, pour les bières spéciales, les épices. La qualité de ces matières premières est essentielle pour fabriquer une bière d’exception. La société HOUBLON se les fait livrer par son fournisseur SPICE. La société HOUBLON a constaté que sur cent livraisons, deux sont défectueuses. L’accord passé entre la société HOUBLON et son fournisseur SPICE prévoit une pénalité de 5 % du prix de vente dès qu’il y a au moins une livraison défectueuse pour vingt livraisons effectuées."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**À l’aide des annexes 7, 8 et 9 :**"
      },
      {
        "type": "ol",
        "items": [
          "**Sans calcul préalable, identifier les impacts organisationnels et économiques que risque de supporter la société HOUBLON du fait de la multiplication éventuelle des livraisons défectueuses.**",
          "**Déterminer les paramètres de la loi binomiale de probabilités suivie par le nombre de livraisons défectueuses pour vingt livraisons réalisées, sachant que les occurrences des défectuosités sont indépendantes. Calculer la probabilité d’avoir au moins une livraison défectueuse.**"
        ]
      },
      {
        "type": "p",
        "text": "*"
      },
      {
        "type": "p",
        "text": "Le fournisseur SPICE propose une modification de la pénalité. Cette dernière s’appliquerait dès trois livraisons défectueuses sur cinquante livraisons effectuées."
      },
      {
        "type": "ol",
        "items": [
          "**À l’aide de la loi de Poisson, justifier son recours et déterminer la probabilité d’avoir trois livraisons défectueuses au moins. La société HOUBLON a-t-elle intérêt à accepter cette modification contractuelle ?**"
        ]
      },
      {
        "type": "p",
        "text": "*"
      },
      {
        "type": "p",
        "text": "Sur plusieurs années, le nombre de livraisons effectuées par le fournisseur SPICE est en moyenne de 1276. La direction de la société HOUBLON vous charge de déterminer quelle est la probabilité d’avoir moins de quinze livraisons défectueuses en 2015 avec ce fournisseur."
      },
      {
        "type": "ol",
        "items": [
          "**A l’aide de la loi normale, justifier son recours et calculer la probabilité d’avoir moins de quinze livraisons défectueuses, la correction de continuité étant supposée faite.**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 7**"
      },
      {
        "type": "p",
        "text": "**Rappels sur les lois de probabilités**"
      },
      {
        "type": "ul",
        "items": [
          "Calcul de probabilité d’une variable aléatoire suivant une loi binomiale"
        ]
      },
      {
        "type": "p",
        "text": "La probabilité pour que la variable aléatoire soit égale à k se calcule comme suit :"
      },
      {
        "type": "p",
        "text": "P(X=k) = Cnk pk qn-k avec Cnk = n! /(k!(n-k)!)"
      },
      {
        "type": "h3",
        "text": "Conditions d’approximation d’une loi binomiale"
      },
      {
        "type": "table",
        "headers": [
          "**Si X suit une loi binomiale B(n,p)**",
          "**X peut être approchée par une loi**"
        ],
        "rows": [
          [
            "Si n>= 30 et p < 0.1 et np<15",
            "de Poisson P() avec = np"
          ],
          [
            "Si n >= 30 et p=0.5 et q =0.5Ou si np>15 et nq>15Ou si npq>10",
            "Normale N(np,)"
          ]
        ]
      },
      {
        "type": "ul",
        "items": [
          "Calcul de probabilité d’une variable aléatoire suivant une loi de Poisson"
        ]
      },
      {
        "type": "table",
        "headers": [
          "**P(X=k) = e -**",
          "**k**"
        ],
        "rows": [
          [
            "k!"
          ]
        ]
      },
      {
        "type": "ul",
        "items": [
          "Condition d’approximation d’une loi de Poisson"
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Si X suit une loi de Poisson P()**",
          "**X peut être approchée par une loi**"
        ],
        "rows": [
          [
            "Si >15",
            "Normale N(,)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 8**"
      },
      {
        "type": "p",
        "text": "**Table de la loi de Poisson**"
      },
      {
        "type": "table",
        "headers": [
          "**Probabilités individuelles :**",
          "**P(X=k) = e -**",
          "**k**"
        ],
        "rows": [
          [
            "k !"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "**k**",
          "**=1**",
          "**=2**",
          "**=3**",
          "**=4**",
          "**=5**",
          "**=6**",
          "**=7**",
          "**=8**",
          "**=9**",
          "**=10**"
        ],
        "rows": [
          [
            "0",
            "0,3679",
            "0,1353",
            "0,0498",
            "0,0183",
            "0,0067",
            "0,0025",
            "0,0009",
            "0,0003",
            "0,0001",
            "0"
          ],
          [
            "1",
            "0,3679",
            "0,2707",
            "0,1494",
            "0,0733",
            "0,0337",
            "0,0149",
            "0,0064",
            "0,0027",
            "0,0011",
            "0,0005"
          ],
          [
            "2",
            "0,1839",
            "0,2707",
            "0,224",
            "0,1465",
            "0,0842",
            "0,0446",
            "0,0223",
            "0,0107",
            "0,005",
            "0,0023"
          ],
          [
            "3",
            "0,0613",
            "0,1804",
            "0,224",
            "0,1954",
            "0,1404",
            "0,0892",
            "0,0521",
            "0,0286",
            "0,015",
            "0,0076"
          ],
          [
            "4",
            "0,0153",
            "0,0902",
            "0,168",
            "0,1954",
            "0,1755",
            "0,1339",
            "0,0912",
            "0,0573",
            "0,0337",
            "0,0189"
          ],
          [
            "5",
            "0,0031",
            "0,0361",
            "0,1008",
            "0,1563",
            "0,1755",
            "0,1606",
            "0,1277",
            "0,0916",
            "0,0607",
            "0,0378"
          ],
          [
            "6",
            "0,0005",
            "0,012",
            "0,0504",
            "0,1042",
            "0,1462",
            "0,1606",
            "0,149",
            "0,1221",
            "0,0911",
            "0,0631"
          ],
          [
            "7",
            "0,0001",
            "0,0034",
            "0,0216",
            "0,0595",
            "0,1044",
            "0,1377",
            "0,149",
            "0,1396",
            "0,1171",
            "0,0901"
          ],
          [
            "8",
            "0",
            "0,0009",
            "0,0081",
            "0,0298",
            "0,0653",
            "0,1033",
            "0,1304",
            "0,1396",
            "0,1318",
            "0,1126"
          ],
          [
            "9",
            "",
            "0,0002",
            "0,0027",
            "0,0132",
            "0,0363",
            "0,0688",
            "0,1014",
            "0,1241",
            "0,1318",
            "0,1251"
          ],
          [
            "10",
            "",
            "0",
            "0,0008",
            "0,0053",
            "0,0181",
            "0,0413",
            "0,071",
            "0,0993",
            "0,1186",
            "0,1251"
          ],
          [
            "11",
            "",
            "",
            "0,0002",
            "0,0019",
            "0,0082",
            "0,0225",
            "0,0452",
            "0,0722",
            "0,097",
            "0,1137"
          ],
          [
            "12",
            "",
            "",
            "0,0001",
            "0,0006",
            "0,0034",
            "0,0113",
            "0,0263",
            "0,0481",
            "0,0728",
            "0,0948"
          ],
          [
            "13",
            "",
            "",
            "0",
            "0,0002",
            "0,0013",
            "0,0052",
            "0,0142",
            "0,0296",
            "0,0504",
            "0,0729"
          ],
          [
            "14",
            "",
            "",
            "",
            "0,0001",
            "0,0005",
            "0,0022",
            "0,0071",
            "0,0169",
            "0,0324",
            "0,0521"
          ],
          [
            "15",
            "",
            "",
            "",
            "0",
            "0,0002",
            "0,0009",
            "0,0033",
            "0,009",
            "0,0194",
            "0,0347"
          ],
          [
            "16",
            "",
            "",
            "",
            "",
            "0",
            "0,0003",
            "0,0014",
            "0,0045",
            "0,0109",
            "0,0217"
          ],
          [
            "17",
            "",
            "",
            "",
            "",
            "",
            "0,0001",
            "0,0006",
            "0,0021",
            "0,0058",
            "0,0128"
          ],
          [
            "18",
            "",
            "",
            "",
            "",
            "",
            "0",
            "0,0002",
            "0,0009",
            "0,0029",
            "0,0071"
          ],
          [
            "19",
            "",
            "",
            "",
            "",
            "",
            "",
            "0,0001",
            "0,0004",
            "0,0014",
            "0,0037"
          ],
          [
            "20",
            "",
            "",
            "",
            "",
            "",
            "",
            "0",
            "0,0002",
            "0,0006",
            "0,0019"
          ],
          [
            "21",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "0,0001",
            "0,0003",
            "0,0009"
          ],
          [
            "22",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "0",
            "0,0001",
            "0,0004"
          ],
          [
            "23",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "0",
            "0,0002"
          ],
          [
            "24",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "0,0001"
          ],
          [
            "25",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "0"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 9**"
      },
      {
        "type": "p",
        "text": "**Table de la loi normale centrée réduite** P(T<=t) = (t)"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**",
          "**0,06**",
          "**0,07**",
          "**0,08**",
          "**0,09**"
        ],
        "rows": [
          [
            "0",
            "0,5",
            "0,504",
            "0,508",
            "0,512",
            "0,516",
            "0,5199",
            "0,5239",
            "0,5279",
            "0,5319",
            "0,5359"
          ],
          [
            "0,1",
            "0,5398",
            "0,5438",
            "0,5478",
            "0,5517",
            "0,5557",
            "0,5596",
            "0,5636",
            "0,5675",
            "0,5714",
            "0,5753"
          ],
          [
            "0,2",
            "0,5793",
            "0,5832",
            "0,5871",
            "0,591",
            "0,5948",
            "0,5987",
            "0,6026",
            "0,6064",
            "0,6103",
            "0,6141"
          ],
          [
            "0,3",
            "0,6179",
            "0,6217",
            "0,6255",
            "0,6293",
            "0,6331",
            "0,6368",
            "0,6406",
            "0,6443",
            "0,648",
            "0,6517"
          ],
          [
            "0,4",
            "0,6554",
            "0,6591",
            "0,6628",
            "0,6664",
            "0,67",
            "0,6736",
            "0,6772",
            "0,6808",
            "0,6844",
            "0,6879"
          ],
          [
            "0,5",
            "0,6915",
            "0,695",
            "0,6985",
            "0,7019",
            "0,7054",
            "0,7088",
            "0,7123",
            "0,7157",
            "0,719",
            "0,7224"
          ],
          [
            "0,6",
            "0,7257",
            "0,7291",
            "0,7324",
            "0,7357",
            "0,7389",
            "0,7422",
            "0,7454",
            "0,7486",
            "0,7517",
            "0,7549"
          ],
          [
            "0,7",
            "0,758",
            "0,7611",
            "0,7642",
            "0,7673",
            "0,7704",
            "0,7734",
            "0,7764",
            "0,7794",
            "0,7823",
            "0,7852"
          ],
          [
            "0,8",
            "0,7881",
            "0,791",
            "0,7939",
            "0,7967",
            "0,7995",
            "0,8023",
            "0,8051",
            "0,8078",
            "0,8106",
            "0,8133"
          ],
          [
            "0,9",
            "0,8159",
            "0,8186",
            "0,8212",
            "0,8238",
            "0,8264",
            "0,8289",
            "0,8315",
            "0,834",
            "0,8365",
            "0,8389"
          ],
          [
            "1",
            "0,8413",
            "0,8438",
            "0,8461",
            "0,8485",
            "0,8508",
            "0,8531",
            "0,8554",
            "0,8577",
            "0,8599",
            "0,8621"
          ],
          [
            "1,1",
            "0,8643",
            "0,8665",
            "0,8686",
            "0,8708",
            "0,8729",
            "0,8749",
            "0,877",
            "0,879",
            "0,881",
            "0,883"
          ],
          [
            "1,2",
            "0,8849",
            "0,8869",
            "0,8888",
            "0,8907",
            "0,8925",
            "0,8944",
            "0,8962",
            "0,898",
            "0,8997",
            "0,9015"
          ],
          [
            "1,3",
            "0,9032",
            "0,9049",
            "0,9066",
            "0,9082",
            "0,9099",
            "0,9115",
            "0,9131",
            "0,9147",
            "0,9162",
            "0,9177"
          ],
          [
            "1,4",
            "0,9192",
            "0,9207",
            "0,9222",
            "0,9236",
            "0,9251",
            "0,9265",
            "0,9279",
            "0,9292",
            "0,9306",
            "0,9319"
          ],
          [
            "1,5",
            "0,9332",
            "0,9345",
            "0,9357",
            "0,937",
            "0,9382",
            "0,9394",
            "0,9406",
            "0,9418",
            "0,9429",
            "0,9441"
          ],
          [
            "1,6",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505",
            "0,9515",
            "0,9525",
            "0,9535",
            "0,9545"
          ],
          [
            "1,7",
            "0,9554",
            "0,9564",
            "0,9573",
            "0,9582",
            "0,9591",
            "0,9599",
            "0,9608",
            "0,9616",
            "0,9625",
            "0,9633"
          ],
          [
            "1,8",
            "0,9641",
            "0,9649",
            "0,9656",
            "0,9664",
            "0,9671",
            "0,9678",
            "0,9686",
            "0,9693",
            "0,9699",
            "0,9706"
          ],
          [
            "1,9",
            "0,9713",
            "0,9719",
            "0,9726",
            "0,9732",
            "0,9738",
            "0,9744",
            "0,975",
            "0,9756",
            "0,9761",
            "0,9767"
          ],
          [
            "2",
            "0,9772",
            "0,9778",
            "0,9783",
            "0,9788",
            "0,9793",
            "0,9798",
            "0,9803",
            "0,9808",
            "0,9812",
            "0,9817"
          ],
          [
            "2,1",
            "0,9821",
            "0,9826",
            "0,983",
            "0,9834",
            "0,9838",
            "0,9842",
            "0,9846",
            "0,985",
            "0,9854",
            "0,9857"
          ],
          [
            "2,2",
            "0,9861",
            "0,9864",
            "0,9868",
            "0,9871",
            "0,9875",
            "0,9878",
            "0,9881",
            "0,9884",
            "0,9887",
            "0,989"
          ],
          [
            "2,3",
            "0,9893",
            "0,9896",
            "0,9898",
            "0,9901",
            "0,9904",
            "0,9906",
            "0,9909",
            "0,9911",
            "0,9913",
            "0,9916"
          ],
          [
            "2,4",
            "0,9918",
            "0,992",
            "0,9922",
            "0,9925",
            "0,9927",
            "0,9929",
            "0,9931",
            "0,9932",
            "0,9934",
            "0,9936"
          ],
          [
            "2,5",
            "0,9938",
            "0,994",
            "0,9941",
            "0,9943",
            "0,9945",
            "0,9946",
            "0,9948",
            "0,9949",
            "0,9951",
            "0,9952"
          ],
          [
            "2,6",
            "0,9953",
            "0,9955",
            "0,9956",
            "0,9957",
            "0,9959",
            "0,996",
            "0,9961",
            "0,9962",
            "0,9963",
            "0,9964"
          ],
          [
            "2,7",
            "0,9965",
            "0,9966",
            "0,9967",
            "0,9968",
            "0,9969",
            "0,997",
            "0,9971",
            "0,9972",
            "0,9973",
            "0,9974"
          ],
          [
            "2,8",
            "0,9974",
            "0,9975",
            "0,9976",
            "0,9977",
            "0,9977",
            "0,9978",
            "0,9979",
            "0,9979",
            "0,998",
            "0,9981"
          ],
          [
            "2,9",
            "0,9981",
            "0,9982",
            "0,9982",
            "0,9983",
            "0,9984",
            "0,9984",
            "0,9985",
            "0,9985",
            "0,9986",
            "0,9986"
          ],
          [
            "Table pour les grandes valeurs de t"
          ],
          [
            "t",
            "3",
            "3,1",
            "3,2",
            "3,3",
            "3,4",
            "3,5",
            "3,6",
            "3,8",
            "4",
            "4,5"
          ],
          [
            "(t)",
            "0,99865",
            "0,99904",
            "0,99931",
            "0,99952",
            "0,99966",
            "0,99976",
            "0,99984",
            "0,99992",
            "0,99997",
            "0,99999"
          ]
        ]
      },
      {
        "type": "p",
        "text": "N.B. La table donne les valeurs de (t) pour t > 0. Si t est négatif, on prend le complément à l'unité de la valeur lue dans la table : (-t) = 1 - (t)"
      }
    ]
  },
  {
    "id": "a3",
    "year": 2016,
    "dossier": "Dossier 4",
    "entreprise": "PhytoDrink",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**ALTEOS, créée en 1999 par d’anciens médecins, fabrique et commercialise compléments alimentaires et produits de phytothérapie. Parmi eux, des ampoules de magnésium marin et vitamine B6, dont le dosage en éléments actifs est encadré par des normes et contrôlé par des organismes indépendants. La direction veut garantir une conformité parfaite des dosages.\n**Votre mission.**Mettre en place un test de conformité statistique sur la teneur en magnésium des ampoules et en tirer une décision d’acceptation.\n**L’enjeu décisionnel.**Les dosages respectent-ils la teneur cible de 250 mg ? Comment fixer un intervalle d’acceptation et décider, au vu d’un échantillon, si la production est conforme ?\n**Compétences mobilisées.**\n– Calculer une probabilité avec la loi normale\n– Construire un intervalle de confiance / d’acceptation d’une moyenne\n– Analyser l’effet du seuil de risque sur l’intervalle\n– Prendre une décision de conformité et en mesurer les enjeux qualité\n**Notions clés.***Contrôle qualité · loi normale · test de conformité d’une moyenne · intervalle d’acceptation · seuil de risque*\n**Exercice de référence.***DCG UE11 · Session 2016 · Sujet ALTEOS / PhytoDrink · Dossier 4.*"
      },
      {
        "type": "callout",
        "variant": "info",
        "title": "*Il vous est demandé d’apporter un soin particulier à la présentation ",
        "text": "*Toute information calculée devra être justifiée*"
      },
      {
        "type": "h3",
        "text": "DOSSIER 4 – CONTRÔLE QUALITÉ"
      },
      {
        "type": "p",
        "text": "Parmi les produits de phytothérapie, ALTEOS distribue des ampoules de magnésium marin et vitamine B6 pour lutter contre la fatigue liée au surmenage et au stress. Chaque ampoule doit contenir 250 mg de magnésium."
      },
      {
        "type": "p",
        "text": "Il existe des normes et règlementations sur les dosages d’éléments actifs dans ces produits parapharmaceutiques. Des contrôles réguliers sont donc effectués par des organismes indépendants."
      },
      {
        "type": "p",
        "text": "Les dirigeants d’ALTEOS souhaitent impérativement répondre parfaitement à ces exigences."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**À l’aide des*annexes 7*et*8 :***"
      },
      {
        "type": "ol",
        "items": [
          "**Sachant que le dosage en magnésium d’une ampoule suit une loi normale de moyenne de 250 mg avec un écart type de 20 mg, calculer la probabilité qu'une ampoule ait un dosage inférieur à 246 mg ?**"
        ]
      },
      {
        "type": "p",
        "text": "La société ALTÉOS est soucieuse de la qualité de ses dosages afin d’être certaine de n’avoir que des contrôles satisfaisants de la part des organismes indépendants."
      },
      {
        "type": "ol",
        "items": [
          "**Citer les principaux enjeux d’une qualité maximale pour la société ALTEOS.**"
        ]
      },
      {
        "type": "p",
        "text": "Chaque ampoule doit contenir 250 mg de magnésium et la société ALTEOS souhaite établir un test de conformité sur cette teneur en magnésium."
      },
      {
        "type": "ol",
        "items": [
          "**Construire l’intervalle de confiance au seuil de 1% pour des échantillons de 100 ampoules, au seuil de risque de 1 %.**",
          "**Sans faire de calcul, expliquer comment évoluerait l’intervalle d’acceptation pour un seuil de risque de 5 %.**"
        ]
      },
      {
        "type": "p",
        "text": "Finalement, un seuil de risque de 5 % a été retenu et l’intervalle d’acceptation [246,08 ; 253,92] a été obtenu."
      },
      {
        "type": "p",
        "text": "Sur un échantillon de 100 ampoules, un dosage moyen en magnésium de 252,8 mg a été relevé."
      },
      {
        "type": "ol",
        "items": [
          "**Quelle décision doit être prise ?**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 7 Renseignements pour le calcul de la région d’acceptation du test de moyenne**"
      },
      {
        "type": "image",
        "src": "/figures/annales-dcg-ue11-gestion-qualite/01.x-wmf",
        "alt": "Annexe"
      },
      {
        "type": "p",
        "text": "Quelle que soit la taille de l’échantillon, si la variable aléatoire X suit une loi normale, la distribution d’échantillonnage d’une moyenne, variable aléatoire notée suit une loi normale."
      },
      {
        "type": "image",
        "src": "/figures/annales-dcg-ue11-gestion-qualite/02.x-wmf",
        "alt": "Annexe"
      },
      {
        "type": "p",
        "text": "De même, d’après le théorème de la limite centrale, quelle que soit la loi suivie par la variable aléatoire X, si n 30, la variable aléatoire suit une loi normale."
      },
      {
        "type": "callout",
        "variant": "info",
        "title": "Si n 30 ou si X suit une loi N(m, )",
        "text": "**suit une loi N(m, )**"
      },
      {
        "type": "p",
        "text": "**Annexe 8 Table de la loi normale centrée réduite**"
      },
      {
        "type": "p",
        "text": "Fonction de répartition de la loi normale centrée réduite : P(T ≤ t) = π(t)"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0,00**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**",
          "**0,06**",
          "**0,07**",
          "**0,08**",
          "**0,09**"
        ],
        "rows": [
          [
            "0,0",
            "0,5000",
            "0,5040",
            "0,5080",
            "0,5120",
            "0,5160",
            "0,5199",
            "0,5239",
            "0,5279",
            "0,5319",
            "0,5359"
          ],
          [
            "0,1",
            "0,5398",
            "0,5438",
            "0,5478",
            "0,5517",
            "0,5557",
            "0,5596",
            "0,5636",
            "0,5675",
            "0,5714",
            "0,5753"
          ],
          [
            "0,2",
            "0,5793",
            "0,5832",
            "0,5871",
            "0,5910",
            "0,5948",
            "0,5987",
            "0,6026",
            "0,6064",
            "0,6103",
            "0,6141"
          ],
          [
            "0,3",
            "0,6179",
            "0,6217",
            "0,6255",
            "0,6293",
            "0,6331",
            "0,6368",
            "0,6406",
            "0,6443",
            "0,6480",
            "0,6517"
          ],
          [
            "0,4",
            "0,6554",
            "0,6591",
            "0,6628",
            "0,6664",
            "0,6700",
            "0,6736",
            "0,6772",
            "0,6808",
            "0,6844",
            "0,6879"
          ],
          [
            "0,5",
            "0,6915",
            "0,6950",
            "0,6985",
            "0,7019",
            "0,7054",
            "0,7088",
            "0,7123",
            "0,7157",
            "0,7190",
            "0,7224"
          ],
          [
            "0,6",
            "0,7257",
            "0,7291",
            "0,7324",
            "0,7357",
            "0,7389",
            "0,7422",
            "0,7454",
            "0,7486",
            "0,7517",
            "0,7549"
          ],
          [
            "0,7",
            "0,7580",
            "0,7611",
            "0,7642",
            "0,7673",
            "0,7704",
            "0,7734",
            "0,7764",
            "0,7794",
            "0,7823",
            "0,7852"
          ],
          [
            "0,8",
            "0,7881",
            "0,7910",
            "0,7939",
            "0,7967",
            "0,7995",
            "0,8023",
            "0,8051",
            "0,8078",
            "0,8106",
            "0,8133"
          ],
          [
            "0,9",
            "0,8159",
            "0,8186",
            "0,8212",
            "0,8238",
            "0,8264",
            "0,8289",
            "0,8315",
            "0,8340",
            "0,8365",
            "0,8389"
          ],
          [
            "1",
            "0,8413",
            "0,8438",
            "0,8461",
            "0,8485",
            "0,8508",
            "0,8531",
            "0,8554",
            "0,8577",
            "0,8599",
            "0,8621"
          ],
          [
            "1,1",
            "0,8643",
            "0,8665",
            "0,8686",
            "0,8708",
            "0,8729",
            "0,8749",
            "0,8770",
            "0,8790",
            "0,8810",
            "0,8830"
          ],
          [
            "1,2",
            "0,8849",
            "0,8869",
            "0,8888",
            "0,8907",
            "0,8925",
            "0,8944",
            "0,8962",
            "0,8980",
            "0,8997",
            "0,9015"
          ],
          [
            "1,3",
            "0,9032",
            "0,9049",
            "0,9066",
            "0,9082",
            "0,9099",
            "0,9115",
            "0,9131",
            "0,9147",
            "0,9162",
            "0,9177"
          ],
          [
            "1,4",
            "0,9192",
            "0,9207",
            "0,9222",
            "0,9236",
            "0,9251",
            "0,9265",
            "0,9279",
            "0,9292",
            "0,9306",
            "0,9319"
          ],
          [
            "1,5",
            "0,9332",
            "0,9345",
            "0,9357",
            "0,9370",
            "0,9382",
            "0,9394",
            "0,9406",
            "0,9418",
            "0,9429",
            "0,9441"
          ],
          [
            "1,6",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505",
            "0,9515",
            "0,9525",
            "0,9535",
            "0,9545"
          ],
          [
            "1,7",
            "0,9554",
            "0,9564",
            "0,9573",
            "0,9582",
            "0,9591",
            "0,9599",
            "0,9608",
            "0,9616",
            "0,9625",
            "0,9633"
          ],
          [
            "1,8",
            "0,9641",
            "0,9649",
            "0,9656",
            "0,9664",
            "0,9671",
            "0,9678",
            "0,9686",
            "0,9693",
            "0,9699",
            "0,9706"
          ],
          [
            "1,9",
            "0,9713",
            "0,9719",
            "0,9726",
            "0,9732",
            "0,9738",
            "0,9744",
            "0,9750",
            "0,9756",
            "0,9761",
            "0,9767"
          ],
          [
            "2",
            "0,9772",
            "0,9778",
            "0,9783",
            "0,9788",
            "0,9793",
            "0,9798",
            "0,9803",
            "0,9808",
            "0,9812",
            "0,9817"
          ],
          [
            "2,1",
            "0,9821",
            "0,9826",
            "0,9830",
            "0,9834",
            "0,9838",
            "0,9842",
            "0,9846",
            "0,9850",
            "0,9854",
            "0,9857"
          ],
          [
            "2,2",
            "0,9861",
            "0,9864",
            "0,9868",
            "0,9871",
            "0,9875",
            "0,9878",
            "0,9881",
            "0,9884",
            "0,9887",
            "0,9890"
          ],
          [
            "2,3",
            "0,9893",
            "0,9896",
            "0,9898",
            "0,9901",
            "0,9904",
            "0,9906",
            "0,9909",
            "0,9911",
            "0,9913",
            "0,9916"
          ],
          [
            "2,4",
            "0,9918",
            "0,9920",
            "0,9922",
            "0,9925",
            "0,9927",
            "0,9929",
            "0,9931",
            "0,9932",
            "0,9934",
            "0,9936"
          ],
          [
            "2,5",
            "0,9938",
            "0,9940",
            "0,9941",
            "0,9943",
            "0,9945",
            "0,9946",
            "0,9948",
            "0,9949",
            "0,9951",
            "0,9952"
          ],
          [
            "2,6",
            "0,9953",
            "0,9955",
            "0,9956",
            "0,9957",
            "0,9959",
            "0,9960",
            "0,9961",
            "0,9962",
            "0,9963",
            "0,9964"
          ],
          [
            "2,7",
            "0,9965",
            "0,9966",
            "0,9967",
            "0,9968",
            "0,9969",
            "0,9970",
            "0,9971",
            "0,9972",
            "0,9973",
            "0,9974"
          ],
          [
            "2,8",
            "0,9974",
            "0,9975",
            "0,9976",
            "0,9977",
            "0,9977",
            "0,9978",
            "0,9979",
            "0,9979",
            "0,9980",
            "0,9981"
          ],
          [
            "2,9",
            "0,9981",
            "0,9982",
            "0,9982",
            "0,9983",
            "0,9984",
            "0,9984",
            "0,9985",
            "0,9985",
            "0,9986",
            "0,9986"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**TABLE POUR LES GRANDES VALEURS DE t**"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**3,0**",
          "**3,1**",
          "**3,2**",
          "**3,3**",
          "**3,4**",
          "**3,5**",
          "**3,6**",
          "**3,8**",
          "**4,0**",
          "**4,5**"
        ],
        "rows": [
          [
            "π(t)",
            "0,99865",
            "0,99904",
            "0,99931",
            "0,99952",
            "0,99966",
            "0,99976",
            "0,99984",
            "0,99992",
            "0,99997",
            "0,99999"
          ]
        ]
      }
    ]
  },
  {
    "id": "a4",
    "year": 2019,
    "dossier": "Dossier 4",
    "entreprise": "PLAISIRS DU MIEL",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**PLAISIRS DU MIEL, société anonyme installée en Aquitaine (créée en 2005 par Éloïse Fernandez), sélectionne, conditionne et commercialise des miels et a diversifié son offre (cosmétique, apithérapie, produits gourmands). Un audit externe réalisé fin 2018 a révélé des dysfonctionnements au service approvisionnement en miel, avec un impact sur la qualité chimique, bactériologique et gustative des miels achetés.\n**Votre mission.**Structurer le pilotage de la qualité du service approvisionnement : outils de suivi, contrôle par échantillonnage de la teneur en H.M.F. et tableau de bord.\n**L’enjeu décisionnel.**Comment sécuriser la qualité des miels reçus des fournisseurs et suivre dans le temps les améliorations de performance du service approvisionnement ?\n**Compétences mobilisées.**\n– Choisir un outil de suivi de la performance et en justifier l’intérêt\n– Identifier les enjeux d’une démarche qualité fournisseur\n– Construire des bornes d’acceptation et décider de la conformité (loi normale)\n– Proposer des facteurs clés de succès et indicateurs pour un tableau de bord\n**Notions clés.***Démarche qualité · contrôle par échantillonnage · loi normale · bornes d’acceptation · tableau de bord · facteurs clés de succès*\n**Exercice de référence.***DCG UE11 · Session 2019 · Sujet PLAISIRS DU MIEL · Dossier 4.*"
      },
      {
        "type": "p",
        "text": "**NB - Les commentaires et analyses de résultats sont aussi importants que les éléments calculatoires.**"
      },
      {
        "type": "p",
        "text": "**DOSSIER 4 – PILOTAGE DE LA QUALITÉ (6 points)**"
      },
      {
        "type": "p",
        "text": "Après une période faste de forte croissance de l’activité, la société PLAISIRS DU MIEL n’est pas épargnée par la crise économique. De nombreux acteurs sont apparus sur le marché des cosmétiques bio, la concurrence s’est nettement intensifiée. Dans ce contexte, les clients sont de plus en plus exigeants : certains clients historiques, notamment parmi les centrales d’achat de la grande distribution, ont décidé récemment de changer de fournisseur."
      },
      {
        "type": "p",
        "text": "Soucieuse de cette situation, Éloïse FERNANDEZ a fait réaliser un diagnostic de l’organisation par un cabinet de consultant fin 2018. Celui-ci a réalisé un audit des flux d’approvisionnement de l’entreprise, en mettant en évidence les dysfonctionnements tant internes qu’externes."
      },
      {
        "type": "p",
        "text": "L’audit externe a notamment mis en évidence des dysfonctionnements importants au niveau du service des approvisionnements en miel (annexe n° 6)."
      },
      {
        "type": "p",
        "text": "**Travail à faire**"
      },
      {
        "type": "p",
        "text": "**À l’aide des *annexes 6, 7 et 8,***"
      },
      {
        "type": "ol",
        "items": [
          "**Identifier l’outil de gestion qui permettrait de suivre au fil du temps les améliorations de performance du service approvisionnement en précisant son intérêt (3 idées attendues).**"
        ]
      },
      {
        "type": "p",
        "text": "L’audit externe a également mis en évidence quelques difficultés avec certains de ses fournisseurs ayant un impact sur les qualités chimiques, bactériologiques et gustatives des miels achetés. La qualité est en effet un enjeu indispensable au positionnement PLAISIRS DU MIEL."
      },
      {
        "type": "ol",
        "items": [
          "**Montrer les enjeux d’une démarche qualité pour le service approvisionnement (3 enjeux attendus).**"
        ]
      },
      {
        "type": "p",
        "text": "Dans ce contexte, PLAISIRS DU MIEL souhaite, via son laboratoire, développer une logique de partenariat avec ses fournisseurs. Il met en place des contrôles par échantillonnage, notamment sur le teneur en H.M.F. (hydroxy méthyl furfural) qui est le critère qui mesure le vieillissement du miel."
      },
      {
        "type": "p",
        "text": "La teneur moyenne en H.M.F. admise est de 15 000 μg / kg."
      },
      {
        "type": "p",
        "text": "On considère que cette teneur en H.M.F. est une variable aléatoire normale d’écart-type 125 μg / kg."
      },
      {
        "type": "ol",
        "items": [
          "**Quelle est la probabilité de recevoir un fût de miel avec une teneur supérieure à 15 200 μg / kg ?**"
        ]
      },
      {
        "type": "p",
        "text": "Dans le cadre de ses contrôles qualité, l’entreprise effectue des tests sur des échantillons prélevés au hasard."
      },
      {
        "type": "ol",
        "items": [
          "**Déterminer les bornes d’acceptation qui permettent de valider ou non la conformité d’un échantillon.**"
        ]
      },
      {
        "type": "p",
        "text": "Sur un échantillon de 50 fûts de miel, on a relevé les caractéristiques suivantes :"
      },
      {
        "type": "ul",
        "items": [
          "moyenne observée : 15 050 μg / kg ;",
          "écart-type observé : 130 μg / kg."
        ]
      },
      {
        "type": "ol",
        "items": [
          "**Quelle décision sera prise sur cet échantillon ?**",
          "**Préciser une limite de cette méthode et indiquer les outils qu’il serait possible de mettre en place (4 outils attendus).**",
          "**Proposer trois facteurs clés de succès que vous justifierez et deux indicateurs correspondant pour chacun, qui pourraient figurer dans un tableau de bord de suivi de la performance du service approvisionnement.**"
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 6 – Procédure de mise en œuvre des tests qualité**"
      },
      {
        "type": "p",
        "text": "Les fûts sont considérés conformes si la teneur en H.M.F. suit la loi normale de moyenne 15 000 μg / kg et d’écart-type 125 μg / kg."
      },
      {
        "type": "p",
        "text": "Lors des contrôles qualité, on effectue des prélèvements de 50 fûts. On fait l’hypothèse qu’une la livraison est conforme si la teneur moyenne en H.M.F. est de 15 000 μg / kg (hypothèse alternative : la teneur moyenne en H.M.F. est différente de 15 000 μg / kg), c’est-à-dire qu’elle correspond à une population type."
      },
      {
        "type": "p",
        "text": "On regarde la moyenne que l’on devrait alors obtenir dans un échantillon de taille 50 avec un risque de 5 % ce qui permet de déterminer des bornes d’acceptation."
      },
      {
        "type": "p",
        "text": "On compare la moyenne observée sur chaque échantillon avec les bornes précédemment définies."
      },
      {
        "type": "p",
        "text": "**Annexe 7 – Diagnostic des dysfonctionnements du service approvisionnement.**"
      },
      {
        "type": "table",
        "headers": [
          "",
          "**Nature du dysfonctionnement**",
          "**Impacts qualitatifs et quantitatifs**"
        ],
        "rows": [
          [
            "1",
            "Certaines ruptures de stock ont pu être constatées dont certaines ont généré un arrêt de la production des produits dérivés et d’autres ayant provoqué des ruptures de stocks chez les clients.",
            "Coûts de non-production et détérioration de l’image de marque (évaluation chiffrée à 23 568 €)."
          ],
          [
            "2",
            "On a constaté des stocks périmés altérant la qualité des produits et/ou ayant été mis au rebut.",
            "Détérioration de l’image de marque et augmentation des charges de dépréciation (évaluation estimée à 34800 €)."
          ],
          [
            "3",
            "Le miel approvisionné n’est pas toujours de bonne qualité (teneurs en eau et en hydroxy méthyl furfural élevées)",
            "Qualité des productions altérées et insatisfaction des clients ; détérioration de l’image de marque (évaluation estimée à 13534 €)."
          ],
          [
            "4",
            "Les fournisseurs ne respectent pas toujours les délais ; ce qui entraîne des relances et un lourd suivi administratif ainsi que des ruptures de stocks",
            "Désorganisation de la production (évaluation estimée à 8876 €)."
          ],
          [
            "5",
            "Le budget d’approvisionnement est très souvent dépassé en raison de mauvaises négociations sur les prix ; les prix sont aléatoires d’un fournisseur à l’autre.",
            "Impact direct sur le compte de résultat de l’entreprise (évaluation difficilement chiffrable)."
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Annexe 8**"
      },
      {
        "type": "p",
        "text": "**Table de la fonction de répartition : loi normale centrée réduite. P(T < t) = (t).**"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0.00**",
          "**0.01**",
          "**0.02**",
          "**0.03**",
          "**0.04**",
          "**0.05**",
          "**0.06**",
          "**0.07**",
          "**0.08**",
          "**0.09**"
        ],
        "rows": [
          [
            "0.0",
            "0.50000",
            "0.50399",
            "0.50798",
            "0.51197",
            "0.51595",
            "0.51994",
            "0.52392",
            "0.52790",
            "0.53188",
            "0.53586"
          ],
          [
            "0.1",
            "0.53983",
            "0.54380",
            "0.54776",
            "0.55172",
            "0.55567",
            "0.55962",
            "0.56356",
            "0.56749",
            "0.57142",
            "0.57535"
          ],
          [
            "0.2",
            "0.57926",
            "0.58317",
            "0.58706",
            "0.59095",
            "0.59483",
            "0.59871",
            "0.60257",
            "0.60642",
            "0.61026",
            "0.61409"
          ],
          [
            "0.3",
            "0.61791",
            "0.62172",
            "0.62552",
            "0.62930",
            "0.63307",
            "0.63683",
            "0.64058",
            "0.64431",
            "0.64803",
            "0.65173"
          ],
          [
            "0.4",
            "0.65542",
            "0.65910",
            "0.66276",
            "0.66640",
            "0.67003",
            "0.67364",
            "0.67724",
            "0.68082",
            "0.68439",
            "0.68793"
          ],
          [
            "0.5",
            "0.69146",
            "0.69497",
            "0.69847",
            "0.70194",
            "0.70540",
            "0.70884",
            "0.71226",
            "0.71566",
            "0.71904",
            "0.72240"
          ],
          [
            "0.6",
            "0.72575",
            "0.72907",
            "0.73237",
            "0.73565",
            "0.73891",
            "0.74215",
            "0.74537",
            "0.74857",
            "0.75175",
            "0.75490"
          ],
          [
            "0.7",
            "0.75804",
            "0.76115",
            "0.76424",
            "0.76730",
            "0.77035",
            "0.77337",
            "0.77637",
            "0.77935",
            "0.78230",
            "0.78524"
          ],
          [
            "0.8",
            "0.78814",
            "0.79103",
            "0.79389",
            "0.79673",
            "0.79955",
            "0.80234",
            "0.80511",
            "0.80785",
            "0.81057",
            "0.81327"
          ],
          [
            "0.9",
            "0.81594",
            "0.81859",
            "0.82121",
            "0.82381",
            "0.82639",
            "0.82894",
            "0.83147",
            "0.83398",
            "0.83646",
            "0.83891"
          ],
          [
            "1.0",
            "0.84134",
            "0.84375",
            "0.84614",
            "0.84849",
            "0.85083",
            "0.85314",
            "0.85543",
            "0.85769",
            "0.85993",
            "0.86214"
          ],
          [
            "1.1",
            "0.86433",
            "0.86650",
            "0.86864",
            "0.87076",
            "0.87286",
            "0.87493",
            "0.87698",
            "0.87900",
            "0.88100",
            "0.88298"
          ],
          [
            "1.2",
            "0.88493",
            "0.88686",
            "0.88877",
            "0.89065",
            "0.89251",
            "0.89435",
            "0.89617",
            "0.89796",
            "0.89973",
            "0.90147"
          ],
          [
            "1.3",
            "0.90320",
            "0.90490",
            "0.90658",
            "0.90824",
            "0.90988",
            "0.91149",
            "0.91309",
            "0.91466",
            "0.91621",
            "0.91774"
          ],
          [
            "1.4",
            "0.91924",
            "0.92073",
            "0.92220",
            "0.92364",
            "0.92507",
            "0.92647",
            "0.92785",
            "0.92922",
            "0.93056",
            "0.93189"
          ],
          [
            "1.5",
            "0.93319",
            "0.93448",
            "0.93574",
            "0.93699",
            "0.93822",
            "0.93943",
            "0.94062",
            "0.94179",
            "0.94295",
            "0.94408"
          ],
          [
            "1.6",
            "0.94520",
            "0.94630",
            "0.94738",
            "0.94845",
            "0.94950",
            "0.95053",
            "0.95154",
            "0.95254",
            "0.95352",
            "0.95449"
          ],
          [
            "1.7",
            "0.95543",
            "0.95637",
            "0.95728",
            "0.95818",
            "0.95907",
            "0.95994",
            "0.96080",
            "0.96164",
            "0.96246",
            "0.96327"
          ],
          [
            "1.8",
            "0.96407",
            "0.96485",
            "0.96562",
            "0.96638",
            "0.96712",
            "0.96784",
            "0.96856",
            "0.96926",
            "0.96995",
            "0.97062"
          ],
          [
            "1.9",
            "0.97128",
            "0.97193",
            "0.97257",
            "0.97320",
            "0.97381",
            "0.97441",
            "0.97500",
            "0.97558",
            "0.97615",
            "0.97670"
          ],
          [
            "2.0",
            "0.97725",
            "0.97778",
            "0.97831",
            "0.97882",
            "0.97932",
            "0.97982",
            "0.98030",
            "0.98077",
            "0.98124",
            "0.98169"
          ],
          [
            "2.1",
            "0.98214",
            "0.98257",
            "0.98300",
            "0.98341",
            "0.98382",
            "0.98422",
            "0.98461",
            "0.98500",
            "0.98537",
            "0.98574"
          ],
          [
            "2.2",
            "0.98610",
            "0.98645",
            "0.98679",
            "0.98713",
            "0.98745",
            "0.98778",
            "0.98809",
            "0.98840",
            "0.98870",
            "0.98899"
          ],
          [
            "2.3",
            "0.98928",
            "0.98956",
            "0.98983",
            "0.99010",
            "0.99036",
            "0.99061",
            "0.99086",
            "0.99111",
            "0.99134",
            "0.99158"
          ],
          [
            "2.4",
            "0.99180",
            "0.99202",
            "0.99224",
            "0.99245",
            "0.99266",
            "0.99286",
            "0.99305",
            "0.99324",
            "0.99343",
            "0.99361"
          ],
          [
            "2.5",
            "0.99379",
            "0.99396",
            "0.99413",
            "0.99430",
            "0.99446",
            "0.99461",
            "0.99477",
            "0.99492",
            "0.99506",
            "0.99520"
          ],
          [
            "2.6",
            "0.99534",
            "0.99547",
            "0.99560",
            "0.99573",
            "0.99585",
            "0.99598",
            "0.99609",
            "0.99621",
            "0.99632",
            "0.99643"
          ],
          [
            "2.7",
            "0.99653",
            "0.99664",
            "0.99674",
            "0.99683",
            "0.99693",
            "0.99702",
            "0.99711",
            "0.99720",
            "0.99728",
            "0.99736"
          ],
          [
            "2.8",
            "0.99744",
            "0.99752",
            "0.99760",
            "0.99767",
            "0.99774",
            "0.99781",
            "0.99788",
            "0.99795",
            "0.99801",
            "0.99807"
          ],
          [
            "2.9",
            "0.99813",
            "0.99819",
            "0.99825",
            "0.99831",
            "0.99836",
            "0.99841",
            "0.99846",
            "0.99851",
            "0.99856",
            "0.99861"
          ],
          [
            "3.0",
            "0.99865",
            "0.99869",
            "0.99874",
            "0.99878",
            "0.99882",
            "0.99886",
            "0.99889",
            "0.99893",
            "0.99896",
            "0.99900"
          ],
          [
            "3.1",
            "0.99903",
            "0.99906",
            "0.99910",
            "0.99913",
            "0.99916",
            "0.99918",
            "0.99921",
            "0.99924",
            "0.99926",
            "0.99929"
          ],
          [
            "3.2",
            "0.99931",
            "0.99934",
            "0.99936",
            "0.99938",
            "0.99940",
            "0.99942",
            "0.99944",
            "0.99946",
            "0.99948",
            "0.99950"
          ],
          [
            "3.3",
            "0.99952",
            "0.99953",
            "0.99955",
            "0.99957",
            "0.99958",
            "0.99960",
            "0.99961",
            "0.99962",
            "0.99964",
            "0.99965"
          ],
          [
            "3.4",
            "0.99966",
            "0.99968",
            "0.99969",
            "0.99970",
            "0.99971",
            "0.99972",
            "0.99973",
            "0.99974",
            "0.99975",
            "0.99976"
          ],
          [
            "3.5",
            "0.99977",
            "0.99978",
            "0.99978",
            "0.99979",
            "0.99980",
            "0.99981",
            "0.99981",
            "0.99982",
            "0.99983",
            "0.99983"
          ],
          [
            "3.6",
            "0.99984",
            "0.99985",
            "0.99985",
            "0.99986",
            "0.99986",
            "0.99987",
            "0.99987",
            "0.99988",
            "0.99988",
            "0.99989"
          ],
          [
            "3.7",
            "0.99989",
            "0.99990",
            "0.99990",
            "0.99990",
            "0.99991",
            "0.99991",
            "0.99992",
            "0.99992",
            "0.99992",
            "0.99992"
          ],
          [
            "3.8",
            "0.99993",
            "0.99993",
            "0.99993",
            "0.99994",
            "0.99994",
            "0.99994",
            "0.99994",
            "0.99995",
            "0.99995",
            "0.99995"
          ]
        ]
      }
    ]
  },
  {
    "id": "a5",
    "year": 2021,
    "dossier": "Dossier 5",
    "entreprise": "LANGELOT",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**La SAS LANGELOT est une glacerie artisanale haut de gamme fondée en 1996 à La Rochelle par Denis Langelot (bacs de 750 ml et cônes artisanaux). Restée familiale et en croissance sur un marché dominé par l’industrie, elle mise sur la qualité et la confiance avec ses clients. L’émergence de nouveaux concurrents l’amène à renforcer ses outils de suivi de la qualité, à commencer par le contrôle du poids net des bacs, prévu contractuellement avec certains clients.\n**Votre mission.**Mettre en œuvre et expliquer le contrôle statistique du poids des bacs, puis convaincre le dirigeant de l’intérêt d’une démarche de qualité totale.\n**L’enjeu décisionnel.**Le poids net des bacs est-il maîtrisé, et l’entreprise a-t-elle intérêt à dépasser le simple contrôle qualité pour engager une démarche de qualité totale ?\n**Compétences mobilisées.**\n– Calculer une probabilité avec la loi normale\n– Déterminer et interpréter un intervalle de confiance d’une moyenne\n– Expliquer la portée d’un contrôle statistique de la qualité\n– Argumenter les enjeux d’une démarche de qualité totale\n**Notions clés.***Contrôle statistique de la qualité · loi normale · intervalle de confiance · qualité totale · enjeux internes et externes*\n**Exercice de référence.***DCG UE11 · Session 2021 · Sujet LANGELOT · Dossier 5.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 5 AU CHOIX – GESTION DE LA QUALITÉ**"
      },
      {
        "type": "p",
        "text": "**Base documentaire : documents 6, 7 et 8**"
      },
      {
        "type": "p",
        "text": "Pour améliorer ses performances, assurer son développement et sa pérennité, l’entreprise doit parfaire ses outils de suivi de la qualité à tous les niveaux de l’entreprise."
      },
      {
        "type": "p",
        "text": "Récemment, il a semblé indispensable à Denis LANGELOT que dans un premier temps, un contrôle du poids des bacs de 750 ml soit mis en place. En effet, les contrats avec certains clients prévoient le versement d’une indemnité égale à 30 % du montant HT des produits livrés si le poids moyen du lot livré (hors poids de l’emballage) est inférieur à 450 g. Le suivi du poids des produits apparaît d’autant plus urgent que des dérèglements dans le réglage des machines ont été constatés avec pour conséquence parfois des pertes de poids au-delà de 10 g. Le directeur de la production a réfléchi à la mise en place de méthodes statistiques qu’il se propose d’expliquer à Denis LANGELOT."
      },
      {
        "type": "p",
        "text": "Par ailleurs, l’émergence de nouveaux concurrents conduit l’entreprise à s’interroger sur la nécessité d’engager une démarche qualité plus aboutie. La direction souhaite avoir un éclairage sur les améliorations possibles."
      },
      {
        "type": "p",
        "text": "**Votre mission consiste à mettre en œuvre et expliquer les outils mis en place actuellement et à convaincre le dirigeant de l’intérêt de la démarche de qualité totale.**"
      },
      {
        "type": "p",
        "text": "**Pour réaliser cette mission, vous devez :**"
      },
      {
        "type": "ul",
        "items": [
          "**Calculer et interpréter la probabilité que le poids net des bacs soit inférieur à 440 g.Déterminer et interpréter un intervalle de confiance, permettant d’estimer la moyenne du produit net contenu dans la production des bacs de crème glacée de la première demi-journée du 1er décembre 2020.Rédiger un rapport de 10 à 15 lignes environ pour répondre aux attentes de Denis LANGELOT concernant les enjeux sur la mise en place d’une démarche de qualité totale pour la société LANGELOT.**"
        ]
      },
      {
        "type": "p",
        "text": "**POUR LE DOSSIER 5**"
      },
      {
        "type": "p",
        "text": "**Document 6 – Contrôle statistique de la qualité.**"
      },
      {
        "type": "p",
        "text": "Le choix du contrôle du poids est un élément important car il est un des indicateurs de gage de qualité. En effet, un benchmarking avec les produits concurrents permet de voir qu’à volume égal, le poids des bacs n’est pas le même, il dépend du foisonnement. Cette technique a pour but d’ajouter de l’air à la crème glacée pour la rendre plus souple. Plus son pourcentage (ou taux) est élevé, plus la proportion d’air est importante dans le produit, ce qui a évidemment des conséquences sur la qualité gustative des produits. Les glaces LANGELOT ont un taux de foisonnement plus faible que les glaces industrielles. En conséquence, la société a un engagement vis-à-vis de ses clients, pour leur livrer des bacs dont le poids moyen est de 450 g."
      },
      {
        "type": "p",
        "text": "Lorsque le matériel de remplissage des bacs est correctement réglé, le poids moyen du produit net par bac (hors poids de l’emballage) suit une loi normale de moyenne 450 grammes et d’écart-type 8 g."
      },
      {
        "type": "p",
        "text": "Pour s’assurer du respect du poids moyen des bacs produits, la société a mis en place un contrôle aléatoire, par des prélèvements d’échantillons de 100 bacs. Le directeur de production a choisi de construire son intervalle de confiance au seuil de 99 % (risque d’erreur de 1 %)."
      },
      {
        "type": "p",
        "text": "À titre d’exemple, pour expliquer la méthode à Denis LANGELOT, le responsable de la production s’est basé sur l’échantillon de la première demi-journée du 1er décembre 2020, dont la moyenne constatée est de 448 g."
      },
      {
        "type": "p",
        "text": "**POUR LE DOSSIER 5**"
      },
      {
        "type": "p",
        "text": "**Document 7 – Entretien avec Denis LANGELOT sur la démarche de qualité totale.**"
      },
      {
        "type": "p",
        "text": "**VOUS:** « Monsieur LANGELOT, j’aimerais vous faire part d’un projet qu’il me semble urgent de mettre en place pour la gestion de la qualité. »"
      },
      {
        "type": "p",
        "text": "**Denis LANGELOT:** « Pourtant le directeur de la production a déjà fait le nécessaire avec le contrôle de la qualité sur les chaînes de production ? »"
      },
      {
        "type": "p",
        "text": "**VOUS:** « Oui, mais cela reste à mon sens très insuffisant. Il faudrait s’orienter vers une démarche de qualité totale. Vous avez toujours souhaité vous démarquer de vos concurrents en proposant des produits qui se distinguent par leur positionnement haut de gamme. Par ailleurs, le respect de normes en matière d’hygiène est incontournable. Cette démarche est donc indispensable. »"
      },
      {
        "type": "p",
        "text": "**Denis LANGELOT:** « Oui peut-être mais, je ne sais pas exactement ce que vous sous-entendez par qualité totale. Un document écrit me permettra de réfléchir plus posément sur cette approche. »"
      },
      {
        "type": "p",
        "text": "**VOUS:**« Je peux, en effet, rédiger un rapport en vous expliquant dans un premier temps en quoi consiste cette démarche et quels sont ses enjeux pour l’entreprise. »"
      },
      {
        "type": "p",
        "text": "**Denis LANGELOT:** « Tout à fait et pour bien mesurer et évaluer son intérêt, je souhaiterais également en connaître les conséquences à la fois au niveau interne mais également externe. »"
      },
      {
        "type": "p",
        "text": "**VOUS:** « Pas de problème. Je suis sûr que nous nous reverrons très rapidement lorsque vous aurez lu le rapport que je vais vous adresser. »"
      },
      {
        "type": "p",
        "text": "**POUR LE DOSSIER 5**"
      },
      {
        "type": "p",
        "text": "**Document 8 – Table de la loi normale centrée réduite.**"
      },
      {
        "type": "p",
        "text": "Fonction de répartition de la loi normale centrée réduite : P(T ≤ t) = π(t)"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0,00**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**",
          "**0,06**",
          "**0,07**",
          "**0,08**",
          "**0,09**"
        ],
        "rows": [
          [
            "0,0",
            "0,5000",
            "0,5040",
            "0,5080",
            "0,5120",
            "0,5160",
            "0,5199",
            "0,5239",
            "0,5279",
            "0,5319",
            "0,5359"
          ],
          [
            "0,1",
            "0,5398",
            "0,5438",
            "0,5478",
            "0,5517",
            "0,5557",
            "0,5596",
            "0,5636",
            "0,5675",
            "0,5714",
            "0,5753"
          ],
          [
            "0,2",
            "0,5793",
            "0,5832",
            "0,5871",
            "0,5910",
            "0,5948",
            "0,5987",
            "0,6026",
            "0,6064",
            "0,6103",
            "0,6141"
          ],
          [
            "0,3",
            "0,6179",
            "0,6217",
            "0,6255",
            "0,6293",
            "0,6331",
            "0,6368",
            "0,6406",
            "0,6443",
            "0,6480",
            "0,6517"
          ],
          [
            "0,4",
            "0,6554",
            "0,6591",
            "0,6628",
            "0,6664",
            "0,6700",
            "0,6736",
            "0,6772",
            "0,6808",
            "0,6844",
            "0,6879"
          ],
          [
            "0,5",
            "0,6915",
            "0,6950",
            "0,6985",
            "0,7019",
            "0,7054",
            "0,7088",
            "0,7123",
            "0,7157",
            "0,7190",
            "0,7224"
          ],
          [
            "0,6",
            "0,7257",
            "0,7291",
            "0,7324",
            "0,7357",
            "0,7389",
            "0,7422",
            "0,7454",
            "0,7486",
            "0,7517",
            "0,7549"
          ],
          [
            "0,7",
            "0,7580",
            "0,7611",
            "0,7642",
            "0,7673",
            "0,7704",
            "0,7734",
            "0,7764",
            "0,7794",
            "0,7823",
            "0,7852"
          ],
          [
            "0,8",
            "0,7881",
            "0,7910",
            "0,7939",
            "0,7967",
            "0,7995",
            "0,8023",
            "0,8051",
            "0,8078",
            "0,8106",
            "0,8133"
          ],
          [
            "0,9",
            "0,8159",
            "0,8186",
            "0,8212",
            "0,8238",
            "0,8264",
            "0,8289",
            "0,8315",
            "0,8340",
            "0,8365",
            "0,8389"
          ],
          [
            "1",
            "0,8413",
            "0,8438",
            "0,8461",
            "0,8485",
            "0,8508",
            "0,8531",
            "0,8554",
            "0,8577",
            "0,8599",
            "0,8621"
          ],
          [
            "1,1",
            "0,8643",
            "0,8665",
            "0,8686",
            "0,8708",
            "0,8729",
            "0,8749",
            "0,8770",
            "0,8790",
            "0,8810",
            "0,8830"
          ],
          [
            "1,2",
            "0,8849",
            "0,8869",
            "0,8888",
            "0,8907",
            "0,8925",
            "0,8944",
            "0,8962",
            "0,8980",
            "0,8997",
            "0,9015"
          ],
          [
            "1,3",
            "0,9032",
            "0,9049",
            "0,9066",
            "0,9082",
            "0,9099",
            "0,9115",
            "0,9131",
            "0,9147",
            "0,9162",
            "0,9177"
          ],
          [
            "1,4",
            "0,9192",
            "0,9207",
            "0,9222",
            "0,9236",
            "0,9251",
            "0,9265",
            "0,9279",
            "0,9292",
            "0,9306",
            "0,9319"
          ],
          [
            "1,5",
            "0,9332",
            "0,9345",
            "0,9357",
            "0,9370",
            "0,9382",
            "0,9394",
            "0,9406",
            "0,9418",
            "0,9429",
            "0,9441"
          ],
          [
            "1,6",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505",
            "0,9515",
            "0,9525",
            "0,9535",
            "0,9545"
          ],
          [
            "1,7",
            "0,9554",
            "0,9564",
            "0,9573",
            "0,9582",
            "0,9591",
            "0,9599",
            "0,9608",
            "0,9616",
            "0,9625",
            "0,9633"
          ],
          [
            "1,8",
            "0,9641",
            "0,9649",
            "0,9656",
            "0,9664",
            "0,9671",
            "0,9678",
            "0,9686",
            "0,9693",
            "0,9699",
            "0,9706"
          ],
          [
            "1,9",
            "0,9713",
            "0,9719",
            "0,9726",
            "0,9732",
            "0,9738",
            "0,9744",
            "0,9750",
            "0,9756",
            "0,9761",
            "0,9767"
          ],
          [
            "2",
            "0,9772",
            "0,9778",
            "0,9783",
            "0,9788",
            "0,9793",
            "0,9798",
            "0,9803",
            "0,9808",
            "0,9812",
            "0,9817"
          ],
          [
            "2,1",
            "0,9821",
            "0,9826",
            "0,9830",
            "0,9834",
            "0,9838",
            "0,9842",
            "0,9846",
            "0,9850",
            "0,9854",
            "0,9857"
          ],
          [
            "2,2",
            "0,9861",
            "0,9864",
            "0,9868",
            "0,9871",
            "0,9875",
            "0,9878",
            "0,9881",
            "0,9884",
            "0,9887",
            "0,9890"
          ],
          [
            "2,3",
            "0,9893",
            "0,9896",
            "0,9898",
            "0,9901",
            "0,9904",
            "0,9906",
            "0,9909",
            "0,9911",
            "0,9913",
            "0,9916"
          ],
          [
            "2,4",
            "0,9918",
            "0,9920",
            "0,9922",
            "0,9925",
            "0,9927",
            "0,9929",
            "0,9931",
            "0,9932",
            "0,9934",
            "0,9936"
          ],
          [
            "2,5",
            "0,9938",
            "0,9940",
            "0,9941",
            "0,9943",
            "0,9945",
            "0,9946",
            "0,9948",
            "0,9949",
            "0,9951",
            "0,9952"
          ],
          [
            "2,6",
            "0,9953",
            "0,9955",
            "0,9956",
            "0,9957",
            "0,9959",
            "0,9960",
            "0,9961",
            "0,9962",
            "0,9963",
            "0,9964"
          ],
          [
            "2,7",
            "0,9965",
            "0,9966",
            "0,9967",
            "0,9968",
            "0,9969",
            "0,9970",
            "0,9971",
            "0,9972",
            "0,9973",
            "0,9974"
          ],
          [
            "2,8",
            "0,9974",
            "0,9975",
            "0,9976",
            "0,9977",
            "0,9977",
            "0,9978",
            "0,9979",
            "0,9979",
            "0,9980",
            "0,9981"
          ],
          [
            "2,9",
            "0,9981",
            "0,9982",
            "0,9982",
            "0,9983",
            "0,9984",
            "0,9984",
            "0,9985",
            "0,9985",
            "0,9986",
            "0,9986"
          ]
        ]
      }
    ]
  },
  {
    "id": "a6",
    "year": 2023,
    "dossier": "Dossier 4",
    "entreprise": "LEGENDES SUCREES",
    "blocks": [
      {
        "type": "callout",
        "variant": "info",
        "title": "MISE EN SITUATION PROFESSIONNELLE",
        "text": "**L’organisation.**Née à Chalon-sur-Saône d’une boutique de confitures et de fruits à l’alcool, LÉGENDES SUCRÉES est une PME reconnue et engagée en RSE (plus de 600 références). Pour sécuriser son approvisionnement en pots de verre, la dirigeante décide d’investir dans une machine (fournie par la société Bovonne) fabriquant des pots de différentes tailles ; le service qualité devra ensuite contrôler la conformité des pots, notamment leur épaisseur.\n**Votre mission.**Planifier l’installation de la nouvelle machine par une méthode d’ordonnancement, puis mettre en place le contrôle statistique de la qualité des pots en verre.\n**L’enjeu décisionnel.**En combien de temps la machine peut-elle être opérationnelle, et comment garantir puis analyser la conformité des pots fabriqués (épaisseur du verre) ?\n**Compétences mobilisées.**\n– Élaborer et résoudre un ordonnancement (Gantt ou MPM) et calculer une durée de projet\n– Vérifier l’impact de retards sur le chemin critique\n– Déterminer et interpréter un intervalle de confiance (loi normale)\n– Mobiliser le diagramme d’Ishikawa comme outil de gestion de la qualité\n**Notions clés.***Ordonnancement · Gantt / MPM · chemin critique · contrôle qualité · loi normale · intervalle de confiance · diagramme d’Ishikawa*\n**Exercice de référence.***DCG UE11 · Session 2023 · Sujet LÉGENDES SUCRÉES · Dossier 4.*"
      },
      {
        "type": "p",
        "text": "**DOSSIER 4 – PROJET D’IMPLANTATION D’UNE NOUVELLE MACHINE**"
      },
      {
        "type": "p",
        "text": "**Base documentaire : documents 9 à 13**"
      },
      {
        "type": "p",
        "text": "Soucieuse de répondre à la problématique d’approvisionnement de pots en verre, Louise GALLET décide d’investir dans une machine qui fabrique des pots de différentes tailles. Elle choisit celle du constructeur Bovonne car celui-ci lui promet de respecter un délai d’installation suffisamment court et une exigence qualité très importante."
      },
      {
        "type": "p",
        "text": "Le service qualité de la société LÉGENDES SUCRÉES assurera ensuite les contrôles pour tester la conformité des pots en verre fabriqués. Il doit faire face à des non-conformités liées à l’épaisseur du verre. Le service qualité a alors mis en place un outil de gestion de la qualité (diagramme d’Ishikawa). Louise GALLET souhaite obtenir davantage d’informations concernant celui-ci."
      },
      {
        "type": "p",
        "text": "**Votre première mission consiste à évaluer la durée d’implantation de la nouvelle machine pour pouvoir démarrer la fabrication de pots en verre au plus vite.**"
      },
      {
        "type": "p",
        "text": "**Pour la réaliser, vous devez :**"
      },
      {
        "type": "ul",
        "items": [
          "**Élaborer et résoudre par une méthode d’ordonnancement (Diagramme de Gantt ou méthode des potentiels métra MPM) le programme d’installation de la machine.Rédiger un argumentaire de 10 lignes environ à l’attention de la dirigeante de la société, Louise GALLET, pour vérifier l’affirmation de la société Bovonne.**"
        ]
      },
      {
        "type": "p",
        "text": "**Votre deuxième mission consiste à contrôler la qualité des pots en verre et à comprendre la démarche qualité mise en place.**"
      },
      {
        "type": "p",
        "text": "**Pour la réaliser, vous devez :**"
      },
      {
        "type": "ul",
        "items": [
          "**Déterminer et interpréter un intervalle de confiance avec un risque d’erreur de 5 %, qui permet d’obtenir la moyenne de l’épaisseur du verre.Rédiger un commentaire de 10 lignes environ afin de conseiller la dirigeante, Louise GALLET, sur le choix du diagramme d’Ishikawa comme outil de gestion de la qualité.**"
        ]
      },
      {
        "type": "p",
        "text": "**BASE DOCUMENTAIRE**"
      },
      {
        "type": "p",
        "text": "**Document 9 – Planning des étapes du projet d’installation de la machine de production de pots en verre.**"
      },
      {
        "type": "table",
        "headers": [
          "**Tâches**",
          "**Description de la tâche**",
          "**Durée en jours**",
          "**Opérations pré-requises**"
        ],
        "rows": [
          [
            "**A**",
            "Montage de la machine",
            "2",
            "B"
          ],
          [
            "**B**",
            "Réception de la machine et vérification que l’équipement n’a pas subi de dommages lors du transport",
            "3",
            "-"
          ],
          [
            "**C**",
            "Mise en ligne et raccordement des installations",
            "5",
            "B"
          ],
          [
            "**D**",
            "Vérification générale de conformité aux schémas électriques",
            "2",
            "A, C"
          ],
          [
            "**E**",
            "Raccordement des installations",
            "4",
            "C, D"
          ],
          [
            "**F**",
            "Formation des opérateurs de production",
            "3",
            "D"
          ],
          [
            "**G**",
            "Essais finaux des installations",
            "1",
            "E, F"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 10 – Éléments d’informations complémentaires.**"
      },
      {
        "type": "p",
        "text": "La société Bovonne promet une garantie contractuelle d’exécution de l’ensemble des tâches. Toutefois, elle annonce un prolongement possible de 2 jours sur chacune des tâches A et F."
      },
      {
        "type": "p",
        "text": "La société affirme que cela n’aura aucune conséquence sur la durée totale du projet."
      },
      {
        "type": "p",
        "text": "**Document 11 – Contrôle statistique de la qualité des pots en verre.**"
      },
      {
        "type": "p",
        "text": "Chaque pot en verre passe par une série d’inspections pour assurer qu’il réponde aux normes élevées de qualité. Plusieurs caméras à haute résolution, situées dans les machines, numérisent l’ensemble des pots. Les caméras sont placées dans des angles différents et peuvent repérer de minuscules défectuosités."
      },
      {
        "type": "p",
        "text": "Une autre étape du processus d’inspection se focalise sur l’épaisseur des pots en verre. La société Bovonne s’engage à ce que les pots fabriqués aient une épaisseur de 2 000 micromètres. Elle ajoute que les pots suivent une loi normale de moyenne 2 000 micromètres et d’écart-type 12 micromètres."
      },
      {
        "type": "p",
        "text": "Les experts-qualité de la société LÉGENDES SUCRÉES inspectent manuellement et visuellement des échantillons pris au hasard pour en assurer la qualité. Un contrôle aléatoire, par des prélèvements d’échantillons de 50 pots est réalisé. La moyenne constatée est de 1 995 micromètres."
      },
      {
        "type": "p",
        "text": "**Document 12 – Table de la loi normale centrée réduite.**"
      },
      {
        "type": "p",
        "text": "Fonction de répartition de la loi normale centrée réduite : P(T t) = (t)"
      },
      {
        "type": "table",
        "headers": [
          "**t**",
          "**0,00**",
          "**0,01**",
          "**0,02**",
          "**0,03**",
          "**0,04**",
          "**0,05**",
          "**0,06**",
          "**0,07**",
          "**0,08**",
          "**0,09**"
        ],
        "rows": [
          [
            "0,0",
            "0,5000",
            "0,5040",
            "0,5080",
            "0,5120",
            "0,5160",
            "0,5199",
            "0,5239",
            "0,5279",
            "0,5319",
            "0,5359"
          ],
          [
            "0,1",
            "0,5398",
            "0,5438",
            "0,5478",
            "0,5517",
            "0,5557",
            "0,5596",
            "0,5636",
            "0,5675",
            "0,5714",
            "0,5753"
          ],
          [
            "0,2",
            "0,5793",
            "0,5832",
            "0,5871",
            "0,5910",
            "0,5948",
            "0,5987",
            "0,6026",
            "0,6064",
            "0,6103",
            "0,6141"
          ],
          [
            "0,3",
            "0,6179",
            "0,6217",
            "0,6255",
            "0,6293",
            "0,6331",
            "0,6368",
            "0,6406",
            "0,6443",
            "0,6480",
            "0,6517"
          ],
          [
            "0,4",
            "0,6554",
            "0,6591",
            "0,6628",
            "0,6664",
            "0,6700",
            "0,6736",
            "0,6772",
            "0,6808",
            "0,6844",
            "0,6879"
          ],
          [
            "0,5",
            "0,6915",
            "0,6950",
            "0,6985",
            "0,7019",
            "0,7054",
            "0,7088",
            "0,7123",
            "0,7157",
            "0,7190",
            "0,7224"
          ],
          [
            "0,6",
            "0,7257",
            "0,7291",
            "0,7324",
            "0,7357",
            "0,7389",
            "0,7422",
            "0,7454",
            "0,7486",
            "0,7517",
            "0,7549"
          ],
          [
            "0,7",
            "0,7580",
            "0,7611",
            "0,7642",
            "0,7673",
            "0,7704",
            "0,7734",
            "0,7764",
            "0,7794",
            "0,7823",
            "0,7852"
          ],
          [
            "0,8",
            "0,7881",
            "0,7910",
            "0,7939",
            "0,7967",
            "0,7995",
            "0,8023",
            "0,8051",
            "0,8078",
            "0,8106",
            "0,8133"
          ],
          [
            "0,9",
            "0,8159",
            "0,8186",
            "0,8212",
            "0,8238",
            "0,8264",
            "0,8289",
            "0,8315",
            "0,8340",
            "0,8365",
            "0,8389"
          ],
          [
            "1",
            "0,8413",
            "0,8438",
            "0,8461",
            "0,8485",
            "0,8508",
            "0,8531",
            "0,8554",
            "0,8577",
            "0,8599",
            "0,8621"
          ],
          [
            "1,1",
            "0,8643",
            "0,8665",
            "0,8686",
            "0,8708",
            "0,8729",
            "0,8749",
            "0,8770",
            "0,8790",
            "0,8810",
            "0,8830"
          ],
          [
            "1,2",
            "0,8849",
            "0,8869",
            "0,8888",
            "0,8907",
            "0,8925",
            "0,8944",
            "0,8962",
            "0,8980",
            "0,8997",
            "0,9015"
          ],
          [
            "1,3",
            "0,9032",
            "0,9049",
            "0,9066",
            "0,9082",
            "0,9099",
            "0,9115",
            "0,9131",
            "0,9147",
            "0,9162",
            "0,9177"
          ],
          [
            "1,4",
            "0,9192",
            "0,9207",
            "0,9222",
            "0,9236",
            "0,9251",
            "0,9265",
            "0,9279",
            "0,9292",
            "0,9306",
            "0,9319"
          ],
          [
            "1,5",
            "0,9332",
            "0,9345",
            "0,9357",
            "0,9370",
            "0,9382",
            "0,9394",
            "0,9406",
            "0,9418",
            "0,9429",
            "0,9441"
          ],
          [
            "1,6",
            "0,9452",
            "0,9463",
            "0,9474",
            "0,9484",
            "0,9495",
            "0,9505",
            "0,9515",
            "0,9525",
            "0,9535",
            "0,9545"
          ],
          [
            "1,7",
            "0,9554",
            "0,9564",
            "0,9573",
            "0,9582",
            "0,9591",
            "0,9599",
            "0,9608",
            "0,9616",
            "0,9625",
            "0,9633"
          ],
          [
            "1,8",
            "0,9641",
            "0,9649",
            "0,9656",
            "0,9664",
            "0,9671",
            "0,9678",
            "0,9686",
            "0,9693",
            "0,9699",
            "0,9706"
          ],
          [
            "1,9",
            "0,9713",
            "0,9719",
            "0,9726",
            "0,9732",
            "0,9738",
            "0,9744",
            "0,9750",
            "0,9756",
            "0,9761",
            "0,9767"
          ],
          [
            "2",
            "0,9772",
            "0,9778",
            "0,9783",
            "0,9788",
            "0,9793",
            "0,9798",
            "0,9803",
            "0,9808",
            "0,9812",
            "0,9817"
          ],
          [
            "2,1",
            "0,9821",
            "0,9826",
            "0,9830",
            "0,9834",
            "0,9838",
            "0,9842",
            "0,9846",
            "0,9850",
            "0,9854",
            "0,9857"
          ],
          [
            "2,2",
            "0,9861",
            "0,9864",
            "0,9868",
            "0,9871",
            "0,9875",
            "0,9878",
            "0,9881",
            "0,9884",
            "0,9887",
            "0,9890"
          ],
          [
            "2,3",
            "0,9893",
            "0,9896",
            "0,9898",
            "0,9901",
            "0,9904",
            "0,9906",
            "0,9909",
            "0,9911",
            "0,9913",
            "0,9916"
          ],
          [
            "2,4",
            "0,9918",
            "0,9920",
            "0,9922",
            "0,9925",
            "0,9927",
            "0,9929",
            "0,9931",
            "0,9932",
            "0,9934",
            "0,9936"
          ],
          [
            "2,5",
            "0,9938",
            "0,9940",
            "0,9941",
            "0,9943",
            "0,9945",
            "0,9946",
            "0,9948",
            "0,9949",
            "0,9951",
            "0,9952"
          ],
          [
            "2,6",
            "0,9953",
            "0,9955",
            "0,9956",
            "0,9957",
            "0,9959",
            "0,9960",
            "0,9961",
            "0,9962",
            "0,9963",
            "0,9964"
          ],
          [
            "2,7",
            "0,9965",
            "0,9966",
            "0,9967",
            "0,9968",
            "0,9969",
            "0,9970",
            "0,9971",
            "0,9972",
            "0,9973",
            "0,9974"
          ],
          [
            "2,8",
            "0,9974",
            "0,9975",
            "0,9976",
            "0,9977",
            "0,9977",
            "0,9978",
            "0,9979",
            "0,9979",
            "0,9980",
            "0,9981"
          ],
          [
            "2,9",
            "0,9981",
            "0,9982",
            "0,9982",
            "0,9983",
            "0,9984",
            "0,9984",
            "0,9985",
            "0,9985",
            "0,9986",
            "0,9986"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Document 13 – Diagramme d’Ishikawa.**"
      }
    ]
  }
];
