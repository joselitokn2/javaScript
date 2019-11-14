/* 2. Implementa en JS un código que elimine los elementos de la
derecha de un array especificando una determinada posición. */

"use strict"
//Comentar y descomentar según convenga

//Solución con el metodo slice
function eliminar_de_la_derecha(arr, n = -1) {
    return arr.slice(0, n);
}

//Solución modificando la propiedad de array length
function eliminar_de_la_derecha2(arr, n = 1) {
    arr.length = arr.length - n;
}

let a = [1, 2, 3];
console.log(`Prueba 1: ${eliminar_de_la_derecha(a)}`);
console.log(`Array original: ${a}`); //slice no modifica a
console.log(`Prueba 2: ${eliminar_de_la_derecha(a, -1)}`);
console.log(`Prueba 3: ${eliminar_de_la_derecha(a, -2)}`);
console.log(`Prueba 4: ${eliminar_de_la_derecha(a, -4)}`);

a = [1, 2, 3];
eliminar_de_la_derecha2(a);
console.log(`Prueba 1: ${a}`);
a = [1, 2, 3];
eliminar_de_la_derecha2(a, 1);
console.log(`Prueba 2: ${a}`);
a = [1, 2, 3];
eliminar_de_la_derecha2(a, 2);
console.log(`Prueba 3: ${a}`);
//Falla porque modificamos length a un valor no válido
/* a = [1, 2, 3];
eliminar_de_la_derecha2(a, 4);
console.log(`Prueba 4: ${a}`); */