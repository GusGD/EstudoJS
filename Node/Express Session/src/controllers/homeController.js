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
    //==================================================
    // *** usando flash massage ***
    
    console.log(req.flash('error'), req.flash('info'), req.flash('sucess'));
    //req.flash('info', 'Ola mundoo');
    //req.flash('error', 'deu ruim');
    //req.flash('sucess', 'deu boom');
    //==================================================*/


    //req.session.usuario = {nome: 'Gustavo', logado:true};
    //console.log(req.session.usuario);
    
    res.render('index.ejs');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}
