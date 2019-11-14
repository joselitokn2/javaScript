/* 2. Crea un programa JS que cree un objeto (definición literal)
que represente a estudiantes y que tengan como propiedades el
nombre, el número de alumno y la clase. A continuación, se
intentará borrar el método toString y la propiedad clase.
3. Dado el objeto anterior, consulta la longitud del objeto. ¿A
qué se refiere? */
"use strict";

let alumno = {
    nombre: "Paz Cao",
    numero: "10",
    clase: 29
};

const longitud = o => {
    return Object.keys(o).length;
}

console.log("Longitud:" + longitud(alumno));

delete alumno.clase;
//Si elimina al propiedad
console.log(alumno);
delete alumno.toString;
//Deja hacer el toString, por lo tanto, no elimina la propiedad
console.log(alumno);

console.log("Longitud:" + longitud(alumno));