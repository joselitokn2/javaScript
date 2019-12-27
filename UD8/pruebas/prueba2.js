/* Ejemplo slice */
var txt = "I can eat bananas all day";
var x = txt.slice(10,);
console.log(x);
x = txt.slice(1,10);
console.log(x);

const nombres = ['Jose','Juan','Pedro','Jose','Jose','Fiorella','Fiorella'];
 
let cantidadDeNombres = nombres.reduce((contadorNombre , nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
     return contadorNombre;
},
{}
); 
/* console.log('PRUEBA');
let cantidadDeNombres = nombres.reduce((contadorNombre, nombre) => { contadorNombre = contadorNombre[nombre] + (contadorNombre[nombre] || 0)+1;
    return contadorNombre;
}); */
console.log(cantidadDeNombres);