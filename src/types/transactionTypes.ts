export interface ITransactions {
  description: string;
  type: string;
  amount: number;
  date: string;
  userId: number;
}

export interface ITransactionInput {
  amount: number;
  description: string;
}

export interface ITransferInput extends ITransactionInput {
  email: string;
}
