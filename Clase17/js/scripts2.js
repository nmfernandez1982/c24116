/* variable global */

var global ="Variable Global";

function escribirTexto()
{
    console.log(global);
    var habilitado=true;
    if(habilitado)
    {
        console.log("imprimo por segunda vez: "+global);
    }
}
escribirTexto(); 

console.log("imprimo por tercera vez: "+global);

/* variable local */

function escribirTexto2()
{
    var local="Variable Local";
    console.log("imprimo por primera vez (local): "+local);
}


escribirTexto2();
//console.log("imprimo por segunda vez (local): "+local);


/* variable local 2.0 */

function escribirTexto3()
{
    var habilitado=true;
    if(habilitado)
    {
        //let y const
        let bloque="Alumno Habilitado para cursar";
        console.log(bloque);
    }
    console.log(bloque);
    
}

escribirTexto3();









