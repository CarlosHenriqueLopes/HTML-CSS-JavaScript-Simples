let digito_n1 = window.document.querySelector('input#id_n1')
let digito_n2 = window.document.querySelector('input#id_n2')

let revelar = window.document.querySelector('button#btn_revelar')
let conteiner = window.document.querySelector('div.conteiner')

revelar.addEventListener('click', function(){

    if (conteiner.style.display === 'none'){
        conteiner.style.display = 'block'
    } else {
        conteiner.style.display = 'none'
    }
})

let resp = window.document.querySelector('div#resultado')


function somar(){
    resp.innerHTML = `Resultado: ${Number(digito_n1.value) + Number(digito_n2.value)}`
}

function multiplicar(){
    resp.innerHTML = `Resultado: ${Number(digito_n1.value) * Number(digito_n2.value)}`
}

function subtrair(){
    resp.innerHTML = `Resultado: ${Number(digito_n1.value) - Number(digito_n2.value)}`
}

function dividir(){
    resp.innerHTML = `Resultado: ${Number(digito_n1.value) / Number(digito_n2.value)}`
}