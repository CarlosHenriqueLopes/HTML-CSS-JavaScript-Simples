let op_ant = window.document.querySelector('div#operação_anterior')
let op_digi = window.document.querySelector('div#oparação_digitada')

let botoes = window.document.querySelectorAll('div#oparação_digitada button')


botoes.forEach((btns) => {
    btns.addEventListener("click", (evento) => {
        let valor = evento.target.innerText;
        console.log(valor)
    })
})