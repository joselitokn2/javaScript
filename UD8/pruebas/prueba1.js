/* • Dibujar el tablero empleando métodos del DOM (2 puntos).
• Selección del color de dibujo en la paleta y ponerlo como
color activo (2 puntos).
• Activar/desactivar el pincel (2,5 puntos).
• Pintar (2,5 punto).
• Comentarios e indentación del código (1 punto). */

//crea el nodo table (aun sin insertar)
var creandoTabla = document.createElement('TABLE');
creandoTabla.id = 'tableId';
creandoTabla.className = 'tablerodibujo';

var colorSeleccionado = 'color1';
var estadoPintar = false; //controla cuando se pinta y cuando no

function dibujarTabla() {
  var zonadibujo = document.getElementById('zonadibujo');
  zonadibujo.appendChild(creandoTabla); //en el div crea TABLA

  for (f = 0; f < 30; f++) {
    var creadoTR = document.createElement('TR'); //crea nodo TR
    creadoTR.id = f; // Ponemos las IDs los TRs
    creandoTabla.appendChild(creadoTR); //en TABLE crea TR
    for (c = 0; c < 30; c++) {
      var creandoTD = document.createElement('TD'); //crea nodo TD
      creandoTD.id = c; // Ponemos las IDs los TDs
      creandoTD.addEventListener(
        'mousedown',
        function() {
          activarPintar(this);
        },
        false
      ); //evento para pintar al hacer clic
      creandoTD.addEventListener(
        'mouseover',
        function() {
          pintar(this);
        },
        false
      ); //evento para pintar moviendo el raton
      creandoTD.addEventListener(
        'mouseup',
        function() {
          desactivarPintar();
        },
        false
      ); //evento para parar de pintar
      creadoTR.appendChild(creandoTD); //en TR crea TD
    }
  }
  prepararSelecciones();
}

function prepararSelecciones() {
  var colores = document.getElementsByTagName('td'); //sólo funciona sabiendo que los 6 primeros TDs pertenecen a los colores,
}

function seleccionado(propiedad) {}

function activarPintar(td) {}
