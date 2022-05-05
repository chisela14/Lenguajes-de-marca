//Ejercicios dom

//1


//añadir
function agregar(){
    //conseguir lista
    let lista = document.getElementById('lista')
    //consigo texto
    let input = document.getElementById("nuevo");
    //creo nodo, texto para el nodo y lo añado
    let nuevoCampo = document.createElement("li");
    let textoCampo = document.createTextNode(input.value);
    nuevoCampo.appendChild(textoCampo);
    lista.appendChild(nuevoCampo);
}

//eliminar
function eliminar(){
    //conseguir lista
    let lista = document.getElementById('lista')
    //consigo primer elemento(el que se borra)
    let primero = lista.firstElementChild;
    //borro
    lista.removeChild(primero);
}

