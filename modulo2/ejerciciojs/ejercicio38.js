let num,contador,i;
contador = 1;
num = 1346848646545
for (let i = 0; i <= 1; i++) {
  if(num<10){
    i=1
  }else{
    i=0
    contador +=1
    num /= 10
  }

}
console.log("este numero tiene ", contador ," digitos")