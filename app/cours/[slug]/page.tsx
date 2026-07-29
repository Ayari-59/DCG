import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { allChapters, getChapter, programs } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { ChapterView, type VoisinChapitre } from "@/components/ChapterView";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allChapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return {
    title: chapter ? chapter.title : "Chapitre introuvable",
    description: chapter?.description,
  };
}

/** Chapitre suivant dans le même programme, pour ne pas finir en impasse. */
function chapitreSuivant(slug: string): VoisinChapitre | undefined {
  for (const p of programs) {
    const i = p.chapters.findIndex((c) => c.slug === slug);
    if (i >= 0 && i < p.chapters.length - 1) {
      const n = p.chapters[i + 1];
      return {
        slug: n.slug,
        numero: n.number,
        titre: n.title,
        badge: getTheme(n.slug).badge,
      };
    }
  }
  return undefined;
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return (
    // ChapterView lit l'onglet et la section dans l'URL : Next impose une
    // frontière Suspense autour de useSearchParams sur une page statique.
    <Suspense fallback={<div className="mx-auto max-w-[1400px] px-5 py-20" />}>
      <ChapterView chapter={chapter} suivant={chapitreSuivant(slug)} />
    </Suspense>
  );
}
