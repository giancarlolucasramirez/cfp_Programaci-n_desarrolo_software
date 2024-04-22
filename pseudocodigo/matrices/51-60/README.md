<h2> ejercicio51 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir i,j como entero
            Dimension matriz[3,3]
            Dimension matriz2[3,3]
            //matriz1
            matriz[1,1] <- 1
            matriz[1,2] <- 2
            matriz[1,3] <- 3
            matriz[2,1] <- 4
            matriz[2,2] <- 5
            matriz[2,3] <- 6
            matriz[3,1] <- 7
            matriz[3,2] <- 8
            matriz[3,3] <- 9
            
            //matriz2
            
            matriz2[1,1] <- 1
            matriz2[1,2] <- 2
            matriz2[1,3] <- 3
            matriz2[2,1] <- 4
            matriz2[2,2] <- 5
            matriz2[2,3] <- 6
            matriz2[3,1] <- 7
            matriz2[3,2] <- 8
            matriz2[3,3] <- 9
            
            
            
            suma =0
            Para i=1 Hasta 3 Con Paso 1 Hacer
                Para j=1 Hasta 3 Con Paso 1 Hacer
                    suma = suma + matriz[i,j] + matriz2[i,j]
                Fin Para
            Fin Para
        escribir suma
    FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio52 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            Definir i,j Como real
            definir num Como Caracter
            Dimension matriz[3,4]
            
            matriz[1,1] <- 20
            matriz[1,2] <- 50
            matriz[1,3] <- 25
            matriz[1,4] <- 30
            
            
            matriz[2,1] <- 80
            matriz[2,2] <- 70
            matriz[2,3] <- 60
            matriz[2,4] <- 10
            
            matriz[3,1] <- 45
            matriz[3,2] <- 55
            matriz[3,3] <- 72
            matriz[3,4] <- 82
            
            
            Para i=1 Hasta 4 Con Paso 1 Hacer
                Para j=1 Hasta 3 Con Paso 1 Hacer
                    promedio = promedio + matriz[j,i]
                Fin Para
            
                escribir promedio /3 
                promedio = 0
            Fin Para
        
        
    FinAlgoritmo

 </code>
</pre>
<br>



<h2> ejercicio53 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo sin_titulo
            definir diagonal_principal,diagonal_secundaria Como Entero
            Dimension  array[5,5]
            
            array[1,1] <- 30
            array[1,2] <- 82
            array[1,3] <- 92
            array[1,4] <- 45
            array[1,5] <- 57
            
            array[2,1] <- 69
            array[2,2] <- 74
            array[2,3] <- 89
            array[2,4] <- 93
            array[2,5] <- 100
            
            array[3,1] <- 11
            array[3,2] <- 12 
            array[3,3] <- 13
            array[3,4] <- 14
            array[3,5] <- 15
            
            array[4,1] <- 89
            array[4,2] <- 17
            array[4,3] <- 44
            array[4,4] <- 19
            array[4,5] <- 38
            
            array[5,1] <- 21
            array[5,2] <- 22
            array[5,3] <- 30
            array[5,4] <- 24
            array[5,5] <- 80
            
            para f =1 Hasta 5 Con Paso 1 Hacer
                para c =1 hasta 5 Con Paso 1 Hacer
                    escribir array[f,c] " " " " Sin Saltar
                FinPara
                Escribir  ""
            FinPara
            
            
            diagonal_principal = 0
            
            Para f=1 Hasta 5 Con Paso 1 Hacer
                diagonal_principal = diagonal_principal + array[f,f]
            Fin Para
            escribir "la suma de la diagonal_principal es de: ", diagonal_principal 
            

            diagonal_secundaria = 0
            Para f=1 Hasta 5 Con Paso 1 Hacer
                diagonal_secundaria = diagonal_secundaria + array[f,6-f]
            Fin Para
            Escribir "la suma de la diagonal_secundaria es de: ", diagonal_secundaria
            
        
        
        
    FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio54 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
       
        Algoritmo sin_titulo
            definir a, b, fila, columna, maximo Como Entero
            Dimension matriz[4,3]
            
            // Definir los valores de la matriz
            matriz[1,1] = 10
            matriz[1,2] = 50
            matriz[1,3] = 30
            
            matriz[2,1] = 25
            matriz[2,2] = 15
            matriz[2,3] = 35
            
            matriz[3,1] = 5
            matriz[3,2] = 45
            matriz[3,3] = 55
            
            matriz[4,1] = 60
            matriz[4,2] = 40
            matriz[4,3] = 50
            
            // Mostrar la matriz original
            para f =1 Hasta 4 Con Paso 1 Hacer
                para c =1 hasta 3 Con Paso 1 Hacer
                    escribir matriz[f,c] " " Sin Saltar
                FinPara
                Escribir  ""
            FinPara
            
            // Encontrar el mayor elemento de cada fila e imprimir los resultados
            Escribir "El mayor elemento de cada fila es:"
            para fila = 1 hasta 4 con paso 1 hacer
                maximo = matriz[fila,1] // Asignar el primer elemento de la fila como máximo temporal
                para columna = 1 hasta 3 con paso 1 hacer
                    si matriz[fila,columna] > maximo entonces
                        maximo = matriz[fila,columna]// Actualizar el máximo si encontramos un valor mayor
                    finSi
                finpara
                Escribir "Fila ", fila, ": ", maximo
            finpara
            
            
        FinAlgoritmo


 </code>
