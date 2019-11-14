var readlineSync = require('readline-sync');

const print = console.log;

var max = 0;
var min = 0;
var valor = 0;

valor = parseInt(readlineSync.question('Introduce valor: '));
if (valor != -1) {
    max = valor;
    min = max;
}

do {
    if (valor > max) {
        max = valor;
    }
    if (valor < min) {
        min = valor;
    }
    valor = parseInt(readlineSync.question('Introduce valor: '));
} while (valor != -1);

print('El valor máximo es : ' + max);
print('El valor minimo es : ' + min);