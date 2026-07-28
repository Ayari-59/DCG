import { defineConfig } from "prisma/config";

/**
 * Configuration des commandes Prisma (db push, studio, migrate).
 * Depuis Prisma 7, l'URL de connexion ne figure plus dans schema.prisma :
 * elle est lue ici pour la CLI, et passée au client via un adaptateur
 * (voir lib/db.ts).
 *
 * L'URL est lue sans `env()` : ce dernier lève une erreur quand la variable
 * est absente, ce qui empêcherait `prisma generate` — qui n'en a pas besoin —
 * de s'exécuter, notamment lors d'une installation propre.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
