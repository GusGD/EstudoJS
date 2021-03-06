require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('prontoo');
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');



const route = require('./routes');
const path = require ('path');
const myMiddleware = require('./src/middleware/middleware');

//express para tratar o body para dar um objeto do que foi enviado
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'DUSAHDUASHDU ADHUASHDU dsudhasudhsau ASJIaiasd ()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly:true
    }

});

app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('views engine', 'ejs');
app.use(myMiddleware);
app.use(route);
app.on('pronto', ()=>{
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
    
});


