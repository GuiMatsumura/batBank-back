import { prisma } from '../database/prismaClient';
import { ITransactions } from '../types/transactionTypes';

export async function getTransactionsById(id: number) {
  return prisma.transactions.findMany({
    where: {
      userId: id,
    },
  });
}

export async function insertTransaction(transaction: ITransactions) {
  return prisma.transactions.create({
    data: {
      description: transaction.description,
      type: transaction.type,
      amount: transaction.amount,
      date: transaction.date,
      userId: transaction.userId,
    },
  });
}
