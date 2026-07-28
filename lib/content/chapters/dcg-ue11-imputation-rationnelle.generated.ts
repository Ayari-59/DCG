// Généré par scripts/convert-docx.mjs depuis CHAPITRE_07__L_IMPUTATION_RATIONNELLE.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-imputation-rationnelle",
  "level": "DCG",
  "ue": "UE11",
  "number": 7,
  "title": "L'imputation rationnelle des charges fixes",
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
          "text": "Le guide pédagogique du DCG rénové précise que « la présentation du tableau des charges indirectes dans la méthode de l'imputation rationnelle n'est pas demandée ».\nL'accent porte donc sur la compréhension du mécanisme, le calcul du coefficient, du coût de sous-activité et du boni de suractivité, et sur leur interprétation — non sur un tableau de répartition complet."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Ce chapitre s'inscrit dans l'axe 2.3 « Mettre en œuvre les méthodes de coûts adaptées aux différentes situations » du référentiel UE11. L'imputation rationnelle des charges de structure y figure explicitement parmi les savoirs associés, aux côtés du coût complet, de l'ABC et des coûts partiels.\n• Distinguer et calculer les différents types de coûts ; identifier les coûts, marges et résultats à calculer.\n• Mettre en œuvre l'imputation rationnelle des charges de structure : coefficient d'activité, coût d'imputation rationnelle, coût de sous-activité, boni de suractivité.\n• Analyser des coûts et des résultats dans un contexte donné, en isolant l'effet du niveau d'activité.\n• Apprécier les intérêts et les limites de la méthode afin de la choisir à bon escient.\n• Rendre compte des résultats et rédiger un écrit structuré pour conseiller le décideur.\n• Le chapitre est organisé selon quatre regards complémentaires portés sur une même méthode, qui structurent ses quatre grandes parties :"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Jusqu'ici, le calcul des coûts complets supposait implicitement un niveau d'activité « normal » : on pouvait alors ne distinguer que les charges directes et indirectes, sans s'occuper du caractère fixe ou variable des charges. Mais dans le cas général, le niveau d'activité a un impact très important sur le coût unitaire, et il devient nécessaire de traiter différemment les charges fixes et les charges variables."
        },
        {
          "type": "p",
          "text": "Le problème vient des **charges fixes** : par définition, elles ne varient pas avec l'activité. Quand la production baisse, ces charges fixes se répartissent sur moins d'unités, et le coût unitaire grimpe *mécaniquement* — sans que le produit soit devenu « moins bon ». Inversement, en suractivité, le coût unitaire baisse artificiellement. L'imputation rationnelle des charges fixes corrige cette distorsion."
        },
        {
          "type": "p",
          "text": "Pour étudier la méthode de façon complète, le chapitre adopte quatre regards : comprendre pourquoi elle existe (Partie 1), savoir la calculer (Partie 2), interpréter ses résultats pour piloter (Partie 3) et la critiquer pour la situer parmi les autres méthodes de coûts (Partie 4)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le diagnostic troublant",
          "text": "Un atelier a été dimensionné pour produire 20 000 meubles par mois (activité normale) ; le meuble est vendu 90 €. Charges variables : 38 €/meuble ; charges fixes : 580 000 €/mois. Quand l’activité tombe à 16 000 meubles, le coût de revient unitaire grimpe et le meuble paraît soudain « trop cher » ; quand elle monte à 24 000, il baisse — sans que rien n’ait changé dans la fabrication. Faut-il pour autant réviser le prix — ou se réjouir ? L’imputation rationnelle répond en isolant le coût de sous-activité et le boni de suractivité."
        }
      ]
    },
    {
      "id": "1-comprendre-pourquoi-l-imputation-rationnelle",
      "title": "1. Comprendre : pourquoi l'imputation rationnelle ?",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 La problématique des charges fixes"
        },
        {
          "type": "p",
          "text": "Les charges variables évoluent proportionnellement à l'activité : leur montant unitaire est stable. Les charges fixes (ou charges de structure), au contraire, sont engagées pour une capacité de production donnée et restent constantes à court terme, quel que soit le volume produit : amortissement des machines, salaires de l'encadrement, loyers. Leur montant unitaire dépend donc entièrement du volume sur lequel on les répartit."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Charges fixes et charges variables",
          "text": "Charges variables : proportionnelles à l'activité ; montant unitaire stable (38 €/produit chez l’entreprise).\nCharges fixes (de structure) : engagées pour une capacité donnée ; montant total stable, montant unitaire décroissant avec le volume."
        },
        {
          "type": "h4",
          "text": "*Explication — l'effet mécanique du volume*"
        },
        {
          "type": "p",
          "text": "*Le coût unitaire complet réel varie en hyperbole avec l'activité*"
        },
        {
          "type": "p",
          "text": "Le coût unitaire réel suit la formule : **CU réel = coût variable unitaire + charges fixes / activité réelle** — une hyperbole décroissante. La partie variable (38 €) est une droite horizontale ; la partie fixe unitaire est l'hyperbole, qui tend vers l'infini quand l'activité s'effondre et vers zéro quand elle explose."
        },
        {
          "type": "h4",
          "text": "*Illustration — l’effet du volume sur le coût unitaire*"
        },
        {
          "type": "p",
          "text": "Reprenons l'atelier Montage à trois niveaux d'activité. Les charges variables suivent le volume (38 €/produit) ; les charges fixes restent à 580 000 €. Seul le coût unitaire complet réel bouge :"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau d’activité**",
            "**16 000 (sous-activité)**",
            "**20 000 (normale)**",
            "**24 000 (suractivité)**"
          ],
          "rows": [
            [
              "Charges variables (38 €/u)",
              "608 000",
              "760 000",
              "912 000"
            ],
            [
              "Charges fixes (constantes)",
              "580 000",
              "580 000",
              "580 000"
            ],
            [
              "Coût complet réel",
              "1 188 000",
              "1 340 000",
              "1 492 000"
            ],
            [
              "**Coût unitaire complet**",
              "**74,25 €**",
              "**67,00 €**",
              "**62,17 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le coût unitaire passe de 74,25 € à 62,17 € sans que rien n'ait changé dans la façon de fabriquer le meuble. La cause unique est le niveau d'activité : à 16 000 unités, les 580 000 € de charges fixes se répartissent sur moins de meubles (36,25 €/u contre 29 €/u à l'activité normale). le contrôleur de gestion a raison sur le principe ; reste à le démontrer."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Pourquoi le coût unitaire trompe le décideur",
          "text": "Le coût unitaire réel mélange deux informations de natures différentes : la performance productive (qui devrait être stable) et le taux de remplissage de l'outil (qui fluctue).\nUn décideur qui lit le seul coût unitaire ne sait pas démêler les deux. Il peut croire à une dérive industrielle là où il n'y a qu'un creux d'activité — et prendre une mauvaise décision (hausse de prix, abandon de produit)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — 1.1",
          "text": "Les charges fixes restent constantes : c'est leur coût unitaire qui varie avec l'activité.\nCU réel = coût variable unitaire + charges fixes / activité réelle (hyperbole).\nSous-activité → coût unitaire majoré ; suractivité → coût unitaire minoré (artificiellement)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — 1.1",
          "text": "Conclure qu'un produit est « devenu trop cher » sans vérifier le niveau d'activité : la hausse peut n'être que conjoncturelle.\nConfondre coût unitaire (qui varie) et charges fixes totales (qui ne varient pas).\nAugmenter le prix de vente pour « compenser » une sous-activité passagère, au risque de l'aggraver."
        },
        {
          "type": "h4",
          "text": "*Analyse critique — la limite du coût complet classique*"
        },
        {
          "type": "p",
          "text": "Le coût complet réel n'est pas « faux » : il dit la vérité comptable (toutes les charges de la période ont bien été engagées). Mais il est trompeur pour la décision, car il agrège deux phénomènes hétérogènes — le coût du produit et le coût de la mauvaise utilisation de l'outil. Le besoin auquel répond l'imputation rationnelle naît précisément de cette confusion : il faut un coût qui parle du produit, et un indicateur séparé qui parle de l'activité. C'est ce double objectif que la Partie 2 met en œuvre."
        },
        {
          "type": "h3",
          "text": "1.2 La logique économique de la méthode"
        },
        {
          "type": "p",
          "text": "Pour isoler l'effet du niveau d'activité, on perfectionne la méthode des coûts complets : au lieu d'incorporer les charges fixes réelles « telles quelles », on ne les incorpore qu'au prorata de l'activité, en les multipliant par un coefficient d'activité. L'idée économique est simple : si l'entreprise n'utilise que 80 % de sa capacité, seules 80 % des charges de structure correspondent à une utilisation « normale » ; le reste est le coût de la capacité inemployée."
        },
        {
          "type": "p",
          "text": "La méthode procède d'une intuition forte : **les charges fixes ne sont « justifiées » que par la capacité réellement employée**. Plutôt que de noyer le gaspillage de capacité dans le coût des produits — où il devient invisible — l'imputation rationnelle l'extrait et le nomme."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — Repères — d'où vient la méthode ?",
          "text": "L'imputation rationnelle s'est développée dans l'industrie de la première moitié du XXᵉ siècle, quand la mécanisation a fait des charges fixes un poste majeur, très sensible aux à-coups d'activité.\nElle reste une référence dès qu'une activité est capitalistique (forte structure fixe) et cyclique ou saisonnière — exactement le profil de l’entreprise, dont les ventes varient selon les saisons et les calendriers de compétitions."
        },
        {
          "type": "p",
          "text": "*La logique du coût d'imputation rationnelle : « variabiliser » les charges fixes*"
        },
        {
          "type": "h3",
          "text": "1.3 La notion d'activité normale"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L'activité normale",
          "text": "L'activité normale est le niveau d'activité pour lequel l'outil de production a été conçu et dimensionné.\nCe n'est ni la capacité maximale (qui laisse une marge pour l'entretien, la maintenance, les aléas), ni l'activité réelle du moment : c'est un niveau de référence, voulu et stable."
        },
        {
          "type": "p",
          "text": "La détermination de l'activité normale est une décision de gestion. À la Menuiserie Dubois (mobilier sur mesure), l'activité normale de l'atelier Montage est fixée à 20 000 meubles par mois. Trois approches sont possibles :"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode de détermination**",
            "**Principe**",
            "**Avantage / risque**"
          ],
          "rows": [
            [
              "Capacité théorique minorée",
              "Capacité maximale − temps d'entretien et aléas",
              "Objective, mais peut surévaluer la normale"
            ],
            [
              "Moyenne historique",
              "Moyenne des activités passées",
              "Réaliste, mais reproduit les sous-activités passées"
            ],
            [
              "Prévision budgétaire",
              "Niveau d'activité prévu au budget",
              "Cohérente avec le pilotage, mais sensible aux biais de prévision"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un paramètre sensible",
          "text": "Tout le calcul dépend de l'activité normale retenue (voir 4.1). Une activité normale fixée trop haut gonfle artificiellement le coût de sous-activité ; fixée trop bas, elle le masque."
        },
        {
          "type": "h3",
          "text": "1.4 Le coefficient d'imputation rationnelle"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Le coefficient d'imputation rationnelle (coefficient d'activité)**"
        },
        {
          "type": "p",
          "text": "Le coefficient résume la situation de l'entreprise par rapport à sa référence :"
        },
        {
          "type": "ul",
          "items": [
            "**Coefficient = 1 :**activité normale ; on retombe exactement sur le coût complet classique.",
            "**Coefficient < 1 :**sous-activité ; on n'incorpore qu'une fraction des charges fixes.",
            "**Coefficient > 1 :**suractivité ; on incorpore plus de charges fixes qu'il n'y en a réellement."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Un coefficient par centre d'analyse",
          "text": "En pratique, la méthode s'applique au niveau de chaque centre, car les coefficients peuvent différer : un atelier peut être à 20 % de sous-activité, un autre en suractivité.\nLe coefficient s'applique aux seules charges fixes de chaque centre. (Le détail du tableau de répartition n'est pas exigé au programme.)"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — 1.4",
          "text": "Inverser le rapport : le coefficient est activité RÉELLE / activité NORMALE, pas l'inverse.\nConfondre activité normale et capacité maximale : la normale est inférieure à la capacité.\nAppliquer un coefficient unique à toute l'entreprise alors que les centres ont des taux d'activité différents."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 1",
          "text": "On n'incorpore les charges fixes qu'au prorata de l'activité.\nActivité normale = niveau de référence pour lequel l'outil a été conçu.\nCoefficient d'activité = activité réelle / activité normale (< 1 sous-activité ; = 1 normale ; > 1 suractivité)."
        }
      ]
    },
    {
      "id": "2-calculer-le-mecanisme-de-la-methode",
      "title": "2. Calculer : le mécanisme de la méthode",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Le coût d'imputation rationnelle"
        },
        {
          "type": "p",
          "text": "Une fois le coefficient déterminé, le coût d'imputation rationnelle s'obtient en additionnant la totalité des charges variables (proportionnelles à l'activité réelle) et seulement la fraction des charges fixes correspondant au coefficient d'activité."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le coût d'imputation rationnelle",
          "text": "avec"
        },
        {
          "type": "p",
          "text": "L'effet recherché est de **« variabiliser » les charges fixes** : le coût unitaire complet d'imputation rationnelle devient indépendant du niveau réel d'activité, et reste toujours égal au coût unitaire calculé dans les conditions normales."
        },
        {
          "type": "h4",
          "text": "*Illustration — le coût IR à trois niveaux d’activité*"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le coût IR à trois niveaux d’activité",
          "text": "Atelier dimensionné pour 20 000 meubles/mois (activité normale). Charges variables 38 €/meuble ; charges fixes 580 000 €. Pour chaque niveau d’activité, on n’incorpore les charges fixes qu’au prorata du coefficient d’activité."
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**16 000 (coef 0,80)**",
            "**20 000 (coef 1)**",
            "**24 000 (coef 1,20)**"
          ],
          "rows": [
            [
              "Charges variables (38 €/u)",
              "608 000",
              "760 000",
              "912 000"
            ],
            [
              "CF imputées (580 000 × coef)",
              "464 000",
              "580 000",
              "696 000"
            ],
            [
              "Coût IR total",
              "1 072 000",
              "1 340 000",
              "1 608 000"
            ],
            [
              "**Coût IR unitaire**",
              "**67 €**",
              "**67 €**",
              "**67 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Le résultat est remarquable : quel que soit le niveau d'activité, le coût unitaire d'imputation rationnelle reste de 67 € le meuble — exactement le coût standard des conditions normales. Si, en revanche, les conditions d'exploitation se détérioraient réellement (gaspillage de matières, baisse des rendements), le coût IR augmenterait — et le phénomène apparaîtrait clairement, sans être masqué par l'effet d'activité.**"
        },
        {
          "type": "p",
          "text": "le contrôleur de gestion peut désormais répondre au directeur commercial : le meuble ne coûte pas 74,25 € à fabriquer ; il coûte 67 €, comme d'habitude. Les 7,25 € d'écart ne sont pas un surcoût de production, mais le coût de la capacité inemployée — c'est l'objet de la section 2.3."
        },
        {
          "type": "h4",
          "text": "*La méthode pas à pas (sous-activité, 16 000 meubles)*"
        },
        {
          "type": "table",
          "headers": [
            "**Étape**",
            "**Opération**",
            "**Résultat**"
          ],
          "rows": [
            [
              "1. Coefficient d’activité",
              "16 000 / 20 000",
              "0,80"
            ],
            [
              "2. Charges variables",
              "38 × 16 000",
              "608 000 €"
            ],
            [
              "3. CF imputées",
              "580 000 × 0,80",
              "464 000 €"
            ],
            [
              "4. Coût IR total",
              "608 000 + 464 000",
              "1 072 000 €"
            ],
            [
              "5. Coût IR unitaire",
              "1 072 000 / 16 000",
              "67 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Cette procédure en cinq étapes est exactement celle attendue à l'examen : déterminer le coefficient, incorporer toutes les charges variables, n'incorporer les charges fixes qu'au prorata, sommer, puis diviser par l'activité réelle. Elle se transpose à n'importe quel énoncé."
        },
        {
          "type": "h4",
          "text": "*La stabilisation du coût sur un semestre*"
        },
        {
          "type": "p",
          "text": "Sur un semestre d'activité fluctuante, le contraste est frappant : le coût unitaire réel oscille de 74,25 € à 62,17 € au gré des volumes, tandis que le coût IR reste rivé à 67 €. La DIR, elle, bascule du coût de sous-activité (hiver) au boni de suractivité (printemps) :"
        },
        {
          "type": "table",
          "headers": [
            "**Mois**",
            "**Activité**",
            "**Coef.**",
            "**Coût unit. réel**",
            "**Coût unit. IR**",
            "**DIR**"
          ],
          "rows": [
            [
              "Janvier",
              "16 000",
              "0,80",
              "74,25 €",
              "67 €",
              "+116 000"
            ],
            [
              "Février",
              "17 000",
              "0,85",
              "72,12 €",
              "67 €",
              "+87 000"
            ],
            [
              "Mars",
              "19 000",
              "0,95",
              "68,53 €",
              "67 €",
              "+29 000"
            ],
            [
              "Avril",
              "21 000",
              "1,05",
              "65,62 €",
              "67 €",
              "−29 000"
            ],
            [
              "Mai",
              "23 000",
              "1,15",
              "63,22 €",
              "67 €",
              "−87 000"
            ],
            [
              "Juin",
              "24 000",
              "1,20",
              "62,17 €",
              "67 €",
              "−116 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La colonne « coût unitaire IR » est plate : c'est tout l'intérêt de la méthode. Les variations du coût réel ont été entièrement transférées dans la colonne DIR, où elles sont nommées et interprétables (coût de sous-activité l'hiver, boni au printemps), au lieu de polluer le coût du produit."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — 2.1",
          "text": "Appliquer le coefficient aux charges variables : il ne porte QUE sur les charges fixes.\nOublier d'incorporer la totalité des charges variables (elles suivent l'activité réelle, sans coefficient).\nRecalculer un coût unitaire IR différent du coût normal : par construction, il doit être stable."
        },
        {
          "type": "h3",
          "text": "2.2 Le cas de plusieurs centres aux activités différentes"
        },
        {
          "type": "p",
          "text": "Le référentiel rappelle que le coefficient s'applique centre par centre, car les ateliers n'ont pas le même taux d'activité. Reprenons la Menuiserie Dubois avec ses deux ateliers de production en mars : l'atelier Montage tourne à 90 % de sa normale, l'atelier Finition à 80 %. Chaque centre reçoit son propre coefficient ; on ne mélange jamais les charges fixes de deux centres sous un coefficient unique."
        },
        {
          "type": "table",
          "headers": [
            "**Centre**",
            "**Activité normale**",
            "**Activité réelle**",
            "**Coefficient**",
            "**CF du centre**",
            "**CF imputées**",
            "**Coût sous-activité**"
          ],
          "rows": [
            [
              "Montage",
              "20 000",
              "18 000",
              "0,90",
              "580 000",
              "522 000",
              "58 000"
            ],
            [
              "Finition",
              "25 000",
              "20 000",
              "0,80",
              "300 000",
              "240 000",
              "60 000"
            ],
            [
              "**Total**",
              "—",
              "—",
              "—",
              "**880 000**",
              "**762 000**",
              "**118 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le coût de sous-activité total (118 000 €) est la somme des coûts de chaque centre — jamais le produit d'un coefficient global moyen par les charges fixes totales. **Calculer un coefficient unique (38 000/45 000 ≈ 0,844) appliqué aux 880 000 € donnerait un résultat faux** (environ 137 000 € au lieu de 118 000 €), car il ignore que les charges fixes ne sont pas réparties dans la même proportion que les écarts d'activité."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Pourquoi le coefficient global est faux — la vérification",
          "text": "Montage : 580 000 × (1 − 0,90) = 58 000 €. Finition : 300 000 × (1 − 0,80) = 60 000 €. Somme = 118 000 €.\nLe coefficient global (38 000 unités réelles / 45 000 unités normales ≈ 0,844) appliqué aux 880 000 € donnerait 880 000 × 0,156 ≈ 137 000 €, car il « moyenne » à tort des centres de tailles et de sous-activités différentes. Seul le calcul centre par centre est exact."
        },
        {
          "type": "h3",
          "text": "2.3 La différence d'imputation : sous-activité et suractivité"
        },
        {
          "type": "p",
          "text": "Si le coût IR est stable, où passe la différence avec le coût réel ? Elle se concentre dans un poste spécifique, la différence d'imputation rationnelle, qui mesure précisément l'effet du niveau d'activité."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — La différence d'imputation rationnelle (DIR)",
          "text": "La DIR est l'écart entre les charges fixes réelles et les charges fixes imputées rationnellement :\n."
        },
        {
          "type": "p",
          "text": "*Sous-activité et suractivité : deux situations anormales à évaluer*"
        },
        {
          "type": "h3",
          "text": "Le coût de sous-activité"
        },
        {
          "type": "p",
          "text": "En sous-activité, le coefficient est inférieur à 1, donc la DIR est positive : elle mesure le **coût de la sous-activité** (le coût de la capacité de production inemployée)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le coût de sous-activité",
          "text": "À 16 000 meubles, coefficient = 0,80. DIR = 580 000 × (1 − 0,80) = 116 000 €. Ces 116 000 € sont le coût de la capacité inemployée ; rapportés aux 16 000 meubles, soit 7,25 €/meuble — l’écart exact entre le coût réel (74,25 €) et le coût IR (67 €)."
        },
        {
          "type": "h3",
          "text": "Le boni de suractivité"
        },
        {
          "type": "p",
          "text": "En suractivité, le coefficient est supérieur à 1, donc la DIR est négative : c'est un **boni de suractivité** (un gain). L'entreprise a « sur-utilisé » son outil."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Le boni de suractivité",
          "text": "À 24 000 meubles, coefficient = 1,20. DIR = 580 000 × (1 − 1,20) = − 116 000 € (boni). Ce gain non récurrent provient de la sur-utilisation de l’outil, au prix d’une usure accélérée et de risques accrus."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Mali / boni : une question de vocabulaire",
          "text": "On dit « mali » de sous-activité et « boni » de suractivité (du latin), jamais « malus » / « bonus ».\nLe coût de sous-activité est un COÛT (il s'ajoute aux charges) ; le boni est un produit qui vient en déduction."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — 2.3",
          "text": "Oublier le signe : DIR positive en sous-activité (coût), négative en suractivité (boni).\nConfondre le coût de sous-activité (un coût) et le résultat (une marge).\nDire « malus » / « bonus » au lieu de « mali » / « boni » (ou surcoût / gain)."
        },
        {
          "type": "h3",
          "text": "2.4 La décomposition du résultat"
        },
        {
          "type": "p",
          "text": "L'intérêt majeur de la méthode est de scinder le résultat réel en deux composantes lisibles : un résultat « rationnel » (la performance hors effet d'activité) et la différence d'imputation (l'effet du niveau d'activité)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**La relation fondamentale**"
        },
        {
          "type": "p",
          "text": "*Décomposition du résultat réel de janvier (16 000 meubles)*"
        },
        {
          "type": "p",
          "text": "Pour janvier : le résultat rationnel est de (90 − 67) × 16 000 = 23 × 16 000 = **368 000 €**. On en retranche le coût de sous-activité de 116 000 €, ce qui redonne bien le résultat réel de **252 000 €**. Le message au décideur est clair : l'activité ordinaire est saine (368 000 €), et la perte de performance (116 000 €) tient entièrement à la sous-activité."
        },
        {
          "type": "p",
          "text": "La même lecture vaut en suractivité, signe inversé. À 24 000 meubles, le résultat rationnel est de 23 × 24 000 = 552 000 € ; on ajoute le boni de 116 000 €, d'où un résultat réel de 668 000 €, dont 116 000 € de gain exceptionnel à ne pas considérer comme acquis."
        },
        {
          "type": "table",
          "headers": [
            "**Décomposition du résultat**",
            "**Sous-activité (16 000 meubles)**",
            "**Suractivité (24 000 meubles)**"
          ],
          "rows": [
            [
              "Résultat rationnel (PV − coût IR) × Q",
              "16 000",
              "24 000"
            ],
            [
              "Différence d’imputation",
              "− 20 000 (coût)",
              "+ 20 000 (boni)"
            ],
            [
              "**Résultat réel**",
              "**− 4 000**",
              "**+ 44 000**"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Valorisation des stocks : un point de prudence",
          "text": "Les stocks sont valorisés au coût IR (et non au coût réel) : on n'incorpore pas le coût de sous-activité dans la valeur des stocks, conformément au principe de prudence ; on ne gonfle pas davantage les stocks d'un boni non réalisé."
        },
        {
          "type": "h4",
          "text": "*Le rapprochement coût réel / coût IR / DIR*"
        },
        {
          "type": "p",
          "text": "On vérifie l'articulation des trois grandeurs : le coût complet réel se reconstitue toujours comme la somme du coût d'imputation rationnelle et de la différence d'imputation. C'est le contrôle de cohérence à mener systématiquement."
        },
        {
          "type": "table",
          "headers": [
            "**Sous-activité — 16 000 meubles**",
            "**Montant**",
            "**Commentaire**"
          ],
          "rows": [
            [
              "Coût d’imputation rationnelle",
              "240 000 €",
              "CV + CF × 0,80"
            ],
            [
              "+ Différence d’imputation",
              "20 000 €",
              "CF × 0,20"
            ],
            [
              "**= Coût complet réel**",
              "**260 000 €**",
              "**CV + CF en entier**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le rapprochement boucle : 1 072 000 + 116 000 = 1 188 000 €, soit bien le coût complet réel (608 000 de charges variables + 580 000 de charges fixes). **Coût réel = Coût IR + DIR** est l'identité de contrôle à retenir."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 2",
          "text": "Coût IR = charges variables + charges fixes × coefficient (coût unitaire stable = coût normal).\nDIR = charges fixes × (1 − coefficient) ; coef < 1 → coût de sous-activité ; coef > 1 → boni.\nRésultat réel = résultat rationnel − coût de sous-activité (+ boni).\nUn coefficient par centre : les coûts de sous-activité s'additionnent."
        }
      ]
    },
    {
      "id": "3-interpreter-exploiter-les-resultats-pour-piloter",
      "title": "3. Interpréter : exploiter les résultats pour piloter",
      "blocks": [
        {
          "type": "h3",
          "text": "3.1 Isoler la performance réelle"
        },
        {
          "type": "p",
          "text": "En neutralisant l'effet du niveau d'activité, le coût IR rend les coûts comparables dans le temps (d'un mois sur l'autre) et entre entités (deux ateliers, deux usines). On compare alors des performances « à activité normale », sans être trompé par les fluctuations conjoncturelles de volume. Une hausse du coût IR, elle, signale une vraie dérive d'exploitation (rendements, consommations) qu'il faut corriger."
        },
        {
          "type": "h3",
          "text": "Lecture en termes de profitabilité"
        },
        {
          "type": "p",
          "text": "La **profitabilité** rapporte le résultat au chiffre d'affaires (résultat / CA) : c'est un taux de marge sur les ventes. Calculée sur le résultat réel, elle subit de plein fouet l'effet d'activité ; calculée sur le résultat rationnel, elle révèle la profitabilité « de fond » du produit, hors conjoncture."
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur (le meuble)**",
            "**16 000**",
            "**20 000 (normale)**",
            "**24 000**"
          ],
          "rows": [
            [
              "Chiffre d’affaires (90 €/u)",
              "1 440 000",
              "1 800 000",
              "2 160 000"
            ],
            [
              "Résultat réel",
              "+ 252 000",
              "+ 460 000",
              "+ 668 000"
            ],
            [
              "Profitabilité réelle",
              "17,5 %",
              "25,6 %",
              "30,9 %"
            ],
            [
              "Résultat rationnel",
              "368 000",
              "460 000",
              "552 000"
            ],
            [
              "**Profitabilité rationnelle**",
              "**25,6 %**",
              "**25,6 %**",
              "**25,6 %**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La profitabilité réelle varie de 17,5 % à 30,9 % au gré du remplissage de l'atelier, alors que la profitabilité rationnelle reste stable à 25,6 % : c'est elle qui mesure la vraie capacité du meuble à dégager de la marge. Le pilotage doit suivre la profitabilité rationnelle pour juger le meuble, et la profitabilité réelle pour mesurer l'effort de remplissage encore à fournir."
        },
        {
          "type": "h3",
          "text": "3.2 Aider la décision"
        },
        {
          "type": "p",
          "text": "L'analyse évite les erreurs de décision : ne pas abandonner un meuble rentable qui traverse une passe de sous-activité (cas d'un meuble en janvier), ne pas se réjouir à tort d'un résultat dopé par une suractivité non durable. Le contrôle de gestion fournit ainsi un diagnostic juste, sur lequel le contrôleur de gestion peut fonder son écrit de conseil au décideur."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Du chiffre à la décision — l’entreprise",
          "text": "Si la sous-activité de janvier reste isolée (saisonnalité), la bonne réponse est commerciale : promotions hors saison, marchés à l'export, sous-traitance entrante pour remplir l'atelier.\nSi elle se répète mois après mois (116 000 €/mois durables), elle signale une surcapacité structurelle : il faut redimensionner l'outil plutôt que de payer indéfiniment une capacité inutilisée."
        },
        {
          "type": "h3",
          "text": "3.3 Piloter les capacités de production"
        },
        {
          "type": "p",
          "text": "Le coût de sous-activité chiffre le coût de la capacité inemployée : il invite à mieux remplir l'outil (action commerciale, sous-traitance entrante) ou, s'il est durable, à redimensionner les capacités. Le boni de suractivité durable, lui, est un signal d'investissement : il faut augmenter la capacité avant de « tirer sur la corde »."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — L'analogie de l'ouvrier",
          "text": "C'est le même problème qu'un salarié qui gagne très bien sa vie en cumulant heures supplémentaires et second emploi de nuit : à court terme il gagne plus, mais au prix de sa santé. La sous-activité n'est pas souhaitable ; la suractivité durable non plus."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Arbre de décision — que faire face à une DIR ?",
          "text": "DIR positive (sous-activité) et ponctuelle → action commerciale pour remplir l'outil (promotions, export, sous-traitance entrante).\nDIR positive et durable → redimensionner : céder une ligne, mutualiser, réaffecter ; ne pas augmenter les prix pour « compenser ».\nDIR négative (suractivité) et ponctuelle → l'isoler dans le reporting ; ne pas l'intégrer aux prévisions ordinaires.\nDIR négative et durable → investir dans la capacité avant que l'usure et les risques ne se matérialisent."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 3",
          "text": "Le coût IR isole la performance réelle de l'effet d'activité et rend les coûts comparables.\nLe coût de sous-activité et le boni durable sont des signaux pour piloter les capacités.\nNe pas abandonner un produit sain en sous-activité ; ne pas surestimer une performance dopée par la suractivité."
        }
      ]
    },
    {
      "id": "4-critiquer-limites-conditions-et-place-de-la-methode",
      "title": "4. Critiquer : limites, conditions et place de la méthode",
      "blocks": [
        {
          "type": "p",
          "text": "Méthode économiquement pertinente, l'imputation rationnelle n'en présente pas moins des limites, essentiellement liées à ses hypothèses ; il faut aussi savoir quand l'employer et comment elle se situe parmi les autres méthodes."
        },
        {
          "type": "h3",
          "text": "4.1 Les limites et la sensibilité aux hypothèses"
        },
        {
          "type": "h3",
          "text": "La difficulté de déterminer l'activité normale"
        },
        {
          "type": "p",
          "text": "Tout le calcul repose sur l'activité normale, qui est une convention : capacité théorique minorée ? moyenne historique ? prévision budgétaire ? Selon le choix, le coefficient — et donc le coût de sous-activité — change."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Sensibilité au choix de l'activité normale",
          "text": "Si l’entreprise retenait 18 000 produits comme activité normale, le coefficient de janvier serait ≈ 0,89, et le coût de sous-activité tomberait à 580 000 × 0,11 ≈ 64 000 € — au lieu de 116 000 €.\nLe diagnostic dépend donc du référentiel : d'où l'importance d'une activité normale crédible et stable, justifiée par les données techniques de l'atelier."
        },
        {
          "type": "h3",
          "text": "La sensibilité aux autres hypothèses"
        },
        {
          "type": "p",
          "text": "La méthode suppose une distinction nette entre charges fixes et variables — distinction parfois délicate (charges semi-variables). Elle suppose aussi que les charges fixes sont réellement « fixes » sur la plage d'activité considérée, ce qui n'est vrai que par paliers (au-delà d'un certain seuil, il faut une nouvelle machine, un nouveau responsable)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — 4.1",
          "text": "Présenter le coût de sous-activité comme une donnée objective : il dépend entièrement de l'activité normale retenue.\nSupposer les charges fixes constantes sur toute plage d'activité : elles le sont par paliers seulement."
        },
        {
          "type": "h3",
          "text": "4.2 Les conditions de pertinence"
        },
        {
          "type": "p",
          "text": "L'imputation rationnelle est pertinente quand les charges fixes sont importantes et l'activité fluctuante (industrie capitalistique, activités saisonnières comme le sport), et quand on dispose d'une référence d'activité normale crédible. Elle apporte peu quand les charges fixes sont faibles ou l'activité stable. Elle ne résout pas les autres difficultés du coût complet (arbitraire de la répartition des indirects, traité par l'ABC ; décisions de court terme, traitées par les coûts partiels) : elle se combine avec elles plutôt qu'elle ne les remplace."
        },
        {
          "type": "h3",
          "text": "4.3 La place parmi les méthodes de coûts"
        },
        {
          "type": "p",
          "text": "L'imputation rationnelle se situe dans la famille des méthodes de coûts au programme. Elle ne s'oppose pas aux autres : elle répond à une question précise — neutraliser l'effet du niveau d'activité."
        },
        {
          "type": "p",
          "text": "*L'imputation rationnelle parmi les méthodes de coûts*"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Traitement des charges fixes**",
            "**Question à laquelle elle répond**"
          ],
          "rows": [
            [
              "Coût complet",
              "Toutes les CF incorporées telles quelles",
              "Quel est le coût de revient complet ?"
            ],
            [
              "Imputation rationnelle",
              "CF incorporées au prorata de l'activité",
              "Quel est le coût hors effet d'activité ?"
            ],
            [
              "Coûts partiels",
              "Seules certaines charges retenues",
              "Quelle décision de court terme prendre ?"
            ],
            [
              "Méthode ABC",
              "CF rattachées à des activités via des inducteurs",
              "D'où viennent vraiment les charges indirectes ?"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "*Imputation rationnelle et coût complet*"
        },
        {
          "type": "p",
          "text": "L'imputation rationnelle est un perfectionnement du coût complet : elle en conserve toute la logique, mais corrige son principal défaut conjoncturel — la sensibilité du coût unitaire au niveau d'activité. En activité normale, les deux méthodes coïncident exactement."
        },
        {
          "type": "h4",
          "text": "*Imputation rationnelle, coûts partiels et ABC*"
        },
        {
          "type": "p",
          "text": "Comme les coûts partiels, l'imputation rationnelle distingue charges fixes et variables, mais elle poursuit un but différent : elle conserve toutes les charges et reste un coût complet. L'ABC, lui, s'attaque à la pertinence de la répartition des indirects : les deux perfectionnements sont indépendants et, en théorie, combinables."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — Point examen — Partie 4",
          "text": "Point faible : la détermination conventionnelle de l'activité normale ; fixité des CF valable par paliers seulement.\nPertinente si CF importantes et activité fluctuante, avec une référence crédible.\nPerfectionnement du coût complet (effet d'activité) ; complémentaire des coûts partiels (décision) et de l'ABC (indirects)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Méthodologie — rédiger l'écrit argumenté attendu à l'examen",
          "text": "Le programme rénové valorise l'écrit structuré. Sur un sujet d'imputation rationnelle, une réponse complète enchaîne : (1) le constat chiffré (coût réel vs coût IR) ; (2) le diagnostic (coût de sous-activité ou boni, et son ampleur) ; (3) l'interprétation (le produit est-il sain ? l'outil est-il bien dimensionné ?) ; (4) la recommandation (commerciale, organisationnelle ou d'investissement).\nLe correcteur attend que le candidat distingue clairement ce qui relève du produit (coût IR, profitabilité rationnelle) et ce qui relève de l'utilisation de l'outil (DIR), puis qu'il en tire une décision argumentée — non un simple empilement de calculs."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Contrôle de gestion et numérique**"
        },
        {
          "type": "p",
          "text": "Historiquement difficile à tenir (il faut connaître le taux d'activité réel de chaque centre), l'imputation rationnelle bénéficie pleinement des outils numériques, qui mesurent l'activité en continu."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "Les outils numériques au service de la méthode",
          "text": "ERP / MES : les systèmes de production (Manufacturing Execution System) mesurent le taux d'activité réel de chaque atelier en temps réel, alimentant automatiquement les coefficients.\nBusiness Intelligence (Power BI) : le coût de sous-activité est suivi dans des tableaux de bord, par centre et par période.\nData Analytics : l'analyse de l'historique fiabilise la détermination de l'activité normale — le paramètre le plus sensible de la méthode.\nPilotage des capacités : des alertes signalent les situations durables de sur- ou sous-capacité, pour déclencher à temps les décisions d'investissement."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "REMARQUE — Le numérique rend la méthode opérationnelle",
          "text": "Le suivi en temps réel de l'activité transforme l'imputation rationnelle, longtemps réservée à des calculs périodiques, en un véritable outil de pilotage opérationnel continu."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Performance globale et durabilité**"
        },
        {
          "type": "p",
          "text": "Le référentiel rénové demande de relier le calcul des coûts aux enjeux de durabilité. L'imputation rationnelle y contribue en éclairant l'utilisation des capacités de production — une question au cœur de la sobriété."
        },
        {
          "type": "p",
          "text": "Le coût de sous-activité chiffre le gaspillage de ressources que représente une capacité surdimensionnée : locaux chauffés, machines amorties, équipes mobilisées pour un volume insuffisant. Le réduire, c'est utiliser plus sobrement des ressources déjà engagées — un objectif à la fois économique et environnemental."
        },
        {
          "type": "table",
          "headers": [
            "**Décision**",
            "**Effet sur les coûts**",
            "**Effet en matière de durabilité**"
          ],
          "rows": [
            [
              "Mieux remplir l'outil existant",
              "Coût de sous-activité ↓",
              "Moins de ressources gaspillées (énergie, espace)"
            ],
            [
              "Mutualiser les capacités (partage)",
              "Charges fixes partagées",
              "Sobriété, économie circulaire"
            ],
            [
              "Redimensionner plutôt que surinvestir",
              "Charges fixes ajustées",
              "Évite la surcapacité et son empreinte"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Imputation rationnelle et performance globale",
          "text": "En rendant visible le coût de la capacité inemployée, l'imputation rationnelle fournit un argument chiffré pour des décisions sobres : éviter de surdimensionner l'outil, mutualiser plutôt que dupliquer, remplir avant d'agrandir.\nChez l’entreprise, éco-responsable, mieux utiliser l'atelier existant vaut mieux qu'investir dans une capacité supplémentaire à l'empreinte carbone élevée. Le pilotage des capacités rejoint la logique de performance globale du nouveau programme."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**■ Applications corrigées**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 1 — L'imputation rationnelle dans un atelier (sous-activité)",
          "text": "L'atelier Finition (peinture et contrôle qualité des produits) a été conçu pour une activité normale de 25 000 produits par mois. Ses charges variables s'élèvent à 12 €/produit ; ses charges fixes mensuelles à 300 000 €.\nEn mars, l'atelier n'a traité que 20 000 produits. Le produit finie est cédée en interne 30 € à l'atelier d'expédition.\nTravail à faire : (1) coefficient d'activité ; (2) coût IR unitaire ; (3) coût de sous-activité ; (4) décomposition du résultat ; (5) recommandation."
        },
        {
          "type": "p",
          "text": "**Corrigé — atelier Finition (sous-activité) :**"
        },
        {
          "type": "h3",
          "text": "1. Coefficient d'activité"
        },
        {
          "type": "p",
          "text": "Coefficient = (sous-activité de 20 %)."
        },
        {
          "type": "h3",
          "text": "2. Coût d'imputation rationnelle unitaire"
        },
        {
          "type": "p",
          "text": "Coût IR total = (12 × 20 000) + (300 000 × 0,80) = 240 000 + 240 000 = 480 000 €. Coût IR unitaire = €/produit."
        },
        {
          "type": "p",
          "text": "Vérification : à l'activité normale, coût unitaire = €. Le coût IR est bien stable, égal au coût normal."
        },
        {
          "type": "h3",
          "text": "3. Coût de sous-activité"
        },
        {
          "type": "p",
          "text": "DIR = 300 000 × (1 − 0,80) = 300 000 × 0,20 = +60 000 €. C'est le coût de la capacité inemployée de mars."
        },
        {
          "type": "h3",
          "text": "4. Décomposition du résultat de l'atelier"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Calcul**",
            "**Montant**"
          ],
          "rows": [
            [
              "Cessions internes",
              "30 € × 20 000",
              "600 000 €"
            ],
            [
              "Coût IR de la production",
              "—",
              "− 480 000 €"
            ],
            [
              "**Résultat rationnel**",
              "(30 − 24) × 20 000",
              "**120 000 €**"
            ],
            [
              "Coût de sous-activité",
              "300 000 × 0,20",
              "− 60 000 €"
            ],
            [
              "**Résultat réel de l'atelier**",
              "600 000 − (240 000 + 300 000)",
              "**60 000 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Contrôle : résultat réel = résultat rationnel − coût de sous-activité = 120 000 − 60 000 = **60 000 €**. L'identité est vérifiée."
        },
        {
          "type": "h3",
          "text": "5. Recommandation (écrit de conseil)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — Proposition de corrigé rédigé",
          "text": "« L'atelier Finition reste structurellement performant : son activité ordinaire dégage 120 000 € de marge (résultat rationnel). La baisse du résultat réel à 60 000 € en mars ne traduit aucune dérive des coûts de production — le coût unitaire reste de 24 € — mais le coût d'une capacité sous-employée à hauteur de 60 000 €.\nSi cette sous-activité est ponctuelle, la priorité est commerciale : remplir l'atelier (campagnes hors saison, sous-traitance entrante). Si elle se confirme sur plusieurs mois, il faudra envisager une mutualisation de la capacité de finition plutôt qu'une baisse de prix qui dégraderait la marge. »"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Prolongement — un mois de suractivité (à traiter seul)",
          "text": "En juin, avant un grand tournoi, l'atelier Montage (normale 20 000, CV 38 €/u, CF 580 000 €) produit 23 000 produits vendus 90 €.\nCoefficient = 1,15 ; coût IR unitaire = 67 € ; DIR = 580 000 × (1 − 1,15) = −87 000 € (boni). Résultat rationnel = (90 − 67) × 23 000 = 529 000 € ; résultat réel = 529 000 + 87 000 = 616 000 €, dont 87 000 € de boni non récurrent — signal d'un éventuel investissement de capacité si la suractivité dure."
        },
        {
          "type": "h3",
          "text": "Application complémentaire — deux ateliers, un diagnostic d'ensemble"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Diagnostic consolidé de deux ateliers",
          "text": "En avril, l’entreprise veut un diagnostic consolidé de sa chaîne de production. Atelier Montage : normale 20 000, réel 19 000, CV 38 €/u, CF 580 000 €. Atelier Finition : normale 25 000, réel 19 000, CV 12 €/u, CF 300 000 €.\nTravail à faire : coefficient et coût de sous-activité de chaque atelier, puis coût de sous-activité total de la chaîne."
        },
        {
          "type": "p",
          "text": "**Corrigé — diagnostic des deux ateliers :**"
        },
        {
          "type": "table",
          "headers": [
            "**Atelier**",
            "**Coefficient**",
            "**CF**",
            "**CF imputées**",
            "**Coût de sous-activité**"
          ],
          "rows": [
            [
              "Montage",
              "",
              "580 000",
              "551 000",
              "29 000"
            ],
            [
              "Finition",
              "",
              "300 000",
              "228 000",
              "72 000"
            ],
            [
              "**Chaîne**",
              "—",
              "**880 000**",
              "**779 000**",
              "**101 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "La chaîne supporte 101 000 € de coût de sous-activité en avril (29 000 + 72 000). **Le goulot n'est pas le Montage (presque à pleine charge, coef 0,95) mais la Finition (coef 0,76)** : c'est là que se concentre la capacité inemployée. La décision se concentre donc sur l'atelier Finition — le calcul centre par centre permet de cibler l'action, là où un coefficient global l'aurait masquée."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse, carte mentale et fiche de révision**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Coefficient d'imputation rationnelle (CIR) = activité réelle / activité normale ; charges fixes imputées = charges fixes × CIR. Ex. : CIR = 8 000/10 000 = 0,8.\n• N'imputer rationnellement que les charges FIXES : les charges variables suivent naturellement l'activité.\n• Coût de chômage (mali de sous-activité) = CF × (1 − CIR) ; boni de suractivité quand CIR > 1.\n• L'imputation rationnelle neutralise l'effet de la sous/suractivité sur le coût unitaire, qui devient comparable d'une période à l'autre.\n• Pont → Ch05 : l'IR corrige le coût complet ; pont → Ch14 : le mali de sous-activité rejoint l'écart sur activité (sous-imputation des charges fixes)."
        },
        {
          "type": "h3",
          "text": "Fiche de révision"
        },
        {
          "type": "h3",
          "text": "Tableau récapitulatif des notions"
        },
        {
          "type": "table",
          "headers": [
            "**Notion**",
            "**Définition**",
            "**Intérêt**",
            "**Limites**"
          ],
          "rows": [
            [
              "Activité normale",
              "Niveau de référence voulu pour l'outil",
              "Base du coefficient",
              "Convention discutable"
            ],
            [
              "Coefficient d'activité",
              "Activité réelle / activité normale",
              "Doser les CF incorporées",
              "Dépend de l'activité normale"
            ],
            [
              "Coût IR",
              "CV + CF × coefficient",
              "Coût stable, hors effet d'activité",
              "Hypothèse fixe/variable"
            ],
            [
              "Coût de sous-activité",
              "CF × (1 − coef), coef < 1",
              "Chiffre la capacité inemployée",
              "Dépend de l'activité normale"
            ],
            [
              "Boni de suractivité",
              "CF × (1 − coef), coef > 1",
              "Isole un gain non récurrent",
              "Non récurrent"
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
          "text": "**Les relations essentielles**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Pièges classiques & conseils méthodologiques",
          "text": "Appliquer le coefficient aux charges variables : il ne porte que sur les charges fixes.\nOublier que le coefficient peut différer d'un centre à l'autre (les coûts de sous-activité s'additionnent).\nValoriser les stocks au coût réel : c'est le coût IR qui s'applique (prudence).\nConfondre le coût de sous-activité (un coût) et le résultat (une marge).\nDire « malus » / « bonus » : on dit « mali » et « boni » (ou surcoût / gain)."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
