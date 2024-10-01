const fs = require('node:fs')
// console.log(fs);
// const stats = fs.statSync('texto.txt')
// console.log(stats.size)
// console.log(stats.isDirectory());
// console.log(stats.isFile());

/* let data = fs.readFileSync('texto.txt','utf-8')
console.log(data) */


fs.readFile('muchotexto.txt','utf-8',
    ()=>{
        console.log('Archivo leido')
    }
)
console.log('--------');

let data2 = fs.readFile('txt.txt','utf-8',
    (err,data)=>{
    if(err){
        console.error('Error al leer el archivo')
        return;
    }
    console.log(data)

})

console.log('------9090');
let data = fs.readFile('texto.txt','utf-8',
    (err,data)=>{
        if(err){
            console.error('Error al leer el archivo')
            return;
        }
        console.log(data)
    }   

)
console.log('---1010');