var readlineSync = require('readline-sync');

const print = console.log;

var precio=0;
var pagado=0;
var cambio = 0;

precio=parseInt(readlineSync.question('Introduce valor del precio : '));
pagado=parseInt(readlineSync.question('Introduce valor de la cantidad pagada : '));

if(pagado > precio){
	print("La cantidad a devolver es : " + (pagado - precio));
}
else{
	print("Cantidad pagada insuficiente");
}
