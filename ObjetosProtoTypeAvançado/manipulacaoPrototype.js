/*
//Objeto Literal > Object.prototype
//Reaproveitar códigos que estão em outros objetos
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
//mudando a cadeia do objeto B, mas continuamos a cadeia 
const objC = new Object();
objC.chaveC = 'C';
//Object.getPrototypeOf(objA);
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objB);
console.log('pula linha');
console.log(objC);
*/

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this. preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta', 50)

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(100)
c;onsole.log(p1)
console.log(p2)

