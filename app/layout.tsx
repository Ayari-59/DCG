import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DCG Académie — Réussir le contrôle de gestion",
    template: "%s · DCG Académie",
  },
  description:
    "Cours, vidéos, flashcards et quiz pour réussir le contrôle de gestion au DCG (UE11) et au DSCG (UE3).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                CG
              </span>
              DCG Académie
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium text-slate-600">
              <Link href="/dcg" className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
                DCG · UE11
              </Link>
              <Link href="/dscg" className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
                DSCG · UE3
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row">
            <span>© {new Date().getFullYear()} DCG Académie</span>
            <span>Cours, flashcards et quiz de contrôle de gestion — DCG &amp; DSCG</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
