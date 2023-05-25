const horas = window.document.getElementById("horas");
const min = window.document.getElementById("min");
const seg = window.document.getElementById("seg");

const relogio = setInterval(function time(){
    let DataHoje = new Date();
    let hrs = DataHoje.getHours();
    let minutos = DataHoje.getMinutes();
    let segundos = DataHoje.getSeconds();

    if (hrs > 10) hrs = "" + hrs; 
    if (minutos > 10) minutos = "" + minutos;
    if (segundos > 10) segundos = "" + segundos;

    horas.textContent = hrs;
    min.textContent = minutos;
    seg.textContent = segundos;

})