"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { QuizQuestion } from "@/lib/content/types";
import { getTheme } from "@/lib/content/theme";
import { synchroniser } from "./sync";

interface Props {
  slug: string;
  questions: QuizQuestion[];
}

/** Deux séries d'indices sont égales si elles désignent les mêmes cases. */
function memeReponse(a: number[], b: number[]) {
  return a.length === b.length && [...a].sort().every((v, i) => v === [...b].sort()[i]);
}

export function Quiz({ slug, questions }: Props) {
  const theme = getTheme(slug);
  const storageKey = `dcga:quiz:${slug}`;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) setBest(Number(saved));
  }, [storageKey]);

  const question = questions[current];
  const multiple = question.answers.length > 1;
  const isCorrect = validated && memeReponse(selected, question.answers);

  /**
   * La réponse choisie est doublée dans une référence : au clavier, « 2 »
   * puis Entrée peuvent tomber dans le même cycle de rendu, et le
   * gestionnaire lirait alors une valeur périmée — la validation serait
   * silencieusement ignorée.
   */
  const selectedRef = useRef<number[]>([]);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  /**
   * Une question à réponse unique remplace le choix précédent ; une
   * question à réponses multiples les cumule. Sans cette distinction, il
   * faudrait décocher à la main avant de changer d'avis sur les trois
   * quarts des questions.
   */
  const choisir = useCallback(
    (i: number) => {
      setSelected((s) => {
        const suivant = !multiple ? [i] : s.includes(i) ? s.filter((x) => x !== i) : [...s, i];
        selectedRef.current = suivant;
        return suivant;
      });
    },
    [multiple]
  );

  const validate = useCallback(() => {
    if (selectedRef.current.length === 0) return;
    setValidated(true);
    if (memeReponse(selectedRef.current, question.answers)) setScore((s) => s + 1);
  }, [question]);

  const next = useCallback(() => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      // Le compte conserve lui aussi le meilleur score : la fusion est
      // faite côté serveur, l'envoi peut donc partir sans condition.
      synchroniser({ chapitre: slug, quizScore: score, quizTotal: questions.length });
      if (best === null || score > best) {
        setBest(score);
        localStorage.setItem(storageKey, String(score));
      }
    } else {
      setCurrent((c) => c + 1);
      setSelected([]);
      setValidated(false);
    }
  }, [current, questions.length, score, best, storageKey]);

  /**
   * Répondre au clavier : les chiffres pour cocher, Entrée pour valider
   * puis enchaîner. Faire une série de vingt-six questions ne demande plus
   * la souris.
   */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = document.activeElement;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (finished) return;
      const chiffre = Number(e.key);
      if (!validated && chiffre >= 1 && chiffre <= question.choices.length) {
        e.preventDefault();
        choisir(chiffre - 1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (validated) next();
        else validate();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [validated, finished, question, choisir, validate, next]);

  function restart() {
    setCurrent(0);
    setSelected([]);
    setValidated(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <div className={`font-serif text-6xl font-bold ${theme.text}`}>
          {score}/{questions.length}
        </div>
        <p className="mt-2 text-slate-600">
          {pct >= 80
            ? "Excellent ! Chapitre maîtrisé."
            : pct >= 50
              ? "Bien, mais revoyez les questions manquées avant de passer au chapitre suivant."
              : "Reprenez la leçon et les flashcards, puis retentez le quiz."}
        </p>
        {best !== null && (
          <p className="mt-1 text-sm text-slate-400">
            Meilleur score : {best}/{questions.length}
          </p>
        )}
        <button
          onClick={restart}
          className={`mt-6 rounded-xl px-6 py-3 font-bold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
        >
          Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {current + 1} / {questions.length}
        </span>
        <span>Score : {score}</span>
      </div>
      <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${theme.bar}`}
          style={{ width: `${(current / questions.length) * 100}%` }}
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{question.question}</h3>

      {/* Le nombre de bonnes réponses est annoncé : le chercher est un
          exercice de devinette, pas de contrôle de gestion. */}
      {multiple && (
        <p className={`mt-2 text-xs font-black uppercase tracking-[0.15em] ${theme.text}`}>
          {question.answers.length} bonnes réponses à cocher
        </p>
      )}

      <div className="mt-5 space-y-2.5">
        {question.choices.map((choice, i) => {
          const coche = selected.includes(i);
          const juste = question.answers.includes(i);
          let cls = "border-line bg-white hover:border-brand/60 hover:bg-orange-50/50";
          if (validated) {
            if (juste) cls = "border-emerald-400 bg-emerald-50";
            else if (coche) cls = "border-rose-300 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-60";
          } else if (coche) {
            cls = "border-brand bg-orange-50 ring-2 ring-brand/40";
          }
          return (
            <button
              key={i}
              disabled={validated}
              onClick={() => choisir(i)}
              aria-pressed={coche}
              className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-slate-800 transition ${cls}`}
            >
              <kbd
                className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center border text-xs font-bold ${
                  multiple ? "rounded" : "rounded-full"
                } ${coche ? "border-brand bg-brand text-white" : "border-line bg-slate-50 text-muted"}`}
              >
                {i + 1}
              </kbd>
              <span className="min-w-0">{choice}</span>
            </button>
          );
        })}
      </div>

      {validated && (
        <div
          className={`mt-5 rounded-lg border px-4 py-3 text-sm leading-relaxed ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
        >
          <span className="font-semibold">{isCorrect ? "Bonne réponse ! " : "Incorrect. "}</span>
          {question.explanation}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="hidden text-xs text-muted sm:block">
          <kbd className="font-semibold">1</kbd>–
          <kbd className="font-semibold">{question.choices.length}</kbd> pour{" "}
          {multiple ? "cocher" : "répondre"} · <kbd className="font-semibold">↵</kbd> pour valider
        </p>
        {!validated ? (
          <button
            onClick={validate}
            disabled={selected.length === 0}
            className={`rounded-xl px-6 py-3 font-bold text-white shadow-md transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 ${theme.bar}`}
          >
            Valider
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:bg-slate-700"
          >
            {current + 1 >= questions.length ? "Voir mon score" : "Question suivante"}
          </button>
        )}
      </div>
    </div>
  );
}
