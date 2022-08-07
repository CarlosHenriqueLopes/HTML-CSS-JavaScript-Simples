let vermelho = window.document.querySelector('input#id_vermelho')
let amarelo = window.document.querySelector('input#id_amarelo')
let verde = window.document.querySelector('input#id_verde')
let piscar = window.document.querySelector('input#id_piscar')
let desligar = window.document.querySelector('input#id_desligar')
let img = window.document.querySelector('img#id_img')

vermelho = 'imagens/vermelho.png'
amarelo = 'imagens/amarelo.png'
verde = 'imagens/verde.png'

let vetor = [vermelho, amarelo, verde]


function _vermelho(){
    img.src = 'imagens/vermelho.png'
}

function _amarelo(){
    img.src = 'imagens/amarelo.png'
}

function _verde(){
    img.src = 'imagens/verde.png'
}

function _piscar(){
    setInterval(function(){
        frame ++
        img.src = vetor[frame]
    }, 1000);
}