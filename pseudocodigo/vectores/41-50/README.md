<h2> ejercicio41 </h2>
<h3>Suma de elementos   </h3>
<pre>
    <code> 
    Algoritmo suma_elemento
    Dimension array[5]
    Definir suma Como Entero
    suma = 0
	
    
	
    Para i <- 1 Hasta 5 con paso 1 Hacer
        Escribir "Ingrese el valor para la posición ", i
        Leer array[i]
        suma = suma + array[i]
    FinPara
	
    Escribir "La suma de los 5 números pares es de : ", suma
	
FinAlgoritmo

 </code>
</pre>
<br>


<h2> ejercicio42 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo Mayor_y_Menor_en_un_Array:
            Dimension array[8] 
            Definir maximo, minimo Como Real 
            
            Para i <- 1 Hasta 8 con paso 1 Hacer
                Escribir "Ingrese el valor para la posición ", i
                Leer array[i]
            FinPara
            
            maximo <- array[1]
            minimo <- array[1]
            
            Para i = 2 Hasta 8 con paso 1  Hacer
                Si array[i] > maximo Entonces
                    maximo = array[i]
                FinSi
                Si array[i] < minimo Entonces
                    minimo = array[i]
                FinSi
            FinPara
            
            
            Escribir "El valor máximo en el array es: ", maximo
            Escribir "El valor mínimo en el array es: ", minimo
        FinAlgoritmo
 </code>
</pre>
<br>


<h2> ejercicio43 </h2>
<h3>Promedio de Notas:   </h3>
<pre>
    <code> 
        Algoritmo promedio_notas_estudiantes
            
            Dimension notas[10] //array
            Definir suma, promedio Como Real //definición 
            suma <- 0
            Escribir "Ingrese las notas de los 10 estudiantes:"
            
            //bucle contenedor de array
            Para i <- 1 Hasta 10 Con Paso 1 Hacer
                Escribir "Ingrese la nota del estudiante ", i
                Leer notas[i]
            FinPara
            
            

            //ejecución depromedio
            Para i <- 1 Hasta 10 Con Paso 1 Hacer
                suma <- suma + notas[i]
            FinPara
            
        
            promedio <- suma / 10
            
            //imprimir promedio 
            Escribir "El promedio de las notas de los 10 estudiantes es: ", promedio
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio44 </h2>
<h3>Contador de Números Pares:  </h3>
<pre>
    <code> 
        Algoritmo contar_pares
            
            Dimension array[4] 
            Definir contador_pares Como Entero 

            contador_pares <- 0 
        
            Para i <- 1 Hasta 4 Con Paso 1 Hacer
                Escribir "Ingrese el número en la posición ", i
                Leer array[i]
            FinPara
            
            Para i <- 1 Hasta 4 con paso 1 Hacer
                Si array[i]  % 2 = 0 Entonces
                    contador_pares <- contador_pares + 1
                FinSi
            FinPara
            
            Escribir "La cantidad de números pares en el array es: ", contador_pares
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio45 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo buscar_caracter
        
            
            Definir caracter_buscar Como Caracter 
            Definir encontrado Como Logico 
            Dimension array[7] 
            encontrado <- Falso 
            array[1] <- 'a'
            array[2] <- 'p'
            array[3] <- 'r'
            array[4] <- 'ñ'
            array[5] <- 'c'
            array[6] <- 'b'
            array[7] <- 's'
            Escribir "Ingrese un caracter para buscar:"
            Leer caracter_buscar
            
            Para i <- 1 Hasta 7  Con Paso 1 Hacer
                Si array[i] = caracter_buscar Entonces
                    encontrado <- Verdadero 
                FinSi
            FinPara
            
            
            Si encontrado Entonces
                Escribir "El caracter ", caracter_buscar, " se encuentra en el array."
            Sino
                Escribir "El caracter ", caracter_buscar, " no se encuentra en el array."
            FinSi
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio46 </h2>
<h3>Inversión de un Array:   </h3>
<pre>
    <code> 
        Algoritmo Inversión-de-un-array:
        
            Dimension arrayNumeros[10]
        
             Definir i, valor como entero
            
            // Ingresar valores al array
            Para i <- 1 Hasta 10 Hacer
                Escribir "Ingrese el número ", i, ": "
                Leer valor
                arrayNumeros[i] <- valor
            FinPara
            
            // Invertir el orden del array sin usar temp ni vector adicional
            Para i <- 1 Hasta 10 / 2 Hacer
                // Intercambiar elementos
                arrayNumeros[i] <- arrayNumeros[i] + arrayNumeros[10 - i + 1]
                arrayNumeros[10 - i + 1] <- arrayNumeros[i] - arrayNumeros[10 - i + 1]
                arrayNumeros[i] <- arrayNumeros[i] - arrayNumeros[10 - i + 1]
            FinPara
            
            // Imprimir el array original y el invertido en la misma línea
            Para i <- 1 Hasta 10 Hacer
                Escribir  arrayNumeros[11 - i], " | ",arrayNumeros[i] 
            FinPara
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio47 </h2>
<h3>Suma de Números Pares:   </h3>
<pre>
    <code> 
        Algoritmo Contador_de_Ocurrencias
            Dimension array[15]  
            definir i, contador Como Entero
            definir caracter_ing Como caracter
            
            Para i = 1 Hasta 15 Con Paso 1 Hacer
                Escribir "ingrese caracter ", i, ":" //almacen del array
                leer array[i]
            Fin Para
            
            Escribir "ingrese caracter para contar "
            leer caracter_ing
            contador = 0
            Para i = 1 Hasta 15 Con Paso 1 Hacer // contar cuantos caracteres tiene el array
                Si array[i] = caracter_ing Entonces
                    contador = contador +1
                
                Fin Si
                
            Fin Para
            
            escribir "el caracter ", caracter_ing, " aparece ", contador, " veces en el array " // imprimir resultado
     FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio48 </h2>
