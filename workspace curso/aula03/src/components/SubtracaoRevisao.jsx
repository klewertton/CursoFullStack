import React from 'react'

const SubtracaoRevisao = ({n1, n2}) => {
    const sub = n1 - n2


  return (
    <div>
        <h1>A subtração de {n1} - {n2} é igual a {sub}</h1>
    </div>
  )
}

export default SubtracaoRevisao