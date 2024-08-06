function potencia(base,exponente,almacenar){
    if(exponente >= 0){
        almacenar = almacenar * base
        exponente = exponente -1
        potencia(base,exponente,almacenar)
    }else{
        console.log('su potencia es : ', almacenar );
    }

    return almacenar
    } 


    console.log(potencia(5,3,1)); 