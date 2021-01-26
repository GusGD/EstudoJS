//Filter - Sempre retorna uma array com a mesma quantidade de elemento ou menos

//retornar numeros maiores que 10
//indice do aray 0  1  2  03  04  5  06  07  08  09  10  11
const numeros = [1, 2, 3, 40, 50, 9, 10, 20, 11, 13, 88, 80];

//função de callback
const numerosFiltrados = numeros.filter(valor => valor >= 10);
console.log(numerosFiltrados);
