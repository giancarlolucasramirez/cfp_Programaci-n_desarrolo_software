let numeros = [0,0,4,4]
let resultado = numeros.some((numero, indice) => (numero === 0 && numeros[indice + 1] === 0)) && numeros.some((numero, indice) => (numero === 4 && numeros[indice + 1] === 4))

if( resultado){
    console.log(false);
} else if (numeros.some((numero, indice) => (numero === 0 && numeros[indice + 1] === 0)) || numeros.some((numero, indice) => (numero === 4 && numeros[indice + 1] === 4))) {
    console.log(true);
}
