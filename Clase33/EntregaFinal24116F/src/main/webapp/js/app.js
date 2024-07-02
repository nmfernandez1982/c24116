document.addEventListener('DOMContentLoaded', function() 
{
const form = document.getElementById('itemForm');
const itemsTableBody = document.getElementById('itemsTableBody');




   
// Función para cargar los elementos desde la API
function loadItems() {
    fetch('http://localhost/_Final2024php/api/api.php')
    .then(response => response.json())
    .then(data => {
        itemsTableBody.innerHTML = '';
        if (data.peliculas) 
            {
            data.peliculas.forEach(pelicula => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pelicula.id}</td>
                    <td>${pelicula.titulo}</td>                  
                    <td>${pelicula.genero}</td>
                    <td>${pelicula.duracion}</td>
                    <td>${pelicula.director}</td>
                    <td>${pelicula.reparto}</td>
                    <td>${pelicula.sinopsis}</td>                    
                    <td>
                        <button class="btn btn-danger" onclick="deleteItem(${pelicula.id})">Eliminar</button>
                    </td>
                    <td>
                        <button class="btn btn-success" onclick="editItem(
                        ${pelicula.id}, 
                        '${pelicula.titulo}',                     
                        '${pelicula.genero}', 
                        '${pelicula.duracion}', 
                        '${pelicula.director}', 
                        '${pelicula.reparto}',
                        '${pelicula.sinopsis}')">Editar</button>
                    </td>
                `;
                itemsTableBody.appendChild(row);
            });
        } 
        else 
        {
            console.error('No se encontraron películas');
        }
    })
    .catch(error => console.error('Error:', error));
}
   

  





 
  

    loadItems();
});