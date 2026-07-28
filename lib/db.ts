import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

/**
 * Depuis Prisma 7, le client reçoit sa connexion par un adaptateur plutôt
 * que par l'URL du schéma. On passe par le point d'entrée « pooler » de Neon,
 * indispensable en environnement serverless où chaque requête peut ouvrir
 * sa propre connexion.
 */

/** La base n'est pas indispensable au site : les cours restent statiques. */
export const dbConfigured = Boolean(process.env.DATABASE_URL);

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function creerClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

/**
 * En développement, Next.js recharge les modules à chaque modification :
 * sans ce cache global, chaque rechargement ouvrirait une nouvelle réserve
 * de connexions et Neon finirait par les refuser.
 */
export const prisma: PrismaClient =
  globalForPrisma.prisma ?? (dbConfigured ? creerClient() : (undefined as unknown as PrismaClient));

if (process.env.NODE_ENV !== "production" && dbConfigured) globalForPrisma.prisma = prisma;
