import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90e67a1aad8e0b",
      pass: "00387772f0f711"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Renato Xavier <renatoxavier.ds@gmail.com>',
        subject,
        html: body
    });
   };
}