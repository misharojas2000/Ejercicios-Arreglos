
const numeros = Array(10)

for(let i = 0; i < 10; i++){
    numeros[i] = Math.floor(Math.random() * 100)
}

//Recorre los elementos existentes
for(let valor of numeros){
    console.log(valor)
}

console.log('===============================================')

for(let index = 0; index < numeros.length; index++){
    console.log(numeros[index])
}


console.log('=================== Recorrer de forma inversa ====================')
for(let index = numeros.length - 1; index >= 0; index--){
    console.log(numeros[index])
}