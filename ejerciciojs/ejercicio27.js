function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let resultado = 0 
let suma = 0;
let contador = 0;


while(contador < 10){
    if (resultado%2 == 0) {
        contador += 1;
        suma += resultado
        console.log(resultado);
        resultado = aleatorio(-5,50);
    } else {
        contador += 1
    }
    
}
console.log('La suma de los números pares es: ' + suma);