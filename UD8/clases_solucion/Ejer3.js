/*3. Diseña una clase Hospital. Tendrá como atributos “nombre”,
“ciudad” y “num_pacientes” (numero de pacientes ingresados).
Cada paciente se representará como una objeto de la clase
Paciente. En ella se guardaran los atributos “DNI”,
“nombre”, “enfermedad”.
Implementa un método en Hospital que reciba el código de
paciente y se le de el alta a dicho paciencia (equivale a
eliminar al paciente). */
/*
Este fichero contiene la definición de atributos de la clase utilizando la función Object.defineProperty.
En esta función, podemos especificar si un atributo es modificable o solo lectura, configurable (se puede borrar) o iterable.
*/

'use strict';

class Hospital {
  constructor(nombre, ciudad, otro1, otro2) {
    let _nombre = nombre;
    let _ciudad = ciudad;
    let _pacientes = new Array();

    Object.defineProperty(this, 'otro1', {
      value: otro1,
      writable: false,
      configurable: false,
      enumerable: false
    });

    Object.defineProperty(this, 'otro2', {
      get() {
        console.log('Get de otro2');
        return otro2;
      },
      set(o) {
        otro2 = o;
        console.log(`set otro2 read-only ${otro2}`);
      },
      configurable: false,
      enumerable: false
    });

    this.getNombre = function() {
      return _nombre;
    };
    this.getCiudad = function() {
      return _ciudad;
    };
    this.getPacientes = function() {
      return _pacientes;
    };
    this.setPacientes = function(p) {
      _pacientes = p;
    };
  }

  ingreso_paciente(paciente) {
    this.getPacientes().push(paciente);
  }

  buscar_paciente(dni_p) {
    return this.getPacientes().find(x => x.dni === dni_p);
  }

  alta_paciente(dni_p) {
    this.setPacientes(this.getPacientes().filter(p => p.getDNI() !== dni_p));
  }

  toString() {
    return `El hospital ${this.getNombre()} situado en ${this.getCiudad()} tiene ${this.getPacientes().length} pacientes.`;
  }
}

class Paciente {
  constructor(dni_p, nombre, enfermedad) {
    let _dni = dni_p;
    let _nombre = nombre;
    let _enfermedad = enfermedad;

    this.getDNI = function() {
      return _dni;
    };
    this.getNombre = function() {
      return _nombre;
    };
    this.getEnfermedad = function() {
      return _enfermedad;
    };
    this.setNombre = function(n) {
      _nombre = n;
    };
    this.setEnfermedad = function(e) {
      _enfermedad = e;
    };
  }

  toString() {
    return `Paciente ${this.getDNI()} : ${this.getNombre()} con enfermedad ${this.getEnfermedad()}.`;
  }
}

// Pruebas
/* let Producto = new Object; */
let p1 = new Paciente('111111F', 'Leo Cox', 'pulmonía');
let p2 = new Paciente('222222R', 'Lia Seoane', 'Infección');
console.log(`El paciente p1 : ${p1}`);
console.log(`El paciente p2 : ${p2}`);

let hosp = new Hospital('Wirtz', 'A Coruña', 'otro1');
hosp.ingreso_paciente(p1);
hosp.ingreso_paciente(p2);
console.log(`Información Hospital : ${hosp}`);
hosp.alta_paciente('222222R');
console.log(`Información Hospital : ${hosp}`);

//Modificación de atributos utilizando Object.defineProperty
console.log(hosp.otro1);
let descriptores = Object.getOwnPropertyDescriptor(hosp, 'otro1');
Object.keys(descriptores).forEach(x => console.log(x + ' ' + descriptores[x]));
//hosp.otro1 = 'otro otro1';
//console.log(hosp.otro1); FAlla porque el atributo es read only
hosp.otro2 = 'otro mas';
console.log(hosp.otro2);
descriptores = Object.getOwnPropertyDescriptor(hosp, 'otro2');
Object.keys(descriptores).forEach(x => console.log(x + ' ' + descriptores[x]));
