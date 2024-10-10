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
