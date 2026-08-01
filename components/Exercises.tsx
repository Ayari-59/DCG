"use client";

import { useEffect, useRef, useState } from "react";
import type { Exercise } from "@/lib/content/types";
import { Blocks } from "./ContentBlocks";
import { Icone } from "./Icones";
import { synchroniser } from "./sync";

/**
 * Applications : répondre avant de comparer.
 *
 * Le corrigé reste fermé tant que l'apprenant n'a pas posé sa réponse —
 * c'est l'engagement qui fait travailler, pas la lecture de la solution.
 * Une échappatoire assumée existe (« voir le corrigé sans répondre »),
 * mais c'est elle qui doit se justifier, pas l'inverse. Corrigé ouvert,
 * l'apprenant se positionne : Réussi, Partiel, À revoir. La réponse reste
 * dans son navigateur ; le statut, lui, part vers son compte s'il est
 * connecté et nourrit son tableau de bord.
 */

export type StatutApplication = "reussi" | "partiel" | "a-revoir";

interface EtatExercice {
  reponse?: string;
  statut?: StatutApplication;
}

const STATUTS: { id: StatutApplication; libelle: string; classes: string; actif: string }[] = [
  {
    id: "reussi",
    libelle: "Réussi",
    classes: "border-emerald-300 text-emerald-800 hover:bg-emerald-50",
    actif: "border-emerald-400 bg-emerald-100 text-emerald-900",
  },
  {
    id: "partiel",
    libelle: "Partiel",
    classes: "border-amber-300 text-amber-800 hover:bg-amber-50",
    actif: "border-amber-400 bg-amber-100 text-amber-900",
  },
  {
    id: "a-revoir",
    libelle: "À revoir",
    classes: "border-rose-300 text-rose-800 hover:bg-rose-50",
    actif: "border-rose-400 bg-rose-100 text-rose-900",
  },
];

const PASTILLE: Record<StatutApplication, string> = {
  reussi: "bg-emerald-100 text-emerald-800",
  partiel: "bg-amber-100 text-amber-800",
  "a-revoir": "bg-rose-100 text-rose-800",
};

const LIBELLE: Record<StatutApplication, string> = {
  reussi: "Réussi",
  partiel: "Partiel",
  "a-revoir": "À revoir",
};

function Difficulty({ level }: { level: number }) {
  return (
    <span className="text-amber-500" title={`Difficulté ${level}/3`}>
      {"★".repeat(level)}
      <span className="text-slate-300">{"★".repeat(Math.max(0, 3 - level))}</span>
    </span>
  );
}

