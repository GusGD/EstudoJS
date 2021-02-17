const path = require('path');
const caminhoArquivo = path.resolve(__dirname, './json', 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

//const pessoas = [
//    { nome: 'Gustavo', sobrenome:'Oliveira', idade:22},
//    { nome: 'João', sobrenome:'Oliveira', idade:42},
//    { nome: 'Júlia', sobrenome:'Gustavo', idade:12},
//    { nome: 'Gus', sobrenome:'Gus', idade:32},
//    { nome: 'Gustavo', sobrenome:'Oli', idade:52},
//    { nome: 'Gu', sobrenome:'Oli', idade:52}
//];
//const json = JSON.stringify(pessoas, '', 2);
//escreve(caminhoArquivo, json)

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados (dados){
    dados = JSON.parse(dados);
    dados.forEach(element => console.log(element));
}
lerArquivo(caminhoArquivo)