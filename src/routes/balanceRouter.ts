import { Router } from 'express';
import { getBalance } from '../controllers/balanceController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';

const balanceRouter = Router();

balanceRouter.use(ensureAuthenticatedMiddleware);
balanceRouter.get('/balance', getBalance);

export default balanceRouter;
