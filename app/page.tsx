import Link from "next/link";
import { programs, allChapters } from "@/lib/content";

const features = [
  {
    title: "Cours structurés",
    text: "Chaque chapitre suit le programme officiel : leçon claire, formules encadrées, exemples chiffrés et pièges d'examen signalés.",
    icon: "📖",
  },
  {
    title: "Vidéos de cours",
    text: "Des vidéos courtes intégrées aux chapitres pour comprendre les notions autrement, à votre rythme.",
    icon: "🎬",
  },
  {
    title: "Flashcards",
    text: "Définitions et formules à mémoriser, avec suivi des cartes acquises et de celles à revoir.",
    icon: "🃏",
  },
  {
    title: "Quiz corrigés",
    text: "Des QCM type examen avec correction expliquée à chaque question, pour valider chaque chapitre.",
    icon: "✅",
  },
];

export default function Home() {
  const demo = allChapters[0];

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
          <p className="mb-4 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            DCG UE11 · DSCG UE3
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Réussissez le <span className="text-indigo-600">contrôle de gestion</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Cours complets, vidéos, flashcards et quiz corrigés pour préparer l&apos;UE11 du DCG et
            l&apos;UE3 du DSCG. Apprenez, mémorisez, validez.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={`/cours/${demo.slug}`}
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Essayer un chapitre gratuit
            </Link>
            <Link
              href="/dcg"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Voir le programme
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          Une méthode complète pour chaque chapitre
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="text-center text-2xl font-bold text-slate-900">Choisissez votre diplôme</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.level}
              href={`/${p.level.toLowerCase()}`}
              className="group rounded-xl border border-slate-200 bg-white p-8 transition hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  {p.level} <span className="text-indigo-600">{p.ue}</span>
                </h3>
                <span className="text-sm text-slate-400">
                  {p.chapters.length} chapitre{p.chapters.length > 1 ? "s" : ""} en ligne
                </span>
              </div>
              <p className="mt-1 font-medium text-slate-700">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-indigo-600 group-hover:underline">
                Accéder au programme →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
