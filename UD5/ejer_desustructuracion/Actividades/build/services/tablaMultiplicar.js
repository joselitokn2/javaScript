function recibir() {
    var valor = document.getElementById("text").value;
    document.write("<h2>Tabla de multiplicar del " + valor + "</h2>");

    document.write("<ul>");
    //i++ significa i=i+1;

    for (i = 1; i <= 10; i++) {
        document.write("<li>");
        document.write(valor + "x " + i + "= " + valor * i);
        document.write("</li>");
    }

    document.write("</ul>");

}