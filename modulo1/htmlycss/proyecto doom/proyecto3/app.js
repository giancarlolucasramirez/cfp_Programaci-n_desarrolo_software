const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('txt-red')
const textoVerde = document.getElementById('txt-green')
const textoAzul = document.getElementById('txt-blue')

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarcolor(rojo,verde,azul){
const colorRGB = `rgb(${rojo},${verde},${azul})`;
document.body.style.backgroundColor = colorRGB;

}

inputRojo.addEventListener('change',(e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarcolor(rojo,verde,azul);

})

inputVerde.addEventListener('change',(e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarcolor(rojo,verde,azul);
    
})


inputAzul.addEventListener('change',(e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarcolor(rojo,verde,azul);
    
})