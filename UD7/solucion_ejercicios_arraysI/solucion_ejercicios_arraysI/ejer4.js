/* 4. Implementa en JS un programa que filtre los valores de un
array que no se repitan. */
let filtrar_no_repes = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
//FORMA1
let numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(`Prueba 1: ${filtrar_no_repes(numeros)}`);
console.log(`Prueba 2: ${filtrar_no_repes([1, 2, 3, 4, 2])}`);
//FORMA2
const numerosNoRepetidos = [
    ...new Set(numeros)
]; /* ... Es un operador de propagación que nos permite convertir el conjunto en un array */
console.log(`Prueba 3: ${numerosNoRepetidos}`);

//FORMA3
numeros = [1, 2, 2, 3, 4, 4, 5];
const filtrarNumerosRepetidos2 = numeros.filter((elemento, index, arr) => arr.indexOf(index) === index);
console.log(`Prueba 4: ${filtrarNumerosRepetidos2}`);