

//crear un nuevo elemento
var nuevoParrafo=document.createElement("p");

//crear un nuevo contenido
var texto=document.createTextNode("Hola Mundo.....");

//añadir el texto al elemnto
nuevoParrafo.appendChild(texto);

var nuevo=document.getElementById("nuevo");

nuevo.appendChild(nuevoParrafo);
