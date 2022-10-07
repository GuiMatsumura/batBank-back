import { Router } from 'express';
import { putPictureUrl, getUser } from '../controllers/userController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { putPictureUrlSchema } from '../schemas/userSchema';

const userRouter = Router();

userRouter.use(ensureAuthenticatedMiddleware);
userRouter.put(
  '/profile',
  validateSchemaMiddleware(putPictureUrlSchema),
  putPictureUrl
);
userRouter.get('/profile', getUser);

export default userRouter;
