import { prisma } from "../../../../prisma/client.prisma";

export async function GET(request: Request) {
  const users = await prisma.user.findMany({
    where: {
      AND: {
        name: {
          equals: '홍길동',
        },
      },
    },
    include: {
      user_other_infos: true,
    },
  });
  
  return Response.json({
    timestamp: Date.now(),
    users,
  });
}