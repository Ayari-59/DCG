"use client";

import { useEffect, useState } from "react";
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

  function validate() {
    if (selected === null) return;
    setValidated(true);
    if (selected === question.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      const final = score;
      setFinished(true);
      if (best === null || final > best) {
        setBest(final);
        localStorage.setItem(storageKey, String(final));
      }
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setValidated(false);
    }
  }

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
          let cls = "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/50";
          if (validated) {
            if (i === question.answer) cls = "border-emerald-400 bg-emerald-50";
            else if (i === selected) cls = "border-rose-300 bg-rose-50";
            else cls = "border-slate-200 bg-white opacity-60";
          } else if (i === selected) {
            cls = `border-violet-500 bg-violet-50 ring-2 ring-violet-400`;
          }
          return (
            <button
              key={i}
              disabled={validated}
              onClick={() => setSelected(i)}
              className={`block w-full rounded-lg border px-4 py-3 text-left text-slate-800 transition ${cls}`}
            >
              <span className="mr-2 font-semibold text-slate-400">
                {String.fromCharCode(65 + i)}.
              </span>
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

      <div className="mt-6 flex justify-end">
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
