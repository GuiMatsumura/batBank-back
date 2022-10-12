export interface ISignUpUser {
  name: string;
  email: string;
  password: string;
  pictureUrl: string;
  bankNumber: string;
}

export type UserOmitBankNumber = Omit<ISignUpUser, 'bankNumber'>;

export interface ISignInUser {
  email: string;
  password: string;
}

export interface IPutPictureUrl {
  pictureUrl: string;
}

export interface IHelpBody {
  message: string;
  date: string;
  userId: number;
  email: string;
}

export interface IHelpSchema {
  message: string;
  email: string;
}
