const listas = window.document.querySelector('.lista')
const spans = window.document.querySelector('.box_spans')

function clicar(){
    spans.classList.toggle('ativar')
    listas.classList.toggle('ativar')
}