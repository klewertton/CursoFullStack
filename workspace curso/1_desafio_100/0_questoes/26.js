//26 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas. Utilize a função toLowerCase() para converter as strings.

const frutas = ["BANANA", "MACA", "PERA", "UVA"]

const letraMaiuscula = frutas.map(fruta => fruta.toLowerCase())

console.log(letraMaiuscula)
