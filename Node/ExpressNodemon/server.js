const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Indeex')
});

app.get('/Contato', (req, res)=>{
    res.send(`
    <form action = "/contato" method="POST">
        NOME:<input name="nome" type="text">
        <button type="submit">enviar</enviar> 
    `)
})


app.get('/Sobre', (req, res)=>{
    res.send('Sobreee')
});

app.get('/Servico', (req, res)=>{
    res.send('Serviço')
});

app.post('/Contato', (req, res)=>{
    res.send('recebi o formulariooo')
});


app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});