/**Dado un arreglo de nombres que puede contener nombres repetidos, crea un nuevo arreglo que contenga solo
nombres únicos (sin duplicados). */

 let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"]

 // Usamos Set + spread para obtener un arreglo sin duplicados
 let nombresCorregidos = [...new Set(nombres)]
 
 // Mostramos el arreglo como tal
 console.log(nombresCorregidos)
 