//5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

const carreira = "Programador"
function meuObjetivo (carreira){
    return `Meu objetivo de carreira é me tornar um ${carreira}.`
}

const meuObjetivo2 = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}. (Com Arrow)`
}

console.log(meuObjetivo(carreira))
console.log(meuObjetivo2(carreira))
