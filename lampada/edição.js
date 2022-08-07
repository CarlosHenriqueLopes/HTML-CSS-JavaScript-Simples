let lampada = window.document.querySelector('img#id_lampada')
let ligar = window.document.querySelector('input#id_ligar')
let desligar = window.document.querySelector('input#id_desligar')


function btn_lig(){
    lampada.src = 'imagens/ligada.jpg'
}

function btn_desl(){
    lampada.src = 'imagens/desligada.jpg'
}

function dentro(){
    lampada.src = 'imagens/ligada.jpg'
}

function fora(){
    lampada.src = 'imagens/desligada.jpg'
}

function quebrar(){
    lampada.src = 'imagens/quebrada.jpg'
}
