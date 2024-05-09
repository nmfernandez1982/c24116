//crear y guardar datos
localStorage.setItem('nombre','Nicolas');
localStorage.setItem('edad','43');


//obtener
var nombreUsuario=localStorage.getItem('nombre');
var nombreEdad=localStorage.getItem('edad');

//mostrar el dato
console.log(nombreUsuario);
console.log(localStorage.getItem('edad'));

//
localStorage.removeItem('edad');
console.log(localStorage.getItem('edad'));
localStorage.setItem('edad','45');
console.log(localStorage.getItem('edad'));