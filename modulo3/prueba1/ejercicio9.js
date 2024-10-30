function encontrar_numero(m,n){
    if(m==1 || n==1){
     return 1;
     }else{
         return encontrar_numero(m-1,n)+encontrar_numero(m,n-1);
     }
 }
 console.log(encontrar_numero(5,5));
 
 