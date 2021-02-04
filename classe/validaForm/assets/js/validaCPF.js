class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable: false,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1)
        this.novoCPF = cpfSemDigito + digito1 + digito2
    }
    
    static geraDigito(cpfSemDigito){
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for (let stringNumerica of cpfSemDigito){
            //console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }


    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencia()) return false
        this.geraNovoCpf()
        console.log(this.novoCPF);

        return this.novoCPF === this.cpfLimpo;
    }
}

// para fazer a mascara coloque o codigo 
//abaixo ao lado do type do input 
// onkeydown="javascript: fMasc( this, mCPF );">
function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}