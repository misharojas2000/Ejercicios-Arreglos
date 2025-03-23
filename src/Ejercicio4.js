/**Recorrer matríces*/

const notas =
    [
        [4, 2, 5],
        [9, 8, 3],
        [6, 4, 9]
    ]


console.log('===========original==================')
for (let index = 0; index < notas.length; index++) {
    console.log(notas[index])
}

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index]
    for (let index2 = 0; index2 < nota.length; index2++) {
        nota[index2] = nota[index2] + 100
    }
}

console.log('===========procesados=============')
for (let index = 0; index < notas.length; index++) {
    console.log(notas[index])
}