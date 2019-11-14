//Definimos la funcion con la sintaxis exigida

function esPrimo(numero) {
    // Suponemos que es primo. Solo dejara de serlo si detectamos lo contrario

    var esPrimo = true;

    // Si es 1 no es primo
    if (numero == 1) {
        esPrimo = false;
    }

    // % es el operador que nos devuelve el RESTO de dividir un número con otro.
    // Si X%Y da 0, indica que X es divisible por Y

    // Con el caso de numero%2, comprobamos si numero es divisible entre 2 (y que no sea 2, porque si es 2 es primo).
    if (numero % 2 == 0 && numero != 2) {
        esPrimo = false;
    }

    // Math.sqrt nos permite calcular la raiz cuadrada de un numero. Solo llegaremos hasta ahí, no es necesario comprobar todos los numeros.
    // Comenzaremos con 3 e iremos de 2 en 2 (por eso i=i+2) ya que al saber que no es par
    // El bucle se ejecutara mientras no se llegue al limite y además no se haya demostrado que el número no es primo

    for (var i = 3; i <= Math.sqrt(numero) && esPrimo == true; i += 2) {
        // Si es divisible por alguno, no es primo
        if (numero % i == 0) {
            esPrimo = false;
        }
    }

    // Devolvemos el resultado, que esta en la variable esPrimo
    return esPrimo;
}