class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(mascotas) {
        this.mascotas.push('Pajaro');
        return console.log(this.mascotas)
    }
    countMascotas(mascotas) {
        return console.log(this.mascotas.length);
    }
    addLibro(libros) {        
        this.libros.push({titulo: 'Harry Potter', autor: 'J.K. Rowling'}) 
        return console.log(this.libros);
    }

    getBooksName() {    
        return console.log(this.libros.nombre);
    }
}

const usuario = new Usuario('Lucas', 'Peñalba', { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien' }, ['Perro', 'Gato', 'Caballo']);

usuario.getFullName();
usuario.addMascota();
usuario.countMascotas();
usuario.getBooksName();
usuario.addLibro();
