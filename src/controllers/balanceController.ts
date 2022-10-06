import { Request, Response } from 'express';
import { getBalanceService } from '../services/balanceService';

export async function getBalance(req: Request, res: Response) {
  const { user } = res.locals;
  const balance = await getBalanceService(user.id);

  res.status(200).send({ balance });
}
