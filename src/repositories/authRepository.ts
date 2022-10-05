import { prisma } from '../database/prismaClient';
import { ISignUpUser } from '../types/userType';

export async function insertUser(user: ISignUpUser) {
  return prisma.users.create({
    data: user,
  });
}

export async function findUserByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}
