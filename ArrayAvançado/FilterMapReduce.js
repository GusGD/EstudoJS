const numeros = [1, 2, 3, 40, 50, 9, 10, 20, 11, 13, 88, 80];

const numerosPares1 = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor;
});
console.log(numerosPares1);

console.log("");
console.log("");
//CONVERTENDO PARA ARROW FUNCTIONS

const numerosPares = numeros
    .filter(valor =>  valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);
