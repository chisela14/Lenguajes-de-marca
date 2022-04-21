/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura 
se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

let figura = prompt('Introduce la figura geómetrica de la que quieres calcular el área: triangulo (1), rectangulo (2) ó circulo (3)')
let base;
let altura;
let radio;

switch(figura){
    case '1':
        base=prompt('Introduce la base del triángulo')
        altura=prompt('Introduce la altura del triángulo')
        console.log(`El área del triángulo es ${(base*altura)/2}`);
        break
    case '2':
        base=prompt('Introduce la base del rectángulo')
        altura=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${base*altura}`);
        break
    case '3':
        radio=prompt('Introduce el radio del círculo')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radio,2)}`);
        break
    default: console.log('La figura geométrica no es válida');
}