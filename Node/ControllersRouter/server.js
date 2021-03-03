const express = require('express');
const app = express();
const route = require('./routes');


//express para tratar o body para dar um objeto do que foi enviado
app.use(express.urlencoded({
    extended:true
}));

app.use(route);





app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

