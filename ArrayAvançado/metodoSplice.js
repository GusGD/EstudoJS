const nomes = ['Gustavo', 'Beatriz', 'Julia', 'Ana', 'José'];

//nomes.splice para sabe quantos elementos eu quero remover 

//nomes.splice(indice, delete, elem1, elem2, elem3 );

//POP - Remove o último elemento do array
//Exibe o elemento removido em array


console.log(nomes);
//const removidos = nomes.splice(3, 2);
//console.log(nomes, removidos)

//SHIFT - Remove o primeiro elemento do array

// const removidos = nomes.splice(0,1);
//console.log(nomes, removidos)

//PUSH 
//nomes.splice(nomes.length, 0, 'Paulo', 'Roberta')
//console.log(nomes)

//UNSHIFT
nomes.splice(0, 0, 'Paulo', 'Roberta')
console.log(nomes)
