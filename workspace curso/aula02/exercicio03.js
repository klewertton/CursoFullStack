const notas = [7.70, 8.50, 10.00]

console.log(`A primeira nota do aluno foi: ${notas[0].toFixed(2)}.`)
console.log(`A segunda nota do aluno foi: ${notas[1].toFixed(2)}.`)
console.log(`A terceira nota do aluno foi: ${notas[2].toFixed(2)}.`)

var media = (notas[0]+notas[1]+notas[2])/notas.length

console.log(`A media do aluno foi de: ${media.toFixed(2)}.`)