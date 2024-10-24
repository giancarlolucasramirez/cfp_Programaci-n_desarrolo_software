let numeros = [0,0,4,4]
let resultado = numeros.some((numero, indice) => (numero === 0 && numeros[indice + 1] === 0) ) || numeros.some((numero, indice) => (numero === 4 && numeros[indice + 1] === 4) )

if( resultado){
    console.log(true);
} else if (numeros.includes(4) && numeros.includes(0)) {
    console.log(false);
}


