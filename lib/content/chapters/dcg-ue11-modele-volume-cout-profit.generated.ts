// Généré par scripts/convert-docx.mjs depuis CHAPITRE_03__LE_MODELE_VOLUME-COUT-PROFIT.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-modele-volume-cout-profit",
  "level": "DCG",
  "ue": "UE11",
  "number": 3,
  "title": "Le modèle volume-coût-profit",
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
          "text": "**Axe 2 — Le contrôle de gestion, outil de pilotage de la performance. Compétence 2.1 « Analyser la formation du résultat » (10 heures). Ce chapitre prolonge l’étude des coûts partiels : la marge sur coût variable y devient l’instrument central d’un raisonnement de pilotage tourné vers la décision et la maîtrise du risque.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Identifier et analyser les données de charges et de produits issues des systèmes d’information.\n• Mettre en œuvre le modèle coût-volume-profit pour analyser la formation du résultat.\n• Calculer et interpréter seuils et marges en avenir certain (l’avenir aléatoire — loi normale — fait l’objet du chapitre dédié aux variables aléatoires, cf. chapitre 4).\n• Mobiliser le levier opérationnel et apprécier le risque d’exploitation.\n• Identifier intérêts et limites de l’approche dans des contextes variés : production, commerce, services, secteur public, associations."
        }
      ]
    },
    {
      "id": "introduction-generale",
      "title": "Introduction générale",
      "blocks": [
        {
          "type": "callout",
          "variant": "tip",
          "title": "LA MÉTHODE EN 4 TEMPS",
          "text": "**Comprendre —**pourquoi le modèle existe : distinguer ce qui réagit au volume de ce qui n’y réagit pas.\n**Calculer —**comment il fonctionne : marge sur coût variable, seuil, point mort, indicateurs de risque.\n**Interpréter —**exploiter les résultats pour situer le risque et éclairer une décision.\n**Critiquer —**connaître les limites (linéarité, statisme, mix produit) pour délimiter le domaine de validité."
        },
        {
          "type": "p",
          "text": "Une entreprise peut-elle savoir, avant de connaître son résultat définitif, à partir de quel niveau d’activité elle commencera à gagner de l’argent ? De combien ses ventes peuvent-elles chuter avant que l’exploitation ne devienne déficitaire ? Pourquoi deux entreprises au même chiffre d’affaires peuvent-elles présenter des profils de risque radicalement différents ? À ces questions, le modèle Volume-Coût-Profit (en anglais Cost-Volume-Profit, d’où le sigle CVP) apporte une réponse simple, rigoureuse et immédiatement exploitable."
        },
        {
          "type": "p",
          "text": "Le modèle repose sur une intuition économique fondamentale : toutes les charges ne réagissent pas de la même manière à la variation de l’activité. Certaines suivent le volume (les charges variables), d’autres demeurent stables sur un horizon donné (les charges fixes, ou charges de structure). De cette distinction naît un outil de diagnostic d’une grande puissance, qui structure la pensée du gestionnaire bien au-delà du simple calcul du seuil."
        },
        {
          "type": "p",
          "text": "Conformément à l’esprit de la réforme, ce chapitre ne réduit jamais le modèle à une succession de formules. Chaque notion est abordée selon les quatre temps présentés ci-dessus."
        },
        {
          "type": "p",
          "text": "La formation du résultat suit une cascade logique : le chiffre d’affaires absorbe d’abord les charges variables pour dégager une marge sur coût variable, laquelle doit ensuite couvrir les charges fixes avant de laisser apparaître un résultat."
        },
        {
          "type": "p",
          "text": "*Figure 1 — La cascade de formation du résultat (en k€)*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une question de vocabulaire imposée par la réforme",
          "text": "Le programme rénové privilégie l’expression **« seuil de profitabilité »** plutôt que « seuil de rentabilité ». La profitabilité rapporte le résultat au chiffre d’affaires ; la rentabilité rapporte le résultat à l’actif économique (UE 6). Les deux expressions désignent le même calcul ; ce chapitre retient « seuil de profitabilité » tout en signalant l’appellation traditionnelle lorsqu’elle reste d’usage courant."
        },
        {
          "type": "p",
          "text": "**1**"
        }
      ]
    },
    {
      "id": "partie-1-les-fondements-du-modele-volume-cout-profit",
      "title": "Partie 1 — Les fondements du modèle Volume-Coût-Profit",
      "blocks": [
        {
          "type": "p",
          "text": "Avant de calculer quoi que ce soit, il faut comprendre ce que le modèle suppose, quelles variables il manipule et quelles relations il établit entre elles. C’est l’objet de cette première partie."
        },
        {
          "type": "h3",
          "text": "1.1 La définition et l’équation fondamentale"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le modèle coût-volume-profit",
          "text": "Le modèle coût-volume-profit est une modélisation mathématique qui met en relation, sous forme d’une équation, les trois dimensions que sont le coût, le volume d’activité (les ventes) et le profit (le résultat)."
        },
        {
          "type": "p",
          "text": "Le point de départ est l’identité comptable la plus élémentaire :"
        },
        {
          "type": "p",
          "text": "En remplaçant les ventes par le chiffre d’affaires (CA) et en décomposant les coûts en charges variables (CV) et charges fixes (CF), on obtient **R = CA − CV − CF**. Le chiffre d’affaires est le produit du volume par le prix : **CA = P × Q**. Les charges variables s’expriment en proportion du chiffre d’affaires : **CV = c × CA**, où c est le coût variable relatif. D’où la forme aboutie du modèle :"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ÉQUATION FONDAMENTALE DU MODÈLE CVP",
          "text": "où **(1 − c)** est la marge sur coût variable relative (le taux de marge sur coût variable)."
        },
        {
          "type": "p",
          "text": "Le modèle CVP est donc une représentation linéaire et volontairement simplifiée de la structure de coûts, de la forme Y = aX + b. Cette linéarité est sa force (lisibilité, calculs immédiats) autant que sa principale limite, comme nous le verrons."
        },
        {
          "type": "h3",
          "text": "1.2 Les hypothèses du modèle"
        },
        {
          "type": "p",
          "text": "La simplicité du modèle se paie par un ensemble d’hypothèses qu’il faut connaître pour en mesurer la portée. Les comprendre, c’est déjà savoir quand le modèle est fiable et quand il ne l’est plus."
        },
        {
          "type": "table",
          "headers": [
            "**Hypothèse**",
            "**Contenu**",
            "**Conséquence**"
          ],
          "rows": [
            [
              "Linéarité des charges",
              "CV strictement proportionnelles au volume ; CF constantes.",
              "Le résultat est une fonction affine du CA."
            ],
            [
              "Prix de vente constant",
              "Le prix unitaire ne dépend pas des quantités vendues.",
              "Ni rabais de volume, ni saturation du marché."
            ],
            [
              "Structure stable",
              "La capacité (les CF) ne change pas sur la période.",
              "Valable à l’intérieur d’un palier de structure."
            ],
            [
              "Pas de stock",
              "Tout ce qui est produit est vendu : production = ventes.",
              "On raisonne sur les quantités vendues."
            ],
            [
              "Court terme",
              "Le modèle décrit un horizon court (l’exercice).",
              "Outil de pilotage tactique, non stratégique."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Citer une hypothèse avant de commenter",
          "text": "Le jour de l’épreuve, citer une ou deux hypothèses pertinentes avant de commenter un résultat montre au correcteur que vous maîtrisez les limites de l’outil. C’est exactement l’analyse critique attendue par le programme rénové."
        },
        {
          "type": "h3",
          "text": "1.3 Les variables et le comportement des charges"
        },
        {
          "type": "p",
          "text": "Le cœur du modèle est la distinction entre charges variables et charges fixes. Cette typologie, déjà rencontrée dans l’étude des coûts partiels, conditionne toute la suite."
        },
        {
          "type": "h3",
          "text": "Charges variables, charges fixes, charges totales"
        },
        {
          "type": "ul",
          "items": [
            "**Charges variables (CV) — augmentent proportionnellement à l’activité : matières (matière du produit), énergie de production, commissions. Elles forment une droite issue de l’origine.**",
            "**Charges fixes (CF) —**indépendantes du volume sur un palier donné : loyer de l’atelier, amortissements des moules, encadrement. Elles forment une droite horizontale.",
            "**Charges totales (CT = CF + CV) —**somme des deux : une droite parallèle aux charges variables, décalée vers le haut de la valeur des charges fixes."
          ]
        },
        {
          "type": "p",
          "text": "*Figure 2 — Comportement des charges en fonction du volume (Brasserie du Mont)*"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Charge fixe unitaire ≠ charge fixe totale",
          "text": "La charge fixe totale est constante, mais rapportée à l’unité produite elle diminue quand le volume augmente (effet de dilution). Inversement, la charge variable unitaire est constante alors que la charge variable totale croît avec le volume."
        },
        {
          "type": "h3",
          "text": "La marge sur coût variable : pivot du modèle"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La marge sur coût variable (MCV)",
          "text": "Différence entre le chiffre d’affaires et les charges variables. Elle mesure ce qui reste, après couverture des charges variables, pour financer les charges fixes puis dégager un résultat."
        },
        {
          "type": "h3",
          "text": "1.4 Les relations entre activité, coûts et résultat"
        },
        {
          "type": "p",
          "text": "La puissance du modèle tient à ce qu’il relie ces variables dans un raisonnement unique. Trois lectures équivalentes du même phénomène coexistent, et chacune débouchera sur une méthode de calcul du seuil (Partie 2) :"
        },
        {
          "type": "ul",
          "items": [
            "**Lecture par la marge —**le résultat naît quand la MCV cumulée dépasse les charges fixes.",
            "Lecture par le résultat — ; le seuil correspond à R = 0.",
            "**Lecture par l’égalité des flux —**le seuil est atteint quand le chiffre d’affaires égale les charges totales."
          ]
        },
        {
          "type": "h3",
          "text": "1.5 Les limites des hypothèses : un premier regard critique"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "La linéarité est une fiction commode : dans la réalité, les charges variables unitaires peuvent baisser (remises de volume) ou monter (heures supplémentaires majorées), et les charges fixes évoluent par paliers. L’hypothèse « production = ventes » ignore les variations de stocks, fréquentes dans l’industrie. Le modèle est statique : il photographie une structure de coûts à un instant donné et se prête mal aux décisions de long terme.\nCes limites ne disqualifient pas le modèle : elles en délimitent le domaine de validité. Un bon contrôleur de gestion sait que le CVP est un outil de diagnostic rapide, à compléter par d’autres approches."
        },
        {
          "type": "p",
          "text": "**2**"
        }
      ]
    },
    {
      "id": "partie-2-le-seuil-de-profitabilite-et-le-point-mort",
      "title": "Partie 2 — Le seuil de profitabilité et le point mort",
      "blocks": [
        {
          "type": "p",
          "text": "Le modèle CVP est avant tout mobilisé pour déterminer le seuil de profitabilité. Nous présentons d’abord le modèle de base, puis ses enrichissements (variation des charges, saisonnalité, multiproduction) qui rapprochent le calcul de la réalité des entreprises."
        },
        {
          "type": "h3",
          "text": "2.1 La notion de seuil de profitabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le seuil de profitabilité",
          "text": "Traditionnellement appelé seuil de rentabilité, ou encore point mort dans certains manuels, il correspond au niveau de ventes pour lequel le résultat est nul. Il peut s’exprimer en valeur (un chiffre d’affaires) ou en volume (un nombre d’unités)."
        },
        {
          "type": "p",
          "text": "Le résultat est nul lorsque la marge sur coût variable couvre exactement les charges de structure. En notant a le taux de MCV, CF les charges fixes, X le seuil en valeur, Q le seuil en volume, P le prix de vente :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**= FORMULES DU SEUIL**"
        },
        {
          "type": "h3",
          "text": "2.2 Les trois méthodes de calcul"
        },
        {
          "type": "p",
          "text": "La Brasserie du Mont (boissons rafraîchissantes) produit un soda dont nous suivrons le cas tout au long de cette partie. Le compte de résultat différentiel annuel s’établit ainsi :"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Quantité**",
            "**Unitaire**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Chiffre d’affaires",
              "20 000",
              "50",
              "1 000 000"
            ],
            [
              "Charges variables",
              "20 000",
              "30",
              "600 000"
            ],
            [
              "Marge sur coût variable",
              "20 000",
              "20",
              "400 000"
            ],
            [
              "Charges de structure",
              "—",
              "—",
              "300 000"
            ],
            [
              "Résultat",
              "—",
              "—",
              "100 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Taux de marge sur coût variable : 400 000 / 1 000 000 = 20 / 50 = **40 %**."
        },
        {
          "type": "h3",
          "text": "Méthode 1 — Par l’égalité « MCV = CF »"
        },
        {
          "type": "p",
          "text": "On cherche le chiffre d’affaires X qui rend la marge sur coût variable égale aux charges fixes :"
        },
        {
          "type": "p",
          "text": "**0,4 X = 300 000 ⟹ X = 750 000 €**"
        },
        {
          "type": "p",
          "text": "Seuil en volume : 750 000 / 50 = 15 000 sodas (soit 300 000 / 20). Graphiquement, on trace la droite de la MCV et la droite des charges fixes ; leur intersection donne le seuil."
        },
        {
          "type": "p",
          "text": "*Figure 3 — Détermination graphique du seuil : intersection MCV / CF*"
        },
        {
          "type": "h3",
          "text": "Méthode 2 — Par l’équation « Résultat = 0 »"
        },
        {
          "type": "p",
          "text": "On exprime directement le résultat en fonction du chiffre d’affaires et on l’annule :"
        },
        {
          "type": "p",
          "text": "**0,4 X − 300 000 = 0 ⟹ X = 750 000 €**"
        },
        {
          "type": "p",
          "text": "Graphiquement, on trace la droite du résultat et on lit son intersection avec l’axe des abscisses (là où le résultat passe de négatif à positif)."
        },
        {
          "type": "p",
          "text": "*Figure 4 — Le seuil comme point d’annulation du résultat*"
        },
        {
          "type": "h3",
          "text": "Méthode 3 — Par l’égalité « CA = Charges totales »"
        },
        {
          "type": "p",
          "text": "Les charges variables représentent 30 / 50 = 60 % du chiffre d’affaires. Le seuil est atteint quand le chiffre d’affaires couvre l’ensemble des charges :"
        },
        {
          "type": "p",
          "text": "**X = 0,6 X + 300 000 ⟹ 0,4 X = 300 000 ⟹ X = 750 000 €**"
        },
        {
          "type": "p",
          "text": "Graphiquement, on trace la première bissectrice (le chiffre d’affaires) et la droite des charges totales ; leur intersection donne le seuil."
        },
        {
          "type": "p",
          "text": "*Figure 5 — Le seuil comme intersection CA / charges totales*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Trois chemins, une seule vérité",
          "text": "Les trois méthodes conduisent au même résultat (750 000 €). Le choix relève du confort : la méthode 1 est la plus rapide en calcul, la méthode 3 la plus parlante pour visualiser les zones de perte et de bénéfice. Maîtriser les trois permet de répondre à toute formulation d’énoncé."
        },
        {
          "type": "h3",
          "text": "2.3 Le point mort : la date d’atteinte du seuil"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le point mort",
          "text": "Dans le langage du pilotage, le point mort désigne la date à laquelle le seuil de profitabilité est atteint au cours de l’exercice. Plus cette date est précoce, plus l’entreprise est en sécurité."
        },
        {
          "type": "p",
          "text": "Si l’activité est régulière sur l’année, une simple règle de trois suffit. Combien de mois faut-il pour réaliser 750 000 € de chiffre d’affaires, sachant que 12 mois en produisent 1 000 000 € ?"
        },
        {
          "type": "p",
          "text": "**m = (750 000 × 12) / 1 000 000 = 9 mois ⟹ seuil atteint fin septembre**"
        },
        {
          "type": "p",
          "text": "Soit, plus précisément, le seuil est atteint à la fin du 9ᵉ mois, c’est-à-dire fin septembre."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — « Point mort » et « seuil » ne sont pas synonymes",
          "text": "Rigoureusement, le seuil est un montant (750 000 €) tandis que le point mort est la date à laquelle ce montant est atteint (fin septembre). En pratique, les deux sont atteints au même instant ; il faut surtout savoir préciser l’un ou l’autre selon ce que demande l’énoncé."
        },
        {
          "type": "h3",
          "text": "2.4 Interprétation économique et applications"
        },
        {
          "type": "p",
          "text": "Le seuil n’est pas qu’un nombre : c’est une grille de lecture du risque. En deçà du seuil, l’entreprise détruit de la valeur ; au-delà, chaque unité supplémentaire rapporte intégralement sa marge sur coût variable (les charges fixes étant déjà couvertes). Cette asymétrie explique pourquoi le franchissement du seuil est un moment décisif de l’exercice."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Toujours préciser l’unité du seuil",
          "text": "Préciser l’unité du seuil (valeur ou volume) et vérifier la cohérence avec la question posée. Le taux de MCV est l’information clé : connaître CF et taux de MCV suffit à calculer le seuil en valeur instantanément (X = CF / taux). Un seuil bas par rapport au CA prévu = situation confortable ; un seuil proche du CA prévu = situation tendue."
        },
        {
          "type": "h3",
          "text": "2.5 Les enrichissements du modèle de base"
        },
        {
          "type": "p",
          "text": "Le modèle de base suppose une structure stable, un taux de marge constant et une activité régulière. Lever ces hypothèses, une à une, rapproche le calcul de la réalité et constitue le cœur des exercices de niveau DCG."
        },
        {
          "type": "h3",
          "text": "2.5.1 Variation des charges de structure (changement de palier)"
        },
        {
          "type": "p",
          "text": "Les charges fixes ne le sont que pour une structure donnée : elles varient brutalement, par paliers, lorsque l’entreprise investit pour accroître sa capacité."
        },
        {
          "type": "p",
          "text": "Surcoût annuel de structure : 2 000 000 / 10 = 200 000 €. Les charges fixes passent à 500 000 €. Le nouveau seuil :"
        },
        {
          "type": "p",
          "text": "**0,4 X = 500 000 ⟹ X = 1 250 000 € soit 25 000 sodas**"
        },
        {
          "type": "p",
          "text": "*Figure 6 — Le déplacement du seuil lors d’un changement de structure*"
        },
        {
          "type": "h4",
          "text": "*L’opportunité de l’investissement*"
        },
        {
          "type": "p",
          "text": "Avec l’ancienne structure (capacité limitée à 22 000 sodas), le résultat maximal atteignait : 22 000 × 20 − 300 000 = 140 000 € (pour un CA de 1 100 000 €). Le changement n’est opportun que s’il permet d’obtenir au moins ce résultat. Le chiffre d’affaires correspondant vérifie : 0,4 X − 500 000 ≥ 140 000, soit X ≥ 1 600 000 €."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "L’investissement crée une zone d’inconfort : entre 1 100 000 € et 1 250 000 € le raisonnement se renverse (le nouveau seuil est plus haut que l’ancien CA maximal), et tant que le CA ne dépasse pas durablement ≈ 1 600 000 €, la nouvelle structure reste moins favorable que l’ancienne à son optimum.\n**Conclusion :**le changement de structure n’est justifié que si l’entreprise est certaine de dépasser durablement le chiffre d’affaires d’indifférence. C’est ici que le modèle CVP devient un véritable outil d’aide à la décision d’investissement."
        },
        {
          "type": "h3",
          "text": "2.5.2 Variation du taux de marge sur coût variable"
        },
        {
          "type": "p",
          "text": "Le prix de vente ou le coût variable unitaire peuvent changer en cours d’exercice (remises fournisseurs liées au volume, gain de productivité), modifiant le taux de MCV. La difficulté est surtout graphique : la droite de MCV change de pente en cours d’année."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Subtilité graphique du changement de pente",
          "text": "Pour tracer la droite de MCV dans le repère d’origine (départ 1ᵉʳ janvier) après un changement de taux en cours d’année, on ne peut pas utiliser directement y = a′X : cette équation ne vaut qu’à partir de la date de changement. On pose y = a′X + b, droite passant par le point (CA réalisé ; MCV réalisée) à la date de bascule, puis on résout en b pour recaler l’équation."
        },
        {
          "type": "h3",
          "text": "2.5.3 Les variations saisonnières"
        },
        {
          "type": "p",
          "text": "De nombreuses activités sont saisonnières. Le principe reste identique — le seuil est atteint quand le cumul de la marge sur coût variable égale les charges fixes — mais il faut suivre l’activité période par période. Illustrons sur une société dont les charges variables représentent 70 % du CA et les charges fixes annuelles s’élèvent à 800 000 € :"
        },
        {
          "type": "table",
          "headers": [
            "**Trimestre**",
            "**CA**",
            "**CA cumulé**",
            "**MCV (30 %)**",
            "**MCV cumulée**"
          ],
          "rows": [
            [
              "T1",
              "500 000",
              "500 000",
              "150 000",
              "150 000"
            ],
            [
              "T2",
              "1 000 000",
              "1 500 000",
              "300 000",
              "450 000"
            ],
            [
              "T3",
              "2 000 000",
              "3 500 000",
              "600 000",
              "1 050 000"
            ],
            [
              "T4",
              "800 000",
              "4 300 000",
              "240 000",
              "1 290 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Fin T2, la MCV cumulée (450 000 €) ne couvre pas encore les 800 000 € de charges fixes. Le seuil est franchi pendant le T3. Marge restant à couvrir : 800 000 − 450 000 = 350 000 €. Sur les 3 mois du T3 la MCV est de 600 000 € ; pour m mois : m = (350 000 × 3) / 600 000 = 1,75 mois. Le point mort tombe 1 mois et 23 jours après la fin du T2, soit le 23 août."
        },
        {
          "type": "p",
          "text": "*Figure 7 — Seuil en activité saisonnière : cumul de MCV contre charges fixes*"
        },
        {
          "type": "h3",
          "text": "2.5.4 La multiproduction"
        },
        {
          "type": "p",
          "text": "Les entreprises sont rarement mono-productrices. Appliquer le raisonnement mono-produit au niveau global est tentant mais peu pertinent, car une marge moyenne ne reflète pas la diversité des taux de marge des différents produits. Soit deux produits A et B de MCV unitaires 20 € et 60 €, charges fixes 300 000 €, volumes 12 000 A et 8 000 B."
        },
        {
          "type": "h4",
          "text": "*Le raisonnement correct*"
        },
        {
          "type": "p",
          "text": "Il consiste à exprimer le seuil en fonction des quantités : 20 A + 60 B ≥ 300 000. Il existe une infinité de couples (A, B) solutions ; le seuil n’est plus un point mais une droite."
        },
        {
          "type": "h4",
          "text": "*Le raisonnement global, à manier avec prudence*"
        },
        {
          "type": "p",
          "text": "Le taux de MCV moyen vaut 25 %, d’où un seuil global en valeur de 300 000 / 0,25 = 1 200 000 €. La MCV moyenne unitaire = (12 000 × 20 + 8 000 × 60) / 20 000 = 36 €, soit un seuil global en volume ≈ 8 334 produits. En supposant la structure des ventes constante, on répartit : ≈ 5 001 produits A et ≈ 3 334 produits B. Vérification : 5 001 × 20 + 3 334 × 60 ≈ 300 060 € ≈ 300 000 €."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Le mix produit doit être supposé constant",
          "text": "Le seuil global suppose une structure des ventes (mix produit) constante. Si le mix évolue, le taux de marge moyen change et le seuil global devient faux. Toujours mentionner cette hypothèse lorsqu’on présente un seuil global en multiproduction."
        },
        {
          "type": "p",
          "text": "**3**"
        }
      ]
    },
    {
      "id": "partie-3-les-indicateurs-de-risque-d-exploitation",
      "title": "Partie 3 — Les indicateurs de risque d’exploitation",
      "blocks": [
        {
          "type": "p",
          "text": "Le modèle du coût variable ne sert pas qu’à localiser le seuil : il fournit une batterie d’indicateurs de risque d’exploitation. Le risque d’exploitation exprime la probabilité, pour l’entreprise, de ne pas couvrir ses charges de structure et donc de subir une perte. C’est l’apport le plus précieux du modèle pour le pilotage."
        },
        {
          "type": "h3",
          "text": "3.1 La marge de sécurité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La marge de sécurité (MS)",
          "text": "Baisse de chiffre d’affaires que l’entreprise peut supporter avant de tomber en perte. C’est l’écart entre le chiffre d’affaires réalisé et le seuil de profitabilité : MS = CA − Seuil."
        },
        {
          "type": "h3",
          "text": "3.2 L’indice de sécurité"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L’indice de sécurité (IS)",
          "text": "Marge de sécurité exprimée en pourcentage du chiffre d’affaires. Plus parlant que la valeur absolue, il permet la comparaison entre entreprises ou entre exercices : IS = MS / CA = (CA − Seuil) / CA."
        },
        {
          "type": "p",
          "text": "Pour la Brasserie du Mont : IS = 250 000 / 1 000 000 = 25 %. Le chiffre d’affaires peut chuter de 25 % avant la perte."
        },
        {
          "type": "p",
          "text": "*Figure 8 — Marge de sécurité et indice de sécurité (Brasserie du Mont)*"
        },
        {
          "type": "h3",
          "text": "3.3 L’indice de prélèvement"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L’indice de prélèvement (IP)",
          "text": "Pourcentage de chiffre d’affaires nécessaire pour couvrir les charges fixes. Plus il est faible, plus l’entreprise atteint facilement son seuil : IP = (CF / CA) × 100."
        },
        {
          "type": "p",
          "text": "Pour la Brasserie du Mont : IP = 300 000 / 1 000 000 = 30 %. Près d’un tiers du chiffre d’affaires sert à couvrir les charges fixes."
        },
        {
          "type": "h3",
          "text": "3.4 Le levier opérationnel"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le levier opérationnel (LO)",
          "text": "Aussi nommé levier d’exploitation ou coefficient de volatilité, il mesure la sensibilité du résultat aux variations d’activité. C’est l’élasticité du résultat par rapport au chiffre d’affaires : de combien de pour cent varie le résultat quand le CA varie de 1 %."
        },
        {
          "type": "h3",
          "text": "Les formulations du levier"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Élasticité du résultat ≠ élasticité-prix de la demande",
          "text": "Le terme « élasticité » employé ici désigne l’**élasticité du résultat par rapport au chiffre d’affaires** (le levier opérationnel). Il ne faut pas le confondre avec l’**élasticité-prix de la demande**, qui mesure la réaction des quantités vendues à une variation de prix : cette dernière relève de l’analyse du risque d’exploitation et est traitée au chapitre 4 (Analyse du risque). Ce chapitre ne la reprend donc pas, pour éviter tout doublon."
        },
        {
          "type": "p",
          "text": "La définition première est peu commode car elle exige de calculer deux situations : LO = (ΔR / R) / (ΔCA / CA). Si le taux de MCV et les charges fixes sont stables (la variation de CA ne vient que des quantités), une démonstration algébrique permet de simplifier :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**⚙ FORMULES OPÉRATIONNELLES DU LEVIER**"
        },
        {
          "type": "h3",
          "text": "Application chiffrée à la Brasserie du Mont"
        },
        {
          "type": "p",
          "text": "Vérifions par la définition, avec une baisse de 10 % des quantités (de 20 000 à 18 000 sodas) :"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Pour mémoire**",
            "**Q**",
            "**Unitaire**",
            "**Montant**"
          ],
          "rows": [
            [
              "Chiffre d’affaires",
              "1 000 000",
              "18 000",
              "50",
              "900 000"
            ],
            [
              "Charges variables",
              "600 000",
              "18 000",
              "30",
              "540 000"
            ],
            [
              "MCV",
              "400 000",
              "18 000",
              "20",
              "360 000"
            ],
            [
              "Charges de structure",
              "300 000",
              "—",
              "—",
              "300 000"
            ],
            [
              "Résultat",
              "100 000",
              "—",
              "—",
              "60 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "LO = (60 000 − 100 000)/100 000 ÷ (900 000 − 1 000 000)/1 000 000 = (−40 %)/(−10 %) = 4. Le calcul direct est plus rapide : LO = MCV / Résultat = 400 000 / 100 000 = 4."
        },
        {
          "type": "p",
          "text": "*Figure 9 — Le levier opérationnel : un amplificateur du résultat… et du risque*"
        },
        {
          "type": "h3",
          "text": "3.5 Sensibilité du résultat et analyse du risque"
        },
        {
          "type": "p",
          "text": "Le levier opérationnel révèle une vérité essentielle du pilotage : la variabilité du résultat est d’autant plus forte que l’indice de sécurité est faible et que les charges fixes sont élevées. Une entreprise très capitalistique (charges fixes lourdes) dispose d’un levier puissant : ses profits explosent en haute conjoncture mais ses pertes se creusent vite en basse conjoncture. Avec un levier de 4, la Brasserie du Mont est dans cette situation : confortable en croissance, exposée en cas de repli."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — La famille des effets de levier",
          "text": "L’image du « levier » renvoie à la physique : soulever une lourde charge avec une petite force. En gestion, il en existe plusieurs : le levier opérationnel (impact des charges fixes sur le résultat, étudié ici), le levier financier (impact de l’endettement sur la rentabilité des fonds propres, vu en gestion financière) et le levier juridique (contrôle d’un groupe avec peu de capital via des holdings). Règle commune : plus le levier est puissant, plus le risque l’est aussi."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "Le levier opérationnel n’est ni « bon » ni « mauvais » en soi : c’est un profil de risque. Un dirigeant prudent, anticipant une conjoncture incertaine, cherchera à réduire ses charges fixes (sous-traitance, location plutôt qu’achat) pour abaisser son levier. Un dirigeant confiant dans la croissance acceptera un levier élevé pour maximiser les profits. Le contrôleur de gestion éclaire ce choix, il ne le tranche pas à la place du décideur."
        },
        {
          "type": "h3",
          "text": "3.6 Application intermédiaire — transposer à un service"
        },
        {
          "type": "p",
          "text": "Pour vérifier que les indicateurs de risque se transposent hors de l’industrie, considérons un cabinet de conseil. La transposition est immédiate : l’unité d’œuvre devient le jour facturé, le coût variable regroupe les frais directs de mission, et les charges de structure couvrent les loyers et la masse salariale permanente."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ APPLICATION 1 — Seuil de profitabilité et levier dans une activité de services**\nTarif moyen 800 €/jour facturé ; coût variable direct 200 €/jour ; charges de structure annuelles 540 000 € ; 1 200 jours facturés sur l’année.\n**Travail à faire :**calculer la MCV unitaire et le taux de MCV, le seuil de profitabilité (en valeur et en nombre de jours), la marge de sécurité, l’indice de sécurité et le levier opérationnel ; commenter le risque.\n**Corrigé :**\n**MCV unitaire :**800 − 200 = 600 €/jour ; taux de MCV = 600 / 800 = 75 %.\n**Seuil :**540 000 / 0,75 = 720 000 €, soit 720 000 / 800 = 900 jours facturés.\n**Marge de sécurité :**CA = 1 200 × 800 = 960 000 € ; MS = 960 000 − 720 000 = 240 000 € ; IS = 25 %.\n**Levier opérationnel :**MCV = 720 000 € ; R = 720 000 − 540 000 = 180 000 € ; LO = 720 000 / 180 000 = 4 (= 1 / 0,25).\nLecture : le cabinet peut perdre un quart de son activité avant la perte, mais un levier de 4 traduit une exploitation sensible — typique d’une activité de services à forte composante de charges fixes (salaires des consultants permanents)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Seuil de profitabilité d’une entreprise monoproduit",
          "text": "Une entreprise ne commercialise qu’un seul produit. Les charges fixes s’élèvent à 240 000 €, le prix de vente unitaire est de 8 € et le coût variable unitaire de 4 €.\n**Travail à faire : déterminer la marge sur coût variable unitaire et le taux de MCV, puis le seuil de profitabilité en valeur et en volume. Interpréter le résultat.**\n**Corrigé :**\nMCV unitaire = 8 − 4 = 4 € ; taux de MCV = 4 / 8 = 50 %.\nSeuil en valeur = 240 000 / 0,50 = 480 000 €.\nSeuil en volume = 240 000 / 4 = 60 000 produits.\nInterprétation : l’entreprise ne dégage un bénéfice que si elle vend au moins 60 000 produits, soit un chiffre d’affaires d’au moins 480 000 €. En deçà, elle ne couvre pas ses charges de structure."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ APPLICATION 3 — Variation des charges de structure et opportunité d’investissement**\nUne entreprise vend un produit 50 € l’unité, avec un taux de marge sur coût variable de 40 % et des charges de structure de 300 000 €. Sa structure actuelle limite l’activité à 22 000 unités par an. Pour répondre à une hausse de marché, elle envisage d’investir 2 000 000 € (amortis linéairement sur 10 ans, mise en service le 1er janvier), ce qui porterait la capacité à 35 000 unités, le taux de MCV restant inchangé.\n**Travail à faire : calculer le seuil de profitabilité avant et après investissement, puis déterminer à partir de quel chiffre d’affaires le changement de structure devient opportun.**\n**Corrigé :**\nAvant investissement : seuil tel que 0,40 X = 300 000, soit X = 750 000 € (15 000 unités). Résultat maximal de l’ancienne structure : 22 000 × 20 − 300 000 = 140 000 €, pour un chiffre d’affaires de 1 100 000 €.\nAprès investissement : la dotation aux amortissements ajoute 2 000 000 / 10 = 200 000 € de charges fixes, portées à 500 000 €. Nouveau seuil : 0,40 X = 500 000, soit X = 1 250 000 € (25 000 unités).\nOpportunité : le changement de structure n’est intéressant que s’il procure au moins le résultat antérieur (140 000 €). Il faut 0,40 X − 500 000 ≥ 140 000, soit X ≥ 1 600 000 €.\nConclusion : le changement de structure n’est opportun que si l’entreprise réalise un chiffre d’affaires supérieur à 1 600 000 €."
        },
        {
          "type": "p",
          "text": "**4**"
        }
      ]
    },
    {
      "id": "partie-4-le-modele-cvp-comme-outil-d-aide-a-la-decision",
      "title": "Partie 4 — Le modèle CVP comme outil d’aide à la décision",
      "blocks": [
        {
          "type": "p",
          "text": "Au-delà du diagnostic, le modèle CVP est un instrument de simulation : il permet de tester l’effet d’une décision sur le résultat avant de la prendre. C’est précisément ce que la réforme attend du contrôle de gestion — un outil de pilotage et d’aide à la décision, non une mécanique de calcul."
        },
        {
          "type": "h3",
          "text": "4.1 Prévoir un résultat"
        },
        {
          "type": "p",
          "text": "Connaissant la structure de coûts, on déduit immédiatement le résultat attendu pour tout niveau de ventes : . le contrôleur de gestion peut ainsi répondre en quelques secondes à la question « quel résultat si nous vendons 7 000 sodas ? » : R = 0,4 × (7 000 × 50) − 300 000 = 0,4 × 350 000 − 300 000 = −160 000 € (une perte : 7 000 sodas restent en deçà du seuil de 15 000)."
        },
        {
          "type": "h3",
          "text": "4.2 Éclairer un choix d’investissement"
        },
        {
          "type": "p",
          "text": "Tout investissement modifie la structure de charges fixes et déplace le seuil. Le modèle CVP permet de déterminer le chiffre d’affaires d’indifférence à partir duquel la nouvelle structure devient préférable à l’ancienne. C’est un critère de décision robuste et facile à communiquer à la direction."
        },
        {
          "type": "h3",
          "text": "4.3 Arbitrer la structure de coûts"
        },
        {
          "type": "p",
          "text": "Faut-il privilégier les charges fixes ou les charges variables ? Le modèle objective l’arbitrage :"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Structure « charges fixes lourdes »**",
            "**Structure « charges variables lourdes »**"
          ],
          "rows": [
            [
              "Seuil de profitabilité",
              "Élevé",
              "Bas"
            ],
            [
              "Levier opérationnel",
              "Fort (résultat très sensible)",
              "Faible (résultat stable)"
            ],
            [
              "Profit en forte activité",
              "Très élevé",
              "Modéré"
            ],
            [
              "Risque en faible activité",
              "Élevé",
              "Limité"
            ],
            [
              "Profil adapté à…",
              "Marché porteur, demande stable",
              "Marché incertain, demande volatile"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "4.4 Préparer une décision commerciale"
        },
        {
          "type": "p",
          "text": "Le modèle évalue l’effet d’une politique de prix ou de remise. Baisser le prix réduit la MCV unitaire donc relève le seuil : la baisse n’est intéressante que si le volume supplémentaire compense largement la perte de marge. Le raisonnement en MCV évite l’erreur classique consistant à raisonner sur le seul chiffre d’affaires."
        },
        {
          "type": "h3",
          "text": "4.5 Construire des scénarios et des simulations"
        },
        {
          "type": "p",
          "text": "La vraie valeur ajoutée du modèle réside dans la simulation multi-scénarios : optimiste, central, pessimiste. En faisant varier le volume, le prix ou les charges, le contrôleur de gestion bâtit une fourchette de résultats et de seuils qui éclaire le risque de manière concrète."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "CONTRÔLE DE GESTION & NUMÉRIQUE — Le modèle CVP à l’ère numérique",
          "text": "La force du CVP est démultipliée par les outils numériques, dont la maîtrise est désormais une compétence attendue :\n**Tableur (Excel) —**le seuil, la marge de sécurité et le levier se modélisent en quelques cellules. La « valeur cible » trouve instantanément le volume annulant le résultat ; les « tables de données » génèrent des analyses de sensibilité à deux variables (prix × volume).\n**ERP —**les progiciels de gestion intégrés alimentent le modèle en données réelles et actualisées (ventes, coûts), supprimant les ressaisies et fiabilisant le diagnostic.\n**Business Intelligence & Power BI —**le seuil et la marge de sécurité deviennent des indicateurs de tableaux de bord interactifs, suivis en temps réel et déclinables par produit, région ou canal.\n**Analyses prédictives & IA —**les algorithmes affinent les prévisions de volume et détectent les ruptures de linéarité des charges, dépassant les hypothèses simplificatrices du modèle de base.\nLe numérique ne remplace pas le raisonnement CVP : il le rend continu, fin et partagé. Le contrôleur de gestion passe du calcul ponctuel au pilotage permanent."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "PERFORMANCE GLOBALE & DURABILITÉ — CVP et création de valeur durable",
          "text": "La réforme inscrit le contrôle de gestion dans une logique de performance globale intégrant les dimensions économique, sociale et environnementale. Le modèle CVP y contribue :\n**Coûts environnementaux et structure de charges —**le traitement des déchets, le tri ou la mise en conformité accroissent souvent les charges fixes ; le modèle CVP en mesure l’impact sur le seuil et permet d’arbitrer en connaissance de cause.\n**Arbitrage d’investissement « vert » —**un équipement moins émetteur de CO₂ alourdit généralement les charges fixes (amortissement) tout en réduisant les charges variables (énergie, matières) : c’est exactement le type d’arbitrage de structure qu’éclaire le chiffre d’affaires d’indifférence.\n**Éco-conception et marge — réduire les consommations de matière par produit améliore la MCV unitaire, abaisse le seuil et concilie gain économique et gain environnemental — au cœur du positionnement éco-responsable de l’entreprise.**\n**Parties prenantes —**présenter le seuil et la marge de sécurité aux salariés, aux financeurs ou aux adhérents d’une association, c’est rendre lisible la soutenabilité économique du projet collectif.\nLe modèle CVP devient ainsi un support du dialogue sur la création de valeur durable, et non un simple calcul de rentabilité de court terme."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Diversité des contextes (exigence de la réforme)",
          "text": "Le programme insiste sur la variété des terrains d’application. Le CVP ne concerne pas que l’industrie : un service (cabinet de conseil : seuil en jours facturés), une association (couverture des charges fixes par cotisations et subventions), un club sportif (billetterie couvrant les frais de stade) ou un établissement public (équilibre d’un service à tarification à l’activité) relèvent tous de la même logique. Savoir transposer le raisonnement à ces contextes est explicitement attendu."
        },
        {
          "type": "h3",
          "text": "4.6 Limites du modèle et regard critique d’ensemble"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE",
          "text": "Le modèle suppose la linéarité des charges, hypothèse rarement vérifiée sur une large plage d’activité. Il est mono-période et statique : il convient mal aux décisions structurelles de long terme, qui relèvent d’autres outils (valeur actuelle nette, analyse stratégique). La répartition des charges entre fixes et variables comporte une part d’arbitraire (charges semi-variables) qui influence directement les résultats. En multiproduction, le seuil global dépend d’un mix de ventes supposé constant, hypothèse fragile.\nCes réserves n’enlèvent rien à l’utilité du modèle : elles invitent à l’employer pour ce qu’il est — un outil de diagnostic rapide et de simulation, remarquablement pédagogique, à croiser avec d’autres analyses pour fonder une décision."
        }
      ]
    },
    {
      "id": "application-recapitulative",
      "title": "Application récapitulative",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 4 — Étude complète d’un seuil et d’un changement de structure",
          "text": "La société Lumina fabrique et vend une lampe haut de gamme. Pour l’exercice écoulé : prix de vente unitaire 120 €, coût variable unitaire 72 €, charges de structure annuelles 480 000 €, quantités vendues 15 000 unités, activité supposée régulière sur l’année.\n**Travail à faire :**\nPrésenter le compte de résultat différentiel et calculer le taux de MCV.\nDéterminer le seuil de profitabilité en valeur et en volume, ainsi que le point mort.\nCalculer la marge de sécurité, l’indice de sécurité et le levier opérationnel, puis commenter le risque.\nLa direction envisage d’automatiser : les charges fixes passeraient à 720 000 € et le coût variable unitaire à 54 €. Déterminer le nouveau seuil et le chiffre d’affaires d’indifférence. Conclure."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**✓ Corrigé — Question 1 : compte de résultat différentiel**"
        },
        {
          "type": "table",
          "headers": [
            "**Éléments**",
            "**Quantité**",
            "**Unitaire**",
            "**Montant (€)**"
          ],
          "rows": [
            [
              "Chiffre d’affaires",
              "15 000",
              "120",
              "1 800 000"
            ],
            [
              "Charges variables",
              "15 000",
              "72",
              "1 080 000"
            ],
            [
              "Marge sur coût variable",
              "15 000",
              "48",
              "720 000"
            ],
            [
              "Charges de structure",
              "—",
              "—",
              "480 000"
            ],
            [
              "Résultat",
              "—",
              "—",
              "240 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Taux de MCV = 720 000 / 1 800 000 = 48 / 120 = **40 %**."
        },
        {
          "type": "h3",
          "text": "Question 2 — Seuil et point mort"
        },
        {
          "type": "ul",
          "items": [
            "Seuil en valeur : X = 480 000 / 0,40 = **1 200 000 €**.",
            "Seuil en volume : 1 200 000 / 120 = **10 000 unités** (ou 480 000 / 48).",
            "Point mort : (1 200 000 × 12) / 1 800 000 = 8 mois ⟹ **fin août**."
          ]
        },
        {
          "type": "h3",
          "text": "Question 3 — Indicateurs de risque"
        },
        {
          "type": "ul",
          "items": [
            "Marge de sécurité : MS = 1 800 000 − 1 200 000 = **600 000 €**.",
            "Indice de sécurité : IS = 600 000 / 1 800 000 = **33,3 %**.",
            "Levier opérationnel : LO = 720 000 / 240 000 = **3** (vérif. : 1 / 0,333 = 3)."
          ]
        },
        {
          "type": "p",
          "text": "**Commentaire :**avec un point mort atteint fin août et un indice de sécurité de 33 %, Lumina dispose d’un confort appréciable — son chiffre d’affaires peut reculer d’un tiers avant la perte. Le levier de 3 indique néanmoins qu’une baisse de 10 % du CA amputerait le résultat de 30 % : la vigilance reste de mise sur un marché du design sensible à la conjoncture."
        },
        {
          "type": "h3",
          "text": "Question 4 — Projet d’automatisation"
        },
        {
          "type": "p",
          "text": "Nouvelle MCV unitaire : 120 − 54 = 66 € ⟹ taux de MCV = 66 / 120 = **55 %**. Nouveau seuil : X′ = 720 000 / 0,55 ≈ **1 309 091 €** (≈ 10 909 unités)."
        },
        {
          "type": "p",
          "text": "**Chiffre d’affaires d’indifférence**(CA pour lequel les deux structures donnent le même résultat) : 0,40 × CA − 480 000 = 0,55 × CA − 720 000 ⟹ 0,15 × CA = 240 000 ⟹ CA = **1 600 000 €**."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REGARD CRITIQUE — Conclusion",
          "text": "L’automatisation relève le seuil (de 1,20 M€ à ≈ 1,31 M€) et accroît le levier opérationnel (donc le risque), mais elle améliore nettement le résultat dès que le chiffre d’affaires dépasse 1 600 000 €. Lumina réalisant déjà 1 800 000 €, le projet est financièrement opportun au niveau d’activité actuel.\nLa décision finale devra toutefois intégrer la robustesse de la demande (un repli durable sous 1,6 M€ inverserait la conclusion) et, dans une logique de performance globale, l’impact environnemental et social de l’automatisation."
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
            "**Formule**",
            "**Interprétation**",
            "**Utilité**"
          ],
          "rows": [
            [
              "Marge sur coût variable",
              "",
              "Ce qui reste pour couvrir les CF",
              "Pivot de tout le modèle"
            ],
            [
              "Taux de MCV",
              "",
              "Part de marge dans chaque euro de CA",
              "Calcul direct du seuil"
            ],
            [
              "Seuil de profitabilité",
              "",
              "CA pour lequel R = 0",
              "Niveau d’activité minimal"
            ],
            [
              "Point mort",
              "Règle de trois sur le CA",
              "Date d’atteinte du seuil",
              "Suivi temporel du risque"
            ],
            [
              "Marge de sécurité",
              "",
              "Baisse de CA supportable",
              "Mesure du « matelas »"
            ],
            [
              "Indice de sécurité",
              "",
              "Marge de sécurité en %",
              "Comparaisons"
            ],
            [
              "Indice de prélèvement",
              "",
              "Part du CA absorbée par les CF",
              "Facilité d’atteinte du seuil"
            ],
            [
              "Levier opérationnel",
              "",
              "Élasticité du résultat au CA",
              "Mesure du risque d’exploitation"
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
          "text": "**∑ FORMULES À MAÎTRISER**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — PIÈGES CLASSIQUES & CONSEILS",
          "text": "Confondre seuil (un montant) et point mort (une date).\nEmployer « rentabilité » au lieu de « profitabilité » — le programme attend le second terme.\nOublier de préciser l’unité du seuil (valeur ou volume).\nAppliquer le seuil global en multiproduction sans mentionner l’hypothèse de mix constant.\nEn cas de changement de taux de MCV en cours d’année, négliger de recaler l’équation de la droite dans le repère d’origine.\n**Conseil de rédaction :**terminer systématiquement par une phrase d’analyse critique (intérêt et limite de l’approche). C’est l’attendu majeur de la réforme."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
