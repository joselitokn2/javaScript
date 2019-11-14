var readlineSync = require('readline-sync');

const print = console.log;

// Leemos de la entrada estandar

// Usamos split para separar valores en un array
var arrayValores = readlineSync.question('Introduce valores: ').split(' ');
var numero = parseInt(arrayValores[0]);
var veces = parseInt(arrayValores[1]);

// por cada repeticion, imprimimos la cadena solicitada

for (var i = 1; i <= veces; i++) {
    // Generamos la cadena de cada iteración y la imprimimos
    var cadena = numero + ' x ' + i + ' = ' + numero * i;
    print(cadena);
}