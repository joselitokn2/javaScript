//Definimos la funcion con la sintaxis exigida

function esBisiesto(anyo) {
    // Anyo es divisible entre 4 y se cumple que o no es divisible entre 100 o si lo es es divisible entre 400
    if (anyo % 4 == 0 && (anyo % 100 != 0 || anyo % 400 == 0)) {
        // Es bisiesto
        return 1;
    } else {
        // No es bisiesto
        return 0;
    }
}