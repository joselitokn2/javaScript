/**
 * Programa que calcule el cambio a devolver sobre un precio dado y una cantidad pagada.
 */
var precioDado;
var cantidadPagada;
var cambioRecibido;

mensage();
function calcularCambio(precioDado , cantidadPagada ){
return precioDado - cantidadPagada;
}

function mensage() {
var precioDado = prompt("Introduce el precio del producto");
var cantidadPagada = prompt("Introduce la cantidad pagada");
cambioRecibido = calcularCambio(precioDado, cantidadPagada);
alert("Su cambio es de: "+ cambioRecibido);
}
