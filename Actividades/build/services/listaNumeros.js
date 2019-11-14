/**
 * Programa que muestre una lista de números de forma invertida a como se introdujeron.
 */

var lista = ['elemento1', 'elemento2', 'elemento3'];
console.log('lista: ', lista);
// salida esperada: Array ['elemento1', 'elemento2', 'elemento3']

var reversed = lista.reverse(); 
console.log('reversed: ', reversed);
// salida esperada: Array [elemento3, elemento2, elemento1]

/*Cuidado: lo inverso es destructivo. También cambia la matriz original */ 
console.log('lista: ', lista);
// salida esperada: Array ['elemento3', 'elemento2', 'elemento1']