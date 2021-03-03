/*================================================================================
exports.paginaInicial = (req, res, next)=>{
    console.log('respondendo a requisição');
    res.render('index.ejs');
    console.log(`'paginaInicial' A req.session.nome tem ${req.session.nome}` );
    next();
};
================================================================================*/
const HomeModel = require('../models/HomeModel');
HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Um descricaoooo pra testar o teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));



exports.paginaInicial = (req, res)=>{
    res.render('index.ejs');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}
