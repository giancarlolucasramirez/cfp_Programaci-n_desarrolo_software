process.env.HOSTNAME = "Giancarlo";
console.log(process.argv);

console.log(`hola bienvenidos ${process.argv[1]}`);

process.on('exit',()=>{
    console.log('El proceso  ha terminado');
});

console.log(process.cwd());
console.log(process.env.HOSTNAME);

