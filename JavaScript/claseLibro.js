class Libro{
    constructor(titulo, autor, anyo, genero){
        this.titulo = titulo
        this.autor = autor
        this.anyo = anyo
        this.genero = genero

        this.datos = `Èl libro se titula ${this.titulo}, es del autor ${this.autor}, del año ${this.anyo} y del género de ${this.genero}`
    }
    infoLibro(){
        return this.datos
    }
}
let libros = []
let generos = ["aventuras", "terror", "fantasía"]
for(let i=1; i<4; i++){
    console.log("Introduce los datos de un libro")
    let autor = prompt("Introduce el autor")
    while (autor === ""){
        autor = prompt("Introduce de nuevo el autor")
    }
    let titulo = prompt("Introduce el titulo")
    while (titulo === ""){
        titulo = prompt("Introduce de nuevo el titulo")
    }
    let anyo = parseInt(prompt("Introduce el año"))
    while (isNaN(anyo)===true && anyo.length != 4){
        anyo = parseInt(prompt("Introduce un número de cuatro dígitos para el año"))
    }
    let genero = prompt("Introduce el genero")
    while (generos.indexOf(genero) === -1){
        genero = prompt("No se ha encontrado ese género, introdúzcalo de nuevo. Los géneros disponibles son: aventuras, terror o fantasía")
    }
    let libro = new Libro(autor, titulo, anyo, genero)
    libros.push(libro)
    console.log(libro.infoLibro())
}

function mostrarLibros(array){
    console.log (array)
}
console.log(mostrarLibros(libros))

//Crea una función que muestre los autores ordenados alfabéticamente.
function ordenarAutores(array){
    let autores = []
    for (const key of array){
        autores.push(key.autor)
    }
    autores.sort()
}
console.log(ordenarAutores(libros))

//Crea una función que pida un género y muestre la información de los libros que
//pertenezcan a ese género usando el método que devuelve la información.
function mostrarPorGenero(array){
    let genero = prompt("Introduce un genero")
    for (const libro of array){
        if (array.genero == genero){
            console.log(libro.infoLibro)
        }
    }
}
console.log (mostrarPorGenero(libros))