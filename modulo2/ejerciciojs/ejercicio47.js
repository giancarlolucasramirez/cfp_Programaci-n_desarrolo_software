let i,contador;
let caracter;
let array = ["a","a","b","c"]
caracter = "a";
contador = 0;
for(i = 0;i <4;i++){
    if(array[i] == caracter ){
        contador+=1
    }
}
console.log("el caracter ", caracter, " aparece ", contador, " veces en el array ");