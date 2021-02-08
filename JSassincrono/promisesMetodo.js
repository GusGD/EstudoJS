// METODOS:
// Promise.all = Promise.race - Promise.resolve - Promise.reject

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {   
        
        if(typeof msg !== 'string'){
            reject('Cai no erro')
            return
        } 

        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - passei na promise')
            return
        }, tempo)
    })
}

//Promise Resolve
/*
function baixaPagina(){
    const emCache = false; //true

    if(emCache){
        return Promise.resolve('Pagina em cache')
    }
    else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log(e))
*/

//Promisse Reject
function baixaPagina(){
    const emCache = true; //true

    if(emCache){
        return Promise.reject('Pagina em cache')
    }
    else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('Erro ao baixar', e))


/*
const promises = [
   // 'Primeiro valor',
    esperaAi('Primeira Promise', 2000),
    esperaAi('Segunda Promise', 4000),
    esperaAi('Terceira Promise', 1000),
    //'outro valor'
    
]*/

/* Promise ALL resolve todas

Promise.all(promises)
.then(function(valor) {
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
}) 

*/

/*
// Sempre entregara o primeiro valor 
Promise.race(promises)
.then(function(valor) {
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})
*/ 

