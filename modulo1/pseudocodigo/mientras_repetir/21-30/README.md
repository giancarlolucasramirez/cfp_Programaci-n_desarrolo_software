<h2> ejercicio21</h2>
<h3> Contador Ascendente:   </h3>
<pre>
    <code> 
        Algoritmo Contador Ascendente
            num = 0
            Mientras (num <10) Hacer
                
                NUM <- NUM +1 
                ESCRIBIR NUM 
            Fin Mientras
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio22 </h2>
<h3> Contador Descendente   </h3>
<pre>
    <code> 
        Algoritmo Contador_Descendente
            num = 11
            Mientras (num >1) Hacer
                num <- num -1  
                ESCRIBIR num 
            Fin Mientras
        FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio23 </h2>
<h3> Suma de Números Positivos:  </h3>
<pre>
    <code> 
        Algoritmo  Suma de Números Positivos
        definir valor1,valor2,total como entero
        total = 0
        Repetir
            total = total + valor1 
            Si valor1 > 0 Entonces
                escribir "desea seguir sumando escriba 1 si silo desea, en caso contrario ponga un numero negativo"
                leer valor2
            Fin Si
            
            Si valor2 = 2 o valor1 < 0 Entonces
                
                valor1 = -1 
                
            Fin Si
            escribir "ingrese numero"
            leer valor1
           Hasta Que valor1 < 0 o valor2 =2 	
            escribir total
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio24 </h2>
<h3> Adivina el Número  </h3>
<pre>
    <code> 
        Algoritmo Adivina el Número
            definir numero_a Como Entero
            escribir "ingrese un numero del 1 al 100"
            leer numero_a
            Mientras numero_a <> 5  Hacer
                leer numero_a
                si numero_a = 5 entonces 
                    escribir "felicidades adivinaste el número"           
                Fin Si
            Fin Mientras
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio25 </h2>
<h3>Validación de Contraseña:</h3>
<pre>
    <code> 
        Algoritmo Validación_de_Contraseña
            definir contrapre, contraing como cadena
            contrapre <- "gianca48"
            Repetir
                escribir "ingrese la contraseña: "
                leer contraing
                
                Si contraing <> contrapre Entonces
                    escribir "contraseña incorrecta.Intente de nuevo."
                
                Fin Si
            Hasta Que contraing = contrapre
            Escribir "acceso concedido"
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio26 </h2>
<h3> Número Positivo:  </h3>
<pre>
    <code> 
        Algoritmo Número_Positivo
            definir valor1 Como Real
            Repetir
                escribir "ingrese un numero"
                leer valor1
                Si valor1 < 0 Entonces
                    escribir " el número ingresado es negativo. intente de nuevo."
                Fin Si
            Hasta Que valor1 >= 0 
            escribir "numero positivo obtenido"  
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio27 </h2>
<h3> Suma_de_Números_Pares  </h3>
<pre>
    <code> 
        Algoritmo Suma_de_Números_Pares
            definir num,sumpar Como Entero
            definir continuar Como Caracter
            sumpar <- 0
            continuar <- "s"
            Mientras continuar = "s" Hacer
                escribir "ingrese un numero"
                leer num
                Si num % 2 = 0 Entonces
                    sumpar = sumpar + num
                
                Fin Si
                escribir "desea continuar ingresando números S/N"
                leer continuar
            Fin Mientras
            
            escribir " la suma de los numeros pares es ", sumpar
            
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio28 </h2>
<h3> Adivina el Número (Repetir Hasta Acertar):   </h3>
<pre>
    <code> 
        Algoritmo Adivina_el_Número
            definir alazar, intento, adivinanza Como Entero
            alazar <- Aleatorio(1,50) 
            intento <- 0
            Repetir
                escribir " adivina un número del 1 al 50 "
                leer adivinanza
                Si adivinanza < alazar Entonces
                    escribir "escribe un numero mayor"
                SiNo
                    si adivinanza > alazar Entonces
                        escribir "intenta un numero menor"
                    FinSi
                    
                Fin Si
                intentos <- intentos +1 
            Hasta Que adivinanza = alazar
            escribir "  correcto, haz adivinado el numero en  ", intentos, " intentos" 
        FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio29 </h2>
<h3> Cálculo de Factorial   </h3>
<pre>
    <code> 
        Algoritmo Cálculo_de_Factorial
            definir num,fac,i Como Entero
            escribir "ingrese un numero no negativo"
            leer num
            Mientras num < 0 Hacer
                escribir "el número debe ser no negativo"
                leer num
                
            Fin Mientras
            fac <- 1
            i <- 1
            Mientras i <= num Hacer
                fac <- fac * i
                i<- i +1
            Fin Mientras
            escribir "el factoriar de" num, "es " fac
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio30 </h2>
<h3>Validación_de_Entrada: </h3>
<pre>
    <code> 
        Algoritmo_Validación_de_Entrada: 
            definir contra como cadena
            Repetir
                escribir "ingrese una contraseña"
                leer contra
                Si Longitud(contra) < 8 Entonces
                    escribir " la contraseña debe tener al menos 8 carácteres, intente de nuevo"
                Fin Si
            Hasta Que Longitud(contra) = 8 
            escribir "la contraseña es valida"
        FinAlgoritmo    
 </code>
</pre>





