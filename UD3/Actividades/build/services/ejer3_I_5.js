function mostrar(cadena) {
    cadenaPartida = cadena.split(':');

    alert('Nombre ' + cadenaPartida[0]);
    alert('Apellidos ' + cadenaPartida[1]);
    alert('CP ' + cadenaPartida[4]);
    alert('Email ' + cadenaPartida[3]);
    alert('Email servidor ' + cadenaPartida[3].split('@')[1]);
    alert('Telefono ' + cadenaPartida[2]);
}

var c = prompt('Mete cadena', 'nombre:apellidos:telefono:email@servidor:codigopostal');

mostrar(c);