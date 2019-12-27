const readLineSync = require('readline-sync'),
  /* Programa que según el rango que esté una nota numérica le de
una calificación de “Muy deficiente” si es menor que 3,
“Insuficiente”, “Bien”, “Notable” y “Sobresaliente”.
 */
  nota = parseFloat(readLineSync.question('Introduce la nota: '));
let resultado = '';
if (nota >= 0.0 && nota < 3.0) {
  resultado = 'Muy deficiente';
} else if (nota >= 3.0 && nota < 5.0) {
  resultado = 'Insuficiente';
} else if (nota >= 5.0 && nota < 6.0) {
  resultado = 'Bien';
} else if (nota >= 6.0 && nota < 9.0) {
  resultado = 'Notable';
} else if (nota >= 9.0 && nota <= 10.0) {
  resultado = 'Sobresaliente';
}
console.log(resultado);
