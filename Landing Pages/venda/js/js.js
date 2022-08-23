const listas = window.document.querySelector('.lista')
const spans = window.document.querySelector('.box_spans')

spans.addEventListener('click', () => {
    listas.classList.toggle('ativar')
    spans.classList.toggle('ativar')
})