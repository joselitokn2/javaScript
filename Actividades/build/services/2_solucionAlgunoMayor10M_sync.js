
/************************************************/	
/*  CODIGO INICIAL A ANYADIR PARA USAR PRINT    */
/************************************************/

const print = console.log;

// Readline_sync es una librería que tenemos que instalar a mayores de node.js.
// La importamos utilizando la palabra reservada require. Sería como el import de Java
// Recordemos que con el intérprete/motor de node.js que instalamos, se incluía tb npm (node package manager)
// En el caso de la librería asíncrona readline, ya estaba disponible. Sin embargo, para la librería síncrona
// readline-sync es necesario añadirla al proyecto utilizando npm (npm i readline-sync)
// A continuación, ya podemos emplear la librería con normalidad.
// https://www.npmjs.com/package/readline-sync
// https://devcode.la/blog/que-es-npm/

var readlineSync = require('readline-sync');

var n1 = parseInt(readlineSync.question('Introduce el primer numero? '));
var n2 = parseInt(readlineSync.question('Introduce el segundo numero? '));
var n3 = parseInt(readlineSync.question('Introduce el tercer numero? '));

print(n1);

print(n2);

print(n3);

// Si alguno supera 10 mostramos un mensaje, en caso contrario otro

if(n1>10 || n2>10 || n3>10){
	print("ALGUNO MAYOR QUE 10");
}else{
	print("NINGUNO MAYOR QUE 10");
}

