const Contenedor = require('./contenedor');

const contenedor = new Contenedor('./producto.txt');


contenedor.save({titulo: 'Harry Potter', autor: 'J.K. Rowling', precio: 1100, cantidad: 10});

//Busco por Id
//contenedor.getById(1);

//muestro todos los registros
//contenedor.getAll();

//borro un registro
//contenedor.deleteById(5);

//borro todos los registros
//contenedor.deleteAll();


