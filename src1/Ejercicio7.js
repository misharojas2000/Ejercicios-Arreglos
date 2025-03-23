/**Dado un arreglo con palabras, muestra cuántas vocales tiene cada palabra. */
require('colors')
let palabras = ["computadora", "mesa", "silla", "mouse"];

function contarVocales(palabra) {
    const vocales = "aeiouAEIOU"; 
    let numerodeVocales = 0;
    
    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            numerodeVocales++;  
        }
    }
    return numerodeVocales;
}

palabras.forEach(palabra => {
    console.log(`${palabra}: ${contarVocales(palabra)} vocales`.magenta);
});