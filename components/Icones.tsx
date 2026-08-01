/**
 * Jeu d'icônes du site.
 *
 * Il remplace les émojis qui tenaient ce rôle. Un émoji n'est pas une
 * icône : son dessin change d'un système à l'autre, sa couleur ne se
 * commande pas, son épaisseur de trait n'a rien à voir avec le reste de la
 * page — et à côté d'un logo dessiné au trait, il fait toujours tache.
 *
 * Toutes suivent la même grille : 24 × 24, trait de 1,75, extrémités et
 * angles arrondis, couleur héritée du texte. C'est le même vocabulaire
 * graphique que le signe Objectif-DCG.
 */

export type NomIcone =
  | "cours"
  | "sections"
  | "methode"
  | "video"
  | "fiche"
  | "cartes"
  | "quiz"
  | "cible"
  | "alerte"
  | "exemple"
  | "competence"
  | "info"
  | "annales"
  | "application"
  | "duree"
  // Habillage de la navigation.
  | "recherche"
  | "verrou"
  | "menu"
  | "fermer"
  | "chevron"
  // Les huit familles du programme.
  | "fondements"
  | "analyse"
  | "couts"
  | "budget"
  | "performance"
  | "communication"
  | "organisation";

const CHEMINS: Record<NomIcone, React.ReactNode> = {
  // Livre ouvert.
  cours: (
    <>
      <path d="M12 6.6C10.2 5.2 8 4.5 5.5 4.5H3v13h2.5c2.5 0 4.7.7 6.5 2.1" />
      <path d="M12 6.6c1.8-1.4 4-2.1 6.5-2.1H21v13h-2.5c-2.5 0-4.7.7-6.5 2.1" />
      <path d="M12 6.6v13" />
    </>
  ),
  // Liste : les sections d'un chapitre.
  sections: (
    <>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <path d="M4.6 6.5h.01M4.6 12h.01M4.6 17.5h.01" />
    </>
  ),
  // Boussole : la démarche à suivre.
  methode: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z" />
    </>
  ),
  // Écran et triangle de lecture.
  video: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="M10.4 9.4l5 2.6-5 2.6z" />
    </>
  ),
  // Feuille avec un coin plié : la fiche de révision.
  fiche: (
    <>
      <path d="M13.8 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.7z" />
      <path d="M13.6 3v4.8h4.9" />
      <path d="M9 13h6M9 16.6h4" />
    </>
  ),
  /*
   * Deux cartes empilées. La carte du dessous est interrompue là où celle
   * du dessus la recouvre : dessinée entière, l'icône devient le symbole
   * universel de « copier ».
   */
  cartes: (
    <>
      <rect x="3" y="8" width="13" height="13" rx="2.5" />
      <path d="M8 8V5.5A2.5 2.5 0 0 1 10.5 3h8A2.5 2.5 0 0 1 21 5.5v8a2.5 2.5 0 0 1-2.5 2.5H16" />
    </>
  ),
  // Coche dans un cercle.
  quiz: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.8 2.8 5.3-5.6" />
    </>
  ),
  // Cible : le point d'examen.
  cible: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </>
  ),
  alerte: (
    <>
      <path d="M10.9 4.7 2.7 18.5a1.3 1.3 0 0 0 1.1 2h16.4a1.3 1.3 0 0 0 1.1-2L13.1 4.7a1.3 1.3 0 0 0-2.2 0z" />
      <path d="M12 9.8v4.1M12 17.3h.01" />
    </>
  ),
  // Ampoule : l'illustration, l'exemple.
  exemple: (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2h5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
      <path d="M9.5 18.4h5M10.8 21h2.4" />
    </>
  ),
  // Médaille : la compétence visée.
  competence: (
    <>
      <circle cx="12" cy="14.8" r="6.2" />
      <path d="M8.6 9.6 6.2 3h11.6l-2.4 6.6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16.4v-4.7M12 8.1h.01" />
    </>
  ),
  // Horloge : les sessions passées.
  annales: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.9v5.4l3.4 2" />
    </>
  ),
  // Crayon : les applications à faire.
  application: (
    <>
      <path d="M4 20h4L20.4 7.6a2.1 2.1 0 0 0-3-3L5 17.1z" />
      <path d="M14.6 6.5l3 3" />
    </>
  ),
  // Chronomètre : la durée de lecture.
  duree: (
    <>
      <circle cx="12" cy="13.2" r="7.8" />
      <path d="M12 9.4v3.8h2.9" />
      <path d="M9.6 2.6h4.8" />
    </>
  ),

  /*
   * Les caractères ⌕, ☰ et ▾ qui tenaient ces rôles ne sont pas dessinés
   * par toutes les fontes : selon la machine, ils apparaissaient trop
   * petits, mal centrés, ou remplacés par un rectangle vide.
   */
  recherche: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="M15.8 15.8 21 21" />
    </>
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  // Cadenas : la ressource réservée aux apprenants connectés.
  verrou: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.8v1.9" />
    </>
  ),
  fermer: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9.5l6 6 6-6" />,

  // ── Familles du programme ──────────────────────────────────────────

  // Fronton à colonnes : le socle conceptuel.
  fondements: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5.6 9.9v8.2M9.9 9.9v8.2M14.1 9.9v8.2M18.4 9.9v8.2" />
      <path d="M3.5 20.6h17" />
    </>
  ),
  // Courbe dans un repère : l'analyse et le risque.
  analyse: (
    <>
      <path d="M3.5 3v16a1.5 1.5 0 0 0 1.5 1.5h16" />
      <path d="M7 14.5l3.6-4.2 3 2.8L19 7" />
    </>
  ),
  // Calculatrice : le calcul des coûts.
  couts: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 6.6h8" />
      <path d="M8.6 11.4h.01M12 11.4h.01M15.4 11.4h.01M8.6 14.8h.01M12 14.8h.01M15.4 14.8h.01M8.6 18.2h.01M12 18.2h.01M15.4 18.2h.01" />
    </>
  ),
  // Histogramme : les budgets.
  budget: (
    <>
      <path d="M3 20.6h18" />
      <rect x="4.6" y="12" width="4" height="8.6" rx="1" />
      <rect x="10" y="8" width="4" height="12.6" rx="1" />
      <rect x="15.4" y="4" width="4" height="16.6" rx="1" />
    </>
  ),
  // Courbe qui monte : la performance.
  performance: (
    <>
      <path d="M3 16.6 9 10.6l4 4 8-8" />
      <path d="M15 6.6h6v6" />
    </>
  ),
  // Bulle de parole : la communication professionnelle.
  communication: (
    <>
      <path d="M21 11.8a8.2 8 0 0 1-11.9 7.1L3.7 20.5l1.5-5A8 8 0 0 1 4.6 11.8c0-4.4 3.7-8 8.2-8s8.2 3.6 8.2 8z" />
      <path d="M9.2 11.8h.01M12.8 11.8h.01M16.4 11.8h.01" />
    </>
  ),
  // Cycle : l'organisation et le pilotage.
  organisation: (
    <>
      <path d="M20.4 11a8.5 8.5 0 0 0-14.8-4.4L3.2 9" />
      <path d="M3.6 13a8.5 8.5 0 0 0 14.8 4.4L20.8 15" />
      <path d="M3.2 4.6V9h4.4M20.8 19.4V15h-4.4" />
    </>
  ),
};

interface IconeProps {
  nom: NomIcone;
  className?: string;
  /** Un libellé rend l'icône lisible par les lecteurs d'écran. */
  titre?: string;
}

export function Icone({ nom, className = "h-5 w-5", titre }: IconeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titre ? "img" : undefined}
      aria-label={titre}
      aria-hidden={titre ? undefined : true}
    >
      {CHEMINS[nom]}
    </svg>
  );
}
