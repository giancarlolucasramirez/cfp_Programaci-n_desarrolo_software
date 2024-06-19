let anterior = 0,actual = 0,resultado = 0;
for (let i = 0; i <= 60; i++) {
  console.log(actual)
  if (i== 0){
    actual = 1
    anterior = 0
  }else{
    resultado += actual;
    anterior = actual;
    actual  = resultado
  }
}