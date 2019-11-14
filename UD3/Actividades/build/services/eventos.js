var tipo = evento.type;

function resalta(elEvento) {
    var evento = elEvento || window.event;
    switch (evento.type) {
        case 'mouseover':
            this.style.borderColor = 'black';
            break;
        case 'mouseout':
            this.style.borderColor = 'silver';
            break;
    }
}
window.onload = function() {
    document.getElementById('seccion').onmouseover = resalta;
    document.getElementById('seccion').onmouseout = resalta;
};