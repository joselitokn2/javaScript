/* 2. Diseña una clase Aeropuerto. Tendrá como atributos nombre,
ciudad y numero de vuelos diarios nacionales.
Cada vuelo diario se representará como un objeto de la clase
Vuelo. En ella se guardaran los atributos “codigo”,
“hora_llegada” y “hora_salida”.
Implementa métodos en aeropuerto y vuelo para modificar la
hora de llegada, para modificar la hora de salida y para
comprobar si la hora de salida es posterior a la hora de
llegada. */

'use strict';

//Clase Vuelo
class Vuelo {
  constructor(codigo, salida, llegada) {
    let _codigo = codigo;
    let _salida = salida;
    let _llegada = llegada;
    this.getCodigo = function() {
      return _codigo;
    };
    this.getSalida = function() {
      return _salida;
    };
    this.getLlegada = function() {
      return _llegada;
    };
    this.setSalida = function(salida) {
      _salida = salida;
    };
    this.setLlegada = function(llegada) {
      _llegada = llegada;
    };
  }

  comprobar_horario() {
    return (
      this.getLlegada().getHours() > this.getSalida().getHours() ||
      (this.getLlegada().getHours() === this.getSalida().getHours() &&
        this.getLlegada.getMinutes() > this.getSalida().getMinutes())
    );

    //return (this.getLlegada().getTime() > this.getSalida().getTime());
  }

  toString() {
    return `El vuelo ${this.getCodigo()}\
 con salida ${('0' + this.getSalida().getHours()).slice(-2)}:${('0' + this.getSalida().getMinutes()).slice(-2)}\
 y llegada ${('0' + this.getLlegada().getHours()).slice(-2)}:${('0' + this.getLlegada().getMinutes()).slice(-2)}.`;
  }
  //Se utiliza slice para garantizar que utiliza dos cifras para números de 0 a 9
}

//Clase Aeropuerto
class Aeropuerto {
  constructor(nombre, ciudad) {
    let _nombre = nombre;
    let _ciudad = ciudad;
    let _vuelos = new Array();
    this.getNombre = () => {
      return _nombre;
    };
    this.getCiudad = () => {
      return _ciudad;
    };
    this.getVuelos = () => {
      return _vuelos;
    };
  }

  anhadir_vuelo(vuelo) {
    this.getVuelos().push(vuelo);
  }

  consultar_vuelo(v_id) {
    return this.getVuelos().find(v => v.getCodigo() === v_id);
  }

  cambiar_hora_llegada(v_id, nuevaHora) {
    this.consultar_vuelo(v_id).setHoraLlegada(nuevaHora);
  }

  cambiar_hora_salida(v_id, nuevaHora) {
    this.consultar_vuelo(v_id).setHoraSalida(nuevaHora);
  }

  comprobar_hora(v_id) {
    return this.consultar_vuelo(v_id).comprobar_horario();
  }
}

// PRUEBAS

//Aeropuerto
let aero = new Aeropuerto('Wirtz', 'A Coruña');

//Vuelo v1
let salV1 = new Date();
salV1.setHours(10);
salV1.setMinutes(5);
let llegV1 = new Date();
llegV1.setHours(11);
llegV1.setMinutes(25);
let v1 = new Vuelo('A', salV1, llegV1);
console.log(v1.toString());

//Vuelo v2
let salV2 = new Date();
salV2.setHours(9);
salV2.setMinutes(35);
let llegV2 = new Date();
llegV2.setHours(17);
llegV2.setMinutes(45);
let v2 = new Vuelo('B', salV2, llegV2);
console.log(v2.toString());

//Vuelo v3
let salV3 = new Date();
salV3.setHours(19);
salV3.setMinutes(35);
let llegV3 = new Date();
llegV3.setHours(7);
llegV3.setMinutes(45);
let v3 = new Vuelo('C', salV3, llegV3);
console.log(v3.toString());

//Anhadimos los vuelos
v1.comprobar_horario() ? aero.anhadir_vuelo(v1) : console.log(`Horario incorrecto para vuelo v1`);
v2.comprobar_horario() ? aero.anhadir_vuelo(v2) : console.log(`Horario incorrecto para vuelo v2`);
v3.comprobar_horario() ? aero.anhadir_vuelo(v3) : console.log(`Horario incorrecto para vuelo v3`);

//Comprobacion vuelos anhadidos
console.log(`Vuelvo A : ${aero.consultar_vuelo('A')}`);
console.log(`Vuelvo C : ${aero.consultar_vuelo('C')}`);
