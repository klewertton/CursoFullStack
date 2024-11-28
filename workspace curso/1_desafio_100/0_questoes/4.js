//4 - Faça um script que contenha uma função objetivoDoCurso(tecnologia). A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”. Fora da função, defina uma const tecnologia que possua o valor “React”. Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”. Faça um exemplo com function e outro com arrow function.

const teconologia = "React"

function objetivoDoCurso (tecnologia){
    return `Meu objetivo do curso é aprender ${tecnologia} (apenas com Function).`
}
console.log(objetivoDoCurso(teconologia))

const objetivoDoCurso2 = (teconologia) => {
    return `Meu objetivo do curso é aprender ${teconologia} (apenas com Arrow).`
}
console.log(objetivoDoCurso2(teconologia))