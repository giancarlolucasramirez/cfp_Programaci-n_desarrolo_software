<h2> ejercicio61 </h2>
<h3></h3>
<pre>
    <code> 
     Funcion existe <- validarfila(num,f,sudoku)
	para vc = 1 Hasta 9 Hacer
		Si num == sudoku[f, vc] Entonces
			existe = Verdadero
			vc = 9
		FinSi
	FinPara
FinFuncion

Funcion existe <- validarcolumna(num,c,sudoku)
	para vf = 1 Hasta 9 Hacer
		Si num == sudoku[vf, c] Entonces
			existe = Verdadero
			vf = 9
		FinSi
	FinPara
FinFuncion

Funcion existe <- validarbloque(num,c,f,sudoku)
	si f >= 1 y f<=3 Entonces
		inicio_fila = 1
	SiNo
		si f >= 4 y f <= 6 Entonces
			inicio_fila = 4 
		SiNo
			inicio_fila = 7
		FinSi
	FinSi
	
	si c >= 1 y c<=3 Entonces
		inicio_columna = 1
	SiNo
		si c >= 4 y c <= 6 Entonces
			inicio_columna = 4 
		SiNo
			inicio_columna = 7
		FinSi
	FinSi
	
	para i = inicio_fila Hasta  inicio_fila + 2 Hacer
		Para j = inicio_columna Hasta inicio_columna + 2 Hacer
			si num == sudoku[i,j] Entonces
				existe = Verdadero
				i = inicio_fila + 2
				j = inicio_columna + 2 
			FinSi
		FinPara
	FinPara
	
FinFuncion


Algoritmo sin_titulo
	Definir num, contador, filas, columnas, sudoku, error Como Entero
	Definir existe Como Logico
	Dimension sudoku[9,9]
	
	para f = 1 Hasta 9 Hacer
		para c = 1 Hasta 9 Hacer
			
			para num = 1 Hasta 9 Hacer
				existe = Falso
				Repetir
					
					existe = validarfila(num,f, sudoku)
					si existe == Falso Entonces
						existe = validarcolumna(num,c , sudoku)
						si existe == falso Entonces
							existe = validarbloque(num,c,f,sudoku)
						FinSi
					FinSi
					
					
					
					
					
					si existe == Falso Entonces
						sudoku[f,c] = num
						num = 9
					FinSi
					
				Hasta Que existe == Verdadero 
			FinPara
			Si sudoku[f,c] == 0 Entonces
				f = 1
				c = 1
			FinSi
			
		FinPara
	FinPara
	
	Para i = 1 Hasta 9 Con Paso 1 Hacer
		Para j = 1 Hasta 9 Con Paso 1 Hacer
			si j <> 3 y j <> 6 Entonces
				Escribir sudoku[i,j], " " Sin Saltar
			SiNo
				Escribir sudoku[i,j], "|" Sin Saltar
			FinSi
		FinPara
		Si i == 6 o i  == 3 Entonces
			Escribir " "
		FinSi
		Escribir ""
	Fin Para
FinAlgoritmo
 
      
 </code>
</pre>
<br>

<h2> ejercicio62 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
    Funcion  resultado <- pedirnum  (x,z )
	
	
	
	resultado = x+z;
FinFuncion


Algoritmo sin_titulo
	resultado = pedirnum(5,6);
	escribir "resultado es ", resultado;
FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio63 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
     

Funcion resultado <- pedirnum(num)
	
	Escribir "ingrese un numero"
	leer num
	fac=1
	i = 1 
	Mientras i <= num Hacer
		fac <- fac * i
		i<- i +1
		resultado= fac
	Fin Mientras	
	
FinFuncion

Algoritmo sin_titulo
	resultado = pedirnum(num);

	escribir "resultado es ",resultado;
FinAlgoritmo
 
 </code>
</pre>
<br>

