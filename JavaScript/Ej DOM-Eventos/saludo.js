function saludar(){
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
    let apellido = document.getElementById("apellidos").value;
    let nodoSaludo = document.createElement("p");
    let texto = document.createTextNode("Hola  "+ nombre + " " + apellido + " bienvenido a esta página");
    nodoSaludo.appendChild(texto);
    let div = document.getElementById("saludo");
    div.appendChild (nodoSaludo);
}