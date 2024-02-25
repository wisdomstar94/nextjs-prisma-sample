import { Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma/client.prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const value = `1 OR \`tt\`.\`id\` > 0`;

  // 템플릿 변수에 escape 처리가 되어져서 query 가 작동하는 것을 확인.
  const reuslt = await prisma.$queryRaw(Prisma.sql`
    SELECT

    \`tt\`.*

    FROM \`test_db\`.\`test_table\` as \`tt\` 

    WHERE \`tt\`.\`id\` = ${value}
  `);

  console.log('@reuslt', reuslt);

  return Response.json({
    timestamp: Date.now(),
    reuslt,
  });
}