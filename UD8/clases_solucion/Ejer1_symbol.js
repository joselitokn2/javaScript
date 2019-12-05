'use strict';
/* 1. Diseña una clase colegio. Tendrá como atributos nombre,
numero de aulas y alumnos.
Cada alumno se representará como una objeto de la clase
Alumno. En ella se guardaran los atributos “DNI”, “nombre” y
“nota_media”.
Implementa métodos en colegio y alumno para modificar la
nota media de un alumno y que nos permita consultar la media
de todo el colegio y cuántos alumnos hay. */
// Clase alumno
class Alumno {
  constructor(dni, nombre, notaMedia) {
    //La nueva notación para declarar atributos privados es usando # , por ejemplo, this.#dni. Pero todavía parece que no está soportada
    // si queremos definir un atributo privado, deberemos usar los scopes.
    let _dni = dni;
    this.getDNI = function() {
      return _dni;
    };
    // Los atributos nombre y notamedia declarados de esta forma, en realidad son públicos.
    // Aunque declaremos getter y setter para nombre, se podrá acceder a _nombre. Lo mismo para notaMedia.
    this._nombre = nombre;
    this._notaMedia = notaMedia;
  }

  //get dni() { return this._dni; }
  get nombre() {
    return this._nombre;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get notaMedia() {
    return this._notaMedia;
  }
  set notaMedia(n) {
    this._notaMedia = n;
  }

  toString() {
    return `Alumno: dni ${this._dni} ,  nombre ${this._nombre} , nota media ${this._notaMedia}`;
  }
}

// Clase colegio
let nom = null; //(*****) Simplemente es para poder acceder al atributo desde fuera
class Colegio {
  constructor(nombre, nAulas) {
    //Otra forma de hacer el atributo nombre privado: utilizar Symbol
    //this._nombre = Symbol(nombre); Solución anterior sin sentido
    let _nombre = Symbol('nombre');
    nom = _nombre; //(*****)
    this[_nombre] = nombre;
    this._nAulas = nAulas;
    this._alumnos = new Array();

    this.getNombre = function() {
      return this[_nombre];
    }; //Debemos usar esta notación de array porque si no, nos estamos refiriendo al atributo _nombre
  }

  //get nombre() { return this._nombre; } Con esta solución devuelve undefined porque el atributo _nombre no existe
  //set nombre(n) { this._nombre = n; }
  //Si utilizamos este código y la propiedad se llama this.nombre en vez de this._nombre,
  //set nombre implementa this.nombre que a su vez llama a set nombre .... -> llamada recursiva
  //set nombre(n) { this.nombre = n; }
  set nombre(n) {
    this._nombre = n;
  }

  get numero_aulas() {
    return this_nAulas;
  }
  set numero_aulas(n) {
    return (this._nAulas = n);
  }

  //CUIDADO: SINTAXIS INCORRECTA. ESPERABA METODO
  //function matricular_alumno(alumno) {
  //matricular_alumno =  function (alumno) {
  matricular_alumno(alumno) {
    this._alumnos.push(alumno);
  }

  consultar_alumno(dni) {
    return this._alumnos.find(a => a.getDNI() == dni);
  }

  cambiar_media_alumno(dni, media_nueva) {
    this.consultar_alumno(dni).notaMedia = media_nueva;
  }

  numero_alumnos() {
    return this._alumnos.length;
  }

  media_Colegio() {
    let sum = this._alumnos.reduce((suma, a) => suma + a.notaMedia, 0);
    return sum / this._alumnos.length;
  }
}

//PRUEBAS
let colegio = new Colegio('Wirtz', 10);
let al1 = new Alumno('11447788D', 'Lola', 8);
let al2 = new Alumno('22334455F', 'Pepe', 6);

console.log(
  `Acceso a atributo de alumno privado dni por closure : ${al1.getDNI()} y acceso a la variable atributo :  ${al1._dni}`
);
console.log(`Acceso a atributo de alumno nombre por get: ${al1.nombre} y acceso a la variable atributo :  ${al1._nombre}`);
//Si no metemos nombre en un closure como dni, no lo haremos privado completamente

colegio.matricular_alumno(al1);
colegio.matricular_alumno(al2);

console.log(`\nConsultamos que el alumno esté matriculado ${colegio.consultar_alumno('11447788D')}`);

colegio.cambiar_media_alumno('22334455F', 7);
console.log(`Cambio nota media antes era 6 : ${colegio.consultar_alumno('22334455F').toString()}`);

console.log(`Nota media del colegio : ${colegio.media_Colegio()}`);

//Probamos el acceso al atributo Symbol de colegio sin tener en cuenta las líneas //(*****)
console.log(`\nPROBAMOS A LLAMAR AL ATRIBUTO SIN USAR LA REFERENCIA A LA CLAVE SYMBOL`);
console.log(`Acceso a atributo de colegio nombre por get: ${colegio.getNombre()}`);
console.log(`Acceso a atributo de colegio nombre por la variable :  ${colegio._nombre}`); //No existe tal atributo
console.log(`Claves (no symbol) del objeto colegio : ${Object.keys(colegio)}`);
colegio._nombre = 'otro';
console.log(`Acceso a atributo de colegio nombre por la variable :  ${colegio._nombre}`);
console.log(`Claves (no symbol) del objeto colegio : ${Object.keys(colegio)}`);
delete colegio._nombre;
/*
Por qué se dice que Symbol nos permite crear atributos privados si seguimos 
necesitando meterlo en un closure para que no sea modificable?
Porque este atributo no se va a a reescribir con otro atributo que se llame igual.
*/
//Probamos el acceso al atributo Symbol de colegio teniendo en cuenta las líneas //(*****)
console.log(`\nPROBAMOS A LLAMAR AL ATRIBUTO USANDO LA REFERENCIA A LA CLAVE SYMBOL`);
console.log(`Acceso a atributo de colegio nombre por la clave symbol: ${colegio[nom]}`);
console.log(`Claves (no symbol) del objeto colegio : ${Object.keys(colegio)}`);
colegio[nom] = 'otro mas';
console.log(`Acceso a atributo de colegio nombre por la variable :  ${colegio[nom]}`);
console.log(`Claves (no symbol) del objeto colegio : ${Object.keys(colegio)}`);
