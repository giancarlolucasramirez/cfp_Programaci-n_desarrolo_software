function palindromo(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] !== string[string.length - 1]) {
        return false;
    }
    return palindromo(string.slice(1, -1));
}

let palabra  = "radar";
let palabra2 = "ana"
let  palabra3 = "anita";
let palabra4 = "hola";
let palabra5 = "anilina"
console.log(palindromo(palabra)); 
console.log(palindromo(palabra2)); 
console.log(palindromo(palabra3)); 
console.log(palindromo(palabra4)); 
console.log(palindromo(palabra5));