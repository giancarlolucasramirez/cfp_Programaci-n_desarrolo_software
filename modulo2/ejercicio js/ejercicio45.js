let caracter = 'a';
let encontrado = false;
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
array.forEach(function(elemento) {
    if (elemento === caracter) {
        console.log('El carácter', caracter, 'se encuentra e n el array');
        encontrado = true;
    }
});
if (!encontrado) {
    console.log('El carácter', caracter, 'no se encuentra en el array');
}