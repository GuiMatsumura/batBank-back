import dayjs from 'dayjs';

export function createTimestamp() {
  return dayjs().format('HH:mm:ss DD/MM/YYYY');
}

// type: any is a problem and i fix this soon
export function calculateBalance(transactions: any) {
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
