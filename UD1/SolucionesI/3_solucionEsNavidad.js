/************************************************/

/*  CODIGO INICIAL A ANYADIR PARA USAR PRINT    */
/************************************************/

const print = console.log;

var readlineSync = require('readline-sync');

// Leemos de la entrada estandar
var dia = parseInt(readlineSync.question('Introduce el dia? '));
var mes = parseInt(readlineSync.question('Introduce el mes? '));

// Si alguno supera 10 mostramos un mensaje, en caso contrario otro

if (dia == 25 && mes == 12) {
    print('SI');
} else {
    print('NO');
}