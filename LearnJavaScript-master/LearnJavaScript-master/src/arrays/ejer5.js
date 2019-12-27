/**Implementa en JS un programa que filtre los elementos de un
array que no están incluidos dentro de un conjunto de
valores. Solo se puede utilizar un único array en la creación
literal para las pruebas, es decir, el conjunto de valores no
se puede representar como un array. */

const filtrarElementosNoEstenIncluidos = (almacen, ...args) => almacen.filter(v => !args.includes(v));

let a = [2, 1, 2, 3];
console.log(`Prueba 1: ${filtrarElementosNoEstenIncluidos(a, 1, 2)}`);
console.log(`Array original : ${a}`); //no se modifica
console.log(`Prueba 2: ${filtrarElementosNoEstenIncluidos([2, 1, 2, 3], 3)}`);
