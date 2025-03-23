require('colors')

const alumnos = ['Darwin', 'Orlando']
const materias = ['Cálculo', 'Programación', 'Bases de datos']
const notas = [[5, 2, 8], [9, 8, 7]]

for (let index = 0; index < alumnos.length; index++) {
    console.log('====================================')
    console.log(`${alumnos[index]} sus notas son: `)

    let sumatoriaNotas = 0;
    for(let indexNotas = 0; indexNotas < notas[index].length; indexNotas++){
        const notaEspecifica = notas[index][indexNotas]
        sumatoriaNotas += notaEspecifica
    }

    for(let indexNotas = 0; indexNotas < notas[index].length; indexNotas++){
        const notaEspecifica = notas[index][indexNotas]
        console.log(`${materias[indexNotas]} : ${notaEspecifica}`)
    }

    const promedio = sumatoriaNotas / notas[index].length
    console.log(`El promedio es: ${promedio}`)
    console.log(promedio > 7 ? "Aprobado".green : "Reprobado".red)
}