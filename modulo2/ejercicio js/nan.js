/*
crear un programa que sea capaz de gestionar una pieza de tetris
10x10 
emogi
3 piezas
la pieza aparecera en la parte superior  izquierda de la pantalla desarollar una funcion capaz desplazar y rotar 
la pieza en el tablero, recibiendo una accion cada vez que se llame, desplazar y rotar la pieza
*/


function tetrix() {

  let tetris = new Array(10)

  console.log(tetris.fill("⬜"));

  for (let i = 0; i <= 10; i++) {
    console.log(tetris)
  }

}


function generar_pieza() {
  let pieza = [];
  let type = Math.floor(Math.random() * 7);
  switch (type) {
    case 0: // I-piece
      pieza = [[1, 1, 1, 1]];
      break;
    case 1: // J-piece
      pieza = [[1, 0, 0], [1, 1, 1]];
      break;
    case 2: // L-piece
      pieza = [[0, 0, 1], [1, 1, 1]];
      break;
    case 3: // O-piece
      pieza = [[1, 1], [1, 1]];
      break;
  }
  return pieza;
}

 tetrix()