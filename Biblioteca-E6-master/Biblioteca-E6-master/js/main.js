class Component {
  add(child) { }

  remove(child) { }

  getChild(index) { }
}

class Composite extends Component {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.almacen = [];
  }

  add(child) {
    this.almacen.push(child);
  }

  remove(child) {
    const index = this.almacen.indexOf(child);
    if (index !== -1) {
      this.almacen.splice(index, 1);
    }
  }

  getChild(index) {
    return this.almacen.filter((child, indexChild) => indexChild === index);
  }

  operation() {
    return this.almacen.reduce((acumulador, siguiente) => acumulador + siguiente.operation(), 0);
  }

  toString() {
    return `${this.nombre} ${this.almacen}`;
  }
}


class Leaf extends Component {
  constructor(titulo, numeroEjemplares) {
    super();
    this.titulo = titulo;
    this.numeroEjemplares = numeroEjemplares;
  }

  operation() {
    return this.numeroEjemplares;
  }

  toString() {
    return `${this.titulo} ${this.numeroEjemplares}`;
  }
}

const biblioteca = new Composite('Biblioteca Pública Miguel González Garcés');

const genero = new Composite('Genero');

const drama = new Composite('Drama');
const aventuras = new Composite('Aventuras');
const cienciaFiccion = new Composite('Ciencia Ficcion');

const autor = new Composite('Autor');

const cervantes = new Composite('Cervantes');
const lopeDeVega = new Composite('Lope De Vega')
const pedroCalderonDeLaBarca = new Composite('Pedro Calderón de la Barca')

const libroUNOCervantes = new Leaf('Don Quijote', 100);
const libroDOSCervantes = new Leaf('La Galatea', 40);
const libroTRESCervantes = new Leaf('La Gitanillas', 20);

const libroUNOLopeDeVega = new Leaf('La Dorotea', 25);
const libroDOSLopeDeVega = new Leaf('Los locos de Valencia', 15);
const libroTRESLopeDeVega = new Leaf('Mujeres y criados', 5);


const libroUNOPedroCalderonDeLaBarca = new Leaf('El mágico prodigioso', 10);
const libroDOSPedroCalderonDeLaBarca = new Leaf('El escondido y la tapada', 67);
const libroTRESPedroCalderonDeLaBarca = new Leaf('No hay cosa como el callar', 5);

biblioteca.add(genero);

genero.add(drama);
genero.add(aventuras);
genero.add(cienciaFiccion);

drama.add(autor);
aventuras.add(autor);
cienciaFiccion.add(autor);

autor.add(cervantes);
autor.add(lopeDeVega);
autor.add(pedroCalderonDeLaBarca);

cervantes.add(libroUNOCervantes);
cervantes.add(libroDOSCervantes);
cervantes.add(libroTRESCervantes);

lopeDeVega.add(libroUNOLopeDeVega);
lopeDeVega.add(libroDOSLopeDeVega);
lopeDeVega.add(libroTRESLopeDeVega);

pedroCalderonDeLaBarca.add(libroUNOPedroCalderonDeLaBarca);
pedroCalderonDeLaBarca.add(libroDOSPedroCalderonDeLaBarca);
pedroCalderonDeLaBarca.add(libroTRESPedroCalderonDeLaBarca);

const tablaProductos = document.getElementById('tablaEjemplares');
const selectOrdenar = document.getElementById('selectOrdenar');
let txtBuscador = document.getElementById('txtBuscador');
txtBuscador.value = '';


let datos = (objecto) => {
  let filaBiblioteca = '';
  filaBiblioteca += `<tr><td id="${objecto.nombre}">${objecto.nombre}</td><td>${objecto.operation()}</td></tr>`;
  objecto.almacen.forEach(element => {
    filaBiblioteca += `<tr><td id="${element.nombre}">${element.nombre}</td><td>${element.operation()}</td></tr>`;
  });
  tablaProductos.innerHTML += filaBiblioteca;
};


window.onload = datos(genero);