<h3>Cálculo de Descuento por Categoría:   </h3>
<pre>
    <code> 
        Algoritmo Cálculo_de_Descuento_por_Categoría:
            Dimension producto[2,3]
            Dimension categoria[3,2]
            
            producto[1,1] = "pantalon" 
            producto[1,2] = "100"
            
            producto[1,3] = "A"
            producto[2,1] = "CAMISA"
            
            producto[2,2] = "85"
            producto[2,3] = "B"
            
            
            categoria[1,1] = "A"
            categoria[1,2] = "10"
            
            
            categoria[2,1] = "B"
            categoria[2,2] = "5"
            
            categoria[3,1] = "C"
            categoria[3,2] = " 0"
            
            Para f = 1 Hasta 2 Con Paso 1 Hacer
                Para fc=1 Hasta 3 Con Paso 1 Hacer
                    Si producto[f,3] = categoria[fc,1] Entonces
                        descuento = ConvertirANumero(producto[f,2]) * ConvertirANumero(categoria[fc,2] )/ 100
                        resutado= ConvertirANumero(producto[f,2]) - descuento
                        Escribir producto[f,1], "|", producto[f,2],"|" , categoria[fc,1], "|", descuento, "|",  resutado
                    Fin Si
                Fin Para
            Fin Para
        FinAlgoritmo
 </code>
</pre>
<br>

<h2> ejercicio49 </h2>
<h3>Ordenamiento de Array  </h3>
<pre>
    <code> 
        Algoritmo OrdenarArray
            Dimension arrayNumeros[6]
            Dimension arrayOrdenado[6] 
            Definir i, j, temp como entero
            
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
                Para j <- 1 Hasta 5 Hacer
                    Si arrayOrdenado[j] > arrayOrdenado[j + 1] Entonces
                        // Intercambiar elementos
                        temp <- arrayOrdenado[j]
                        arrayOrdenado[j] <- arrayOrdenado[j + 1]
                        arrayOrdenado[j + 1] <- temp
                    FinSi
                FinPara
            FinPara
            
            // Imprimir los arrays original y ordenado en paralelo
            Escribir "Elemento | Original | Ordenado"
            Para i <- 1 Hasta 6 Hacer
                Escribir i, "        | ", arrayNumeros[i], "        | ", arrayOrdenado[i]
            FinPara
        FinAlgoritmo

 </code>
</pre>
<br>

<h2> ejercicio50 </h2>
<h3>Eliminación de Duplicados:   </h3>
<pre>
    <code> 
        Algoritmo Eliminación de Duplicados:
            Dimension NA[12]
            Dimension NNA[12]
            Definir ultima como entero
            definir existe Como Logico
            existe = falso
            ultima = 1
            //asignar valores en el array 
            NA[1] <- 5
            NA[2] <- 5
            NA[3] <- 4
            NA[4] <- 3
            NA[5] <- 2
            NA[6] <- 10
            NA[7] <- 15
            NA[8] <- 18
            NA[9] <- 30
            NA[10] <- 50
            NA[11] <- 15
            NA[12] <- 10
            
            Para i = 1  Hasta 12 Con Paso 1 Hacer
                Para p =1  Hasta 12 Con Paso 1 Hacer
                    Si NNA[p] = NA[i] Entonces
                        existe = Verdadero 
                        p = 12
                    SiNo
                        existe = falso
                        
                    Fin Si
                Fin Para
                Si existe = falso Entonces
                    NNA[ultima] = NA[i]
                    ultima = ultima +1
                    escribir " numero ", i, " : "  NA[i]
                Fin Si
                
            Fin Para
        FinAlgoritmo
 </code>
</pre>
<br>


