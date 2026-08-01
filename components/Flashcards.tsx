"use client";

import { useEffect, useMemo, useState } from "react";
import type { Flashcard } from "@/lib/content/types";
import { getTheme } from "@/lib/content/theme";
import { TargetMark } from "./Logo";
import { synchroniser } from "./sync";

interface Props {
  slug: string;
  cards: Flashcard[];
}

/**
 * Les cartes se révisent par sessions de vingt.
 *
 * Un chapitre porte jusqu'à quarante-deux cartes : affichées d'un bloc,
 * elles découragent — on ouvre, on voit l'ampleur, on referme. Vingt
 * cartes font une session de quelques minutes, le format d'un trajet de
 * bus. Les cartes acquises sortent de la rotation, et chaque nouvelle
 * session pioche au hasard parmi celles qui restent.
 */
const TAILLE_SESSION = 20;

/** Mélange de Fisher-Yates, sans toucher au tableau d'origine. */
function melanger<T>(tableau: T[]): T[] {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

export function Flashcards({ slug, cards }: Props) {
  const theme = getTheme(slug);
  const storageKey = `dcga:cards:${slug}`;
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [queue, setQueue] = useState<string[]>([]);
  const [tailleSession, setTailleSession] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const byId = useMemo(() => new Map(cards.map((c) => [c.id, c])), [cards]);

  function nouvelleSession(acquises: Set<string>) {
    const restantes = cards.filter((c) => !acquises.has(c.id)).map((c) => c.id);
    const session = melanger(restantes).slice(0, TAILLE_SESSION);
    setQueue(session);
    setTailleSession(session.length);
    setFlipped(false);
  }

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    /*
     * Le paquet évolue avec le contenu : des cartes acquises autrefois
     * peuvent ne plus exister. On ne garde que les identifiants encore
     * présents, sans quoi les compteurs dérivent — jusqu'à annoncer plus
     * de cartes acquises que le chapitre n'en compte.
     */
    const existantes = new Set(cards.map((c) => c.id));
    const savedKnown = new Set<string>(
      (saved ? (JSON.parse(saved) as string[]) : []).filter((id) => existantes.has(id))
    );
    setKnown(savedKnown);
    nouvelleSession(savedKnown);
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, cards]);

  function persist(next: Set<string>) {
    setKnown(next);
    localStorage.setItem(storageKey, JSON.stringify([...next]));
    synchroniser({ chapitre: slug, cartes: [...next] });
  }

  function markKnown() {
    const [head, ...rest] = queue;
    persist(new Set([...known, head]));
    setQueue(rest);
    setFlipped(false);
  }

  /** « À revoir » garde la carte dans la session : elle reviendra avant la fin. */
  function markToReview() {
    const [head, ...rest] = queue;
    setQueue([...rest, head]);
    setFlipped(false);
  }

  function reinitialiser() {
    persist(new Set());
    nouvelleSession(new Set());
  }

  /**
   * Réviser au clavier : Espace retourne la carte, 1 la remet dans la pile,
   * 2 la marque acquise. C'est le geste des logiciels de mémorisation.
   */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = document.activeElement;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((v) => !v);
      } else if (flipped && (e.key === "1" || e.key === "2")) {
        e.preventDefault();
        if (e.key === "1") markToReview();
        else markKnown();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!loaded) return null;

  const card = queue.length > 0 ? byId.get(queue[0]) : undefined;
  const restantes = cards.length - known.size;

  // ── Fin de session, ou fin du chapitre ─────────────────────────────
  if (!card) {
    if (restantes === 0) {
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <TargetMark className="mx-auto h-10 w-10" />
          <p className="mt-2 font-semibold text-slate-900">
            Toutes les cartes de ce chapitre sont acquises !
          </p>
          <p className="mt-1 text-sm text-slate-500">
            {cards.length} cartes maîtrisées. Revenez-y dans quelques jours pour ancrer la
            mémorisation.
          </p>
          <button
            onClick={reinitialiser}
            className={`mt-6 rounded-xl px-6 py-3 font-bold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
          >
            Tout revoir depuis le début
          </button>
        </div>
      );
    }
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <p className="font-serif text-3xl font-bold text-ink">Session terminée</p>
        <p className="mt-2 text-sm text-slate-500">
          {known.size} cartes acquises sur {cards.length}. Il en reste {restantes} — la prochaine
          session en pioche {Math.min(TAILLE_SESSION, restantes)} au hasard.
        </p>
        <button
          onClick={() => nouvelleSession(known)}
          className={`mt-6 rounded-xl px-6 py-3 font-bold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
        >
          Nouvelle session
        </button>
      </div>
    );
  }

  const faites = tailleSession - queue.length;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
        <span>
          Session : {faites} / {tailleSession} · {known.size} acquises sur {cards.length}
        </span>
        <button
          onClick={reinitialiser}
          className="text-xs text-slate-400 underline-offset-2 hover:underline"
        >
          Réinitialiser
        </button>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${theme.bar}`}
          style={{ width: `${(faites / tailleSession) * 100}%` }}
        />
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="block min-h-56 w-full cursor-pointer rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md"
      >
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          {flipped ? "Réponse" : "Question — cliquez pour retourner"}
        </div>
        <div
          className={`text-lg leading-relaxed ${flipped ? "text-slate-700" : "font-semibold text-slate-900"}`}
        >
          {flipped ? card.back : card.front}
        </div>
      </button>

      {flipped ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={markToReview}
            className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 font-medium text-amber-800 transition hover:bg-amber-100"
          >
            À revoir <kbd className="ml-1 text-xs opacity-60">1</kbd>
          </button>
          <button
            onClick={markKnown}
            className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 font-medium text-emerald-800 transition hover:bg-emerald-100"
          >
            Acquise ✓ <kbd className="ml-1 text-xs opacity-60">2</kbd>
          </button>
        </div>
      ) : (
        <p className="mt-4 text-center text-sm text-slate-400">
          Essayez de répondre de tête, puis retournez la carte —{" "}
          <kbd className="font-semibold">Espace</kbd>
        </p>
      )}
    </div>
  );
}
