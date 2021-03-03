const express = require ('express');
const route = express.Router();
const contatoController = require('./src/controllers/contatoController');
const homeController = require('./src/controllers/homeController');


route.get('/', homeController.paginaInicial);

route.get('/Contato', contatoController.paginaInicial);
route.post('/Contato', contatoController.trataPost);

module.exports = route;