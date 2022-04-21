/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. 
Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda
ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

const numeros = [18,5,66,14,71]
let pares = []
let impares = []

for(const number of numeros){
    //1*10 podría dar 11 con el +1, así que hay que poner *9
    let random = Math.round(Math.random() * 9 + 1)
    const result = number * random

    console.log(`${number} x ${random} = ${result}`);
    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}

console.log(pares);
console.log(impares);