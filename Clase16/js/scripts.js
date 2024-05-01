





saludar();
saludar();
saludar();

//definicion de la funcion
function saludar()
{
    var x=0;
    do{
        console.log("Hola mundo..... ");
        x++;
    }while(x<5);    
    //alert("Hola Mundo....");
}


function saludarConNombre(nombre)
{
    console.log("Hola Mundo, mi nombres es: "+nombre);
    //alert("Hola Mundo, mi nombres es: "+nombre);
}


saludarConNombre("Nicolas");
saludarConNombre("Julieta");
saludarConNombre("Valentina");


function sumar(valor1,valor2)
{
    var resultado=valor1+valor2;
    console.log("El resultado es:"+(valor1+valor2));

    return resultado;
}

nota = sumar(4,4);



if(nota>7)
{
    console.log("AProbo");
}
else
{
    console.log("No esta Aprobado");
}



function div(a,b=1)
{
var resultado=a/b;
console.log(resultado);
}

div(4,2);


function saludoCompleto(nombre, apellido)
{
    var nombreCompleto;
    nombreCompleto="Felicitaciones "+nombre+" "+apellido+" Aprobo el curso";
    return nombreCompleto;
}


nota=7;

if(nota>=7)
{
    
    console.log(   saludoCompleto("nicolas","Fernandez")   );
    
}








