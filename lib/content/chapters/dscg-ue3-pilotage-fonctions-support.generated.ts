// Généré par scripts/convert-docx.mjs depuis 03_Pilotage_des_fonctions_support.docx
// Ne pas éditer la leçon ici sans raison : re-générer depuis le Word source.
// description, flashcards et quiz sont complétés à la main après génération.
import type { Chapter } from "../types";

export const chapter: Chapter = {
  "slug": "dscg-ue3-pilotage-fonctions-support",
  "level": "DSCG",
  "ue": "UE3",
  "number": 3,
  "title": "Le pilotage des fonctions support",
  "description": "",
  "durationMin": 45,
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
          "text": "**Le pilotage des fonctions support**"
        },
        {
          "type": "p",
          "text": "*Manuel premium de préparation à l'épreuve nationale*"
        },
        {
          "type": "p",
          "text": "Partie 2 — Sous-partie 2.3 — Volume indicatif : 10 heures"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Manuel premium de préparation à l'épreuve nationale du DSCG — UE3 « Management et contrôle de gestion »** Nouveau référentiel — Partie 2 « Favoriser le déploiement de la stratégie de l'organisation grâce à des outils de contrôle de gestion » — **Sous-partie 2.3 — Volume indicatif : 10 heures**"
        }
      ]
    },
    {
      "id": "note-de-conformite-au-referentiel-a-lire-avant-le-chapitre",
      "title": "Note de conformité au référentiel (à lire avant le chapitre)",
      "blocks": [
        {
          "type": "p",
          "text": "Conformément à la méthodologie retenue pour ce manuel, cette note ouvre le chapitre et signale explicitement les contenus repris, adaptés ou créés."
        },
        {
          "type": "p",
          "text": "**Rattachement au référentiel officiel.** Ce chapitre couvre la sous-partie **2.3 « Le pilotage des processus support » (10 heures)** de la Partie 2. Les **compétences** attendues portent sur la capacité à identifier la contribution des fonctions support à la création de valeur, à en piloter la performance par des indicateurs adaptés, à mettre en œuvre les mécanismes de responsabilisation (centres de responsabilité) et de facturation interne (prix de cession interne), et à concevoir les tableaux de bord correspondants. Les **savoirs associés** mobilisés sont : la notion de fonction (ou processus) support et sa place dans la chaîne de valeur ; le pilotage de la performance des principales fonctions support (achats, logistique, ressources humaines, système d'information) ; les centres de responsabilité et la facturation interne ; les tableaux de bord et le reporting."
        },
        {
          "type": "p",
          "text": "**Articulation avec les autres sous-parties (limites de champ).** Le pilotage des fonctions support mobilise des outils étudiés ailleurs dans le programme, qu'il convient de ne pas dupliquer mais de relier : le calcul des coûts (méthode ABC, coûts complets) relève de la sous-partie 2.1 et est ici mobilisé au service de la facturation interne ; la gestion des ressources humaines fait l'objet de la sous-partie 2.6 (ce chapitre se limite donc au *pilotage de la performance* de la fonction RH, non à la GRH elle-même) ; les tableaux de bord et la performance globale sont approfondis en Partie 3 (sous-parties 3.3). Le présent chapitre se concentre sur ce qui fait la spécificité du pilotage des fonctions support : la difficulté à mesurer une contribution **indirecte** à la valeur, et les mécanismes de responsabilisation et de facturation interne propres à ces fonctions."
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
              "Chaîne de valeur de Porter (activités de soutien)",
              "**Repris-adapté**",
              "Ancien cours (Cours 2, diagnostic stratégique)"
            ],
            [
              "Centres de responsabilité ; centres de coûts discrétionnaires ; effets pervers de sous-optimisation",
              "**Repris-adapté**",
              "Ancien cours (Cours 1, centres de responsabilité)"
            ],
            [
              "Prix de cession interne (PCI)",
              "**Repris-adapté**",
              "Ancien cours (Cours 1 & 3, PCI entre centres)"
            ],
            [
              "Balanced Scorecard de Kaplan & Norton ; déclinaison RH (HR Scorecard)",
              "**Repris-adapté**",
              "Ancien cours (Cours 2 & 4)"
            ],
            [
              "Supply Chain Management ; flux physiques / d'information",
              "**Repris-adapté**",
              "Ancien cours (Cours 3, chaîne logistique)"
            ],
            [
              "Typologie détaillée des fonctions support et leurs KPI",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Pilotage des achats : matrice de Kraljic, Pareto, TCO",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Pilotage logistique, RH, SI : indicateurs et tableaux de bord",
              "**Créé**",
              "Culture professionnelle"
            ],
            [
              "Méthodes de facturation interne et exemple chiffré",
              "**Créé / complété**",
              "Référentiel (facturation interne)"
            ],
            [
              "Digitalisation et IA des fonctions support",
              "**Créé**",
              "Ouverture contemporaine"
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
          "text": "1.1 La montée en puissance des fonctions support"
        },
        {
          "type": "p",
          "text": "Pendant longtemps, la pensée gestionnaire a hiérarchisé implicitement les fonctions de l'entreprise : d'un côté les fonctions « nobles », directement productrices de valeur — la production, la vente — ; de l'autre les fonctions « support », perçues comme de simples centres de coûts à comprimer. Cette représentation est aujourd'hui largement dépassée. Les fonctions support — achats, logistique, ressources humaines, système d'information, finance, juridique, communication, services généraux — ont gagné une importance stratégique considérable, au point que l'avantage concurrentiel d'une organisation se joue souvent dans leur excellence. Une fonction achats performante peut représenter, à elle seule, plusieurs points de marge ; un système d'information bien gouverné conditionne l'agilité de toute l'entreprise ; une fonction RH capable d'attirer et de retenir les talents devient une source d'avantage durable dans une économie de la connaissance."
        },
        {
          "type": "p",
          "text": "Cette montée en puissance s'explique par plusieurs mouvements de fond : l'externalisation croissante de la production (qui fait de la fonction achats un levier majeur), la mondialisation des chaînes d'approvisionnement (qui place la logistique au cœur de la compétitivité), la transformation numérique (qui érige le système d'information en infrastructure critique) et la tertiarisation de l'économie (qui fait du capital humain le principal actif de nombreuses organisations). Cette évolution s'accompagne d'un changement de posture : la fonction support cherche à devenir un *business partner* — un partenaire d'affaires qui comprend les enjeux des métiers qu'il sert et y contribue activement — plutôt qu'un prestataire passif exécutant des demandes. Le contrôleur de gestion lui-même incarne cette mutation : longtemps cantonné à la production de chiffres, il est appelé à devenir un conseiller de la décision, au plus près des opérations. Cette transformation des fonctions support est indissociable de celle du contrôle de gestion, dont elles sont à la fois l'objet (ce qu'il pilote) et, pour la finance, l'incarnation."
        },
        {
          "type": "h3",
          "text": "1.2 Une contribution à la performance globale, mais indirecte"
        },
        {
          "type": "p",
          "text": "La spécificité des fonctions support tient à ce que leur contribution à la valeur est **indirecte**. Une fonction commerciale génère un chiffre d'affaires mesurable ; une fonction support, elle, crée de la valeur en permettant aux fonctions primaires d'être plus efficaces, plus rapides, moins coûteuses ou plus innovantes. Cette médiation rend leur évaluation délicate : comment mesurer la contribution de la DSI à la performance commerciale ? Comment isoler l'effet de la politique RH sur la productivité ? La difficulté n'est pas de constater leur coût — il est, lui, parfaitement visible — mais d'apprécier la valeur qu'elles produisent en regard de ce coût."
        },
        {
          "type": "h3",
          "text": "1.3 La difficulté de mesure et le rôle du contrôle de gestion"
        },
        {
          "type": "p",
          "text": "C'est précisément cette asymétrie — un coût visible, une valeur diffuse — qui explique pourquoi les fonctions support sont traditionnellement gérées comme des **centres de coûts discrétionnaires**, dont l'ancien cours rappelle qu'ils sont « toujours particulièrement difficiles à contrôler » car leur niveau de dépense n'est pas mécaniquement lié à un niveau d'activité. Le rôle du contrôle de gestion est de sortir de cette impasse en dotant ces fonctions d'**indicateurs de performance** pertinents (qui mesurent le service rendu et pas seulement la dépense), de mécanismes de **responsabilisation** (centres de responsabilité), de dispositifs de **facturation interne** (qui rendent visible la consommation de support par les clients internes) et de **tableaux de bord** qui relient leur activité à la performance globale. Il s'agit de transformer une « boîte noire » de coûts en un dispositif piloté, dont la contribution à la valeur devient lisible et améliorable."
        },
        {
          "type": "h3",
          "text": "1.4 Problématique centrale"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Problématique centrale.** Comment le contrôle de gestion peut-il dépasser la vision réductrice des fonctions support comme simples centres de coûts, pour rendre visible et pilotable leur contribution — indirecte mais stratégique — à la création de valeur et à la performance globale de l'organisation ?"
        },
        {
          "type": "p",
          "text": "Le chapitre y répond en situant d'abord les fonctions support dans la chaîne de valeur (§2), puis en examinant le pilotage de la performance des principales d'entre elles — achats (§3), logistique (§4), ressources humaines (§5), système d'information (§6) — avant d'exposer les mécanismes transversaux du contrôle de gestion des fonctions support : centres de responsabilité et facturation interne (§7), tableaux de bord intégrés (§8). Il se clôt sur la digitalisation et l'IA (§9), les approfondissements DSCG (§10), la synthèse (§11) et la fiche de révision (§12)."
        }
      ]
    },
    {
      "id": "objectifs-pedagogiques",
      "title": "Objectifs pédagogiques",
      "blocks": [
        {
          "type": "p",
          "text": "**Savoirs.** Définir la notion de fonction support et la situer dans la chaîne de valeur de Porter ; connaître les principales fonctions support et leurs missions ; connaître les types de centres de responsabilité et la notion de centre de coûts discrétionnaire ; connaître les méthodes de facturation interne et la notion de prix de cession interne ; connaître la logique du Balanced Scorecard."
        },
        {
          "type": "p",
          "text": "**Savoir-faire.** Construire et interpréter les KPI des fonctions support ; bâtir une matrice de Kraljic et un diagramme de Pareto des achats ; cartographier les flux logistiques ; construire un tableau de bord (RH, achats, logistique, IT) ; mettre en œuvre une facturation interne par coûts complets ou ABC sur un exemple chiffré."
        },
        {
          "type": "p",
          "text": "**Compétences.** Évaluer la contribution d'une fonction support à la création de valeur ; piloter sa performance ; concevoir un dispositif de responsabilisation et de facturation interne ; formuler des préconisations managériales étayées."
        },
        {
          "type": "p",
          "text": "**Compétences DSCG visées (sous-partie 2.3).** Identifier la contribution des fonctions support à la valeur ; piloter la performance des processus support ; mettre en œuvre les centres de responsabilité et la facturation interne ; concevoir les tableaux de bord et le reporting associés."
        }
      ]
    },
    {
      "id": "2-les-fonctions-support-dans-l-organisation",
      "title": "2. Les fonctions support dans l'organisation",
      "blocks": [
        {
          "type": "h3",
          "text": "2.1 Définition et caractéristiques"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : cadre conceptuel créé, s'appuyant sur la chaîne de valeur de Porter reprise de l'ancien cours.*"
        },
        {
          "type": "h4",
          "text": "2.1.1 La notion de fonction support"
        },
        {
          "type": "p",
          "text": "Une **fonction support** (ou fonction de soutien) est une fonction dont la mission n'est pas de produire directement l'offre vendue au client final, mais de **fournir aux autres fonctions les ressources, services et conditions** nécessaires à leur bon fonctionnement. Elle se caractérise par trois traits : elle sert des **clients internes** (les autres fonctions) plutôt que le marché ; sa contribution à la valeur est **indirecte** (médiatisée par la performance des fonctions qu'elle sert) ; et son niveau d'activité est souvent **discrétionnaire**, c'est-à-dire non mécaniquement déterminé par le volume de production."
        },
        {
          "type": "h4",
          "text": "2.1.2 La place dans la chaîne de valeur de Porter"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Cours 2).*"
        },
        {
          "type": "p",
          "text": "Le cadre théorique de référence est la **chaîne de valeur** de Michael Porter (1985). Porter distingue cinq **activités primaires** (logistique interne, production, logistique externe, commercialisation et vente, services) qui concourent directement à l'élaboration et à la livraison de l'offre, et quatre **activités de soutien** (approvisionnements/achats, développement technologique, gestion des ressources humaines, infrastructure de la firme — direction, finance, juridique) qui irriguent transversalement les activités primaires. La marge de l'entreprise — différence entre la valeur créée et le coût des activités — résulte de la performance combinée de toutes ces activités. L'apport décisif de Porter, pour notre propos, est de poser que **les activités de soutien participent pleinement à la création de valeur** : elles ne sont pas un mal nécessaire mais une composante de l'avantage concurrentiel. Une entreprise peut se différencier par l'excellence de sa logistique (lien chapitre suivant), de ses achats ou de son système d'information autant que par son produit."
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Regard DSCG.** Le piège classique consiste à raisonner les fonctions support uniquement en coûts. L'examinateur attend l'inverse : montrer comment une fonction support *crée de la valeur* (réduction du coût total, amélioration de la qualité, du délai, de l'innovation ou de l'expérience client interne) et comment cette valeur, bien que diffuse, peut être *mesurée* par des indicateurs pertinents. Toujours relier la fonction support à la stratégie et à la performance globale."
        },
        {
          "type": "h4",
          "text": "2.1.3 De Porter à Kaplan et Norton : mesurer la contribution indirecte"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Cours 2 & 4).*"
        },
        {
          "type": "p",
          "text": "Si Porter fonde la *contribution* des fonctions support à la valeur, **Kaplan et Norton** (1992, *Balanced Scorecard*) fournissent le cadre pour la *mesurer*. Leur tableau de bord prospectif articule quatre perspectives — financière, client, processus internes, apprentissage organisationnel — et montre que la performance financière (résultat) repose sur des leviers situés en amont, notamment dans les processus internes et le capital humain et informationnel. Or ces leviers sont précisément le domaine des fonctions support. Le Balanced Scorecard offre ainsi le chaînon logique : il relie la performance des fonctions support (apprentissage, processus) à la performance client puis financière, rendant visible une contribution autrement invisible. Nous y reviendrons au §8."
        },
        {
          "type": "h3",
          "text": "2.2 Typologie des fonctions support"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé.*"
        },
        {
          "type": "p",
          "text": "Les fonctions support forment un ensemble hétérogène. Le tableau suivant en présente les principales, avec leurs missions, leurs clients internes et leurs indicateurs clés — matière première des tableaux de bord développés plus loin."
        },
        {
          "type": "h4",
          "text": "Tableau 1 — Typologie des fonctions support *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction support**",
            "**Missions principales**",
            "**Clients internes**",
            "**Indicateurs clés**"
          ],
          "rows": [
            [
              "**Ressources humaines**",
              "Recruter, former, rémunérer, gérer les compétences et le climat social",
              "Toutes les directions",
              "Turnover, absentéisme, délai de recrutement, % masse salariale en formation"
            ],
            [
              "**Achats**",
              "Sélectionner les fournisseurs, négocier, sécuriser les approvisionnements",
              "Production, R&D, toutes fonctions",
              "Coût total d'acquisition, économies (*savings*), taux de service fournisseur, taux de dépendance"
            ],
            [
              "**Logistique / Supply Chain**",
              "Approvisionner, stocker, transporter, livrer",
              "Production, commerce, clients",
              "Taux de service, rotation des stocks, coût logistique / CA, taux de livraison à l'heure"
            ],
            [
              "**Système d'information (DSI)**",
              "Fournir et sécuriser les SI, supporter les utilisateurs",
              "Toutes les directions",
              "Disponibilité (%), délai de résolution des incidents, coût IT / CA, taux d'incidents de sécurité"
            ],
            [
              "**Finance / Contrôle de gestion**",
              "Tenir les comptes, financer, piloter la performance",
              "Direction, toutes fonctions",
              "Délai de clôture, coût de la fonction finance / CA, délai de production du reporting"
            ],
            [
              "**Juridique**",
              "Sécuriser juridiquement, gérer les contrats et contentieux",
              "Direction, achats, commerce",
              "Délai de traitement des contrats, taux de contentieux gagnés, coût juridique / CA"
            ],
            [
              "**Communication**",
              "Gérer l'image interne et externe",
              "Direction, marketing, RH",
              "Notoriété, engagement interne, retombées presse"
            ],
            [
              "**Services généraux**",
              "Gérer les locaux, le parc, les moyens communs",
              "Tous les collaborateurs",
              "Coût au m², taux d'occupation, satisfaction des services"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 1 — Cartographie des fonctions support dans l'entreprise *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/01.png",
          "alt": "Schéma 1 — Cartographie des fonctions support dans l'entreprise *(obligatoire)*",
          "width": 2200,
          "height": 1320
        },
        {
          "type": "h4",
          "text": "Encadré — Focus professionnel"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Focus professionnel.** Beaucoup de grands groupes ont regroupé leurs fonctions support dans des **centres de services partagés** (CSP, ou *Shared Service Centers*) : une entité unique mutualise, par exemple, la paie, la comptabilité fournisseurs ou le support informatique pour l'ensemble des filiales. L'objectif est de réaliser des économies d'échelle, de standardiser les processus et de professionnaliser le service — tout en facturant les prestations aux entités clientes (cf. §7). On y reviendra dans les approfondissements (§10).\n**Transition.** Après cette vue d'ensemble, examinons le pilotage de la performance des quatre fonctions support les plus fréquemment mobilisées dans les sujets DSCG, en commençant par les achats."
        }
      ]
    },
    {
      "id": "3-le-pilotage-de-la-fonction-achats",
      "title": "3. Le pilotage de la fonction achats",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé (Kraljic, Pareto, TCO) ; effet pervers de sous-optimisation repris de l'ancien cours.*"
        },
        {
          "type": "h3",
          "text": "3.1 Les enjeux stratégiques des achats"
        },
        {
          "type": "p",
          "text": "Dans une économie où la part des achats dans le chiffre d'affaires dépasse fréquemment 50 % — et atteint 70 à 80 % dans l'industrie assemblière (automobile, aéronautique) —, la fonction achats est devenue un levier de compétitivité de premier ordre. Un euro économisé sur les achats se répercute intégralement sur le résultat, là où un euro de chiffre d'affaires supplémentaire ne contribue au résultat qu'à hauteur de sa marge. C'est l'**effet de levier des achats** : dans une entreprise dégageant 5 % de marge, réduire les achats de 2 % a le même effet sur le résultat qu'augmenter le chiffre d'affaires de près de 40 %. Mais la fonction achats moderne ne se réduit pas à « acheter moins cher » : elle sécurise les approvisionnements, garantit la qualité, réduit les délais, capte l'innovation des fournisseurs et intègre désormais les critères de durabilité (achats responsables, lien ESG)."
        },
        {
          "type": "h4",
          "text": "Encadré — Erreurs fréquentes"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Erreurs fréquentes.** Réduire la performance achats au seul **prix unitaire** est l'erreur la plus répandue. L'ancien cours en donne l'illustration : un acheteur qui « fait des économies sur les achats, mais au détriment de la qualité des matières premières » augmente les rebuts en production — le responsable production doit alors consommer davantage de matière, ce qui **dégrade la performance globale**. C'est l'effet pervers classique de la responsabilisation par centres : optimiser localement un centre peut détériorer le résultat d'ensemble. D'où la nécessité de raisonner en **coût total** et en performance transverse."
        },
        {
          "type": "h3",
          "text": "3.2 La mesure de la performance des achats"
        },
        {
          "type": "p",
          "text": "La performance achats s'apprécie sur quatre dimensions, qu'aucun indicateur unique ne saurait résumer."
        },
        {
          "type": "p",
          "text": "Le **coût total d'acquisition** (TCO, *Total Cost of Ownership*) dépasse le prix d'achat pour intégrer l'ensemble des coûts liés à la possession et à l'usage d'un bien : prix, transport, douane, coûts de stockage, coûts de non-qualité, coûts de maintenance, coût de fin de vie. Un fournisseur moins cher à l'achat mais générant des défauts, des retards ou des coûts logistiques élevés peut se révéler plus coûteux en TCO — d'où l'importance de cet indicateur intégrateur."
        },
        {
          "type": "p",
          "text": "La **qualité fournisseurs** se mesure par le taux de conformité des livraisons, le taux de défauts (souvent en *ppm*, parties par million), le nombre de litiges. Les **délais** s'apprécient par le taux de livraison à l'heure (*on-time delivery*) et le délai moyen d'approvisionnement (*lead time*). Enfin, l'**innovation** captée auprès des fournisseurs (codéveloppement, suggestions) constitue une dimension de plus en plus valorisée."
        },
        {
          "type": "h4",
          "text": "Tableau 2 — KPI de la fonction achats *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule / nature**",
            "**Ce qu'il pilote**",
            "**Cible indicative**"
          ],
          "rows": [
            [
              "**Coût total d'acquisition (TCO)**",
              "Prix + coûts annexes (transport, qualité, stockage…)",
              "Décision de sélection au-delà du prix",
              "Minimisation"
            ],
            [
              "**Économies réalisées (*savings*)**",
              "Écart prix négocié / prix de référence",
              "Performance de négociation",
              "> objectif annuel"
            ],
            [
              "**Taux de service fournisseur**",
              "Livraisons conformes et à l'heure / total",
              "Fiabilité des approvisionnements",
              "> 95 %"
            ],
            [
              "**Taux de dépendance fournisseur**",
              "CA réalisé avec un fournisseur / total achats",
              "Maîtrise du risque",
              "< seuil de risque (ex. 20 %)"
            ],
            [
              "**Taux de défauts (ppm)**",
              "Pièces défectueuses / million livrées",
              "Qualité entrante",
              "Minimisation"
            ],
            [
              "**Délai d'approvisionnement (*lead time*)**",
              "Temps commande → réception",
              "Réactivité de la chaîne",
              "Réduction"
            ],
            [
              "**Part des achats sous contrat**",
              "Achats cadrés / total",
              "Maîtrise et conformité",
              "Maximisation"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "3.2.1 Le diagramme de Pareto des dépenses fournisseurs"
        },
        {
          "type": "p",
          "text": "Le **diagramme de Pareto** (loi des 80/20) appliqué aux achats révèle qu'une faible proportion de fournisseurs (ou de catégories) concentre l'essentiel de la dépense. Typiquement, 20 % des fournisseurs représentent 80 % du montant acheté. Cette analyse oriente l'effort : les acheteurs concentrent leur temps de négociation et leur vigilance sur les fournisseurs « classe A » (forts montants), tout en rationalisant la gestion de la masse des petits fournisseurs (classe C), par exemple via des cartes d'achat ou des catalogues."
        },
        {
          "type": "h4",
          "text": "Graphique 2 — Diagramme de Pareto des dépenses fournisseurs *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/02.png",
          "alt": "Graphique 2 — Diagramme de Pareto des dépenses fournisseurs *(obligatoire)*",
          "width": 1804,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Sur le graphique, les fournisseurs F1 à F3 (classe A) concentrent environ 75 % de la dépense alors qu'ils ne représentent que 3 sur 10 des fournisseurs : ils justifient une gestion stratégique (contrats-cadres, revues de performance, codéveloppement). Les fournisseurs F4-F6 (classe B) appellent un suivi standard. Les fournisseurs F7 à F10 (classe C), nombreux mais marginaux en valeur, doivent être gérés au moindre coût administratif. Le contrôle de gestion exploite cette segmentation pour allouer la ressource rare — le temps d'acheteur — là où elle crée le plus de valeur."
        },
        {
          "type": "h4",
          "text": "3.2.2 La matrice de Kraljic"
        },
        {
          "type": "p",
          "text": "La **matrice de Kraljic** (1983) est l'outil stratégique de référence de la fonction achats. Elle classe les catégories d'achats selon deux axes : l'**impact sur le résultat / le poids financier** (en ordonnée) et le **risque d'approvisionnement / la complexité du marché fournisseur** (en abscisse). Le croisement définit quatre quadrants appelant chacun une stratégie d'achat distincte."
        },
        {
          "type": "h4",
          "text": "Matrice 3 — La matrice de Kraljic *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/03.png",
          "alt": "Matrice 3 — La matrice de Kraljic *(obligatoire)*",
          "width": 1672,
          "height": 1320
        },
        {
          "type": "p",
          "text": "**Interprétation et exploitation managériale.** Les achats **simples** (faible risque, faible poids : fournitures de bureau) se gèrent au moindre coût administratif (automatisation, catalogues). Les achats **leviers** (faible risque, fort poids : matières premières standard à plusieurs sources) se pilotent par la mise en concurrence pour maximiser les économies. Les achats **critiques / goulots** (fort risque, faible poids : composant rare mais peu coûteux) exigent de sécuriser l'approvisionnement (stocks de sécurité, fournisseurs alternatifs). Les achats **stratégiques** (fort risque, fort poids : composant clé en source unique) appellent un **partenariat de long terme** avec le fournisseur (codéveloppement, contrats pluriannuels, intégration). La matrice de Kraljic illustre parfaitement le passage d'une fonction achats « tactique » (acheter au meilleur prix) à une fonction « stratégique » (gérer un portefeuille de relations fournisseurs créatrices de valeur)."
        },
        {
          "type": "h4",
          "text": "Encadré — Point méthode"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Point méthode.** Pour positionner un achat dans la matrice de Kraljic : (1) évaluer le **poids financier** (part dans le total des achats, impact sur le coût de revient) ; (2) évaluer le **risque d'approvisionnement** (nombre de fournisseurs disponibles, substituabilité, situation géopolitique, dépendance technique) ; (3) placer l'achat dans le quadrant correspondant ; (4) en déduire la stratégie (gérer, mettre en concurrence, sécuriser, ou nouer un partenariat). Ne jamais appliquer une stratégie uniforme à tous les achats : c'est la différenciation qui crée de la valeur.\n**Transition.** Une fois les achats sécurisés, c'est la fonction logistique qui assure le flux des biens depuis les fournisseurs jusqu'aux clients."
        }
      ]
    },
    {
      "id": "4-le-pilotage-de-la-fonction-logistique",
      "title": "4. Le pilotage de la fonction logistique",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; Supply Chain Management et flux physiques/d'information repris de l'ancien cours (Cours 3).*"
        },
        {
          "type": "h3",
          "text": "4.1 De la logistique à la supply chain"
        },
        {
          "type": "p",
          "text": "La logistique a connu une mutation profonde, que l'ancien cours résume bien : du simple acheminement, elle est passée au **Supply Chain Management** (gestion de la chaîne logistique), qui « vise à améliorer la gestion des flux (physiques et d'information) qui vont du fournisseur du fournisseur jusqu'au client du client ». Cette vision étendue fait de la logistique un processus transverse, intégrant approvisionnement, production, stockage, transport et distribution, et un déterminant majeur de la satisfaction client (délai, disponibilité) comme du besoin en fonds de roulement (niveau des stocks)."
        },
        {
          "type": "h4",
          "text": "Cartographie 4 — Flux physiques et flux d'information *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/04.png",
          "alt": "Cartographie 4 — Flux physiques et flux d'information *(obligatoire)*",
          "width": 2200,
          "height": 968
        },
        {
          "type": "p",
          "text": "**Interprétation.** La cartographie distingue deux flux de sens inverse : le **flux physique** des biens (du fournisseur vers le client, de gauche à droite) et le **flux d'information** (commandes, prévisions, du client vers l'amont, de droite à gauche), auxquels s'ajoute le **flux financier**. La performance de la supply chain tient à la synchronisation de ces flux : un flux d'information fiable et rapide (prévisions partagées, EDI) permet de réduire les stocks tout en maintenant le taux de service — c'est l'enjeu de la lutte contre l'**effet coup de fouet** (*bullwhip effect*), amplification des variations de la demande à mesure que l'on remonte la chaîne. Cet effet, identifié notamment par Forrester puis Lee, illustre une défaillance de coordination : une légère variation de la demande finale, mal transmise, se traduit par des sur-réactions de commandes de plus en plus fortes en remontant vers les fournisseurs amont, générant alternativement surstocks et ruptures. Sa correction passe par le partage d'information (visibilité de la demande réelle tout au long de la chaîne), la réduction des délais et la collaboration entre maillons — autant de leviers qui font de la supply chain un objet de pilotage transversal, et non la juxtaposition d'optimisations locales. On retrouve ici, à l'échelle inter-organisationnelle, le risque de sous-optimisation déjà rencontré entre centres de responsabilité."
        },
        {
          "type": "h3",
          "text": "4.2 La mesure de la performance logistique"
        },
        {
          "type": "p",
          "text": "La performance logistique s'apprécie au carrefour de trois exigences souvent contradictoires : le **service** (être disponible, livrer à l'heure), le **coût** (transport, stockage, manutention) et le **capital immobilisé** (niveau des stocks). Le pilotage consiste à arbitrer entre elles."
        },
        {
          "type": "p",
          "text": "Le **taux de service** mesure la capacité à satisfaire la demande (lignes de commande livrées complètes et à l'heure / total). La **rotation des stocks** (coût des ventes / stock moyen) mesure l'efficacité de la gestion des stocks : une rotation élevée libère de la trésorerie mais accroît le risque de rupture. Les **coûts logistiques** rapportés au chiffre d'affaires mesurent l'efficience globale. Le **délai de livraison** mesure la réactivité."
        },
        {
          "type": "h4",
          "text": "Tableau 4 — Indicateurs logistiques *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule**",
            "**Ce qu'il pilote**",
            "**Tension avec**"
          ],
          "rows": [
            [
              "**Taux de service**",
              "Lignes livrées complètes et à l'heure / total",
              "Satisfaction client",
              "Coût des stocks"
            ],
            [
              "**Rotation des stocks**",
              "Coût des ventes / stock moyen",
              "Efficacité de gestion, BFR",
              "Risque de rupture"
            ],
            [
              "**Couverture de stock (jours)**",
              "Stock moyen / consommation journalière",
              "Immobilisation",
              "Taux de service"
            ],
            [
              "**Coût logistique / CA**",
              "Coûts (transport+stockage+manut.) / CA",
              "Efficience globale",
              "Niveau de service"
            ],
            [
              "**Taux de livraison à l'heure (OTD)**",
              "Livraisons à l'heure / total",
              "Fiabilité",
              "Coût du transport express"
            ],
            [
              "**Taux de rupture**",
              "Demandes non satisfaites / total",
              "Disponibilité",
              "Coût des stocks"
            ],
            [
              "**Taux de remplissage des camions**",
              "Charge transportée / capacité",
              "Efficience transport, empreinte CO₂",
              "Délai"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 5 — Évolution du taux de service et du coût logistique *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/05.png",
          "alt": "Graphique 5 — Évolution du taux de service et du coût logistique *(obligatoire)*",
          "width": 1804,
          "height": 1056
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le graphique met en regard deux courbes sur douze mois : le taux de service (en %) et le coût logistique (en % du CA). On observe le **dilemme fondamental** de la logistique : viser un taux de service très élevé (proche de 100 %) fait croître le coût de manière plus que proportionnelle (stocks de sécurité, transports express). Le pilotage ne consiste pas à maximiser le service ni à minimiser le coût, mais à trouver le **point d'équilibre** cohérent avec le positionnement stratégique : une enseigne de luxe ou de la santé privilégiera le service ; un *discounter* privilégiera le coût. Le contrôle de gestion éclaire cet arbitrage en chiffrant le coût marginal de chaque point de service supplémentaire."
        },
        {
          "type": "h4",
          "text": "Encadré — Bonnes pratiques"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Bonnes pratiques.** Les organisations logistiques performantes (Amazon, Zara, Toyota) partagent quelques principes : pilotage par la demande réelle plutôt que par les prévisions (logique « tirée » du *lean*, lien chapitre 1) ; partage de l'information le long de la chaîne pour atténuer l'effet coup de fouet ; segmentation des flux (un circuit rapide et coûteux pour les produits stratégiques, un circuit économique pour les autres) ; mesure systématique du taux de service du point de vue du client final, et non de chaque maillon isolé.\n**Transition.** Au-delà des flux de biens, c'est le capital humain qui constitue, dans l'économie de la connaissance, la ressource support la plus stratégique."
        }
      ]
    },
    {
      "id": "5-le-pilotage-de-la-fonction-ressources-humaines",
      "title": "5. Le pilotage de la fonction ressources humaines",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé pour les KPI ; HR Scorecard repris de l'ancien cours (Cours 4). Le pilotage*de la performance*RH relève de 2.3 ; la GRH proprement dite relève de 2.6.*"
        },
        {
          "type": "h3",
          "text": "5.1 RH et création de valeur"
        },
        {
          "type": "p",
          "text": "La fonction RH illustre de manière exemplaire le passage du « centre de coûts » au « créateur de valeur ». Dans une économie tertiarisée et fondée sur la connaissance, le **capital humain** — l'ensemble des compétences, savoirs et savoir-faire des collaborateurs — est souvent le principal actif de l'organisation, bien qu'il n'apparaisse pas au bilan. La fonction RH crée de la valeur en développant ce capital (formation, gestion des compétences), en l'attirant et en le retenant (marque employeur, fidélisation), et en mobilisant l'**engagement** des collaborateurs, dont de nombreuses études établissent le lien avec la performance opérationnelle (productivité, qualité, satisfaction client)."
        },
        {
          "type": "p",
          "text": "Kaplan et Norton, dans le Balanced Scorecard, placent précisément le capital humain dans la perspective « apprentissage et croissance », à la racine de la chaîne de causalité qui mène à la performance financière : des collaborateurs compétents et engagés améliorent les processus internes, ce qui améliore la satisfaction client, ce qui améliore le résultat. La fonction RH se trouve ainsi à l'origine de la création de valeur, même si sa contribution est la plus indirecte de toutes."
        },
        {
          "type": "h3",
          "text": "5.2 La mesure de la performance RH"
        },
        {
          "type": "p",
          "text": "La performance RH se mesure sur plusieurs registres. L'**absentéisme** (heures d'absence / heures théoriques) est un indicateur de climat social et de conditions de travail, dont le coût (remplacement, désorganisation, lien avec les coûts cachés au sens de Savall) est souvent sous-estimé. Le **turnover** (départs / effectif moyen) mesure la fidélisation ; un turnover élevé détruit du capital humain et génère des coûts de recrutement et de formation. La **productivité** (valeur ajoutée ou CA par salarié) mesure l'efficience. L'effort de **formation** (% de la masse salariale, heures par salarié) mesure l'investissement dans le capital humain. Le **climat social** (enquêtes d'engagement, eNPS — *employee Net Promoter Score*) mesure l'état de la ressource humaine."
        },
        {
          "type": "p",
          "text": "L'enjeu, pour le contrôle de gestion, est de **monétiser** ces indicateurs apparemment qualitatifs afin d'en révéler l'impact économique. Les travaux de Henri Savall sur les **coûts cachés** (théorie socio-économique des organisations) ont montré que l'absentéisme, le turnover, les défauts de qualité et les écarts de productivité engendrent des coûts considérables — souvent plusieurs milliers d'euros par salarié et par an — que la comptabilité générale ne fait pas apparaître. Un point d'absentéisme supplémentaire, par exemple, se traduit par des coûts de remplacement, de désorganisation, de sur-temps et de non-qualité bien réels. Chiffrer ces coûts cachés permet de justifier économiquement les investissements RH (amélioration des conditions de travail, fidélisation) et de sortir du débat stérile où la RH n'est vue que comme une charge. C'est un puissant argument pour démontrer que la performance sociale et la performance économique, loin de s'opposer, se renforcent mutuellement — fondement de la notion de performance globale (lien Partie 3)."
        },
        {
          "type": "h4",
          "text": "Tableau 5 — KPI de la fonction RH *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule**",
            "**Ce qu'il mesure**",
            "**Seuil d'alerte**"
          ],
          "rows": [
            [
              "**Taux d'absentéisme**",
              "Heures d'absence / heures théoriques",
              "Climat, conditions de travail",
              "> 5–6 %"
            ],
            [
              "**Taux de turnover**",
              "Départs / effectif moyen",
              "Fidélisation, attractivité",
              "> seuil sectoriel"
            ],
            [
              "**Productivité**",
              "Valeur ajoutée (ou CA) / effectif",
              "Efficience du capital humain",
              "< benchmark"
            ],
            [
              "**Effort de formation**",
              "Dépenses de formation / masse salariale",
              "Investissement compétences",
              "< obligation / benchmark"
            ],
            [
              "**Délai de recrutement**",
              "Temps poste ouvert → pourvu",
              "Réactivité RH",
              "> cible"
            ],
            [
              "**Engagement (eNPS)**",
              "Enquête (promoteurs − détracteurs)",
              "Mobilisation, climat",
              "< 0"
            ],
            [
              "**Coût de la fonction RH / effectif**",
              "Coûts RH / effectif",
              "Efficience de la fonction",
              "> benchmark"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Graphique 6 — Radar de comparaison de trois entités (BU) *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/06.png",
          "alt": "Graphique 6 — Radar de comparaison de trois entités (BU) *(obligatoire)*",
          "width": 1804,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le radar compare trois unités (BU A, B, C) sur cinq dimensions normalisées (turnover inversé, absentéisme inversé, productivité, satisfaction, formation — toutes orientées « plus c'est grand, mieux c'est »). La **BU A** présente un profil équilibré et performant ; la **BU B** affiche une bonne productivité mais une satisfaction et une formation faibles — situation à risque, car une productivité élevée obtenue au prix d'un climat dégradé n'est pas durable (risque de turnover et d'absentéisme différés) ; la **BU C** investit fortement dans la formation et la satisfaction mais peine encore en productivité — profil d'une unité en construction. Le radar, en superposant les profils, révèle d'un coup d'œil les forces, les faiblesses et surtout les **déséquilibres** qu'un simple tableau de chiffres masquerait. Il oriente l'action RH différenciée par unité."
        },
        {
          "type": "h4",
          "text": "Tableau 5 bis — Tableau de bord RH synthétique *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Domaine**",
            "**Indicateur**",
            "**N-1**",
            "**N**",
            "**Cible**",
            "**Tendance**"
          ],
          "rows": [
            [
              "**Fidélisation**",
              "Turnover",
              "14 %",
              "12 %",
              "10 %",
              "↗ amélioration"
            ],
            [
              "**Climat**",
              "Absentéisme",
              "5,2 %",
              "5,8 %",
              "4,5 %",
              "↘ dégradation"
            ],
            [
              "**Climat**",
              "eNPS",
              "+8",
              "+12",
              "+20",
              "↗ amélioration"
            ],
            [
              "**Compétences**",
              "Formation (% MS)",
              "2,4 %",
              "2,9 %",
              "3,0 %",
              "↗ amélioration"
            ],
            [
              "**Efficience**",
              "VA / salarié (k€)",
              "78",
              "82",
              "85",
              "↗ amélioration"
            ],
            [
              "**Réactivité**",
              "Délai recrutement (j)",
              "52",
              "47",
              "40",
              "↗ amélioration"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Lecture.** Le tableau de bord RH met en évidence une amélioration générale, à l'exception notable de l'**absentéisme**, qui se dégrade malgré la hausse de l'engagement déclaré (eNPS) — signal d'alerte appelant une analyse fine (conditions de travail d'une population spécifique ? effet de la charge liée aux postes non pourvus ?). C'est tout l'intérêt d'un tableau de bord : faire apparaître les **dissonances** entre indicateurs et déclencher l'investigation."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** La quatrième grande fonction support, le système d'information, est devenue l'infrastructure critique sur laquelle reposent toutes les autres."
        }
      ]
    },
    {
      "id": "6-le-pilotage-de-la-fonction-informatique-si",
      "title": "6. Le pilotage de la fonction informatique (SI)",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; lien avec l'UE5 (systèmes d'information) du DSCG.*"
        },
        {
          "type": "h3",
          "text": "6.1 Système d'information et performance"
        },
        {
          "type": "p",
          "text": "Le système d'information (SI) est passé du statut d'outil au statut d'**infrastructure critique** : il conditionne la continuité de l'activité (un système indisponible peut paralyser l'entreprise), l'efficience des processus (automatisation), la relation client (canaux numériques) et la capacité d'innovation (données, IA). La DSI (direction des systèmes d'information) crée de la valeur en fournissant des services fiables, sécurisés et alignés sur les besoins métiers — mais sa contribution, là encore, est indirecte et son coût très visible, ce qui en fait un centre support emblématique des difficultés d'évaluation."
        },
        {
          "type": "h3",
          "text": "6.2 La gouvernance informatique"
        },
        {
          "type": "p",
          "text": "La gouvernance du SI vise à garantir que les investissements informatiques servent la stratégie et créent de la valeur. Elle s'articule autour de quelques exigences cardinales. L'**alignement stratégique** assure que le SI soutient les priorités de l'entreprise (et non l'inverse) ; des référentiels comme **COBIT** ou **ITIL** (gestion des services) structurent cette gouvernance. La **disponibilité** mesure le taux de fonctionnement des services critiques (souvent exprimé en « neuf » : 99,9 % = environ 8 heures d'indisponibilité par an). La **qualité de service** se contractualise avec les métiers via des **SLA** (*Service Level Agreements*). La **cybersécurité**, enfin, est devenue un enjeu majeur : la fonction SI doit prévenir, détecter et répondre aux incidents de sécurité, dont le coût (rançongiciels, fuites de données, atteinte à la réputation) peut être considérable."
        },
        {
          "type": "h4",
          "text": "Tableau 6 — KPI de la fonction informatique *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Indicateur**",
            "**Formule / nature**",
            "**Dimension de gouvernance**",
            "**Cible**"
          ],
          "rows": [
            [
              "**Taux de disponibilité**",
              "Temps de fonctionnement / temps total",
              "Continuité de service",
              "> 99,9 % (critique)"
            ],
            [
              "**Délai de résolution des incidents (MTTR)**",
              "Temps moyen de réparation",
              "Qualité de service",
              "Minimisation"
            ],
            [
              "**Respect des SLA**",
              "Incidents résolus dans les délais / total",
              "Qualité contractuelle",
              "> 95 %"
            ],
            [
              "**Coût IT / CA**",
              "Dépenses SI / chiffre d'affaires",
              "Efficience",
              "Benchmark sectoriel"
            ],
            [
              "**Taux d'incidents de sécurité**",
              "Incidents de sécurité / période",
              "Cybersécurité",
              "Minimisation"
            ],
            [
              "**Taux de projets IT dans les délais/budget**",
              "Projets réussis / total",
              "Alignement, maîtrise",
              "Maximisation"
            ],
            [
              "**Satisfaction des utilisateurs**",
              "Enquête interne",
              "Service rendu",
              "> cible"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Ces indicateurs équilibrent **coût** (coût IT/CA), **qualité de service** (disponibilité, MTTR, SLA), **risque** (sécurité) et **alignement** (réussite des projets, satisfaction). Le pilotage de la DSI consiste à éviter deux écueils symétriques : le sous-investissement (qui dégrade la disponibilité et la sécurité, avec des conséquences potentiellement catastrophiques) et le sur-investissement (technologies non utilisées, projets pharaoniques). Le contrôle de gestion IT objective cet arbitrage en reliant la dépense au service rendu et au risque évité."
        },
        {
          "type": "h4",
          "text": "Schéma 7 — Architecture simplifiée d'un système d'information *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/07.png",
          "alt": "Schéma 7 — Architecture simplifiée d'un système d'information *(obligatoire)*",
          "width": 1936,
          "height": 1056
        },
        {
          "type": "p",
          "text": "**Interprétation.** L'architecture en couches montre comment le SI soutient l'organisation : la couche **infrastructure** (serveurs, réseaux, cloud) supporte la couche **données** (bases, entrepôts), elle-même exploitée par la couche **applications** (ERP, CRM, outils métiers), au service de la couche **métiers / utilisateurs**. La **sécurité** et la **gouvernance** sont transverses à toutes les couches. Cette représentation aide à situer où se créent la valeur (applications métiers) et les risques (sécurité transverse), et à comprendre pourquoi une défaillance d'infrastructure se propage à tout l'édifice."
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Regard DSCG.** Un sujet portant sur la DSI attend généralement : (1) l'identification des indicateurs pertinents distinguant coût, qualité de service et risque ; (2) une réflexion sur l'**alignement stratégique** (le SI sert-il la stratégie ?) ; (3) éventuellement un calcul de coût (TCO d'une solution, *make or buy* entre solution interne et cloud) ; (4) la question de la **facturation interne** des services SI aux directions métiers (cf. §7). Penser à relier au pilotage par la valeur et non au seul coût.\n**Transition.** Ces quatre fonctions partagent les mêmes mécanismes transversaux de contrôle de gestion : la responsabilisation par centres et la facturation interne."
        }
      ]
    },
    {
      "id": "7-le-controle-de-gestion-des-fonctions-support",
      "title": "7. Le contrôle de gestion des fonctions support",
      "blocks": [
        {
          "type": "callout",
          "variant": "tip",
          "text": "*Statut : repris-adapté (centres de responsabilité, PCI, effets pervers — Cours 1 & 3) ; méthodes de facturation et exemple chiffré créés.*"
        },
        {
          "type": "h3",
          "text": "7.1 Les centres de responsabilité"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Cours 1).*"
        },
        {
          "type": "p",
          "text": "Piloter une fonction support suppose d'en faire un **centre de responsabilité** : une subdivision dotée d'un responsable, d'objectifs et d'un budget propres. L'ancien cours distingue les grands types : **centre de coûts** (responsable de ses coûts — ex. une usine), **centre de revenus** (responsable du chiffre d'affaires — ex. un commercial), **centre de profit** (responsable de ses coûts *et* de son CA), **centre d'investissement** (responsable de sa marge et de ses investissements). Les fonctions support relèvent le plus souvent de la catégorie particulière des **centres de coûts discrétionnaires**, « dont le niveau de dépense n'est pas lié au niveau d'activité » et qui sont, pour cette raison, « particulièrement difficiles à contrôler » : comment juger qu'une DRH ou une DSI dépense « le bon montant », faute de relation mécanique entre sa dépense et un volume produit ?"
        },
        {
          "type": "h4",
          "text": "Tableau 7 — Types de centres de responsabilité appliqués aux fonctions support *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Type de centre**",
            "**Responsable de…**",
            "**Application aux fonctions support**",
            "**Indicateur de pilotage**"
          ],
          "rows": [
            [
              "**Centre de coûts (standard)**",
              "Ses coûts pour un volume donné",
              "Rare en support (peu de lien volume/dépense)",
              "Coût unitaire vs standard"
            ],
            [
              "**Centre de coûts discrétionnaire**",
              "Son budget (sans lien mécanique au volume)",
              "DRH, DSI, communication, juridique",
              "Respect du budget + indicateurs de service"
            ],
            [
              "**Centre de services**",
              "Coûts + qualité de service rendu aux clients internes",
              "CSP, DSI facturant ses services",
              "Coût + SLA + satisfaction"
            ],
            [
              "**Centre de profit (fictif)**",
              "Coûts et « recettes » internes",
              "Support facturant ses prestations en PCI",
              "Résultat interne"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Erreurs fréquentes"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Erreurs fréquentes : la sous-optimisation.** La responsabilisation par centres « introduit de la concurrence dans l'organisation », ce qui peut « se faire au détriment de la coopération ». Chaque responsable optimise *son* centre, parfois au détriment du tout : l'acheteur économise sur la matière mais dégrade la production ; la DSI réduit ses coûts mais détériore le service aux métiers. Le contrôle de gestion doit donc compléter les objectifs locaux par des **indicateurs transverses** (orientés client interne et performance globale) pour prévenir ces effets pervers."
        },
        {
          "type": "h3",
          "text": "7.2 La facturation interne et les prix de cession interne"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "*Statut : PCI repris (Cours 1 & 3) ; méthodes et exemple créés.*"
        },
        {
          "type": "p",
          "text": "Rendre visible la consommation de support par les fonctions clientes suppose une **facturation interne** : les coûts de la fonction support sont refacturés aux directions qui en bénéficient, via un **prix de cession interne** (PCI). Cette facturation poursuit trois objectifs : **responsabiliser** les clients internes (qui « paient » ce qu'ils consomment et modèrent donc leur demande), **évaluer** la performance réelle des fonctions (en confrontant leur coût à un prix de marché), et **éclairer** les décisions de mutualisation ou d'externalisation (cf. §10)."
        },
        {
          "type": "p",
          "text": "Trois grandes méthodes de valorisation coexistent. La méthode des **coûts complets** refacture l'intégralité des coûts du support au prorata d'une unité d'œuvre (nombre de bulletins de paie, de tickets informatiques, de m²…) ; simple, elle peut toutefois transmettre aux clients l'inefficience du support. La méthode **ABC** (*Activity-Based Costing*, lien sous-partie 2.1) affine en imputant les coûts selon les activités réellement consommées par chaque client, offrant une image plus juste mais plus complexe. Le **prix de marché** (ou coût standard d'un prestataire externe) valorise le service au prix qu'il coûterait à l'extérieur, ce qui mesure directement la compétitivité du support interne."
        },
        {
          "type": "h4",
          "text": "Tableau 8 — Méthodes de facturation interne *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Méthode**",
            "**Principe**",
            "**Avantages**",
            "**Limites**",
            "**Quand l'utiliser**"
          ],
          "rows": [
            [
              "**Coût complet**",
              "Refacturation totale au prorata d'une unité d'œuvre",
              "Simple ; couvre tous les coûts",
              "Transmet l'inefficience ; arbitraire de la clé",
              "Support stable, unité d'œuvre claire"
            ],
            [
              "**ABC**",
              "Imputation selon les activités consommées",
              "Image juste ; responsabilise",
              "Coût et complexité de mise en œuvre",
              "Coûts indirects importants, clients hétérogènes"
            ],
            [
              "**Prix de marché**",
              "Valorisation au prix externe",
              "Mesure la compétitivité ; incite",
              "Marché de référence pas toujours disponible",
              "Make or buy, benchmarking"
            ],
            [
              "**Coût standard négocié**",
              "PCI fixé par accord (budget)",
              "Stabilité ; responsabilise les deux parties",
              "Négociation parfois conflictuelle",
              "Relations récurrentes entre centres"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Exemple chiffré complet — facturation d'un centre de services partagés informatique *(obligatoire)*"
        },
        {
          "type": "p",
          "text": "Un centre de services partagés (CSP) informatique a un coût annuel total de **1 200 000 €**. Il sert trois directions clientes. On compare deux méthodes de facturation."
        },
        {
          "type": "p",
          "text": "**Méthode 1 — coût complet au prorata du nombre de postes informatiques** (unité d'œuvre unique)."
        },
        {
          "type": "table",
          "headers": [
            "**Direction**",
            "**Postes**",
            "**%**",
            "**Refacturation (coût complet)**"
          ],
          "rows": [
            [
              "Direction Commerciale",
              "250",
              "50 %",
              "600 000 €"
            ],
            [
              "Direction Production",
              "150",
              "30 %",
              "360 000 €"
            ],
            [
              "Direction Administrative",
              "100",
              "20 %",
              "240 000 €"
            ],
            [
              "**Total**",
              "**500**",
              "**100 %**",
              "**1 200 000 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Méthode 2 — ABC selon les activités réellement consommées.** Le coût se décompose en trois activités : support utilisateurs (480 000 €, inducteur = nombre de tickets), hébergement applicatif (480 000 €, inducteur = nombre d'applications hébergées), projets (240 000 €, inducteur = jours-projet consommés)."
        },
        {
          "type": "table",
          "headers": [
            "**Activité**",
            "**Coût**",
            "**Inducteur**",
            "**Commerciale**",
            "**Production**",
            "**Administrative**"
          ],
          "rows": [
            [
              "Support utilisateurs",
              "480 000 €",
              "4 000 tickets",
              "1 600 (192 k€)",
              "1 600 (192 k€)",
              "800 (96 k€)"
            ],
            [
              "Hébergement applicatif",
              "480 000 €",
              "12 apps",
              "4 (160 k€)",
              "6 (240 k€)",
              "2 (80 k€)"
            ],
            [
              "Projets",
              "240 000 €",
              "600 j-projet",
              "150 (60 k€)",
              "360 (144 k€)",
              "90 (36 k€)"
            ],
            [
              "**Total ABC**",
              "**1 200 000 €**",
              "",
              "**412 000 €**",
              "**576 000 €**",
              "**212 000 €**"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Analyse comparative.**"
        },
        {
          "type": "table",
          "headers": [
            "**Direction**",
            "**Coût complet**",
            "**ABC**",
            "**Écart**"
          ],
          "rows": [
            [
              "Commerciale",
              "600 000 €",
              "412 000 €",
              "**− 188 000 €**"
            ],
            [
              "Production",
              "360 000 €",
              "576 000 €",
              "**+ 216 000 €**"
            ],
            [
              "Administrative",
              "240 000 €",
              "212 000 €",
              "− 28 000 €"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** La méthode du coût complet, en refacturant au seul prorata des postes, **surfacture la Commerciale** (nombreux postes mais consommation modérée d'applications et de projets) et **sous-facture la Production** (peu de postes mais forte consommation d'hébergement et de projets). L'ABC révèle la consommation *réelle* : la Production est en fait le principal consommateur de ressources IT. Conséquence : sous coût complet, la Commerciale subventionne la Production sans le savoir, ce qui fausse les décisions (la Commerciale pourrait être tentée d'externaliser une IT qu'elle juge « trop chère », alors qu'elle paie en réalité pour autrui). L'ABC, plus juste, responsabilise correctement chaque direction et éclaire mieux les arbitrages — au prix d'une complexité accrue. **C'est l'arbitrage classique : justesse contre simplicité.**"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Indicateurs et facturation alimentent l'instrument de synthèse du pilotage : le tableau de bord."
        }
      ]
    },
    {
      "id": "8-les-tableaux-de-bord-des-fonctions-support",
      "title": "8. Les tableaux de bord des fonctions support",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; Balanced Scorecard repris de l'ancien cours (Cours 2 & 4).*"
        },
        {
          "type": "h3",
          "text": "8.1 Construire un tableau de bord de fonction support"
        },
        {
          "type": "p",
          "text": "Un tableau de bord est un ensemble synthétique et sélectif d'indicateurs permettant de piloter une fonction au regard de ses objectifs. Sa construction obéit à une méthode rigoureuse : partir des **objectifs stratégiques** de la fonction (déclinés de la stratégie globale), identifier les **facteurs clés de succès**, sélectionner pour chacun un petit nombre d'**indicateurs** pertinents (mesurables, fiables, actionnables), définir leurs **cibles**, leur **fréquence** de suivi et leur **destinataire**. La tentation à éviter est l'accumulation d'indicateurs : un bon tableau de bord en compte une dizaine au plus par niveau, privilégiant la pertinence à l'exhaustivité, et mettant en évidence les écarts par rapport aux cibles (pilotage par exception)."
        },
        {
          "type": "h4",
          "text": "Encadré — Point méthode"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "**Point méthode — sélectionner les indicateurs.** Un bon indicateur de fonction support respecte quatre critères : il **mesure le service rendu** (et pas seulement la dépense) ; il est **actionnable** (le responsable peut agir dessus) ; il est **équilibré** (on associe des indicateurs de coût, de qualité, de délai et de risque pour éviter la sous-optimisation) ; il est **relié à la valeur** (on peut expliquer en quoi il contribue à la performance globale). Évitez les indicateurs purement budgétaires, qui ramènent la fonction à un centre de coûts."
        },
        {
          "type": "h4",
          "text": "Tableau de bord 9 — Vue intégrée Achats / RH / Logistique / IT *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction**",
            "**Indicateur clé**",
            "**Réalisé**",
            "**Cible**",
            "**Statut**"
          ],
          "rows": [
            [
              "**Achats**",
              "Taux de service fournisseur",
              "94 %",
              "96 %",
              "🟠 à surveiller"
            ],
            [
              "**Achats**",
              "Économies réalisées (savings)",
              "3,2 %",
              "3,0 %",
              "🟢 atteint"
            ],
            [
              "**RH**",
              "Turnover",
              "12 %",
              "10 %",
              "🟠 à surveiller"
            ],
            [
              "**RH**",
              "Absentéisme",
              "5,8 %",
              "4,5 %",
              "🔴 alerte"
            ],
            [
              "**Logistique**",
              "Taux de service client",
              "97,5 %",
              "98 %",
              "🟢 proche cible"
            ],
            [
              "**Logistique**",
              "Coût logistique / CA",
              "7,2 %",
              "7,0 %",
              "🟠 à surveiller"
            ],
            [
              "**IT**",
              "Disponibilité",
              "99,95 %",
              "99,9 %",
              "🟢 atteint"
            ],
            [
              "**IT**",
              "Respect des SLA",
              "92 %",
              "95 %",
              "🔴 alerte"
            ]
          ]
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Cette vue intégrée, destinée à la direction générale, permet d'un coup d'œil de repérer les zones d'alerte (absentéisme RH, SLA informatiques) appelant une action prioritaire, et de constater les performances atteintes (savings achats, disponibilité IT). Le code couleur (feux tricolores) matérialise le pilotage par exception : l'attention se porte sur le rouge et l'orange. C'est le principe même du tableau de bord : ne pas tout regarder, mais regarder ce qui dévie."
        },
        {
          "type": "h3",
          "text": "8.2 Le Balanced Scorecard appliqué aux fonctions support"
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : repris-adapté (Cours 2 & 4).*"
        },
        {
          "type": "p",
          "text": "Le **Balanced Scorecard** (BSC) de Kaplan et Norton offre le cadre le plus puissant pour relier la performance des fonctions support à la création de valeur, car il dépasse la seule perspective financière. Appliqué aux fonctions support, il articule quatre perspectives reliées par une **chaîne de causalité** ascendante : la perspective **apprentissage** (compétences, SI, climat — le domaine des fonctions support) alimente la perspective **processus internes** (efficience, qualité des processus support), qui améliore la perspective **client** (satisfaction des clients internes *et*, in fine, externes), qui produit la perspective **financière** (réduction des coûts, contribution à la marge). Le BSC démontre ainsi que les fonctions support ne sont pas en bout de chaîne des coûts, mais à la **racine** de la création de valeur."
        },
        {
          "type": "h4",
          "text": "Graphique 10 — Balanced Scorecard appliqué aux fonctions support *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/08.png",
          "alt": "Graphique 10 — Balanced Scorecard appliqué aux fonctions support *(obligatoire)*",
          "width": 1892,
          "height": 1144
        },
        {
          "type": "p",
          "text": "**Interprétation.** Le schéma représente les quatre perspectives empilées et reliées par des flèches de causalité ascendantes, avec pour chacune un exemple d'objectif et d'indicateur propre aux fonctions support. La lecture « de bas en haut » (comme le préconise l'ancien cours : « le BSC se construit à partir du bas et en remontant vers le haut ») raconte l'histoire de la création de valeur : investir dans les compétences et le SI → améliorer les processus support → satisfaire les clients internes → contribuer au résultat. Cette logique de causalité est ce qui distingue le BSC d'un simple empilement d'indicateurs."
        },
        {
          "type": "h4",
          "text": "Schéma 11 — Architecture d'un système de pilotage intégré des fonctions support *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/09.png",
          "alt": "Schéma 11 — Architecture d'un système de pilotage intégré des fonctions support *(obligatoire)*",
          "width": 1980,
          "height": 1100
        },
        {
          "type": "p",
          "text": "**Interprétation.** L'architecture intégrée articule trois niveaux : au sommet, le **pilotage stratégique** (BSC global, direction générale) ; au centre, les **tableaux de bord par fonction** (achats, RH, logistique, IT) alimentés par leurs KPI ; à la base, les **systèmes d'information de gestion** (ERP, SIRH, outils achats/logistique) qui produisent la donnée. La **facturation interne** (§7) circule transversalement, reliant les fonctions support à leurs clients. Ce système intégré transforme des données opérationnelles en information de pilotage stratégique — réalisant concrètement la promesse du contrôle de gestion appliqué aux fonctions support."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ce dispositif de pilotage est aujourd'hui profondément transformé par la digitalisation et l'intelligence artificielle."
        }
      ]
    },
    {
      "id": "9-digitalisation-et-intelligence-artificielle-des-fonctions-",
      "title": "9. Digitalisation et intelligence artificielle des fonctions support",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; ouverture contemporaine.*"
        },
        {
          "type": "p",
          "text": "La transformation numérique reconfigure chacune des fonctions support, déplaçant leur centre de gravité de l'exécution administrative vers l'analyse, le conseil et le pilotage par la donnée."
        },
        {
          "type": "p",
          "text": "Les **RH augmentées** automatisent les tâches administratives (paie, gestion des congés), exploitent l'analyse de données (*people analytics*) pour anticiper le turnover ou objectiver les recrutements, et mobilisent l'IA générative pour la rédaction d'offres ou la présélection — sous réserve de vigilance éthique (biais algorithmiques, RGPD). Les **achats augmentés** s'appuient sur l'analyse prédictive (anticipation des prix de matières premières), l'automatisation des commandes (*e-procurement*) et l'IA pour le sourcing et l'analyse des risques fournisseurs. La **logistique intelligente** optimise les tournées et les stocks par algorithmes, suit les flux en temps réel (IoT, capteurs), et recourt à la robotisation des entrepôts. Le **SI piloté par la donnée** industrialise la collecte et l'analyse (*data lakes*, *business intelligence*) et renforce la cybersécurité par détection automatisée des menaces. L'**IA générative** assiste transversalement toutes les fonctions (rédaction de documents, synthèse, assistants conversationnels internes), et l'**automatisation** (RPA, *Robotic Process Automation*) prend en charge les processus répétitifs à fort volume (rapprochements comptables, traitement de factures)."
        },
        {
          "type": "h4",
          "text": "Tableau 10 — Impact des technologies sur chaque fonction support *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction**",
            "**Technologie clé**",
            "**Cas d'usage**",
            "**Bénéfice**",
            "**Vigilance**"
          ],
          "rows": [
            [
              "**RH**",
              "People analytics, IA générative",
              "Prédiction du turnover, présélection CV",
              "Anticipation, gain de temps",
              "Biais, RGPD, acceptabilité"
            ],
            [
              "**Achats**",
              "Analyse prédictive, e-procurement",
              "Prévision des prix, automatisation commandes",
              "Économies, réactivité",
              "Qualité des données, dépendance"
            ],
            [
              "**Logistique**",
              "IoT, optimisation, robotique",
              "Suivi temps réel, optimisation tournées/stocks",
              "Service + coût + CO₂",
              "Investissement, cybersécurité"
            ],
            [
              "**SI**",
              "BI, data lakes, IA sécurité",
              "Pilotage par la donnée, détection de menaces",
              "Décision, sécurité",
              "Gouvernance des données"
            ],
            [
              "**Finance**",
              "RPA, IA",
              "Automatisation des écritures, clôture rapide",
              "Productivité, fiabilité",
              "Contrôle interne, supervision"
            ],
            [
              "**Transverse**",
              "IA générative",
              "Assistants, rédaction, synthèse",
              "Productivité de tous",
              "Vérification humaine, confidentialité"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Schéma 12 — L'entreprise support augmentée par l'IA *(obligatoire)*"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/10.png",
          "alt": "Schéma 12 — L'entreprise support augmentée par l'IA *(obligatoire)*",
          "width": 1804,
          "height": 1232
        },
        {
          "type": "p",
          "text": "**Interprétation managériale.** Le schéma représente les fonctions support gravitant autour d'un socle commun de **données** et d'**IA**, qui les irrigue toutes. Le message clé est que la valeur ne naît plus de chaque fonction isolée mais de la **circulation et de l'exploitation transversale de la donnée** : les données RH, achats, logistiques et IT, croisées et analysées, produisent une intelligence collective supérieure à la somme des parties. Le rôle du contrôleur de gestion s'en trouve réhaussé : de producteur de chiffres, il devient l'**architecte du pilotage par la donnée** et le garant de l'interprétation. Mais cette transformation appelle une vigilance constante sur la qualité des données, la sécurité et l'éthique."
        },
        {
          "type": "callout",
          "variant": "info",
          "text": "**Transition.** Ces évolutions ne dispensent pas de maîtriser les arbitrages fondamentaux qu'examinent les approfondissements DSCG."
        }
      ]
    },
    {
      "id": "10-approfondissements-dscg",
      "title": "10. Approfondissements DSCG",
      "blocks": [
        {
          "type": "callout",
          "variant": "info",
          "text": "*Statut : créé ; centres de services partagés et externalisation s'appuient sur l'ancien cours.*"
        },
        {
          "type": "h3",
          "text": "10.1 La difficulté d'évaluation des fonctions support"
        },
        {
          "type": "p",
          "text": "Le fil rouge du chapitre — la contribution indirecte et le coût visible — culmine dans la difficulté d'évaluation. Faute de relation mécanique entre dépense et production, le risque est double : sous-doter la fonction (au détriment du service et, à terme, de la performance globale) ou la sur-doter (gaspillage). Trois parades complémentaires : raisonner en **service rendu** (indicateurs de qualité, SLA) plutôt qu'en seule dépense ; recourir au **benchmarking** (interne entre entités, externe avec des standards de marché) pour objectiver le « bon » niveau ; et mettre en place la **facturation interne** pour confronter le coût du support à un prix de référence."
        },
        {
          "type": "h3",
          "text": "10.2 Les arbitrages économiques : mutualiser, externaliser, internaliser"
        },
        {
          "type": "p",
          "text": "La question stratégique récurrente est celle du **périmètre** des fonctions support. Faut-il les **mutualiser** dans des centres de services partagés ? Les **externaliser** auprès de prestataires spécialisés ? Les conserver en interne ? Chaque option relève d'un arbitrage économique (coût comparé), stratégique (la fonction est-elle un avantage concurrentiel à protéger, ou une commodité ?) et de risque (perte de contrôle, dépendance)."
        },
        {
          "type": "h4",
          "text": "Tableau 11 — Mutualisation vs externalisation des fonctions support *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Option**",
            "**Principe**",
            "**Avantages**",
            "**Risques / limites**",
            "**Quand la privilégier**"
          ],
          "rows": [
            [
              "**Internalisation**",
              "Fonction gérée en interne, dédiée",
              "Contrôle, confidentialité, sur-mesure",
              "Coût fixe, pas d'économies d'échelle",
              "Fonction stratégique, sensible"
            ],
            [
              "**Centre de services partagés (mutualisation)**",
              "Mutualisation interne entre entités",
              "Économies d'échelle, standardisation",
              "Coordination, facturation interne",
              "Groupe multi-entités, processus standardisables"
            ],
            [
              "**Externalisation (outsourcing)**",
              "Confiée à un prestataire externe",
              "Coût variable, expertise, focus métier",
              "Dépendance, perte de compétence, qualité",
              "Fonction « commodité », non différenciante"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Encadré — Regard DSCG"
        },
        {
          "type": "callout",
          "variant": "warning",
          "text": "**Regard DSCG : le raisonnement*make or buy*. Un sujet d'externalisation attend un raisonnement structuré : (1) comparer les coûts pertinents (coût interne évitable vs prix externe — attention aux coûts fixes non évitables et aux coûts irrécupérables, lien chapitre 1) ; (2) intégrer les coûts cachés (coordination, contrôle du prestataire, réversibilité) ; (3) apprécier la dimension stratégique (ne pas externaliser ce qui fonde l'avantage concurrentiel) et le risque** (dépendance, confidentialité). La décision n'est jamais purement comptable."
        },
        {
          "type": "h3",
          "text": "10.3 Le benchmarking interne"
        },
        {
          "type": "p",
          "text": "Le **benchmarking interne** — comparaison des performances entre entités comparables d'un même groupe (cf. le radar RH du §5) — est un puissant levier de progrès des fonctions support : il objective les écarts, identifie les meilleures pratiques et crée une émulation. L'ancien cours rappelle que « les bonnes pratiques » diffusées entre unités (en marketing, logistique, finance) sont une source d'amélioration continue. Sa limite : la comparabilité des entités (tailles, contextes) doit être assurée pour éviter les conclusions hâtives."
        },
        {
          "type": "h3",
          "text": "10.4 Synthèse des thèmes DSCG à fort enjeu"
        },
        {
          "type": "p",
          "text": "Les thèmes les plus susceptibles d'être mobilisés dans un sujet : la **facturation interne** (coûts complets vs ABC, calcul et analyse) ; la **matrice de Kraljic** et le **Pareto** des achats ; le calcul d'un **TCO** ou d'une décision *make or buy* ; la construction et l'interprétation d'un **tableau de bord** ou d'un **BSC** ; l'identification des **KPI** pertinents d'une fonction ; l'analyse des **effets pervers** de la responsabilisation (sous-optimisation)."
        }
      ]
    },
    {
      "id": "11-synthese-generale",
      "title": "11. Synthèse générale",
      "blocks": [
        {
          "type": "h3",
          "text": "11.1 Synthèse rédigée"
        },
        {
          "type": "p",
          "text": "Les fonctions support ont cessé d'être de simples centres de coûts pour devenir des contributrices à part entière de la création de valeur — une idée que fonde la chaîne de valeur de Porter (les activités de soutien participent à l'avantage concurrentiel) et que mesure le Balanced Scorecard de Kaplan et Norton (les leviers d'apprentissage et de processus, domaine du support, sont à la racine de la performance financière). Leur spécificité — une contribution indirecte mais un coût visible — explique la difficulté de leur évaluation et leur statut fréquent de centres de coûts discrétionnaires."
        },
        {
          "type": "p",
          "text": "Le pilotage de chaque grande fonction support mobilise des outils dédiés : pour les **achats**, le coût total d'acquisition, le diagramme de Pareto et la matrice de Kraljic, qui font passer la fonction du tactique au stratégique ; pour la **logistique**, l'arbitrage entre taux de service, coût et niveau de stock, au sein d'une supply chain pilotée par l'information ; pour les **ressources humaines**, les indicateurs de fidélisation, de climat, de compétences et de productivité, synthétisés dans un tableau de bord et comparés par le radar ; pour le **système d'information**, l'équilibre entre coût, qualité de service, sécurité et alignement stratégique."
        },
        {
          "type": "p",
          "text": "Transversalement, le contrôle de gestion responsabilise ces fonctions par des **centres de responsabilité** — en veillant aux effets pervers de la sous-optimisation — et rend visible leur consommation par la **facturation interne** (coûts complets, ABC, prix de marché), dont l'exemple chiffré du CSP informatique montre l'enjeu : une facturation juste éclaire les arbitrages, une facturation approximative les fausse. L'ensemble s'articule dans des **tableaux de bord** et un **Balanced Scorecard** qui relient la performance support à la valeur globale. Enfin, la **digitalisation et l'IA** transforment ces fonctions en les pilotant par la donnée, réhaussant le rôle du contrôleur de gestion en architecte du pilotage. La conclusion d'ensemble rejoint la problématique : bien pilotées, les fonctions support sont non un coût à comprimer mais un **gisement de compétitivité** à exploiter."
        },
        {
          "type": "h3",
          "text": "11.2 Carte mentale"
        },
        {
          "type": "image",
          "src": "/figures/dscg-ue3-pilotage-fonctions-support/11.png",
          "alt": "11.2 Carte mentale",
          "width": 2244,
          "height": 1320
        },
        {
          "type": "h3",
          "text": "11.3 Tableau de synthèse final *(obligatoire)*"
        },
        {
          "type": "table",
          "headers": [
            "**Fonction**",
            "**Objectifs**",
            "**KPI clés**",
            "**Difficultés de pilotage**",
            "**Création de valeur**"
          ],
          "rows": [
            [
              "**Achats**",
              "Coût total, qualité, sécurité, innovation",
              "TCO, savings, taux de service, dépendance",
              "Sous-optimisation (prix vs qualité)",
              "Effet de levier sur la marge"
            ],
            [
              "**Logistique**",
              "Service, coût, niveau de stock",
              "Taux de service, rotation, coût log./CA",
              "Arbitrage service/coût/stock",
              "Satisfaction client, BFR"
            ],
            [
              "**RH**",
              "Compétences, fidélisation, engagement",
              "Turnover, absentéisme, productivité, formation",
              "Contribution très indirecte, immatérielle",
              "Capital humain, performance durable"
            ],
            [
              "**SI**",
              "Disponibilité, sécurité, alignement",
              "Disponibilité, MTTR, SLA, coût IT/CA",
              "Coût visible / valeur diffuse, risque",
              "Infrastructure de toute l'entreprise"
            ],
            [
              "**Transverse (CG support)**",
              "Responsabiliser, facturer, piloter",
              "Coûts refacturés, respect budget, BSC",
              "Centres discrétionnaires, effets pervers",
              "Rend la valeur support visible et pilotable"
            ]
          ]
        }
      ]
    },
    {
      "id": "12-fiche-de-revision-dscg",
      "title": "12. Fiche de révision DSCG",
      "blocks": [
        {
          "type": "h3",
          "text": "12.1 Définitions incontournables"
        },
        {
          "type": "ul",
          "items": [
            "**Fonction support** : fonction servant des clients internes, à contribution indirecte à la valeur, souvent à activité discrétionnaire.",
            "**Chaîne de valeur (Porter)** : activités primaires + activités de soutien concourant à la marge.",
            "**Centre de coûts discrétionnaire** : centre dont la dépense n'est pas liée mécaniquement au volume (cas typique des fonctions support).",
            "**Prix de cession interne (PCI)** : prix de facturation d'une prestation entre centres internes.",
            "**TCO** : coût total d'acquisition, au-delà du prix d'achat.",
            "**Balanced Scorecard** : tableau de bord prospectif à 4 perspectives (financière, client, processus, apprentissage)."
          ]
        },
        {
          "type": "h3",
          "text": "12.2 KPI à connaître"
        },
        {
          "type": "p",
          "text": "Achats : TCO, savings, taux de service fournisseur, dépendance, ppm. Logistique : taux de service, rotation des stocks, coût log./CA, OTD, taux de rupture. RH : turnover, absentéisme, productivité (VA/salarié), formation, eNPS. IT : disponibilité, MTTR, respect des SLA, coût IT/CA, incidents de sécurité."
        },
        {
          "type": "h3",
          "text": "12.3 Outils de pilotage"
        },
        {
          "type": "p",
          "text": "Diagramme de Pareto (80/20) · matrice de Kraljic · radar multi-entités · tableau de bord par fonction · Balanced Scorecard · facturation interne (coûts complets, ABC, prix de marché) · benchmarking."
        },
        {
          "type": "h3",
          "text": "12.4 Matrices à maîtriser"
        },
        {
          "type": "ul",
          "items": [
            "**Kraljic** : poids financier × risque d'approvisionnement → 4 stratégies (simple, levier, critique, stratégique).",
            "**Pareto** : valeur cumulée × fournisseurs → classes A/B/C.",
            "**Make or buy** : coûts pertinents + stratégie + risque → internaliser / mutualiser / externaliser."
          ]
        },
        {
          "type": "h3",
          "text": "12.5 Pièges fréquents"
        },
        {
          "type": "p",
          "text": "Réduire le support à un coût (oublier la valeur) · réduire les achats au prix (ignorer le TCO) · ignorer la sous-optimisation entre centres · choisir une clé de facturation arbitraire qui fausse les arbitrages · accumuler trop d'indicateurs dans un tableau de bord · raisonner un *make or buy* sur les seuls coûts comptables (oublier coûts cachés et stratégie)."
        },
        {
          "type": "h3",
          "text": "12.6 Questions potentielles d'examen"
        },
        {
          "type": "ul",
          "items": [
            "Identifier les KPI pertinents d'une fonction support donnée et justifier leur choix.",
            "Construire une matrice de Kraljic et en déduire les stratégies d'achat par catégorie.",
            "Réaliser un diagramme de Pareto des fournisseurs et en tirer des recommandations.",
            "Comparer deux méthodes de facturation interne (coûts complets vs ABC) sur un cas chiffré et analyser les écarts.",
            "Construire un tableau de bord (ou un BSC) pour une fonction support et l'interpréter.",
            "Apprécier une décision d'externalisation ou de mutualisation (*make or buy*).",
            "Analyser un effet pervers de la responsabilisation par centres et proposer une correction."
          ]
        },
        {
          "type": "h3",
          "text": "12.7 Liens avec les autres chapitres"
        },
        {
          "type": "ul",
          "items": [
            "**Amont** : pilotage des processus de production (2.1 — méthode ABC mobilisée pour la facturation, chaîne de valeur, sous-optimisation) ; pilotage des projets (2.2 — un projet support, ex. déploiement d'un SI).",
            "**Latéral** : contrôle de gestion et RH (2.6 — la GRH proprement dite) ; accompagnement du changement (2.4) ; gestion des risques (2.5 — risques fournisseurs, cyber).",
            "**Aval (Partie 3)** : gestion prévisionnelle et budgétaire (3.1 — budgets des centres support) ; performance globale et tableaux de bord (3.3 — BSC, parties prenantes) ; durabilité (3.2 — achats responsables, logistique bas carbone).",
            "**Transversal** : UE5 (systèmes d'information) pour la fonction SI."
          ]
        },
        {
          "type": "p",
          "text": "*Fin du chapitre — sous-partie 2.3 « Le pilotage des processus support ».*"
        }
      ]
    }
  ],
  "flashcards": [],
  "quiz": []
};
