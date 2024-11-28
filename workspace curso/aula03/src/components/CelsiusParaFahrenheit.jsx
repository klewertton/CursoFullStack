import React from 'react'

const CelsiusParaFahrenheit = ({celsius}) => {
    const fahrenheit = (celsius * 9/5) + 32;
  return (
    <div>
        <h1>{celsius}ºC é o mesmo que {fahrenheit}ºF.</h1>
    </div>
  )
}

export default CelsiusParaFahrenheit