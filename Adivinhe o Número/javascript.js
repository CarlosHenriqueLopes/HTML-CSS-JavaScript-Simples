let numero_secreto = 0
let cont = 1
let min = 1
let max = 10
let situação = ''

let numero = window.document.querySelector('input#id_number')
let btn_chutar = window.document.querySelector('button#id_btn')
let resp = window.document.querySelector('p#aviso')
let som = window.document.querySelector('audio#id_som')

function gerarNumeroSecreto(){
    numero_secreto = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(numero_secreto)
}

function bloquearBTNChutar(){
    btn_chutar.setAttribute('disabled', 'disabled')
    btn_chutar.style.background = '#ccc'
    btn_chutar.style.cursor = 'not-allowed'
}

function ativarBTN(){
    btn_chutar.removeAttribute('disabled')
    btn_chutar.style.background = '#222'
    btn_chutar.style.background = 'pointer'
}

function validarNumeroDigitado(numero){
    if (numero <=0 || numero >10){
        console.log('Testativ inválida')
        resp.classList.add('erro')
        msg_rapida('digite um numero inteiro entre 1 e 10')
        bloquearBTNChutar()
        numero.value = ''
    } else {
        console.log('Número válido')
    }
}