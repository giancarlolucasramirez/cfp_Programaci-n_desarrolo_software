let vida = Array(10).fill().map(() => Array(10).fill(0));
let perdio = false;
let contador = 0;
let cantidad_minas = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
for (let mina = 1; mina <= cantidad_minas; mina++) {
  let fila_aleatoria = Math.floor(Math.random() * 10) + 1;
  let columna_aleatoria = Math.floor(Math.random() * 10) + 1;
  vida[fila_aleatoria - 1][columna_aleatoria - 1] = 7;
}

while (true) {
  contador = 0;
  console.log("Ingrese la posición que desea rellenar, si ya no quiere rellenar escriba 101");
  let relleno = parseInt(prompt("Ingrese la posición que desea rellenar, si ya no quiere rellenar escriba 101"));

  if (relleno === 101 || perdio) break;

  for (let f = 0; f < 10; f++) {
    for (let c = 0; c < 10; c++) {
      contador++;
      if (relleno === contador) {
        if (vida[f][c] === 7) {
          perdio = true;
        } else {
          vida[f][c] = 1;
        }
      }
      process.stdout.write(vida[f][c] + " | ");
    }
    console.log("");
  }

  if (perdio) {
    console.log("boooooooooooommmmmmmmmmmmmmmmm pa todas las reguetonas");
    break;
  }
}
