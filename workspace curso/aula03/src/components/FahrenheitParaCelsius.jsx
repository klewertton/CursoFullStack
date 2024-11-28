import React from 'react'

const FahrenheitParaCelsius = ({fahrenheit}) => {
    const celsius = (fahrenheit - 32) * 5/9;
  return (
    <div>
        <h1>{fahrenheit}ºF é o mesmo que {celsius.toFixed(2)}ºC.</h1>
    </div>
  )
}

export default FahrenheitParaCelsius