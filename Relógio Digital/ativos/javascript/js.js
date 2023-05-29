const horas = window.document.getElementById("horas");
const min = window.document.getElementById("min");
const seg = window.document.getElementById("seg");

const btn = window.document.querySelector("button.btn");
const conteiner1 = window.document.querySelector("div.conteiner1");
const relogio_conteiner = window.document.querySelector("div.relogio");


//função para quando clicar no btn fazer a troca da msg pelo mostrador de horas, e vice versa
btn.addEventListener("click", function(){
    if (relogio_conteiner.style.display === "none"){
        relogio_conteiner.style.display = "flex"
        conteiner1.style.display = "none"
    } else {
        conteiner1.style.display = "block"
        relogio_conteiner.style.display = "none"
    }
})


const relogio = setInterval(function time(){
    let DataHoje = new Date();
    let hrs = DataHoje.getHours();
    let minutos = DataHoje.getMinutes();
    let segundos = DataHoje.getSeconds();

    // condições para acrescentar 0 antes de unidades
    if (hrs < 10)
        hrs = "0" + hrs;
         
    if (minutos < 10) 
        minutos = "0" + minutos;

    if (segundos < 10) 
        segundos = "0" + segundos;

    horas.textContent = hrs;
    min.textContent = minutos;
    seg.textContent = segundos;

})