function potencia(valor1, valor2) {
    let resultado = 1;

    for (let i = 0; i < valor2; i++) {
        resultado *= valor1;
    }

    return resultado;
}

let resultado = potencia(5, 2);

console.log(resultado); 
