import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Objectif-DCG.fr",
    short_name: "Objectif-DCG",
    description:
      "Cours, fiches de révision, flashcards et quiz de contrôle de gestion — DCG UE11 et DSCG UE3.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f8f6",
    theme_color: "#16325c",
    orientation: "portrait-primary",
    categories: ["education"],
    lang: "fr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
