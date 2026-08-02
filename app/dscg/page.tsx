import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgram } from "@/lib/content";
import { matieresMasquees } from "@/lib/apprenant";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DSCG UE3 — Management et contrôle de gestion",
};

export default async function DscgPage() {
  const masquees = await matieresMasquees();
  if (masquees.includes("UE3")) notFound();
  return <ProgramPage program={getProgram("DSCG")!} />;
}
