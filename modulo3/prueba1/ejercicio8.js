function array_mayor(matriz){
   //Si la matriz tiene solo un elemento
    if (matriz.length === 1) {
        return matriz[0];
    } else {
        //  submatriz que excluye el primer elemento 
        let maximo = array_mayor(matriz.slice(1));
        // Compara el primer elemento de la matriz actual 
        // con el máximo número encontrado en la llamada recursiva.
        return matriz[0] > maximo  ? matriz[0] : maximo;
    }
}
let matriz = [10,20,80,90]

console.log(array_mayor(matriz));
    