let digito_n1 = window.document.querySelector('input#id_n1')
let digito_n2 = window.document.querySelector('input#id_n2')

/*let soma = window.document.querySelector('input#id_id_soma')
let multiplicar = window.document.querySelector('input#id_id_mult')
let subtrair = window.document.querySelector('input#id_id_sub')
let dividir = window.document.querySelector('input#id_id_divd')*/

let resp = window.document.querySelector('div#resultado')


function somar(){
    resp.innerHTML = Number(digito_n1.value) + Number(digito_n2.value)
}

function multiplicar(){
    resp.innerHTML = Number(digito_n1.value) * Number(digito_n2.value)
}

function subtrair(){
    resp.innerHTML = Number(digito_n1.value) - Number(digito_n2.value)
}

function dividir(){
    resp.innerHTML = Number(digito_n1.value) / Number(digito_n2.value)
}