function encontrar_mismo_numero(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            return true;
        }
    }

    return false;
}

console.log(encontrar_mismo_numero([1, 2,  3, 41, 25],[4, 5, 6, 7]))
