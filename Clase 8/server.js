
const express = require('express')
const { Router} = express



const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))




const routerProductos = Router()

routerProductos.put('/:id', (req, res)=>{
    const {title, price, autor, thumbnail} = req.body



} )
routerProductos.post('/', )
routerProductos.get('/:id', )







app.use('/api/productos', routerProductos)




const Port = 8080

const server = app.listen(Port, ()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})

server.on('error', err=> console.log(err))
