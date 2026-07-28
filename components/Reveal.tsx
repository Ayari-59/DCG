"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Décalage d'apparition, pour animer une grille en cascade. */
  delay?: number;
  className?: string;
}

/**
 * Révèle son contenu quand il entre dans le viewport. L'élément est visible
 * d'emblée si l'utilisateur a désactivé les animations ou si l'observateur
 * n'est pas disponible — le contenu ne dépend jamais du script.
 */
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    observer.observe(el);

    // Filet de sécurité : dans certaines webviews l'observateur ne se
    // déclenche jamais. Le contenu ne doit jamais rester invisible.
    const fallback = window.setTimeout(() => setShown(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/** Suit le curseur pour alimenter le halo `.sheen` de la carte survolée. */
export function Sheen({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`sheen ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}
