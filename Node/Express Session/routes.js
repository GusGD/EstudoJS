const express = require ('express');
const route = express.Router();
const contatoController = require('./src/controllers/contatoController');
const homeController = require('./src/controllers/homeController');

//Criando um Middleware antes da resposta do homeController
/* =====================================================================================

function myMiddleware(req, res, next){
    req.session = {nome:'Gustavo'}
    console.log();
    console.log('Passei no middleware');
    console.log();
    next();
}
route.get('/', myMiddleware, homeController.paginaInicial, function(req, res, next){
    console.log();
    console.log('Ainda estou aqui');
    console.log('fuui');
});

route.get('/Contato', contatoController.paginaInicial);
route.post('/Contato', contatoController.trataPost);

module.exports = route;

===========================================================================================*/

/*===========================================================================================
Outra forma de trabalhar com middlewares
===========================================================================================*/

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/Contato', contatoController.paginaInicial);
route.post('/Contato', contatoController.trataPost);

module.exports = route;