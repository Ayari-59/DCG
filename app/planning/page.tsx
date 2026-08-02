import type { Metadata } from "next";
import { agendaUrl } from "@/lib/apprenant";

export const metadata: Metadata = {
  title: "Emploi du temps",
  description: "L'emploi du temps de la classe.",
};

export const revalidate = 60;

export default async function PlanningPage() {
  const url = await agendaUrl();

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-12">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Ma classe</p>
      <h1 className="mb-8 mt-2 font-serif text-4xl font-bold tracking-[-0.03em] text-ink">
        Emploi du temps
      </h1>

      {url ? (
        <div className="overflow-hidden rounded-3xl border border-line bg-white elev-sm">
          <iframe
            src={url}
            title="Emploi du temps"
            className="h-[700px] w-full border-0"
            loading="lazy"
          />
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-line px-6 py-10 text-center text-muted">
          L&apos;emploi du temps n&apos;a pas encore été configuré par l&apos;enseignant.
        </p>
      )}
    </div>
  );
}
