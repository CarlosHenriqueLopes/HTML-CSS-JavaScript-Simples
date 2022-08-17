
let imagem = window.document.querySelector('img#img_dado')
let sortear = window.document.querySelector('p#sortear')
let btn = window.document.querySelector('button#btn')
let som = window.document.querySelector('audio#som_dado')

let n_random = 0

// OBS: Necessario para usar o random
// função que gera numeros randomicos inteiros
// tambem o min e o max
function getRandomInt(min, max){
    min = Math.ceil(min) // para arredondar para cima ceil = teto
    max = Math.floor(max) // para arredondar para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}

btn.addEventListener('click', function(){
    //adicionando classes
    imagem.classList.add('animar')
    sortear.classList.add('aparecer')
  
    //tocando o som
    som.play()

    // ocultar btn
    btn.style.display = 'none'

    //para evitar varios clicks no btn
    // usar setTimeout para executar as ações apos 1.7seg
    setTimeout(function(){

        //gerando e armazenando um n randomico
        n_random = getRandomInt(1, 6)

        // mostrando o numero
        console.log(n_random)

        // definindo o valor da imagem com o numero randomico
        imagem.setAttribute('src', 'img/'+n_random+'.png')
        // mostrando a tela o numero sorteado
        sortear.textContent = n_random

        // exibir o btn em iline block
        btn.style.display = 'aline-block'

        // retirar a animação
        imagem.classList.remove('animar')
        sortear.classList.remove('aparecer')
    })
})