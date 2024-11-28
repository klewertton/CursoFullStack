//23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18]

const soma = numeros.reduce((soma, numero)=> soma += numero)

console.log(soma)
