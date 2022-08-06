function contador(){
    let inic = window.document.querySelector('input#inum1')
    let fim = window.document.querySelector('input#inum2')
    let passo = window.document.querySelector('input#inum3')
    let res = window.document.querySelector('div#resp')

    //Se nada for digitado (length = comprimento)
    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preenchar todas as caixas')
        res.innerHTML = 'Impossível contar sem valores digitados'
    } else{
        res.innerHTML = 'Contando... <br>'

        //Convertendo para int
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)


        if (p <= 0){
            window.alert('Passo não digitado. Considerando valor 1')
            p = 1
            
        } if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }

        } else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }   
}
