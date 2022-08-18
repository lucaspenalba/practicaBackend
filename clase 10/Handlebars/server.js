const express = require("express");
const app = express();

const contenedor = require("./utils/contenedor");
const productos = new contenedor ("productos.json");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const handlebars = require("express-handlebars");

const hbs = handlebars.create({
        extname: ".hbs", 
        defaultLayout: "index.hbs", 
        layoutsDir: __dirname + "/views/layouts", 
        partialsDir: __dirname + "/views/partials/" 
    });


app.engine("hbs", hbs.engine);


app.set("view engine", "hbs");


app.set("views", "./views");


app.use(express.static("public"));

app.get ("/", (req,res) =>{
    res.render("main");
})

app.get("/productos", (req,res) => {
    const listaProductos = productos.getAll();
    res.render("productos",{listaProductos:listaProductos});
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
