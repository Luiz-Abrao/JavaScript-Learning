const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000); //multiply by 1000 because JS receive the data in milisecond and I want in seconds.
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function startClock(){
    clearInterval(timer);
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pause');
    startClock();
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pause');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pause');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
});

// It's better to use "document.addEventListener(event)" for more buttons. This method save memory and process from the computer.
// document.addEventListener('click', function(e) {
//     const el = e.target;

//     if (el.classList.contains('zerar')) {
//       clearInterval(timer);
//       relogio.innerHTML = '00:00:00';
//       relogio.classList.remove('pausado');
//       segundos = 0;
//     }

//     if (el.classList.contains('iniciar')) {
//       relogio.classList.remove('pausado');
//       clearInterval(timer);
//       iniciaRelogio();
//     }

//     if (el.classList.contains('pausar')) {
//       clearInterval(timer);
//       relogio.classList.add('pausado');
//     }
//   });
// }
// relogio();