function subsecuenciaArrayQueTengaLaSumaGrande() {
    let array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    let max = Number.MIN_SAFE_INTEGER;
    let subsecuencia = [];
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = i; j < array.length; j++) {
            sum += array[j];
            if (sum > max) {
                max = sum;
                subsecuencia = array.slice(i, j + 1);
            }
        }
    }
    return subsecuencia;
}

console.log(subsecuenciaArrayQueTengaLaSumaGrande())


