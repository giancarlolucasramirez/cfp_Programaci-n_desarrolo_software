let minimo = function(valor1,valor2,valor3){
    if(valor1<valor2 && valor1<valor3 ){
        console.log(valor1);
    }else if(valor2<valor1 && valor2<valor3){
        console.log(valor2);
    }else if(valor3<valor1 && valor3<valor2){
        console.log(valor3);
    }else if(valor1==valor2 && valor1==valor3) {
       console.log("todos los números son iguales");
    }
            
}
minimo(50,15,80)