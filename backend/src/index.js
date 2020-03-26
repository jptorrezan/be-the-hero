/**
*************************************************************
*               Métodos HTTP                                *
*   GET:    Requisitar informações do backend               *
*   POST:   Criar informações no backend                    *
*   PUT:    Alterar informações do backend                  *
*   DELETE: Deletar informações do backend                  *
*************************************************************
*              Tipos de parametro                           *
*   Query Params:  Parametros nomeados enviados na rota     *       
*                   após o simbolo de "?". Serve para       *
*                   (Filtros, paginação).                   *
*   Route Params:  Parametro utilizados para identificar    *
*                   recursos. ":"                           *
*   Request Body:   Corpo da requisição, utilizado para     *
*                       criar ou alterar recursos.          *
*
**/

const express = require('express');
const routes = require('./routes');

const cors = require('cors');

const app = express();
app.use(cors());        //para segurança, colcoar origens confiáveis, onde estarão os frontends (http://meusite.com)
app.use(express.json());      //comando para a API saber q a troca de mensagens é feita com JSON
app.use(routes);

app.listen(3333); 