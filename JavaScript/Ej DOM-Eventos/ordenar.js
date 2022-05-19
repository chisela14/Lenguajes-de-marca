function ordenar(){
    let input = document.getElementById("numeros").value;
    let array = input.split(',');
    array.sort();
    let nodoArray = document.createElement("p");
    let texto = document.createTextNode(array);
    nodoArray.appendChild(texto);
    let div = document.getElementById("ordenado");
    div.appendChild (nodoArray);
}