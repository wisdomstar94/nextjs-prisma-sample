'use server'

import { prisma } from "../../prisma/client.prisma";
 
export async function createUser(name: string) {
  console.log('[createUser] 이 로그는 서버사이드 터미널에서 표시됩니다.', { name });
  await prisma.user.create({
    data: {
      name,
      datetime: new Date(),
    },
  });
  return true;
}

export async function findUser(options?: {
  id?: number;
  name?: string;
}) {
  console.log('[findUser] 이 로그는 서버사이드 터미널에서 표시됩니다.', options);
  const users = await prisma.user.findMany({
    where: {
      AND: {
        name: typeof options?.name === 'string' ? {
          contains: options?.name,
        } : undefined,
      },
    },
    include: {
      user_other_infos: true,
    },
  });
  return users;
}

export async function updateUser(id: number, name: string) {
  console.log('[updateUser] 이 로그는 서버사이드 터미널에서 표시됩니다.', { id, name, });
  await prisma.user.updateMany({
    where: {
      AND: {
        id: {
          equals: id,
        },
      },
    },
    data: {
      name,
    },
  });
  return true;
}

export async function deleteUser(id: number) {
  console.log('[deleteUser] 이 로그는 서버사이드 터미널에서 표시됩니다.', { id });
  const deleteUserOtherInfos = prisma.userOtherInfo.deleteMany({
    where: {
      user_id: id,
    },
  });
  
  const deleteUser = prisma.user.delete({
    where: {
      id: id,
    },
  })
  
  const transaction = await prisma.$transaction([deleteUserOtherInfos, deleteUser]);
  return true;
}