var readlineSync = require('readline-sync');

const print = console.log;

// Variable centinela. Valdra 0 si no hay 10, en el momento haya 1 valdra 1
var hayDiez=0;
var valor;

do{
	valor=parseInt(readlineSync.question('Introduce valor: '));
	// Si vale 10, hemos encontrado 1. OJO, hay que seguir leyendo los demas numeros!!
	if(valor==10){
		hayDiez=1;
	}

}while(valor!=-1);

// Imprimimos como ha quedado todo al final
if(hayDiez==1){
	print("SI");
} else{
	print("NO");
}

/* Otra forma

var hayDiez=0;
var valor=0;

while(valor!=-1){
	valor=parseInt(readlineSync.question('Introduce numero: '));
	if(valor==1O){
		hayDiez=1;
	}
}

*/
