import { Request, Response } from 'express';
import {
  getBalanceService,
  getTransactionsAndBalance,
  createTransaction,
} from '../services/balanceService';
import dayjs from 'dayjs';

export async function getBalance(req: Request, res: Response) {
  const { user } = res.locals;
  const balance = await getBalanceService(user.id);

  res.status(200).send({ balance });
}

export async function getTransactions(req: Request, res: Response) {
  const { user } = res.locals;

  const data = await getTransactionsAndBalance(user.id);

  res.status(200).send(data);
}

export async function postTransaction(req: Request, res: Response) {
  const { user } = res.locals;
  const {
    amount,
    description,
    type,
  }: { amount: number; description: string; type: string } = req.body;
  const date = dayjs().format('HH:mm:ss DD/MM/YYYY');

  const transaction = {
    description,
    type,
    amount,
    date,
    userId: user.id,
  };

  await createTransaction(transaction);

  res.sendStatus(201);
}
