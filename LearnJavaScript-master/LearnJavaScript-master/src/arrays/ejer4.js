/* Implementa en JS un programa que filtre los valores de un
array que no se repitan. */
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5];

// Forma 1
const filtrarNumerosRepetidos = alamacen => alamacen.filter(i => alamacen.indexOf(i) === alamacen.lastIndexOf(i));
console.log(`Prueba 1: ${filtrarNumerosRepetidos(numerosRepetidos)}`);
console.log(`Prueba 2: ${filtrarNumerosRepetidos([1, 2, 3, 4])}`);

// Forma 2
const numerosSinRepetir = [...new Set(numerosRepetidos)]; // ... Es un operador de propagación que nos permite convertir el conjunto en un array
console.log(numerosSinRepetir);

// forma 3
const filtrarNumerosRepetidos2 = alamacen => alamacen.filter((elemento, index) => alamacen.indexOf(index) === index);
