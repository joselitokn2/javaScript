/*
 * Programa que vaya leyendo números hasta que se introduzca el
 * valor -1. Al final, debe informar si alguno de los números
 * leídos fue el 10.
 */

const readLineSync = require('readline-sync');

let hayDiez = 0,
  valor = 0;
while (valor !== -1) {
  valor = parseInt(readLineSync.question('Introduce numero: '), 10);
  if (valor === 10) {
    hayDiez += 1;
    console.log(`el numero de 10 introducidos ${hayDiez}`);
  }
}
// # sourceMappingURL=enunciados1_9.js.map
