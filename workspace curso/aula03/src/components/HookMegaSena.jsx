import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero(){
        if(numerosSorteados.length <6){
            let sorteado = Math.floor(Math.random() *60)+1
            setNumeroSorteado(sorteado)
            setNumerosSorteados([...numerosSorteados, sorteado])

        }else{
            alert("Ja temos 6 numeros sorteados")
        }
    }
    return(
        <div>
            <h1>Sorteador da mega em React</h1>
            <button onClick={sortearNumero}>Sortear numero</button>
            <h1>Utimo numero sorteado: {numeroSorteado}</h1>
            <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
        </div>
    )

}

export default HookMegaSena