//basica

let persona={
    "nombre":"Nicolas",
    "edad":"43",
    "ciudad":"QUilmes"
};

console.log(persona.nombre);
console.log(persona.ciudad);

//json anidados

let pelicula = {
    "titulo":"El cavallero de la noche",
    "fechaEstreno":"2018-01-01",
    "publico":"mayores de 14",
    "director":
              {
                "nombre":"Chritopher Nolan",
                "origen":"Ingles",
                "edad":"50"
              },
    "actores":["Actor1","Actor2","Actor3"]
};

console.log(pelicula);

console.log(pelicula.fechaEstreno);
console.log(pelicula.actores[1]);
console.log(pelicula.director.nombre);

