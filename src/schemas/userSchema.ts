import joi from 'joi';
import { IPutPictureUrl } from '../types/userType';

export const putPictureUrlSchema = joi.object<IPutPictureUrl>({
  pictureUrl: joi.string().required(),
});
