function validarfila(num, fila, sudoku) {
    return sudoku[fila].includes(num);
}

function validarcolumna(num, columna, sudoku) {
    return sudoku.some(fila => fila[columna] === num);
}

function validarbloque(num, fila, columna, sudoku) {
    let inicioFila = fila - fila % 3;
    let inicioColumna = columna - columna % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[inicioFila + i][inicioColumna + j] === num) {
                return true;
            }
        }
    }
    return false;
}

function esValido(num, fila, columna, sudoku) {
    return (
        !validarfila(num, fila, sudoku) &&
        !validarcolumna(num, columna, sudoku) &&
        !validarbloque(num, fila, columna, sudoku)
    );
}

function solveSudoku(sudoku, fila = 0, columna = 0) {
    if (columna === 9) {
        fila++;
        columna = 0;
    }
    if (fila === 9) {
        return true;
    }
    if (sudoku[fila][columna] !== 0) {
        return solveSudoku(sudoku, fila, columna + 1);
    }
    for (let num = 1; num <= 9; num++) {
        if (esValido(num, fila, columna, sudoku)) {
            sudoku[fila][columna] = num;
            if (solveSudoku(sudoku, fila, columna + 1)) {
                return true;
            }
            sudoku[fila][columna] = 0;
        }
    }
    return false;
}

// Crear un tablero de Sudoku vacío
let sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));

// Llenar con algunos números para probar el solucionador
sudoku[0][0] = 5;
sudoku[1][1] = 6;
sudoku[2][2] = 7;
// ... agregar más números según sea necesario ...

if (solveSudoku(sudoku)) {
    console.log('Sudoku resuelto:');
    sudoku.forEach(fila => console.log(fila.join(' ')));
} else {
    console.log('No se pudo resolver el Sudoku.');
}
