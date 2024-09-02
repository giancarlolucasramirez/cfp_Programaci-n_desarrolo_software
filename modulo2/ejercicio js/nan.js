let fila_actual, columna_actual;
let tetrix = new Array(10);

for (let fila = 0; fila < 10; fila++) {
    tetrix[fila]  = new Array(10);
    for (let columna = 0; columna < 10; columna++) {
        tetrix[fila][columna] = "⬜";
    }
}


fila_actual = 0;
columna_actual = 0;  // La pieza comenzará en la primera fila, primera columna

function imprimirTetrix() {
    for (let fila = 0; fila < 10; fila++) {
        let filaTexto = '';
        for (let columna = 0; columna < 10; columna++) {
            filaTexto += tetrix[fila][columna] + " ";
        }
        document.write(filaTexto );

    }

}





function moverPiezaAbajo() {
    if (fila_actual + 1 < 10) { // Asegura que la pieza no se salga del tablero
        // Borra la pieza de la posición anterior
        for (let i = 0; i < 4; i++) {
            tetrix[fila_actual][columna_actual + i] = "⬜";
        }

        // Actualiza la fila
        fila_actual++;

        // Dibuja la pieza en la nueva posición
        for (let i = 0; i < 4; i++) {
            tetrix[fila_actual][columna_actual + i] = "🔵";
        }
    }
}

function iniciar() {
    // Dibuja la pieza inicial en horizontal
    for (let i = 0; i < 4; i++) {
        tetrix[fila_actual][columna_actual + i] = "🔵";
    }

    imprimirTetrix();
    setInterval(() => {
  moverPiezaAbajo();
  document.body.innerHTML = ''; // Limpia la pantalla
  imprimirTetrix();
    }, 1000); // Baja la pieza cada 500 ms
}

iniciar();
