
function palindromo(string) {
    return string === string.split('').reverse().join('');
  
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


