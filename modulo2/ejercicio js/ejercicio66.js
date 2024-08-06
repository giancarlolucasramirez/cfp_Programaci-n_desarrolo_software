function ordenarNumeros(array) {
    return array.sort((a, b) => a - b);
}

let arrayNum = [5, 2, 33, 1, 2];
let arrayOrden = ordenarNumeros(arrayNum);

console.log('Original | Ordenado');
for (let i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i], '       | ', arrayOrden[i]);
}


