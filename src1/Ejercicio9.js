/**Escribe un programa que reciba un arreglo de palabras y devuelva un nuevo arreglo con aquellas que tengan más
de 5 letras. */
require('colors')
let palabras = ["sol".blue, "ventilador".cyan, "mesa".green, "lámpara".magenta, "computadora".yellow];
let palabrasmayores = palabras.filter(palabra => palabra.length > 5);

console.log(`Las palabras con 5 letras o más son: ${palabrasmayores}`);