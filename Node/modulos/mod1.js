/*====================================================
const nome = 'Gustavo';
const sobrenome = 'Oliveira';

const falaNome = () => 'O nome falado é: '+ 
nome + ' ' + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
====================================================*/


/*====================================================
MÓDULOS COM CLASSE - EXPORTANDO CLASSES
====================================================*/
class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

exports.Pessoa = Pessoa;