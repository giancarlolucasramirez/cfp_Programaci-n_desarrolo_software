// ejercico1
// export function math(){
// console.log("hola Mundo");
// }


// function suma(x,y){
//     return x+y
// }


// export function  resta(x,y){
//     return x-y
// }


// export function multiplicacion(x,y){
//     return x*y;
// }


// ejercicio2
// export const nombre_apt =  "Juan";
// export const nombre_usuario =  "Juanito123";
// export const clave =   "123456";


// ejercicio3
export class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // Método para mostrar la información del usuario
    imprimir() {
        return `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
}



// ejercicio4
// const  objeto_Usuario = {
//     nombre: "Juan",
//     edad: 30,
//     apellido: "Cumes"
// };
// export { objeto_Usuario}



// ejercicio5
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
 export default saludar;
 

// ejercicio6
const texto = "Este es mi texto para mi alias";
export { texto as alias };

// ejercicio7

    function suma(x,y){
        return x+y
    }
    
     function  resta(x,y){
        return x-y
    }

    const  objeto_Usuario = {
      nombre: "Juan",
       edad: 30,
       apellido: "Cumes",
        
    };
    

    export  {suma,resta, objeto_Usuario};




   




