const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector(".name"); // en Index, es una clase, falta el punto / se cambió el nombre de la variable
const blog = document.querySelector(".blog"); //Se quitó el # ya que es . , porque es una clase / se cambió el nombre de la variable
const loc = document.querySelector(".location"); // se cambió el nombre de la variable

async function displayUser(username) {
  //se necesita colocar el ASYNC  para que sea una funcion asincrona ya que estamos usando await
  nombre.innerHTML = "cargando..."; //se cambio el textContent por innerHTML
  const data = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.innerHTML = `${data.name}`; // se cambiaron las comillas a apostrofe grave
  blog.innerHTML = `${data.blog}`; //se cambio el textContent por innerHTML
  loc.innerHTML = `${data.location}`; //se cambio el textContent por innerHTML
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  nombre.innerHTML = `Algo salió mal: ${err}`; // se cambió el nombre de la variable
}

displayUser("stolinski").catch(handleError);