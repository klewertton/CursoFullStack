//28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

const numeros = [10, 11, 12, 13, 14, 15]

const multiTres = numeros.filter((numero => numero % 3 == 0))


console.log(multiTres)