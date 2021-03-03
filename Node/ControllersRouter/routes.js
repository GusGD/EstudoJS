const express = require ('express');
const route = express.Router();
const contatoController = require('./controllers/contatoController');
const homeController = require('./controllers/homeController');


route.get('/', homeController.paginaInicial);

route.get('/Contato', contatoController.paginaInicial);
route.post('/Contato', contatoController.trataPost);

module.exports = route;