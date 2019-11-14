"use strict";
/**
 * LeerTresNumeros y que nos diga el mas alto
 */
var list = [10, 28, 3];
var maximo = 0;
list.forEach(function (numero) {
    if (maximo < numero)
        maximo = numero;
});
console.log(maximo);
/* Dado dia y mes nos diga si es navidad
*/
var diaNavidad = 24;
var mesNavidad = 12;
console.log("Escribe el dia");
var dia = process.openStdin();
console.log("Escribe el mes");
var mes = process.openStdin();
