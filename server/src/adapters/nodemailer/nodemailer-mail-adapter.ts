import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '2892526e7dd65e',
    pass: 'a8010ff41256e7',
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
     await transport.sendMail({
       from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Fernandes <gabif.johann@gmail.com>',
      subject,
      html: body,
    });
  }
}