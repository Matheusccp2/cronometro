const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnZerar = document.querySelector('.zerar');
const btnPausar = document.querySelector('.pausar');

let segundos = 0;
let timer;

function iniciarRelogio() {
  timer = setInterval(function() {
    segundos += 10;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 10)
}

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds);
  const horaFormatada = data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC'
  });
  const milesegundos = data.getMilliseconds();

  return `${horaFormatada}:${milesegundos}`;
}

document.addEventListener('click', function(e) {
  const element = e.target;

  if (element.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00.000';
  }
  
  if (element.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio()
  }

  if (element.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
  }
})