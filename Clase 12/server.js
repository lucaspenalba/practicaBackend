
const express = require("express");
const app = express();
const fs = require("fs");


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

const { Server: IOServer} = require("socket.io");
const { Server: Httpserver} = require("http");
const { json } = require("body-parser");
const serverHttp = new Httpserver (app);
const io = new IOServer(serverHttp);


app.use(express.static("./public"));

app.get ("/", (req,res) =>{
    const lista = productos.getAll();
    res.render("main", {lista});
    res.sendFile(__dirname + "/public/index.html")
    io.emit("INIT");
})

const Contenedor = require ("./utils/contenedor.js")
const productosDisponibles = new Contenedor ("productos.json")

app.post("/", (req,res) => {
    const recibido = req.body;
    productos.save(recibido);
    res.redirect("/");
    io.emit("NEW_PRODUCT", productosDisponibles);

})

const PORT = 8080

const server = serverHttp.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});



const mensajesJSON = fs.readFileSync("./utils/mensajes.json", "utf-8");
mensajes = JSON.parse(mensajesJSON);


io.on("connection", (socket) =>{
    console.log ("nuevo cliente conectado")
    io.emit("INIT", "Socket funcionando",mensajes);

socket.on("POST_MESSAGE", (msg)=> {
    mensajes.push(msg);
    console.log(msg);
    io.sockets.emit("NEW_MESSAGE", msg)
    fs.writeFileSync("./utils/mensajes.json", JSON.stringify(mensajes));
    })
});



