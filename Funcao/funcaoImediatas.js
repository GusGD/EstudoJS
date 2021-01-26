//IIFE --> Immediately Invoked Function Expression
/*função que não toca o escopo global e chamada 
imediatamente*/
(function(idade, peso, altura){
    const sobrenome = 'Oliveira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Gustavo'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(22, 60, 1.69);

