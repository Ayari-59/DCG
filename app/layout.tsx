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
    "Cours, vidéos, fiches de révision, applications corrigées, flashcards et quiz pour réussir le contrôle de gestion au DCG (UE11) et au DSCG (UE3).",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="no-print sticky top-0 z-30 border-b border-[--line] bg-[--paper]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-[13px] font-bold text-white shadow-sm shadow-indigo-600/25">
                CG
              </span>
              <span className="font-serif text-lg font-bold tracking-tight text-[--ink]">
                DCG Académie
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium text-[--muted]">
              <Link
                href="/dcg"
                className="rounded-lg px-3 py-2 transition hover:bg-white hover:text-[--ink] hover:shadow-sm"
              >
                DCG · UE11
              </Link>
              <Link
                href="/dscg"
                className="rounded-lg px-3 py-2 transition hover:bg-white hover:text-[--ink] hover:shadow-sm"
              >
                DSCG · UE3
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="no-print border-t border-[--line] bg-white">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-5 py-7 text-sm text-[--muted] sm:flex-row">
            <span>© {new Date().getFullYear()} DCG Académie</span>
            <span>Cours, fiches, applications et quiz de contrôle de gestion — DCG &amp; DSCG</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
