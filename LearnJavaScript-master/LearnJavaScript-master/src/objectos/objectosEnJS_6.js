/*
 * Crea un objeto empleado (numero de empleado, dni) que tenga
 * como prototipo a un objeto persona (nombre, apellido, dni).
 * Observa el funcionamiento de cada uno al consultar los
 *valores de las propiedades. Borra la propiedad dni.
 */
/*
 * Este archivo js contiene:
 * - La creación de un objeto empleado que tiene una propiedad que es otro objeto.
 * - La creación de un objeto empleado que tiene dos propiedades con la misma clave.
 * - La creación de un objeto empleado2 usando prototipado, es decir, se crea a partir de otro objeto (persona)
 *
 *  Además contiene:
 * - Ejemplo de propiedad con clave un string con espacios
 * - Ejemplo de acceso a una propiedad cuya clave está asociada a dos propiedades
 * - Ejemplo de acceso a propiedades de objetos y subobjetos.
 */
/*
 * CREACIÓN DEL EMPLEADO CON UN OBJETO COMO PROPIEDAD PERSONA
 * Objeto empleado
 */

const empleado = {
  'num emp': 1,
  dni: '32586987L',
  persona: {
    nombre: 'Paco',
    apellido: 'Po',
    dni: '64646464K'
  },
  dni1: '76767676F'
};
// Formateamos la salida del metodo en el console.log.
console.log(
  `Empleado con numero ${empleado['num emp']} y dni ${empleado.dni}, tiene por nombre y apellido ${empleado.persona.nombre} ${empleado.persona.apellido}. El dni de la persona es ${empleado.persona.dni}`
);
// El dni al que accede es a la propia propiedad del objeto empleado y, además, al "último definido".
console.log(empleado);
delete empleado.dni;
console.log(
  `\nDespues del borrado -> Empleado con numero ${empleado['num emp']} y dni ${empleado.dni}, tiene por nombre y apellido ${empleado.persona.nombre} ${empleado.persona.apellido}. El dni de la persona es ${empleado.persona.dni}`
);
/*
 * Borra las dos propiedades dni de empleado.
 * En realidad, solo una porque con la segunda declaración de dni en empleado, lo que se hace es sobreescribir el valor de dni.
 * Se puede comprobar con un breakpoint despues de la creación del empleado;
 * CREACIÓN DEL EMPLEADO CON PROTOTIPO
 */
console.log('\n\n ****CREACION DEL EMPLEADO CON PROTOTIPO');
const persona = {
    nombre: 'Pepe',
    apellido: 'Paz',
    dni: '45454545R'
  },
  empleado2 = Object.create(persona);
console.log(
  `Empleado2 tiene por nombre y apellido ${empleado2.nombre} ${empleado2.apellido}. El dni de la persona es ${empleado2.dni}`
);
let propiedades = '';
for (const p in empleado2) {
  propiedades += `${empleado2[p]} `;
}
console.log(`Se recorren las propiedades de empleado2 y son: ${propiedades}`);
console.log(empleado2);
// Asignamos nuevas propiedades a empleado2
empleado2['num emp'] = 56;
empleado2.dni = '12121212D';
propiedades = '';
for (const p in empleado2) {
  propiedades += `${empleado2[p]} `;
}
console.log(`Se vuelven a recorrer las propiedades de empleado2 y son: ${propiedades}`);
console.log(empleado2);
/*
 * En este caso la propiedad propia dni oculta a la del prototipo
 * BORRAMOS la propiedad dni de empleado2
 */
delete empleado2.dni;
propiedades = '';
for (const p in empleado2) {
  propiedades += `${empleado2[p]} `;
}
console.log('Despues del borrado -> Se v');
// # sourceMappingURL=enunciados5_ObjectosEnJS_6.js.map
