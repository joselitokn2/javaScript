/*3. Implementa en JS un programa para recuperar los elementos de
un array con un salto x. Es decir, si le especificamos x con
un valor 2, nos deberá devolver cada dos elementos del array.
Si especificamos el valor 3, nos deberá devolver cada 3
elementos del array.
Para resolverlo, utiliza las posiciones dentro del array. */

function devolver() {
    var x = parseInt(prompt("Introduce numero de elementos a devolver"));

    const array = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    array.length = x;
    document.getElementById("arrayResultado").innerHTML = array.join(" ");
}