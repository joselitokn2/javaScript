/* Crea un programa que, dado día y mes, nos diga si es Navidad. */

const readLineSync = require('readline-sync');

let dia = parseInt(readLineSync.question('Introduce el dia?'), 10);
let mes = parseInt(readLineSync.question('Introduce el mes?'), 10);
if (dia === 25 && mes === 12) {
  console.log('NAVIDAD!');
} else {
  console.log('NO ES NAVIDAD');
  console.log('INTENTALO DE NUEVO');
}
// # sourceMappingURL=enunciados1_3.js.map
