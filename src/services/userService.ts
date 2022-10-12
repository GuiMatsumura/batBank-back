import {
  putPictureUrlRepository,
  insertHelpRepository,
} from '../repositories/userRepository';
import { IHelpBody } from '../types/userType';

export async function putPictureUrlService(id: number, pictureUrl: string) {
  await putPictureUrlRepository(id, pictureUrl);
}

export async function insertHelp(helpBody: IHelpBody) {
  await insertHelpRepository(helpBody);
}
