<h2> ejercicio71 </h2>
<h3></h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            Definir valor1,valor2,operacion Como Entero  
            Escribir "escriba el primer valor"
            leer valor1
            Escribir "escriba el segundo valor"
            leer valor2
            
            Escribir "qué operación deseas hacer ?"
            Escribir "si deseas sumar ingresa el numero 1"
            Escribir "si deseas restar ingresa el numero 2"
            Escribir "si deseas multiplicar ingresa el numero 3"
            Escribir "si deseas dividir ingresa el numero 4"
            leer operacion
            Segun operacion Hacer
                1:
                    Escribir "la suma de los numeros es de : " valor1 + valor2
                2:
                    Escribir "la resta de los numeros es de : " valor1 - valor2
                3:
                    Escribir "la multiplicación de los numeros es de : " valor1 * valor2
                4:
                    Escribir "la división de los numeros es de : " valor1 / valor2
                De Otro Modo:
                    Escribir "no ha ingresado ninguna operación básica"
            Fin Segun
    FinAlgoritmo


 </code>
</pre>
<br>
<h2> ejercicio72 </h2>
<h3></h3>
<pre>
    <code> 
        Funcion  fibonacci(limite,anterior,actual )
            si limite > 0 y anterior < limite  Entonces
                suma = anterior + actual 
                anterior =  actual 
                actual = suma 
                Escribir  anterior
                fibonacci(limite,anterior,actual )
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            fibonacci(8,0,1)
        FinAlgoritmo

            
 </code>
</pre>
<br>
<h2> ejercicio73 </h2>
<h3></h3>
<pre>
    <code> 
      
        Funcion  m (x,suma,array  )

        si x > 0 Entonces
            suma = suma + array[x]
            Escribir suma
            
            x = x -1 
            m(x,suma,array)
        FinSi
    FinFuncion
    Algoritmo sin_titulo
        Dimension array[5]
        array[1] <- 1
        array[2] <- 2
        array[3] <- 3
        array[4] <- 4
        array[5] <- 5
        
        m(5,0, array)
    FinAlgoritmo

 </code>
</pre>
<br>
<h2> ejercicio74 </h2>
<h3></h3>
<pre>
    <code> 
        Funcion   potencia( base,exponente,almacenar )
            
            si exponente > 0 Entonces
                almacenar = almacenar * base 
                exponente = exponente -1 
                potencia( base,exponente,almacenar )
            SiNo
                escribir "su potencia es : ",almacenar
            FinSi
            
            
        Fin Funcion




        Algoritmo sin_titulo
            potencia( 5,3,1 )
        FinAlgoritmo

      
 </code>
</pre>
<br>
<h2> ejercicio75 </h2>
<h3></h3>
<pre>
    <code> 
        Funcion   mcd ( num1,num2,resultado,num )
        si num1 > num y num2> num Entonces
            si num1 % num = 0 y num2 % num = 0 Entonces
                num1 = num1 / num
                num2 = num2 / num 
                resultado = resultado *num
                num = 2 
            SiNo
                num =num +1
            FinSi
            mcd(num1,num2,resultado,num)
        SiNo
            Escribir " el resultado es ", num1, " - ", num2, " |mcd es ", resultado
        FinSi
    Fin Funcion

      Algoritmo sin_titulo
        mcd(20,30,1,2)
    FinAlgoritmo

      
 </code>
</pre>
<br>
<h2> ejercicio76 </h2>
<h3></h3>
<pre>
    <code> 
            Funcion  inverso( palabra,limite )
            si limite >= 1 Entonces
                Escribir subcadena(palabra,limite,limite) Sin Saltar
                limite = limite -1
                inverso(palabra,limite)
            FinSi
            
            
            
        Fin Funcion


        Algoritmo sin_titulo
            inverso("carro", longitud("carro"))
            Escribir " "
        FinAlgoritmo
 
      
 </code>
</pre>
<br>
<h2> ejercicio77 </h2>
<h3></h3>
<pre>
    <code> 
            
        Funcion   almacenar( x,z,suma )
            Si z > 0  Entonces
                resultado = Subcadena(x,z,z)
                convertir_num <- ConvertirANumero(resultado)
                suma <- suma + convertir_num
                z = z -1 
                almacenar(x,z,suma)
            SiNo
                Escribir "la suma de los digitos son ",suma
                
            Fin Si
        Fin Funcion

        Algoritmo a
            Definir num Como Entero
            Definir convertir Como Caracter
            
            num = 000
            convertir <- ConvertirATexto(num)
            almacenar(convertir,Longitud(convertir),0) 	
        FinAlgoritmo
  
 </code>
</pre>
<br>
<h2> ejercicio78 </h2>
<h3></h3>
<pre>
 <code> 
                

       

                
  </code>
</pre>
    <br>
    <h2> ejercicio79 </h2>
    <h3></h3>
    <pre>
                <code> 
                
                Funcion  resultado = binario ( array,num,posicion_actual,total_arreglo )
                Si posicion_actual > total_arreglo Entonces
                    Escribir "no se encontró el numero"
                SiNo
                    medio = redon((posicion_actual + total_arreglo)/2)
                    
                    si num == array[medio] Entonces
                        Escribir "numero se encontró "
                    SiNo
                        si array[medio] < num Entonces
                            posicion_actual = medio +1 
                        SiNo
                            total_arreglo = medio - 1
                        FinSi
                        resultado = binario ( array,num,posicion_actual,total_arreglo )
                    FinSi
                    
                Fin Si


            Fin Funcion




            Algoritmo sin_titulo
                Dimension array[10]
                array[1] <- 11
                array[2] <- 24
                array[3] <- 32
                array[4] <- 42
                array[5] <- 55
                array[6] <- 63
                array[7] <- 74
                array[8] <- 86
                array[9] <- 92
                array[5] <- 100
                posicion_actual = 5
                resultado = binario ( array,2,1,10 )
            FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio80 </h2>
<h3></h3>
<pre>
    <code> 
     
 </code>
</pre>
