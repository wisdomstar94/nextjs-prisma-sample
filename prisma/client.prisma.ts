import { PrismaClient } from "@prisma/client";

// PrismaClient 인스턴스는 한 번만 생성되어야 하므로 global 객체를 활용하여 객체를 한 번만 생성 후 생성된 객체를 가져오도록 함.
const globalWithPrisma = global as typeof globalThis & {
  prisma: PrismaClient;
};

if (globalWithPrisma.prisma === undefined) {
  // BigInt 자료형에 대한 toJSON 이 구현되어 있지 않으므로 아래와 같이 직접 설정.
  // 이 방법은 MDN 문서에서 제안하고 있는 방법 중 하나.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
  (BigInt.prototype as any).toJSON = function () {
    return Number(this.toString());
  };
  globalWithPrisma.prisma = new PrismaClient();
}

export const prisma = globalWithPrisma.prisma;