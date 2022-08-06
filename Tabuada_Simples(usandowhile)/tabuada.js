function tabuada(){
    let num = window.document.querySelector('input#id_num')
    let sele = window.document.querySelector('select#id_sele')

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um valor')

    } else{
        //converter para int
        let n = Number(num.value)

        //limpar let sele
        sele.innerHTML = ' '
        let cont = 1
        while (cont <= 10){
            //criando uma tag
            let item = document.createElement('option')

            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `sele${cont}`
            sele.appendChild(item)
            cont ++
        }
    }

}