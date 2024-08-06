function mcd(num1, num2, resultado, num) {
    if (num1 > num && num2 > num) {
        if (num1 % num === 0 && num2 % num === 0) {
            num1 = num1 / num;
            num2 = num2 / num;
            resultado = resultado * num;
            num = 2;
        } else {
            num = num + 1;
        }
        mcd(num1, num2, resultado, num);
    } else {
        console.log("El resultado es " + num1 + " - " + num2 + " | mcd es " + resultado);
    }
}

mcd(20, 30, 1, 2);
