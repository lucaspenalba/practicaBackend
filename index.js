console.log('Hello World');

let nombre = 'Lucas';
let apellido = 'Peñalba';

let libros = { nombre: 'El señor de los anillos', autor: 'J.R.R. Tolkien' };

let mascotas = ['Perro', 'Gato', 'Caballo'];

function getFullName() {
    return console.log(`${nombre} ${apellido}`);
}

getFullName();

function addMascota(mascotas) {
    mascotas.push('Pajaro');
    return console.log(mascotas)
}

addMascota(mascotas);

function countMascotas(mascotas) {
    return console.log(mascotas.length);
}

countMascotas(mascotas);

function addLibro(libros) {
    libros.nombre = 'Harry Potter';
    libros.autor = 'J.K. Rowling';
    return console.log(libros);
}

addLibro(libros);
