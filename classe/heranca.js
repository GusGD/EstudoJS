class DispostivoEletronico{
    constructor (nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ' + 'já está ligado')
            return
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' ' + 'já está desligado')
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispostivoEletronico {
    constructor(nome, cor, modelo){
        //SUPER chama o construtor da classe pai
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('CelularGu', 'Preto', 'aaa');
console.log(s1)