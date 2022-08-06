let num = window.document.querySelector('input#id_num')
let selec = window.document.querySelector('select#id_analisador')
let resp = window.document.querySelector('div#resposta')
let vetor = []


function é_num(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


function n_esta_list(n, l){
    // verificar se a lista esta vazia
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adn(){
    //verificar se é um numero, e se não esta na lista
    if (é_num(num.value) && n_esta_list(num.value, vetor)){
        window.alert('Tudo ok')
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
}