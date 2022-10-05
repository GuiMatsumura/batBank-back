import joi from 'joi';
import { UserOmitBankNumber } from '../types/userType';

export const signUpSchema = joi.object<UserOmitBankNumber>({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
  pictureUrl: joi.string().required(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});
