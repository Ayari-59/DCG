import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getChapter, programs } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { hasFiche } from "@/lib/content/fiche";
import { apprenantConnecte, ressourcesReservees } from "@/lib/apprenant";
import {
  ChapterView,
  type OngletVerrouille,
  type VoisinChapitre,
} from "@/components/ChapterView";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * La page est rendue à la demande, plus à la construction : ce qu'elle
 * envoie dépend du visiteur. Les ressources que l'auteur réserve aux
 * apprenants connectés sont retirées du chapitre côté serveur — un
 * visiteur non connecté ne les reçoit pas, elles ne sont pas seulement
 * masquées.
 */
export const dynamic = "force-dynamic";

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

  const reservees = await ressourcesReservees();
  const connecte = reservees.length > 0 && Boolean(await apprenantConnecte());
  const reserve = (id: (typeof reservees)[number]) => !connecte && reservees.includes(id);

  /*
   * Le chapitre est allégé de ce qui est réservé, et la liste des onglets
   * verrouillés est passée à part : l'interface peut ainsi montrer que la
   * ressource existe — cadenas et invitation à se connecter — sans jamais
   * en détenir le contenu.
   */
  const verrouilles: OngletVerrouille[] = [];
  const visible = { ...chapter };

  if (reserve("methodes") && chapter.methodes?.length) {
    visible.methodes = undefined;
    verrouilles.push("methode");
  }
  if (reserve("fiche") && hasFiche(chapter)) {
    verrouilles.push("fiche");
  }
  if (reserve("annales") && chapter.annales?.length) {
    visible.annales = undefined;
    verrouilles.push("annales");
  }
  if (reserve("flashcards") && chapter.flashcards.length) {
    visible.flashcards = [];
    verrouilles.push("flashcards");
  }
  if (reserve("quiz") && chapter.quiz.length) {
    visible.quiz = [];
    verrouilles.push("quiz");
  }
  if (reserve("videos")) {
    visible.videos = undefined;
  }

  return (
    // ChapterView lit l'onglet et la section dans l'URL : Next impose une
    // frontière Suspense autour de useSearchParams.
    <Suspense fallback={<div className="mx-auto max-w-[1400px] px-5 py-20" />}>
      <ChapterView chapter={visible} suivant={chapitreSuivant(slug)} verrouilles={verrouilles} />
    </Suspense>
  );
}
