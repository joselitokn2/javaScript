function factorial(numero) {
    if (numero == 1) {
        return numero;
    }
    return numero * factorial(numero - 1);
}