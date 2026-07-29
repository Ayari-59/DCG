/**
 * Identité Objectif-DCG.fr.
 *
 * Le signe est dessiné en SVG plutôt qu'importé en image : net à toutes les
 * tailles, et les couleurs suivent les variables de la charte.
 *
 * Trois choix de dessin, tous au service de la lisibilité en petit :
 *
 * — Une seule épaisseur de trait pour tout le signe. Les anneaux, la hampe
 *   et la pointe partagent la même valeur : c'est ce qui distingue un signe
 *   dessiné d'un signe assemblé.
 * — La flèche dégage son passage. Un masque évacue les anneaux de part et
 *   d'autre de la hampe, au lieu de la laisser se confondre avec eux à
 *   partir de vingt pixels.
 * — Pas de mouche au centre : la pointe de la flèche tient ce rôle. Le
 *   signe raconte l'objectif atteint, pas l'objectif visé.
 */

interface MarqueProps {
  className?: string;
  /** Sur fond marine, la flèche passe en blanc — en marine elle disparaît. */
  onDark?: boolean;
  /**
   * En dessous d'environ 24 px, l'anneau intérieur et la pointe se touchent
   * et forment une tache. La variante compacte ne garde que l'essentiel.
   */
  compact?: boolean;
}

export function TargetMark({ className = "h-9 w-9", onDark = false, compact = false }: MarqueProps) {
  const trait = onDark ? "#ffffff" : "var(--color-navy)";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Objectif"
      fill="none"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <mask id="objectif-degagement" maskUnits="userSpaceOnUse">
        <rect width="64" height="64" fill="#fff" />
        <path d="M2 62 L35 29" stroke="#000" strokeWidth="9.5" strokeLinecap="round" />
      </mask>

      <g mask="url(#objectif-degagement)" stroke="var(--color-brand)">
        <circle cx="32" cy="32" r="25.5" />
        {!compact && <circle cx="32" cy="32" r="15" />}
      </g>

      <g stroke={trait}>
        <path d="M6 58 L32 32" />
        {/* Pointe en angle vif : arrondie, elle s'émousse et perd sa direction. */}
        <path d="M30.4 40.3 L32 32 L23.7 33.6" strokeLinejoin="miter" />
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
      <TargetMark className="h-8 w-8 shrink-0" onDark={onDark} />
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
