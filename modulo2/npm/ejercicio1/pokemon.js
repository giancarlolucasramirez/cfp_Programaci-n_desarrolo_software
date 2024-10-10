const express = require('express');
const app = express();
const port = 3000;
const products = [
  {  image: "",id: 1,  name: 'Bulbasaur', power: "Grass · Poison" },
  {  image: "",id: 2,  name: 'Ivysaur', power: "Grass · Poison" },
  {  image: "",id: 3,  name: 'Venusaur', power: "Grass · Poison" },
  {  image: "",id: 4,  name: 'Charmander', power: "Fire" }
];

app.get('/', (req, res) => {
  res.json(products[1]); // Devuelve solo el primer Pokémon
});

// Nueva ruta para obtener un Pokémon por ID
app.get('/pokemon/:id', (req, res) => {
  // Se utiliza req.params.id para obtener el parámetro de la URL.

  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  /* Busca en el array products el Pokémon correspondiente. Si lo encuentra, lo devuelve como respuesta; 
  si no, devuelve un error 404 con un mensaje indicando que no se encontró.*/

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Pokémon no encontrado');
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
