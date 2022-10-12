import { Request, Response } from 'express';
import { putPictureUrlService, insertHelp } from '../services/userService';
import { createTimestamp } from '../utils/logicUtils';

export async function putPictureUrl(req: Request, res: Response) {
  const { user } = res.locals;
  const { pictureUrl }: { pictureUrl: string } = req.body;

  await putPictureUrlService(user.id, pictureUrl);

  res.sendStatus(200);
}

export async function getUser(req: Request, res: Response) {
  const { user } = res.locals;

  res.status(200).send({
    name: user.name,
    bankNumber: user.bankNumber,
    pictureUrl: user.pictureUrl,
  });
}

export async function postHelp(req: Request, res: Response) {
  const { user } = res.locals;
  const { message, email }: { message: string; email: string } = req.body;
  const date = createTimestamp();

  const helpBody = {
    message,
    date,
    userId: user.id,
    email,
  };

  await insertHelp(helpBody);

  res.sendStatus(200);
}
