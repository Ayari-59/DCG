import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
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
    default: "DCG Académie — Réussir le contrôle de gestion",
    template: "%s · DCG Académie",
  },
  description:
    "Cours, vidéos, fiches de révision, flashcards et quiz pour réussir le contrôle de gestion au DCG (UE11) et au DSCG (UE3).",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="no-print sticky top-0 z-30 border-b border-[--line]/80 bg-[--paper]/70 backdrop-blur-xl backdrop-saturate-150">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 via-violet-600 to-emerald-500 text-[13px] font-black text-white shadow-md shadow-violet-500/30 transition group-hover:scale-105">
                CG
              </span>
              <span className="font-serif text-lg font-bold tracking-tight text-[--ink]">
                DCG Académie
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium text-[--muted]">
              <Link
                href="/dcg"
                className="rounded-lg px-3 py-2 font-semibold transition hover:bg-violet-50 hover:text-violet-700"
              >
                DCG · UE11
              </Link>
              <Link
                href="/dscg"
                className="rounded-lg px-3 py-2 font-semibold transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                DSCG · UE3
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="no-print bg-white">
          {/* Le dégradé reprend, dans l'ordre, les couleurs des familles du programme. */}
          <div
            aria-hidden
            className="h-1.5 w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#fb923c,#f43f5e,#8b5cf6,#10b981,#0ea5e9,#84cc16)",
            }}
          />
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-5 py-7 text-sm text-[--muted] sm:flex-row">
            <span>© {new Date().getFullYear()} DCG Académie</span>
            <span>Cours, fiches de révision et quiz de contrôle de gestion — DCG &amp; DSCG</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
