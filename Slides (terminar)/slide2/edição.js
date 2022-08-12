const controles = window.document.querySelectorAll('button.control')

let galeria_img = 0

const itens = window.document.querySelectorAll('img.item')
const max_itens = itens.length

controles.forEach((cont) => {
    cont.addEventListener('click', (e) => {
        esquerda = e.target.classList.contains('seta-esquerda')

        if (esquerda){
            galeria_img -= 1
        } else{
            galeria_img += 1
        }

        if (galeria_img >= max_itens){
            galeria_img = 0
        }

        if (galeria_img < 0){
            galeria_img = max_itens - 1
        }

        itens.forEach((i) => i.classList.remove('img-atual'))

        itens[galeria_img].scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        })

        itens[galeria_img].classList.add('img-atual')
    })
})