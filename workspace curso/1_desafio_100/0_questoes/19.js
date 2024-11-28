//19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.

const numeros = [12, 234, 23, 54, 53, 567]

function menorNumero (numero) {
    let maior = Math.min(numero)
    return maior
}

console.log(`O menor numero é ${menorNumero(...numeros)}.`)
