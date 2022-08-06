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
    //verificar se é um numero, e se não esta na lista (ponto de explacamação)
    if (é_num(num.value) && ! n_esta_list(num.value, vetor)){
        //adicionando valor no vetor
        vetor.push(Number(num.value))
        resp.innerHTML = 'Você clicou para adicionar mais números'

        //criando uma tag
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        selec.appendChild(item)
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    
    //apagar a caixa e focar o mouse no input num
    num.value = ' '
    num.focus()
}

function finalizar(){
    if (vetor.length == 0){
        window.alert('Adicione pelemenos um valor antes de finalizar')
    } else{
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for (let c in vetor){
            soma += vetor[c]

            if (vetor[c] > maior)
                maior = vetor[c]

            if (vetor[c] < menor)
                menor = vetor[c]
        }
        media = soma / total

        resp.innerHTML = ' '
        resp.innerHTML += `<p>Foram adicionado ${total} números no cadastro</p>`

        resp.innerHTML += `<p>O <strong>maior</strong> valor adicionado foi ${maior}</p>`

        resp.innerHTML += `<p>O <strong>menor</strong> valor adicionado foi ${menor}</p>`

        resp.innerHTML += `<p>A <strong>soma</strong> dos valores adicionado foi ${soma}</p>`

        resp.innerHTML += `<p>A <strong>media</strong> dos valores adicionado foi ${media}</p>`
    }
}