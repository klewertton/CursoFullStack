//criando um array de numeros de 1 ate 100
const numeros = Array.from({length: 100}, (_, index) => index + 1)

//contadores
var quantFizz = 0;
var quantBuzz = 0;
var quantFizzBuzz = 0;

numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz")
        quantFizzBuzz++
    } else if (numero % 3 == 0){
        console.log("Fizz")
        quantFizz++
    } else if (numero % 5 == 0){
        console.log("Buzz")
        quantBuzz++
    } else {
        console.log(numero)
    }
})

console.log(`Quantidade de Fizz: ${quantFizz}`)
console.log(`Quantidade de Buzz: ${quantBuzz}`)
console.log(`Quantidade de FizzBuzz: ${quantFizzBuzz}`)

