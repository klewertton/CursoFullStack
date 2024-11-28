//22 - Crie um script que declare um array de números e utilize a função map() para criar um novo array onde cada número seja multiplicado por 2. Imprima o novo array.

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18]
//A função map()percorre cada elemento de um array, aplica uma função a cada elemento e retorna um novo array com os resultados.
let novosNumeros = numeros.map(numero => numero * 2)

console.log(novosNumeros)