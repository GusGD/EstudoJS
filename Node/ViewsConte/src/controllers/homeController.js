
exports.paginaInicial = (req, res, next)=>{
    res.render('index.ejs',{
        titulo:'Esté é o tiulo',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}

/* ==========================================================
const HomeModel = require('../models/HomeModel');
HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Um descricaoooo pra testar o teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

===========================================================*/