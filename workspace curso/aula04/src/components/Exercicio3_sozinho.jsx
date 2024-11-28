import React from 'react'

const Exercicio3_sozinho = () => {
    const isPrimary = false
    const isLarge = false
    function padraoCondicional () {
        if (isPrimary && isLarge) {
            return {
            color: '#0000ff',
            backgroundColor: '#ffc0cb',
            height: '300px',
            margin: '15px'
            }
        } else if ( isPrimary === true && isLarge === false) {
            return{
                color: '#ffffff',
                backgroundColor: '#008000',
                height: '200px',
                margin: '10px'
            }
        } else if (isPrimary === false && isLarge === true){
            return{
                color: '#000000',
                backgroundColor: '#ffff00',
                height: '300px',
                margin: '15px'
            }
        } else {
            return{
                color: '#000000',
                backgroundColor: '#808080',
                height: '150px',
                margin: '5px'
            }
        }

    }


//TESTANDO OUTRAS OPÇÕES DO EXERCICIO
    // const condicao = false
    // const padraoCondicional = condicao 
    // ?{
    //     color: '#0000ff',
    //     backgroundColor: '#ffc0cb',
    //     height: '300px',
    //     margin: '15px'
    // } : {
    //     color: '##000000',
    //     backgroundColor: '#ffffff',
    //     height: '250px',
    //     margin: '5px'
    // }


  return (
    <div style={padraoCondicional()}>
        Testando exericio 3 sozinho - condicão complexa
    </div>
  )
}

export default Exercicio3_sozinho