import { prisma } from '../database/prismaClient';
import { ISignUpUser } from '../types/userType';

export async function insertUser(user: ISignUpUser) {
  return prisma.users.create({
    data: user,
  });
}

export async function findUserByEmail(user: ISignUpUser) {
  return prisma.users.findUnique({
    where: {
      email: user.email.toString(),
    },
  });
}
