import { Router } from 'express';
import { getBalance, getTransactions } from '../controllers/balanceController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';

const balanceRouter = Router();

balanceRouter.use(ensureAuthenticatedMiddleware);
balanceRouter.get('/balance', getBalance);
balanceRouter.get('/transactions', getTransactions);

export default balanceRouter;
