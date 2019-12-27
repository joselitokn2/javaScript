/**
 * Enunciados 4_1
 * Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma dinámica un elemento XHTML (Ejemplo, un <p>) que nos muestre la posición actual del ratón.
 */

let mostrarPosicion;
document.onmousemove = mostrarPosicion;
/**
 * Enunciados 4_2
 * Realizar un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestre un alert con “Hola”. El botón “Parar Saludos” parará esa secuencia.
 */
let estado = -1;

function comenzar() {
  if (estado !== -1) {
    console.log('Ya estamos saludando, se cancela');
  } else {
    estado = setInterval(alert('hola'), 5000);
  }
}

function parar() {
  if (estado !== -1) {
    clearInterval(estado);
    estado = -1;
  } else {
    console.log('No hay saludo a parar');
  }
}
/**
 * Enunciads 4_3
 * Haz un programa que cuando se presione una tecla, calcule cuantos DNIs de 4 cifras (del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento XHTML(Ejemplo, un <p>).
 */

function letraDNI(numeroDni) {
  const codigoControl = 'TRWAGMYFPDXBNJZSQVHLCKE',
    resultado = codigoControl.charAt(numeroDni % 23);
  return resultado;
}

function calcularDNI(event) {
  const elementoResultado = document.getElementById('resultado'),
    letra = String.fromCharCode(event.keyCode);
  elementoResultado.innerHTML = `DNIs con letra ${letra} `;
  for (let i = 0; i <= 999; i++) {
    if (letraDNI(i) === letra) {
      elementoResultado.innerHTML += `${i} ; `;
    }
  }
}
document.onkeyup = calcularDNI;
/**
 * Enunciados 4_4
 * Haz un programa que al hacer doble click en la pantalla del navegador, cambie el fondo a un color aleatorio.
 */
function cambiarColor() {
  /**
   *  Math.floor() Devuelve el máximo entero menor o igual a un número.
   */
  document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )})`;
}
document.ondblclick = cambiarColor;
