"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { QuizQuestion } from "@/lib/content/types";
import { getTheme } from "@/lib/content/theme";

interface Props {
  slug: string;
  questions: QuizQuestion[];
}

export function Quiz({ slug, questions }: Props) {
  const theme = getTheme(slug);
  const storageKey = `dcga:quiz:${slug}`;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) setBest(Number(saved));
  }, [storageKey]);

  const question = questions[current];
  const isCorrect = validated && selected === question.answer;

  /**
   * La réponse choisie est doublée dans une référence : au clavier, « 2 »
   * puis Entrée peuvent tomber dans le même cycle de rendu, et le
   * gestionnaire lirait alors une valeur périmée — la validation serait
   * silencieusement ignorée.
   */
  const selectedRef = useRef<number | null>(null);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const validate = useCallback(() => {
    const choix = selectedRef.current;
    if (choix === null) return;
    setValidated(true);
    if (choix === question.answer) setScore((s) => s + 1);
  }, [question]);

  const next = useCallback(() => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      if (best === null || score > best) {
        setBest(score);
        localStorage.setItem(storageKey, String(score));
      }
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setValidated(false);
    }
  }, [current, questions.length, score, best, storageKey]);

  /**
   * Répondre au clavier : 1 à 4 pour choisir, Entrée pour valider puis
   * enchaîner. Faire une série de dix questions ne demande plus la souris.
   */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = document.activeElement;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (finished) return;
      const chiffre = Number(e.key);
      if (!validated && chiffre >= 1 && chiffre <= question.choices.length) {
        e.preventDefault();
        selectedRef.current = chiffre - 1;
        setSelected(chiffre - 1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (validated) next();
        else validate();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [validated, finished, question, validate, next]);

  function restart() {
    setCurrent(0);
    setSelected(null);
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
          <p className="mt-1 text-sm text-slate-400">Meilleur score : {best}/{questions.length}</p>
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

      <div className="mt-5 space-y-2.5">
        {question.choices.map((choice, i) => {
          let cls = "border-line bg-white hover:border-brand/60 hover:bg-orange-50/50";
          if (validated) {
            if (i === question.answer) cls = "border-emerald-400 bg-emerald-50";
            else if (i === selected) cls = "border-rose-300 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-60";
          } else if (i === selected) {
            cls = "border-brand bg-orange-50 ring-2 ring-brand/40";
          }
          return (
            <button
              key={i}
              disabled={validated}
              onClick={() => setSelected(i)}
              className={`block w-full rounded-lg border px-4 py-3 text-left text-slate-800 transition ${cls}`}
            >
              <kbd className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded border border-line bg-slate-50 text-xs font-bold text-muted">
                {i + 1}
              </kbd>
              {choice}
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
          <kbd className="font-semibold">1</kbd>–<kbd className="font-semibold">{question.choices.length}</kbd> pour répondre ·{" "}
          <kbd className="font-semibold">↵</kbd> pour valider
        </p>
        {!validated ? (
          <button
            onClick={validate}
            disabled={selected === null}
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
