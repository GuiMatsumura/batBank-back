import {
  getTransactionsById,
  insertTransaction,
} from '../repositories/balanceRepository';
import { ITransactions } from '../types/transactionTypes';
import { calculateBalance } from '../utils/logicUtils';

export async function getBalanceService(id: number) {
  const transactions = await getTransactionsById(id);
  const balance = calculateBalance(transactions);

  return balance;
}

export async function getTransactionsAndBalance(id: number) {
  const balance = await getBalanceService(id);
  const transactions = await getTransactionsById(id);

  const data = { balance, transactions };

  return data;
}

export async function createTransaction(transaction: ITransactions) {
  return await insertTransaction(transaction);
}
