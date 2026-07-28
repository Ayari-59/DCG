import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { Logo, Tagline } from "@/components/Logo";
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
    default: "Objectif-DCG.fr — Cap sur l'expertise comptable",
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
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="no-print bg-navy-deep text-white">
          <div
            aria-hidden
            className="h-1.5 w-full"
            style={{ backgroundImage: "linear-gradient(90deg,#f07e26,#fbb040,#2f6fb5,#16325c)" }}
          />
          <div className="mx-auto max-w-[1400px] px-5 py-12">
            <div className="flex flex-col items-center gap-5 text-center">
              <Logo onDark />
              <Tagline />
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
