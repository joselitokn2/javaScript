'use strict';
var letrasDNI = new Array();

function solicitarDNI() {
    var codigoControl = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dni = parseInt(prompt('Introduzca su DNI para calcular su letra'));
    var resultado = dni % 23;
    var letraDNI = codigoControl.substring(resultado, resultado + 1);
    letrasDNI.push(letraDNI);
    if (dni != -1) {
        alert(letraDNI);
        setTimeout(solicitarDNI, 1000);
    } else document.getElementById('DNI').innerHTML = letrasDNI.join(' ');
}