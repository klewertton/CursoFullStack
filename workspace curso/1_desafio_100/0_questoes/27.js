//27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

const numeros = [10, 11, 12, 13, 14, 15]

const numerosQuadrado = numeros.map(numero => numero ** 2)

console.log(numerosQuadrado)

// let i = 0;
// let numerosAoQuadrado = [];

// function numerosQuad (numeros) {
//     while (i < numeros.length) {
//         numerosAoQuadrado.push(numeros[i] ** 2);  // Calcula e armazena os valores
//         i++;
//     }
//     return numerosAoQuadrado;  // Retorna o array com os números ao quadrado
// }

// console.log(numerosQuad(numeros));