solicitarDni();
var listaDni = new Array();

//Metodo que nos pide dnis
function solicitarDni() {
    var dni = '';
    do {
        //Pedimos por teclado dnis hasta que pongan un -1
        dni = setTimeout(function() {
            prompt('Introduce el dni:');
        }, 2000);
        if (dni.isNif()) {
            listaDni.add(dni);
        } else {
            dni = '';
        }
    } while (dni != -1);
    if (dni == -1) {
        mostrarLetras();
    }
}
//Metodo para mostrar las letras
function mostrarLetras() {
    listaDni.forEach(function(letras) {
        var letra = letras.lastIndexOf();
        prompt(letra);
    });
}
// Método para la clase String que indica si la cadena se corresponde con un nif válido o no. 7 u 8 cifras y letra mayúscula

String.prototype.isNif = function() {
    return /^(\d{7,8})([A-HJ-NP-TV-Z])$/.test(this) && 'TRWAGMYFPDXBNJZSQVHLCKE' [RegExp.$1 % 23] == RegExp.$2;
};