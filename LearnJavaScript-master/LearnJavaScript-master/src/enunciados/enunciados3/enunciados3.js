/*
 * Enunciados 3_1
 * Realiza un programa que cada 20 segundos (mediante setInterval) solicite un DNI hasta que alguien le escriba la cadena “-1”.
 * En ese momento, el programa debe mostrar seguidas las letras de todos los DNIs introducidos.
 * Aquí un enlace para saber como calcular la letra de DNI
 */

const letrasDNI = [];

function solicitarDNI() {
  const codigoControl = 'TRWAGMYFPDXBNJZSQVHLCKE',
    numeroDNI = prompt('Introduzca su DNI para calcular su letra') || 'a',
    dni = parseInt(numeroDNI, 10),
    resultado = codigoControl.charAt(dni % 23);
  letrasDNI.push(resultado);
  if (dni.toString().length <= 8 && dni.toString().length > 7) {
    if (dni !== -1) {
      alert(resultado);
      setTimeout(solicitarDNI, 1000);
    } else {
      alert(letrasDNI.join(' '));
    }
  } else {
    alert('introduzca un DNI valido');
    alert(letrasDNI.join(' '));
  }
}
/*
 * Enunciados 3_2
 * Realizar un programa que pasados 20 segundos, nos muestre una
 * vez la fecha actual del sistema.
 */
function fechaActualSistema() {
  setTimeout(function fechaActual20segundos() {
    const fechaActual = new Date(),
      elementoFecha = document.getElementById('fecha');
    elementoFecha.innerHTML = `${fechaActual.getDate()}/${fechaActual.getMonth() +
      1}/${fechaActual.getFullYear()}`;
  }, 1000);
}
/*
 * Enunciados 3_3
 * Haz un programa que pregunte una letra de la A a la Z.
 * Tras ello te dirá cuantos DNIs de 3 cifras (del 001 al 999) tienen esa letra y tras ello te mostrará el listado de golpe de todos los DNIs que tienen esa letra.
 */
function letraDNI(numeroDni) {
  const codigoControl = 'TRWAGMYFPDXBNJZSQVHLCKE',
    resultado = codigoControl.charAt(numeroDni % 23);
  return resultado;
}

function numerosDNIsConXletra() {
  const letra = prompt('Dime la letra', 'A');
  let contador = 0;
  const almacenDNIs = [];
  for (let i = 1; i <= 999; i += 1) {
    if (letra === letraDNI(i)) {
      contador += 1;
      almacenDNIs.push(i);
    }
  }
  alert(`hay ${contador} dnis hasta 999 con la letra ${letra}`);
  alert(almacenDNIs);
}
/*
 * Enunciados 3_4
 * Haz un programa que calcule cuantos números son a la vez
 * primos y palíndromos hasta 100000 y los meta todos en un
 *array.
 */
function numeroPrimo(numero) {
  let esPrimo = true;
  for (let i = 3; i <= Math.sqrt(numero) && esPrimo === true; i += 2) {
    if (numero % i === 0) {
      esPrimo = false;
    }
  }
  if (esPrimo === true && numero !== 1) {
    return true;
  }
  return false;
}

function palindromo(palabra) {
  console.log(palabra);
  if (palabra.length > 1) {
    console.log(`${palabra.charAt(0)} ${palabra.charAt(palabra.length - 1)}`);
    if (palabra.charAt(0) === palabra.charAt(palabra.length - 1)) {
      return palindromo(palabra.substring(1, palabra.length - 1));
    }
    return false;
  }
  return true;
}

function primosPalindromos() {
  const almacenNumerosPalindromos = [];
  let numero = 0;
  for (let i = 2; i <= 100000; i += 1) {
    if (numeroPrimo(i) && palindromo(i.toString())) {
      numero += 1;
      almacenNumerosPalindromos.push(i);
    }
  }
  alert(`El numero es : ${numero}`);
  alert(almacenNumerosPalindromos.join(' ; '));
}
/*
 * Enunciados 3_5
 * Haz un programa que reciba cadenas del tipo:
 * “nombre:apellidos:telefono:email:codigopostal” y que te
 * muestre:
 * ◦ El código postal.
 * ◦ Los apellidos
 * ◦ El email.
 * ◦ Suponiendo un formato de email “direccion@servidor” te
 * muestre el servidor asociado.
 */
function mostrar(cadena) {
  const cadenaPartida = cadena.split(':');
  alert(`Nombre ${cadenaPartida[0]}`);
  alert(`Apellidos ${cadenaPartida[1]}`);
  alert(`Telefono ${cadenaPartida[2]}`);
  alert(`Email ${cadenaPartida[3]}`);
  alert(`Email servidor ${cadenaPartida[3].split('@')[1]}`);
  alert(`CP ${cadenaPartida[4]}`);
}

function meteCadena() {
  const c =
    prompt(
      'Mete cadena',
      'nombre:apellidos:telefono:email@servidor:codigopostal'
    ) || 'NULL';
  mostrar(c);
}
// # sourceMappingURL=enunciados3.js.map
