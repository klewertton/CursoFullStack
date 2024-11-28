//1 - Crie um script que tenha três variáveis:

var nome = "Klewertton"
const cpf = "000.000.000-01"

function exibirSobreNome(){
    let sobreNome = "Tenorio"
    return sobreNome
}

console.log(nome)
console.log(exibirSobreNome())
console.log(cpf)
console.log(`Meu nome e ${nome + " " + exibirSobreNome()} e CPF ${cpf}`)
