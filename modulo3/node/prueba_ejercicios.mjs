//ejercicio1

// import { math } from "./funcion_Math.mjs";

//ejercicio2

// import { suma,resta,multiplicacion } from "./funcion_Math.mjs";

// ejercicio3
import {nombre_apt,nombre_usuario,clave}  from  "./funcion_Math.mjs";

// ejercicio4
import { Usuario } from  "./funcion_Math.mjs";

//ejercicio5
import { objeto_Usuario } from   "./funcion_Math.mjs";

// ejercicio6
import saludar from  "./funcion_Math.mjs";

// ejercicio7
import { alias } from  "./funcion_Math.mjs";

// ejercicio8
// import fs from 'node:fs';

// ejercicio9
import {suma,resta, objeto_Usuario} from   "./funcion_Math.mjs";

// ejercicio 10
// ejercicio10
import sistema_operativo from  './os.mjs';



// // ejercicio1

// console.log(math())

// // ejercicio2

console.log(`la suma de sus dos numeros es de ${suma(5,2)}`);
console.log(`la resta de sus dos numeros es de ${resta(5,1)}`);
console.log(`la multiplicacion de sus dos numeros es de ${multiplicacion(5,5)}`);

// // ejercicio3
console.log(`nombre es ${nombre_apt}  y usuario es ${nombre_usuario} y clave es ${clave}`);

// ejercicio4
const usuario1 = new Usuario('Juan', 'Pérez', 30)
console.log(usuario1);

// ejercicio5
console.log( objeto_Usuario);

// ejercicio6
console.log(saludar("gabriel"));

// ejercicio7
console.log(alias);

// ejercicio8
// console.log(fs);

// ejercicio9
console.log(objeto_Usuario);
console.log(`su suma es ${suma(5,2)} y su resta es ${resta(4,2)} `);

console.log(sistema_operativo.release());