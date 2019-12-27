/*
 * Programa que imprima los números impares desde un número dado
 *hasta 1.
 */

const readLineSync = require('readline-sync'),
  numero = parseInt(readLineSync.question('Introduce numero: '), 10);
for (let i = 0; i < numero; i += 1) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// # sourceMappingURL=enunciados1_7.js.map
