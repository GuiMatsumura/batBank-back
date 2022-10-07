import { Router } from 'express';
import authRouter from './authRouter';
import balanceRouter from './balanceRouter';
import userRouter from './userRouter';

const router = Router();

router.use(authRouter);
router.use(balanceRouter);
router.use(userRouter);

export default router;
