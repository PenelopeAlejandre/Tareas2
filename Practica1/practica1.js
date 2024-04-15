function changeName(){
document.getElementById("cambiar-mombre");
    let nuevoNombre = prompt("¿Cuál es tu nombre?");
    //if (nuevoNombre) { // Verifica si se ingresó un nombre }
    document.getElementById("nombre-usuario").innerHTML = nuevoNombre;
    return nombre;
}