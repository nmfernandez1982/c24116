package clase2;
import java.time.LocalDate;
import java.util.Scanner;

import java.time.LocalDate;

public class Ejercicio1 {

	public static void main(String[] args) 
	{
		
		//tipos de datos primitivos
		int edad=43;
		double altura=1.84;
		boolean esEstudiante=false;
		char inicial='N';
		float peso=92.5f;
		long otroDato=1000000;
		
		System.out.println("hola Mundo.....");
		System.out.println("El valor de la variable entera es:"+edad);
		System.out.println("El valor de la variable double es:"+altura);
		System.out.println("El valor de la variable boolean es:"+esEstudiante);
		System.out.println("El valor de la variable char es:"+inicial);
		System.out.println("El valor de la variable float es:"+peso);
		System.out.println("El valor de la variable long es:"+otroDato);
		
		String nombre="Nicolas";		
		System.out.println("El valor de la String long es:"+nombre);
		
		//Wrapper
		Integer numeroEntero=Integer.valueOf(43);
		
		LocalDate fechaActual=LocalDate.now();
		
		System.out.println("la fecha de hoy es:"+fechaActual);
		
		//array
		int[] numeros=new int[5];
		numeros[0]=21;
		numeros[1]=2;
		
		int[] numeros1= {34,2,7,1,8};
		
		String[] nombres= {"Nicolas","Pedro","Andrea"};
		
		String numeroString="123";
		int numero=Integer.parseInt(numeroString);		
		System.out.println(numero);
		
		//concionales y la clase Scanner
		
		
		if(edad==18)
		{
			//codigo si la respuesta es true
			System.out.println("Que suerte tenes 18");
		}
		else if(edad==19)
		{
			System.out.println("Que suerte tenes 19");
		}
		else
		{
			System.out.println("ya sos grande!!!!");

		}
		
		
		Scanner ingreso=new Scanner(System.in);
		System.out.print("Ingrese un valor: ");
		int opc=ingreso.nextInt();
		
		switch (opc) 
		{
		case 1:		
			System.out.println("La opcion ingresada es 1");
			break;
		case 2:
			 System.out.println("La opcion ingresada es 2");
			 break;
		case 3:
			 System.out.println("La opcion ingresada es 3");
		     break;
		default:
			System.out.println("La opcion ingresada es otra");
			break;
		}
		
		//estructura de iteracion 
		
		opc=0;
		
		do {
			System.out.println("interacion dentro del do: "+opc);
			opc++;
		}while(opc!=5);
		
		opc=0;
		
		while(opc!=5)
		{
			System.out.println("Interacion dentro del while: "+opc);
			opc++;
		}
		
		
		
		
		
		
	}

}
