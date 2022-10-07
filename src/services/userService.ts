import { putPictureUrlRepository } from '../repositories/userRepository';

export async function putPictureUrlService(id: number, pictureUrl: string) {
  await putPictureUrlRepository(id, pictureUrl);
}
