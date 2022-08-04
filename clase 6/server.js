const { json } = require('express');
const express = require('express')

const Contenedor = require('./contenedor');

const contenedor = new Contenedor('./producto.txt');

const app = express()


app.get('/productos', async (req, res) =>{
    const productos = await contenedor.getAll()
    console.log(productos);
    res.send(productos)
})

app.get('/productorandom', ( req, res )=> {
        
    contenedor.random()
        .then(producto => {
            res.send({status: 200, producto})
        })
        .catch(error => {
            res.send({status: 500, error})
        })
})



const Port = 8080

const server = app.listen(Port, ()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})

server.on('error', err=> console.log(err))
