//32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.

const listaAlunos = [
    aluno1 = {
        nome: "Carlos",
        idade: "32",
        notas: [10, 8, 9]
    },
    aluno2 = {
        nome: "Ruan",
        idade: "31",
        notas: [7, 8, 8]
    },
    aluno3 = {
        nome: "Dani",
        idade: "30",
        notas: [9, 10, 9]
    }
]

const listaNomesAlunos = listaAlunos.map(nome => nome.nome)

console.log(listaNomesAlunos)
