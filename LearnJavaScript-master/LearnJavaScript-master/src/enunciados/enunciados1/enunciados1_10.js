/* Programa que diga si un número dado es primo. */

const readLineSync = require('readline-sync'),
  numero = parseInt(readLineSync.question('Introduce numero: '), 10);
let esPrimo = true;
for (let i = 3; i <= Math.sqrt(numero) && esPrimo === true; i += 2) {
  if (numero % i === 0) {
    esPrimo = false;
  }
}
if (esPrimo === true && numero !== 1) {
  console.log('SI');
} else {
  console.log('NO');
}
