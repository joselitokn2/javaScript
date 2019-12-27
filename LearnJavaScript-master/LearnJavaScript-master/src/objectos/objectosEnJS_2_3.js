/*
 * 2. Crea un programa JS que cree un objeto (definición literal)
 * que represente a estudiantes y que tengan como propiedades el
 * nombre, el número de alumno y la clase. A continuación, se
 * intentará borrar el método toString y la propiedad clase.
 * 3. Dado el objeto anterior, consulta la longitud del objeto. ¿A
 *qué se refiere?
 */

const alumno1 = {
    nombre: 'Paz Cao',
    numero: '10',
    clase: 29
  },
  longitud = objecto => {
    return Object.keys(objecto).length;
  };
console.log(longitud(alumno1));
delete alumno1.clase;
// Si elimina al propiedad
console.log(alumno1);
delete alumno1.toString;
// Deja hacer el toString, por lo tanto, no elimina la propiedad
console.log(alumno1);
console.log(longitud(alumno1));
