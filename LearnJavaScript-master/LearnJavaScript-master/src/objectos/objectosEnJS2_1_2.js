/*
 * 1. Escribe en JS una función que permita copiar un objeto de
 * forma que, las claves se convertirán en valores en la copia
 * destino y los valores del objeto origen en las claves
 *(nombres de propiedades) del objeto destino.
 */
/**
 * Este archivo js contiene:
 * - La declaración de una función que permite invertir los nombres de las propiedades de un objeto en los valores y viceversa.
 * - Función que comprueba si un determinado objeto contiene una determinada propiedad.
 * Además contiene:
 * - Un ejemplo de string plantilla con expresión que utiliza el operador condicional ternario.
 */

const cuadro1 = {
    titulo: 'Flor de almendro',
    dimx: 73,
    dimy: 92
  },
  invertir = objeto => {
    const O_FINAL = {};
    for (const p in objeto) {
      const NUEVA_CLAVE = objeto[p];
      O_FINAL[NUEVA_CLAVE] = p;
    }
    return O_FINAL;
  },
  recorrer2 = objecto => {
    let str = '';
    for (const p in objecto) {
      str += ` Propiedad ${p} con valor ${objecto[p]}`;
    }
    return str;
  },
  // EJERCICIO 1 : COMPROBACIÓN INVERSIÓN DE VALORES
  o = invertir(cuadro1);
console.log(recorrer2(o));
// EJERCICIO 2 : COMPROBACIÓN DE PROPIEDADES
const tiene = (objeto, propiedad) => {
  console.log(`El la propiedad ${propiedad} ${objeto.hasOwnProperty(propiedad) ? 'pertenece' : 'no pertenece'} al objeto`);
};
console.log(cuadro1);
tiene(cuadro1, 'dimy');
tiene(cuadro1, 'titulo');
tiene(cuadro1, 'autor');
// # sourceMappingURL=eunciados5_ObjectosEnJS2_1_2.js.map
