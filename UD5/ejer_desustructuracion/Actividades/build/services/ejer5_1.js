// Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL).
function nuevoNumero(){
	var numeroAleatorio = aleatorio(1,9999);
	   // Creo un nodo de tipo LI
        var nuevoNodo = document.createElement("li");
        // Al nodo LI le asocio un texto (tambien podria asociarle XHTML con innerHTML)
        var texto = document.createTextNode(numeroAleatorio);
        nuevoNodo.appendChild(texto);
        // A miLista, lista ya existente, le añado el elemento creado
        document.getElementById("resultado").appendChild(nuevoNodo); 
}
// Retorna un número aleatorio entre min (incluido) y max (excluido)
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
  }