//29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

const nomes = ["ana", "lucas", "bruno", "anamelia"]

function buscarPorLetra (letra){
    return nomes.filter(nome => nome.startsWith(letra))
}
console.log(buscarPorLetra("a"))
