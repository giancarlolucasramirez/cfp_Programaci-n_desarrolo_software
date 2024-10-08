const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, image: "", name: 'Bulbasaur', power: "Grass · Poison" },
  { id: 2, image: "", name: 'Ivysaur', power: "Grass · Poison" },
  { id: 3, image: "", name: 'Venusaur', power: "Grass · Poison" },
  { id: 4, image: "", name: 'Charmander', power: "Fire" }
];

app.get('/', (req, res) => {
  res.json(products);
});

// Nueva ruta para obtener un Pokémon por ID
app.get('/pokemon/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Pokémon no encontrado');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});