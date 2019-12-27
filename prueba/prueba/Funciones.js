'use strict'

/**
 * Atributo global que representa el contenedor general de ejemplares.
 * Todos los componentes que se añadan serám, bien ejemplares de este compuesto,
 * bien ejemplares de un compuesto de los ejemplares de este compuesto. Es decir,
 * no habrá una componente que tenga más altura que este.
 */
let compuesto = null;

/**
 * OJO!!! la implementación debe funcionar con los datos ejemplo que se detallan a continuación.
 * Aunque se pueden modificar para probar las clases.
 * El autor que se pide añadir, no debería influir en el funcionamiento de la presentación de la tabla en el navegador.
 */
const generarEjemploPrueba = function(){
    //listaproductos = [];
    compuesto = new Compuesto("Red de Bibliotecas");

    //Añhadimos los libros por titulo y ejemplares
    let elA1 = new Elemento_basico('Elmasri titulo 1', 3);
    let elA2 = new Elemento_basico('Elmasri titulo 2', 2);
    let elA3 = new Elemento_basico('Elmasri titulo 3', 1);

    //Creamos el autor  auB1, al que pertenecen los libros elAX
    let auB1 = new Compuesto('Autor Elmasri');
    auB1.anhadirEjemplares(elA1);
    auB1.anhadirEjemplares(elA2);
    auB1.anhadirEjemplares(elA3);

    //console.log(auB1.getNumEjemplaresTotales() + " " + auB1.getAltura());
    //console.log(auB1.toString());

    //Creamos más libros otro autor
    let elB1 = new Elemento_basico('titulo Neruda 1', 4);
    let elB2 = new Elemento_basico('titulo Neruda 2', 5);
    let elB3 = new Elemento_basico('titulo Neruda 3', 6);
    //Creamos otro autor
    let auB2 = new Compuesto('Autor Neruda');
    auB2.anhadirEjemplares(elB1, elB2, elB3);

    /**
     * IMPLEMENTA:
     *  crea un autor más para la biblioteca 'Biblioteca Municipal'
     *  asocia a este autor un par de libros nuevos.
     */
    ...

    //creamos biblio
    let bibC1 = new Compuesto('Biblioteca Municipal');
    bibC1.anhadirEjemplares(auB1,auB2,);
    
    //Creamos mas libros
    let elC1 = new Elemento_basico('titulo Turing 1', 3);
    let elC2 = new Elemento_basico('titulo Turing 2', 2);
    let elC3 = new Elemento_basico('titulo Turing 3', 1);
    let elC4 = new Elemento_basico('titulo Turing 4', 1);

    //Creamos el autor
    let auB3 = new Compuesto('Autor Turing');
    auB3.anhadirEjemplares(elC1, elC2, elC3, elC4);

    auB3.borrarEjemplar('titulo tur 4');

    //Creamos biblio
    let bibC2 = new Compuesto('Biblioteca Facultad de Historia');
    bibC2.anhadirEjemplares(auB3);

    compuesto.anhadirEjemplares(bibC1,bibC2);

    crearTabla();

}

/** 
 * Función que crea la cabecera de la tabla y, a continuación, 
 * llama a la función desplegar para crear el cuerto utilizando la variable global compuesto
*/
const crearTabla = function(){

    let cuerpo = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    cuerpo.appendChild(tabla);
    let thead_el = document.createElement("thead");
    let tbody_el = document.createElement("tbody");
    tabla.appendChild(thead_el); tabla.appendChild(tbody_el);
    //Relleno cabecera Nombre columnas
    let tr_cabecera = document.createElement("tr");
    let td_cab = document.createElement("th");
    let txt_cab = document.createTextNode(" ");
    td_cab.appendChild(txt_cab);
    tr_cabecera.appendChild(td_cab);
    td_cab = document.createElement("th");
    txt_cab = document.createTextNode("Nombre");
    td_cab.appendChild(txt_cab);
    tr_cabecera.appendChild(td_cab);
    td_cab = document.createElement("th");
    txt_cab = document.createTextNode("Ejemplares");
    td_cab.appendChild(txt_cab);
    tr_cabecera.appendChild(td_cab);
    thead_el.appendChild(tr_cabecera);
    //Relleno/creación del cuerpo de la tabla
    desplegar(new RepresentacionComponente(compuesto, tbody_el, false));

}

