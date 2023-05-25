const horas = window.document.getElementById("horas");
const min = window.document.getElementById("min");
const seg = window.document.getElementById("seg");

const btn = window.document.getElementsByClassName("relogio");
const conteiner = window.document.getElementsByClassName("relogio");


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