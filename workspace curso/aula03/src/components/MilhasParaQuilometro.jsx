import React from 'react'

const MilhasParaQuilometro = ({milhas}) => {
    const quilometros = milhas / 0.621371;
  return (
    <div>
        <h1>{milhas} milhas é o mesmo que {quilometros.toFixed(2)} quilometros.</h1>
    </div>
  )
}

export default MilhasParaQuilometro