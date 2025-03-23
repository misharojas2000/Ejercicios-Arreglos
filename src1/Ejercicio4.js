/**Dado un arreglo de 6 elementos, rota sus valores hacia la derecha una posición. El último valor debe pasar al
inicio del arreglo. */

require('colors')

let numeros = [1, 2, 3, 4, 5, 6];

let ultimoNumero = numeros.pop();
numeros.unshift(ultimoNumero);

console.log(`${numeros}`.red);