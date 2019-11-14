/**
 * Este archivo js contiene:
 * - La creación de un objeto literal que representa a un cuadro.
 * - La creación de propiedades de dato (data properties) como hemos visto hasta ahora (titulo, dimx y dimy).
 * - La creación de una propiedad de acceso (accessor property). En este caso, una propiedad de acceso get.
 * - La redefinición del método toString para el objeto.
 * - Comprobación del funcionamiento de la serialización en JS mediante los métodos stringify y parse de JSON
 */

"use strict";

let cuadro1 = {
    titulo : "Flor de almendro",
    dimx : 73,
    dimy : 92,
    get area () { return this.dimx*this.dimy;},
  };


// COMPROBACIÓN EJERCICIO 4 SOBRE EL METODO GET
let cuadro2 = Object.create(cuadro1);
cuadro2["autor"] = "Van Gogh";
cuadro2["movimiento"] = "Postimpresionismo";
cuadro2["tecnica"] = "óleo sobre lienzo";

console.log("Información del cuadro final: ")
console.log(cuadro2);
console.log(`La dimensión del cuadro es: ${cuadro2.area}`)

// COMPROBACIÓN EJERCICIO 5 SOBRE LA REDEFINICIÓN DEL MÉTODO TOSTRING
cuadro1.toString = function () {
  return `TITULO ${this.titulo} - DIMENSION X ${this.dimx} - DIMESION Y ${this.dimy} - AREA ${this.area}`
}
console.log("Comprobación del funcionamiento de la redefinición de toString");
console.log(cuadro1.toString());

// COMPROBACIÓN EJERCICIO 6 SOBRE JSON 
let json_cuadro = JSON.stringify(cuadro1);
console.log(`Salida JSON: ${json_cuadro}`);
let cuadro3 = JSON.parse(json_cuadro);
console.log(`Cuadro restaurado a partir del string JSON: ${cuadro3.toString()} -> El metodo toString no se restaura`);
console.log(`Cuadro restaurado a partir de JSON: ${cuadro3.titulo}, ${cuadro3.dimx}, ${cuadro3.dimy}, ${cuadro3.area}`);
