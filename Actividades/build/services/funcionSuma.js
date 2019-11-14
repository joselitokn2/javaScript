//Si no has utilizado funciones, a partir de aquí deberás emplearlas para solucionar los siguientes ejercicios. El primero consiste en hacer una función suma.
//Funcion suma
 var readlineSync = require('readline-sync');
 const print = console.log;
 mensage();

function sumar(numero1 , numero2 ){
suma = numero1 + numero2;
print("La suma de los numeros es: "+ suma);
}

function mensage() {
  //Leemos N
  var numero1=parseInt(readlineSync.question('Introduce numero: '));
  var numero2=parseInt(readlineSync.question('Introduce numero2: '));
  sumar(numero1, numero2);
}

