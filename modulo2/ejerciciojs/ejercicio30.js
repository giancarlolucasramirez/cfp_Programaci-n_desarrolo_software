function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numAdivinar = aleatorio(1,50); 
let miNum= 0;
let contador = 0

while(miNum != numAdivinar){
    miNum = aleatorio(1,50);
    contador += 1
}

console.log(`Adivinaste el número ${miNum} en el intento ${contador}`);