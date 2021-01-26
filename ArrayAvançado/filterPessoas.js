//Retornar pessoas que tem 5 letras ou mais
//Retornar as pessoas com mais de 40 anos
//Retornar as pessoas que o nome termina com a
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
//FILTRANDO NOMES DAS PESSOAS COM MAIS DE 5 LETRAS
const filterNome = pessoas.filter(obj => obj.nome.length > 5);
console.log(filterNome);

//FILTRANDO NOMES DAS PESSOAS MAIORES QUE 22 ANOS
const filterIdade = pessoas.filter(valor => valor.idade > 22);
console.log(filterIdade);

//FILTRANDO NOMES DAS PESSOAS QUE A ÚLTIMA LETRA DO NOME TERMINA EM A
//Usei o LowerCase para certificar que a última letra é Minúscula
const filterUltimaLetra = pessoas.filter(letra => letra.nome.toLocaleLowerCase ().endsWith('a') )
console.log(filterUltimaLetra);