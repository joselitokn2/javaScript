function dame_numero_aleatorio(superior, inferior) {
    var numPosibilidades = superior + 1 - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    aleat = inferior + aleat;
    return aleat;
}

function dame_color_aleatorio() {
    color_aleat = '#';
    hexadecimal = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
    var inferior = 0;
    var superior = hexadecimal.length - 1;
    for (i = 0; i < 6; i++) {
        color_aleat += hexadecimal[dame_numero_aleatorio(superior, inferior)];
    }
    return color_aleat;
}

function cambiarFondo() {
    //obtengo un aleatorio
    colorin = dame_color_aleatorio();

    //voy a extraer las tres partes del color
    rojo = colorin.substring(1, 3);
    verde = colorin.substring(3, 5);
    azul = colorin.substring(5, 7);

    //voy a convertir a enteros los string, que tengo en hexadecimal
    introjo = parseInt(rojo, 16);
    intverde = parseInt(verde, 16);
    intazul = parseInt(azul, 16);

    //ahora sumo los valores
    oscuridad = introjo + intverde + intazul;

    //si el valor oscuridad es menor que ((255 + 255 + 255) / 2) es que es un color más oscuro
    //si es oscuro, el color del texto será blanco
    if (oscuridad < (255 + 255 + 255) / 2) colortexto = '#ffffff';
    else colortexto = '#000000';

    document.fgColor = colortexto;
    document.bgColor = colorin;
}