"use client";

import { useEffect, useState } from "react";
import type { Exercise } from "@/lib/content/types";
import { Blocks } from "./ContentBlocks";
import { Icone } from "./Icones";
import { synchroniser } from "./sync";
import {
  cleCompetence,
  competencesDe,
  competencesDuChapitre,
} from "@/lib/content/competences";

/**
 * Applications : chercher sur son brouillon, comparer, se situer.
 *
 * Pas de zone de saisie — essayée puis retirée à la demande de l'auteur :
 * un exercice de contrôle de gestion se travaille sur un brouillon, pas
 * dans un formulaire. Le site garde l'essentiel : le corrigé, et
 * l'auto-évaluation une fois la comparaison faite — Réussi, Partiel,
 * À revoir. Le statut part vers le compte si l'apprenant est connecté et
 * nourrit son tableau de bord.
 */

export type StatutApplication = "reussi" | "partiel" | "a-revoir";

interface EtatExercice {
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

function ExerciseCard({
  exercise,
  index,
  etat,
  onStatut,
}: {
  exercise: Exercise;
  index: number;
  etat: EtatExercice;
  onStatut: (statut: StatutApplication) => void;
}) {
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

          {exercise.correction.length > 0 ? (
            <div className="mt-8">
              {!showCorrection ? (
                <button
                  onClick={() => setShowCorrection(true)}
                  className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Comparer au corrigé
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
            <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50/60 px-4 py-3 text-sm text-amber-900">
              Le cahier de corrigés ne couvre pas cet exercice.
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export function Exercises({
  slug,
  exercises,
  attributions = {},
}: {
  slug: string;
  exercises: Exercise[];
  /** Compétences rattachées par le fondateur, par identifiant d'exercice. */
  attributions?: Record<string, string[]>;
}) {
  const storageKey = `dcga:applis:${slug}`;
  const [etats, setEtats] = useState<Record<string, EtatExercice>>({});
  const [loaded, setLoaded] = useState(false);
  /*
   * Filtre par compétence : les compétences viennent des blocs
   * « Compétences visées » des énoncés eux-mêmes. Sélection multiple ;
   * un exercice reste affiché s'il travaille l'une des compétences
   * cochées.
   */
  const [filtres, setFiltres] = useState<Set<string>>(new Set());
  const competences = competencesDuChapitre(exercises, attributions);
  const basculer = (cle: string) =>
    setFiltres((f) => {
      const suivant = new Set(f);
      if (suivant.has(cle)) suivant.delete(cle);
      else suivant.add(cle);
      return suivant;
    });
  const visibles =
    filtres.size === 0
      ? exercises
      : exercises.filter((e) =>
          competencesDe(e, attributions[e.id]).some((c) => filtres.has(cleCompetence(c)))
        );

  useEffect(() => {
    try {
      setEtats(JSON.parse(localStorage.getItem(storageKey) ?? "{}"));
    } catch {
      // entrée illisible : on repart de zéro
    }
    setLoaded(true);
  }, [storageKey]);

  /** Écrit en local et pousse les statuts au compte. */
  function persister(suivants: Record<string, EtatExercice>) {
    setEtats(suivants);
    localStorage.setItem(storageKey, JSON.stringify(suivants));
    const statuts = Object.fromEntries(
      Object.entries(suivants)
        .filter(([, e]) => e.statut)
        .map(([id, e]) => [id, e.statut as string])
    );
    synchroniser({ chapitre: slug, applications: statuts });
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
          corrigé{corriges > 1 ? "s" : ""}. Cherchez d&apos;abord sur votre brouillon, comparez
          ensuite, puis situez-vous.
        </p>
        {evalues > 0 && (
          <p className="mt-1.5 text-sm font-semibold text-blue-800">
            {evalues} travaillé{evalues > 1 ? "s" : ""} · {reussis} réussi{reussis > 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* ── Filtrer par compétence ─────────────────────────────────── */}
      {competences.length > 1 && (
        <div className="mb-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.15em] text-muted">
            Filtrer par compétence
          </p>
          <div className="flex flex-wrap gap-2">
            {competences.map((c) => (
              <button
                key={c.cle}
                onClick={() => basculer(c.cle)}
                aria-pressed={filtres.has(c.cle)}
                className={`rounded-full border px-3.5 py-1.5 text-left text-sm font-medium transition ${
                  filtres.has(c.cle)
                    ? "border-brand bg-orange-50 text-ink ring-1 ring-brand/40"
                    : "border-line bg-white text-slate-600 hover:border-brand/50"
                }`}
              >
                {c.texte}
                <span className="ml-1.5 text-xs text-muted">{c.applications}</span>
              </button>
            ))}
            {filtres.size > 0 && (
              <button
                onClick={() => setFiltres(new Set())}
                className="rounded-full px-3 py-1.5 text-sm font-semibold text-brand underline-offset-2 hover:underline"
              >
                Tout afficher
              </button>
            )}
          </div>
          {filtres.size > 0 && (
            <p className="mt-2 text-xs text-muted">
              {visibles.length} application{visibles.length > 1 ? "s" : ""} sur {exercises.length} —
              les exercices sans compétences déclarées sont masqués pendant le filtrage.
            </p>
          )}
        </div>
      )}
      <div className="space-y-3">
        {visibles.map((e) => (
          <ExerciseCard
            key={e.id}
            exercise={e}
            index={exercises.indexOf(e)}
            etat={etats[e.id] ?? {}}
            onStatut={(statut) => persister({ ...etats, [e.id]: { statut } })}
          />
        ))}
      </div>
    </div>
  );
}
