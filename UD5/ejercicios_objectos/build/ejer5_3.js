/* Implementa en JS un código equivalente al del ejemplo con
asignación directa pero con desestructuración. */
let foo = ["uno", "dos", "tres"];
// sin desestructuración
let uno = foo[0];
let dos = foo[1];
let tres = foo[2];
// asignación en tres lineas
// con desestructuración
[uno, dos, tres] = foo;
// asignación en una sola linea

/* 
Para extraer los valores de un array usando asignación
desestructuración, sigue los siguientes pasos:
1. Crea un array con tres valores 1, 2 y 3 y guárdalos en una
variable llamada datos.
2. Desestructura el array creado con una expresión simple.
Desestructura el primer valor del array en una variable
llamada a. Salta el segundo valor del array
Desestructura el tercer valor en una variable llamada b.
Intenta desestructurar el cuarto valor en una variable
llamada c y proporciona el valor 4.
3. Imprime de la forma que desees el valor de todas las
variables. */
console.log("Desestructuracion de un array");
let datos = [1, 2, 3];
var [a, , b, c] = datos;
c = 4;
console.log(a, b, c);

// Intercambia los valores de dos variables usando
// desestructuración
console.log("Intercambia los valores de dos variables");
let a1 = 4;
let b2 = 5;
[a1, b2] = [b2, a1];
console.log(a1, b2);

/* • Dado el siguiente código que representa un objeto de la
predicción del tiempo con las propiedades sobre el tiempo de
ayer, hoy y mañana que guardan las temperaturas más altas y
bajas para cada día, emplea desestructuración para que
podamos guardar la información que corresponde en unas
variables llamadas bajaHoy y altaHoy. ¿Cómo sería con
asignación directa? */
const PREDICCION_LOCAL = {
    ayer: { baja: 61, alta: 75 },
    hoy: { baja: 64, alta: 77 },
    mananha: { baja: 68, alta: 80 }
};
/* console.log("Prediccion del tiempo");
let { ayer, hoy, mananha } = PREDICCION_LOCAL;
let { baja: bajaHoy, alta: altaHoy } = hoy;
console.log("AltaHoy: " + altaHoy + "ºC" + "\nBajaHoy: " + bajaHoy + "ºC"); */
console.log("Prediccion del tiempo en una linea");
const { hoy: { baja: bajaHoy, alta: altaHoy } } = PREDICCION_LOCAL;
console.log("Prediccion" + "Baja: " + bajaHoy + "Alta: " + altaHoy);
/* 
//   Ejemplos:
console.log("Ejemplo");
const person1 = {
    name: 'Peter',
    age: 24,
    address: {
        street: 'Henry St',
        number: 6
    },
    phones: [657123432, 612347821, 912345678]
}; */

/* let { name, age, address: { street, number }, phones: [firstNumber, ...otherNumbers] } = person1;
console.log(firstNumber);
// 657123432
console.log(otherNumbers[1])
    // 912345678
console.log(number)
    // 6 */


/* Dado el siguiente objeto que representa las temperaturas más
altas de ayer, hoy y mañana, utiliza desestructuración para
asignar los valores que correspondan a unas variables
llamadas hoy y mañana. */
const ALTAS_TEMPERATURAS = {
    onte: 75,
    hoxe: 77,
    manhan: 80
};
console.log("Temperaturas mas altas");
/* let { onte, hoxe, manhan } = ALTAS_TEMPERATURAS;
console.log("Hoy: " + hoxe + "ºC" + "\nMañana: " + manhan + "ºC"); */
/*const*/
const { hoxe, manhan } = ALTAS_TEMPERATURAS;
console.log("Hoy: " + hoxe + "ºC" + "\nMañana: " + manhan + "ºC");




/* • Dado el siguiente código que parte de una lista de números,
crea una función que elimine los dos primeros números del
array y se quede con el resto. Utiliza desestructuración. */
const origen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Eliminar primeros numeros");
let [primerNumber, segundo, ...restNumbers] = origen;
console.log(restNumbers);

// Ejemplo:
console.log("Ejemplo");
const myArray = [1, 2, 3, 4];

let [first, ...rest] = myArray;
console.log(first);
// 1
console.log(rest[0])
    // 2
console.log(rest[2])
    // 4

/* • Usando desestructuración y partiendo de dos arrays
inicializados directamente, implementa el código que guarda
los valores del array en las variables nombre, edad y
trabajo. */
const param = ["Pedro", 21, "Desarrollador"];
const infoUsuario = ["Juan", "Cocinero", 34];
console.log("Guardar valores array");

// let [nombre, edad, trabajo] = param;
//console.log(nombre + edad + trabajo);

/* let */
const [nombre, trabajo, edad, ] = infoUsuario;
console.log(nombre + edad + trabajo);



/* const person2 = {
    name: 'Peter',
    age: 24,
    address: {
        street: 'Henry St',
        number: 6
    }
};

{ name, age, address: { street, number } } = person2;
console.log(street);
// Henry St
console.log(number)
    // 6  */


/* • Aunque todavía no hemos creado objetos en JS, utilizando los
apuntes, vamos a ver una forma de desestructurar (extraer los
datos) las propiedades de un objeto. A partir del ejemplo de
código, crea el código equivalente que corresponda con la
desestructuración. */
let obj = {};
obj.name = "Pepe";
obj.apell = "Paz";
//Asignacion directa
/* let n = obj.nombre;
let m = obj.apell; */
/*//otra forma de definir el objeto
obj = { nombre: "Paco", apell: "Zas" }; */
console.log("Guardar valores array");
//Incluye el codigo de la desestructuración
const { name, apell } = obj;
console.log(name, apell);


/* • Siguiendo la línea del ejercicio anterior, desestructura el
objeto dirección que se proporciona a continuación y extrae
los valores de la calle y la ciudad a dos variables. */
const direccion = {
    calle: "Rua Caballeros",
    numero: 7,
    ciudad: "A Coruña",
    pais: "España",
    cp: 15107,
};
let { calle, ciudad } = direccion;
console.log(calle + " " + ciudad);
/* • Desestructuración de una función. Vamos a utilizar un objeto
persona que tiene las propiedades peso y alto. Y vamos a
crear una función que calcule el índice de masa corporal (BMI
= peso/alto). Deberás crear el objeto persona y la función
que corresponda no desestructurada y desestructurada. Utiliza
el ejercicio anterior para guiarte y los apuntes. */
//Crear el objeto siguiendo el código ejemplo anterior
// Funcion no desestructurada BMI
// Funcion desestructurada BMI
const persona = {
    peso: 70,
    alto: 182

};

function bmi(persona /*{peso, alto}*/ ) {
    return persona.peso / persona.alto;
}