function numero_mayor_matriz(matriz){
    if (matriz.length === 1) {
        return matriz[0];
    } else {
        let max = numero_mayor_matriz(matriz.slice(1));
        return matriz[0] > max ? matriz[0] : max;
    }
}
let matriz = [10,20,80,90]

console.log(numero_mayor_matriz(matriz));