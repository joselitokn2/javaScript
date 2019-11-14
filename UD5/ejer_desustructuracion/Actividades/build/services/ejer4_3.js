/* Haz un programa que cuando se presione una tecla, 
 calcule cuantos DNIs de 4 cifras (del 0001 al 9999)
 tienen esa letra y te mostrará los DNIs y sus letras 
 en un elemento XHTML(Ejemplo, un <p> */

// Calcular letraDNI
function letraDNI(numeroDni) {
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  return letras[numeroDni % 23];
}


function tecladoLetraDNI(event) {
  // Contaremos cuantos tienen  la letra buscada
  var numero = 0;
  var x = event.keyCode;         // Get the Unicode value
  var y = String.fromCharCode(x);    // Convert the value into a character
  var miArray = [];

  for (i = 1; i <= 99999; i++) {

    // Si coinciden las letras, ya tenemos el numero
    if (y == letraDNI(i)) {
      numero++;
      miArray.push(i);
    }
  }
  document.getElementById("p").innerHTML = "hay " + numero + " dnis hasta 99999 con la letra " + y
  document.getElementById("e").innerHTML = miArray.join(" ")
}