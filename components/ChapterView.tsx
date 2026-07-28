"use client";

import { useState } from "react";
import type { Chapter } from "@/lib/content/types";
import { ContentBlockView } from "./ContentBlocks";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";

const tabs = [
  { id: "lecon", label: "Leçon" },
  { id: "flashcards", label: "Flashcards" },
  { id: "quiz", label: "Quiz" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const [tab, setTab] = useState<TabId>("lecon");

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-4 mb-8 border-b border-slate-200 bg-white/90 px-4 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
                tab === t.id
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {t.label}
              {t.id === "flashcards" && (
                <span className="ml-1.5 text-xs text-slate-400">{chapter.flashcards.length}</span>
              )}
              {t.id === "quiz" && (
                <span className="ml-1.5 text-xs text-slate-400">{chapter.quiz.length}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-3xl">
        {tab === "lecon" && (
          <div className="space-y-10">
            {chapter.sections.map((section) => (
              <section key={section.id}>
                <h2 className="mb-4 text-xl font-bold text-slate-900">{section.title}</h2>
                <div className="space-y-4">
                  {section.blocks.map((block, i) => (
                    <ContentBlockView key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-6 text-center">
              <p className="font-medium text-slate-800">Leçon terminée ?</p>
              <p className="mt-1 text-sm text-slate-500">
                Ancrez les définitions avec les flashcards, puis validez le chapitre avec le quiz.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setTab("flashcards");
                    window.scrollTo({ top: 0 });
                  }}
                  className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"
                >
                  Réviser les flashcards
                </button>
                <button
                  onClick={() => {
                    setTab("quiz");
                    window.scrollTo({ top: 0 });
                  }}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  Passer au quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "flashcards" && <Flashcards slug={chapter.slug} cards={chapter.flashcards} />}
        {tab === "quiz" && <Quiz slug={chapter.slug} questions={chapter.quiz} />}
      </div>
    </div>
  );
}
