let tablero = "";
for (let fila = 0; fila < 8; fila++) {
  for (let columna = 0; columna < 8; columna++) {
    if ((fila + columna) % 2 === 0) {
      tablero += "#";
    } else {
      tablero += " ";
    }
  }
  tablero += "\n"; // Agrega un salto de línea al final de cada fila
}
console.log(tablero);