/*
 * Este ejercicio se trata de leer tres números y decir si
 * alguno es mayor que 10. Es suficiente con resolverlo de una
 *de las formas.
 */
const readLineSync = require('readline-sync');
let numeroUNO = parseInt(readLineSync.question('Introduce el primer numero? '), 10);
let numeroDOS = parseInt(readLineSync.question('Introduce el segundo numero? '), 10);
let numeroTRES = parseInt(readLineSync.question('Introduce el tercer numero? '), 10);
console.log(numeroUNO, numeroDOS, numeroTRES);
if (numeroUNO > 10 || numeroDOS > 10 || numeroTRES > 10) {
  console.log('Has introducido un numero mayor que 10');
} else {
  console.log('Los numeros introducidos son menores que 10');
}
