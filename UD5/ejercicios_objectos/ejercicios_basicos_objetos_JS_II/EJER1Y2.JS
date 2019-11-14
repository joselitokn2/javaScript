/**
 * Este archivo js contiene:
 * - La declaración de una función que permite invertir los nombres de las propiedades de un objeto en los valores y viceversa.
 * - Función que comprueba si un determinado objeto contiene una determinada propiedad.
 * Además contiene:
 * - Un ejemplo de string plantilla con expresión que utiliza el operador condicional ternario.
 *
 */

'use strict';

let cuadro1 = {
    titulo: 'Flor de almendro',
    dimx: 73,
    dimy: 92
};

const invertir = function(objeto) {
    let o_final = {};
    for (let p in objeto) {
        let nueva_clave = objeto[p];
        o_final[nueva_clave] = p;
    }
    return o_final;
};

const recorrer = o => {
    let str = '';
    for (let p in o) {
        str += ' Propiedad ' + p + ' con valor ' + o[p];
    }
    return str;
};

// EJERCICIO 1 : COMPROBACIÓN INVERSIÓN DE VALORES
/* 1. Escribe en JS una función que permita copiar un objeto de forma que,
 las claves se convertirán en valores en la copia destino y los valores del objeto origen en las claves (nombres de propiedades) del objeto destino. */
let o = invertir(cuadro1);
console.log(recorrer(o));

//EJERCICIO 2 : COMPROBACIÓN DE PROPIEDADES
/*   2. Escribe en
JS una función que compruebe si un determinado objeto con tiene una determinada propiedad. */

const tiene = (objeto, propiedad) => {
    console.log(`El la propiedad ${propiedad} ${objeto.hasOwnProperty(propiedad) ? 'pertenece' : 'no pertenece'} al objeto`);
};

console.log(cuadro1);
tiene(cuadro1, 'dimy');
tiene(cuadro1, 'titulo');
tiene(cuadro1, 'autor');