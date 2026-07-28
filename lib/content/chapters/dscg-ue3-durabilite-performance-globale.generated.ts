// Généré par scripts/convert-docx.mjs depuis 08_Durabilite_performance_globale.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-durabilite-performance-globale",
  "level": "DSCG",
  "ue": "UE3",
  "number": 8,
  "title": "Le pilotage stratégique de la durabilité et de la performance globale",
  "description": "",
  "durationMin": 40,
  "sections": [
    {
      "id": "note-de-conformite-au-referentiel-a-lire-avant-le-chapitre",
      "title": "Note de conformité au référentiel (à lire avant le chapitre)",
      "blocks": [
        {
          "type": "p",
          "text": "Conformément à la méthodologie de ce manuel, cette note ouvre le chapitre et signale les contenus repris, adaptés ou créés."
        },
        {
          "type": "p",
          "text": "**Rattachement au référentiel officiel.** Ce chapitre clôt la **Partie 3** et l'ouvrage. Il traite le volet **durabilité et performance globale** : l'intégration des enjeux environnementaux, sociaux et de gouvernance (ESG) dans les systèmes de pilotage. Les **compétences** attendues portent sur la capacité à appréhender la notion de performance globale, à analyser les parties prenantes et la création de valeur durable, à mobiliser les critères ESG et la double matérialité, à situer le reporting de durabilité (CSRD, normes ESRS) et à concevoir des outils de pilotage de la performance durable. Les **savoirs associés** sont : l'évolution du concept de performance (du financier au global) ; la théorie des parties prenantes ; la valeur partagée ; les critères ESG ; la double matérialité ; la CSRD et les ESRS ; le bilan carbone et les indicateurs environnementaux ; le rôle du contrôle de gestion dans la transition durable."
        },
        {
          "type": "p",
          "text": "**Articulation avec l'ensemble du programme.** Ce chapitre est un **point de convergence** de tout l'ouvrage. Il prolonge la stratégie (Partie 1, dont il élargit la finalité au-delà du financier), mobilise les tableaux de bord et le Balanced Scorecard (2.3 et Partie 3), approfondit le volet social esquissé au chapitre du contrôle de gestion sociale (2.6) et la double matérialité introduite au chapitre du management des risques (2.5), et complète la gestion budgétaire (chapitre précédent) par un reporting non financier. Il constitue ainsi la **synthèse contemporaine** du pilotage de la performance."
        },
        {
          "type": "p",
          "text": "**Avertissement sur les illustrations d'entreprises (§10).** Les cas (Schneider Electric, Danone, Unilever, Patagonia, Michelin) sont des illustrations pédagogiques simplifiées, fondées sur des éléments de notoriété publique ; ils ne constituent pas une analyse vérifiée et servent de supports d'apprentissage."
        },
        {
          "type": "p",
          "text": "**Note sur les références réglementaires.** La CSRD et les normes ESRS constituent un cadre récent et évolutif (calendrier d'application progressif, ajustements en cours au niveau européen). Le chapitre en présente les principes et l'architecture à visée pédagogique ; pour un sujet d'examen, il convient de vérifier l'état du droit à la date de l'épreuve."
        },
        {
          "type": "p",
          "text": "**Origine des contenus** (repris / adaptés / créés) :"
        },
        {
          "type": "table",
          "headers": [
            "**Bloc du chapitre**",
            "**Statut**",
            "**Origine**"
          ],
          "rows": [
            [
              "Théorie et cartographie des parties prenantes",
              "**Repris-adapté**",
              "Ancien cours (Cours 1, gouvernance) ; Freeman"
            ],
            [
              "Performance globale, création de valeur",
              "**Repris-adapté**",
              "Ancien cours ; Kaplan & Norton, Elkington"
            ],
            [
              "Externalités, finalités non financières",
              "**Repris-adapté**",
              "Ancien cours (Cours 2)"
            ],
            [
              "Critères ESG et indicateurs",
              "**Créé / complété**",
              "Lien chapitres 2.5 et 2.6"
            ],
            [
              "Double matérialité",
              "**Créé / complété**",
              "Lien chapitre 2.5 ; cadre CSRD"
            ],
            [
              "CSRD et normes ESRS",
              "**Créé**",
              "Cadre réglementaire européen"
            ],
            [
              "Bilan carbone (scopes 1/2/3)",
              "**Créé**",
              "Méthodologie GHG Protocol"
            ],
            [
              "Contrôle de gestion durable, BSC durable",
              "**Créé**",
              "Kaplan & Norton ; lien Partie 3"
            ],
            [
              "Digitalisation, IA et durabilité",
              "**Créé**",
              "Ouverture contemporaine"
            ],
            [
              "Cas d'entreprises",
              "**Créé**",
              "Illustrations (voir avertissement)"
            ]
          ]
        }
      ]
    },
    {
      "id": "1-introduction-generale",
      "title": "1. Introduction générale",
      "blocks": [
        {
          "type": "h3",
          "text": "1.1 Les limites de la vision financière traditionnelle"
        },
        {
          "type": "p",
          "text": "Pendant des décennies, la performance d'une entreprise s'est mesurée à l'aune quasi exclusive du **résultat financier** : profit, rentabilité, valeur pour l'actionnaire. Cette vision, longtemps dominante (illustrée par la célèbre formule de Milton Friedman selon laquelle « la responsabilité sociale de l'entreprise est d'accroître ses profits »), montre aujourd'hui ses limites. Elle privilégie le **court terme** (le résultat trimestriel ou annuel) au détriment de la valeur de long terme. Elle ignore les **externalités** — ces effets de l'activité non pris en compte par le marché et donc « gratuits » pour l'entreprise mais coûteux pour la société (pollution, épuisement des ressources, atteintes sociales). L'ancien cours le notait déjà : au-delà du résultat financier, certaines organisations poursuivent des « externalités » positives, et le système de pilotage doit s'adapter à des objectifs « financiers ou non financiers ». Ce débat oppose deux conceptions de la finalité de l'entreprise. La vision **actionnariale** (*shareholder*), héritée de Friedman, assigne à l'entreprise la seule maximisation de la valeur pour l'actionnaire, en supposant que le marché et l'État se chargent du reste. La vision **partenariale** (*stakeholder*), portée par Freeman, considère que l'entreprise a des responsabilités envers l'ensemble de ses parties prenantes et la société. Ce débat, longtemps théorique, a été tranché en pratique par l'évolution réglementaire (CSRD) et par les attentes du marché lui-même (les investisseurs intègrent désormais l'ESG) : la performance globale n'est plus une option militante mais une exigence de fait. La crise climatique, la raréfaction des ressources et la montée des inégalités ont rendu cette cécité aux externalités intenable."
        },
        {
          "type": "h3",
          "text": "1.2 Les attentes croissantes des parties prenantes"
        },
        {
          "type": "p",
          "text": "Cette évolution est portée par la pression des **parties prenantes**, dont les attentes dépassent le seul rendement financier. Les **investisseurs** intègrent massivement les critères ESG dans leurs décisions (montée de la finance durable, fonds ISR). Les **clients** et **consommateurs** attendent des produits responsables et sanctionnent les comportements jugés contraires à l'éthique. Les **salariés**, en particulier les jeunes générations, recherchent du sens et un employeur responsable. Les **régulateurs** imposent une transparence extra-financière croissante (CSRD en Europe). La **société civile** (ONG, médias) scrute et dénonce. L'entreprise est ainsi sommée de rendre des comptes sur sa contribution — positive ou négative — au bien commun."
        },
        {
          "type": "h3",
          "text": "1.3 L'émergence du développement durable et la transformation du pilotage"
        },
        {
          "type": "p",
          "text": "Le concept de **développement durable**, défini par le rapport Brundtland (1987) comme « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs », a progressivement infusé le monde de l'entreprise. Il s'est traduit par la **responsabilité sociétale des entreprises (RSE)**, puis par la formalisation des critères **ESG** (environnement, social, gouvernance) et l'essor du **reporting de durabilité**. Cette évolution transforme en profondeur les **systèmes de pilotage** : il ne s'agit plus seulement de mesurer le profit, mais la **performance globale** — économique, sociale et environnementale. Le contrôle de gestion, instrument historique de la mesure de la performance, est au cœur de cette transformation."
        },
        {
          "type": "h3",
          "text": "1.4 Pourquoi la performance économique seule ne suffit plus, et problématique"
        },
        {
          "type": "p",
          "text": "La performance économique demeure nécessaire — une entreprise non rentable disparaît — mais elle n'est plus **suffisante**. D'abord parce qu'une partie de la performance financière de court terme peut être obtenue en dégradant le capital naturel, humain ou social, créant une dette future (une « performance » illusoire). Ensuite parce que la performance durable est devenue une **condition de la performance économique de long terme** : une entreprise qui néglige ses impacts s'expose à des risques (réglementaires, réputationnels, physiques) et se prive d'opportunités (innovation, attractivité, accès au capital). Performance économique et performance durable, loin de s'opposer, se conditionnent mutuellement sur le long terme."
        },
        {
          "type": "p",
          "text": "**Problématique centrale.** Comment les organisations dépassent-elles la mesure financière traditionnelle pour piloter une **performance globale** intégrant les dimensions économique, sociale, environnementale et de gouvernance ; comment les outils du contrôle de gestion — indicateurs ESG, double matérialité, reporting CSRD, bilan carbone, tableaux de bord durables — permettent-ils de mesurer et de créer une valeur durable au service de l'ensemble des parties prenantes ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en retraçant le passage de la performance financière à la **performance globale** (§2), en mobilisant la théorie des **parties prenantes** et la **valeur partagée** (§3), en détaillant les critères **ESG** (§4), la **double matérialité** (§5), la **CSRD et les ESRS** (§6), le **rôle du contrôle de gestion durable** (§7), la mesure de l'**empreinte environnementale** (§8), l'apport du **numérique et de l'IA** (§9), des **cas** (§10), les **approfondissements DSCG** (§11), la synthèse (§12) et la fiche de révision (§13). Une **annexe de fin d'ouvrage** clôt le manuel."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir la performance globale et ses dimensions ; connaître la théorie des parties prenantes et la valeur partagée ; maîtriser les critères ESG ; comprendre la double matérialité ; connaître la CSRD et l'architecture des ESRS ; connaître le bilan carbone (scopes 1, 2, 3) ; connaître les auteurs (Freeman, Porter & Kramer, Kaplan & Norton, Elkington)."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Cartographier les parties prenantes et analyser leurs attentes ; construire une matrice de double matérialité ; construire un radar ESG et un tableau de bord de durabilité ; interpréter un bilan carbone ; relier objectifs ESG et pilotage stratégique (BSC durable)."
        },
        {
          "type": "p",
          "text": "**Compétences.** Apprécier la performance globale d'une organisation ; analyser une démarche de durabilité ; concevoir des outils de pilotage ESG ; situer un dispositif de reporting de durabilité ; relier durabilité, stratégie et création de valeur."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (Partie 3).** Appréhender la performance globale ; mobiliser les critères ESG et la double matérialité ; situer la CSRD et les ESRS ; concevoir des outils de pilotage de la performance durable."
        }
      ]
    },
    {
      "id": "2-de-la-performance-financiere-a-la-performance-globale",
      "title": "2. De la performance financière à la performance globale",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Les limites des indicateurs financiers"
        },
        {
          "type": "p",
          "text": "*Statut : repris-adapté ; Kaplan & Norton, Freeman, Porter, Elkington.*"
        },
        {
          "type": "p",
          "text": "Les indicateurs purement financiers, longtemps souverains, présentent trois limites majeures pour piloter la performance contemporaine. La **vision de court terme** : le résultat et la rentabilité mesurent le passé récent et incitent au court-termisme, au détriment des investissements de long terme (R&D, capital humain, transition écologique). La **création de valeur limitée** : ils ne captent que la valeur captée par l'actionnaire, ignorant la valeur créée (ou détruite) pour les autres parties prenantes. Les **externalités ignorées** : ils n'enregistrent pas les coûts environnementaux et sociaux que l'entreprise fait peser sur la collectivité — la pollution, l'épuisement des ressources, les atteintes à la santé n'apparaissent nulle part dans le compte de résultat classique."
        },
        {
          "type": "p",
          "text": "Plusieurs auteurs ont nourri ce dépassement. **Kaplan et Norton**, avec le **Balanced Scorecard** (1992), ont les premiers proposé d'équilibrer les indicateurs financiers par des indicateurs non financiers (clients, processus, apprentissage), introduisant l'idée d'une performance multidimensionnelle. **Edward Freeman** a fondé la **théorie des parties prenantes** (1984), élargissant la finalité de l'entreprise au-delà des seuls actionnaires. **Michael Porter** (avec Mark Kramer) a théorisé la **valeur partagée**, montrant que résoudre des problèmes sociétaux peut être source d'avantage concurrentiel. **John Elkington** a forgé en 1994 le concept de **triple bottom line** (triple résultat : *people, planet, profit*), matrice conceptuelle de la performance globale."
        },
        {
          "type": "h3",
          "text": "2.2 La notion de performance globale"
        },
        {
          "type": "p",
          "text": "*Statut : repris-adapté.*"
        },
        {
          "type": "p",
          "text": "La **performance globale** désigne l'intégration et l'équilibre de plusieurs dimensions de la performance, au-delà de la seule dimension économique. Elle se décline classiquement en quatre dimensions interdépendantes. La **performance économique** (la création de richesse, la rentabilité, la pérennité financière) demeure le socle — sans elle, l'entreprise ne survit pas. La **performance sociale** (conditions de travail, développement des compétences, équité, santé-sécurité, dialogue social) concerne le capital humain et les relations sociales internes (lien chapitre 2.6). La **performance environnementale** (réduction des émissions, des consommations, des déchets, préservation de la biodiversité) concerne l'impact écologique. La **performance sociétale** (contribution au territoire, éthique, relations avec les communautés et la société) concerne l'insertion de l'entreprise dans son environnement large. Ces dimensions reprennent et élargissent le *triple bottom line* d'Elkington (people, planet, profit), auquel on ajoute souvent la gouvernance."
        },
        {
          "type": "p",
          "text": "L'enjeu de la performance globale n'est pas de juxtaposer ces dimensions mais de les **articuler** : montrer qu'elles se renforcent (un investissement environnemental réduit les coûts et les risques, une bonne performance sociale nourrit la performance économique) et arbitrer lorsqu'elles entrent en tension (un gain économique de court terme au prix d'un impact environnemental). C'est tout le défi du pilotage durable."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Les dimensions de la performance globale *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension**",
            "**Objectifs**",
            "**Indicateurs types**",
            "**Parties prenantes concernées**"
          ],
          "rows": [
            [
              "**Économique**",
              "Rentabilité, pérennité, création de valeur",
              "Résultat, ROCE, valeur ajoutée, cash-flow",
              "Actionnaires, créanciers"
            ],
            [
              "**Sociale**",
              "Conditions de travail, compétences, équité",
              "Turnover, absentéisme, formation, index égalité",
              "Salariés, représentants"
            ],
            [
              "**Environnementale**",
              "Réduire émissions, consommations, déchets",
              "Bilan carbone, intensité énergétique, circularité",
              "Société, régulateurs, futures générations"
            ],
            [
              "**Sociétale**",
              "Éthique, territoire, communautés",
              "Achats responsables, impact local, conformité",
              "Communautés, ONG, pouvoirs publics"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Le modèle de performance globale *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma articule les dimensions de la performance globale autour de leur intersection — la **création de valeur durable**, qui ne se situe ni dans le seul économique, ni dans le seul environnemental ou social, mais dans leur **conjonction**. Sa lecture déplace le regard : la performance n'est plus un point (le profit) mais un **équilibre** entre dimensions parfois convergentes, parfois en tension. Le rôle du pilotage durable est précisément de gérer cet équilibre : maximiser les zones de convergence (où économique et durable se renforcent) et arbitrer explicitement les tensions, plutôt que de les ignorer. Ce modèle fonde toute la démarche du chapitre."
        },
        {
          "type": "p",
          "text": "**Transition.** Cette performance élargie se comprend à la lumière de la théorie des parties prenantes."
        }
      ]
    },
    {
      "id": "3-les-parties-prenantes-et-la-creation-de-valeur-durable",
      "title": "3. Les parties prenantes et la création de valeur durable",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : repris-adapté (Cours 1, gouvernance) ; Freeman, Clarkson, Mitchell, Porter & Kramer.*"
        },
        {
          "type": "h3",
          "text": "3.1 La théorie des parties prenantes"
        },
        {
          "type": "p",
          "text": "La **théorie des parties prenantes** (*stakeholder theory*), fondée par **Edward Freeman** (1984), constitue le socle conceptuel de la performance durable. Elle pose qu'une partie prenante est « tout groupe ou individu qui peut affecter ou être affecté par la réalisation des objectifs de l'organisation ». L'entreprise n'est donc plus responsable devant les seuls actionnaires (*shareholders*), mais devant l'ensemble de ses parties prenantes (*stakeholders*) : salariés, clients, fournisseurs, créanciers, pouvoirs publics, communautés, environnement. Cette vision élargie de la responsabilité fonde la légitimité du reporting de durabilité : rendre des comptes à tous ceux qui sont affectés."
        },
        {
          "type": "p",
          "text": "Plusieurs auteurs ont affiné cette théorie. **Max Clarkson** distingue les parties prenantes **primaires** (essentielles à la survie de l'entreprise : actionnaires, salariés, clients, fournisseurs) des parties prenantes **secondaires** (qui influencent ou sont influencées sans être vitales : médias, ONG, communautés). **Ronald Mitchell** (avec Agle et Wood, 1997) propose une typologie pour **hiérarchiser** les parties prenantes selon trois attributs : le **pouvoir** (capacité d'influence), la **légitimité** (du lien avec l'entreprise) et l'**urgence** (du caractère pressant de leurs attentes). Une partie prenante cumulant les trois attributs (« définitive ») est prioritaire ; celles n'en ayant qu'un (« latente ») le sont moins. Cette typologie aide le dirigeant à allouer son attention entre des attentes multiples et parfois contradictoires."
        },
        {
          "type": "h3",
          "text": "3.2 La création de valeur partagée"
        },
        {
          "type": "p",
          "text": "*Statut : créé ; Porter & Kramer.*"
        },
        {
          "type": "p",
          "text": "**Michael Porter et Mark Kramer** ont proposé en 2011 le concept de **création de valeur partagée** (*creating shared value*, CSV), qui dépasse la RSE classique. Leur thèse : l'entreprise peut créer simultanément de la valeur économique et de la valeur sociétale, non par philanthropie, mais en intégrant les enjeux sociaux au cœur de sa stratégie. Résoudre un problème de société (réduire la consommation d'eau, améliorer la nutrition, former une main-d'œuvre) peut devenir source d'**avantage concurrentiel** : économies de coûts, nouveaux marchés, écosystème renforcé. La valeur partagée déplace ainsi la RSE de la périphérie (mécénat, communication) vers le cœur stratégique (modèle d'affaires). Cette approche, bien que critiquée (elle suppose une convergence pas toujours réelle entre intérêt privé et bien commun), a puissamment légitimé l'intégration de la durabilité dans la stratégie."
        },
        {
          "type": "h4",
          "text": "Cartographie 3 — Cartographie des parties prenantes *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La cartographie positionne les parties prenantes selon leur **pouvoir** (influence sur l'entreprise) et leur **intérêt** (degré de préoccupation par l'activité), inspirée de la matrice de Mendelow et de la typologie de Mitchell. Sa lecture oriente la stratégie relationnelle : les parties prenantes à fort pouvoir et fort intérêt (actionnaires, régulateurs clés) doivent être **gérées étroitement** ; celles à fort pouvoir mais faible intérêt, **satisfaites** ; celles à fort intérêt mais faible pouvoir (ONG, communautés), **informées et associées** ; les autres, **surveillées**. Cette hiérarchisation est essentielle car l'entreprise ne peut répondre également à toutes les attentes : elle doit prioriser sans négliger, sous peine de voir une partie prenante « latente » devenir « définitive » (une ONG qui mobilise médias et opinion gagne soudain pouvoir et urgence)."
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Analyse des attentes des parties prenantes *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Partie prenante**",
            "**Attentes principales**",
            "**Enjeu pour l'entreprise**",
            "**Indicateur de suivi**"
          ],
          "rows": [
            [
              "**Actionnaires / investisseurs**",
              "Rentabilité, durabilité, transparence ESG",
              "Accès au capital, valorisation",
              "ROCE, notation ESG"
            ],
            [
              "**Salariés**",
              "Conditions, sens, équité, employabilité",
              "Engagement, attractivité",
              "Turnover, engagement, index égalité"
            ],
            [
              "**Clients**",
              "Produits responsables, qualité, éthique",
              "Fidélité, réputation",
              "Satisfaction, part de produits durables"
            ],
            [
              "**Fournisseurs**",
              "Relations équitables, durabilité partagée",
              "Résilience de la chaîne",
              "Achats responsables, audits"
            ],
            [
              "**Régulateurs / pouvoirs publics**",
              "Conformité, transparence (CSRD)",
              "Licence à opérer, risque juridique",
              "Conformité, reporting"
            ],
            [
              "**Société civile / ONG**",
              "Impact positif, responsabilité",
              "Réputation, légitimité",
              "Empreinte, controverses"
            ],
            [
              "**Environnement** *(pp. silencieuse)*",
              "Préservation, faible impact",
              "Risques physiques et de transition",
              "Bilan carbone, biodiversité"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** Ces attentes se structurent autour de trois familles de critères : les critères ESG."
        }
      ]
    },
    {
      "id": "4-les-criteres-esg",
      "title": "4. Les critères ESG",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé / complété ; lien chapitres 2.5 (risques) et 2.6 (social).*"
        },
        {
          "type": "p",
          "text": "Les critères **ESG** (Environnement, Social, Gouvernance) constituent le cadre de référence international pour structurer et évaluer la performance extra-financière. Ils déclinent en trois familles les enjeux de durabilité et fournissent la grille de lecture des investisseurs, des agences de notation et du reporting réglementaire."
        },
        {
          "type": "h3",
          "text": "4.1 La dimension environnementale (E)"
        },
        {
          "type": "p",
          "text": "La dimension environnementale couvre l'impact de l'entreprise sur les écosystèmes. Le **changement climatique** en est l'enjeu phare : les **émissions de gaz à effet de serre** (mesurées par le bilan carbone, §8), la trajectoire de décarbonation, l'alignement sur les objectifs climatiques (accord de Paris). L'**énergie** : consommation, efficacité énergétique, part d'énergies renouvelables. La **gestion des ressources** : consommation d'eau, de matières, économie circulaire (réduire, réutiliser, recycler). Les **déchets** et la **pollution** : production, valorisation, rejets. La **biodiversité** : impact sur les écosystèmes, artificialisation des sols. Ces enjeux représentent à la fois des **risques** (physiques, réglementaires, lien chapitre 2.5) et des **opportunités** (innovation, efficience, nouveaux marchés)."
        },
        {
          "type": "h3",
          "text": "4.2 La dimension sociale (S)"
        },
        {
          "type": "p",
          "text": "La dimension sociale couvre les impacts sur les personnes — internes et externes. En interne, elle prolonge directement le contrôle de gestion sociale (chapitre 2.6) : conditions de travail, santé-sécurité, **diversité** et **inclusion**, **égalité** professionnelle, **formation** et employabilité, dialogue social. En externe, elle couvre les impacts sur la chaîne de valeur (conditions de travail des fournisseurs, devoir de vigilance), sur les consommateurs (sécurité des produits) et sur les communautés. Le « S » est souvent le plus difficile à mesurer et à comparer, faute d'indicateurs aussi standardisés que pour le carbone — mais la CSRD (norme ESRS S1) progresse en ce sens."
        },
        {
          "type": "h3",
          "text": "4.3 La dimension gouvernance (G)"
        },
        {
          "type": "p",
          "text": "La dimension gouvernance couvre la manière dont l'entreprise est dirigée et contrôlée — condition de crédibilité des deux autres dimensions. Elle inclut l'**éthique des affaires** (lutte contre la corruption, conduite responsable), la **transparence** (qualité de l'information, reporting), l'**indépendance** et la composition des organes de gouvernance (conseil d'administration, diversité, séparation des pouvoirs), la **conformité** (respect des lois et réglementations), la rémunération des dirigeants et sa cohérence avec la performance durable. Une gouvernance solide est le **fondement** : sans elle, les engagements environnementaux et sociaux restent déclaratifs. C'est pourquoi le « G » est parfois présenté comme le socle qui conditionne la crédibilité du « E » et du « S »."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Indicateurs ESG détaillés *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Pilier**",
            "**Enjeu**",
            "**Indicateurs types**",
            "**Cadre / référence**"
          ],
          "rows": [
            [
              "**E — Environnement**",
              "Climat",
              "Émissions GES (scopes 1/2/3), intensité carbone",
              "GHG Protocol, ESRS E1"
            ],
            [
              "",
              "Énergie",
              "Consommation, % renouvelable, efficacité",
              "ESRS E1"
            ],
            [
              "",
              "Ressources / circularité",
              "Eau, matières, taux de recyclage, déchets",
              "ESRS E3, E5"
            ],
            [
              "",
              "Biodiversité",
              "Surfaces, impact écosystèmes",
              "ESRS E4"
            ],
            [
              "**S — Social**",
              "Emploi",
              "Effectifs, turnover, formation",
              "ESRS S1"
            ],
            [
              "",
              "Égalité / diversité",
              "Index égalité F/H, % femmes cadres",
              "ESRS S1"
            ],
            [
              "",
              "Santé-sécurité",
              "Taux de fréquence/gravité des AT",
              "ESRS S1"
            ],
            [
              "",
              "Chaîne de valeur",
              "Audits fournisseurs, devoir de vigilance",
              "ESRS S2"
            ],
            [
              "**G — Gouvernance**",
              "Éthique",
              "Cas de corruption, formation éthique",
              "ESRS G1"
            ],
            [
              "",
              "Transparence",
              "Qualité du reporting, assurance",
              "ESRS G1"
            ],
            [
              "",
              "Indépendance",
              "% administrateurs indépendants, diversité du conseil",
              "Codes de gouvernance"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 4 — Profil ESG d'une organisation (radar) *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le radar ESG positionne l'organisation sur les trois piliers déclinés en sous-dimensions (climat, ressources, social interne, chaîne de valeur, éthique, transparence), en comparant le profil actuel à une cible ou à un référentiel sectoriel. Sa lecture révèle les **forces** et les **axes de progrès** : une entreprise peut exceller en gouvernance et en social mais accuser un retard environnemental (ou l'inverse). Le radar est un outil de diagnostic et de communication précieux — pour le pilotage interne (où investir l'effort ?) comme pour le dialogue avec les investisseurs (objectiver le profil ESG). Sa limite : il agrège des dimensions hétérogènes, et la note globale peut masquer une faiblesse critique sur un pilier — d'où l'importance de ne pas se contenter du score agrégé."
        },
        {
          "type": "p",
          "text": "**Transition.** Pour déterminer les enjeux ESG à piloter en priorité, un concept central s'impose : la double matérialité."
        }
      ]
    },
    {
      "id": "5-la-double-materialite",
      "title": "5. La double matérialité",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé / complété ; lien chapitre 2.5 ; cadre CSRD.*"
        },
        {
          "type": "h3",
          "text": "5.1 Les fondements conceptuels"
        },
        {
          "type": "p",
          "text": "La **double matérialité** est le concept central du reporting de durabilité européen (CSRD). La **matérialité** désigne le caractère significatif d'un enjeu — ce qui mérite d'être piloté et reporté. La double matérialité combine deux perspectives complémentaires, ce qui constitue son originalité et son exigence."
        },
        {
          "type": "p",
          "text": "La **matérialité financière** (perspective *outside-in*) considère la façon dont les enjeux de durabilité **affectent l'entreprise** : ses résultats, sa situation financière, sa valeur. Par exemple, le changement climatique fait peser des risques physiques (inondations, sécheresses) et de transition (réglementation carbone, évolution de la demande) sur l'entreprise. C'est la perspective traditionnelle de l'investisseur : en quoi la durabilité est-elle un risque ou une opportunité financière ?"
        },
        {
          "type": "p",
          "text": "La **matérialité d'impact** (perspective *inside-out*) considère, à l'inverse, la façon dont l'entreprise **affecte** la société et l'environnement, indépendamment des conséquences financières pour elle. Par exemple, les émissions de l'entreprise contribuent au changement climatique, que cela lui coûte ou non. C'est la perspective de la société et des parties prenantes : quel est l'impact de l'entreprise sur le monde ?"
        },
        {
          "type": "p",
          "text": "Un enjeu est **doublement matériel** s'il est significatif selon l'une **ou** l'autre perspective. Cette double exigence élargit considérablement le périmètre du reporting par rapport à la seule matérialité financière : une entreprise doit rendre compte de ses impacts même lorsqu'ils n'ont pas (encore) de conséquence financière pour elle."
        },
        {
          "type": "h3",
          "text": "5.2 L'analyse de double matérialité"
        },
        {
          "type": "p",
          "text": "L'analyse de double matérialité est l'exercice fondateur du reporting CSRD. Elle se déroule en trois temps. L'**identification** recense les enjeux de durabilité pertinents pour l'entreprise et son secteur (climat, eau, conditions de travail, éthique…), en dialoguant avec les parties prenantes. L'**évaluation** apprécie chaque enjeu selon les deux matérialités : son importance financière (ampleur du risque/opportunité, probabilité) et son importance d'impact (gravité, étendue, caractère irréversible de l'impact). La **hiérarchisation** classe les enjeux et identifie ceux qui sont matériels — ceux sur lesquels l'entreprise devra piloter et reporter. Cette analyse détermine le **contenu du rapport de durabilité** : on ne reporte pas tout, mais les enjeux matériels."
        },
        {
          "type": "h4",
          "text": "Matrice 5 — Matrice de double matérialité *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La matrice croise les deux axes — matérialité d'impact (en abscisse : impact de l'entreprise sur la société/environnement) et matérialité financière (en ordonnée : impact des enjeux sur l'entreprise) — et y positionne les enjeux de durabilité. Sa lecture identifie quatre zones. Les enjeux **doublement matériels** (en haut à droite : forts sur les deux axes, comme le climat pour une entreprise industrielle) sont prioritaires : ils doivent être pilotés et reportés en priorité. Les enjeux à forte matérialité **financière seule** (risque pour l'entreprise) relèvent du pilotage des risques (chapitre 2.5). Les enjeux à forte matérialité **d'impact seule** engagent la responsabilité de l'entreprise même sans enjeu financier immédiat. Les enjeux faibles sur les deux axes sont secondaires. La matrice est l'outil de **priorisation** qui fonde le rapport de durabilité et concentre l'effort de pilotage sur l'essentiel."
        },
        {
          "type": "h4",
          "text": "Exemple détaillé — application de la double matérialité"
        },
        {
          "type": "p",
          "text": "Considérons une entreprise agroalimentaire. L'analyse de double matérialité pourrait faire ressortir : l'**eau** comme enjeu doublement matériel (l'entreprise dépend de la ressource — matérialité financière — et son prélèvement affecte les territoires — matérialité d'impact) ; les **émissions carbone** comme doublement matérielles (risque réglementaire et de transition ; contribution au changement climatique) ; la **nutrition/santé** des produits comme enjeu d'impact majeur (santé publique) doublé d'un enjeu financier (réglementation, attentes consommateurs) ; les **conditions de travail agricoles** dans la chaîne d'approvisionnement comme enjeu d'impact fort. À l'inverse, certains enjeux génériques peuvent s'avérer peu matériels pour ce secteur. Cette analyse oriente le rapport de durabilité et le système de pilotage : l'entreprise construira des indicateurs et des objectifs sur l'eau, le carbone, la nutrition et la chaîne d'approvisionnement en priorité."
        },
        {
          "type": "p",
          "text": "**Transition.** Cette analyse s'inscrit dans le cadre réglementaire de la CSRD et des normes ESRS."
        }
      ]
    },
    {
      "id": "6-la-csrd-et-les-normes-esrs",
      "title": "6. La CSRD et les normes ESRS",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; cadre réglementaire européen (évolutif — voir note de conformité).*"
        },
        {
          "type": "h3",
          "text": "6.1 La présentation de la CSRD"
        },
        {
          "type": "p",
          "text": "La **CSRD** (*Corporate Sustainability Reporting Directive*) est la directive européenne sur le reporting de durabilité, qui renforce et remplace la précédente directive (NFRD). Son **contexte** : l'Union européenne, dans le cadre de son pacte vert (*Green Deal*), vise à réorienter les capitaux vers une économie durable, ce qui suppose une information extra-financière fiable, comparable et exhaustive. Ses **objectifs** : harmoniser et fiabiliser le reporting de durabilité (normes communes, vérification par un tiers), imposer la double matérialité, et faire de l'information de durabilité un élément aussi rigoureux que l'information financière. Les **entreprises concernées** : la CSRD élargit considérablement le périmètre par rapport à la NFRD, en l'étendant progressivement, selon un calendrier échelonné, aux grandes entreprises puis aux PME cotées, ainsi qu'à certaines entreprises non européennes ayant une activité significative dans l'UE. *(Le périmètre et le calendrier précis font l'objet d'ajustements au niveau européen : il convient de vérifier l'état du droit à la date de l'épreuve.)*"
        },
        {
          "type": "p",
          "text": "La CSRD marque un changement de nature du reporting extra-financier : d'un exercice souvent déclaratif et hétérogène, on passe à un reporting **normé, audité et intégré** à la gestion — ce qui place le contrôle de gestion en première ligne pour produire et fiabiliser les données."
        },
        {
          "type": "h3",
          "text": "6.2 Les normes ESRS"
        },
        {
          "type": "p",
          "text": "Les **ESRS** (*European Sustainability Reporting Standards*) sont les normes qui précisent le contenu du reporting CSRD. Élaborées par l'EFRAG, elles s'organisent en normes transversales (principes généraux, gouvernance de la durabilité, double matérialité) et en normes thématiques structurées selon les trois piliers ESG. Les **ESRS environnementales** couvrent le changement climatique (E1), la pollution (E2), l'eau et les ressources marines (E3), la biodiversité (E4), l'économie circulaire (E5). Les **ESRS sociales** couvrent les effectifs de l'entreprise (S1), les travailleurs de la chaîne de valeur (S2), les communautés affectées (S3) et les consommateurs (S4). La norme **ESRS gouvernance** (G1) couvre la conduite des affaires (éthique, anticorruption, relations fournisseurs). Le principe directeur est que l'entreprise reporte sur les normes correspondant à ses enjeux **matériels** (identifiés par l'analyse de double matérialité), selon une logique de pertinence."
        },
        {
          "type": "h4",
          "text": "Tableau 6 — Présentation synthétique des normes ESRS *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Catégorie**",
            "**Norme**",
            "**Enjeu couvert**"
          ],
          "rows": [
            [
              "**Transversales**",
              "ESRS 1 & 2",
              "Principes généraux, double matérialité, gouvernance de la durabilité"
            ],
            [
              "**Environnement**",
              "ESRS E1",
              "Changement climatique (émissions, énergie, transition)"
            ],
            [
              "",
              "ESRS E2",
              "Pollution"
            ],
            [
              "",
              "ESRS E3",
              "Eau et ressources marines"
            ],
            [
              "",
              "ESRS E4",
              "Biodiversité et écosystèmes"
            ],
            [
              "",
              "ESRS E5",
              "Économie circulaire, ressources, déchets"
            ],
            [
              "**Social**",
              "ESRS S1",
              "Effectifs de l'entreprise"
            ],
            [
              "",
              "ESRS S2",
              "Travailleurs de la chaîne de valeur"
            ],
            [
              "",
              "ESRS S3",
              "Communautés affectées"
            ],
            [
              "",
              "ESRS S4",
              "Consommateurs et utilisateurs finaux"
            ],
            [
              "**Gouvernance**",
              "ESRS G1",
              "Conduite des affaires (éthique, anticorruption)"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 6 — Architecture du reporting CSRD *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente l'architecture du reporting CSRD : en amont, l'**analyse de double matérialité** détermine les enjeux à reporter ; au centre, les **normes ESRS** (transversales et thématiques E/S/G) structurent l'information ; en aval, le **rapport de durabilité** intégré au rapport de gestion, soumis à une **vérification** par un tiers indépendant. Sa lecture met en évidence la logique d'ensemble : la double matérialité **filtre** (que reporter ?), les ESRS **normalisent** (comment reporter ?), l'audit **fiabilise** (l'information est-elle crédible ?). Cette chaîne fait du reporting de durabilité un dispositif aussi rigoureux que le reporting financier — et explique pourquoi il mobilise désormais le contrôle de gestion, garant de la fiabilité des données."
        },
        {
          "type": "p",
          "text": "**Transition.** Produire et piloter cette information durable redéfinit le rôle du contrôle de gestion."
        }
      ]
    },
    {
      "id": "7-le-role-du-controle-de-gestion-dans-la-durabilite",
      "title": "7. Le rôle du contrôle de gestion dans la durabilité",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; Kaplan & Norton ; lien Partie 3.*"
        },
        {
          "type": "h3",
          "text": "7.1 Le contrôle de gestion durable"
        },
        {
          "type": "p",
          "text": "La durabilité transforme le contrôle de gestion, qui étend son périmètre de la performance financière à la **performance globale**. Le **contrôle de gestion durable** (parfois nommé *sustainability controlling*) consiste à intégrer les dimensions ESG dans les outils traditionnels du pilotage : nouveaux **indicateurs** (carbone, énergie, diversité, éthique), **tableaux de bord ESG**, intégration d'**objectifs durables** dans la fixation des cibles et l'évaluation. Le contrôleur de gestion devient ainsi un acteur clé de la transition : il fiabilise les données extra-financières (avec la même rigueur que les données financières), construit les indicateurs, alimente le reporting CSRD et éclaire les arbitrages entre performance économique et durable. C'est une extension naturelle de son métier — mesurer pour piloter — à de nouveaux objets."
        },
        {
          "type": "p",
          "text": "Cette extension soulève des défis méthodologiques : mesurer le carbone ou l'impact social est plus complexe que mesurer un coût ; les données extra-financières sont souvent dispersées, hétérogènes, parfois qualitatives ; les horizons sont longs et les effets différés. Le contrôle de gestion durable mobilise donc de nouvelles compétences (méthodologies de mesure d'impact, normes ESRS) et de nouveaux outils (systèmes d'information ESG, §9)."
        },
        {
          "type": "h3",
          "text": "7.2 L'intégration dans le système de pilotage"
        },
        {
          "type": "p",
          "text": "*Statut : créé ; Kaplan & Norton.*"
        },
        {
          "type": "p",
          "text": "L'intégration de la durabilité dans le pilotage stratégique peut s'appuyer sur le **Balanced Scorecard durable** (ou *sustainability balanced scorecard*). Le BSC classique de Kaplan et Norton articule quatre perspectives (financière, clients, processus, apprentissage) en une chaîne de causalité. Le BSC durable l'enrichit, soit en ajoutant une **cinquième perspective** explicitement dédiée à l'environnement et à la société, soit en **intégrant** les enjeux ESG dans les quatre perspectives existantes (objectifs environnementaux dans les processus, sociaux dans l'apprentissage, etc.). L'intérêt est de **relier** les objectifs de durabilité à la stratégie et à la performance économique par des relations de cause à effet, évitant que l'ESG ne reste un domaine isolé. Le débat entre les deux approches — cinquième perspective dédiée ou intégration transversale — est instructif. Ajouter une perspective « société/environnement » distincte donne de la **visibilité** aux enjeux durables et un porteur clair, mais risque de les **isoler** du reste (un silo ESG). Les intégrer dans les quatre perspectives existantes ancre la durabilité au cœur de chaque dimension (la réduction du carbone devient un objectif de processus, la formation à la durabilité un objectif d'apprentissage), au prix d'une moindre visibilité. La meilleure approche dépend de la maturité de l'organisation : la perspective dédiée peut être utile au démarrage (signal fort), l'intégration transversale étant l'horizon d'une durabilité pleinement incorporée à la stratégie. Dans tous les cas, l'enjeu est d'établir les **relations de cause à effet** : montrer, par exemple, comment l'investissement dans la décarbonation (apprentissage/processus) réduit les coûts et les risques (financier) et renforce l'image (clients) — chaîne de causalité qui légitime l'effort durable auprès des décideurs. Les **KPI ESG** (indicateurs clés de durabilité) sont ainsi intégrés au pilotage stratégique, suivis au même titre que les indicateurs financiers, et déclinés en objectifs jusqu'aux opérationnels."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Indicateurs de pilotage durable *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Perspective (BSC durable)**",
            "**Objectif**",
            "**Indicateur ESG**"
          ],
          "rows": [
            [
              "**Financière**",
              "Performance durable rentable",
              "CA produits durables, coûts évités (énergie)"
            ],
            [
              "**Clients / marché**",
              "Offre responsable, réputation",
              "Part de produits éco-conçus, satisfaction, notation ESG"
            ],
            [
              "**Processus internes**",
              "Réduire l'empreinte",
              "Émissions GES, intensité énergétique, taux de recyclage"
            ],
            [
              "**Apprentissage / capital humain**",
              "Engagement, compétences durables",
              "Formation durabilité, diversité, engagement"
            ],
            [
              "**Société / environnement** *(5ᵉ)*",
              "Impact positif, licence à opérer",
              "Empreinte carbone nette, impact territorial"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Tableau de bord 8 — Tableau de bord ESG *(complet, obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Domaine**",
            "**Indicateur**",
            "**N−1**",
            "**N**",
            "**Cible**",
            "**Statut**"
          ],
          "rows": [
            [
              "**Climat**",
              "Émissions scopes 1+2 (kt CO₂e)",
              "52",
              "47",
              "45",
              "🟠"
            ],
            [
              "**Climat**",
              "Émissions scope 3 (kt CO₂e)",
              "310",
              "305",
              "280",
              "🔴"
            ],
            [
              "**Énergie**",
              "% énergies renouvelables",
              "38 %",
              "46 %",
              "50 %",
              "🟢"
            ],
            [
              "**Circularité**",
              "Taux de valorisation des déchets",
              "72 %",
              "78 %",
              "85 %",
              "🟠"
            ],
            [
              "**Social**",
              "Index égalité F/H (/100)",
              "86",
              "89",
              "90",
              "🟢"
            ],
            [
              "**Social**",
              "Taux de fréquence des AT",
              "12",
              "10",
              "8",
              "🟠"
            ],
            [
              "**Gouvernance**",
              "% administrateurs indépendants",
              "45 %",
              "50 %",
              "50 %",
              "🟢"
            ],
            [
              "**Gouvernance**",
              "Cas de corruption avérés",
              "0",
              "0",
              "0",
              "🟢"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ce tableau de bord ESG offre une vue intégrée de la performance durable. Il révèle des progrès nets (énergies renouvelables, égalité, gouvernance) et des points de vigilance — au premier rang desquels le **scope 3** (émissions de la chaîne de valeur), en rouge, qui stagne loin de sa cible. Ce constat est représentatif : le scope 3 est souvent le poste le plus lourd et le plus difficile à réduire, car il dépend de tiers (fournisseurs, clients). Le tableau de bord ESG joue le même rôle que le tableau de bord budgétaire (chapitre précédent) : signaler les écarts, déclencher l'analyse et l'action. Son intégration aux côtés des indicateurs financiers matérialise la performance globale — un seul tableau de bord pour piloter toutes les dimensions."
        },
        {
          "type": "h4",
          "text": "Schéma 7 — Architecture d'un système de pilotage durable *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma articule les niveaux d'un système de pilotage durable : à la base, la **collecte des données ESG** (systèmes d'information dédiés, capteurs, données fournisseurs) ; au-dessus, les **indicateurs et tableaux de bord ESG** ; au sommet, l'**intégration stratégique** (BSC durable reliant durabilité et stratégie) et le **reporting** (CSRD). Sa lecture montre le parallèle avec le pilotage financier : même architecture (donnée → indicateur → pilotage → reporting), appliquée à de nouveaux objets. Le message clé : la durabilité n'est pas un système de pilotage parallèle mais une **extension intégrée** du système de pilotage existant, sous la responsabilité d'un contrôle de gestion élargi."
        },
        {
          "type": "p",
          "text": "**Transition.** Au cœur de la performance environnementale, un instrument s'impose : le bilan carbone."
        }
      ]
    },
    {
      "id": "8-la-mesure-et-le-pilotage-de-l-empreinte-environnementale",
      "title": "8. La mesure et le pilotage de l'empreinte environnementale",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; méthodologie GHG Protocol / Bilan Carbone.*"
        },
        {
          "type": "h3",
          "text": "8.1 Le bilan carbone et les trois scopes"
        },
        {
          "type": "p",
          "text": "Le **bilan carbone** (ou bilan d'émissions de gaz à effet de serre) est l'outil central de la mesure de l'empreinte climatique. Il comptabilise les émissions de GES (exprimées en tonnes équivalent CO₂, tCO₂e) générées directement ou indirectement par l'activité, en les répartissant — selon le **GHG Protocol** — en trois **scopes**."
        },
        {
          "type": "p",
          "text": "Le **scope 1** regroupe les émissions **directes** issues des sources détenues ou contrôlées par l'entreprise : combustion dans ses installations, ses véhicules, ses procédés industriels. Le **scope 2** regroupe les émissions **indirectes liées à l'énergie** : celles générées pour produire l'électricité, la chaleur ou le froid achetés et consommés par l'entreprise. Le **scope 3** regroupe les **autres émissions indirectes** de la chaîne de valeur, en amont (achats de biens et services, transport, déplacements) et en aval (utilisation et fin de vie des produits vendus). Le scope 3 est généralement le **plus important** (souvent 70 à 90 % du total) et le **plus difficile à maîtriser**, car il dépend de tiers — d'où son caractère stratégique : se limiter aux scopes 1 et 2 donne une vision tronquée de l'empreinte réelle."
        },
        {
          "type": "h3",
          "text": "8.2 Les outils de pilotage environnemental"
        },
        {
          "type": "p",
          "text": "Au-delà du bilan carbone, le pilotage environnemental mobilise plusieurs indicateurs et outils. L'**empreinte carbone** rapportée à une unité d'œuvre (par produit, par euro de CA — intensité carbone) permet le suivi et la comparaison. La **consommation énergétique** et sa décarbonation (part de renouvelable, efficacité). La **circularité** : taux de matières recyclées, écoconception, allongement de la durée de vie, valorisation des déchets. L'**analyse de cycle de vie (ACV)** évalue les impacts d'un produit « du berceau à la tombe ». Ces outils alimentent la définition de **trajectoires** (objectifs de réduction datés, alignés sur des référentiels climatiques) et leur suivi. Le pilotage environnemental rejoint ainsi la logique budgétaire : fixer une cible (un « budget carbone »), mesurer le réalisé, analyser l'écart, corriger."
        },
        {
          "type": "h4",
          "text": "Tableau 8 bis — Indicateurs environnementaux *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Domaine**",
            "**Indicateur**",
            "**Unité**",
            "**Usage**"
          ],
          "rows": [
            [
              "**Climat**",
              "Émissions scopes 1/2/3",
              "tCO₂e",
              "Bilan carbone, trajectoire"
            ],
            [
              "**Climat**",
              "Intensité carbone",
              "tCO₂e / € CA ou / unité",
              "Suivi, comparaison"
            ],
            [
              "**Énergie**",
              "Consommation, % renouvelable",
              "MWh, %",
              "Efficacité, décarbonation"
            ],
            [
              "**Eau**",
              "Prélèvements, consommation",
              "m³",
              "Gestion de la ressource"
            ],
            [
              "**Circularité**",
              "Taux de recyclage, matières recyclées",
              "%",
              "Économie circulaire"
            ],
            [
              "**Déchets**",
              "Production, valorisation",
              "tonnes, %",
              "Réduction, valorisation"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 8 — Répartition des émissions carbone par scope *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique répartit les émissions totales entre les trois scopes, faisant ressortir le poids dominant du **scope 3** (chaîne de valeur). Cette visualisation est stratégiquement décisive : elle montre que l'essentiel du levier de décarbonation se situe **hors des murs** de l'entreprise (chez ses fournisseurs et dans l'usage de ses produits), ce qui appelle une action collaborative (engager les fournisseurs, écoconcevoir les produits) plutôt que de seules mesures internes. Une entreprise qui ne piloterait que ses scopes 1 et 2 négligerait 70 à 90 % de son empreinte. Le graphique oriente ainsi la stratégie climatique vers là où elle compte vraiment — et illustre pourquoi la durabilité est un enjeu de chaîne de valeur, non de périmètre juridique étroit."
        },
        {
          "type": "p",
          "text": "**Transition.** Le pilotage durable est puissamment outillé — et questionné — par le numérique et l'intelligence artificielle."
        }
      ]
    },
    {
      "id": "9-digitalisation-ia-et-durabilite",
      "title": "9. Digitalisation, IA et durabilité",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; ouverture contemporaine.*"
        },
        {
          "type": "p",
          "text": "Le numérique entretient avec la durabilité une relation ambivalente : il est à la fois un **levier** du pilotage durable et lui-même une **source d'impact**. Le **Green IT** (numérique responsable) vise à réduire l'empreinte du numérique (consommation des centres de données, durée de vie des équipements, écoconception logicielle) — car le numérique, souvent perçu comme immatériel, a une empreinte environnementale croissante et bien réelle. À l'inverse, le numérique est un puissant outil de pilotage durable. La **data ESG** : les systèmes d'information collectent, fiabilisent et consolident les données extra-financières, dispersées et hétérogènes — préalable indispensable à un reporting CSRD crédible. L'**IA et le reporting durable** : l'intelligence artificielle aide à collecter des données (analyse de documents fournisseurs, estimation d'émissions), à détecter des anomalies, à générer des analyses et à automatiser le reporting. Le **pilotage en temps réel** : capteurs et IoT permettent de suivre en continu consommations énergétiques et émissions, autorisant une optimisation fine. Les **jumeaux numériques** (répliques virtuelles d'installations ou de processus) permettent de simuler des scénarios de décarbonation avant de les déployer."
        },
        {
          "type": "p",
          "text": "Ces apports s'accompagnent de **vigilances**. La qualité et la fiabilité des données ESG sont cruciales (le reporting durable est aussi exposé au « garbage in, garbage out » que le reporting financier), d'autant que les données extra-financières sont souvent estimées et moins matures. Le risque de **greenwashing** par la donnée (afficher des indicateurs flatteurs sans substance) appelle rigueur et vérification. Enfin, l'empreinte propre de l'IA (consommation énergétique des grands modèles) doit être mise en balance avec ses bénéfices — un pilotage durable qui ignorerait le coût environnemental de ses propres outils manquerait de cohérence."
        },
        {
          "type": "h4",
          "text": "Tableau 9 — Apports et limites de l'IA dans le pilotage durable *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Apport**",
            "**Bénéfice**",
            "**Limite / vigilance**"
          ],
          "rows": [
            [
              "**Collecte de données ESG**",
              "Automatisation, couverture du scope 3",
              "Fiabilité des données estimées"
            ],
            [
              "**Détection d'anomalies**",
              "Fiabilisation du reporting",
              "Calibrage, faux positifs"
            ],
            [
              "**Prévision / simulation (jumeaux)**",
              "Anticiper les trajectoires de décarbonation",
              "Qualité des modèles, hypothèses"
            ],
            [
              "**Reporting automatisé (IA gén.)**",
              "Gain de temps, lisibilité",
              "Supervision, risque de greenwashing"
            ],
            [
              "**Pilotage temps réel (IoT)**",
              "Optimisation continue",
              "Coût, sécurité des données"
            ],
            [
              "**(Empreinte propre de l'IA)**",
              "—",
              "Consommation énergétique des modèles"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 9 — Système de pilotage ESG augmenté par l'IA *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente le système de pilotage ESG augmenté : autour d'un socle de **données ESG intégrées** (interne, fournisseurs, capteurs IoT) et d'outils d'**IA/analytics**, gravitent les activités du pilotage durable (mesure d'empreinte, suivi des indicateurs, simulation de trajectoires, reporting CSRD). Au centre, le rôle du contrôleur de gestion durable se concentre sur la fiabilisation, l'analyse et l'aide à la décision. Le message rejoint les chapitres précédents : la technologie augmente le pilotage durable (couverture, finesse, rapidité), mais ne dispense ni de la rigueur sur les données, ni du jugement humain — d'autant plus nécessaire que la durabilité engage des arbitrages de valeurs, non de simples calculs."
        },
        {
          "type": "p",
          "text": "**Transition.** Ces démarches s'incarnent dans des stratégies d'entreprises."
        }
      ]
    },
    {
      "id": "10-cas-d-entreprises-et-illustrations-professionnelles",
      "title": "10. Cas d'entreprises et illustrations professionnelles",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé — illustrations pédagogiques simplifiées (voir avertissement en tête de chapitre).*"
        },
        {
          "type": "p",
          "text": "**Schneider Electric — la durabilité au cœur du modèle.** Le groupe est régulièrement cité parmi les entreprises les plus avancées en matière de durabilité, ayant fait de la transition énergétique et de l'efficacité son cœur de métier. *Démarche* : objectifs climatiques ambitieux, baromètre de durabilité chiffré et suivi, offre de solutions de décarbonation. *Indicateurs* : empreinte carbone (y compris scope 3), indicateurs ESG intégrés. *Enseignement* : la durabilité peut être un axe stratégique différenciant et une source de croissance, non une contrainte (illustration de la valeur partagée)."
        },
        {
          "type": "p",
          "text": "**Danone — la raison d'être et ses tensions.** L'entreprise a formalisé une raison d'être articulant santé, alimentation et planète, et a adopté un statut d'entreprise à mission. *Démarche* : double matérialité (nutrition, eau, agriculture, climat), objectifs sociaux et environnementaux. *Limites observées* : les tensions entre exigences financières de court terme et engagements durables ont illustré la difficulté d'équilibrer les attentes des parties prenantes. *Enseignement* : l'engagement durable doit composer avec la pression financière — l'arbitrage entre parties prenantes est réel."
        },
        {
          "type": "p",
          "text": "**Unilever — durabilité et performance de marque.** Le groupe a longtemps porté un plan de développement durable ambitieux, reliant croissance et réduction de l'empreinte. *Démarche* : objectifs environnementaux et sociaux intégrés aux marques, engagement de la chaîne d'approvisionnement. *Indicateurs* : empreinte, sourcing durable. *Enseignement* : la durabilité peut nourrir la performance des marques et l'engagement des consommateurs, tout en se heurtant à la complexité de la mise en œuvre à grande échelle."
        },
        {
          "type": "p",
          "text": "**Patagonia — la durabilité comme identité.** L'entreprise de vêtements outdoor a fait de l'engagement environnemental le cœur de son identité et de son modèle (réparabilité, matières recyclées, militantisme). *Démarche* : écoconception, transparence, redistribution au profit de causes environnementales. *Enseignement* : une cohérence forte entre valeurs, modèle et communication construit une marque puissante et fidélise — mais ce modèle, lié à une gouvernance singulière, est difficilement transposable tel quel."
        },
        {
          "type": "p",
          "text": "**Michelin — performance industrielle et durabilité.** Le groupe illustre l'intégration de la durabilité dans une industrie lourde (mobilité), avec des objectifs sur les matériaux durables et l'empreinte. *Démarche* : écoconception des pneumatiques, matériaux durables, performance globale (lien chapitres précédents). *Enseignement* : même dans l'industrie traditionnelle, la durabilité devient un axe d'innovation et de pilotage de la performance globale."
        },
        {
          "type": "h4",
          "text": "Tableau 10 — Comparaison des stratégies de durabilité *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Entreprise**",
            "**Positionnement durable**",
            "**Levier principal**",
            "**Enseignement / limite**"
          ],
          "rows": [
            [
              "**Schneider Electric**",
              "Durabilité = cœur de métier",
              "Solutions de décarbonation",
              "Durabilité comme axe de croissance"
            ],
            [
              "**Danone**",
              "Raison d'être, entreprise à mission",
              "Nutrition, eau, agriculture",
              "Tension finance court terme / mission"
            ],
            [
              "**Unilever**",
              "Durabilité et marques",
              "Sourcing durable, empreinte",
              "Performance de marque vs complexité"
            ],
            [
              "**Patagonia**",
              "Durabilité = identité",
              "Écoconception, militantisme",
              "Cohérence forte, modèle peu transposable"
            ],
            [
              "**Michelin**",
              "Durabilité dans l'industrie",
              "Matériaux durables, écoconception",
              "Innovation durable en industrie lourde"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Transition.** Ces cas et concepts convergent vers les attendus de l'épreuve."
        }
      ]
    },
    {
      "id": "11-approfondissements-dscg",
      "title": "11. Approfondissements DSCG",
      "blocks": [
        {
          "type": "p",
          "text": "*Statut : créé ; orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "11.1 L'articulation stratégie–durabilité"
        },
        {
          "type": "p",
          "text": "Un sujet attend que l'on montre comment la durabilité s'intègre à la stratégie (et non comme un supplément périphérique) : valeur partagée (Porter & Kramer), risques et opportunités ESG, avantage concurrentiel durable. Éviter de traiter la RSE comme un discours : la relier au modèle d'affaires et à la création de valeur."
        },
        {
          "type": "h3",
          "text": "11.2 Le pilotage ESG"
        },
        {
          "type": "p",
          "text": "Savoir construire des indicateurs ESG, un radar ESG, un tableau de bord de durabilité, et les intégrer au pilotage stratégique (BSC durable). Relier chaque indicateur à un objectif et à une décision."
        },
        {
          "type": "h3",
          "text": "11.3 La double matérialité"
        },
        {
          "type": "p",
          "text": "Concept central et probable. Savoir distinguer matérialité financière (impact des enjeux sur l'entreprise) et matérialité d'impact (impact de l'entreprise sur le monde), construire et interpréter une matrice de double matérialité, et en déduire les enjeux à piloter et reporter. C'est le fondement du reporting CSRD."
        },
        {
          "type": "h3",
          "text": "11.4 La création de valeur durable"
        },
        {
          "type": "p",
          "text": "Montrer que performance économique et durable se conditionnent à long terme (risques évités, opportunités, attractivité, accès au capital), sans nier les arbitrages de court terme. Mobiliser les coûts cachés, les externalités, la valeur partagée."
        },
        {
          "type": "h3",
          "text": "11.5 La CSRD et le reporting"
        },
        {
          "type": "p",
          "text": "Connaître les principes de la CSRD (double matérialité, normes ESRS, audit), l'architecture des ESRS (transversales, E/S/G) et le rôle du contrôle de gestion dans la production et la fiabilisation des données. Savoir situer ce reporting par rapport au reporting financier."
        },
        {
          "type": "h3",
          "text": "11.6 Thèmes les plus susceptibles d'être mobilisés"
        },
        {
          "type": "p",
          "text": "Double matérialité (matrice, analyse) · performance globale et ses dimensions · parties prenantes (cartographie, attentes) · indicateurs et tableaux de bord ESG · bilan carbone et scopes · CSRD/ESRS · rôle du contrôle de gestion durable. Ce chapitre, émergent et transversal, est appelé à monter en puissance dans les sujets."
        }
      ]
    },
    {
      "id": "12-synthese-generale",
      "title": "12. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "12.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Le pilotage de la performance a connu une mutation profonde : de la mesure financière de court terme vers une **performance globale** intégrant les dimensions économique, sociale, environnementale et de gouvernance. Cette évolution répond aux limites de la vision financière (court-termisme, externalités ignorées) et aux attentes croissantes des parties prenantes. Elle s'enracine dans des fondements théoriques solides : la théorie des **parties prenantes** (Freeman, Clarkson, Mitchell), qui élargit la responsabilité de l'entreprise ; la **valeur partagée** (Porter & Kramer), qui réconcilie intérêt économique et sociétal ; le *triple bottom line* (Elkington) et le **Balanced Scorecard** (Kaplan & Norton), qui structurent la mesure multidimensionnelle."
        },
        {
          "type": "p",
          "text": "Les critères **ESG** (environnement, social, gouvernance) fournissent la grille de structuration de la performance durable, mesurée par des indicateurs dédiés (bilan carbone et ses trois **scopes**, indicateurs sociaux, indicateurs de gouvernance) et représentée par des outils comme le radar ESG. La **double matérialité** — combinaison de la matérialité financière (impact des enjeux sur l'entreprise) et de la matérialité d'impact (impact de l'entreprise sur le monde) — constitue le concept pivot du reporting de durabilité européen. La **CSRD** et les normes **ESRS** en fournissent le cadre réglementaire, normé et audité, qui rapproche le reporting de durabilité de la rigueur du reporting financier."
        },
        {
          "type": "p",
          "text": "Dans cette transformation, le **contrôle de gestion durable** joue un rôle central : il étend ses outils (indicateurs, tableaux de bord, BSC durable) à la performance globale, fiabilise les données extra-financières et éclaire les arbitrages. Le numérique et l'IA augmentent ce pilotage (data ESG, simulation, reporting), sous réserve de vigilance sur la qualité des données et le greenwashing. La conclusion rejoint la problématique : piloter la performance durable, c'est dépasser la mesure financière pour mesurer et créer une valeur globale au service de l'ensemble des parties prenantes — faisant du contrôle de gestion un acteur de la transition. Ce chapitre, point de convergence de l'ouvrage, relie ainsi stratégie, gouvernance, parties prenantes, création de valeur et durabilité."
        },
        {
          "type": "h3",
          "text": "12.2 Carte mentale"
        },
        {
          "type": "h3",
          "text": "12.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Concept**",
            "**Auteur / référence**",
            "**Apport**",
            "**Limites**",
            "**Applications**"
          ],
          "rows": [
            [
              "Parties prenantes",
              "Freeman",
              "Élargir la responsabilité au-delà des actionnaires",
              "Hiérarchisation délicate",
              "Cartographie, analyse des attentes"
            ],
            [
              "Hiérarchisation des PP",
              "Mitchell, Clarkson",
              "Prioriser (pouvoir, légitimité, urgence)",
              "Subjectivité",
              "Stratégie relationnelle"
            ],
            [
              "Valeur partagée",
              "Porter & Kramer",
              "Réconcilier économique et sociétal",
              "Convergence pas toujours réelle",
              "Stratégie durable"
            ],
            [
              "Triple bottom line",
              "Elkington",
              "People, planet, profit",
              "Équilibre difficile à mesurer",
              "Performance globale"
            ],
            [
              "Balanced Scorecard durable",
              "Kaplan & Norton",
              "Relier ESG et stratégie",
              "Causalité supposée",
              "Pilotage durable"
            ],
            [
              "Double matérialité",
              "Cadre CSRD",
              "Financière + impact",
              "Complexité de l'analyse",
              "Reporting de durabilité"
            ],
            [
              "Bilan carbone (3 scopes)",
              "GHG Protocol",
              "Mesurer l'empreinte complète",
              "Scope 3 difficile à estimer",
              "Trajectoire de décarbonation"
            ]
          ]
        }
      ]
    },
    {
      "id": "13-fiche-de-revision-dscg",
      "title": "13. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "13.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Performance globale** : intégration des dimensions économique, sociale, environnementale et de gouvernance.",
            "**RSE** : responsabilité sociétale des entreprises ; intégration volontaire des enjeux ESG.",
            "**Partie prenante** (Freeman) : tout groupe qui affecte ou est affecté par l'activité de l'entreprise.",
            "**Double matérialité** : matérialité financière (impact sur l'entreprise) + matérialité d'impact (impact de l'entreprise).",
            "**CSRD** : directive européenne de reporting de durabilité (normée, auditée, double matérialité)."
          ]
        },
        {
          "type": "h3",
          "text": "13.2 Concepts ESG à maîtriser"
        },
        {
          "type": "p",
          "text": "Les trois piliers (E/S/G) · indicateurs types par pilier · radar ESG · notation ESG · externalités · valeur partagée · triple bottom line · licence à opérer."
        },
        {
          "type": "h3",
          "text": "13.3 Double matérialité"
        },
        {
          "type": "p",
          "text": "Matérialité financière (outside-in : les enjeux affectent l'entreprise) vs matérialité d'impact (inside-out : l'entreprise affecte le monde) · un enjeu est matériel s'il l'est selon l'une OU l'autre · la matrice de double matérialité priorise les enjeux à reporter."
        },
        {
          "type": "h3",
          "text": "13.4 CSRD et ESRS"
        },
        {
          "type": "p",
          "text": "CSRD : double matérialité, normes communes, audit, périmètre élargi (calendrier progressif) · ESRS : transversales (1-2) + thématiques E1-E5, S1-S4, G1 · on reporte sur les enjeux matériels."
        },
        {
          "type": "h3",
          "text": "13.5 KPI durables"
        },
        {
          "type": "p",
          "text": "Émissions GES (scopes 1/2/3, tCO₂e) · intensité carbone · % renouvelable · taux de recyclage · index égalité F/H · taux de fréquence des AT · % administrateurs indépendants · part de CA durable."
        },
        {
          "type": "h3",
          "text": "13.6 Auteurs à retenir"
        },
        {
          "type": "p",
          "text": "Freeman (parties prenantes) · Clarkson, Mitchell (hiérarchisation) · Porter & Kramer (valeur partagée) · Elkington (triple bottom line) · Kaplan & Norton (BSC) · Brundtland (développement durable)."
        },
        {
          "type": "h3",
          "text": "13.7 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Confondre matérialité financière et matérialité d'impact · réduire la durabilité à un discours (greenwashing) au lieu de la relier à la stratégie · oublier le scope 3 (l'essentiel de l'empreinte) · présenter l'ESG comme un domaine isolé du pilotage · ignorer les arbitrages entre parties prenantes · confondre RSE (volontaire) et obligations réglementaires (CSRD)."
        },
        {
          "type": "h3",
          "text": "13.8 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Analyser la performance globale d'une organisation et ses dimensions.",
            "Cartographier les parties prenantes et analyser leurs attentes.",
            "Construire et interpréter une matrice de double matérialité.",
            "Concevoir un tableau de bord ESG / un BSC durable.",
            "Interpréter un bilan carbone (scopes 1/2/3) et proposer des leviers.",
            "Situer la CSRD et les ESRS ; expliquer le rôle du contrôle de gestion dans le reporting durable.",
            "Discuter l'articulation entre performance économique et performance durable (création de valeur durable)."
          ]
        },
        {
          "type": "h3",
          "text": "13.9 Liens avec l'ensemble du programme"
        },
        {
          "type": "ul",
          "items": [
            "**Partie 1** : stratégie, gouvernance, création de valeur — la durabilité élargit la finalité stratégique.",
            "**Partie 2** : processus (2.1, empreinte des processus) ; projets (2.2) ; fonctions support (2.3, BSC) ; changement (2.4, transformation durable) ; **risques** (2.5, double matérialité, risques ESG) ; **social** (2.6, volet S de l'ESG).",
            "**Partie 3** : gestion budgétaire (budget carbone, reporting intégré) ; ce chapitre en est l'aboutissement.",
            "**Transversal** : UE1 (gouvernance, éthique) ; UE2 (finance durable) ; UE5 (systèmes d'information ESG)."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — Partie 3, « Pilotage stratégique de la durabilité et de la performance globale ». Fin des chapitres de l'ouvrage.*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
