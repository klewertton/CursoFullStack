//13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.

var largura = 50

function cuboLargura (largura){
    let calculo = largura**3
    return `Resultado da largura ao cubo: ${calculo}.`
}
console.log(cuboLargura(largura))