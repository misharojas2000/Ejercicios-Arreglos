/**Dado un arreglo de números, encuentra el subarreglo (secuencia continua) más largo que no contenga ceros. */
require('colors')
let numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];

function subarregloLargo(arreglo) {
    let Subarreglomayor = []; 
    let subarreglo1 = []; 

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== 0) {
            subarreglo1.push(arreglo[i]);
        } else {

            if (subarreglo1.length > Subarreglomayor.length) {
                Subarreglomayor = subarreglo1;
            }
            
            subarreglo1 = [];
        }
    }

    if (subarreglo1.length > Subarreglomayor.length) {
        Subarreglomayor = subarreglo1;
    }

    return Subarreglomayor;
}

console.log(`${subarregloLargo(numeros)}`.rainbow); 