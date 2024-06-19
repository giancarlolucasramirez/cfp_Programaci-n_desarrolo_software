function calcularDescuentos() {
    const producto = [
        ["pantalon", "100", "A"],
        ["CAMISA", "85", "B"]
    ];

    const categoria = [
        ["A", "10"],
        ["B", "5"],
        ["C", "0"]
    ];

    for (let f = 0; f < producto.length; f++) {
        for (let fc = 0; fc < categoria.length; fc++) {
            if (producto[f][2] === categoria[fc][0]) {
                const descuento = parseFloat(producto[f][1]) * (parseFloat(categoria[fc][1]) / 100);
                const resultado = parseFloat(producto[f][1]) - descuento;
                console.log(`${producto[f][0]} | ${producto[f][1]} | ${categoria[fc][0]} | ${descuento} | ${resultado}`);
            }
        }
    }
}

calcularDescuentos();