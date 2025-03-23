/**Escribe un programa que verifique si los elementos de un arreglo están en orden ascendente (es decir, cada
número debe ser mayor o igual al anterior). */
require('colors')
const Descendente = "no está en orden ascendente";
const Ascendente = "está en orden ascendente";

let secuencia1 = [2, 4, 3, 6, 8, 9, 10];
let secuencia2 = [5, 3, 8];

function verificarAscendente(secuencia) {
    for (let i = 1; i < secuencia.length; i++) {
        if (secuencia[i] < secuencia[i - 1]) {
            return Descendente;
        }
    }
    return Ascendente;
}

console.log(`La secuencia 1: [${secuencia1}] ${verificarAscendente(secuencia1)}`.green);
console.log(`La secuencia 2: [${secuencia2}] ${verificarAscendente(secuencia2)}`.yellow);