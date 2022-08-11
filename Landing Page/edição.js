const esquerdo = window.document.querySelector('div.esquerdo')
const direito = window.document.querySelector('div.direito')
const conteiner = window.document.querySelector('div.conteiner')

//adicionando um evento na 
esquerdo.addEventListener('mouseenter', () => conteiner.classList.add('hover-e'))

esquerdo.addEventListener('mouseleave', () => conteiner.classList.remove('hover-e'))


direito.addEventListener('mouseenter', () => conteiner.classList.add('hover-d'))

direito.addEventListener('mouseleave', () => conteiner.classList.remove('hover-d'))