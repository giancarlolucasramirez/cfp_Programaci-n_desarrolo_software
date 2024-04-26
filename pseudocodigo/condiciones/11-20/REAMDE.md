<h2> ejercicio11 </h2>
<h3> positivo o negativo  </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "ingrese un numero ya sea positivo o negativo"
            leer valor1
            Si valor1 > 0  Entonces
            escribir "su numero es positivo"
            SiNo
                escribir "su numero es negativo"
            Fin Si
        FinAlgoritmo
  </code>
</pre>
<br>


<h2> ejercicio12 </h2>
<h3> par o impar  </h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "ingrese un numero "
            leer valor1
            Si valor1 %2 = 0  Entonces	
                escribir "su numero es par"
            SiNo
                escribir "su numero es impar"
            Fin Si
        FinAlgoritmo
    </code>
</pre>
<br>

<h2> ejercicio13 </h2>
<h3> Día de la Semana   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir semana Como real
            escribir " escribe un número del 1 al 7  "
            leer semana
            Si semana = 1 Entonces
                escribir "lunes"
            Fin Si
            Si semana = 2 Entonces
                escribir "martes"
            Fin Si
            Si semana = 3 Entonces
                escribir "miercoles"
            Fin Si
            Si semana = 4 Entonces
                escribir "jueves"
            Fin Si
            Si semana = 5 Entonces
                escribir "viernes"
            Fin Si
            Si semana = 6 Entonces
                escribir "sabado"
            Fin Si
            Si semana = 7 Entonces
                escribir "domingo"
            Fin Si
        FinAlgoritmo
    </code>
</pre>
<br>

<h2> ejercicio14 </h2>
<h3> mayor de tres  números   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo

            definir valor1,valor2,valor3 Como real

            escribir "ingresa el primer valor"
            leer valor1
        
            escribir "ingresa el segundo valor"
            leer valor2
        
            escribir "ingrese el tercer valor"
            leer valor3


            Si (valor1>valor2 y valor1>valor3)  Entonces
            escribir "el numero mayor es " valor1
            
            fin si
            Si (valor2>valor1 y valor2>valor3) Entonces
                escribir "su numero mayor es " valor2
                Fin Si
        
            Si (valor3>valor1 y valor3>valor2) Entonces
                escribir "su numero mayor es" valor3
            fin si
        
        
            Si (valor1==valor2 y valor1==valor3) Entonces
                escribir "son el mismo número" 
            Fin Si
       FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio15 </h2>
<h3> Aprobado Reprobado   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "ingrese su calificación "
            leer valor1
            Si valor1 >= 60   Entonces
                
                escribir "aprobado"
            SiNo
                escribir "reprobado"
            Fin Si	
        FinAlgoritmo
   </code>
</pre>
<br>

<h2> ejercicio16 </h2>
<h3> rango de números   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "ingrese su rango "
            leer valor1
            Si valor1 >= 0  y valor1 <= 10  Entonces
                
                escribir "está en rango"
            SiNo
                escribir "está fuera de rango"
            Fin Si
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio17 </h2>
<h3> categoría de Edad </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir edad Como real
            escribir " escribe tu edad "
            leer edad
            Si edad  <= 12 Entonces
                escribir "niño"
            Fin Si
            Si edad  >=13 Entonces
                escribir "adolecente"
            Fin si 
            Si edad >=18  Entonces
                escribir "adulto"
            Fin Si
            Si edad >= 65 Entonces
                escribir "adulto mayor"
            fin si
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio18 </h2>
<h3> calculadora de descuentos    </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "cuánto cuesta su producto ?"
            leer valor1
            Si valor1 > 100 Entonces
                escribir "su producto cuesta " valor1 *10/100
            SiNo
                escribir "su producto cuesta " valor1
            Fin Si
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio19 </h2>
<h3> Divisibilidad por 5 y 3   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir valor1 Como Real
            escribir "ingrese un numero "
            leer valor1
            Si valor1 %5 = 0  Entonces
                
                escribir "su numero es divisible a 5"
            sino 
                Escribir "no hay visibilidad de 5"
            Fin Si
            Si valor1 %3 = 0  Entonces
                
                escribir "su numero es divisible  a 3 "
            sino 
                Escribir "no hay visibilidad de 3"
            Fin Si
        FinAlgoritmo

 </code>
</pre>
<br>



<h2> ejercicio20 </h2>
<h3> Día Hábil o Fin de Semana:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir dia Como real
            escribir " escribe un numero del 1 al 7 "
            leer dia
            Si dia  <=5  Entonces
                escribir "día habil"
            Fin Si
            Si dia  >=6 y  dia <=7 Entonces
                escribir "fin de semana"
                fin si
        FinAlgoritmo

 </code>
</pre>

