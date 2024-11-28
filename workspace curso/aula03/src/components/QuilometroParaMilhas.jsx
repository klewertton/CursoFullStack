import React from 'react'

const QuilometroParaMilhas = ({quilometros}) => {
    const milhas = quilometros * 0.621371;
  return (
    <div>
        <h1>{quilometros} quilometos é o mesmo que {milhas.toFixed(2)} milhas.</h1>
    </div>
  )
}

export default QuilometroParaMilhas