import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramByUe } from "@/lib/content";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DCG UE13 — Communication professionnelle",
};

export default function Ue13Page() {
  /*
   * L'UE13 n'est pas publiée pour l'instant (voir UE_PUBLIEES dans
   * lib/content). La page est conservée telle quelle : elle se contente
   * de renvoyer une 404 tant que l'unité est retirée, et redevient
   * fonctionnelle dès qu'on la republie, sans rien à réécrire ici.
   */
  const programme = getProgramByUe("UE13");
  if (!programme) notFound();

  return <ProgramPage program={programme} />;
}
