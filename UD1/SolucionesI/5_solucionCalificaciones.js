var readlineSync = require('readline-sync');

const print = console.log;

// Leemos de la entrada estandar
var nota=parseFloat(readlineSync.question('Introduce la nota: '));
var resultado="";

// Comparamos los rangos de resultados
if(nota>=0.0 && nota<3.0){
	resultado="Muy deficiente";
} else if(nota>=3.0 && nota<5.0){
	resultado="Insuficiente";
} else if(nota>=5.0 && nota<6.0){
	resultado="Bien";
} else if(nota>=6.0 && nota<9.0){
	resultado="Notable";
} else if(nota>=9.0 && nota<=10.0){
	resultado="Sobresaliente";
}

// Imprimimos el resultado obtenido
print(resultado);

