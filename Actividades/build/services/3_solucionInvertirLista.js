var readlineSync = require('readline-sync');

const print = console.log;

var lista = [];

while(true){
	valor=parseInt(readlineSync.question('Introduce valor: '));
	if(valor == -1){
		break;
	}
	lista.push(valor);
}

print ("La lista invertida es : " + lista.reverse());
