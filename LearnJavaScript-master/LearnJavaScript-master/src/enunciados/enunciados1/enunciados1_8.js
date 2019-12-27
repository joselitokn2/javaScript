/*
 * Programa que muestre la tabla de multiplicar de un número
 *dado desde 1 hasta otro número especificado.
 */

const readLineSync = require('readline-sync'),
  numero = parseInt(readLineSync.question('Tabla de multiplicar del  : '), 10),
  numeroHastaMultiplicar = parseInt(readLineSync.question('Hasta que numero quieres multiplicar: '), 10);
console.log(` Tabla de multiplicar del ${numero}`);
for (let i = 1; i <= numeroHastaMultiplicar; i += 1) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
