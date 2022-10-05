import bcrypt from 'bcrypt';
import { findUserByEmail, insertUser } from '../repositories/authRepository';
import { conflictError } from '../utils/errorUtils';
import { ISignUpUser } from '../types/userType';

export async function createUser(user: ISignUpUser) {
  const existingUser = await findUserByEmail(user);

  if (existingUser) {
    throw conflictError('Usuário já existe!');
  }

  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(user.password.toString(), SALT);

  await insertUser({ ...user, password: hashedPassword });
}

export function generateBankNumber() {
  return Math.floor(Math.random() * 99999) + 10000;
}
