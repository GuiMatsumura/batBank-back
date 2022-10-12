import nodemailer from 'nodemailer';
import { config } from './config/smtp';

const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: false,
  auth: {
    user: config.user,
    pass: config.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendMail(email, date, message) {
  await transporter.sendMail({
    from: `Bat Bank <${config.user}>`,
    to: email,
    subject: 'Ajuda Bat Bank',
    text: `Olá, recebemos a sua mensagem e retornaremos assim que possível. Aqui esta a mensagem que foi enviada: ${message}`,
  });
}
