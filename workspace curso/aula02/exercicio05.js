const mediaParaAprovacao = 7.0
const notas = [7.5, 6.0, 7.1]
const mediaNotas = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(1)

var statusAprovavao;

if (mediaNotas < mediaParaAprovacao){
    statusAprovavao = "Reprovado!"
} else {
    statusAprovavao = "Aprovado!"
}

console.log(`${statusAprovavao} Sua média foi de ${mediaNotas}.`)
