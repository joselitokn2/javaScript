/**Implementa en JS un array bidimensional que contendrá los
pares de clave-valor de un objeto dado. */

const arrayBidimensional = objecto => Object.keys(objecto).map(elemento => [elemento, objecto[elemento]]); // objecto[elemento] es el valor

let o = { a: 1, b: 2 };
let a = arrayBidimensional(o);
console.log(`Prueba 1: ${a}`);
o = { a: 1, b: 2, c: 3 };
a = arrayBidimensional(o);
console.log(`Prueba 2: ${a}`);
//Para que se vea correctamente el array
a.forEach(x => console.log(`Elemento : ${x}`));
