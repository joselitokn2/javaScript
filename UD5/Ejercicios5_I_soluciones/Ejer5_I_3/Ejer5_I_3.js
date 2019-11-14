// Creamos 100 checkbox con numeros aleatorios
function crearCheckbox() {
    for (i = 0; i < 100; i++) {
        var valorAleatorio = Math.random();
        // Creamos el checkbox con value aleatorio
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'name';
        checkbox.value = valorAleatorio;
        checkbox.id = 'id' + i;
        // Al lado del checkbox tenemos un label con el mismo valor aleatorio
        var label = document.createElement('label');
        label.appendChild(document.createTextNode(valorAleatorio));
        // Anexamos checbox y etiqueta al body
        document.body.appendChild(checkbox);
        document.body.appendChild(label);
    }
}

function marcarCheckboxs() {
    for (i = 0; i < 100; i++) {
        var check = document.getElementById('id' + i);
        check.checked = true;
    }
}

function desmarcarCheckboxs() {
    for (i = 0; i < 100; i++) {
        var check = document.getElementById('id' + i);
        check.checked = false;
    }
}

function cambiarEstadoCheckboxs(accion) {
    for (i = 0; i < 100; i++) {
        var check = document.getElementById('id' + i);
        if (accion == 1) {
            check.checked = true;
        } else {
            check.checked = false;
        }
    }
}