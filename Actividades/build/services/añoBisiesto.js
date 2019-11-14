// Función que determina si un año es bisiesto o no
// beta3designs 2009
const print = console.log;
var readlineSync = require('readline-sync');
mensage();
function es_bisiesto(year){
	return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function mensage() {
    //Leemos N
    var año=parseInt(readlineSync.question('Introduce el anho: '));
   if( es_bisiesto(año)){
       print("Es año bisiesto");
   } else {
       print("No es año bisiesto");
   }
  }