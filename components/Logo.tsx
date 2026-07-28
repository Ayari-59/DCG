/**
 * Logo Objectif-DCG.fr — la cible fléchée tient lieu de « O » d'Objectif.
 * Dessiné en SVG plutôt qu'importé en image : net à toutes les tailles,
 * et les couleurs suivent la charte.
 */

export function TargetMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Objectif">
      {/* Anneaux de la cible */}
      <circle cx="32" cy="32" r="27" fill="none" stroke="var(--color-brand)" strokeWidth="7.5" />
      <circle cx="32" cy="32" r="15.5" fill="none" stroke="var(--color-brand)" strokeWidth="7" />
      <circle cx="32" cy="32" r="4.5" fill="var(--color-navy)" />

      {/* Flèche : hampe bleu marine, empennage ambre, pointe dans le mille */}
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 57 L33 31" stroke="var(--color-navy)" strokeWidth="5" />
        <path
          d="M4 60 L6 49 L15 58 Z"
          fill="var(--color-brand-amber)"
          stroke="var(--color-brand-amber)"
          strokeWidth="2.5"
        />
        <path
          d="M38 26 L27 29 L35 37 Z"
          fill="var(--color-navy)"
          stroke="var(--color-navy)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

interface LogoProps {
  /** Sur fond sombre, le texte passe en blanc. */
  onDark?: boolean;
  className?: string;
}

export function Logo({ onDark = false, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      <TargetMark className="h-9 w-9 shrink-0" />
      <span
        className={`font-black tracking-[-0.03em] ${onDark ? "text-white" : "text-navy"}`}
        style={{ fontSize: "1.35rem" }}
      >
        bjectif-<span className="text-brand">DCG</span>
        <span className={onDark ? "text-white/70" : "text-navy"}>.fr</span>
      </span>
    </span>
  );
}
