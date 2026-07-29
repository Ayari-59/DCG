import type { Metadata } from "next";
import { getProgramByUe } from "@/lib/content";
import { ProgramPage } from "@/components/ProgramPage";

export const metadata: Metadata = {
  title: "DCG UE13 — Communication professionnelle",
};

export default function Ue13Page() {
  return <ProgramPage program={getProgramByUe("UE13")!} />;
}
