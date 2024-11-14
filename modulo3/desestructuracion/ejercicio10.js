const articulo = {
    name: 'banano',
    prise: 1.99
}

function displayProduct ({ name, prise }) {
    console.log(`nombre ${name}, precio ${prise}`);
}

displayProduct(articulo)
