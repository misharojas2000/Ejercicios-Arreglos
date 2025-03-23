/**Dado un arreglo de números, encuentra el número que más veces se repite y cuántas veces aparece. */
require('colors')
let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];


function numeroRepetido(numero) {
    let repeticiones = {}; 

    
    for (let num of numero) {
        repeticiones[num] = (repeticiones[num] || 0) + 1;
    }


    let numeroMasRepetido = null;
    let mayorRepeticion = 0;
    for (let num in repeticiones) {
        if (repeticiones[num] > mayorRepeticion) {
            numeroMasRepetido = num;
            mayorRepeticion = repeticiones[num];
        }
    }

    return { numero: numeroMasRepetido, veces: mayorRepeticion };
}

const resultado = numeroRepetido(datos);
console.log(`El número que más veces se repite es: ${resultado.numero}, apareciendo ${resultado.veces} veces`.rainbow); 