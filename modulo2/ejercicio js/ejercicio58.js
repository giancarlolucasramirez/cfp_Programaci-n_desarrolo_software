let fila_actual, columna_actual;
let laberinto = new Array(10);

for (let fila = 0; fila < 10; fila++) {
    laberinto[fila]  = new Array(10);
    for (let columna = 0; columna < 10; columna++) {
        laberinto[fila][columna] = 1;
    }
}

laberinto[0][1] = 5;
laberinto[1][1] = 0;
laberinto[2][1] = 0;
laberinto[3][1] = 0;
laberinto[3][2] = 0;
laberinto[3][3] = 0;
laberinto[3][4] = 0;
laberinto[3][5] = 0;
laberinto[3][6] = 0;
laberinto[3][7] = 0;
laberinto[4][3] = 0;
laberinto[4][7] = 0;
laberinto[5][3] = 0;
laberinto[5][2] = 0;
laberinto[5][1] = 0;
laberinto[5][7] = 0;
laberinto[6][1] = 0;
laberinto[7][1] = 0;
laberinto[8][1] = 0;
laberinto[8][2] = 0;
laberinto[8][3] = 0;
laberinto[8][4] = 0;
laberinto[9][4] = 0;

fila_actual = 0;
columna_actual = 0;


for (let fila = 0; fila < 10; fila++) {
    let filaTexto = '';
    for (let columna = 0; columna < 10; columna++) {
        if (laberinto[fila][columna] === 5) {
            fila_actual = fila;
            columna_actual = columna;
        }
        filaTexto += laberinto[fila][columna] + " ";
    }
    console.log(filaTexto); 

}