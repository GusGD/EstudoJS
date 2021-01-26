//Factory Function (Função Fábrica) PPOO
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,
        //GETTER PARA OBTER O VALOR
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gustavo', 'Oliveira', 1.69, 80);
console.log(p1.fala('falando sobre js'));
console.log(p1.imc);

console.log('====================================');

const p2 = criaPessoa('Oliveira', 'Gustavo', 1.69, 60);
console.log(p2.fala('falando sobre js'));
console.log(p2.imc);

console.log('====================================');

p1.nomeCompleto = 'Gustavo Oliveira Oliveira';

console.log(p1.nome);
console.log(p1.sobrenome);