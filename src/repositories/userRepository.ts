import { prisma } from '../database/prismaClient';

export async function putPictureUrlRepository(id: number, pictureUrl: string) {
  return prisma.users.update({
    where: {
      id,
    },
    data: {
      pictureUrl,
    },
  });
}
