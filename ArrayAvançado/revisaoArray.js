const nomes = ['Eduardo', 'Gustavo', 'Beatriz', 'Joana', 'Ana'];

//spread operator
const novo = [...nomes];
/*
novo.pop();
console.log(novo);
console.log('O Array novo tem ' + novo.length + ' Pessoas');

console.log(nomes);
console.log('O Array nomes tem ' + nomes.length + ' Pessoas');

console.log('')
console.log('================================================'); */
/*
//Exibir o nome removido
console.log('')
console.log('a Função POP remove o último índice do array');
console.log('');

const removido = nomes.pop();
console.log(nomes);
console.log(removido + ' ' + 'foi removida do array');

console.log('')
console.log('================================================');
//Exibir o nome removido*/

/*
console.log('')
console.log('a Função SHIFT remove o primeiro índice do array');
console.log('');

console.log('Nomes antes da função shift');
console.log(nomes);
console.log('');

const removido = nomes.shift();
console.log('Nomes depois da função shift');
console.log(nomes);
console.log(removido + ' ' + 'foi removido(a) do array');*/
/*
console.log('A função push adiciona índice no final do array');
nomes.push ("Marcos");
console.log(nomes)

console.log('')
console.log('A função unshift adiciona índice no iniciio do array');
nomes.unshift ('José');
console.log(nomes)
*/

//SLICE

/*
console.log('Slice fatia o array');
console.log('')
console.log('Array sem a função slice')
console.log('')
console.log(nomes);
console.log('')

const novoArray = nomes.slice(0,2);
console.log('Array com a função Slice');
console.log('')
console.log(novoArray);
*/
/*
console.log('Transformando String em array')
console.log('')
const nomeSplit = 'Gustavo, Oliveira, Beatriz, Ana';
console.log(nomeSplit);
const funcSplit = nomeSplit.split(',');
console.log(funcSplit);
*/

console.log('')
console.log('Transformando array em string')

const nomesArray = ['Gustavo', 'Oliveira', 'Beatriz'];
console.log(nomesArray);
console.log('');

const nomeString = nomesArray.join(' ');
console.log(nomeString);