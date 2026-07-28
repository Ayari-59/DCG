"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/content/types";
import { Blocks } from "./ContentBlocks";

function Difficulty({ level }: { level: number }) {
  return (
    <span className="text-amber-500" title={`Difficulté ${level}/3`}>
      {"★".repeat(level)}
      <span className="text-slate-300">{"★".repeat(Math.max(0, 3 - level))}</span>
    </span>
  );
}

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [showCorrection, setShowCorrection] = useState(false);

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
            {exercise.durationMin && <span>⏱ {exercise.durationMin} min</span>}
            {exercise.correction.length === 0 && (
              <span className="text-amber-600">corrigé non disponible</span>
            )}
          </span>
        </span>
        <span
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="border-t border-line px-5 py-6 sm:px-7">
          <Blocks blocks={exercise.statement} />

          {exercise.correction.length > 0 ? (
            <div className="mt-8">
              {!showCorrection ? (
                <button
                  onClick={() => setShowCorrection(true)}
                  className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Afficher le corrigé
                </button>
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
                </div>
              )}
            </div>
          ) : (
            <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-900">
              Le cahier de corrigés ne couvre pas cet exercice.
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export function Exercises({ exercises }: { exercises: Exercise[] }) {
  const corriges = exercises.filter((e) => e.correction.length > 0).length;

  return (
    <div>
      <div className="mb-6 rounded-xl border-2 border-blue-200 bg-blue-50 px-5 py-4">
        <h2 className="font-serif text-xl font-bold text-ink">Applications</h2>
        <p className="mt-0.5 text-sm text-muted">
          {exercises.length} exercice{exercises.length > 1 ? "s" : ""} du cahier, dont {corriges}{" "}
          corrigé{corriges > 1 ? "s" : ""}. Cherchez d&apos;abord seul, puis comparez.
        </p>
      </div>
      <div className="space-y-3">
        {exercises.map((e, i) => (
          <ExerciseCard key={e.id} exercise={e} index={i} />
        ))}
      </div>
    </div>
  );
}
