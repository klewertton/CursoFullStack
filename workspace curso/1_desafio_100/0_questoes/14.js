//14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.

const base = 10

function calculoTriangulo (base, altura = 5){
    let triangulo = (base*altura)/2
    return `O valor do triangulo é: ${triangulo}.`
}

console.log(calculoTriangulo(base))
