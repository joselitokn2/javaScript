var readlineSync = require('readline-sync');

const print = console.log;

//Leemos N

var N = parseInt(readlineSync.question('Introduce numero: '));
var i;
// For de 2 en 2
for (i = 2; i <= N; i += 2) {
    print(i);
}