import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90e67a1aad8e0b",
      pass: "00387772f0f711"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body
    
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Renato Xavier <renatoxavier.ds@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111 ">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({data: feedback})
});
