/**
 * Este archivo js contiene:
 * - La creación de un objeto literal que respresenta un cilindro y contien un metodo.
 * Además contiene:
 * - Ejemplo de acceso al método del cilindro.
 * - Ejemplo de empleo del objeto Math.
 * - Ejemplo de formateo de salida numérica.
 */

'use strict';

//Objeto cilindro con dos propiedades simples y un método
let cilindro = {
    radio: 2,
    altura: 3,
    volumen() {
        //Descadar que el contexto de inicialización de este método (función), son las propiedades del objecto literal creado.
        return Math.PI * Math.pow(this.radio, 2) * this.altura;
    }
};

//Formateamos la salida del metodo en el console.log.
console.log(
    `El cindro con radio ${cilindro.radio} y altura ${cilindro.altura}, tiene por volumen ${cilindro.volumen().toFixed(2)}`
);