<h2> ejercicio64 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Funcion resultado <- pedirnum(valor1,valor2,valor3)
        
        Escribir "ingrese un numero"
        leer valor1
        Escribir "ingrese un numero"
        leer valor2
        Escribir "ingrese un numero"
        leer valor3
        
        Si (valor1>valor2 y valor1>valor3)  Entonces
            escribir "el numero mayor es ", valor1
            
        fin si
        Si (valor2>valor1 y valor2>valor3) Entonces
            escribir "su numero mayor es ", valor2
        Fin Si
        
        Si (valor3>valor1 y valor3>valor2) Entonces
            escribir "su numero mayor es ", valor3
        fin si
        
        
        
        FinFuncion

        Algoritmo sin_titulo
            resultado = pedirnum(num1,num2,num3);
            Escribir resultado
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio65 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
            Funcion resultado <- pedirnum(valor1)
            escribir "ingrese el radio"
            leer valor1
            
            resultado = (valor1 * valor1 )* 3.1416
            
        FinFuncion


        Algoritmo sin_titulo
            resultado <- pedirnum(valor1)
            escribir "el area del circulo es ; " resultado
            
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio66 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
            Funcion resultado <- pedirnum(valor1,valor2)
            escribir "ingrese un número"
            leer valor1
            escribir "ingrese un número"
            leer valor2
            resultado = 1
            
            para i=1 Hasta valor2 Con Paso 1 Hacer
                
                resultado = valor1*resultado
                
            FinPara
        FinFuncion


        Algoritmo sin_titulo
            resultado <- pedirnum(valor1,valor2)
            escribir " su potencia es ", resultado 

        FinAlgoritmo 
 </code>
</pre>
<br>

<h2> ejercicio67 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
      
         Funcion  resultado <- pedirnum
            Dimension arrayNumeros[6]
            Dimension arrayOrdenado[6] 
            // Ingresar valores al array
            Para i <- 1 Hasta 6 Hacer
                Escribir "Ingrese el número ", i, ": "
                Leer arrayNumeros[i]
            FinPara
            
            // Copiar el array original al arrayOrdenado
            Para i <- 1 Hasta 6 Hacer
                arrayOrdenado[i] <- arrayNumeros[i]
            FinPara
            
            // Ordenar el arrayOrdenado de manera ascendente usando el método de burbuja
            Para i <- 1 Hasta 5 Hacer
                Para j <- 1 Hasta 6 - i Hacer
                    Si arrayOrdenado[j] > arrayOrdenado[j + 1] Entonces
                        // Intercambiar elementos
                        temp <- arrayOrdenado[j]
                        arrayOrdenado[j] <- arrayOrdenado[j + 1]
                        arrayOrdenado[j + 1] <- temp
                    FinSi
                FinPara
            FinPara
            Escribir " Original | Ordenado"
            Para i <- 1 Hasta 6 Hacer
                Escribir , arrayNumeros[i], "        | ", arrayOrdenado[i]
            FinPara
        FinFuncion


        algoritmo a
            
            
            resultado <- pedirnum
            
            
            FinAlgoritmo


 </code>
</pre>
<br>

<h2> ejercicio68 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Funcion resultado <- pedirnum(valor1,valor2,valor3)
        escribir "ingrese un número"
        leer valor1
        escribir "ingrese un número"
        leer valor2
        escribir "ingrese un número"
        leer valor3
        
        resultado = valor1+valor2+valor3
        
      FinFuncion

       Algoritmo sin_titulo
        resultado <- pedirnum(valor1,valor2,valor3) /3
        escribir " su promedio es ", resultado 
      FinAlgoritmo

 </code>
</pre>
<br>
<h2> ejercicio69 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Funcion  resultado <-  primo( num )
            definir divisor , limite Como Entero
            resultado = verdadero
            limite = redon(raiz(num))
            divisor =2
            Si num <= 1 Entonces
                resultado = falso
            SiNo
                Mientras resultado y divisor <= limite Hacer
                    Si num % divisor == 0 Entonces
                        resultado = falso 
                    SiNo
                        divisor = divisor +1 
                    Fin Si
                Fin Mientras
            Fin Si
        Fin Funcion





        Algoritmo sin_titulo
            leer num
            imprimir primo(num)
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio70 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
            Funcion resultado = grados( valor1 )
            resultado =  valor1 *(9/5) +32
            
        Fin Funcion

        Algoritmo sin_titulo
            resultado = grados( 50 )
            Escribir "su resultado es : ", resultado
        FinAlgoritmo

 </code>
</pre>
<br>
