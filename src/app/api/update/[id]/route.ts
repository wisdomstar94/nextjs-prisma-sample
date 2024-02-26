import { prisma } from "../../../../../prisma/client.prisma";

export async function PUT(request: Request, { params }: { params: { id: string }}) {
  const id = params.id;
  const id_num = Number(id);
  if (isNaN(id_num)) {
    return new Response(JSON.stringify({ msg: `id 가 숫자형이 아닙니다.` }), {
      status: 400,
    });
  }

  const body = await request.json().then(res => res).catch(_ => undefined);
  if (body === undefined) {
    return new Response(JSON.stringify({ msg: `요청 데이터가 없습니다.` }), {
      status: 400,
    });
  }

  const name = body.name;
  if (typeof name !== 'string') {
    return new Response(JSON.stringify({ msg: `name 이 문자열이 아닙니다.` }), {
      status: 400,
    });
  }

  const users = await prisma.user.updateMany({
    where: {
      AND: {
        id: {
          equals: id_num,
        },
      },
    },
    data: {
      name,
    },
  });
  
  return Response.json({
    timestamp: Date.now(),
    msg: '업데이트 성공'
  });
}