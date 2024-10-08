import {readFile} from 'node:fs/promises';
import promices from 'node:fs/promises'

// import promices from 'node:fs/promices'
promices.readFile('texto.txt', 'utf-8')
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.error(`error reading file ${err}`)
})

Promise.all([
    promices.readFile('texto.txt', 'utf-8'),
    promices.readFile('txt.txt', 'utf-8'),
    promices.readFile('muchotexto.txt', 'utf-8'),
]).then(([file1, file2, file3]) => {
    console.log(file1);
    console.log(file2);
    console.log(file3);
}).catch((err) => {
    console.error(`error reading file ${err}`);
});

async function promesas() {
    try{
        let data3 =  await readFile('muchotexto.txt', 'utf-8');
        console.log(data3);
    } catch (err) {
        
    }

    console.log('-----------');
    let data2 = await readFile('texto.txt','utf-8');
    console.log(data2);
    console.log('-----9090');
    let data = await readFile('txt.txt','utf-8')
    console.log(data);
    console.log('-----1010');
}

promesas()