let matrizA = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
];
let primera_suma = matrizA.reduce((a, b) => a + b);

let matrizB = [
    9, 8, 7,
    6, 5, 6,
    3, 2, 1,
];

let segunda_suma = matrizB.reduce((a, b) => a + b);


console.log(primera_suma + segunda_suma);
