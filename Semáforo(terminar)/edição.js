let vermelho = window.document.querySelector('input#id_vermelho')
let amarelo = window.document.querySelector('input#id_amarelo')
let verde = window.document.querySelector('input#id_verde')
let piscar = window.document.querySelector('input#id_piscar')
let desligar = window.document.querySelector('input#id_desligar')
let img = window.document.querySelector('img#id_img')

vermelho = 'imagens/vermelho.png'
amarelo = 'imagens/amarelo.png'
verde = 'imagens/verde.png'
desligar = 'imagens/desligado.png'

let vetor = [vermelho, amarelo, verde]

function desligado(){
    img.src = desligar
}


function _vermelho(){
    img.src = vermelho
}

function _amarelo(){
    img.src = amarelo
}

function _verde(){
    img.src = verde
}

function _piscar(){
    setInterval(() => {
        vermelho
        amarelo
        verde
        
    }, 1000)
}