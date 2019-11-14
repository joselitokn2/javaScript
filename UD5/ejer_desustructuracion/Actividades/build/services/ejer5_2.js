/* 2. Realiza un programa que cree dinámicamente (creando los Esta página además tendrá un botón que será “Calcular numero casi primos”.
     Este botón hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan con un fondo amarillo.elementos con Js)
      una tabla de 100x100. Cada elemento de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de 1 en 1.
       
Numero casi primo: es un número que solo es divisible por si mismo, la unidad y por un solo número que no sea ni la unidad ni si mismos. */
function crearTabla(){
    filas = 20;
    columnas = 20;
    listaCeldas = [];
    contador = 1;
                   // get the reference for the body
        var mybody = document.getElementsByTagName("body")[0];

        // creates <table> and <tbody> elements
        myTabla    = document.createElement("table");
        myTablaBody = document.createElement("tbody");

        // creamos las filas
        for(var j = 0; j < filas; j++) {
            // <tr> element
            filaActual = document.createElement("tr");
            // creamos las columnas
            for(var i = 0; i < columnas; i++) {
                //<td> element
                columnaActual = document.createElement("td");
                // creamos el Text Node
                textoActual = document.createTextNode("F " + j + ", C " + i + " Celda nª:" + contador++ + ";");
                listaCeldas.push(contador);
                // agrega el nodo de texto que creamos en la celda <td>
                columnaActual.appendChild(textoActual);
                // agregar la celda en la fila <tr>
                filaActual.appendChild(columnaActual);
            }
            // agrega la fila <tr> en <tbody>
            myTablaBody.appendChild(filaActual);
        }

        // agrega <tbody> en <table>
        myTabla.appendChild(myTablaBody);
        // agrega <table> en <body>
        mybody.appendChild(myTabla);
        // establece el atributo de borde de mytable en 2;
        myTabla.setAttribute("border","2");

}
function esNumeroPrimo(){
    numerosConsultar = 0;
    for(a = 0;listaCeldas.length;a++){
      numeroConsultar =  listaCeldas[a];//sacamos el numero del array y si es primo
      if(esPrimo(numeroConsultar)){
        set_background(numeroConsultar);
      }
        
    }
}
function set_background(numeroCeldaPintar) {
    // get a list of all the body elements (there will only be one),
    // and then select the zeroth (or first) such element
    myBody = document.getElementsByTagName("body")[0];
  
    // now, get all the p elements that are descendants of the body
    myBodyElementsTable = myBody.getElementsByTagName("td");
  
    // get the second item of the list of p elements
    myP = myBodyElementsTable[numeroCeldaPintar];
    myP.style.background = "rgb(255,0,0)";
  }
  function esPrimo(numero){
   
        
    // Ponemos el var para que sea local, ya que hay una variable fuera que se llama igual
var i;
    var primo=true;
    // Dividimos por 2, para ver si no es primo...
    if(numero==2){
        // Es primo, no hacemos nada y devolvemos true;
        return true;
    }
    else if(numero<2){
        return false;        
    }
    else if(numero%2==0){
        
        return false;   
    }
    else{
        for(i=3;i<=Math.sqrt(numero);i+=2){
            // Detectamos si el numero es divisible por alguno
            // Si lo es, no es primo
            if(numero%i==0){
                // Si ya sabemos que no es primo, paramos
                primo=false;
                break;
            }

        }
    }

    return primo;
}