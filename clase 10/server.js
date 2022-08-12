const express = require('express')


const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {mensaje: 'Hola mundo'})
})


app.listen(8080, err => {
    if (err) throw new Error(`Error en el servidor: ${err}`)

    console.log('Server running on port 8080')
})


