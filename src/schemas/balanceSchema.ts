import joi from 'joi';
import { ITransactionInput } from '../types/transactionTypes';

export const transactionSchema = joi.object<ITransactionInput>({
  amount: joi.number().required(),
  description: joi.string(),
});
