var miDato="2500";
var miDato2=2;



console.log("El valor de la variable es: "+miDato);


/*
number
string
boolean
*/

console.log("El Tipo de la variable es: "+typeof(miDato));

/*Operadores aritmeticos

+ -->tiene 2 funciones /Sumar o concatenar
-
*
/
%
*/


console.log("El resultado es:"+(miDato+miDato2));


/*Operadores Logicos*/
/*
< menor
> mayor
<= menor o igual
>= mayor o igual
!= distinto de
= operador de asignacion
== doble igualacion
=== triple igualacion
*/ 

var miDato="2500";

var miDato2=2;


console.log("El resultado es:"+(parseInt(miDato)+miDato2));




var nota=2;


function imprimirVariable()
{
    //obtengo el elemento
    var elemento=document.getElementById("resultado");
    if(nota>=7) //devuelve un resultado (true o false)
    {
        //El resultado de la expresion es verdadero (true)
        elemento.innerHTML=nota +" El alumno es promocion";
    }
    else if(nota>=4 && nota<7)
    {
        //El resultado de la expresion es falso (false)
        elemento.innerHTML=nota +" El alumno va a final"; 
    }
    else
    {
        elemento.innerHTML=nota +" El alumno perdio la materia"; 
    }  
}

function imprimirVariableDos()
{
//obtengo el elemento
var elemento=document.getElementById("resultado");
nota=6;
trabajo=7;

if(nota>=7 || trabajo>=8) //si la nota es >= que 7 YYYYY trabajo>=8
{
      //El resultado de la expresion es verdadero (true)
      elemento.innerHTML=nota +" El alumno esta dentro de la  promocion";
}
else
{
    elemento.innerHTML=nota +" El alumno perdio la materia"; 
}


/*
AND --> Y

T + T =T
F + T = F
T + F = F
F + F = F

OR --> O
T + T = T
F + T = T
T + F = T
F + F = F
*/ 
}

nota=7;

if(nota!=7) //true cuando no sea un numero 7
{
    console.log("EL resultado de la nota no es 7");
}
else
{
    console.log("EL resultado de la nota es 7");

}






