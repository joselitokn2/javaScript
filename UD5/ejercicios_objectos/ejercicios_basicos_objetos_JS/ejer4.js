/**
 * Este archivo js contiene:
 * - La declaración de un array (biblioteca) de forma directa donde cada elemento es un objeto que representa un libro que tiene propiedades titulo, autor y si esta prestado
 * - La declaración de tres funciones (prestadosForIn, prestadosForOf, prestadosForEach) que intentan recorrer el array anterior para extaer información sobre el libro y si está prestado.
 *   Todas devuelven un array bidimensional que guarda el titulo y el booleano de prestamo en cada posicion.
 * - La declaración de una función (recorrer) que recorre la salida de las funciones anteriores (el array bidimensional.)
 * Además contiene:
 * - Un ejemplo de aplicación de una expresión condicional con el operador ternario en una expresión string template.
 * - Un ejemplo de desestructuración de un objeto en una iteración.
 * - Un ejemplo de desestructuración de un array en una iteración.
 * 
 * Para probar el archivo, mejor comentar y descomentar el código correspondiente a cada tipo de recorrido.
 */
/* 4. Crea un array que represente una biblioteca. Cada libro será
un objeto creado de forma literal. Un libro tendrá como
propiedades título, autor y si está prestado o no.
Una vez creada la biblioteca, consulta el estado de todos
los libros. */

"use strict";

//Array biblioteca donde cada elemento es un objeto libro
let biblioteca = [{
        titulo: "Fundamentos de sistemas de bases de datos",
        autor: "Elmasri",
        prestado: true,
    },
    {
        titulo: "JavaScript: The Definitive Guide, 7th Edition",
        autor: "Flanagan",
        prestado: false,
    },
    {
        titulo: "Mathematical Logic",
        autor: "Turing",
        prestado: true,
    }
];

//A CONTINUACIÓN, VAMOS A PROBAR DIFERENTES FORMAS DE RECORRER EL ARRAY

/**
 * RECORRIDO USANDO EL ITERADOR FOR IN
 * @param {*} biblio 
 */
const prestadosForIn = function(biblio) {
        console.log("\nRECORRIDO CON EL ITERADOR FOR IN")
        for (let l in biblio) { //Con este recorrido solo salen los indices del array: 0 1 y 2
            console.log(`Solo escribe la posición ${l}, sin poder acceder a más ${l.titulo}`);
        }
    }
    /* Por que no "funciona" este iterador? 
    Pues porque, si retomamos el archivo ejer1.js del primer ejercicio, veremos que solo sirve para recorrer propiedades de un objeto.
    En este caso, el objeto sería el array en donde la clave (Key) sería el índice y el valor, pues undefined.
    Ver la imagen salida del depurador adjunta en las soluciones.
     */

/**
 * RECORRIDO USANDO EL ITERADOR FOR OF
 * @param {*} biblio 
 */
const prestadosForOf = function(biblio) {
    let info = [];
    console.log("\nRECORRIDO CON EL ITERADOR FOR OF")
        //Ejemplo de desestructuración en un objeto, no usamos [] porque es un objeto.
    for (let { titulo, prestado }
        of biblio) {
        let dato = [];
        dato[0] = titulo;
        dato[1] = prestado;

        //console.log(dato); //Hace el toString del array dato
        info.push(dato);
        //console.log(`Libro procesado ${l} pero toString no se aplica según lo esperado`);
        //console.log("Libro procesado " + l + " pero toString no se aplica según lo esperado"); //Funciona igual al anterior
        //console.log(l);
        //console.log(`Libro procesado ${l.titulo} con autor ${l["autor"]}`);
    }
    return info;
}

/**
 * RECORRIDO USANDO EL ITERADOR FOR EACH
 * @param {*} biblio 
 */
const prestadosForEach = function(biblio) {
    let info = [];
    console.log("\nRECORRIDO CON EL ITERADOR FOR EACH")
        //Notad la diferencia en la implementación entre foreach y los anteriores.
    biblio.forEach(libro => {
        let dato = [libro.titulo, libro["prestado"]];
        info.push(dato);

        //La salida se comporta igual que en la función anterior. 
        console.log(`Libro procesado ${libro} pero toString no se aplica según lo esperado`);
        console.log("Libro procesado " + libro + " pero toString no se aplica según lo esperado");
        console.log(libro);
        console.log(`Libro procesado ${libro.titulo} con autor ${libro["autor"]}`);
    });
    return info;
}

console.log(`Ejemplo de acceso directo al array, sin función de por medio ${biblioteca[0].titulo}`);

/**
 * A CONTINUACIÓN, RECORREMOS LA SALIDA DE LAS FUNCIONES. SOLO CON FOR OF, EN ESTE CASO
 * @param {*} prestados 
 */
const recorrer = function(prestados) {
    //Ejemplo de desestructuracion en un array
    for (let [titulo, prestado] of prestados) {
        //for(let dato of prestados) -> codigo sin desestructurar
        //Ejemplo de una expresion condicional aplicada en un string template
        console.log(`El libro ${titulo} está ${prestado ? 'prestado' : 'no prestado'}`);
        //console.log(`El libro ${dato[0]} está ${dato[1] ? 'prestado' : 'no prestado'}`); -> codigo sin desestructurar
    }
}

let informacion = null;
//informacion = prestadosForIn(biblioteca);
console.log("\n RECORRER SALIDA FOR OF");
informacion = prestadosForOf(biblioteca);
recorrer(informacion);
//informacion = prestadosForEach(biblioteca);
//console.log("\n RECORRER SALIDA FOR EACH");
//recorrer(informacion);
for (let l of biblioteca) {
    let dato = [];
    dato[0] = l.titulo,
        dato[1] = l['prestado'];
    console.log(dato);
}