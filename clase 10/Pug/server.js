const express = require("express");
const app = express();

const contenedor = require("./utils/contenedor");
const productos = new contenedor ("productos.json");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const pug = require('pug');

const layouthome = pug.compileFile ("./views/main.pug");
const layoutproductos = pug.compileFile  ("./views/productos.pug");

app.set("view engine", "pug");

app.set("views", "./views");

app.use(express.static("public"));

app.get ("/", (req,res) => {
    res.send(layouthome ({
      }));
})

app.get("/productos", (req,res) => {
    const listaProductos = productos.getAll();
    res.send(layoutproductos ({
        productos: listaProductos

    }));
})
app.post("/productos", (req,res) => {
    const recibido = req.body;
    productos.save(recibido);
    res.redirect("/productos");
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
