import React from 'react'

const CParaF = ({celsius}) => {
    
    const fahr = (celsius*(9/5))+32



  return (
    <div>
        <h1>A conversão de {celsius}celsius para fahrenheit é de {fahr}</h1>
    </div>
  )
}

export default CParaF