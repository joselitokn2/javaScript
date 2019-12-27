/*
 * Crea un programa que dado un sueldo menor de 500€ y una
 * antigüedad mayor o igual 10, multiplique el sueldo por 3; en
 * el caso de que la antigüedad sea menor a 10, lo multiplique
 * por 2. Y cuando el sueldo sea igual o superior a 500€, non se
 *realice ningún aumento.
 */

const readLineSync = require('readline-sync');

let sueldo = parseInt(readLineSync.question('Introduce el sueldo: '), 10);
let antiguedad = parseInt(readLineSync.question('Introduce la antigüedad '), 10);
let nuevoSueldo = 0;
if (sueldo < 500 && antiguedad >= 10) {
  nuevoSueldo = sueldo * 3;
} else if (sueldo < 500 && antiguedad < 10) {
  nuevoSueldo = sueldo * 2;
} else {
  nuevoSueldo = sueldo;
}
console.log(nuevoSueldo);
// # sourceMappingURL=enunciados1_4.js.map
