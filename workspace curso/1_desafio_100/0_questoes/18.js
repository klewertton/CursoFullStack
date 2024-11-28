//18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.

const numeros = [12, 234, 23, 54, 53, 567]

function maiorNumero (...numeros) {
    let maior = Math.max(...numeros)
    return maior
}

console.log(`O maior numero é ${maiorNumero(...numeros)}.`)
//Aqui foi usado o operador spread, representado por (...) é uma ferramenta do JavaScript que permite expandir os valores de um objeto ou array para outro objeto ou array. Ele é representado por três pontos consecutivos, "…".