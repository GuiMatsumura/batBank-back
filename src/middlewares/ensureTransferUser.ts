import { NextFunction, Request, Response } from 'express';
import { notFoundError, unauthorizedError } from '../utils/errorUtils';
import { findUserByEmail } from '../repositories/authRepository';

export async function ensureTransferUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (!user) throw notFoundError('User not found');

  next();
}
