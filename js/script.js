class CAutores {
  constructor() {
    this.datosAutores = [];
  }

  agregarAutores(nombre, apellido, nacionalidad, mejorObra, anioPubli, edadPubli) {
    this.datosAutores.push({ nombre: nombre, apellido: apellido, nacionalidad: nacionalidad, mejorObra: mejorObra, anioPubli: anioPubli, edadPubli: edadPubli });
  }

  generarTablaAutores() {
    const tablaBody = document.querySelector('#autoresTable tbody');
    tablaBody.innerHTML = '';

    this.datosAutores.forEach(autor => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${autor.nombre}</td>
        <td>${autor.apellido}</td>
        <td>${autor.nacionalidad}</td>
        <td>${autor.mejorObra}</td>
        <td>${autor.anioPubli}</td>
        <td>${autor.edadPubli}</td>
          `;
      tablaBody.appendChild(fila);
    });
  }

  function AutoresArgentinos() {
    const nombresArgentinos = [];
    for (let i = 0; i < this.datosAutores.length; i++) {
      if (this.datosAutores[i].nacionalidad === "Argentino") {
        nombresArgentinos.push(this.datosAutores[i].nombre + " " + this.datosAutores[i].apellido);
      }
    }
    return nombresArgentinos;
  }

  function AutoresAnioPublicacion() {
    const nombresPublicacion1960_1980 = [];
    for (let i = 0; i < this.datosAutores.length; i++) {
      if (this.datosAutores[i].anioPubli >= 1960 && this.datosAutores[i].anioPubli <= 1980) {
        nombresPublicacion1960_1980.push(this.datosAutores[i].nombre + " " + this.datosAutores[i].apellido);
      }
    }
    return nombresPublicacion1960_1980;
  }

  function promedioEdadPublicacion() {
    let sumaEdades = 0;
    for (let i = 0; i < this.datosAutores.length; i++) {
      sumaEdades += this.datosAutores[i].edadPubli;
    }
    const totalAutores = this.datosAutores.length;
    if (totalAutores === 0) return 0;
    return sumaEdades / totalAutores;
  }

  function mostrarNombresAutores() {
    const nombresAutores = [];
    for (let i = 0; i < this.datosAutores.length; i++) {
      nombresAutores.push(this.datosAutores[i].nombre + " " + this.datosAutores[i].apellido);
    }
    return nombresAutores;
  }
}

const autores = new CAutores();

autores.agregarAutores("Gabriel", "Garcia Marquez", "Colombiano", "Cien años de soledad", 1967, 40);
autores.agregarAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),
autores.agregarAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
autores.agregarAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
autores.agregarAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56),
autores.agregarAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38),
autores.agregarAutores("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29),
autores.agregarAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31);

autores.generarTablaAutores();

document.getElementById("resultado1").textContent = "Todos los autores de que sean de Nacionalidad Argentina: " + autores.AutoresArgentinos().join(", ");
document.getElementById("resultado2").textContent = "Todos los autores que publicaron entre 1960 a 1980: " + autores.AutoresAnioPublicacion().join(", ");
document.getElementById("resultado3").textContent = "Promedio de la edad de publicación: " + autores.promedioEdadPublicacion();
document.getElementById("resultado4").textContent = "Todos los autores: " + autores.mostrarNombresAutores().join(", ");
