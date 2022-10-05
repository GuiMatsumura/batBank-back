import { Router } from 'express';
import authRouter from './authRouter';
import balanceRouter from './balanceRouter';

const router = Router();

router.use(authRouter);
router.use(balanceRouter);

export default router;
