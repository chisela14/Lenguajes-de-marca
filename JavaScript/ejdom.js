//Ejercicios dom

//1


//añadir
function agregar(){
    let nuevoCampo = document.createElement("li");
    let input = document.getElementById("nuevo").value;
    let texto = document.createTextNode(input);
    nuevoCampo.appendChild(texto);
    let lista = document.getElementById('lista')
    lista.appendChild(nuevoCampo);
}

//eliminar
function eliminar(){
    let lista = document.getElementById('lista')
    let elementoBorrar = document.getElementsByTagName("li")[0];
    lista.removeChild(elementoBorrar);
}

