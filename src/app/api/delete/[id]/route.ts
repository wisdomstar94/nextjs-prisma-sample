import { prisma } from "../../../../../prisma/client.prisma";

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  const id = params.id;
  const id_num = Number(id);
  if (isNaN(id_num)) {
    return new Response(JSON.stringify({ msg: `id 가 숫자형이 아닙니다.` }), {
      status: 400,
    });
  }

  const deleteUserOtherInfos = prisma.userOtherInfo.deleteMany({
    where: {
      user_id: id_num,
    },
  });
  
  const deleteUser = prisma.user.delete({
    where: {
      id: id_num,
    },
  })
  
  const transaction = await prisma.$transaction([deleteUserOtherInfos, deleteUser]);

  console.log('@transaction', transaction);

  return Response.json({
    timestamp: Date.now(),
    msg: '삭제 성공'
  });
}