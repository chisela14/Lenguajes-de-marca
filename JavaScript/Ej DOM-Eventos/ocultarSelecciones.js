function mostrarOcultar(id){
    var parrafo = document.getElementById('p'+id);
    var enlace = document.getElementById('e'+id);

    if(parrafo.style.display == "" || parrafo.style.display == "block") {
        parrafo.style.display = "none";
        enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
        parrafo.style.display = "block";
        enlace.innerHTML = 'Ocultar contenidos';
  }
}