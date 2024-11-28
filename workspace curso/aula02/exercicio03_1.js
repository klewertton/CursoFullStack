const temperatura = [25, 30, 15, 20]
const sorteio = temperatura[Math.floor(Math.random()*temperatura.length)]
const fahrenheit = (sorteio*9/5)+32


console.log(`A temperatura sorteada é ${sorteio}ºC, que corresponde a ${fahrenheit}ºF.`)