/* 8. Implementa en JS el borrado de las propiedades de un objeto
cuyas claves están incluidas en un array de claves. Utiliza
reduce para generar un nuevo objeto. */

//Genera un nuevo objeto con las propiedades y los valores que pide el enunciado
const eliminar = (objecto, array) =>
    Object.keys(objecto) //Parte del array de claves del objeto
    .filter(elemento => !array.includes(elemento)) //Eimina del array de claves aquellas que no están incluidas en arr
    //acc es el nuevo objeto que devuelve la función. Empieza siendo vacío {} y se va llenando en la variable objeto acc con la clave
    //clave resultado del filtrado anterior y un valor igual al del objeto inicial.
    //.reduce((acc, clave) => ((acc[clave] = obj[clave]), acc), {});
    .reduce((nuevoObjecto, clave) => { nuevoObjecto[clave] = objecto[clave]; return nuevoObjecto; }, {}); //{}OBJECTO VACIO por eso empieza por el cero accedemos al objecto clave que es el valor

/* La primera notación referente a la función de reduce podríamos decir que es (acc[clave] = obj[clave]) y con esto ya modificaríamos
acc que es donde guardamos el objeto final que queremos devolver. Sin embargo, una asignación lo que devuelve es lo que asigna y,
si solo escribimos esto, el resultado se acumularía en el valor que tenga obj[clave]. Como lo que queremos es que devuelva acc para
que acumule en este objeto las otras propiedades, es lo que debemos devolver*/

let a = ['b'];
let o = { a: 1, b: '2', c: 3 };
console.log(eliminar(o, a));
console.log(eliminar({ a: 1, b: 2, c: 3 }, ['c']));

//EJEMPLO
let c = [1, 2, 3, 4, 5]
c.reduce((x, y) => x + y, 0) // => 15; the sum of the values
c.reduce((x, y) => x * y, 1) // => 120; the product of the valu
c.reduce((x, y) => (x > y) ? x : y) // => 5; the largest of the values

/** 
 * let obj = { a: 1, b: '2', c: 3 }; [a,b,c]
 * acc{} acc a:1
 * clave=a
 * 
 * clave=b
 * acc{a:2
 * b:2}
 * 
 * clave=c
 * acc{a:2
 * b:2
 * c:3}
 */