</pre>
<br>


<h2> ejercicio55 </h2>
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


<h2> ejercicio56 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
      Algoritmo sin_titulo
            Definir fila_actual, columna_actual Como Entero
            Definir opcion_usuario Como Caracter
            Dimension laberinto[10, 10]
            
            // Inicializar el laberinto
            Para fila = 1 Hasta 10 Con Paso 1 Hacer
                Para columna = 1 Hasta 10 Con Paso 1 Hacer
                    laberinto[fila, columna] = 1
                FinPara
            FinPara
            
            // Definir el camino en el laberinto
            laberinto[1, 2] <- 5
            laberinto[2, 2] <- 0
            laberinto[3, 2] <- 0
            laberinto[3, 3] <- 0
            laberinto[3, 4] <- 0
            laberinto[3, 5] <- 0
            laberinto[3, 6] <- 0
            laberinto[3, 7] <- 0
            laberinto[3, 8] <- 0
            laberinto[4, 4] <- 0
            laberinto[4, 8] <- 0
            laberinto[5, 4] <- 0
            laberinto[5, 3] <- 0
            laberinto[5, 2] <- 0
            laberinto[5, 8] <- 0
            laberinto[6, 2] <- 0
            laberinto[7, 2] <- 0
            laberinto[8, 2] <- 0
            laberinto[8, 3] <- 0
            laberinto[8, 4] <- 0
            laberinto[8, 5] <- 0
            laberinto[9, 5] <- 0
            laberinto[9, 5] <- 0
            laberinto[10, 5] <- 0
            
            
            fila_actual <- 1
            columna_actual <- 1
            
            Repetir
                
                // Mostrar el laberinto con la posición actual del jugador
                Para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 Hasta 10 Con Paso 1 Hacer
                        si laberinto[fila,columna] = 5 Entonces
                            fila_actual = fila
                            columna_actual = columna
                        fin si 
                        Escribir laberinto[fila, columna] " " Sin Saltar
                    FinPara
                    Escribir ""
                FinPara
                
                Escribir "Ingrese la dirección (1: arriba, 2: abajo, 3: izquierda, 4: derecha): "
                Leer opcion_usuario
                
                // arriba
                Si opcion_usuario = "1" Entonces
                    si laberinto[fila_actual-1,columna_actual] = 0 Entonces
                        laberinto[fila_actual-1,columna_actual] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                // abajo 
                Si opcion_usuario = "2" Entonces
                    si laberinto[fila_actual+1,columna_actual] = 0 Entonces
                        laberinto[fila_actual+1,columna_actual] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                // izquierda
                Si opcion_usuario = "3" Entonces
                    si laberinto[fila_actual,columna_actual-1] = 0 Entonces
                        laberinto[fila_actual,columna_actual-1] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                //derecha
                Si opcion_usuario = "4" Entonces
                    si laberinto[fila_actual,columna_actual+1] = 0 Entonces
                        laberinto[fila_actual,columna_actual+1] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                
                
                
            Hasta Que  laberinto[10,5] = 5 
            Limpiar Pantalla
         Escribir " felicidades has ganado ^_^ "
        
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio57 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
      
