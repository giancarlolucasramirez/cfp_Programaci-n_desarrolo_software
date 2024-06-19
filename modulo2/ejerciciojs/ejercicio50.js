const numeros = [5, 5, 4, 3, 2, 10, 15, 18, 30, 50, 15, 10]
const unicos = [];

for(let i = 0; i < numeros.length; i++) {
 
  const elemento = numeros[i];
 
  if (!unicos.includes(numeros[i])) {
    unicos.push(elemento);
  }
}
console.log(unicos);

