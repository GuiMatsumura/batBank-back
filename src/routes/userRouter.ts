import { Router } from 'express';
import {
  putPictureUrl,
  getUser,
  postHelp,
} from '../controllers/userController';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { putPictureUrlSchema, insertHelpSchema } from '../schemas/userSchema';

const userRouter = Router();

userRouter.use(ensureAuthenticatedMiddleware);
userRouter.put(
  '/profile',
  validateSchemaMiddleware(putPictureUrlSchema),
  putPictureUrl
);
userRouter.get('/profile', getUser);
userRouter.post('/help', validateSchemaMiddleware(insertHelpSchema), postHelp);

export default userRouter;
