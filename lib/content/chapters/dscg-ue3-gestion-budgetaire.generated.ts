// Généré par scripts/convert-docx.mjs depuis 07_Gestion_budgetaire.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-gestion-budgetaire",
  "level": "DSCG",
  "ue": "UE3",
  "number": 7,
  "title": "La gestion budgétaire et le pilotage prévisionnel de la performance",
  "description": "",
  "durationMin": 60,
  "sections": [
    {
      "id": "preambule",
      "title": "Préambule",
      "blocks": [
        {
          "type": "p",
          "text": "**DSCG — UE3**"
        },
        {
          "type": "p",
          "text": "Management et contrôle de gestion"
        },
        {
          "type": "p",
          "text": "**La gestion budgétaire et le pilotage prévisionnel de la performance**"
        },
        {
          "type": "p",
          "text": "*Manuel premium de préparation à l'épreuve nationale*"
        },
        {
          "type": "p",
          "text": "Partie 3 — Volume indicatif : 20 heures"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Manuel premium de préparation à l'épreuve nationale du DSCG — UE3 « Management et contrôle de gestion »** Nouveau référentiel — Partie 3 « Concevoir et mettre en place des outils permettant d'analyser et de piloter la performance » — **Volume indicatif : 20 heures**"
        }
      ]
    },
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
          "text": "**Rattachement au référentiel officiel.** Ce chapitre ouvre la **Partie 3** du programme, consacrée à la conception et à la mise en place des outils d'analyse et de pilotage de la performance. Il en couvre le volet « **gestion budgétaire et pilotage prévisionnel** ». Les **compétences** attendues portent sur la capacité à situer le budget dans le système de pilotage, à construire les budgets opérationnels et les états prévisionnels, à mettre en œuvre le contrôle budgétaire et l'analyse des écarts, et à apprécier les limites du modèle budgétaire traditionnel pour proposer des approches prévisionnelles modernes. Les **savoirs associés** sont : les finalités et la place du budget ; le processus et les acteurs budgétaires ; les budgets des ventes, de la production, des approvisionnements et des frais généraux ; le budget de trésorerie et les états financiers prévisionnels ; le contrôle budgétaire et la décomposition des écarts ; les tableaux de bord budgétaires ; la critique du budget (Hope & Fraser, Argyris) et les nouvelles approches (rolling forecast, beyond budgeting)."
        },
        {
          "type": "p",
          "text": "**Articulation avec les autres parties (limites de champ).** La gestion budgétaire est l'instrument par lequel la **stratégie** (Partie 1) se traduit en objectifs chiffrés, et elle prolonge les outils de déploiement de la Partie 2 : elle hérite du pilotage des processus (2.1, coûts), des projets (2.2, budgets et écarts projet), des fonctions support (2.3, centres de responsabilité et facturation interne) et du **pilotage de la masse salariale** (2.6, budget de personnel et effets). Elle précède et alimente les autres chapitres de la Partie 3 (tableaux de bord et performance globale, durabilité). Le présent chapitre se concentre sur le **cœur budgétaire** : construction, états prévisionnels, contrôle et écarts, puis dépassement du modèle. Les techniques de prévision quantitative (séries chronologiques) et de calcul de coûts, vues en DCG, sont mobilisées mais non redéveloppées."
        },
        {
          "type": "p",
          "text": "**Avertissement sur les illustrations d'entreprises (§11).** Les cas (Michelin, Airbus, LVMH, Amazon, Decathlon) sont des illustrations pédagogiques simplifiées, fondées sur des éléments de notoriété publique ; ils ne constituent pas une analyse vérifiée et servent de supports d'apprentissage."
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
              "Anthony (définitions du contrôle de gestion, feedback/écarts)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1 & 2)"
            ],
            [
              "Origine taylorienne du coût standard et de la gestion par exception",
              "**Repris-adapté**",
              "Ancien cours (Cours 1)"
            ],
            [
              "Place du budget dans le système (stratégie/budget/contrôle)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1 & 2) ; Bouquin"
            ],
            [
              "Procédure budgétaire et jeux d'acteurs",
              "**Repris-adapté**",
              "Ancien cours (Cours 3)"
            ],
            [
              "Budgets opérationnels et états prévisionnels (exemples chiffrés)",
              "**Créé**",
              "Technique budgétaire (niveau DSCG)"
            ],
            [
              "Analyse et décomposition des écarts (exemples chiffrés)",
              "**Créé / complété**",
              "Technique des écarts sur coûts standards"
            ],
            [
              "Limites du budget (Argyris, Hope & Fraser)",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Forecasting, rolling forecast, beyond budgeting",
              "**Créé**",
              "Ouverture contemporaine"
            ],
            [
              "Digitalisation, BI, IA et budget",
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
          "text": "1.1 L'origine de la gestion budgétaire"
        },
        {
          "type": "p",
          "text": "La gestion budgétaire est l'un des plus anciens outils du contrôle de gestion, dont elle accompagne la naissance. L'ancien cours en rappelle la filiation : c'est de l'**organisation taylorienne**, à la fin du XIXᵉ siècle, que naît le **coût standard** (ou coût préétabli), conçu pour « contrôler et gérer par exception grâce à la mise en évidence d'écarts ». Taylor voulait « retirer le contrôle des mains de l'atelier pour le rendre à la direction » : la comptabilité industrielle ne sert plus seulement à calculer des coûts, mais à « suivre les flux, à surveiller et à comparer le réel à la prévision ». Cette double filiation — **ingénierique** (Taylor, les coûts standards dans l'atelier) et **financière** (Sloan et Brown chez General Motors, qui étendent le contrôle aux managers) — fonde la gestion budgétaire moderne. Le budget en hérite ses deux gènes : la **prévision** (anticiper) et le **contrôle** (comparer le réel au prévu, agir par exception)."
        },
        {
          "type": "h3",
          "text": "1.2 Le rôle du budget dans le pilotage"
        },
        {
          "type": "p",
          "text": "Le budget est l'expression **chiffrée et datée** d'un plan d'action à court terme (généralement annuel), traduisant les objectifs de l'organisation en ressources allouées et en résultats attendus. Il occupe une place centrale dans le pilotage : il **coordonne** les actions des différentes entités, **alloue** les ressources, fixe des **objectifs** mesurables, et fournit la référence à laquelle on comparera les réalisations (contrôle budgétaire). Anthony, père fondateur de la discipline, place le budget au cœur du « processus par lequel les managers obtiennent l'assurance que les ressources sont obtenues et utilisées de manière efficace et efficiente pour la réalisation des objectifs ». Le budget est ainsi le pivot opérationnel du contrôle de gestion. Le budget peut aussi se lire comme un **contrat interne** : en s'engageant sur un budget, un responsable contracte avec sa hiérarchie sur des objectifs (résultats à atteindre) en échange de moyens (ressources allouées). Cette lecture contractuelle, développée par Bouquin, éclaire la dimension d'animation et de responsabilisation du budget — mais aussi ses dérives, lorsque la négociation du « contrat » devient un jeu tactique (§8). Le budget est donc à la fois un outil technique (chiffrage, cohérence) et un outil social (engagement, évaluation, pouvoir) : c'est cette double nature qui en fait la richesse et la complexité."
        },
        {
          "type": "h3",
          "text": "1.3 La relation entre stratégie et budget"
        },
        {
          "type": "p",
          "text": "Le budget n'a de sens que relié à la **stratégie**. Anthony le souligne : le contrôle de gestion est « le processus par lequel les managers influencent d'autres membres de l'organisation pour mettre en œuvre les stratégies » ; et « le suivi et la mise en œuvre de la stratégie supposent l'utilisation en feedback d'informations sur les écarts entre les objectifs stratégiques et les performances effectives ». Le budget est donc le maillon qui **traduit la stratégie en action chiffrée** : il décline le plan stratégique (long terme) en plan opérationnel (moyen terme) puis en budget (court terme). Un budget déconnecté de la stratégie n'est qu'un exercice comptable ; un budget bien articulé est l'instrument du déploiement stratégique. Cette articulation est le fil conducteur du chapitre."
        },
        {
          "type": "h3",
          "text": "1.4 Les limites des approches intuitives et la problématique"
        },
        {
          "type": "p",
          "text": "Pourquoi formaliser un budget plutôt que piloter « à l'intuition » ? Parce que dans une organisation complexe, l'intuition ne suffit pas à coordonner des centaines d'acteurs, à anticiper les besoins de trésorerie, à détecter à temps les dérives. Le budget apporte la **rigueur** de l'anticipation chiffrée et la **discipline** du suivi. Mais — et c'est tout l'enjeu contemporain — le modèle budgétaire traditionnel souffre de limites réelles (lourdeur, rigidité, jeux d'acteurs) qui ont nourri des critiques radicales (beyond budgeting) et l'émergence de nouvelles approches (rolling forecast, pilotage en temps réel)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment la gestion budgétaire permet-elle de traduire les orientations stratégiques en objectifs opérationnels et financiers, d'en piloter la réalisation par le contrôle budgétaire et l'analyse des écarts, et comment dépasser les limites du modèle traditionnel pour concevoir un pilotage prévisionnel agile, au service de la création de valeur ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en posant les **fondements** (§2), le **processus** et ses acteurs (§3), les **budgets opérationnels** (§4), le **budget de trésorerie et les états prévisionnels** (§5), le **contrôle budgétaire et l'analyse des écarts** (§6), les **tableaux de bord** (§7), puis les **limites du modèle** (§8), les **nouvelles approches** (§9), la **digitalisation** (§10), des **cas** (§11), les **approfondissements DSCG** (§12), la synthèse (§13) et la fiche de révision (§14)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir le budget et ses finalités ; situer le budget dans le système de pilotage (plan stratégique, opérationnel, budget, contrôle, reporting) ; connaître le processus et les acteurs budgétaires ; connaître l'articulation des budgets opérationnels et des états prévisionnels ; maîtriser la méthodologie de décomposition des écarts ; connaître les limites du budget et les approches alternatives."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Construire les budgets opérationnels (ventes, production, approvisionnements, frais généraux) ; **élaborer un budget de trésorerie et les états prévisionnels** ; **calculer et décomposer les écarts** (sur chiffre d'affaires, volume, prix, coûts, marge) ; construire un tableau de bord budgétaire ; comparer budget traditionnel et approches modernes."
        },
        {
          "type": "p",
          "text": "**Compétences.** Articuler stratégie et budget ; concevoir et mettre en œuvre un système budgétaire ; analyser des écarts et formuler des actions correctives ; apprécier les limites du budget et proposer des alternatives ; relier pilotage budgétaire et création de valeur."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (Partie 3).** Construire des budgets et des états prévisionnels ; mettre en œuvre le contrôle budgétaire et l'analyse des écarts ; apprécier les dispositifs de pilotage prévisionnel ; relier budget, stratégie et performance."
        }
      ]
    },
    {
      "id": "2-les-fondements-de-la-gestion-budgetaire",
      "title": "2. Les fondements de la gestion budgétaire",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Définition et finalités"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; auteurs repris (Anthony, Bouquin) ; Kaplan, Simons.*"
        },
        {
          "type": "p",
          "text": "Le **budget** est la traduction chiffrée et datée des objectifs et des moyens de l'organisation pour une période, généralement l'année à venir, déclinée par centre de responsabilité. La **gestion budgétaire** est l'ensemble du processus : prévision budgétaire, exécution, puis contrôle budgétaire. Au-delà de cette définition technique, le budget remplit **cinq finalités** complémentaires, qui en font un outil de management et non seulement de comptabilité."
        },
        {
          "type": "p",
          "text": "La **prévision** : le budget oblige à anticiper, à se projeter, à quantifier les hypothèses — exercice salutaire de réflexion sur l'avenir. La **coordination** : en articulant les budgets des différentes fonctions (ventes, production, achats…), il assure leur cohérence d'ensemble — le budget de production découle du budget des ventes, le budget des achats du budget de production, etc. La **communication** : le budget diffuse les objectifs et les priorités à tous les niveaux, créant un langage commun. La **motivation** : en fixant des objectifs aux responsables, il oriente les comportements et peut servir de base à l'évaluation et à l'intéressement — d'où son rôle dans l'animation managériale, mais aussi les jeux d'acteurs qu'il suscite (§8). Le **contrôle** : il fournit la référence (le prévu) à laquelle comparer le réalisé, permettant la gestion par exception et l'action corrective."
        },
        {
          "type": "p",
          "text": "Ces cinq finalités entretiennent des tensions qu'il faut connaître. La plus célèbre oppose la finalité de **prévision** (le budget doit être réaliste, donc refléter la meilleure anticipation) et la finalité de **motivation/évaluation** (le budget doit être ambitieux pour tirer la performance vers le haut, et sert de base à l'évaluation). Or un responsable évalué sur l'atteinte de son budget est incité à négocier des objectifs prudents (sous-estimer ses ventes, surestimer ses coûts) pour se ménager une marge confortable : le budget « prévision » est alors biaisé par son usage « évaluation ». Cette tension, identifiée de longue date, explique pourquoi certaines organisations séparent les exercices (une prévision honnête pour piloter, des objectifs distincts pour motiver). De même, la finalité de **coordination** (cohérence d'ensemble) peut entrer en tension avec la **motivation** (autonomie des entités). Comprendre ces tensions est essentiel pour dépasser une vision naïve du budget et pour aborder ses limites (§8)."
        },
        {
          "type": "p",
          "text": "Plusieurs auteurs éclairent ces fonctions. **Anthony** ancre le budget dans le processus de contrôle de gestion au service de la stratégie. **Henri Bouquin**, référence française majeure, analyse le budget comme un dispositif d'articulation entre finalités stratégiques et action opérationnelle, et en souligne la dimension de « contractualisation » interne. **Robert Kaplan** (avec le Balanced Scorecard) plaide pour relier le budget à des objectifs stratégiques équilibrés, au-delà du seul financier. **Robert Simons** (*levers of control*) montre que le budget peut être utilisé de deux façons : de manière **diagnostique** (contrôle par exception, respect des objectifs) ou **interactive** (support de dialogue stratégique et d'apprentissage) — distinction féconde pour dépasser la vision purement mécanique du budget."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Les conceptions du budget *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Conception**",
            "**Auteur / courant**",
            "**Rôle du budget**",
            "**Accent**",
            "**Limite**"
          ],
          "rows": [
            [
              "**Mécaniste / taylorienne**",
              "Taylor, coûts standards",
              "Contrôler par exception via les écarts",
              "Discipline, norme",
              "Rigidité, déresponsabilisation"
            ],
            [
              "**Managériale (contrôle de gestion)**",
              "Anthony",
              "Déployer la stratégie, feedback",
              "Efficacité, efficience",
              "Suppose une stratégie claire"
            ],
            [
              "**Contractuelle**",
              "Bouquin",
              "Contractualiser objectifs et moyens",
              "Responsabilisation",
              "Jeux d'acteurs, négociation"
            ],
            [
              "**Équilibrée (BSC)**",
              "Kaplan & Norton",
              "Relier budget et objectifs stratégiques",
              "Multidimensionnel",
              "Complexité"
            ],
            [
              "**Interactive vs diagnostique**",
              "Simons",
              "Dialogue stratégique OU contrôle",
              "Apprentissage / maîtrise",
              "Usage à calibrer"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard DSCG.** Le budget n'est pas qu'un tableau de chiffres : c'est un **outil de management** aux cinq finalités (prévision, coordination, communication, motivation, contrôle). Une copie qui réduit le budget à un calcul passe à côté de l'attendu. Toujours relier le budget à la **stratégie** (en amont) et à la **performance** (en aval), et savoir en discuter les **finalités** et les **limites**."
        },
        {
          "type": "h3",
          "text": "2.2 Le budget dans le système de contrôle de gestion"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Anthony, Bouquin).*"
        },
        {
          "type": "p",
          "text": "Le budget s'inscrit dans une **hiérarchie temporelle** du pilotage, qui décline progressivement la stratégie en action. Le **plan stratégique** (3 à 5 ans) fixe les orientations majeures (marchés, positionnement, grands investissements) — il relève de la planification stratégique (Partie 1). Le **plan opérationnel** (2 à 3 ans) traduit ces orientations en programmes d'action chiffrés par fonction (plan d'investissement, plan de financement, plan de production). Le **budget** (1 an, souvent mensualisé) décline la première année du plan opérationnel en objectifs détaillés par centre de responsabilité. Le **contrôle budgétaire** compare périodiquement le réalisé au budget, analyse les écarts et déclenche les actions correctives. Le **reporting** fait remonter l'information de performance vers les niveaux supérieurs. Cette cascade assure la cohérence verticale (de la stratégie à l'action) et le bouclage (du terrain vers la direction par le feedback). Deux dimensions de cohérence doivent être assurées. La **cohérence verticale** garantit que les budgets déclinent fidèlement la stratégie (les objectifs budgétaires servent les objectifs stratégiques) — sans elle, l'organisation s'active mais dans la mauvaise direction. La **cohérence horizontale** garantit que les budgets des différentes fonctions sont mutuellement compatibles (le budget de production permet bien de servir le budget des ventes, le budget de trésorerie absorbe bien les décaissements de tous les autres) — sans elle, les engagements pris sont irréalisables. Le contrôle de gestion veille aux deux. Un enjeu fréquent est le **décalage temporel** : le plan stratégique raisonne en années, le budget en mois ; l'articulation suppose de traduire des orientations qualitatives de long terme en objectifs quantitatifs de court terme, exercice de traduction délicat où se perdent parfois le sens et la cohérence. C'est pourquoi certaines organisations adoptent une **planification glissante** (le plan opérationnel est réactualisé chaque année), pour maintenir le lien entre horizons."
        },
        {
          "type": "h4",
          "text": "Schéma 1 — Architecture du système de pilotage *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/01.png",
          "alt": "Schéma 1 — Architecture du système de pilotage *(obligatoire)*",
          "width": 1892,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma étage les niveaux de pilotage — plan stratégique, plan opérationnel, budget, contrôle budgétaire, reporting — reliés par une double flèche : descendante (le déploiement, de la stratégie vers l'action) et ascendante (le feedback, des réalisations vers la décision). Sa lecture met en évidence le rôle **charnière du budget** : il est le point de bascule entre l'horizon stratégique (qualitatif, long terme) et l'horizon opérationnel (quantitatif, court terme). Le bouclage par le contrôle et le reporting matérialise l'apprentissage : les écarts constatés nourrissent la révision des budgets et, parfois, de la stratégie elle-même. Cette architecture montre que le budget n'est pas une fin en soi mais un maillon d'un système d'apprentissage continu."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Cette architecture se concrétise dans un processus, le processus budgétaire, qui mobilise des acteurs aux rôles définis."
        }
      ]
    },
    {
      "id": "3-le-processus-budgetaire",
      "title": "3. Le processus budgétaire",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (procédure budgétaire, jeux d'acteurs — Cours 3) ; étapes créées.*"
        },
        {
          "type": "h3",
          "text": "3.1 Les étapes de construction"
        },
        {
          "type": "p",
          "text": "La construction budgétaire suit un processus rigoureux, généralement déployé sur le dernier trimestre de l'exercice précédent. La première étape est la définition des **hypothèses** : cadrage par la direction générale (objectifs de croissance, de rentabilité), hypothèses d'environnement (inflation, taux de change, évolution des marchés) et lettre de cadrage budgétaire transmise aux responsables. Viennent ensuite les **prévisions** : chaque centre de responsabilité élabore ses prévisions d'activité et de moyens, en partant généralement du budget des ventes (budget « déterminant »). Les **arbitrages** confrontent les budgets ascendants aux objectifs descendants : c'est la phase de négociation et de cohérence, souvent itérative (navettes budgétaires), où l'on ajuste pour respecter les équilibres globaux. La **validation** entérine le budget définitif, voté par la direction et le conseil. La **mise en œuvre** déploie le budget comme référence de l'action sur l'exercice. Le **contrôle** (§6) compare périodiquement le réalisé au budget. Ce processus combine deux logiques : **descendante** (top-down, le cadrage stratégique) et **ascendante** (bottom-up, les prévisions du terrain), dont l'équilibre conditionne l'adhésion et le réalisme du budget."
        },
        {
          "type": "h4",
          "text": "Encadré — Point méthode"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Point méthode — l'ordre de construction des budgets.** Les budgets s'enchaînent dans un ordre logique dicté par les contraintes. On part du **budget des ventes** (généralement le budget déterminant, car l'activité est limitée par la demande), dont découle le **budget de production** (combien produire pour vendre, compte tenu des stocks), puis le **budget des approvisionnements** (combien acheter pour produire) et les **budgets de charges** (frais généraux, personnel, investissements). Tous convergent enfin vers le **budget de trésorerie** et les **états prévisionnels** de synthèse. Identifier le budget déterminant (souvent les ventes, parfois la capacité de production si elle est saturée) est la première décision méthodologique."
        },
        {
          "type": "h3",
          "text": "3.2 Les acteurs"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (jeux d'acteurs — Cours 3).*"
        },
        {
          "type": "p",
          "text": "Le processus budgétaire mobilise des acteurs aux rôles complémentaires. La **direction générale** fixe le cadrage stratégique, arbitre les conflits et valide le budget — elle porte la cohérence stratégie/budget. Le **contrôle de gestion** orchestre le processus : il anime la procédure, fournit les outils et les méthodes, consolide les budgets, vérifie la cohérence et alerte — il est le « chef d'orchestre » technique, sans être décideur. Les **responsables opérationnels** (directeurs de division, de fonction) élaborent leurs budgets et s'engagent sur leurs objectifs — ils sont les « contractants ». Les **managers** de proximité déclinent et exécutent au quotidien. L'ancien cours souligne la dimension politique de ce processus : la procédure budgétaire « permet d'expliciter ces contrats » mais suscite aussi des « affrontements en perspective lors des discussions de préparation du budget » — les acteurs négocient leurs objectifs et leurs moyens, ce qui peut donner lieu à des comportements stratégiques (§8)."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — Responsabilités des acteurs budgétaires *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Acteur**",
            "**Rôle dans le processus**",
            "**Responsabilité**",
            "**Posture**"
          ],
          "rows": [
            [
              "**Direction générale**",
              "Cadrage, arbitrage, validation",
              "Cohérence stratégie/budget",
              "Décideur"
            ],
            [
              "**Contrôle de gestion**",
              "Animation, méthode, consolidation, alerte",
              "Fiabilité et cohérence du processus",
              "Chef d'orchestre (non décideur)"
            ],
            [
              "**Responsables opérationnels**",
              "Élaboration des budgets, engagement",
              "Atteinte des objectifs négociés",
              "Contractant"
            ],
            [
              "**Managers de proximité**",
              "Déclinaison, exécution, suivi",
              "Réalisation opérationnelle",
              "Exécutant / animateur"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 2 — Le processus budgétaire complet *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/02.png",
          "alt": "Schéma 2 — Le processus budgétaire complet *(obligatoire)*",
          "width": 1980,
          "height": 1034
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma déroule le cycle budgétaire — cadrage (hypothèses), prévisions ascendantes, navettes et arbitrages, validation, mise en œuvre, contrôle — en faisant apparaître les flux descendants (top-down) et ascendants (bottom-up). Sa lecture révèle le caractère **itératif** du processus : les navettes budgétaires, allers-retours entre direction et opérationnels, ajustent progressivement les budgets jusqu'à la cohérence. Elle met aussi en évidence le **bouclage** : le contrôle budgétaire, en fin de cycle, alimente le cadrage du cycle suivant (apprentissage). Le bon dosage entre top-down (discipline stratégique) et bottom-up (réalisme et adhésion) est la clé d'un processus budgétaire efficace : trop descendant, il démotive ; trop ascendant, il perd la cohérence stratégique."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Le processus se matérialise dans la construction enchaînée des budgets opérationnels."
        }
      ]
    },
    {
      "id": "4-les-budgets-operationnels",
      "title": "4. Les budgets opérationnels",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé — technique budgétaire de niveau DSCG, exemples chiffrés.*"
        },
        {
          "type": "p",
          "text": "Les budgets opérationnels déclinent l'activité prévisionnelle. Ils s'enchaînent dans l'ordre logique vu au §3.1, en partant du budget déterminant."
        },
        {
          "type": "h3",
          "text": "4.1 Le budget des ventes"
        },
        {
          "type": "p",
          "text": "Le budget des ventes est généralement le **budget déterminant** : c'est la demande qui, le plus souvent, conditionne l'activité. Il repose sur des **prévisions de ventes**, élaborées par des méthodes quantitatives et qualitatives. Les **méthodes quantitatives** exploitent les données historiques : extrapolation de tendance, séries chronologiques (avec décomposition tendance / saisonnalité), corrélation avec des variables explicatives (méthode des moindres carrés). Les **méthodes qualitatives** mobilisent le jugement : avis de la force de vente, études de marché, panels d'experts, méthode Delphi — indispensables pour les produits nouveaux ou les ruptures que l'historique ne peut prévoir. Le budget des ventes ventile ensuite les prévisions par produit, région, période (mensualisation) et canal. Parmi les méthodes quantitatives, la **décomposition des séries chronologiques** mérite une mention car elle est fréquemment mobilisée : elle isole la **tendance** (évolution de fond), les **variations saisonnières** (fluctuations régulières infra-annuelles, mesurées par des coefficients saisonniers), les **variations cycliques** (liées aux cycles économiques) et les **variations accidentelles** (aléas). La prévision combine la tendance extrapolée et les coefficients saisonniers. La méthode des **moindres carrés** ajuste une droite de tendance (y = ax + b) minimisant l'écart aux observations passées ; le **lissage exponentiel** pondère davantage les observations récentes. Ces méthodes supposent une certaine continuité du passé vers le futur — hypothèse fragile en cas de rupture (innovation, crise), où le jugement qualitatif reprend ses droits. Le bon prévisionniste combine les deux registres : la rigueur statistique pour le récurrent, le jugement éclairé pour les ruptures. La prévision des ventes étant le point de départ de tout le budget, sa qualité conditionne celle de l'ensemble : une erreur sur les ventes se propage en cascade (production, achats, trésorerie)."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — budget des ventes *(complet)*"
        },
        {
          "type": "p",
          "text": "Une entreprise prévoit de vendre un produit selon les hypothèses suivantes pour l'année N+1 : quantités prévisionnelles de 12 000 unités, prix de vente unitaire de 50 €, avec une saisonnalité concentrant 30 % des ventes au 4ᵉ trimestre."
        },
        {
          "type": "table",
          "headers": [
            "**Trimestre**",
            "**Coefficient saisonnier**",
            "**Quantités**",
            "**Prix unitaire**",
            "**CA budgété**"
          ],
          "rows": [
            [
              "T1",
              "0,20",
              "2 400",
              "50 €",
              "120 000 €"
            ],
            [
              "T2",
              "0,25",
              "3 000",
              "50 €",
              "150 000 €"
            ],
            [
              "T3",
              "0,25",
              "3 000",
              "50 €",
              "150 000 €"
            ],
            [
              "T4",
              "0,30",
              "3 600",
              "50 €",
              "180 000 €"
            ],
            [
              "**Total**",
              "**1,00**",
              "**12 000**",
              "**50 €**",
              "**600 000 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le budget des ventes (600 000 € de CA) constitue le point de départ de toute la construction budgétaire. La **mensualisation** (ici trimestrialisation) selon la saisonnalité est cruciale : elle conditionne le budget de production (faut-il lisser ou suivre la saisonnalité ?) et surtout le budget de trésorerie (les encaissements suivront les ventes, avec décalage). Un budget des ventes annuel non ventilé serait inexploitable pour le pilotage infra-annuel."
        },
        {
          "type": "h3",
          "text": "4.2 Le budget de production"
        },
        {
          "type": "p",
          "text": "Le budget de production découle du budget des ventes : il détermine **combien produire** pour satisfaire les ventes prévues, compte tenu de la **politique de stocks** et des **capacités**. La relation fondamentale est : Production = Ventes prévues + Stock final souhaité − Stock initial. Il faut ensuite vérifier la **faisabilité** au regard des capacités (heures-machine, main-d'œuvre disponibles) : si la production requise excède la capacité, il faut arbitrer (heures supplémentaires, sous-traitance, lissage par les stocks, voire révision du budget des ventes). C'est l'articulation entre commercial et industriel."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — budget de production *(complet)*"
        },
        {
          "type": "p",
          "text": "Reprenons les 12 000 unités à vendre. L'entreprise détient un stock initial de 800 unités et souhaite un stock final de 1 200 unités (pour sécuriser les ventes de début N+2)."
        },
        {
          "type": "p",
          "text": "Production nécessaire = 12 000 + 1 200 − 800 = 12 400 unités."
        },
        {
          "type": "p",
          "text": "Si chaque unité requiert 1,5 heure-machine, le besoin est de 12 400 × 1,5 = **18 600 heures-machine**. Avec une capacité annuelle de 19 000 heures, la production est **faisable** (taux d'utilisation : 18 600 / 19 000 = 97,9 %), mais la marge est faible : tout aléa (panne, hausse des ventes) saturerait la capacité, signal d'alerte pour le pilotage."
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le budget de production (12 400 unités) diffère des ventes (12 000) du fait de la variation de stock voulue (+ 400). La vérification de capacité (97,9 %) est essentielle : un budget de production qui dépasserait la capacité ne serait pas réaliste. Le contrôle de gestion joue ici son rôle d'alerte sur la cohérence entre ambitions commerciales et moyens industriels — articulation au cœur du dialogue de gestion."
        },
        {
          "type": "h3",
          "text": "4.3 Le budget des approvisionnements"
        },
        {
          "type": "p",
          "text": "Le budget des approvisionnements découle du budget de production : il détermine les **achats de matières** nécessaires, selon la même logique de stocks. La relation est : Achats = Consommations de production + Stock final souhaité − Stock initial. Il intègre la politique d'approvisionnement (quantités économiques, fréquence des commandes — lien avec la gestion des stocks et le juste-à-temps, chapitre 1) et la mensualisation des commandes, qui conditionnera les décaissements."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — budget des approvisionnements *(complet)*"
        },
        {
          "type": "p",
          "text": "La production de 12 400 unités requiert 2 kg de matière par unité, soit 24 800 kg à consommer. Stock initial de matière : 3 000 kg ; stock final souhaité : 4 000 kg. Coût d'achat : 8 €/kg."
        },
        {
          "type": "p",
          "text": "Achats = 24 800 + 4 000 − 3 000 = 25 800 kg, soit un budget d'achats de 25 800 × 8 = **206 400 €**."
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le budget des approvisionnements (206 400 €) prolonge la cascade : ventes → production → achats. La constitution du stock final de matière (+ 1 000 kg) accroît les achats au-delà des consommations, mobilisant de la trésorerie — illustration du lien entre politique de stock et besoin de financement (BFR), que le budget de trésorerie (§5) intégrera."
        },
        {
          "type": "h3",
          "text": "4.4 Le budget des frais généraux"
        },
        {
          "type": "p",
          "text": "Les **frais généraux** (charges de structure, fonctions support, frais administratifs) sont moins directement liés à l'activité que les charges variables. Leur budgétisation est plus délicate car ils sont en grande partie **fixes** ou **discrétionnaires** (engagés par décision, sans lien mécanique avec un volume — communication, R&D, formation). Plusieurs méthodes coexistent : la reconduction ajustée (budget N−1 + évolution), critiquée pour reconduire les inefficiences ; le **budget base zéro (BBZ)**, qui reconstruit chaque budget à partir de zéro en justifiant chaque dépense (rigoureux mais lourd) ; les budgets flexibles, qui ajustent selon l'activité. La maîtrise des frais généraux est un enjeu majeur car ils échappent à la régulation automatique par le volume. Deux budgets de charges méritent un développement spécifique. Le **budget de personnel** (ou budget de masse salariale) prolonge directement le chapitre sur le contrôle de gestion sociale (2.6) : il intègre les effectifs prévisionnels, la politique salariale (avec ses effets de niveau, de masse et de report), le GVT et les charges sociales — c'est souvent le premier poste de charges et un budget délicat à construire. Le **budget des investissements** découle du plan opérationnel : il programme les dépenses d'immobilisation (capacités, modernisation, projets), dont l'évaluation relève des techniques de choix d'investissement (VAN, TRI — chapitre projets) et qui pèsent lourdement sur la trésorerie et le bilan prévisionnels. Ces deux budgets illustrent que la construction budgétaire mobilise l'ensemble des compétences du contrôle de gestion."
        },
        {
          "type": "h4",
          "text": "Tableau 3 — Articulation des budgets opérationnels *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Budget**",
            "**Découle de**",
            "**Relation clé**",
            "**Contrainte**"
          ],
          "rows": [
            [
              "**Ventes**",
              "Stratégie commerciale, marché",
              "Quantités × prix",
              "Demande (budget déterminant)"
            ],
            [
              "**Production**",
              "Budget des ventes",
              "Ventes + SF − SI",
              "Capacité de production"
            ],
            [
              "**Approvisionnements**",
              "Budget de production",
              "Consommations + SF − SI",
              "Politique de stock, fournisseurs"
            ],
            [
              "**Frais généraux**",
              "Structure, politique",
              "Fixes + discrétionnaires",
              "Arbitrages (BBZ, reconduction)"
            ],
            [
              "**Personnel**",
              "Effectifs, masse salariale (ch. 2.6)",
              "Effets niveau/masse/report",
              "Politique salariale, NAO"
            ],
            [
              "**Investissements**",
              "Plan opérationnel",
              "Programme pluriannuel",
              "Capacité de financement"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 3 — Les flux d'informations budgétaires *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/03.png",
          "alt": "Schéma 3 — Les flux d'informations budgétaires *(obligatoire)*",
          "width": 1936,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma matérialise l'enchaînement et l'interdépendance des budgets : du budget des ventes (déterminant) découlent en cascade la production, les approvisionnements et les charges, qui convergent tous vers le budget de trésorerie et les états prévisionnels de synthèse. Sa lecture souligne la **cohérence systémique** de la construction budgétaire : modifier une hypothèse de ventes se répercute mécaniquement sur toute la chaîne. C'est cette interdépendance qui justifie l'orchestration par le contrôle de gestion et qui rend les outils numériques (tableurs, ERP, §10) indispensables pour gérer la complexité des simulations."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Tous les budgets opérationnels convergent vers la synthèse financière : trésorerie et états prévisionnels."
        }
      ]
    },
    {
      "id": "5-le-budget-de-tresorerie-et-les-etats-previsionnels",
      "title": "5. Le budget de trésorerie et les états prévisionnels",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé — technique de synthèse budgétaire, exemples chiffrés.*"
        },
        {
          "type": "p",
          "text": "Les budgets opérationnels convergent vers les documents de synthèse prévisionnels : le budget de trésorerie (vision des flux monétaires) et les états financiers prévisionnels (compte de résultat et bilan). Ils constituent l'aboutissement de la construction budgétaire et permettent de vérifier la cohérence financière globale du plan."
        },
        {
          "type": "h3",
          "text": "5.1 Le budget de trésorerie"
        },
        {
          "type": "p",
          "text": "Le **budget de trésorerie** récapitule les **encaissements** et **décaissements** prévisionnels, période par période (généralement mensuels), pour anticiper le **solde de trésorerie** et détecter les éventuels besoins de financement ou excédents à placer. Il diffère des budgets de charges et produits par sa logique de **flux monétaires** : il intègre les **décalages de paiement** (un client réglant à 30 jours encaisse le mois suivant la vente ; un fournisseur payé à 60 jours décaisse deux mois après l'achat), ainsi que la TVA et les flux non liés à l'exploitation (investissements, emprunts, dividendes). Le budget de trésorerie est l'outil de prévention du **risque de liquidité** : une entreprise rentable peut faire faillite par défaut de trésorerie."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — budget de trésorerie *(complet)*"
        },
        {
          "type": "p",
          "text": "Reprenons l'entreprise. Hypothèses simplifiées sur le 1ᵉʳ trimestre N+1 : les clients règlent à 30 jours (les ventes d'un mois sont encaissées le mois suivant) ; les achats et charges du mois sont décaissés le mois même ; trésorerie initiale au 1ᵉʳ janvier : 25 000 €. Ventes mensuelles T1 : 40 000 € (jan), 40 000 € (fév), 40 000 € (mars) ; décaissements mensuels (achats + charges) : 35 000 €/mois ; ventes de décembre N (encaissées en janvier) : 45 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**(en €)**",
            "**Janvier**",
            "**Février**",
            "**Mars**"
          ],
          "rows": [
            [
              "Trésorerie initiale",
              "25 000",
              "35 000",
              "40 000"
            ],
            [
              "**Encaissements** (ventes M−1)",
              "45 000",
              "40 000",
              "40 000"
            ],
            [
              "**Décaissements**",
              "35 000",
              "35 000",
              "35 000"
            ],
            [
              "Flux net du mois",
              "+10 000",
              "+5 000",
              "+5 000"
            ],
            [
              "**Trésorerie finale**",
              "**35 000**",
              "**40 000**",
              "**45 000**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le budget de trésorerie révèle la trajectoire du solde, ici positive et croissante (de 25 000 € à 45 000 €), grâce à des encaissements supérieurs aux décaissements et au report des ventes de décembre. Le point clé est le **décalage** : les encaissements de janvier proviennent des ventes de décembre, non de janvier — ce décalage, ignoré dans le compte de résultat, est central en trésorerie. Si le solde devenait négatif un mois, l'entreprise devrait anticiper un financement court terme (découvert, crédit). Le budget de trésorerie est ainsi l'instrument d'anticipation du risque de liquidité, distinct de la rentabilité."
        },
        {
          "type": "h3",
          "text": "5.2 Le compte de résultat prévisionnel"
        },
        {
          "type": "p",
          "text": "Le **compte de résultat prévisionnel** synthétise les produits et charges budgétés pour dégager le **résultat prévisionnel**. Il est construit en logique de **flux d'exploitation** (et non de trésorerie) : il enregistre les produits et charges de l'exercice, indépendamment de leur encaissement/décaissement. Il vérifie la **rentabilité** prévisionnelle du plan : l'entreprise dégagera-t-elle un résultat conforme aux objectifs ?"
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — compte de résultat prévisionnel *(complet)*"
        },
        {
          "type": "table",
          "headers": [
            "**Compte de résultat prévisionnel N+1 (en €)**",
            "**Montant**"
          ],
          "rows": [
            [
              "Chiffre d'affaires",
              "600 000"
            ],
            [
              "− Achats consommés de matières",
              "198 400"
            ],
            [
              "− Charges de personnel",
              "220 000"
            ],
            [
              "− Autres charges externes (frais généraux)",
              "90 000"
            ],
            [
              "− Dotations aux amortissements",
              "32 000"
            ],
            [
              "**= Résultat d'exploitation**",
              "**59 600**"
            ],
            [
              "− Charges financières",
              "6 000"
            ],
            [
              "− Impôt sur les sociétés (≈ 25 %)",
              "13 400"
            ],
            [
              "**= Résultat net prévisionnel**",
              "**40 200**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le compte de résultat prévisionnel dégage un résultat net de 40 200 € (soit une marge nette de 6,7 % du CA). Il valide la **rentabilité** du plan budgétaire et permet de comparer aux objectifs stratégiques. Attention à ne pas confondre ce résultat (logique comptable d'exploitation) avec la trésorerie (§5.1) : une entreprise peut afficher un résultat positif tout en manquant de trésorerie, et inversement — d'où la nécessité des deux documents."
        },
        {
          "type": "h4",
          "text": "Approfondissement — du budget au seuil de rentabilité prévisionnel"
        },
        {
          "type": "p",
          "text": "Le compte de résultat prévisionnel se prête à une analyse en **coûts variables / coûts fixes** particulièrement utile au pilotage : le **compte de résultat différentiel**. En distinguant charges variables (proportionnelles à l'activité) et charges fixes (indépendantes du volume), on calcule la **marge sur coûts variables** (CA − charges variables) puis le **résultat** (marge sur coûts variables − charges fixes). Reprenons l'exemple : sur un CA budgété de 600 000 €, supposons des charges variables de 360 000 € (60 % du CA) et des charges fixes de 180 000 €."
        },
        {
          "type": "table",
          "headers": [
            "**Compte de résultat différentiel prévisionnel**",
            "**Montant**",
            "**% CA**"
          ],
          "rows": [
            [
              "Chiffre d'affaires",
              "600 000",
              "100 %"
            ],
            [
              "− Charges variables",
              "360 000",
              "60 %"
            ],
            [
              "**= Marge sur coûts variables**",
              "**240 000**",
              "**40 %**"
            ],
            [
              "− Charges fixes",
              "180 000",
              "30 %"
            ],
            [
              "**= Résultat**",
              "**60 000**",
              "10 %"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Le **taux de marge sur coûts variables** est de 40 %. Le **seuil de rentabilité** (CA pour lequel le résultat est nul) = Charges fixes / Taux de MCV = 180 000 / 0,40 = **450 000 €**. L'entreprise atteint donc son point mort à 450 000 € de CA, soit 75 % du CA budgété. La **marge de sécurité** = 600 000 − 450 000 = 150 000 € (25 % du CA), et le **levier opérationnel** (sensibilité du résultat à l'activité) = MCV / Résultat = 240 000 / 60 000 = 4 : une variation de 1 % du CA entraîne une variation de 4 % du résultat."
        },
        {
          "type": "p",
          "text": "**Interprétation.** Cette analyse enrichit le budget d'une lecture du **risque** : le seuil de rentabilité (450 000 €) indique le niveau d'activité minimal pour ne pas perdre d'argent ; la marge de sécurité (25 %) mesure le « matelas » avant la zone de perte ; le levier opérationnel (4) signale une forte sensibilité du résultat aux variations d'activité (caractéristique des structures à coûts fixes élevés). Ces indicateurs, dérivés du budget prévisionnel, sont précieux pour apprécier la robustesse du plan face à un retournement — pont direct entre gestion budgétaire et gestion des risques (chapitre précédent)."
        },
        {
          "type": "h3",
          "text": "5.3 Le bilan prévisionnel"
        },
        {
          "type": "p",
          "text": "Le **bilan prévisionnel** présente la situation patrimoniale projetée en fin d'exercice : actif (immobilisations, stocks, créances, trésorerie) et passif (capitaux propres augmentés du résultat, dettes). Il boucle la construction : il intègre les effets cumulés des budgets (variation des stocks, des créances et dettes constituant le BFR, investissements, financements, résultat). Il vérifie les **équilibres financiers** prévisionnels (structure, endettement, fonds de roulement). Sa construction articule les flux (budgets) et les stocks (bilan d'ouverture + variations)."
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Construction intégrée des états prévisionnels *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Document**",
            "**Logique**",
            "**Vérifie**",
            "**Alimenté par**"
          ],
          "rows": [
            [
              "**Budget de trésorerie**",
              "Flux monétaires (encaiss./décaiss.)",
              "Liquidité, besoin de financement",
              "Tous les budgets + décalages de paiement"
            ],
            [
              "**Compte de résultat prév.**",
              "Flux d'exploitation (produits/charges)",
              "Rentabilité",
              "Budgets de produits et charges"
            ],
            [
              "**Bilan prévisionnel**",
              "Stocks (patrimoine)",
              "Équilibres financiers, structure",
              "Bilan initial + variations (BFR, invest., résultat)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Ce tableau montre l'**articulation** des trois documents de synthèse, qui éclairent trois dimensions distinctes et complémentaires : la liquidité (trésorerie), la rentabilité (résultat) et la solidité (bilan). Un plan budgétaire n'est validé que si les trois sont satisfaisants : rentable mais illiquide, il échoue ; liquide mais non rentable, il n'est pas viable à terme. Le contrôle de gestion veille à cette cohérence d'ensemble — c'est la vision financière intégrée du pilotage prévisionnel."
        },
        {
          "type": "h4",
          "text": "Graphique 4 — Évolution prévisionnelle de la trésorerie *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/04.png",
          "alt": "Graphique 4 — Évolution prévisionnelle de la trésorerie *(obligatoire)*",
          "width": 1892,
          "height": 1034
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique trace la trajectoire mensuelle du solde de trésorerie prévisionnel sur l'année. Sa lecture révèle les **points bas** (creux de trésorerie, souvent liés à la saisonnalité ou à des décaissements ponctuels — paiement de l'IS, dividendes, investissements) et les **points hauts** (excédents à placer). C'est l'outil d'anticipation par excellence : repérer trois mois à l'avance un creux permet de négocier sereinement un financement, là où la découverte au dernier moment impose des conditions défavorables. La gestion prévisionnelle de trésorerie illustre parfaitement la valeur de l'anticipation budgétaire : prévoir pour agir à temps plutôt que subir."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Le budget construit, le pilotage se joue dans la comparaison du réalisé au prévu : le contrôle budgétaire."
        }
      ]
    },
    {
      "id": "6-le-controle-budgetaire-et-l-analyse-des-ecarts",
      "title": "6. Le contrôle budgétaire et l'analyse des écarts",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : écarts sur coûts standards repris-adaptés (origine taylorienne) ; décomposition et exemples créés.*"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire est le cœur du pilotage : il **boucle** le processus en confrontant les réalisations aux prévisions, pour comprendre et agir. C'est ici que le budget tient sa promesse de « gestion par exception grâce à la mise en évidence d'écarts » (Taylor)."
        },
        {
          "type": "h3",
          "text": "6.1 Les principes"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire repose sur trois temps. La **comparaison** confronte le réalisé au budget (ou au budget flexible, ajusté au niveau d'activité réel — point essentiel, §6.2). L'**analyse** décompose les écarts pour en comprendre les causes (qui ? quoi ? pourquoi ?) et distingue les écarts **favorables** (F) des **défavorables** (D). La **correction** déclenche les actions : agir sur les causes (action corrective), réviser les prévisions, ou réviser les objectifs si l'environnement a changé. Le principe de **gestion par exception** concentre l'attention sur les écarts significatifs (au-delà d'un seuil), pour ne pas se disperser. Un écart n'est pas en soi une faute : c'est une **information** à interpréter — un écart défavorable de coût peut résulter d'un choix délibéré (qualité supérieure), un écart favorable peut masquer un sous-investissement risqué. La **fréquence** du contrôle est un paramètre clé : un contrôle mensuel est la norme, mais certains indicateurs critiques (trésorerie, ventes) se suivent en continu, tandis que d'autres se prêtent à un rythme trimestriel. Le bon rythme équilibre réactivité (détecter tôt) et coût (le contrôle consomme des ressources). Un autre paramètre est le **seuil de signification** : on ne réagit qu'au-delà d'un écart jugé significatif (en valeur ou en pourcentage), pour concentrer l'attention — c'est l'essence de la gestion par exception. Enfin, le contrôle budgétaire ne doit pas être uniquement **rétrospectif** (constater le passé) mais **prospectif** : à partir des écarts constatés, projeter l'atterrissage de fin d'année (forecast) pour anticiper et corriger à temps. Un contrôle purement rétrospectif arrive trop tard pour agir."
        },
        {
          "type": "h3",
          "text": "6.2 La décomposition des écarts"
        },
        {
          "type": "p",
          "text": "L'analyse des écarts est une compétence technique majeure du DSCG. Le principe est de **décomposer** un écart global en sous-écarts attribuables à des causes identifiées (volume, prix, quantité, rendement…), pour orienter l'action. On distingue les écarts sur le chiffre d'affaires (ou la marge) et les écarts sur coûts."
        },
        {
          "type": "p",
          "text": "**L'écart sur chiffre d'affaires** se décompose en écart sur **prix** (a-t-on vendu plus ou moins cher que prévu ?) et écart sur **volume/quantité** (a-t-on vendu plus ou moins d'unités ?). Formules : Écart sur prix = (Prix réel − Prix budgété) × Quantité réelle ; Écart sur volume = (Quantité réelle − Quantité budgétée) × Prix budgété. L'écart total est leur somme."
        },
        {
          "type": "p",
          "text": "**L'écart sur coûts** (matières, main-d'œuvre) se décompose en écart sur **prix/coût unitaire** et écart sur **quantité/rendement** : Écart sur coût = (Coût réel − Coût standard) × Quantité réelle ; Écart sur quantité = (Quantité réelle − Quantité standard) × Coût standard. Pour les charges indirectes, on décompose en écart sur budget, sur activité et sur rendement."
        },
        {
          "type": "p",
          "text": "**L'écart sur marge** combine les effets prix et volume sur la marge, en isolant l'effet de la composition des ventes (effet de mix) lorsque plusieurs produits coexistent."
        },
        {
          "type": "p",
          "text": "Un point méthodologique **crucial** : pour isoler les écarts de gestion réels, on compare souvent le réalisé au **budget flexible** (budget recalculé pour le niveau d'activité réellement atteint), et non au budget initial. Cela permet de séparer l'écart sur **volume d'activité** (a-t-on fait le volume prévu ?) des écarts sur **performance** (à volume donné, a-t-on bien géré prix et consommations ?)."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — Méthodologie d'analyse des écarts *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Écart**",
            "**Formule**",
            "**Cause analysée**",
            "**Responsabilité type**"
          ],
          "rows": [
            [
              "**Écart sur prix de vente**",
              "(Prix réel − Prix budgété) × Qté réelle",
              "Politique de prix, marché",
              "Commercial"
            ],
            [
              "**Écart sur volume des ventes**",
              "(Qté réelle − Qté budgétée) × Prix budgété",
              "Demande, performance commerciale",
              "Commercial"
            ],
            [
              "**Écart sur coût matière**",
              "(Coût réel − Coût std) × Qté réelle",
              "Prix d'achat, fournisseurs",
              "Achats"
            ],
            [
              "**Écart sur quantité matière (rendement)**",
              "(Qté réelle − Qté std) × Coût std",
              "Consommation, rebuts, process",
              "Production"
            ],
            [
              "**Écart sur coût main-d'œuvre**",
              "(Taux réel − Taux std) × Heures réelles",
              "Politique salariale, heures sup.",
              "RH / Production"
            ],
            [
              "**Écart sur temps (rendement MO)**",
              "(Heures réelles − Heures std) × Taux std",
              "Productivité, organisation",
              "Production"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Exemple chiffré — décomposition des écarts *(complet)*"
        },
        {
          "type": "p",
          "text": "Une entreprise avait budgété la vente de 10 000 unités à 50 € (CA budgété : 500 000 €). Elle a réalisé 9 500 unités à 52 € (CA réel : 494 000 €). Écart global sur CA : 494 000 − 500 000 = **− 6 000 € (défavorable)**. Décomposons :"
        },
        {
          "type": "ul",
          "items": [
            "*Écart sur prix* = (52 − 50) × 9 500 = + 19 000 € **(favorable)** : l'entreprise a vendu plus cher que prévu.",
            "*Écart sur volume* = (9 500 − 10 000) × 50 = − 25 000 € **(défavorable)** : elle a vendu 500 unités de moins.",
            "*Vérification* : + 19 000 − 25 000 = − 6 000 € ✓"
          ]
        },
        {
          "type": "p",
          "text": "Sur les coûts matières, le standard était de 2 kg à 8 €/kg par unité. Pour les 9 500 unités produites, le standard est de 19 000 kg à 8 €. Réel : 19 950 kg à 7,80 €/kg (coût réel : 155 610 €)."
        },
        {
          "type": "ul",
          "items": [
            "*Coût standard ajusté* (budget flexible) = 19 000 × 8 = 152 000 €. Écart total matière = 155 610 − 152 000 = **+ 3 610 € (défavorable)**.",
            "*Écart sur prix matière* = (7,80 − 8) × 19 950 = − 3 990 € **(favorable)** : matière achetée moins cher.",
            "*Écart sur quantité matière* = (19 950 − 19 000) × 8 = + 7 600 € **(défavorable)** : surconsommation de 950 kg (rebuts ?).",
            "*Vérification* : − 3 990 + 7 600 = + 3 610 € ✓"
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La décomposition est éclairante et oriente l'action. Sur le CA, l'écart global défavorable (− 6 000 €) masque deux effets opposés : une **réussite sur les prix** (+ 19 000 €, le commercial a su valoriser) et un **échec sur les volumes** (− 25 000 €, à investiguer : marché, concurrence, rupture ?). Sans décomposition, on ne verrait que la baisse globale. Sur les matières, l'écart défavorable (+ 3 610 €) résulte d'un **bon achat** (prix favorable, − 3 990 €) contrarié par une **surconsommation** (+ 7 600 €, signal d'un problème de rendement ou de qualité à traiter en production). Chaque sous-écart pointe une cause et un responsable : c'est tout l'intérêt de l'analyse, qui transforme un chiffre global en diagnostic actionnable."
        },
        {
          "type": "h4",
          "text": "6.3 Centres de responsabilité et contrôlabilité"
        },
        {
          "type": "p",
          "text": "Le contrôle budgétaire suppose de rattacher chaque écart à un **centre de responsabilité** et de ne juger un responsable que sur ce qu'il **contrôle** réellement (principe de contrôlabilité). On distingue (lien chapitre 2.3) : les **centres de coûts** (jugés sur la maîtrise des coûts à production donnée — atelier), les **centres de revenus** (jugés sur le chiffre d'affaires — agence commerciale), les **centres de profit** (jugés sur la marge ou le résultat — division), et les **centres d'investissement** (jugés sur la rentabilité des capitaux engagés — ROI, ROCE). Cette typologie conditionne l'analyse des écarts : on n'attend pas la même chose d'un centre de coûts (écarts sur consommations) que d'un centre de profit (écarts sur marge). Le **principe de contrôlabilité** est fondamental et souvent malmené : tenir un responsable comptable d'un écart qu'il ne maîtrise pas (hausse du prix des matières premières mondiales, par exemple) est injuste et démotivant. Le bon découpage des écarts par responsabilité, en isolant le contrôlable du non-contrôlable, conditionne l'acceptabilité et l'efficacité du contrôle budgétaire."
        },
        {
          "type": "h4",
          "text": "6.4 Le budget flexible, clé de l'analyse"
        },
        {
          "type": "p",
          "text": "Le **budget flexible** mérite une attention particulière car il est la clé d'une analyse rigoureuse des écarts. Le budget initial est établi pour un niveau d'activité prévu ; mais si l'activité réelle diffère, comparer directement le réalisé au budget initial mélange deux choses : l'écart dû au **volume d'activité** (a-t-on fait plus ou moins que prévu ?) et l'écart dû à la **performance** (à activité donnée, a-t-on bien géré ?). Le budget flexible résout ce problème en recalculant le budget pour le niveau d'activité réellement atteint (en appliquant les standards unitaires au volume réel). On obtient alors une décomposition propre : l'**écart sur volume** (budget flexible − budget initial) et l'**écart sur performance** (réalisé − budget flexible). Cette distinction, attendue avec rigueur en DSCG, évite d'imputer à un atelier une « mauvaise performance » qui n'est en réalité qu'un effet de la baisse des ventes décidée ailleurs."
        },
        {
          "type": "h4",
          "text": "Graphique 5 — Décomposition visuelle des écarts *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/05.png",
          "alt": "Graphique 5 — Décomposition visuelle des écarts *(obligatoire)*",
          "width": 1804,
          "height": 1078
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique en cascade décompose l'écart global en ses composantes (effet prix, effet volume pour le CA), en distinguant par la couleur les contributions favorables (vert) et défavorables (rouge). Sa lecture rend immédiatement visible ce que le seul chiffre global masque : ici, un effet prix favorable largement compensé par un effet volume défavorable. Cette visualisation est précieuse en reporting : elle permet à un dirigeant de saisir en un coup d'œil l'origine d'un écart et de cibler les questions (« pourquoi le volume a-t-il baissé ? »). La décomposition visuelle des écarts est l'aboutissement pédagogique du contrôle budgétaire."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Les écarts et les budgets se synthétisent dans des tableaux de bord, supports du pilotage et du reporting."
        }
      ]
    },
    {
      "id": "7-tableaux-de-bord-et-reporting-budgetaire",
      "title": "7. Tableaux de bord et reporting budgétaire",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; lien tableaux de bord (chapitres 2.3 et 2.6).*"
        },
        {
          "type": "h3",
          "text": "7.1 Le pilotage budgétaire"
        },
        {
          "type": "p",
          "text": "Le **tableau de bord budgétaire** synthétise, pour chaque centre de responsabilité, les principaux indicateurs de suivi : réalisé, budget, écart (en valeur et en %), tendance. Il applique la **gestion par exception** : un code couleur (feu vert/orange/rouge) attire l'œil sur les écarts significatifs, évitant la noyade dans les chiffres. Sa périodicité (mensuelle le plus souvent) doit permettre une réaction à temps : un tableau de bord trop tardif ne sert qu'à constater, non à corriger. Le tableau de bord budgétaire se distingue du tableau de bord stratégique (type Balanced Scorecard, chapitre suivant) par son focus sur les objectifs budgétaires de court terme, mais les deux s'articulent."
        },
        {
          "type": "h3",
          "text": "7.2 Le reporting de gestion"
        },
        {
          "type": "p",
          "text": "Le **reporting** fait remonter l'information de performance vers les niveaux hiérarchiques supérieurs et la direction. Il répond à des exigences de **fiabilité**, de **régularité** et de **lisibilité**. Dans les groupes, le reporting consolide les performances des entités selon un format standardisé, permettant la comparaison et le pilotage d'ensemble. L'enjeu est d'équilibrer la **standardisation** (comparabilité, consolidation) et l'**adaptation** aux spécificités locales. Le reporting alimente le dialogue de gestion : les revues de performance (mensuelles, trimestrielles) où responsables et direction analysent ensemble les écarts et décident des actions."
        },
        {
          "type": "h3",
          "text": "7.3 Les KPI budgétaires"
        },
        {
          "type": "p",
          "text": "Les indicateurs clés du pilotage budgétaire combinent des mesures d'**activité** (CA réalisé vs budget, volumes), de **rentabilité** (marge, résultat vs budget), de **coûts** (respect des budgets de charges, écarts), de **trésorerie** (solde, BFR) et d'**avancement** (taux de réalisation du budget annuel, projection de fin d'année). Le suivi de la **projection d'atterrissage** (forecast de fin d'année à partir du réalisé + reste à faire) est particulièrement utile : il anticipe le résultat final bien avant la clôture."
        },
        {
          "type": "h4",
          "text": "Tableau de bord 6 — Tableau de bord budgétaire *(complet, obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Réalisé**",
            "**Budget**",
            "**Écart**",
            "**Écart %**",
            "**Statut**"
          ],
          "rows": [
            [
              "Chiffre d'affaires (k€)",
              "494",
              "500",
              "−6",
              "−1,2 %",
              "🟠"
            ],
            [
              "Marge sur coûts variables (k€)",
              "188",
              "195",
              "−7",
              "−3,6 %",
              "🟠"
            ],
            [
              "Coûts matières (k€)",
              "155,6",
              "152",
              "+3,6",
              "+2,4 %",
              "🔴"
            ],
            [
              "Charges de personnel (k€)",
              "222",
              "220",
              "+2",
              "+0,9 %",
              "🟢"
            ],
            [
              "Frais généraux (k€)",
              "87",
              "90",
              "−3",
              "−3,3 %",
              "🟢"
            ],
            [
              "Résultat d'exploitation (k€)",
              "56",
              "59,6",
              "−3,6",
              "−6,0 %",
              "🟠"
            ],
            [
              "Solde de trésorerie (k€)",
              "45",
              "42",
              "+3",
              "+7,1 %",
              "🟢"
            ],
            [
              "Taux de réalisation du budget annuel",
              "96 %",
              "100 %",
              "−4 pts",
              "—",
              "🟠"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ce tableau de bord offre une vue synthétique du pilotage budgétaire. Il révèle une situation contrastée : des **points favorables** (frais généraux maîtrisés, trésorerie supérieure au budget) et des **alertes** (coûts matières en dépassement — rouge, lié à la surconsommation analysée au §6 ; résultat d'exploitation en retrait de 6 %). Le croisement avec l'analyse des écarts est essentiel : le tableau de bord **signale**, l'analyse des écarts **explique**, l'action **corrige**. C'est la chaîne complète du contrôle budgétaire. Le code couleur permet au dirigeant de concentrer son attention sur les deux ou trois lignes critiques plutôt que sur l'ensemble — application de la gestion par exception."
        },
        {
          "type": "h4",
          "text": "Schéma 6 — Le circuit du reporting *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/06.png",
          "alt": "Schéma 6 — Le circuit du reporting *(obligatoire)*",
          "width": 1892,
          "height": 1012
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente le circuit du reporting : remontée de l'information du terrain (centres opérationnels) vers le contrôle de gestion (consolidation, analyse), puis vers la direction (décision), et redescente des décisions et objectifs ajustés. Sa lecture met en évidence la **boucle de feedback** chère à Anthony : l'information sur les écarts remonte, est analysée, et déclenche des décisions qui redescendent — c'est le mécanisme d'apprentissage et de régulation du pilotage. La qualité du circuit (fiabilité des données, rapidité, lisibilité) conditionne la réactivité de l'organisation. Les outils numériques (BI, §10) transforment ce circuit en le rendant plus rapide et plus riche."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Malgré sa puissance, le modèle budgétaire traditionnel fait l'objet de critiques substantielles qu'il faut connaître."
        }
      ]
    },
    {
      "id": "8-les-limites-du-modele-budgetaire-traditionnel",
      "title": "8. Les limites du modèle budgétaire traditionnel",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; Argyris, Hope & Fraser.*"
        },
        {
          "type": "p",
          "text": "Le budget, outil puissant, présente des limites bien documentées, devenues critiques dans un environnement instable. La **lourdeur** : le processus budgétaire mobilise des ressources considérables (plusieurs mois de travail, allers-retours) pour une valeur parfois discutable — certaines entreprises consacrent l'équivalent de mois-hommes à un exercice vite périmé. La **rigidité** : fixé une fois par an, le budget devient rapidement obsolète dans un environnement changeant ; il enferme l'action dans des objectifs dépassés et peut décourager les opportunités non budgétées (« ce n'est pas dans le budget »). Les **jeux d'acteurs** : le budget étant aussi un outil d'évaluation, les responsables sont incités à négocier des objectifs atteignables (sandbagging — sous-estimer ses capacités pour se ménager une marge) et à consommer leurs budgets pour ne pas les voir réduits (« budget non consommé, budget perdu »). Les **biais comportementaux** : la pression budgétaire peut induire des comportements contre-productifs — courttermisme (sacrifier le long terme pour atteindre l'objectif annuel), manipulations, démotivation."
        },
        {
          "type": "p",
          "text": "Ces critiques ont des fondements académiques. **Chris Argyris**, dès les années 1950, a montré les effets pervers de la pression budgétaire sur les comportements humains (résistance, tensions, jeux défensifs) — le budget mal utilisé démotive plus qu'il ne mobilise. Plusieurs mécanismes comportementaux précis méritent d'être nommés, car ils reviennent dans les sujets. Le **slack budgétaire** (matelas budgétaire) désigne la marge que les responsables intègrent volontairement dans leurs budgets — sous-estimer les recettes, surestimer les coûts — pour s'assurer d'atteindre facilement leurs objectifs ; il dégrade le réalisme du budget. L'**effet cliquet** désigne la tendance à fixer le budget de l'année à partir du réalisé de l'année précédente, ce qui pénalise les bons performeurs (à qui l'on demande toujours plus) et incite à ne pas « trop bien » faire. La **consommation de fin d'exercice** (« il faut dépenser le budget avant qu'il ne soit perdu ») conduit à des dépenses inutiles en fin de période. Le **courttermisme** pousse à sacrifier des investissements de long terme (R&D, formation, maintenance) pour atteindre l'objectif annuel. Ces comportements ne sont pas des défauts moraux des individus mais des **réponses rationnelles** à un système qui les y incite : c'est le système budgétaire mal conçu qui produit ces effets, d'où l'importance de sa conception (découpler prévision et évaluation, objectifs relatifs, etc.)."
        },
        {
          "type": "p",
          "text": "**Jeremy Hope et Robin Fraser**, dans les années 2000, ont porté la critique la plus radicale avec le mouvement **Beyond Budgeting** (§9) : selon eux, le budget traditionnel est non seulement coûteux mais **nuisible**, car il fige l'organisation, encourage les comportements dysfonctionnels et entrave l'adaptation. Ils plaident pour son abandon au profit de mécanismes plus souples."
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Avantages et limites de la gestion budgétaire *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Dimension**",
            "**Avantages**",
            "**Limites**"
          ],
          "rows": [
            [
              "**Prévision**",
              "Anticipation, projection chiffrée",
              "Vite obsolète en environnement instable"
            ],
            [
              "**Coordination**",
              "Cohérence d'ensemble, allocation",
              "Lourdeur, silos, rigidité"
            ],
            [
              "**Communication**",
              "Langage commun, diffusion des objectifs",
              "Information descendante, peu participative"
            ],
            [
              "**Motivation**",
              "Objectifs, responsabilisation, intéressement",
              "Jeux d'acteurs, sandbagging, courttermisme"
            ],
            [
              "**Contrôle**",
              "Gestion par exception, feedback",
              "Focalisation sur le passé, déresponsabilisation"
            ],
            [
              "**Coût du processus**",
              "—",
              "Très élevé (temps, ressources)"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 7 — Budget traditionnel vs pilotage agile *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/07.png",
          "alt": "Graphique 7 — Budget traditionnel vs pilotage agile *(obligatoire)*",
          "width": 1804,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique oppose, sur plusieurs critères (réactivité, coût du processus, fréquence de révision, adaptabilité, fiabilité de la prévision), le budget traditionnel et un pilotage agile (rolling forecast / beyond budgeting). Sa lecture met en évidence les **arbitrages** : le budget traditionnel offre stabilité et discipline mais pèche par sa lenteur de réaction et sa rigidité ; le pilotage agile gagne en réactivité et en adaptabilité, au prix d'une moindre prévisibilité et d'exigences accrues (culture, outils, confiance). Il n'y a pas de modèle universellement supérieur : le choix dépend de la **stabilité de l'environnement** (le budget convient aux environnements stables, l'agilité aux environnements turbulents) et de la maturité de l'organisation. C'est cette réflexion que les nouvelles approches viennent nourrir."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Face à ces limites, de nouvelles approches du pilotage prévisionnel ont émergé."
        }
      ]
    },
    {
      "id": "9-les-nouvelles-approches-du-pilotage-previsionnel",
      "title": "9. Les nouvelles approches du pilotage prévisionnel",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine.*"
        },
        {
          "type": "h3",
          "text": "9.1 Le forecasting"
        },
        {
          "type": "p",
          "text": "Le **forecasting** (prévision glissante actualisée) consiste à réviser régulièrement les prévisions de fin d'année en fonction des réalisations et des nouvelles informations, sans attendre le cycle budgétaire annuel. Le **reforecast** (re-prévision trimestrielle, par exemple) actualise l'atterrissage prévisionnel : il complète le budget figé par une vision réactualisée, plus proche de la réalité. C'est une première réponse, pragmatique, à la rigidité du budget annuel."
        },
        {
          "type": "h3",
          "text": "9.2 Le rolling forecast"
        },
        {
          "type": "p",
          "text": "Le **rolling forecast** (prévision glissante) pousse la logique plus loin : au lieu d'un budget annuel figé, l'organisation maintient en permanence une prévision sur un horizon glissant (par exemple les 12 ou 18 prochains mois), réactualisée chaque trimestre ou chaque mois. À la fin de chaque période, on ajoute une nouvelle période à l'horizon : la prévision « roule » continûment. Avantages : la prévision reste toujours fraîche et pertinente, l'organisation gagne en réactivité, on sort de la « tyrannie » de l'année civile. Inconvénients : exigence d'outils et de processus efficaces, risque de charge récurrente, nécessité d'une culture de la prévision plutôt que du « respect du budget ». La réussite d'un rolling forecast suppose plusieurs conditions : se concentrer sur un nombre **limité d'inducteurs clés** (ne pas re-prévoir tout dans le détail, sous peine d'une charge insoutenable) ; disposer d'**outils** adaptés (BI, modèles automatisés) ; et surtout opérer un **changement culturel** — passer d'une logique de « tenir son budget » à une logique d'« anticiper au mieux », ce qui suppose de découpler la prévision de l'évaluation (un responsable ne doit pas être sanctionné pour avoir révisé honnêtement sa prévision à la baisse). C'est souvent ce verrou culturel, plus que technique, qui freine l'adoption."
        },
        {
          "type": "h3",
          "text": "9.3 Le beyond budgeting"
        },
        {
          "type": "p",
          "text": "Le **beyond budgeting** (Hope & Fraser) propose d'aller au-delà du budget — voire de l'abandonner. Il repose sur deux piliers : des **principes de gestion** adaptatifs (objectifs relatifs et non figés, par exemple battre la concurrence plutôt qu'atteindre un chiffre absolu ; allocation dynamique des ressources ; planification continue) et des **principes de leadership** décentralisés (autonomie, confiance, responsabilisation des équipes). Plutôt que de piloter par un budget annuel contraignant, on pilote par des objectifs relatifs, des prévisions glissantes, un benchmarking interne et externe, et une forte délégation. Quelques entreprises pionnières (souvent citées : Handelsbanken dans la banque) l'ont adopté. Le beyond budgeting reste toutefois exigeant et minoritaire : il suppose une transformation culturelle profonde (lien chapitre 4)."
        },
        {
          "type": "h3",
          "text": "9.4 Le pilotage en temps réel"
        },
        {
          "type": "p",
          "text": "La digitalisation (§10) rend possible un **pilotage en temps réel** : grâce aux systèmes intégrés (ERP) et à la business intelligence, les données de performance sont disponibles en continu, et non plus avec le décalage du reporting mensuel. Les tableaux de bord se mettent à jour automatiquement, les alertes se déclenchent dès le dépassement d'un seuil. Le pilotage devient ainsi plus réactif, se rapprochant de l'idéal d'une régulation continue plutôt que périodique."
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Budget traditionnel vs Rolling Forecast vs Beyond Budgeting *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Critère**",
            "**Budget traditionnel**",
            "**Rolling Forecast**",
            "**Beyond Budgeting**"
          ],
          "rows": [
            [
              "**Horizon**",
              "Année civile figée",
              "Glissant (12-18 mois)",
              "Continu, adaptatif"
            ],
            [
              "**Fréquence de révision**",
              "Annuelle",
              "Trimestrielle / mensuelle",
              "Permanente"
            ],
            [
              "**Objectifs**",
              "Absolus, fixés",
              "Réactualisés",
              "Relatifs (vs concurrence/benchmark)"
            ],
            [
              "**Allocation des ressources**",
              "Annuelle, figée",
              "Ajustable",
              "Dynamique, à la demande"
            ],
            [
              "**Posture managériale**",
              "Contrôle, respect du budget",
              "Anticipation",
              "Autonomie, confiance"
            ],
            [
              "**Réactivité**",
              "Faible",
              "Bonne",
              "Élevée"
            ],
            [
              "**Exigence (culture, outils)**",
              "Modérée",
              "Élevée",
              "Très élevée"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 9 — Architecture du pilotage moderne *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/08.png",
          "alt": "Schéma 9 — Architecture du pilotage moderne *(obligatoire)*",
          "width": 1936,
          "height": 1034
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma articule les composantes du pilotage prévisionnel moderne : un socle stratégique stable (cap, objectifs relatifs), des prévisions glissantes réactualisées, une allocation dynamique des ressources, un pilotage en temps réel par la donnée, et une boucle d'apprentissage continue. Sa lecture montre le déplacement de paradigme : du budget comme **camisole** (objectif annuel figé à respecter) vers le pilotage comme **boussole** (cap maintenu, trajectoire ajustée en continu). Cette évolution ne supprime pas la discipline prévisionnelle — elle la rend continue et adaptative. Pour le contrôleur de gestion, c'est un changement de rôle majeur : de gardien du budget à partenaire de la décision agile."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Cette modernisation du pilotage est portée par la révolution numérique et l'intelligence artificielle."
        }
      ]
    },
    {
      "id": "10-digitalisation-data-et-intelligence-artificielle",
      "title": "10. Digitalisation, data et intelligence artificielle",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine ; lien UE5.*"
        },
        {
          "type": "p",
          "text": "La transformation numérique bouleverse la gestion budgétaire et le pilotage prévisionnel, transformant le métier du contrôleur de gestion. La **business intelligence (BI)** centralise les données de l'entreprise et les restitue dans des tableaux de bord interactifs et automatisés : fini les tableurs ressaisis manuellement, place à des dashboards mis à jour en continu, explorables par chacun (self-service BI). Le **data analytics** exploite les masses de données pour affiner les analyses : détection de corrélations, segmentation fine, identification des leviers de performance. L'**IA générative** assiste désormais le contrôleur : génération automatique de commentaires d'écarts, synthèse de reportings, réponse aux questions en langage naturel sur les données. Les **prévisions augmentées** (machine learning) améliorent la qualité des prévisions de ventes et de trésorerie en exploitant davantage de variables et en apprenant des erreurs passées — souvent plus précises que les méthodes classiques. L'**automatisation du reporting** (RPA, robotic process automation) libère le contrôleur des tâches répétitives de collecte et de mise en forme."
        },
        {
          "type": "p",
          "text": "Ces apports déplacent la valeur du contrôleur de gestion : moins de temps consacré à **produire** les chiffres (automatisé), plus de temps consacré à les **analyser**, à **conseiller** et à **anticiper**. Le contrôleur devient un *business partner*, partenaire de la décision. Cette évolution s'accompagne de vigilances : qualité et gouvernance des données (un pilotage n'est fiable que si les données le sont), maîtrise des outils, esprit critique face aux modèles (une prévision IA reste une prévision, avec ses incertitudes), et maintien du **jugement humain** sur des décisions qui engagent l'organisation. La **qualité des données** est le point névralgique : les outils les plus sophistiqués produisent des analyses fausses à partir de données erronées (« garbage in, garbage out »). Investir dans la BI et l'IA sans investir dans la gouvernance des données (fiabilité, cohérence des référentiels, traçabilité) est voué à l'échec. Par ailleurs, l'automatisation ne dispense pas de **comprendre** : un contrôleur qui ne sait plus refaire un calcul à la main, parce que l'outil le fait, perd la capacité d'en détecter les erreurs. La technologie doit augmenter le jugement, non l'atrophier. Ces vigilances rappellent que la valeur du contrôle de gestion réside finalement moins dans la production de chiffres que dans leur interprétation pertinente au service de la décision."
        },
        {
          "type": "h4",
          "text": "Tableau 9 — Impact de l'IA sur le processus budgétaire *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Étape du processus**",
            "**Apport de l'IA / du numérique**",
            "**Bénéfice**",
            "**Vigilance**"
          ],
          "rows": [
            [
              "**Prévision (ventes, trésorerie)**",
              "Machine learning, prévisions augmentées",
              "Précision, intégration de + de variables",
              "Boîte noire, qualité des données"
            ],
            [
              "**Construction budgétaire**",
              "Automatisation, simulation de scénarios",
              "Rapidité, agilité des hypothèses",
              "Sur-confiance dans les modèles"
            ],
            [
              "**Collecte / consolidation**",
              "RPA, intégration ERP",
              "Gain de temps, fiabilité",
              "Gouvernance des données"
            ],
            [
              "**Contrôle des écarts**",
              "Détection automatique d'anomalies",
              "Réactivité, alertes en temps réel",
              "Calibrage des seuils"
            ],
            [
              "**Reporting / commentaires**",
              "BI, IA générative",
              "Lisibilité, automatisation des analyses",
              "Esprit critique, supervision"
            ],
            [
              "**Aide à la décision**",
              "Analytics prescriptif",
              "Recommandations étayées",
              "Jugement humain final"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 10 — Le contrôle de gestion augmenté par l'IA *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/09.png",
          "alt": "Schéma 10 — Le contrôle de gestion augmenté par l'IA *(obligatoire)*",
          "width": 1892,
          "height": 1188
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente le contrôle de gestion augmenté : autour d'un socle de **données intégrées** (ERP, sources internes et externes) et d'outils d'**IA/analytics**, gravitent les activités du pilotage (prévision, budgétisation, contrôle des écarts, reporting), toutes accélérées et enrichies par la donnée. Au centre, le rôle du contrôleur se déplace de la **production de chiffres** (automatisée) vers l'**analyse, le conseil et l'anticipation** — la valeur ajoutée se concentrant sur l'interprétation, le jugement et la relation avec les décideurs. Le message rejoint les chapitres précédents : la technologie ne remplace pas le contrôleur de gestion, elle le **recentre sur sa valeur de partenaire stratégique**, à condition d'accompagner cette transformation (compétences data, conduite du changement)."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces concepts et outils s'incarnent dans les pratiques d'entreprises."
        }
      ]
    },
    {
      "id": "11-cas-d-entreprises-et-illustrations-professionnelles",
      "title": "11. Cas d'entreprises et illustrations professionnelles",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé — illustrations pédagogiques simplifiées (voir avertissement en tête de chapitre).*"
        },
        {
          "type": "p",
          "text": "**Michelin — du budget au pilotage responsabilisant.** Le groupe est souvent cité pour sa réflexion sur l'allègement des processus de gestion et la responsabilisation des équipes. *Système* : pilotage par objectifs, allègement de la lourdeur budgétaire au profit de l'autonomie. *Enseignement* : alléger le budget au profit de la responsabilisation peut accroître réactivité et engagement (lien §8-9)."
        },
        {
          "type": "p",
          "text": "**Airbus — budgets de programmes et cycles longs.** Dans l'aéronautique, les cycles de développement et de production s'étalent sur des années, rendant le budget annuel insuffisant. *Système* : pilotage par programme (lien chapitre 2.2), budgets pluriannuels, jalons, suivi de la valeur acquise. *Enseignement* : dans les activités à cycle long, le pilotage par projet/programme complète et dépasse le budget annuel."
        },
        {
          "type": "p",
          "text": "**LVMH — décentralisation et discipline financière.** Le groupe de luxe combine une forte **décentralisation** (autonomie des maisons) et une **discipline financière** rigoureuse. *Système* : budgets par maison, reporting consolidé exigeant, équilibre autonomie/contrôle. *Enseignement* : la décentralisation responsabilise sans renoncer au contrôle, via un reporting structuré — illustration de l'articulation centre/entités."
        },
        {
          "type": "p",
          "text": "**Amazon — culture du long terme et frugalité.** L'entreprise est connue pour privilégier le cash-flow de long terme sur le résultat de court terme et pour une culture de frugalité (maîtrise des coûts). *Système* : pilotage par le cash et les indicateurs opérationnels, mécanismes proches du rolling forecast, forte data-driven culture. *Enseignement* : piloter par le cash et le long terme peut l'emporter sur le respect d'un budget annuel (lien §8-9-10)."
        },
        {
          "type": "p",
          "text": "**Decathlon — décentralisation et pilotage par la donnée.** L'entreprise illustre la responsabilisation des équipes (chefs de rayon « patrons » de leur périmètre) et un pilotage appuyé sur la donnée. *Système* : budgets décentralisés, indicateurs de performance accessibles localement, autonomie. *Enseignement* : la décentralisation du pilotage budgétaire, soutenue par la donnée, favorise réactivité et engagement."
        },
        {
          "type": "h4",
          "text": "Tableau 10 — Comparaison des pratiques observées *(comparatif obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Entreprise**",
            "**Trait dominant**",
            "**Système de pilotage**",
            "**Enseignement clé**"
          ],
          "rows": [
            [
              "**Michelin**",
              "Responsabilisation",
              "Allègement du budget, objectifs",
              "Alléger pour responsabiliser"
            ],
            [
              "**Airbus**",
              "Cycles longs",
              "Pilotage par programme, pluriannuel",
              "Le projet complète le budget annuel"
            ],
            [
              "**LVMH**",
              "Décentralisation + discipline",
              "Budgets par maison, reporting consolidé",
              "Autonomie sans renoncer au contrôle"
            ],
            [
              "**Amazon**",
              "Long terme, cash",
              "Pilotage par le cash, data-driven",
              "Le cash et le long terme priment"
            ],
            [
              "**Decathlon**",
              "Décentralisation, donnée",
              "Budgets décentralisés, KPI locaux",
              "Donnée + autonomie = réactivité"
            ]
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces pratiques et concepts convergent vers les attendus de l'épreuve."
        }
      ]
    },
    {
      "id": "12-approfondissements-dscg",
      "title": "12. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; orienté préparation à l'épreuve.*"
        },
        {
          "type": "h3",
          "text": "12.1 L'articulation stratégie–budget"
        },
        {
          "type": "p",
          "text": "Le budget n'a de valeur que relié à la stratégie. Un sujet DSCG attend que l'on montre comment les objectifs stratégiques se déclinent en budgets (plan stratégique → plan opérationnel → budget), et inversement comment le contrôle budgétaire alimente l'apprentissage stratégique (feedback). Éviter de traiter le budget comme un pur exercice technique : toujours le relier au déploiement de la stratégie et à la création de valeur."
        },
        {
          "type": "h3",
          "text": "12.2 L'analyse avancée des écarts"
        },
        {
          "type": "p",
          "text": "C'est le cœur technique le plus probable. Le candidat doit savoir **décomposer** un écart global en sous-écarts (prix/volume pour le CA et la marge ; coût/quantité pour les matières et la MO ; budget/activité/rendement pour les charges indirectes), **vérifier** que la somme des sous-écarts égale l'écart global, et surtout **interpréter** chaque sous-écart (cause, responsabilité, action). La maîtrise du **budget flexible** (recalculé au niveau d'activité réel) est déterminante pour isoler les écarts de performance des écarts de volume."
        },
        {
          "type": "h4",
          "text": "Exemple chiffré complémentaire — écart sur charges indirectes *(approfondissement)*"
        },
        {
          "type": "p",
          "text": "Un atelier avait budgété, pour une activité normale de 10 000 heures-machine, des charges indirectes de 200 000 € (soit un coût standard de 20 €/h, dont 120 000 € de charges fixes et 80 000 € de charges variables, soit 8 €/h variable). Réalisé : 9 000 heures effectives pour une production qui aurait dû nécessiter 9 200 heures standard ; charges indirectes réelles : 190 000 €."
        },
        {
          "type": "ul",
          "items": [
            "*Budget flexible pour 9 000 h réelles* = 120 000 (fixe) + 8 × 9 000 = 192 000 €.",
            "*Écart sur budget* = 190 000 − 192 000 = **− 2 000 € (favorable)** : on a dépensé moins que le budget ajusté.",
            "*Coût imputé (activité réelle)* = 20 × 9 000 = 180 000 €. *Écart sur activité (imputation du fixe)* = 192 000 − 180 000 = **+ 12 000 € (défavorable)** : la sous-activité (9 000 h au lieu de 10 000) a mal absorbé les charges fixes (coût de la sous-activité, ou « coût de chômage »).",
            "*Écart sur rendement* = (9 000 − 9 200) × 20 = **− 4 000 € (favorable)** : on a utilisé moins d'heures que le standard pour la production réalisée (bon rendement)."
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation.** Cette décomposition en trois sous-écarts (budget, activité, rendement) est un classique exigeant du DSCG. Le message managérial : l'écart défavorable principal vient de la **sous-activité** (+ 12 000 €) — un problème de niveau d'activité (commercial ?) et non de gestion de l'atelier, qui a au contraire bien maîtrisé ses dépenses (budget favorable) et son rendement (favorable). Attribuer la responsabilité au bon acteur suppose cette décomposition fine."
        },
        {
          "type": "h3",
          "text": "12.3 Contrôle budgétaire et création de valeur"
        },
        {
          "type": "p",
          "text": "Montrer que le contrôle budgétaire n'est pas une fin (sanctionner) mais un moyen (apprendre et agir pour créer de la valeur). Relier la maîtrise budgétaire à la performance financière et à la création de valeur (un budget bien piloté sécurise les marges et la trésorerie)."
        },
        {
          "type": "h3",
          "text": "12.4 Les limites du budget et les nouvelles formes de pilotage"
        },
        {
          "type": "p",
          "text": "Savoir critiquer le budget traditionnel (Argyris, Hope & Fraser) et présenter les alternatives (rolling forecast, beyond budgeting), en discutant leurs conditions de pertinence (stabilité de l'environnement, maturité, culture). Un sujet contemporain valorise cette mise en perspective critique."
        },
        {
          "type": "h3",
          "text": "12.5 Thèmes les plus fréquemment mobilisés"
        },
        {
          "type": "p",
          "text": "Construction de budgets et d'états prévisionnels (trésorerie, résultat) · décomposition et interprétation des écarts (CA, marge, coûts, charges indirectes) · budget flexible · articulation stratégie-budget · critique du budget et nouvelles approches · digitalisation du pilotage."
        }
      ]
    },
    {
      "id": "13-synthese-generale",
      "title": "13. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "13.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "La gestion budgétaire est l'instrument par lequel l'organisation traduit sa stratégie en objectifs opérationnels et financiers chiffrés. Héritée de l'organisation taylorienne (coût standard, gestion par exception) et théorisée par Anthony comme processus de déploiement stratégique, elle remplit cinq finalités — prévision, coordination, communication, motivation, contrôle — et s'inscrit dans une hiérarchie temporelle reliant plan stratégique, plan opérationnel, budget, contrôle et reporting."
        },
        {
          "type": "p",
          "text": "Le **processus budgétaire**, orchestré par le contrôle de gestion, combine logiques descendante (cadrage stratégique) et ascendante (prévisions du terrain), à travers des navettes itératives mobilisant direction, contrôle de gestion, responsables opérationnels et managers. Les **budgets opérationnels** s'enchaînent dans un ordre logique — ventes (budget déterminant), production, approvisionnements, charges — et convergent vers les **états prévisionnels** : budget de trésorerie (liquidité), compte de résultat prévisionnel (rentabilité) et bilan prévisionnel (structure), qui doivent être conjointement satisfaisants."
        },
        {
          "type": "p",
          "text": "Le **contrôle budgétaire** boucle le dispositif en confrontant le réalisé au prévu. L'**analyse des écarts** décompose les écarts globaux en sous-écarts attribuables à des causes (prix, volume, quantité, rendement, activité), en s'appuyant sur le budget flexible pour isoler les écarts de performance — transformant un chiffre global en diagnostic actionnable. Les **tableaux de bord** et le **reporting** synthétisent ce pilotage selon la gestion par exception. Mais le modèle budgétaire traditionnel souffre de limites réelles — lourdeur, rigidité, jeux d'acteurs, biais comportementaux (Argyris) — qui ont nourri la critique radicale du **beyond budgeting** (Hope & Fraser) et l'émergence d'approches plus agiles : forecasting, **rolling forecast**, pilotage en temps réel. La **digitalisation** (BI, data analytics, IA, prévisions augmentées) accélère cette transformation et recentre le contrôleur de gestion sur son rôle de partenaire de la décision. La conclusion rejoint la problématique : la gestion budgétaire reste un outil puissant de traduction et de pilotage de la stratégie, à condition d'en dépasser les rigidités pour un pilotage prévisionnel agile au service de la création de valeur."
        },
        {
          "type": "h3",
          "text": "13.2 Carte mentale"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-gestion-budgetaire/10.png",
          "alt": "13.2 Carte mentale",
          "width": 2288,
          "height": 1364
        },
        {
          "type": "h3",
          "text": "13.3 Tableau de synthèse final *(obligatoire)*"
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
              "Coût standard, gestion par exception",
              "Taylor",
              "Comparer réel/prévu, gérer par les écarts",
              "Vision mécaniste, rigide",
              "Analyse des écarts"
            ],
            [
              "Contrôle de gestion (feedback)",
              "Anthony",
              "Déployer la stratégie par le budget",
              "Suppose une stratégie claire",
              "Articulation stratégie-budget"
            ],
            [
              "Le budget contractuel",
              "Bouquin",
              "Contractualisation objectifs/moyens",
              "Jeux d'acteurs",
              "Procédure budgétaire"
            ],
            [
              "Leviers de contrôle",
              "Simons",
              "Usage diagnostique vs interactif",
              "Calibrage délicat",
              "Pilotage par le budget"
            ],
            [
              "Effets pervers du budget",
              "Argyris",
              "Risques comportementaux",
              "—",
              "Critique du budget"
            ],
            [
              "Beyond Budgeting",
              "Hope & Fraser",
              "Dépasser le budget annuel",
              "Exigeant, minoritaire",
              "Pilotage agile"
            ],
            [
              "Rolling forecast",
              "Pratique moderne",
              "Prévision glissante réactualisée",
              "Charge récurrente, outils",
              "Pilotage en environnement instable"
            ]
          ]
        }
      ]
    },
    {
      "id": "14-fiche-de-revision-dscg",
      "title": "14. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "14.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Budget** : traduction chiffrée et datée des objectifs et moyens, par centre de responsabilité, pour une période.",
            "**Gestion budgétaire** : prévision + exécution + contrôle budgétaire.",
            "**Budget déterminant** : budget qui conditionne les autres (souvent les ventes).",
            "**Budget flexible** : budget recalculé pour le niveau d'activité réellement atteint.",
            "**Contrôle budgétaire** : comparaison réalisé/prévu, analyse des écarts, action corrective.",
            "**Rolling forecast** : prévision glissante réactualisée sur un horizon mobile."
          ]
        },
        {
          "type": "h3",
          "text": "14.2 Formules à connaître"
        },
        {
          "type": "ul",
          "items": [
            "**Production** = Ventes + Stock final − Stock initial",
            "**Achats** = Consommations + Stock final − Stock initial",
            "**Écart sur prix (vente)** = (Prix réel − Prix budgété) × Qté réelle",
            "**Écart sur volume** = (Qté réelle − Qté budgétée) × Prix budgété",
            "**Écart sur coût** = (Coût réel − Coût standard) × Qté réelle",
            "**Écart sur quantité** = (Qté réelle − Qté standard) × Coût standard",
            "**Écart sur activité (charges indir.)** = Budget flexible − Coût imputé (coût de sous-activité)"
          ]
        },
        {
          "type": "h3",
          "text": "14.3 Méthodes d'analyse des écarts"
        },
        {
          "type": "p",
          "text": "Décomposer l'écart global en sous-écarts (prix/volume ; coût/quantité ; budget/activité/rendement) · vérifier que la somme = écart global · comparer au **budget flexible** pour isoler performance et volume · interpréter chaque sous-écart (cause, responsable, action) · qualifier favorable (F) / défavorable (D)."
        },
        {
          "type": "h3",
          "text": "14.4 Concepts clés"
        },
        {
          "type": "p",
          "text": "Cinq finalités (prévision, coordination, communication, motivation, contrôle) · hiérarchie plan stratégique/opérationnel/budget · budget déterminant · navettes top-down / bottom-up · états prévisionnels (trésorerie/résultat/bilan) · gestion par exception · budget flexible · beyond budgeting · rolling forecast."
        },
        {
          "type": "h3",
          "text": "14.5 Auteurs à retenir"
        },
        {
          "type": "p",
          "text": "Taylor (coût standard) · Anthony (contrôle de gestion, feedback) · Bouquin (budget contractuel) · Kaplan & Norton (BSC) · Simons (leviers de contrôle) · Argyris (effets comportementaux) · Hope & Fraser (beyond budgeting)."
        },
        {
          "type": "h3",
          "text": "14.6 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Confondre budget de trésorerie (flux monétaires, décalages) et compte de résultat (produits/charges) · oublier le budget flexible dans l'analyse des écarts · ne pas vérifier que la somme des sous-écarts = écart global · confondre écart favorable et bonne gestion (un écart F peut masquer un risque) · traiter le budget hors de la stratégie · négliger la dimension comportementale et les jeux d'acteurs · oublier la variation de stock dans les budgets de production/achats."
        },
        {
          "type": "h3",
          "text": "14.7 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Construire les budgets opérationnels (ventes, production, approvisionnements) d'une entreprise.",
            "Élaborer un budget de trésorerie en tenant compte des décalages de paiement.",
            "Construire un compte de résultat et/ou un bilan prévisionnel.",
            "Calculer et décomposer les écarts (CA, marge, coûts, charges indirectes) et les interpréter.",
            "Analyser un écart sur charges indirectes (budget, activité, rendement).",
            "Apprécier les limites du budget et proposer des approches alternatives (rolling forecast, beyond budgeting).",
            "Articuler stratégie et budget dans un cas ; relier contrôle budgétaire et création de valeur."
          ]
        },
        {
          "type": "h3",
          "text": "14.8 Liens avec les autres chapitres"
        },
        {
          "type": "ul",
          "items": [
            "**Amont (Partie 1)** : stratégie et création de valeur — le budget traduit la stratégie en chiffres.",
            "**Partie 2** : pilotage des processus (2.1, coûts standards) ; projets (2.2, budgets et écarts projet, valeur acquise) ; fonctions support (2.3, centres de responsabilité, facturation interne) ; **masse salariale** (2.6, budget de personnel et effets).",
            "**Aval (Partie 3)** : tableaux de bord et performance globale (BSC) ; durabilité (budgets et reporting extra-financiers).",
            "**Transversal** : UE2 (finance — états financiers, trésorerie, BFR) ; UE5 (systèmes d'information — BI, ERP, data)."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — Partie 3, « Gestion budgétaire et pilotage prévisionnel de la performance ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
