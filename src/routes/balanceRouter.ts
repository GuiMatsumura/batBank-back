import { Router } from 'express';
import {
  getBalance,
  getTransactions,
  postTransaction,
  postTransfer,
} from '../controllers/balanceController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';
import { ensureTransferUser } from '../middlewares/ensureTransferUser';

const balanceRouter = Router();

balanceRouter.use(ensureAuthenticatedMiddleware);
balanceRouter.get('/balance', getBalance);
balanceRouter.get('/transactions', getTransactions);
balanceRouter.post('/transaction', postTransaction);
balanceRouter.post('/transfer', ensureTransferUser, postTransfer);

export default balanceRouter;
