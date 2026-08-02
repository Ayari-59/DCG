import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgram } from "@/lib/content";
import { matieresMasquees } from "@/lib/apprenant";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DCG UE11 — Contrôle de gestion",
};

export default async function DcgPage() {
  const masquees = await matieresMasquees();
  if (masquees.includes("UE11")) notFound();
  return <ProgramPage program={getProgram("DCG")!} />;
}
