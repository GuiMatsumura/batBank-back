import { prisma } from '../database/prismaClient';
import { IHelpBody } from '../types/userType';

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

export async function insertHelpRepository(helpBody: IHelpBody) {
  return prisma.support.create({
    data: {
      message: helpBody.message,
      date: helpBody.date,
      userId: helpBody.userId,
      email: helpBody.email,
    },
  });
}
