import { Router } from 'express';
import { signUp } from '../controllers/authController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { signUpSchema } from '../schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', validateSchemaMiddleware(signUpSchema), signUp);

export default authRouter;
