//crear una funcion para realizar la peticion.


async function obtenerUsuarioAleatorio()
{
    try
    {
        let respuesta=await fetch('https://randomuser.me/api/');
        let datos=await respuesta.json();
        return datos.results[0];
    }
    catch(error)
    {
        throw new error ("Error en conexion",error);
     
    }
}


function agregarUsuario(usuario)
{
    let contenedorUsuario=document.getElementById("usuarios");

    let nuevoUsuarioDiv=document.createElement("div");

    nuevoUsuarioDiv.innerHTML=`
    <img src="${usuario.picture.medium}" alt="usuario"></img>
    <p>Nombre:${usuario.name.first} </p>
    <p>Apellido:${usuario.name.last}</p>
    <p>E-mail:${usuario.email}</p>`

    contenedorUsuario.appendChild(nuevoUsuarioDiv);
}

let obtenerUsuarioBtn=document.getElementById("obtenerUsuarioBtn");

obtenerUsuarioBtn.addEventListener('click',async()=>{
    try
    {
        let usuario = await obtenerUsuarioAleatorio();

        agregarUsuario(usuario);

    }
    catch(error)
    {
        console.log("hay un error",error);
    }

})