//prototypes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}
const pessoa1 = new Pessoa('Gustavo', 'Oliveira ');
const pessoa2 = new Pessoa('Oliveira', 'Gustavo');

console.dir(pessoa1);
//console.dir(data)