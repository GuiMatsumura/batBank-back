import { Router } from 'express';
import {
  getBalance,
  getTransactions,
  postTransaction,
  postTransfer,
} from '../controllers/balanceController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';
import { ensureTransferUser } from '../middlewares/ensureTransferUser';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { transactionSchema } from '../schemas/balanceSchema';

const balanceRouter = Router();

balanceRouter.use(ensureAuthenticatedMiddleware);
balanceRouter.get('/balance', getBalance);
balanceRouter.get('/transactions', getTransactions);
balanceRouter.post(
  '/transaction',
  validateSchemaMiddleware(transactionSchema),
  postTransaction
);
balanceRouter.post('/transfer', ensureTransferUser, postTransfer);

export default balanceRouter;
