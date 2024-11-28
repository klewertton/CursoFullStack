//36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 25]

let novaLista = numeros.filter
(numero => numero % 5 == 0)

console.log(novaLista)