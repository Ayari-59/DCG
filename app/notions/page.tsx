import type { Metadata } from "next";
import { programs } from "@/lib/content";
import { fiches as fichesUE11 } from "@/lib/content/notions/dcg-ue11.generated";
import { BanqueNotions } from "./BanqueNotions";

export const metadata: Metadata = {
  title: "Banque de notions",
  description:
    "Toutes les définitions et formules clés du contrôle de gestion, classées par chapitre et catégorie. DCG UE11.",
};

export default function NotionsPage() {
  const prog = programs.find((p) => p.ue === "UE11");
  const chapitres = (prog?.chapters ?? []).map((c) => ({
    num: String(c.number).padStart(2, "0"),
    titre: c.title,
  }));

  return (
    <BanqueNotions
      fiches={fichesUE11}
      chapitres={chapitres}
      ue="UE 11"
      diplome="DCG"
      matiere="Contrôle de gestion"
    />
  );
}
