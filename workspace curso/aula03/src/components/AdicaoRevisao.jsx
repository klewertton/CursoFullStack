import React from 'react'

const AdicaoRevisao = ({n1, n2}) => {
    const soma = n1 + n2

  return (
    <div>
        <h1>A soma de {n1} + {n2} é de {soma}</h1>
    </div>
  )
}

export default AdicaoRevisao