const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Index')
});

app.get('/Contato', (req, res)=>{
    res.send(`
    <form action = "/contato" method="POST">
        NOME:<input name="nome" type="text">
        <button type="submit">enviar</enviar> 
    `)
})
app.post('/Contato', (req, res)=>{
    res.send('recebi o formulariooo')
});

app.get('/Sobre', (req, res)=>{
    res.send('Sobre')
});

app.get('/Servico', (req, res)=>{
    res.send('Serviço')
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});