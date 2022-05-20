//creo el array y lo ordeno para que se cree la tabla ordenada directamente
let provincias = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"];
provincias = provincias.sort();

//Función para crear una tabla con los contenidos del array que se le pase por parámetro
function crearTabla(array){
    //cojo el elemento body para crear una tabla en él con borde 2 y ancho 150
    var body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    tabla.setAttribute("width", "150");
    //bucle para crear una fila y celda por cada elemento del array, siendo cada elemento el texto que saldrá en la celda
    for (let elemento of array){
        let fila = tabla.insertRow();
        let celda = fila.insertCell();
        let texto = document.createTextNode(elemento);
        celda.appendChild(texto);
    }
}
//Función para mostrar el array el resultado de la función anterior, ocultando el botón.
function mostrarTabla(array){
    //oculto el botón asignándole la clase "oculto" que he añadido en el html
    document.getElementById("boton").className = "oculto";
    //llamo a la función para crear la tabla
    crearTabla(array);
}

