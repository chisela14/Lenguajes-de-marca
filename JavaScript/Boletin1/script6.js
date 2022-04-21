/* 
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. 
Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

let suma=0
let contador=0

while(suma<=50){
    suma += parseInt(prompt('Introduce un número para añadir a la suma'))
    contador++
}

document.getElementById("resultado").innerHTML=`La suma total es: ${suma}, y el total de números introducidos es: ${contador}`;