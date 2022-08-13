const op_ant = window.document.querySelector('div#operação_anterior')
const op_digi = window.document.querySelector('div#oparação_digitada')

const botoes = window.document.querySelectorAll('div#box-btns button')
console.log(botoes)

class calculadora {
    constructor(op_anterior, op_digitada){
        this.op_ant = op_anterior
        this.op_ant = op_digitada
        this.digito_agr = ''

    }

    // adidionar os digitos na tela
    add_digito(digito){
        console.log(digito)
    }
}

const calcular = new calculadora(op_ant, op_ant)

// para deixar os clicks dos botoes imprimirem textos
botoes.forEach((btns) => {
    btns.addEventListener("click", (evento) => {
        const valor = evento.target.innerText
        console.log(valor)

        // se o valor for numerico ou for um ponto    //mostrando dois valores, corrigir!
        if (Number(valor) >=0 || valor.value === '.'){
            //tratados como numeros
            calcular.add_digito(valor)
        } else {
            console.log('string: ' + valor)
        }
    })
})