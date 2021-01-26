//Para cada elemento:
// Retornar apenas uma string com o nome das pessoas
// Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome:'Gustavo', idade:22},
    {nome:'Julia', idade:15},
    {nome:'Beatriz', idade:21},
    {nome:'Otavio', idade:25},
    {nome:'Paulo', idade:40},
    {nome:'José', idade:53},
    {nome:'Rosana', idade:19},
    {nome:'Wallace', idade:18},
    {nome:'Sofia', idade:22},
];

const mapNomes = pessoas.map(nomes => nomes.nome);
console.log(mapNomes);


//Existe duas maneiras de remover o Nome
//Primeira Maneira
/*

const mapRemoveNome = pessoas.map(function(removeNome){
    delete removeNome.nome;
    return removeNome;
});
console.log(mapRemoveNome); 

*/

//================================================================\\

//Segunda Maneira

/*
const mapIdade = pessoas.map(function(mostraIdade){
    return {idade: mostraIdade.idade};
});
console.log(mapIdade);
*/

//================================================================\\

//arrowFunction

//PARA DEIXAR A SEGUNDA MANEIRA EM ARROW FUNCTION TEM QUE FAZER
//UMA EXPRESSÃO
const mapIdade = pessoas.map(mostraIdade => ({idade: mostraIdade.idade}));
console.log(mapIdade);

//Adicionando ID
//Para não mexer nos objetos originais
//É preciso criar um novo objeto
const ids = pessoas.map(function (obj, indice){
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj
});
console.log(pessoas);
console.log(ids);
