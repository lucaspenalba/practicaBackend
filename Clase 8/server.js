
const express = require('express')

const Contenedor = require('./contenedor');

const contenedor = new Contenedor('./producto.txt');



const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const { Router} = express

const routerProductos = Router()

routerProductos.post('/', (req, res) => {
    const producto = req.body
    contenedor.save(producto)
        .then(() => {
            res.json({status: 200, producto})
        })
        .catch(error => {
            res.send({status: 500, error})
        })
}  )


routerProductos.get('/', async (req, res) =>{
    const productos = await contenedor.getAll()
    console.log(productos);
    res.send(productos)
})


routerProductos.get('/:id' ,async (req, res) =>{
    const productos = await contenedor.getAll()
    console.log(productos);
    res.send(productos)
}) 


routerProductos.put('/:id', (req, res)=>{
    const objProducto = req.body
    const {id} = req.params
    contenedor.updateById({id, ...objProducto})
    const respuesta = updateById({id, title, price, autor, thumbnail})
    res.json({respuesta})

} )









app.use('/api/productos', routerProductos)




const Port = 8080

const server = app.listen(Port, ()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})

server.on('error', err=> console.log(err))
