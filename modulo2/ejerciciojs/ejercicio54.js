let fila, columna, maximo;

const matriz = [
    [20, 50, 25,],
    [80, 70, 60,],
    [45, 55, 72,],
    [15, 35, 82,]
];


console.log("el mayor de cada fila es :");

for (fila = 0; fila < 5; fila++) {
    maximo = matriz[fila][ 1]

    for (columna = 0; columna < 5; columna++) {
        if (matriz[fila] [columna] > maximo) {
            maximo = matriz[fila] [columna]
        }
        
    }
    
    console.log("fila",fila,":",maximo);
}

