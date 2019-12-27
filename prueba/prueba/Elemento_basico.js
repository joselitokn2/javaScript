'use strict'

class Elemento_basico extends Componente{
    constructor (nombre, ejemplares){
        super();
        let _nombre = nombre;
        let _ejemplares = ejemplares;

        this.getNombre = function(){ return _nombre; }
        this.getNumEjemplaresTotales = function(){ return _ejemplares; }
    }
    
    /*
    Un elemento_basico se supone que tiene una altura cero porque no tiene más componentes por debajo de él
    */
    getAltura() { 
        return 0;
    }
    /**
     * IMPLEMENTA con string templates
     */
    toString () { 
        return `Elemento_basico: nombre ${this._nombre} , ejemplares ${this._ejemplares}`;
    }
}

