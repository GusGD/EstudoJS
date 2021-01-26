//Getter e Setter = proteção de propriedade
//Getter = Obter valor
//Setter = Configurar valor

function Produto (nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;

    //Definindo propriedade
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel
        get: function(){
            return estoquePrivado;
        },
        set:function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('O Valor tem que ser apenas números');
            }
            estoquePrivado = valor;
        },
    });
}

//const p1 = new Produto('camiseta', 100, 90);
//console.log(p1);
//p1.estoque = 'asaasd';
//console.log(p1.estoque);

//CRIANDO PRODUTOO 

function criaProduto(nome){
    
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome  = valor;
        },
    };
}

const p2 = criaProduto('Camiseta');
p2.nome  ='Qualquer coisa';
console.log(p2.nome);