/*================================================================================
exports.paginaInicial = (req, res, next)=>{
    console.log('respondendo a requisição');
    res.render('index.ejs');
    console.log(`'paginaInicial' A req.session.nome tem ${req.session.nome}` );
    next();
};
================================================================================*/

exports.paginaInicial = (req, res)=>{
    res.render('index.ejs');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}
