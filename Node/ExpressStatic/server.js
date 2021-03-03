const express = require('express');
const app = express();
const route = require('./routes');
const path = require ('path')

//express para tratar o body para dar um objeto do que foi enviado
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('views engine', 'ejs');

app.use(route);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

