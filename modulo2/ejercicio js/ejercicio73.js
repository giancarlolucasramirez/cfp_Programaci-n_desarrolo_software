function m(x,suma,array){
    if(x >= 0){
       suma = suma + array[x] 
        console.log(suma);
        x = x -1
        m(x,suma,array)
    }


}

let array = [1, 2, 3, 4, 5]; 

m(4,0,array)


