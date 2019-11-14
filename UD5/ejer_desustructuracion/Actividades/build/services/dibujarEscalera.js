function escribirPeldanhos() {
    var valor = document.getElementById("text").value;
    for (i = 1; i <= valor; i++) {

        //document.write('<div style="width:' + 50 * i + 'px ; background-color: black; height: 50px"></div>');
        // crea un nuevo div 
        // y añade contenido 
        var newDiv = document.createElement("div");
        newDiv.style.width = 50 * i + "px";
        newDiv.style.backgroundColor = "blue";
        newDiv.style.height = "50px";
        // añade el elemento creado y su contenido al DOM 
        /*var currentDiv = document.getElementById("div1");
        document.body.appendChild(newDiv, currentDiv); */
        document.getElementsByTagName("body");
        document.body.appendChild(newDiv);

    }
}