/*
const imagens = [
    { 'id': 1, 'url': '../imagens/chrono.jpg'},
    { 'id': 2, 'url': '../imagens/inuyasha.jpg'},
    { 'id': 3, 'url': '/imagens/ippo.png'},
    { 'id': 4, 'url': '../imagens/tenchi.jpg'},
    { 'id': 5, 'url': './imagens/tenjhotenge.jpg'},
    { 'id': 6, 'url': './imagens/yuyuhakusho.jpg'},
]

const box_imgs = window.document.querySelector('div#box_imgs')

function clik(){
    window.alert('teste')
}

const loadImagem = (imagens, box_imgs) =>{
    imagens.forEach (img =>{
        box_imgs.innerHTML += `
        <div class="item">
            <img src="${img.url}">
        </div>`
    })
}


loadImagem(imagens, box_imgs)
*/
let btn_avançar = window.document.querySelector('div#btn_avançar')
let btn_voltar = window.document.querySelector('div#btn_voltar')

function avançar(){
    window.alert('teste avançar')
}

function volta(){
    window.alert('teste voltar')
}