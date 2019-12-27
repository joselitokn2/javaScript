/*Implementa en JS un código que permita comparar dos objetos
de forma que compruebe si las propiedades de un objeto y sus
valores están contenidas en el otro objeto. Utiliza every.*/

//Las propiedades del objeto origen se comprueba si están contenidas en destino y si los valores coinciden
const comparadorObjectosIguales = (objecto, objectoComprobacion) =>
  Object.keys(objectoComprobacion).every(
    clave => objecto.hasOwnProperty(clave) && objecto[clave] === objectoComprobacion[clave]
  );

let objeto1 = { edad: 25, color_pelo: 'negro', gafas: true };
let objeto2 = { color_pelo: 'negro', gafas: true };
let objeto3 = { edad: 26, color_pelo: 'negro', gafas: true };
console.log(comparadorObjectosIguales(objeto1, objeto2)); // true
console.log(comparadorObjectosIguales(objeto2, objeto1)); // false
console.log(comparadorObjectosIguales(objeto2, objeto3)); // false

// Dara true sin contiene algunas de las propiedades
// false sin el objectoComprobacion tienes alguno elemento más que no este especificado