/** 
 * En esta función tiene como parámetro un objeto de la clase RepresentacionComponentes.
 * Lo que se chequea es que, en el caso de que tenga ejemplares/componente anidados, se revisa el valor de desplegado.
 * Si no está desplegado (false), entonces, se añadirán nuevas filas a la tabla (anhadirTr) con sus ejemplares.
 * Si está desplegado (true), entonces, se eliminarán todoas las filas que correspondan a los ejemplares que estén por debajo de él.
 * Sean ejemplares directos o ejemplares de ejemplares que estén en un nivel de anidamiento inferior.
 * Una vez se despliegue o repliegue el objeto repcomp, su estado de desplegado debe cambiar.
*/
const desplegar = function (repcomp){
    /**
     * IMPLEMENTA: 
     * la extracción de los valores de repcomp utilizando desestructuración segundo las variables que se usan en el código (comp y after)
     * Utiliza renombrado de variables cuando sea necesario, es decir, 
     * las variables comp y after no coincidirán en nombre con el de los atributos/propiedades de la clase RepresentacionComponente
     */
    ...
    let siguiente = repcomp;
    let ultimo = repcomp.siguiente;
    if(comp.getAltura() > 0){
        if( (desplegado === false)){
            repcomp.desplegado = true;
            //Hacemos una copia de los ejemplares porque la función reverse modifica el array original
            let ejemplares = [...comp.getEjemplares()].reverse();
            ejemplares.forEach(c => {
                siguiente = anhadirTr(c,after,siguiente);
            });
            siguiente.siguiente = ultimo;
        }
        else{
            let ejemplares = [...comp.getEjemplares()];
            let sig = repcomp.siguiente;
            ejemplares.forEach(c => {
                eliminarTr(sig);
                repcomp.siguiente = sig.siguiente;
                sig = sig.siguiente;

            });
            repcomp.desplegado = false;
        }
    }
}

/** 
 * Función que elimina las filas de la tabla para replegar un componente.
*/
const eliminarTr = function(repcomp){
    /**
     * IMPLEMENTA: 
     * la extracción de los valores de repcomp utilizando desestructuración segundo las variables que se usan en el código (tr)
     * Utiliza renombrado de variables cuando sea necesario, es decir, 
     * la variable tr no coincidirá en nombre con el de los atributos/propiedades de la clase RepresentacionComponente
     */
    ...
    let ejemplares = componente.getEjemplares();
    let hermano = tr;
    if(desplegado){
        let sig = repcomp;
        ejemplares.forEach( v => {    
            eliminarTr(sig.siguiente);
            sig = sig.siguiente;
            repcomp.siguiente = sig.siguiente;
        });    
    }
    tr.remove();
}

/** 
 * Función que añade las filas a la tabla
*/
const anhadirTr = function(comp, after, repcomp){
    let tr = document.createElement("tr");
    let td_desp = document.createElement("td");
    let subrepcomp = new RepresentacionComponente(comp,tr,false);
    repcomp.siguiente = subrepcomp;
    /**
     * IMPLEMENTA: la asociación del evento pinchar con el ratón a td_desp que llama a desplegar con la nueva RepresentacionComponente creada.
     * La aociación del evento debe hacerse mediante una forma diferente a la de la carga de la ventana.
     */
    ...

    //Si no es nodo hoja, escribimos + para desplegar
    let td_txt = null;    
    (comp.getAltura()===0) ? td_txt = document.createTextNode(" ") : td_txt = document.createTextNode("+");
    td_desp.appendChild(td_txt);
    tr.appendChild(td_desp);
    /**
     * IMPLEMENTA: la creación del/de los elementos del DOM que permiten añadir a la fila tr una columna que contiene el nombre del componente.
     * Esta columna debe pertenecer a la clase css "desplazamiento"
     */
    ...

    td_desp = document.createElement("td");
    td_txt = document.createTextNode(comp.getNumEjemplaresTotales());
    td_desp.appendChild(td_txt);
    tr.appendChild(td_desp);
    after.insertAdjacentElement("afterend",tr);
    //Hasta que no se añade al dom, no se puede recuperar el estilo
    /**
     * IMPLEMENTA: en el elemento columna creado por ti en el paso anterior, modifica el estilo para el margen izquierdo (paddingLeft) 
     * sea proporcional a la altura de componente. 
     * Ayúdate el fichero css para hacerlo.
     */
    ...

    return subrepcomp;
}

/**
 * IMPLEMENTAR: la asociación del evento que hace que con la carga de la ventana,
 * se ejecute la función generarEjemploPrueba()
 */
...