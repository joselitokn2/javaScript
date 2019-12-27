/**Implementa en JS el borrado de las propiedades de un objeto
cuyas claves están incluidas en un array de claves. Utiliza
reduce para generar un nuevo objeto. */

//Genera un nuevo objeto con las propiedades y los valores que pide el enunciado
const eliminar = (objecto, arrayDeClaves) =>
  Object.keys(objecto) //Parte del array de claves del objeto
    .filter(elemento => !arrayDeClaves.includes(elemento))
    .reduce((nuevoObjecto, clave) => {
      nuevoObjecto[clave] = objecto[clave];
      return nuevoObjecto;
    }, {});

//Eimina del array de claves aquellas que no están incluidas en arr
//acc es el nuevo objeto que devuelve la función. Empieza siendo vacío {} y se va llenando en la variable objeto acc con la clave
//clave resultado del filtrado anterior y un valor igual al del objeto inicial.
//.reduce((acc, clave) => ((acc[clave] = obj[clave]), acc), {});

/* La primera notación referente a la función de reduce podríamos decir que es (acc[clave] = obj[clave]) y con esto ya modificaríamos
acc que es donde guardamos el objeto final que queremos devolver. Sin embargo, una asignación lo que devuelve es lo que asigna y,
si solo escribimos esto, el resultado se acumularía en el valor que tenga obj[clave]. Como lo que queremos es que devuelva acc para
que acumule en este objeto las otras propiedades, es lo que debemos devolver*/

let a = ['b'];
let o = { a: 1, b: '2', c: 3 };
console.log(eliminar(o, a));
console.log(eliminar({ a: 1, b: 2, c: 3 }, ['c']));
