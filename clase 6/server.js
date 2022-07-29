const express = require('express')

const Contenedor = require('./contenedor');

const contenedor = new Contenedor('./producto.txt');

const app = express()


app.get('/productos', (req, res) =>{
    const productos = contenedor.getAll();
    res.send(productos.forEach(element => {
        
    }))
})

app.get('/productoRandom', (req, res) =>{
    
    res.json(contenedor.ramdom())
})

const Port = 8080

const server = app.listen(Port, ()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})

server.on('error', err=> console.log(err))
