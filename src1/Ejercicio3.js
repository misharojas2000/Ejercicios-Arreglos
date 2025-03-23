/** Escribe un programa que analice un arreglo de números enteros y muestre:
• Cuántos números positivos hay.
• Cuántos negativos.
• Cuántos ceros.*/
require('colors')

let numeros = [0, -2, 5, 3, 0, -7, 9];

let positivos = 0;
let negativos = 0;
let cero = 0;

numeros.forEach(numero => {
    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        cero++;
        
    }

});

console.log(`Se encontraron ${positivos} números positivos`.blue);
console.log(`Se encontraron ${negativos} números negativos`.cyan);
console.log(`Se encontraron ${cero} ceros`.green);