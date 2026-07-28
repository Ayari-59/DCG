// Généré par scripts/convert-docx.mjs depuis CHAPITRE_06__LA_METHODE_ABC.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dcg-ue11-methode-abc",
  "level": "DCG",
  "ue": "UE11",
  "number": 6,
  "title": "La méthode ABC",
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
          "text": "**Partie 2 du programme — « Calculer, analyser et améliorer les coûts ». La méthode ABC est, avec la méthode des centres d'analyse, l'une des deux méthodes de calcul du coût complet exigibles au DCG. Elle prolonge l'étude des coûts complets traditionnels en proposant une analyse des charges indirectes fondée sur les activités et la causalité, au service de la décision et du pilotage de la performance.**\nLa mise en œuvre calculatoire de l'ABC (les cinq étapes) est exigible au DCG. L'ABM, l'analyse de la valeur, le reengineering et le benchmarking sont introduits au niveau sensibilisation : ils sont approfondis en DSCG. Ce chapitre les présente dans leur principe, sans développer l'outillage technique avancé."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "COMPÉTENCES VISÉES",
          "text": "• Mettre en œuvre la méthode des coûts à base d'activités : identifier les activités, choisir les inducteurs, calculer le coût des inducteurs, imputer aux objets de coûts et construire le coût de revient.\n• Comparer la méthode ABC à la méthode des centres d'analyse et interpréter l'écart de coût (subventionnement croisé).\n• Justifier le choix d'une méthode de coûts selon le contexte de l'organisation (intérêts, limites, coût et complexité de mise en œuvre).\n• Relier le calcul des coûts par activités au pilotage (ABM) et à la performance globale (inducteurs liés aux activités environnementales).\n• Rédiger un écrit argumenté pour conseiller le décideur."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Introduction générale**"
        },
        {
          "type": "p",
          "text": "Calculer un coût complet, c'est rapporter à un produit la totalité des charges qu'il a engendrées. L'opération paraît simple ; elle ne l'est plus dès que les charges indirectes — celles qui concernent plusieurs produits à la fois — deviennent prépondérantes. Comment, alors, savoir quelle part de la maintenance, de la logistique ou du contrôle qualité revient réellement à tel produit plutôt qu'à tel autre ?"
        },
        {
          "type": "p",
          "text": "La méthode des centres d'analyse répond à cette question par des unités d'œuvre, souvent volumiques (heures-machine, quantités produites). Or, dans une entreprise qui fabrique à la fois des grandes séries standard et des petites séries personnalisées, cette clé unique fausse les coûts : elle fait porter aux gros volumes des charges qui, en réalité, sont causées par la complexité des petites séries. C'est pour corriger cette distorsion que la méthode ABC (Activity-Based Costing) a été conçue aux États-Unis dans les années 1980 (Kaplan, Cooper, Porter), puis diffusée en France par Pierre Mévellec."
        },
        {
          "type": "p",
          "text": "Conformément à l'esprit du programme réformé, ce chapitre n'aborde pas l'ABC comme une simple recette de calcul. Il l'étudie selon quatre dimensions : comprendre pourquoi elle existe (Partie 1), savoir la calculer (Partie 2), interpréter ses résultats pour piloter (Partie 3) et la critiquer pour choisir la bonne méthode selon le contexte (Partie 4)."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une opposition à relativiser",
          "text": "La méthode ABC est souvent présentée en opposition frontale à la méthode « traditionnelle ». Cette opposition doit être relativisée : d'un point de vue calculatoire, la démarche (répartir les charges indirectes, puis les imputer aux produits) reste la même. C'est avant tout l'analyse des charges — et le vocabulaire — qui diffèrent."
        },
        {
          "type": "p",
          "text": "**Méca-Précision (pièces mécaniques) fabrique deux pièces, l'une en série longue, l'autre en série courte. La pièce A, fabriquée en série longue, est vendue 90 € ; son coût variable unitaire est de 38 €.**"
        },
        {
          "type": "p",
          "text": "Pour monter en gamme, Méca-Précision a lancé une pièce premium personnalisable, la pièce B, vendue 180 €, fabriquée en petites séries à la demande. Le contrôleur de gestion s'interroge : la comptabilité actuelle, en centres d'analyse avec une unité d'œuvre unique (l'heure-machine), montre que les deux pièces sont rentables. Pourtant, la trésorerie se dégrade depuis le lancement de la pièce B. Le dirigeant demande une analyse en coûts à base d'activités."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — données de l'atelier « produits »",
          "text": "Production mensuelle : produit A = 480 000 unités ; produit B = 30 000 unités.\nCharges directes unitaires (matière + main-d'œuvre) : produit A = 38 € ; produit B = 52 €.\nCharges indirectes totales de l'atelier à répartir : 18 900 000 €.\nMéthode actuelle : centres d'analyse, unité d'œuvre unique = heure-machine. Consommation : produit A = 0,5 h/u ; produit B = 1 h/u.\nPrix de vente : produit A = 90 € ; produit B = 180 €."
        },
        {
          "type": "p",
          "text": "**Cas d’étude. Nous suivrons ce cas tout au long du chapitre : analyse du modèle actuel (Partie 1), calcul ABC complet (Partie 2), interprétation pour la décision (Partie 3) et comparaison critique des deux méthodes (Partie 4).**"
        }
      ]
    },
    {
      "id": "1-comprendre-pourquoi-la-methode-abc",
      "title": "1. Comprendre : pourquoi la méthode ABC ?",
      "blocks": [
        {
          "type": "p",
          "text": "Avant de calculer, il faut comprendre le problème que l'ABC vient résoudre. Cette première partie expose la finalité du coût complet, les hypothèses fragiles de la méthode des centres d'analyse, et le phénomène de subventionnement croisé qui justifie le recours aux activités."
        },
        {
          "type": "h3",
          "text": "1.1 Le coût complet et le problème des charges indirectes"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le coût complet",
          "text": "Le coût complet d'un produit est constitué par la totalité des charges qui peuvent lui être rapportées (directes et indirectes). Il conduit au coût de revient et sert le pilotage stratégique : fixation des prix, gestion du portefeuille de produits, décision d'abandon, évaluation des stocks."
        },
        {
          "type": "p",
          "text": "Le calcul d'un coût complet pose un problème fondamental : comment attribuer les charges indirectes — qui, par définition, concernent plusieurs objets de coûts — à un produit donné ? Les charges directes (la matière d'un produit, la main-d'œuvre de montage) s'affectent sans ambiguïté. Les charges indirectes (maintenance, ordonnancement, contrôle qualité, encadrement) exigent une clé de répartition. C'est cette clé qui fait l'objet de toutes les critiques."
        },
        {
          "type": "h3",
          "text": "Illustration professionnelle — la montée des charges indirectes"
        },
        {
          "type": "p",
          "text": "Chez Méca-Précision, les charges indirectes de l'atelier de production (18,9 M€) dépassent largement les charges directes de main-d'œuvre. Maintenance des machines, ordonnancement des séries, gestion des approvisionnements éco-responsables, contrôles de conformité : autant de coûts qui ne se rattachent pas naturellement à une pièce précise. Ce poids des indirects est typique des entreprises modernes."
        },
        {
          "type": "p",
          "text": "Philippe Lorino parle d'un **« renversement de la pyramide des coûts »** : là où, dans les années 1930, les charges directes dominaient, ce sont aujourd'hui les charges indirectes qui pèsent le plus. La pyramide « repose désormais sur son sommet »."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/01.png",
          "alt": "1. Comprendre : pourquoi la méthode ABC ?",
          "width": 1440,
          "height": 600,
          "caption": "Le renversement de la pyramide des coûts (P. Lorino)"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Le seuil critique de l'arbitraire",
          "text": "L'arbitraire dans le traitement des charges indirectes est admissible quand elles représentent une faible part des charges totales. Il provoque de graves distorsions quand elles deviennent majoritaires. Plus les indirects pèsent, plus le choix de la clé de répartition devient décisif."
        },
        {
          "type": "h3",
          "text": "1.2 Les limites de la méthode des centres d'analyse"
        },
        {
          "type": "p",
          "text": "La méthode des centres d'analyse (sections homogènes), issue des travaux de Rimailho (1928) et de la CEGOS (1936), a été conçue pour un contexte économique aujourd'hui dépassé."
        },
        {
          "type": "table",
          "headers": [
            "**Années 1930 (économie de l'offre)**",
            "**Depuis les années 1970 (crise du fordisme)**"
          ],
          "rows": [
            [
              "Économie de pénurie ; l'offre < la demande",
              "Économie de la demande ; l'offre > la demande"
            ],
            [
              "Produits standardisés, grandes séries",
              "Diversification, personnalisation, petites séries"
            ],
            [
              "Procédés stables",
              "Turbulence, cycle de vie raccourci"
            ],
            [
              "Charges directes prépondérantes",
              "Montée des charges indirectes (R&D, marketing…)"
            ],
            [
              "Organisation taylorienne / fordienne",
              "Chrono-compétition, toyotisme (sans stocks)"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Explication — l'hypothèse d'homogénéité"
        },
        {
          "type": "p",
          "text": "Un centre d'analyse n'est pertinent que si les charges qui y sont regroupées sont homogènes, c'est-à-dire toutes corrélées à une même unité d'œuvre. Cette condition est rarement vérifiée : le découpage suit souvent l'organigramme fonctionnel plutôt qu'une analyse sérieuse des causes de coûts."
        },
        {
          "type": "p",
          "text": "La nature de l'unité d'œuvre est décisive. On oppose deux familles :"
        },
        {
          "type": "ul",
          "items": [
            "**Les unités d'œuvre volumiques :**quantités produites, heures-machine, chiffre d'affaires — adaptées aux grandes séries standardisées.",
            "**Les unités d'œuvre de déclenchement :**nombre de lots, de commandes, de références — adaptées aux productions différenciées en petites séries."
          ]
        },
        {
          "type": "p",
          "text": "Retenir une clé volumique alors que la production est différenciée minore le coût des petites séries : ignorer le temps de réglage avant chaque lot revient à sous-estimer le coût des séries courtes."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "APPLICATION 1 — Le piège de l’unité d’œuvre unique",
          "text": "Méca-Précision répartit ses 18,9 M€ de charges indirectes avec une seule unité d'œuvre volumique : l'heure-machine (270 000 h au total → taux de 70 €/h). La pièce A consomme 0,5 h/u, la pièce B 1 h/u.\n**Travail à faire :**à partir des données de l’atelier (produit A : 480 000 unités, 0,5 h-machine/u ; produit B : 30 000 unités, 1 h-machine/u ; charges indirectes 18,9 M€), calculer le taux de l’unité d’œuvre unique (heure-machine) et le coût indirect imputé à chaque produit, puis montrer la limite de cette clé volumique.\n**Corrigé :**\nCette clé suppose que les charges indirectes sont causées par le temps machine. Or le produit B, fabriqué en petites séries personnalisées, déclenche énormément de commandes, de réglages et de contrôles — des coûts sans rapport avec le temps d'usinage. La clé volumique est aveugle à cette complexité."
        },
        {
          "type": "h3",
          "text": "Illustration chiffrée — pourquoi une clé unique fausse les coûts"
        },
        {
          "type": "p",
          "text": "Un atelier fabrique deux produits : P1 (1 500 unités, 0,2 t/u) et P2 (500 unités, 0,1 t/u). Les charges indirectes de production s’élèvent à 70 000 €. Trois approches successives révèlent le subventionnement croisé."
        },
        {
          "type": "p",
          "text": "**Approche 1 — une clé volumique unique (la tonne produite)**"
        },
        {
          "type": "table",
          "headers": [
            "**Clé volumique unique**",
            "**P1**",
            "**P2**"
          ],
          "rows": [
            [
              "Unités d’œuvre (tonnes)",
              "300",
              "50"
            ],
            [
              "Coût de l’UO ()",
              "200 €",
              "200 €"
            ],
            [
              "Charges indirectes imputées",
              "60 000 €",
              "10 000 €"
            ],
            [
              "**Coût indirect unitaire**",
              "**40,00 €**",
              "**20,00 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Approche 2 — deux centres : montage et contrôle**"
        },
        {
          "type": "p",
          "text": "Montage 49 000 € (UO = tonne) ; Contrôle 21 000 € (UO = temps : 0,02 h/P1 et 0,06 h/P2, soit 60 h). Coûts d’UO : montage 140 € ; contrôle 350 €."
        },
        {
          "type": "table",
          "headers": [
            "**Deux centres (montage + contrôle)**",
            "**P1**",
            "**P2**"
          ],
          "rows": [
            [
              "Montage : tonnes × 140 €",
              "42 000 €",
              "7 000 €"
            ],
            [
              "Contrôle : heures × 350 €",
              "10 500 €",
              "10 500 €"
            ],
            [
              "Total charges indirectes",
              "52 500 €",
              "17 500 €"
            ],
            [
              "**Coût indirect unitaire**",
              "**35,00 €**",
              "**35,00 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Approche 3 — le contrôle par lots (logique ABC)**"
        },
        {
          "type": "p",
          "text": "Le contrôle se fait par lots : P1 = 2 lots, P2 = 10 lots (12 lots). Coût du lot contrôlé = €."
        },
        {
          "type": "table",
          "headers": [
            "**Contrôle par lots (inducteur = nombre de lots)**",
            "**P1**",
            "**P2**"
          ],
          "rows": [
            [
              "Montage : tonnes × 140 €",
              "42 000 €",
              "7 000 €"
            ],
            [
              "Contrôle : lots × 1 750 €",
              "3 500 €",
              "17 500 €"
            ],
            [
              "Total charges indirectes",
              "45 500 €",
              "24 500 €"
            ],
            [
              "**Coût indirect unitaire**",
              "**30,33 €**",
              "**49,00 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Synthèse — le subventionnement croisé révélé**"
        },
        {
          "type": "table",
          "headers": [
            "**Coût indirect unitaire**",
            "**Clé volumique**",
            "**2 centres**",
            "**Par lots (ABC)**"
          ],
          "rows": [
            [
              "P1 (grande série)",
              "40,00 €",
              "35,00 €",
              "30,33 €"
            ],
            [
              "P2 (petite série)",
              "20,00 €",
              "35,00 €",
              "49,00 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*La clé volumique unique surévalue P1 (grande série) et sous-évalue P2 (petites séries, nombreux contrôles) : P1 subventionne P2. En appréhendant le contrôle par lots — la logique ABC —, le vrai coût apparaît : P2 coûte bien plus cher (49 € contre 20 € affichés au départ).*"
        },
        {
          "type": "h3",
          "text": "1.3 Le subventionnement croisé"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le subventionnement croisé",
          "text": "La répartition des charges indirectes étant un jeu à somme nulle, surévaluer le coût d'un produit est nécessairement la contrepartie de la sous-évaluation d'un autre. Pierre Mévellec nomme ce phénomène le subventionnement croisé : en général, les produits standards en grandes séries subventionnent les produits différenciés en petites séries."
        },
        {
          "type": "p",
          "text": "Le danger est qu'une décision (prix, abandon, développement) fondée sur des coûts faussés peut être ruineuse. Chez Méca-Précision, la pièce A en série longue porte une partie du coût réellement causé par la pièce B : la grande série finance silencieusement la petite. La Partie 4 chiffrera précisément ce transfert."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 1 (Comprendre)",
          "text": "Le coût complet exige de répartir les charges indirectes, devenues majoritaires (Lorino).\nLa méthode des centres d'analyse suppose des centres homogènes et des UO bien choisies.\nUne UO volumique sur une production différenciée fausse les coûts.\nSubventionnement croisé : jeu à somme nulle ; les grandes séries subventionnent les petites."
        }
      ]
    },
    {
      "id": "2-calculer-la-mecanique-de-l-abc",
      "title": "2. Calculer : la mécanique de l'ABC",
      "blocks": [
        {
          "type": "p",
          "text": "La méthode ABC décrit l'organisation non par ses fonctions, mais par ses activités. Elle s'inspire de la chaîne de valeur de Michael Porter. Cette partie présente ses deux notions centrales — activité et inducteur — puis les cinq étapes du calcul, appliquées intégralement au cas de Méca-Précision."
        },
        {
          "type": "h3",
          "text": "2.1 Les activités au cœur du modèle"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/02.png",
          "alt": "2. Calculer : la mécanique de l'ABC",
          "width": 1296,
          "height": 536,
          "caption": "Figure 1 — La chaîne de valeur de Porter : activités principales et de soutien"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L'activité",
          "text": "Une activité est un ensemble de tâches coordonnées au sein d'un processus, consommatrices de ressources, en vue de délivrer une production. Le principe de l'ABC : les activités consomment des ressources, et les produits consomment des activités."
        },
        {
          "type": "p",
          "text": "*L'enchaînement fondamental : ressources → activités → inducteurs → objets de coûts*"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/03.png",
          "alt": "2. Calculer : la mécanique de l'ABC",
          "width": 1268,
          "height": 306,
          "caption": "Figure 2 — Le vocabulaire ABC : ressources, activités, inducteurs et objets de coûts"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Charges indirectes… mais directes par rapport aux activités",
          "text": "Avec la méthode traditionnelle, les charges sont indirectes par rapport aux produits. Avec l'ABC, elles deviennent directes par rapport aux activités (tout en restant indirectes par rapport aux produits). C'est ce passage par les activités qui fait reculer l'arbitraire."
        },
        {
          "type": "h3",
          "text": "Explication — identifier puis hiérarchiser les activités"
        },
        {
          "type": "p",
          "text": "La mise en œuvre commence par une carte des activités, élaborée à partir d'entretiens avec les opérationnels : quelles activités existent ? quelles ressources consomment-elles ? quelle est leur production ? La carte est ensuite simplifiée (on regroupe les activités partageant le même inducteur). Les activités se classent selon le niveau auquel elles consomment des ressources :"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/04.png",
          "alt": "2. Calculer : la mécanique de l'ABC",
          "width": 1440,
          "height": 500,
          "caption": "Les quatre niveaux de la hiérarchie des activités"
        },
        {
          "type": "table",
          "headers": [
            "**Niveau d'activité**",
            "**Inducteur logique**",
            "**Exemples**"
          ],
          "rows": [
            [
              "Unitaire (à l'unité produite)",
              "quantité produite, heure-machine",
              "usinage, assemblage"
            ],
            [
              "Lot (à chaque lot lancé)",
              "nombre de lots",
              "réglage, lancement, contrôle d'un lot"
            ],
            [
              "Soutien aux produits (par référence)",
              "nombre de références",
              "gestion d'une gamme, R&D produit"
            ],
            [
              "Soutien à l'organisation (global)",
              "difficilement imputable",
              "direction générale, système d'information"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Une conséquence importante",
          "text": "Les activités de niveau « lot » ou « soutien » échappent à toute logique volumique : leur coût ne dépend pas du nombre d'unités produites. C'est précisément ce que les unités d'œuvre volumiques ne savent pas capter — d'où le subventionnement croisé."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — la carte des activités",
          "text": "Les entretiens menés chez l’entreprise font ressortir quatre activités consommatrices de ressources dans l'atelier produits : l'approvisionnement (gestion des commandes de matières éco-responsables), le lancement en production (réglages des machines à chaque série), l'usinage (fabrication proprement dite) et le contrôle qualité (vérification de conformité par série)."
        },
        {
          "type": "p",
          "text": "*Méca-Précision — carte des activités et flux de coûts vers les deux pièces*"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/05.png",
          "alt": "2. Calculer : la mécanique de l'ABC",
          "width": 1436,
          "height": 1504,
          "caption": "Figure 3 — La méthode ABC : du regroupement des charges indirectes aux objets de coûts"
        },
        {
          "type": "h3",
          "text": "2.2 Les inducteurs de coûts"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — L'inducteur d'activité",
          "text": "Un inducteur d'activité mesure comment les objets de coûts consomment les activités. Il permet d'allouer le coût d'une activité selon le nombre d'inducteurs consommés par chaque objet de coût. Techniquement, son rôle est celui d'une unité d'œuvre ; conceptuellement, il relève d'une logique de causalité et non de simple imputation."
        },
        {
          "type": "h3",
          "text": "Les qualités d'un bon inducteur"
        },
        {
          "type": "ul",
          "items": [
            "**Causalité :**l'inducteur doit être la cause de la consommation de ressources par l'activité.",
            "**Représentativité :**son volume doit varier proportionnellement au coût de l'activité.",
            "**Mesurabilité :**il doit être facile à recenser dans le système d'information."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Inducteur volumique ou de déclenchement",
          "text": "Comme une unité d'œuvre, un inducteur peut être volumique (heure-machine) ou de déclenchement (nombre de lots, de commandes). Tout l'apport de l'ABC est d'oser des inducteurs de déclenchement là où la méthode classique se contentait d'une clé volumique unique."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "ILLUSTRATION — le choix des inducteurs",
          "text": "À chaque activité, l’entreprise associe l'inducteur qui en exprime le mieux la cause. Trois inducteurs sur quatre sont de déclenchement (commandes, lots, contrôles) : ils dépendent de la complexité de gestion de chaque modèle, et non du volume produit."
        },
        {
          "type": "table",
          "headers": [
            "**Activité**",
            "**Coût de l'activité**",
            "**Inducteur retenu**",
            "**Justification**"
          ],
          "rows": [
            [
              "Approvisionnement",
              "2 400 000 €",
              "Nombre de commandes",
              "Le travail dépend du nombre de commandes passées."
            ],
            [
              "Lancement (réglages)",
              "3 600 000 €",
              "Nombre de lots",
              "Chaque lot exige un réglage, quelle que soit sa taille."
            ],
            [
              "Usinage",
              "10 800 000 €",
              "Heure-machine",
              "Les ressources sont consommées au rythme machine."
            ],
            [
              "Contrôle qualité",
              "2 100 000 €",
              "Nombre de contrôles",
              "Le contrôle est réalisé par série, non par unité."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "2.3 Les cinq étapes du calcul"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/06.png",
          "alt": "2. Calculer : la mécanique de l'ABC",
          "width": 1440,
          "height": 600,
          "caption": "Les cinq étapes du calcul des coûts à base d'activités"
        },
        {
          "type": "ul",
          "items": [
            "**Affecter les ressources aux activités** : répartir les charges indirectes sur les activités selon leur traçabilité.",
            "**Calculer le coût de chaque activité** : additionner les ressources consommées.",
            "**Choisir l'inducteur et déterminer son volume** : coût de l'inducteur = coût de l'activité / nombre d'inducteurs.",
            "**Imputer aux objets de coûts** : chaque objet supporte le coût des inducteurs qu'il a consommés.",
            "**Construire le coût de revient** : charges directes + charges réparties par les activités."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Relations à connaître**"
        },
        {
          "type": "h3",
          "text": "2.4 Application intégrale — Méca-Précision"
        },
        {
          "type": "p",
          "text": "Appliquons les cinq étapes au cas de Méca-Précision. Les consommations d'inducteurs de chaque pièce, relevées dans le système d'information, sont les suivantes."
        },
        {
          "type": "h4",
          "text": "*Étapes 1 à 3 — coût des activités et coût de chaque inducteur*"
        },
        {
          "type": "table",
          "headers": [
            "**Activité**",
            "**Coût de l'activité**",
            "**Inducteur**",
            "**Volume total**",
            "**Coût de l'inducteur**"
          ],
          "rows": [
            [
              "Approvisionnement",
              "2 400 000",
              "nombre de commandes",
              "4 000",
              "600 €"
            ],
            [
              "Lancement (réglages)",
              "3 600 000",
              "nombre de lots",
              "3 600",
              "1 000 €"
            ],
            [
              "Usinage",
              "10 800 000",
              "heure-machine",
              "270 000",
              "40 €"
            ],
            [
              "Contrôle qualité",
              "2 100 000",
              "nombre de contrôles",
              "3 000",
              "700 €"
            ],
            [
              "Total",
              "18 900 000",
              "—",
              "—",
              "—"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Détail du calcul des volumes. Heures-machine : 480 000 × 0,5 + 30 000 × 1 = 240 000 + 30 000 = 270 000 h. Coût de l'inducteur usinage = €/h."
        },
        {
          "type": "h4",
          "text": "*Étape 4 — imputation aux deux pièces selon les inducteurs consommés*"
        },
        {
          "type": "table",
          "headers": [
            "**Activité (coût d'inducteur)**",
            "**produit A (conso → coût)**",
            "**produit B (conso → coût)**"
          ],
          "rows": [
            [
              "Approvisionnement (600 €)",
              "1 600 → 960 000",
              "2 400 → 1 440 000"
            ],
            [
              "Lancement (1 000 €)",
              "600 → 600 000",
              "3 000 → 3 000 000"
            ],
            [
              "Usinage (40 €)",
              "240 000 → 9 600 000",
              "30 000 → 1 200 000"
            ],
            [
              "Contrôle qualité (700 €)",
              "800 → 560 000",
              "2 200 → 1 540 000"
            ],
            [
              "Total charges indirectes",
              "11 720 000",
              "7 180 000"
            ],
            [
              "Charges indirectes unitaires",
              "€",
              "€"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "*Étape 5 — coût de revient unitaire*"
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**produit A (480 000 u)**",
            "**produit B (30 000 u)**"
          ],
          "rows": [
            [
              "Charges directes (matière + MOD)",
              "38,00 €",
              "52,00 €"
            ],
            [
              "Charges indirectes (ABC)",
              "24,42 €",
              "239,33 €"
            ],
            [
              "Coût de revient unitaire ABC",
              "62,42 €",
              "291,33 €"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Lecture du résultat",
          "text": "Le produit B, produit en petite série mais très consommateur d'activités de déclenchement (2 400 commandes, 3 000 lots, 2 200 contrôles), supporte un coût indirect unitaire de 239,33 € — dix fois celui du produit A (24,42 €). Son coût de revient ressort à 291,33 €, alors qu’il est vendu 180 €.\nVérification globale : 11 720 000 + 7 180 000 = 18 900 000 € = total des charges indirectes. La répartition est bien complète (jeu à somme nulle)."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Les pièges de calcul — Partie 2",
          "text": "Confondre le coût d'un lot avec un coût par produit : le coût d'inducteur « 1 000 €/lot » se ventile selon le nombre de lots, jamais directement par unité.\nOublier d'ajouter les charges directes au coût de revient final (étape 5).\nSe tromper de volume d'inducteur (oublier qu'un produit en consomme plusieurs unités) ou mélanger volume total et consommation d'un seul produit.\nGarder une UO volumique pour une activité de déclenchement."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 2 (Calculer)",
          "text": "Activité = tâches coordonnées consommant des ressources ; inducteur = mesure causale.\nCinq étapes : ressources → activités → inducteurs → objets → coût de revient.\nCoût de l'inducteur = coût de l'activité / nombre d'inducteurs.\nChez l’entreprise : produit A = 62,42 € ; produit B = 291,33 € (CI total conservé : 18,9 M€)."
        }
      ]
    },
    {
      "id": "3-interpreter-de-la-mesure-au-pilotage",
      "title": "3. Interpréter : de la mesure au pilotage",
      "blocks": [
        {
          "type": "p",
          "text": "Calculer un coût n'a de sens que si l'on sait l'interpréter pour décider et agir. L'ABC ne livre pas seulement des coûts plus justes : en décrivant l'organisation par ses activités, elle éclaire les causes des coûts et ouvre la voie au pilotage de la performance — y compris dans ses dimensions numérique et durable."
        },
        {
          "type": "h3",
          "text": "3.1 Comprendre et agir sur les causes des coûts"
        },
        {
          "type": "p",
          "text": "En reliant ressources, activités et objets de coûts, l'ABC répond à la question « pourquoi ce coût ? » et non plus seulement « combien ? ». Le coût n'est plus une fatalité à répartir, mais la conséquence d'activités que l'on peut analyser et faire évoluer."
        },
        {
          "type": "h3",
          "text": "Distinguer les activités à valeur ajoutée"
        },
        {
          "type": "p",
          "text": "L'analyse des activités sépare celles qui créent de la valeur pour le client de celles qui n'en créent pas (attentes, déplacements inutiles, doublons de contrôle). Ces dernières sont des cibles prioritaires de réduction."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 2 — Agir sur l’inducteur d’activité",
          "text": "Le produit B coûte cher parce qu'il est lancé en 3 000 lots minuscules (10 unités par lot en moyenne). En regroupant la production en lots de 30 unités, le nombre de lots tomberait à 1 000 : le coût de l'activité « lancement » imputé au produit B passerait de 3 000 000 € à 1 000 000 €, soit une baisse de 66,67 € par unité (2 000 000 € / 30 000). L'ABC montre le levier d'action que la clé volumique masquait.\n**Travail à faire :**le produit B est lancé en 3 000 lots de 10 unités. Déterminer l’effet, sur le coût de l’activité « lancement » imputé au produit B, d’un regroupement en lots de 30 unités.\n**Corrigé :**"
        },
        {
          "type": "h3",
          "text": "3.2 Le management par les activités (ABM)"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "DÉFINITION — Le management à base d'activités (ABM)",
          "text": "Le management à base d'activités (Activity-Based Management) analyse comment les activités contribuent à la création de valeur, et cherche à optimiser le rapport « valeur / coût » dans une vision transversale de l'organisation. L'ABC calcule les coûts ; l'ABM pilote la valeur."
        },
        {
          "type": "p",
          "text": "*L'ABC calcule les coûts, l'ABM pilote la valeur*"
        },
        {
          "type": "p",
          "text": "L'ABM prolonge l'esprit de l'analyse de la valeur (L. Miles, années 1960) : satisfaire le besoin au coût juste nécessaire. Il s'appuie sur deux démarches complémentaires."
        },
        {
          "type": "table",
          "headers": [
            "**Démarche**",
            "**Principe**"
          ],
          "rows": [
            [
              "Reengineering (reconfiguration des processus)",
              "Repenser en profondeur les processus créateurs de valeur : réduire coûts et délais, améliorer qualité et satisfaction."
            ],
            [
              "Benchmarking (étalonnage comparatif)",
              "Rechercher l'efficience en se comparant à un « meilleur » choisi parmi concurrents ou partenaires."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Niveau DCG",
          "text": "ABM, analyse de la valeur, reengineering et benchmarking sont introduits au niveau sensibilisation au DCG : on en retient le principe, l'approfondissement relevant du DSCG."
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "POINT EXAMEN — Méthode — rédiger l'écrit argumenté (compétence du référentiel)",
          "text": "À l'examen, l'analyse débouche souvent sur un conseil écrit au décideur. Structure efficace en quatre temps : (1) rappeler le constat chiffré (les deux coûts, l'écart) ; (2) expliquer la cause (profil de consommation d'inducteurs, subventionnement croisé) ; (3) tirer la conséquence pour la décision (prix, marge, gamme) ; (4) nuancer (limites de la méthode, dimension stratégique). On évite d'affirmer qu'une méthode est « meilleure » : on justifie sa pertinence au regard du contexte."
        },
        {
          "type": "h3",
          "text": "3.3 Contrôle de gestion et numérique"
        },
        {
          "type": "p",
          "text": "La principale limite de l'ABC — sa lourdeur de mise en œuvre — est aujourd'hui fortement atténuée par les outils numériques, qui automatisent la collecte des données d'activité et le calcul des inducteurs."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/07.png",
          "alt": "3. Interpréter : de la mesure au pilotage",
          "width": 1440,
          "height": 400,
          "caption": "Les technologies numériques au service de la méthode ABC"
        },
        {
          "type": "ul",
          "items": [
            "**ERP / PGI :**centralisent les données d'activité (commandes, lots, contrôles) à partir d'une source unique et fiable — chez Méca-Précision, le PGI fournit directement le nombre de commandes et de lots par pièce.",
            "**Process Mining :**reconstitue automatiquement la cartographie des processus réels à partir des traces informatiques — l'étape la plus coûteuse de l'ABC.",
            "**Data Analytics & Business Intelligence :**identifient les inducteurs les plus pertinents et restituent coûts et marges par activité dans des tableaux de bord.",
            "**Intelligence artificielle : détecte les anomalies de coûts et simule l'effet d'une réorganisation des activités (par exemple le regroupement des lots de la pièce B).**"
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — Le numérique lève le frein du coût",
          "text": "En automatisant la cartographie et l'actualisation, le numérique répond à deux critiques majeures de l'ABC (coût de mise en œuvre, difficulté d'actualisation). Le contrôleur se recentre sur l'analyse et le pilotage (ABM)."
        },
        {
          "type": "h3",
          "text": "3.4 Performance globale et durabilité"
        },
        {
          "type": "p",
          "text": "Le référentiel rénové demande de relier le calcul des coûts aux enjeux de durabilité. L'ABC s'y prête bien : en isolant des activités dédiées, elle rend visibles et imputables des coûts environnementaux souvent noyés dans les charges indirectes."
        },
        {
          "type": "table",
          "headers": [
            "**Activité « durable »**",
            "**Inducteur possible**",
            "**Apport pour le pilotage**"
          ],
          "rows": [
            [
              "Traitement / recyclage des déchets",
              "tonne de déchets produite",
              "Impute le coût aux produits les plus polluants"
            ],
            [
              "Contrôle de conformité environnementale",
              "nombre de contrôles",
              "Relie qualité durable et coût"
            ],
            [
              "Maintenance des équipements économes",
              "heure de maintenance",
              "Valorise l'investissement « vert »"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "l’entreprise — tracer le coût de l'éco-responsabilité",
          "text": "L’entreprise revendique des équipements éco-responsables. En créant une activité « recyclage des chutes de matière » avec pour inducteur la tonne de déchets, l'entreprise impute ce coût aux produits qui en génèrent le plus. Elle dispose alors d'une base chiffrée pour ses arbitrages de performance globale : faut-il faire évoluer la conception du produit B, plus généreuse en chutes, pour réduire son empreinte et son coût ? L'analyse par activités relie ainsi coût et impact environnemental."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 3 (Interpréter)",
          "text": "L'ABC explique les causes des coûts et révèle des leviers d'action (agir sur l'inducteur).\nL'ABM pilote le rapport valeur / coût des activités (reengineering, benchmarking).\nLe numérique (ERP, process mining, BI, IA) automatise l'ABC et lève le frein du coût.\nDes inducteurs « durables » relient l'ABC à la performance globale."
        }
      ]
    },
    {
      "id": "4-critiquer-abc-vs-centres-d-analyse",
      "title": "4. Critiquer : ABC vs centres d'analyse",
      "blocks": [
        {
          "type": "p",
          "text": "La quatrième dimension du programme est l'analyse critique : aucune méthode n'est supérieure dans l'absolu. Cette partie confronte l'ABC et les centres d'analyse, chiffre l'écart sur le cas de Méca-Précision, puis énonce les conditions de choix selon le contexte."
        },
        {
          "type": "h3",
          "text": "4.1 Apports en pertinence"
        },
        {
          "type": "p",
          "text": "Le principal apport de l'ABC est de fournir des coûts plus justes lorsque les charges indirectes sont importantes et la production diversifiée. Trois bénéfices se dégagent :"
        },
        {
          "type": "ul",
          "items": [
            "**Causalité :**l'inducteur explique le coût (« pourquoi »), là où l'unité d'œuvre se contente de l'imputer (« combien »).",
            "**Transversalité :**le découpage par activités traverse les fonctions et se rapproche du découpage stratégique (chaîne de valeur).",
            "**Ouverture sur le pilotage :**l'ABC débouche sur l'ABM et la comptabilité stratégique."
          ]
        },
        {
          "type": "h3",
          "text": "Méca-Précision — l'écart chiffré entre les deux méthodes"
        },
        {
          "type": "p",
          "text": "Reprenons le cas. En méthode classique, les 18,9 M€ étaient répartis avec la seule heure-machine (taux 70 €/h). Comparons pièce par pièce."
        },
        {
          "type": "table",
          "headers": [
            "**Coût de revient unitaire**",
            "**produit A (standard)**",
            "**produit B (premium)**"
          ],
          "rows": [
            [
              "Méthode classique (UO heure-machine)",
              "73,00 €",
              "122,00 €"
            ],
            [
              "Méthode ABC (4 activités)",
              "62,42 €",
              "291,33 €"
            ],
            [
              "Écart (ABC − classique)",
              "− 10,58 €",
              "+ 169,33 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "*Méca-Précision — le coût de revient selon la méthode retenue*"
        },
        {
          "type": "p",
          "text": "Détail du calcul classique. Taux = €/h. pièce A : 38 + 70 × 0,5 = 73 € ; pièce B : 52 + 70 × 1 = 122 €."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Le subventionnement croisé enfin révélé",
          "text": "La méthode classique surévaluait le produit A de 10,58 € et sous-évaluait le produit B de 169,33 € par unité. Comme la répartition est un jeu à somme nulle, le produit A (grande série) « subventionnait » le produit B (petite série) : les volumes standards portaient une partie du coût réel des séries personnalisées.\nVérification du transfert global : 10,58 € × 480 000 ≈ 5 080 000 € de surcoût ôté au produit A, soit l'équivalent du complément imputé au produit B (169,33 € × 30 000 ≈ 5 080 000 €). La somme reste nulle."
        },
        {
          "type": "h3",
          "text": "D'où vient l'écart ? Décomposition par activité"
        },
        {
          "type": "p",
          "text": "Pour comprendre l'origine du transfert, on compare, activité par activité, le coût imputé à la pièce B en ABC à ce qu'aurait donné la clé volumique unique. En méthode classique, la pièce B ne reçoit que sa quote-part d'heures-machine (30 000 h sur 270 000, soit ) de chaque enveloppe : son coût indirect total y est de 70 €/h × 30 000 h = 2 100 000 €. L'ABC en impute 7 180 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Activité**",
            "**produit B en ABC**",
            "**Quote-part à l'heure-machine (1/9)**",
            "**Écart révélé**"
          ],
          "rows": [
            [
              "Approvisionnement",
              "1 440 000",
              "266 667",
              "+ 1 173 333"
            ],
            [
              "Lancement (réglages)",
              "3 000 000",
              "400 000",
              "+ 2 600 000"
            ],
            [
              "Usinage",
              "1 200 000",
              "1 200 000",
              "0"
            ],
            [
              "Contrôle qualité",
              "1 540 000",
              "233 333",
              "+ 1 306 667"
            ],
            [
              "Total CI produit B",
              "7 180 000",
              "2 100 000",
              "+ 5 080 000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Lecture.**L'usinage, seule activité réellement volumique, donne le même montant dans les deux méthodes (1 200 000 €) : l'écart y est nul. Tout le transfert de 5 080 000 € vient des trois activités de déclenchement (approvisionnement, lancement, contrôle), que la clé horaire ne savait pas capter. Rapporté aux 30 000 unités, ce surcoût de 5 080 000 € explique exactement l'écart unitaire de + 169,33 € (5 080 000 / 30 000 = 169,33 €)."
        },
        {
          "type": "h3",
          "text": "Analyse critique — l'impact sur la décision"
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/08.png",
          "alt": "4. Critiquer : ABC vs centres d'analyse",
          "width": 1440,
          "height": 400,
          "caption": "La décision faussée : marge unitaire de la pièce B selon la méthode"
        },
        {
          "type": "p",
          "text": "**L'enjeu n'est pas comptable mais stratégique. Avec les coûts classiques, la pièce B (vendue 180 €, coût 122 €) dégageait une marge apparente de + 58 € : le dirigeant était tenté d'en développer la production. Avec les coûts ABC (coût réel 291,33 €), elle se vend à perte : − 111,33 € par unité. La dégradation de trésorerie observée par Méca-Précision trouve ici son explication. Une décision fondée sur les coûts classiques aurait aggravé les pertes.**"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — L'interprétation des résultats",
          "text": "Croire que l'ABC « gonfle » artificiellement le coût du produit B : elle révèle son coût réel, jusque-là masqué.\nConclure trop vite à l'abandon du produit B : elle peut avoir un rôle d'image ou d'attraction (produit d'appel haut de gamme). L'ABC éclaire la décision, elle ne la dicte pas.\nOublier que la grande série produit A, mieux évaluée, devient un peu plus compétitive (62,42 € au lieu de 73 €)."
        },
        {
          "type": "h3",
          "text": "4.2 Limites, coût et complexité de mise en œuvre"
        },
        {
          "type": "p",
          "text": "L'engouement des années 1990 pour l'ABC a été suivi d'un examen plus lucide de ses limites, qui tiennent largement au coût et à la complexité de la démarche."
        },
        {
          "type": "table",
          "headers": [
            "**Limite**",
            "**Explication**"
          ],
          "rows": [
            [
              "Notion d'activité ambiguë",
              "Le découpage en activités n'est pas normalisé : deux entreprises « en ABC » peuvent faire des choses très différentes."
            ],
            [
              "Complexité / « usine à gaz »",
              "Trop d'activités et d'inducteurs rendent le modèle illisible et coûteux ; trop peu le rendent grossier. Un arbitrage s'impose."
            ],
            [
              "Coût de mise en œuvre",
              "Entretiens, cartographie, paramétrage : la démarche est longue et onéreuse (atténuée par le numérique)."
            ],
            [
              "Difficulté d'actualisation",
              "La carte des activités doit être tenue à jour, sous peine d'obsolescence."
            ],
            [
              "Frein humain",
              "La mise en place est vécue comme une remise en cause des compétences et du pouvoir ; elle suppose l'adhésion du personnel."
            ],
            [
              "Dissociation des responsabilités",
              "Le découpage par activités ne coïncide plus avec les centres de responsabilité, ce qui complique le suivi budgétaire."
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "REMARQUE — « Retour aux sources » ?",
          "text": "La similitude des procédés de calcul fait dire à certains que l'ABC est un simple « retour aux sources » des sections homogènes. C'est oublier deux apports propres : la logique de causalité des inducteurs (et non d'imputation), et l'ouverture sur la transversalité et l'ABM. La parenté est calculatoire ; la rupture est conceptuelle."
        },
        {
          "type": "h3",
          "text": "4.3 Choisir la méthode selon le contexte"
        },
        {
          "type": "p",
          "text": "La sophistication n'est une qualité que si elle améliore réellement la décision. Le tableau suivant synthétise la confrontation et guide le choix."
        },
        {
          "type": "image",
          "src": "/figures/dcg-ue11-methode-abc/09.png",
          "alt": "4. Critiquer : ABC vs centres d'analyse",
          "width": 1440,
          "height": 460,
          "caption": "Deux logiques de répartition des charges indirectes"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Centres d'analyse**",
            "**Méthode ABC**"
          ],
          "rows": [
            [
              "Découpage",
              "Fonctionnel (services)",
              "Par activités (transversal)"
            ],
            [
              "Clé de répartition",
              "Unité d'œuvre (souvent volumique)",
              "Inducteur (logique causale)"
            ],
            [
              "Logique",
              "Imputation",
              "Causalité"
            ],
            [
              "Vocabulaire",
              "Précis, normalisé (PCG)",
              "Issu de la stratégie, non normalisé"
            ],
            [
              "Lien avec les responsabilités",
              "Coïncide avec les centres de responsabilité",
              "Dissocié (découpage stratégique)"
            ],
            [
              "Coût de mise en œuvre",
              "Faible",
              "Élevé (atténué par le numérique)"
            ],
            [
              "Pertinence",
              "Indirects faibles, production standardisée",
              "Indirects élevés, production diversifiée"
            ],
            [
              "Prolongement",
              "—",
              "ABM (pilotage par les activités)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Conclusion du choix.**Chez Méca-Précision, charges indirectes élevées (18,9 M€) et production très hétérogène (grande série standard vs petite série personnalisée) réunissent exactement les conditions où l'ABC apporte le plus. À l'inverse, une entreprise mono-produit à indirects faibles n'aurait aucun intérêt à supporter le coût d'un tel modèle : les centres d'analyse suffiraient."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "POINT EXAMEN — À retenir — Partie 4 (Critiquer)",
          "text": "Apports ABC : causalité, transversalité, ouverture ABM ; coûts plus justes si indirects élevés.\nChez l’entreprise : la classique surévaluait le produit A (− 10,58 €) et sous-évaluait le produit B (+ 169,33 €).\nLimites : ambiguïté, complexité, coût, actualisation, frein humain, dissociation des responsabilités.\nChoisir selon le contexte : l'ABC n'est pertinente que si elle améliore la décision."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Application récapitulative corrigée**"
        },
        {
          "type": "p",
          "text": "Cette application de synthèse mobilise les cinq étapes du calcul, la comparaison avec les centres d'analyse et l'interprétation pour la décision. La solution détaillée est fournie immédiatement après l'énoncé."
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "APPLICATION 3 — Lancement d’un produit en série courte (synthèse ABC)",
          "text": "L’entreprise envisage un produit haut de gamme en série très courte, le produit C, vendu 300 €. Production envisagée : 2 000 unités. Charges directes unitaires : 70 €. Consommation d'heures-machine : 1,5 h/u.\nConsommations d'inducteurs prévues : 300 commandes, 500 lots, 600 contrôles. Les coûts d'inducteurs de l'atelier sont inchangés (approvisionnement 600 €/commande ; lancement 1 000 €/lot ; usinage 40 €/heure-machine ; contrôle 700 €/contrôle ; taux horaire classique 70 €/h).\n**Travail à faire : (1) Calculer le coût de revient unitaire du produit C en méthode ABC. (2) Le comparer au coût en centres d'analyse (UO heure-machine). (3) Conclure sur la marge et conseiller le dirigeant.**"
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 1 : coût de revient ABC"
        },
        {
          "type": "p",
          "text": "On impute à la pièce C le coût des inducteurs qu'elle consomme (étape 4), puis on ajoute les charges directes (étape 5)."
        },
        {
          "type": "table",
          "headers": [
            "**Activité (coût d'inducteur)**",
            "**Consommation**",
            "**Coût imputé**"
          ],
          "rows": [
            [
              "Approvisionnement (600 €)",
              "300 commandes",
              "300 × 600 = 180 000 €"
            ],
            [
              "Lancement (1 000 €)",
              "500 lots",
              "500 × 1 000 = 500 000 €"
            ],
            [
              "Usinage (40 €)",
              "2 000 × 1,5 = 3 000 h",
              "3 000 × 40 = 120 000 €"
            ],
            [
              "Contrôle qualité (700 €)",
              "600 contrôles",
              "600 × 700 = 420 000 €"
            ],
            [
              "Total charges indirectes",
              "—",
              "1 220 000 €"
            ]
          ]
        },
        {
          "type": "table",
          "headers": [
            "**Élément**",
            "**Calcul**",
            "**Montant unitaire**"
          ],
          "rows": [
            [
              "Charges indirectes unitaires",
              "",
              "610,00 €"
            ],
            [
              "Charges directes",
              "énoncé",
              "70,00 €"
            ],
            [
              "Coût de revient unitaire ABC",
              "610 + 70",
              "680,00 €"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 2 : comparaison avec les centres d'analyse"
        },
        {
          "type": "p",
          "text": "En méthode classique, seule l'heure-machine sert de clé (taux 70 €/h)."
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Calcul**",
            "**Coût de revient unitaire**"
          ],
          "rows": [
            [
              "Centres d'analyse",
              "70 + 70 × 1,5",
              "175,00 €"
            ],
            [
              "ABC",
              "70 + 610",
              "680,00 €"
            ],
            [
              "Écart (ABC − classique)",
              "680 − 175",
              "+ 505,00 €"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Corrigé — Question 3 : marge et conseil au dirigeant"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Prix de vente − coût de revient**",
            "**Marge unitaire**"
          ],
          "rows": [
            [
              "Centres d'analyse",
              "300 − 175",
              "+ 125,00 €"
            ],
            [
              "ABC",
              "300 − 680",
              "− 380,00 €"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Conclusion rédigée (écrit argumenté attendu à l'examen)",
          "text": "La méthode des centres d'analyse présente le produit C comme très rentable (+ 125 € par unité), car son unique clé volumique — l'heure-machine — ne capte pas la complexité de gestion d'une série très courte. La méthode ABC révèle au contraire un coût de revient de 680 €, supérieur au prix de vente : chaque produit vendu ferait perdre 380 €.\nL'explication tient au profil de consommation : avec seulement 2 000 unités mais 500 lots et 600 contrôles, le produit C déclenche un volume d'activités sans rapport avec son faible tonnage. Le coût des activités de déclenchement (1 100 000 € sur 1 220 000 €) est massif rapporté à 2 000 unités.\nConseil. En l'état, le lancement n'est pas viable : il faudrait soit relever fortement le prix, soit revoir le processus (regrouper les lots, réduire le nombre de contrôles unitaires, mutualiser les approvisionnements) pour abaisser les inducteurs. La décision finale intégrera aussi la dimension stratégique (image, gamme), mais elle doit partir du coût réel — celui que seule l'ABC met en évidence."
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Pièges de cette application",
          "text": "Imputer l'usinage sur le volume produit (2 000) au lieu des heures-machine (3 000) : bien utiliser l'inducteur réel.\nOublier d'ajouter les 70 € de charges directes au coût indirect.\nConclure mécaniquement à l'abandon sans nuancer (rôle de gamme, leviers d'optimisation des inducteurs)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Synthèse et fiche de révision**"
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "RÉFLEXES & PONTS — au-delà du calcul",
          "text": "• Logique en cascade : ressources → activités → inducteurs → objets de coût. Principe : les activités consomment les ressources, les produits consomment les activités.\n• Inducteur de coût ≠ unité d'œuvre : l'inducteur traduit la cause de la consommation (nombre de lots, de commandes, de réglages), pas seulement le volume produit.\n• Apport central : l'ABC corrige le subventionnement croisé du coût complet — les petites séries et produits complexes, sous-évalués en coûts complets, sont remis à leur vrai coût.\n• Regrouper les activités partageant le même inducteur (centres de regroupement) ; ne pas multiplier les inducteurs inutilement.\n• Pont → Ch05 (méthode des centres) et Ch17 (le coût cible s'appuie sur l'ABC pour l'analyse de la valeur)."
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
              "Activité",
              "Tâches coordonnées consommant des ressources",
              "Base du calcul ABC",
              "Découpage non normalisé"
            ],
            [
              "Inducteur",
              "Mesure causale de la consommation d'une activité",
              "Imputer le coût aux objets selon la cause",
              "Choix parfois délicat"
            ],
            [
              "Subventionnement croisé",
              "Sur/sous-évaluation réciproque de coûts",
              "Révèle les distorsions des UO volumiques",
              "— (défaut révélé)"
            ],
            [
              "Centre de regroupement",
              "Activités à inducteur commun regroupées",
              "Allège le modèle",
              "Risque de simplification"
            ],
            [
              "ABM",
              "Pilotage du rapport valeur / coût des activités",
              "Optimiser processus et décisions",
              "Démarche exigeante"
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
          "text": "**Relations à connaître**"
        },
        {
          "type": "h3",
          "text": "Pièges à éviter"
        },
        {
          "type": "callout",
          "variant": "warning",
          "title": "ERREURS FRÉQUENTES — Pièges classiques & conseils méthodologiques",
          "text": "Garder une unité d'œuvre volumique là où un inducteur de déclenchement s'impose.\nConfondre le coût d'un lot avec un coût par produit (le ventiler par le nombre de lots).\nOublier d'ajouter les charges directes au coût de revient final.\nPrésenter l'ABC comme « supérieure » dans l'absolu : elle n'est pertinente que selon le contexte.\nConclure trop vite à l'abandon d'un produit déficitaire sans analyser les leviers (inducteurs) ni la dimension stratégique."
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
