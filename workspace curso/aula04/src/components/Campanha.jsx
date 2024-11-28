import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {
    function defineMensagem (mes) {
        if(mes === "setembro"){
            return "Prevenção so suicidio"
        } else if (mes === "outubro") {
            return "Conscientização sobre cancer de mama"
        } else if (mes === "novembro") {
            return "Prevenção e combate ao cancer de prostata"
        }
    }

    function defineCorDeFundo (mes) {
        if (mes === "setembro"){
            return styles.setembro
        } else if (mes === "outubro") {
            return styles.outubro
        } else if (mes === "novembro") {
            return styles.novembro
        }
    }


  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMensagem (props.mes)}
    </div>
  )
}

export default Campanha