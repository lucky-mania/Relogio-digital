const horas = window.document.getElementById('horas');
const minutos = window.document.getElementById('minutos');
const segundos = window.document.getElementById('segundos');
// têm a capacidade de executar determinado código repetidamente em um intervalo de tempo definido
const relogio = setInterval(function time(){
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent=min;
    segundos.textContent=s; 
})