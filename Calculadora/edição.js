let op_ant = window.document.querySelector('div#operação_anterior')
let op_digi = window.document.querySelector('div#oparação_digitada')

let botoes = window.document.querySelectorAll('div#oparação_digitada button')


class calculadora {
    constructor(op_anterior, op_digitada){
        this.op_ant = op_anterior
        this.op_digi = op_digitada
        this.digito_agr = ''

    }

    // adidionar os digitos na tela
    add_digito(digito){
        console.log(digito)
    }
}

let calcular = new calculadora(a, b)

// para deixar os clicks dos botoes imprimirem textos
botoes.forEach((btns) => {
    btns.addEventListener("click", (evento) => {
        let valor = evento.target.innerText
        console.log(valor)

        if (Number(valor.value) >=0 || valor.value === '.'){
            //tratados como numeros
            calculadora.add_digito(valor)
        } else {

        }
    })
})