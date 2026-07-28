import type { Metadata } from "next";
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
  return {
    title: chapter ? chapter.title : "Chapitre introuvable",
    description: chapter?.description,
  };
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return <ChapterView chapter={chapter} />;
}
