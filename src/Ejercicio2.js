/**Métodos de arreglos */


//Rellenar un arreglo con los valores que nosotros le indiquemos
const numeros = Array(10)
numeros.fill(Math.floor(Math.random() * 100), 0, 5)
console.log(numeros)


//Generamos un nuevo arreglo a partir de otros
const vocales = ['a', 'e', 'i', 'o', 'u']
const letras = ['l', 'm', 'p']
const arreglosCombinados = vocales.concat(letras)
console.log(arreglosCombinados)

//El tamaño de un arreglo
console.log(`El tamaño del arreglo es: ${vocales.length}`)


//Buscar un elemento dentro de un arreglo
const terminoBusqueda = 'i'
const resultadoBusqueda = arreglosCombinados.includes('i', 3)
console.log(resultadoBusqueda ? `${terminoBusqueda} se encuentra dentro del arreglo` : `${terminoBusqueda} no se encuentra en el arreglo`)


//Encontrar el indice de un elemento
const indiceEncontrado = arreglosCombinados.indexOf('i')
console.log(`El indice encontrado es: ${indiceEncontrado}`)