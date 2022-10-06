import { getTransactionsById } from '../repositories/balanceRepository';

export async function getBalanceService(id: number) {
  const transactions = await getTransactionsById(id);
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
