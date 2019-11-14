const letrasDNI = new Array<String>();
function solicitarDNI(): void {
  let codigoControl: string = 'TRWAGMYFPDXBNJZSQVHLCKET';
  let dni: number = parseInt(prompt('Introduzca su DNI para calcular su letra'));
  let resultado: number = dni % 23;
  let letraDNI: string = codigoControl.substring(resultado, resultado + 1);
  letrasDNI.push(letraDNI);
  if (dni != -1) {
    alert(letraDNI);
    setTimeout(solicitarDNI, 1000);
  } else document.getElementById('DNI').innerHTML = letrasDNI.join(' ');
}
function fechaActual(): void {
  setTimeout(function() {
    let fechaActual = new Date();
    document.getElementById('fechaActual').innerHTML =
      fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();
  }, 2000);
}
