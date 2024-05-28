let array = [2,1,4,6,3,12]
let contador_par;
contador_par = 0
for(i = 0; i<6;i++){
    if(array[i] %2==0){
        contador_par++;
    }
}

console.log("la cantidad de numeros pares del array es de : ", contador_par);