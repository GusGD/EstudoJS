class Pessoa {
    constructor(nome, sobrenome){
        this.nome      = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Gustavo', 'Oliveira')
const p2 = new Pessoa('Oliveira', 'Oliveira')
const p3 = new Pessoa('Gustavo', 'Gustavp')
const p4 = new Pessoa('Gu', 'Gu')
console.log(p1)