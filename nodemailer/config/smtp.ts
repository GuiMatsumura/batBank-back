import dotenv from 'dotenv';

dotenv.config();

export const config = {
  host: 'smtp-mail.outlook.com',
  port: 587,
  user: process.env.EMAIL,
  pass: process.env.EMAIL_PASS,
};
