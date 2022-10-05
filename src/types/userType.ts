export interface ISignUpUser {
  name: String;
  email: String;
  password: String;
  pictureUrl: String;
  bankNumber: Number;
}

export type UserOmitBankNumber = Omit<ISignUpUser, 'bankNumber'>;
