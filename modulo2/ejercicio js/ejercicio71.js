function factorial(x,resultado){

if(x> 0){
    resultado = resultado * x 
    x = x - 1 
    factorial(x,resultado)
}else{
    console.log('resultado es : ',resultado);
}
return resultado
}

console.log(factorial(5,1));