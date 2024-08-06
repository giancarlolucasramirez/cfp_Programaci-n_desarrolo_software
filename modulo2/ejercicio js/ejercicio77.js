function almacenar(num) {
    if (num === 0) {
        return 0;
    } else {
        return (num % 10) + almacenar(Math.floor(num / 10));
    }
}

let num = 1234;
console.log(almacenar(num)); 
