import { prisma } from './prisma';
import express from "express";

const test = 1;

const app = express();

//GET , POST, PUT , PATCH, DELETE
//GET - Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//Patch = atualizar um informação única de uma entidade
//DELETE = deletar informações
app.use(express.json());

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body
    
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    return res.status(201).json({data: feedback})
});

app.listen(3333, () => {
    console.log('HTTP server running')
});

//SQLITE uses online
//Prisma