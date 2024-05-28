let array = [1,2,3,4,5,6,7,8];
let maximo,minimo;

for(i =0; i <8;i++){
    console.log(array[i]);
}

maximo = array[1]
minimo = array[1]

for(i=0 ; i <8;i++){
    if(array[i] > maximo){
        maximo = array[i]
    }
    if(array[i]< minimo){
        minimo = array[i]
    } 
}
console.log("el valor máximo de array es : ", maximo);
console.log("el valor mínimo del array es : ", minimo);