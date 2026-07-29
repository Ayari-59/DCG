import type { Metadata } from "next";
import Link from "next/link";
import { allChapters, programs } from "@/lib/content";
import { familiesOf } from "@/lib/content/theme";
import { Reveal } from "@/components/Reveal";
import { TargetMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Un contenu pédagogique consultable au téléphone, pour que le temps de classe serve à l'application et à l'analyse. Par Mohamed Ayari, professeur de contrôle de gestion et de communication professionnelle.",
};

/** Les chiffres sont calculés depuis le contenu : ils ne peuvent pas dater. */
function chiffres() {
  const t = allChapters.reduce(
    (a, c) => ({
      minutes: a.minutes + c.durationMin,
      sections: a.sections + c.sections.length,
      figures:
        a.figures +
        c.sections.flatMap((s) => s.blocks).filter((b) => b.type === "image").length,
      annales: a.annales + (c.annales?.length ?? 0),
      methodes: a.methodes + (c.methodes?.length ?? 0),
      cartes: a.cartes + c.flashcards.length,
      questions: a.questions + c.quiz.length,
    }),
    { minutes: 0, sections: 0, figures: 0, annales: 0, methodes: 0, cartes: 0, questions: 0 }
  );
  return { ...t, chapitres: allChapters.length, heures: Math.round(t.minutes / 60) };
}

const etapes = [
  {
    onglet: "Leçon",
    titre: "Comprendre",
    texte:
      "Le cours, section par section, avec ses tableaux, ses schémas et ses encadrés — définitions, points d'examen, erreurs fréquentes — repérables à leur couleur avant même d'être lus.",
  },
  {
    onglet: "Méthode",
    titre: "Appliquer",
    texte:
      "Les démarches attendues le jour de l'épreuve, énoncées étape par étape, avec la compétence que chacune sert.",
  },
  {
    onglet: "Fiche",
    titre: "Synthétiser",
    texte:
      "La synthèse du chapitre et ses notions clés sur une seule page, imprimable en un clic pour réviser hors écran.",
  },
  {
    onglet: "Annales",
    titre: "S'entraîner",
    texte:
      "Les sujets d'examen des sessions passées portant sur le thème, avec leur mise en situation et leurs annexes complètes.",
  },
  {
    onglet: "Flashcards · Quiz",
    titre: "Ancrer et vérifier",
    texte:
      "Les définitions et formules à mémoriser, puis des QCM corrigés question par question. La progression est conservée d'une visite à l'autre.",
  },
];

const choix = [
  {
    titre: "Pensé pour le téléphone",
    texte:
      "On révise dans le bus, entre deux cours, cinq minutes avant d'entrer en salle. Tout le site se consulte à une main : sommaire déroulant, cartes qui se retournent d'un geste, quiz au pouce.",
  },
  {
    titre: "Une section à la fois",
    texte:
      "Un chapitre représente souvent une heure de lecture. L'afficher d'un bloc décourage : on avance partie par partie, avec une barre de progression et le sommaire toujours à portée.",
  },
  {
    titre: "Une couleur par famille du programme",
    texte:
      "Le contrôle de gestion s'organise en grands blocs. Chacun garde sa teinte partout sur le site, pour situer un chapitre d'un coup d'œil sans avoir à lire.",
  },
  {
    titre: "Ni compte, ni inscription",
    texte:
      "On ouvre le site et on travaille. Aucune adresse à donner, aucun mot de passe à retenir : la progression est conservée par le navigateur.",
  },
];

