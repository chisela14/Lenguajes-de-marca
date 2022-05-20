//Función para crear una fila con los elementos del html. Controla que se introduzca un número en "posición" y tenga una posición adecuada.
function crearFila(){
    var tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let posicion = document.getElementById("posicion").value;
    if (isNaN(posicion)===true){
        document.getElementById("error").innerHTML=`Error: Debes introducir un número en el apartado "Posición"`;
    }
    else if (parseInt(posicion)>filas.length){
        document.getElementById("error").innerHTML=`Error: No puedes introducir una posición mayor a la que corresponde según el orden de la tabla`;
    }
    else{
        var nuevaFila = tabla.insertRow(posicion);
        var c1  = nuevaFila.insertCell(0);
        var c2  = nuevaFila.insertCell(1);
        var c3  = nuevaFila.insertCell(2);
        let textoPos = document.createTextNode(posicion);
        let equipo = document.getElementById("equipo").value;
        let textoEq = document.createTextNode(equipo);
        let puntos = document.getElementById("puntos").value;
        let textoPun = document.createTextNode(puntos);
        c1.appendChild(textoPos);
        c2.appendChild(textoEq);
        c3.appendChild(textoPun);
    }
}

//Función para modificar la tabla con la función anterior. Controla que se reemplacee una fila si hace falta y que no se pueda modificar la línea 0.
function cambiarTabla(){
    var tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let posicion = document.getElementById("posicion").value;
    if (parseInt(posicion)!=0){
        let fila = filas[parseInt(posicion)]
        //si la fila tiene algún valor borra la fila 
        if (fila != null){
            fila.remove();
        }
        crearFila();
    }
    else{
        document.getElementById("error").innerHTML=`Error: No puedes sustituir la línea 0`;
    }
    
}