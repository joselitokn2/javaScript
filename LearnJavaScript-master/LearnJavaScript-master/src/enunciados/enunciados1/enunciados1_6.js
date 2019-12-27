/*
 * Programa que muestre por pantalla todos los números pares
 *hasta un número establecido que cambiará en cada ejecución.
 */

const readLineSync = require('readline-sync'),
  numero = parseInt(readLineSync.question('Introduce numero: '), 10);
for (let i = 2; i <= numero; i += 2) {
  console.log(i);
}
// # sourceMappingURL=enunciados1_6.js.map
