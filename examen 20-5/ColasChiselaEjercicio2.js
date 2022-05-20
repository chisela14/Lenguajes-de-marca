//función para añadir elementos a la lista
function agregar(){
    let nuevoCampo = document.createElement("li");
    let input = document.getElementById("nuevo").value;
    let texto = document.createTextNode(input);
    nuevoCampo.appendChild(texto);
    let posicion = document.getElementById("posicion").value
    let campoReferencia = document.getElementsByTagName("li")[posicion-1];
    let lista = document.getElementById("lista");
    lista.insertBefore(nuevoCampo, campoReferencia);
}

//funció para eliminar elementos de la lista
function eliminar(){
    let posicion = document.getElementById("posicion").value;
    let elementoBorrar = document.getElementsByTagName("li")[posicion-1];
    elementoBorrar.parentNode.removeChild(elementoBorrar);
}