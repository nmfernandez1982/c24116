//model persona.

class Persona
{
    //Constructor--> funcion
    constructor(nombre,edad)
    {
        this.nombre=nombre;
        this.edad=edad;
    }
    
    //metodo

    saludar()
    {
        console.log("hola Mundo...");
    }
}


var persona1=new Persona('Nicolas',43);
const persona2=new Persona('Julieta',45);
let persona3=new Persona('Luz',14);

persona1.saludar();
persona2.saludar();
persona3.saludar();



//int->Integer
//float-> Float

//objeto String --> pero ademas tienen funciones