function ExerciseCard({
  exercise,
  index,
  etat,
  onReponse,
  onStatut,
}: {
  exercise: Exercise;
  index: number;
  etat: EtatExercice;
  onReponse: (texte: string) => void;
  onStatut: (statut: StatutApplication) => void;
}) {
  const [open, setOpen] = useState(index === 0);
  const [showCorrection, setShowCorrection] = useState(false);
  const aRepondu = Boolean(etat.reponse?.trim());

  return (
    <article className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50/70"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-ink">{exercise.title}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-medium">{exercise.label}</span>
            {exercise.difficulty && <Difficulty level={exercise.difficulty} />}
            {exercise.durationMin && (
              <span className="flex items-center gap-1">
                <Icone nom="duree" className="h-3.5 w-3.5" />
                {exercise.durationMin} min
              </span>
            )}
            {exercise.correction.length === 0 && (
              <span className="text-amber-600">corrigé non disponible</span>
            )}
          </span>
        </span>
        {etat.statut && (
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${PASTILLE[etat.statut]}`}
          >
            {LIBELLE[etat.statut]}
          </span>
        )}
        <Icone
          nom="chevron"
          className={`h-4 w-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="border-t border-line px-5 py-6 sm:px-7">
          <Blocks blocks={exercise.statement} />

          {/* ── Votre réponse ─────────────────────────────────────── */}
          <div className="mt-8">
            <label
              htmlFor={`reponse-${exercise.id}`}
              className="mb-1.5 block text-xs font-black uppercase tracking-[0.15em] text-muted"
            >
              Votre réponse
            </label>
            <textarea
              id={`reponse-${exercise.id}`}
              value={etat.reponse ?? ""}
              onChange={(e) => onReponse(e.target.value)}
              rows={6}
              placeholder="Posez vos calculs et votre raisonnement ici — la réponse est enregistrée automatiquement, sur cet appareil."
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] leading-relaxed text-ink outline-none transition focus:border-brand"
            />
          </div>

          {exercise.correction.length > 0 ? (
            <div className="mt-5">
              {!showCorrection ? (
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setShowCorrection(true)}
                    disabled={!aRepondu}
                    className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Comparer au corrigé
                  </button>
                  {!aRepondu && (
                    <button
                      onClick={() => setShowCorrection(true)}
                      className="text-xs text-muted underline-offset-2 hover:underline"
                    >
                      voir le corrigé sans répondre
                    </button>
                  )}
                </div>
              ) : (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-5 sm:px-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      Corrigé
                    </h4>
                    <button
                      onClick={() => setShowCorrection(false)}
                      className="text-xs text-muted underline-offset-2 hover:underline"
                    >
                      Masquer
                    </button>
                  </div>
                  <Blocks blocks={exercise.correction} />

                  {/* ── Auto-évaluation ─────────────────────────── */}
                  <div className="mt-6 border-t border-emerald-200 pt-4">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.15em] text-muted">
                      Où en êtes-vous ?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {STATUTS.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => onStatut(s.id)}
                          className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                            etat.statut === s.id ? s.actif : `bg-white ${s.classes}`
                          }`}
                        >
                          {s.libelle}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-900">
              Le cahier de corrigés ne couvre pas cet exercice.
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export function Exercises({ slug, exercises }: { slug: string; exercises: Exercise[] }) {
  const storageKey = `dcga:applis:${slug}`;
  const [etats, setEtats] = useState<Record<string, EtatExercice>>({});
  const [loaded, setLoaded] = useState(false);
  const sauvegarde = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    try {
      setEtats(JSON.parse(localStorage.getItem(storageKey) ?? "{}"));
    } catch {
      // entrée illisible : on repart de zéro
    }
    setLoaded(true);
  }, [storageKey]);

  /** Écrit en local en absorbant la frappe, et pousse les statuts au compte. */
  function persister(suivants: Record<string, EtatExercice>, statutsChanges: boolean) {
    setEtats(suivants);
    clearTimeout(sauvegarde.current);
    sauvegarde.current = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(suivants));
    }, 400);
    if (statutsChanges) {
      const statuts = Object.fromEntries(
        Object.entries(suivants)
          .filter(([, e]) => e.statut)
          .map(([id, e]) => [id, e.statut as string])
      );
      synchroniser({ chapitre: slug, applications: statuts });
    }
  }

  if (!loaded) return null;

  const corriges = exercises.filter((e) => e.correction.length > 0).length;
  const evalues = exercises.filter((e) => etats[e.id]?.statut).length;
  const reussis = exercises.filter((e) => etats[e.id]?.statut === "reussi").length;

  return (
    <div>
      <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
        <h2 className="font-serif text-xl font-bold text-ink">Applications</h2>
        <p className="mt-0.5 text-sm text-muted">
          {exercises.length} exercice{exercises.length > 1 ? "s" : ""} du cahier, dont {corriges}{" "}
          corrigé{corriges > 1 ? "s" : ""}. Répondez d&apos;abord, comparez ensuite, puis
          situez-vous.
        </p>
        {evalues > 0 && (
          <p className="mt-1.5 text-sm font-semibold text-blue-800">
            {evalues} travaillé{evalues > 1 ? "s" : ""} · {reussis} réussi{reussis > 1 ? "s" : ""}
          </p>
        )}
      </div>
      <div className="space-y-3">
        {exercises.map((e, i) => (
          <ExerciseCard
            key={e.id}
            exercise={e}
            index={i}
            etat={etats[e.id] ?? {}}
            onReponse={(texte) =>
              persister({ ...etats, [e.id]: { ...etats[e.id], reponse: texte } }, false)
            }
            onStatut={(statut) =>
              persister({ ...etats, [e.id]: { ...etats[e.id], statut } }, true)
            }
          />
        ))}
      </div>
    </div>
  );
}
