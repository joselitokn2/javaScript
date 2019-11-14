/* 1. Crea un programa JS que liste las propiedades de un objeto
que represente a estudiantes y que tengan como propiedades el
nombre, el número de alumno y la clase. Crearemos el objeto
como un literal y utilizaremos la función que corresponda
para recorrerlo. */
'use strict';

let alumno = {
    nombre: 'Paz Cao',
    numero: '10',
    clase: 29
};

//La siguiente instruccion define una propiedad non numerable propia de alumno.
// No aparece en los apuntes pdf
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty
Object.defineProperty(alumno, 'religion', { value: 'catolica', enumerable: false });

//Las siguientes instrucciones definen una propiedad Symbol en vez de string
//Revisemos el pdf de Types, Values and Valiables para más información sobre Symbols
let edad1 = Symbol('edad');
alumno[edad1] = 20;
let edad2 = Symbol('edad');
alumno[edad2] = 18;

//Intencionadamente añado un nuevo atributo cuyo nombre coincide con uno de los ya declarados pero no el valor
//Lo hago de esta forma para que no parezca una modificación del anterior
//Ahora solo debería tener en cuenta esta última
Object.defineProperty(alumno, 'clase', { value: 16 });

const listar_propiedades1 = o => {
    console.log(`\nRECORRIDO DE TODAS LAS PROPIEDADES NUMERABLES PROPIAS DEL OBJETO`);
    for (let p in o) {
        //console.log(` Clave (Nombre de la propiedad): ${p} Valor ${o.p}`); //no funciona al usar for
        console.log(` Clave (Nombre de la propiedad): ${p} Valor ${o[p]}`);
    }
};

const listar_propiedades2 = o => {
    console.log(`\nAcceso mediante la funcion OBJECT.KEYS que recupera todas las claves de las propiedades numerables`);
    console.log(Object.keys(o));
    for (let k of Object.keys(o)) {
        console.log(` Clave (Nombre de la propiedad): ${k} Valor ${o[k]}`);
    }
};

const listar_propiedades3 = o => {
    console.log(
        `\nAcceso mediante la funcion OBJECT.GETOWNPROPERTYNAMES que recupera todas las claves de las propiedades numerables y no numerables`
    );
    console.log(Object.getOwnPropertyNames(o));
    for (let k of Object.getOwnPropertyNames(o)) {
        console.log(` Clave (Nombre de la propiedad): ${k} Valor: ${o[k]} Es numerable: ${o.propertyIsEnumerable(k)}`);
    }
};

const listar_propiedades4 = o => {
    console.log(
        `\nAcceso mediante la funcion OBJECT.GETOWNPROPERTYSYMBOLS que recupera todas las claves de las propiedades Symbol`
    );
    console.log(Object.getOwnPropertySymbols(o));
    for (let k of Object.getOwnPropertySymbols(o)) {
        //Con Symbol es necesario llamar a toString explicitamente
        //Sin embargo, el acceso al valor de la propiedad es igual que con los anteriores.
        //Notar que las dos propiedades symbol comparte el mismo valor de String
        console.log(` Clave (Nombre de la propiedad): ${k.toString()} Valor ${o[k]}`);
    }
};

const listar_propiedades5 = o => {
    console.log(`\nAcceso mediante la funcion REFLECT.OWNKEYS que recupera todas las propiedades`);
    console.log(Reflect.ownKeys(o));
    for (let k of Reflect.ownKeys(o)) {
        if (typeof k === 'symbol') {
            console.log(` Clave (Nombre de la propiedad): ${k.toString()} Valor ${o[k]}`);
        } else {
            console.log(` Clave (Nombre de la propiedad): ${k} Valor ${o[k]}`);
        }
    }
};

listar_propiedades1(alumno);
listar_propiedades2(alumno);
listar_propiedades3(alumno);
listar_propiedades4(alumno);
listar_propiedades5(alumno);

//Cuando extraemos las propiedades del objeto y las recorremos con let, la notación de acceso a propiedades debe ser la de array
console.log(`\nClave (Nombre de la propiedad) y Valor ${alumno.nombre}`);