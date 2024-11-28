import React from 'react'

const Multiplicacao = ({num1, num2}) => {
    const resultado = num1*num2
  return (
    <div>
        <h1>O resultado da Multiplicacao do numero {num1} vezes o numero {num2} é igual a {resultado}</h1>
    </div>
  )
}

export default Multiplicacao