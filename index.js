class usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        let array = [];
        for(let i = 0; i < this.libros.length; i++){
            array.push(this.libros[i].nombre)
        }
        return array
    }

    
}

let Carla = new usuario("Carla", "Gonzalez", [{nombre: "El Fin", autor: "Borges"}, {nombre: "El señor de los anillos", autor:"J. R. R. Tolkien"}], ["Tata", "Pacho"])

console.log(Carla.getFullName())

console.log(Carla.countMascotas())

Carla.addMascota("Pumba");

console.log(Carla.countMascotas())

console.log(Carla.getBookNames())

Carla.addBook("El Hobbit", "J. R. R. Tolkien")

console.log(Carla.getBookNames())



