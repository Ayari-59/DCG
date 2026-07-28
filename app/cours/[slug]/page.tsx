import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allChapters, getChapter } from "@/lib/content";
import { ChapterView } from "@/components/ChapterView";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allChapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter ? chapter.title : "Chapitre introuvable" };
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return (
    <div className="px-4 pb-16">
      <div className="mx-auto max-w-3xl pt-8">
        <Link
          href={`/${chapter.level.toLowerCase()}`}
          className="text-sm text-slate-400 transition hover:text-indigo-600"
        >
          ← {chapter.level} {chapter.ue} · {chapter.level === "DCG" ? "Contrôle de gestion" : "Management et contrôle de gestion"}
        </Link>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Chapitre {chapter.number} — {chapter.title}
        </h1>
        <p className="mt-2 leading-relaxed text-slate-600">{chapter.description}</p>
        <p className="mb-8 mt-2 text-xs text-slate-400">
          ⏱ {chapter.durationMin} min de lecture · {chapter.flashcards.length} flashcards · quiz de{" "}
          {chapter.quiz.length} questions
        </p>
      </div>
      <ChapterView chapter={chapter} />
    </div>
  );
}
