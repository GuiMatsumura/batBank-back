import { prisma } from '../database/prismaClient';

export async function getTransactionsById(id: number) {
  return prisma.transactions.findMany({
    where: {
      userId: id,
    },
  });
}
