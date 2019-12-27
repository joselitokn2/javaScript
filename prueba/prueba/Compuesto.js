'use strict'

class Compuesto extends Componente{
    constructor(nombre){
        super();
        let _nombre = nombre;
        let _elementos = [];

        this.getNombre = function(){ return _nombre; }
        this.getEjemplares = function (){ return _elementos; }
    }

    /**
     * IMPLEMENTA utilizando reduce
     * Función que informa sobre la altura de un nodo en el árbol, es decir, del número de
     * nodos que hay desde unha hoja hasta el nodo que está siendo procesado.
     * Nos diría cuántos elementos Componente hay desde un Elemento_basico, 
     * hasta el Compuesto que está siendo procesado. 
     * Es decir, la altura de los hijos, más un nivel.
     */
    getAltura(){
        return this.getNumEjemplaresTotales
        return this.getEjemplares().reduce((a,b) => b.getNumEjemplaresTotales() + a, 1);
    }

    /**
     * IMPLEMENTA
     * Función qe permite añadir ejemplares al compuesto pasándolos como una lista separada con comas.
     * No debe importar el númeró de argumentos que se usen en la llamada, es decir,
     * debe funcionar tanto si se pansan 2, como 3 o 4 o más ejemplares. 
     */
    anhadirEjemplares  function(...args) {
       
        args.array.forEach(element => {
            this._elementos.push(element);
            
        });
    }
    

    /**
     * IMPLEMENTA
     * Función que, dado un nombre de un componente de un ejemplar, lo borra.
     * Primero recupera el índice del ejemplar cuyo nombre coincide con el del parámetro.ç
     * A continuación, modifica el array para borrarlo.
     */
    borrarEjemplar = function (nombre){
        ...
    }
    
    getNumEjemplaresTotales(){
        return this.getEjemplares().reduce((a,b) => b.getNumEjemplaresTotales() + a, 0);
    }

    /**
     * IMPLEMENTA con string templates y que se imprima también la información referente a los ejemplares.
     */
    toString(){
        return `Nombre: nombre ${this._nombre} , elementos ${this._elementos}`;
    }
}

