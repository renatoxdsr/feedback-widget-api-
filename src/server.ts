import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import express from "express";
import { routes } from './routes';

//GET , POST, PUT , PATCH, DELETE
//GET - Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//Patch = atualizar um informação única de uma entidade
//DELETE = deletar informações
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running')
});

//SQLITE uses online
//Prisma