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
