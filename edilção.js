function carregar(){
    var msg = window.document.getElementById('title_img')
    var img = window.document.getElementById('imagem')

    //Hora atual
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    if (hora >= 0 && hora < 12){
        // bom dia
        title_img.innerHTML = `Agora são ${hora} horas. <strong>Bom dia</strong>!`
        document.body.style.background = 'rgb(60.0, 74.1, 79.6)'
        img.src = 'imagens/manha_img_redonda.png'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        title_img.innerHTML = `Agora são ${hora} horas. <strong>Boa tarde!</strong>`
        document.body.style.background = 'rgb(37.6, 61.6, 72.9)'
        img.src = 'imagens/tarde_img_redonda.png'
    } else{
        // boa noite
        title_img.innerHTML = `Agora são ${hora} horas. <strong>Boa noite!</strong>`
        document.body.style.background = 'rgb(20.8, 48.6, 61.2)'
        img.src = 'imagens/noite_img_redonda.png'
    }
}