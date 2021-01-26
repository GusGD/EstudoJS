//retornar a pessoa mais velha

const pessoas = [
    {nome:'Gustavo', idade:22},
    {nome:'Julia', idade:15},
    {nome:'Beatriz', idade:21},
    {nome:'Otavio', idade:25},
    {nome:'Paulo', idade:40},
    {nome:'José', idade:53},
    {nome:'Rosana', idade:19},
    {nome:'Wallace', idade:18},
    {nome:'Sofia', idade:22},
];
const maisVelha = pessoas.reduce (function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);