
// crear un programa que sea capaz de gestionar una pieza de tetris
// 10x10 
// emogi
// 3 piezas
// la pieza aparecera en la parte superior  izquierda de la pantalla desarollar una funcion capaz desplazar y rotar 
// la pieza en el tablero, recibiendo una accion cada vez que se llame, desplazar y rotar la pieza



let tetrisSize = 10; 
let tetris = Array(tetrisSize).fill().map(() => Array(tetrisSize).fill("⬜")); 
let currentPiece = generatePiece(); 

function imprimir_tetris() {  
  console.log(tetris)  
} 




for (let i = 0; i < currentPiece.length; i++) {
  for (let j = 0; j < currentPiece[i].length; j++) {
    if (currentPiece[i][j] === 1) {
      if (i < tetrisSize && j + 3 < tetrisSize) { 
        tetris[i][j] = "🟨"
        
      }
    }
  }
}






function generatePiece() {
  let piece = [];
  let type = Math.floor(Math.random() * 3);
  switch (type) {
    case 0: // I-piece
      piece = [[1, 1, 1, 0],[0,0,0,0]];
      break;
    case 1: // J-piece
      piece = [[1, 1, 1], [0, 0, 0]];
      break;
      case 2: // L-piece
      piece = [[0, 0, 0], [1, 1, 1]];
      break;
  
  }
  return piece;
}

let newPiece = generatePiece();

for (let i = 0; i < newPiece.length; i++) {
  for (let j = 0; j < newPiece[i].length; j++) {
    if (newPiece[i][j] === 1) {
      if (i < tetrisSize && j < tetrisSize) { 
        if (tetris[i][j] === "⬜") {
          tetris[i][j] = "🟪"
        }
      }
    }
  }
}

let newPiece2 = generatePiece();
for (let i = 0; i < newPiece2.length; i++) {
  for (let j = 0; j < newPiece2[i].length; j++) {
    if (newPiece2[i][j] === 1) {
      if (i < tetrisSize && j + 3 < tetrisSize) { 
        tetris[i][j + 3] = "🟧"
        
      }
    }
  }
}


function bajarPieza() {
  for (let i = tetrisSize - 2; i >= 0; i--) {
    for (let j = 0; j < tetrisSize; j++) {
      if (tetris[i][j] === "🟨" ) {

        if (i + 1 < tetrisSize) {
          tetris[i + 1][j] = "🟨";
          tetris[i][j] = "⬜";
        }
      }
    }
  }
}

function bajarPieza2() {
  for (let i = tetrisSize - 2; i >= 0; i--) {
    for (let j = 0; j < tetrisSize; j++) {
      if (tetris[i][j] === "🟪" ) {

        if (i + 1 < tetrisSize) {
          tetris[i + 1][j] = "🟪";
          tetris[i][j] = "⬜";
        }
      }
    }
  }
}


function bajarPieza3() {
  for (let i = tetrisSize - 2; i >= 0; i--) {
    for (let j = 0; j < tetrisSize; j++) {
      if (tetris[i][j] === "🟧" ) {

        if (i + 1 < tetrisSize) {
          tetris[i + 1][j] = "🟧";
          tetris[i][j] = "⬜";
        }
      }
    }
  }
}



for(i=0;i<=1;i++){
  for(j=0;j<=4;j++){
   imprimir_tetris()
   bajarPieza2() 
   bajarPieza3()
   bajarPieza()
 }
}


