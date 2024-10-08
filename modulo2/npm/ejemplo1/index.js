const http = require('node:http')
const hostname =""
const server = http.createServer((pedido, respuesta) => {
    respuesta.write(`<!doctype html> 
        <html> 
            <head> 
            <style>
            h1{
            color:red;
            font-family:serif;
            }
            </style>
            <meta charset="UTF-8">
           
          
             </head> 
                <body> 
                <h1>hola amigosssssssssssssss</h1>
                </body> 
           
        </html>`)
    respuesta.end()
})

server.listen(3000, () => {
    console.log("servidor escuchado en el localhost:3000");
})
