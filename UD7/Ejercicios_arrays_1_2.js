/* 1. Implementa en JS un código que elimine los elementos de la
izquierda de un array especificando una determinada posición. */
const colores = ['amarillo', 'anaranjado', 'azul', 'rojo', 'verde'];
console.log('ELIMINANDO ELEMENTOS POR LA IZQUIERDA SEGUN POSICION');
colores.splice(0, 1); //POSICION CERO ELIMINO EL UNO
console.log(colores);

/* 2. Implementa en JS un código que elimine los elementos de la
derecha de un array especificando una determinada posición. */
console.log('ELIMINANDO ELEMENTOS POR LA DERECHA SEGUN POSICION');

colores1 = ['amarillo', 'anaranjado', 'azul', 'rojo', 'verde'];
colores1.splice(4, 1); //POSICION CUATRO ELIMIANMOS UNO
console.log(colores1);

/*3. Implementa en JS un programa para recuperar los elementos de
un array con un salto x. Es decir, si le especificamos x con
un valor 2, nos deberá devolver cada dos elementos del array.
Si especificamos el valor 3, nos deberá devolver cada 3
elementos del array.
Para resolverlo, utiliza las posiciones dentro del array. */
var readlineSync = require('readline-sync');
console.log('DEVOLVER ELEMENTOS DE UN ARRAY');
devolver();

function devolver() {
    x = parseInt(readlineSync.question('Introduce numero de elementos a devolver : '));
    const array = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    array.length = x;
    console.log(array);

    console.log(array);
}
/* 4. Implementa en JS un programa que filtre los valores de un
array que no se repitan. */
console.log('FILTRADO DE VALORES DE UN ARRAY');
const frutas = ['apple', 'banana', 'banana', 'grapes', 'mango', 'orange'];
frutasNoRepetidas = [
    ...new Set(frutas)
]; /* ... Es un operador de propagación que nos permite convertir el conjunto en un array */
console.log(frutasNoRepetidas);

/* 5. Implementa en JS un programa que filtre los elementos de un
array que no están incluidos dentro de un conjunto de
valores. Solo se puede utilizar un único array en la creación
literal para las pruebas, es decir, el conjunto de valores no
se puede representar como un array. */

const myArr = ['la', 'donna', 'e', 'mobile', 'cual', 'piuma', 'al', 'vento'];
let valores = ('donna', 'e', 'mobile');

console.info(myArr.includes(...valores)); // true

/* 6. Implementa en JS un array bidimensional que contendrá los
pares de clave-valor de un objeto dado. */
const objetoDado = ((clave = 1), (valor = 3));
const objetoDado2 = ((clave = 2), (valor = 3));
var nuevoArray = new Array(2);
nuevoArray[0] = new Array(2);
nuevoArray[1] = new Array(2);
//Metemos un dato en cada posición
nuevoArray[0][0] = objetoDado.clave;
nuevoArray[0][1] = objetoDado.valor;
nuevoArray[1][0] = objetoDado2.clave;
nuevoArray[1][1] = objetoDado2valor;