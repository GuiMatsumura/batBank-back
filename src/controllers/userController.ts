import { Request, Response } from 'express';
import { putPictureUrlService } from '../services/userService';

export async function putPictureUrl(req: Request, res: Response) {
  const { user } = res.locals;
  const { pictureUrl }: { pictureUrl: string } = req.body;

  await putPictureUrlService(user.id, pictureUrl);

  res.sendStatus(200);
}

export async function getUser(req: Request, res: Response) {
  const { user } = res.locals;

  res.status(200).send({ name: user.name, bankNumber: user.bankNumber });
}
