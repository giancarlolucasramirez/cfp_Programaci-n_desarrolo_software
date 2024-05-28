function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let contra;
let largo;
contra = 1;
largo = 0
let contador = 0;


while (largo < 3) {
    contra = aleatorio(1,105);
    let string = String(contra);
    largo = string.length;
    contador += 1;
}

console.log(`Ingreso su contraseña correctamente en el intento: ${contador}`);
