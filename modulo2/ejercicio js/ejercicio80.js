function permutaciones(arr) {
    let resultados = [];

    function permutar(subArr, m = []) {
        if (subArr.length === 0) {
            resultados.push(m);
        } else {
            for (let i = 0; i < subArr.length; i++) {
                let curr = subArr.slice();
                let next = curr.splice(i, 1);
                permutar(curr.slice(), m.concat(next));
            }
        }
    }

    permutar(arr);
    return resultados;
}

let lista = [1, 2, 3];
console.log(permutaciones(lista));
