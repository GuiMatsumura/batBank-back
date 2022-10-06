import { getTransactionsById } from '../repositories/balanceRepository';

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
