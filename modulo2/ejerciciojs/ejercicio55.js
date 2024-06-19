
const matriz = [
    [20, 50, 25,30],
    [80, 70, 60,10],
    [45, 55, 72,82],
    [25, 35, 12,22]

];

for(let i = 0; i<4; i++){
    for(let j = 0; j < 4;j++){
        console.log(matriz[i][j]);
    }
}


for(let i = 0; i<4; i++){
    for(let j = 3; j >= 0;j--){
        console.log(matriz[j][i]);
    }
}

