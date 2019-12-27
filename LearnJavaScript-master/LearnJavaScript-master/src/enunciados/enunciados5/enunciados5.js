/*
 * Enunciados 5_1
 * Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL).
 */

function insertar() {
  const elementoHijo = document.createElement('LI'),
    elementoNodoHijo = document.createTextNode(Math.random().toString()),
    elementoMiLista = document.getElementById('miLista');
  elementoHijo.appendChild(elementoNodoHijo);
  elementoMiLista.appendChild(elementoHijo);
}
/*
 * Enunciados 5_2
 * Realiza un programa que cree dinámicamente (creando los elementos con Js) una tabla de 100x100. Cada elemento de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de 1 en 1. Esta página además tendrá un botón que será “Calcular numero casi primos”. Este botón hará que todas las celdas de la tabla que tengan números
 *“Casi primos” se pongan con un fondo amarillo. Numero casi primo: es un número que solo es divisible por si mismo, la unidad y por un solo número que no sea ni la unidad ni si  mismos.
 */
// Funcion que devuelve true si es casi primo (segun la definicion del ejercicio)
function esCasiPrimo(numero) {
  let oportunidad = 0;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      oportunidad++;
      if (oportunidad > 1) {
        return false;
      }
    }
  }
  if (oportunidad === 1) return true;
  return false;
}
// Creamos la tabla y sus elementos
function crearTabla() {
  // Creamos la tabla
  const tabla = document.createElement('TABLE');
  let numeroUnico = 1;
  for (let i = 0; i < 100; i++) {
    // Creamos un elemento TR
    const fila = document.createElement('TR');
    for (let j = 0; j < 100; j++) {
      // Creamos TD y texto
      const celda = document.createElement('td'),
        texto = document.createTextNode(numeroUnico.toString());
      // Anexamos texto al TD
      celda.appendChild(texto);
      // Anexamos el TD al TR
      fila.appendChild(celda);
      // Si es casi primo, cambiamos el fondo
      if (esCasiPrimo(numeroUnico)) {
        celda.style.backgroundColor = 'Yellow';
      }
      // Incrementamos el numero unico
      numeroUnico++;
    }
    // Anexamos el TR a la tabla
    tabla.appendChild(fila);
  }
  // Anexamos la tabla al body
  document.body.appendChild(tabla);
}
/*
 * Enunciados 5_3
 * Haz un programa que cree 100 elementos “checkbox” con números
 * aleatorios. Además la página tendrá un botón “Marcar todos” y
 * un botón “Desmarcar todos”.
 */
// Creamos 100 checkbox con numeros aleatorios
function crearCheckbox() {
  for (let i = 0; i < 100; i++) {
    const valorAleatorio = Math.random().toString(),
      // Creamos el checkbox con value aleatorio
      checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = valorAleatorio;
    checkbox.id = `id${i}`;
    // Al lado del checkbox tenemos un label con el mismo valor aleatorio
    const label = document.createElement('label');
    label.appendChild(document.createTextNode(valorAleatorio));
    // Anexamos checbox y etiqueta al body
    document.body.appendChild(checkbox);
    document.body.appendChild(label);
  }
}
function marcarCheckboxs() {
  for (let i = 0; i < 100; i++) {
    const check = document.getElementById(`id${i}`);
    check.checked = true;
  }
}
function desmarcarCheckboxs() {
  for (let i = 0; i < 100; i++) {
    const check = document.getElementById(`id${i}`);
    check.checked = false;
  }
}
function cambiarEstadoCheckboxs(accion) {
  for (let i = 0; i < 100; i++) {
    const check = document.getElementById(`id${i}`);
    if (accion === 1) {
      check.checked = true;
    } else {
      check.checked = false;
    }
  }
}
/*
 * Enunciados 5_4
 * Haz un programa que tenga 3 elementos <p> y al hacer clic
 * sobre ellos desaparezcan (se oculten) y al hacer clic con el
 * botón auxiliar del ratón los elimine. También deberá tener un
 * botón “Reaparecer” que hará que aparezcan todos los elementos
 *desaparecidos (pero no los eliminados).
 */
// Funcion para ocultar elemento
function ocultar(event) {
  const miID = event.target.id,
    // Ocultamos el elemento
    elementoMiID = document.getElementById(miID);
  elementoMiID.hidden = true;
}
// Funcion para eliminar elemento
function eliminar(event) {
  const miID = event.target.id;
  /*
   * Alert(evento.target.id);
   * Obtenemos el elemento
   */
  let elemento = document.getElementById(miID);
  // Eliminamos el elemento desde su padre
  elemento = elemento.parentNode;
  elemento.removeChild(elemento);
}
// Funcion para mostrar los ocultos
function volverAMostrar() {
  // Por cada elemento, pone hidden a false
  for (let i = 1; i <= 3; i += 1) {
    const elemento = document.getElementById(`miP + ${i}`);
    if (elemento !== null) {
      elemento.hidden = false;
    }
  }
}
// Asociamos los eventos, al acabar de cargarse la pagina
window.onload = () => {
  // Asociamos una vez cargada la pagina, a quien se oculta y a quien se elimina
  for (let i = 1; i <= 3; i++) {
    const elementoMIP = document.getElementById(`miP${i}`);
    if (typeof elementoMIP !== 'undefined') {
      elementoMIP.onclick = ocultar;
      elementoMIP.onauxclick = eliminar;
    }
  }
};
/*
 * Escribe un programa que escriba “Vamos a dormir, hay X ovejas
 *que contar”. Desde un número X hasta que no quede ninguna.
 */
function contarOvejas() {
  for (let i = 100; i > 0; i--) {
    document.write(
      `<p>Vamos a contar ovejas, quedan <b>' + ${i} + '</b> por contar</p>`
    );
  }
  document.write(
    '<p>Hemos contado todas las ovejas, ya no queda ninguna por contar</p>'
  );
}
/*
 * Programa que escribe las tablas de multiplicar de 1 a n.
 *Añade elementos al DOM.
 */
/*
 * Programa que escribe las tablas de multiplicar del 1 al
 *número indicado. Parte del ejercicio anterior.
 */
function TablaMultiplicar(j) {
  document.write(`<h2>Tabla de multiplicar del ${j}</h2>`);
  document.write('<ul>');
  // I++ significa i=i+1;
  for (let i = 1; i <= 10; i++) {
    document.write('<li>');
    document.write(`${j} x ${i} = ${j * i}`);
    document.write('</li>');
  }
  document.write('</ul>');
}
function dibujarTablaMultiplicar() {
  const numTablas = parseInt(
    window.prompt('¿cuantas tablas quieres?') || 'NULL'
  );
  for (let k = 1; k <= numTablas; k += 1) {
    document.write('<div>');
    TablaMultiplicar(k);
    document.write('</div>');
  }
}
/*  Dibujar una escalera con Javascript. Utiliza CSS */
function escaleraDivs() {
  const numero = 50;
  for (let i = 1; i <= numero; i++) {
    /*
     *       Document.write(
     *'<div style="width:' + 50 * i + 'px;background-color:black;height:50px;"></div>');
     */
    const elementoDIV = document.createElement('div');
    elementoDIV.style.width = `${numero * i}px`;
    elementoDIV.style.background = 'black';
    elementoDIV.style.height = '50px';
    document.body.appendChild(elementoDIV);
  }
}
// # sourceMappingURL=enunciados5.js.map
