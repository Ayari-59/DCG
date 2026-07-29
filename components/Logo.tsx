/**
 * Identité Objectif-DCG.fr.
 *
 * Le signe : un anneau orange, un disque marine en son centre, et une
 * flèche qui monte en courbe, traverse la cible et ressort du cadre. La
 * courbe raconte l'élan ; l'anneau, l'objectif.
 *
 * Trois décisions de dessin, toutes prises en regardant le signe à vingt
 * pixels plutôt qu'à cent :
 *
 * — Un masque dégage le passage de la flèche à travers l'anneau et le
 *   disque. Sans lui, les trois formes se rejoignent en une tache dès que
 *   le signe descend sous vingt pixels.
 * — La flèche est en courbe et non en ligne droite : c'est la courbe qui
 *   distingue ce signe des cibles fléchées qu'utilisent déjà la plupart
 *   des préparations comptables.
 * — Pas de mouche au centre : le disque marine tient ce rôle, et la flèche
 *   le traverse au lieu de s'y arrêter.
 */

interface MarqueProps {
  className?: string;
  /** Sur fond marine, le disque passe en blanc — en marine il disparaît. */
  onDark?: boolean;
  /**
   * En dessous d'environ 24 px, les traits fins se referment les uns sur
   * les autres. La variante compacte épaissit tout et resserre le cadre.
   */
  compact?: boolean;
}

/** La courbe de la flèche, reprise à l'identique par le masque. */
const COURBE = "M6 104 C30 96 46 80 62 60 C78 40 90 28 108 18";

export function TargetMark({ className = "h-9 w-9", onDark = false, compact = false }: MarqueProps) {
  const disque = onDark ? "#ffffff" : "var(--color-navy)";
  const id = compact ? "objectif-elan-compact" : "objectif-elan";

  // rayon de l'anneau, épaisseur de l'anneau, rayon du disque, dégagement
  const [rAnneau, trait, rDisque, degagement] = compact ? [38, 17, 21, 24] : [40, 14, 23, 21];

  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Objectif-DCG">
      <mask id={id} maskUnits="userSpaceOnUse">
        <rect width="120" height="120" fill="#fff" />
        <path
          d={COURBE}
          fill="none"
          stroke="#000"
          strokeWidth={degagement}
          strokeLinecap="round"
        />
      </mask>

      <g mask={`url(#${id})`}>
        <circle
          cx="60"
          cy="60"
          r={rAnneau}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={trait}
        />
        <circle cx="60" cy="60" r={rDisque} fill={disque} />
      </g>

      <g
        fill="none"
        stroke="var(--color-brand-amber)"
        strokeWidth={compact ? 10 : 9}
        strokeLinecap="round"
      >
        <path d="M12 99 C33 91 47 78 62 59 C74 44 86 33 99 25" />
        {/* Pointe en angle vif : arrondie, elle s'émousse et perd sa direction. */}
        <path d="M95.2 39.7 L104 20.7 L83.1 21.5" strokeLinejoin="miter" />
      </g>
    </svg>
  );
}

interface LogoProps {
  /** Sur fond sombre, le texte passe en blanc. */
  onDark?: boolean;
  className?: string;
}

/**
 * Le mot est composé dans le serif des titres, pas dans le sans du texte
 * courant : c'est lui qui donne au site son air de manuel plutôt que
 * d'application. Le « .fr » est réduit et estompé — il fait partie du nom,
 * pas de ce qu'on lit en premier.
 */
export function Logo({ onDark = false, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <TargetMark className="h-9 w-9 shrink-0" onDark={onDark} />
      <span
        className={`font-serif font-bold leading-none tracking-[-0.02em] ${
          onDark ? "text-white" : "text-navy"
        }`}
        style={{ fontSize: "1.3rem" }}
      >
        Objectif<span className="text-brand">-DCG</span>
        <span className={`text-[0.78em] ${onDark ? "text-white/45" : "text-muted"}`}>.fr</span>
      </span>
    </span>
  );
}
