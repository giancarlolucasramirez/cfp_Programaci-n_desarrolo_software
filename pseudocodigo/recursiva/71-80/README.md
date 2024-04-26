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
                Funcion   chamoi 
                Dimension torres[3,10], cant_discos[3]
                // pedir y validar cuantos discos colocar en la primer torre
                Escribir "Ingrese el nro de discos (1-8):"
                leer discos
                mientras discos<1 y discos>8 Hacer
                    Escribir "El numero de discos debe ser mayor a 0 y menor a 5:"
                    leer discos
                finmientras
                
                // inicializar los datos
                cant_discos[1]<-discos
                cant_discos[2]<-0
                cant_discos[3]<-0
                Para i<-1 Hasta discos hacer
                    torres[1,i]<-discos-i+1
                FinPara
                
                
                // jugar!
                cant_movs<-0
                Mientras cant_discos[3]<>discos Hacer // mientras no esten todos los discos en la tercer torre, el juego sigue
                    
                    Limpiar Pantalla
                    
                    Para i<-1 Hasta 3 Hacer // dibujar las tres torres
                        escribir "Torre ",i
                        si cant_discos[i]=0 Entonces
                            Escribir ""
                        sino
                            para j<-cant_discos[i] hasta 1 con paso -1 Hacer // recorrer los discos de la torre, de arriba hacia abajo
                                segun torres[i,j] Hacer // dibujar cada disco
                                    1: Escribir "                   XX"
                                    2: Escribir "                 XXXXXX"
                                    3: Escribir "               XXXXXXXXXX"
                                    4: Escribir "             XXXXXXXXXXXXXX"
                                    5: Escribir "           XXXXXXXXXXXXXXXXXX"
                                    6: Escribir "         XXXXXXXXXXXXXXXXXXXXXX"
                                    7: Escribir "       XXXXXXXXXXXXXXXXXXXXXXXXXX"
                                    8: Escribir "     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                finsegun
                            FinPara
                        finsi
                        Escribir "   ----------------------------------"
                        Escribir ""
                    FinPara
                    
                    // solicitar movimiento
                    Escribir "Mover desde la torre: "
                    leer t1
                    Escribir "hacia la torre: "
                    leer t2
                    
                    si t1<1 | t1>3 | t2<1 | t2>3 Entonces // controlar que el nro de torre sea valido
                        Escribir "Movimiento invalido"
                        Esperar Tecla
                    sino
                        Si cant_discos[t1]=0 Entonces // controlar que la torre 1 tengo al menos un disco
                            Escribir "Movimiento invalido"
                            Esperar Tecla
                        SiNo
                            disco_a_mover <- torres[t1,cant_discos[t1]] // obtener tamanio del disco que se quiere mover
                            puede_mover<-verdadero
                            Si cant_discos[t2]<>0 entonces // controlar que la torre dos no tenga discos o tenga solo discos mas grandes
                                Si torres[t2,cant_discos[t2]]<disco_a_mover Entonces
                                    puede_mover<-Falso
                                FinSi
                            FinSi
                            Si puede_mover Entonces // si paso todos los controles, mover
                                cant_movs <- cant_movs+1
                                cant_discos[t2]<-cant_discos[t2]+1
                                torres[t2,cant_discos[t2]] <- disco_a_mover
                                cant_discos[t1]<-cant_discos[t1]-1
                            SiNo
                                Escribir "Movimiento invalido"
                                Esperar Tecla
                            FinSi
                        FinSi
                    FinSi
                FinMientras
                
                // mostrar resultado
                Limpiar Pantalla
                Escribir "Juego finalizado en ",cant_movs," movimientos!"
            Fin Funcion



            Algoritmo sin_titulo
                chamoi 
            FinAlgoritmo

                
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
