/**
 * Este archivo js contiene:
 * - La copia de un objeto a otro para transferir propiedades mediante el método assign
 * - La copia de un objeto a otro para transferir propiedades mediante el operador spread
 *
 * Para probar el archivo, mejor comentar y descomentar el código correspondiente a cada tipo de copia.
 */

"use strict";
/* 3. Crea dos objetos sobre cuadros que comparten una propiedad. Las propiedades del primero objeto son: título,
 dimensión x y dimensión y. Las del segundo son: título, autor, movimiento artístico y técnica. Cuando crees los 
 objetos, escribe el título de forma diferente en los dos objetos, por ejemplo, uno con artículos y otro sin él. 
 Para comprobar qué valor es el que perdura después de la copia. Resuélvelo de dos formas:
con funciones y con el operador spread. */
//Los dos objectos que representan al mismo cuadro pero con diferentes propiedades
let cuadro1 = {
    titulo: "Flor de almendro",
    dimx: 73,
    dimy: 92,
};

let cuadro2 = {
    titulo: "Almendro en Flor",
    autor: "Van Gogh",
    movimiento: "Postimpresionismo",
    tecnica: "óleo sobre lienzo",
};

console.log("Información de los cuadros antes de la copia: ")
console.log(cuadro1);
console.log(cuadro2);

// Primer tipo de copia con assign
Object.assign(cuadro1, cuadro2);
console.log("Información de cuadro1 después de la copia con assign: ");
// Segundo tipo de copia con el operador spread
//cuadro1 = {...cuadro1, ...cuadro2};
//console.log("Información de cuadro1 después de la copia con el operador spread: ")

console.log(cuadro1);