export default function AProposPage() {
  const c = chiffres();
  const familles = familiesOf(allChapters.map((x) => x.slug));

  return (
    <div>
      <section className="grain relative overflow-hidden bg-navy-deep">
        <div className="relative mx-auto max-w-[860px] px-5 py-20 text-center sm:py-28">
          <Reveal>
            <TargetMark className="mx-auto h-14 w-14" />
            <h1 className="mt-7 font-serif text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.6rem]">
              Le pourquoi du comment
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Apprendre les notions essentielles depuis son téléphone, pour que le temps de classe
              serve à ce qui compte vraiment : appliquer, analyser, prendre du recul.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[860px] px-5 py-20">
        {/* ── L'intention ───────────────────────────────────────────── */}
        <Reveal>
          <section>
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              L&apos;idée de départ
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-slate-700">
              <p>
                Une heure de cours est une ressource rare. La passer à dicter des définitions que
                l&apos;étudiant pourrait mémoriser seul, c&apos;est la gaspiller — alors que
                l&apos;application, l&apos;analyse et la prise de recul, elles, ont besoin du
                professeur et du groupe.
              </p>
              <p>
                D&apos;où ce site : un contenu pédagogique{" "}
                <strong className="font-bold text-ink">consultable depuis un téléphone</strong>,
                simple et ludique, dont le rôle est de{" "}
                <strong className="font-bold text-ink">
                  faciliter la mémorisation des notions essentielles
                </strong>
                . Ce qui est acquis en amont libère le temps de classe pour ce qui ne peut pas se
                faire seul.
              </p>
              <p>
                Il a d&apos;abord été conçu pour mes étudiants. Il est ouvert à tous ceux qui
                préparent ces épreuves — ou qui ont simplement envie d&apos;apprendre.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── L'auteur ──────────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-16 rounded-3xl border-2 border-line bg-white p-8 elev-sm">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
              <Portrait />
              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-bold tracking-[-0.02em] text-ink">
                  Mohamed Ayari
                </h2>
                <p className="mt-1 font-semibold text-brand">
                  Professeur de contrôle de gestion et de communication professionnelle
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">
                  J&apos;enseigne l&apos;UE11 et l&apos;UE13 du DCG. Tout le contenu de ce site est
                  tiré de mes cours, et je suis passionné par ce que l&apos;intelligence
                  artificielle peut apporter à l&apos;enseignement — ce site en est lui-même un
                  terrain d&apos;expérimentation, du contenu jusqu&apos;à sa fabrication.
                </p>
                <a
                  href="https://www.youtube.com/@Objectif-DCG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-line px-4 py-2 text-sm font-bold text-ink transition hover:border-brand"
                >
                  🎬 La chaîne Objectif-DCG
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── Ce que contient le site ───────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Ce que contient le site
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              {programs.length} programmes entiers — l&apos;UE11 et l&apos;UE13 du DCG,
              l&apos;UE3 du DSCG — soit {c.chapitres} chapitres et {c.sections} sections.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 rounded-3xl border-2 border-line bg-white px-8 py-7 elev-sm sm:grid-cols-3">
              {[
                { v: c.chapitres, l: "chapitres", couleur: "text-navy" },
                { v: c.figures, l: "schémas", couleur: "text-brand" },
                { v: c.methodes, l: "démarches de méthode", couleur: "text-emerald-700" },
                { v: c.annales, l: "sujets d'annales", couleur: "text-blue-700" },
                { v: c.cartes, l: "flashcards", couleur: "text-teal-700" },
                { v: c.questions, l: "questions de quiz", couleur: "text-sky-600" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className={`font-serif text-3xl font-bold tabular-nums ${s.couleur}`}>
                    {s.v}
                  </dt>
                  <dd className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Une coquille dans une flashcard ou une question de quiz ? Signalez-la, elle sera
              corrigée.
            </p>
          </section>
        </Reveal>

        {/* ── La méthode ────────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Cinq façons de travailler un chapitre
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Les onglets d&apos;un chapitre suivent l&apos;ordre dans lequel une notion
              s&apos;installe. On peut n&apos;en utiliser qu&apos;un, ou les parcourir dans
              l&apos;ordre.
            </p>
            <ol className="mt-8 space-y-4">
              {etapes.map((e, i) => (
                <li
                  key={e.titre}
                  className="flex gap-5 rounded-2xl border-2 border-line bg-white p-6 elev-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy font-serif text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-brand">
                      Onglet {e.onglet}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-ink">{e.titre}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{e.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        {/* ── Les choix d'interface ─────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Pourquoi le site fonctionne ainsi
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Chaque parti pris découle de la même idée : que réviser demande le moins
              d&apos;effort possible, pour que l&apos;effort aille au raisonnement.
            </p>
            <div className="mt-8 space-y-5">
              {choix.map((x) => (
                <div key={x.titre} className="border-l-4 border-line pl-5">
                  <h3 className="font-serif text-lg font-bold text-ink">{x.titre}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{x.texte}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {familles.map((f) => (
                <span
                  key={f.family}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-white px-3.5 py-1.5 text-sm font-bold text-ink"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${f.bar}`} />
                  {f.family}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── Suite ─────────────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Ce qui arrive
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Un{" "}
              <Link
                href="/classe"
                className="font-semibold text-brand underline-offset-2 hover:underline"
              >
                cahier de texte
              </Link>{" "}
              suit les séances et le travail à faire, chaque entrée renvoyant aux sections du cours
              concernées. Viendront ensuite le suivi de progression personnelle et un plan de
              révision déduit du calendrier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {programs.map((p) => (
                <Link
                  key={p.ue}
                  href={p.ue === "UE11" ? "/dcg" : p.ue === "UE3" ? "/dscg" : "/ue13"}
                  className="lift rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
                >
                  {p.level} · {p.ue} →
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

/**
 * Portrait de l'auteur. En attendant la photo, les initiales : une image
 * absente afficherait une icône cassée, ce qui est pire que pas d'image.
 * Déposer le fichier dans public/ et remplacer ce bloc par une balise img.
 */
function Portrait() {
  return (
    <span
      aria-hidden
      className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-3xl font-bold text-white elev-md"
    >
      MA
    </span>
  );
}
