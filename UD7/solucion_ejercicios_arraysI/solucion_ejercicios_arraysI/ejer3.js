//La notación de array de JS para ciertas funciones predefinidas especifica así, por defecto, el orden de los parámetros
//e es el valor del array, i es el indice
const cada_x = (arr, salto) => arr.filter((elemento, index) => index % salto === salto - 1); //asi empieza en el uno sino ponemos ===0;
let almacen = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(`Prueba 1: ${cada_x(almacen, 1)}`);
console.log(`Prueba 2: ${cada_x(almacen, 2)}`);
console.log(`Prueba 3: ${cada_x(almacen, 3)}`);
console.log(`Prueba 4: ${cada_x(almacen, 4)}`);
console.log(`Array original: ${a}`); //filter no modifica a