/**
 * LeerTresNumeros y que nos diga el mas alto
 */

 
let list: Array<number> = [10,28,3]
let maximo: number = 0;
list.forEach(numero => {
    if(maximo < numero)
    maximo = numero;
});

console.log(maximo);
/* Dado dia y mes nos diga si es navidad
*/

let diaNavidad: number = 24;
let mesNavidad: number = 12;

console.log("Escribe el dia");
var dia = process.openStdin();


console.log("Escribe el mes");
var mes = process.openStdin();

