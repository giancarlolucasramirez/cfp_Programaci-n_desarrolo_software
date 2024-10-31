function palindromo(string) {
    //verifica si el estring es menor a 1 caracter.
    if (string.length <= 1) {
        return true;//una cadena vacía o de un solo carácter es un palíndromo).
    }
   //comparar primer y ultimo caracter
    if (string[0] !== string[string.length - 1]) {
        return false;
    }
    return palindromo(string.slice(1, -1));
}

let palabra  = "radar";
let palabra2 = "a";

console.log(palindromo(palabra)); 

console.log(palindromo(palabra2));