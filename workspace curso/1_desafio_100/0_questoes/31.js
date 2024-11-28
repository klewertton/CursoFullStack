//31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.

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

for(let i = 0; i < listaAlunos.length; i++){
    console.log(`Nome do aluno: ${listaAlunos[i].nome}`)
}

