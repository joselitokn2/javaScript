
/************************************************/	
/*  CODIGO INICIAL A ANYADIR PARA USAR PRINT    */
/************************************************/

const print = console.log;

// Readline es una librería que ya tenemos disponible al instalar node
// La importamos utilizando la palabra reservada require. Sería como el import de Java
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
  
});

var n1, n2, n3;
/*
Fijémonos ahora en el código de a continuación:
1. Se solicitan los tres números mediante el uso del evento question de readline. 
    En este código, Se parsea el valor de entrada convirtiéndolo a entero y, a continuación, se muestra en consola lo que se leyó.
2. A continuación fuera de la función encargada de leer el número y definida como parámetro en el evento question, se hace print 
    (se vuelve a imprimir por consola)
*/
rl.question(`Introduce un número`, (num1) => {
    
    n1=parseInt( num1 );
    console.log(num1);
    rl.close()
  })

rl.question(`Introduce un número`, (num2) => {
    n2=parseInt( num2 );
    console.log(num2);
    readline.close()
 })

rl.question(`Introduce un número`, (num3) => {
    n3=parseInt( num3 );
    console.log(num2);
    readline.close()
 })

print(n1);

print(n2);

print(n3);

// Si alguno supera 10 mostramos un mensaje, en caso contrario otro

if(n1>10 || n2>10 || n3>10){
	print("ALGUNO MAYOR QUE 10");
}else{
	print("NINGUNO MAYOR QUE 10");
}

/*
FINALMENTE, lo que nos queda es extrañarnos por este comportamiento que tiene el código:
primero ejecuta todo y luego parece que hace la lectura de los números.
El motivo de este comportamiento es que javascript es un lenguaje asíncrono, por lo tanto,
no espera a que finalice la lectura de los datos para continuar con el resto del programa.
*/

