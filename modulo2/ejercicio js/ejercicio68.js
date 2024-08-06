function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    } else {
        return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
    }
}

console.log(invertirCadena("hola")); 
