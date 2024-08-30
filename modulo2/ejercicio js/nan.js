//pudes hacer que baje mas la pieza que se visualice en la  consola 
const gridWidth = 100;
const gridHeight = 100;

let grid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill('⬜'));

const pieces = {
    I: ['🔵🔵🔵🔵'],
    O: ['🟡🟡', '🟡🟡'],
    T: ['⬛🟣⬛', '🟣🟣🟣'],
    L: ['🟧', '🟧', '🟧🟧'],
    J: ['🟦', '🟦', '🟦🟦'],
    Z: ['🟥🟥⬛', '⬛🟥🟥'],
    S: ['⬛🟩🟩', '🟩🟩⬛']
};

let currentPiece = pieces['O'];
let pieceRow = 0;
let pieceCol = 3;

function drawGrid() {
    console.clear();
    let displayGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 0; i < currentPiece.length; i++) {
        for (let j = 0; j < currentPiece[i].length; j++) {
            if (currentPiece[i][j] !== '') {
                displayGrid[pieceRow + i][pieceCol + j] = currentPiece[i][j];
            }
        }
    }

    for (let row of displayGrid) {
        console.log(row.join(' '));
    }
}

function movePiece(direction) {
    if (direction === 'left' && pieceCol > 0) {
        pieceCol--;
    } else if (direction === 'right' && pieceCol < gridWidth - currentPiece[0].length) {
        pieceCol++;
    } else if (direction === 'down' && pieceRow < gridHeight - currentPiece.length) {
        pieceRow++;
    }

    drawGrid();
}

function rotatePiece() {
    currentPiece = currentPiece[0].map((_, index) => 
        currentPiece.map(row => row[index]).reverse()
    );

    drawGrid();
}

drawGrid();

setInterval(() => {
    movePiece('down')
}, 100);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        movePiece('left');
    } else if (event.key === 'ArrowRight') {
        movePiece('right');
    } else if (event.key === 'ArrowUp') {
        rotatePiece();
    }
});
