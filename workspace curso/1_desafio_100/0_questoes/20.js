//20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.

const numeros = [123, 345, 54, 212, 65]
let soma = 0
let media = 0
let i = 0

function mediaNumeros (numero){
    while(i < numeros.length ){
        soma += numeros[i]
        i++
    }
    return media = soma/numeros.length
}

console.log(`A media dos numeros é ${mediaNumeros(...numeros)}.`)
