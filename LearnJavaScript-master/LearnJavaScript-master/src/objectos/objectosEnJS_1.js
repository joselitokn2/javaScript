/*
 * Crea un programa JS que liste las propiedades de un objeto
 * que represente a estudiantes y que tengan como propiedades el
 * nombre, el número de alumno y la clase. Crearemos el objeto
 * como un literal y utilizaremos la función que corresponda
 *para recorrerlo.
 */

const alumno = {
  nombre: 'Paz Cao',
  numero: '10',
  clase: 29
};
/*
 * La siguiente instruccion define una propiedad non numerable propia de alumno.
 * No aparece en los apuntes pdf
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty
 */
Object.defineProperty(alumno, 'religion', {
  value: 'catolica',
  enumerable: false
});
/*
 * Las siguientes instrucciones definen una propiedad Symbol en vez de string
 * Revisemos el pdf de Types, Values and Valiables para más información sobre Symbols
 */
const edad1 = Symbol('edad');
alumno[edad1] = 20;
const edad2 = Symbol('edad');
alumno[edad2] = 18;
/*
 * Intencionadamente añado un nuevo atributo cuyo nombre coincide con uno de los ya declarados pero no el valor
 * Lo hago de esta forma para que no parezca una modificación del anterior
 * Ahora solo debería tener en cuenta esta última
 */
Object.defineProperty(alumno, 'clase', { value: 16 });
const LISTAR_PROPIEDADES1 = objecto => {
    console.log('\nRECORRIDO DE TODAS LAS PROPIEDADES NUMERABLES PROPIAS DEL OBJETO');

    for (const propiedad in objecto) {
      // Console.log(` Clave (Nombre de la propiedad): ${p} Valor ${o.p}`); //no funciona al usar for
      console.log(` Clave (Nombre de la propiedad): ${propiedad} Valor ${objecto[propiedad]}`);
    }
  },
  listarPropiedades2 = objecto => {
    console.log('\nAcceso mediante la funcion OBJECT.KEYS que recupera todas las claves de las propiedades numerables');
    console.log(Object.keys(objecto));

    for (const propiedad of Object.keys(objecto)) {
      console.log(` Clave (Nombre de la propiedad): ${propiedad} Valor ${objecto[propiedad]}`);
    }
  },
  listarPropiedades3 = objecto => {
    console.log(
      '\nAcceso mediante la funcion OBJECT.GETOWNPROPERTYNAMES que recupera todas las claves de las propiedades numerables y no numerables'
    );
    console.log(Object.getOwnPropertyNames(objecto));

    for (const propiedad of Object.getOwnPropertyNames(objecto)) {
      console.log(
        ` Clave (Nombre de la propiedad): ${propiedad} Valor: ${
          objecto[propiedad]
        } Es numerable: ${objecto.propertyIsEnumerable(propiedad)}`
      );
    }
  },
  listarPropiedades4 = objecto => {
    console.log(
      '\nAcceso mediante la funcion OBJECT.GETOWNPROPERTYSYMBOLS que recupera todas las claves de las propiedades Symbol'
    );
    console.log(Object.getOwnPropertySymbols(objecto));
    for (const propiedad of Object.getOwnPropertySymbols(objecto)) {
      /*
       * Con Symbol es necesario llamar a toString explicitamente
       * Sin embargo, el acceso al valor de la propiedad es igual que con los anteriores.
       * Notar que las dos propiedades symbol comparte el mismo valor de String
       */
      console.log(` Clave (Nombre de la propiedad): ${propiedad.toString()} Valor ${objecto[propiedad]}`);
    }
  },
  listarPropiedades5 = objecto => {
    console.log('\nAcceso mediante la funcion REFLECT.OWNKEYS que recupera todas las propiedades');
    console.log(Reflect.ownKeys(objecto));
    for (const propiedad of Reflect.ownKeys(objecto)) {
      if (typeof propiedad === 'symbol') {
        console.log(` Clave (Nombre de la propiedad): ${propiedad.toString()} Valor ${objecto[propiedad]}`);
      } else {
        console.log(` Clave (Nombre de la propiedad): ${propiedad} Valor ${objecto[propiedad]}`);
      }
    }
  };
LISTAR_PROPIEDADES1(alumno);
listarPropiedades2(alumno);
listarPropiedades3(alumno);
listarPropiedades4(alumno);
listarPropiedades5(alumno);
// # sourceMappingURL=enunciados5_ObjectosEnJS_1.js.map
