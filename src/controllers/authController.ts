import { Request, Response } from 'express';
import { createUser, generateBankNumber } from '../services/authService';
import { ISignUpUser } from '../types/userType';

export async function signUp(req: Request, res: Response) {
  const { name, email, password, pictureUrl } = req.body;
  const user: ISignUpUser = {
    name,
    email,
    password,
    pictureUrl,
    bankNumber: generateBankNumber(),
  };

  await createUser(user);

  res.sendStatus(201);
}
