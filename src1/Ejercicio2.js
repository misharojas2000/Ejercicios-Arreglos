/**Dado un arreglo de calificaciones, calcula el promedio sin contar la nota más baja ni la más alta. Asegúrate de
mostrar las notas excluidas y el promedio final. */
require('colors')

let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];

notas.sort((a, b) => a - b);

let notasExcluidas = [notas[0], notas[notas.length - 1]];
let notasRestantes = notas.slice(1, notas.length - 1);
let promedio = notasRestantes.reduce((sum, nota) => sum + nota, 0) / notasRestantes.length;

console.log('**************** Notas Originales ****************'.cyan);
console.log(notas);


console.log('**************************************************'.cyan);
console.log(`Nota más baja (excluida): ${String(notasExcluidas[0]).red}`.red);
console.log(`Nota más alta (excluida): ${String(notasExcluidas[1]).green}`.green);

console.log('**************************************************'.cyan);
console.log(`Promedio sin contar la más baja y la más alta: ${String(promedio.toFixed(2)).magenta}`.magenta);