import GeraCPF from './modules/geraCPF';

import './assets/css/style.css';
//função auto executavel 

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.resultadoCPF');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})()