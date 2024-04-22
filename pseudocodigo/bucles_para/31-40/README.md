<h2> ejercicio31 </h2>
<h3> Suma de Números:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir num, resultado como entero
            para num =1 Hasta 20 con paso 1 Hacer
                resultado = resultado + num      
            FinPara
            escribir resultado
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio32 </h2>
<h3>Tabla de Multiplicar:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir num como entero
            escribir "ingrese un número"
            leer num
            
            para n=0 Hasta 5 Con Paso 1 Hacer
                
                    
                
                escribir num "x" n "=" num * n 
            FinPara
        FinAlgoritmo
 </code>
</pre>
<br>



<h2> ejercicio33 </h2>
<h3> Factorial   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            resultado = 1
            definir factor como entero
            escribir "ingrese un numero"
            leer factor
            para n=1 Hasta factor Con Paso 1 Hacer
                resultado = resultado  * n 
            FinPara
            escribir resultado
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio34 </h2>
<h3> Contador Regresivo  </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir num como entero 
            para num = 10 hasta 1 con paso -1 Hacer
                escribir num 
            FinPara
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio35 </h2>
<h3> Impresión de Caracteres:  </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir txt como caracter 
            definir num  Como entero
            escribir "escribe un numero"
            leer num
            para i = 1 hasta num Con Paso  1 hacer 
                txt = txt + " * "
                escribir txt
            FinPara
        FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio36 </h2>
<h3> mayor de tres  números   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
        
            definir num como entero
            escribir "ingrese un número"
            leer num
            
            para n=0 Hasta 10 Con Paso 1 Hacer
                si n = 0 Entonces
                    resultado = 1
                SiNo
                    resultado = resultado * num 
                    
                FinSi
                escribir num "^" n "=" resultado
            FinPara
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio37 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            Para i = 2 Hasta 20 Con Paso 2 Hacer
                total = total +i
            Fin Para
            escribir total
        FinAlgoritmo
 </code>
</pre>
<br>





<h2> ejercicio38 </h2>
<h3>Contador de Dígitos:   </h3>
<pre>
    <code> 
       Algoritmo sin_titulo
            definir num Como entero
            definir linea Como Caracter
            Escribir "ingrese un número"
            leer num 
            
            Para i = 1 Hasta num Con Paso 1 Hacer
                
                linea = concatenar  (linea,ConvertirATexto(i))
                linea = concatenar  (linea, ",")
                escribir linea 
            Fin Para
    FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio39 </h2>
<h3>Secuencia Fibonacci   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir anterior,actual,resultado Como real
            resultado = 0
            
            
            Para i = 0 Hasta 60 Con Paso 1 Hacer
                escribir actual	
                Si i = 0  Entonces
                    actual =1
                    anterior = 0 
                SiNo
                    resultado = anterior + actual
                    anterior = actual 
                    actual = resultado
                Fin Si
            Fin Para
        
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio40 </h2>
<h3>Patrón Numérico   </h3>
<pre>
    <code> 
 Algoritmo sin_titulo
	definir num,contador,i Como Real
	
	contador = 1 
	escribir "ingrese un numero"
	leer num 
	Para i = 0 Hasta 1 Con Paso 1 Hacer
		Si num <10 Entonces
			i = 1 
		SiNo
			i = 0
			contador = contador +1
			num = num/10
		Fin Si
		
	Fin Para
	escribir "este numero tiene " contador " digitos"
FinAlgoritmo
 </code>
</pre>
<br>