import { Request, Response } from 'express';
import { createUser, generateBankNumber, login } from '../services/authService';
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

export async function signIn(req: Request, res: Response) {
  const user = req.body;
  const token = await login(user);

  res.status(200).send(token);
}
