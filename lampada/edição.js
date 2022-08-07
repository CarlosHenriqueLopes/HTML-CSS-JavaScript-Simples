let lampada = window.document.querySelector('img#id_lampada')
let ligar = window.document.querySelector('input#id_ligar')
let desligar = window.document.querySelector('input#id_desligar')

ligar = addEventListener('click', _ligar)
desligar = addEventListener('click', _desligar)
lampada = addEventListener('onmouseenter', dentro)
lampada = addEventListener('onmouseout', fora)

function _ligar(){
    lampada.src = 'imagens/ligada.jpg'
}

function _desligar(){
    lampada.src = 'imagens/desligada.jpg'
}

function dentro(){
    lampada.src = 'imagens/ligada.jpg'
}

function fora(){
    lampada.src = 'imagens/desligada.jpg'
}
