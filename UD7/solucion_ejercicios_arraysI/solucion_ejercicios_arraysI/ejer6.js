/* 6. Implementa en JS un array bidimensional que contendrá los
pares de clave-valor de un objeto dado. */
const arrayBidimensional = obj => Object.keys(obj).map(elemento => [elemento, obj[elemento]]); // el objeto elemento es el valor,
//map: Por cada elemento del array se aplica la funcion, devuelve un array bidimensional con las claves del objeto

let o = { a: 1, b: 2 };
let a = arrayBidimensional(o);
console.log(`Prueba 1: ${a}`);
o = { a: 1, b: 2, c: 3 };
a = arrayBidimensional(o);
console.log(`Prueba 2: ${a}`);
//Para que se vea correctamente el array
a.forEach(x => console.log(`Elemento : ${x}`));
