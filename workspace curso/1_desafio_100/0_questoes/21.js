//21 - Crie um script que declare um array de números e utilize a função filter() para criar um novo array contendo apenas os números pares. Imprima o novo array.

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18]

const numerosPares = numeros.filter(function(numero){
    return numero % 2 ==0
})

console.log(numerosPares)