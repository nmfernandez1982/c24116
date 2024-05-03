function escribirNombre()
{
    var nombre;
    nombre="Nicolas Fernandez";
    return nombre;
}

var dato1=escribirNombre();
console.log(dato1);

//funcion anonima -> funcion sin nombre

let otraFuncion = function(a,b)
                  {
                    return a+b;
                  }  

console.log("El valor de la variable es: "+otraFuncion(50,50));

