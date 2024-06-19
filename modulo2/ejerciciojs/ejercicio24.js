function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random = aleatorio(1,10)


while(random != 5){
    random = aleatorio(1,10)
    console.log(random);
    if(random == 5){
        console.log("felicidades adivinaste el número");
    }
}
