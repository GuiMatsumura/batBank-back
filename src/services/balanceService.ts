import {
  getTransactionsById,
  insertTransaction,
} from '../repositories/balanceRepository';
import { ITransactions } from '../types/transactionTypes';

export async function getBalanceService(id: number) {
  const transactions = await getTransactionsById(id);
  const balance = calculateBalance(transactions);

  return balance;
}

// type: any is a problem and i fix this soon
async function calculateBalance(transactions: any) {
  let balance = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === '+') {
      balance += transactions[i].amount;
    } else {
      balance -= transactions[i].amount;
    }
  }
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
