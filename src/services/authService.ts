import bcrypt from 'bcrypt';
import {
  findUserByEmail,
  insertUser,
  findById,
} from '../repositories/authRepository';
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from '../utils/errorUtils';
import { ISignUpUser, ISignInUser } from '../types/userType';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function createUser(user: ISignUpUser) {
  const existingUser = await findUserByEmail(user.email);

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

export async function login(login: ISignInUser) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function getUserOrFail(login: ISignInUser) {
  const user = await findUserByEmail(login.email);
  if (!user) throw unauthorizedError('Invalid credentials');

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError('Invalid credentials');

  return user;
}

export async function findUserById(id: number) {
  const user = await findById(id);

  if (!user) throw notFoundError('User not found');

  return user;
}
