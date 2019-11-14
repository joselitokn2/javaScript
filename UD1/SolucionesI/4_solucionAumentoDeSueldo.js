
/************************************************/	
/*  CODIGO INICIAL A ANYADIR PARA USAR PRINT    */
/************************************************/

const print = console.log;

var readlineSync = require('readline-sync');

// Leemos de la entrada estandar
var sueldo=parseInt(readlineSync.question('Introduce el sueldo: '));
var antiguedad=parseInt(readlineSync.question('Introduce la antigüedad '));
var nuevoSueldo=0;
// Si alguno supera 10 mostramos un mensaje, en caso contrario otro

if(sueldo<500 && antiguedad>=10){
	nuevoSueldo=sueldo*3;
}
else if(sueldo<500 && antiguedad<10){
	nuevoSueldo=sueldo*2;
    }else{
	    nuevoSueldo=sueldo;
    }
// Imprimimos el resultado
print(nuevoSueldo);

