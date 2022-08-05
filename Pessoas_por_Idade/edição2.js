function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var formulario_ano = window.document.querySelector('input#inasci')
    var resp = window.document.querySelector('div#resposta')

    //Se o ano ñ for digitado, ou, o ano digitado for > que o ano atual
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano_atual){
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else{
        var formulario_sex = window.document.getElementsByName('sex')
        var idade = ano_atual - Number(formulario_ano.value)
        var genero = ' '

        //Criando a tag <img> pelo js -> (criar um elemento)
        var img = document.createElement('img')
        //colocar um atributo id na variavel -> (criando um atributo)
        img.setAttribute('id', 'foto')


        if (formulario_sex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/homem_criança.png')
            } else if (idade < 22){
                //jovem
                img.setAttribute('src', 'imagens/homem_jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }

        } else if (formulario_sex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/mulher_criança.png')
            } else if (idade < 22){
                //jovem
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }

        //Editando por js:
        //OBS: só quando a linha for executada
        resp.style.textAlign = 'center'

        resp.innerHTML = `Digitado, pessoa do sexo ${genero} com ${idade} anos`
        resp.appendChild(img)
    }
}