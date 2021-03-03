exports.paginaInicial = (req, res)=>{
    res.send(`
    <form action = "/contato" method="POST">
        NOME:<input name="txtNome" type="text">
        <button type="submit">enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('rota post enviado');
}

