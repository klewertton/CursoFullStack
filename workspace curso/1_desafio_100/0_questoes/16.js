//16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.

const numeros = [12, 34, 65, 23, 645, 23]
let i = 0
let  soma = 0
while (i < numeros.length){
    soma += numeros[i];
    i++;
}
console.log(`Soma da Array: ${soma}`)