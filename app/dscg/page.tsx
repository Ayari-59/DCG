import type { Metadata } from "next";
import { getProgram } from "@/lib/content";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DSCG UE3 — Management et contrôle de gestion",
};

export default function DscgPage() {
  return <ProgramPage program={getProgram("DSCG")!} />;
}
