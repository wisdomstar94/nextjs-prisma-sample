import { prisma } from "../../../../prisma/client.prisma";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const body = await request.json();

  console.log('@req.body', body);

  const newData = await prisma.testTable.create({
    data: {
      name: `${Date.now()}_name`,
      datetime: new Date(),
    },
  });
  console.log('@2');
  await prisma.$queryRaw`
    do sleep(20);
  `;

  return Response.json({
    timestamp: Date.now(),
  });
}