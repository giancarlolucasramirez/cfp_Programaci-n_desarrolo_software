function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    } else {
     
        return cadena.charAt(cadena.length - 1) + invertirCadena(cadena.substring(0, cadena.length - 1));
    }
}

let cadena = "perro";
console.log(invertirCadena(cadena)); // Output: "odnuM aloH"
