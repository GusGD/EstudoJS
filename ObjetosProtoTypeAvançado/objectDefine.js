//defineProperty e defineProperties

//DEFINE PROPERTY
function Produto (nome, preco, estoque){
    
    this.nome = nome;
    this.preco = preco;

    //Definindo propriedade
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave ou não no for in ou object keys
        value: function(){
            return estoque
        }, // valor da chave
        writable: false, //pode ou não alterar o valor
        configurable: false //se pode ou não apagar ou reconfigurar a chave
    });
}

const p1 = new Produto('camiseta', 100, 90);
console.log(p1.estoque());






//DEFINE PROPERTIES
function Produtos (nomes, valor, estoques){
    
    this.nomes = nomes;
    this.valor = valor;

    Object.defineProperties(this, {
        nomes:{
            enumerable: true, //mostra a chave ou não no for in ou object keys
            value: nomes, // valor da chave
            writable: true, //pode ou não alterar o valor
            configurable: true //se pode ou não apagar ou reconfigurar a chave
        },
        valor:{
            enumerable: true, //mostra a chave ou não no for in ou object keys
            value: valor, // valor da chave
            writable: true, //pode ou não alterar o valor
            configurable: true //se pode ou não apagar ou reconfigurar a chave
        },
        estoques:{
            enumerable: true, //mostra a chave ou não no for in ou object keys
            value: estoques, // valor da chave
            writable: false, //pode ou não alterar o valor
            configurable: false //se pode ou não apagar ou reconfigurar a chave
        }
    });
}

const p2 = new Produtos('camisetas', 50, 20);
console.log(p2);
