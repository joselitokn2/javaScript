const readLineSync = require('readline-sync');
/*
 * Enunciado 2_1
 * Programa que calcule el cambio a devolver sobre un precio
 *dado y una cantidad pagada.
 */
function cambio() {
  const precio = parseInt(readLineSync.question('Introduce precio: '), 10),
    pagado = parseInt(readLineSync.question('Introduce pago: '), 10);
  if (pagado > precio) {
    console.log(`La cantidad a devolver es : ${pagado - precio}`);
  } else {
    console.log('Cantidad pagada insuficiente');
  }
}
console.log(cambio());
console.log('Siguiente Ejercicio');
/*
 * Enunciado 2_2
 * Programa que muestre el número más alto y más bajo de un
 *conjunto de números dados.
 */
function numeroMaximoyMinimo() {
  let numeroMAXIMO = 0,
    numeroMinimo = 0,
    valor = parseInt(readLineSync.question('Introduce valor: '), 10);
  if (valor !== -1) {
    numeroMAXIMO = valor;
    numeroMinimo = numeroMAXIMO;
  }
  do {
    if (valor > numeroMAXIMO) {
      numeroMAXIMO = valor;
    }
    if (valor < numeroMinimo) {
      numeroMinimo = valor;
    }
    valor = parseInt(readLineSync.question('Introduce valor: '), 10);
  } while (valor !== -1);
  console.log(`El valor máximo es : ${numeroMAXIMO}`);
  console.log(`El valor minimo es : ${numeroMinimo}`);
}
console.log(numeroMaximoyMinimo());
console.log('Siguiente Ejercicio');
/*
 * Enunciado 2_3
 * Programa que muestre una lista de números de forma invertida
 *a como se introdujeron.
 */
function listarNumeroDeFormaInvertida() {
  const lista = [];
  let valor = 0;
  while (valor !== -1) {
    valor = parseInt(readLineSync.question('Introduce valor: '), 10);
    lista.push(valor);
  }
  console.log(`La lista invertida es : ${lista.reverse()}`);
}
console.log(listarNumeroDeFormaInvertida());
/*
 * Enunciado 2_4
 * Si no has utilizado funciones, a partir de aquí deberás
 * emplearlas para solucionar los siguientes ejercicios. El
 *primero consiste en hacer una función suma.
 */
function suma(numeroUNO, numeroDOS) {
  return numeroUNO + numeroDOS;
}
console.log(suma(5, 5));
/*
 * Enunciado 2_5
 *Programa que diga si un año es bisiesto en base a si es múltiplo de 4 y no lo es de 100 o es múltiplo de 400.
 */
function esBisiesto(anyo) {
  if (anyo % 4 === 0 && (anyo % 100 !== 0 || anyo % 400 === 0)) {
    return true;
  }
  return false;
}
console.log(esBisiesto(2020));
/*
 * Enunciado 2_6
 *Programa que calcule el perímetro de un rectángulo.
 */
function perimetroRectangulo(ladoA, ladoB) {
  return ladoA * 2 + ladoB * 2;
}
console.log(perimetroRectangulo(5, 10));
/*
 * Enunciado 2_7
 *Programa que diga si un número es primo.
 */
function numeroPrimo(numero) {
  let esPrimo = true;
  for (let i = 3; i <= Math.sqrt(numero) && esPrimo === true; i += 2) {
    if (numero % i === 0) {
      esPrimo = false;
    }
  }
  if (esPrimo === true && numero !== 1) {
    return 'SI es primo';
  }
  return 'NO es primo';
}
console.log(numeroPrimo(14));
/*
 * Enunciado 2_8
 *Implementa un código que calcule un factorial.
 */
function factorial(numero) {
  if (numero === 1) {
    return numero;
  }
  return numero * factorial(numero - 1);
}
console.log(factorial(20));
/*
 * Enunciado 2_9
 * Implementa la función Fibonacci: f0=0
 * f1=1
 *fn=fn-1 + fn-2
 */
function fibonacci(numero) {
  if (numero === 0 || numero === 1) {
    return numero;
  }
  return fibonacci(numero - 1) + fibonacci(numero - 2);
}
console.log(fibonacci(3));
/*
 *  Enunciado 2_10
 *Implementa un programa que diga si una palabra es palíndromo.
 */
function palindromo(palabra) {
  console.log(palabra);
  if (palabra.length > 1) {
    console.log(`${palabra.charAt(0)} ${palabra.charAt(palabra.length - 1)}`);
    if (palabra.startsWith(palabra) && palabra.endsWith(palabra)) {
      return palindromo(palabra.substring(1, palabra.length - 1));
    }
    return false;
  }
  return true;
}
console.log(palindromo('oso'));
console.log(palindromo('casa'));
console.log(palindromo('reconocer'));
console.log(palindromo('ordenador'));
// # sourceMappingURL=enunciados2.js.map
