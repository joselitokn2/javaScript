var readlineSync = require('readline-sync');

const print = console.log;

//Leemos N

var N = parseInt(readlineSync.question('Introduce numero: '));
var i;

// Si N es par, la convertimos en impar
if (N % 2 == 0) {
    N = N - 1;
}

// For de 2 en 2 hacia atras
for (i = N; i >= 1; i -= 2) {
    print(i);
}