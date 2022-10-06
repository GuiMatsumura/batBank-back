import { Request, Response } from 'express';
import { findUserByEmail } from '../repositories/authRepository';
import {
  getBalanceService,
  getTransactionsAndBalance,
  createTransaction,
} from '../services/balanceService';
import { createTimestamp } from '../utils/logicUtils';

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
  const date = createTimestamp();

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

export async function postTransfer(req: Request, res: Response) {
  const { user } = res.locals;
  const {
    email,
    amount,
    description,
    type,
  }: { email: string; amount: number; description: string; type: string } =
    req.body;
  const date = createTimestamp();

  const transaction = {
    description,
    type,
    amount,
    date,
    userId: user.id,
  };

  await createTransaction(transaction);

  const receicerUser = await findUserByEmail(email);

  const receicerTransaction = {
    description,
    type: '+',
    amount,
    date,
    userId: receicerUser.id,
  };

  await createTransaction(receicerTransaction);

  res.sendStatus(201);
}
