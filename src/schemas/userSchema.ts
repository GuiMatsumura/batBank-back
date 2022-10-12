import joi from 'joi';
import { IPutPictureUrl, IHelpSchema } from '../types/userType';

export const putPictureUrlSchema = joi.object<IPutPictureUrl>({
  pictureUrl: joi.string().required(),
});

export const insertHelpSchema = joi.object<IHelpSchema>({
  message: joi.string().required(),
  email: joi.string().email().required(),
});
