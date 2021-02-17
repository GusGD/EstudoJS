const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, './json', 'teste.json');

const pessoas = [
    {
        nome: 'Gustavo', 
        sobrenome:'Oliveira',
        idade:22
    },
    {
        nome: 'Oliveira', 
        sobrenome:'Oliveira',
        idade:42
    },
    {
        nome: 'Gustavo', 
        sobrenome:'Gustavo',
        idade:12
    },
    {
        nome: 'Gus', 
        sobrenome:'Gus',
        idade:32
    },
    {
        nome: 'Gustavo', 
        sobrenome:'Oli',
        idade:52
    }
];
const json = JSON.stringify(pessoas, '', 2);
fs.writeFile(caminhoArquivo, json, {flag: 'w'});