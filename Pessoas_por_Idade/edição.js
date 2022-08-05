function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var formulario_ano = window.document.querySelector('input#inasci')
    var resp = window.document.querySelector('div#resposta')

    //Se o ano ñ for digitado, ou, o ano digitado for > que o ano atual
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano_atual){
        window.alert('Verifique os dados e tente novamente')

    } else{
        var formulario_sex = window.document.getElementsByName('sex')
        var idade = ano_atual - Number(formulario_ano.value)
        var genero = ' '

        if (formulario_sex[0].checked){
            genero = 'Homem'

        } else if (formulario_sex[1].checked){
            genero = 'Mulher'
        }

        resp.innerHTML = `Pessoa do sexo ${genero} com ${idade} anos`
    }
}