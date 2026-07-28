import type { Metadata } from "next";
import { getProgram } from "@/lib/content";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DCG UE11 — Contrôle de gestion",
};

export default function DcgPage() {
  return <ProgramPage program={getProgram("DCG")!} />;
}
