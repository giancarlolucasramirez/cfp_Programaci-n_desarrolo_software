const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const grid = 30;
const tetrominoes = [
    [1, 1, 1, 1], // I
    [1, 1, 1, 0, 1], // T
    [1, 1, 0, 0, 1, 1], // Z
    [0, 1, 1, 1, 1], // S
    [1, 1, 1, 1], // O
    [1, 1, 0, 1, 1], // L
    [1, 1, 1, 0, 0, 1] // J
];

let board = [];
let currentPiece;
let currentX = 3;
let currentY = 0;
let score = 0;

function createBoard() {
    for (let row = 0; row < 20; row++) {
        board[row] = [];
        for (let col = 0; col < 10; col++) {
            board[row][col] = 0;
        }
    }
}

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
            if (board[row][col]) {
              context.fillText('🟧', col * grid, row * grid + grid);
              context.fillRect(col * grid, row * grid, grid - 1, grid - 1);
            }
        }
    }
}

function drawPiece(piece, offsetX, offsetY) {
    piece.forEach((value, index) => {
        if (value) {
            const x = (index % 4) + offsetX;
            const y = Math.floor(index / 4) + offsetY;
            context.fillText('🟧', col * grid, row * grid + grid);
            context.fillRect(x * grid, y * grid, grid - 1, grid - 1);
        }
    });
}

function collision(piece, offsetX, offsetY) {
    for (let i = 0; i < piece.length; i++) {
        if (piece[i]) {
            const x = (i % 4) + offsetX;
            const y = Math.floor(i / 4) + offsetY;
            if (x < 0 || x >= 10 || y >= 20 || board[y] && board[y][x]) {
                return true;
            }
        }
    }
    return false;
}

function merge(piece, offsetX, offsetY) {
    piece.forEach((value, index) => {
        if (value) {
            const x = (index % 4) + offsetX;
            const y = Math.floor(index / 4) + offsetY;
            board[y][x] = value;
        }
    });
}

function rotate(piece) {
    const newPiece = [];
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            newPiece[x * 4 + y] = piece[(3 - y) * 4 + x];
        }
    }
    return newPiece;
}

function dropPiece() {
    if (!collision(currentPiece, currentX, currentY + 1)) {
        currentY++;
    } else {
        merge(currentPiece, currentX, currentY);
        score += 50; // Incrementar la puntuación en 50
        document.getElementById('score').innerText = score;
        currentPiece = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
        currentX = 3;
        currentY = 0;
        if (collision(currentPiece, currentX, currentY)) {
            alert('Game Over');
            createBoard();
            score = 0;
            document.getElementById('score').innerText = score;
        }
    }
}

function update() {
    drawBoard();
    drawPiece(currentPiece, currentX, currentY);
    requestAnimationFrame(update);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && !collision(currentPiece, currentX - 1, currentY)) {
        currentX--;
    } else if (event.key === 'ArrowRight' && !collision(currentPiece, currentX + 1, currentY)) {
        currentX++;
    } else if (event.key === 'ArrowDown') {
        dropPiece();
    } else if (event.key === 'ArrowUp') {
        const rotatedPiece = rotate(currentPiece);
        if (!collision(rotatedPiece, currentX, currentY)) {
            currentPiece = rotatedPiece;
        }
    }
});

createBoard();
currentPiece = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
update();
setInterval(dropPiece, 1000);