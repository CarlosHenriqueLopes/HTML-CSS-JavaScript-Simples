let tamanho_caracter = window.document.querySelector('span#valor')
let slade = window.document.querySelector('input#slede_id')
let btn_gerar_senha = window.document.querySelector('button#btn_id')

let conteiner_senha = window.document.querySelector('div#conteiner_senhas_id')
let mostrar_senha = window.document.querySelector('span#senha_id')

let charset = 'abcdefghijklmnoqprstuwvxyzABCDEFGHIJKLMNOPQRSTUWVXYZ1234567890!?-@'
let nova_senha = ' '


tamanho_caracter.innerHTML = slade.value

slider.oninput = function(){
    slade.innerHTML = this.value
}

function gerador_senha(){
    
    let senha = ' '
    for(let c = 0, n = charset.length; c < slade.value; ++c){
        senha += charset.charAt(Math.floor(Math.random() * n))
    }

    conteiner_senha.classList.remove('hide')
    mostrar_senha.innerHTML = senha
    nova_senha = senha
}

function copiar_senha(){
    window.alert('Senha copiada')
    navigator.clipboard.writeText(nova_senha)
}