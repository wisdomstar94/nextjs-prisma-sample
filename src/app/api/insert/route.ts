import { prisma } from "../../../../prisma/client.prisma";

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  const newData = await prisma.user.create({
    data: {
      name: `${Date.now()}_name`,
      datetime: new Date(),
    },
  });
  // console.log('@1');
  // await prisma.$queryRaw`
  //   do sleep(20);
  // `;

  return Response.json({
    timestamp: Date.now(),
  });
}