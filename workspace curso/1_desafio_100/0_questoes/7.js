//7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

const aluno = {
    nome: "Klewertton",
    cpf: "001.001.001-01",
    cidade: "Joao Pessoa",
    notas: [7.50, 8.00, 9.00, 10.00]
}
const notaAleatoria = aluno.notas[Math.floor(Math.random()* aluno.notas.length)]
const notaConvertida = notaAleatoria*10
const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length

console.log(`Aluno: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}\n Primeira nota: ${aluno.notas[0]}\n Segunda nota: ${aluno.notas[1]}\n Terceira nota: ${aluno.notas[2]}\n Quarta nota: ${aluno.notas[3]}\nMedia: ${media.toFixed(2)}\nNota convertida: ${notaConvertida}`)
