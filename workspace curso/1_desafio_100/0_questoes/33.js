//33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.

const listaAlunos = [
    aluno1 = {
        nome: "Carlos",
        idade: "18",
        notas: [10, 8, 9]
    },
    aluno2 = {
        nome: "Ruan",
        idade: "20",
        notas: [7, 8, 8]
    },
    aluno3 = {
        nome: "Dani",
        idade: "16",
        notas: [9, 10, 9]
    }
]

const listaMaiorIdade = listaAlunos.filter(idade => idade.idade >= 18)
console.log(listaMaiorIdade)
