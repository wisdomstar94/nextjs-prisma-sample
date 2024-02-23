import { PrismaClient } from "@prisma/client";

// PrismaClient 인스턴스는 한 번만 생성되어야 하므로 global 객체를 이용하여 한 번만 생성 후 생성된 객체를 가져오도록 함.
const globalWithPrisma = global as typeof globalThis & {
  prisma: PrismaClient;
};

if (globalWithPrisma.prisma === undefined) {
  globalWithPrisma.prisma = new PrismaClient();
}

export const prisma = globalWithPrisma.prisma;