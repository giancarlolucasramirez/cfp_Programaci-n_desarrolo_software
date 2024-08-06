function pedir_num(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('El número mayor es:', num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log('El número mayor es:', num2);
    } else if (num3 > num2 && num3 > num1) {
        console.log('El número mayor es:', num3);
    }
}

pedir_num(15, 30, 50);
