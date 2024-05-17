//crear una nueva funcion
function agregarImagen()
{
  //crear un nuevo nodo de imagen
  var nuevaImagen=document.createElement("img");

  nuevaImagen.src="messi.jpeg";
  nuevaImagen.alt="Messi";

  var nuevo=document.getElementById("nuevo");

  nuevo.appendChild(nuevaImagen);
}

var btnNuevo=document.getElementById("btnNuevo");
btnNuevo.addEventListener("click",agregarImagen);