import type { Metadata } from "next";
import Link from "next/link";
import { allChapters, programs } from "@/lib/content";
import { familiesOf } from "@/lib/content/theme";
import { Reveal } from "@/components/Reveal";
import { TargetMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Pourquoi ce site existe, d'où vient son contenu, et les choix pédagogiques qui expliquent son fonctionnement.",
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
      "Le cours du manuel, section par section, avec ses tableaux, ses schémas et ses encadrés — définitions, points d'examen, erreurs fréquentes — repérables à leur couleur avant même d'être lus.",
  },
  {
    onglet: "Méthode",
    titre: "Appliquer",
    texte:
      "Les démarches attendues le jour de l'épreuve, énoncées étape par étape, avec la compétence que chacune sert. Savoir la notion ne suffit pas : il faut connaître le geste.",
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
      "Les définitions et formules à mémoriser, puis des QCM type examen corrigés question par question. La progression est conservée d'une visite à l'autre.",
  },
];

const choix = [
  {
    titre: "Une section à la fois",
    texte:
      "Un chapitre représente souvent une heure de lecture. L'afficher d'un bloc décourage : on avance ici partie par partie, avec le sommaire toujours visible et une barre de progression. Les flèches du clavier suffisent à naviguer.",
  },
  {
    titre: "Une couleur par famille du programme",
    texte:
      "Le contrôle de gestion s'organise en grands blocs — fondements, analyse, coûts, budgets, contrôle, performance. Chacun garde sa teinte partout sur le site, pour situer un chapitre d'un coup d'œil.",
  },
  {
    titre: "Les schémas du manuel, à leur place",
    texte:
      "Les figures ne sont pas décoratives : elles portent une part du raisonnement. Elles sont reprises à l'endroit exact où le cours les appelle, avec leur légende.",
  },
  {
    titre: "Ni compte, ni inscription",
    texte:
      "La progression est conservée par le navigateur. On ouvre le site et on travaille — aucune adresse électronique à donner, aucun mot de passe à retenir.",
  },
  {
    titre: "Le clavier plutôt que la souris",
    texte:
      "Répondre à un quiz au chiffre, retourner une carte à l'espace, chercher n'importe quoi avec Ctrl+K. Enchaîner dix questions ne doit pas demander dix clics.",
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
              Ce site rassemble un cours complet de contrôle de gestion et l&apos;organise selon la
              façon dont on apprend réellement cette matière. Voici ce qu&apos;il contient, d&apos;où
              vient ce contenu, et pourquoi il fonctionne ainsi.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[860px] px-5 py-20">
        {/* ── Ce que contient le site ───────────────────────────────── */}
        <Reveal>
          <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
            Ce que contient le site
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Deux programmes entiers : l&apos;UE11 du DCG et l&apos;UE3 du DSCG, soit{" "}
            {c.chapitres} chapitres et {c.sections} sections, environ {c.heures} heures de lecture.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 rounded-3xl border-2 border-line bg-white px-8 py-7 elev-sm sm:grid-cols-3">
            {[
              { v: c.chapitres, l: "chapitres", couleur: "text-navy" },
              { v: c.figures, l: "schémas du manuel", couleur: "text-brand" },
              { v: c.methodes, l: "démarches de méthode", couleur: "text-emerald-700" },
              { v: c.annales, l: "sujets d'annales", couleur: "text-blue-700" },
              { v: c.cartes, l: "flashcards", couleur: "text-teal-700" },
              { v: c.questions, l: "questions de quiz", couleur: "text-sky-600" },
            ].map((s) => (
              <div key={s.l}>
                <dt className={`font-serif text-3xl font-bold tabular-nums ${s.couleur}`}>{s.v}</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ── D'où vient le contenu ─────────────────────────────────── */}
        <Reveal>
          <section className="mt-20">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              D&apos;où vient ce contenu
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                Rien n&apos;est repris d&apos;ailleurs. Le cours, les démarches de méthode, les
                schémas et les cas proviennent des manuels et des cahiers d&apos;exercices rédigés
                pour l&apos;enseignement de cette matière, puis convertis pour le web sans être
                réécrits : ce que vous lisez ici est ce qui est enseigné en classe.
              </p>
              <p>
                Les annales sont les sujets des sessions passées, regroupés par thème et rattachés
                au chapitre correspondant. Les énoncés et leurs annexes sont complets ; les corrigés
                ne sont pas fournis.
              </p>
              <p className="rounded-2xl border-2 border-amber-200 bg-amber-50 px-5 py-4 text-[15px] text-amber-900">
                <strong className="font-bold">En toute transparence :</strong> les flashcards et les
                questions de quiz ont été rédigées à partir du cours, puis relues. Si vous relevez
                une erreur, elle est de notre fait et non de celui du manuel — signalez-la, elle
                sera corrigée.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── La méthode ────────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-20">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Cinq façons de travailler un chapitre
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Chaque chapitre est découpé en onglets qui suivent l&apos;ordre dans lequel une notion
              s&apos;installe réellement. On peut n&apos;en utiliser qu&apos;un, ou les parcourir
              dans l&apos;ordre.
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
          <section className="mt-20">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Pourquoi le site fonctionne ainsi
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Chaque parti pris répond à une difficulté concrète de la révision.
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

        {/* ── Qui édite le site ─────────────────────────────────────── *
         * Ce bloc est le seul de la page qui relève de l'auteur : à
         * personnaliser (parcours, motivation, contact) avant diffusion.  */}
        <Reveal>
          <section className="mt-20 rounded-3xl border-2 border-line bg-white p-8 elev-sm">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Qui édite ce site
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Objectif-DCG.fr est édité par l&apos;auteur de la chaîne{" "}
              <a
                href="https://www.youtube.com/@Objectif-DCG"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline-offset-2 hover:underline"
              >
                Objectif-DCG
              </a>
              , enseignant en contrôle de gestion. Les vidéos de la chaîne sont intégrées aux
              chapitres auxquels elles se rapportent.
            </p>
          </section>
        </Reveal>

        {/* ── Suite ─────────────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-20">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Ce qui arrive
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Le site s&apos;étoffe au fil de l&apos;année. Un{" "}
              <Link href="/classe" className="font-semibold text-brand underline-offset-2 hover:underline">
                cahier de texte
              </Link>{" "}
              suit les séances et le travail à faire, chaque entrée renvoyant directement aux
              sections du cours concernées. Viendront ensuite le suivi de progression personnelle et
              un plan de révision déduit du calendrier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {programs.map((p) => (
                <Link
                  key={p.level}
                  href={`/${p.level.toLowerCase()}`}
                  className="lift rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
                >
                  Programme {p.level} · {p.ue} →
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
