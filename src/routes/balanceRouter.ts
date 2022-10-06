import { Router } from 'express';
import {
  getBalance,
  getTransactions,
  postTransaction,
} from '../controllers/balanceController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';

const balanceRouter = Router();

balanceRouter.use(ensureAuthenticatedMiddleware);
balanceRouter.get('/balance', getBalance);
balanceRouter.get('/transactions', getTransactions);
balanceRouter.post('/transaction', postTransaction);

export default balanceRouter;
