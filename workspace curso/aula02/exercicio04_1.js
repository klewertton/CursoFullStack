const aluno = {
    nome: "Klewertton",
    cpf: "000.000.000-01",
    cidade: "Joao Pessoa",
    notas: [7.00, 8.80, 9.99, 8.50]
}
//const notas = [7.00, 8.80, 9.99, 8.50]
const mediaNotas = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length
const notasAleatorias = aluno.notas[Math.floor(Math.random()*aluno.notas.length)]
const notaConvertida = notasAleatorias*10

console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}`)

console.log(`A primeira nota do aluno é: ${aluno.notas[0].toFixed(1)}`)
console.log(`A segunda nota do aluno é: ${aluno.notas[1].toFixed(1)}`)
console.log(`A terceira nota do aluno é: ${aluno.notas[2].toFixed(1)}`)
console.log(`A quarta nota do aluno é: ${aluno.notas[3].toFixed(1)}`)
console.log(`A media do aluno é: ${mediaNotas.toFixed(1)}`)
console.log(`A nota sorteada do aluno é: ${notasAleatorias} e convertida para a escala de 0-100 é: ${notaConvertida}`)

