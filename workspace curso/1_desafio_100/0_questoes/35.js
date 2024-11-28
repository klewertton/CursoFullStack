//35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18]
let i = 0
let novaLista = []

function descremento (numero){
    while(i < numeros.length){
        novaLista.push(numeros[i]-1)
        i++
    }
    return novaLista
}
console.log(descremento(numeros))
