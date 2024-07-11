let diagonal_principal,diagonal_secundaria;
let matriz = [
    [20, 50, 25,30,50,],
   [ 80, 70, 60,10,30,],
    [45, 55, 72,82,90,],
    [20, 50, 25,30,50,],
   [ 80, 70, 60,10,30,],
];
diagonal_principal =0 

for(i = 0;i<5;i++){
    diagonal_principal += matriz[i][i]
}
diagonal_secundaria= 0

for(i = 0;i<5;i++){
    diagonal_secundaria += matriz[i][4-i]

    
}

console.log("la suma de la diagonal principal es : ", diagonal_principal);
console.log("la suma de la diagonal secudaria es : ",diagonal_secundaria);