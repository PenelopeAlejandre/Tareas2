var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  // El método correcto para prevenir el comportamiento por defecto es preventDefault(), no prevent().
  e.preventDefault();
  
  // Las variables "n", "e", y "na" no son descriptivas y pueden causar conflictos.
  // Se corregirán los nombres a "nombreInput", "edadInput" y "nacionalidadSelect".
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = edadInput.value;

  var i = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Corregir el uso del método classList.added() a classList.add() para agregar la clase de error.
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  // Se debe convertir "edad" a un número antes de realizar las comparaciones.
  // Además, las condiciones en el if estaban mal estructuradas, se corregirán.
  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  // Los valores de nacionalidad no se están comparando correctamente.
  // Se corregirá el uso de "===" para comparar.
  // Además, el método classList.added() se cambiará a classList.add().
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // El método classList.added() se cambiará a classList.add().
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  // La función crearElemento() se repetirá, se la eliminará y se moverá el código dentro de ella directamente.
  // Además, el nombre de la función y de sus variables internas no son descriptivos.
  // Se cambiará el nombre de "descripcion" a "label" y de "valor" a "inputValue".
  function crearElemento(label, inputValue) {
    var spanLabel = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    spanLabel.textContent = label + ": ";
    input.value = inputValue;
    elementoLista.appendChild(spanLabel);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  // La función crearElemento() se utilizará para cada campo de información.
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // El método parentNode.remove() eliminará todo el elemento que contiene el botón de borrar.
    botonBorrar.parentNode.remove();
  }
}