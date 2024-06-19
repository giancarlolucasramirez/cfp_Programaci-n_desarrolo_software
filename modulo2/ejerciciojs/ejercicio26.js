function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let resultado = 0 
let suma = 0;


while(resultado > -1){
    suma = resultado
    resultado = aleatorio(-5,50);
    console.log(resultado); 
}
console.log(suma);