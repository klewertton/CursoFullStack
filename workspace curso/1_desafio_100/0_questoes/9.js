//9 - Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".

for (let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else if(i % 3 ==0 && i % 5 ==0){
        console.log("FizzBuzz")
    } else{
        console.log(i)
    }
}
