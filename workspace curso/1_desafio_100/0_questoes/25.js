//25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função toUpperCase() para converter as strings.

const frutas = ["banana", "maca", "pera", "uva"]

const letraMaiuscula = frutas.map(fruta => fruta.toUpperCase())

console.log(letraMaiuscula)