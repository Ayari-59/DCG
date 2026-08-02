import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramByUe } from "@/lib/content";
import { matieresMasquees } from "@/lib/apprenant";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DCG UE13 — Communication professionnelle",
};

export default async function Ue13Page() {
  const masquees = await matieresMasquees();
  const programme = getProgramByUe("UE13");
  if (!programme || masquees.includes("UE13")) notFound();

  return <ProgramPage program={programme} />;
}
