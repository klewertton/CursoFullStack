//12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.

let altura = 10

function calculoQuadrado (altura){
    let quadrado = altura**2
    return `Resultado: ${quadrado}.`
}

console.log(calculoQuadrado(altura))