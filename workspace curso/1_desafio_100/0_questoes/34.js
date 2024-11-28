//34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

const listaAlunos = [
    aluno1 = {
        nome: "Carlos",
        idade: 18,
        notas: [10, 8, 9]
    },
    aluno2 = {
        nome: "Ruan",
        idade: 20,
        notas: [7, 8, 8]
    },
    aluno3 = {
        nome: "Dani",
        idade: 16,
        notas: [9, 10, 9]
    }
]
const somaIdades = listaAlunos.reduce((soma, aluno) => (soma += aluno.idade/listaAlunos.length),0)
// const mediaIdades = somaIdades / listaAlunos.length
// console.log(mediaIdades)
console.log(somaIdades)
