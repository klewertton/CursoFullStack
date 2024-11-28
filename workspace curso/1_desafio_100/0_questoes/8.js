//8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:

const notas = [7.50, 8.00, 9.00]

const media = (notas[0]+notas[1]+notas[2])/notas.length
var statusAprovacao;
if (media>=7.00){
    statusAprovacao = "APROVADO"
} else {
    statusAprovacao = "REPROVADO"
}

console.log(`A primeira nota no aluno é: ${notas[0]}\n A segunda nota no aluno é: ${notas[1]}\n A terceira nota no aluno é: ${notas[2]}\n A média do aluno é: ${media.toFixed(2)}\n O aluno esta: ${statusAprovacao}`)

