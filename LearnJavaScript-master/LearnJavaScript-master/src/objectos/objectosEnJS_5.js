/*
 * Crea un objeto que represente un cilindro y que permita
 * calcular su volumen aproximando a dos decimales. Utiliza los
 * conocimientos sobre representación de números de JS (pdf
 * Types, Values and Variables)y el funcionamiento de funciones
 *en JS (pdf Functions)
 */

const cilindro = {
  radio: 2,
  altura: 3,
  volumen() {
    // Descadar que el contexto de inicialización de este método (función), son las propiedades del objecto literal creado.
    return Math.PI * Math.pow(this.radio, 2) * this.altura;
  }
};
// Formateamos la salida del metodo en el console.log.
console.log(
  `El cindro con radio ${cilindro.radio} y altura ${cilindro.altura}, tiene por volumen ${cilindro.volumen().toFixed(2)}`
);
