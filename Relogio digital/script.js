const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milesegundos = document.getElementById("milesegundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let dt= dateToday.getDay();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();
  let mile = dateToday.getMilliseconds();

  if (hr < 10) {
    hr = "0" + hr;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (seg < 10) {
    seg = "0" + seg;
  }

  if(mile < 10){
    mile = "0" + mile;
  }

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
  milesegundos.textContent= mile;
});