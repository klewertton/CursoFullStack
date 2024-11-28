import React from 'react'
import styles from './EstacaoAno.module.css'

const EstacaoAno = (props) => {
//     function defineTexto (estacao){
//         if (estacao === "verao") {
//             return "Tempo de praia e sol!"
//         } else if (estacao === "outono") {
//             return "Folhas caindo, outubro chegando!"
//         } else if (estacao === "inverno") {
//             return "Epoca de frio e aconchego!"
//         } else if (estacao === "primavera") {
//             return "Flores e cores, é primavera!"
//         }
//     }

//     function defineCor (estacao) {
//         if (estacao === "verao") {
//             return styles.verao
//         } else if (estacao === "outono") {
//             return styles.outono
//         } else if (estacao === "inverno") {
//             return styles.inverno
//         } else if (estacao === "primavera") {
//             return styles.primavera
//         }
//     }

function defineEstacaoInfo(estacao) {
    const info = {
        verao: {
            mensagem: "Tempo de praia e sol!",
            estilo: styles.verao,
        },
        outono: {
            mensagem: "Folhas caindo, outono chegando!",
            estilo: styles.outono,
        },
        inverno: {
            mensagem: "Época de frio e aconchego!",
            estilo: styles.inverno,
        },
        primavera: {
            mensagem: "Flores e cores, é primavera!",
            estilo: styles.primavera,
        },
    };

    return info[estacao] || { mensagem: "Estação desconhecida", estilo: styles.default };
}



//   return (
//     <div className={defineCor(props.estacao).es}>
//         <p>{defineTexto(props.estacao)}</p>
//     </div>
//   )

return (
    <div className={defineEstacaoInfo(props.estacao).estilo}>
      <p>{defineEstacaoInfo(props.estacao).mensagem}</p>
    </div>
);    


}

export default EstacaoAno