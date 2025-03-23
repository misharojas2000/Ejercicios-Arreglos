/**Dado dos arreglos del mismo tamaño, crea un nuevo arreglo que combine ambos de forma intercalada. */
require('colors')
let letras = ["a", "b", "c"];
let numeros = [1, 2, 3];

let NuevoArreglo = [];

for (let i = 0; i < letras.length; i++) {
    NuevoArreglo.push(letras[i]);  
    NuevoArreglo.push(numeros[i]);  
}
console.log(`Las letras y numeros combinados se ven de esta manera:`.cyan)
console.log(NuevoArreglo);