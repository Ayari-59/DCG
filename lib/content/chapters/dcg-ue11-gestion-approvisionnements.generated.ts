// Généré par scripts/convert-docx.mjs depuis CHAPITRE_11__LA_GESTION_DES_APPROVISIONNEMENTS.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-gestion-approvisionnements",
  "level": "DCG",
  "ue": "UE11",
  "number": 11,
  "title": "La gestion des approvisionnements",
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
          "text": "**Axe 3 — Les budgets, outil de pilotage de la performance. Compétence 3.2 « Mettre en œuvre les techniques prévisionnelles » (volet approvisionnements). Les stocks sont un « mal nécessaire » : trop élevés, ils immobilisent de la trésorerie ; trop faibles, ils exposent à la rupture. Ce chapitre met en œuvre le modèle de Wilson (quantité économique) et ses adaptations — stock de sécurité, stock d’alerte, tarif dégressif — au service d’une gestion au moindre coût.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Identifier les fonctions, les types et les coûts des stocks.\n• Déterminer un programme d’approvisionnement optimal par le modèle de Wilson (Q*, n*, T*).\n• Intégrer un stock de sécurité, un stock d’alerte et un tarif dégressif.\n• Budgéter les approvisionnements (méthode graphique et méthode comptable).\n• Porter un regard critique sur les modèles et situer la gestion des stocks dans une logique de performance globale et de supply chain."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "« Le stock, c’est de l’argent qui dort. » Cette formule résume le paradoxe de la gestion des stocks : indispensables au bon fonctionnement de l’entreprise, ils sont aussi de gros consommateurs de financement, d’espace et de temps. La gestion des approvisionnements vise à concilier deux exigences contradictoires : **limiter le niveau des stocks** et **éviter les ruptures**."
        },
        {
          "type": "p",
          "text": "Les stocks sont un « mal nécessaire » : ils assurent une **fonction de régulation**, en fluidifiant les relations entre postes de travail successifs et entre fournisseurs et clients. Ils contribuent directement à la performance économique : un excès pèse sur les coûts et la rentabilité, une insuffisance expose à l’insatisfaction du client ou à la rupture d’activité. S’y ajoutent l’obsolescence, les invendus et la spéculation."
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit de la réforme, chaque modèle est abordé selon quatre dimensions : **comprendre** l’enjeu économique, **calculer** le programme optimal, **interpréter** les résultats, et **critiquer** les hypothèses des modèles."
        },
        {
          "type": "p",
          "text": "Les stocks sont un maillon de la chaîne de valeur : bien gérés, les approvisionnements alimentent la production sans rupture, soutiennent les ventes et servent la performance globale (coût, trésorerie, durabilité)."
        },
        {
          "type": "p",
          "text": "*Figure 1 — Les stocks, maillon de la chaîne de valeur*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le cadre du programme",
          "text": "Le référentiel cible le **modèle de Wilson simple sans pénurie**, le **modèle avec stock de sécurité**, la notion de **stock d’alerte**, le **tarif dégressif** et l’avenir aléatoire. En revanche, **la pénurie, les méthodes 20/80 et ABC, ainsi que le juste-à-temps ne sont pas au programme** : ils sont signalés comme tels et abordés seulement à titre de culture professionnelle."
        }
      ]
    },
    {
      "id": "1-les-enjeux-de-la-gestion-des-approvisionnements-et-des-sto",
      "title": "1. Les enjeux de la gestion des approvisionnements et des stocks",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Les fonctions des stocks"
        },
        {
          "type": "p",
          "text": "Un stock est une réserve constituée en vue d’un usage différé. Loin d’être une simple immobilisation passive, il remplit plusieurs fonctions : **régulation** (absorber les écarts de rythme entre l’amont et l’aval), **sécurité** (faire face aux aléas de la demande et des délais), **économie** (profiter de remises sur quantité), et parfois **spéculation** (anticiper une hausse de prix des matières). Le « zéro stock » souvent affiché reste un idéal théorique : un minimum de stock fluidifie l’activité."
        },
        {
          "type": "p",
          "text": "Ces fonctions s’opposent souvent entre elles. La fonction de régulation pousse à détenir des stocks abondants pour découpler l’amont de l’aval ; la fonction économique encourage les commandes groupées qui gonflent le stock moyen ; à l’inverse, toute détention immobilise de la trésorerie et expose au risque d’obsolescence. La gestion des stocks consiste précisément à **arbitrer entre des fonctions concurrentes** — c’est la raison d’être des modèles présentés dans ce chapitre."
        },
        {
          "type": "p",
          "text": "Chez l’entreprise, ce conflit est concret. La production du produit phare le produit (prix de vente 90 €, coût standard 67 €, dont 38 € de coût variable) suppose un flux régulier de cuir synthétique et de textile. Une rupture d’approvisionnement arrête la chaîne et fait perdre la marge sur coût variable de chaque produit non produite, soit 90 − 38 = 52 € par unité. À l’inverse, un cuir synthétique stocké en excès immobilise un capital coûteux et vieillit. Le stock est donc bien, au sens propre, un « mal nécessaire »."
        },
        {
          "type": "h3",
          "text": "1.2 Les différents types de stocks"
        },
        {
          "type": "p",
          "text": "On classe les stocks selon leur place dans le cycle d’exploitation."
        },
        {
          "type": "p",
          "text": "*Figure 2 — Les types de stocks le long du processus*"
        },
        {
          "type": "table",
          "headers": [
            "**Type de stock**",
            "**Définition**",
            "**Exemple chez l’entreprise**"
          ],
          "rows": [
            [
              "**Matières premières**",
              "Intrants achetés, non encore transformés",
              "Cuir synthétique, textile"
            ],
            [
              "**En-cours**",
              "Produits en cours de fabrication",
              "Chaussures en assemblage"
            ],
            [
              "**Produits finis**",
              "Produits achevés, prêts à la vente",
              "Équipements sportifs stockés"
            ],
            [
              "**Marchandises**",
              "Biens revendus en l’état, sans transformation",
              "Accessoires achetés-revendus"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "1.3 Les coûts liés aux stocks"
        },
        {
          "type": "p",
          "text": "La gestion des stocks repose sur l’analyse de quatre coûts, dont l’arbitrage fonde tous les modèles."
        },
        {
          "type": "table",
          "headers": [
            "**Coût**",
            "**Nature**",
            "**Sens d’évolution avec Q**"
          ],
          "rows": [
            [
              "**Coût d’acquisition**",
              "Prix d’achat des biens stockés",
              "Constant (sauf tarif dégressif)"
            ],
            [
              "**Coût de passation (lancement)**",
              "Charges pour passer une commande (recherche fournisseur, administration)",
              "Diminue si Q augmente (moins de commandes)"
            ],
            [
              "**Coût de possession (stockage)**",
              "Local, manutention, gardiennage, obsolescence, capitaux immobilisés",
              "Augmente si Q augmente (stock moyen plus élevé)"
            ],
            [
              "**Coût de rupture (pénurie)**",
              "Manque à gagner, insatisfaction client",
              "Augmente si le stock est insuffisant"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le coût de possession",
          "text": "Le **coût de possession** s’exprime souvent par un **taux de possession** appliqué à la valeur du bien : cs = coût du bien × taux. Coût de possession et coût de rupture doivent être **valorisés**, avec une cohérence stricte entre l’unité de temps retenue et la période de gestion (un an = P = 1, 12 ou 360 selon l’unité)."
        },
        {
          "type": "p",
          "text": "Le taux de possession agrège plusieurs charges : le coût financier des capitaux immobilisés (le stock aurait pu être placé ou réduire l’endettement), le coût physique d’entreposage (loyer, manutention, assurance, gardiennage) et le coût du risque (obsolescence, casse, vol, démarque). Pour l’entreprise, un mètre carré de cuir synthétique à 150 € supporte un taux de 0,5 % par mois, soit une charge financière et physique qui, sur l’année, atteint plusieurs euros par m² : c’est ce coût qui pénalise tout surstockage."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — La cohérence des unités de temps",
          "text": "L’erreur la plus fréquente consiste à mélanger les unités de temps. Si cs est exprimé **par an**, la période de gestion doit l’être aussi (P = 1 an) ; si cs est exprimé par mois, P = 12. Avant tout calcul, **ramener cs et P à la même unité**. Chez l’entreprise, le taux de 0,5 % « par mois » et le coût physique « par jour » sont d’abord convertis en coût annuel : cs = (150 × 0,5 % × 12) + (0,02 × 360) = 9 + 7,2 = 16,2 € par m² et par an."
        },
        {
          "type": "h3",
          "text": "1.4 Le compromis économique de gestion des stocks"
        },
        {
          "type": "p",
          "text": "Les coûts de passation et de possession évoluent en sens inverse de la quantité commandée Q : commander en grandes quantités réduit le nombre de commandes (donc le coût de passation), mais gonfle le stock moyen (donc le coût de possession). L’art de la gestion des stocks consiste à trouver le **point d’équilibre** qui minimise leur somme — le coût total de gestion."
        },
        {
          "type": "p",
          "text": "*Figure 3 — L’arbitrage économique : minimiser le coût total de gestion*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION",
          "text": "**Pour l’entreprise,**commander tout le cuir synthétique de l’année en une fois minimiserait les frais de commande, mais immobiliserait une trésorerie considérable et saturerait l’entrepôt. À l’inverse, commander au coup par coup multiplierait les frais administratifs et les risques de rupture. Le bon programme se situe entre ces deux extrêmes : c’est précisément ce que détermine le modèle de Wilson."
        },
        {
          "type": "h3",
          "text": "1.5 Mesurer la performance d’un stock : rotation et couverture"
        },
        {
          "type": "p",
          "text": "Avant d’optimiser, le contrôleur de gestion mesure. Deux ratios complémentaires résument la performance d’un stock et permettent de comparer dans le temps ou entre références."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Rotation et couverture",
          "text": "**Taux de rotation** = consommation de la période / stock moyen. Il indique combien de fois le stock « tourne » dans l’année : plus il est élevé, moins l’entreprise immobilise de capital pour un même flux.\n**Durée de couverture (ou durée d’écoulement)** = stock moyen / consommation × durée de la période. Elle exprime, en jours, le temps pendant lequel le stock moyen permet de tenir sans réapprovisionnement."
        },
        {
          "type": "p",
          "text": "Les deux ratios sont inverses l’un de l’autre : une rotation rapide correspond à une couverture courte. Pour le cuir synthétique de l’entreprise, le programme optimal donne un stock moyen de Q*/2 = 200 m². Le taux de rotation vaut alors 7 200 / 200 = 36 rotations par an, et la durée de couverture 200 / 7 200 × 360 = 10 jours. Ces valeurs sont cohérentes avec un réapprovisionnement tous les 20 jours d’un lot consommé linéairement."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Lire les ratios sans les opposer au coût",
          "text": "Une rotation élevée est généralement favorable (peu de capital immobilisé), mais elle n’est pas un objectif en soi : poussée à l’extrême, elle multiplie les commandes et les coûts de passation, et accroît le risque de rupture. Le bon niveau de rotation est celui qui découle du **programme économique**, non l’inverse. Les ratios servent à diagnostiquer et à suivre, le modèle de Wilson à décider."
        }
      ]
    },
    {
      "id": "2-le-modele-de-wilson-et-ses-adaptations",
      "title": "2. Le modèle de Wilson et ses adaptations",
      "blocks": [
        {
          "type": "p",
          "text": "Le modèle dit **de Wilson** (formalisé en 1934, développé dès 1913 par Harris) est issu de la recherche opérationnelle. Il détermine le **programme optimal d’approvisionnement** (quantité économique et nombre de commandes) qui minimise le coût de gestion du stock. On parle aussi de « formule du lot économique »."
        },
        {
          "type": "h3",
          "text": "2.1 Les paramètres et les hypothèses"
        },
        {
          "type": "p",
          "text": "On distingue les **données** (connues) des **inconnues** (à déterminer)."
        },
        {
          "type": "table",
          "headers": [
            "**Symbole**",
            "**Signification**",
            "**Statut**"
          ],
          "rows": [
            [
              "**D**",
              "Demande (consommation) en unités physiques sur la période",
              "Donnée"
            ],
            [
              "**P**",
              "Période de gestion (1, 12 ou 360 selon l’unité de cs)",
              "Donnée"
            ],
            [
              "**cl**",
              "Coût de lancement d’une commande",
              "Donnée"
            ],
            [
              "**cs**",
              "Coût de stockage d’une unité pour une unité de temps",
              "Donnée"
            ],
            [
              "**Q**",
              "Quantité à commander à chaque réapprovisionnement",
              "Inconnue"
            ],
            [
              "**n**",
              "Nombre de commandes sur la période",
              "Inconnue"
            ],
            [
              "**T**",
              "Durée entre deux approvisionnements",
              "Inconnue"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**∑ RELATIONS ENTRE LES INCONNUES**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Les hypothèses du modèle de Wilson",
          "text": "La demande est **régulière et connue avec certitude** ; le réapprovisionnement est **instantané** (délai nul) ; en conséquence, **les ruptures sont exclues** et un stock de sécurité est en principe inutile. *Le programme précise que le modèle n’est pas à démontrer.*"
        },
        {
          "type": "p",
          "text": "Sous ces hypothèses, le stock évolue selon un profil en « dent de scie » : il décroît régulièrement de Q à 0, puis est reconstitué instantanément. Le stock moyen est donc **Q/2**."
        },
        {
          "type": "p",
          "text": "*Figure 4 — L’évolution du stock dans le modèle de Wilson*"
        },
        {
          "type": "h3",
          "text": "2.2 La fonction de coût et la quantité économique"
        },
        {
          "type": "p",
          "text": "Les ruptures étant exclues, le coût de gestion est la somme du coût de lancement et du coût de stockage : **CG = CL + CS**. Pour une période de gestion P, en répétant n fois les coûts d’un cycle, on obtient :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COÛT TOTAL DE GESTION DU STOCK",
          "text": "La valeur optimale (Q*, n*, T*) s’obtient en annulant la dérivée de CG. À l’optimum, **le coût de lancement égale le coût de stockage**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — Programme optimal de Wilson (les plaques d’acier)",
          "text": "Méca-Précision (sous-traitance industrielle) approvisionne ses plaques d’acier, un composant clé de sa production, par commandes régulières. Avec D = 7 200, cl = 180 €, et cs = (150 × 0,5 % × 12) + (0,02 × 360) = 9 + 7,2 = 16,2 € par m² et par an, on exprime, en posant Q = 7 200/n :\nTravail à faire : déterminer la quantité économique Q*, le nombre de commandes n* et la période T*, puis le coût de gestion optimal.\n**Corrigé — programme optimal :**\nLa dérivée s’annule pour Q² = 160 000, soit **Q* = 400 m²**, d’où **n* = 18 commandes** et **T* = 20 jours**. Le coût optimal est **CG = 3 240 + 3 240 = 6 480 €** (le coût de lancement égale bien le coût de stockage)."
        },
        {
          "type": "p",
          "text": "**La quantité économique de Wilson se construit pas à pas :**"
        },
        {
          "type": "p",
          "text": "*Figure 5 — Wilson, étape 1 : le problème (arbitrer entre deux coûts opposés)*"
        },
        {
          "type": "p",
          "text": "*Figure 6 — Étape 2 : le coût de passation = c_l × (D / Q)*"
        },
        {
          "type": "p",
          "text": "*Figure 7 — Étape 3 : le coût de possession = (Q / 2) × c_s*"
        },
        {
          "type": "p",
          "text": "*Figure 8 — Étape 4 : le coût total de gestion (courbe en U)*"
        },
        {
          "type": "p",
          "text": "*Figure 9 — Étape 5 : l'optimum Q* (où coût de passation = coût de possession)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — La formule de Wilson (à titre indicatif)",
          "text": "La quantité économique peut s’obtenir directement par la formule , où c’s est le coût de stockage rapporté à la période de gestion. Ici : Q* = √(2 × 7 200 × 180 / 16,2) = √160 000 = 400. Attention : certaines épreuves imposent la résolution par dérivation. La racine négative (−400) est écartée : une quantité ne peut être négative — c’est ce qui distingue un exercice de gestion d’un exercice de mathématiques."
        },
        {
          "type": "h4",
          "text": "Interpréter le résultat"
        },
        {
          "type": "p",
          "text": "Le programme optimal ne se résume pas à un nombre : il se lit comme une **consigne de pilotage**. Pour l’entreprise, Q* = 400 m² et n* = 18 signifient « commander 400 m² de cuir synthétique environ toutes les trois semaines (T* = 20 jours), dix-huit fois dans l’année ». Le coût de gestion de 6 480 € représente le prix minimal de la disponibilité de la matière ; aucun autre rythme ne fait mieux sous les hypothèses retenues."
        },
        {
          "type": "p",
          "text": "La courbe de coût total (figure 13.5) est **aplatie au voisinage de l’optimum** : commander 380 ou 420 m² au lieu de 400 ne change le coût que de quelques euros. Cette robustesse est précieuse en pratique — elle autorise à arrondir Q* à une valeur commode (un conditionnement fournisseur, un camion complet) sans dégrader sensiblement le coût. En revanche, s’éloigner fortement de l’optimum (commander une fois par an, ou chaque jour) coûte très cher : c’est la pente raide des extrémités de la courbe."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — ◆ MÉTHODE — Résoudre Wilson par dérivation, pas à pas",
          "text": "**1. Homogénéiser les unités.**Exprimer cs et P dans la même unité de temps (ici, l’année).\n2. Écrire CG en fonction d’une seule inconnue. Choisir Q (ou n) : CG(Q) = cl·(D/Q) + (Q/2)·cs. Pour l’entreprise : .\n**3. Dériver et annuler.**CG’(Q) = −cl·D/Q² + cs/2. L’équation CG’(Q) = 0 donne Q² = 2·cl·D/cs = 160 000.\n**4. Retenir la racine positive.**Q* = +400 (la racine −400 est écartée : une quantité est positive).\n**5. En déduire n* et T*, puis le coût.**n* = D/Q* = 18 ; T* = P/n* = 20 jours ; CG* = 3 240 + 3 240 = 6 480 €. Vérification : à l’optimum, coût de lancement = coût de stockage."
        },
        {
          "type": "h3",
          "text": "2.3 Le modèle avec stock de sécurité"
        },
        {
          "type": "p",
          "text": "Pour se prémunir des aléas (retards de livraison, accélération de la demande), l’entreprise peut détenir un **stock de sécurité**. Celui-ci s’ajoute en permanence au stock, relevant d’autant le stock moyen — et donc le coût de possession."
        },
        {
          "type": "p",
          "text": "*Figure 10 — Le stock de sécurité relève le niveau moyen du stock*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Le stock de sécurité ne change pas Q*, n*, T*",
          "text": "Si l’entreprise conserve un stock de sécurité de 50 m², la fonction de coût devient CG = 1 296 000/Q + 8,1 Q + 810. Le terme constant (810 €) a une **dérivée nulle** : le programme optimal reste inchangé (Q* = 400, n* = 18, T* = 20 jours). Seul le coût global augmente, passant à **6 480 + 810 = 7 290 €**. Conclusion : le stock de sécurité ne modifie pas le rythme des commandes, mais il a un coût qu’il faut financer."
        },
        {
          "type": "p",
          "text": "Le stock de sécurité résulte d’un **arbitrage entre deux coûts** : celui de le détenir (810 € par an ici) et celui de s’en passer (le coût d’une rupture). Tant que le coût attendu d’une rupture — marge perdue, arrêt de production, client déçu — dépasse 810 €, le stock de sécurité est économiquement justifié. Sa fixation rigoureuse relève toutefois de l’avenir aléatoire (section 3.2), où le niveau de service visé détermine la réserve à constituer."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Ne pas recalculer Q* avec le stock de sécurité",
          "text": "Une erreur classique consiste à réintégrer le stock de sécurité dans le stock moyen et à « recalculer » Q*. Le stock de sécurité étant une **constante**, il disparaît à la dérivation : Q*, n* et T* sont strictement inchangés. Seul le coût global augmente du surcoût de possession (ici 810 €). À l’examen, énoncer ce point fait gagner des points et évite un calcul inutile."
        },
        {
          "type": "h3",
          "text": "2.4 Le modèle avec tarif dégressif"
        },
        {
          "type": "p",
          "text": "Les fournisseurs accordent souvent des remises sur quantité, ce qui contredit l’hypothèse d’un prix d’achat constant. L’objectif devient alors de minimiser le **coût total d’approvisionnement** : **CA = coût d’achat + coût de gestion du stock**. On étudie CA pour chaque tranche de tarif."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "MÉTHODE — TARIF DÉGRESSIF",
          "text": "Pour chaque tranche de prix, écrire CA(Q) et calculer la quantité qui annule sa dérivée. Vérifier la cohérence : si cette quantité appartient à la tranche, l’étudier ; sinon, étudier les bornes de la tranche. Comparer les CA obtenus et retenir le minimum global."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Tarif dégressif (société C)",
          "text": "Consommation 900 litres/an, cl = 800 €, taux de possession 10 %/an. Le fournisseur propose : p = 400 € (Q < 100), p = 350 € (100 ≤ Q < 300), p = 300 € (Q ≥ 300).\nTravail à faire : déterminer la quantité à commander qui minimise le coût total d'approvisionnement.\n**Corrigé — quantité optimale :**\nEn étudiant chaque tranche, le coût total minimal est atteint pour Q = 300 litres (CA = 276 900 €), soit 3 commandes de 300 litres, une tous les 4 mois."
        },
        {
          "type": "p",
          "text": "*Figure 11 — Le coût total minimal par tranche de tarif*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Tarif dégressif (le bois)",
          "text": "La Menuiserie Dubois (mobilier bois) négocie l’approvisionnement de ses panneaux de bois. Le fournisseur de bois propose désormais une remise sur quantité : 150 € le m² en dessous de 500 m² par commande, 147 € de 500 à 999 m², 144 € à partir de 1 000 m². Le coût de possession comprend une part financière (6 % de la valeur, soit 0,06 × p) et une part physique fixe (7,2 € par m² et par an).\nTravail à faire : déterminer, pour chaque tranche de tarif, la meilleure quantité et le coût total d'approvisionnement, puis retenir la tranche la moins coûteuse.\n**Corrigé — comparaison par tranche :**\nOn compare le coût total d’approvisionnement CA = coût d’achat + passation + possession sur la meilleure quantité de chaque tranche :"
        },
        {
          "type": "table",
          "headers": [
            "**Tranche**",
            "**Q retenue**",
            "**Achat**",
            "**Passation + possession**",
            "**CA total**"
          ],
          "rows": [
            [
              "150 € (Q < 500)",
              "400 m²",
              "1 080 000",
              "3 240 + 3 240 = 6 480",
              "1 086 480 €"
            ],
            [
              "147 € (500–999)",
              "500 m²",
              "1 058 400",
              "2 592 + 4 005 = 6 597",
              "1 064 997 €"
            ],
            [
              "**144 € (Q ≥ 1 000)**",
              "**1 000 m²**",
              "**1 036 800**",
              "**1 296 + 7 920 = 9 216**",
              "**1 046 016 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le coût total minimal est atteint dans la troisième tranche, pour **Q = 1 000 m²** (CA = 1 046 016 €). Ici la **remise sur le prix d’achat (6 €/m²) l’emporte largement sur le surcoût de gestion** lié à un stock moyen plus élevé. C’est l’enseignement clé du tarif dégressif : la décision se prend sur le **coût total**, achat compris, et non sur le seul coût de gestion du stock — qui, lui, resterait minimal autour de 400 m²."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Hors programme",
          "text": "Le document historique développe aussi un **modèle avec pénurie (rupture)**, où le stock est volontairement limité pour réduire le coût de stockage, ainsi que les **méthodes 20/80 et ABC** de classification des références. Le référentiel précise que **la pénurie et ces méthodes ne sont pas à traiter**. On les mentionne au titre de la culture professionnelle, sans les développer ni les exiger à l’examen."
        }
      ]
    },
    {
      "id": "3-le-reapprovisionnement-et-la-budgetisation-des-approvision",
      "title": "3. Le réapprovisionnement et la budgétisation des approvisionnements",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Le stock d’alerte (point de commande)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le stock d’alerte",
          "text": "Le **stock d’alerte** (ou stock critique, ou point de commande) est le niveau de stock qui **déclenche une commande**. Il doit permettre de satisfaire la demande pendant le délai de livraison et de maintenir le stock de sécurité s’il existe :\n**Stock d’alerte = consommation pendant le délai de livraison + stock de sécurité**"
        },
        {
          "type": "p",
          "text": "*Figure 12 — Le stock d’alerte déclenche la commande*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 4 — Stock d'alerte (point de commande)",
          "text": "Travail à faire : calculer le stock d'alerte sans stock de sécurité, puis avec un stock de sécurité de 50 m², et traiter le cas d'un délai supérieur à la période d'approvisionnement.\n**Corrigé — stock d'alerte :**\nAvec Q = 400 m² consommés en T = 20 jours, la demande quotidienne est de 20 m². Pour un délai de livraison de 5 jours, la consommation pendant le délai est de 100 m².\n**Sans stock de sécurité :**stock d’alerte = 100 m². **Avec un stock de sécurité de 50 m² :**stock d’alerte = 100 + 50 = 150 m².\n*Si le délai dépasse la période T (par exemple 25 jours → 500 m²), il faut retrancher la commande en cours : stock d’alerte = 500 − 400 = 100 m² (sans sécurité), ou 500 + 50 − 400 = 150 m² (avec sécurité).*"
        },
        {
          "type": "h4",
          "text": "Interpréter le point de commande"
        },
        {
          "type": "p",
          "text": "Le stock d’alerte sépare clairement **quand commander** (au niveau d’alerte) de **combien commander** (la quantité Q*). Ces deux décisions sont indépendantes : Q* découle du modèle de Wilson, le stock d’alerte du délai de livraison et du stock de sécurité. Pour l’entreprise, la consigne opérationnelle est donc double : « lancer une commande de 400 m² dès que le stock descend à 150 m² »."
        },
        {
          "type": "p",
          "text": "Le stock d’alerte est aussi un **outil de délégation** : une fois le seuil fixé, le magasinier ou le système d’information peut déclencher seul la commande, sans arbitrage à refaire chaque fois. C’est le principe du réapprovisionnement automatique des ERP modernes (section 4). La difficulté tient au cas où le délai de livraison dépasse la durée d’un cycle : il faut alors tenir compte des commandes déjà en cours pour ne pas surstocker — d’où la correction « − Q » illustrée ci-dessus."
        },
        {
          "type": "h3",
          "text": "3.2 La gestion des stocks en avenir aléatoire"
        },
        {
          "type": "p",
          "text": "Les modèles précédents supposent une demande connue avec certitude. En réalité, la demande est souvent **aléatoire**. Pour s’en protéger, l’entreprise constitue un stock dont l’objectif est de déterminer le niveau S au début de chaque période qui minimise le coût de gestion. On se place dans le cas — au programme — où les coûts ne sont pas proportionnels au temps, et l’on distingue selon que la demande est une variable aléatoire continue ou discrète."
        },
        {
          "type": "h4",
          "text": "La demande est une variable aléatoire continue"
        },
        {
          "type": "p",
          "text": "Lorsque la demande suit une loi continue (souvent une **loi normale**), on admet que le coût de gestion est minimal pour la valeur S du stock telle que :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "SEUIL OPTIMAL EN AVENIR ALÉATOIRE CONTINU",
          "text": "où cp est le coût de pénurie (manque à gagner d’une demande non satisfaite) et cs le coût d’un invendu. Ce rapport — le « taux de service » optimal — fixe la probabilité que la demande soit couverte par le stock."
        },
        {
          "type": "p",
          "text": "On détermine ensuite S par lecture de la table de la loi normale centrée réduite, après le changement de variable t = (S − μ) / σ. Le **stock de sécurité** est alors l’écart entre ce stock optimal et la demande moyenne : S* − μ."
        },
        {
          "type": "p",
          "text": "*Figure 13 — Le seuil optimal S* sur la loi de la demande (avenir aléatoire continu)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 5 — Avenir aléatoire continu (loi normale)",
          "text": "La vente journalière de viande suit une loi normale N(500 kg ; 75 kg). La viande est vendue 25 €/kg avec un bénéfice de 10 €/kg ; un invendu est bradé à 7 €/kg.\nTravail à faire : déterminer le coût de pénurie et le coût d'un invendu, puis le stock optimal S* et le stock de sécurité. Reprendre le calcul en limitant le taux de rupture à 10 %.\n**Corrigé — stock optimal :**\nOn en déduit le coût de pénurie cp = 10 € (manque à gagner) et le coût d’un invendu cs = (25 − 10) − 7 = 8 €. Le coût est minimal pour P(D ≤ S) = 10 / (10 + 8) = 0,5555. La table donne t ≈ 0,14, d’où S* = 500 + 0,14 × 75 = 510,5 kg et un stock de sécurité de 10,5 kg.\nPour limiter le taux de rupture à 10 %, on impose P(D > S) = 0,10, soit P(D ≤ S) = 0,90 → t ≈ 1,28 → S* = 500 + 1,28 × 75 = **596 kg**, soit un stock de sécurité de 96 kg : réduire le risque de rupture exige un stock (et un coût) bien plus élevés."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Nombre moyen de jours de rupture",
          "text": "Avec un stock quotidien de 510,5 kg, la probabilité de rupture un jour donné est 1 − 0,5555 = 0,4445. Les jours étant indépendants, le nombre de jours de rupture sur une année de 315 jours d’ouverture suit une loi binomiale B(315 ; 0,4445), dont l’espérance n·p = 315 × 0,4445 ≈ **140 jours**. Un taux de service de 55 % laisse donc l’entreprise en rupture près d’un jour sur deux — d’où l’intérêt de viser un taux de service plus élevé selon le coût réel d’une rupture."
        },
        {
          "type": "h4",
          "text": "La demande est une variable aléatoire discrète"
        },
        {
          "type": "p",
          "text": "Lorsque la demande ne prend qu’un petit nombre de valeurs, on construit une **matrice des coûts de gestion** : chaque ligne correspond à un niveau de stock possible, chaque colonne à une valeur de la demande (pondérée par sa probabilité). On calcule, pour chaque stock, l’**espérance de coût**, et l’on retient le stock qui la minimise (ou, de façon équivalente, qui maximise l’espérance de gain)."
        },
        {
          "type": "p",
          "text": "*Figure 14 — La matrice des coûts en avenir aléatoire discret*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 6 — Avenir aléatoire discret (matrice des coûts)",
          "text": "La demande hebdomadaire du produit P suit la loi : P(D=0) = 0,1 ; P(D=10) = 0,4 ; P(D=20) = 0,3 ; P(D=30) = 0,2. Le coût de pénurie est de 6 € par article manquant, le coût de stockage de 4 € par article invendu.\nTravail à faire : pour chaque niveau de stock, calculer l'espérance du coût de gestion et retenir le stock qui la minimise.\n**Corrigé — espérance de coût par niveau de stock :**"
        },
        {
          "type": "table",
          "headers": [
            "**Stock**",
            "**E(coût)**",
            "**Calcul**"
          ],
          "rows": [
            [
              "0",
              "96 €",
              "0,4×60 + 0,3×120 + 0,2×180"
            ],
            [
              "10",
              "46 €",
              "0,1×40 + 0,3×60 + 0,2×120"
            ],
            [
              "**20**",
              "**36 €**",
              "**0,1×80 + 0,4×40 + 0,2×60 → minimum**"
            ],
            [
              "30",
              "56 €",
              "0,1×120 + 0,4×80 + 0,3×40"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La solution optimale est un stock de **20 produits** au début de chaque semaine : c’est le niveau qui minimise l’espérance du coût de gestion (36 €)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION",
          "text": "**Pour l’entreprise,**la demande de produits finis écoresponsables est saisonnière et incertaine. En période de forte demande, le contrôleur de gestion ne peut plus se fier au seul modèle de Wilson : il fixe un stock cible en arbitrant entre le coût d’un invendu (cs, démarque de fin de saison) et le coût d’une rupture (cp, vente perdue et client déçu). Le rapport cp / (cp + cs) lui donne le taux de service à viser ; plus la marge perdue en cas de rupture est élevée, plus il a intérêt à stocker."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Continu ou discret : deux outils, une même logique",
          "text": "Les deux cas de l’avenir aléatoire répondent à la même question — quel niveau de stock minimise le coût attendu ? — mais avec des outils différents. La **loi continue** (souvent normale) conduit à la condition P(D ≤ S) = cp/(cp + cs), résolue par lecture de la table ; la **loi discrète** conduit à une matrice des coûts dont on retient le minimum d’espérance. Dans les deux cas, le résultat est un **taux de service cible** : la probabilité que la demande soit couverte. Le contrôleur de gestion ne cherche donc pas le « zéro rupture » (coûteux), mais le niveau de service qui équilibre le coût d’une rupture et celui d’un invendu."
        },
        {
          "type": "h3",
          "text": "3.3 Les politiques de réapprovisionnement"
        },
        {
          "type": "p",
          "text": "Quand la consommation est irrégulière, deux logiques de réapprovisionnement s’offrent au gestionnaire."
        },
        {
          "type": "p",
          "text": "*Figure 15 — Deux logiques de réapprovisionnement*"
        },
        {
          "type": "table",
          "headers": [
            "**Politique**",
            "**Principe**",
            "**Avantage**",
            "**Inconvénient**"
          ],
          "rows": [
            [
              "**Quantité fixe**",
              "Commander toujours Q* quand le stock atteint le point de commande",
              "Facilite le stockage ; quantité optimale",
              "Dates de commande irrégulières"
            ],
            [
              "**Date fixe**",
              "Commander à intervalles réguliers une quantité ajustée au besoin",
              "Facilite le travail administratif",
              "Quantités variables, moins optimales"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "3.4 La budgétisation des approvisionnements"
        },
        {
          "type": "p",
          "text": "La budgétisation fait apparaître l’échelonnement dans le temps des consommations, commandes, livraisons et niveaux de stock. Quand la consommation est régulière, elle ne pose pas de difficulté. Quand elle est irrégulière (cas fréquent, saisonnalité), on retient l’une des deux politiques précédentes. Deux méthodes coexistent : la méthode **graphique** et la méthode **comptable** (tableau)."
        },
        {
          "type": "p",
          "text": "*Figure 16 — Budgétisation graphique : consommations cumulées et livraisons*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 7 — Budgétisation en quantités constantes (société E)",
          "text": "Ventes annuelles 1 500 unités, stock initial 300, délai d’approvisionnement 1 mois, stock de sécurité 15 jours.\nTravail à faire : déterminer le programme optimal (Q*, n*, T*) par le modèle de Wilson, puis budgétiser les approvisionnements mois par mois en repérant les dates de rupture et en planifiant livraisons et commandes.\n**Corrigé — budgétisation des approvisionnements :**\nLe modèle de Wilson donne Q* = 500, n* = 3, T* = 4 mois. La méthode comptable suit le stock théorique mois par mois, repère les dates de rupture, et planifie les livraisons (15 jours avant la rupture) et les commandes (1 mois avant la livraison) :"
        },
        {
          "type": "table",
          "headers": [
            "**Mois**",
            "**Besoin**",
            "**Stock théo.**",
            "**Rupture**",
            "**Livraison**",
            "**Stock rectifié**"
          ],
          "rows": [
            [
              "Déc N–1",
              "",
              "300",
              "",
              "",
              ""
            ],
            [
              "Janv.",
              "50",
              "250",
              "",
              "",
              ""
            ],
            [
              "Févr.",
              "150",
              "100",
              "",
              "",
              ""
            ],
            [
              "Mars",
              "100",
              "0",
              "31 mars",
              "500",
              "500"
            ],
            [
              "…",
              "…",
              "…",
              "",
              "",
              ""
            ],
            [
              "Août",
              "125",
              "20",
              "",
              "500",
              "520"
            ],
            [
              "Sept.",
              "90",
              "−70",
              "6 sept.",
              "430",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Lecture délicate : la première rupture a lieu fin mars, donc livraison le 15 mars et commande le 15 février ; le stock de mars est rectifié à 500.*"
        }
      ]
    },
    {
      "id": "4-le-pilotage-moderne-des-approvisionnements",
      "title": "4. Le pilotage moderne des approvisionnements",
      "blocks": [
        {
          "type": "h3",
          "text": "4.1 Du stock au pilotage de la supply chain"
        },
        {
          "type": "p",
          "text": "Les modèles classiques raisonnent sur un stock isolé. La gestion contemporaine élargit la perspective à l’ensemble de la **chaîne logistique** (supply chain) : des fournisseurs des fournisseurs jusqu’au client final. Le **Supply Chain Management** coordonne les flux physiques et d’information de bout en bout, pour réduire à la fois les stocks et les délais, tout en sécurisant les approvisionnements."
        },
        {
          "type": "p",
          "text": "Ce changement d’échelle déplace l’optimisation : il ne s’agit plus de minimiser le coût d’un stock pris séparément, mais le coût total de la chaîne. Une commande optimale au sens de Wilson pour l’entreprise peut se révéler sous-optimale si elle impose à son fournisseur des lots irréguliers, des transports à vide ou des ruptures en cascade. La performance se construit désormais dans la **relation fournisseur** : partage des prévisions, contrats-cadres, fiabilité des délais. Le contrôleur de gestion suit alors des indicateurs de chaîne — taux de service, taux de rupture, rotation des stocks, délai moyen de réapprovisionnement — autant que le seul coût de gestion."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Hors programme",
          "text": "Plusieurs approches relèvent de cette culture supply chain mais **ne sont pas au programme** de la compétence 3.2 : la classification **20/80 (Pareto) et la méthode ABC** (gérer finement les références à forte valeur, plus souplement les autres), et le **juste-à-temps** (JàT, tendre vers le « zéro stock » par des livraisons synchronisées avec la production). On les présente ici pour mémoire : elles ne sont pas exigées à l’examen."
        },
        {
          "type": "h3",
          "text": "4.2 Le regard critique sur les modèles"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Regard critique",
          "text": "Le modèle de Wilson repose sur des hypothèses fortes — **demande régulière et certaine, réapprovisionnement instantané, prix constant** — rarement toutes réunies. Ses adaptations (stock de sécurité, tarif dégressif, avenir aléatoire) en assouplissent certaines, sans lever la principale limite : la demande réelle est souvent volatile. Le risque est double et symétrique : la **rupture** (ventes perdues, clients mécontents, arrêt de production) et le **surstockage** (trésorerie immobilisée, obsolescence, coûts de détention). Les modèles sont des aides à la décision, à confronter au jugement et à la qualité de la relation fournisseur."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS NUMÉRIQUE — La gestion des stocks à l’ère numérique",
          "text": "Les technologies transforment en profondeur le pilotage des stocks :\n**ERP & WMS —**les progiciels intégrés et les systèmes de gestion d’entrepôt (Warehouse Management Systems) suivent les stocks en temps réel et automatisent les réapprovisionnements.\n**RFID & IoT —**les étiquettes radio-fréquence et les objets connectés tracent chaque article et donnent une visibilité instantanée sur les niveaux et les emplacements.\n**Business Intelligence & Data Analytics —**les tableaux de bord croisent ventes, stocks et délais pour piloter par exception et détecter les dérives.\n**IA prédictive —**les algorithmes anticipent la demande (saisonnalité, météo, promotions) et optimisent dynamiquement les paramètres de réapprovisionnement, au-delà du Q* statique de Wilson.\n*Le numérique ne supprime pas l’arbitrage coût/disponibilité : il l’affine et le rend continu.*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "FOCUS DURABILITÉ — Approvisionnements et performance globale",
          "text": "La gestion des stocks s’inscrit dans une logique de **performance globale** :\n**Achats responsables —**choisir des fournisseurs selon des critères ESG ; chez l’entreprise, le cuir synthétique et le textile sont sélectionnés pour leur écoresponsabilité.\n**Réduction du gaspillage —**limiter le surstockage, c’est réduire l’obsolescence, les invendus et leur empreinte environnementale.\n**Arbitrage durable —**un approvisionnement local raccourcit les délais et l’empreinte carbone, mais peut coûter plus cher : la décision intègre désormais cet arbitrage économique et environnemental.\n*Optimiser les stocks, c’est donc piloter à la fois le coût, le service client et l’empreinte de la chaîne d’approvisionnement.*"
        },
        {
          "type": "h3",
          "text": "4.3 Regard critique d’ensemble"
        },
        {
          "type": "p",
          "text": "Les modèles de gestion des stocks ont une vertu majeure : ils **transforment une intuition en décision chiffrée**. Plutôt que de stocker « au jugé », l’entreprise dispose d’un programme optimal explicite, reproductible et auditable. Cette objectivation est précieuse pour piloter, comparer et déléguer."
        },
        {
          "type": "p",
          "text": "Leurs limites tiennent à leurs hypothèses. Le modèle de Wilson suppose une demande certaine et un délai nul ; ses adaptations (stock de sécurité, tarif dégressif, avenir aléatoire) lèvent une hypothèse à la fois, sans jamais reconstituer la complexité réelle. Surtout, la qualité d’un programme dépend entièrement de **la qualité des données** : un coût de lancement mal estimé ou une demande prévisionnelle erronée fausse l’ensemble. Le contrôleur de gestion doit donc traiter ces résultats comme des **aides à la décision**, à confronter au jugement, à la connaissance du marché et à la relation fournisseur — non comme des vérités mécaniques."
        },
        {
          "type": "table",
          "headers": [
            "**Apports des modèles**",
            "**Limites et risques**"
          ],
          "rows": [
            [
              "Quantifient l’arbitrage coût/disponibilité",
              "Hypothèses fortes (demande certaine, délai nul)"
            ],
            [
              "Optimum simple et robuste (Wilson)",
              "Risque de rupture si la demande est volatile"
            ],
            [
              "Adaptations utiles (sécurité, tarifs)",
              "Risque de surstockage (trésorerie, obsolescence)"
            ],
            [
              "Base d’un pilotage outillé (ERP, IA)",
              "Dépendance à la qualité des données et des fournisseurs"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ÉNONCÉ — Le réapprovisionnement du textile",
          "text": "l’entreprise prévoit de consommer 14 400 m² de textile l’an prochain (360 jours d’activité). Le coût de lancement d’une commande est de 200 €. Le coût de stockage est de 16 € par m² et par an. Le délai de livraison du fournisseur est de 9 jours.\n**Travail à faire :**\n1. Déterminer le programme d’approvisionnement optimal (Q*, n*, T*) et le coût de gestion.\n2. Calculer le stock d’alerte, sachant qu’l’entreprise conserve un stock de sécurité de 80 m².\n3. Interpréter le résultat et conclure pour le pilotage des approvisionnements.\n4. Le fournisseur propose une remise sur quantité : 100 € le m² (Q < 600), 98 € (600 ≤ Q < 1 200), 96 € (Q ≥ 1 200). Le coût de stockage reste de 16 € par m² et par an. Déterminer la quantité qui minimise le coût total d’approvisionnement."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CORRIGÉ",
          "text": "**Question 1 — Programme optimal**\nCG’(Q) = −2 880 000/Q² + 8 s’annule pour Q² = 360 000, soit **Q* = 600 m²**.\nn* = 14 400/600 = **24 commandes** ; T* = 360/24 = **15 jours**. CG = 4 800 + 4 800 = **9 600 €** (le coût de lancement égale bien le coût de stockage).\n**Question 2 — Stock d’alerte**\nDemande quotidienne = 14 400/360 = 40 m²/jour. Consommation pendant le délai de 9 jours = 40 × 9 = 360 m². Le délai (9 j) étant inférieur à T (15 j), aucune commande en cours à retrancher : Stock d’alerte = 360 + 80 = **440 m²**.\n**Question 3 — Interprétation**\nl’entreprise doit commander 600 m² de textile toutes les deux semaines (24 fois par an), et déclencher chaque commande dès que le stock descend à 440 m².\n**Conclusion de pilotage :**ce rythme minimise le coût de gestion (9 600 €) tout en couvrant le délai de livraison et un aléa de 80 m². Le stock de sécurité a un coût (80 × 16 = 1 280 € par an) qui se justifie si le coût d’une rupture de textile — arrêt de la production d’équipements — lui est supérieur. La décision relève donc d’un arbitrage entre coût de possession et coût de rupture.\n**Question 4 — Tarif dégressif**\nOn compare le coût total CA = achat + passation + possession sur la meilleure quantité de chaque tranche. Le coût de gestion étant minimal pour Q* = 600 (gestion = 9 600 €) :\n• Tranche 100 € (Q < 600) : la borne 600 n’appartient pas à la tranche ; au mieux Q proche de 600, CA ≈ 1 449 600 €.\n• Tranche 98 € (600 ≤ Q < 1 200) : Q = 600 (l’optimum de gestion). CA = 1 411 200 + 9 600 = **1 420 800 €**.\n• Tranche 96 € (Q ≥ 1 200) : Q = 1 200 (borne). Gestion = 2 400 + 9 600 = 12 000. CA = 1 382 400 + 12 000 = **1 394 400 €**.\nLe minimum global est atteint pour **Q = 1 200 m²** (CA = 1 394 400 €) : la remise de 4 €/m² sur l’achat (− 57 600 € au total) dépasse le surcoût de gestion (+ 2 400 €). On commande donc 1 200 m² (12 fois par an), en acceptant un stock moyen plus élevé pour bénéficier du meilleur prix d’achat. La décision se prend sur le coût total, achat compris."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse finale**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Quantité économique de Wilson : Q* = √(2·D·Ca / Cs), avec D la demande, Ca le coût de passation d'une commande et Cs le coût de possession unitaire annuel.\n• À l'optimum, coût de passation = coût de possession ; le coût total est plat autour de Q* (faible sensibilité aux petits écarts).\n• Point de commande = consommation pendant le délai de livraison + stock de sécurité ; le stock de sécurité couvre l'aléa de la demande.\n• Veiller à l'homogénéité des unités de temps : Cs et D doivent porter sur la même période.\n• Pont → Ch04 (dimensionner le stock de sécurité via la loi normale) et Ch09 (le budget des approvisionnements s'inscrit dans la procédure budgétaire)."
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
            "**Utilité**",
            "**Limites**"
          ],
          "rows": [
            [
              "**Coûts des stocks**",
              "Acquisition, passation, possession, rupture",
              "Fondent l’arbitrage économique",
              "Difficiles à évaluer précisément"
            ],
            [
              "**Modèle de Wilson**",
              "",
              "Programme optimal (Q*, n*, T*)",
              "Demande certaine, délai nul"
            ],
            [
              "**Stock de sécurité**",
              "Réserve contre les aléas",
              "Réduit le risque de rupture",
              "Coût de possession supplémentaire"
            ],
            [
              "**Stock d’alerte**",
              "Conso. pendant délai + sécurité",
              "Déclenche la commande à temps",
              "Suppose un délai connu"
            ],
            [
              "**Tarif dégressif**",
              "Minimiser CA par tranche de prix",
              "Profite des remises sur quantité",
              "Peut gonfler le stock moyen"
            ],
            [
              "**Avenir aléatoire**",
              "P(D≤S) = cp/(cp+cs) ; matrice des coûts",
              "Stock optimal sous demande incertaine",
              "Suppose une loi de demande connue"
            ],
            [
              "**Budgétisation**",
              "Calendrier des commandes/livraisons",
              "Planifie sans rupture",
              "Lourd si consommation irrégulière"
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
          "text": "**Stock d’alerte = conso. pendant le délai + stock de sécurité**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "PIÈGES CLASSIQUES & CONSEILS",
          "text": "Incohérence d’unités de temps entre cs et P (la faute la plus fréquente).\nLe stock de sécurité ne modifie pas Q*, n*, T* — seulement le coût global.\nSi le délai de livraison > T, retrancher la (les) commande(s) en cours du stock d’alerte.\nHors programme : pénurie, méthodes 20/80 et ABC, juste-à-temps — ne pas les développer.\nToujours conclure par une interprétation managériale (arbitrage coût / rupture)."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
