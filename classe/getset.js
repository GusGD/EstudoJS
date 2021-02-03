//Symbol é utilizado para criar chave privada do objeto
const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome         = nome
        this[_velocidade] = 0
    }

    //setter para modificar a velocidade que é privada
    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }

    get velocidade(){
        return this[_velocidade]
    }
    
    acelerar (){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

for(let i = 0; i<=200; i++){
    c1.acelerar()
}
console.log(c1)


class Pessoa {
    constructor(nome, sobrenome){
        this.nome      = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto(valor){
        valor           = valor.split(' ');
        this.nome       = valor.shift();
        this.sobrenome  = valor.join(' ');
    }
}
const p1 = new Pessoa('Gustavo', 'Oliveira')

const p2 = new Pessoa('Oliveira', 'Gustavo')
p2.nomeCompleto = 'Oliveira Gustavo Oliveira'

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);