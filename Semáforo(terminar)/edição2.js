let imagem = window.document.querySelector('img#id_img')
let btns = window.document.querySelector('div.cores-semaforo')

let index_color = 0


/*
const clicar = (evento) => {
    console.log(evento.target.id) -> olhar no console para saber o passo a passo do evento (saber o id)
}
*/
const clicar = (evento) =>{
   cores[evento.target.id]()
}

const trocar_cores = () =>{
    const vetor = ['id_vermelho', 'id_amarelo', 'id_verde']
    const trocar = vetor[index_color]
    cores[trocar]()
}

const cores = {
    id_vermelho: () => imagem.src = 'imagens/vermelho.png',
    id_amarelo: () => imagem.src = 'imagens/amarelo.png',
    id_verde: () => imagem.src = 'imagens/verde.png',
    id_piscar: () => setInterval(trocar_cores, 1000)
}

btns.addEventListener('click', clicar)