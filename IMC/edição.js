let calc = window.document.querySelector('input#id_calcular')


function btn_calcular(){
    let nome = window.document.querySelector('input#id_name')
    let alt = window.document.querySelector('input#id_altura')
    let peso = window.document.querySelector('input#id_peso')
    let resp = window.document.querySelector('div#id_resposta')

    if (nome.value.length == 0 && alt.value.length == 0 && peso.value.length == 0){
        //window.alert('Preencha todas os campos')
        resp.innerHTML = 'Preenchar todos os campos'
    } else {
        let al = Number(alt.value)
        let pe = Number(peso.value)
        let imc = (pe / (al * al)).toFixed(2)

        if (imc < 18.5){
            resp.innerHTML = `Oi ${nome.value} seu IMC deu ${imc}<br>Resultado: baixo peso` 
        } else if (imc >= 18.5 && imc <= 29.9){
            resp.innerHTML = `Oi ${nome.value} seu IMC deu ${imc}<br>Resultado: eutrofia`
        } else if (imc > 29.9 && imc <=30){
            resp.innerHTML = `Oi ${nome.value} seu IMC deu ${imc}<br>Resultado: sobrepeso`
        } else {
            resp.innerHTML = `Oi ${nome.value} seu IMC deu ${imc}<br>Resultado: obesidade`
        }
        
    }

}