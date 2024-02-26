import { prisma } from "../../../../../prisma/client.prisma";

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  const id = params.id;
  const id_num = Number(id);
  if (isNaN(id_num)) {
    return new Response(JSON.stringify({ msg: `id 가 숫자형이 아닙니다.` }), {
      status: 400,
    });
  }

  await prisma.user.deleteMany({
    where: {
      AND: {
        id: {
          equals: id_num,
        },
      },
    },
  });
  
  return Response.json({
    timestamp: Date.now(),
    msg: '삭제 성공'
  });
}