/*
 * Enunciados 5_3_1
 * Implementa en JS un código equivalente al del ejemplo con asignación directa pero con desestructuración.
 */

const foo = ['uno', 'dos', 'tres'],
  [uno, dos, tres] = foo,
  /*
   * Enunciados 5_3_2
   * Para extraer los valores de un array usando asignación
   * desestructuración, sigue los siguientes pasos:
   * 1. Crea un array con tres valores 1, 2 y 3 y guárdalos en una
   * variable llamada datos.
   *
   * 2. Desestructura el array creado con una expresión simple.
   * Desestructura el primer valor del array en una variable
   * llamada a. Salta el segundo valor del array
   * Desestructura el tercer valor en una variable llamada b.
   * Intenta desestructurar el cuarto valor en una variable
   * llamada c y proporciona el valor 4.
   *
   * 3. Imprime de la forma que desees el valor de todas las
   * variables.
   */
  datos = [1, 2, 3];
let [a, , b, c] = datos;
c = 4;
console.log(a);
console.log(b);
console.log(c);
/*
 * Enunciados 5_3_3
 * Intercambia los valores de dos variables usando
 * desestructuración
 */
console.log('Encuniados 5_3_3');
let a1 = 1,
  b2 = 3;
[a1, b2] = [b2, a1];
console.log(a1);
console.log(b2);
/*
 * Enunciados 5_3_4
 * Dado el siguiente código que representa un objeto de la
 * predicción del tiempo con las propiedades sobre el tiempo de
 * ayer, hoy y mañana que guardan las temperaturas más altas y
 * bajas para cada día, emplea desestructuración para que
 * podamos guardar la información que corresponde en unas
 * variables llamadas bajaHoy y altaHoy. ¿Cómo sería con
 * asignación directa?
 */
console.log('Encuniados 5_3_4');
const PREDICCION_LOCAL = {
    ayer: { baja: 61, alta: 75 },
    hoy: { baja: 64, alta: 77 },
    mananha: { baja: 68, alta: 80 }
  },
  { ayer, hoy, mananha } = PREDICCION_LOCAL,
  { baja: bajaHoy, alta: altaHoy } = hoy;
console.log(` baja hoy ${bajaHoy} + alta hoy  ${altaHoy}`);
/*
 * Dado el siguiente objeto que representa las temperaturas más
 * altas de ayer, hoy y mañana, utiliza desestructuración para
 * asignar los valores que correspondan a unas variables
 *llamadas hoy y mañana.
 */
const ALTAS_TEMPERATURAS = {
    ayer: 75,
    hoy: 77,
    manhana: 80
  },
  { ayer: onte, hoy: hoxe, manhana: manhanaa } = ALTAS_TEMPERATURAS;
console.log(` baja hoy ${hoxe} + alta hoy  ${manhanaa}`);
/*
 * Dado el siguiente código que parte de una lista de números,
 * crea una función que elimine los dos primeros números del
 *array y se quede con el resto. Utiliza desestructuración.
 */
const origen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [primerNumero, segundoNumero, ...resto] = origen;
console.log(resto);
/*
 * Usando desestructuración y partiendo de dos arrays
 * inicializados directamente, implementa el código que guarda
 * los valores del array en las variables nombre, edad y
 *trabajo.
 */
const param = ['Pedro', 21, 'Desarrollador'],
  infoUsuario = ['Juan', 'Cocinero', 34];
let [nombre, edad, trabajo] = param;
console.log(nombre, edad, trabajo);
[nombre, trabajo, edad] = infoUsuario;
console.log(nombre, edad, trabajo);
/*
 * Aunque todavía no hemos creado objetos en JS, utilizando los
 * apuntes, vamos a ver una forma de desestructurar (extraer los
 * datos) las propiedades de un objeto. A partir del ejemplo de
 * código, crea el código equivalente que corresponda con la
 *desestructuración.
 */
let obj = {
  nombre: '',
  apell: ''
};
obj.nombre = 'Pepe';
obj.apell = 'Paz';
// Asignacion directa
const n = obj.nombre,
  a2 = obj.apell;
// Otra forma de definir el objeto
obj = { nombre: 'Paco', apell: 'Zas' };
// Incluye el codigo de la desestructuración
const { nombre: nombreM, apell: apellido } = obj;
console.log(nombreM, apellido);
/*
 * Siguiendo la línea del ejercicio anterior, desestructura el
 * objeto dirección que se proporciona a continuación y extrae
 *los valores de la calle y la ciudad a dos variables.
 */
const direccion = {
  calle: 'Rua Caballeros',
  numero: 7,
  ciudad: 'A Coruña',
  pais: 'España',
  cp: 15107
};
/* Let {calle, , ciudad, , , , , } = direccion; */
// # sourceMappingURL=enunciados5_3.js.map