Algoritmo sin_titulo
	Definir f,c,relleno Como Entero
	Definir perdio Como Logico
	Dimension  vida[10,10]
	perdio = Falso
	Para f=1 Hasta 10 Con Paso 1 Hacer
		Para c=1 Hasta 10 Con Paso 1 Hacer
			vida[f,c] = 0
		Fin Para
	Fin Para
	contador <- 0
	cantidad_minas = Aleatorio(3,5)
	Escribir cantidad_minas
	para mina  = 1 Hasta cantidad_minas Con Paso 1 Hacer
		fila_aleatoria = Aleatorio(1,10)
		columna_aleatoria = Aleatorio(1,10)
		vida[fila_aleatoria,columna_aleatoria] = 7
	FinPara                                                                                                                                                                                                                                                
	Repetir
		contador <- 0
		Escribir " ingrese la posicion que desea rellenar, si ya no quiere rellenar escriba 10 " 
		leer relleno
		Para f = 1 Hasta 10 Con Paso 1 Hacer
			Para c = 1 Hasta 10 Con Paso 1 Hacer
				contador = contador + 1
				si relleno  == contador Entonces
					
					si vida[f,c] == 7 Entonces
						
						perdio = Verdadero
						
					SiNo
						vida[f,c] = 1
						perdio = Falso
					FinSi
				
				FinSi
				escribir vida[f,c] "|" Sin Saltar
				
			Fin Para
			
			Escribir " "
		Fin Para
		
	Hasta Que  relleno == 101  o perdio == Verdadero 
	Limpiar Pantalla
	escribir "boooooooooooommmmmmmmmmmmmmmmm pa todas las reguetonas"
FinAlgoritmo


 </code>
</pre>
<br>


<h2> ejercicio58 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
       Algoritmo sin_titulo
	Definir f,c, validar_aleatorio Como Entero
	Definir existe_aleatorio,fin_juego Como Logico
	Dimension  rompecabezas[4,4]
	Dimension  rompecabezas_resuelto[4,4]
	
	//rompecabezas resuelto
	Para i = 1 Hasta 4 Con Paso 1 Hacer
		Para j = 1 Hasta 4 Con Paso 1 Hacer
			contador = contador +1 
			rompecabezas_resuelto[i,j] = "0"
			Si contador > 15 Entonces
				rompecabezas_resuelto[i,j] = " "
			SiNo
				rompecabezas_resuelto[i,j] = ConvertirATexto(contador) 
			Fin Si
			
		Fin Para
	Fin Para
	
	
	
	
	// revolver los numeros del 1 al 15 y el 16 en espacio vacío 
	Para fila = 1 Hasta 4 Hacer
		Para columna = 1 Hasta 4 Hacer
			existe_aleatorio = Falso
			validar_aleatorio = 0
			
			Repetir
				existe_aleatorio = Falso
				validar_aleatorio = Aleatorio(1,15);
				
				Para f = 1 Hasta 4 Hacer
					Para c = 1 Hasta 4 Hacer
						Si validar_aleatorio == rompecabezas[f,c] Entonces
							existe_aleatorio = Verdadero
							f = 4
							c = 4
						FinSi
					FinPara
				FinPara
				
				Si existe_aleatorio == Falso Entonces
					rompecabezas[fila,columna] = validar_aleatorio;
				FinSi
				
			Hasta Que rompecabezas[fila,columna] <> 0 o (columna = 4 y fila = 4)
			
			Escribir  rompecabezas[fila,columna], "   |  " Sin Saltar 
		FinPara		
		Escribir " "
	FinPara
	
	
	
	
	
	Repetir
		
	 
	Escribir "escriba que número desea mover"
	Escribir "escriba para donde desea mover su número  1. arriba, 2.abajo, 3.izquierda, 4.derecha  "
	
	leer usuario
	
	
	
	
	Si usuario = 1  Entonces
		si i <1 Entonces
			si rompecabezas[fila-1,columna] =  0  Entonces
				rompecabezas[fila-1,columna] = rompecabezas[fila,columna]
				rompecabezas[fila,columna] = 0
			FinSi
			fila = 5 
			columna = 5 
		FinSi
		
	Fin Si
	
	Si usuario = 2  Entonces
		si i <1 Entonces
			si rompecabezas[fila+1,columna] = 0  Entonces
				rompecabezas[fila+1,columna] = rompecabezas[fila,columna]
				rompecabezas[fila,columna] = 0
			FinSi
			fila = 5 
			columna = 5 
		FinSi
		
	Fin Si
	
	Hasta Que fin_juego = Verdadero
	
FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio59 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
       Algoritmo ResolverRompecabezas
    Dimension rompecabezasResuelto[4,4]
    Dimension rompecabezasRevuelto[4,4]
    Definir fila,columna, num como Entero
    definir fin_juego Como Logico
	fin_juego = Verdadero
    // Llenar el rompecabezas resuelto con los números del 1 al 15 en orden
    num <- 0
    Para fila <- 1 Hasta 4 Con Paso 1 Hacer
        Para columna <- 1 Hasta 4 Con Paso 1 Hacer
			num <- num + 1
            Si num <= 15 Entonces
                rompecabezasResuelto[fila, columna] <- num
            FinSi
            
        FinPara
    FinPara
	
	//ACA VA REVOLVER NUMEROS
	// revolver los numeros del 1 al 15 y el 16 en espacio vacío 
	Para fila = 1 Hasta 4 Hacer
		Para columna = 1 Hasta 4 Hacer
			existe_aleatorio = Falso
			validar_aleatorio = 0
			
			Repetir
				existe_aleatorio = Falso
				validar_aleatorio = Aleatorio(1,15);
				
				Para f = 1 Hasta 4 Hacer
					Para c = 1 Hasta 4 Hacer
						Si validar_aleatorio == rompecabezasRevuelto[f,c] Entonces
							existe_aleatorio = Verdadero
							f = 4
							c = 4
						FinSi
					FinPara
				FinPara
				
				Si existe_aleatorio == Falso Entonces
					rompecabezasRevuelto[fila,columna] = validar_aleatorio;
				FinSi
				
			Hasta Que rompecabezasRevuelto[fila,columna] <> 0 o (columna = 4 y fila = 4)
			
			
		FinPara		
		
	FinPara
	
	
    
    Repetir
        // Solicitar al usuario que ingrese  la posicion que cambiará el 0
		fin_juego = Verdadero
		f = 0
		c = 0
		Para fila = 1  Hasta 4 Con Paso 1 Hacer
			Para columna = 1  Hasta 4 Con Paso 1 Hacer
				si rompecabezasRevuelto[fila,columna] = 0 Entonces
					f = fila
					c = columna
				FinSi
				escribir rompecabezasRevuelto[fila,columna] "  |  " Sin Saltar
			Fin Para
			escribir " " 
		Fin Para
		
		Escribir "Ingrese la posición "
        Leer direccion
        Para fila = 1 Hasta 4 Con Paso 1 Hacer
			Para columna = 1  Hasta 4 Con Paso 1 Hacer
				//arriba
				Si f -1 > 0  y rompecabezasRevuelto[f-1,c] = direccion Entonces
					rompecabezasRevuelto[f,c] = direccion
					rompecabezasRevuelto[f-1,c] = 0 
					
					
					
				SiNo //abajo
					Si f +1 < 5 y rompecabezasRevuelto[f+1,c] = direccion Entonces
						rompecabezasRevuelto[f,c] = direccion
						rompecabezasRevuelto[f+1,c] = 0
						
					Fin Si
				FinSi
				//izquierda
				Si c -1 > 0  y rompecabezasRevuelto[f,c-1] = direccion Entonces
					rompecabezasRevuelto[f,c] = direccion
					rompecabezasRevuelto[f,c-1] = 0 
					
					
					
				SiNo //derecha
					Si c +1 < 5 y rompecabezasRevuelto[f,c+1] = direccion Entonces
						rompecabezasRevuelto[f,c] = direccion
						rompecabezasRevuelto[f,c+1] = 0
						
						
					Fin Si
					
				finsi	
			FinPara
		FinPara
		Para fila = 1 Hasta 4 Con Paso 1 Hacer
			Para columna = 1 Hasta 4 Con Paso 1 Hacer
				
				Si rompecabezasRevuelto[fila,columna] <> rompecabezasResuelto[fila,columna] Entonces
					fin_juego = falso
				finsi 
			Fin Para
		Fin Para
		
		
		
		
	Hasta Que  fin_juego = Verdadero
	Limpiar Pantalla
	Escribir "felicidades ganaste"
FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio60 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
      Algoritmo sin_titulo
            Definir fila_actual, columna_actual Como Entero
            Definir opcion_usuario Como Caracter
            Dimension laberinto[10, 10]
            
            // Inicializar el laberinto
            Para fila = 1 Hasta 10 Con Paso 1 Hacer
                Para columna = 1 Hasta 10 Con Paso 1 Hacer
                    laberinto[fila, columna] = 1
                FinPara
            FinPara
            
            // Definir el camino en el laberinto
            laberinto[1, 2] <- 5
            laberinto[2, 2] <- 0
            laberinto[3, 2] <- 0
            laberinto[3, 3] <- 0
            laberinto[3, 4] <- 0
            laberinto[3, 5] <- 0
            laberinto[3, 6] <- 0
            laberinto[3, 7] <- 0
            laberinto[3, 8] <- 0
            laberinto[4, 4] <- 0
            laberinto[4, 8] <- 0
            laberinto[5, 4] <- 0
            laberinto[5, 3] <- 0
            laberinto[5, 2] <- 0
            laberinto[5, 8] <- 0
            laberinto[6, 2] <- 0
            laberinto[7, 2] <- 0
            laberinto[8, 2] <- 0
            laberinto[8, 3] <- 0
            laberinto[8, 4] <- 0
            laberinto[8, 5] <- 0
            laberinto[9, 5] <- 0
            laberinto[9, 5] <- 0
            laberinto[10, 5] <- 0
            
            
            fila_actual <- 1
            columna_actual <- 1
            
            Repetir
                
                // Mostrar el laberinto con la posición actual del jugador
                Para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 Hasta 10 Con Paso 1 Hacer
                        si laberinto[fila,columna] = 5 Entonces
                            fila_actual = fila
                            columna_actual = columna
                        fin si 
                        Escribir laberinto[fila, columna] " " Sin Saltar
                    FinPara
                    Escribir ""
                FinPara
                
                Escribir "Ingrese la dirección (1: arriba, 2: abajo, 3: izquierda, 4: derecha): "
                Leer opcion_usuario
                
                // arriba
                Si opcion_usuario = "1" Entonces
                    si laberinto[fila_actual-1,columna_actual] = 0 Entonces
                        laberinto[fila_actual-1,columna_actual] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                // abajo 
                Si opcion_usuario = "2" Entonces
                    si laberinto[fila_actual+1,columna_actual] = 0 Entonces
                        laberinto[fila_actual+1,columna_actual] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                // izquierda
                Si opcion_usuario = "3" Entonces
                    si laberinto[fila_actual,columna_actual-1] = 0 Entonces
                        laberinto[fila_actual,columna_actual-1] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                //derecha
                Si opcion_usuario = "4" Entonces
                    si laberinto[fila_actual,columna_actual+1] = 0 Entonces
                        laberinto[fila_actual,columna_actual+1] = 5 
                        laberinto[fila_actual,columna_actual] = 0 
                    FinSi
                FinSi
                
                
                
                
                
            Hasta Que  laberinto[10,5] = 5 
            Limpiar Pantalla
         Escribir " felicidades has ganado ^_^ "
        
        FinAlgoritmo
 </code>
</pre>
<br>

