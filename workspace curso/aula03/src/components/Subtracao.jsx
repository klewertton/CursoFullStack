import React from 'react'

const Subtracao = ({num1, num2}) => {
    const resultado = num1-num2
  return (
    <div>
        <h1>O resultado da subtração do numero {num1} menos o numero {num2} é igual a {resultado}.</h1> 
    </div>
  )
}

export default Subtracao