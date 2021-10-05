var hh = 0
var mm = 0
var ss = 0

var tempo = 1000
var cron;

function start() {
  cron = setInterval(() => {timer();}, tempo);
  //1000 é valor de 1 segundo em milésimos
  //setInterval é usada para executar parte do código em um período de tempo
  //quando clicar em star, chomo função timer ao final do codigo
}

function stop() {
  clearInterval(cron);
  //quando pauso, limpo o que guardei na váriavel cron
}

function reset() {
  clearInterval(cron);
  hh = 0
  mm = 0
  ss = 0
  //paro o cronometro e zero todo ele
  
  document.getElementById('contador').innerHTML = `00:00:00`;
  //imprimo na tela o contador zerado
  
}

function timer() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
  }

    if (mm == 60) {
        mm = 0;
        hh++;
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

  document.getElementById('contador').innerHTML = format;
}
