//O Objeto é formado por um par, chave, valor
const pessoa = {
    nome:'Gustavo', //NOME é uma chave, que tem o valor Gustavo
    sobrenome:'Oliveira'
}

console.log(pessoa.nome + ' '+ pessoa.sobrenome);
//A anotação de cochete é mais indicado para usar valor dinamico
//Por exemplo quando vem de um BD 
console.log(pessoa['nome'] + ' ' + pessoa['sobrenome']);

console.log('');
console.log('Uso de cochete');
console.log('');

const chave = 'nome';
const valor = 'sobrenome';

console.log(pessoa[chave] + ' ' + pessoa[valor]);

//Construtor de objeto
const pessoa1 = new Object();
pessoa1.nome = 'Gus';
pessoa1.sobrenome = 'Oliveira';
pessoa1.idade = 22;
console.log(pessoa1['nome'] + ' ' + pessoa1['sobrenome']);

//Métodos dentro de objeto que executa uma função

pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome. `);
};

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

pessoa1.falarNome();

console.log('sua data de nascimento é ' + pessoa1.getDataNascimento());


//Deletar a chave nome do objeto
//delete pessoa1.nome;
//console.log(pessoa1);
