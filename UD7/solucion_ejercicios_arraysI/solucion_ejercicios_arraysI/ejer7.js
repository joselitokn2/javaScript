/* 7. Implementa en JS un código que permita comparar dos objetos
de forma que compruebe si las propiedades de un objeto y sus
valores están contenidas en el otro objeto. Utiliza every. */

//Las propiedades del objeto origen se comprueba si están contenidas en destino y si los valores coinciden
const mirarIncluidos = (obj, objectoComprobar) =>
    Object.keys(objectoComprobar).every(clave => obj.hasOwnProperty(clave) && obj[clave] === objectoComprobar[clave]);
/*El método every() devuelve un booleano, true si todos los elementos en el arreglo pasan la condición implementada 
por la función dada y false si alguno no la cumple. */
let objeto1 = { edad: 25, color_pelo: 'negro', gafas: true };
let objeto2 = { color_pelo: 'negro', gafas: true };
let objeto3 = { edad: 26, color_pelo: 'negro', gafas: true };
console.log(mirarIncluidos(objeto1, objeto2)); // true
console.log(mirarIncluidos(objeto2, objeto1)); // false
console.log(mirarIncluidos(objeto2, objeto3)); // false

//Ejemplo:
var x = {
    y: 10
};
console.log(x.hasOwnProperty('y')); //true
console.log(x.hasOwnProperty('z')); //false

let a = [1, 2, 3, 4, 5];
a.reduce((x, y) => x + y, 0); // => 15; the sum of the values 0+1 y lo guarda en x
a.reduce((x, y) => x * y, 1); // => 120; the product of the valu
a.reduce((x, y) => (x > y ? x : y)); // => 5; the largest of the values