export const nome       = 'Gustavo';
export const sobrenome  = 'Oliveira';
export const idade      = 22;

export function soma (x, y){
    return x+y;
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome       = nome;
        this.sobrenome  = sobrenome;
    }
}