
//closures é a habilidade que a função tem de acessar o escopo léxico 
function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Gustavo');
const funcao2 = retornaFuncao('Oliveira');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao());
console.log(funcao2());