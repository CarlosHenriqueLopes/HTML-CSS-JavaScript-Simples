'use strict'

const imagens = [
    { 'id': 1, 'url': '../imagens/chrono.jpg'},
    { 'id': 2, 'url': '../imagens/inuyasha.jpg'},
    { 'id': 3, 'url': './imagens/ippo.png'},
    { 'id': 4, 'url': './imagens/tenchi.jpg'},
    { 'id': 5, 'url': './imagens/tenjhotenge.jpg'},
    { 'id': 6, 'url': './imagens/yuyuhakusho.jpg'},
]

const box_imgs = window.document.querySelector('div#box_imgs')

const loadImagem = (imagens, box_imgs) =>{
    imagens.forEach (img =>{
        box_imgs.innerHTML += `<div class="item">
        <img src="${img.url}"></div>`
    })
}


loadImagem(imagens, box_imgs)