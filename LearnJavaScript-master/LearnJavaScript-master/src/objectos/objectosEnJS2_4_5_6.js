/*
 * 4. Sobre el primero de los objetos anteriores crea un método get
 * que devuelva el área del cuadro. A continuación, vuelve a
 * crear el segundo de los objetos cuadro, utilizando el primer
 * objeto modificado como prototipo. Comprueba sobre este último
 * objeto que funciona el cálculo del área del cuadro.
 *
 * 5. Sobre uno de los objetos que empleaste para representar
 * cuadros, reescribe el método toSring().
 *
 * 6. Prueba el funcionamiento de los métodos JSON para uno de los
 *objetos creados anteriormente.
 */
/**
 * Este archivo js contiene:
 * - La creación de un objeto literal que representa a un cuadro.
 * - La creación de propiedades de dato (data properties) como hemos visto hasta ahora (titulo, dimx y dimy).
 * - La creación de una propiedad de acceso (accessor property). En este caso, una propiedad de acceso get.
 * - La redefinición del método toString para el objeto.
 * - Comprobación del funcionamiento de la serialización en JS mediante los métodos stringify y parse de JSON
 */

const cuadro4 = {
    titulo: 'Flor de almendro',
    dimx: 73,
    dimy: 92,
    get area() {
      return this.dimx * this.dimy;
    }
  },
  // COMPROBACIÓN EJERCICIO 4 SOBRE EL METODO GET
  cuadro5 = Object.create(cuadro4);
cuadro5.autor = 'Van Gogh';
cuadro5.movimiento = 'Postimpresionismo';
cuadro5.tecnica = 'óleo sobre lienzo';
console.log('Información del cuadro final:');
console.log(cuadro5);
console.log(`La dimensión del cuadro es: ${cuadro5.area}`);
// COMPROBACIÓN EJERCICIO 5 SOBRE LA REDEFINICIÓN DEL MÉTODO TOSTRING
cuadro4.toString = () => {
  return `TITULO ${this.titulo} - DIMENSION X ${this.dimx} - DIMESION Y ${this.dimy} - AREA ${this.area}`;
};
console.log('Comprobación del funcionamiento de la redefinición de toString');
console.log(cuadro4.toString());
// COMPROBACIÓN EJERCICIO 6 SOBRE JSON
const jsonCuadro = JSON.stringify(cuadro4);
console.log(`Salida JSON: ${jsonCuadro}`);
const cuadro6 = JSON.parse(jsonCuadro);
console.log(`Cuadro restaurado a partir del string JSON: ${cuadro4.toString()} -> El metodo toString no se restaura`);
console.log(`Cuadro restaurado a partir de JSON: ${cuadro4.titulo}, ${cuadro4.dimx}, ${cuadro4.dimy}, ${cuadro4.area}`);
// # sourceMappingURL=eunciados5_ObjectosEnJS2_4_5_6.js.map
