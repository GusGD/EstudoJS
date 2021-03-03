module.exports = (req, res, next) => {
    if(req.body.cliente){
        //Intercptei e alterei o valor
        req.body.cliente = req.body.cliente.replace('Oliveira', 'Intercptei a sua mensagem e alterei');
        console.log();
        console.log(`vi que voce postou ${req.body.cliente}`);
        console.log();
    }
    next();
}