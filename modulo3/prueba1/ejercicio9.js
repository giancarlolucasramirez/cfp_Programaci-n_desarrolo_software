function encontrar_numero(m, n) {
   // si alguna de las matriz es 1  solo hay un camino posible.
    if (m == 1 || n == 1) {
        return 1;
    }
    // la celda de arriba y desde la celda de la izquierda.
    return encontrar_numero(m - 1, n) + encontrar_numero(m, n - 1);
    // se obtiene el número total de caminos posibles.

}

//significa que hay 70 caminos posibles en una cuadrícula de 5×5

console.log(encontrar_numero(5,5));

    