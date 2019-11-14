/* 5. Implementa en JS un programa que filtre los elementos de un
array que no están incluidos dentro de un conjunto de
valores. Solo se puede utilizar un único array en la creación
literal para las pruebas, es decir, el conjunto de valores no
se puede representar como un array. */
const incluidos = (arr, ...args) => arr.filter(v => !args.includes(v));

let a = [2, 1, 2, 3];
console.log(`Prueba 1: ${incluidos(a, 1, 2)}`); //Todos los valores de a diferentes a 1 y 2
console.log(`Array original : ${a}`); //no se modifica
console.log(`Prueba 2: ${incluidos([2, 1, 2, 3], 3)}`); /* Devuelve todos los distintos de 3 */