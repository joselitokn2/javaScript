
var intervalo = setInterval();
function comenzarSaludos(){
   intervalo =  setInterval("alert('hola');",5000);
}

function pararSaludos(){
    clearInterval(intervalo);
}


