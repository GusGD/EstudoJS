const express = require('express');
const app = express();



//express para tratar o body para dar um objeto do que foi enviado
app.use(express.urlencoded({
    extended:true
}))
app.get('/', (req, res)=>{
    res.send('Indeex')
});

app.get('/Contato', (req, res)=>{
    res.send(`
    <form action = "/contato" method="POST">
        NOME:<input name="txtNome" type="text">
        <button type="submit">enviar</enviar> 
    `)
});

app.get('/teste/:idUsario?/:parametro?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebook);
});

app.get('/Sobre', (req, res)=>{
    res.send('Sobreee')
});

app.get('/Servico', (req, res)=>{
    res.send('Serviço')
});

app.post('/Contato', (req, res)=>{
    console.log(req.body);
    res.send(`Você enviou: ${req.body.txtNome}`)
});


app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});