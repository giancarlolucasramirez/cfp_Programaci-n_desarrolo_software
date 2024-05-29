
const matriz = [
    [20, 50, 25,30],
    [80, 70, 60,10],
    [45, 55, 72,82]
];


const sumaColumnas = [];

for (let j = 0; j < matriz[0].length; j++) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][j];
    }
    sumaColumnas.push(suma);
}

const promedioColumnas = sumaColumnas.map(suma => suma / matriz.length);


console.log('Suma por cada columna:', sumaColumnas);
console.log('Promedio por cada columna:', promedioColumnas);
