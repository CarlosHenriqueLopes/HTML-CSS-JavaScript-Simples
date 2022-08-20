let imagem = window.document.querySelector('img#id_img')
let btns = window.document.querySelector('div.cores-semaforo')
let btn_para = window.document.querySelector('div.box-semaforo')

let index_color = 0
let validacao = null


/*
const clicar = (evento) => {
    console.log(evento.target.id) -> olhar no console para saber o passo a passo do evento (saber o id)
}
*/

const padara = () => {
    parar()
    imagem.src = 'imagens/desligado.png'
}

const clicar = (evento) => {
    parar()
   cores[evento.target.id]()
}

const next_index = () => {
    if (index_color < 2) {
        index_color ++
    } else {
        index_color = 0
    }
}

const trocar_cores = () => {
    const vetor = ['id_vermelho', 'id_amarelo', 'id_verde']
    const trocar = vetor[index_color]
    cores[trocar]()
    next_index()
}

const parar = () => {
    clearInterval(validacao)
}

const cores = {
    id_vermelho: () => imagem.src = 'imagens/vermelho.png',
    id_amarelo: () => imagem.src = 'imagens/amarelo.png',
    id_verde: () => imagem.src = 'imagens/verde.png',
    id_piscar: () => validacao = setInterval(trocar_cores, 1000)
}

btns.addEventListener('click', clicar)
btn_para.addEventListener('click', padara)