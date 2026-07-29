import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CommandPalette } from "@/components/CommandPalette";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Objectif-DCG.fr — Réussir le contrôle de gestion",
    template: "%s · Objectif-DCG.fr",
  },
  description:
    "Cours, vidéos, méthodologie, fiches de révision, flashcards et quiz pour réussir le contrôle de gestion au DCG (UE11) et au DSCG (UE3).",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="no-print sticky top-0 z-30 border-b border-line/80 bg-paper/70 backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3">
            <Link href="/" aria-label="Objectif-DCG.fr — accueil" className="transition hover:opacity-85">
              <Logo />
            </Link>
            <div className="flex items-center gap-3">
            <nav className="flex items-center gap-1 text-sm font-semibold text-muted">
              <Link
                href="/dcg"
                className="rounded-lg px-3 py-2 transition hover:bg-orange-50 hover:text-brand"
              >
                DCG · UE11
              </Link>
              <Link
                href="/dscg"
                className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-navy"
              >
                DSCG · UE3
              </Link>
              <Link
                href="/classe"
                className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-navy"
              >
                Ma classe
              </Link>
            </nav>
            <CommandPalette />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="no-print bg-navy-deep text-white">
          {/* Les six couleurs de familles, en aplats juxtaposés. */}
          <div aria-hidden className="flex h-1.5 w-full">
            <span className="flex-1 bg-amber-500" />
            <span className="flex-1 bg-orange-600" />
            <span className="flex-1 bg-blue-700" />
            <span className="flex-1 bg-teal-600" />
            <span className="flex-1 bg-sky-500" />
            <span className="flex-1 bg-emerald-600" />
          </div>
          <div className="mx-auto max-w-[1400px] px-5 py-12">
            <div className="flex flex-col items-center gap-5 text-center">
              <Logo onDark />
              <p className="max-w-xl text-sm leading-relaxed text-white/50">
                Cours, méthodologie, fiches de révision, flashcards et quiz de contrôle de gestion —
                DCG UE11 et DSCG UE3.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
              <span>© {new Date().getFullYear()} Objectif-DCG.fr</span>
              <span className="flex gap-5">
                <Link href="/dcg" className="transition hover:text-white/80">
                  DCG · UE11
                </Link>
                <Link href="/dscg" className="transition hover:text-white/80">
                  DSCG · UE3
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
