const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexaAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorhex = '#'



    for (let i = 0; i < 6; i++) {
        let indicealeatorio = Math.floor(Math.random() * 16)
        colorhex += digitos[indicealeatorio];

    }
    return colorhex;

}
boton.addEventListener('click',function(){
   let coloraleatorio = generarColorHexaAleatorio();
   
   color.textContent = coloraleatorio,
   
   document.body.style.backgroundColor = coloraleatorio 

})