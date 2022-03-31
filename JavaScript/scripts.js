/*
//1. Básico
let numero = -4;
let palabra = "Hola Mundo";
let respuesta = true;
const PI = 3.14;
numero = 54;
numero2 = 34; //el ide te dice algo pero se declara sin let
console.log(numero, palabra, respuesta, PI, numero2);
//PI = 3.1415; error invalid assigment
*/
/*
//2. Operadores aritméticos
let var1 = 5, var2 = 2;   
console.log (var1 + var2);
console.log (var1 - var2);
console.log (var1 * var2);
console.log (var1 / var2);
console.log (var1 % var2);
let nombre = "Chisela";
console.log ("Hola " + nombre);
*/
/*
//3. Incremento/Decremento
let a = 5;
console.log(a); //5
console.log(a++); //5 (muestras a e incrementa)
console.log(a); //6
console.log(++a); //7 (incrementa y muestras a)
let b = 5;
console.log(b); //5
console.log(b--); //5
console.log(b); //4
console.log(--b); //3
console.log(a+=3);
console.log(a-3);
*/
/*
//4. Strings  SIN ACABAR
let cadena = "Hola Mundo";
console.log (cadena.length);
console.log (cadena.toUpperCase());
console.log(cadena.toLowerCase());
console.log(cadena.indexOf('o'));
*/

//5. Math

/*
//6. Condicionales
//Ej1
console.log ('Ejercicio 1');
let num = 0;
if (num>0){
    console.log (`${num} es mayor que 0`);
}else if (num<0){
    console.log (`${num} es menor que 0`);
}else {
    console.log (`${num} es igual que 0`);
}
//Ej2
console.log ('Ejercicio 2');
let var1 = 5, var2 = 1;
if (var1>0 && var2>0){
    console.log (`${var1} y ${var2} son mayores que 0`);
}else{
    console.log (`${var1} y ${var2} no son mayores que 0`);
}
//Ej3
console.log ('Ejercicio 3');
let cadena = 'Hola';
if (cadena.length > 4){
    console.log (`${cadena} es mayor que 4`);
}else if (cadena.length < 4){
    console.log (`${cadena} es menor que 4`);
}else{
    console.log (`${cadena} es igual que 4`);
}
//Ej4
console.log ('Ejercicio 4');
let numero1 = parseInt(prompt('Introduce el primer número: ')); //window.prompt?
let numero2 = parseInt(prompt('Introduce el segundo número: '));
let numero3 = parseInt(prompt('Introduce el tercer número: '));
//Ej5
console.log ('Ejercicio 5');
*/
/*
//7. Operador ternario
let numero = parseInt(prompt("Introduce un número: "));
(numero%2 ==0)? console.log(`${numero} es par`):console.log(`${numero} es impar`);
*/
/*
//8. Arrays
let array = [1,2,3,4,5];
console.log(array.indexOf(4));
console.log (array[1]+ array[2]);
let arrayCadenas = ["albaricoque", "bata", "casa", "dado"];
console.log(`La palabra ${arrayCadenas[1]} tiene ${arrayCadenas[1].length} letras`);
*/

//9. Arrays y métodos
let numbers = [1,2,3,4,5,6];
console.log(numbers.length);
let number = 4;
console.log (Array.isArray(number));
console.log (Array.isArray(numbers));
let primerElemento = numbers.shift()
console.log (primerElemento, numbers);
console.log (numbers.pop(), numbers);
numbers.unshift(primerElemento);
console.log(numbers);
numbers.reverse();
console.log(numbers.join(" "));
console.log(numbers);
//MAL, NO LO PILLA
numbers = numbers.splice(1,2,10,23,54);
//console.log(numbers.splice(1,2,10,23,54));
//array esperado numbers = [5,10,23,54,2,1]
console.log(numbers);
console.log(numbers.splice(1,0,12,14));
document.getElementById("ejercicio").innerHTML = numbers;