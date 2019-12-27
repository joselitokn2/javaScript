/**
 * 1. Implementa en JS un código que elimine los elementos de la
 * izquierda de un array especificando una determinada posición.
 */
function elimina_de_la_izquierda(arr, n = 1) {
  return arr.slice(n);
}
let a = [1, 2, 3];
console.log(`Prueba 1: ${elimina_de_la_izquierda(a)}`);
console.log(`Array original: ${a}`); //slice no modifica a
console.log(`Prueba 2: ${elimina_de_la_izquierda(a, 1)}`);
console.log(`Prueba 3: ${elimina_de_la_izquierda(a, 2)}`);
console.log(`Prueba 4: ${elimina_de_la_izquierda(a, 4)}`);
