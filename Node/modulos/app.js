/*====================================================
            IMPORTANTO O MÓDULO TODO
====================================================*/

//const mod1 = require('./mod1');
//console.log(mod1.falaNome());

/*====================================================
            IMPORTANDO APENAS A FUNÇÃO
====================================================*/

//const falaNome = require('./mod1').falaNome;
//console.log(falaNome());

/*====================================================
IMPORTANDO O MÓDULO INTEIRO E DEPOIS PEGANDO A FUNÇÃO
====================================================*/

//const mod1 = require('./mod1');
//const falaNome = mod1.falaNome;
//console.log(falaNome());

/*====================================================
IMPORTANDO AS CHAVES DO MÓDULO
====================================================*/

//const {nome, sobrenome, falaNome} = require('./mod1');
//console.log(nome, sobrenome)
//console.log(falaNome());

/*====================================================
IMPORTANDO A CLASSE PESSOA DO MÓDULO
====================================================*/
const path = require ('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
//const p1 = new Pessoa('Gustavo', 'Oliveira', 22);
//console.log(p1);

axios ('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data) )
    .catch(e => console.log(e))