/**Implementa en JS un programa para recuperar los elementos de
 * un array con un salto x. Es decir, si le especificamos x con
 * un valor 2, nos deberá devolver cada dos elementos del array.
 * Si especificamos el valor 3, nos deberá devolver cada 3
 * elementos del array.
 * Para resolverlo, utiliza las posiciones dentro del array. */

//La notación de array de JS para ciertas funciones predefinidas especifica así, por defecto, el orden de los parámetros
//e es el valor del array, i es el indice
const almacen = (almacen, salto) => almacen.filter((elemento, index) => index % salto === salto - 1);
let a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(`Prueba 1: ${almacen(a, 1)}`);
console.log(`Prueba 2: ${almacen(a, 2)}`);
console.log(`Prueba 3: ${almacen(a, 3)}`);
console.log(`Prueba 4: ${almacen(a, 4)}`);
console.log(`Array original: ${a}`); //filter no modifica a
