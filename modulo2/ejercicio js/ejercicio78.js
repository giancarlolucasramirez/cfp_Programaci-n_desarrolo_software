function torresDeHanoi(n, origen, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mueve el disco 1 de ${origen} a ${destino}`);
        return;
    }
    torresDeHanoi(n - 1, origen, auxiliar, destino);
    console.log(`Mueve el disco ${n} de ${origen} a ${destino}`);
    torresDeHanoi(n - 1, auxiliar, destino, origen);
}

let numeroDeDiscos = 3;
torresDeHanoi(numeroDeDiscos, 'A', 'C', 'B');

