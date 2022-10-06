import joi from 'joi';
import { ITransactionInput, ITransferInput } from '../types/transactionTypes';

export const transactionSchema = joi.object<ITransactionInput>({
  amount: joi.number().required(),
  description: joi.string(),
});

export const transferSchema = joi.object<ITransferInput>({
  email: joi.string().email().required(),
  amount: joi.number().required(),
  description: joi.string(),
});
